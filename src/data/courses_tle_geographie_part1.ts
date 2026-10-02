import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 1 (LEÇONS 1 À 3)
// La mondialisation, les disparités de développement et la coopération internationale
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_1_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-1',
  number: 'LEÇON 1',
  title: 'LA MONDIALISATION : PROCESSUS, ACTEURS, FLUX ET DÉBATS',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Première Partie • La mondialisation et la division du monde (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Analyse globale du système-monde contemporain : définition et étapes historiques de la mondialisation, les moteurs technologiques et institutionnels, les acteurs majeurs (firmes transnationales, organisations internationales FMI, OMC, Banque Mondiale, États, ONG), la typologie des flux planétaires (marchandises, capitaux, informations, flux migratoires) et les contestations altermondialistes.",
  image: {
    caption: 'Figure 1.1 : L’archipel mégalopolitain mondial et les flux majeurs de la mondialisation',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="mondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#mondGrad)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#0c4a6e" text-anchor="middle">LE SYSTÈME-MONDE CONTEMPORAIN : TRIPÔLE, CENTRES DÉCISIONNELS &amp; FLUX PLANÉTAIRES</text>
      
      <!-- Pôle Amérique du Nord -->
      <circle cx="150" cy="110" r="45" fill="#3b82f6" fill-opacity="0.2" stroke="#2563eb" stroke-width="2"/>
      <text x="150" y="105" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">AMÉRIQUE DU NORD</text>
      <text x="150" y="120" font-size="9" fill="#1d4ed8" text-anchor="middle">(États-Unis / Canada)</text>
      <text x="150" y="133" font-size="8" fill="#475569" text-anchor="middle">Wall Street • Silicon Valley</text>
      
      <!-- Pôle Europe Occidentale -->
      <circle cx="410" cy="95" r="42" fill="#10b981" fill-opacity="0.2" stroke="#059669" stroke-width="2"/>
      <text x="410" y="90" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">UNION EUROPÉENNE</text>
      <text x="410" y="105" font-size="9" fill="#047857" text-anchor="middle">1er pôle commercial</text>
      <text x="410" y="118" font-size="8" fill="#475569" text-anchor="middle">Londres • Francfort • Paris</text>
      
      <!-- Pôle Asie Orientale -->
      <circle cx="640" cy="110" r="45" fill="#f59e0b" fill-opacity="0.2" stroke="#d97706" stroke-width="2"/>
      <text x="640" y="105" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">ASIE ORIENTALE</text>
      <text x="640" y="120" font-size="9" fill="#b45309" text-anchor="middle">(Chine, Japon, Corée)</text>
      <text x="640" y="133" font-size="8" fill="#475569" text-anchor="middle">Atelier du monde • Shanghai</text>
      
      <!-- Flux de la Triade (lignes épaisses bidirectionnelles) -->
      <path d="M 195 105 Q 280 70 368 90" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,3"/>
      <path d="M 452 95 Q 525 75 595 105" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,3"/>
      <path d="M 175 145 Q 390 230 615 145" fill="none" stroke="#dc2626" stroke-width="3.5"/>
      <text x="390" y="215" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">FLUX MAJEURS TRANS-PACIFIQUES ET TRANS-ATLANTIQUES (80% du commerce mondial)</text>
      
      <!-- Périphéries et Suds -->
      <rect x="250" y="145" width="280" height="40" rx="8" fill="#fff" stroke="#6b7280" stroke-width="1.2"/>
      <text x="390" y="162" font-size="10" font-weight="bold" fill="#374151" text-anchor="middle">PÉRIPHÉRIES INTÉGRÉES &amp; PAYS DU SUD (Afrique, Amérique Latine)</text>
      <text x="390" y="176" font-size="9" fill="#6b7280" text-anchor="middle">Fournisseurs de matières premières (hydrocarbures, métaux) &amp; Récepteurs d'IDE</text>
      
      <!-- Flèches Sud vers Pôles -->
      <line x1="390" y1="145" x2="410" y2="137" stroke="#059669" stroke-width="1.5"/>
      <line x1="280" y1="145" x2="185" y2="135" stroke="#2563eb" stroke-width="1.5"/>
      <line x1="500" y1="145" x2="605" y2="135" stroke="#d97706" stroke-width="1.5"/>
      
      <!-- Légende inférieure -->
      <rect x="50" y="235" width="12" height="12" fill="#dc2626"/>
      <text x="70" y="245" font-size="9" fill="#374151">Flux financiers et conteneurisés dominants</text>
      <rect x="300" y="235" width="12" height="12" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb"/>
      <text x="320" y="245" font-size="9" fill="#374151">Centres d'impulsion de la Triade élargie</text>
      <rect x="550" y="235" width="12" height="12" fill="#fff" stroke="#6b7280"/>
      <text x="570" y="245" font-size="9" fill="#374151">Espaces périphériques et intermédiaires</text>
    </svg>`
  },
  introduction: "La mondialisation désigne l'intensification et la généralisation des échanges de toute nature (marchandises, services, capitaux, informations, idées et personnes) à l'échelle de la planète entière. Elle transforme la Terre en un espace interdépendant où les décisions prises en un point ont des répercussions immédiates sur le reste du globe. Initiée par les grandes découvertes et accélérée par les révolutions industrielles successives, elle a pris depuis la fin du XXe siècle une dimension inédite sous l'effet de la révolution numérique, du libre-échange et du triomphe de l'économie de marché. Toutefois, loin d'homogénéiser le monde, elle engendre une polarisation spatiale extrême entre centres d'impulsion dominants et périphéries marginalisées.",
  sections: [
    {
      title: "I. Les fondements historiques et les moteurs de la mondialisation",
      content: [
        "1. Les étapes historiques de la mise en relation du monde :",
        "   - Première mondialisation (XVIe - XVIIIe siècle) : le commerce triangulaire transatlantique, les empires coloniaux mercantiles espagnols, portugais, britanniques et français.",
        "   - Deuxième mondialisation (fin XIXe - 1914) : la révolution de la vapeur (chemin de fer, navires à vapeur), le télégraphe, l'apogée des empires coloniaux européens et l'étalon-or international.",
        "   - Troisième mondialisation (depuis 1980) : effondrement du bloc soviétique (fin de la Guerre froide en 1991), triomphe du capitalisme néolibéral mondialisé (consensus de Washington), ouverture de la Chine et révolution des technologies de l'information et de la communication (TIC).",
        "2. Les moteurs techniques et organisationnels :",
        "   - La révolution des transports maritimes et la 'maritimisation' : généralisation du conteneur standardisé (inventé par Malcolm McLean en 1956) et des porte-conteneurs géants de plus de 24 000 EVP (Équivalent Vingt Pieds), réduisant drastiquement le coût du fret de plus de 90 %.",
        "   - La révolution numérique et Internet : télécommunications par satellites, câbles sous-marins à fibre optique, transfert instantané des données et des ordres boursiers 24h/24 à la vitesse de la lumière.",
        "   - L'abaissement des barrières douanières : accords multilatéraux du GATT puis de l'Organisation Mondiale du Commerce (OMC fondée à Marrakech en 1994)."
      ]
    },
    {
      title: "II. Les acteurs majeurs du système-monde",
      content: [
        "1. Les Firmes Transnationales (FTN) :",
        "   - Plus de 100 000 FTN contrôlant plus de 900 000 filiales dans le monde, réalisant les deux tiers du commerce mondial et le tiers des échanges en commerce intrafirme (transactions internes entre filiales).",
        "   - Stratégie globale de Division Internationale du Travail (DIT) : concentration des fonctions de conception, de recherche-développement (R&D) et de finance dans les métropoles des pays du Nord, et délocalisation des unités de fabrication et d'assemblage dans les pays du Sud ou émergents à bas coût de main-d'œuvre et fiscalité avantageuse (zones franches).",
        "2. Les organisations économiques et financières internationales :",
        "   - Le Fonds Monétaire International (FMI) et la Banque Mondiale (accords de Bretton Woods, 1944) : garants de la stabilité monétaire globale et bailleurs de fonds imposant des Programmes d'Ajustement Structurel (PAS) d'inspiration libérale aux pays en développement.",
        "   - L'Organisation Mondiale du Commerce (OMC) : tribunal arbitral du commerce planétaire veillant au démantèlement des tarifs douaniers et des barrières non tarifaires.",
        "3. Les États souverains et leurs regroupements régionaux :",
        "   - Les États restent des acteurs incontournables : régulation fiscale, investissements dans les infrastructures lourdes, protectionnisme stratégique et diplomatie économique.",
        "   - Les blocs régionaux d'intégration économique : Union Européenne (UE), Accord Canada-États-Unis-Mexique (ACEUM), Association des Nations de l'Asie du Sud-Est (ASEAN), CEDEAO et Union Africaine (ZLECAf).",
        "4. Les acteurs non étatiques : Organisations Non Gouvernementales (ONG internationales : Greenpeace, Amnesty International, Médecins Sans Frontières), diasporas et réseaux transnationaux illicites (mafias, cartels de drogue, cybercriminalité)."
      ]
    },
    {
      title: "III. La typologie et l'intensité des flux planétaires",
      content: [
        "1. Les flux de marchandises (flux matériels) :",
        "   - Prédominance écrasante du fret maritime (plus de 85 % du volume des marchandises transportées dans le monde).",
        "   - Rôle stratégique des façades maritimes (Northern Range européenne, façade atlantique et pacifique américaine, façade orientale asiatique de Tokyo à Singapour) et des passages maritimes resserrés ou goulets d'étranglement (détroits de Malacca, d'Ormuz, de Bab-el-Mandeb, de Gibraltar et canaux de Suez et de Panama).",
        "2. Les flux immatériels et financiers :",
        "   - Les Investissements Directs à l'Étranger (IDE) : flux de capitaux placés par les FTN pour créer ou racheter des entreprises à l'étranger.",
        "   - Les marchés financiers interconnectés fonctionnant en continu : bourses de New York (NYSE, Nasdaq), Londres, Tokyo, Shanghai, Francfort et Hong Kong.",
        "   - Flux d'informations : réseaux sociaux, médias transnationaux, flux de données massives (Big Data) transitant par les câbles sous-marins et les centres de données (data centers).",
        "3. Les flux humains et migratoires :",
        "   - Le tourisme international : plus de 1,4 milliard de touristes internationaux par an (avant la pandémie de Covid-19), principalement entre pays du Nord et vers les bassins méditerranéen et caraïbe.",
        "   - Les migrations économiques Sud-Nord et Sud-Sud : près de 280 millions de migrants internationaux, générant des transferts financiers colossaux vers leurs pays d'origine (les 'remises' ou 'remittances' qui dépassent largement le montant de l'Aide Publique au Développement au Sénégal)."
      ]
    },
    {
      title: "IV. Débats, contestations et limites de la mondialisation",
      content: [
        "1. La critique altermondialiste :",
        "   - Mouvement international né à la fin des années 1990 (manifestations de Seattle en 1999 contre l'OMC, Forum Social Mondial de Porto Alegre en 2001 puis de Dakar en 2011 avec le slogan 'Un autre monde est possible').",
        "   - Dénonciation du diktat de la finance dérégulée, de l'accroissement des inégalités sociales, de l'évasion fiscale via les paradis fiscaux et de la destruction des souverainetés démocratiques locales.",
        "2. Les impacts écologiques dévastateurs :",
        "   - Empreinte carbone planétaire liée aux transports maritimes et aériens intercontinentaux continus.",
        "   - Surexploitation des ressources naturelles non renouvelables, déforestation tropicale (Amazonie, bassin du Congo) pour les cultures d'exportation (soja, huile de palme) et pollution plastique globale des océans.",
        "3. Les crises systémiques et le retour des tensions géopolitiques :",
        "   - Vulnérabilité des chaînes de valeur mondialisées mise en évidence par la pandémie de Covid-19 (pénuries de masques, de principes actifs pharmaceutiques et de semi-conducteurs).",
        "   - Montée du protectionnisme et guerre commerciale entre les États-Unis et la Chine, réarmement des puissances et remise en cause du multilatéralisme."
      ]
    }
  ]
};

export const LESSON_2_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-2',
  number: 'LEÇON 2',
  title: 'LES DISPARITÉS DE DÉVELOPPEMENT DANS LE MONDE : LA LIMITE NORD-SUD ET LES DIVERSITÉS',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Première Partie • La mondialisation et la division du monde (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Analyse géographique des inégalités de richesse et de bien-être à l'échelle du globe : mesure du développement (PIB, IDH, IPM, coefficient de Gini), pertinence et limites de la ligne Brandt (clivage Nord/Sud), éclatement et diversité socio-économique des 'Suds' (pays émergents, pays pétroliers, pays à revenu intermédiaire, Pays les Moins Avancés) et fractures internes au sein des pays du Nord.",
  image: {
    caption: 'Figure 2.1 : La ligne Nord-Sud et la typologie planétaire du développement',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#devGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">LES DISPARITÉS PLANÉTAIRES DE DÉVELOPPEMENT : L'ÉCLATEMENT DE LA LIGNE NORD-SUD</text>
      
      <!-- Zone des Nords -->
      <rect x="30" y="55" width="345" height="95" rx="8" fill="#fff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="202" y="75" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LES « NORDS » (IDH &gt; 0,800 • Élevé à Très Élevé)</text>
      <text x="45" y="95" font-size="10" fill="#374151">• Pôles traditionnels : Amérique du Nord, Europe, Japon, Corée</text>
      <text x="45" y="112" font-size="10" fill="#374151">• Société post-industrielle tertiaire, R&amp;D de pointe, fort PIB/hab</text>
      <text x="45" y="130" font-size="10" fill="#dc2626">• Limites internes : pauvreté résiduelle, chômage, inégalités sociales</text>
      
      <!-- Zone des Suds émergents -->
      <rect x="405" y="55" width="345" height="95" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="577" y="75" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">LES « SUDS ÉMERGENTS » (BRICS &amp; Pays Intermédiaires)</text>
      <text x="420" y="95" font-size="10" fill="#374151">• Chine, Inde, Brésil, Afrique du Sud, Mexique, Indonésie, Turquie</text>
      <text x="420" y="112" font-size="10" fill="#374151">• Croissance industrielle rapide, insertion agressive dans l'OMC</text>
      <text x="420" y="130" font-size="10" fill="#dc2626">• Disparités spatiales énormes : mégapoles riches vs campagnes pauvres</text>
      
      <!-- Zone des Pays Pétroliers et Intermédiaires -->
      <rect x="30" y="160" width="345" height="85" rx="8" fill="#fff" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="202" y="180" font-size="11" font-weight="bold" fill="#5b21b6" text-anchor="middle">PAYS PÉTROLIERS &amp; RENTIERS (Moyen-Orient)</text>
      <text x="45" y="200" font-size="10" fill="#374151">• Émirats, Qatar, Arabie Saoudite : PIB/hab très élevé mais rente</text>
      <text x="45" y="218" font-size="10" fill="#374151">• Faible diversification économique et dépendance aux hydrocarbures</text>
      <text x="45" y="233" font-size="9" fill="#6b7280">• Forte présence de main-d'œuvre immigrée précaire</text>
      
      <!-- Zone des PMA (Afrique Subsaharienne) -->
      <rect x="405" y="160" width="345" height="85" rx="8" fill="#fff" stroke="#ef4444" stroke-width="1.5"/>
      <text x="577" y="180" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">PAYS LES MOINS AVANCÉS (PMA : 46 pays, 33 en Afrique)</text>
      <text x="420" y="200" font-size="10" fill="#374151">• IDH faible (&lt; 0,550), pauvreté multidimensionnelle, malnutrition</text>
      <text x="420" y="218" font-size="10" fill="#374151">• Dépendance à l'Aide Publique et vulnérabilité climatique aiguë</text>
      <text x="420" y="233" font-size="9" fill="#047857">• Potentiel d'avenir : transition démographique, jeunesse, ressources</text>
    </svg>`
  },
  introduction: "Le développement économique et humain est caractérisé par de profondes inégalités spatiales à toutes les échelles (mondiale, régionale, nationale et locale). Historiquement conceptualisée par le chancelier ouest-allemand Willy Brandt en 1980 à travers une ligne séparant un 'Nord' riche et industrialisé d'un 'Sud' sous-développé et dépendant, la géographie du développement a subi des mutations spectaculaires. L'irrésistible ascension des puissances émergentes, les rentes pétrolières colossales et la persistance de poches de misère absolue imposent aujourd'hui de déconstruire le modèle binaire classique au profit d'une analyse multipolaire et nuancée des 'Suds' et des 'Nords'.",
  sections: [
    {
      title: "I. Les critères et indicateurs de mesure du développement",
      content: [
        "1. La distinction fondamentale entre croissance économique et développement :",
        "   - La croissance économique : phénomène purement quantitatif d'augmentation continue de la production de biens et services sur une période donnée, mesurée par le Produit Intérieur Brut (PIB) ou le Revenu National Brut (RNB).",
        "   - Le développement : processus qualitatif et quantitatif d'amélioration globale et durable des conditions matérielles d'existence, de santé, d'instruction, de liberté et de bien-être d'une société.",
        "2. Les indicateurs composites modernes de mesure :",
        "   - L'Indice de Développement Humain (IDH) créé par le PNUD en 1990 (inspiré par Amartya Sen et Mahbub ul Haq) : indice compris entre 0 et 1 combinant trois dimensions fondamentales : la santé et longévité (espérance de vie à la naissance), l'éducation (durée moyenne et attendue de scolarisation) et le niveau de vie décent (RNB par habitant en Parité de Pouvoir d'Achat PPA).",
        "   - L'Indice de Pauvreté Multidimensionnelle (IPM) : évalue les privations simultanées subies par les ménages dans 10 domaines de la santé, de l'éducation et du niveau de vie élémentaire (eau potable, électricité, assainissement, combustible).",
        "   - Le coefficient de Gini : mesure l'inégalité de distribution des revenus au sein d'une population (0 = égalité parfaite, 1 = inégalité absolue)."
      ]
    },
    {
      title: "II. La ligne Brandt et la réalité historique du clivage Nord-Sud",
      content: [
        "1. La frontière Nord-Sud traditionnelle :",
        "   - Tracée par le rapport de la commission Brandt en 1980, cette ligne ondulée sépare le globe en deux hémisphères socio-économiques : elle englobe l'Amérique du Nord, l'Europe occidentale et orientale, la Russie, le Japon et intègre une enclave australe développée (Australie et Nouvelle-Zélande).",
        "   - À l'époque, les pays du Nord représentaient un quart de la population mondiale mais accaparaient près de 80 % de la richesse globale.",
        "2. Les fondements historiques de cette asymétrie :",
        "   - La révolution industrielle pionnière en Europe et aux États-Unis.",
        "   - La colonisation politique et économique des continents africain, asiatique et latino-américain, instaurant un échange inégal où les colonies fournissaient des matières premières agricoles et minières brutes à bas prix pour importer des produits manufacturés à haute valeur ajoutée."
      ]
    },
    {
      title: "III. La fragmentation et l'hétérogénéité des « Suds »",
      content: [
        "1. Les puissances émergentes (les BRICS+ et pays nouvellement industrialisés) :",
        "   - Brésil, Russie, Inde, Chine, Afrique du Sud (élargis à l'Égypte, Éthiopie, Iran, Émirats Arabes Unis).",
        "   - Forte croissance économique, industrialisation lourde, capacités technologiques et spatiales propres, et ambition géopolitique de contester l'hégémonie occidentale.",
        "2. Les pays rentiers producteurs et exportateurs d'hydrocarbures :",
        "   - Pays du Golfe arabo-persique (Arabie Saoudite, Qatar, Émirats), certains pays d'Afrique (Algérie, Nigeria, Angola, Guinée Équatoriale).",
        "   - Richesse financière insolente mais économie peu diversifiée, vulnérable aux fluctuations des cours du baril et marquées par des inégalités internes flagrantes.",
        "3. Les pays à revenu intermédiaire et les économies de transition :",
        "   - Pays d'Amérique latine, d'Asie du Sud-Est (Thaïlande, Vietnam, Malaisie) et du Maghreb : secteur touristique, agricole d'exportation et zones d'assemblage industriel.",
        "4. Les Pays les Moins Avancés (PMA) :",
        "   - 46 pays recensés par l'ONU (dont 33 situés en Afrique subsaharienne, dont le Sénégal pendant longtemps avant sa transition économique).",
        "   - Faiblesse extrême du revenu par habitant, indice de capital humain dégradé (faible scolarisation, mortalité infantile élevée) et très forte vulnérabilité économique et climatique (sécheresses, inondations)."
      ]
    },
    {
      title: "IV. Les inégalités et fractures spatiales au sein des pays du « Nord »",
      content: [
        "1. Les poches de sous-développement et la précarité dans les métropoles riches :",
        "   - Le phénomène des 'working poors' (travailleurs pauvres) aux États-Unis et en Europe : des millions de salariés vivant sous le seuil de pauvreté malgré un emploi.",
        "   - Les déserts médicaux et les ghettos urbains ségrégués (banlieues défavorisées, inner cities américaines).",
        "2. Les fractures régionales territoriales :",
        "   - Régions en déclin industriel et économique (la 'Rust Belt' aux États-Unis, le Nord-Pas-de-Calais en France, les régions charbonnières britanniques) face aux métropoles dynamiques connectées à la mondialisation.",
        "   - Disparités Nord-Sud en Italie (Mezzogiorno pauvre et agricole face à la plaine du Pô hyper-industrialisée) et disparités Est-Ouest persistantes en Allemagne réunifiée."
      ]
    }
  ]
};

export const LESSON_3_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-3',
  number: 'LEÇON 3',
  title: 'LA COOPÉRATION INTERNATIONALE : AIDE AU DÉVELOPPEMENT, RELATIONS NORD-SUD ET COOPÉRATION SUD-SUD',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Première Partie • La mondialisation et la division du monde (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Examen approfondi des mécanismes de solidarité et de partenariat mondial : l'Aide Publique au Développement (APD) et les objectifs de l'OCDE, les relations asymétriques Nord-Sud (accords de Lomé/Cotonou, fardeau de la dette et rééchelonnements du Club de Paris), et la montée en puissance spectaculaire de la coopération Sud-Sud (diplomatie d'infrastructures de la Chine, banque des BRICS, partenariats intra-africains).",
  image: {
    caption: 'Figure 3.1 : Les flux de coopération internationale : De l’aide Nord-Sud traditionnelle aux partenariats Sud-Sud',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="coopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#coopGrad)" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#4c1d95" text-anchor="middle">LES FLUX DE LA COOPÉRATION MONDIALE : COOPÉRATION NORD-SUD VS COOPÉRATION SUD-SUD</text>
      
      <!-- Bloc Coopération Nord-Sud Traditionnelle -->
      <rect x="30" y="55" width="345" height="185" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="202" y="78" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1. COOPÉRATION NORD-SUD (TRADITIONNELLE)</text>
      <text x="45" y="105" font-size="11" fill="#374151">• Bailleurs : États-Unis, UE (France, Allemagne), Japon</text>
      <text x="45" y="125" font-size="11" fill="#374151">• Instruments : Aide Publique au Développement (APD)</text>
      <text x="45" y="145" font-size="11" fill="#374151">• Accords UE-ACP (Lomé, Cotonou, Post-Cotonou)</text>
      <text x="45" y="165" font-size="11" font-weight="bold" fill="#dc2626">• Limites &amp; Critiques :</text>
      <text x="55" y="185" font-size="10" fill="#4b5563">- Conditionnalités politiques &amp; économiques strictes</text>
      <text x="55" y="200" font-size="10" fill="#4b5563">- Objectif ONU des 0,7% du RNB rarement atteint</text>
      <text x="55" y="215" font-size="10" fill="#4b5563">- Piège de l'endettement extérieur et dépendance</text>
      
      <!-- Bloc Coopération Sud-Sud Émergente -->
      <rect x="405" y="55" width="345" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="577" y="78" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">2. COOPÉRATION SUD-SUD (NOUVELLE DYNAMIQUE)</text>
      <text x="420" y="105" font-size="11" fill="#374151">• Acteurs phares : Chine, Inde, Brésil, Turquie, Pays du Golfe</text>
      <text x="420" y="125" font-size="11" fill="#374151">• Modèle chinois : 'Gagnant-Gagnant' (Win-Win)</text>
      <text x="420" y="145" font-size="11" fill="#374151">• Échange 'Ressources minières contre Infrastructures'</text>
      <text x="420" y="165" font-size="11" font-weight="bold" fill="#059669">• Réalisations au Sénégal :</text>
      <text x="430" y="185" font-size="10" fill="#4b5563">- Autoroutes (Ila Touba), Arène nationale, Musée Noir</text>
      <text x="420" y="205" font-size="11" font-weight="bold" fill="#b45309">• Défis :</text>
      <text x="430" y="222" font-size="10" fill="#4b5563">- Dette opaque, main-d'œuvre importée et déficit commercial</text>
    </svg>`
  },
  introduction: "Face à l'immensité des déséquilibres mondiaux, la coopération internationale s'est imposée dès l'après-guerre comme un impératif moral, géopolitique et économique. Conçue initialement comme un transfert de ressources des pays industrialisés riches vers les jeunes nations décolonisées (coopération bilatérale et multilatérale Nord-Sud), elle a souvent entretenu des relations de sujétion et de surendettement. Cependant, l'émergence économique du Sud global a bouleversé ce paradigme : l'essor spectaculaire de la coopération Sud-Sud, impulsée par la Chine, l'Inde, la Turquie et les institutions alternatives (Nouvelle Banque de Développement des BRICS), offre désormais aux pays africains comme le Sénégal de nouvelles marges de manœuvre stratégiques.",
  sections: [
    {
      title: "I. L'Aide Publique au Développement (APD) et ses mécanismes",
      content: [
        "1. Définition et architecture de l'APD :",
        "   - Définie par le Comité d'Aide au Développement (CAD) de l'OCDE comme l'ensemble des dons financiers et prêts à conditions concessionnelles (taux d'intérêt très bas, longs différés de remboursement) consentis par les administrations publiques à des pays en développement.",
        "   - Aide bilatérale : accordée directement d'État à État (exemple : Agence Française de Développement AFD, USAID américaine, JICA japonaise, GIZ allemande).",
        "   - Aide multilatérale : financements transitant par des agences internationales spécialisées (Banque Mondiale, Banque Africaine de Développement BAD, agences onusiennes : PNUD, UNICEF, FAO).",
        "2. Les engagements internationaux et le fossé des promesses :",
        "   - En 1970, l'Assemblée générale des Nations Unies a adopté l'objectif d'allouer au moins 0,7 % du Revenu National Brut (RNB) des pays développés à l'APD.",
        "   - Constat historique : seuls quelques rares pays (Suède, Norvège, Luxembourg, Danemark, Royaume-Uni parfois) ont atteint ou dépassé cet objectif. La moyenne des pays du CAD stagne autour de 0,35 % du RNB, les États-Unis n'y consacrant qu'environ 0,2 %.",
        "3. L'aide humanitaire d'urgence : interventions rapides lors de catastrophes naturelles, famines ou conflits armés (acheminement de vivres, tentes, soins médicaux d'urgence)."
      ]
    },
    {
      title: "II. Les relations économiques Nord-Sud et la crise de la dette",
      content: [
        "1. Les partenariats historiques privilégiés (exemple UE-ACP) :",
        "   - Les conventions successives de Lomé (I à IV de 1975 à 2000) et l'accord de Cotonou (2000-2020) liant l'Union Européenne aux pays d'Afrique, Caraïbes et Pacifique (ACP) : accès préférentiel des produits tropicaux au marché européen sans réciprocité et fonds de compensation (STABEX pour les produits agricoles, SYSMIN pour les minerais).",
        "   - Remplacement progressif par les Accords de Partenariat Économique (APE) : exigence de libre-échange réciproque très controversée, car menaçant de détruire les fragiles industries naissantes et l'agriculture vivrière ouest-africaine face à la concurrence des produits européens subventionnés.",
        "2. La spirale du surendettement des pays du Tiers-monde :",
        "   - Dans les années 1970, le recyclage des pétrodollars par les banques occidentales incite les pays du Sud à contracter des emprunts massifs.",
        "   - La hausse brutale des taux d'intérêt américains décidée par Paul Volcker en 1979 déclenche la crise de la dette souveraine de 1982 (défaut de paiement du Mexique et de multiples pays africains).",
        "   - Rôle du Club de Paris (créanciers publics bilatéraux) et du Club de Londres (banques commerciales privées) dans le rééchelonnement de la dette sous condition d'application des Programmes d'Ajustement Structurel (PAS) : privatisations massives, coupes sombres dans les budgets de l'éducation et de la santé publique au Sénégal.",
        "   - L'Initiative en faveur des Pays Pauvres Très Endettés (PPTE) lancée en 1996 par le FMI et la Banque Mondiale, permettant l'annulation d'une fraction importante des dettes multilatérales contre des réformes de bonne gouvernance."
      ]
    },
    {
      title: "III. La montée en puissance fulgurante de la coopération Sud-Sud",
      content: [
        "1. Les principes doctrinaux de la coopération Sud-Sud :",
        "   - Affirmation historique à la Conférence de Bandung (1955) et au Mouvement des Non-Alignés : solidarité entre peuples anciennement colonisés, égalité souveraine, respect de l'intégrité territoriale et non-ingérence stricte dans les affaires intérieures.",
        "   - Absence de conditionnalités politiques démocratiques ou environnementales imposées par les bailleurs traditionnels occidentaux.",
        "2. La Chine, acteur incontournable en Afrique et au Sénégal :",
        "   - Les sommets du Forum sur la Coopération Sino-Africaine (FOCAC) : engagements financiers de dizaines de milliards de dollars sous forme de prêts d'infrastructures, de crédits à l'exportation et d'investissements directs.",
        "   - Modèle pragmatique d'échanges 'Ressources naturelles contre infrastructures clefs en main' : construction de barrages hydroélectriques, ports en eaux profondes, réseaux ferroviaires et stades.",
        "   - Empreinte concrète au Sénégal : l'autoroute à péage Thiès-Touba (Ila Touba de 115 km), l'Hôpital d'Enfants de Diamniadio, l'Arène nationale de lutte à Pikine et le Musée des Civilisations Noires à Dakar.",
        "3. La diversification des partenaires du Sud :",
        "   - L'Inde : diplomatie pharmaceutique (génériques abordables), informatique et coopération agricole (machinisme agricole au Sénégal).",
        "   - La Turquie : diplomatie d'infrastructures et de commerce très dynamique (complexe sportif Dakar Arena, Centre International de Conférences Abdou Diouf CICAD et nouvel aéroport international Blaise Diagne AIBD construits par les firmes turques Summa et Limak).",
        "   - Les fonds souverains du Golfe (Arabie Saoudite, Koweït, Émirats Arabes Unis) : financements d'infrastructures routières, forages hydrauliques et soutien budgétaire."
      ]
    },
    {
      title: "IV. Défis et perspectives de la coopération internationale",
      content: [
        "1. Les risques inhérents à la nouvelle dette envers le Sud :",
        "   - Opacité de certains contrats de prêts concessionnels et risque du 'piège de la dette' (prise de contrôle d'actifs stratégiques comme le port de Hambantota au Sri Lanka cédé à bail à la Chine).",
        "   - Utilisation massive d'intrants et de main-d'œuvre importée au détriment des entreprises et de l'emploi local africain.",
        "2. L'essor de la coopération Sud-Sud intra-africaine :",
        "   - Investissements des banques marocaines (Attijariwafa Bank, Bank of Africa), des multinationales nigérianes (Dangote Cement à Pout au Sénégal) et des télécoms sud-africains.",
        "   - L'ambition transformatrice de la Zone de Libre-Échange Continentale Africaine (ZLECAf) entrée en vigueur en 2021 : créer le plus grand marché unique du monde regroupant 1,4 milliard de consommateurs pour porter le commerce intra-africain de moins de 16 % à plus de 50 % d'ici 2035."
      ]
    }
  ]
};
