import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 5 (LEÇONS 16 ET 17)
// Méthodologie experte des épreuves du Baccalauréat sénégalais en Géographie
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_16_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-16',
  number: 'LEÇON 16',
  title: 'MÉTHODOLOGIE EXPERTE DE LA DISSERTATION GÉOGRAPHIQUE AU BACCALAURÉAT',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Quatrième Partie • Méthodologie experte des épreuves du Baccalauréat (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Guide méthodologique complet et normé pour réussir l'épreuve reine de dissertation géographique au Baccalauréat sénégalais (Séries L et S) : compréhension et délimitation du sujet (mots-clés, cadre spatial, cadrage thématique et temporel), formulation de la problématique géographique, typologie des plans d'examen (plan thématique, plan comparatif, plan dialectique et plan par échelles), techniques de rédaction de l'introduction et de la conclusion, argumentation spatiale étayée par des données chiffrées précises et réalisation de croquis de synthèse intégrés.",
  image: {
    caption: 'Figure 16.1 : Démarche opératoire de la dissertation géographique au Baccalauréat',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="dissGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#7c3aed" stop-opacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#dissGrad)" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#312e81" text-anchor="middle">LES ÉTAPES CLÉS DE LA DISSERTATION GÉOGRAPHIQUE AU BACCALAURÉAT SÉNÉGALAIS</text>
      
      <!-- Étape 1 : Analyse du Sujet -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">1. ANALYSE DU SUJET (BROUILLON)</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Définir les termes et mots-clés conceptuels</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Délimiter l'espace géographique précis</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Poser le problème spatial central (Problématique)</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Choisir le type de plan adapté :</text>
      <text x="45" y="172" font-size="9" fill="#4f46e5">Thématique, Comparatif ou Dialectique</text>
      <text x="35" y="194" font-size="10" font-weight="bold" fill="#dc2626">Éviter impérativement le hors-sujet</text>
      
      <!-- Étape 2 : L'Introduction Normée -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">2. L'INTRODUCTION (3 PHASES)</text>
      <text x="285" y="102" font-size="10" fill="#374151">• 1. Amener le sujet (contexte géographique général) :</text>
      <text x="295" y="118" font-size="9" fill="#047857">Situer l'espace et le phénomène étudié</text>
      <text x="285" y="138" font-size="10" fill="#374151">• 2. Poser le sujet et la problématique :</text>
      <text x="295" y="154" font-size="9" fill="#047857">Formuler une question directrice claire</text>
      <text x="285" y="174" font-size="10" fill="#374151">• 3. Annoncer le plan ordonné :</text>
      <text x="295" y="190" font-size="9" fill="#047857">Exposer les 2 ou 3 grandes parties sans artifice</text>
      <text x="285" y="210" font-size="10" font-weight="bold" fill="#1e3a8a">Bloc unique d'environ 15 à 20 lignes</text>
      
      <!-- Étape 3 : Développement et Conclusion -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">3. DÉVELOPPEMENT &amp; FIN</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Grandes parties équilibrées (I, II, III)</text>
      <text x="540" y="120" font-size="10" fill="#374151">• Paragraphes argumentés :</text>
      <text x="550" y="136" font-size="9" fill="#475569">Idée principale + Preuve/Chiffre + Exemple spatialisé</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Transitions fluides entre les parties</text>
      <text x="540" y="174" font-size="10" fill="#374151">• Conclusion en deux temps :</text>
      <text x="550" y="190" font-size="9" fill="#b45309">Bilan synthétique + Ouverture prospective</text>
      <text x="540" y="210" font-size="10" font-weight="bold" fill="#047857">Intégration d'un croquis d'illustration valorisée</text>
    </svg>`
  },
  introduction: "La dissertation géographique est un exercice canonique d'évaluation aux examens du Baccalauréat sénégalais en Séries L et S. Elle ne consiste pas en une récitation encyclopédique de cours, mais en une démonstration rigoureuse, argumentée et spatialisée répondant à une problématique précise. Le candidat doit faire preuve d'esprit de synthèse, d'analyse territoriale, d'exactitude dans les données statistiques et géographiques, et d'une maîtrise impeccable de l'expression écrite. Cette leçon détaille pas à pas la méthode certifiée par les jurys de l'Office du Baccalauréat.",
  sections: [
    {
      title: "I. L'étape préparatoire au brouillon (durée recommandée : 45 minutes)",
      content: [
        "1. L'analyse sémantique et la délimitation du sujet :",
        "   - Lire le sujet au moins trois fois avec attention pour en peser chaque terme.",
        "   - Identifier et définir les mots-clés conceptuels (exemples : 'puissance', 'disparités', 'intégration', 'macrocéphalie', 'émergence').",
        "   - Délimiter le cadre spatial : quel est l'espace géographique d'étude ? (monde, continent africain, sous-région ouest-africaine, pays précis comme le Sénégal ou les États-Unis).",
        "   - Délimiter le cadre thématique et les bornes temporelles.",
        "2. La formulation de la problématique géographique :",
        "   - La problématique est la question centrale implicite posée par le sujet, qui met en tension des faits géographiques apparemment contradictoires (exemples : comment concilier l'immense richesse minérale de l'Afrique et sa marginalisation commerciale ? Quels sont les facteurs qui font des États-Unis une superpuissance tout en nourrissant des fragilités structurelles ?).",
        "3. Le choix du type de plan approprié :",
        "   - Le plan thématique (le plus fréquent) : découpe le sujet en grands domaines d'analyse (ex. I. Les atouts et fondements / II. Les piliers de la puissance / III. Les limites et déséquilibres).",
        "   - Le plan comparatif : confronte deux espaces ou deux logiques (ex. I. Les points de convergence / II. Les divergences / III. Les interactions réciproques).",
        "   - Le plan dialectique : examine une thèse, une antithèse et une synthèse de dépassement."
      ]
    },
    {
      title: "II. La rédaction de l'introduction et de la conclusion",
      content: [
        "1. L'introduction normée en trois étapes indissociables (15 à 20 lignes) :",
        "   - Étape 1 : Amener le sujet (accroche) : situer l'espace et le thème dans son contexte géographique global sans remonter 'aux origines de l'humanité'.",
        "   - Étape 2 : Poser le sujet et formuler la problématique : reprendre les termes du sujet et expliciter l'interrogation majeure sous forme de question directe ou indirecte.",
        "   - Étape 3 : Annoncer le plan de manière claire et élégante : annoncer les axes majeurs du développement sans utiliser de formules scolaires lourdes ('Dans une première partie...', préférer : 'Après avoir analysé..., nous étudierons..., avant d'examiner...').",
        "2. La conclusion normée en deux temps (10 à 15 lignes) :",
        "   - Premier temps : Le bilan synthétique : répondre de manière condensée et affirmative à la problématique sans répéter le plan.",
        "   - Deuxième temps : L'ouverture prospective : élargir la réflexion vers un sujet connexe, une perspective d'avenir ou une question d'échelle supérieure."
      ]
    },
    {
      title: "III. La structure et l'argumentation du développement",
      content: [
        "1. La règle d'or du paragraphe géographique (formule A-E-I) :",
        "   - A (Affirmation / Idée maîtresse) : énoncer en première phrase l'idée forte du paragraphe.",
        "   - E (Explication du mécanisme spatial) : expliquer le processus géographique (pourquoi et comment cela fonctionne-t-il sur le territoire ?).",
        "   - I (Illustration précise et chiffrée) : fournir des données statistiques réelles (PIB, population, tonnage, pourcentages) et des exemples spatiaux concrets localisés (villes, ports, fleuves, régions).",
        "2. L'équilibre et les transitions :",
        "   - Équilibrer la longueur des deux ou trois grandes parties.",
        "   - Rédiger une phrase de transition à la fin de chaque partie faisant le bilan de ce qui précède et annonçant logiquement la partie suivante.",
        "   - Aérer la copie : sauter deux lignes entre l'introduction et le développement, entre les grandes parties, et entre le développement et la conclusion."
      ]
    },
    {
      title: "IV. Exemple corrigé et rédigé de sujet de Baccalauréat",
      content: [
        "1. Sujet type Bac : 'La Chine : une superpuissance économique aux contrastes spatiaux et sociaux majeurs.'",
        "2. Analyse et plan retenu :",
        "   - Problématique : Comment la Chine est-elle passée en quelques décennies du statut d'économie agraire fermée à celui de superpuissance mondiale tout en creusant des disparités territoriales et sociétales vertigineuses ?",
        "   - Plan en trois parties :",
        "     * I. Les fondements et piliers de l'émergence économique chinoise (réformes, industrie manufacturière, hautes technologies, Nouvelles Routes de la Soie).",
        "     * II. L'organisation d'un espace géographique profondément asymétrique (l'hégémonie du littoral prospère face à un arrière-pays enclavé).",
        "     * III. Les fractures sociales, démographiques et environnementales qui menacent la pérennité du modèle (mingong, vieillissement accéléré, pollution globale)."
      ]
    }
  ]
};

export const LESSON_17_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-17',
  number: 'LEÇON 17',
  title: 'MÉTHODOLOGIE DU COMMENTAIRE DE DOCUMENTS GÉOGRAPHIQUES AU BACCALAURÉAT',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Quatrième Partie • Méthodologie experte des épreuves du Baccalauréat (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Formation méthodologique approfondie sur l'épreuve de commentaire de documents géographiques au Baccalauréat sénégalais : typologie des documents (textes d'analyse spatiale, tableaux statistiques, cartes thématiques, graphiques d'évolution en courbes, diagrammes en barres et circulaires), techniques de calculs statistiques obligatoires (taux de variation/croissance, soldes, ratios, densités, parts relatives), démarche d'interprétation géographique (décrire l'évolution spatiale, expliquer par les facteurs explicatifs du cours, et critiquer avec discernement), et règles de présentation des représentations graphiques (titre, légende, échelle, orientation).",
  image: {
    caption: 'Figure 17.1 : Les étapes méthodologiques du commentaire de documents géographiques',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="comDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#comDocGrad)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">LE COMMENTAIRE DE DOCUMENTS GÉOGRAPHIQUES AU BACCALAURÉAT : MÉTHODE ÉTAPE PAR ÉTAPE</text>
      
      <!-- Colonne 1 : Présentation des Documents -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#059669" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">1. PRÉSENTER LES DOCUMENTS</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Formule rituelle d'identification :</text>
      <text x="45" y="118" font-size="9" fill="#047857">Nature (texte, tableau, carte, graphique)</text>
      <text x="35" y="136" font-size="10" fill="#374151">• Auteur et source officielle (Banque Mondiale, FMI, ANSD, PNUD)</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Date / Année de référence</text>
      <text x="35" y="174" font-size="10" fill="#374151">• Espace géographique concerné</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#1e3a8a">Idée générale commune</text>
      
      <!-- Colonne 2 : Calculs Statistiques & Graphiques -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. CALCULS &amp; GRAPHIQUES</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Taux de variation en % :</text>
      <text x="295" y="118" font-size="9" fill="#1d4ed8">[(Valeur finale - Valeur initiale) / Vi] x 100</text>
      <text x="285" y="136" font-size="10" fill="#374151">• Solde de la balance commerciale :</text>
      <text x="295" y="150" font-size="9" fill="#1d4ed8">Exportations - Importations</text>
      <text x="285" y="168" font-size="10" fill="#374151">• Taux de couverture en % :</text>
      <text x="295" y="182" font-size="9" fill="#1d4ed8">(Exportations / Importations) x 100</text>
      <text x="285" y="202" font-size="10" font-weight="bold" fill="#dc2626">Règle T-O-L-E pour les graphiques</text>
      
      <!-- Colonne 3 : Analyse Critique & Explication -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">3. INTERPRÉTER &amp; EXPLIQUER</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Étape 1 : Décrire l'évolution constatée</text>
      <text x="540" y="120" font-size="10" fill="#374151">• Étape 2 : Expliquer par les facteurs du cours :</text>
      <text x="550" y="136" font-size="9" fill="#475569">Facteurs naturels, historiques, politiques, économiques</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Étape 3 : Esprit critique et limites :</text>
      <text x="550" y="172" font-size="9" fill="#b45309">Chiffres partiels, non-dits, date dépassée</text>
      <text x="540" y="196" font-size="10" font-weight="bold" fill="#047857">Citer précisément les données du texte</text>
    </svg>`
  },
  introduction: "Le commentaire de documents géographiques est la seconde option proposée aux candidats des Séries L et S lors des épreuves du Baccalauréat sénégalais. Fondé sur un corpus documentaire associant généralement un texte, un tableau de données statistiques, un graphique ou une carte thématique, cet exercice évalue la capacité de l'élève à analyser des documents réels, à effectuer des calculs géographiques pertinents, à construire des représentations graphiques normées et à expliquer les constats observés en mobilisant ses connaissances académiques.",
  sections: [
    {
      title: "I. La présentation globale du corpus documentaire",
      content: [
        "1. Les éléments formels d'identification :",
        "   - La nature de chaque document : texte d'analyse géopolitique, extrait de rapport économique, tableau statistique, carte thématique, graphique en courbes ou diagramme à barres.",
        "   - L'auteur et l'institution émettrice : institution internationale (Banque Mondiale, FMI, CNUCED, OMC, PNUD), organisme national officiel (ANSD, ministères) ou économiste géographe reconnu.",
        "   - La date et le contexte de publication : identifier si les données sont récentes ou historiques.",
        "   - L'espace géographique étudié et l'échelle d'observation.",
        "2. L'idée générale unificatrice :",
        "   - Dégager en une phrase synthétique le fil conducteur commun reliant tous les documents du corpus."
      ]
    },
    {
      title: "II. Les calculs statistiques incontournables au Baccalauréat",
      content: [
        "1. Le taux de variation (ou taux d'accroissement relatif) :",
        "   - Formule mathématique : Taux de variation (%) = [(Valeur Finale - Valeur Initiale) / Valeur Initiale] × 100.",
        "   - Permet de mesurer l'évolution d'une grandeur démographique ou économique (ex. croissance du PIB, augmentation de la population urbaine).",
        "2. Le solde de la balance commerciale et le taux de couverture :",
        "   - Solde commercial = Valeur des Exportations - Valeur des Importations (un résultat positif indique un excédent commercial, un résultat négatif indique un déficit).",
        "   - Taux de couverture (%) = (Valeur des Exportations / Valeur des Importations) × 100 (s'il est supérieur à 100 %, les exportations couvrent les importations).",
        "3. La part relative (pourcentage de structure) :",
        "   - Part (%) = (Sous-ensemble / Ensemble total) × 100.",
        "4. Les densités et ratios démographiques :",
        "   - Densité de population = Population totale / Superficie en km² (exprimée en hab/km²).",
        "   - Taux d'accroissement naturel = Taux de natalité - Taux de mortalité (exprimé en % ou pour mille ‰)."
      ]
    },
    {
      title: "III. La construction des représentations graphiques : la règle TOLE",
      content: [
        "1. Le choix pertinent du type de graphique :",
        "   - Graphique en courbes (évolution) : adapté pour représenter l'évolution continue d'un phénomène dans le temps sur plusieurs années consécutives (chronologie).",
        "   - Diagramme en barres (ou histogramme) : privilégié pour comparer des grandeurs entre pays différents à une date donnée ou des catégories distinctes.",
        "   - Diagramme circulaire (camembert) ou semi-circulaire : idéal pour représenter la répartition en pourcentages d'un total de 100 % (structure d'un PIB par secteur économique).",
        "2. La règle impérative TOLE pour ne perdre aucun point :",
        "   - T (Titre) : complet, précisant l'objet, le lieu et la date (ex. 'Évolution du PIB du Sénégal de 2015 à 2024 en milliards de FCFA').",
        "   - O (Orientation) : flèches indiquant le sens des axes d'abscisses et d'ordonnées.",
        "   - L (Légende) : claire et explicative associant chaque couleur ou hachure à une grandeur.",
        "   - E (Échelle) : échelle numérique ou graphique rigoureuse et visible, mentionnant clairement les unités sur les axes (millions d'habitants, pourcentages, milliards de dollars)."
      ]
    },
    {
      title: "IV. L'interprétation géographique et la critique des documents",
      content: [
        "1. La démarche intellectuelle en trois temps :",
        "   - Temps 1 (Constat / Description) : décrire avec précision les faits géographiques observés dans les documents (hausse, baisse, stagnation, disparité spatiale) en citant explicitement des chiffres tirés du document.",
        "   - Temps 2 (Explication causale) : expliquer les causes sous-jacentes du phénomène en puisant dans ses connaissances de cours (facteurs naturels, réformes politiques, investissements, conjoncture internationale).",
        "   - Temps 3 (Conséquences et perspectives) : analyser les impacts économiques, sociaux et spatiaux de cette évolution.",
        "2. La portée critique des documents :",
        "   - Évaluer la fiabilité des sources, identifier les éventuels non-dits ou omissions volontaires de l'auteur, et souligner les limites statistiques (ex. PIB ne prenant pas en compte l'immense économie informelle au Sénégal ou les inégalités de répartition de la richesse)."
      ]
    }
  ]
};
