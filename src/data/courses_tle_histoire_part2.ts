import { LessonContent } from './courses';

// =========================================================================
// HISTOIRE CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 2 (LEÇONS 6 À 10)
// Programme officiel national de la République du Sénégal
// Cours exhaustifs intégraux sans résumé, grands axes et méthodologie Bac
// =========================================================================

export const LESSON_6_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-6',
  number: 'LEÇON 6',
  title: 'LES FACTEURS GÉNÉRAUX DE LA DÉCOLONISATION',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 2 • Décolonisation et Tiers-Monde',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Analyse méthodique des forces conjuguées qui ont brisé les empires coloniaux au lendemain de 1945 : facteurs internes (exploitation coloniale, rôle des élites instruites, syndicats, partis politiques) et facteurs externes (affaiblissement des métropoles, anticolonialisme des supergrands USA/URSS, tribune de l\'ONU et la conférence historique de Bandoeng en 1955).',
  image: {
    caption: 'Figure H2.1 : La convergence des dynamiques internes et externes de la décolonisation',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="decGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b45309" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#decGrad)" stroke="#d97706" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">LES FORCES MOTRICES DE LA DÉCOLONISATION MONDIALE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">1. Facteurs Internes</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Exploitation &amp; travail forcé</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Éveil des élites intellectuelles</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Rôle des anciens combattants</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Partis politiques &amp; syndicats</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Révolte des colonisés</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">2. Facteurs Externes</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Défaite des métropoles (1940)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Anticolonialisme USA (marchés)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Idéologie marxiste URSS (Lénine)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Tribune de l\'ONU (Charte art. 1)</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Isolement des colonisateurs</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">3. Le Déclic de Bandoeng</text>
        <text x="14" y="52" font-size="11" fill="#374151">• 29 nations réunies en 1955</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Soekarno, Nehru, Nasser, Zhou</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Condamnation du colonialisme</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Solidarité Afro-Asiatique</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Éveil du Tiers-Monde</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 6 : LES FACTEURS GÉNÉRAUX DE LA DÉCOLONISATION

INTRODUCTION
Phénomène historique majeur de la seconde moitié du XXe siècle, la décolonisation désigne le processus politique, juridique et parfois militaire par lequel les peuples d'Asie et d'Afrique, soumis à la tutelle impérialiste des puissances européennes depuis le XIXe siècle, accèdent à la souveraineté nationale et à l'indépendance internationale. En l'espace de trois décennies (1945-1975), les empires coloniaux britannique, français, néerlandais, belge et portugais, qui dominaient plus de la moitié de l'humanité, s'effondrent comme des châteaux de cartes. Cette vaste révolution géopolitique n'est pas le fruit du hasard ou d'une générosité spontanée des colonisateurs : elle résulte de la conjonction puissante et dialectique de facteurs internes nés au sein même des sociétés colonisées et de facteurs externes issus des bouleversements internationaux consécutifs à la Seconde Guerre mondiale.

I. LES FACTEURS INTERNES DE LA DÉCOLONISATION
1. L'exploitation économique et la misère populaire :
Le système colonial a fonctionné comme une machine de spoliation méthodique : confiscation des meilleures terres agricoles au profit des colons ou des compagnies concessionnaires, imposition brutale de cultures d'exportation (arachide au Sénégal, cacao et café en Côte d'Ivoire, hévéa en Indochine) au détriment des cultures vivrières traditionnelles, et exploitation des richesses minières sans retombées pour les autochtones. Le régime du travail forcé, les corvées non rémunérées, les impôts de capitation écrasants et le Code de l'indigénat (qui privait les indigènes de tout droit civique) ont suscité une rancœur sourde et un désir inextinguible de liberté au sein des masses paysannes et ouvrières.
2. Le rôle déterminant des élites instruites :
Paradoxalement, c'est l'école coloniale elle-même qui a forgé les fossoyeurs de l'empire. En apprenant aux enfants colonisés les idéaux émancipateurs des Lumières, de la Révolution française de 1789 (Liberté, Égalité, Fraternité) ou du droit britannique, la métropole a fourni aux élites intellectuelles les armes conceptuelles pour contester sa propre domination. Formés dans les universités européennes, des leaders comme Léopold Sédar Senghor au Sénégal, Félix Houphouët-Boigny en Côte d'Ivoire, Kwame Nkrumah au Ghana, Hô Chi Minh au Vietnam ou le Mahatma Gandhi en Inde prennent conscience de l'hypocrisie du colonisateur : pourquoi refuser aux peuples d'outre-mer les droits de l'homme sacralisés en métropole ?
3. Le rôle d'avant-garde des partis politiques et des syndicats :
Dès l'entre-deux-guerres et surtout après 1945, des mouvements politiques structurés mobilisent les masses :
- Le Congrès National Indien fondé par Gandhi et Nehru ;
- Le Rassemblement Démocratique Africain (RDA) créé à Bamako en octobre 1946 ;
- Les syndicats de travailleurs (comme l'Union Générale des Travailleurs d'Afrique Noire - UGTAN, fondée en 1957 sous l'impulsion de Sékou Touré) qui organisent des grèves mémorables, comme la grève des cheminots du Dakar-Niger (1947-1948).
4. Le retour des anciens combattants :
Ayant combattu sur les champs de bataille d'Europe, d'Afrique du Nord et d'Italie pour délivrer le monde de la barbarie nazie, des centaines de milliers de tirailleurs africains et de soldats asiatiques reviennent au pays transformés. Ils ont vu les Blancs trembler, saigner et fuir devant l'ennemi en 1940. Le mythe de l'invincibilité et de la supériorité de l'Européen est définitivement brisé.

II. LES FACTEURS EXTERNES : LES TRANSFORMATIONS DU SYSTÈME INTERNATIONAL
1. L'affaiblissement militaire et moral des puissances européennes :
En 1945, la France, la Grande-Bretagne, la Belgique et les Pays-Bas sortent du conflit exsangues, ruinés économiquement et déclassés militairement. Les défaites humiliantes de mai-juin 1940 en France et la chute de Singapour en 1942 face au Japon impérial ont démythifié la puissance coloniale aux yeux des peuples dominés.
2. L'anticolonialisme des deux Superpuissances :
Les États-Unis et l'URSS, qui dominent le monde d'après-guerre, sont tous deux hostiles au maintien des empires coloniaux européens, bien que pour des motifs différents :
- L'anticolonialisme américain : ancienne colonie britannique émancipée par la guerre d'indépendance de 1776, l'Amérique professe un attachement historique à l'autodétermination. Surtout, puissance capitaliste industrielle conquérante, Washington exige l'ouverture des marchés coloniaux fermés (politique de la « porte ouverte ») et craint que le maintien de l'oppression européenne ne pousse les nationalistes dans les bras du communisme ;
- L'anticolonialisme soviétique : fidèle à la doctrine de Lénine (L'Impérialisme, stade suprême du capitalisme, 1916), l'URSS considère les colonies comme le talon d'Achille des puissances occidentales. Moscou soutient politiquement, financièrement et militairement les mouvements de libération nationale à travers le monde.
3. L'Organisation des Nations Unies (ONU), caisse de résonance des peuples opprimés :
La Charte de San Francisco proclame dès son article 1er le principe de l'égalité des droits des peuples et de leur droit à disposer d'eux-mêmes. L'Assemblée Générale de l'ONU, où le nombre de pays décolonisés augmente chaque année, devient une formidable tribune internationale où sont mis au ban les abus coloniaux. La célèbre résolution 1514 (XV) du 14 décembre 1960 déclare solennellement que « la sujétion des peuples à une domination étrangère constitue un déni des droits fondamentaux de l'homme » et exige l'indépendance immédiate et inconditionnelle de tous les territoires colonisés.

III. L'ÉLECTROCHOC DU TIERS-MONDE : LA CONFÉRENCE DE BANDOENG (1955)
Du 18 au 24 avril 1955, à Bandoeng sur l'île de Java en Indonésie, 29 pays d'Afrique et d'Asie représentant plus de la moitié de la population mondiale se réunissent pour la première fois sans aucune puissance occidentale.
- Sous l'autorité de leaders charismatiques comme Soekarno (Indonésie), Jawaharlal Nehru (Inde), Gamal Abdel Nasser (Égypte) et Zhou Enlai (Chine), la conférence proclame : « Le colonialisme sous toutes ses formes est un mal auquel il doit être mis fin sans retard » ;
- Bandoeng marque le réveil politique du Tiers-Monde (expression forgée en 1952 par le démographe français Alfred Sauvy par analogie avec le Tiers-État de la Révolution de 1789) et donne un coup d'accélérateur irréversible aux luttes d'émancipation en Afrique et au Maghreb.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation : Sujet très récurrent au Bac sénégalais :
  - « La Seconde Guerre mondiale : cause ou catalyseur de la décolonisation ? » ;
  - « Confrontez le rôle des facteurs internes et des facteurs externes dans l'émancipation des peuples dominés » ;
  - « En quoi l'école coloniale a-t-elle été la matrice de sa propre destruction ? ».
• En commentaire de documents : Analyser des extraits de la Charte de l'Atlantique (1941), de la Charte de l'ONU (1945), du manifeste de Bandoeng (1955) ou des discours anticoloniaux de Senghor, Sékou Touré ou Frantz Fanon.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
L'effondrement des empires coloniaux après 1945 résulte d'un faisceau convergent de causalités historiques. Les souffrances accumulées des peuples colonisés et la maturité de leurs avant-gardes politiques ont rencontré une conjoncture internationale favorable dominée par l'ONU et les deux supergrands. Dès la fin des années 1940, la décolonisation s'ébranle d'abord en Asie, avant de déferler sur le Proche-Orient et l'Afrique tout entière.`,
  sections: [
    {
      title: 'I. Les facteurs internes : Exploitation, élites et éveil des consciences',
      content: `1. La violence du système colonial : spoliation foncière, économie de traite extractive, travail forcé et humiliations du Code de l\'indigénat alimentant la colère populaire.
2. Le rôle paradoxal de l\'école occidentale : formation d\'une élite lettrée (Senghor, Houphouët, Nkrumah, Gandhi) qui retourne les idéaux républicains et humanistes contre le maître colonial.
3. Structuration du combat civique : création des partis nationalistes (RDA, Congrès indien) et essor du syndicalisme ouvrier (grèves du Dakar-Niger).`
    },
    {
      title: 'II. L\'impact décisif de la Seconde Guerre mondiale',
      content: `1. Démythification de l\'homme blanc : effondrement éclair des puissances coloniales en 1940 face à l\'Allemagne et au Japon.
2. La dette de sang des troupes indigènes : prise de conscience des tirailleurs africains réclamant l\'égalité des droits ; le drame de Thiaroye (1944).`
    },
    {
      title: 'III. Les facteurs externes : Deux supergrands et la tribune de l\'ONU',
      content: `1. L\'anticolonialisme des USA : tradition républicaine et volonté d\'ouverture des marchés fermés aux capitaux américains.
2. L\'offensive idéologique de l\'URSS : soutien matériel et théorique (Lénine) aux guerres de libération nationale pour affaiblir le camp capitaliste.
3. L\'ONU et la Charte de San Francisco : sacralisation du droit des peuples à disposer d\'eux-mêmes (résolution 1514 de 1960 condamnant tout colonialisme).`
    },
    {
      title: 'IV. Le catalyseur de Bandoeng (1955) : L\'irruption du Tiers-Monde',
      content: `1. Rassemblement historique de 29 nations afro-asiatiques en Indonésie sous l\'égide de Soekarno, Nehru, Nasser et Zhou Enlai.
2. Condamnation unanime du colonialisme : affirmation de la solidarité des pays dominés et refus d\'alignement aveugle sur les blocs de la guerre froide.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : hiérarchiser rigoureusement facteurs internes (déterminants profonds) et facteurs externes (catalyseurs d\'opportunité).
• Commentaire : traquer la rhétorique d\'affirmation identitaire dans les textes de l\'époque et la confrontation des arguments juridiques.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `La décolonisation apparaît comme un mouvement inéluctable de l\'Histoire. En brisant la domination séculaire de l\'Occident, elle restitue aux peuples d\'Afrique et d\'Asie la souveraineté sur leur propre destin.`
    }
  ]
};

export const LESSON_7_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-7',
  number: 'LEÇON 7',
  title: 'LA DÉCOLONISATION EN ASIE : L\'INDE, L\'INDONÉSIE ET L\'INDOCHINE',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 2 • Décolonisation et Tiers-Monde',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Le premier continent à briser le carcan colonial : l\'indépendance de l\'Inde britannique (la non-violence de Gandhi, Nehru, Ali Jinnah et la partition sanglante de 1947 créant l\'Inde et le Pakistan), l\'émancipation de l\'Indonésie néerlandaise avec Soekarno (1945-1949) et la guerre d\'Indochine (1946-1954 : Hô Chi Minh, Diên Biên Phu et les accords de Genève).',
  image: {
    caption: 'Figure H2.2 : Les voies contrastées de l\'émancipation asiatique (Négociation vs Guerre de libération)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="asieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#asieGrad)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#082f49" text-anchor="middle">LA DÉCOLONISATION EN ASIE : DEUX VOIES PRINCIPALES</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">1. L\'Inde Britannique (1947)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Gandhi : Satyagraha (non-violence)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Désobéissance civile (Marche sel)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Parti du Congrès (Nehru)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Partition : Union Indienne &amp; Pakistan</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Émancipation négociée tragique</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">2. L\'Indonésie (1945-49)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Indes néerlandaises (Pays-Bas)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Proclamation par Soekarno (1945)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Guerre coloniale &amp; guérilla</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Pression de l\'ONU &amp; des USA</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Souveraineté acquise en 1949</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">3. L\'Indochine (1946-54)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Hô Chi Minh &amp; le Viêt-minh</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Guerre de libération marxiste</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Diên Biên Phu (7 mai 1954 - Giap)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Accords de Genève (juillet 1954)</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Victoire armée éclatante</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 7 : LA DÉCOLONISATION EN ASIE : L'INDE, L'INDONÉSIE ET L'INDOCHINE

INTRODUCTION
L'Asie est le premier continent à briser les chaînes de la domination coloniale au lendemain de la Seconde Guerre mondiale. Dès 1945, l'occupation japonaise a ruiné le prestige des puissances coloniales occidentales (Royaume-Uni, Pays-Bas, France) et favorisé l'essor de mouvements nationalistes puissants et aguerris. Entre 1947 et 1954, le continent asiatique expérimente les deux grandes voies de l'émancipation :
- La voie pacifique et négociée, magnifiquement illustrée par l'Inde britannique accédant à l'indépendance en 1947 sous l'impulsion de la résistance non-violente du Mahatma Gandhi ;
- La voie de la guerre de libération armée révolutionnaire, dont la guerre d'Indochine (1946-1954) constitue l'exemple le plus éclatant, où le Viêt-minh communiste d'Hô Chi Minh et du général Giap inflige à l'armée française la cuisante défaite de Diên Biên Phu.

I. L'ÉMANCIPATION NÉGOCIÉE DE L'INDE BRITANNIQUE : DE LA NON-VIOLENCE À LA PARTITION TRAGIQUE (1947)
1. Le combat singulier du Mahatma Gandhi et de Jawaharlal Nehru :
Joyau de la couronne britannique (« The Jewel in the Crown »), l'Empire des Indes regroupait plus de 400 millions d'habitants. Dès les années 1920, Mohandas Karamchand Gandhi (surnommé le « Mahatma », la Grande Âme) prend la tête du Parti du Congrès. Gandhi forge une méthode de lutte politique révolutionnaire :
- La Satyagraha (l'étreinte de la vérité) et l'Ahimsa (la non-violence active absolue) ;
- La désobéissance civile de masse : refus de payer l'impôt colonial, boycott des marchandises et des textiles industriels britanniques (Gandhi filant lui-même son coton au rouet traditionnel) ;
- La mémorable « Marche du Sel » (mars-avril 1930) : marchant 380 kilomètres jusqu'à l'océan pour ramasser une poignée de sel marin gratuit, Gandhi brise le monopole fiscal britannique et entraîne l'arrestation de plus de 60 000 militants non-violents.
2. La rupture religieuse : Hindous contre Musulmans :
Si Gandhi et Nehru luttent pour une Inde unie, laïque et démocratique, la minorité musulmane, menée par Muhammad Ali Jinnah au sein de la Ligue Musulmane, craint d'être écrasée par la majorité hindoue. Jinnah exige la création d'un État musulman distinct : la « théorie des deux nations ».
3. Le plan Mountbatten et la tragédie de la Partition (15 août 1947) :
Conscient de l'impossibilité de maintenir son autorité face aux émeutes intercommunautaires sanglantes, le gouvernement travailliste britannique envoie le vice-roi Lord Mountbatten pour hâter le retrait. Le 15 août 1947, l'indépendance est proclamée, mais elle s'accompagne d'une partition dramatique :
- L'Union Indienne, à majorité hindoue, dirigée par le Premier ministre Jawaharlal Nehru ;
- Le Pakistan (scindé alors en Pakistan occidental et Pakistan oriental, futur Bangladesh en 1971), république islamique dirigée par Ali Jinnah.
Cette partition artificielle provoque l'un des plus gigantesques et sanglants exodes de l'Histoire : plus de 15 millions de réfugiés franchissent les nouvelles frontières dans les deux sens, tandis que des massacres religieux font entre 500 000 et un million de morts. Désespéré par cette haine fratricide, Gandhi est assassiné le 30 janvier 1948 à New Delhi par un extrémiste hindou fanatique.

II. L'INDONÉSIE : DE LA PROCLAMATION DE 1945 À L'INDÉPENDANCE DE 1949
1. L'occupation japonaise et la proclamation de Soekarno :
Colonie des Pays-Bas riche en pétrole, en caoutchouc et en épices (les Indes orientales néerlandaises), l'Indonésie est occupée par le Japon de 1942 à 1945. Deux jours après la capitulation nippone, le 17 août 1945, le leader nationaliste Soekarno proclame unilatéralement l'indépendance de la République d'Indonésie.
2. La guerre coloniale néerlandaise (1945-1949) :
Refusant d'abandonner leur empire, les Pays-Bas lancent deux offensives militaires d'envergure (qualifiées hypocritement d'« actions de police ») pour reconquérir l'archipel. Mais l'armée néerlandaise s'enlise face à la guérilla populaire indonésienne.
3. La capitulation diplomatique des Pays-Bas :
Sous la menace des États-Unis de suspendre l'aide financière du Plan Marshall et sous la pression ferme du Conseil de Sécurité de l'ONU, les Pays-Bas capitulent et reconnaissent officiellement la souveraineté de l'Indonésie le 27 décembre 1949 lors de la Conférence de La Haye. Soekarno devient le premier président de la nation unifiée.

III. LA GUERRE D'INDOCHINE (1946 - 1954) : LE MODÈLE DE LA GUERRE RÉVOLUTIONNAIRE MARXISTE
1. La proclamation d'indépendance d'Hô Chi Minh (septembre 1945) :
Le 2 septembre 1945 à Hanoï, Hô Chi Minh, fondateur du Parti Communiste Indochinois et chef de la ligue pour l'indépendance (le Viêt-minh), proclame la République Démocratique du Vietnam, citant la Déclaration d'Indépendance américaine de 1776.
2. L'engrenage de la guerre coloniale (1946) :
Désireuse de restaurer sa souveraineté impériale, la France du général de Gaulle tente de négocier un compromis boiteux, mais l'intransigeance des amiraux coloniaux provoque le bombardement d'Haiphong en novembre 1946 et l'insurrection du Viêt-minh à Hanoï le 19 décembre 1946 : c'est le déclenchement de la guerre d'Indochine.
3. L'internationalisation du conflit dans la Guerre Froide :
À partir de 1949, la victoire de Mao Zedong en Chine transforme la guerre : la Chine communiste et l'URSS fournissent à l'armée du Viêt-minh, commandée par le général Vo Nguyên Giap, un armement lourd moderne et une base arrière stratégique. De leur côté, les États-Unis financent jusqu'à 80 % de l'effort de guerre français au nom de l'endiguement du communisme en Asie du Sud-Est.
4. Le désastre français de Diên Biên Phu (novembre 1953 - mai 1954) :
Pour couper les routes d'approvisionnement du Viêt-minh vers le Laos et attirer ses divisions dans une bataille rangée décisive, l'état-major français crée une gigantesque base aéroterrestre retranchée dans la cuvette de Diên Biên Phu. Mais au terme d'un exploit logistique inouï à travers la jungle montagneuse, Giap hisse des centaines de pièces d'artillerie lourde sur les crêtes dominant la cuvette. Le siège commence le 13 mars 1954 : pilonné sans répit sous la mousson, le camp retranché français tombe le 7 mai 1954 après 55 jours de combats d'une férocité inouïe.
5. Les Accords de Genève (21 juillet 1954) :
Le nouveau président du Conseil français, Pierre Mendès France, négocie les accords de Genève :
- Reconnaissance de l'indépendance totale du Cambodge, du Laos et du Vietnam ;
- Division provisoire du Vietnam le long du 17e parallèle entre un Nord-Vietnam communiste (Hanoï) et un Sud-Vietnam pro-occidental (Saïgon), annonçant la future tragédie de la guerre du Vietnam avec les États-Unis.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation : Comparer les modèles de décolonisation asiatique :
  - La méthode gandhienne de la non-violence face à la violence armée révolutionnaire du Viêt-minh ;
  - Le rôle de la Guerre Froide dans la radicalisation des luttes d'émancipation en Asie.
• En commentaire de documents : Analyser la déclaration d'indépendance de Hô Chi Minh, les textes de Gandhi sur la non-violence ou le texte des accords de Genève de 1954.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La décolonisation de l'Asie entre 1947 et 1954 a sonné le glas de la suprématie occidentale. La victoire éclatante d'un peuple colonisé en guenilles face à une armée européenne moderne à Diên Biên Phu a retenti comme un coup de tonnerre dans le monde entier : elle a prouvé aux peuples d'Afrique et du Maghreb que la liberté était désormais à portée de main.`,
  sections: [
    {
      title: 'I. L\'Inde britannique : Le triomphe de la non-violence et le drame de la partition',
      content: `1. La doctrine de Gandhi : Satyagraha (force de la vérité), Ahimsa (non-violence) et désobéissance civile de masse (la Marche du Sel de 1930).
2. L\'échec de l\'unité : opposition confessionnelle entre le Parti du Congrès (Nehru, Gandhi) partisan d\'une Inde unie et la Ligue Musulmane (Jinnah) exigeant un État séparé.
3. Le plan Mountbatten et la Partition (15 août 1947) : naissance sanglante de l\'Inde et du Pakistan ; 15 millions de déplacés et assassinat de Gandhi en 1948.`
    },
    {
      title: 'II. L\'Indonésie : Du coup d\'éclat de Soekarno à la capitulation néerlandaise',
      content: `1. Proclamation de 1945 : Soekarno profite de la capitulation japonaise pour déclarer la république souveraine.
2. La guerre d\'indépendance (1945-1949) : échec des offensives militaires néerlandaises face à la guérilla et pressions diplomatiques des États-Unis et de l\'ONU.
3. Victoire diplomatique : reconnaissance de l\'Indonésie souveraine en décembre 1949.`
    },
    {
      title: 'III. La Guerre d\'Indochine : Victoire militaire du marxisme anticolonial',
      content: `1. Hô Chi Minh et le Viêt-minh : proclamation de la Rép. Démocratique du Vietnam en 1945 et rupture de 1946.
2. Internationalisation du conflit : soutien militaire chinois et soviétique à Giap face au financement américain de l\'armée française.
3. Choc de Diên Biên Phu (7 mai 1954) : chute héroïque du camp retranché et signature des accords de Genève coupant le Vietnam au 17e parallèle.`
    },
    {
      title: 'IV. Comparaison des méthodes d\'émancipation en Asie',
      content: `• Voie négociée (Inde) : transition constitutionnelle, institutions parlementaires préservées, mais déchirement communal tragique.
• Voie insurrectionnelle armée (Indochine) : guerre populaire prolongée, alliance de l\'idéologie marxiste et du patriotisme, coût humain effroyable.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : sujet classique « Comparer la décolonisation de l\'Inde et celle de l\'Indochine ».
• Commentaire : repérer l\'articulation entre nationalisme indigène et échiquier géopolitique mondial de la guerre froide.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `L\'Asie décolonisée a montré la voie au reste du monde dominé. La fin des empires asiatiques a fait sauter le verrou colonial, transmettant l\'onde de choc au Maghreb et à l\'Afrique noire.`
    }
  ]
};

export const LESSON_8_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-8',
  number: 'LEÇON 8',
  title: 'LA DÉCOLONISATION AU MAGHREB ET AU PROCHE-ORIENT : TUNISIE, MAROC ET GUERRE D\'ALGÉRIE',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 2 • Décolonisation et Tiers-Monde',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'Les protectorats de Tunisie (Habib Bourguiba, Néo-Destour) et du Maroc (Sultan Mohammed V, parti de l\'Istiqlal, exil et triomphe en 1956) face à la tragédie de l\'Algérie française : colonie de peuplement (un million de pieds-noirs), Toussaint rouge de 1954, le FLN et l\'ALN, la bataille d\'Alger (1957), la crise du 13 mai 1958, le retour de De Gaulle, le putsch des généraux, les accords d\'Évian (18 mars 1962) et l\'indépendance sanglante.',
  image: {
    caption: 'Figure H2.3 : Les chemins divergents de l\'émancipation maghrébine (Protectorats vs Colonie de peuplement)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="maghGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#maghGrad)" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7f1d1d" text-anchor="middle">LA DÉCOLONISATION DU MAGHREB (1954 - 1962)</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">1. Tunisie (1956)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Protectorat instauré en 1881</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Néo-Destour d\'Habib Bourguiba</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Discours de Carthage (Mendès France)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Autonomie puis indépendance</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Transition politique maîtrisée</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">2. Maroc (1956)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Protectorat instauré en 1912</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Parti de l\'Istiqlal &amp; Mohammed V</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Exil du Sultan à Madagascar (1953)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Émeutes urbaines &amp; retour triomphal</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Indépendance en mars 1956</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">3. Guerre d\'Algérie (54-62)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Colonie de peuplement (3 dépt.)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Toussaint rouge 1954 (FLN/ALN)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Bataille d\'Alger &amp; crise mai 1958</text>
        <text x="14" y="118" font-size="11" fill="#374151">• De Gaulle &amp; accords d\'Évian (1962)</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Guerre totale (18 mars 1962)</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 8 : LA DÉCOLONISATION AU MAGHREB ET AU PROCHE-ORIENT : TUNISIE, MAROC ET GUERRE D'ALGÉRIE

INTRODUCTION
L'émancipation du Maghreb sous domination française présente un contraste géopolitique et dramatique saisissant. Alors que la Tunisie et le Maroc, simples protectorats ayant conservé la continuité formelle de leurs dynasties régnantes (les beys de Tunis et les sultans chérifiens), accèdent à la souveraineté en mars 1956 au terme de négociations politiques relativement brèves, l'Algérie s'enfonce dans une guerre sanglante et traumatisante de huit années (1954-1962). Conquise dès 1830 et intégrée juridiquement au territoire métropolitain sous la forme de trois départements français (« L'Algérie, c'est la France »), l'Algérie abrite une puissante colonie de peuplement d'un million d'Européens (les « pieds-noirs ») farouchement opposés à tout compromis avec les neuf millions de musulmans indigènes marginalisés. Le déclenchement de l'insurrection de la « Toussaint rouge » le 1er novembre 1954 ouvre l'une des guerres de décolonisation les plus atroces du XXe siècle, qui fait chuter la IVe République française en mai 1958, ramène le général de Gaulle au pouvoir et débouche sur les accords d'Évian du 18 mars 1962.

I. L'ÉMANCIPATION DES PROTECTORATS : TUNISIE ET MAROC (1952 - 1956)
1. La Tunisie : Le pragmatisme d'Habib Bourguiba :
Placée sous protectorat français depuis le Traité du Bardo de 1881, la Tunisie voit émerger dans les années 1930 le Néo-Destour, parti nationaliste moderne dirigé par le jeune avocat Habib Bourguiba.
- Alliant manifestations populaires et négociation diplomatique serrée, Bourguiba préconise la politique des « étapes » ;
- En juillet 1954, conscient de l'enlisement français en Indochine, le président du Conseil Pierre Mendès France se rend à Carthage et proclame solennellement l'autonomie interne de la Tunisie ;
- Le 20 mars 1956, la France reconnaît l'indépendance totale de la Tunisie. Bourguiba abolit la monarchie beylicale en 1957 et proclame une république moderne et laïque.
2. Le Maroc : La figure royale unificatrice de Mohammed V :
Sous protectorat français depuis le traité de Fès de 1912, le Maroc voit son combat nationaliste incarné conjointement par le parti de l'Istiqlal (l'Indépendance) et par le jeune Sultan Sidi Mohammed ben Youssef (futur roi Mohammed V).
- Dans son retentissant discours de Tanger du 10 avril 1947, Mohammed V rompt avec la réserve diplomatique pour réclamer l'indépendance et l'intégrité territoriale du royaume unifié au monde arabe ;
- En août 1953, cédant aux pressions des colons ultras et des féodaux collaborateurs menés par le pacha de Marrakech Thami El Glaoui, les autorités françaises destituent le Sultan et l'exilent en Corse puis à Madagascar, le remplaçant par un souverain fantoche (Ben Arafa) ;
- Cet exil royal est une erreur politique monumentale : il transforme Mohammed V en martyr national adoré de son peuple (« On voit son visage dans la lune ») et déclenche une insurrection urbaine armée et des attentats quotidiens ;
- Devant l'embrasement général et l'ouverture du front algérien, la France capitule : Mohammed V rentre triomphalement à Rabat en novembre 1955. L'indépendance du Maroc est signée le 2 mars 1956.

II. LA TRAGÉDIE ALGÉRIENNE : L'IMPOSSIBLE CONCILIATION DANS UNE COLONIE DE PEUPLEMENT
1. Les racines de la déchirure :
- Colonie de conquête depuis 1830, l'Algérie n'est pas un protectorat, mais une partie intégrante de la République française ;
- Statut colonial profondément inégalitaire : les colons européens possèdent les meilleures terres de la Mitidja et contrôlent l'économie, tandis que la population musulmane autochtone est maintenue dans l'analphabétisme, la misère rurale et le sous-développement ;
- Le traumatisme des massacres de Sétif et Guelma (8 mai 1945) : le jour même où l'Europe célèbre la victoire contre le nazisme, des manifestations nationalistes algériennes sont réprimées dans le sang par l'armée française et les milices de colons (faisant entre 15 000 et 45 000 morts algériens). Cet événement détruit tout espoir d'assimilation pacifique chez les jeunes militants indépendantistes.
2. Le 1er novembre 1954 : La « Toussaint rouge » et la naissance du FLN :
Une poignée de jeunes révolutionnaires dissidents du mouvement nationaliste traditionnel (les « six chefs historiques » de l'intérieur : Mustapha Ben Boulaïd, Larbi Ben M'hidi, Didouche Mourad, Rabah Bitat, Krim Belkacem et Mostefa Ben Boulaïd, rejoints par Ahmed Ben Bella à l'extérieur) fondent le Front de Libération Nationale (FLN) et son bras armé, l'Armée de Libération Nationale (ALN).
Dans la nuit du 1er novembre 1954, une trentaine d'attentats coordonnés éclatent dans les Aurès et à travers le pays. Le ministre de l'Intérieur français, François Mitterrand, réplique avec intransigeance : « L'Algérie, c'est la France, et des Flandres au Congo, il n'y a qu'une seule loi. La seule négociation, c'est la guerre. »

III. LES GRANDES PHASES DU CONFLIT ALGÉRIEN (1954 - 1962)
1. L'escalade militaire et la « Bataille d'Alger » (1957) :
En 1956, le gouvernement français de Guy Mollet vote les « pouvoirs spéciaux » et envoie le contingent (les jeunes appelés du service militaire) en Algérie : plus de 400 000 soldats français sont engagés.
Pour attirer l'attention de l'ONU et de la presse mondiale, le FLN porte la terreur au cœur de la capitale avec la « Bataille d'Alger » (attentats à la bombe du réseau de Yacef Saâdi dans les cafés fréquentés par les Européens). Le général Massu et ses 8 000 parachutistes reçoivent les pleins pouvoirs de police : en quadrillant la Casbah, pratiquant la torture systématique et les exécutions sommaires (« corvées de bois »), l'armée française démantèle le réseau du FLN mais perd toute caution morale devant la conscience universelle.
2. La crise du 13 mai 1958 et la chute de la IVe République :
Craignant que le gouvernement de Paris ne s'apprête à négocier avec le FLN, les colons européens et les généraux de l'armée se soulèvent à Alger le 13 mai 1958 et créent un Comité de Salut Public présidé par le général Salan. L'armée menace d'envahir Paris avec des parachutistes. Impuissante et discréditée, la IVe République fait appel au général de Gaulle, qui prend le pouvoir le 1er juin 1958 et fonde la Ve République.
3. L'itinéraire gaullien : De « Je vous ai compris » à l'Autodétermination :
- Le 4 juin 1958 à Alger, De Gaulle lance son ambigu « Je vous ai compris » pour calmer l'armée et les pieds-noirs ;
- Mais comprenant avec lucidité que la France s'isole diplomatiquement à l'ONU et qu'il est impossible d'intégrer démographiquement 10 millions d'Algériens sans ruiner la France, De Gaulle propose en septembre 1959 le droit à l'« autodétermination » des Algériens ;
- Cette volte-face est vécue comme une trahison intolérable par les partisans de l'Algérie française : en avril 1961, quatre généraux (Salan, Challe, Jouhaud, Zeller) tentent un putsch militaire à Alger (« le putsch des généraux »), mais De Gaulle brise la rébellion grâce à son appel ferme radiodiffusé aux soldats du contingent ;
- L'Organisation Armée Secrète (OAS), groupe terroriste clandestin d'extrême droite dirigé par Salan, se lance dans une politique de la terre brûlée sanglante à Alger, Oran et Paris, commettant attentats aveugles et assassinats politiques.
4. Les Accords d'Évian (18 mars 1962) et l'indépendance de l'Algérie :
Après d'âpres négociations secrètes menées par Louis Joxe pour la France et Krim Belkacem pour le Gouvernement Provisoire de la République Algérienne (GPRA), les accords d'Évian sont signés le 18 mars 1962, ordonnant le cessez-le-feu immédiat.
- Le référendum d'autodétermination du 1er juillet 1962 consacre le « OUI » à l'indépendance à 99,7 % des suffrages ;
- Le 5 juillet 1962, l'indépendance de la République Algérienne Démocratique et Populaire est solennellement proclamée sous la présidence d'Ahmed Ben Bella ;
- L'indépendance s'accompagne de l'exode panique d'un million de pieds-noirs fuyant vers la France en quelques semaines (« la valise ou le cercueil ») et du massacre tragique de dizaines de milliers de harkis (soldats algériens musulmans engagés dans l'armée française, abandonnés par Paris).

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation : Sujets classiques portant sur :
  - « Pourquoi la décolonisation de l'Algérie fut-elle plus violente que celle de la Tunisie et du Maroc ? » ;
  - « Le rôle de la guerre d'Algérie dans l'effondrement de la IVe République et la naissance de la Ve République en France » ;
  - « La guerre d'Algérie : un conflit colonial aux répercussions géopolitiques mondiales ».
• En commentaire de documents : Analyser la proclamation du FLN du 1er novembre 1954, le discours de De Gaulle sur l'autodétermination de 1959 ou les textes des accords d'Évian de 1962.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La décolonisation du Maghreb a profondément remodelé le monde arabo-méditerranéen. Si la Tunisie et le Maroc ont su négocier une transition diplomatique préservant leur tissu institutionnel, la guerre d'Algérie demeure l'un des traumatismes historiques les plus profonds du XXe siècle. En triomphant au prix de centaines de milliers de martyrs, le peuple algérien a démontré au Tiers-Monde que la détermination révolutionnaire pouvait venir à bout de l'armée coloniale la plus puissante.`,
  sections: [
    {
      title: 'I. La décolonisation négociée des protectorats : Tunisie et Maroc',
      content: `1. Tunisie (1956) : le Néo-Destour de Bourguiba, politique réaliste des étapes et discours de Carthage de Mendès France consacrant l\'indépendance.
2. Maroc (1956) : alliance du parti de l\'Istiqlal et du sultan Mohammed V ; l\'exil royal de 1953 transformé en moteur de la résistance populaire armée forçant Paris à capituler.`
    },
    {
      title: 'II. Les origines de la fracture algérienne',
      content: `1. La spécificité de la colonie de peuplement : 1 million de pieds-noirs dominant 9 millions d\'Algériens spoliés ; dogme étatique de « l\'Algérie française ».
2. Le traumatisme des massacres de Sétif et Guelma (8 mai 1945) : rupture irrémédiable de l\'illusion réformatrice.
3. La Toussaint rouge (1er novembre 1954) : déclaration de guerre du FLN et de l\'ALN engageant la lutte armée pour la restauration de l\'État algérien souverain.`
    },
    {
      title: 'III. Les grandes étapes militaires et politiques du conflit (1954-1962)',
      content: `1. La Bataille d\'Alger (1957) : parachutistes du général Massu, torture institutionnalisée et victoire militaire française payée d\'un désastre moral mondial.
2. La crise du 13 mai 1958 : insurrection des généraux à Alger, mort de la IVe République et retour providentiel du général de Gaulle.
3. De l\'autodétermination aux accords d\'Évian : putsch des généraux manqué (1961), terreur sanglante de l\'OAS, signature des accords d\'Évian le 18 mars 1962 et proclamation de l\'indépendance le 5 juillet 1962.`
    },
    {
      title: 'IV. Les séquelles humaines et mémorielles de la guerre',
      content: `1. L\'exode des pieds-noirs : rapatriement dans l\'urgence d\'un million d\'Européens découvrant l\'exil en métropole.
2. Le drame des harkis : abandon et massacres des supplétifs musulmans fidèles à la France.
3. Le coût humain algérien : des centaines de milliers de morts civils et militaires, villages rasés et populations déplacées.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : opposer rigoureusement la dynamique des protectorats et celle de la colonie de peuplement.
• Commentaire : analyser l\'évolution du discours gaullien de 1958 à 1962 et la rhétorique anticoloniale du FLN.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `La guerre d\'Algérie a incarné le paroxysme de la tragédie coloniale française. Son dénouement a marqué la fin définitive de l\'empire colonial français en Afrique du Nord et consacré la légitimité historique des luttes populaires de libération.`
    }
  ]
};

export const LESSON_9_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-9',
  number: 'LEÇON 9',
  title: 'LA DÉCOLONISATION EN AFRIQUE NOIRE SUBSAHARIENNE : DE BRAZZAVILLE AUX GUERRES DES COLONIES PORTUGAISES',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 2 • Décolonisation et Tiers-Monde',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'L\'Afrique sous domination française : conférence de Brazzaville (1944), Union française (1946), création du RDA à Bamako, loi-cadre Defferre de 1956, référendum gaulliste de 1958 et le « NON » historique d\'Ahmed Sékou Touré en Guinée, l\'année 1960 des indépendances. Le modèle britannique : l\'Indirect Rule et le Ghana pionnier de Kwame Nkrumah (1957). Les guerres de libération armées dans les colonies portugaises : Amílcar Cabral (PAIGC, Guinée-Bissau), Agostinho Neto (MPLA, Angola) et Samora Machel (FRELIMO, Mozambique).',
  image: {
    caption: 'Figure H2.4 : Les trois trajectoires de la décolonisation en Afrique subsaharienne',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="afrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#15803d" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#16a34a" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#afrGrad)" stroke="#16a34a" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#14532d" text-anchor="middle">LES VOIES DE LA DÉCOLONISATION EN AFRIQUE NOIRE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#4ade80" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">1. Espace Français (AOF/AEF)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Brazzaville (1944) &amp; Union (1946)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• RDA à Bamako &amp; Loi-cadre 1956</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Référendum 1958 : « NON » Guinée</text>
        <text x="14" y="118" font-size="11" fill="#374151">• 1960 : Vague des indépendances</text>
        <text x="14" y="140" font-size="11" fill="#15803d" font-weight="bold">→ Émancipation négociée progressive</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#4ade80" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">2. Espace Britannique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Méthode de l\'Indirect Rule</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Ghana pionnier (Nkrumah 1957)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Nigéria indépendant en 1960</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Intégration au Commonwealth</text>
        <text x="14" y="140" font-size="11" fill="#15803d" font-weight="bold">→ Transition constitutionnelle</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#4ade80" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">3. Colonies Portugaises</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Dictature de Salazar (intransigeance)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Guinée-Bissau : Amílcar Cabral</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Angola : MPLA (Agostinho Neto)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Mozambique : FRELIMO (Machel)</text>
        <text x="14" y="140" font-size="11" fill="#15803d" font-weight="bold">→ Guerres de libération (1974-75)</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 9 : LA DÉCOLONISATION EN AFRIQUE NOIRE SUBSAHARIENNE : DE BRAZZAVILLE AUX GUERRES DES COLONIES PORTUGAISES

INTRODUCTION
Si l'Asie et le Maghreb ont souvent conquis leur liberté au prix d'affrontements militaires sanglants, la décolonisation de l'Afrique noire subsaharienne a emprunté des trajectoires différenciées selon la nature de la puissance coloniale tutélaire et la présence ou non de colons européens sur place.
Dans les territoires sous tutelle britannique et française, l'émancipation s'est opérée principalement par des réformes constitutionnelles et des négociations politiques progressives, culminant avec l'indépendance historique du Ghana de Kwame Nkrumah en 1957 et l'année faste de 1960 où quatorze colonies d'Afrique occidentale et centrale française accèdent simultanément à la souveraineté. En revanche, dans les territoires sous domination portugaise (Guinée-Bissau, Angola, Mozambique), l'aveuglement fasciste de la dictature de Salazar a contraint les peuples à de longues et héroïques guerres de libération armées menées par des leaders révolutionnaires d'exception comme Amílcar Cabral, qui n'aboutiront qu'en 1974-1975 à la faveur de la Révolution des Œillets à Lisbonne.

I. L'ÉVOLUTION DE L'AFRIQUE NOIRE FRANÇAISE : DE LA CONFÉRENCE DE BRAZZAVILLE À 1960
1. La Conférence de Brazzaville (janvier-février 1944) :
Convoquée en pleine Seconde Guerre mondiale par le général de Gaulle et le gouverneur général Félix Éboué pour s'assurer du soutien militaire et économique de l'Afrique équatoriale française à la France Libre, la conférence reconnaît la nécessité de réformer le pacte colonial (promesses d'abolir le travail forcé, développement de l'instruction, accès progressif des indigènes aux emplois administratifs). Toutefois, le préambule de la conférence exclut solennellement toute idée d'indépendance ou d'autonomie en dehors du bloc français : « Les fins de l'œuvre de civilisation accomplie par la France dans les colonies écartent toute idée d'autonomie, toute possibilité d'évolution hors du bloc français de l'Empire. »
2. L'Union Française de 1946 et l'essor des partis politiques :
La Constitution de la IVe République remplace l'Empire par l'« Union Française » (1946). Le travail forcé est aboli grâce à la loi portée par le député ivoirien Félix Houphouët-Boigny (loi Houphouët-Boigny d'avril 1946), et les Africains obtiennent le statut de citoyens avec le droit d'élire des députés à l'Assemblée Nationale à Paris (Léopold Sédar Senghor, Lamine Guèye, Houphouët-Boigny, Modibo Keïta).
En octobre 1946, le Congrès fondateur de Bamako crée le Rassemblement Démocratique Africain (RDA), premier grand parti politique panafricain transfrontalier.
3. La Loi-cadre Defferre (23 juin 1956) : L'autonomie et le piège de la balkanisation :
Face à la défaite d'Indochine et à l'embrasement de l'Algérie, la France cherche à désamorcer les revendications en Afrique subsaharienne. Rédigée par Gaston Defferre et Félix Houphouët-Boigny, la loi-cadre de 1956 instaure le suffrage universel avec collège électoral unique et crée des conseils de gouvernement territoriaux dotés d'une large autonomie interne.
Mais cette loi brise les deux grands ensembles fédéraux historiques — l'Afrique Occidentale Française (AOF, capitale Dakar) et l'Afrique Équatoriale Française (AEF, capitale Brazzaville) — en accordant l'autonomie à chaque colonie prise individuellement. Léopold Sédar Senghor dénonce vigoureusement cette « balkanisation de l'Afrique », qui affaiblit les territoires en créant des micro-États artificiels incapables de faire face à la métropole.
4. Le référendum du 28 septembre 1958 et le « NON » historique de la Guinée :
Revenu au pouvoir en 1958, le général de Gaulle propose aux colonies d'Afrique une nouvelle « Communauté franco-africaine » : les pays votant « OUI » accèdent à l'autonomie au sein de la Communauté présidée par Paris ; voter « NON » signifie l'indépendance immédiate avec rupture brutale de toute aide financière et technique française.
Le 25 août 1958 à Conakry, Ahmed Sékou Touré lance à De Gaulle sa phrase immortelle : « Nous préférons la liberté dans la pauvreté à la richesse dans l'esclavage ! » La Guinée vote « NON » à 95 % le 28 septembre 1958 et proclame son indépendance le 2 octobre 1958. En représailles immédiates, l'administration française évacue brutalement la Guinée en emportant archives, médicaments et en sabotant les installations téléphoniques.
5. 1960 : L'année des indépendances africaines :
La fragile Communauté gaulliste ne résiste pas aux aspirations d'émancipation. En 1960, quatorze États africains francophones accèdent à l'indépendance internationale (Cameroun, Togo, Madagascar, Dahomey/Bénin, Niger, Haute-Volta/Burkina Faso, Côte d'Ivoire, Tchad, Centrafrique, Congo-Brazzaville, Gabon, Mali, Mauritanie et Sénégal le 20 août 1960 après l'éclatement de la Fédération du Mali).

II. LA VOIE BRITANNIQUE : DU GHANA DE NKRUMAH AU COMMONWEALTH
1. La méthode de l'Indirect Rule (administration indirecte) :
Contrairement à la politique d'assimilation jacobine centralisée française, la Grande-Bretagne s'appuyait sur les chefs traditionnels et les coutumes indigènes pour administrer ses colonies. Cette démarche pragmatique a facilité une transition institutionnelle graduelle vers le self-government (gouvernement autonome).
2. Le Ghana pionnier (1957) et le leadership panafricain de Kwame Nkrumah :
Ancienne colonie de la Gold Coast (Côte de l'Or), le Ghana est le premier pays d'Afrique noire subsaharienne à conquérir son indépendance le 6 mars 1957.
À la tête du Convention People's Party (CPP), Kwame Nkrumah (l'Osagyefo, le Rédempteur) mobilise les travailleurs et la jeunesse urbaine. Nkrumah fait du Ghana la capitale du panafricanisme militant, affirmant : « L'indépendance du Ghana n'a aucun sens si elle n'est pas liée à la libération totale de tout le continent africain ! »
3. L'émancipation de la fédération du Nigéria (1960) :
Géant démographique du continent, le Nigéria accède à la souveraineté en octobre 1960 dans le cadre du Commonwealth britannique, mais hérite de profondes rivalités ethniques et régionales (Haoussas au Nord, Yorubas à l'Ouest, Ibos à l'Est) qui déboucheront tragiquement sur la sanglante guerre civile du Biafra (1967-1970).

III. LES GUERRES DE LIBÉRATION DANS LES COLONIES PORTUGAISES (1961 - 1975)
1. L'intransigeance du régime salazariste :
Considérant ses possessions d'outre-mer comme des « provinces ultramarines » inaliénables de la nation portugaise, la dictature de Salazar refuse tout compromis politique. Les mouvements nationalistes africains n'ont d'autre choix que de recourir à la lutte armée révolutionnaire :
2. La Guinée-Bissau et Amílcar Cabral (PAIGC) :
Fondateur du Parti Africain pour l'Indépendance de la Guinée et du Cap-Vert (PAIGC) en 1956, Amílcar Cabral, brillant ingénieur agronome et théoricien politique majeur de la décolonisation, organise une guérilla paysanne méthodique. Le PAIGC libère progressivement les deux tiers du territoire national, y installant des écoles et des dispensaires populaires.
Assassiné par des traîtres à la solde de la police politique portugaise (PIDE) à Conakry le 20 janvier 1973, Cabral ne verra pas la victoire finale : le PAIGC proclame unilatéralement l'indépendance de la Guinée-Bissau dans les maquis de Madina do Boé le 24 septembre 1973, reconnue par l'ONU.
3. L'Angola (MPLA) et le Mozambique (FRELIMO) :
- En Angola, le Mouvement Populaire de Libération de l'Angola (MPLA) dirigé par le poète Agostinho Neto mène une lutte acharnée à la fois contre l'armée coloniale portugaise et contre les mouvements rivaux pro-occidentaux (FNLA et UNITA) ;
- Au Mozambique, le Front de Libération du Mozambique (FRELIMO) fondé par Eduardo Mondlane (assassiné en 1969) et repris par Samora Machel libère les provinces du Nord.
4. La Révolution des Œillets à Lisbonne (25 avril 1974) :
Épuisée par treize années de guerres coloniales sans issue qui ruinent le pays et déciment sa jeunesse, l'armée portugaise (le Mouvement des Forces Armées - MFA) renverse la dictature à Lisbonne le 25 avril 1974. Le nouveau pouvoir démocratique négocie aussitôt le retrait total d'Afrique : le Mozambique devient indépendant en juin 1975 et l'Angola en novembre 1975.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation : Sujets classiques :
  - « Comparer la politique coloniale française et britannique en Afrique subsaharienne » ;
  - « Pourquoi la décolonisation de l'empire portugais a-t-elle pris la forme d'une guerre de libération armée ? » ;
  - « L'année 1960 dans l'histoire de l'Afrique : mythe ou réalité ? ».
• En commentaire de documents : Analyser la déclaration de De Gaulle à Brazzaville en 1944, le discours de Sékou Touré du 25 août 1958, les écrits d'Amílcar Cabral ou les déclarations de Kwame Nkrumah à Accra.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La décolonisation de l'Afrique noire subsaharienne a scellé l'entrée collective du continent noir dans le concert des nations souveraines. Si le passage de relais s'est fait de façon globalement pacifique dans les colonies françaises et britanniques, il a laissé en héritage des frontières arbitraires et des économies extraverties dépendantes des anciennes métropoles. À partir de 1960, l'Afrique indépendante doit relever le défi herculéen de la construction de l'État-nation, du développement économique et de l'unité continentale.`,
  sections: [
    {
      title: 'I. L\'émancipation de l\'Afrique noire française : De Brazzaville à 1960',
      content: `1. La Conférence de Brazzaville (1944) : promesses d\'abolition du travail forcé mais refus catégorique de l\'indépendance.
2. L\'Union Française (1946) : fin du travail forcé (loi Houphouët-Boigny), représentation parlementaire à Paris et création du RDA à Bamako.
3. La Loi-cadre Defferre (1956) : autonomie territoriale interne mais « balkanisation » dénoncée par Senghor brisant l\'unité de l\'AOF et de l\'AEF.
4. Le référendum de 1958 et le « NON » de la Guinée : rupture historique de Sékou Touré (« la liberté dans la pauvreté ») précipitant la vague des indépendances de 1960.`
    },
    {
      title: 'II. Le modèle d\'émancipation britannique : Le Ghana de Nkrumah',
      content: `1. L\'Indirect Rule : pragmatisme anglais facilitant la dévolution progressive du self-government.
2. Le Ghana (1957) : première nation subsaharienne indépendante ; vision panafricaine de Kwame Nkrumah et création du Commonwealth.`
    },
    {
      title: 'III. Les guerres de libération dans les colonies portugaises (1961-1975)',
      content: `1. L\'aveuglement de la dictature salazariste : décréter les territoires africains comme provinces inaliénables rendant la lutte armée inévitable.
2. Guinée-Bissau et Amílcar Cabral : la guérilla paysanne victorieuse du PAIGC et proclamation unilatérale de Madina do Boé (1973).
3. Angola (MPLA) et Mozambique (FRELIMO) : insurrections populaires menant à la Révolution des Œillets à Lisbonne (1974) et aux indépendances de 1975.`
    },
    {
      title: 'IV. Comparaison des voies de décolonisation subsaharienne',
      content: `• Voie réformiste négociée (France, Royaume-Uni) : dialogue institutionnel, élites parlementaires, maintien de liens privilégiés (accords de coopération).
• Voie révolutionnaire armée (Portugal) : radicalisation marxiste des mouvements de libération, soutien du bloc socialiste et effondrement violent de la métropole.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : analyser la dialectique balkanisation vs fédéralisme en Afrique noire ; évaluer le rôle d\'hommes providentiels (Senghor, Nkrumah, Cabral).
• Commentaire : confronter les discours de Brazzaville de 1944 et 1958, les manifestes du RDA et les thèses d\'Amílcar Cabral.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `En 1960, l\'Afrique noire hisse ses couleurs nationales. Mais l\'euphorie des indépendances laisse immédiatement place aux dures réalités du sous-développement et aux défis vertigineux de la souveraineté réelle.`
    }
  ]
};

export const LESSON_10_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-10',
  number: 'LEÇON 10',
  title: 'L\'ÉMERGENCE DU TIERS-MONDE ET LE MOUVEMENT DES NON-ALIGNÉS (DE BANDOENG À BELGRADE)',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 2 • Décolonisation et Tiers-Monde',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'L\'irruption collective des nations décolonisées sur la scène internationale : l\'acte de naissance de Bandoeng (1955), la théorisation du « Tiers-Monde » par Alfred Sauvy, la fondation du Mouvement des pays non-alignés à la Conférence de Belgrade (1961 - Tito, Nehru, Nasser, Nkrumah, Soekarno), la revendication d\'un Nouvel Ordre Économique International (NOEI), et les fractures et limites du non-alignement face à la Guerre Froide et à la dette.',
  image: {
    caption: 'Figure H2.5 : L\'itinéraire diplomatique du Tiers-Monde — De Bandoeng (1955) au Mouvement des Non-Alignés',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="tierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ea580c" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#f97316" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#tierGrad)" stroke="#f97316" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7c2d12" text-anchor="middle">L\'ÉMERGENCE DU TIERS-MONDE &amp; LE NON-ALIGNEMENT</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">1. Bandoeng (1955)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• 29 pays d\'Afrique et d\'Asie</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Soekarno, Nehru, Nasser, Zhou</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Condamnation du colonialisme</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Les 10 principes de coexistence</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Prise de conscience politique</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">2. Belgrade (1961)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• 25 États fondent le Non-Alignement</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Refus d\'adhérer aux pactes (OTAN/Varsovie)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Tito, Nehru, Nasser, Nkrumah</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Soutien aux luttes de libération</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Force diplomatique autonome</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">3. Combat Économique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• CNUCED &amp; Groupe des 77 (1964)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Appel pour le NOEI à l\'ONU (1974)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dégradation termes de l\'échange</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Le piège de la dette extérieure</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Quête de justice mondiale</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 10 : L'ÉMERGENCE DU TIERS-MONDE ET LE MOUVEMENT DES NON-ALIGNÉS (DE BANDOENG À BELGRADE)

INTRODUCTION
Au début des années 1950, alors que les relations internationales sont entièrement paralysées et bipolisées par l'affrontement mortifère entre les États-Unis et l'Union Soviétique, une troisième force diplomatique collective fait irruption sur la scène mondiale : le « Tiers-Monde ». Forgée en 1952 par le démographe français Alfred Sauvy dans un article célèbre du journal L'Observateur (« Car enfin ce Tiers-Monde ignoré, exploité, méprisé comme le Tiers-État, veut lui aussi être quelque chose »), l'expression désigne l'ensemble des pays d'Afrique, d'Asie et d'Amérique latine décolonisés, partageant les mêmes stigmates de pauvreté économique et refusant de se soumettre à la logique des blocs de la Guerre Froide. De la Conférence inaugurale de Bandoeng en 1955 à la constitution officielle du Mouvement des pays non-alignés à Belgrade en 1961, le Tiers-Monde tente d'imposer une voix neutre, pacifique et souveraine. Cependant, face aux dures réalités économiques du néocolonialisme, à la détérioration des termes de l'échange et aux conflits fratricides qui éclatent entre ses membres, le combat du Tiers-Monde pour un Nouvel Ordre Économique International (NOEI) révèle rapidement ses limites structurelles.

I. LA CONFÉRENCE DE BANDOENG (1955) : LE TONNERRE DE LA SOLIDARITÉ AFRO-ASIATIQUE
1. Le contexte et les participants :
Du 18 au 24 avril 1955, à l'invitation des Premiers ministres d'Indonésie, d'Inde, de Birmanie, du Pakistan et de Ceylan (les pays de Colombo), 29 délégations d'États d'Afrique et d'Asie se réunissent à Bandoeng en Indonésie. Fait historique mémorable : pour la première fois de l'Histoire moderne, des nations dominées se réunissent entre elles sans qu'aucun représentant d'une puissance occidentale blanche ne soit assis à la table des négociations.
2. Les figures de proue :
La conférence réunit des personnalités d'envergure mondiale : Soekarno (Indonésie), Jawaharlal Nehru (Inde), Gamal Abdel Nasser (Égypte) et Zhou Enlai (ministre des Affaires étrangères de la Chine communiste, qui adopte une posture modérée et rassurante).
3. Le communiqué final et les 10 principes de Bandoeng :
La conférence adopte une déclaration solennelle en 10 principes fondée sur :
- Le respect des droits fondamentaux de l'homme et des principes de la Charte de l'ONU ;
- Le respect de la souveraineté et de l'intégrité territoriale de toutes les nations ;
- La reconnaissance de l'égalité de toutes les races et de toutes les nations, petites et grandes ;
- La non-intervention et la non-ingérence dans les affaires intérieures des autres pays ;
- Le règlement pacifique de tous les différends internationaux et le refus absolu de recourir à la menace ou à la force des armes ;
- La condamnation unanime et sans réserve du colonialisme sous toutes ses formes, décrété « fléau auquel il doit être mis fin sans retard ».

II. LA NAISSANCE OFFICIELLE DU MOUVEMENT DES NON-ALIGNÉS À BELGRADE (1961)
1. Le tournant de la Conférence de Brioni (1956) :
Dès juillet 1956, sur l'île yougoslave de Brioni, trois dirigeants visionnaires — Josip Broz Tito (Yougoslavie communiste mais dissidente de Moscou depuis 1948), Nehru (Inde) et Nasser (Égypte) — jettent les bases doctrinales du « Non-Alignement ».
2. La Conférence constitutive de Belgrade (septembre 1961) :
Du 1er au 6 septembre 1961, en pleine crise du Mur de Berlin, 25 pays se réunissent à Belgrade pour fonder officiellement le Mouvement des pays non-alignés. Rejoints par Kwame Nkrumah (Ghana), l'empereur Hailé Sélassié (Éthiopie) et Soekarno, ils définissent les critères stricts d'adhésion :
- Pratiquer une politique indépendante fondée sur la coexistence pacifique ;
- Soutenir activement les mouvements populaires de libération nationale en lutte contre le colonialisme et l'apartheid ;
- Ne faire partie d'aucune alliance militaire multilatérale conclue dans le contexte des conflits entre grandes puissances (refus formel d'adhérer à l'OTAN ou au Pacte de Varsovie) ;
- N'accorder aucune base militaire étrangère sur son territoire national à l'une des superpuissances.

III. DU COMBAT POLITIQUE AU COMBAT ÉCONOMIQUE : LA REVENDICATION DU NOEI
1. La prise de conscience du néocolonialisme :
Très vite, les dirigeants du Tiers-Monde s'aperçoivent que l'indépendance politique (un drapeau, un hymne, un siège à l'ONU) est une coquille vide si elle ne s'accompagne pas de l'indépendance économique. Les nouvelles nations restent économiquement vassalisées aux anciennes métropoles :
- Le mécanisme de la « dégradation des termes de l'échange » : les pays du Sud exportent leurs matières premières agricoles et minières brutes à des prix de plus en plus bas fixés par les bourses occidentales, tandis qu'ils achètent des produits manufacturés industriels et des machines de plus en plus chers au Nord ;
- Le pillage des multinationales et la fuite des capitaux.
2. L'ONU comme levier économique : La CNUCED et le Groupe des 77 (1964) :
En 1964, sous la pression des pays du Sud, l'ONU crée la Conférence des Nations Unies sur le Commerce et le Développement (CNUCED). À cette occasion se constitue le « Groupe des 77 » (G77), alliance diplomatique et économique des pays en développement.
3. Le sommet d'Alger (1973) et la proclamation du NOEI (1974) :
Lors du IVe sommet des Non-Alignés à Alger en septembre 1973, sous la présidence de Houari Boumédiène, le Tiers-Monde passe à l'offensive économique. Porté par le succès du premier choc pétrolier d'octobre 1973 où les pays de l'OPEP imposent une hausse spectaculaire des cours du brut, le Tiers-Monde fait voter par l'Assemblée Générale de l'ONU le 1er mai 1974 la Déclaration relative à l'instauration d'un Nouvel Ordre Économique International (NOEI).
Le NOEI exige :
- La souveraineté permanente et inaliénable des États sur leurs ressources naturelles (droit souverain aux nationalisations) ;
- La juste rémunération des matières premières par des accords de stabilisation des cours ;
- Le transfert massif de technologies sans conditions léonines vers les pays du Sud ;
- La réforme démocratique du système financier international dominé par le FMI et la Banque Mondiale.

IV. LES FRACTURES ET LIMITES DU NON-ALIGNEMENT
1. L'hétérogénéité idéologique et les conflits armés internes :
Le Tiers-Monde n'a jamais formé un bloc homogène :
- Ruptures idéologiques : régimes pro-occidentaux capitalistes (Côte d'Ivoire, Arabie Saoudite) côtoyant des régimes socialistes étroitement liés à Moscou (Cuba de Fidel Castro, Vietnam, Algérie) ;
- Guerres fratricides entre pays membres : guerre d'Algérie et du Maroc (guerre des Sables en 1963), guerre entre l'Inde et la Chine en 1962, guerre entre l'Inde et le Pakistan pour le Cachemire, et guerre dévastatrice entre l'Iran et l'Irak (1980-1988).
2. L'écrasement sous le fardeau de la dette extérieure :
Dans les années 1980, la hausse des taux d'intérêt américains et la chute des cours des matières premières provoquent la crise de la dette du Tiers-Monde. Contraints de se soumettre aux Programmes d'Ajustement Structurel (PAS) draconiens du FMI et de la Banque Mondiale, les pays du Sud sont contraints de couper dans leurs budgets de santé et d'éducation, liquidant les espoirs du NOEI.
3. L'éclatement du Tiers-Monde :
À la fin du XXe siècle, le concept unifié de Tiers-Monde éclate : d'un côté, les « Dragons » et « Tigres » asiatiques (Corée du Sud, Taïwan, Singapour) s'industrialisent à une vitesse fulgurante et rejoignent les pays développés ; au Moyen-Orient, les monarchies pétrolières accumulent des fortunes colossales ; tandis que l'Afrique subsaharienne est reléguée dans la catégorie tragique des Pays les Moins Avancés (PMA).

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Le Mouvement des non-alignés et l'émergence du Tiers-Monde ont constitué une tentative historique grandiose pour démocratiser les relations internationales et briser la logique bipolaire d'affrontement nucléaire. Si ses ambitions de refonte économique mondiale ont achoppé sur la résistance des pays riches et sur ses propres contradictions internes, son héritage diplomatique demeure vivant : il a préparé le terrain à la réaffirmation contemporaine du « Sud Global » et des BRICS qui contestent aujourd'hui l'hégémonie occidentale au sein du monde multipolaire du XXIe siècle.`,
  sections: [
    {
      title: 'I. La Conférence de Bandoeng (1955) : L\'éveil politique des dominés',
      content: `1. Un tournant inédit : 29 délégations d\'Afrique et d\'Asie réunies sans tutelle occidentale sous l\'impulsion de Soekarno, Nehru, Nasser et Zhou Enlai.
2. Le concept d\'Alfred Sauvy (1952) : le « Tiers-Monde » comme force montante réclamant sa place souveraine par analogie avec le Tiers-État de 1789.
3. Les 10 principes de Bandoeng : respect de la souveraineté, égalité raciale absolue, non-ingérence et condamnation solennelle du fléau colonial.`
    },
    {
      title: 'II. La fondation du Mouvement des Non-Alignés à Belgrade (1961)',
      content: `1. Le trio de Brioni (1956) : Tito, Nasser et Nehru définissent la doctrine de la neutralité positive et du refus des blocs militaires.
2. Le sommet de Belgrade (septembre 1961) : 25 États adoptent la charte du non-alignement en pleine crise des missiles et du mur de Berlin.
3. Les critères de refus : interdiction d\'adhérer à l\'OTAN ou au Pacte de Varsovie et refus des bases militaires étrangères.`
    },
    {
      title: 'III. Le combat pour un Nouvel Ordre Économique International (NOEI)',
      content: `1. Le constat du néocolonialisme : détérioration continue des termes de l\'échange maintenant les pays du Sud dans la dépendance extractive.
2. La création de la CNUCED et du G77 (1964) : utilisation de l\'Assemblée générale de l\'ONU pour peser dans les négociations commerciales.
3. La déclaration du NOEI à l\'ONU (1974) : consécration du droit de nationalisation des richesses naturelles et exigence d\'un commerce équitable après le choc pétrolier de 1973.`
    },
    {
      title: 'IV. Les failles et l\'éclatement du Tiers-Monde',
      content: `1. Fractures internes et guerres fratricides : conflits frontaliers meurtriers (Inde-Pakistan, Iran-Irak, guerre des Sables) et divisions idéologiques pro-soviétiques vs pro-occidentales.
2. Le piège de la dette et les PAS : crise de solvabilité des années 1980 et austérité imposée par le FMI et la Banque Mondiale.
3. Différenciation économique : émergence spectaculaire des Nouveaux Pays Industrialisés d\'Asie (Dragons) face à la marginalisation des PMA africains.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : sujets clés « De Bandoeng à Belgrade : naissance et affirmation du Non-Alignement », « Le Tiers-Monde : mythe ou réalité géopolitique ? ».
• Commentaire : analyser le communiqué de Bandoeng de 1955, le discours de Boumédiène à l\'ONU en 1974 ou la déclaration du sommet de Belgrade de 1961.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Le Mouvement des Non-Alignés a représenté la conscience morale du monde décolonisé face à l\'arrogance des blocs. Sa quête inachevée de justice économique internationale renaît aujourd\'hui à travers le dynamisme géopolitique du Sud Global et des BRICS.`
    }
  ]
};
