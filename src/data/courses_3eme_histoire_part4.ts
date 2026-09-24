import { LessonContent } from './courses';
import {
  SVG_GUERRE_FROIDE_BIPOLARISME,
  SVG_SENEGAL_POLITIQUE_1944_1962
} from './diagrams_3eme_histoire';

// =========================================================================
// HISTOIRE 3ÈME - SÉNÉGAL (PROGRAMME OFFICIEL INTÉGRAL BFEM)
// CINQUIÈME PARTIE : DÉCOLONISATION ET ÉMERGENCE DU TIERS-MONDE (LEÇONS 15 À 19)
// Développement complet et exhaustif sans résumés
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 15 : LES CAUSES ET LES FORMES DE LA DÉCOLONISATION
// -------------------------------------------------------------------------

export const LESSON_15_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-15',
  number: 'LEÇON 15',
  title: 'LES CAUSES ET LES FORMES DE LA DÉCOLONISATION',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "La décolonisation est le processus historique par lequel les peuples colonisés accèdent à l'indépendance et à la souveraineté nationale. S'accélérant après 1945, ce mouvement d'émancipation transforme la carte géopolitique mondiale et brise les empires coloniaux façonnés au XIXe siècle.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Cinquième partie : Décolonisation et émergence du Tiers-Monde

Leçon 15 : Les causes et les formes de la décolonisation

Introduction
La décolonisation est le processus historique par lequel les peuples colonisés accèdent à l'indépendance et à la souveraineté nationale. S'accélérant après 1945, ce mouvement d'émancipation transforme la carte géopolitique mondiale et brise les empires coloniaux façonnés au XIXe siècle.

I. Les causes de la décolonisation
1. Les facteurs internes : La participation active des colonisés aux deux guerres mondiales (notamment les tirailleurs sénégalais) brise le mythe de l'invincibilité de l'homme blanc. L'exploitation économique continue alimente le mécontentement populaire. Parallèlement, l'émergence d'une élite indigène instruite à l'occidentale (comme Léopold Sédar Senghor, Houphouët-Boigny, Nehru) structure les revendications nationalistes à travers des partis politiques et des syndicats.
2. Les facteurs externes : La Seconde Guerre mondiale a affaibli matériellement et politiquement les métropoles (France, Royaume-Uni). Les deux nouvelles superpuissances, les États-Unis (par tradition anticoloniale) et l'URSS (par idéologie marxiste-léniniste), soutiennent l'émancipation des peuples. Enfin, la charte de l'ONU affirme explicitement « le droit des peuples à disposer d'eux-mêmes » et sert de tribune internationale pour les nationalistes.

II. Les formes de la décolonisation
Le passage à l'indépendance s'est opéré selon deux voies principales :
1. La voie pacifique ou négociée : Elle se caractérise par des discussions et des accords progressifs entre la métropole et les élites locales. C'est le modèle prédominant dans l'Empire britannique (comme en Inde en 1947 ou au Ghana en 1957) et dans la majeure partie de l'Afrique noire française (réformes de la Loi-cadre Defferre de 1956, Communauté de 1958, puis indépendances de 1960).
2. La voie violente ou armée : Lorsque la métropole refuse obstinément de lâcher sa souveraineté, la décolonisation débouche sur des guerres de libération nationale longues et meurtrières. Les exemples les plus frappants sont la guerre d'Indochine (1946-1954), l'insurrection d'Algérie (1954-1962) contre la France, ou encore les guerres d'indépendance dans les colonies portugaises (Angola, Mozambique) jusque dans les années 1970.

Conclusion
Qu'elle ait été le fruit de négociations ou de luttes armées, la décolonisation a permis l'entrée massive de nouveaux États sur la scène internationale, modifiant radicalement les rapports de force mondiaux au sein de l'ONU.`,
  sections: [
    {
      title: 'I. Les facteurs déterminants de la décolonisation',
      content: [
        "1. Les facteurs internes aux territoires sous tutelle :",
        "• La prise de conscience née des deux guerres mondiales : en combattant en première ligne, les colonisés (notamment les Tirailleurs sénégalais) découvrent la vulnérabilité et les faiblesses des Européens ; le mythe de la supériorité raciale blanche s'effondre.",
        "• L'exaspération populaire face aux abus coloniaux : maintien des corvées de travail forcé, spoliation des terres les plus fertiles et discrimination salariale insultante.",
        "• La formation d'une élite intellectuelle moderniste : scolarisés dans les universités européennes ou les écoles fédérales (comme l'École Normale William Ponty à Sébikotane au Sénégal), des dirigeants comme Léopold Sédar Senghor, Félix Houphouët-Boigny, Kwame Nkrumah ou Jawaharlal Nehru retournent contre les puissances coloniales leurs propres idéaux républicains de liberté et d'égalité.",
        "• Création de structures de combat modernes : création de syndicats de travailleurs (UGTAN) et de partis de masse (RDA - Rassemblement Démocratique Africain).",
        "2. Le contexte international favorable (Facteurs externes) :",
        "• L'épuisement financier, militaire et moral de la France, de la Grande-Bretagne, des Pays-Bas et de la Belgique au sortir de 1945.",
        "• L'attitude anticoloniale des deux Superpuissances de la Guerre froide :",
        "  - Les États-Unis : ancienne colonie émancipée, ils exigent l'ouverture commerciale des marchés captifs des empires coloniaux.",
        "  - L'URSS : par fidélité à la doctrine léniniste sur l'impérialisme, apporte une aide financière, diplomatique et militaire directe aux mouvements de libération nationale.",
        "• La tribune internationale de l'Organisation des Nations Unies (ONU) : l'article 1er alinéa 2 de la Charte de San Francisco proclame solennellement « le principe de l'égalité de droits des peuples et de leur droit à disposer d'eux-mêmes »."
      ],
      image: {
        url: '',
        alt: 'La Guerre Froide et le Monde Bipolaire',
        caption: 'Figure 9 : L\'affrontement Est-Ouest (1947-1991) et le soutien aux décolonisations',
        svgContent: SVG_GUERRE_FROIDE_BIPOLARISME
      }
    },
    {
      title: 'II. Les deux grandes trajectoires de l’émancipation coloniale',
      content: [
        "1. La voie pacifique ou négociée (L'émancipation par étapes) :",
        "• Privilégiée lorsque les métropoles acceptent de faire des concessions politiques pour préserver des liens économiques privilégiés.",
        "• Exemples britanniques : transfert d'autorité négocié en Inde (1947), au Ghana (1957 sous Nkrumah) et au Nigeria (1960).",
        "• Exemples de l'Empire français en Afrique noire : évolution progressive encadrée par la Loi-cadre Defferre (1956), le référendum de la Communauté (1958) et les indépendances de 1960.",
        "2. La voie armée ou insurrectionnelle (Les guerres de libération) :",
        "• Se produit lorsque la puissance occupante refuse catégoriquement l'autodétermination en raison de la présence d'une forte minorité de colons européens (colonies de peuplement).",
        "• La guerre d'Indochine (1946-1954) menée par le Viêt Minh.",
        "• La tragédie de la guerre d'Algérie (1954-1962) menée par le FLN et l'ALN.",
        "• Les guerres coloniales portugaises (Angola, Mozambique, Guinée-Bissau avec Amílcar Cabral) face à la dictature salazariste jusqu'en 1974-1975."
      ],
      table: {
        headers: ['Forme de Décolonisation', 'Caractéristiques & Méthodes', 'Exemples Pays Typiques', 'Impact Humain & Bilan'],
        rows: [
          ["Voie pacifique / Négociée", "Réformes institutionnelles progressives, élections, tables rondes.", "Ghana (1957), Sénégal (1960), Côte d'Ivoire (1960).", "Transition ordonnée, maintien de liens de coopération."],
          ["Voie violente / Insurrectionnelle", "Guerres de maquis, guérilla, attentats urbains, répression féroce.", "Indochine (1946-1954), Algérie (1954-1962), Angola.", "Désastres humains, traumatismes durables, ruptures brutales."]
        ]
      }
    }
  ],
  conclusion: "Qu'elle ait été le fruit de négociations ou de luttes armées, la décolonisation a permis l'entrée massive de nouveaux États sur la scène internationale, modifiant radicalement les rapports de force mondiaux au sein de l'ONU."
};

// -------------------------------------------------------------------------
// LEÇON 16 : LA DÉCOLONISATION EN ASIE (INDE ET INDOCHINE)
// -------------------------------------------------------------------------

export const LESSON_16_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-16',
  number: 'LEÇON 16',
  title: "LA DÉCOLONISATION EN ASIE (EXEMPLES DE L'INDE OU DE L'INDOCHINE)",
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "L'Asie est le premier continent à s'éveiller à la décolonisation après la Seconde Guerre mondiale. Ce processus y prend des trajectoires opposées selon l'attitude des métropoles : l'Inde britannique illustre une décolonisation négociée mais douloureuse, tandis que l'Indochine française sombre dans une guerre totale.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Cinquième partie : Décolonisation et émergence du Tiers-Monde

Leçon 16 : La décolonisation en Asie (exemples de l'Inde ou de l'Indochine)

Introduction
L'Asie est le premier continent à s'éveiller à la décolonisation après la Seconde Guerre mondiale. Ce processus y prend des trajectoires opposées selon l'attitude des métropoles : l'Inde britannique illustre une décolonisation négociée mais douloureuse, tandis que l'Indochine française sombre dans une guerre totale.

I. Le modèle négocié : L'Inde britannique (1947)
Le mouvement nationaliste indien est ancien, porté par le parti du Congrès de Mahatma Gandhi et de Jawaharlal Nehru, et par la Ligue musulmane d'Ali Jinnah. Gandhi popularise des méthodes de lutte originales basées sur la non-violence, la désobéissance civile et le boycott des produits britanniques. Consciente de l'inévitabilité de l'indépendance après 1945, la Grande-Bretagne négocie le transfert de souveraineté. Cependant, de profonds antagonismes religieux éclatent entre hindous et musulmans. Le 15 août 1947, l'indépendance est proclamée mais elle s'accompagne d'une douloureuse partition de l'ancien empire en deux États distincts : l'Union Indienne (à majorité hindoue) et le Pakistan (à majorité musulmane), entraînant des déplacements massifs de populations et des massacres sanglants.

II. Le modèle violent : L'Indochine française (1946-1954)
En Indochine, l'occupation japonaise pendant la guerre affaiblit l'autorité française. Dès le départ des Japonais en 1945, le leader communiste Hô Chi Minh proclame l'indépendance de la République démocratique du Viêt Nam. La France tente de réimposer sa souveraineté coloniale par la force, déclenchant la guerre d'Indochine en 1946. Ce conflit s'inscrit rapidement dans le contexte de la Guerre froide (la France est soutenue par les États-Unis, le Viêt Minh par la Chine communiste et l'URSS). En mai 1954, l'armée française subit une défaite militaire retentissante à la bataille de Diên Biên Phu. Les accords de Genève (juillet 1954) actent le départ de la France et la division provisoire du Viêt Nam le long du 17e parallèle, ouvrant la voie à une future intervention américaine.

Conclusion
La décolonisation de l'Asie a montré que l'émancipation était irrémédiable. Le démantèlement des empires coloniaux dans cette région a laissé place à de nouvelles frontières géopolitiques fortement marquées par les tensions religieuses et idéologiques de l'époque.`,
  sections: [
    {
      title: 'I. L’émancipation de l’Inde britannique : la non-violence et le drame de la partition',
      content: [
        "1. Les forces politiques et la doctrine de Gandhi :",
        "• Le Parti du Congrès (fondé en 1885) : dirigé par Mohandas Karamchand Gandhi (surnommé le « Mahatma », la Grande Âme) et le laïque Jawaharlal Nehru.",
        "• Les méthodes d'action originales :",
        "  - L'Ahimsa : respect absolu de la vie et non-violence active.",
        "  - La Satyagraha (force de la vérité) : résistance par la désobéissance civile pacifique.",
        "  - La Marche du Sel (1930) : protestation contre le monopole fiscal britannique.",
        "  - Le boycott des vêtements anglais et le filage manuel du coton (le rouet devient le symbole national indien).",
        "• La Ligue musulmane de Muhammad Ali Jinnah : refuse de vivre sous la domination démographique hindoue et exige la création d'un État musulman séparé (« Théorie des deux nations »).",
        "2. La négociation et la tragédie de la partition (1947) :",
        "• Le dernier vice-roi des Indes, Lord Louis Mountbatten, accélère le calendrier de passation de pouvoir.",
        "• Le 15 août 1947 : proclamation de l'indépendance de l'Union Indienne et du Pakistan (divisé alors en Pakistan occidental et Pakistan oriental - actuel Bangladesh).",
        "• Exodes croisés gigantesques : 15 millions de réfugiés traversent les frontières dans la terreur, causant des massacres interreligieux effroyables (plus d'un million de victimes).",
        "• Le 30 janvier 1948 : Gandhi est assassiné à New Delhi par un fanatique hindou extrémiste lui reprochant d'avoir cédé aux musulmans."
      ]
    },
    {
      title: 'II. L’Indochine française : la guerre totale et la capitulation de Diên Biên Phu',
      content: [
        "1. L'insurrection indépendantiste du Viêt Minh :",
        "• Après la capitulation japonaise, Hô Chi Minh proclame l'indépendance de la République Démocratique du Viêt Nam à Hanoï le 2 septembre 1945.",
        "• Échec des négociations avec la France (conférence de Fontainebleau) et bombardement de Haiphong par la marine française en novembre 1946 : début de 8 années de guerre acharnée.",
        "2. Internationalisation du conflit dans le cadre de la Guerre froide :",
        "• Dès 1949 avec la victoire de Mao Zedong en Chine, le Viêt Minh reçoit des armements lourds soviétiques et chinois.",
        "• La France, incapable de financer seule la guerre, reçoit une aide financière et logistique massive des États-Unis (théorie des dominos).",
        "3. La bataille de Diên Biên Phu et les accords de Genève (1954) :",
        "• Le général Vo Nguyen Giap assiège la cuvette retranchée de Diên Biên Phu avec des canons hissés à dos d'homme à flanc de montagne.",
        "• Le 7 mai 1954 : chute du camp retranché français après 55 jours de combats dantesques.",
        "• Accords de Genève (21 juillet 1954 signés par Pierre Mendès France) :",
        "  - Reconnaissance de la souveraineté du Cambodge, du Laos et du Viêt Nam.",
        "  - Division temporaire du Viêt Nam en deux zones séparées par le 17e parallèle (Nord-Viêt Nam communiste et Sud-Viêt Nam pro-américain), amorçant la future guerre du Viêt Nam."
      ],
      table: {
        headers: ['Critères de Comparaison', 'Inde Britannique', 'Indochine Française'],
        rows: [
          ["Leaders emblématiques", "Mahatma Gandhi, Jawaharlal Nehru, Ali Jinnah.", "Hô Chi Minh, Général Vo Nguyen Giap."],
          ["Mode d'action principal", "Non-violence, désobéissance civile, négociations parlementaires.", "Guerre de maquis, guerre révolutionnaire, batailles d'artillerie."],
          ["Issue du processus", "Indépendance en 1947 au prix d'une partition religieuse sanglante.", "Défaite française à Diên Biên Phu (1954), division au 17e parallèle."]
        ]
      }
    }
  ],
  conclusion: "La décolonisation de l'Asie a montré que l'émancipation était irrémédiable. Le démantèlement des empires coloniaux dans cette région a laissé place à de nouvelles frontières géopolitiques fortement marquées par les tensions religieuses et idéologiques de l'époque."
};

// -------------------------------------------------------------------------
// LEÇON 17 : LA DÉCOLONISATION EN AFRIQUE NOIRE ET EN ALGÉRIE
// -------------------------------------------------------------------------

export const LESSON_17_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-17',
  number: 'LEÇON 17',
  title: 'LA DÉCOLONISATION EN AFRIQUE NOIRE ET EN ALGÉRIE',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "La décolonisation de l'Afrique s'est déroulée principalement durant les décennies 1950 et 1960. Elle présente un contraste saisissant entre l'Afrique subsaharienne, où l'émancipation s'est globalement faite par des réformes progressives et pacifiques, et l'Algérie, théâtre d'un conflit violent et traumatisant.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Cinquième partie : Décolonisation et émergence du Tiers-Monde

Leçon 17 : La décolonisation en Afrique noire et en Algérie

Introduction
La décolonisation de l'Afrique s'est déroulée principalement durant les décennies 1950 et 1960. Elle présente un contraste saisissant entre l'Afrique subsaharienne, où l'émancipation s'est globalement faite par des réformes progressives et pacifiques, et l'Algérie, théâtre d'un conflit violent et traumatisant.

I. La décolonisation en Afrique noire : une émancipation majoritairement négociée
Dans les colonies britanniques d'Afrique subsaharienne, le processus est précoce. Le Ghana montre la voie en 1957 sous la direction de Kwame Nkrumah. Dans l'espace colonial français, la métropole tente d'abord de réformer l'Empire sans concéder l'indépendance : création de l'Union française (1946), puis adoption de la Loi-cadre Defferre (1956) qui octroie l'autonomie interne aux territoires. En 1958, le général de Gaulle propose la « Communauté française » par référendum. Seule la Guinée d'Ahmed Sékou Touré vote « Non » et accède immédiatement à l'indépendance. Devant l'évolution historique, la France accepte de négocier et l'année 1960 devient « l'année de l'Afrique », voyant quatorze États francophones, dont le Sénégal, accéder pacifiquement à la pleine souveraineté.

II. La décolonisation de l'Algérie : une guerre de libération tragique (1954-1962)
Contrairement à l'Afrique subsaharienne, l'Algérie est une colonie de peuplement où vivent un million de ressortissants européens (les « Pieds-Noirs ») fortement attachés au statut de l'Algérie française. Face au blocage politique, le Front de Libération Nationale (FLN) déclenche l'insurrection armée le 1er novembre 1954 (« Toussaint rouge »). La France s'engage dans une guerre féroce, envoyant le contingent militaire. La crise algérienne provoque la chute de la IVe République en métropole et le retour au pouvoir du général de Gaulle en 1958. Conscient de l'impasse, de Gaulle ouvre des négociations qui aboutissent aux accords d'Évian (mars 1962). L'Algérie proclame son indépendance le 5 juillet 1962, au prix d'un lourd bilan humain et du départ massif des Européens.

Conclusion
La décolonisation africaine a accouché d'États souverains confrontés immédiatement aux défis de la construction nationale, de l'unité politique et du développement économique, dans un contexte post-colonial complexe.`,
  sections: [
    {
      title: 'I. L’Afrique subsaharienne : étapes institutionnelles vers les indépendances de 1960',
      content: [
        "1. L'expérience pionnière en Afrique anglophone :",
        "• La Gold Coast (actuel Ghana) menée par Kwame Nkrumah : grèves générales pacifiques, boycott des produits britanniques (« Positive Action ») et victoire électorale du CPP menant à l'indépendance historique le 6 mars 1957.",
        "2. Les étapes de la marche vers l'indépendance dans l'Afrique française :",
        "• Conférence de Brazzaville (1944) : discours de De Gaulle promettant des réformes tout en écartant formellement toute indépendance.",
        "• Constitution de 1946 : création de l'Union française, abolition du Code de l'Indigénat (Loi Lamine Guèye de mai 1946 accordant la citoyenneté) et abolition du travail forcé (Loi Houphouët-Boigny d'avril 1946).",
        "• La Loi-cadre Defferre (23 juin 1956) :",
        "  - Instaure le suffrage universel et le collège électoral unique.",
        "  - Crée des Conseils de gouvernement territoriaux dotés d'une véritable autonomie interne (dirigés par des vice-présidents africains comme Mamadou Dia au Sénégal).",
        "• Le Référendum de 1958 et la Communauté franco-africaine :",
        "  - Proposé par De Gaulle revenu au pouvoir en 1958.",
        "  - Choix entre le « Oui » (autonomie au sein de la Communauté) et le « Non » (indépendance immédiate avec rupture totale de l'aide française).",
        "  - La Guinée d'Ahmed Sékou Touré choisit le « Non » historique le 28 septembre 1958 (« Nous préférons la liberté dans la pauvreté à la richesse dans l'esclavage ») et devient indépendante le 2 octobre 1958.",
        "• 1960, « L'Année de l'Afrique » :",
        "  - Face à la faillite de la Communauté, la France accorde l'indépendance à 14 colonies africaines francophones, dont le Sénégal (proclamé le 20 août 1960), le Mali, la Côte d'Ivoire, le Dahomey, etc."
      ]
    },
    {
      title: 'II. L’Algérie (1954-1962) : huit ans d’une guerre de décolonisation sanglante',
      content: [
        "1. La spécificité coloniale algérienne :",
        "• Colonie de peuplement depuis 1830, divisée en 3 départements français intégrés au territoire national (« L'Algérie, c'est la France »).",
        "• 1 million d'Européens (« Pieds-Noirs ») monopolisant les richesses face à 9 millions d'Algériens musulmans discriminés et marginalisés.",
        "• Le massacre de Sétif et Guelma (8 mai 1945) : répression brutale d'une manifestation indépendantiste faisant des milliers de morts algériens.",
        "2. L'insurrection armée du FLN (1954) :",
        "• Le 1er novembre 1954 (« Toussaint Rouge ») : le Front de Libération Nationale (FLN) et sa branche armée l'ALN (Armée de Libération Nationale) lancent des dizaines d'attentats coordonnés.",
        "• Envoi massif du contingent militaire français (plus de 400 000 soldats français déployés).",
        "• La Bataille d'Alger (1957) : les parachutistes du général Massu répriment férocement les réseaux clandestins urbains du FLN en recourant à la torture systématique.",
        "3. La crise politique française et le dénouement :",
        "• Coup d'État des généraux et des colons à Alger le 13 mai 1958, provoquant la mort de la IVe République et le rappel au pouvoir de Charles de Gaulle.",
        "• De Gaulle comprend que la victoire militaire est illusoire et reconnaît le droit à l'autodétermination en 1959, déclenchant la révolte des jusqu'au-boutistes (putsch des généraux en 1961 et attentats de l'OAS - Organisation Armée Secrète).",
        "• Les Accords d'Évian (18 mars 1962) : cessez-le-feu officiel et référendum d'autodétermination.",
        "• Proclamation de l'indépendance le 5 juillet 1962 au prix de plusieurs centaines de milliers de morts algériens et de l'exode déchirant de 800 000 Pieds-Noirs vers la France."
      ],
      table: {
        headers: ['Territoire', 'Enjeux Spécifiques', 'Mode d’Accession', 'Dates Clés'],
        rows: [
          ["Ghana", "Pionnier anglophone en Afrique de l'Ouest", "Mobilisation pacifique de masse (Kwame Nkrumah)", "Indépendance : 6 mars 1957."],
          ["Guinée", "Rejet frontal de la Communauté gaulliste", "Vote 'Non' au référendum du 28 septembre 1958", "Indépendance : 2 octobre 1958."],
          ["Sénégal & AOF", "Évolution constitutionnelle progressive", "Loi-cadre (1956), Communauté (1958), Accords de transfert", "Indépendance : 20 août 1960."],
          ["Algérie", "Colonie de peuplement, 1 million de Pieds-Noirs", "Guerre de libération nationale (FLN/ALN)", "1954-1962, Accords d'Évian, 5 juillet 1962."]
        ]
      }
    }
  ],
  conclusion: "La décolonisation africaine a accouché d'États souverains confrontés immédiatement aux défis de la construction nationale, de l'unité politique et du développement économique, dans un contexte post-colonial complexe."
};

// -------------------------------------------------------------------------
// LEÇON 18 : BANDOENG ET L'ÉMERGENCE DU TIERS-MONDE
// -------------------------------------------------------------------------

export const LESSON_18_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-18',
  number: 'LEÇON 18',
  title: "BANDOENG ET L'ÉMERGENCE DU TIERS-MONDE",
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "L'accès à l'indépendance de nombreux pays d'Asie et d'Afrique fait basculer la scène internationale. En 1955, la conférence de Bandoeng marque l'entrée collective de ces anciens peuples colonisés dans la diplomatie mondiale. Ils affirment leur identité propre et refusent de s'aligner aveuglément sur les blocs de la Guerre froide, donnant naissance au concept de « Tiers-Monde ».",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Cinquième partie : Décolonisation et émergence du Tiers-Monde

Leçon 18 : Bandoeng et l'émergence du Tiers-Monde

Introduction
L'accès à l'indépendance de nombreux pays d'Asie et d'Afrique fait basculer la scène internationale. En 1955, la conférence de Bandoeng marque l'entrée collective de ces anciens peuples colonisés dans la diplomatie mondiale. Ils affirment leur identité propre et refusent de s'aligner aveuglément sur les blocs de la Guerre froide, donnant naissance au concept de « Tiers-Monde ».

I. La Conférence de Bandoeng (18-24 avril 1955)
Réunie en Indonésie à l'initiative de dirigeants comme Nehru (Inde), Zhou Enlai (Chine), Nasser (Égypte) et Sukarno (Indonésie), la conférence rassemble 29 pays d'Afrique et d'Asie représentant plus de la moitié de la population mondiale. C'est la première grande réunion internationale sans la participation des puissances occidentales ou de l'URSS. Le communiqué final condamne fermement le colonialisme sous toutes ses formes, affirme l'égalité de toutes les nations et prône le règlement pacifique des conflits.

II. L'affirmation du non-alignement et la notion de Tiers-Monde
Bandoeng pose les bases politiques du mouvement des « Non-alignés », qui sera formellement structuré à la conférence de Belgrade en 1961 sous l'impulsion de Tito (Yougoslavie), Nasser et Nehru. Leur doctrine est le refus de s'intégrer dans les pactes militaires dominés par Washington ou Moscou. C'est l'économiste français Alfred Sauvy qui forge en 1952 le terme « Tiers-Monde » par analogie avec le Tiers-État de la Révolution française, pour désigner cet ensemble de pays sous-développés, ignorés et désireux d'être reconnus.

III. Les limites et les faiblesses du mouvement
Malgré l'enthousiasme initial (l'« esprit de Bandoeng »), le Tiers-Monde se fragmente rapidement. Sur le plan politique, la neutralité est difficile à tenir : certains pays basculent dans la sphère d'influence soviétique (Cuba, Viêt Nam) ou américaine. Des conflits frontaliers et politiques éclatent entre pays membres (guerre sino-indienne, tensions arabo-israéliennes). Sur le plan économique, le Tiers-Monde fait face au défi écrasant du sous-développement, de la pauvreté, et au phénomène du néocolonialisme, où l'indépendance politique cache une dépendance économique persistante vis-à-vis des anciennes métropoles.

Conclusion
La conférence de Bandoeng a brisé le monopole des grandes puissances sur les relations internationales. Si l'unité politique du Tiers-Monde a rapidement montré ses limites, l'événement a ancré la nécessité d'un nouvel ordre économique mondial plus juste.`,
  sections: [
    {
      title: 'I. La Conférence de Bandoeng (18 au 24 avril 1955)',
      content: [
        "1. Une tribune internationale sans les puissances impériales :",
        "• Réunie dans la ville javanaise de Bandung (Indonésie) sous l'hospitalité du président Sukarno.",
        "• 29 nations afro-asiatiques présentes (représentant 1,4 milliard d'êtres humains, soit 54 % de la population planétaire de l'époque).",
        "• Figures historiques participantes : Jawaharlal Nehru (Inde), Zhou Enlai (Chine populaire), Gamal Abdel Nasser (Égypte), Norodom Sihanouk (Cambodge). L'Afrique est représentée par l'Égypte, l'Éthiopie, le Liberia, la Libye et le Soudan, ainsi que des observateurs du FLN algérien et de l'Afrique noire.",
        "2. Les 10 principes de Bandoeng :",
        "• Condamnation solennelle du colonialisme qualifié de « mal absolu » et dénonciation de l'apartheid en Afrique du Sud.",
        "• Égalité souveraine de toutes les races et de toutes les nations, petites et grandes.",
        "• Non-ingérence dans les affaires intérieures des États et respect de l'intégrité territoriale.",
        "• Règlement pacifique de tous les différends internationaux sans recours à la menace ou à la force."
      ]
    },
    {
      title: 'II. De Bandoeng au Mouvement des Non-Alignés et concept de Tiers-Monde',
      content: [
        "1. La naissance du Mouvement des Non-Alignés (Belgrade, 1961) :",
        "• Institutionnalisé sous l'égide du maréchal Tito (Yougoslavie communiste mais dissidente de Moscou), de Nehru et de Nasser.",
        "• Refus de rallier les pactes militaires des blocs (OTAN menée par les USA ou Pacte de Varsovie mené par l'URSS).",
        "• Neutralisme actif et solidarité face à l'impérialisme.",
        "2. L'origine du terme « Tiers-Monde » :",
        "• Forgé en 1952 par le démographe et économiste français Alfred Sauvy dans un article célèbre : « Car enfin ce Tiers-Monde ignoré, exploité, méprisé comme le Tiers-État, veut, lui aussi, être quelque chose ».",
        "• Désigne l'ensemble des pays d'Asie, d'Afrique et d'Amérique latine confrontés au sous-développement économique, à la malnutrition et à l'analphabétisme."
      ]
    },
    {
      title: 'III. Les fractures internes et les désillusions économiques',
      content: [
        "1. Les déchirements idéologiques et conflits armés :",
        "• Éclatement de conflits frontaliers sanglants entre pays membres (guerre de frontière sino-indienne de 1962, guerres indo-pakistanaises, rivalités dans le monde arabe).",
        "• Dépendance idéologique : certains pays rejoignent de fait le bloc soviétique (Cuba de Fidel Castro, Viêt Nam), d'autres s'alignent sur les puissances occidentales.",
        "2. La persistance du néocolonialisme et la détérioration des termes de l'échange :",
        "• Kwame Nkrumah théorise le concept de « néocolonialisme » : les nouveaux États ont conquis l'indépendance du drapeau et de l'hymne, mais restent prisonniers des mécanismes financiers, monétaires et commerciaux de l'Occident.",
        "• Revendication d'un Nouvel Ordre Économique International (NOEI) adoptée par l'ONU en 1974 pour exiger des prix équitables pour les matières premières du Sud."
      ],
      table: {
        headers: ['Étape Historique', 'Lieu & Date', 'Leaders Phares', 'Portée Internationale'],
        rows: [
          ["Conférence de Bandoeng", "Indonésie (Avril 1955)", "Sukarno, Nehru, Zhou Enlai, Nasser", "Éveil politique afro-asiatique, condamnation du colonialisme."],
          ["Conférence de Belgrade", "Yougoslavie (Septembre 1961)", "Tito, Nehru, Nasser, Nkrumah", "Création formelle du Mouvement des pays Non-Alignés."],
          ["Revendication du NOEI", "Assemblée Générale ONU (1974)", "Houari Boumédiène et pays du Sud", "Appel à un rééquilibrage économique mondial Nord-Sud."]
        ]
      }
    }
  ],
  conclusion: "La conférence de Bandoeng a brisé le monopole des grandes puissances sur les relations internationales. Si l'unité politique du Tiers-Monde a rapidement montré ses limites, l'événement a ancré la nécessité d'un nouvel ordre économique mondial plus juste."
};

// -------------------------------------------------------------------------
// LEÇON 19 : LE SÉNÉGAL : VIE POLITIQUE DE 1944 À 1962
// -------------------------------------------------------------------------

export const LESSON_19_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-19',
  number: 'LEÇON 19',
  title: 'LE SÉNÉGAL : VIE POLITIQUE DE 1944 À 1962',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "La période allant de 1944 à 1962 est cruciale pour le Sénégal contemporain. Elle correspond au réveil politique post-Seconde Guerre mondiale, à la structuration des mouvements nationalistes, à l'accession pacifique à l'indépendance et, enfin, à la mise en place des institutions nationales qui subissent une crise majeure en décembre 1962.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Cinquième partie : Décolonisation et émergence du Tiers-Monde

Leçon 19 : Le Sénégal : vie politique de 1944 à 1962

Introduction
La période allant de 1944 à 1962 est cruciale pour le Sénégal contemporain. Elle correspond au réveil politique post-Seconde Guerre mondiale, à la structuration des mouvements nationalistes, à l'accession pacifique à l'indépendance et, enfin, à la mise en place des institutions nationales qui subissent une crise majeure en décembre 1962.

I. Le réveil politique et la marche vers l'indépendance (1944-1958)
La conférence de Brazzaville en 1944 ouvre la voie à des réformes. La vie politique sénégalaise est initialement dominée par la SFIO de Lamine Guèye (qui fait voter la loi abolissant le statut d'indigénat en 1946). En 1948, Léopold Sédar Senghor rompt avec Lamine Guèye et crée le BDS (Bloc Démocratique Sénégalais), qui s'appuie sur les masses rurales et le soutien des chefs religieux pour devenir la première force politique du pays. La Loi-cadre Defferre de 1956 instaure le suffrage universel et permet au Sénégal de former son premier gouvernement autonome dirigé par Mamadou Dia.

II. L'expérience de la Fédération du Mali et l'Indépendance (1959-1960)
En 1958, le Sénégal vote « Oui » au référendum sur la Communauté française proposé par de Gaulle. Partisans de l'unité africaine, le Sénégal et le Soudan français (actuel Mali) s'unissent en janvier 1959 pour former la Fédération du Mali. C'est dans ce cadre fédéral que l'indépendance est officiellement négociée et proclamée le 20 juin 1960. Cependant, de profondes divergences idéologiques et des rivalités personnelles apparaissent rapidement entre les dirigeants sénégalais (Senghor, Dia) et soudanais (Modibo Keïta). Dans la nuit du 19 au 20 août 1960, la Fédération éclate. Le Sénégal proclame à nouveau son indépendance nationale le 20 août 1960, et Léopold Sédar Senghor en devient le premier président de la République, tandis que Mamadou Dia est reconduit comme chef du gouvernement.

III. L'épreuve du pouvoir et la crise institutionnelle de décembre 1962
Le Sénégal adopte en 1960 une constitution instaurant un régime parlementaire bicéphale : le pouvoir est partagé entre le Président de la République (Senghor, chargé de la diplomatie et de l'orientation politique) et le Président du Conseil (Mamadou Dia, chargé de l'administration et de la politique économique interne). Dia met en œuvre des réformes économiques ambitieuses basées sur le coopératisme agricole et la planification, ce qui heurte les intérêts des grands commerçants et de certains chefs religieux. Des tensions politiques majeures apparaissent entre les partisans de Senghor et ceux de Dia au sein du parti unique UPS (Union Progressiste Sénégalaise). En décembre 1962, les députés fidèles à Senghor déposent une motion de censure contre le gouvernement. Mamadou Dia tente d'empêcher le vote en faisant évacuer l'Assemblée nationale par la gendarmerie. Senghor accuse Dia de tentative de coup d'État et fait intervenir l'armée. Mamadou Dia est arrêté, jugé et emprisonné à Kédougou avec ses ministres partisans (Valdiodio Ndiaye, Ibrahima Sar). En 1963, une nouvelle constitution est votée, supprimant le poste de président du Conseil et instaurant un régime présidentiel fort concentré entre les mains de Senghor.

Conclusion
La crise de décembre 1962 marque un tournant fondamental dans l'histoire politique du Sénégal, mettant fin au bicéphalisme institutionnel. Elle consacre l'hégémonie politique de Léopold Sédar Senghor et dessine les contours d'un régime présidentiel fort qui durera plusieurs décennies.`,
  sections: [
    {
      title: 'I. Le réveil politique et l’ascension du BDS (1944-1958)',
      content: [
        "1. L'hégémonie initiale de la SFIO et Maître Lamine Guèye :",
        "• Après la Conférence de Brazzaville (1944), la scène politique sénégalaise est dominée par Maître Lamine Guèye, chef de file de la Section Française de l'Internationale Ouvrière (SFIO).",
        "• Son bastion électoral traditionnel est situé dans les Quatre Communes (Dakar, Rufisque, Gorée, Saint-Louis).",
        "• Fait voter à l'Assemblée constituante française la Loi Lamine Guèye (7 mai 1946) étendant la citoyenneté française à tous les ressortissants des colonies d'outre-mer sans renonciation à leur statut personnel.",
        "2. La scission historique de 1948 et la création du BDS par Senghor :",
        "• Léopold Sédar Senghor estime que la SFIO est un parti élitiste, citadin et trop subordonné aux consignes de Paris.",
        "• En octobre 1948, Senghor claque la porte de la SFIO et fonde le Bloc Démocratique Sénégalais (BDS) avec Mamadou Dia et Ibrahima Seydou Ndaw.",
        "• Stratégie victorieuse du BDS : s'appuyer sur les masses paysannes du bassin arachidier et nouer des alliances stratégiques avec les grands chefs des confréries musulmanes (Mourides et Tidjanes).",
        "• Aux élections législatives de 1951 et 1956, le BDS terrasse la SFIO de Lamine Guèye.",
        "3. L'application de la Loi-cadre Defferre (1956-1957) :",
        "• Mamadou Dia devient Vice-Président du Conseil de Gouvernement territorial du Sénégal, organisant l'administration locale autonome et le transfert de la capitale de Saint-Louis à Dakar en 1957."
      ],
      image: {
        url: '',
        alt: 'Vie politique sénégalaise de 1944 à 1962',
        caption: 'Figure 10 : De la Conférence de Brazzaville à l\'indépendance et la crise de 1962',
        svgContent: SVG_SENEGAL_POLITIQUE_1944_1962
      }
    },
    {
      title: 'II. La Fédération du Mali et la Proclamation de l’Indépendance (1959-1960)',
      content: [
        "1. Le référendum de 1958 et le choix de l'unité africaine :",
        "• Fusion des partis au sein de l'UPS (Union Progressiste Sénégalaise).",
        "• Campagne référendaire du 28 septembre 1958 : le Sénégal vote « Oui » à la Communauté de Gaulle, tout en manifestant une volonté ardente de regroupement fédéral.",
        "2. L'épopée et l'éclatement de la Fédération du Mali :",
        "• En janvier 1959, le Sénégal et le Soudan français (actuel Mali) s'unissent pour former la Fédération du Mali (présidence fédérale confiée à Modibo Keïta et vice-présidence à Mamadou Dia).",
        "• Proclamation solennelle de l'indépendance de la Fédération le 20 juin 1960 à Dakar.",
        "• Divergences idéologiques irréconciliables : les dirigeants soudanais prônent un socialisme marxiste centralisateur et radical, tandis que les Sénégalais défendent un socialisme démocratique adapté aux réalités africaines.",
        "• Conflit aigu lors du choix du Président de la Fédération (Modibo Keïta tente de démettre Mamadou Dia et de déclarer l'état d'urgence).",
        "• Dans la nuit du 19 au 20 août 1960, le Sénégal proclame la dissolution de la Fédération du Mali et réaffirme sa propre souveraineté.",
        "• Le 20 août 1960 : naissance de la République indépendante du Sénégal avec Léopold Sédar Senghor comme Président de la République et Mamadou Dia comme Président du Conseil."
      ]
    },
    {
      title: 'III. Le régime parlementaire et la crise dramatique de décembre 1962',
      content: [
        "1. Le fonctionnement du bicéphalisme institutionnel (1960-1962) :",
        "• Constitution de 1960 créant un régime parlementaire à deux têtes :",
        "  - Le Président de la République (Senghor) : chef de l'État, garant de l'unité nationale, chef des armées et responsable des relations extérieures.",
        "  - Le Président du Conseil (Mamadou Dia) : chef effectif de l'exécutif, dirige l'administration, les finances et la politique intérieure.",
        "2. Les réformes courageuses et les mécontentements suscités par Mamadou Dia :",
        "• Lancement du Premier Plan Quadriennal de développement économique et social.",
        "• Création de l'Office de Commercialisation Agricole (OCA) et de la Banque Sénégalaise de Développement (BSD) pour soustraire le commerce de l'arachide au monopole des maisons de commerce françaises et des courtiers libano-syriens.",
        "• Réformes du coopératisme rural qui heurtent les intérêts de certains marabouts et notables commerçants.",
        "3. La crise politique du 17 décembre 1962 et ses dénouements :",
        "• Une motion de censure est déposée par des députés de l'UPS proches de Senghor pour renverser le gouvernement Dia.",
        "• Jugeant la manœuvre séditieuse au regard des statuts du parti, Mamadou Dia fait évacuer et bloquer le bâtiment de l'Assemblée nationale par la gendarmerie.",
        "• Les députés se réunissent chez le président de l'Assemblée Lamine Guèye et votent la censure.",
        "• Senghor dénonce une tentative de coup d'État et mobilise l'armée régulière dirigée par le général Jean Alfred Diallo.",
        "• Le 18 décembre 1962, Mamadou Dia est arrêté avec ses ministres les plus proches (Valdiodio Ndiaye, Ibrahima Sar, Joseph Mbaye, Alioune Tall).",
        "• Jugé par la Haute Cour de Justice en mai 1963, Mamadou Dia est condamné à la détention perpétuelle et emprisonné au fort de Kédougou jusqu'à sa libération en 1974.",
        "• Constitution du 7 mars 1963 : instauration d'un régime présidentiel monocéphale concentrant tous les pouvoirs exécutifs entre les mains du chef de l'État Léopold Sédar Senghor."
      ],
      table: {
        headers: ['Personnalité Politique', 'Rôle & Titre (1960-1962)', 'Vision & Réformes', 'Sort après la Crise de 1962'],
        rows: [
          ["Léopold Sédar Senghor", "Président de la République", "Socialisme démocratique et humaniste, diplomatie internationale.", "Concentration de tous les pouvoirs exécutifs (Constitution 1963)."],
          ["Mamadou Dia", "Président du Conseil", "Planification économique, OCA, émancipation paysanne, rigueur morale.", "Arrêté, condamné, emprisonné 12 ans à Kédougou (libéré en 1974)."],
          ["Maître Lamine Guèye", "Président de l'Assemblée nationale", "Figure tutélaire de la SFIO, soutien parlementaire à Senghor.", "Reste président de l'Assemblée jusqu'à son décès en 1968."],
          ["Valdiodio Ndiaye", "Ministre de l'Intérieur / Finances", "Artisan du discours d'indépendance de 1958 face à De Gaulle.", "Emprisonné à Kédougou aux côtés de Mamadou Dia."]
        ]
      }
    }
  ],
  conclusion: "La crise de décembre 1962 marque un tournant fondamental dans l'histoire politique du Sénégal, mettant fin au bicéphalisme institutionnel. Elle consacre l'hégémonie politique de Léopold Sédar Senghor et dessine les contours d'un régime présidentiel fort qui durera plusieurs décennies."
};
