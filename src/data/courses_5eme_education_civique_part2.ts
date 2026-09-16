import { LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 5ÈME (MODÈLE SÉNÉGALAIS)
// DEUXIÈME PARTIE : LA VIE EN SOCIÉTÉ ET LES VALEURS DE LA RÉPUBLIQUE DU SÉNÉGAL
// Leçons 4, 5, 6 - Cours complets avec Introductions et Conclusions (Sans résumés)
// =========================================================================

// --- LEÇON 4 : LA LAÏCITÉ AU SÉNÉGAL, FACTEUR DE TOLÉRANCE ET DE PAIX SOCIALE ---
export const LESSON_4_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LA LAÏCITÉ AU SÉNÉGAL, FACTEUR DE TOLÉRANCE ET DE PAIX SOCIALE',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `La Constitution sénégalaise proclame que la République du Sénégal est laïque. Dans un pays où la religion occupe une place centrale dans la vie quotidienne de la quasi-totalité de la population, la laïcité revêt une signification particulière. Elle n'est pas un rejet du fait religieux, mais un principe d'organisation garantissant la paix sociale, la tolérance et la coexistence pacifique.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

DEUXIÈME PARTIE : LA VIE EN SOCIÉTÉ ET LES VALEURS DE LA RÉPUBLIQUE DU SÉNÉGAL

LEÇON 4 : La laïcité au Sénégal, facteur de tolérance et de paix sociale

Introduction
La Constitution sénégalaise proclame que la République du Sénégal est laïque. Dans un pays où la religion occupe une place centrale dans la vie quotidienne de la quasi-totalité de la population, la laïcité revêt une signification particulière. Elle n'est pas un rejet du fait religieux, mais un principe d'organisation garantissant la paix sociale, la tolérance et la coexistence pacifique.

Développement
Au Sénégal, la laïcité se définit comme une "laïcité de concorde" ou de dialogue. Elle repose sur deux principes fondamentaux : la neutralité de l'État envers toutes les croyances et la garantie de la liberté de culte pour chaque citoyen.

L'État sénégalais ne possède pas de religion officielle. Il traite sur un pied d'égalité absolue les citoyens de confession musulmane (majoritaires) et de confession chrétienne (catholiques et protestants), ainsi que les adeptes des religions traditionnelles. Les lois de la République s'appliquent à tous de la même manière, sans distinction d'appartenance religieuse.

Cette neutralité permet à l'État d'être le garant de la liberté de conscience. Chacun est libre de pratiquer sa foi, d'édifier des lieux de culte (mosquées, églises) et de célébrer ses fêtes religieuses. L'État sénégalais soutient d'ailleurs activement l'organisation des grands événements religieux du pays (Magal, Gamou, Popenguine, Daaka) en assurant la sécurité et la logistique.

À l'école publique, la laïcité assure que l'espace scolaire reste un lieu d'unité nationale. Les enseignements y sont neutres. Le respect mutuel entre élèves de confessions différentes y est obligatoire, faisant de l'école le premier rempart contre l'extrémisme et le communautarisme.

Conclusion
La laïcité sénégalaise est un modèle de réussite salué à travers le monde. Elle transforme la diversité religieuse en une richesse culturelle, consolidant le climat de paix et de fraternité qui caractérise la société sénégalaise.`,
  sections: [
    {
      title: 'I. La notion de « laïcité de concorde » au Sénégal',
      content: [
        `Au Sénégal, la laïcité ne s'oppose jamais au fait religieux : elle se définit comme une « laïcité de concorde » ou de dialogue.`,
        `Elle repose sur deux piliers indissociables :`,
        `1. La neutralité bienveillante de l'État envers toutes les confessions religieuses et les croyances.`,
        `2. La garantie absolue de la liberté de conscience et de culte pour chaque citoyen.`
      ]
    },
    {
      title: 'II. Neutralité de l\'État et égalité de traitement de tous les cultes',
      content: [
        `L'État sénégalais ne possède pas de religion officielle d'État.`,
        `Il traite sur un pied d'égalité absolue les citoyens de confession musulmane (majoritaires), de confession chrétienne (catholiques et protestants), ainsi que les adeptes des religions traditionnelles et coutumières.`,
        `Les lois républicaines s'appliquent à tous avec la même impartialité, sans privilège ni discrimination fondés sur la foi ou la croyance.`
      ]
    },
    {
      title: 'III. La garantie de la liberté de culte et le rôle régulateur de l\'État',
      content: [
        `Chaque citoyen est libre de manifester publiquement sa foi, d'édifier des lieux de culte (mosquées, églises, chapelles) et de célébrer solennellement ses fêtes religieuses (Korité, Tabaski, Pâques, Noël, Assomption).`,
        `L'État sénégalais accompagne harmonieusement cette vie spirituelle en garantissant la sécurité, les secours médicaux et la logistique des grands pèlerinages nationaux :`,
        `• Le Grand Magal de Touba et le Gamou de Tivaouane, Kaolack ou Ndiassane pour les confréries musulmanes.`,
        `• Le pèlerinage marial de Popenguine pour la communauté chrétienne.`,
        `• Le Daaka de Médina Gounass.`
      ]
    },
    {
      title: 'IV. La laïcité dans l\'espace scolaire républicain',
      content: [
        `À l'école publique, la laïcité garantit que l'école demeure un creuset d'unité républicaine et un sanctuaire préservé des divisions partisanes.`,
        `Les programmes et les enseignements y sont dispensés de manière neutre. Le respect mutuel scrupuleux entre camarades de confessions différentes est une règle intangible, faisant de l'institution scolaire le premier rempart contre l'intolérance, le repli communautaire et l'extrémisme.`
      ]
    }
  ],
  diagram: {
    title: 'La laïcité de concorde au Sénégal',
    root: 'LA LAÏCITÉ SÉNÉGALAISE',
    branches: [
      {
        name: 'Neutralité de l\'État',
        subtitle: 'Égalité devant la loi',
        items: [
          'Aucune religion officielle d\'État',
          'Égalité absolue musulmans / chrétiens',
          'Protection des cultes traditionnels',
          'Lois républicaines communes à tous'
        ]
      },
      {
        name: 'Liberté de culte & Concorde',
        subtitle: 'Soutien aux grands rassemblements',
        items: [
          'Liberté de prière & lieux de culte',
          'Appui au Magal de Touba & Gamou',
          'Soutien au pèlerinage de Popenguine',
          'Sécurité et logistique assurées par l\'État'
        ]
      },
      {
        name: 'Laïcité à l\'École Publique',
        subtitle: 'Unité et cohésion nationale',
        items: [
          'Neutralité des contenus d\'enseignement',
          'Fraternité entre élèves de toutes confessions',
          'Rempart contre le fanatisme',
          'Apprentissage de la tolérance citoyenne'
        ]
      }
    ]
  },
  conclusion: `La laïcité sénégalaise est un modèle de réussite salué à travers le monde. Elle transforme la diversité religieuse en une richesse culturelle, consolidant le climat de paix et de fraternité qui caractérise la société sénégalaise.`
};

// --- LEÇON 5 : LE REFUS DES DISCRIMINATIONS, LE RESPECT DE LA DIVERSITÉ ET L'ÉGALITÉ DE GENRE ---
export const LESSON_5_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LE REFUS DES DISCRIMINATIONS, LE RESPECT DE LA DIVERSITÉ ET L\'ÉGALITÉ DE GENRE',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `Le Sénégal est un carrefour d'ethnies, de cultures et de traditions diverses. Pour maintenir la cohésion nationale, la société s'appuie sur des mécanismes traditionnels de régulation sociale tout en adoptant des lois modernes pour lutter contre les discriminations. L'égalité entre les citoyens, notamment l'égalité de genre, est un objectif majeur pour construire une société juste.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

DEUXIÈME PARTIE : LA VIE EN SOCIÉTÉ ET LES VALEURS DE LA RÉPUBLIQUE DU SÉNÉGAL

LEÇON 5 : Le refus des discriminations, le respect de la diversité et l'égalité de genre

Introduction
Le Sénégal est un carrefour d'ethnies, de cultures et de traditions diverses. Pour maintenir la cohésion nationale, la société s'appuie sur des mécanismes traditionnels de régulation sociale tout en adoptant des lois modernes pour lutter contre les discriminations. L'égalité entre les citoyens, notamment l'égalité de genre, est un objectif majeur pour construire une société juste.

Développement
La discrimination consiste à traiter une personne de manière injuste ou inférieure en raison de son ethnie, de sa caste, de sa religion ou de son sexe. La Constitution sénégalaise interdit formellement ces pratiques, affirmant que tous les êtres humains sont égaux en dignité et en droits.

Pour préserver l'harmonie entre les différentes ethnies (Wolofs, Pulaars, Sereres, Jolas, Mandingues, Soninkés, etc.), les ancêtres ont instauré un mécanisme culturel unique : le cousinage à plaisanterie (appelé Kal ou Kalé). Cette tradition permet à des membres d'ethnies ou de patronymes différents de se taquiner amicalement et de désamorcer toute tension sociale. C'est un ciment invisible qui empêche les conflits ethniques au Sénégal.

Un autre défi majeur est la promotion de l'égalité de genre. Historiquement, les femmes et les filles ont subi des inégalités d'accès à l'éducation, au foncier et aux postes de décision. Le Sénégal a franchi un pas historique avec le vote de la Loi sur la parité absolue en 2010. Cette loi oblige toutes les listes de candidatures pour les élections politiques à alterner strictement un homme et une femme. Au collège, la parité se traduit par l'encouragement des filles à s'orienter vers les filières scientifiques.

Conclusion
Le refus des discriminations et la valorisation de la diversité font la force du Sénégal. En associant les traditions positives comme le cousinage à plaisanterie aux lois modernes sur la parité, le pays progresse vers une égalité réelle entre tous ses enfants.`,
  sections: [
    {
      title: 'I. Définition et prohibition légale des discriminations',
      content: [
        `La discrimination consiste à traiter une personne de manière défavorable, injuste ou inférieure en raison de son appartenance ethnique, de sa caste d'origine, de sa croyance religieuse ou de son sexe.`,
        `La Constitution sénégalaise proscrit formellement toute distinction arbitraire : l'article premier et l'article 7 réaffirment que tous les êtres humains naissent et demeurent libres et égaux en dignité et en droits devant la loi.`
      ]
    },
    {
      title: 'II. Le cousinage à plaisanterie (Kal ou Kalé) : ciment de l\'harmonie nationale',
      content: [
        `Pour préserver l'harmonie entre les multiples composantes de la nation (Wolofs, Pulaars/Toucouleurs/Peuls, Sérères, Diolas, Mandingues, Soninkés, Manjaques, Bassaris, etc.), la sagesse ancestrale a légué le cousinage à plaisanterie (Kal ou Kalé, Sanawuya).`,
        `• Fonctionnement : Cette convention socioculturelle autorise des railleries bienveillantes et des plaisanteries codifiées entre ethnies alliées (par exemple entre Sérères et Toucouleurs, ou entre Diolas et Sérères) ainsi qu'entre patronymes alliés.`,
        `• Rôle pacificateur : En dédramatisant les susceptibilités et en interdisant le conflit sanglant entre cousins, le Kal constitue une véritable soupape de sécurité et un rempart ancestral préservant le Sénégal des guerres ethniques.`
      ]
    },
    {
      title: 'III. L\'égalité de genre et la Loi historique sur la parité absolue de 2010',
      content: [
        `Historiquement, les femmes et les jeunes filles faisaient face à des inégalités d'accès à la scolarisation prolongée, à la propriété foncière et aux instances dirigeantes.`,
        `• La Loi sur la parité absolue (2010) : Le Sénégal a accompli un progrès démocratique majeur avec la loi n° 2010-11 instituant la parité absolue homme-femme dans toutes les institutions totalement ou partiellement électives (Assemblée Nationale, conseils départementaux et municipaux). Les listes électorales doivent alterner strictement les candidats des deux sexes.`,
        `• Application au collège : Promouvoir la réussite scolaire égale des filles, lutter contre l'abandon précoce et encourager l'accès massif des élèves filles aux séries scientifiques et technologiques (S1, S2, T).`
      ]
    }
  ],
  diagram: {
    title: 'Cohésion sociale, diversité et égalité de genre',
    root: 'VIVRE-ENSEMBLE SÉNÉGALAIS',
    branches: [
      {
        name: 'Refus des Discriminations',
        subtitle: 'Égalité constitutionnelle',
        items: [
          'Interdiction des discriminations de caste',
          'Égalité de tous les citoyens devant la loi',
          'Protection contre l\'injustice sociale',
          'Respect des droits humains inaliénables'
        ]
      },
      {
        name: 'Cousinage à plaisanterie (Kal)',
        subtitle: 'Régulation sociale ancestrale',
        items: [
          'Alliances interethniques (Sérères, Peuls, Diolas)',
          'Plaisanteries bienveillantes institutionnalisées',
          'Désamorçage pacifique des tensions',
          'Ciment invisible de la paix civile'
        ]
      },
      {
        name: 'Égalité de Genre & Parité',
        subtitle: 'Loi sur la parité de 2010',
        items: [
          'Alternance homme-femme sur les listes électorales',
          'Représentation féminine dans les assemblées',
          'Scolarisation des filles au collège & lycée',
          'Orientation vers les sciences et techniques'
        ]
      }
    ]
  },
  conclusion: `Le refus des discriminations et la valorisation de la diversité font la force du Sénégal. En associant les traditions positives comme le cousinage à plaisanterie aux lois modernes sur la parité, le pays progresse vers une égalité réelle entre tous ses enfants.`
};

// --- LEÇON 6 : LES SYMBOLES DE LA RÉPUBLIQUE ET LA DEVISE NATIONALE ---
export const LESSON_6_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LES SYMBOLES DE LA RÉPUBLIQUE ET LA DEVISE NATIONALE',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `Les symboles de la République sont des repères visuels, sonores et textuels qui incarnent la souveraineté, l'histoire et l'identité de la nation sénégalaise. Ils unissent tous les citoyens au-delà de leurs différences régionales ou ethniques. Connaître, respecter et honorer ces symboles est le premier devoir civil de tout élève sénégalais.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

DEUXIÈME PARTIE : LA VIE EN SOCIÉTÉ ET LES VALEURS DE LA RÉPUBLIQUE DU SÉNÉGAL

LEÇON 6 : Les symboles de la République et la devise nationale

Introduction
Les symboles de la République sont des repères visuels, sonores et textuels qui incarnent la souveraineté, l'histoire et l'identité de la nation sénégalaise. Ils unissent tous les citoyens au-delà de leurs différences régionales ou ethniques. Connaître, respecter et honorer ces symboles est le premier devoir civil de tout élève sénégalais.

Développement
Les symboles officiels de la République du Sénégal sont définis par la Constitution et se composent de quatre éléments majeurs :

Le Drapeau National : Il est composé de trois bandes verticales, égales et de couleurs vert, or (jaune) et rouge. Au centre de la bande or se trouve une étoile verte à cinq branches.

La Devise Nationale : Elle est résumée par la formule "Un Peuple, Un But, Une Foi". Un Peuple exprime l'unité nationale ; Un But traduit la volonté commune de progresser ; Une Foi représente la croyance profonde en l'avenir de la nation.

L'Hymne National : Intitulé "Pincez tous vos koras, frappez les balafons", ses paroles ont été écrites par Léopold Sédar Senghor. Il exprime le courage et la fierté nationale.

Le Sceau et les Armoiries : Le sceau de l'État montre un lion passant, symbole de force, à côté d'un baobab, arbre séculaire représentant la stabilité et l'enracinement.

Conclusion
Les symboles de la République ne sont pas de simples décors extérieurs. Lors de la cérémonie hebdomadaire de levée des couleurs au collège, le respect face au drapeau et le chant de l'hymne national traduisent l'amour de la patrie.`,
  sections: [
    {
      title: 'I. Le Drapeau National du Sénégal',
      content: [
        `Le drapeau de la République du Sénégal est constitué de trois bandes verticales d'égales largeurs : vert, or (jaune) et rouge, frappé en son centre d'une étoile verte à cinq branches.`,
        `• La bande verte (à la hampe) : symbolise l'espérance, la fécondité de la terre agricole sénégalaise et la spiritualité.`,
        `• La bande or / jaune (au milieu) : symbolise la chaleur, l'enrichissement par le travail et les ressources minières et intellectuelles du peuple.`,
        `• La bande rouge (au flottant) : rappelle le sacrifice et le sang versé par les combattants et résistants pour la conquête de la liberté et de l'indépendance nationale.`,
        `• L'étoile verte à cinq branches : évoque l'ouverture de la nation sénégalaise aux cinq continents de la terre et la lumière guidant le peuple vers le progrès.`
      ]
    },
    {
      title: 'II. La Devise Nationale : « Un Peuple, Un But, Une Foi »',
      content: [
        `La devise de la République exprime l'idéal collectif qui cimente la nation :`,
        `• « Un Peuple » : proclame l'unité indivisible de tous les Sénégalais, par-delà les diversités ethniques, régionales ou religieuses.`,
        `• « Un But » : traduit l'aspiration commune et solidaire vers le développement économique, l'épanouissement humain et la justice sociale.`,
        `• « Une Foi » : symbolise la confiance inébranlable et le dévouement patriotique des citoyens dans l'avenir radieux et souverain de leur patrie.`
      ]
    },
    {
      title: 'III. L\'Hymne National : « Pincez tous vos koras, frappez les balafons »',
      content: [
        `L'hymne national du Sénégal est le chant patriotique suprême entonné lors des cérémonies officielles et des rassemblements républicains.`,
        `• Ses paroles ont été composées par le poète-président Léopold Sédar Senghor, sur une musique orchestrée par Herbert Pepper.`,
        `• Il met à l'honneur les instruments traditionnels de l'Afrique de l'Ouest (kora, balafon) et célèbre la bravoure des anciens, la fraternité entre les peuples et la fidélité indéfectible à la patrie.`
      ]
    },
    {
      title: 'IV. Le Sceau de l\'État et les Armoiries',
      content: [
        `Les armoiries et le sceau authentifient les actes d'autorité souveraine de l'État :`,
        `• Le lion passant : symbole de force, de vaillance et de courage du peuple sénégalais.`,
        `• Le baobab séculaire : arbre nourricier et symbole de longévité, de sagesse ancestrale et de solide enracinement dans le terroir.`,
        `• La devise nationale et l'étoile verte complètent ces insignes officiels de la République.`
      ]
    }
  ],
  diagram: {
    title: 'Les quatre symboles fondamentaux de la République',
    root: 'SYMBOLES DE LA RÉPUBLIQUE',
    branches: [
      {
        name: 'Le Drapeau National',
        subtitle: 'Vert - Or - Rouge & Étoile',
        items: [
          'Vert : Espoir, agriculture & spiritualité',
          'Or : Travail, lumière & richesses',
          'Rouge : Sang versé pour la liberté',
          'Étoile verte à 5 branches : Ouverture'
        ]
      },
      {
        name: 'La Devise Nationale',
        subtitle: 'Un Peuple, Un But, Une Foi',
        items: [
          'Un Peuple : Unité indivisible de la nation',
          'Un But : Volonté commune de développement',
          'Une Foi : Confiance inébranlable en l\'avenir',
          'Idéal collectif partagé par tous'
        ]
      },
      {
        name: 'L\'Hymne National',
        subtitle: 'Pincez tous vos koras...',
        items: [
          'Paroles de Léopold Sédar Senghor',
          'Musique par Herbert Pepper',
          'Instruments : Koras et balafons',
          'Célébration du courage et de la patrie'
        ]
      },
      {
        name: 'Le Sceau & Les Armoiries',
        subtitle: 'Signes d\'autorité républicaine',
        items: [
          'Lion passant : Force et vaillance',
          'Baobab : Enracinement et sagesse',
          'Palmes et ruban républicain',
          'Sceau gravé de la République'
        ]
      }
    ]
  },
  conclusion: `Les symboles de la République ne sont pas de simples décors extérieurs. Lors de la cérémonie hebdomadaire de levée des couleurs au collège, le respect face au drapeau et le chant de l'hymne national traduisent l'amour de la patrie.`
};
