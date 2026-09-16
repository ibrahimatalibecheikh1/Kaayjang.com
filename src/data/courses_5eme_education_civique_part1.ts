import { LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 5ÈME (MODÈLE SÉNÉGALAIS)
// PREMIÈRE PARTIE : LE CITOYEN, SES DROITS, SES DEVOIRS ET LES INSTITUTIONS
// Leçons 1, 2, 3 - Cours complets avec Introductions et Conclusions (Sans résumés)
// =========================================================================

// --- LEÇON 1 : LA CITOYENNETÉ, LE CIVISME ET LA PARTICIPATION À LA VIE DÉMOCRATIQUE ---
export const LESSON_1_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LA CITOYENNETÉ, LE CIVISME ET LA PARTICIPATION À LA VIE DÉMOCRATIQUE',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `La citoyenneté au Sénégal confère à chaque individu des droits civils et politiques garantis par la Constitution, tout en lui imposant des devoirs envers la nation. Dès l'adolescence, l'apprentissage de la démocratie et du civisme se fait à travers des actions concrètes. Comprendre comment participer à la vie de sa communauté et de son établissement scolaire est essentiel pour former les citoyens responsables de demain.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

PREMIÈRE PARTIE : LE CITOYEN, SES DROITS, SES DEVOIRS ET LES INSTITUTIONS

LEÇON 1 : La citoyenneté, le civisme et la participation à la vie démocratique

Introduction
La citoyenneté au Sénégal confère à chaque individu des droits civils et politiques garantis par la Constitution, tout en lui imposant des devoirs envers la nation. Dès l'adolescence, l'apprentissage de la démocratie et du civisme se fait à travers des actions concrètes. Comprendre comment participer à la vie de sa communauté et de son établissement scolaire est essentiel pour former les citoyens responsables de demain.

Développement
Au Sénégal, la citoyenneté ne commence pas à la majorité électorale de 18 ans. Elle se vit au quotidien dès le collège à travers le civisme, qui est le respect des lois, des institutions et des biens publics.

Dans l'espace scolaire, cet apprentissage se matérialise par l'élection et le fonctionnement du Gouvernement Scolaire. Ce processus reproduit fidèlement le modèle démocratique national : campagne électorale, présentation des programmes par les listes de candidats, vote à bulletin secret et proclamation des résultats. Le président du gouvernement scolaire et ses ministres deviennent les interlocuteurs directs de l'administration du collège (Principal, surveillants) pour améliorer les conditions d'étude et organiser les activités culturelles et sportives.

Au niveau local, la participation des jeunes s'exprime à travers les Associations Sportives et Culturelles (ASC) dans les quartiers. Ces structures ne se limitent pas aux championnats de football appelés "Navétanes" ; elles jouent un rôle crucial dans le développement communautaire. Les jeunes s'y engagent bénévolement pour mener des opérations de salubrité publique, historiquement connues sous le nom de "Set-Setal", ou pour participer à des campagnes de reboisement et de sensibilisation sanitaire. Cet engagement forge la solidarité et le sens des responsabilités collectives.

Conclusion
La citoyenneté et le civisme sont des pratiques dynamiques au Sénégal. En s'impliquant activement dans le gouvernement scolaire ou dans les activités de leur quartier, les élèves de 5ème s'approprient les valeurs démocratiques et participent directement au développement de leur pays.`,
  sections: [
    {
      title: 'I. La citoyenneté et le civisme au quotidien',
      content: [
        `Au Sénégal, la citoyenneté ne commence pas à la majorité électorale de 18 ans. Elle se vit au quotidien dès le collège à travers le civisme, qui est le respect des lois, des institutions et des biens publics.`,
        `Le citoyen est un membre d'une communauté politique souveraine qui bénéficie de droits fondamentaux tout en observant des devoirs envers la société : respect du bien commun, préservation de l'ordre public et participation active à la vie civique.`
      ]
    },
    {
      title: 'II. L\'apprentissage de la démocratie dans l\'espace scolaire : Le Gouvernement Scolaire',
      content: [
        `Dans l'espace scolaire, cet apprentissage se matérialise par l'élection et le fonctionnement du Gouvernement Scolaire. Ce processus reproduit fidèlement le modèle démocratique national :`,
        `• Campagne électorale : affichage, débats contradictoires et présentation des programmes par les listes de candidats.`,
        `• Scrutin démocratique : vote à bulletin secret dans des isoloirs et proclamation publique et transparente des résultats.`,
        `• Rôle des élus : Le président du gouvernement scolaire et ses ministres deviennent les interlocuteurs directs de l'administration du collège (Principal, surveillants) pour améliorer les conditions d'étude et organiser les activités culturelles et sportives.`
      ]
    },
    {
      title: 'III. La participation locale des jeunes : Les ASC et le développement communautaire',
      content: [
        `Au niveau local, la participation des jeunes s'exprime à travers les Associations Sportives et Culturelles (ASC) dans les quartiers.`,
        `Ces structures ne se limitent pas aux championnats de football appelés "Navétanes" ; elles jouent un rôle crucial dans le développement communautaire.`,
        `Les jeunes s'y engagent bénévolement pour mener des opérations de salubrité publique, historiquement connues sous le nom de "Set-Setal", ou pour participer à des campagnes de reboisement et de sensibilisation sanitaire. Cet engagement forge la solidarité et le sens des responsabilités collectives.`
      ]
    }
  ],
  diagram: {
    title: 'La citoyenneté et l\'engagement en 5ème',
    root: 'CITOYENNETÉ & CIVISME',
    branches: [
      {
        name: 'Au Collège : Gouvernement Scolaire',
        subtitle: 'Apprentissage démocratique',
        items: [
          'Campagne électorale & listes de candidats',
          'Vote à bulletin secret & urnes',
          'Président et ministres élèves élus',
          'Interlocuteurs directs de l\'administration'
        ]
      },
      {
        name: 'Au Quartier : ASC & Navétanes',
        subtitle: 'Développement communautaire',
        items: [
          'Championnats sportifs populaires',
          'Journées de salubrité « Set-Setal »',
          'Campagnes de reboisement citoyen',
          'Sensibilisation sanitaire et solidarité'
        ]
      },
      {
        name: 'Valeurs Civiques Fondamentales',
        subtitle: 'Droits et devoirs républicains',
        items: [
          'Respect des lois et des biens publics',
          'Tolérance et vivre-ensemble pacifique',
          'Solidarité et bénévolat actif',
          'Préparation au vote citoyen à 18 ans'
        ]
      }
    ]
  },
  conclusion: `La citoyenneté et le civisme sont des pratiques dynamiques au Sénégal. En s'impliquant activement dans le gouvernement scolaire ou dans les activités de leur quartier, les élèves de 5ème s'approprient les valeurs démocratiques et participent directement au développement de leur pays.`
};

// --- LEÇON 2 : LES DROITS DE L'ENFANT ET LEUR PROTECTION AU SÉNÉGAL ---
export const LESSON_2_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LES DROITS DE L\'ENFANT ET LEUR PROTECTION AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `Les enfants représentent l'avenir de la nation sénégalaise, mais ils forment aussi une couche vulnérable nécessitant une protection juridique particulière. Pour garantir leur croissance, leur éducation et leur intégrité, le Sénégal a ratifié plusieurs textes internationaux et mis en place des lois nationales. Analyser ces droits permet de comprendre les mécanismes de protection de la jeunesse en vigueur dans le pays.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

PREMIÈRE PARTIE : LE CITOYEN, SES DROITS, SES DEVOIRS ET LES INSTITUTIONS

LEÇON 2 : Les droits de l'enfant et leur protection au Sénégal

Introduction
Les enfants représentent l'avenir de la nation sénégalaise, mais ils forment aussi une couche vulnérable nécessitant une protection juridique particulière. Pour garantir leur croissance, leur éducation et leur intégrité, le Sénégal a ratifié plusieurs textes internationaux et mis en place des lois nationales. Analyser ces droits permet de comprendre les mécanismes de protection de la jeunesse en vigueur dans le pays.

Développement
Le cadre juridique des droits de l'enfant repose sur deux textes internationaux majeurs ratifiés par le Sénégal : la Convention Internationale des Droits de l'Enfant (CIDE) de l'ONU adoptée en 1989, et la Charte Africaine des Droits et du Bien-être de l'Enfant (CADBE) adoptée en 1990. Ces textes stipulent que l'intérêt supérieur de l'enfant doit être la priorité dans toutes les décisions.

Ces droits fondamentaux s'organisent autour de quatre piliers :
• Le droit à la vie et à la santé : Chaque enfant sénégalais doit bénéficier de soins médicaux, de vaccins gratuits et d'une alimentation adéquate.
• Le droit à l'éducation : Au Sénégal, la loi rend l'instruction obligatoire et gratuite pour tous les enfants âgés de 6 à 16 ans, garantissant l'accès à l'école élémentaire et au collège sans distinction de genre.
• Le droit à la protection : L'État interdit formellement les violences physiques ou morales, l'exploitation économique (comme la mendicité forcée ou le travail précoce dans les marchés et les champs) et les pratiques néfastes comme le mariage des enfants.
• Le droit à l'identité : Tout enfant doit être enregistré à la naissance pour obtenir une existence légale.

Malgré ce cadre, des défis persistent au Sénégal, notamment la situation des enfants de la rue ou en rupture familiale. L'État, aidé par des ONG et des structures comme la Direction de la Protection des Droits de l'Enfant (DPDE), travaille à renforcer les structures d'accueil et d'insertion pour offrir à chaque jeune un environnement sécurisé.

Conclusion
La protection des droits de l'enfant est un devoir républicain et familial au Sénégal. Le respect de ces droits est la condition indispensable pour permettre à la jeunesse de s'épanouir et de contribuer efficacement, à l'âge adulte, à l'émergence économique et sociale de la nation.`,
  sections: [
    {
      title: 'I. Le cadre juridique international et national',
      content: [
        `Le cadre juridique des droits de l'enfant repose sur deux textes internationaux majeurs ratifiés par le Sénégal :`,
        `1. La Convention Internationale des Droits de l'Enfant (CIDE) adoptée par l'Assemblée générale de l'ONU en 1989.`,
        `2. La Charte Africaine des Droits et du Bien-être de l'Enfant (CADBE) adoptée en 1990 par l'Union Africaine.`,
        `Ces instruments juridiques fondamentaux consacrent le principe central selon lequel « l'intérêt supérieur de l'enfant » doit primer dans toutes les décisions prises par les familles, les tribunaux et les autorités publiques.`
      ]
    },
    {
      title: 'II. Les quatre piliers des droits fondamentaux de l\'enfant',
      content: [
        `Ces droits fondamentaux reconnus à chaque jeune citoyen s'organisent autour de quatre grands piliers :`,
        `• Le droit à la vie et à la santé : Chaque enfant sénégalais doit bénéficier de soins médicaux de qualité, du calendrier vaccinal obligatoire et gratuit (PEV), et d'une alimentation saine et suffisante.`,
        `• Le droit à l'éducation : Au Sénégal, la loi rend l'instruction obligatoire et gratuite pour tous les enfants âgés de 6 à 16 ans, garantissant l'accès universel à l'école élémentaire et au collège, avec une équité stricte entre filles et garçons.`,
        `• Le droit à la protection : L'État interdit formellement les violences physiques ou morales, les châtiments corporels, l'exploitation économique (telle que la mendicité forcée ou le travail précoce dans les marchés, ateliers et champs) ainsi que les pratiques néfastes comme le mariage précoce des enfants.`,
        `• Le droit à l'identité : Tout enfant doit obligatoirement être déclaré et enregistré à la naissance auprès du centre d'état civil pour posséder un nom, un prénom, une nationalité et une existence juridique reconnue.`
      ]
    },
    {
      title: 'III. Défis persistants et dispositifs de protection au Sénégal',
      content: [
        `Malgré ce cadre juridique rigoureux, des défis sociaux subsistent au Sénégal, particulièrement la vulnérabilité des enfants de la rue, les enfants talibés en errance et les mineurs en rupture familiale.`,
        `Face à ces enjeux, l'État sénégalais déploie des structures spécialisées, notamment la Direction de la Protection des Droits de l'Enfant (DPDE), en partenariat avec les ONG nationales et internationales, afin de renforcer les centres de premier accueil, le retrait des enfants de la rue et les programmes d'insertion scolaire et professionnelle.`
      ]
    }
  ],
  diagram: {
    title: 'Les quatre piliers des droits de l\'enfant au Sénégal',
    root: 'DROITS DE L\'ENFANT',
    branches: [
      {
        name: 'Droit à la vie & à la santé',
        subtitle: 'Survie et bien-être',
        items: [
          'Soins médicaux accessibles',
          'Vaccination gratuite (programme PEV)',
          'Alimentation saine et équilibrée',
          'Cadre de vie salubre et protecteur'
        ]
      },
      {
        name: 'Droit à l\'éducation',
        subtitle: 'Instruction obligatoire (6-16 ans)',
        items: [
          'École élémentaire et collège gratuits',
          'Égalité d\'accès filles et garçons',
          'Matériel didactique et cantines',
          'Formation aux compétences de base'
        ]
      },
      {
        name: 'Droit à la protection',
        subtitle: 'Sécurité physique et morale',
        items: [
          'Interdiction de la mendicité forcée',
          'Lutte contre le travail précoce',
          'Interdiction du mariage des enfants',
          'Rôle de la DPDE et des tribunaux'
        ]
      },
      {
        name: 'Droit à l\'identité',
        subtitle: 'Existence légale du citoyen',
        items: [
          'Déclaration obligatoire à l\'état civil',
          'Obtention de l\'acte de naissance',
          'Droit à un nom et un prénom',
          'Nationalité sénégalaise reconnue'
        ]
      }
    ]
  },
  conclusion: `La protection des droits de l'enfant est un devoir républicain et familial au Sénégal. Le respect de ces droits est la condition indispensable pour permettre à la jeunesse de s'épanouir et de contribuer efficacement, à l'âge adulte, à l'émergence économique et sociale de la nation.`
};

// --- LEÇON 3 : L'ORGANISATION DE L'ÉTAT ET LES GRANDES INSTITUTIONS DE LA RÉPUBLIQUE ---
export const LESSON_3_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-3',
  number: 'LEÇON 3',
  title: 'L\'ORGANISATION DE L\'ÉTAT ET LES GRANDES INSTITUTIONS DE LA RÉPUBLIQUE',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `Le Sénégal est une république démocratique, laïque et sociale. Pour fonctionner de manière juste et transparente, l'État sénégalais s'organise selon le principe de la séparation des pouvoirs, théorisé pour éviter la tyrannie. Cette leçon étudie la structure de l'État sénégalais à travers ses grandes institutions politiques et juridiques.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

PREMIÈRE PARTIE : LE CITOYEN, SES DROITS, SES DEVOIRS ET LES INSTITUTIONS

LEÇON 3 : L'organisation de l'État et les grandes institutions de la République

Introduction
Le Sénégal est une république démocratique, laïque et sociale. Pour fonctionner de manière juste et transparente, l'État sénégalais s'organise selon le principe de la séparation des pouvoirs, théorisé pour éviter la tyrannie. Cette leçon étudie la structure de l'État sénégalais à travers ses grandes institutions politiques et juridiques.

Développement
L'État sénégalais est structuré autour de trois pouvoirs distincts et indépendants qui collaborent pour la gestion du pays :

Le Pouvoir Exécutif : Il est incarné par le Président de la République, qui est le Chef de l'État, garant de la Constitution et de l'unité nationale. Élu au suffrage universel direct, il définit la politique de la nation. Il est assisté par le Premier Ministre (Chef du Gouvernement) et les ministres, qui exécutent les lois et gèrent les différents secteurs de la vie publique.

Le Pouvoir Législatif : Il est représenté par l'Assemblée Nationale. Les députés, élus par le peuple, se réunissent au sein de cette institution pour proposer, débattre et voter les lois. Ils ont également pour mission de contrôler l'action du gouvernement à travers des questions orales ou des commissions d'enquête.

Le Pouvoir Judiciaire : Il est confié aux cours et tribunaux, totalement indépendants des deux premiers pouvoirs. Les magistrats et juges veillent au respect des lois et tranchent les litiges. Au sommet de cette pyramide se trouvent le Conseil Constitutionnel, la Cour Suprême et les tribunaux de grande instance.

Conclusion
L'équilibre entre le Pouvoir Exécutif, Législatif et Judiciaire garantit la stabilité politique légendaire du Sénégal. La connaissance de ces institutions permet aux élèves de comprendre comment est gouverné leur pays et de respecter l'ordre démocratique établi.`,
  sections: [
    {
      title: 'I. Le principe constitutionnel de la séparation des pouvoirs',
      content: [
        `Le Sénégal est une république démocratique, laïque et sociale régie par la Constitution.`,
        `Pour éviter la concentration des prérogatives entre les mains d'une seule autorité et prévenir les abus de pouvoir, l'État repose sur le principe de la séparation des pouvoirs : le pouvoir d'exécuter, le pouvoir de légiférer et le pouvoir de juger.`
      ]
    },
    {
      title: 'II. Le Pouvoir Exécutif',
      content: [
        `Le Pouvoir Exécutif est incarné au premier plan par le Président de la République :`,
        `• Le Chef de l'État : garant de la Constitution, de l'intégrité du territoire et de l'unité nationale. Il est élu au suffrage universel direct pour un mandat républicain et définit la politique générale de la nation.`,
        `• Le Gouvernement : Le Président est assisté par le Premier Ministre (Chef du Gouvernement) et les ministres de la République. Le gouvernement applique et exécute les lois votées, gère l'administration publique et conduit la politique nationale dans chaque secteur (éducation, santé, économie, défense).`
      ]
    },
    {
      title: 'III. Le Pouvoir Législatif',
      content: [
        `Le Pouvoir Législatif est représenté par l'Assemblée Nationale :`,
        `• Les Députés : élus au suffrage universel direct par le peuple souverain pour un mandat législatif de cinq ans.`,
        `• Missions parlementaires : Les députés délibèrent, proposent et votent les lois de la République et le budget de l'État.`,
        `• Contrôle démocratique : L'Assemblée Nationale contrôle l'action du pouvoir exécutif au moyen de questions écrites et orales, de motions de censure et de commissions parlementaires d'enquête.`
      ]
    },
    {
      title: 'IV. Le Pouvoir Judiciaire',
      content: [
        `Le Pouvoir Judiciaire est confié aux cours et tribunaux de la République, strictement indépendants des pouvoirs exécutif et législatif :`,
        `• Les magistrats et juges rendent la justice au nom du peuple sénégalais en appliquant strictement les textes de loi et en tranchant les litiges entre citoyens ou entre l'État et les citoyens.`,
        `• Les juridictions supérieures : Au sommet de la hiérarchie judiciaire se trouvent :`,
        `  - Le Conseil Constitutionnel : juge suprême de la conformité des lois à la Constitution et garant de la régularité des élections nationales.`,
        `  - La Cour Suprême : plus haute juridiction en matières administrative, civile et pénale.`,
        `  - Les Cours d'Appel et Tribunaux de Grande Instance répartis dans les régions du Sénégal.`
      ]
    }
  ],
  diagram: {
    title: 'La séparation des trois pouvoirs au Sénégal',
    root: 'LES INSTITUTIONS DE LA RÉPUBLIQUE',
    branches: [
      {
        name: 'Pouvoir Exécutif',
        subtitle: 'Présidence & Gouvernement',
        items: [
          'Président de la République (Chef de l\'État)',
          'Premier Ministre (Chef du Gouvernement)',
          'Ministres & Administration publique',
          'Exécution des lois & Défense nationale'
        ]
      },
      {
        name: 'Pouvoir Législatif',
        subtitle: 'Assemblée Nationale',
        items: [
          'Députés élus au suffrage universel',
          'Proposition et vote des lois',
          'Vote du budget annuel de la nation',
          'Contrôle de l\'action du gouvernement'
        ]
      },
      {
        name: 'Pouvoir Judiciaire',
        subtitle: 'Cours & Tribunaux indépendants',
        items: [
          'Conseil Constitutionnel (contrôle de constitutionnalité)',
          'Cour Suprême (juridiction suprême)',
          'Cours d\'Appel & Tribunaux de Grande Instance',
          'Magistrats et juges veillant au droit'
        ]
      }
    ]
  },
  conclusion: `L'équilibre entre le Pouvoir Exécutif, Législatif et Judiciaire garantit la stabilité politique légendaire du Sénégal. La connaissance de ces institutions permet aux élèves de comprendre comment est gouverné leur pays et de respecter l'ordre démocratique établi.`
};
