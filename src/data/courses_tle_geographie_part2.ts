import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 2 (LEÇONS 4 À 7)
// Les grandes puissances de la Triade : États-Unis et Union Européenne
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_4_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-4',
  number: 'LEÇON 4',
  title: 'LES ÉTATS-UNIS D’AMÉRIQUE : LA PREMIÈRE PUISSANCE ÉCONOMIQUE MONDIALE',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Deuxième Partie • Les grandes puissances économiques mondiales (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Étude géographique complète des fondements et piliers de l'hégémonie américaine : maîtrise d'un territoire-continent aux ressources immenses (9,8 millions de km²), dynamisme démographique et immigration sélective (Brain Drain), modèle capitaliste entrepreneurial, agriculture productiviste intégrée à l'agrobusiness, puissance technologique et industrielle (Silicon Valley, GAFAM), suprématie financière du dollar et de Wall Street, et rayonnement culturel universel (soft power).",
  image: {
    caption: 'Figure 4.1 : L’organisation spatiale de la puissance économique des États-Unis',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="usaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e40af" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#usaGrad)" stroke="#1e40af" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">L'ESPACE ÉCONOMIQUE AMÉRICAIN : PÔLES D'IMPULSION, SUNBELT ET FAÇADES MARITIMES</text>
      
      <!-- Bloc Nord-Est / Mégalopolis -->
      <rect x="30" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="142" y="78" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">1. LE NORD-EST &amp; MEGALOPOLIS</text>
      <text x="40" y="102" font-size="10" fill="#374151">• Le cœur historique de la puissance (BosWash)</text>
      <text x="40" y="118" font-size="10" fill="#374151">• 800 km de Boston à Washington</text>
      <text x="40" y="135" font-size="10" fill="#374151">• 50 millions d'habitants (17% pop US)</text>
      <text x="40" y="152" font-size="10" fill="#374151">• Commandement politique : Maison Blanche, Pentagone</text>
      <text x="40" y="169" font-size="10" fill="#374151">• Bourse : New York Stock Exchange (Wall St)</text>
      <text x="40" y="186" font-size="10" fill="#374151">• Siège de l'ONU et grandes universités de l'Ivy League (Harvard, MIT, Columbia)</text>
      
      <!-- Bloc Sunbelt & Californie -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="390" y="78" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">2. LA SUNBELT DU SUD &amp; OUEST</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Croissant périphérique du soleil (dynamisme)</text>
      <text x="285" y="118" font-size="10" fill="#374151">• Californie : 5e PIB mondial si État séparé</text>
      <text x="285" y="135" font-size="10" fill="#374151">• Silicon Valley : GAFAM, IA, microélectronique</text>
      <text x="285" y="152" font-size="10" fill="#374151">• Aérospatiale : Boeing (Seattle), NASA (Houston)</text>
      <text x="285" y="169" font-size="10" fill="#374151">• Texas : hydrocarbures de schiste (Permian Basin)</text>
      <text x="285" y="186" font-size="10" fill="#374151">• Floride : tourisme planétaire (Miami, Orlando)</text>
      
      <!-- Bloc Intérieur Agricole & Façades -->
      <rect x="525" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="637" y="78" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">3. INTERIOR &amp; FAÇADES MARITIMES</text>
      <text x="535" y="102" font-size="10" fill="#374151">• Le grenier agricole planétaire :</text>
      <text x="545" y="118" font-size="9" fill="#047857">- Corn Belt (maïs, soja), Wheat Belt (blé)</text>
      <text x="545" y="132" font-size="9" fill="#047857">- Ranching extensif dans les Grandes Plaines</text>
      <text x="535" y="152" font-size="10" fill="#374151">• Façade Pacifique ouverte sur l'Asie :</text>
      <text x="545" y="169" font-size="9" fill="#1e40af">- Ports géants de Los Angeles &amp; Long Beach</text>
      <text x="535" y="188" font-size="10" fill="#374151">• Golfe du Mexique : pôle pétrochimique majeur</text>
    </svg>`
  },
  introduction: "Avec un Produit Intérieur Brut approchant les 27 000 milliards de dollars (plus de 25 % du PIB mondial) pour seulement 4,2 % de la population planétaire (environ 335 millions d'habitants), les États-Unis demeurent l'incontestable première superpuissance économique du globe. Forgée au cours du XXe siècle et consolidée après la disparition de l'URSS, la puissance américaine est globale : elle repose sur un 'hard power' sans équivalent (puissance militaire, productive, financière et technologique) doublé d'un 'soft power' hégémonique (culture, cinéma, universités, mode de vie 'American Way of Life'). L'analyse géographique révèle une organisation spatiale hautement efficace articulée autour de la mégalopole du Nord-Est et de l'essor fulgurant de la Sunbelt.",
  sections: [
    {
      title: "I. Les fondements naturels, démographiques et idéologiques de la puissance",
      content: [
        "1. La maîtrise d'un territoire-continent aux ressources exceptionnelles :",
        "   - Troisième pays le plus vaste du monde (9,8 millions de km²), s'étendant d'un océan à l'autre ('From sea to shining sea') avec deux immenses façades maritimes ouvertes sur l'Atlantique et le Pacifique.",
        "   - La plus grande superficie de terres arables cultivables de la planète (près de 170 millions d'hectares), un réseau hydrographique navigable remarquable (bassin du Mississippi-Missouri long de 6 200 km) et les Grands Lacs.",
        "   - Une richesse géologique et énergétique colossale : premier producteur mondial de pétrole et de gaz naturel grâce à la révolution des hydrocarbures de schiste (bassin permien du Texas, formation de Bakken), gisements massifs de charbon (Appalaches), de fer, cuivre et terres rares.",
        "2. Le dynamisme démographique et l'apport continu de l'immigration :",
        "   - Une population de plus de 335 millions d'habitants caractérisée par une fécondité plus élevée que dans les autres pays développés (taux de fécondité d'environ 1,7 enfant par femme).",
        "   - Terre d'immigration historique : creuset culturel ('Melting Pot' ou 'Salad Bowl') accueillant plus d'un million d'immigrants légaux par an.",
        "   - Le 'Brain Drain' (fuite des cerveaux mondiale) : capacité unique d'attirer l'élite scientifique et technologique internationale (chercheurs, ingénieurs indiens, chinois, européens et africains) grâce à des bourses attractives et aux prestigieuses universités mondiales (Harvard, Stanford, MIT).",
        "3. Le modèle capitaliste et la culture de l'esprit d'entreprise :",
        "   - Idéologie du libre marché, culte de la réussite individuelle, mobilité géographique élevée des travailleurs, fiscalité incitative pour les investisseurs et capital-risque (Venture Capital) finançant massivement l'innovation de rupture."
      ]
    },
    {
      title: "II. L'appareil productif américain : une suprématie agricole et industrielle",
      content: [
        "1. L'agriculture productiviste et l'Agrobusiness :",
        "   - Moins de 2 % de la population active dans l'agriculture, mais un secteur ultra-puissant capable de nourrir le pays et de représenter le premier exportateur mondial de denrées agricoles (le 'Food Power' comme arme géopolitique diplomatique).",
        "   - L'organisation en ceintures spécialisées ('Belts') : Corn Belt (maïs et soja au Midwest), Wheat Belt (blé d'hiver au sud, blé de printemps au nord des Grandes Plaines), Cotton Belt (coton reconverti au sud), Dairy Belt (élevage laitier autour des Grands Lacs) et cultures maraîchères et fruitières irriguées en Californie (Central Valley).",
        "   - Intégration totale dans l'Agrobusiness : complexe agro-industriel géant englobant l'amont (semences OGM, engrais, machines : John Deere, Cargill, Monsanto/Bayer) et l'aval (agroalimentaire mondial : Coca-Cola, PepsiCo, McDonald's).",
        "2. La puissance industrielle et technologique :",
        "   - Première puissance technologique mondiale : domination incontestée dans les secteurs de pointe de la 'Tech' avec les GAFAM (Google/Alphabet, Apple, Facebook/Meta, Amazon, Microsoft), Nvidia, Tesla, OpenAI (intelligence artificielle) et les semi-conducteurs (Intel, Qualcomm).",
        "   - Aéronautique, défense et espace : Boeing, Lockheed Martin, Northrop Grumman, et le secteur spatial privé pionnier (SpaceX d'Elon Musk).",
        "   - Industrie automobile en mutation (General Motors, Ford et essor des véhicules électriques Tesla)."
      ]
    },
    {
      title: "III. La suprématie financière, tertiaire et le Soft Power",
      content: [
        "1. Le dollar et la domination financière mondiale :",
        "   - Le dollar américain constitue la première monnaie de réserve mondiale (environ 58 % des réserves de change des banques centrales) et la principale monnaie de facturation du commerce planétaire et du pétrole ('pétrodollars').",
        "   - La place financière de New York (Wall Street avec le NYSE et le Nasdaq) est le cœur battant du capitalisme financier international, régulé par la Réserve Fédérale américaine (FED) dont les décisions sur les taux d'intérêt dictent le rythme de l'économie mondiale.",
        "2. Le 'Soft Power' et l'hégémonie culturelle :",
        "   - Diffusion planétaire des standards de consommation, des modes de vie et des valeurs américaines : industrie du divertissement d'Hollywood, plateformes de streaming (Netflix, Disney+), musique populaire, restauration rapide et marques universelles (Nike, Apple).",
        "   - Domination linguistique de l'anglais américain dans la diplomatie, la recherche scientifique, l'aviation et le commerce international."
      ]
    },
    {
      title: "IV. L'organisation de l'espace économique états-unien",
      content: [
        "1. Le Nord-Est et la Mégalopolis (BosWash) :",
        "   - Bande urbanisée continue de plus de 800 kilomètres s'étendant de Boston à Washington en passant par New York, Philadelphie et Baltimore.",
        "   - Centre nerveux financier, politique, intellectuel et tertiaire supérieur de la nation.",
        "2. La Sunbelt (croissant périphérique du Sud et de l'Ouest) :",
        "   - Région motrice de la croissance démographique et économique depuis un demi-siècle, attirant capitaux et retraités ('héliotropisme').",
        "   - La Californie : première économie étatique des États-Unis, berceau de la haute technologie (Silicon Valley dans la baie de San Francisco) et pôle cinématographique (Los Angeles/Hollywood).",
        "   - Le Texas : géant pétrolier et pétrochimique, biotechnologies et aérospatiale (Houston, Austin, Dallas).",
        "   - La façade du Golfe du Mexique et le Sud-Est (Atlanta, Floride) axés sur le tourisme, les services et les industries légères.",
        "3. L'intérieur des Grandes Plaines et l'Ouest montagneux :",
        "   - Immenses espaces dédiés à l'agriculture mécanisée, à l'extraction minière et au tourisme des grands parcs nationaux (Yellowstone, Grand Canyon)."
      ]
    }
  ]
};

export const LESSON_5_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-5',
  number: 'LEÇON 5',
  title: 'LES LIMITES ET VULNÉRABILITÉS DE LA PUISSANCE DES ÉTATS-UNIS',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Deuxième Partie • Les grandes puissances économiques mondiales (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Analyse critique des faiblesses structurelles et des périls menaçant la première puissance mondiale : déclin manufacturier de la Rust Belt, déficits jumeaux chroniques (commercial et budgétaire) et explosion de la dette publique fédérale (dépassant 34 000 milliards de dollars), fractures socio-spatiales extrêmes (pauvreté endémique, crise des opioïdes, inégalités raciales), dépendance aux matières premières stratégiques et contestation géopolitique de l'hégémonie américaine dans un monde multipolaire.",
  image: {
    caption: 'Figure 5.1 : Les vulnérabilités structurelles de l’hyperpuissance américaine',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="vulnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ef4444" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#vulnGrad)" stroke="#ef4444" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">LES VULNÉRABILITÉS MAJEURES DE L'HYPERPUISSANCE ÉTATS-UNIENNE</text>
      
      <!-- Colonne 1 : Désindustrialisation Rust Belt -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">1. DÉCLIN DE LA RUST BELT</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Désindustrialisation massive (sidérurgie, auto)</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Détroit (Michigan) : ville en faillite (2013)</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Délocalisations massives vers la Chine et le Mexique (Maquiladoras)</text>
      <text x="35" y="165" font-size="10" font-weight="bold" fill="#b91c1c">• Friches industrielles &amp; chômage</text>
      <text x="35" y="182" font-size="9" fill="#4b5563">• Perte de millions d'emplois ouvriers</text>
      
      <!-- Colonne 2 : Déficits abyssaux et Dette -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">2. DÉFICITS &amp; DETTE ABYSSALE</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Déficit commercial structurel : &gt; 900 Mds $/an</text>
      <text x="285" y="120" font-size="10" fill="#374151">• Déficit budgétaire fédéral record</text>
      <text x="285" y="138" font-size="10" fill="#374151">• Dette publique fédérale : &gt; 34 000 Mds $</text>
      <text x="285" y="155" font-size="10" fill="#374151">• Ratio dette/PIB supérieur à 120 %</text>
      <text x="285" y="175" font-size="10" font-weight="bold" fill="#b91c1c">• Dépendance aux créanciers :</text>
      <text x="285" y="192" font-size="9" fill="#4b5563">• Bons du Trésor US détenus par le Japon et la Chine</text>
      
      <!-- Colonne 3 : Fractures sociales & Géopolitique -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#6b7280" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">3. FRACTURES SOCIO-SPATIALES</text>
      <text x="540" y="102" font-size="10" fill="#374151">• 40 millions d'Américains sous le seuil de pauvreté</text>
      <text x="540" y="120" font-size="10" fill="#374151">• Plus de 28 millions sans assurance maladie</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Crise des opioïdes (100 000 morts par an)</text>
      <text x="540" y="158" font-size="10" font-weight="bold" fill="#1e3a8a">• Défi géopolitique :</text>
      <text x="540" y="175" font-size="9" fill="#4b5563">• Montée en puissance de la Chine rivale</text>
      <text x="540" y="190" font-size="9" fill="#4b5563">• Dédollarisation initiée par les BRICS</text>
    </svg>`
  },
  introduction: "Malgré son statut éclatant d'hyperpuissance, l'Amérique présente de redoutables vulnérabilités intérieures et extérieures qui menacent la pérennité de son leadership. Le modèle états-unien est rongé par des déséquilibres macroéconomiques chroniques (déficits jumeaux vertigineux, désindustrialisation brutale du berceau manufacturier historique) et par des fractures sociales et raciales béantes sans équivalent dans les autres pays industrialisés du Nord. Sur la scène internationale, l'unilatéralisme américain essuie un rejet croissant, tandis que l'émergence économique et militaire de la Chine et l'affirmation des BRICS inaugurent un monde multipolaire rebelle à l'hégémonie de Washington.",
  sections: [
    {
      title: "I. La désindustrialisation et le déclin de la Manufacturing Belt (Rust Belt)",
      content: [
        "1. La crise historique des industries traditionnelles :",
        "   - Dès les années 1970, le berceau industriel des Grands Lacs et du Nord-Est (autrefois 'Manufacturing Belt' ou cœur manufacturier) est frappé de plein fouet par la concurrence internationale (acier japonais, puis produits manufacturés chinois et asiatiques).",
        "   - Devenue la 'Rust Belt' (ceinture de la rouille), la région subit la fermeture en chaîne de hauts-fourneaux, de mines de charbon et d'usines textiles et automobiles.",
        "2. Le symbole du naufrage urbain de Détroit :",
        "   - Ancienne capitale mondiale de l'automobile ('Motor City' abritant General Motors, Ford, Chrysler), Détroit a perdu plus de la moitié de sa population (passant de 1,8 million d'habitants dans les années 1950 à environ 630 000 aujourd'hui).",
        "   - En juillet 2013, Détroit s'est déclarée officiellement en faillite financière avec une dette de plus de 18 milliards de dollars, laissant des dizaines de milliers de maisons abandonnées et de friches urbaines.",
        "3. La dépendance stratégique accrue de l'économie :",
        "   - Dépendance industrielle critique envers les chaînes d'approvisionnement asiatiques pour les biens de consommation courante, les composants électroniques et les terres rares."
      ]
    },
    {
      title: "II. Les déficits abyssaux et le piège de la dette colossale",
      content: [
        "1. Le déficit commercial chronique :",
        "   - La balance commerciale américaine est déficitaire sans interruption depuis le début des années 1970. Le déficit annuel de la balance des biens et services dépasse régulièrement les 900 à 1 000 milliards de dollars.",
        "   - Ce gouffre commercial s'explique par la surconsommation des ménages américains vivant à crédit et la faible compétitivité-prix de nombreuses productions locales.",
        "2. Le déficit budgétaire et le mur de la dette publique :",
        "   - Le budget fédéral présente des déficits permanents colossaux, creusés par les dépenses militaires mondiales astronomiques (budget de la défense supérieur à 850 milliards de dollars par an, soit plus que les 10 pays suivants réunis), les baisses d'impôts et les plans de relance.",
        "   - La dette publique fédérale américaine dépasse le seuil historique vertigineux de 34 000 milliards de dollars (plus de 123 % du PIB).",
        "3. Le 'privilège exorbitant' du dollar menacé :",
        "   - Les États-Unis ont pu jusqu'ici financer leurs déficits sans effort car le monde entier achète leurs bons du Trésor libellés en dollars.",
        "   - Cependant, la volonté affichée des BRICS de commercer en monnaies nationales et de réduire leurs avoirs en dollars (mouvement de 'dédollarisation') fait peser une menace existentielle sur la stabilité du système financier américain."
      ]
    },
    {
      title: "III. Les profondes fractures socio-spatiales et raciales",
      content: [
        "1. L'abîme des inégalités de richesse et la pauvreté :",
        "   - Les 1 % les plus riches possèdent plus de richesse que l'ensemble des 90 % les moins favorisés.",
        "   - Plus de 38 millions d'Américains (près de 12 % de la population) vivent sous le seuil officiel de pauvreté, et plus de 40 millions dépendent du programme fédéral d'aide alimentaire (food stamps / SNAP).",
        "   - Absence de système d'assurance maladie universelle : plus de 27 millions de citoyens n'ont aucune couverture médicale malgré l'Obamacare, et une maladie grave ou hospitalisation peut entraîner la ruine financière immédiate d'une famille.",
        "2. Les fléaux sanitaires et sociaux :",
        "   - La crise dévastatrice des opioïdes (médicaments analgésiques de synthèse comme le Fentanyl prescrits abusivement) qui cause plus de 100 000 décès par overdose chaque année, provoquant pour la première fois un recul de l'espérance de vie dans certaines régions blanches défavorisées de la Rust Belt et des Appalaches.",
        "   - La violence armée endémique : plus de 400 millions d'armes à feu en circulation libre pour 335 millions d'habitants, et des tueries de masse récurrentes dans les écoles et centres commerciaux.",
        "3. Les fractures raciales et urbaines :",
        "   - Ségrégation socio-spatiale dans les grandes métropoles : quartiers périphériques aisés sécurisés (Gated Communities) opposés aux centres-villes dégradés ('inner cities' ou ghettos peuplés de minorités afro-américaines et hispaniques touchées par le chômage, la délinquance et les violences policières récurrentes)."
      ]
    },
    {
      title: "IV. Les contestations géopolitiques de l'hégémonie américaine",
      content: [
        "1. L'usure du 'gendarme du monde' :",
        "   - Échecs militaires et politiques coûteux en Irak et en Afghanistan (retrait chaotique de Kaboul en août 2021 après 20 ans d'intervention et des milliers de milliards de dollars engloutis).",
        "   - Perte d'influence diplomatique en Amérique latine (la 'cour arrière' historique) et en Afrique au profit de la Chine et de la Russie.",
        "2. Le défi de la superpuissance chinoise :",
        "   - Rivalité systémique commerciale, technologique (guerre des puces électroniques et de la 5G) et militaire dans le détroit de Taïwan et en mer de Chine méridionale.",
        "   - Montée du monde multipolaire refusant l'hégémonie occidentale et les sanctions financières unilatérales imposées par Washington."
      ]
    }
  ]
};

export const LESSON_6_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-6',
  number: 'LEÇON 6',
  title: 'L’UNION EUROPÉENNE : UNE GRANDE PUISSANCE ÉCONOMIQUE ET COMMERCIALE',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Deuxième Partie • Les grandes puissances économiques mondiales (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Étude géographique du géant économique européen : étapes de la construction communautaire (CECA, traité de Rome, traité de Maastricht instituant l'Euro), puissance d'un marché unique de plus de 450 millions d'habitants à très haut pouvoir d'achat, réussite éclatante de la Politique Agricole Commune (PAC faisant de l'UE un géant agroalimentaire), pôles industriels d'excellence (Airbus, automobile allemande, luxe, chimie), première puissance commerciale de la planète et diplomatie environnementale (Green Deal).",
  image: {
    caption: 'Figure 6.1 : L’Union Européenne : Cœur rhénan, mégalopole européenne et façades maritimes',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="euGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#euGrad)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">L'ESPACE ÉCONOMIQUE DE L'UNION EUROPÉENNE : LA « BANANE BLEUE » ET LE MARCHÉ UNIQUE</text>
      
      <!-- Colonne 1 : La Mégalopole Européenne -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">1. LA DORSALE EUROPÉENNE</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Axe rhénan &amp; 'Banane Bleue' :</text>
      <text x="45" y="118" font-size="9" fill="#0369a1">De Londres / Rotterdam à Milan</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Cœur industriel &amp; démographique :</text>
      <text x="45" y="154" font-size="9" fill="#475569">Bassin de la Ruhr, Francfort, Bâle</text>
      <text x="35" y="174" font-size="10" fill="#374151">• Concentration tertiaire et financière :</text>
      <text x="45" y="190" font-size="9" fill="#475569">BCE (Francfort), Institutions UE (Bruxelles)</text>
      <text x="35" y="210" font-size="10" font-weight="bold" fill="#059669">Densité et PIB/hab records</text>
      
      <!-- Colonne 2 : Northern Range & Façades -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">2. PREMIER PÔLE COMMERCIAL MONDIAL</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Façade maritime : Northern Range</text>
      <text x="295" y="118" font-size="9" fill="#047857">Rotterdam (1er port d'Europe), Anvers, Hambourg</text>
      <text x="285" y="138" font-size="10" fill="#374151">• Porte d'entrée des flux planétaires</text>
      <text x="285" y="156" font-size="10" fill="#374151">• L'Euro (€) : 2e monnaie mondiale</text>
      <text x="285" y="174" font-size="10" fill="#374151">• Commerce intra-européen dominant (65%)</text>
      <text x="285" y="192" font-size="10" font-weight="bold" fill="#047857">1er exportateur de produits manufacturés</text>
      
      <!-- Colonne 3 : Géant Industriel & Agricole -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">3. SECTEURS D'EXCELLENCE</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Aéronautique &amp; Espace :</text>
      <text x="550" y="118" font-size="9" fill="#b45309">Airbus (Toulouse/Hambourg), fusée Ariane</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Automobile : Volkswagen, BMW, Stellantis</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Agriculture PAC : céréales, vins, fromages</text>
      <text x="540" y="174" font-size="10" fill="#374151">• Luxe, pharmacie, chimie fine, cosmétiques</text>
      <text x="540" y="200" font-size="9" font-weight="bold" fill="#1e3a8a">Marché unique de 450 millions d'habitants</text>
    </svg>`
  },
  introduction: "Née sur les décombres de la Seconde Guerre mondiale avec la Communauté Européenne du Charbon et de l'Acier (CECA en 1951) et le traité de Rome (1957), l'Union Européenne constitue l'expérience d'intégration régionale la plus avancée et la plus réussie de la planète. Regroupant 27 États membres et plus de 450 millions de citoyens, l'UE est une superpuissance économique et commerciale de premier ordre. Avec un PIB de plus de 16 000 milliards d'euros, elle rivalise directement avec les États-Unis et la Chine. Son rayonnement repose sur son marché unique sans frontières intérieures, sa monnaie commune (l'Euro), sa compétitivité industrielle et agricole, et sa capacité normative globale.",
  sections: [
    {
      title: "I. Les étapes historiques et institutionnelles de l'intégration européenne",
      content: [
        "1. De la réconciliation franco-allemande au grand marché :",
        "   - Déclaration Robert Schuman du 9 mai 1950 et fondation de la CECA en 1951 (France, RFA, Italie, Benelux).",
        "   - Traité de Rome (1957) créant la Communauté Économique Européenne (CEE) et l'Euratom : établissement progressif d'une union douanière et d'un Tarif Extérieur Commun (TEC).",
        "   - L'Acte Unique Européen (1986) : réalisation du grand marché intérieur garantissant les 'quatre libertés fondamentales' de circulation (libre circulation des marchandises, des personnes, des services et des capitaux).",
        "2. Le saut qualitatif du traité de Maastricht (1992) :",
        "   - Transformation de la CEE en Union Européenne (UE) et création de la citoyenneté européenne.",
        "   - Mise en place de l'Union Économique et Monétaire (UEM) aboutissant au lancement de la monnaie unique, l'Euro (€), le 1er janvier 1999 (mise en circulation fiduciaire le 1er janvier 2002), gérée par la Banque Centrale Européenne (BCE) siégeant à Francfort.",
        "3. Les élargissements successifs :",
        "   - Passage de l'Europe des 6 à l'Europe des 12, des 15, puis le grand élargissement historique de 2004-2007 intégrant les pays d'Europe centrale et orientale (PECO) après la chute du rideau de fer."
      ]
    },
    {
      title: "II. Les piliers de la puissance économique : industrie et agriculture",
      content: [
        "1. Une puissance industrielle diversifiée et de haute technologie :",
        "   - Premier constructeur aéronautique mondial avec Airbus (consortium transnational unissant la France, l'Allemagne, l'Espagne et le Royaume-Uni pour défier le monopole de Boeing).",
        "   - Industrie spatiale : fusées Ariane opérées depuis le centre spatial guyanais de Kourou, et constellation satellitaire de positionnement Galileo.",
        "   - Industrie automobile de renommée mondiale : groupes allemands (Volkswagen, BMW, Mercedes-Benz), Stellantis (Peugeot, Citroën, Fiat, Opel).",
        "   - Pôle mondial du luxe, de la pharmacie (Sanofi, Bayer, Novartis) et de la chimie industrielle.",
        "2. Le géant agroalimentaire et le triomphe de la PAC :",
        "   - La Politique Agricole Commune (PAC) lancée en 1962 : subventions garanties aux agriculteurs et modernisation productiviste intensive ayant transformé une Europe déficitaire en deuxième exportateur agroalimentaire mondial.",
        "   - Agriculture diversifiée à haut rendement : céréales du bassin parisien, élevage laitier et porcin d'Europe du Nord, viticulture et arboriculture méditerranéenne (France, Italie, Espagne)."
      ]
    },
    {
      title: "III. La première puissance commerciale de la planète",
      content: [
        "1. Le poids écrasant dans le commerce international :",
        "   - L'Union Européenne réalise environ 15 % du commerce mondial de marchandises (hors commerce intra-zone), au coude-à-coude avec la Chine et les États-Unis.",
        "   - Le commerce intra-européen représente les deux tiers (environ 65 %) des échanges globaux des États membres, témoignant d'une intégration économique interne exceptionnelle.",
        "2. L'interface maritime de la Northern Range :",
        "   - La rangée maritime nord-européenne s'étendant du Havre à Hambourg : deuxième façade maritime mondiale.",
        "   - Le port de Rotterdam (Pays-Bas) : premier port européen (plus de 430 millions de tonnes de fret), véritable 'porte d'entrée' (gateway) connectée à l'arrière-pays rhénan par fleuves, canaux, voies ferrées et oléoducs.",
        "3. L'Euro, monnaie de rang planétaire :",
        "   - Deuxième monnaie de réserve internationale (représentant environ 20 % des réserves mondiales) et monnaie de facturation internationale majeure défiant le dollar."
      ]
    },
    {
      title: "IV. L'organisation spatiale du territoire européen",
      content: [
        "1. Le centre moteur : la dorsale européenne ('Banane Bleue') :",
        "   - Nébuleuse urbaine et industrielle s'étendant du sud-est de l'Angleterre à la plaine du Pô en Italie du Nord en passant par le Benelux, la vallée du Rhin et la Suisse.",
        "   - Très forte densité de population (plus de 300 hab/km²), concentration des sièges sociaux, des bourses, des universités et des réseaux d'infrastructures à grande vitesse (TGV, autoroutes).",
        "2. Les périphéries intégrées et en rattrapage :",
        "   - Les périphéries du Sud méditerranéen (Espagne, Portugal, Grèce, Mezzogiorno italien) orientées vers le tourisme et l'agriculture.",
        "   - Les pays d'Europe centrale et orientale (Pologne, République tchèque, Hongrie, Roumanie) : espaces d'accueil privilégiés des délocalisations industrielles ouest-européennes grâce à une main-d'œuvre qualifiée et compétitive."
      ]
    }
  ]
};

export const LESSON_7_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-7',
  number: 'LEÇON 7',
  title: 'LES FAIBLESSES ET LES DÉFIS DE L’UNION EUROPÉENNE',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Deuxième Partie • Les grandes puissances économiques mondiales (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Examen approfondi des blocages, vulnérabilités et crises existentielles de l'Union Européenne : le choc du vieillissement démographique ('hiver démographique'), les disparités territoriales Est/Ouest et Nord/Sud, les divergences fiscales et sociales (dumping interne), la dépendance énergétique aiguë, les crises de gouvernance post-Brexit (montée des populismes et de l'euroscepticisme), et le syndrome du 'nain politique et militaire' incapable d'assurer seul sa sécurité sans l'OTAN.",
  image: {
    caption: 'Figure 7.1 : Les fractures et défis structurels de l’Union Européenne',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="euFailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ef4444" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#euFailGrad)" stroke="#ef4444" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">LES DÉFIS EXISTENTIELS DE L'UNION EUROPÉENNE : DÉMOGRAPHIE, POLITIQUES &amp; DÉFENSE</text>
      
      <!-- Colonne 1 : Hiver démographique -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">1. HIVER DÉMOGRAPHIQUE</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Taux de fécondité très bas (1,5 enfant/femme)</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Italie, Espagne, Allemagne : &lt; 1,3 enfant</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Pénurie de main-d'œuvre qualifiée</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Explosion des dépenses de retraite et santé</text>
      <text x="35" y="178" font-size="10" font-weight="bold" fill="#dc2626">• Crise migratoire :</text>
      <text x="35" y="195" font-size="9" fill="#4b5563">• Tensions politiques sur l'accueil des réfugiés</text>
      <text x="35" y="208" font-size="9" fill="#4b5563">• Échec d'une politique d'asile unifiée</text>
      
      <!-- Colonne 2 : Dépendance & Divergences internes -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">2. DIVERGENCES &amp; ÉNERGIE</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Dépendance énergétique critique (gaz, pétrole)</text>
      <text x="285" y="120" font-size="10" fill="#374151">• Choc de la guerre en Ukraine (fin gaz russe)</text>
      <text x="285" y="138" font-size="10" fill="#374151">• Disparités régionales Est/Ouest criantes</text>
      <text x="285" y="156" font-size="10" fill="#374151">• Dumping fiscal : Irlande, Luxembourg</text>
      <text x="285" y="174" font-size="10" fill="#374151">• Dumping social : travailleurs détachés de l'Est</text>
      <text x="285" y="195" font-size="10" font-weight="bold" fill="#b91c1c">Absence d'harmonisation fiscale</text>
      
      <!-- Colonne 3 : Nain Politique et Militaire -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#4b5563" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">3. « GÉANT ÉCO, NAIN MILITAIRE »</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Règle de l'unanimité paralysant la diplomatie</text>
      <text x="540" y="120" font-size="10" fill="#374151">• Choc historique du Brexit (départ du R-U)</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Montée des partis eurosceptiques</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Pas d'armée européenne commune</text>
      <text x="540" y="176" font-size="10" font-weight="bold" fill="#dc2626">• Dépendance militaire à l'OTAN :</text>
      <text x="540" y="192" font-size="9" fill="#4b5563">• Le parapluie nucléaire américain indispensable</text>
      <text x="540" y="206" font-size="9" fill="#4b5563">• Incapacité à peser seul dans les conflits</text>
    </svg>`
  },
  introduction: "Si l'Union Européenne s'est imposée comme un titan économique et commercial incontournable, elle souffre de paradoxes et de fragilités internes considérables qui brident son affirmation géopolitique. Souvent qualifiée de 'géant économique, mais nain politique et ver de terre militaire', l'Union est entravée par la règle de l'unanimité en matière de politique étrangère, par l'absence d'une véritable défense commune autonome, et par des disparités fiscales et salariales nourrissant le dumping social. À ces faiblesses s'ajoutent un déclin démographique alarmant et la montée de forces politiques eurosceptiques, dont le Brexit a constitué la première rupture historique majeure.",
  sections: [
    {
      title: "I. L'hiver démographique européen et le casse-tête migratoire",
      content: [
        "1. Le vieillissement accéléré de la population :",
        "   - L'Europe est le continent le plus âgé du monde. Le taux de fécondité moyen de l'UE stagne autour de 1,5 enfant par femme, bien en deçà du seuil de renouvellement des générations fixé à 2,1.",
        "   - Dans certains pays comme l'Italie, l'Espagne, la Grèce ou la Pologne, la fécondité s'effondre en dessous de 1,3 enfant par femme.",
        "   - Conséquences socio-économiques alarmantes : contraction de la population active, pénurie chronique de main-d'œuvre dans l'industrie et les services, déséquilibre financier majeur des systèmes de retraite par répartition et explosion des dépenses publiques de santé et de dépendance pour le quatrième âge.",
        "2. Les déchirements autour des politiques d'immigration :",
        "   - Alors que l'apport migratoire extérieur apparaît démographiquement indispensable pour stabiliser la population active, la gestion des flux de réfugiés et de migrants (crise migratoire de 2015) a provoqué des fractures politiques profondes.",
        "   - Crise de l'espace Schengen (rétablissement unilatéral des contrôles aux frontières nationales) et refus obstiné des pays d'Europe centrale (Hongrie, Pologne) d'appliquer les quotas de relocalisation solidaire des demandeurs d'asile."
      ]
    },
    {
      title: "II. Les disparités régionales et le dumping interne",
      content: [
        "1. Le fossé économique entre l'Ouest et l'Est de l'Union :",
        "   - Malgré l'allocation massive des fonds structurels européens (FEDER, Fonds de Cohésion), le PIB par habitant des régions roumaines, bulgares ou du sud de l'Italie demeure inférieur à la moitié de la moyenne de l'UE.",
        "   - Fuite des cerveaux et exode des jeunes diplômés des pays d'Europe de l'Est vers les métropoles occidentales riches (Allemagne, France, Irlande).",
        "2. Le dumping fiscal et le dumping social au sein du marché unique :",
        "   - Absence complète d'harmonisation fiscale : certains États membres pratiquent une concurrence fiscale déloyale agressive (taux d'impôt sur les sociétés ultra-faible de 12,5 % en Irlande pour attirer les GAFAM, régimes de complaisance fiscale au Luxembourg ou aux Pays-Bas).",
        "   - Dumping social lié à la directive sur les 'travailleurs détachés' : des salariés est-européens travaillant à l'Ouest en cotisant aux régimes sociaux de leur pays d'origine à bas coût, déstabilisant les entreprises locales du bâtiment et des transports."
      ]
    },
    {
      title: "III. La dépendance énergétique et industrielle extérieure",
      content: [
        "1. Une vulnérabilité énergétique criante :",
        "   - L'UE importe plus de 55 % de son énergie consommée (pétrole, gaz naturel, uranium).",
        "   - La dépendance historique envers les hydrocarbures russes (notamment pour l'Allemagne et l'Italie via les gazoducs Nord Stream) a éclaté au grand jour lors de la guerre en Ukraine en 2022, contraignant l'Union à une réorganisation logistique d'urgence coûteuse (importation massive de Gaz Naturel Liquéfié GNL américain et qatari).",
        "2. Le décrochage dans l'économie numérique et les technologies de pointe :",
        "   - L'Europe ne compte aucun géant technologique mondial rivalisant avec les GAFAM américains ou les BATX chinois (Baidu, Alibaba, Tencent, Xiaomi).",
        "   - Dépendance totale envers l'Asie (Taïwan, Corée du Sud) pour les semi-conducteurs et microprocesseurs indispensables à l'industrie automobile et à l'électronique."
      ]
    },
    {
      title: "IV. Le « nain politique et militaire » et la crise de gouvernance",
      content: [
        "1. Une gouvernance complexe et contestée :",
        "   - La règle de l'unanimité pour les décisions de politique étrangère, de sécurité et de fiscalité confère un droit de veto paralysant à chaque État membre (blocages récurrents de la Hongrie de Viktor Orbán).",
        "   - Le traumatisme du Brexit : le référendum de juin 2016 et le départ effectif du Royaume-Uni en 2020 ont prouvé que la construction européenne n'était pas irréversible, privant l'UE de sa deuxième économie et de sa principale puissance militaire avec la France.",
        "   - Montée de l'euroscepticisme et des nationalismes souverainistes contestant la suprématie du droit européen sur les juridictions nationales.",
        "2. L'incapacité d'assurer une défense autonome :",
        "   - Échec historique de la Communauté Européenne de Défense (CED en 1954) et absence d'une véritable armée européenne commune.",
        "   - La sécurité du continent européen reste presque exclusivement déléguée au commandement intégré de l'OTAN sous parapluie militaire et nucléaire américain, rendant l'Europe extrêmement vulnérable aux variations électorales à Washington."
      ]
    }
  ]
};
