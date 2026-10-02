import { LessonContent } from './courses';

// =========================================================================
// HISTOIRE CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 1 (LEÇONS 1 À 5)
// Programme officiel national de la République du Sénégal
// Cours exhaustifs intégraux sans résumé, grands axes et méthodologie Bac
// =========================================================================

export const LESSON_1_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-1',
  number: 'LEÇON 1',
  title: 'LES CONSÉQUENCES DE LA SECONDE GUERRE MONDIALE ET LES RÈGLEMENTS DE PAIX',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 1 • Relations Internationales de 1945 à nos jours',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Bilan humain effroyable (plus de 60 millions de morts), traumatisme moral de la Shoah et d\'Hiroshima, dévastation économique de l\'Europe, conférences interalliées (Yalta, Potsdam), procès de Nuremberg et de Tokyo, et naissance de l\'Organisation des Nations Unies (ONU).',
  image: {
    caption: 'Figure H1.1 : La redistribution géopolitique mondiale au lendemain de 1945',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="h1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#h1Grad)" stroke="#2563eb" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">LE MONDE AU LENDEMAIN DE 1945 : RÈGLEMENTS &amp; MUTATIONS</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#60a5fa" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">1. Bilans du Conflit</text>
        <text x="14" y="52" font-size="11" fill="#374151">• &gt;60 millions de morts (civils)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Choc moral : Shoah &amp; Nuremberg</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Ruine matérielle de l\'Europe</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Arme nucléaire (Hiroshima)</text>
        <text x="14" y="140" font-size="11" fill="#1e3a8a" font-weight="bold">→ Déclin des puissances coloniales</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#60a5fa" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2. Conférences de Paix</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Yalta (février 1945) : les « 3 Grands »</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Partage des zones d\'influence</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Potsdam (juillet-août 1945)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• 4 zones d\'occupation en Allemagne</text>
        <text x="14" y="140" font-size="11" fill="#1e3a8a" font-weight="bold">→ Germe de la bipolarisation</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#60a5fa" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">3. Fondation de l\'ONU</text>
        <text x="14" y="52" font-size="11" fill="#374151">• San Francisco (26 juin 1945)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Assemblée Générale &amp; Conseil</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Droit de veto des 5 permanents</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Sécurité collective &amp; Paix</text>
        <text x="14" y="140" font-size="11" fill="#1e3a8a" font-weight="bold">→ Nouvel ordre multilatéral</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 1 : LES CONSÉQUENCES DE LA SECONDE GUERRE MONDIALE ET LES RÈGLEMENTS DE PAIX

INTRODUCTION
S'étendant de septembre 1939 à septembre 1945, la Seconde Guerre mondiale a constitué le conflit le plus gigantesque, le plus meurtrier et le plus destructeur de toute l'histoire de l'humanité. Guerre totale par excellence, mobilisant l'ensemble des ressources économiques, scientifiques et psychologiques des nations belligérantes, elle s'est achevée par l'effondrement complet des puissances de l'Axe (l'Allemagne nazie, l'Italie fasciste et le Japon impérial). Mais au-delà de la victoire militaire des Alliés, le conflit a laissé le monde dans un état de dévastation matérielle et de traumatisme moral sans précédent, précipité par la révélation des camps d'extermination nazis et par l'éclair apocalyptique des bombes atomiques d'Hiroshima et de Nagasaki. Dès 1945, les règlements de paix négociés lors des conférences interalliées (Yalta, Potsdam) et la création de l'Organisation des Nations Unies (ONU) redessinent la carte géopolitique de la planète, consacrant l'effacement définitif de la vieille Europe au profit de deux superpuissances désormais rivales : les États-Unis et l'Union Soviétique.

I. UN BILAN MATÉRIEL, HUMAIN ET MORAL SANS PRÉCÉDENT
1. L'hécatombe démographique :
Le tribut humain payé par la planète dépasse les 60 millions de morts, soit plus de quatre fois le bilan de la Grande Guerre de 1914-1918. Fait tragique et inédit, les victimes civiles représentent plus de la moitié des pertes totales, conséquence des bombardements massifs de cités (Dresde, Londres, Tokyo), des massacres de représailles et de la politique délibérée d'extermination industrielle des populations civiles. L'URSS paie le prix le plus lourd avec plus de 27 millions de morts militaires et civils, suivie de la Chine (environ 15 millions) et de la Pologne (6 millions, soit 17 % de sa population d'avant-guerre). À ces morts s'ajoutent des dizaines de millions d'orphelins, de veuves, d'invalides et une marée de plus de 30 millions de personnes déplacées ou réfugiées errant à travers l'Europe en ruines.
2. Le traumatisme moral et le choc ontologique :
La découverte des camps d'extermination (Auschwitz-Birkenau, Treblinka, Maïdanek) où plus de 6 millions de Juifs et des centaines de milliers de Tziganes ont été assassinés de façon méthodique et industrielle au gaz Zyklon B provoque une crise de conscience universelle. La notion même d'Humanité est ébranlée : une nation civilisée au cœur de l'Europe a utilisé la science, la bureaucratie et l'industrie pour perpétrer un crime d'une ampleur inédite. Pour juger ces atrocités, le statut de Londres du 8 août 1945 crée le Tribunal Militaire International de Nuremberg, qui introduit dans le droit international deux concepts juridiques révolutionnaires : le « crime contre l'humanité » (défini comme imprescriptible) et le « crime de génocide ». Parallèlement, l'emploi de l'arme atomique par les États-Unis sur Hiroshima (6 août 1945) et Nagasaki (9 août 1945) ouvre l'ère nucléaire : pour la première fois de son histoire, l'humanité a créé les moyens technologiques de sa propre auto-destruction totale.
3. La ruine économique et financière de l'Europe et de l'Asie :
L'Europe et le Japon sont un champ de ruines fumantes : ponts détruits, voies ferrées hors d'usage, usines bombardées, cheptel décimé et terres agricoles ravagées. La famine, l'inflation vertigineuse et la pénurie de charbon frappent les populations de l'hiver 1945-1946. Seuls les États-Unis sortent du conflit immensément enrichis : leur territoire n'a subi aucune destruction matérielle (à l'exception de Pearl Harbor), leur appareil productif a doublé de capacité pour approvisionner les Alliés, et ils détiennent à eux seuls les deux tiers du stock d'or de la planète. Les accords de Bretton Woods (juillet 1944) instaurent le dollar américain comme monnaie de réserve internationale convertible en or, scellant l'hégémonie économique et financière absolue des États-Unis.

II. LES CONFÉRENCES DE PAIX ET LE PARTAGE DES ZONES D'INFLUENCE
1. La Conférence de Yalta (février 1945) :
Réunis en Crimée alors que les armées soviétiques foncent vers Berlin, les « Trois Grands » — Franklin D. Roosevelt pour les États-Unis, Winston Churchill pour la Grande-Bretagne et Joseph Staline pour l'URSS — préparent l'après-guerre :
- L'engagement de l'URSS d'entrer en guerre contre le Japon trois mois après la capitulation allemande ;
- La division future de l'Allemagne et de la ville de Berlin en quatre zones d'occupation militaire (américaine, soviétique, britannique, et française à la demande insistante de Churchill) ;
- La « Déclaration sur l'Europe libérée », promettant solennellement l'organisation d'élections démocratiques libres dans les pays délivrés du nazisme (promesse que Staline ne tardera pas à bafouer en imposant des régimes communistes à sa botte en Europe orientale).
2. La Conférence de Potsdam (juillet-août 1945) :
Réunie au palais de Cecilienhof près de Berlin vaincue, la conférence rassemble Harry Truman (qui a succédé à Roosevelt décédé en avril), Clément Attlee (vainqueur de Churchill aux élections de juillet) et Staline. Le climat est désormais tendu : Truman vient de réussir l'essai secret de la bombe atomique (« Projet Manhattan ») et entend résister aux exigences territoriales de Staline.
- Application de la règle des « 4 D » en Allemagne : Démilitarisation totale, Dénazification des institutions et de la justice, Décartellisation des grands trusts industriels complices d'Hitler, et Décentralisation administrative ;
- Fixation provisoire de la frontière germano-polonaise sur la ligne Oder-Neisse, amputant l'Allemagne d'un quart de son territoire historique et provoquant l'exode forcé de millions d'Allemands expulsés de Prusse-Orientale et de Silésie.

III. LA CRÉATION DE L'ORGANISATION DES NATIONS UNIES (ONU)
1. De la faillite de la SDN à la Charte de San Francisco (26 juin 1945) :
Tirant les leçons de l'impuissance tragique de la Société des Nations (SDN) qui n'avait pu empêcher les agressions hitlériennes et fascistes des années 1930, 50 nations alliées réunies à San Francisco signent le 26 juin 1945 la Charte des Nations Unies, entrée en vigueur le 24 octobre 1945.
2. Les buts et principes fondamentaux de l'ONU :
- Maintenir la paix et la sécurité internationales par le règlement pacifique des différends et le recours à la sécurité collective ;
- Développer des relations amicales entre les nations fondées sur le respect du principe de l'égalité des droits des peuples et de leur droit à disposer d'eux-mêmes (article 1er) ;
- Réaliser la coopération internationale dans les domaines économique, social, intellectuel et humanitaire.
3. Les organes principaux de l'ONU :
- L'Assemblée Générale : parlement mondial où chaque État membre dispose d'une voix égale selon le principe démocratique « un État, une voix ». Elle émet des recommandations ;
- Le Conseil de Sécurité : organe exécutif suprême chargé du maintien de la paix. Il comprend 15 membres, dont 5 membres permanents (États-Unis, URSS/Russie, Royaume-Uni, France, Chine) dotés du redoutable « droit de veto » (une seule voix négative d'un membre permanent bloque l'adoption de toute résolution contraignante) ;
- Le Secrétariat Général : dirigé par le Secrétaire général (premier titulaire : le Norvégien Trygve Lie), autorité morale et diplomatique de l'organisation ;
- La Cour Internationale de Justice (CIJ) siégeant à La Haye ;
- Les institutions spécialisées : UNESCO (éducation, science, culture), OMS (santé), UNICEF (enfance), HCR (réfugiés), FAO (alimentation), OIT (travail).

IV. L'IMPACT DE LA GUERRE SUR LES PEUPLES COLONISÉS D'AFRIQUE ET D'ASIE
1. L'ébranlement du mythe de l'invincibilité de l'homme blanc :
La défaite foudroyante de la France en 1940 et les victoires éclatantes du Japon en Asie du Sud-Est (chute de Singapour en 1942) ont détruit à jamais le complexe de supériorité raciale et militaire des colonisateurs européens.
2. La dette de sang et la prise de conscience des anciens combattants :
Des centaines de milliers de tirailleurs sénégalais, de goumiers marocains, de soldats tchadiens et indiens ont versé leur sang pour libérer la métropole de la tyrannie nazie. De retour au pays, ces tirailleurs refusent de redevenir des citoyens de seconde zone soumis au travail forcé et aux humiliations du Code de l'indigénat. Le massacre tragique du camp de Thiaroye à Dakar (1er décembre 1944), où l'armée coloniale française a fusillé des dizaines de tirailleurs réclamant légitimement leurs arriérés de solde, marque une fracture sanglante et indélébile dans la conscience nationale sénégalaise.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La Seconde Guerre mondiale clôt définitivement quatre siècles d'hégémonie mondiale de l'Europe occidentale. En 1945, le monde s'est libéré de la barbarie fasciste, mais l'illusion d'une paix universelle durable garantie par l'ONU va rapidement voler en éclats. Dès 1947, les deux grands vainqueurs du conflit, séparés par deux idéologies incompatibles — le capitalisme libéral américain et le communisme autoritaire soviétique —, engagent un duel planétaire titanesque : la Guerre Froide.`,
  sections: [
    {
      title: 'I. Le bilan humain, matériel et moral de la guerre',
      content: `1. Hécatombe démographique : plus de 60 millions de morts, surmortalité civile massive (bombardements urbains, déportations, famines) ; l\'URSS paie le plus lourd tribut avec 27 millions de victimes.
2. Choc moral sans précédent : découverte de la Shoah et des camps d\'extermination nazis (Nuremberg crée les notions juridiques de crime contre l\'humanité et génocide) ; entrée dans l\'ère atomique après Hiroshima et Nagasaki.
3. Faillite économique de l\'Europe : ruine des infrastructures, endettement massif et dépendance vis-à-vis des États-Unis, qui détiennent 70% du stock d\'or mondial (accords de Bretton Woods de 1944).`
    },
    {
      title: 'II. Les conférences interalliées et la nouvelle carte géopolitique',
      content: `1. Yalta (février 1945) : accord sur la défaite nazie, division de l\'Allemagne en 4 zones d\'occupation (USA, URSS, Royaume-Uni, France), Déclaration sur l\'Europe libérée.
2. Potsdam (juillet-août 1945) : mise en place de la règle des 4 D (Démilitarisation, Dénazification, Décartellisation, Décentralisation) et fixation de la frontière Oder-Neisse au profit de la Pologne.
3. Naissance de la bipolarité : méfiance croissante entre Truman et Staline marquant le début de la confrontation idéologique.`
    },
    {
      title: 'III. L\'ONU et la réorganisation des relations internationales',
      content: `1. Charte de San Francisco (26 juin 1945) : fondation de l\'ONU par 50 États pour préserver la paix et promouvoir la sécurité collective et les droits humains.
2. Structure institutionnelle : Assemblée Générale universelle et Conseil de Sécurité exécutif (15 membres dont 5 permanents dotés du droit de veto).
3. Institutions spécialisées : UNESCO, OMS, UNICEF, HCR, FAO assurant la coopération humanitaire et le développement socio-économique mondial.`
    },
    {
      title: 'IV. L\'éveil du monde colonisé et la tragédie de Thiaroye',
      content: `1. Perte du prestige européen : l\'effondrement militaire des métropoles en 1940 prouve la vulnérabilité des empires coloniaux.
2. Rôle des soldats coloniaux : participation décisive des tirailleurs sénégalais et troupes indigènes à la libération de l\'Europe.
3. Le massacre de Thiaroye (1er décembre 1944) : exécution sanglante de tirailleurs réclamant leurs droits, catalyseur décisif du nationalisme sénégalais et africain.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• En dissertation : sujet classique sur « La Seconde Guerre mondiale : rupture majeure dans l\'Histoire du XXe siècle » ou « Le bilan de 1945 porte-t-il déjà les germes de la Guerre Froide ? ».
• En commentaire de document : analyser les extraits des déclarations de Yalta, de la Charte de l\'ONU ou des réquisitions du procès de Nuremberg.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `L\'année 1945 marque l\'an zéro du monde contemporain. L\'effondrement de l\'axe fasciste et la création de l\'ONU ouvrent de grands espoirs de paix, mais la rivalité immédiate entre Washington et Moscou installe rapidement le monde dans l\'engrenage de la bipolarité.`
    }
  ]
};

export const LESSON_2_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-2',
  number: 'LEÇON 2',
  title: 'LA GUERRE FROIDE : GENÈSE ET BIPOLARISATION DU MONDE (1947 - 1953)',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 1 • Relations Internationales de 1945 à nos jours',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'La rupture de la Grande Alliance, le « rideau de fer » (Churchill à Fulton), la Doctrine Truman (containment) et le Plan Marshall face à la Doctrine Jdanov et au Kominform, le coup de Prague, le Blocus de Berlin (1948-1949), la création des deux Allemagnes (RFA/RDA), la constitution des blocs militaires (OTAN/Varsovie) et la Guerre de Corée (1950-1953).',
  image: {
    caption: 'Figure H1.2 : Les deux blocs antagonistes et le rideau de fer en Europe (1947-1953)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="gfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#gfGrad)" stroke="#64748b" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">LA BIPOLARISATION DU MONDE (1947 - 1953)</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">BLOC OCCIDENTAL (USA)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Idéologie : Libéralisme, démocratie</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Doctrine : Truman (Containment)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Économie : Plan Marshall (OECE)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Alliance militaire : OTAN (1949)</text>
        <text x="14" y="140" font-size="11" fill="#1d4ed8" font-weight="bold">→ Endiguement du communisme</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">CRISES MAJEURES</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Fulton (1946) : Rideau de fer</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Coup de Prague (février 1948)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Blocus de Berlin (1948-1949)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Division RFA / RDA (1949)</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Guerre de Corée (1950-1953)</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">BLOC ORIENTAL (URSS)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Idéologie : Marxisme-léninisme</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Doctrine : Jdanov (Anti-impérialisme)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Économie : CAEM / Comecon (1949)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Coordination : Kominform (1947)</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Pacte de Varsovie (1955)</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 2 : LA GUERRE FROIDE : GENÈSE ET BIPOLARISATION DU MONDE (1947 - 1953)

INTRODUCTION
Forgeron de l'expression dès 1947, le philosophe et journaliste américain Walter Lippmann, reprenant une formule de Bernard Baruch, consacre le concept de « Guerre Froide ». L'historien français Raymond Aron en donnera la définition la plus éclatante : « Paix impossible, guerre improbable ». De 1947 à 1953, le monde bascule dans un état de tension conflictuelle permanente opposant les deux superpuissances sorties victorieuses de la Seconde Guerre mondiale : les États-Unis et l'Union Soviétique. Divisées par des visions idéologiques irréconciliables, les deux superpuissances évitent l'affrontement militaire direct en raison de la terreur de l'arme nucléaire, mais se livrent une guerre totale sur les terrains politique, économique, technologique, culturel et à travers des conflits régionaux périphériques interposés. De la proclamation des doctrines Truman et Jdanov en 1947 à la guerre de Corée (1950-1953) et la mort de Staline, le monde subit une bipolarisation rigide symbolisée par la coupure de l'Europe derrière un « rideau de fer ».

I. LES ORIGINES DE LA RUPTURE : DE LA GRANDE ALLIANCE À LA DIVISION DU MONDE
1. Le discours de Fulton et la métaphore du « rideau de fer » (mars 1946) :
Dès le 5 mars 1946, à l'université de Fulton (Missouri) en présence du président Truman, Winston Churchill lance son fameux cri d'alarme : « De Stettin sur la Baltique à Trieste sur l'Adriatique, un rideau de fer s'est abattu sur le continent. » Churchill dénonce la soviétisation forcée de l'Europe centrale et orientale par l'Armée Rouge.
2. La tactique du salami et la satellisation de l'Europe de l'Est :
Sous l'autorité de Staline et du dirigeant hongrois Mátyás Rákosi, les partis communistes utilisent la « tactique du salami » : éliminer tranche après tranche les partis démocratiques rivaux (par la terreur policière, la censure et les fraudes électorales) pour instaurer des « démocraties populaires » sous tutelle totale de Moscou (Pologne, Roumanie, Bulgarie, Hongrie).
3. Le coup d'éclat du « Coup de Prague » (février 1948) :
En Tchécoslovaquie, seul pays d'Europe de l'Est ayant conservé une véritable tradition démocratique parlementaire sous la présidence d'Edvard Beneš, les communistes menés par Klement Gottwald font démissionner les ministres libéraux sous la menace d'une grève générale insurrectionnelle et défenestrent mystérieusement le ministre des Affaires étrangères Jan Masaryk. Le pays bascule définitivement sous la coupe de Moscou, provoquant une onde de choc en Occident.

II. 1947 : L'ANNÉE DE LA RUPTURE OFFICIELLE ET DES DEUX DOCTRINES
1. La Doctrine Truman et le principe de l'Endiguement (mars 1947) :
Le 12 mars 1947, devant le Congrès des États-Unis réuni en séance plénière, Harry Truman prononce le discours fondateur de la guerre froide. Invoquant la situation critique de la Grèce (en proie à une guerre civile contre les maquis communistes) et de la Turquie (menacée par les revendications soviétiques sur les Détroits), Truman pose les bases de la politique d'endiguement (« containment » théorisée par le diplomate George Kennan). Les États-Unis s'engagent à fournir une aide financière et militaire à tout peuple libre résistant à des minorités armées ou à des pressions extérieures visant à imposer la tyrannie totalitaire.
2. Le Plan Marshall ou European Recovery Program (juin 1947) :
Le 5 juin 1947, à l'université de Harvard, le général George Marshall, secrétaire d'État américain, propose une aide économique colossale et gratuite pour reconstruire l'Europe détruite. L'objectif est triple :
- Humanitaire : nourrir les populations affamées ;
- Économique : éviter une surproduction aux États-Unis en offrant des débouchés à ses exportations ;
- Politique : assécher le terreau électoral de la misère sur lequel prospèrent les puissants partis communistes français (PCF) et italien (PCI).
Seize pays d'Europe occidentale acceptent le plan et fondent l'Organisation Européenne de Coopération Économique (OECE) pour gérer les 13 milliards de dollars injectés. Staline refuse catégoriquement l'aide pour l'URSS et contraint ses satellites (Pologne, Tchécoslovaquie) à décliner l'offre, qualifiée de piège impérialiste américain.
3. La riposte soviétique : La Doctrine Jdanov et le Kominform (septembre 1947) :
En réplique, Andreï Jdanov, idéologue du Parti Communiste Soviétique, réunit en Pologne à Szklarska Poręba les dirigeants des neuf principaux partis communistes européens et publie le manifeste de la doctrine soviétique :
- Le monde est désormais scindé en deux camps irréconciliables : le camp impérialiste et antidémocratique dirigé par les États-Unis, assoiffé d'hégémonie mondiale, et le camp anti-impérialiste et démocratique dirigé par l'URSS, défenseur de la paix et de la souveraineté des peuples ;
- Création du Kominform (Bureau d'information des partis communistes), organe de centralisation et de discipline stricte sous la férule de Moscou ;
- En 1949, l'URSS crée le CAEM (Conseil d'Assistance Économique Mutuelle ou Comecon) pour organiser la division du travail et l'intégration économique planifiée du bloc socialiste.

III. LES GRANDES CRISES EUROPÉENNES : LE BLOCUS DE BERLIN ET LA SCISSION DE L'ALLEMAGNE (1948-1949)
1. Le Blocus de Berlin (juin 1948 - mai 1949) :
En juin 1948, pour relancer l'économie de leurs zones d'occupation en Allemagne, les Occidentaux fusionnent leurs trois territoires (la « Trizone ») et créent une monnaie commune solide, le Deutsche Mark. Furieux de voir une enclave capitaliste prospère au cœur de sa zone soviétique, Staline décide de couper toutes les voies d'accès terrestres, ferroviaires et fluviales reliant l'Allemagne de l'Ouest aux secteurs occidentaux de Berlin le 24 juin 1948. Deux millions de Berlinois de l'Ouest sont pris en otage, privés d'électricité et de vivres.
2. Le pont aérien allié victorieux :
Refusant de capituler ou de déclencher une Troisième Guerre mondiale, les Américains et leurs alliés organisent un pont aérien gigantesque sous la direction du général Lucius Clay. Pendant 322 jours, un avion atterrit toutes les trois minutes aux aéroports de Tempelhof et Gatow, transportant 2,3 millions de tonnes de nourriture, de médicaments et de charbon. Battu diplomatiquement et techniquement, Staline lève le blocus le 12 mai 1949.
3. La partition de l'Allemagne en deux États rivaux (1949) :
- En mai 1949, les trois zones occidentales adoptent la Loi fondamentale de Bonn qui donne naissance à la République Fédérale d'Allemagne (RFA), dirigée par le chancelier Konrad Adenauer ;
- En octobre 1949, la zone soviétique devient la République Démocratique Allemande (RDA), dictature communiste sous la direction de Walter Ulbricht avec Berlin-Est pour capitale.

IV. LA FORMATION DES BLOCS MILITAIRES ANTAGONISTES
1. L'Alliance atlantique (OTAN, avril 1949) :
Le 4 avril 1949, douze nations d'Amérique du Nord et d'Europe occidentale signent à Washington le Traité de l'Atlantique Nord (OTAN). Son article 5 stipule qu'une attaque armée contre l'un des pays membres en Europe ou en Amérique du Nord sera considérée comme une attaque dirigée contre tous les membres, engageant une assistance militaire immédiate (y compris nucléaire).
2. La riposte du Pacte de Varsovie (mai 1955) :
En réplique à l'intégration de la RFA dans l'OTAN en 1955, l'URSS crée le Pacte de Varsovie, alliance militaire intégrée liant Moscou à ses sept satellites d'Europe orientale, transformant l'Europe en une poudrière surarmée.

V. L'EXTENSION DE LA GUERRE FROIDE EN ASIE : DE LA RÉVOLUTION CHINOISE À LA GUERRE DE CORÉE
1. Le basculement de la Chine dans le camp communiste (1949) :
Le 1er octobre 1949, après avoir écrasé les armées nationalistes de Tchang Kaï-chek (qui se réfugie à Taïwan), Mao Zedong proclame à Pékin la République Populaire de Chine. Le pays le plus peuplé du monde rejoint le camp communiste, signant un traité d'amitié et d'alliance avec l'URSS en février 1950. Quelques semaines plus tôt, en août 1949, l'URSS a testé avec succès sa première bombe atomique, mettant fin au monopole nucléaire américain.
2. La Guerre de Corée (1950-1953) : Le premier affrontement chaud de la guerre froide
- Ancienne colonie japonaise, la Corée est coupée en deux en 1945 le long du 38e parallèle entre une Corée du Nord communiste (Kim Il-sung) et une Corée du Sud pro-américaine (Syngman Rhee) ;
- Le 25 juin 1950, avec le feu vert de Staline, les troupes nord-coréennes franchissent le 38e parallèle et envahissent la Corée du Sud, s'emparant de Séoul ;
- Profitant de la politique de la « chaise vide » de l'URSS au Conseil de sécurité de l'ONU (Moscou boycottant les séances pour protester contre le refus d'admettre la Chine communiste), les États-Unis font voter l'envoi d'une force internationale de l'ONU commandée par le général Douglas MacArthur ;
- Après le débarquement spectaculaire d'Incheon en septembre 1950, les troupes de l'ONU repoussent les Nord-Coréens et atteignent le fleuve Yalu à la frontière chinoise. Face à cette menace, la Chine communiste envoie un million de « volontaires » chinois qui rejettent les forces de l'ONU au sud ;
- MacArthur propose d'utiliser la bombe atomique contre la Chine ; Truman, terrifié à l'idée d'un conflit thermonucléaire mondial avec l'URSS, limoge MacArthur en avril 1951 ;
- Le front se stabilise sur le 38e parallèle. L'armistice de Panmunjom (27 juillet 1953) consacre le statu quo territorial au prix de près de 3 millions de morts.

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
En 1953, avec la signature de l'armistice de Corée et la mort de Joseph Staline le 5 mars 1953, s'achève la phase la plus glaciaire et la plus dangereuse de la Guerre Froide. Le monde est désormais fracturé en deux blocs hermétiques, surarmés et engagés dans une course aux armements terrifiante. Toutefois, la disparition du dictateur soviétique ouvre une brèche diplomatique inespérée vers ce que le nouveau maître du Kremlin, Nikita Khrouchtchev, nommera la « Coexistence pacifique ».`,
  sections: [
    {
      title: 'I. La genèse de la rupture et le rideau de fer',
      content: `1. Discours de Fulton (mars 1946) : Churchill alerte le monde libre sur la coupure de l\'Europe par un rideau de fer impénétrable.
2. La tactique du salami : élimination méthodique des partis libéraux et satellisation des démocraties populaires d\'Europe de l\'Est par Moscou.
3. Le Coup de Prague (février 1948) : prise de contrôle totale de la Tchécoslovaquie par les communistes sous la pression soviétique.`
    },
    {
      title: 'II. 1947 : La fracture officielle en deux doctrines antagonistes',
      content: `1. Doctrine Truman (mars 1947) : politique d\'endiguement (« containment ») visant à stopper par tous les moyens l\'expansion soviétique.
2. Plan Marshall (juin 1947) : aide économique de 13 milliards de dollars pour relever l\'Europe occidentale et immuniser ses peuples contre la misère communiste.
3. Doctrine Jdanov et Kominform (septembre 1947) : division du monde en camp impérialiste fauteur de guerre et camp socialiste démocratique et pacifique.`
    },
    {
      title: 'III. Les crises fondatrices : Blocus de Berlin et partition allemande',
      content: `1. Le Blocus de Berlin (juin 1948 - mai 1949) : riposte de Staline à la création du Deutsche Mark ; coupure totale des accès terrestres vers Berlin-Ouest.
2. Le pont aérien allié : exploit logistique ravitaillant 2 millions de Berlinois pendant près d\'un an et forçant Staline à céder.
3. La création de la RFA (mai 1949) et de la RDA (octobre 1949) : matérialisation territoriale de la frontière des blocs au cœur de l\'Europe.`
    },
    {
      title: 'IV. La confrontation des alliances militaires et le choc asiatique',
      content: `1. OTAN (1949) vs Pacte de Varsovie (1955) : organisation de la sécurité collective occidentale sous commandement américain face au bloc de l\'Est unifié.
2. La révolution chinoise (1949) : victoire de Mao Zedong, proclamation de la RPC et basculement du pays le plus peuplé du globe dans le camp socialiste.
3. La Guerre de Corée (1950-1953) : invasion du Sud par le Nord, intervention internationale sous mandat de l\'ONU, réplique chinoise et statu quo du 38e parallèle.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : analyser la mécanique de formation des blocs (1947-1953) ; confronter la nature des doctrines Truman et Jdanov ; expliquer la formule de Raymond Aron (« paix impossible, guerre improbable »).
• Commentaire de documents : cartes de Berlin, extraits du discours de Fulton ou des manifestes de Truman/Jdanov.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Entre 1947 et 1953, la guerre froide a cristallisé un système bipolaire mondial inédit. La dissuasion nucléaire naissante a empêché l\'apocalypse directe entre les deux géants, déplaçant la violence sur les théâtres périphériques d\'Asie.`
    }
  ]
};

export const LESSON_3_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-3',
  number: 'LEÇON 3',
  title: 'DE LA COEXISTENCE PACIFIQUE À LA DÉTENTE (1953 - 1975)',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 1 • Relations Internationales de 1945 à nos jours',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'La déstalinisation sous Khrouchtchev, la doctrine de coexistence pacifique, les secousses du bloc soviétique (Budapest 1956), la deuxième crise de Berlin et l\'érection du Mur (1961), la crise des missiles de Cuba (1962), le téléphone rouge, la guerre du Vietnam et les chefs-d\'œuvre diplomatiques de la Détente (SALT I, Ostpolitik, accords d\'Helsinki de 1975).',
  image: {
    caption: 'Figure H1.3 : La dialectique de la Détente — Entre crises au bord du gouffre et négociations de désarmement',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="detGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#detGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#065f46" text-anchor="middle">DE LA COEXISTENCE PACIFIQUE À LA DÉTENTE (1953 - 1975)</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">1. Coexistence (1953-62)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Déstalinisation (Khrouchtchev)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Insurrection de Budapest (1956)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Érection du Mur de Berlin (1961)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Compétition économique &amp; spatiale</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Équilibre de la terreur</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">2. Crise de Cuba (1962)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Révolution castriste (1959)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Missiles nucléaires soviétiques</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Blocus naval imposé par Kennedy</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Retrait des fusées in extremis</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Frôlement de l\'apocalypse</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">3. L\'Âge d\'Or Détente</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Téléphone rouge &amp; Non-prolifération</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Ostpolitik de Willy Brandt (1970)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Accords SALT I (Nixon-Brejnev)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Accords d\'Helsinki (1975)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Dialogue &amp; Coopération</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 3 : DE LA COEXISTENCE PACIFIQUE À LA DÉTENTE (1953 - 1975)

INTRODUCTION
La mort de Joseph Staline en mars 1953 et l'accession de Nikita Khrouchtchev à la tête de l'URSS ouvrent une phase nouvelle et complexe dans les relations internationales. Conscient que la possession conjointe de l'arme thermonucléaire (la bombe H) rend toute guerre générale suicidaire selon le principe de la « Destruction Mutuelle Assurée » (MAD en anglais), le nouveau pouvoir soviétique théorise la « Coexistence pacifique ». Cette nouvelle approche ne signifie pas l'abandon de la rivalité idéologique, mais substitue à l'affrontement militaire direct une compétition économique, scientifique et spatiale. Cependant, cette période demeure jalonnée de crises aiguës où l'humanité frôle la catastrophe nucléaire : la révolte de Budapest (1956), la construction du Mur de Berlin (1961) et le paroxysme de la crise des fusées de Cuba (octobre 1962). C'est précisément l'effroi rétrospectif de cette crise cubaine qui contraint Washington et Moscou à inaugurer une ère de négociation pragmatique et d'apaisement : la « Détente » (1963-1975), couronnée par les accords de désarmement SALT I et l'Acte final de la Conférence d'Helsinki en 1975.

I. LA COEXISTENCE PACIFIQUE SELON NIKITA KHROUCHTCHEV (1953-1960)
1. Le dégel politique et le XXe Congrès du PCUS (1956) :
En février 1956, lors du XXe Congrès du Parti communiste de l'Union soviétique, Khrouchtchev lit le fameux « rapport secret » qui dénonce les crimes monstrueux de Staline, le culte de la personnalité et les purges sanglantes. Sur le plan international, Khrouchtchev proclame que le socialisme finira inéluctablement par triompher du capitalisme par la supériorité de ses réalisations économiques et sociales, rendant la guerre entre les blocs « non fatale ».
2. Les premières secousses dans le bloc communiste :
La déstalinisation suscite un immense espoir d'émancipation en Europe de l'Est :
- En Pologne (juin-octobre 1956), les émeutes ouvrières de Poznań amènent au pouvoir Władysław Gomułka, qui obtient une plus grande autonomie interne ;
- En Hongrie (octobre-novembre 1956), l'insurrection populaire menée par Imre Nagy tourne à la révolution démocratique : Nagy proclame la sortie du Pacte de Varsovie, la neutralité du pays et le multipartisme. Face à cette brèche intolérable, Khrouchtchev envoie les chars soviétiques écraser dans le sang l'insurrection de Budapest (plus de 20 000 morts hongrois). Les Occidentaux, tétanisés à l'idée d'un conflit nucléaire et accaparés par la crise de Suez au même moment, n'interviennent pas : la frontière des blocs est sanctuarisée.
3. La compétition technologique et la course à l'espace :
En octobre 1957, l'URSS stupéfie la planète en lançant Spoutnik 1, le premier satellite artificiel en orbite, puis en envoyant le premier homme dans l'espace, Youri Gagarine, le 12 avril 1961. Humiliés, les États-Unis fondent la NASA et répliquent par le défi visionnaire de John F. Kennedy d'envoyer un Américain sur la Lune avant la fin de la décennie (exploit accompli par Neil Armstrong le 20 juillet 1969 avec la mission Apollo 11).

II. LES DEUX CRISES PAROXYSTIQUES AU BORD DU GOUFFRE (1961 - 1962)
1. La deuxième crise de Berlin et l'érection du Mur de la honte (août 1961) :
Entre 1949 et 1961, plus de 3 millions de citoyens est-allemands, en majorité des cadres, ingénieurs et étudiants instruits (« fuite des cerveaux »), fuient la dictature communiste de RDA en franchissant simplement la frontière ouverte à Berlin pour passer à Berlin-Ouest. Pour endiguer cette hémorragie mortelle pour l'économie est-allemande, les troupes de RDA coupent la ville dans la nuit du 12 au 13 août 1961 et érigent un mur de béton et de barbelés truffé de miradors et de pièges antichars : le Mur de Berlin (la Schandmauer). En juin 1963, le président Kennedy vient à Berlin-Ouest prononcer son vibrant discours de solidarité : « Ich bin ein Berliner » (Je suis un Berlinois). Le mur fige la division de l'Europe pour 28 ans.
2. La crise des missiles de Cuba (octobre 1962) :
- En 1959, la révolution cubaine menée par Fidel Castro et Che Guevara renverse le dictateur pro-américain Batista. Après le fiasco du débarquement américain anticastriste de la Baie des Cochons (avril 1961), Castro se rapproche de Moscou et déclare sa révolution socialiste ;
- À l'été 1962, Khrouchtchev installe secrètement à Cuba des fusées nucléaires à moyenne portée menaçant directement les grandes villes américaines en quelques minutes ;
- Le 14 octobre 1962, des avions espions américains U-2 photographient les rampes de lancement. Le 22 octobre, dans une allocution télévisée dramatique, Kennedy annonce la mise en place d'une « quarantaine navale » (blocus maritime militaire) autour de l'île et exige le démantèlement immédiat des missiles sous peine d'une frappe nucléaire préemptive ;
- Pendant six jours d'angoisse mondiale absolue, les navires soviétiques foncent vers la ligne de blocus américain. Finalement, un compromis secret est scellé le 28 octobre : Khrouchtchev ordonne le demi-tour de ses cargos et le retrait des missiles à Cuba en échange de la promesse américaine de ne jamais envahir Cuba et du retrait secret des missiles américains Jupiter obsolètes déployés en Turquie.

III. L'ÈRE DE LA DÉTENTE : GESTION COMMUNE DE LA BIPOLARITÉ (1963 - 1975)
1. Le temps du dialogue direct et de la non-prolifération :
Après avoir frôlé l'holocauste atomique, Kennedy et Khrouchtchev prennent conscience de la nécessité impérieuse de réguler leur rivalité :
- En juin 1963, installation du « téléphone rouge » (en réalité un téléscripteur télex direct) reliant la Maison-Blanche au Kremlin pour éviter toute guerre nucléaire par accident ou malentendu ;
- En août 1963, traité de Moscou interdisant les essais nucléaires dans l'atmosphère, l'espace et sous l'eau ;
- En 1968, Traité de Non-Prolifération nucléaire (TNP) signé sous l'égide de l'ONU.
2. L'Ostpolitik de Willy Brandt et la normalisation en Europe :
Devenu chancelier de RFA en 1969, le social-démocrate Willy Brandt opère une rupture diplomatique historique avec l'Ostpolitik (politique d'ouverture vers l'Est).
- En décembre 1970, le geste historique de Brandt, s'agenouillant en silence devant le monument du Ghetto de Varsovie, émeut la communauté internationale ;
- Signature des traités de Moscou et de Varsovie (1970) reconnaissant l'inviolabilité de la frontière Oder-Neisse ;
- Le Traité fondamental de 1972 où la RFA et la RDA se reconnaissent mutuellement comme deux États souverains, permettant leur entrée conjointe à l'ONU en 1973.
3. Les accords de désarmement SALT I (1972) :
En mai 1972 à Moscou, le président américain Richard Nixon et le secrétaire général soviétique Léonid Brejnev signent les accords SALT I (Strategic Arms Limitation Talks) qui gèlent pour cinq ans le nombre de lanceurs de missiles intercontinentaux (ICBM) et limitent drastiquement les systèmes antimissiles (Traité ABM). C'est la reconnaissance officielle de la parité stratégique entre les deux géants.
4. L'apogée de la Détente : Les accords d'Helsinki (août 1975) :
La Conférence sur la Sécurité et la Coopération en Europe (CSCE) réunit 35 chefs d'État à Helsinki. L'Acte final repose sur un compromis fondamental articulé en trois « corbeilles » :
- 1ère corbeille : Inviolabilité des frontières européennes issues de 1945 et non-ingérence dans les affaires intérieures (victoire diplomatique majeure pour l'URSS qui fait entériner son glacis géopolitique) ;
- 2ème corbeille : Coopération économique, commerciale, scientifique et technique entre l'Est et l'Ouest ;
- 3ème corbeille : Respect solennel des Droits de l'Homme et des libertés fondamentales de circulation et d'information (levier juridique formidable qui sera utilisé par les dissidents d'Europe de l'Est pour faire vaciller les régimes communistes).

IV. LES LIMITES DE LA DÉTENTE : LA GUERRE DU VIETNAM (1964 - 1975)
Tandis que la détente s'enracine en Europe, les deux superpuissances continuent de s'affronter violemment par procuration dans le Tiers-Monde, particulièrement en Indochine :
- Les États-Unis s'engagent massivement au Sud-Vietnam pour empêcher l'expansion du communisme au nom de la « théorie des dominos » (plus de 500 000 soldats américains déployés en 1968 sous Lyndon B. Johnson) ;
- Face à la guérilla acharnée du Vietcong et de l'armée nord-vietnamienne approvisionnée par l'URSS et la Chine, la technologie américaine (défoliants à l'agent orange, napalm, bombardements massifs B-52) échoue ;
- Contestée moralement par sa propre jeunesse et traumatisée par 58 000 soldats tués, l'Amérique de Nixon signe les accords de Paris en 1973 et retire ses troupes ;
- Le 30 avril 1975, la chute de Saïgon consacre la victoire totale des communistes et la première défaite militaire et morale de l'histoire des États-Unis.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La période 1953-1975 aura prouvé que le monde bipolaire pouvait trouver un équilibre négocié fondé sur la reconnaissance mutuelle des arsenaux de destruction massive. Avec les accords d'Helsinki de 1975, la paix semble définitivement consolidée en Europe. Cependant, cette Détente reposait sur une ambiguïté fondamentale : pour les Occidentaux, elle devait geler le statu quo mondial, tandis que pour Moscou, elle laissait le champ libre pour étendre son influence révolutionnaire dans le Tiers-Monde décolonisé. Cette divergence majeure provoquera dès 1979 la reprise des hostilités : la « Guerre fraîche ».`,
  sections: [
    {
      title: 'I. La Coexistence pacifique khrouchtchévienne (1953-1960)',
      content: `1. Déstalinisation au XXe Congrès (1956) : condamnation des crimes staliniens et affirmation que la guerre avec le capitalisme n\'est plus inéluctable.
2. Écrasement de Budapest (1956) : l\'intervention sanglante des blindés soviétiques en Hongrie réaffirme la souveraineté limitée au sein du Pacte de Varsovie.
3. Émulation technologique et spatiale : Spoutnik (1957) et Youri Gagarine (1961) ouvrent la course à l\'espace, couronnée par Apollo 11 sur la Lune en 1969.`
    },
    {
      title: 'II. Les crises au bord de l\'apocalypse : Berlin (1961) et Cuba (1962)',
      content: `1. Le Mur de Berlin (13 août 1961) : construction de la barrière de béton pour stopper l\'émigration vers l\'Ouest ; symbole matériel de la division européenne.
2. La crise des missiles de Cuba (octobre 1962) : découverte des fusées soviétiques, blocus maritime par JFK et négociations dramatiques sauvant la paix in extremis.`
    },
    {
      title: 'III. L\'apogée de la Détente et la diplomatie des traités',
      content: `1. Le Téléphone rouge (1963) et les traités d\'interdiction des essais : mise en place de canaux directs pour prévenir les accidents nucléaires.
2. L\'Ostpolitik de Willy Brandt (1970) : reconnaissance des frontières de l\'Est et normalisation des relations entre la RFA et la RDA.
3. Accords SALT I (1972) et Acte final d\'Helsinki (1975) : parité stratégique garantie et consécration conjointe de la sécurité des frontières et des Droits de l\'Homme.`
    },
    {
      title: 'IV. Les failles de la Détente : Le bourbier du Vietnam',
      content: `1. L\'engagement américain : déploiement de 500 000 GI\'s au nom de l\'endiguement et de la théorie des dominos.
2. Échec militaire et moral : résistance acharnée du Vietcong soutenu par Moscou et Pékin ; traumatisme des massacres et du napalm.
3. Chute de Saïgon (1975) : réunification du Vietnam sous le communisme et premier grand revers géopolitique de Washington.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : sujets fréquents sur « La crise de Cuba : tournant de la Guerre Froide », « La Détente : paix réelle ou trêve tactique ? ».
• Commentaire : analyser le discours de JFK à Berlin, les télégrammes secrets Khrouchtchev-Kennedy d\'octobre 1962 ou les clauses des accords d\'Helsinki.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `De 1953 à 1975, les deux Grands sont passés de la menace d\'anéantissement atomique à l\'institutionnalisation du dialogue. Mais cette Détente reste asymétrique et fragile, incapable d\'empêcher le retour des tensions à la fin de la décennie 1970.`
    }
  ]
};

export const LESSON_4_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-4',
  number: 'LEÇON 4',
  title: 'DE LA « GUERRE FRAÎCHE » À LA FIN DU MONDE BIPOLAIRE (1975 - 1991)',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 1 • Relations Internationales de 1945 à nos jours',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'L\'expansionnisme soviétique dans le Tiers-Monde (Angola, Mozambique, Éthiopie) et l\'invasion de l\'Afghanistan (1979), la riposte vigoureuse de Ronald Reagan (« America is back », IDS / « Guerre des étoiles »), la crise des euromissiles, l\'arrivée de Mikhaïl Gorbatchev (Glasnost et Perestroïka), la chute du Mur de Berlin (9 novembre 1989), la réunification allemande et l\'implosion de l\'URSS (décembre 1991).',
  image: {
    caption: 'Figure H1.4 : L\'engrenage de la chute du bloc de l\'Est et la dissolution de l\'URSS (1985-1991)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#finGrad)" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#1e1b4b" text-anchor="middle">L\'EFFONDREMENT DU BLOC SOVIÉTIQUE (1979 - 1991)</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">1. Guerre Fraîche (79-85)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Invasion Afghanistan (1979)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Boycott des JO de Moscou 1980</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Crise des Euromissiles (SS-20)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Reagan : « L\'Empire du Mal »</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Course technologique (IDS)</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">2. Réformes Gorbatchev</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Arrivée au pouvoir (1985)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Perestroïka (restructuration éco)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Glasnost (transparence liberté)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Traité de Washington FNI (1987)</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Fin de la doctrine Brejnev</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">3. Chute &amp; Dissolution</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Solidarność en Pologne (1989)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Chute du Mur (9 nov. 1989)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Réunification allemande (1990)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Putsch manqué (août 1991)</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Fin de l\'URSS (25 déc. 1991)</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 4 : DE LA « GUERRE FRAÎCHE » À LA FIN DU MONDE BIPOLAIRE (1975 - 1991)

INTRODUCTION
Entre 1975 et 1991, le monde assiste au dénouement spectaculaire et inattendu du plus grand affrontement géopolitique du XXe siècle. Alors que les accords d'Helsinki de 1975 semblaient avoir pérennisé la Détente, l'URSS de Léonid Brejnev profite de la paralysie morale et diplomatique des États-Unis (traumatisme du Vietnam et scandale du Watergate) pour marquer des points décisifs dans le Tiers-Monde (Angola, Mozambique, Éthiopie) avant d'envahir militairement l'Afghanistan en décembre 1979. Ce coup de force enterre définitivement la Détente et ouvre une période de tensions renouvelées : la « Guerre fraîche » (1979-1985). Sous l'impulsion du président Ronald Reagan, l'Amérique réarme vigoureusement et engage l'URSS dans une course technologique effrénée (l'Initiative de Défense Stratégique ou « Guerre des étoiles ») que l'économie soviétique vermoulue est incapable de soutenir. L'accession au pouvoir de Mikhaïl Gorbatchev en mars 1985 précipite une tentative désespérée de modernisation (Perestroïka et Glasnost) qui, loin de sauver le système communiste, provoque l'effondrement des démocraties populaires d'Europe de l'Est, la chute historique du Mur de Berlin le 9 novembre 1989 et l'implosion finale de l'Union Soviétique en décembre 1991, scellant la fin du monde bipolaire.

I. LA « GUERRE FRAÎCHE » ET LE SURSAUT AMÉRICAIN (1979 - 1985)
1. L'expansionnisme soviétique et l'invasion de l'Afghanistan (1979) :
Dans la seconde moitié des années 1970, Moscou étend sa zone d'influence en Afrique australe et dans la Corne de l'Afrique grâce à l'intervention de troupes expéditionnaires cubaines. Le 25 décembre 1979, l'Armée Rouge franchit la frontière afghane pour sauver le régime communiste chancelant de Kaboul. Cette agression directe au Proche-Orient provoque une riposte immédiate du président américain Jimmy Carter : boycott américain des Jeux Olympiques de Moscou de 1980, embargo sur les livraisons de céréales et aide militaire clandestine massive aux insurgés moudjahidines afghans (qui transformeront l'Afghanistan en véritable « Vietnam soviétique »).
2. La crise des Euromissiles en Europe (1977-1983) :
Dès 1977, l'URSS déploie en Europe de l'Est de redoutables missiles nucléaires à moyenne portée, les SS-20, capables d'anéantir les capitales ouest-européennes en moins de 15 minutes sans frapper le sol américain. En réplique, l'OTAN adopte la « double décision » de 1979 : proposer des négociations à Moscou, et en cas de refus, déployer en Europe occidentale des missiles de croisière et des fusées américaines Pershing II. Malgré des manifestations pacifistes massives en RFA (« Plutôt rouges que morts »), le chancelier Helmut Kohl et le président français François Mitterrand (« Les fusées sont à l'Est, les pacifistes à l'Ouest ») maintiennent la fermeté occidentale : les Pershing II sont installés en 1983.
3. La révolution reaganienne : « America is Back » :
Élu président des États-Unis en novembre 1980, le républicain Ronald Reagan rompt avec la politique d'endiguement défensif pour adopter le « roll back » (refoulement actif du communisme). Qualifiant l'URSS d'« Empire du Mal », Reagan augmente vertigineusement le budget du Pentagone et lance en mars 1983 l'Initiative de Défense Stratégique (IDS ou « Star Wars ») : un bouclier spatial d'armes laser conçu pour détruire les missiles nucléaires soviétiques dès leur décollage, rendant obsolète tout l'arsenal nucléaire de Moscou.

II. MIKHAÏL GORBATCHEV ET LE VENT DES RÉFORMES (1985 - 1989)
1. L'URSS en faillite systémique :
Lorsque Mikhaïl Gorbatchev est élu Secrétaire Général du PCUS en mars 1985 à l'âge de 54 ans, l'URSS est au bord du gouffre : gérontocratie sclérosée, pénuries alimentaires généralisées, retard technologique abyssal dans l'informatique, alcoolisme de masse, corruption endémique de la nomenklatura, et fardeau militaire intenable (les dépenses d'armement engloutissant plus de 20 % du PIB soviétique). La catastrophe nucléaire de Tchernobyl (26 avril 1986) achève de révéler au monde l'incurie et les mensonges du régime soviétique.
2. Le diptyque réformateur : Perestroïka et Glasnost :
Pour sauver le socialisme, Gorbatchev lance deux concepts jumeaux :
- La Perestroïka (restructuration) : tentative de modernisation économique introduisant une dose d'autonomie financière pour les entreprises d'État, la fin de la planification bureaucratique totale et une timide autorisation de coopératives privées ;
- La Glasnost (transparence) : fin de la censure étatique, liberté d'expression retrouvée pour la presse, libération des dissidents (notamment le physicien Andreï Sakharov) et réhabilitation des victimes des purges staliniennes.
3. Le désarmement nucléaire historique :
Comprenant que l'URSS ne peut plus soutenir la compétition financière de l'IDS, Gorbatchev engage un dialogue chaleureux avec Reagan lors des sommets de Genève (1985) et de Reykjavik (1986). Le 8 décembre 1987 à Washington, ils signent le Traité sur les Forces Nucléaires Intermédiaires (FNI), premier accord de l'Histoire qui ne se contente pas de limiter, mais ordonne la destruction physique totale de toute une catégorie d'armes nucléaires (les missiles à moyenne portée en Europe). En février 1989, Gorbatchev ordonne le retrait total et humiliant des troupes soviétiques d'Afghanistan.

III. 1989 : LE PRINTEMPS DES PEUPLES ET L'EFFONDREMENT DU BLOC DE L'EST
1. L'abandon de la « Doctrine Brejnev » :
Gorbatchev prévient les dirigeants communistes d'Europe orientale que l'Armée Rouge n'interviendra plus jamais pour sauver leurs régimes impopulaires (abandon de la doctrine de la souveraineté limitée). C'est le signal de la délivrance.
2. La déferlante démocratique en Europe centrale :
- En Pologne, le syndicat libre Solidarność mené par Lech Wałęsa contraint le général Jaruzelski à des élections semi-libres en juin 1989. Solidarność triomphe et Tadeusz Mazowiecki devient le premier chef de gouvernement non-communiste du bloc de l'Est ;
- En Hongrie, les réformateurs communistes ouvrent le rideau de fer à la frontière autrichienne en mai 1989, permettant à des dizaines de milliers d'Est-Allemands de fuir à l'Ouest ;
- En Tchécoslovaquie, la « Révolution de Velours » pacifique porte l'écrivain dissident Václav Havel à la présidence en décembre 1989 ;
- En Roumanie, la révolte populaire renverse violemment le dictateur Nicolae Ceaușescu, fusillé avec son épouse le 25 décembre 1989.
3. La chute historique du Mur de Berlin (9 novembre 1989) :
Débordé par les manifestations pacifiques quotidiennes de Leipzig et Berlin-Est scandant « Wir sind das Volk » (Nous sommes le peuple), le gouvernement de RDA annonce lors d'une conférence de presse brouillonne l'ouverture immédiate des postes de contrôle frontaliers le soir du 9 novembre 1989. Des centaines de milliers de Berlinois se ruent vers le mur et commencent à le détruire à coups de pioche dans une liesse universelle inouïe.
4. La réunification allemande (3 octobre 1990) :
Menée de main de maître par le chancelier Helmut Kohl avec l'accord de Gorbatchev et des Alliés (Traité de Moscou « 2+4 »), la réunification de l'Allemagne est officiellement proclamée le 3 octobre 1990. La RDA est absorbée par la RFA au sein de l'OTAN.

IV. L'IMPLOSION DE L'URSS ET LA FIN DE LA GUERRE FROIDE (1990 - 1991)
1. Le réveil des nationalités au sein de l'URSS :
Loin de stabiliser l'empire soviétique, la Glasnost libère les revendications nationalistes et séparatistes des 15 républiques de l'URSS. Les trois républiques baltes (Lituanie, Lettonie, Estonie) proclament unilatéralement leur indépendance dès le début de 1990.
2. Le putsch manqué de Moscou (août 1991) :
Le 19 août 1991, les conservateurs staliniens du KGB et de l'armée tentent un coup d'État pour renverser Gorbatchev alors en vacances en Crimée. Mais le coup d'État avorte piteusement grâce à la résistance héroïque du peuple moscovite et de Boris Eltsine, président de la République de Russie, qui harangue la foule debout sur un char devant le Parlement russe (la « Maison Blanche »). Eltsine devient le véritable maître politique de la Russie.
3. L'acte de décès officiel de l'URSS (décembre 1991) :
Le 8 décembre 1991, les dirigeants de la Russie (Eltsine), de l'Ukraine (Kravtchouk) et de la Biélorussie (Chouchkievitch) se réunissent en secret dans la forêt de Belovej et constatent officiellement que « l'URSS en tant que sujet du droit international et réalité géopolitique a cessé d'exister », créant la Communauté des États Indépendants (CEI).
Le 25 décembre 1991, à 19h32, Mikhaïl Gorbatchev annonce sa démission à la télévision soviétique. Quelques minutes plus tard, le drapeau rouge à la faucille et au marteau qui flottait sur le Kremlin depuis 1917 est descendu pour toujours et remplacé par le drapeau tricolore de la Russie.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
L'implosion pacifique de l'Union Soviétique en décembre 1991 clôt une parenthèse historique de 45 ans de confrontation planétaire. Sans qu'aucune bombe atomique n'ait été tirée, le modèle soviétique s'est effondré sous le poids conjugué de ses faillites économiques internes, du courage des dissidents et de la fermeté géopolitique occidentale. Les États-Unis restent l'unique superpuissance mondiale triomphante, ouvrant une décennie d'hégémonie unipolaire sous le signe du « nouvel ordre mondial ».`,
  sections: [
    {
      title: 'I. La « Guerre fraîche » et l\'offensive idéologique de Reagan',
      content: `1. L\'expansionnisme soviétique : pénétration en Afrique australe et invasion de l\'Afghanistan (1979) marquant la mort de la Détente.
2. La crise des Euromissiles : déploiement des SS-20 soviétiques et riposte ferme de l\'OTAN avec les fusées Pershing II en Europe.
3. La présidence Reagan : politique de refoulement (« roll back »), rhétorique de l\'« Empire du Mal » et projet technologique d\'Initiative de Défense Stratégique (IDS).`
    },
    {
      title: 'II. L\'avènement de Gorbatchev : Perestroïka et Glasnost',
      content: `1. Faillite économique et morale de l\'URSS : bureaucratie étouffante, retard informatique, pénuries et électrochoc de Tchernobyl (1986).
2. Les deux leviers du réformisme : Perestroïka (restructuration économique) et Glasnost (transparence politique et libération de la parole).
3. Le désarmement historique : Traité FNI de Washington (1987) éliminant les missiles à moyenne portée et retrait militaire d\'Afghanistan (1989).`
    },
    {
      title: 'III. 1989 : Le triomphe de la liberté en Europe de l\'Est',
      content: `1. La rupture de la doctrine Brejnev : Moscou renonce à employer les chars pour maintenir les régimes satellites.
2. Émancipation en cascade : victoire de Solidarność en Pologne, ouverture de la frontière hongroise et Révolution de Velours à Prague.
3. Chute du Mur de Berlin (9 novembre 1989) : nuit historique d\'effondrement du rideau de fer ouvrant la voie à la réunification allemande (octobre 1990).`
    },
    {
      title: 'IV. L\'implosion finale de l\'Union Soviétique (1991)',
      content: `1. Séparatisme des républiques : émancipation pionnière des pays baltes et crise politique entre Gorbatchev et Eltsine.
2. Le putsch manqué d\'août 1991 : échec des conservateurs du KGB face à la mobilisation populaire autour de Boris Eltsine.
3. Démission de Gorbatchev et dissolution de l\'URSS (25 décembre 1991) : naissance de la CEI et fin définitive de la guerre froide.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : sujets classiques « Les facteurs de l\'effondrement du bloc soviétique », « Le rôle de Gorbatchev : fossoyeur ou sauveur manqué de l\'URSS ? ».
• Commentaire : analyser les déclarations de Gorbatchev à l\'ONU, les photos de la chute du mur ou le traité de dissolution de Belovej.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `La fin de la guerre froide entre 1989 et 1991 transforme radicalement l\'ordre international. La disparition de l\'adversaire soviétique consacre le triomphe provisoire de l\'hyperpuissance américaine avant l\'émergence d\'un monde multipolaire complexe.`
    }
  ]
};

export const LESSON_5_HISTOIRE_TLE: LessonContent = {
  id: 'hist-tle-lecon-5',
  number: 'LEÇON 5',
  title: 'LE MONDE DE L\'APRÈS-GUERRE FROIDE : DE L\'HYPERPUISSANCE AMÉRICAINE AU DÉSORDRE MULTIPOLAIRE',
  subject: 'Histoire',
  classLevel: 'Terminale',
  module: 'Partie 1 • Relations Internationales de 1945 à nos jours',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'L\'illusion de la « fin de l\'Histoire » (Francis Fukuyama), le « Nouvel Ordre Mondial » de George H. W. Bush et la guerre du Golfe (1990-1991), les drames ethniques des années 1990 (Yougoslavie, Rwanda), la rupture planétaire du 11 septembre 2001, l\'unilatéralisme et l\'enlisement en Irak (2003), l\'ascension fulgurante de la Chine, la résurgence géopolitique de la Russie de Poutine et le monde multipolaire émergent.',
  image: {
    caption: 'Figure H1.5 : La transition du monde unipolaire post-1991 vers l\'ordre multipolaire contesté',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="multGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#312e81" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#multGrad)" stroke="#312e81" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#1e1b4b" text-anchor="middle">LE MONDE CONTEMPORAIN : DE L\'UNIPOLARITÉ À LA MULTIPOLARITÉ</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#6366f1" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">1. L\'Hyperpuissance (1991-01)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Le « Nouvel Ordre Mondial »</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Guerre du Golfe (1991 / ONU)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Hégémonie économique &amp; tech</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Échecs : Somalie (93), Rwanda</text>
        <text x="14" y="140" font-size="11" fill="#3730a3" font-weight="bold">→ « Gendarme du monde »</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#6366f1" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">2. Le Choc du 11-Septembre</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Attentats d\'Al-Qaïda (2001)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Guerre contre le terrorisme</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Intervention Afghanistan (2001)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Unilatéralisme en Irak (2003)</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Érosion du leadership US</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#6366f1" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">3. L\'Ordre Multipolaire</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Montée de la Chine (2e éco)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Réaffirmation russe (Poutine)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Émergence BRICS &amp; Sud Global</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Crise du multilatéralisme</text>
        <text x="14" y="140" font-size="11" fill="#3730a3" font-weight="bold">→ Rivalités géopolitiques</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 5 : LE MONDE DE L'APRÈS-GUERRE FROIDE : DE L'HYPERPUISSANCE AMÉRICAINE AU DÉSORDRE MULTIPOLAIRE

INTRODUCTION
La disparition de l'Union Soviétique en décembre 1991 a suscité l'illusion fugace d'une ère de paix universelle définitive. Le philosophe américain Francis Fukuyama théorisait alors audacieusement la « Fin de l'Histoire », postulant la victoire sans partage et irréversible de la démocratie libérale et de l'économie de marché capitaliste à l'échelle planétaire. Le président George H. W. Bush proclamait l'avènement d'un « Nouvel Ordre Mondial » fondé sur le respect du droit international et l'arbitrage multilatéral de l'ONU. Pourtant, le monde post-guerre froide s'est rapidement révélé plus chaotique, instable et imprévisible que l'ancien ordre bipolaire discipliné. Des guerres identitaires sanglantes des Balkans et du génocide des Tutsi au Rwanda dans les années 1990, au traumatisme planétaire des attentats terroristes du 11 septembre 2001, l'hégémonie américaine s'est heurtée à de nouveaux périls asymétriques. Au XXIe siècle, l'enlisement américain au Moyen-Orient, l'ascension économique et géopolitique fulgurante de la Chine, la résurgence militaire de la Russie et l'affirmation des puissances émergentes du « Sud Global » (les BRICS) consacrent l'avènement d'un monde multipolaire et conflictuel.

I. L'ÉPHÉMÈRE « MOMENT UNIPOLAIRE » AMÉRICAIN (1991 - 2001)
1. L'Amérique, « hyperpuissance » sans rivale :
Pour qualifier la puissance écrasante des États-Unis dans les années 1990, le ministre français Hubert Védrine forge le concept d'« hyperpuissance ». Les États-Unis cumulent tous les attributs de la domination :
- Hard power (puissance dure) : supériorité militaire absolue avec un budget égal à celui de toutes les autres puissances réunies, bases militaires sur tous les continents, domination des mers et de l'espace ;
- Soft power (puissance douce) : diffusion planétaire du modèle culturel américain (cinéma hollywoodien, musique, restauration rapide, jeans, domination des géants de l'internet de la Silicon Valley) ;
- Suprématie économique et monétaire : leadership du dollar, maîtrise des institutions financières mondiales (FMI, Banque Mondiale, OMC fondée en 1995).
2. La Guerre du Golfe (1990-1991) et le triomphe du droit international :
En août 1990, le dictateur irakien Saddam Hussein envahit et annexe le petit émirat pétrolier du Koweït. Pour la première fois depuis 1945, le Conseil de Sécurité de l'ONU, libéré de la paralysie du veto soviétique, fonctionne comme un véritable gendarme international. Après avoir voté des sanctions et un ultimatum, une coalition de 34 nations dirigée par les États-Unis déclenche l'opération « Tempête du Désert » en janvier-février 1991. En quarante jours de bombardements de haute précision et cent heures de combat terrestre, le Koweït est libéré. L'ONU apparaît comme le garant victorieux de la légalité internationale.
3. Le réveil des nationalismes et l'impuissance face aux drames ethniques :
La fin de la tutelle soviétique libère des haines ethniques et religieuses séculaires étouffées pendant la guerre froide :
- Les guerres d'ex-Yougoslavie (1991-1999) : l'éclatement violent de la fédération yougoslave engendre la plus sanglante guerre européenne depuis 1945. En Bosnie-Herzégovine, les milices serbes pratiquent la « purification ethnique », culminant avec le massacre de 8 000 civils musulmans à Srebrenica en juillet 1995 sous le regard impuissant des Casques bleus de l'ONU. Seule l'intervention militaire musclée de l'OTAN contraint les belligérants aux accords de Dayton (décembre 1995) ;
- Le génocide des Tutsi au Rwanda (avril-juillet 1994) : en cent jours, plus de 800 000 Tutsi et Hutu modérés sont massacrés à la machette par les milices extrémistes Interahamwe dans une indifférence internationale coupable, marquant la faillite tragique de la communauté internationale et du maintien de la paix de l'ONU ;
- Le fiasco de l'intervention humanitaire américaine en Somalie (opération « Restore Hope », 1992-1993) : la mort de 18 rangers américains à Mogadiscio incite Washington à se désengager des opérations de maintien de la paix en Afrique.

II. LE SÉISME DU 11 SEPTEMBRE 2001 ET L'UNILATÉRALISME AMÉRICAIN
1. Les attentats du 11 septembre 2001 :
Le 11 septembre 2001, quatre avions de ligne sont détournés par des terroristes islamistes du réseau transnational Al-Qaïda dirigé par Oussama ben Laden. Deux avions percutent et pulvérisent les tours jumelles du World Trade Center à New York, un troisième frappe le Pentagone à Washington, et le quatrième s'écrase dans un champ en Pennsylvanie. Le bilan est effroyable : près de 3 000 morts innocents. Pour la première fois de son histoire, le territoire métropolitain des États-Unis est frappé en plein cœur par une attaque extérieure.
2. La guerre mondiale contre le terrorisme et l'Afghanistan (2001) :
Le président George W. Bush déclare la « guerre mondiale contre la terreur ». En octobre 2001, avec le soutien unanime de l'OTAN et de l'ONU, les États-Unis et leurs alliés envahissent l'Afghanistan pour renverser le régime intégriste des Talibans qui hébergeait les camps d'entraînement d'Al-Qaïda.
3. La dérive unilatérale : La guerre d'Irak de 2003 :
En 2003, rompant avec le multilatéralisme onusien, l'administration néo-conservatrice de George W. Bush décide d'envahir l'Irak sans mandat de l'ONU, sous le prétexte (qui se révélera mensonger) que Saddam Hussein détiendrait des armes de destruction massive et soutiendrait Al-Qaïda.
- L'opposition courageuse de la France, de l'Allemagne et de la Russie : Le 14 février 2003 à l'ONU, le ministre français Dominique de Villepin prononce un discours historique mémorable au nom d'un « vieux pays qui a connu les guerres » pour refuser la légitimation d'une intervention armée illégitime ;
- L'enlisement américain : Si le régime de Saddam est renversé en quelques semaines, la destruction de l'État irakien plonge le pays dans une guerre civile confessionnelle effroyable, ouvrant la voie à la création du groupe terroriste État Islamique (Daech) et discréditant durablement la légitimité morale et le leadership géopolitique des États-Unis.

III. L'ÉMERGENCE DU MONDE MULTIPOLAIRE AU XXIe SIÈCLE
1. L'ascension fulgurante de la Chine :
Depuis son adhésion à l'OMC en 2001 et sous la direction de Xi Jinping, la République Populaire de Chine s'affirme comme la deuxième puissance économique mondiale (et première puissance commerciale). Avec le projet titanesque des « Nouvelles Routes de la Soie » (Belt and Road Initiative), Pékin investit des centaines de milliards de dollars dans les infrastructures portuaires, ferroviaires et énergétiques en Asie, en Europe et massivement en Afrique, contestant l'hégémonie navale américaine dans le Pacifique.
2. Le retour révisionniste de la Russie de Vladimir Poutine :
Après le chaos économique et l'humiliation des années Eltsine, la Russie de Vladimir Poutine utilise ses immenses richesses pétrolières et gazières pour reconstituer sa puissance militaire. Dénonçant l'élargissement continu de l'OTAN vers les frontières russes comme une menace vitale, Moscou réaffirme son statut de grande puissance par la force : guerre en Géorgie (2008), intervention militaire décisive en Syrie (2015), annexion de la Crimée en 2014 et déclenchement de la guerre en Ukraine en février 2022, marquant le retour de la guerre de haute intensité sur le sol européen.
3. L'affirmation du « Sud Global » et le rôle des BRICS :
Les puissances émergentes (Brésil, Russie, Inde, Chine, Afrique du Sud — rejoints récemment par d'autres nations du Sud) refusent de continuer à subir la domination occidentale et l'hégémonie du dollar. Elles réclament une refonte démocratique de la gouvernance mondiale (élargissement du Conseil de Sécurité de l'ONU, réforme du FMI) et défendent un ordre international multipolaire respectueux de la souveraineté nationale.
4. Les nouveaux défis sécuritaires et globaux :
Au-delà des rivalités traditionnelles entre États, le XXIe siècle est confronté à des menaces planétaires partagées : le dérèglement climatique menaçant la survie des écosystèmes, les pandémies mondiales (Covid-19), la cybercriminalité, les crises migratoires et la prolifération des groupes armés non-étatiques au Sahel et au Moyen-Orient.

IV. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Trente ans après la fin de la guerre froide, le monde n'est ni pacifié ni unipolaire. L'illusion d'une harmonie libérale universelle a laissé place à un monde multipolaire fragmenté, traversé par des tensions géopolitiques majeures entre grandes puissances, un recul inquiétant du multilatéralisme et une revendication souveraine légitime du Sud Global. La gestion pacifique de cette multipolarité complexe constitue le défi historique suprême du XXIe siècle.`,
  sections: [
    {
      title: 'I. Le moment unipolaire et l\'illusion du Nouvel Ordre Mondial (1991-2001)',
      content: `1. L\'Amérique « hyperpuissance » : domination cumulée économique, technologique, militaire (hard power) et culturelle (soft power).
2. La guerre du Golfe (1991) : coalition internationale sous mandat de l\'ONU libérant le Koweït ; triomphe éphémère du multilatéralisme.
3. Les drames des années 1990 : faillite du maintien de la paix en Somalie (1993), au Rwanda (génocide des Tutsi en 1994) et en Bosnie (massacre de Srebrenica en 1995).`
    },
    {
      title: 'II. Le choc du 11-Septembre et la tentation unilatéraliste',
      content: `1. Les attentats du 11 septembre 2001 : frappe au cœur du sanctuaire américain par Al-Qaïda ; déclaration de la guerre contre le terrorisme.
2. L\'intervention en Afghanistan (2001) : renversement des Talibans sous mandat de l\'ONU et soutien unanime des alliés.
3. La guerre d\'Irak de 2003 : dérive unilatérale illégitime sans l\'ONU ; réquisitoire mémorable de Dominique de Villepin ; enlisement dans le chaos confessionnel.`
    },
    {
      title: 'III. L\'affirmation des nouvelles puissances et la multipolarité',
      content: `1. La montée en puissance chinoise : deuxième économie mondiale, puissance militaire montante et diplomatie des Nouvelles Routes de la Soie.
2. Le retour géopolitique de la Russie : rejet de l\'hégémonie occidentale par Vladimir Poutine, interventions en Géorgie, en Syrie et guerre en Ukraine.
3. Le dynamisme des BRICS et du Sud Global : contestation de l\'hégémonie du dollar et revendication d\'une gouvernance internationale représentative.`
    },
    {
      title: 'IV. Les défis transnationaux du XXIe siècle',
      content: `1. L\'urgence écologique mondiale : dérèglement climatique, transition énergétique et réfugiés environnementaux.
2. Menaces asymétriques : cyber-guerres, terrorisme djihadiste au Sahel et pandémies globales exigeant une coopération multilatérale renouvelée.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : sujets clés « Du monde bipolaire au monde multipolaire », « L\'hyperpuissance américaine : mythe ou réalité depuis 1991 ? ».
• Commentaire : analyser le discours de George H. W. Bush sur le nouvel ordre mondial, le discours de Dominique de Villepin à l\'ONU en 2003 ou les déclarations des sommets des BRICS.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `L\'après-guerre froide n\'a pas accouché de la fin de l\'histoire, mais de son accélération désordonnée. Le XXIe siècle s\'ouvre sur une compétition multipolaire ouverte où l\'Afrique et le Sud Global entendent peser de tout leur poids souverain.`
    }
  ]
};
