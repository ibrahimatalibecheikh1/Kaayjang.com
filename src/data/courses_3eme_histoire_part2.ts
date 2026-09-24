import { LessonContent } from './courses';
import { SVG_RESISTANCES_OUEST_AFRICAIN } from './diagrams_3eme_histoire';

// =========================================================================
// HISTOIRE 3ÈME - SÉNÉGAL (PROGRAMME OFFICIEL INTÉGRAL BFEM)
// DEUXIÈME PARTIE : L'IMPÉRIALISME EN AFRIQUE (SUITE : LEÇONS 6 ET 7)
// TROISIÈME PARTIE : L'IMPÉRIALISME DANS LE RESTE DU MONDE (LEÇONS 8 À 10)
// Développement complet et exhaustif sans résumés
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 6 : LES RÉSISTANCES : FORMES, EXEMPLES ET BILAN
// -------------------------------------------------------------------------

export const LESSON_6_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LES RÉSISTANCES : FORMES, EXEMPLES ET BILAN',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "Contrairement au mythe eurocentriste d'une Afrique pacifiée sans coup férir, l'implantation coloniale s'est heurtée à un refus catégorique et héroïque des peuples africains. Face à l'invasion, les souverains et les sociétés africaines ont mis en œuvre diverses stratégies de préservation de leur liberté et de leur espace de dignité.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Deuxième partie : L'impérialisme en Afrique

Leçon 6 : Les résistances : formes, exemples et bilan

Introduction
Contrairement au mythe eurocentriste d'une Afrique pacifiée sans coup férir, l'implantation coloniale s'est heurtée à un refus catégorique et héroïque des peuples africains. Face à l'invasion, les souverains et les sociétés africaines ont mis en œuvre diverses stratégies de préservation de leur liberté et de leur espace de dignité.

I. Les différentes formes de résistance
L'historiographie africaine distingue généralement deux formes principales de résistance :
1. La résistance armée (active) : Menée par des leaders politiques et militaires qui engagent des batailles rangées ou des guerres de guérilla contre les troupes coloniales.
2. La résistance culturelle et pacifique (passive) : Utilisée par des communautés ou des guides religieux. Elle se traduit par le refus de payer l'impôt de capitation, le boycott des écoles et cultures coloniales, la désertion des chantiers de travail forcé, ou le refuge dans le mysticisme religieux pour préserver l'identité culturelle face à l'aliénation.

II. Exemples emblématiques de résistances armées
L'Afrique de l'Ouest a été le théâtre de luttes acharnées :
— Lat Dior Ngoné Latyr Diop, Damel du Cayor (Sénégal) : Il s'opposa farouchement au tracé de la ligne de chemin de fer Dakar-Saint-Louis, symbole de la pénétration coloniale française. Il mourut les armes à la main lors de la bataille de Dekheulé le 26 octobre 1886.
— Samory Touré, fondateur de l'Empire de Wassoulou : Fin stratège militaire, il dota son armée de fusils modernes et mena une guerre de harcèlement et de terre brûlée d'une efficacité redoutable contre l'armée française pendant plus de quinze ans (1882-1898), avant d'être capturé et exilé au Gabon.
— Béhanzin, roi du Dahomey : Il lutta courageusement contre l'invasion française pour protéger son royaume, avant d'être vaincu par le général Dodds et déporté en Martinique puis en Algérie.
— L'exception éthiopienne : L'empereur Ménélik II réussit à unifier son pays et à écraser l'armée impérialiste italienne à la célèbre bataille d'Adoua en 1896, préservant l'indépendance de l'Éthiopie.

III. Bilan des résistances
À l'exception notable de l'Éthiopie, la quasi-totalité des résistances africaines a échoué. Les causes de cet échec sont multiples : la supériorité technologique et militaire écrasante des Européens (fusils à répétition, mitrailleuses Maxim, artillerie lourde), le manque d'unité et les divisions intestines entre royaumes africains (certains s'alliant avec l'envahisseur pour abattre leurs rivaux traditionnels), et l'impact dévastateur des épidémies et des famines.

Conclusion
Bien que vaincues militairement, les résistances africaines revêtent une portée historique immense. Elles démontrent le refus de la domination et constituent le socle du nationalisme africain moderne. Les figures des résistants demeurent des sources d'inspiration majeures pour la mémoire collective du continent.`,
  sections: [
    {
      title: 'I. Typologie des résistances africaines : active et passive',
      content: [
        "1. La résistance armée (active) :",
        "• Mobilisation militaire des souverains, rois, empereurs et généraux africains refusant de céder leur souveraineté territoriale.",
        "• Stratégies de guerre conventionnelle (batailles rangées) et tactiques asymétriques de guérilla (embuscades, harcèlement logistique, repli stratégique).",
        "2. La résistance culturelle, spirituelle et pacifique (passive) :",
        "• Résistance confrérique et islamique : Cheikh Ahmadou Bamba Mbacké (fondateur du Mouridisme au Sénégal) qui oppose la non-violence, le travail sanctifié et l'indépendance spirituelle malgré ses déportations au Gabon (1895-1902) et en Mauritanie (1903-1907) ; El Hadji Malick Sy qui implante un puissant réseau de zawiyas tidjanes pour former les esprits.",
        "• Résistance des peuples sans État centralisé : chez les Diolas de Casamance (refus de payer l'impôt, fuite dans les forêts sacrées, rôle de la prêtresse Aline Sitoé Diatta face aux réquisitions coloniales).",
        "• Boycott des cultures de rente imposées (comme l'arachide ou le coton) et refus d'envoyer les enfants à l'école coloniale assimilatrice."
      ],
      image: {
        url: '',
        alt: 'Résistances héroïques en Afrique de l\'Ouest',
        caption: 'Figure 5 : Figures de proue et formes de résistances anticoloniales',
        svgContent: SVG_RESISTANCES_OUEST_AFRICAIN
      }
    },
    {
      title: 'II. Figures emblématiques des résistances armées',
      content: [
        "1. Lat Dior Ngoné Latyr Diop (Damel du Cayor, Sénégal) :",
        "• Comprend immédiatement le caractère destructeur du chemin de fer Dakar-Saint-Louis (« Le chemin de fer me tuera, ou je le tuerai »).",
        "• Batailles mémorables : Ngolgol (1863), Loro, et ultime affrontement de Dekheulé le 26 octobre 1886 où il tombe en martyr avec ses fidèles compagnons.",
        "2. Samory Touré (« L'Almamy de Wassoulou ») :",
        "• Fondateur d'un empire s'étendant de la Guinée au Mali et à la Côte d'Ivoire.",
        "• Modernise son armée avec des fusils à tir rapide, crée des manufactures d'armes artisanales et pratique la tactique de la « terre brûlée » et le déplacement massif des populations vers l'Est.",
        "• Résiste victorieusement pendant plus de 15 ans face aux colonels français (Borgnis-Desbordes, Gallieni, Archinard) avant d'être capturé par surprise à Guélémou en 1898 et déporté à Ndjolé au Gabon où il meurt en 1900.",
        "3. Béhanzin (Roi du Dahomey, actuel Bénin) :",
        "• Défend son royaume avec son armée d'élite et son régiment féminin des « Agojié » (les Amazones du Dahomey).",
        "• Affronte les troupes du colonel Alfred Dodds en 1892 à Dogba et Kana. Fait le sacrifice de brûler sa propre capitale Abomey pour ne pas la livrer intacte. Déporté en Martinique puis en Algérie.",
        "4. La victoire historique d'Adoua en Éthiopie (1896) :",
        "• L'empereur Ménélik II et l'impératrice Taytu Betul unifient les seigneurs de guerre éthiopiens.",
        "• Le 1er mars 1896, l'armée éthiopienne écrase les troupes italiennes du général Baratieri à la bataille d'Adoua : l'Éthiopie préserve sa totale indépendance nationale et fait reconnaître sa souveraineté sur la scène internationale."
      ]
    },
    {
      title: 'III. Bilan et causes de l’échec militaire général',
      content: [
        "1. Les facteurs de la défaite africaine :",
        "• Disparité technologique insurmontable : mitrailleuse automatique Maxim tirant 600 coups/minute, canons rayés contre fusils de traite obsolètes et armes blanches.",
        "• Divisions et querelles dynastiques intestines : trahisons locales et alliances opportunistes de certains souverains avec les officiers coloniaux pour écraser leurs rivaux régionaux.",
        "• Conjoncture démographique affaiblie : siècles de traite négrière dépeuplant les terroirs, épidémies de variole et peste bovine décimant les cheptels.",
        "2. Portée mémorielle et nationaliste :",
        "• Les résistants ont prouvé qu'aucun peuple n'acceptait servilement la tutelle étrangère.",
        "• Ils constituent les héros fondateurs et les repères identitaires qui féconderont le nationalisme et les indépendances africaines du XXe siècle."
      ],
      table: {
        headers: ['Résistant & Pays', 'Type de Résistance', 'Faits Marquants & Événements', 'Issue Historique'],
        rows: [
          ["Lat Dior (Cayor, Sénégal)", "Armée & Souveraineté", "Refus du chemin de fer, bataille de Dekheulé (1886)", "Mort héroïque les armes à la main."],
          ["Samory Touré (Wassoulou)", "Guérilla & Terre brûlée", "15 ans de guerre d'usure, armement moderne", "Capture en 1898, déportation au Gabon."],
          ["Béhanzin (Dahomey)", "Armée régulière & Amazones", "Guerre du Dahomey, incendie volontaire d'Abomey", "Déportation en Martinique puis Algérie."],
          ["Ménélik II (Éthiopie)", "Unification nationale & Armée", "Victoire éclatante d'Adoua contre l'Italie (1896)", "Préservation totale de l'indépendance."],
          ["Cheikh Ahmadou Bamba (Sénégal)", "Pacifique & Spirituelle", "Travail saint, foi inébranlable, Mouridisme", "Triomphe spirituel, retour d'exil triomphal."]
        ]
      }
    }
  ],
  conclusion: "Bien que vaincues militairement, les résistances africaines revêtent une portée historique immense. Elles démontrent le refus de la domination et constituent le socle du nationalisme africain moderne. Les figures des résistants demeurent des sources d'inspiration majeures pour la mémoire collective du continent."
};

// -------------------------------------------------------------------------
// LEÇON 7 : LES SYSTÈMES COLONIAUX (MODÈLES FRANÇAIS ET BRITANNIQUE)
// -------------------------------------------------------------------------

export const LESSON_7_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LES SYSTÈMES COLONIAUX (EXEMPLES DES MODÈLES FRANÇAIS ET BRITANNIQUE)',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "Une fois la conquête militaire achevée, les puissances impérialistes durent mettre en place des structures administratives et économiques pour encadrer les populations vaincues et exploiter rationnellement les ressources du continent. La France et la Grande-Bretagne développèrent deux doctrines de gouvernance distinctes.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Deuxième partie : L'impérialisme en Afrique

Leçon 7 : Les systèmes coloniaux (exemples des modèles français et britannique)

Introduction
Une fois la conquête militaire achevée, les puissances impérialistes durent mettre en place des structures administratives et économiques pour encadrer les populations vaincues et exploiter rationnellement les ressources du continent. La France et la Grande-Bretagne développèrent deux doctrines de gouvernance distinctes.

I. Le système français : l'Administration Directe et l'Assimilation
Le modèle colonial français repose sur une centralisation rigide et une philosophie républicaine universaliste teintée de paternalisme. La France applique l'Administration Directe : les structures politiques traditionnelles africaines sont démantelées, et le territoire est découpé en cercles administratifs dirigés par des commandants de cercle blancs.

La doctrine d'Assimilation vise à transformer l'Africain en citoyen français, reniant sa culture d'origine pour adopter la langue, les lois et les mœurs de la métropole. En réalité, cette assimilation fut sélective, confinée au Sénégal aux habitants des 'Quatre Communes' (Dakar, Gorée, Rufisque, Saint-Louis). La grande majorité des Africains étaient soumis au régime de l'Indigénat, un code juridique d'exception extrêmement répressif permettant aux administrateurs coloniaux d'infliger des peines de prison, de confiscation de biens et de travail forcé sans procès.

II. Le système britannique : l'Administration Indirecte (Indirect Rule)
La Grande-Bretagne, pragmatique et soucieuse d'économiser les deniers publics, applique l'Administration Indirecte, théorisée par Lord Lugard au Nigeria. Contrairement à la France, les Britanniques maintiennent les institutions, les coutumes et les chefs traditionnels (comme les Émirs d'Afrique du Nord et de l'Ouest ou les rois Ashanti) en leur confiant des rôles administratifs, fiscaux et judiciaires locaux. Les administrateurs britanniques agissent comme des conseillers (Residents) superviseurs.

Sur le plan culturel, Londres adopte une politique d'Association : elle ne cherche pas à angliciser les Africains, estimant que les cultures sont fondamentalement différentes, mais maintient une ségrégation pragmatique tout en veillant à la paix sociale nécessaire à l'extraction des richesses.

III. L'exploitation économique coloniale : un socle commun
Derrière les divergences de méthode administrative, les deux systèmes partagent les mêmes objectifs économiques mercantilistes : l'exploitation du protectorat ou de la colonie au bénéfice exclusif de la métropole (le pacte colonial). Cela se traduit par :
— Le monopole commercial : la colonie ne peut acheter ou vendre qu'à sa métropole.
— L'économie de traite : introduction de cultures de rente obligatoires (arachide au Sénégal, cacao en Côte d'Ivoire, coton au Tchad) au détriment des cultures vivrières de subsistance.
— La spoliation des terres et l'exploitation des ressources minières.
— Le pillage de la force de travail par le biais du travail forcé et des impôts en argent, obligeant les Africains à intégrer le circuit monétaire colonial.

Conclusion
Qu'elle soit directe ou indirecte, l'administration coloniale fut une entreprise de domination structurelle. Elle a désorganisé les sociétés africaines, atrophié leur potentiel d'auto-développement et façonné des économies extraverties entièrement dépendantes des marchés occidentaux.`,
  sections: [
    {
      title: 'I. Le modèle français : centralisation, assimilation et régime de l’Indigénat',
      content: [
        "1. Une administration directe hypercentralisée :",
        "• Regroupement des territoires en grandes fédérations : l'Afrique Occidentale Française (AOF, créée en 1895, capitale Dakar) et l'Afrique Équatoriale Française (AEF, créée en 1910, capitale Brazzaville).",
        "• Pyramide hiérarchique stricte : Gouverneur Général (à Dakar) -> Gouverneurs de colonies -> Commandants de cercle -> Chefs de canton et de village (réduits au rôle subalterne d'auxiliaires de perception fiscale).",
        "2. L'idéologie de l'Assimilation et son hypocrisie pratique :",
        "• Prétend faire des colonisés des « Français à part entière » en leur imposant la langue française et les valeurs républicaines.",
        "• Les citoyens des « Quatre Communes » du Sénégal (Saint-Louis, Gorée, Rufisque, Dakar) bénéficient du statut de citoyen français (droit de vote, député au Parlement français comme Blaise Diagne en 1914).",
        "3. Le sinistre Code de l'Indigénat (1887) :",
        "• Applicable à l'immense majorité des populations africaines qualifiées de « sujets français ».",
        "• Permet des sanctions arbitraires sans jugement : emprisonnement immédiat, amendes collectives, réquisitions d'office et corvées de travail forcé non rémunéré sur les chantiers ferroviaires et routes coloniales."
      ]
    },
    {
      title: 'II. Le modèle britannique : l’Indirect Rule et la politique d’association',
      content: [
        "1. L'Administration Indirecte (théorisée par Lord Frederick Lugard dans 'The Dual Mandate in British Tropical Africa') :",
        "• Principe : diriger les indigènes par l'intermédiaire de leurs propres chefs coutumiers et institutions préexistantes.",
        "• Application exemplaire au Nigeria du Nord (Émirats peuls et haoussas) et au Ghana (Confédération Ashanti) : les chefs traditionnels lèvent l'impôt, rendent la justice coutumière (Native Courts) et gèrent la police locale.",
        "• Présence européenne minimale : quelques fonctionnaires appelés « District Officers » et « Residents » agissant en tuteurs discrets.",
        "2. La politique d'Association et de « Self-Government » :",
        "• Pas de volonté d'angliciser ou de déraciner culturellement les colonisés.",
        "• Maintien des langues locales et des tribunaux coutumiers, mais avec une séparation raciale nette et absence de toute citoyenneté métropolitaine pour les colonisés."
      ]
    },
    {
      title: 'III. L’infrastructure de l’exploitation économique : le pacte colonial',
      content: [
        "1. Les piliers du pacte colonial :",
        "• La colonie fournit des matières premières brutes à très bas coût à la métropole.",
        "• La colonie est un débouché captif réservé aux produits manufacturés métropolitains (interdiction d'industrialiser les territoires colonisés).",
        "• Monopole des compagnies maritimes et des maisons de commerce métropolitaines (CFAO, SCOA, Maurel & Prom).",
        "2. L'économie de traite et les monocultures forcées :",
        "• Spécialisation outrancière : Sénégal (arachide), Côte d'Ivoire (café, cacao), Tchad (coton), Guinée (bananes).",
        "• Abandon tragique des cultures vivrières (mil, sorgho, igname), provoquant la vulnérabilité nutritionnelle des campagnes.",
        "3. L'impôt de capitation en argent liquide :",
        "• Oblige les paysans africains à cultiver les produits d'exportation pour payer l'impôt sous peine de peines de prison ou de bastonnades."
      ],
      table: {
        headers: ['Critères de Comparaison', 'Modèle Français (Administration Directe)', 'Modèle Britannique (Indirect Rule)'],
        rows: [
          ["Philosophie politique", "Universalisme républicain, assimilation culturelle.", "Pragmatisme, préservation des structures locales (association)."],
          ["Chefs traditionnels", "Cassés, démantelés ou simples exécutants subalternes.", "Maintenus avec pouvoirs judiciaires et fiscaux locaux."],
          ["Statut juridique", "Minorité de citoyens (Quatre Communes), masse soumise à l'Indigénat.", "Sujets coloniaux sous protectorat, 'Native Authorities'."],
          ["Objectif économique", "Pacte colonial, cultures de rente, extraction pour la métropole.", "Pacte colonial, économie de traite, marchés réservés à la Couronne."]
        ]
      }
    }
  ],
  conclusion: "Qu'elle soit directe ou indirecte, l'administration coloniale fut une entreprise de domination structurelle. Elle a désorganisé les sociétés africaines, atrophié leur potentiel d'auto-développement et façonné des économies extraverties entièrement dépendantes des marchés occidentaux."
};

// -------------------------------------------------------------------------
// LEÇON 8 : L'IMPÉRIALISME EUROPÉEN EN ASIE (INDE ET CHINE)
// -------------------------------------------------------------------------

export const LESSON_8_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-8',
  number: 'LEÇON 8',
  title: "L'IMPÉRIALISME EUROPÉEN EN ASIE (L'EXEMPLE DE L'INDE OU DE LA CHINE)",
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "L'Asie, continent de vieilles civilisations et de grands empires centralisés, n'échappe pas à l'appétit des puissances industrielles occidentales au XIXe siècle. En raison de sa taille et de ses structures politiques, l'impérialisme s'y déploie sous des formes spécifiques, allant de la colonisation directe en Inde au dépeçage commercial en Chine.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Troisième partie : L'impérialisme dans le reste du monde

Leçon 8 : L'impérialisme européen en Asie (l'exemple de l'Inde ou de la Chine)

Introduction
L'Asie, continent de vieilles civilisations et de grands empires centralisés, n'échappe pas à l'appétit des puissances industrielles occidentales au XIXe siècle. En raison de sa taille et de ses structures politiques, l'impérialisme s'y déploie sous des formes spécifiques, allant de la colonisation directe en Inde au dépeçage commercial en Chine.

I. L'exemple de l'Inde : le fleuron de l'Empire britannique
L'Inde fut d'abord exploitée par la Compagnie britannique des Indes orientales. Cependant, après la sanglante révolte des Cipayes (soldats indiens de l'armée coloniale) en 1857, le gouvernement britannique abolit la Compagnie et prit le contrôle direct du sous-continent. En 1876, la reine Victoria fut proclamée Impératrice des Indes.

L'Inde devint la 'perle de la Couronne britannique'. L'administration coloniale y construisit un immense réseau ferroviaire et télégraphique pour drainer les matières premières (coton, thé, opium, jute) vers l'Angleterre et inonder le marché indien de produits manufacturés britanniques. Ce processus entraîna la destruction totale de l'artisanat textile traditionnel indien et provoqua des famines mémorables.

II. L'exemple de la Chine : l'asservissement commercial et les traités inégaux
Contrairement à l'Inde, la Chine sous la dynastie Qing ne fut pas transformée en colonie unique, mais vit sa souveraineté s'effondrer sous la pression militaire des Occidentaux. Désireuse de fermer ses frontières au commerce étranger, la Chine s'opposa à l'introduction illégale de l'opium par les marchands britanniques. Cela déclencha les Guerres de l'Opium (1839-1842 et 1856-1860).

Vaincue par la supériorité navale occidentale, la Chine fut contrainte de signer une série de 'Traités inégaux' (dont le traité de Nankin en 1842). Ces accords obligèrent l'Empire du Milieu à céder Hong Kong aux Britanniques, à ouvrir de nombreux ports au commerce international et à concéder des privilèges d'extraterritorialité aux citoyens occidentaux. Le pays fut virtuellement découpé en 'zones d'influence' économiques entre la Grande-Bretagne, la France, l'Allemagne, la Russie et les États-Unis.

Conclusion
L'impérialisme européen en Asie a profondément humilié et déstructuré des civilisations millénaires. Qu'il prenne la forme d'un contrôle politique direct (Inde) ou d'un dépeçage économique forcé (Chine), il suscita des ressentiments profonds qui alimenteront les grandes révolutions asiatiques du XXe siècle.`,
  sections: [
    {
      title: 'I. L’Inde : de la Compagnie des Indes au « Raj britannique »',
      content: [
        "1. L'exploitation initiale par la Compagnie des Indes orientales (East India Company) :",
        "• Monopole commercial fondé sur des alliances avec les princes moghols et la création d'une armée privée composée d'officiers anglais et de mercenaires indiens (les Cipayes).",
        "2. La grande révolte des Cipayes (1857-1858) :",
        "• Déclenchée par l'obligation faite aux soldats hindous et musulmans de déchirer avec leurs dents des cartouches enduites de graisse de porc et de bœuf (sacrilège religieux).",
        "• Insurrection féroce réprimée dans le sang par les troupes britanniques.",
        "3. L'instauration du Raj britannique (1858-1947) :",
        "• La Couronne dissout la Compagnie : l'Inde est gouvernée directement par un Vice-roi siégeant à Calcutta puis à New Delhi.",
        "• En 1876, Benjamin Disraeli fait couronner la reine Victoria comme « Impératrice des Indes ».",
        "• Déstructuration économique : l'artisanat indien du tissage manuel (les filateurs de Dacca) est anéanti par l'importation massive des cotonnades industrielles de Manchester.",
        "• Le développement ferroviaire est conçu pour drainer le blé, le thé d'Assam et l'opium, générant d'effroyables famines régionales."
      ]
    },
    {
      title: 'II. La Chine : les Guerres de l’Opium et les « Traités inégaux »',
      content: [
        "1. La dynastie Qing (Mandchoue) face à l'agression commerciale occidentale :",
        "• La Chine, empire autarcique du « Milieu », exigeait que son thé, sa porcelaine et sa soie soient payés exclusivement en lingots d'argent.",
        "• Pour rééquilibrer leur balance commerciale, les Britanniques introduisent clandestinement l'opium cultivé en Inde, intoxiquant des millions de Chinois.",
        "• La saisie et la destruction de 20 000 caisses d'opium par le commissaire impérial Lin Zexu à Canton déclenche la Première Guerre de l'Opium (1839-1842).",
        "2. Le Traité de Nankin (1842) et le système des concessions :",
        "• Cession de l'île stratégique de Hong Kong à la Grande-Bretagne.",
        "• Ouverture obligatoire de 5 ports au commerce international (Canton, Shanghai, etc.).",
        "• Clause d'extraterritorialité : les Européens ne sont justiciables que devant leurs propres tribunaux consulaires.",
        "3. Le « Break-up of China » (dépeçage en zones d'influence) :",
        "• Seconde Guerre de l'Opium (1856-1860) : mise à sac du Palais d'Été de Pékin par les troupes franco-britanniques.",
        "• Révolte nationaliste des Boxers (1900) férocement écrasée par une coalition internationale de 8 puissances."
      ],
      table: {
        headers: ['Territoire Asiatique', 'Puissance Dominante', 'Forme de Domination', 'Conséquences Majeures'],
        rows: [
          ["Inde", "Grande-Bretagne", "Colonisation directe (Raj britannique, Vice-roi)", "Ruine des artisans textiles locaux, famines, intégration impériale."],
          ["Chine", "Multiples (GB, France, Allemagne, Russie)", "Semi-colonie, traités inégaux, concessions territoriales", "Perte de souveraineté, dépendance à l'opium, révoltes populaires."]
        ]
      }
    }
  ],
  conclusion: "L'impérialisme européen en Asie a profondément humilié et déstructuré des civilisations millénaires. Qu'il prenne la forme d'un contrôle politique direct (Inde) ou d'un dépeçage économique forcé (Chine), il suscita des ressentiments profonds qui alimenteront les grandes révolutions asiatiques du XXe siècle."
};

// -------------------------------------------------------------------------
// LEÇON 9 : L'IMPÉRIALISME JAPONAIS
// -------------------------------------------------------------------------

export const LESSON_9_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-9',
  number: 'LEÇON 9',
  title: "L'IMPÉRIALISME JAPONAIS",
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "Au milieu du XIXe siècle, le Japon est un pays féodal, replié sur lui-même sous le régime du Shogunat. Menacé d'asservissement par les navires de guerre américains en 1853, le Japon va opérer un sursaut unique dans l'histoire moderne : s'industrialiser à marche forcée pour échapper au sort de la Chine et devenir, à son tour, une puissance impérialiste redoutable.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Troisième partie : L'impérialisme dans le reste du monde

Leçon 9 : L'impérialisme japonais

Introduction
Au milieu du XIXe siècle, le Japon est un pays féodal, replié sur lui-même sous le régime du Shogunat. Menacé d'asservissement par les navires de guerre américains en 1853, le Japon va opérer un sursaut unique dans l'histoire moderne : s'industrialiser à marche forcée pour échapper au sort de la Chine et devenir, à son tour, une puissance impérialiste redoutable.

I. L'ère Meiji (1868-1912) : la modernisation accélérée
En 1868, le jeune empereur Mutsuhito abolit le Shogunat féodal et proclame l'ère Meiji (le 'gouvernement éclairé'). Il lance une révolution politique, économique et sociale radicale résumée par le slogan 'Pays riche, armée forte'.

Le Japon adopte les techniques occidentales tout en préservant son identité culturelle shintoïste. L'État finance la construction d'infrastructures modernes, d'industries lourdes (les Zaibatsus comme Mitsubishi, Mitsui) et d'un système éducatif d'élite. L'armée est entièrement réorganisée sur le modèle prussien et la marine sur le modèle britannique. En quelques décennies, le Japon devient la première puissance industrielle et militaire d'Asie.

II. L'expansionnisme japonais en Asie
L'étroitesse de son territoire, dépourvu de matières premières (pétrole, fer, charbon), et sa croissance démographique rapide poussent logiquement le Japon industrialisé vers l'impérialisme pour s'assurer des marchés et des ressources.

Cette agressivité géopolitique se traduit par des victoires militaires éclatantes :
— La guerre sino-japonaise (1894-1895) : Le Japon bat la Chine, annexe l'île de Taïwan et impose son influence en Corée.
— La guerre russo-japonaise (1904-1905) : À la surprise générale, le Japon écrase l'Empire de Russie sur terre (bataille de Mukden) et sur mer (bataille de Tsushima). C'est la première fois à l'époque moderne qu'une nation asiatique bat une puissance européenne. Cette victoire consacre le Japon comme superpuissance régionale et conduit à l'annexion définitive de la Corée en 1910.

Conclusion
L'impérialisme japonais démontre que l'industrialisation était la clé de la puissance au XIXe siècle. En devenant le prédateur de ses propres voisins asiatiques, le Japon Meiji s'est affirmé comme un acteur incontournable des relations internationales, préparant le terrain pour les futurs affrontements de la Seconde Guerre mondiale dans le Pacifique.`,
  sections: [
    {
      title: 'I. La Révolution de l’ère Meiji (1868-1912) : « Pays riche, armée forte »',
      content: [
        "1. La fin du Sakoku (isolement séculaire) :",
        "• En 1853, le commodore américain Matthew Perry pénètre de force dans la baie d'Edo (Tokyo) avec ses « Vaisseaux noirs » à vapeur, imposant l'ouverture des ports japonais.",
        "• Prise de conscience brutale de l'élite japonaise : moderniser le pays immédiatement ou subir l'asservissement colonial comme la Chine voisine.",
        "2. Les réformes de Mutsuhito (Ère Meiji) :",
        "• Abolition des privilèges féodaux des samouraïs et suppression de la dictature militaire du Shogun Tokugawa.",
        "• L'État finance et construit les usines clés en main avant de les céder à de grands conglomérats industriels et bancaires privés appelés « Zaibatsus » (Mitsubishi, Mitsui, Sumitomo, Yasuda).",
        "• Modernisation militaire calquée sur les meilleures armées mondiales : conscription universelle, doctrine terrestre prussienne et flotte de guerre cuirassée sur le modèle britannique."
      ]
    },
    {
      title: 'II. L’agression impérialiste et les conquêtes militaires du Japon',
      content: [
        "1. Les motivations de l'impérialisme nippon :",
        "• Territoire exigu, montagneux, menacé de surpopulation et tragiquement pauvre en ressources naturelles (absence de fer, de charbon et de pétrole).",
        "• Volonté d'instaurer une sphère de coprospérité asiatique dominée exclusivement par Tokyo.",
        "2. Les étapes de l'expansion militaire :",
        "• Guerre sino-japonaise (1894-1895) : défaite humiliante de la Chine, cession de l'île de Formose (Taïwan) et des îles Pescadores au Japon par le traité de Shimonoseki.",
        "• Guerre russo-japonaise (1904-1905) :",
        "  - Siège de Port-Arthur et écrasement de l'armée tsariste à la bataille de Mukden.",
        "  - Destruction totale de la flotte russe de la Baltique par l'amiral Togo dans le détroit de Tsushima (mai 1905).",
        "  - Traité de Portsmouth (négocié sous l'égide de Roosevelt) : reconnaissance des droits du Japon sur la Mandchourie du Sud et la moitié de Sakhaline.",
        "• Annexion totale et brutale de la Corée en 1910, transformée en colonie d'exploitation agricole et industrielle."
      ],
      table: {
        headers: ['Événement Historique', 'Adversaire Vaincu', 'Gains Territoriaux & Stratégiques', 'Impact Mondial'],
        rows: [
          ["Guerre sino-japonaise (1894-1895)", "Chine impériale", "Annexion de Taïwan, protectorat de fait sur la Corée.", "Affaiblissement définitif de la dynastie Qing."],
          ["Guerre russo-japonaise (1904-1905)", "Empire de Russie", "Port-Arthur, moitié de Sakhaline, sud Mandchourie.", "Premier triomphe militaire asiatique sur une puissance blanche."],
          ["Annexion de la Corée (1910)", "Royaume de Corée", "Intégration totale à l'Empire japonais.", "Le Japon s'impose comme gendarme impérial d'Asie orientale."]
        ]
      }
    }
  ],
  conclusion: "L'impérialisme japonais démontre que l'industrialisation était la clé de la puissance au XIXe siècle. En devenant le prédateur de ses propres voisins asiatiques, le Japon Meiji s'est affirmé comme un acteur incontournable des relations internationales, préparant le terrain pour les futurs affrontements de la Seconde Guerre mondiale dans le Pacifique."
};

// -------------------------------------------------------------------------
// LEÇON 10 : L'IMPÉRIALISME AMÉRICAIN
// -------------------------------------------------------------------------

export const LESSON_10_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-10',
  number: 'LEÇON 10',
  title: "L'IMPÉRIALISME AMÉRICAIN",
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "Nés d'une guerre d'indépendance contre le colonialisme britannique, les États-Unis d'Amérique ont longtemps proclamé leur attachement à la liberté des peuples. Pourtant, portés par une croissance économique phénoménale après la Guerre de Sécession et guidés par des convictions idéologiques messianiques, ils développent à la fin du XIXe siècle un impérialisme spécifique, fondé sur la domination économique et l'hégémonie géopolitique régionale.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Troisième partie : L'impérialisme dans le reste du monde

Leçon 10 : L'impérialisme américain

Introduction
Nés d'une guerre d'indépendance contre le colonialisme britannique, les États-Unis d'Amérique ont longtemps proclamé leur attachement à la liberté des peuples. Pourtant, portés par une croissance économique phénoménale après la Guerre de Sécession et guidés par des convictions idéologiques messianiques, ils développent à la fin du XIXe siècle un impérialisme spécifique, fondé sur la domination économique et l'hégémonie géopolitique régionale.

I. Les fondements idéologiques et économiques
L'expansionnisme américain s'appuie sur deux piliers conceptuels :
1. La doctrine Monroe (1823) : Résumée par la formule 'L'Amérique aux Américains', elle interdisait initialement toute intervention européenne sur le continent américain. Elle fut transformée par le président Theodore Roosevelt (Corollaire Roosevelt) en un droit pour les États-Unis d'exercer une 'police internationale' en Amérique latine.
2. La Destinée Manifeste : Croyance selon laquelle les États-Unis ont reçu de la Providence divine la mission de répandre la démocratie, la liberté et la civilisation occidentale à travers le monde.
Sur le plan économique, la puissance industrielle américaine exige des débouchés pour ses excédents de capitaux et de marchandises, ainsi qu'un contrôle des matières premières stratégiques (sucre, bananes, pétrole, minerais).

II. Les formes de l'impérialisme américain
L'impérialisme américain utilise rarement l'annexion territoriale directe de type colonial (sauf de rares exceptions comme Porto Rico, Hawaï ou les Philippines après la guerre contre l'Espagne en 1898). Il privilégie deux méthodes subtiles et efficaces :
1. La diplomatie du dollar : Utilisation de la puissance financière pour contrôler l'économie des États d'Amérique latine et des Caraïbes. Les entreprises américaines (comme la puissante United Fruit Company) achètent d'immenses plantations, contrôlent les infrastructures et dictent leur volonté aux gouvernements locaux, surnommés ironiquement 'Républiques bananières'.
2. La politique du Gros Bâton (Big Stick) de Theodore Roosevelt : Intervention militaire directe dès que les intérêts économiques ou stratégiques américains sont menacés. Les Marines occupent ainsi à plusieurs reprises Haïti, le Nicaragua, Saint-Domingue et Cuba.
L'exemple le plus spectaculaire de cet impérialisme est le soutien américain à la sécession du Panama en 1903 pour arracher la concession et le contrôle perpétuel de la zone du Canal de Panama, voie d'eau interocéanique hautement stratégique.

Conclusion
L'impérialisme américain a inauguré les méthodes modernes du néocolonialisme et de l'hégémonie économique. En transformant la mer des Caraïbes et l'Amérique latine en leur 'arrière-cour' exclusive, les États-Unis ont bâti une puissance impériale globale qui dominera l'ensemble du XXe siècle.`,
  sections: [
    {
      title: 'I. Fondements idéologiques et ressorts économiques de l’impérialisme US',
      content: [
        "1. Les doctrines géopolitiques fondatrices :",
        "• La Doctrine Monroe (1823) : « L'Amérique aux Américains » énoncée par James Monroe. Vise initialement à empêcher le retour des puissances coloniales européennes dans les anciennes colonies espagnoles.",
        "• Le Corollaire Roosevelt (1904) : Theodore Roosevelt modifie le sens de la doctrine : les États-Unis s'arrogent un droit de police internationale préventif dans tout le continent américain en cas d'instabilité ou de défaillance financière.",
        "• La Destinée Manifeste (Manifest Destiny) : théorie providentialiste selon laquelle le peuple américain a le devoir sacré confié par Dieu d'étendre ses institutions démocratiques et chrétiennes.",
        "2. Les impératifs économiques du capitalisme américain :",
        "• Surproduction colossale d'acier, de céréales, de machines industrielles et de pétrole.",
        "• Nécessité vitale d'investir des capitaux excédentaires et de sécuriser les matières premières tropicales (canne à sucre cubaine, café d'Amérique centrale, bananes, cuivre chilien)."
      ]
    },
    {
      title: 'II. Les mécanismes opérationnels : Diplomatie du dollar et Big Stick',
      content: [
        "1. La guerre hispano-américaine de 1898 (Le tournant impérialiste) :",
        "• Prétexte de l'explosion du cuirassé USS Maine dans le port de La Havane.",
        "• Victoire éclair contre l'Espagne : annexion de Porto Rico, de l'île de Guam et des Philippines (après une féroce guerre contre les indépendantistes philippins) ; protectorat sur Cuba (amendement Platt accordant la base navale de Guantánamo).",
        "• Annexion de l'archipel d'Hawaï la même année (1898).",
        "2. La Diplomatie du Dollar (Dollar Diplomacy du président William Taft) :",
        "• Prêts massifs aux gouvernements latino-américains gagés sur leurs recettes douanières.",
        "• Omnipuissance des multinationales comme la United Fruit Company (la « pieuvre » en Amérique centrale), transformant les pays en « Républiques bananières » dociles.",
        "3. La politique du « Big Stick » (Le Gros Bâton de Theodore Roosevelt) :",
        "• Débarquements incessants des Marines pour rétablir l'ordre pro-américain : Haïti (1915-1934), République Dominicaine, Nicaragua.",
        "• L'affaire du Canal de Panama (1903) : face au refus de la Colombie de ratifier le traité du canal, Washington organise et arme la sécession du Panama, puis fait signer au nouvel État le traité Hay-Bunau-Varilla accordant aux USA la souveraineté perpétuelle sur la zone du canal (inauguré en 1914)."
      ],
      table: {
        headers: ['Concept / Instrument', 'Définition & Acteurs', 'Exemples d’Application Concrète'],
        rows: [
          ["Destinée Manifeste", "Mission sacrée d'expansion civilisatrice", "Conquête de l'Ouest, guerre de 1898 contre l'Espagne."],
          ["Diplomatie du Dollar", "Domination économique par les firmes et banques US", "United Fruit Company au Guatemala et Honduras."],
          ["Politique du Big Stick", "Intervention militaire armée des Marines", "Occupations de Haïti, Saint-Domingue et du Nicaragua."],
          ["Canal de Panama (1903)", "Contrôle géostratégique des voies maritimes mondiales", "Création de l'État du Panama pour sécuriser le canal."]
        ]
      }
    }
  ],
  conclusion: "L'impérialisme américain a inauguré les méthodes modernes du néocolonialisme et de l'hégémonie économique. En transformant la mer des Caraïbes et l'Amérique latine en leur 'arrière-cour' exclusive, les États-Unis ont bâti une puissance impériale globale qui dominera l'ensemble du XXe siècle."
};
