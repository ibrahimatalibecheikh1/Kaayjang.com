import { LessonContent } from './courses';
import {
  SVG_PREMIERE_GUERRE_MONDIALE,
  SVG_CRISE_1929,
  SVG_SECONDE_GUERRE_MONDIALE
} from './diagrams_3eme_histoire';

// =========================================================================
// HISTOIRE 3ÈME - SÉNÉGAL (PROGRAMME OFFICIEL INTÉGRAL BFEM)
// QUATRIÈME PARTIE : LES GRANDS CONFLITS DU XXE SIÈCLE ET LES CRISES (LEÇONS 11 À 14)
// Développement complet et exhaustif sans résumés
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 11 : LA PREMIÈRE GUERRE MONDIALE : CAUSES ET CONSÉQUENCES
// -------------------------------------------------------------------------

export const LESSON_11_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-11',
  number: 'LEÇON 11',
  title: 'LA PREMIÈRE GUERRE MONDIALE : CAUSES ET CONSÉQUENCES',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "La Première Guerre mondiale (1914-1918) est le premier grand conflit généralisé du XXe siècle. Elle oppose deux grands blocs d'alliances européens et se transforme rapidement en une guerre totale impliquant les colonies. Ses racines plongent dans les rivalités impérialistes et nationalistes du XIXe siècle, et ses conséquences bouleversent durablement l'Europe et le monde.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Quatrième partie : Les grands conflits du XXe siècle et les crises

Leçon 11 : La Première Guerre mondiale : causes et conséquences

Introduction
La Première Guerre mondiale (1914-1918) est le premier grand conflit généralisé du XXe siècle. Elle oppose deux grands blocs d'alliances européens et se transforme rapidement en une guerre totale impliquant les colonies. Ses racines plongent dans les rivalités impérialistes et nationalistes du XIXe siècle, et ses conséquences bouleversent durablement l'Europe et le monde.

I. Les causes de la guerre
1. Les causes lointaines : Les rivalités économiques et coloniales entre les puissances impérialistes (notamment entre la France et l'Allemagne pour le Maroc, et la Grande-Bretagne face à la montée de la puissance navale allemande) créent un climat de tension permanente. De plus, les nationalismes exacerbés, en particulier dans les Balkans (« la poudrière de l'Europe »), attisent les haines. Pour se protéger, les États s'organisent en deux blocs rigides : la Triple Alliance (Allemagne, Autriche-Hongrie, Italie) et la Triple Entente (France, Russie, Royaume-Uni). Une course aux armements s'installe.
2. La cause immédiate : L'élément déclencheur survient le 28 juin 1914 à Sarajevo, où l'archiduc François-Ferdinand, héritier du trône d'Autriche-Hongrie, est assassiné par un nationaliste serbe. Par le jeu des alliances, cet événement local déclenche un engrenage diplomatique et militaire qui mène au conflit généralisé en août 1914.

II. Les conséquences du conflit
1. Un bilan humain et matériel effroyable : La guerre fait environ 10 millions de morts, des millions de mutilés (les « gueules cassées ») et provoque un effondrement démographique. Les destructions matérielles sont colossales dans les zones de combats (usines, infrastructures, champs dévastés). L'Europe est économiquement ruinée et endettée auprès des États-Unis.
2. Le bouleversement de la carte politique : Quatre grands empires s'effondrent : les empires allemand, austro-hongrois, russe et ottoman. Le traité de Versailles (28 juin 1919) impose des conditions très dures à l'Allemagne (« le diktat »), humiliée et amputée de territoires. De nouveaux États naissent en Europe centrale. Pour préserver la paix, la Société des Nations (SDN) est créée, bien que fragilisée dès le départ par l'absence des États-Unis.

Conclusion
La Première Guerre mondiale marque le déclin de l'hégémonie européenne au profit des États-Unis. En laissant l'Allemagne humiliée et l'Europe instable, les traités de paix portent en eux les germes des crises futures et du second conflit mondial.`,
  sections: [
    {
      title: 'I. Les causes de la Première Guerre mondiale',
      content: [
        "1. Les causes lointaines et structurelles :",
        "• Les rivalités coloniales et économiques : frictions franco-allemandes au Maroc (crise de Tanger en 1905, coup d'Agadir en 1911) et rivalité navale acharnée entre la Kaiserliche Marine allemande et la Royal Navy britannique.",
        "• L'exacerbation des nationalismes et la poudrière des Balkans : panslavisme soutenu par la Russie contre l'impérialisme austro-hongrois voulant annexer la Bosnie-Herzégovine.",
        "• Le système des alliances bipolaires :",
        "  - La Triple Alliance (Triplice) : Allemagne, Autriche-Hongrie et Italie (l'Italie changera de camp en 1915).",
        "  - La Triple Entente : France, Royaume-Uni et Empire de Russie.",
        "• La course aux armements : allongement du service militaire (loi de 3 ans en France) et accumulation de matériel lourd.",
        "2. La cause immédiate (L'engrenage fatal de l'été 1914) :",
        "• Le 28 juin 1914, à Sarajevo (Bosnie), l'archiduc héritier François-Ferdinand et son épouse sont assassinés par Gavrilo Princip, un étudiant nationaliste serbe de la société secrète « La Main Noire ».",
        "• Ultimatum autrichien à la Serbie le 23 juillet, suivi de la déclaration de guerre le 28 juillet.",
        "• Par le jeu des alliances automatiques et des mobilisations générales, toute l'Europe s'embrase au début du mois d'août 1914."
      ],
      image: {
        url: '',
        alt: 'La Première Guerre mondiale et les Tirailleurs sénégalais',
        caption: 'Figure 6 : Alliances, phases du conflit et engagement des Tirailleurs',
        svgContent: SVG_PREMIERE_GUERRE_MONDIALE
      }
    },
    {
      title: 'II. Les conséquences planétaires du premier conflit mondial',
      content: [
        "1. Un traumatisme humain et un désastre matériel :",
        "• Bilan démographique apocalyptique : environ 10 millions de soldats tués, 21 millions de blessés et mutilés (« gueules cassées »), et des millions de veuves et d'orphelins, aggravé par l'épidémie de grippe espagnole de 1918-1919.",
        "• Participation décisive des colonies : sacrifice héroïque des Tirailleurs sénégalais (enrôlés massivement par Blaise Diagne en 1918) au Chemin des Dames et à Verdun.",
        "• Destructions colossales dans le Nord-Est de la France, en Belgique et en Europe centrale (villes rasées, terres agricoles stérilisées par les obus et les gaz asphyxiants).",
        "2. Effondrement économique et dette envers l'Amérique :",
        "• L'Europe perd son statut de banquière du monde : inflation vertigineuse, monnaies dévaluées et endettement massif auprès des banques new-yorkaises.",
        "3. Nouvelle géopolitique et traité de Versailles :",
        "• Chute de quatre dynasties impériales séculaires : Hohenzollern (Allemagne), Habsbourg (Autriche-Hongrie), Romanov (Russie) et Ottomans (Turquie).",
        "• Le Traité de Versailles (28 juin 1919) : qualifié de « Diktat » par les Allemands, il impose à l'Allemagne la perte de l'Alsace-Lorraine et du couloir de Dantzig, la démilitarisation de la Rhénanie, la réduction de son armée à 100 000 hommes et d'astronomiques réparations financières.",
        "• Création de la Société des Nations (SDN) à Genève, amputée d'emblée par le refus du Sénat américain de la ratifier."
      ],
      table: {
        headers: ['Blocs & Traités', 'Pays Membres / Signataires', 'Engagements & Conséquences'],
        rows: [
          ["Triple Alliance (1882)", "Allemagne, Autriche-Hongrie, Italie", "Pacte défensif mutuel en cas d'attaque française ou russe."],
          ["Triple Entente (1907)", "France, Royaume-Uni, Russie", "Encerclement stratégique des Empires centraux."],
          ["Traité de Versailles (1919)", "Alliés vainqueurs face à l'Allemagne", "Démilitarisation, réparations astronomiques, rancœur revancharde nazie."],
          ["Société des Nations (SDN)", "Nations fondatrices (sans USA ni Allemagne au départ)", "Organisation de sécurité collective incapable d'empêcher les futures agressions."]
        ]
      }
    }
  ],
  conclusion: "La Première Guerre mondiale marque le déclin de l'hégémonie européenne au profit des États-Unis. En laissant l'Allemagne humiliée et l'Europe instable, les traités de paix portent en eux les germes des crises futures et du second conflit mondial."
};

// -------------------------------------------------------------------------
// LEÇON 12 : LA RÉVOLUTION RUSSE ET LA CONSOLIDATION DU RÉGIME COMMUNISTE
// -------------------------------------------------------------------------

export const LESSON_12_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-12',
  number: 'LEÇON 12',
  title: 'LA RÉVOLUTION RUSSE ET LA CONSOLIDATION DU RÉGIME COMMUNISTE',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "En 1917, alors que la Russie est en pleine guerre mondiale, elle traverse une crise interne majeure qui aboutit au renversement du régime tsariste et à l'avènement du premier État socialiste de l'histoire. Cette révolution bouleverse l'équilibre géopolitique mondial et impose une nouvelle idéologie.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Quatrième partie : Les grands conflits du XXe siècle et les crises

Leçon 12 : La Révolution russe et la consolidation du régime communiste

Introduction
En 1917, alors que la Russie est en pleine guerre mondiale, elle traverse une crise interne majeure qui aboutit au renversement du régime tsariste et à l'avènement du premier État socialiste de l'histoire. Cette révolution bouleverse l'équilibre géopolitique mondial et impose une nouvelle idéologie.

I. Les causes de la révolution de 1917
La Russie des tsars subit de profonds blocages. Sur le plan politique, le tsar Nicolas II dirige le pays de manière autocratique, refusant les réformes. Économiquement, le pays est majoritairement agricole avec un prolétariat urbain misérable. La Première Guerre mondiale aggrave ces tensions : les défaites militaires s'accumulent, l'armée est désorganisée et les villes souffrent de famines et d'une inflation galopante.

II. Les étapes de la révolution
1. La révolution de Février 1917 : Des manifestations populaires et des grèves éclatent à Pétrograd. L'armée fraternise avec les insurgés. Nicolas II abdique. Un gouvernement provisoire est mis en place, mais il commet l'erreur de poursuivre la guerre, s'aliénant le soutien populaire des « Soviets » (conseils de soldats et d'ouvriers).
2. La révolution d'Octobre 1917 : Lénine et les bolcheviques profitent du mécontentement général. Portant les mots d'ordre « La paix, la terre, le pain », ils organisent un coup d'État armé dans la nuit du 24 au 25 octobre et s'emparent du pouvoir. Les premières mesures bolcheviques décrètent la paix immédiate (traité de Brest-Litovsk) et la nationalisation des terres.

III. Guerre civile et consolidation du régime
De 1918 à 1921, le nouveau pouvoir fait face à une violente guerre civile opposant les « Rouges » (bolcheviques) aux « Blancs » (partisans du tsar et libéraux, soutenus par l'Occident). Lénine impose le « Communisme de guerre » (dictature stricte, réquisitions forcées). Après la victoire rouge, pour reconstruire le pays exsangue, Lénine introduit la NEP (Nouvelle Politique Économique) en 1921, autorisant un retour partiel au capitalisme privé. En 1922, l'URSS (Union des Républiques Socialistes Soviétiques) est officiellement créée. Après la mort de Lénine, Staline s'empare du pouvoir, élimine ses rivaux et impose une collectivisation forcée de l'économie par les plans quinquennaux, transformant l'URSS en un régime totalitaire.

Conclusion
La révolution russe a donné naissance à un modèle idéologique et économique alternatif au capitalisme occidental. Sous la direction de Staline, l'URSS se modernise à marche forcée au prix de libertés étouffées et d'une répression féroce.`,
  sections: [
    {
      title: 'I. La faillite du tsarisme et les causes de la déflagration',
      content: [
        "1. L'anachronisme du régime tsariste :",
        "• Pouvoir absolu de droit divin du tsar Nicolas II (dynastie des Romanov) entouré d'une cour corrompue (influence de Raspoutine).",
        "• Refus obstiné de partager le pouvoir malgré la création de la Douma (parlement consultatif) après la révolution manquée de 1905.",
        "2. Les tensions sociales explosives :",
        "• 80 % de la population est composée de moujiks (paysans pauvres) analphabètes sans terre, soumis aux grands propriétaires terriens.",
        "• Prolétariat urbain concentré à Petrograd et Moscou dans des conditions de survie pires qu'en Occident.",
        "3. L'impact catastrophique de la Première Guerre mondiale :",
        "• Défaites cuisantes face à l'armée allemande (Tannenberg).",
        "• Désertions massives de soldats manquant de fusils et de bottes, famine dans les villes et désorganisation des voies ferrées."
      ]
    },
    {
      title: 'II. Les deux phases de la révolution (Février et Octobre 1917)',
      content: [
        "1. La Révolution bourgeoise de Février 1917 :",
        "• 23 février 1917 (Journée internationale des femmes) : grèves des ouvrières du textile et émeutes de la faim à Pétrograd.",
        "• Les régiments de la garnison refusent de tirer sur la foule et se mutinent en fraternisant avec les ouvriers.",
        "• Le 2 mars 1917, le tsar Nicolas II est contraint d'abdiquer.",
        "• Double pouvoir antagoniste : le Gouvernement provisoire (libéraux modérés menés par Kerenski) qui veut respecter les traités avec les Alliés et continuer la guerre, et les Soviets (conseils d'ouvriers et de soldats) qui exigent la paix et le pain.",
        "2. La Révolution bolchevique d'Octobre 1917 :",
        "• Retour d'exil de Vladimir Ilitch Oulianov dit Lénine (« Thèses d'avril » : Tout le pouvoir aux Soviets !).",
        "• Dans la nuit du 24 au 25 octobre 1917, les gardes rouges bolcheviques menés par Léon Trotski prennent d'assaut le Palais d'Hiver de Petrograd.",
        "• Décrets immédiats sur la paix (armistice puis traité de Brest-Litovsk en mars 1918) et sur la terre (abolition de la grande propriété foncière sans indemnité)."
      ]
    },
    {
      title: 'III. La guerre civile, la NEP et l’édification de l’URSS sous Staline',
      content: [
        "1. La guerre civile (1918-1921) et le Communisme de guerre :",
        "• Armée Rouge (Trotski) contre Armées Blanches tsaristes soutenues militairement par les troupes alliées (France, Angleterre, USA, Japon).",
        "• Communisme de guerre : réquisitions forcées des récoltes agricoles, nationalisation intégrale de l'industrie, police politique (Tchéka) et exécution de la famille tsariste à Ekaterinbourg.",
        "2. La Nouvelle Politique Économique (NEP, 1921-1928) :",
        "• Lénine rétablit temporairement un secteur privé pour sauver le pays de la famine : liberté du commerce intérieur et réintroduction de petites entreprises privées.",
        "• Naissance officielle de l'Union des Républiques Socialistes Soviétiques (URSS) en décembre 1922.",
        "3. Le virage totalitaire stalinien (dès 1928) :",
        "• Après la mort de Lénine en 1924, Joseph Staline élimine ses rivaux politiques (expulsion puis assassinat de Trotski).",
        "• Fin de la NEP : collectivisation forcée des terres (création des kolkhozes et sovkhozes, dékoulakisation brutale) et industrialisation lourde par les plans quinquennaux.",
        "• Culte de la personnalité, procès de Moscou (Grandes Purges de 1936-1938) et déportation massive des opposants dans les camps du Goulag."
      ],
      table: {
        headers: ['Période / Étape', 'Dirigeant Principal', 'Mesures Majeures', 'Conséquences Politiques & Économiques'],
        rows: [
          ["Février 1917", "Gouvernement Kerenski", "Abdication du tsar, maintien dans la guerre mondiale", "Dualité du pouvoir avec les Soviets, impopularité."],
          ["Octobre 1917", "Lénine & Trotski", "Prise du Palais d'Hiver, décrets de paix et sur la terre", "Instauration du premier État prolétarien socialiste."],
          ["1918-1921", "Lénine", "Guerre civile, Armée rouge, 'Communisme de guerre'", "Victoire sur les Blancs, économie au bord du gouffre."],
          ["1921-1928 (NEP)", "Lénine puis direction collective", "Retour partiel au commerce privé, création de l'URSS (1922)", "Redressement économique partiel avant le tournant stalinien."],
          ["1928-1953", "Joseph Staline", "Plans quinquennaux, collectivisation forcée, Goulag", "Superpuissance industrielle lourde au prix de la terreur d'État."]
        ]
      }
    }
  ],
  conclusion: "La révolution russe a donné naissance à un modèle idéologique et économique alternatif au capitalisme occidental. Sous la direction de Staline, l'URSS se modernise à marche forcée au prix de libertés étouffées et d'une répression féroce."
};

// -------------------------------------------------------------------------
// LEÇON 13 : LA CRISE ÉCONOMIQUE DES ANNÉES 30
// -------------------------------------------------------------------------

export const LESSON_13_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-13',
  number: 'LEÇON 13',
  title: 'LA CRISE ÉCONOMIQUE DES ANNÉES 30',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "Après l'euphorie des « Années folles », le monde capitaliste plonge en 1929 dans la plus grave crise économique de son histoire moderne. Partie des États-Unis, cette crise économique et financière se propage rapidement au reste du globe, remettant en cause les fondements du libéralisme classique.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Quatrième partie : Les grands conflits du XXe siècle et les crises

Leçon 13 : La crise économique des années 30

Introduction
Après l'euphorie des « Années folles », le monde capitaliste plonge en 1929 dans la plus grave crise économique de son histoire moderne. Partie des États-Unis, cette crise économique et financière se propage rapidement au reste du globe, remettant en cause les fondements du libéralisme classique.

I. Le krach de Wall Street et le mécanisme de la crise
La crise démarre le jeudi 24 octobre 1929 (« Jeudi noir ») à la bourse de New York (Wall Street). C'est l'éclatement d'une bulle spéculative alimentée par un crédit facile et une surproduction industrielle et agricole. Les cours s'effondrent, les actionnaires paniquent. Le krach boursier provoque une faillite bancaire en chaîne. Privées de crédits, les entreprises réduisent leur production ou ferment, entraînant un chômage de masse immédiat et une baisse drastique du pouvoir d'achat.

II. La mondialisation et les conséquences de la crise
1. Propagation mondiale : Les États-Unis rapatrient leurs capitaux d'Europe (frappant durement l'Allemagne et l'Autriche) et réduisent leurs importations. Le commerce international s'effondre. Les colonies africaines et asiatiques voient s'écrouler les cours de leurs matières premières.
2. Conséquences sociales et politiques : La misère sociale grandit. Aux États-Unis et en Europe, des millions de chômeurs se retrouvent sans ressources. Sur le plan politique, la crise fragilise les démocraties et favorise la montée des régimes autoritaires et fascistes, notamment en Allemagne où Hitler exploite la détresse économique pour accéder au pouvoir en 1933.

III. Les solutions à la crise
Pour s'en sortir, les États abandonnent le libéralisme pur au profit de l'interventionnisme étatique. Aux États-Unis, le président Franklin D. Roosevelt applique dès 1933 le New Deal (Nouvelle Donne), inspiré des théories de Keynes : grands travaux financés par l'État pour employer les chômeurs, aides sociales et régulation bancaire. En Europe, certains pays se replient sur leurs empires coloniaux (France, Grande-Bretagne), tandis que les régimes totalitaires optent pour l'autarcie et l'économie de réarmement militaire.

Conclusion
La crise des années 30 marque la fin du capitalisme sauvage et impose l'idée de l'État-providence. Les déséquilibres politiques et le nationalisme économique qu'elle engendre constituent des facteurs déterminants dans la marche vers la Seconde Guerre mondiale.`,
  sections: [
    {
      title: 'I. Le krach de Wall Street et l’engrenage de la Grande Dépression',
      content: [
        "1. Les origines de la crise américaine :",
        "• Surproduction industrielle et agricole : après la Première Guerre mondiale, les usines et fermes américaines produisent plus de biens que la population ne peut en consommer.",
        "• Spéculation boursière débridée à crédit : achat d'actions avec seulement 10 % d'apport personnel (prêts sur marge à court terme accordés par les courtiers).",
        "2. Le « Jeudi Noir » du 24 octobre 1929 :",
        "• À la bourse de New York (Wall Street), 13 millions d'actions sont mises en vente sans trouver le moindre acheteur : panique générale et effondrement vertical des cours.",
        "3. Le mécanisme d'extension à l'économie réelle :",
        "• Faillite de milliers de banques incapables de récupérer leurs prêts.",
        "• Faillite de dizaines de milliers d'entreprises : arrêt des investissements, fermetures d'usines et licenciements massifs.",
        "• Chômage de masse : 13 à 15 millions de chômeurs aux États-Unis (25 % de la population active) vivant dans des bidonvilles ironiquement baptisés « Hoovervilles »."
      ],
      image: {
        url: '',
        alt: 'La crise de 1929 et le New Deal',
        caption: 'Figure 7 : La spirale déflationniste du krach de Wall Street et la relance keynésienne',
        svgContent: SVG_CRISE_1929
      }
    },
    {
      title: 'II. Mondialisation de la crise et retentissements politiques',
      content: [
        "1. Les canaux de contagion mondiale :",
        "• Rapatriement brutal des capitaux américains investis en Europe centrale, entraînant l'effondrement des banques autrichiennes (Kreditanstalt) et allemandes en 1931.",
        "• Hausse vertigineuse des tarifs douaniers américains (tarif Hawley-Smoot de 1930) provoquant une guerre commerciale et l'effondrement de 60 % du commerce mondial.",
        "• Répercussions en Afrique et au Sénégal : effondrement de moitié du cours de l'arachide, ruinant les paysans sénégalais et réduisant les recettes de l'AOF.",
        "2. Les conséquences politiques catastrophiques en Europe :",
        "• En Allemagne, le chômage frappe plus de 6 millions de personnes. Le mécontentement populaire et la peur de la révolution communiste sont instrumentalisés par Adolf Hitler et le parti nazi (NSDAP), qui accèdent légalement au pouvoir en janvier 1933.",
        "• Montée des ligues fascistes et autoritaires dans toute l'Europe (France, Italie, Espagne, Portugal, Europe centrale)."
      ]
    },
    {
      title: 'III. Les politiques de sortie de crise : Libéralisme contre Interventionnisme',
      content: [
        "1. L'échec des politiques déflationnistes classiques :",
        "• Réduction des salaires et baisse des dépenses publiques qui ont aggravé la baisse de la consommation et creusé la récession.",
        "2. Le « New Deal » de Franklin Delano Roosevelt (dès 1933) :",
        "• Inspiré des thèses de l'économiste John Maynard Keynes (l'État doit relancer la demande par le déficit budgétaire) :",
        "  - Grands travaux d'infrastructures (routes, barrages de la TVA - Tennessee Valley Authority).",
        "  - Sécurisation du système bancaire (Emergency Banking Act) et garantie des dépôts des épargnants.",
        "  - Loi sociale historique : Social Security Act (1935) créant les premières allocations chômage et pensions de retraite.",
        "3. Les réponses européennes :",
        "• Repli impérialiste : la France et l'Angleterre se protègent en instaurant des zones préférentielles fermées avec leurs colonies (accords d'Ottawa de 1932 pour le Commonwealth).",
        "• Autarcie et réarmement : l'Allemagne nazie et l'Italie fasciste orientent toute leur production vers l'industrie militaire pour résorber le chômage, préparant l'agression armée."
      ],
      table: {
        headers: ['Pays / Région', 'Politique Adoptée', 'Mesures Clés', 'Résultats Obtenus'],
        rows: [
          ["États-Unis", "New Deal (F.D. Roosevelt)", "Grands travaux publics (TVA), régulation bancaire, Social Security.", "Relance partielle, redéfinition du rôle protecteur de l'État."],
          ["Allemagne", "Économie de guerre & Autarcie", "Grands travaux autoroutiers, réarmement intensif illégal, service militaire.", "Résorption rapide du chômage orientée vers la guerre."],
          ["France & Royaume-Uni", "Repli colonial & Front populaire", "Accords d'Ottawa, réformes sociales de 1936 (40h, congés payés).", "Sortie lente de crise, dépendance accrue aux empires coloniaux."]
        ]
      }
    }
  ],
  conclusion: "La crise des années 30 marque la fin du capitalisme sauvage et impose l'idée de l'État-providence. Les déséquilibres politiques et le nationalisme économique qu'elle engendre constituent des facteurs déterminants dans la marche vers la Seconde Guerre mondiale."
};

// -------------------------------------------------------------------------
// LEÇON 14 : LA SECmessage de la Deuxième Guerre mondiale : causes et conséquences
// -------------------------------------------------------------------------

export const LESSON_14_HISTOIRE_3EME: LessonContent = {
  id: 'histoire-3eme-lecon-14',
  number: 'LEÇON 14',
  title: 'LA SECOUSSE DE LA DEUXIÈME GUERRE MONDIALE : CAUSES ET CONSÉQUENCES',
  subject: 'Histoire',
  classLevel: '3ème',
  introduction: "La Seconde Guerre mondiale (1939-1945) est le conflit le plus vaste et le plus destructeur de l'histoire de l'humanité. Opposant l'Axe (Allemagne, Italie, Japon) aux Alliés (Grande-Bretagne, URSS, États-Unis), cette guerre idéologique et totale repousse les limites de la violence et redéfinit radicalement l'ordre mondial.",
  fullText: `HISTOIRE — CLASSE DE 3ÈME — PROGRAMME OFFICIEL DU SÉNÉGAL
Quatrième partie : Les grands conflits du XXe siècle et les crises

Leçon 14 : La secousse de la Deuxième Guerre mondiale : causes et conséquences

Introduction
La Seconde Guerre mondiale (1939-1945) est le conflit le plus vaste et le plus destructeur de l'histoire de l'humanité. Opposant l'Axe (Allemagne, Italie, Japon) aux Alliés (Grande-Bretagne, URSS, États-Unis), cette guerre idéologique et totale repousse les limites de la violence et redéfinit radicalement l'ordre mondial.

I. Les causes de la guerre
1. Les causes lointaines : Les frustrations nées du traité de Versailles en Allemagne, combinées à l'impact de la crise des années 30, favorisent l'expansionnisme des régimes fascistes. Hitler développe la doctrine de l'« espace vital » (Lebensraum) et réarme l'Allemagne. Face aux agressions successives (annexion de l'Autriche puis de la Tchécoslovaquie), la SDN se montre impuissante et les démocraties occidentales passives.
2. La cause immédiate : La signature du pacte germano-soviétique rassure Hitler sur son flanc oriental. Le 1er septembre 1939, l'Allemagne envahit la Pologne. La France et le Royaume-Uni lui déclarent la guerre le 3 septembre : le conflit mondial commence.

II. Les grandes étapes (Synthèse dynamique)
De 1939 à 1941, c'est l'Europe sous la botte nazie grâce à la Blitzkrieg (guerre éclair). La France capitule en 1940. En 1941, le conflit se mondialise avec l'invasion de l'URSS par Hitler et l'attaque japonaise sur Pearl Harbor qui pousse les États-Unis à entrer en guerre. Le tournant se produit en 1942-1943 avec les défaites de l'Axe à Stalingrad, El Alamein et Midway. Les Alliés reprennent l'offensive, menant aux débarquements de 1944 et à la capitulation allemande le 8 mai 1945. Le Japon capitule le 2 septembre 1945 après les bombardements atomiques de Hiroshima et Nagasaki.

III. Les conséquences du conflit
1. Un désastre humanitaire sans précédent : Le bilan s'élève à plus de 60 millions de morts, majoritairement civils. C'est une guerre d'anéantissement marquée par la Shoah (extermination de 6 millions de Juifs et de Tsiganes) et l'avènement de l'ère nucléaire.
2. Le déclin européen et l'émergence des superpuissances : L'Europe est moralement et matériellement en ruines. Deux superpuissances antagonistes émergent : les États-Unis et l'URSS, amorçant la Guerre froide. En 1945, la conférence de San Francisco donne naissance à l'ONU (Organisation des Nations Unies) pour garantir la sécurité collective. Enfin, la guerre ébranle définitivement le prestige des empires coloniaux, accélérant les mouvements de libération.

Conclusion
La Seconde Guerre mondiale clôt l'ère de la domination européenne. Le traumatisme de la guerre et des camps de concentration pousse l'humanité à redéfinir le droit international, dans un monde désormais bipolaire.`,
  sections: [
    {
      title: 'I. Les causes du déclenchement du second conflit mondial',
      content: [
        "1. L'engrenage révisionniste et les agressions de l'Axe (1933-1939) :",
        "• Hitler viole ouvertement le traité de Versailles : rétablissement du service militaire obligatoire (1935), remilitarisation de la Rhénanie (1936).",
        "• Formation de l'Axe Rome-Berlin (1936), scellé par le pacte d'Acier avec Mussolini, puis pacte tripartite incluant le Japon impérial.",
        "• La doctrine de l'« Espace vital » (Lebensraum) : annexion de l'Autriche (Anschluss en mars 1938), revendication des Sudètes et dépeçage de la Tchécoslovaquie accepté lâchement par la France et l'Angleterre aux accords de Munich (septembre 1938).",
        "• Faillite totale de la SDN face à l'invasion italienne de l'Éthiopie (1935) et à l'invasion de la Chine par le Japon (1937).",
        "2. Le pacte secret et l'invasion de la Pologne :",
        "• Le 23 août 1939 : signature du pacte de non-agression germano-soviétique (Ribbentrop-Molotov) avec protocole secret prévoyant le partage de la Pologne.",
        "• 1er septembre 1939 : la Wehrmacht envahit la Pologne sans déclaration de guerre préalable.",
        "• Le 3 septembre 1939 : la France et la Grande-Bretagne déclarent la guerre à l'Allemagne nazie."
      ]
    },
    {
      title: 'II. Les trois grandes phases de la guerre (1939-1945)',
      content: [
        "1. Les victoires de l'Axe et la Blitzkrieg (1939-1941) :",
        "• Guerre éclair combinant chars d'assaut (Panzers) et aviation en piqué (Stukas).",
        "• Écrasement de la Pologne, puis défaite foudroyante de la France en mai-juin 1940 (armistice signé par le maréchal Pétain, appel du général de Gaulle le 18 juin depuis Londres).",
        "• Bataille d'Angleterre (résistance héroïque sous Winston Churchill face aux bombardements de la Luftwaffe).",
        "2. La mondialisation du conflit et le tournant décisif (1941-1943) :",
        "• 22 juin 1941 : opération Barbarossa, Hitler envahit l'URSS avec 3 millions de soldats.",
        "• 7 décembre 1941 : attaque aéronavale surprise des Japonais sur la base américaine de Pearl Harbor à Hawaï, provoquant l'entrée en guerre des États-Unis.",
        "• Les trois tournants majeurs de 1942-1943 :",
        "  - Dans le Pacifique : victoire navale américaine à Midway (juin 1942).",
        "  - En Afrique du Nord : victoire britannique à El Alamein en Égypte (novembre 1942).",
        "  - En Russie : capitulation de la VIe armée allemande du maréchal von Paulus à Stalingrad (février 1943), brisant définitivement le mythe d'invincibilité nazi.",
        "3. La victoire des Alliés et l'anéantissement de l'Axe (1944-1945) :",
        "• Débarquements de Normandie (6 juin 1944 - Opération Overlord) et de Provence (15 août 1944 avec participation glorieuse de l'Armée B comprenant de nombreux Tirailleurs africains).",
        "• Prise de Berlin par l'Armée rouge et capitulation sans condition de l'Allemagne nazie le 8 mai 1945.",
        "• Capitulation du Japon le 2 septembre 1945, suite aux bombardements atomiques ordonnés par le président Truman sur Hiroshima (6 août) et Nagasaki (9 août)."
      ],
      image: {
        url: '',
        alt: 'La Seconde Guerre mondiale',
        caption: 'Figure 8 : Forces en présence, tournants militaires et bilan de 1939 à 1945',
        svgContent: SVG_SECONDE_GUERRE_MONDIALE
      }
    },
    {
      title: 'III. Les conséquences mondiales : déclin européen et monde bipolaire',
      content: [
        "1. Un désastre démographique et éthique sans équivalent :",
        "• Plus de 60 millions de morts, dont plus de la moitié de civils innocents.",
        "• Révélation de l'horreur des camps d'extermination nazis (Auschwitz, Treblinka) et de la Shoah (génocide planifié de 6 millions de Juifs et de Tsiganes). Création de la notion juridique de « Crime contre l'humanité » au procès de Nuremberg (1945-1946).",
        "• Événement douloureux au Sénégal : le massacre de Thiaroye (1er décembre 1944), où des Tirailleurs sénégalais démobilisés réclamant le paiement légitime de leurs indemnités furent fusillés par l'armée coloniale.",
        "2. La nouvelle architecture mondiale et la Guerre froide :",
        "• Déclin irrémédiable des puissances européennes (France, Royaume-Uni, Allemagne).",
        "• Émergence de deux superpuissances mondiales antagonistes : les États-Unis (possesseurs de l'arme atomique, maîtres financiers via les accords de Bretton Woods) et l'URSS (prestige militaire colossal).",
        "• Création de l'Organisation des Nations Unies (ONU) le 26 juin 1945 à San Francisco (charte signée par 50 États), dotée d'un Conseil de Sécurité avec droit de veto pour les 5 Grands.",
        "• Accélération irréversible des revendications d'indépendance dans les colonies africaines et asiatiques."
      ],
      table: {
        headers: ['Date & Tournant', 'Théâtre des Opérations', 'Événement Historique Majeur', 'Portée Géopolitique'],
        rows: [
          ["6-7 Décembre 1941", "Océan Pacifique (Hawaï)", "Attaque de Pearl Harbor par l'aéronavale nippone", "Entrée officielle des États-Unis dans le conflit mondial."],
          ["Février 1943", "Front de l'Est (URSS)", "Victoire soviétique à la bataille de Stalingrad", "Tournant psychologique et militaire décisif en Europe."],
          ["6 Juin 1944", "Front de l'Ouest (Normandie)", "Débarquement allié (Opération Overlord)", "Ouverture d'un second front terrestre contre le Troisième Reich."],
          ["8 Mai & 2 Sept. 1945", "Berlin (Europe) / Baie de Tokyo", "Capitulation allemande puis capitulation japonaise", "Fin de la Seconde Guerre mondiale, début de l'ère atomique."]
        ]
      }
    }
  ],
  conclusion: "La Seconde Guerre mondiale clôt l'ère de la domination européenne. Le traumatisme de la guerre et des camps de concentration pousse l'humanité à redéfinir le droit international, dans un monde désormais bipolaire."
};
