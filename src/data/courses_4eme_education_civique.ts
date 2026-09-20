import { ContentData, LessonContent } from './courses';

// =========================================================================
// PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
// MODÈLE SÉNÉGALAIS CONFORME AU PROGRAMME DU MINISTÈRE DE L’ÉDUCATION NATIONALE
// 8 Leçons intégrales et détaillées avec introductions, développements et conclusions
// =========================================================================

export const LESSON_1_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LES DROITS DE L’HOMME ET LES LIBERTÉS FONDAMENTALES',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Les droits de l’Homme représentent un ensemble de principes inaliénables et universels inhérents à chaque être humain, sans distinction de race, de sexe, de nationalité ou de religion. Reconnus et consacrés par des instruments juridiques mondiaux, africains et nationaux, ils constituent le socle indispensable d’une société juste et paisible.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 1 : LES DROITS DE L’HOMME ET LES LIBERTÉS FONDAMENTALES

I. LES ORIGINES ET LES TEXTES FONDATEURS DES DROITS DE L’HOMME
La conquête des droits de l’Homme s’est forgée au fil des siècles à travers les luttes des peuples contre la tyrannie et l’oppression :
- La Charte de Kouroukan Fouga (1236) : proclamée par Soundiata Keïta dans l’Empire du Mali, elle constitue l’une des plus anciennes déclarations des droits humains au monde, protégeant la vie, la dignité des femmes, l’interdiction de maltraiter les prisonniers et la justice sociale.
- La Déclaration des Droits de l’Homme et du Citoyen (1789).
- La Déclaration Universelle des Droits de l’Homme (DUDH) de 1948 : adoptée par l’ONU au lendemain des horreurs de la Seconde Guerre mondiale, proclamant dans son article 1er : "Tous les êtres humains naissent libres et égaux en dignité et en droits".
- La Charte Africaine des Droits de l’Homme et des Peuples (1981) : adoptée à Banjul sous l’égide de l’OUA/UA, qui allie droits individuels et droits collectifs des peuples au développement et à la paix.

II. LA TYPOLOGIE DES LIBERTÉS FONDAMENTALES
On distingue trois grandes catégories de droits et libertés :
1. Les libertés civiles et politiques (droits de première génération) : droit à la vie, liberté d’opinion et d’expression, liberté de culte, liberté de réunion pacifique, droit de vote et d’éligibilité.
2. Les droits économiques, sociaux et culturels (droits de deuxième génération) : droit à l’éducation gratuite, droit au travail et à un salaire équitable, droit à la santé, droit au logement et à la culture.
3. Les droits de solidarité (droits de troisième génération) : droit à un environnement sain, droit au développement économique et droit à la paix.

III. LES INSTRUMENTS DE PROTECTION AU SÉNÉGAL
La Constitution du Sénégal de 2001 consacre solennellement dans son Titre II les droits et libertés fondamentaux. Pour veiller à leur respect effectif, l’État a instauré des organes dédiés comme le Comité Sénégalais des Droits de l’Homme (CSDH) et le Médiateur de la République, épaulés par des ONG vigilantes (RADDHO, Amnesty Sénégal, Ligue Sénégalaise des Droits de l’Homme).`,
  sections: [
    {
      title: 'I. Les Textes Fondateurs Historiques et la Charte du Mandé',
      content: [
        'De la Charte de Kouroukan Fouga (1236) à la Déclaration Universelle de 1948, l’humanité a affirmé l’intangibilité de la dignité humaine.',
        'La Charte Africaine de Banjul (1981) enrichit cette vision universelle par les droits collectifs des peuples et les devoirs de solidarité.'
      ]
    },
    {
      title: 'II. Classification des Trois Générations de Droits et Libertés',
      content: [
        'Première génération : libertés civiles et politiques (liberté d’expression, vote, intégrité physique).',
        'Deuxième génération : droits socio-économiques (santé, travail, éducation garantie).',
        'Troisième génération : droits de solidarité universelle (environnement durable, paix).'
      ]
    },
    {
      title: 'III. Les Mécanismes de Protection des Droits au Sénégal',
      content: [
        'Le Conseil Constitutionnel, la justice et le Comité Sénégalais des Droits de l’Homme (CSDH) sanctionnent les atteintes aux libertés.',
        'La société civile sénégalaise (RADDHO, Amnesty International Sénégal) exerce une veille citoyenne permanente.'
      ]
    }
  ],
  conclusion: "Les droits de l’Homme ne sont jamais définitivement acquis : ils exigent une vigilance quotidienne et un engagement résolu de chaque citoyen pour faire reculer l’injustice et la discrimination."
};

export const LESSON_2_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LA DÉMOCRATIE ET L’ÉTAT DE DROIT AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Le mot démocratie vient du grec « demos » (le peuple) et « kratos » (le pouvoir) : c’est le gouvernement du peuple, par le peuple et pour le peuple. Au Sénégal, la démocratie est une tradition enracinée depuis les Quatre Communes (Saint-Louis, Gorée, Rufisque, Dakar) et perpétuée à travers des alternances pacifiques exemplaires qui font la fierté de notre nation.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 2 : LA DÉMOCRATIE ET L’ÉTAT DE DROIT AU SÉNÉGAL

I. LES PRINCIPES FONDAMENTAUX D’UN RÉGIME DÉMOCRATIQUE
Une véritable démocratie repose sur plusieurs piliers incontournables :
1. La souveraineté populaire : le pouvoir appartient au peuple qui l’exerce directement par référendum ou indirectement par l’intermédiaire de ses représentants élus au suffrage universel.
2. La séparation des trois pouvoirs : théor целеée par Montesquieu, elle interdit la concentration de l’autorité entre les mains d’un seul homme ou d’un seul corps (l’Exécutif gouverne, le Législatif vote les lois, le Judiciaire sanctionne en toute indépendance).
3. Le pluralisme politique et la liberté de la presse : reconnaissance de l’opposition, existence d’une presse libre et critique, débats d’idées sans censure.
4. L’alternance démocratique : possibilité constitutionnelle pour l’opposition d’accéder au pouvoir suprême par des élections libres, régulières et transparentes.

II. LA NOTION D’ÉTAT DE DROIT
L’État de droit est un système institutionnel dans lequel la puissance publique est soumise au droit. Il se caractérise par :
- La primauté de la loi : nul n’est au-dessus de la loi, du citoyen ordinaire au Président de la République.
- La hiérarchie des normes juridiques (la Constitution prévaut sur les traités, qui prévalent sur les lois, qui prévalent sur les décrets et arrêtés).
- L’égalité de tous devant la justice et la garantie d’un procès équitable avec présomption d’innocence.

III. L’EXPÉRIENCE DÉMOCRATIQUE SÉNÉGALAISE
Le Sénégal est l’un des rares pays africains à n’avoir jamais connu de coup d’État militaire depuis son accession à l’indépendance en 1960.
Les grandes étapes de l’enracinement démocratique :
- Le rétablissement du multipartisme intégral sous Léopold Sédar Senghor et Abdou Diouf (1981).
- Les alternances politiques pacifiques historiques de 2000 (Abdou Diouf passant le pouvoir à Abdoulaye Wade), de 2012 (Abdoulaye Wade passant le pouvoir à Macky Sall) et de 2024 (Macky Sall passant le pouvoir à Bassirou Diomaye Faye). Ces transitions pacifiques témoignent de la maturité civique exceptionnelle du peuple sénégalais.`,
  sections: [
    {
      title: 'I. Les Piliers Théoriques de la Démocratie',
      content: [
        'Souveraineté populaire, séparation stricte des pouvoirs et pluralisme politique définissent l’idéal démocratique.',
        'La minorité et l’opposition jouissent de droits protégés face à la majorité gouvernementale.'
      ]
    },
    {
      title: 'II. L’État de Droit et la Soumission de l’État à la Loi',
      content: [
        'L’État de droit impose la hiérarchie des normes juridiques et le contrôle de constitutionnalité.',
        'L’égalité de tous les justiciables devant les tribunaux garantit la protection contre l’arbitraire.'
      ]
    },
    {
      title: 'III. Le Modèle Sénégalais des Alternances Pacifiques',
      content: [
        'Le Sénégal s’illustre en Afrique par sa stabilité républicaine sans coup d’État.',
        'Les alternances pacifiques de 2000, 2012 et 2024 consacrent la solidité des institutions démocratiques sénégalaises.'
      ]
    }
  ],
  conclusion: "La démocratie sénégalaise est un bien commun précieux. Elle exige de chaque citoyen un respect constant des règles du jeu républicain, le rejet de toute violence verbale ou physique et l’amour de la patrie."
};

export const LESSON_3_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-3',
  number: 'LEÇON 3',
  title: 'LES PARTIS POLITIQUES ET LA SOCIÉTÉ CIVILE AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Dans une république démocratique, l’expression des opinions et la vitalité du débat public sont portées par deux acteurs fondamentaux : les partis politiques, qui visent la conquête et l’exercice du pouvoir d’État, et les organisations de la société civile, qui agissent comme des sentinelles désintéressées du bien public et des libertés démocratiques.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 3 : LES PARTIS POLITIQUES ET LA SOCIÉTÉ CIVILE AU SÉNÉGAL

I. LES PARTIS POLITIQUES : RÔLES ET FONCTIONS DANS LA RÉPUBLIQUE
1. Définition :
Un parti politique est une association de citoyens réunis autour d’une même idéologie (libéralisme, socialisme, social-démocratie, écologie, panafricanisme) et d’un projet de société partagé, dont l’objectif légitime est de conquérir le pouvoir démocratique par le suffrage universel et de gouverner.
2. Fonctions fondamentales des partis politiques :
- Concurrence électorale et animation de la vie politique (Article 4 de la Constitution du Sénégal).
- Encadrement civique et formation politique des militants.
- Élaboration de projets économiques et sociaux alternatifs.
- Sélection des candidats aux fonctions électives (députés, maires, Président de la République).
3. Obligations légales des partis au Sénégal :
- Respect de la Constitution, de la souveraineté nationale et de l’intégrité du territoire.
- Interdiction stricte de créer des partis politiques à caractère ethnique, religieux, régionaliste ou confrérique afin de préserver l’unité nationale sacrée.

II. LA SOCIÉTÉ CIVILE : LES SENTINELLES DU CITOYEN
1. Définition et composantes :
La société civile regroupe l’ensemble des organisations indépendantes du pouvoir d’État et des partis politiques qui œuvrent bénévolement pour l’intérêt général. Elle comprend :
- Les organisations de défense des droits de l’Homme et de la transparence (Forum Civil / Transparency International, RADDHO, Amnesty International Sénégal).
- Les syndicats de travailleurs.
- Les mouvements citoyens de jeunesse (ex : le mouvement "Y’en a marre").
- Les associations consuméristes (défense des consommateurs comme l’ASCOSEN).
- Les collectifs de femmes et associations de quartier.
2. Rôle d’alerte et de contre-pouvoir constructif :
La société civile ne cherche pas à conquérir le pouvoir politique. Son rôle est de surveiller la gouvernance, dénoncer les dérives financières ou autoritaires, observer la régularité des élections et servir de médiateur lors des crises sociopolitiques nationales.`,
  sections: [
    {
      title: 'I. Rôle des Partis Politiques dans l’Animation Républicaine',
      content: [
        'Les partis politiques concourent à l’expression du suffrage et à la formation civique des citoyens.',
        'La loi sénégalaise proscrit formellement les partis à base ethnique ou confessionnelle pour garantir l’unité nationale.'
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
  introduction: "Le vote est l’acte républicain par excellence à travers lequel chaque citoyen exerce sa part de souveraineté nationale pour choisir librement ses dirigeants. Au Sénégal, l’organisation des élections obéit à un Code Électoral rigoureux encadré par des structures administratives et indépendantes afin de garantir la sincérité, la transparence et la régularité des scrutins.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 4 : LE PROCESSUS ÉLECTORAL ET LE DROIT DE VOTE AU SÉNÉGAL

I. LE DROIT DE VOTE : UN DROIT FONDAMENTAL ET UN DEVOIR CIVIQUE
1. Les conditions pour être électeur au Sénégal :
- Être de nationalité sénégalaise.
- Être âgé de 18 ans révolus au jour du scrutin.
- Jouir de ses droits civils et politiques (ne pas avoir été condamné à une peine d’inéligibilité).
- Être régulièrement inscrit sur les listes électorales et posséder la Carte Nationale d’Identité biométrique CEDEAO faisant office de carte d’électeur.
2. Les caractères du suffrage :
Le suffrage est universel (ouvert à tous sans distinction de fortune ou de sexe), égal (un citoyen = une voix) et secret (garanti par le passage obligatoire dans l’isoloir).

II. LES ACTEURS DU PROCESSUS ÉLECTORAL
1. La DGE (Direction Générale des Élections) : relevant du Ministère de l’Intérieur, elle s’occupe de l’organisation matérielle, de l’impression des bulletins et de la logistique électorale.
2. La CENA (Commission Électorale Nationale Autonome) : organe indépendant permanent composé de personnalités neutres. Elle contrôle et supervise l’ensemble des opérations électorales, de l’inscription sur les listes jusqu’à la proclamation provisoire des résultats, et veille à l’égalité de traitement des candidats.
3. Le CNRA (Conseil National de Régulation de l’Audiovisuel) : garantit l’accès équitable de tous les candidats aux médias publics (RTS) pendant la campagne officielle.
4. Les juridictions de validation : le Conseil Constitutionnel (proclame les résultats définitifs de l’élection présidentielle et des référendums) et les Cours d’Appel (pour les élections législatives et locales).

III. LES ÉTAPES DU DÉROULEMENT DU SCRUTIN DANS LE BUREAU DE VOTE
Le jour du vote, le bureau est présidé par un président assisté de deux assesseurs et d’un secrétaire, sous le regard des délégués de candidats et d’observateurs indépendants :
1. Vérification de l’identité et de l’inscription sur la liste d’émargement.
2. Prise d’une enveloppe et des bulletins de chaque candidat (obligatoire pour préserver le secret).
3. Passage obligatoire dans l’Isoloir fermé pour introduire un seul bulletin dans l’enveloppe.
4. Dépôt de l’enveloppe dans l’urne transparente sous la formule : "A voté !".
5. Émargement de la liste électorale et trempage de l’index gauche dans l’encre indélébile pour empêcher tout vote multiple frauduleux.
6. Dépouillement public et contradictoire des bulletins dès la clôture du scrutin à 18 heures.`,
  sections: [
    {
      title: 'I. Le Statut d’Électeur et les Caractéristiques du Suffrage',
      content: [
        'Tout citoyen sénégalais âgé de 18 ans et inscrit sur les listes jouit du droit de vote.',
        'Le suffrage universel, égal et secret garantit l’expression souveraine de la volonté populaire.'
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
        'Du passage dans l’isoloir au trempage du doigt dans l’encre indélébile jusqu’au dépouillement public, chaque étape sécurise le vote.'
      ]
    }
  ],
  conclusion: "Voter n’est pas seulement un droit démocratique inaliénable, c’est un devoir civique sacré pour participer activement au destin politique et économique du Sénégal."
};

export const LESSON_5_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LES SYMBOLES DE LA RÉPUBLIQUE ET LA NATION SÉNÉGALAISE',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Les symboles de la République incarnent l’identité nationale, l’histoire partagée, les valeurs républicaines et l’idéal de concorde du peuple sénégalais. Définis par la Constitution, ces emblèmes sacrés méritent le respect absolu de chaque citoyen et manifestent la souveraineté du Sénégal sur la scène internationale.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 5 : LES SYMBOLES DE LA RÉPUBLIQUE ET LA NATION SÉNÉGALAISE

I. LE DRAPEAU NATIONAL DU SÉNÉGAL
Adopté en 1960 au moment de l’indépendance, le drapeau du Sénégal est composé de trois bandes verticales d’égales dimensions aux couleurs panafricaines, frappé en son centre d’une étoile verte à cinq branches :
- Le Vert : symbolise l’espérance, la fécondité de la terre agricole et, pour les croyants musulmans et chrétiens, la couleur spirituelle de l’élévation et de la paix.
- Le Jaune (Or) : symbolise la richesse du pays issue du travail courageux de ses enfants, les sables du pays et la lumière bienveillante de la vérité.
- Le Rouge : symbolise le sang des ancêtres et des tirailleurs versé pour la libération nationale, ainsi que l’ardeur combative pour le développement.
- L’Étoile verte à 5 branches : symbolise l’ouverture du Sénégal aux cinq continents et l’idéal d’élévation morale de la nation.

II. L’HYMNE NATIONAL : « PINCEZ TOUS VOS KORAS, FRAPPEZ LES BALAFONS »
Écrit par le poète-président Léopold Sédar Senghor et composé par le musicien français Herbert Pepper :
- C’est un chant patriotique vibrant appelant à l’union fraternelle, au dépassement des rancœurs du passé et à la défense vaillante de la patrie sous la devise sacrée : "Le Lion rouge a rugi".
- Lors de l’exécution de l’hymne national ou de la montée des couleurs, tout citoyen doit immédiatement s’arrêter, se mettre au garde-à-vous immobile, retirer son couvre-chef et témoigner un profond recueillement.

III. LA DEVISE, LE SCEAU ET LES ARMOIRIES DE LA RÉPUBLIQUE
1. La Devise nationale : « Un Peuple - Un But - Une Foi » :
- Un Peuple : l’affirmation que malgré la diversité de nos ethnies (Wolofs, Sérères, Pulaar, Diolas, Mandingues, Soninkés, Manjaks), nous formons une seule nation unie et indivisible.
- Un But : l’effort collectif concerté vers le progrès économique et social partagé.
- Une Foi : la croyance inébranlable en notre avenir commun et la confiance en notre destin souverain.
2. Le Sceau de l’État :
Gravé sur les actes officiels de la République, il représente un lion passant et un baobab stylisé.
3. Les Armoiries :
Un écu divisé en deux parties : à gauche le lion rouge rampant (symbole du courage et de la force) et à droite le baobab majestueux (symbole de la pérennité, de la générosité nourricière et de l’arbre à palabre africain), entouré par la palme et la devise nationale.`,
  sections: [
    {
      title: 'I. Le Drapeau Tricolore et l’Étoile à Cinq Branches',
      content: [
        'Les trois bandes vert, jaune et rouge et l’étoile verte portent les espérances du peuple et le souvenir des sacrifices pour l’indépendance.',
        'Le respect du drapeau lors des levées de couleurs est l’attitude civique fondamentale attendue de tout élève sénégalais.'
      ]
    },
    {
      title: 'II. L’Hymne National et la Devise « Un Peuple - Un But - Une Foi »',
      content: [
        'L’hymne de Senghor célèbre le courage légendaire du "Lion rouge" et la fraternité universelle.',
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
  conclusion: "Honorer les symboles de la République, c’est rendre hommage à l’histoire du Sénégal et renouveler notre serment collectif de fraternité et de patriotisme."
};

export const LESSON_6_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LE RESPECT DES BIENS PUBLICS ET LE CIVISME FISCAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Les biens publics (écoles, hôpitaux, routes, autobus, lampadaires) appartiennent à l’ensemble de la collectivité nationale et sont financés par les impôts de tous les contribuables. Pourtant, l’incivisme, les dégradations lors de manifestations et la fraude fiscale portent un préjudice immense au développement de notre pays. Cultiver le civisme fiscal et le respect du bien commun est un impératif patriotique.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 6 : LE RESPECT DES BIENS PUBLICS ET LE CIVISME FISCAL

I. LES BIENS PUBLICS : PROPRIÉTÉ COMMUNE DE LA NATION
1. Définition et typologie :
Un bien public est un bien ou un service accessible à tous les membres de la société sans exclusion, géré ou mis à disposition par l’État ou les collectivités territoriales :
- Les infrastructures de transport : routes bitumées, autoroutes à péage, TER, BRT, ponts, trottoirs.
- Les édifices et équipements sociaux : collèges, lycées, universités, hôpitaux, maternités, postes de police.
- Les biens environnementaux : espaces verts, plages, forêts classées.
2. Les méfaits de l’incivisme et du vandalisme :
La destruction volontaire des biens publics (brûler des autobus ou des pneus sur le bitume lors d’émeutes, saccager du matériel scolaire ou voler des lampadaires solaires) constitue un crime contre la communauté nationale : cela appauvrit l’État, détériore le cadre de vie et oblige à consacrer des milliards de francs CFA à des réparations au détriment de la construction de nouvelles écoles ou d’hôpitaux.

II. LE CIVISME FISCAL ET LE RÔLE CAPITAL DE L’IMPÔT
1. Pourquoi payer l’impôt ?
L’impôt est une contribution financière obligatoire prélevée par l’État sur les revenus des citoyens et les bénéfices des entreprises pour financer les charges publiques.
Sans impôts, l’État ne peut :
- Ni payer les salaires des enseignants, des médecins et des forces de défense et de sécurité.
- Ni construire et équiper les salles de classe, les forages d’eau en milieu rural ou les postes de santé.
- Ni assurer la gratuité de soins vitaux (plan Sésame pour les personnes âgées, gratuité des césariennes).
2. Devoir constitutionnel et justice fiscale :
L’article 24 de la Constitution dispose que tout citoyen a le devoir de s’acquitter de ses obligations fiscales proportionnellement à ses capacités économiques.
La lutte contre la fraude fiscale, le travail dissimulé et la corruption est indispensable pour que chacun contribue équitablement à la solidarité nationale.`,
  sections: [
    {
      title: 'I. La Nature Sacrée des Biens Publics et le Coût du Vandalisme',
      content: [
        'Les biens publics sont le patrimoine partagé de tous les Sénégalais financé par l’effort national.',
        'Détruire un édifice public ou un bus de transport pénalise d’abord les usagers les plus démunis.'
      ]
    },
    {
      title: 'II. L’Impôt : Ciment du Développement et Obligation Civique',
      content: [
        'Le civisme fiscal permet à l’État de construire des routes, financer l’éducation et garantir la sécurité nationale.',
        'La transparence et la reddition des comptes renforcent le consentement des citoyens à l’impôt.'
      ]
    }
  ],
  conclusion: "Le respect scrupuleux des biens publics et le paiement loyal des impôts sont les marques tangibles d’un citoyen moderne et dévoué au rayonnement économique du Sénégal."
};

export const LESSON_7_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LE TRAVAIL, LES SYNDICATS ET LES DROITS DES TRAVAILLEURS',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Le travail est la source de toute richesse humaine, un facteur d’épanouissement personnel et un moteur fondamental du développement économique d’une nation. Au Sénégal, les relations professionnelles sont régies par le Code du Travail qui garantit les droits fondamentaux des salariés, encadre le dialogue social à travers les syndicats et préserve la paix sociale indispensable à la production.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 7 : LE TRAVAIL, LES SYNDICATS ET LES DROITS DES TRAVAILLEURS

I. LA VALEUR DU TRAVAIL ET LE CODE DU TRAVAIL SÉNÉGALAIS
Le travail est à la fois un droit constitutionnel et un devoir civique pour chaque citoyen en âge de travailler.
Le Code du Travail fixe les règles équitables régissant l’emploi :
- L’interdiction absolue du travail forcé et du travail des enfants de moins de 15 ans.
- La durée légale du travail fixée à 40 heures par semaine dans les entreprises non agricoles.
- Le salaire minimum interprofessionnel garanti (SMIG) protégeant les travailleurs contre la sous-rémunération.
- Le repos hebdomadaire obligatoire, les congés payés annuels et les congés de maternité indemnisés pour les femmes salariées.
- La protection de la santé et de la sécurité des travailleurs sur les lieux d’activité (équipements de protection individuelle).

II. LES SYNDICATS DE TRAVAILLEURS ET LE DIALOGUE SOCIAL
1. Qu’est-ce qu’un syndicat ?
Un syndicat est une association de travailleurs (ou d’employeurs) libres s’unissant pour défendre leurs intérêts matériels, moraux et professionnels communs.
Au Sénégal, la liberté syndicale est garantie par la Constitution. Les grandes centrales syndicales sénégalaises (CNTS, UNSAS, CSA, FGTS, UDTS) et les syndicats d’enseignants (CUSEMS, SAEMSS, UDEN) jouent un rôle majeur dans la négociation collective.
2. Le droit de grève et ses limites légales :
La grève est la cessation collective et concertée du travail décidée par les salariés pour appuyer des revendications professionnelles.
La loi encadre rigoureusement ce droit :
- Dépôt préalable d’un préavis de grève obligatoire (délai de 30 jours au Sénégal) pour favoriser la négociation avec l’employeur ou le gouvernement.
- Instauration d’un Service Minimum obligatoire dans les secteurs d’utilité publique vitale (santé, eau, électricité, sécurité) afin de ne pas mettre en péril la vie des populations.`,
  sections: [
    {
      title: 'I. Les Droits Fondamentaux des Travailleurs et le SMIG',
      content: [
        'Le Code du Travail sénégalais prohibe le travail des enfants et garantit la protection sociale et la sécurité.',
        'La limitation des heures de travail et les congés payés protègent l’intégrité physique du salarié.'
      ]
    },
    {
      title: 'II. Rôle des Centrales Syndicales et Encadrement du Droit de Grève',
      content: [
        'Les syndicats négocient les conventions collectives et défendent le pouvoir d’achat des travailleurs.',
        'Le préavis de grève et le service minimum préservent l’équilibre entre droit de revendication et continuité des services vitaux.'
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
  introduction: "La jeunesse représente plus de 60 % de la population sénégalaise : elle est la force vive, l’espérance et l’avenir de la nation. Cependant, cette jeunesse est aujourd’hui confrontée à de multiples dangers qui menacent sa santé physique, son avenir scolaire et son équilibre moral : consommation de drogues et d’alcool, délinquance, grossesses précoces en milieu scolaire et violences. La préservation de la jeunesse exige une prise de conscience individuelle et une mobilisation collective.",
  fullText: `PROGRAMME D’ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 8 : LA PROTECTION DE LA JEUNESSE ET LA LUTTE CONTRE LES FLÉAUX SOCIAUX

I. LES PRINCIPAUX FLÉAUX MENAÇANT LA JEUNESSE AU SÉNÉGAL
1. La drogue et le tabagisme :
- Consommation croissante de cannabis (yamba), de chicha, de tramadol et de nouvelles substances synthétiques illicites.
- Conséquences dramatiques : destruction irréversible des neurones cérébraux, troubles mentaux et psychotiques, déscolarisation immédiate, marginalisation et passage à la délinquance pour financer l’addiction.
2. La délinquance juvénile et l’agressivité :
Vols à l’arraché, agressions nocturnes, port d’armes blanches (couteaux). Ces dérives mènent les mineurs tout droit vers les centres de redressement pénitentiaire et détruisent leur avenir.
3. Les grossesses précoces et mariages d’enfants en milieu scolaire :
Phénomène préoccupant qui interrompt brutalement la scolarité des jeunes filles, met en péril leur santé lors d’accouchements difficiles et brise leurs chances d’émancipation professionnelle.
4. Les dérives d’Internet et des réseaux sociaux (Cybercriminalité) :
Harcèlement en ligne, diffusion de vidéos intimes sans consentement, arnaques numériques et dépendance addictive aux écrans.

II. STRATÉGIES DE LUTTE ET CONDUITE CIVIQUE DE L’ÉLÈVE
1. Rôle de la famille et de l’école :
- L’éducation familiale basée sur le dialogue, la tendresse et la transmission des valeurs de "Kersa" (retenue/pudeur) et de "Jom" (dignité).
- L’école comme sanctuaire de savoir, d’éthique et de réussite méritocratique.
2. Les structures d’assistance et la loi :
- Les Centres d’Accueil et d’Éducation Surveillée (AEMO) pour les mineurs en difficulté.
- La sévérité des lois réprimant le trafic de stupéfiants et le viol criminalisé par la loi de 2020.
3. L’attitude responsable de l’élève de 4ème :
Savoir dire NON aux mauvaises fréquentations, pratiquer une activité sportive saine au sein des ASC ou clubs scolaires, et cultiver l’ambition d’exceller dans ses études pour honorer sa famille et servir la patrie.`,
  sections: [
    {
      title: 'I. Les Dangers de la Toxicomanie et de la Délinquance',
      content: [
        'La drogue et l’alcool détruisent la santé mentale et mènent à la rupture scolaire et sociale.',
        'La délinquance juvénile enferme les adolescents dans la spirale carcérale.'
      ]
    },
    {
      title: 'II. Grossesses Précoces et Cyberharcèlement',
      content: [
        'Les grossesses précoces pénalisent lourdement la scolarisation des filles.',
        'L’usage responsable et éthique des réseaux sociaux évite les dérives du cyberharcèlement.'
      ]
    },
    {
      title: 'III. Les Valeurs de « Jom » et d’Excellence Scolaire',
      content: [
        'S’armer de courage moral (Jom) et de pudeur (Kersa) pour refuser les comportements déviants.',
        'Faire du sport et des études les moteurs essentiels de l’épanouissement personnel.'
      ]
    }
  ],
  conclusion: "Protéger la jeunesse, c’est protéger le futur du Sénégal. Chaque élève doit prendre conscience de sa valeur unique et refuser de compromettre son avenir au contact des drogues et de l’incivisme."
};

export const COURSES_EDUCATION_CIVIQUE_4EME: ContentData[] = [
  {
    id: 'civique-4eme-lecon-1',
    title: 'LEÇON 1 : LES DROITS DE L’HOMME ET LES LIBERTÉS FONDAMENTALES',
    type: 'cours',
    badge: 'Partie 1 • Droits, Démocratie & Citoyenneté',
    description: 'Charte de Kouroukan Fouga (1236), DUDH de 1948, Charte africaine de Banjul (1981), les trois générations de droits et les mécanismes de protection au Sénégal (CSDH, justice).',
    lessonData: LESSON_1_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-2',
    title: 'LEÇON 2 : LA DÉMOCRATIE ET L’ÉTAT DE DROIT AU SÉNÉGAL',
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
    description: 'Patrimoine public national (TER, écoles, hôpitaux), condamnation des destructions et vandalisme, importance de l’impôt républicain pour le financement des services sociaux.',
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

export const CIVIQUE_4EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons (4ème)', count: 8 },
  { id: 'part-1', label: '1ère Partie : Droits & Libertés', count: 3 },
  { id: 'part-2', label: '2ème Partie : Institutions & Élections', count: 2 },
  { id: 'part-3', label: '3ème Partie : Bien Commun & Jeunesse', count: 3 }
];

