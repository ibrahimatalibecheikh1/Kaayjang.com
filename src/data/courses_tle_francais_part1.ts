import { LessonContent } from './courses';

// =========================================================================
// FRANÇAIS CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 1 (LEÇONS 1 À 5)
// Programme officiel national de la République du Sénégal
// Cours exhaustifs intégraux sans résumé, grands axes et méthodologie Bac
// =========================================================================

export const LESSON_1_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-1',
  number: 'LEÇON 1',
  title: 'LE SURRÉALISME : RÉVOLTE POÉTIQUE, LIBÉRATION DU LANGAGE ET QUÊTE DU MERVEILLEUX',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 1 • Poésie du XXe Siècle & Négritude',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Genèse historique dans le traumatisme de la Grande Guerre, manifeste d\'André Breton (1924), automatisme psychique pur, télescopage des métaphores, poètes majeurs (Éluard, Aragon, Desnos) et filiation directe avec la Négritude césairienne.',
  image: {
    caption: 'Figure T1.1 : La révolution surréaliste — De l\'inconscient freudien à l\'émancipation poétique',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="surrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#7c3aed" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#surrGrad)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#1e1b4b" text-anchor="middle">LE SURRÉALISME : ARCHITECTURE DE LA RUPTURE ESTHÉTIQUE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">1. Traumatisme &amp; Refus</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Hécatombe de 14-18</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Rejet de la raison bourgeoise</text>
        <text x="14" y="96" font-size="11" fill="#374151">• De Dada au Surréalisme</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Rupture avec le positivisme</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Révolte existentielle</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">2. Procédés &amp; Exploration</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Écriture automatique</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Rêve &amp; Inconscient (Freud)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Cadavre exquis &amp; Hasard</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Rapprochement insolite (Reverdy)</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Libération du Verbe</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">3. Postérité &amp; Négritude</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Rencontre Breton - Césaire (1941)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Arme miraculeuse du poète</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Décolonisation mentale</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Transmutation du réel</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Révolution poétique globale</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 1 : LE SURRÉALISME : RÉVOLTE POÉTIQUE, LIBÉRATION DU LANGAGE ET QUÊTE DU MERVEILLEUX

INTRODUCTION
Né au lendemain de la Première Guerre mondiale, le surréalisme constitue l'un des séismes intellectuels et artistiques les plus décisifs du XXe siècle. Fondé officiellement en 1924 par André Breton avec la publication du premier Manifeste du surréalisme, ce mouvement dépasse largement le cadre d'une simple école poétique : il se veut une entreprise globale de libération humaine. Face à la boucherie de la guerre de 1914-1918, menée au nom d'un rationalisme occidental dévoyé et d'un nationalisme mortifère, la jeunesse intellectuelle entre en dissidence radicale. D'abord tentés par la négation absolue du mouvement Dada mené par Tristan Tzara, Breton, Aragon, Éluard et Soupault choisissent de reconstruire une esthétique nouvelle fondée sur la souveraineté du rêve, l'exploration de l'inconscient théorisée par Sigmund Freud et le pouvoir magique du langage poétique. En proclamant le primat du désir sur la contrainte sociale et du merveilleux sur le réalisme mesquin, le surréalisme offre une arme subversive d'une portée universelle qui fécondera puissamment les poètes de la Négritude, notamment Aimé Césaire.

I. CONTEXTE HISTORIQUE ET PHILOSOPHIQUE : LA CRISE DE LA RAISON OCCIDENTALE
1. Le traumatisme sanglant de 1914-1918 et la faillite morale de l'Occident :
La Première Guerre mondiale a anéanti le mythe du progrès continu et de la suprématie morale de la civilisation occidentale. Les tranchées, l'usage des gaz asphyxiants et le massacre de millions de jeunes hommes révèlent le visage terrifiant d'une société bourgeoise où la raison technique sert l'anéantissement de l'homme. Les artistes refusent désormais de pactiser avec cet ordre mortifère.
2. De la négation dadaïste à la reconstruction surréaliste :
Le mouvement Dada (1916), né à Zurich sous la houlette de Tristan Tzara, répondait à l'absurdité du monde par la dérision sauvage, la destruction systématique des règles de la syntaxe et le scandale. Mais cette table rase ne pouvait suffire. André Breton et ses compagnons éprouvent la nécessité de dépasser le nihilisme pur pour forger une méthode constructive capable d'élargir le champ de la perception humaine.
3. L'apport fondamental de la psychanalyse freudienne :
La découverte des théories de Freud sur l'inconscient, le refoulement et l'interprétation des rêves fournit au surréalisme son soubassement théorique. L'esprit humain n'est pas réductible à la pensée logique vigilante ; il recèle des gouffres inexplorés où dorment le désir, l'angoisse et la véritable liberté créatrice.

II. LES FONDEMENTS THÉORIQUES DU MANIFESTE DE 1924 ET LES PRATIQUES CRÉATRICES
1. La définition canonique de l'automatisme psychique pur :
Dans le Manifeste du surréalisme (1924), André Breton formule une définition devenue historique : « SURRÉALISME, n. m. Automatisme psychique pur par lequel on se propose d'exprimer, soit verbalement, soit par écrit, soit de toute autre manière, le fonctionnement réel de la pensée. Dictée de la pensée, en l'absence de tout contrôle exercé par la raison, en dehors de toute préoccupation esthétique ou morale. »
2. L'écriture automatique et les jeux collectifs :
Dans Les Champs magnétiques (1919), écrit à quatre mains par Breton et Soupault, l'écriture automatique est expérimentée pour la première fois. Il s'agit d'écrire à la vitesse de l'éclair, sans ratures ni repentirs, pour laisser jaillir les associations verbales spontanées de l'inconscient. S'y ajoutent les récits de rêves, les états hypnotiques et les jeux collectifs comme le « cadavre exquis » (qui donna la phrase célèbre : « Le cadavre-exquis-boira-le-vin-nouveau »).
3. La théorie de l'image surréaliste :
S'inspirant de Pierre Reverdy, Breton affirme que l'image poétique est d'autant plus puissante qu'elle rapproche deux réalités éloignées : « Plus les rapports des deux réalités rapprochées seront lointains et justes, plus l'image sera forte — plus elle aura de puissance émotive et de réalité poétique. » Le télescopage d'univers hétérogènes fait naître une étincelle de beauté fulgurante qui désarçonne la logique ordinaire.

III. LES GRANDES VOIX POÉTIQUES DU SURRÉALISME
1. Paul Éluard : La poésie de l'amour fou et la résistance fraternelle
Dans Capitale de la douleur (1926) puis L'Amour la poésie (1929), Paul Éluard célèbre la femme aimée (Gala, Nusch) comme médiatrice cosmique et source de communion avec l'univers : « La terre est bleue comme une orange / Jamais une erreur les mots ne mentent pas ». Durant l'Occupation nazie, son célèbre poème « Liberté » (1942) prouve que l'audace surréaliste sait se muer en chant de ralliement politique contre la tyrannie.
2. Louis Aragon : Du feu des images au chant national
Brillant styliste du Mouvement, auteur du recueil Le Mouvement perpétuel (1926) et de Traité du style (1928), Aragon rompra plus tard avec Breton pour embrasser le réalisme socialiste, tout en réinventant une poésie de contrebande virtuose dans Les Yeux d'Elsa (1942).
3. Robert Desnos et Benjamin Péret :
Desnos, le « virtuose du sommeil hypnotique », explore la liberté absolue du verbe dans Corps et biens (1930), tandis que Benjamin Péret incarne l'intransigeance libertaire et le refus de tout compromis clérical ou militariste.

IV. LE SURRÉALISME ET LA NÉGRITUDE : LA RENCONTRE DÉCISIVE ENTRE BRETON ET CÉSAIRE
1. La découverte de Tropiques en Martinique (1941) :
Fuyant le régime de Vichy en route vers l'Amérique, André Breton fait escale en Martinique en 1941. Il y découvre par hasard la revue Tropiques animée par Aimé Césaire, Suzanne Césaire et René Ménil. Ébloui par la puissance incandescente du Cahier d'un retour au pays natal, Breton qualifie Césaire de « grand poète noir » et préface le Cahier sous le titre éclatant : « Un grand poète noir : Aimé Césaire ».
2. Le surréalisme comme « arme miraculeuse » de décolonisation :
Pour Aimé Césaire, le surréalisme n'est pas une fin en soi, mais un levier de libération culturelle. Il permet de dynamiter la syntaxe française classique imposée par le colonisateur pour y injecter le rythme, les mythes, la sève et la révolte du monde noir. Comme l'affirmera Césaire : « Le surréalisme a été pour moi une arme miraculeuse, qui m'a permis de faire sauter la gangue de la langue française pour retrouver le fond noir de mon être. »

V. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation : Le surréalisme fournit des arguments massifs pour les sujets portant sur :
  - La poésie comme rupture contre l'académisme et les règles figées ;
  - Le langage poétique comme création d'une réalité supérieure plutôt que simple reflet documentaire du réel ;
  - L'engagement du poète : comment une écriture du rêve peut aboutir à la résistance politique et à la décolonisation.
• En commentaire composé : Reconnaître les procédés clés : juxtaposition d'images hétéroclites, ruptures syntaxiques, anaphores incantatoires, suppression de la ponctuation, polysémie et oxymores fulgurants.

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Le surréalisme aura profondément transfiguré le paysage littéraire du XXe siècle. En dynamitant les frontières entre rêve et veille, en érigeant le désir et l'inconscient en moteurs de création et en offrant aux peuples opprimés un formidable instrument d'insoumission linguistique, il a démontré que transformer le langage était inséparable de la volonté de « changer la vie » (Rimbaud) et de « transformer le monde » (Marx).`,
  sections: [
    {
      title: 'I. Contexte historique et philosophique : La crise de la raison occidentale',
      content: `1. Faillite morale de 14-18 : la Grande Guerre démasque les mensonges du patriotisme cocardier et l\'instrumentalisation technique de la science au service du massacre de masse.
2. La trajectoire de Dada au surréalisme : après la table rase et le nihilisme jubilatoire de Tristan Tzara, André Breton théorise une recherche féconde d\'un nouvel univers spirituel.
3. L\'influence de Sigmund Freud : légitimation scientifique de l\'inconscient, des pulsions refoulées et du monde onirique comme sources capitales de la créativité humaine.`
    },
    {
      title: 'II. Principes doctrinaux du Manifeste de 1924 et pratiques d\'écriture',
      content: `1. Définition canonique de l\'automatisme psychique pur : dictée spontanée de la pensée affranchie de la censure rationnelle, morale ou esthétique.
2. Pratiques de laboratoire : écriture automatique (Les Champs magnétiques), exploration des états de transe, jeu du cadavre exquis et récits de rêves éveillés.
3. La théorie de l\'image : rejet de la comparaison plate ; l\'image jaillit du télescopage saisissant de deux réalités très éloignées (Pierre Reverdy, André Breton).`
    },
    {
      title: 'III. Les poètes majeurs et leurs chefs-d\'œuvre',
      content: `• Paul Éluard : Capitale de la douleur (1926), fusion de l\'amour fou et du regard visionnaire, puis chant patriotique et universel de la Résistance avec « Liberté » (1942).
• Louis Aragon : Le Mouvement perpétuel, la virtuosité des images urbaines et l\'inventivité stylistique du Traité du style (1928).
• Robert Desnos : Corps et biens (1930), maîtrise vertigineuse des associations verbales et poésie populaire libérée des conventions académiques.`
    },
    {
      title: 'IV. La rencontre historique avec la Négritude d\'Aimé Césaire',
      content: `1. La découverte de Fort-de-France en 1941 : André Breton salue en Aimé Césaire « un grand poète noir » et consacre la revue Tropiques comme le foyer ardent de la dissidence poétique caribéenne.
2. Le surréalisme comme « arme miraculeuse » : Césaire s\'approprie la désinhibition surréaliste pour briser la camisole de force coloniale et faire émerger le cri, la révolte et la fierté nègre.
3. Transmutation du langage colonial : le poète noir retourne la langue de l\'oppresseur contre lui-même pour en faire le réceptacle d\'une mémoire ancestrale révoltée.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Sujets de dissertation fréquents : « La poésie est-elle une fuite hors du monde ou une prise directe sur le réel ? », « Les mots poétiques servent-ils à décrire ou à inventer ? ».
• Clés du commentaire littéraire : analyser les métaphores disjonctives, la disparition de la ponctuation, le rythme incantatoire et la tension entre hermétisme et illumination.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Le surréalisme reste la matrice de toute la modernité poétique. En conjuguant la libération de l\'inconscient avec l\'exigence d\'une rébellion totale contre l\'ordre oppresseur, il a redonné au poète sa stature d\'alchimiste du verbe et d\'éclaireur des consciences en lutte.`
    }
  ]
};

export const LESSON_2_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-2',
  number: 'LEÇON 2',
  title: 'LA NÉGRITUDE : GENÈSE HISTORIQUE, CONTEXTE DE L\'ENTRE-DEUX-GUERRES ET COMBAT ÉMANCIPATEUR',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 1 • Poésie du XXe Siècle & Négritude',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Contexte colonial d\'oppression, le Paris cosmopolite des années 1930, rôle de la Revue du Monde Noir et de Légitime Défense, naissance de L\'Étudiant noir (1934-1935), le trio fondateur Senghor-Césaire-Damas, refus catégorique de l\'assimilation.',
  image: {
    caption: 'Figure T1.2 : Les affluents majeurs de la Négritude — Du refus colonial à l\'affirmation culturelle',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="negGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b45309" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#negGrad)" stroke="#d97706" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">LES RACINES HISTORIQUES &amp; INTELLECTUELLES DE LA NÉGRITUDE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">1. Précurseurs &amp; Influences</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Harlem Renaissance (Hughes)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Revue du Monde Noir (Paulette Nardal)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Légitime Défense (1932 - Léro)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Découverte de l\'Art Nègre</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Éveil de la conscience</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">2. Le Creuset Parisien (1934)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Journal L\'Étudiant noir</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Refus de l\'assimilation aliénante</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Fraternité Afrique-Antilles</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Forger le mot « Négritude »</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Césaire, Senghor, Damas</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">3. Objectifs Fondamentaux</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Réhabiliter l\'histoire africaine</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Assumer pleinement l\'identité nègre</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dénoncer le crime colonial</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Revaloriser les cultures noires</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Dignité &amp; Renaissance</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 2 : LA NÉGRITUDE : GENÈSE HISTORIQUE, CONTEXTE DE L'ENTRE-DEUX-GUERRES ET COMBAT ÉMANCIPATEUR

INTRODUCTION
La Négritude est sans conteste le mouvement littéraire, philosophique et politique le plus marquant de l'histoire du monde noir au XXe siècle. Né à Paris au milieu des années 1930, dans le creuset intellectuel de l'entre-deux-guerres, ce mouvement a été fondé par trois jeunes étudiants issus du domaine colonial français : le Sénégalais Léopold Sédar Senghor, le Martiniquais Aimé Césaire et le Guyanais Léon-Gontran Damas. Face au rouleau compresseur de l'assimilation coloniale, qui prétendait civiliser des peuples décrétés sans histoire ni culture, la Négritude surgit comme un cri de révolte identitaire et une proclamation éclatante de dignité. Forgé par Aimé Césaire dans les colonnes du journal L'Étudiant noir (1935), le terme « Négritude » revendique fièrement un mot jadis utilisé comme une injure (« nègre ») pour en faire l'étendard d'une réhabilitation universelle des civilisations négro-africaines.

I. LES FACTEURS HISTORIQUES ET LE CONTEXTE COLONIAL
1. L'apogée de l'empire colonial et l'idéologie de l'assimilation :
Dans les années 1930, la France célèbre triomphalement son empire lors de l'Exposition coloniale de 1931 à Vincennes. Le système colonial repose sur le mythe de la « mission civilisatrice » et impose aux élites colonisées une politique d'assimilation assimilationniste aliénante. Pour être reconnu comme un citoyen respectable, l'intellectuel noir est contraint d'oublier sa langue, d'effacer ses traditions ancestrales et de blanchir sa conscience afin d'adopter docilement les manières et les schémas mentaux de la métropole.
2. Le traumatisme de l'aliénation culturelle :
Ce processus aboutit à ce que Frantz Fanon analysera plus tard avec acuité dans Peau noire, masques blancs : une déchirure intérieure schizophrénique où l'homme noir intériorise un complexe d'infériorité savamment instillé par les manuels scolaires coloniaux (« Nos ancêtres les Gaulois »). L'étudiant africain ou caribéen à Paris prend conscience de cette dépersonnalisation insupportable : il est assimilé, mais jamais pleinement égal.

II. LES COURANTS PRÉCURSEURS ET LE CREUSET PARISIEN
1. La Renaissance de Harlem et les voix afro-américaines :
Dès les années 1920 aux États-Unis, des écrivains comme Langston Hughes, Claude McKay, Countee Cullen et Jean Toomer avaient lancé le mouvement de la « Negro Renaissance » (Harlem Renaissance). Ils affirmaient avec orgueil : « I am a Negro — and I am beautiful ». Senghor, Césaire et Damas lisent avidement ces textes traduits en français, qui leur prouvent qu'une littérature nègre moderne et puissante est possible.
2. Le salon des sœurs Nardal et La Revue du Monde Noir (1931-1932) :
À Clamart, les sœurs martiniquaises Paulette et Jeanne Nardal tiennent un salon littéraire où se rencontrent des intellectuels africains, antillais et afro-américains. C'est là que paraît La Revue du Monde Noir, qui théorise pour la première fois la solidarité pan-noire par-delà les frontières géographiques.
3. Le coup d'éclat de Légitime Défense (1932) :
Fondée par de jeunes étudiants antillais d'inspiration communiste et surréaliste conduits par Étienne Léro, René Ménil et Jules Monnerot, la revue Légitime Défense publie un manifeste incendiaire. Elle accuse la bourgeoisie martiniquaise de singerie servile et réclame l'utilisation conjointe du marxisme révolutionnaire et de l'insoumission poétique surréaliste.

III. LA NAISSANCE DE L'ÉTUDIANT NOIR (1934-1935) ET L'ACTE DE FONDATION
1. La création de L'Étudiant noir :
Trouvant Légitime Défense trop exclusivement marxiste et trop centrée sur la Martinique, Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas fondent en 1934-1935 le journal associatif L'Étudiant noir.
2. Le refus de la parcellisation géographique et le refus de l'assimilation :
La grande innovation de L'Étudiant noir est de rassembler dans un même élan fraternel les étudiants venus de toute l'Afrique noire et des Caraïbes. Comme l'écrira Senghor, il s'agissait de dépasser les querelles de clocher pour affirmer : « Nous étions noirs avant d'être sénégalais, martiniquais ou guyanais. »
3. Le baptême de la Négritude par Aimé Césaire :
C'est sous la plume d'Aimé Césaire que le vocable « Négritude » apparaît pour la toute première fois à l'écrit, dans un article de 1935 : « La jeunesse noire veut agir et créer. Elle veut avoir ses poètes, ses romanciers qui lui diront à elle ses malheurs à elle et ses grandeurs à elle ; elle veut contribuer à la vie universelle, à l'humanisation de l'humanité ; et pour cela, il faut qu'elle se préserve, c'est-à-dire qu'elle s'exprime. C'est la Négritude. »

IV. LES TROIS FIGURES PIONNIÈRES ET LEURS ATTITUDES ESTHÉTIQUES
1. Léon-Gontran Damas : Le cri révolté et l'ironie cinglante
Premier à publier un recueil de Négritude avec Pigments (1937), Damas exprime le refus épidermique du blanchiment culturel. Dans son poème emblématique « Hoquet », il raille l'injonction maternelle bourgeoise : « Taisez-vous / Vous ai-je dit ou non qu'il vous fallait parler français / Le français de France / Le français du français / Le français français ». Rythme syncopé du jazz, syntaxe brisée, Damas oppose une rage salutaire à la comédie coloniale.
2. Léopold Sédar Senghor : L'enracinement et le dialogue des cultures
Pour Senghor, la Négritude est la redécouverte passionnée des valeurs de civilisation du monde noir (la communion avec la nature, le rythme vital, le sens communautaire, la spiritualité animiste). Normalien et agrégé de grammaire, Senghor utilise la langue française comme un instrument magistral pour chanter la beauté des terres sérères de Joal et célébrer l'Afrique millénaire.
3. Aimé Césaire : La foudre verbale et le chant tellurique
Avec Cahier d'un retour au pays natal (1939), Césaire fustige l'hypocrisie occidentale et chante la dignité des damnés de la terre : « Ma négritude n'est pas une pierre, sa surdité ruée contre le clameur du jour / ma négritude n'est pas une taie d'eau morte sur l'œil mort de la terre / ma négritude n'est ni tour ni cathédrale / elle plonge dans la chair rouge du sol ».

V. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Maîtriser parfaitement le contexte historique permet d'éclairer la dialectique entre littérature et identité :
  - La littérature comme prise de parole des peuples dominés ;
  - Le dépassement du sentiment de honte coloniale par la création esthétique ;
  - L'utilisation subversive de la langue de l'Autre pour proclamer son Soi authentique.
• En commentaire composé : Analyser la polyphonie des voix (la douleur, le sarcasme, l'incantation lyrique), les métaphores végétales et telluriques (arbres, fleuves, sang, terre) et les anaphores revendicatives.

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La genèse de la Négritude représente un tournant copernicien dans les lettres francophones. En transmuant l'insulte en fierté et en déchirant le voile de l'amnésie coloniale, Césaire, Senghor et Damas ont accompli un geste de salut intellectuel. Ils ont redonné au monde noir sa souveraineté symbolique et démontré que l'émancipation commence par la reconquête de l'imaginaire.`,
  sections: [
    {
      title: 'I. Le contexte colonial des années 1930 et le drame de l\'assimilation',
      content: `1. L\'Exposition coloniale de 1931 : apothéose de la propagande impérialiste française et réification des peuples indigènes.
2. La doctrine de l\'assimilation : stratégie d\'acculturation visant à extirper chez l\'élite colonisée tout lien vivant avec ses langues et mémoires d\'origine.
3. L\'aliénation culturelle : Frantz Fanon théorisera cette dépossession où l\'homme noir porte un masque blanc pour complaire à l\'ordre colonial.`
    },
    {
      title: 'II. Les affluents précurseurs : Harlem, Nardal et Légitime Défense',
      content: `1. La Harlem Renaissance (New Negro) : Langston Hughes et Claude McKay démontrent la force esthétique de la fierté raciale assumée.
2. Le salon de Clamart et La Revue du Monde Noir (1931) : Paulette Nardal fédère la première diaspora intellectuelle noire à Paris.
3. Légitime Défense (1932) : Étienne Léro et ses camarades unissent marxisme et surréalisme pour conspuer la servilité bourgeoise antillaise.`
    },
    {
      title: 'III. L\'avènement de L\'Étudiant noir et la théorisation de la Négritude',
      content: `1. Fondation en 1934-1935 : dépassement des clivages territoriaux au profit d\'une solidarité panafricaine et caribéenne indéfectible.
2. Invention du concept : Aimé Césaire forge le mot « Négritude » pour métamorphoser le stigmate méprisant de « nègre » en titre de gloire.
3. Programme d\'action : refuser l\'assimilation, réhabiliter le patrimoine culturel négro-africain et apporter sa contribution originale à la civilisation universelle.`
    },
    {
      title: 'IV. Les pères fondateurs : trois sensibilités complémentaires',
      content: `• Léon-Gontran Damas : Pigments (1937), satire virulente de l\'aliénation bourgeoise, musicalité syncopée du jazz et révolte brute.
• Léopold Sédar Senghor : enracinement culturel dans les terroirs d\'Afrique, communion cosmique et théorisation humaniste des valeurs noires.
• Aimé Césaire : Cahier d\'un retour au pays natal (1939), verbe flamboyant, volcanisme poétique et solidarité charnelle avec tous les opprimés.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Mobilisation en dissertation : illustrer le lien consubstantiel entre création littéraire et libération politique ; argumenter sur le pouvoir des mots face à l\'oppression coloniale.
• Analyse en commentaire composé : étudier les figures d\'énonciation (le passage du « Je » au « Nous »), les images de déracinement et la renaissance tellurique.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `La naissance de la Négritude dans l\'entre-deux-guerres constitue l\'acte de naissance de la conscience politique et poétique noire moderne. En refusant l\'effacement, ses fondateurs ont préparé les batailles décisives de la décolonisation.`
    }
  ]
};

export const LESSON_3_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-3',
  number: 'LEÇON 3',
  title: 'LA POÉTIQUE DE LA NÉGRITUDE : RYTHME, MYTHES ANCESTRAUX ET DIALOGUE UNIVERSEL',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 1 • Poésie du XXe Siècle & Négritude',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Esthétique comparée de Senghor et Césaire : le rythme cosmique et les instruments traditionnels (kora, balafon), la célébration de la Femme Noire, le culte des Ancêtres, la métaphore du volcan et la théorie senghorienne de la Civilisation de l\'Universel.',
  image: {
    caption: 'Figure T1.3 : La double polarité poétique de la Négritude — Du cri césairien au chant senghorien',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="poetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#poetGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#065f46" text-anchor="middle">LA POÉTIQUE DE LA NÉGRITUDE : ESTHÉTIQUE &amp; SYMBOLES</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">1. Le Chant Senghorien</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Le Rythme : « l\'architecture de l\'être »</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Instruments : kora, balafon, tama</text>
        <text x="14" y="96" font-size="11" fill="#374151">• « Femme noire », Mère Afrique</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Les Manes des Ancêtres</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Harmonie &amp; Universalisme</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">2. Le Cri Césairien</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Le volcan &amp; la lave en fusion</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Rythme incantatoire &amp; furieux</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dénonciation du passé esclavagiste</text>
        <text x="14" y="118" font-size="11" fill="#374151">• L\'arbre érigé : la verticalité</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Révolte tellurique &amp; Brisure</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">3. L\'Idéal Humaniste</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Enracinement &amp; Ouverture</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Métissage culturel bien compris</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Le banquet de l\'Universel</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Donner et recevoir sans s\'aliéner</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Humanisme intégral</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 3 : LA POÉTIQUE DE LA NÉGRITUDE : RYTHME, MYTHES ANCESTRAUX ET DIALOGUE UNIVERSEL

INTRODUCTION
Si la Négritude est née d'un sursaut politique et moral face à l'oppression coloniale, elle s'est incarnée avant tout dans une révolution formelle et poétique d'une exceptionnelle grandeur. Pour exprimer l'âme noire, il ne suffisait pas de dénoncer l'injustice dans la langue du colonisateur : il fallait refonder l'acte poétique lui-même, lui insuffler une scansion inédite, faire vibrer les mythes de la terre africaine et réconcilier le verbe avec le corps, la musique et le cosmos. À travers les œuvres majeures de Léopold Sédar Senghor (Chants d'ombre, Hosties noires, Éthiopiques) et d'Aimé Césaire (Cahier d'un retour au pays natal, Les Armes miraculeuses, Ferrements), la Négritude déploie une esthétique singulière où le vers se fait incantation, foudre ou cantique, ouvrant la voie à une redéfinition humaniste de l'Universel.

I. LA CONCEPTION SENGHORIENNE DU RYTHME ET DE LA PAROLE SACRÉE
1. Le rythme comme « architecture de l'être » :
Pour Léopold Sédar Senghor, le rythme est le principe vital par excellence qui organise le monde noir. Il l'écrit avec force dans Liberté 1 : « Le rythme, c'est l'architecture de l'être, le dynamisme interne qui lui donne forme, le système d'ondes qu'il émet à l'intention des Autres, l'expression pure de la force vitale. » Chez Senghor, le rythme n'est pas un artifice métrique extérieur, mais une pulsation charnelle et cosmique qui réaccorde l'homme aux énergies de l'univers.
2. L'accompagnement des instruments traditionnels africains :
Fait inédit dans la poésie de langue française, Senghor indique en exergue de ses poèmes les instruments de musique traditionnels destinés à soutenir la déclamation : kora, balafon, tama, khalam. Dans « Chaka » (Éthiopiques), le poème dramatique est scandé par le dialogue entre les cors et les tambours royaux, rendant à la poésie sa nature originelle de chant cérémoniel et de fête collective.
3. La syntaxe du parallélisme et de l'anaphore incantatoire :
La poétique senghorienne emprunte aux griots et aux hymnes sacerdotaux sérères et wolofs les figures de la répétition majestueuse, des apostrophes lyriques et des parallélismes de construction, conférant au verset une ampleur biblique et liturgique.

II. LES GRANDS MYTHES ET SYMBOLES DU MONDE NOIR
1. La célébration de la Femme Noire et la Mère-Terre :
Dans le poème célébrissime « Femme noire » (Chants d'ombre, 1945), la beauté de la femme africaine est chantée dans sa plénitude plastique et sacrée : « Femme nue, femme noire / Vêtue de ta couleur qui est vie, de ta forme qui est beauté ! / J'ai grandi à ton ombre ; la douceur de tes mains bandait mes yeux. » La femme devient l'allégorie de l'Afrique elle-même, matrice nourricière, refuge protecteur et promesse d'éternité face aux blessures de l'Histoire.
2. Le culte des Ancêtres et la communion des vivants et des morts :
Dans « Prière aux Masques » ou « Nuit de Sine », Senghor invoque les Manes protecteurs qui veillent sur la communauté : « Écoute la voix des Anciens d'Élissa. Comme nous exilés / Ils n'ont pas voulu mourir, que ne se perdît par les sables leur semence séminale. » La frontière occidentale entre la vie et la mort s'abolit dans une ontologie vitaliste où les disparus continuent de guider les pas des vivants.
3. L'arbre comme totem de l'enracinement :
Le baobab séculaire, le fromager ou le palmier symbolisent la résistance inébranlable du peuple africain. Ancré profondément dans la terre des ancêtres par ses racines puissantes, l'arbre dresse sa ramure vers le ciel pour capter la lumière, figurant l'équilibre parfait entre tradition et aspiration spirituelle.

III. LA FOUDROIEMENT ESTHÉTIQUE D'AIMÉ CÉSAIRE
1. Le volcanisme césairien et la poétique de la rupture :
Tandis que Senghor privilégie la mélodie harmonieuse et la réconciliation apaisée, Césaire déploie une poétique de l'éruption et du séisme. Son écriture est traversée par des métaphores volcaniques (la Montagne Pelée, la lave, le magma). Le poète est un cratère en furie qui crache le feu de la révolte contre la léthargie servile de sa terre natale : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir. »
2. Le démantèlement de la rhétorique classique :
Césaire triture la syntaxe française, invente des néologismes féroces, use d'allitérations heurtées et de rythmes syncopés qui rappellent le tambour bélé des Antilles. La poésie n'est pas un ornement décoratif, mais une déchirure révélatrice de la vérité historique des esclaves déportés.

IV. L'ENRACINEMENT ET LA « CIVILISATION DE L'UNIVERSEL »
1. Le dépassement du repliement identitaire :
Ni Senghor ni Césaire n'ont conçu la Négritude comme un ghetto racialiste ou un rejet xénophobe de l'Autre. Dans le Cahier, Césaire prévient solennellement : « Préservez-moi de toute haine / mon cœur, ne faites point de moi cet homme de haine pour qui je n'ai que haine [...] vous savez que ce n'est point par haine des autres races / que je me fais l'arpenteur de cette unique race ».
2. Le « Rendez-vous du donner et du recevoir » :
Senghor forge le concept lumineux de la « Civilisation de l'Universel ». Selon lui, chaque civilisation apporte sa pierre irremplaçable au banquet commun de l'humanité : l'Europe apporte sa raison discursive, sa technique et sa rigueur scientifique ; l'Afrique apporte son sens du sacré, son génie du rythme, sa sensibilité intuitive et son amour de la communauté vivante. Pour que ce dialogue soit fécond, l'homme noir doit d'abord « s'enraciner » dans ses propres valeurs avant de « s'ouvrir » aux apports fécondants de l'extérieur.

V. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation : La poétique de la Négritude est incontournable pour traiter :
  - La dialectique entre la forme poétique et le message philosophique ;
  - La langue française comme butin de guerre et vecteur d'émancipation universelle ;
  - Le débat entre identité fermée et métissage culturel harmonieux.
• En commentaire composé : Savoir relever et analyser le champ lexical de la corporéité et du cosmos, les allitérations imitant les percussions, les structures binaires ou ternaires du rythme incantatoire, et la métaphore filée de l'arbre et du fleuve.

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La poétique de la Négritude a accompli un prodige : faire d'une souffrance séculaire le terreau d'une prodigieuse moisson lyrique. En hybridant la langue française avec les rythmes, les cosmogonies et les mélodies de l'Afrique et des Antilles, Senghor et Césaire ont offert à la littérature mondiale des chefs-d'œuvre immortels qui continuent de proclamer la fraternité sacrée des cultures humaines.`,
  sections: [
    {
      title: 'I. La métrique vitale de Senghor : Le rythme et l\'incantation',
      content: `1. Ontologie du rythme : « L\'architecture de l\'être » ; le rythme comme onde vitale reliant l\'homme au cosmos.
2. Orchestration musicale : intégration explicite des instruments ancestraux (kora, balafon, tama) pour restituer au verbe sa fonction chantée et cérémonielle.
3. Rhétorique liturgique : parallélismes symétriques, anaphores solennelles et verset ample inspiré des traditions orales négro-africaines.`
    },
    {
      title: 'II. Panthéon symbolique et mythologique de la Négritude',
      content: `1. « Femme noire » : fusion plastique et mystique de la beauté féminine et de la terre-mère africaine (protection, fertilité, pérennité).
2. Communion ancestrale : culte des Manes (« Prière aux Masques ») ; présence agissante des morts dans la vie quotidienne de la cité.
3. Végétalité et cosmos : le baobab et le fromager incarnent l\'enracinement inaltérable face aux tempêtes de l\'Histoire.`
    },
    {
      title: 'III. L\'esthétique césairienne du séisme et de la révolte tellurique',
      content: `1. Le volcanisme verbal : lave, cratère, embrasement ; la poésie comme déflagration destructrice des chaînes coloniales.
2. Démantèlement de l\'académisme : néologismes, audaces prosodiques, fracas allitératif rappelant les percussions caribéennes.
3. Mission prophétique : être « la bouche des malheurs qui n\'ont point de bouche » pour réveiller la dignité des peuples asservis.`
    },
    {
      title: 'IV. La Civilisation de l\'Universel : Enracinement et métissage',
      content: `1. Refus du ghetto racial : la Négritude récuse le racisme inversé et refuse tout repli sectaire ou haineux.
2. Le concept senghorien de l\'Universel : carrefour harmonieux où chaque civilisation apporte ses richesses propres sans aliéner sa singularité.
3. Équilibre vital : « s\'enraciner » d\'abord dans son humus originel pour pouvoir « s\'ouvrir » sans péril aux apports de l\'Autre.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : analyser comment la langue de l\'oppresseur devient l\'instrument de la libération culturelle et spirituelle.
• Commentaire : traquer la pulsation rythmique, les isotopies cosmiques et telluriques, la tonalité élégiaque ou oratoire, et la dynamique ascensionnelle du vers.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `La poétique de la Négritude a renouvelé de fond en comble le lyrisme francophone. En élevant l\'Afrique au rang de sujet créateur et universel, elle a légué un chant intemporel d\'espérance et d\'affirmation humaine.`
    }
  ]
};

export const LESSON_4_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-4',
  number: 'LEÇON 4',
  title: 'ÉVOLUTION, DÉBATS ET CRITIQUES DE LA NÉGRITUDE : DE LA CONTESTATION À LA CRÉOLITÉ',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 1 • Poésie du XXe Siècle & Négritude',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Les contestations internes et externes du concept de Négritude : le mot d\'esprit de Wole Soyinka (« tigritude »), le pamphlet de Stanislas Adotevi (Négrologie), les critiques marxistes (Marcien Towa, René Depestre), et le dépassement par l\'Antillanité d\'Édouard Glissant et la Créolité (Chamoiseau, Confiant).',
  image: {
    caption: 'Figure T1.4 : L\'arbre des débats et métamorphoses critiques de la Négritude',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="debGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#ea580c" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#debGrad)" stroke="#ea580c" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7c2d12" text-anchor="middle">LES DÉBATS CRITIQUES &amp; LE DÉPASSEMENT DE LA NÉGRITUDE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">1. Critiques Africaines</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Wole Soyinka : « La Tigritude »</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Stanislas Adotevi : Négrologie</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Marcien Towa : Illusion passéiste</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Risque d\'essentialisme racial</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Exigence d\'action concrète</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">2. Critiques Marxistes &amp; Tiers</text>
        <text x="14" y="52" font-size="11" fill="#374151">• René Depestre : Bonjour et adieu</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Frantz Fanon : Les Damnés</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Jean-Paul Sartre : « Orphée noir »</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Moment dialectique transitoire</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Priorité à la lutte de classe</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">3. Antillanité &amp; Créolité</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Édouard Glissant : Tout-Monde</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Éloge de la Créolité (1989)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Chamoiseau, Confiant, Bernabé</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Identité-rhizome vs racine unique</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Diversité du monde créole</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 4 : ÉVOLUTION, DÉBATS ET CRITIQUES DE LA NÉGRITUDE : DE LA CONTESTATION À LA CRÉOLITÉ

INTRODUCTION
Glorifiée comme le chant d'éveil et le bouclier identitaire du monde noir face au rouleau compresseur colonial, la Négritude a toutefois suscité de vifs débats, des polémiques passionnées et des remises en cause radicales à mesure que soufflaient les vents des indépendances africaines. Dès les années 1960, une nouvelle génération d'écrivains, de philosophes et de dramaturges africains et caribéens reproche au mouvement son abstraction lyrique, son passéisme mythologique et le risque d'un essentialisme qui enfermerait l'homme noir dans une « essence » figée. De la formule percutante du Nigérian Wole Soyinka (« Le tigre ne proclame pas sa tigritude ») au réquisitoire féroce du Béninois Stanislas Adotevi (Négrologie), en passant par les critiques marxistes de René Depestre et l'avènement caribéen de la Créolité portée par Édouard Glissant, Patrick Chamoiseau et Raphaël Confiant, l'histoire critique de la Négritude éclaire la permanente vitalité intellectuelle du monde noir.

I. LA CRITIQUE DU PRAGMATISME ANGLOPHONE : WOLE SOYINKA ET LA « TIGRITUDE »
1. Le célèbre bon mot de 1962 à Kampala :
Lors de la Conférence des écrivains africains de langue anglaise à l'Université de Makerere à Kampala en 1962, le futur prix Nobel nigérian Wole Soyinka lance une sentence devenue légendaire : « Un tigre ne proclame pas sa tigritude, il saute sur sa proie et la dévore. »
2. La dénonciation du narcissisme contemplatif :
Par cette métaphore animale percutante, Soyinka reproche aux chantres de la Négritude francophone de s'enfermer dans un verbiage narcissique et une célébration théorique stérile de la couleur de peau. Pour les intellectuels anglophones, formés sous le régime britannique de l'Indirect Rule (où les cultures locales n'avaient pas subi la même politique d'assimilation linguistique directe qu'en zone française), l'affirmation identitaire va de soi : elle doit se manifester par des actes concrets de souveraineté politique, économique et scientifique, plutôt que par des élégies nostalgiques.

II. LES REQUISITOIRES PHILOSOPHIQUES ET MARXISTES EN AFRIQUE
1. Stanislas Adotevi et Négrologie (1972) :
Dans son pamphlet retentissant Négrologie : sénghorienne et sous-développement, le philosophe béninois Stanislas Adotevi attaque frontalement la Négritude de Senghor. Il l'accuse d'être devenue une idéologie d'État réactionnaire servant à masquer les faillites économiques et l'autoritarisme des régimes post-coloniaux : « La Négritude est le baume des vaincus, l'opium des peuples noirs. Elle chante la danse et le rythme pendant que l'Afrique a besoin d'usines, de barrages et d'écoles. »
2. Marcien Towa et l'illusion passéiste :
Dans Léopold Sédar Senghor : Négritude ou Servitude ? (1971), le philosophe camerounais Marcien Towa fustige la distinction senghorienne célèbre (« L'émotion est nègre, comme la raison hellène »). Towa démontre qu'en abandonnant le monopole de la raison discursive et scientifique à l'Occident, la Négritude valide inconsciemment les stéréotypes les plus racistes de l'ethnologie coloniale (Lévy-Bruhl) et désarme l'Afrique dans la compétition technologique moderne.
3. Frantz Fanon et René Depestre : L'urgence de la lutte révolutionnaire
Dans Les Damnés de la terre (1961), Frantz Fanon met en garde contre la sacralisation muséale du passé précolonial. Pour Fanon, la culture nationale authentique ne se cherche pas dans des coutumes périfiées, mais s'invente dans le feu vivant de la lutte de libération populaire. De même, l'Haïtien René Depestre (Bonjour et adieu à la négritude, 1980) dénonce la dérive folklorique et réclame une solidarité fondée sur les luttes sociales et de classe.

III. L'ANALYSE SARTRIENNE D'« ORPHÉE NOIR » : UNE ÉTAPE DIALECTIQUE NÉCESSAIRE MAIS TRANSITOIRE
1. La préface d'Anthologie de la nouvelle poésie nègre et malgache (1948) :
Dans son essai magistral « Orphée noir », Jean-Paul Sartre applique la dialectique hégélienne à la Négritude. Il la définit comme un « racisme antiraciste », c'est-à-dire une antithèse nécessaire pour briser la thèse de la suprématie blanche, mais appelée à s'auto-dépasser dans la synthèse finale d'une société sans races et sans classes : « La négritude est pour se détruire, elle est passage et non aboutissement, moyen et non fin dernière. »
2. La résistance des poètes noirs à la dissolution sartrienne :
Si Senghor et Césaire ont salué la brillance philosophique de Sartre, ils ont récusé l'idée que leur être culturel ne fût qu'une simple parenthèse transitoire vouée à disparaître dès la fin du combat politique. La culture noire possède une épaisseur historique et esthétique autonome qui transcende la contingence coloniale.

IV. LE DÉPASSEMENT CARIBÉEN : DE L'ANTILLANITÉ À LA CRÉOLITÉ
1. Édouard Glissant et l'Antillanité :
Dès les années 1970 (Le Discours antillais, 1981), l'écrivain martiniquais Édouard Glissant prend acte de la spécificité historique de la Caraïbe. L'Antillais ne peut pas simplement mimer un retour imaginaire en Afrique, car la déportation et la cale du négrier ont créé une rupture irréversible. Glissant théorise la « Relation », le « Tout-Monde » et l'identité-rhizome, opposée à l'identité-racine exclusive.
2. Le manifeste de la Créolité (1989) :
Dans Éloge de la Créolité, Jean Bernabé, Patrick Chamoiseau et Raphaël Confiant saluent avec respect l'apport inaugural de Césaire (« Nous sommes à jamais les fils de Césaire »), tout en constatant les limites d'un regard trop exclusivement tourné vers l'Afrique ancestrale. Ils proclament : « Ni Européens, ni Africains, ni Asiatiques, nous nous proclamons Créoles. » La Créolité célèbre le métissage imprévisible, l'oralité créole, le plurilinguisme et la diversité des peuples forgés dans le chaudron des plantations caribéennes.

V. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Le recul critique sur la Négritude permet d'élaborer des plans dialectiques d'une immense finesse :
  - Thèse : Grandeur, nécessité historique et réhabilitation de la dignité noire par la poésie de la Négritude ;
  - Antithèse : Risques d'enfermement essentialiste, dérives folklorisantes et insuffisance du verbe face aux défis matériels du développement ;
  - Synthèse : Dépassement humaniste par la pensée du métissage, de la relation universelle et de la créativité contemporaine.
• En commentaire composé : Détecter la distance critique ou ironique adoptée par les auteurs post-négritudiens vis-à-vis des clichés héroïques du passé.

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Loin de discréditer la Négritude, les controverses passionnées qui ont entouré son évolution témoignent de sa stature historique monumentale. En servant de matrice et de tremplin intellectuel à toutes les interrogations ultérieures sur l'identité, le panafricanisme et la créolisation du monde, la Négritude a accompli sa mission historique : ouvrir l'espace de la liberté critique où le monde noir pense souverainement son propre devenir.`,
  sections: [
    {
      title: 'I. La contestation pragmatique anglophone : Wole Soyinka et la « tigritude »',
      content: `1. Le mot d\'esprit de Makerere (1962) : « Le tigre ne proclame pas sa tigritude, il saute sur sa proie et la dévore ».
2. Différences de contextes coloniaux : l\'Indirect Rule britannique épargne le traumatisme de l\'assimilation directe subie en sphère francophone.
3. Action concrète vs contemplation lyrique : nécessité de prouver sa grandeur par des réalisations politiques, industrielles et scientifiques plutôt que par des incantations poétiques.`
    },
    {
      title: 'II. Les charges philosophiques et marxistes en Afrique',
      content: `1. Stanislas Adotevi : Négrologie (1972) dénonce la Négritude sénghorienne comme un paravent mystificateur cachant les échecs des jeunes États post-coloniaux.
2. Marcien Towa : Léopold Sédar Senghor : Négritude ou Servitude ? récuse le partage simpliste (« L\'émotion est nègre, la raison hellène ») qui spolie l\'Afrique de l\'outil rationnel.
3. Frantz Fanon et René Depestre : avertissement contre la nostalgie des coutumes momifiées ; seule la lutte révolutionnaire populaire fonde la culture vivante.`
    },
    {
      title: 'III. L\'interprétation sartrienne d\'« Orphée noir »',
      content: `1. Dialectique hégélienne : la Négritude analysée comme antithèse transitoire (« racisme antiraciste ») appelée à disparaître dans la synthèse de l\'universel sans classes.
2. Réaction des poètes : Césaire et Senghor refusent de voir leur identité culturelle réduite à une variable éphémère de la lutte sociopolitique.`
    },
    {
      title: 'IV. Le renouveau caribéen : Antillanité et Créolité',
      content: `1. Édouard Glissant : Le Discours antillais et la poétique de la Relation ; substituer l\'identité-rhizome ouverte à l\'identité-racine unique et figée.
2. Éloge de la Créolité (1989) : Chamoiseau, Confiant et Bernabé assument l\'héritage césairien tout en fondant une esthétique du métissage pluriel et de l\'oralité créole.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Clés de dissertation : construire une réflexion nuancée opposant la nécessité historique fondatrice de la Négritude à la nécessité de dépasser l\'illusion essentialiste.
• Exploitation d\'exemples : confronter les textes de Senghor/Césaire aux répliques de Soyinka, Glissant, Chamoiseau ou Adotevi.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Le dépassement de la Négritude n\'est pas sa négation, mais son épanouissement dialectique. En suscitant ses propres critiques fécondes, elle a permis au monde noir d\'accéder à une conscience lucide, plurielle et souveraine de son destin.`
    }
  ]
};

export const LESSON_5_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-5',
  number: 'LEÇON 5',
  title: 'LE ROMAN COLONIAL ET LA DÉNONCIATION DU SYSTÈME IMPÉRIAL : DE BATOUALA À FERDINAND OYONO',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 2 • Roman Négro-Africain & Roman Moderne',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'La rupture historique du roman Batouala de René Maran (Prix Goncourt 1921), la satire féroce du complexe colonial chez Ferdinand Oyono (Une vie de boy, Le Vieux Nègre et la médaille) et la démystification de l\'entreprise cléricale par Mongo Beti (Le Pauvre Christ de Bomba).',
  image: {
    caption: 'Figure T1.5 : La déconstruction romanesque de l\'édifice colonial (Maran, Oyono, Beti)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="romGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2563eb" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#romGrad)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LA TRILOGIE DU COMBAT ROMANESQUE ANTICOLONIAL</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#60a5fa" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1. René Maran (1921)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Batouala (Prix Goncourt)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Préface incendiaire : le scandale</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dénonciation du travail forcé</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Réalisme sans fard en Oubangui</text>
        <text x="14" y="140" font-size="11" fill="#1d4ed8" font-weight="bold">→ Acte inaugural du roman</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#60a5fa" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. Ferdinand Oyono (1956)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Une vie de boy (Toundi)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Le regard naïf démystificateur</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Le Vieux Nègre et la médaille</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Désillusion cruelle de Meka</text>
        <text x="14" y="140" font-size="11" fill="#1d4ed8" font-weight="bold">→ Satire de l\'intimité coloniale</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#60a5fa" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3. Mongo Beti (1956)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Le Pauvre Christ de Bomba</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Échec tragique du R.P. Drumont</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Complicité Sabre &amp; Goupillon</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Ironie voltairienne africaine</text>
        <text x="14" y="140" font-size="11" fill="#1d4ed8" font-weight="bold">→ Démystification de l\'Église</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 5 : LE ROMAN COLONIAL ET LA DÉNONCIATION DU SYSTÈME IMPÉRIAL : DE BATOUALA À FERDINAND OYONO

INTRODUCTION
Si la poésie de la Négritude a constitué l'arme lyrique de l'émancipation intellectuelle dans les années 1930-1940, c'est le roman qui, au cours des années 1950, prend le relais pour disséquer avec une acuité sociologique et satirique redoutable les rouages concrets du système colonial en Afrique. Né dans le scandale avec la publication en 1921 de Batouala par le Guyanais René Maran — premier roman écrit par un Noir à remporter le prestigieux Prix Goncourt —, le roman négro-africain d'expression française s'affirme comme un procès implacable de la colonisation. Avec des chefs-d'œuvre comme Une vie de boy (1956) et Le Vieux Nègre et la médaille (1956) de Ferdinand Oyono, ou Le Pauvre Christ de Bomba (1956) de Mongo Beti, la fiction romanesque déchire le masque bienveillant de la « mission civilisatrice ». En utilisant le regard faussement ingénu du narrateur, l'ironie dévastatrice et la description crue du quotidien des indigènes asservis, ces romanciers opèrent une démystification magistrale qui ébranle la conscience morale de la métropole.

I. L'ÉLECTROCHOC FONDATUR DE RENÉ MARAN : BATOUALA (1921)
1. Le scandale de la Préface de Batouala :
Fonctionnaire de l'administration coloniale en Oubangui-Chari (actuelle République Centrafricaine), René Maran publie en 1921 Batouala, « véritable roman nègre ». Sa préface constitue une charge d'une violence inouïe contre l'hypocrisie coloniale : « Civilisation, civilisation, orgueil des Européens, et leur charnier d'innocents [...] Tu bâtis ton royaume sur des cadavres. Quoi que tu veuilles, quoi que tu fasses, tu te meus dans le mensonge. »
2. La dénonciation du travail forcé et du portage :
Maran documente la réalité sinistre des corvées de caoutchouc, des portages épuisants où meurent des milliers d'hommes, de femmes et d'enfants sous les coups des gardes chiourmes. Le roman raconte la vie du chef banda Batouala de l'intérieur, dans sa langue, ses fêtes, ses amours et ses croyances, accordant pour la première fois à des Africains le statut de personnages romanesques à part entière sans condescendance folklorique.
3. Les représailles administratives et l'impact historique :
Le tollé suscité à la Chambre des députés par l'attribution du Prix Goncourt à Batouala contraint René Maran à démissionner de ses fonctions administratives. Mais la brèche est ouverte : la littérature de fiction s'impose comme un tribunal incontournable de l'Histoire.

II. FERDINAND OYONO : LA SATIRE DU REGARD INGÉNU ET LA MISE À NU DE L'INTIMITÉ BLANCHE
1. Une vie de boy (1956) et la tragédie de Toundi Ondoua :
Dans Une vie de boy, Ferdinand Oyono choisit la forme du journal intime tenu par Toundi, un jeune indigène camerounais qui fuit son père violent pour se réfugier à la mission catholique avant de devenir le boy du Commandant blanc de Dangan.
2. La technique du regard naïf démystificateur :
Toundi regarde les maîtres blancs avec la naïveté candide d'un enfant qui croit à la perfection morale des Européens. Mais son rôle domestique l'introduit au cœur même de leur intimité : il découvre la lâcheté, l'hypocrisie, la vulgarité et l'adultère de Madame la Commandante. Dès lors que le boy a vu la nudité morale des maîtres, il devient un témoin intolérable pour l'ordre colonial. Faussé accusé de complicité de vol, Toundi est atrocement torturé par la police coloniale et meurt en s'écriant dans un rire amer : « Mon Dieu, Seigneur, qu'est-ce que nous sommes, nous autres nègres ? »
3. Le Vieux Nègre et la médaille (1956) : L'amère désillusion de Meka
Oyono récidive avec la satire tragi-comique du vieux Meka, un patriarche respectueux qui a tout donné à la France (ses terres et ses deux fils morts pour la patrie lors de la Seconde Guerre mondiale). Pour le récompenser, l'administration décide de lui épingler une médaille sur la poitrine le jour du 14-Juillet. Mais au terme d'une journée de canicule humiliante enfermé dans un cercle blanc sous le soleil, Meka est refoulé du banquet officiel sous un orage torrentiel, brutalisé par des policiers blancs qui ne le reconnaissent pas dans la nuit, et jeté en prison. De retour dans son village, Meka prend enfin conscience de la supercherie : la médaille n'était qu'un hochet dérisoire pour acheter la dépossession de tout un peuple.

III. MONGO BETI : LA DÉMYSTIFICATION DE L'ALLIANCE DU SABRE ET DU GOUPILON
1. Le Pauvre Christ de Bomba (1956) :
Dans ce roman épistolaire et mémorial magistral, Mongo Beti met en scène le Révérend Père Drumont, missionnaire blanc pétri de bonnes intentions, qui tente depuis vingt ans d'évangéliser la région insoumise des Tala au Cameroun.
2. Le narrateur Denis et l'ironie voltairienne :
Le récit est tenu par le jeune Denis, l'enfant de chœur du prêtre. À travers les yeux innocents de Denis, le lecteur découvre la vérité que le Père Drumont refuse de voir : les Africains ne viennent à l'église que pour échapper aux corvées du travail forcé de l'administration coloniale. La mission catholique fonctionne en réalité comme une annexe policière du pouvoir colonial. Pire encore, la « sixaine » (le couvent où sont enfermées les jeunes filles promises au mariage chrétien) se révèle être un foyer clandestin de prostitution et de maladies vénériennes géré par les collaborateurs locaux de la mission.
3. La prise de conscience et la fuite du missionnaire :
Écrasé par la faillite morale et spirituelle totale de son entreprise, le Père Drumont quitte définitivement l'Afrique en reconnaissant son aveuglement : la croix a ouvert la voie au fouet colonial. Mongo Beti utilise une verve comique irrésistible pour porter un coup fatal à l'illusion civilisatrice de l'Église missionnaire.

IV. LES CARACTÉRISTIQUES FORMELLES ET STYLISTIQUES DU ROMAN COLONIAL ANTICOLONIAL
1. L'hybridation des genres :
Ces romans empruntent les formes européennes classiques (le journal intime, le récit de voyage, la satire philosophique à la Voltaire) pour y introduire l'oralité africaine, les proverbes traditionnels, l'humour désopilant et la truculence des conversations villageoises.
2. Le personnage du « boy » comme révélateur sociologique :
Situé à l'exacte frontière entre le monde des maîtres et celui des indigènes, le boy incarne la figure du témoin muet mais lucide. Il observe les failles psychologiques du colonisateur et dévoile le caractère artificiel et violent de sa suprématie.

V. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Ce corpus est fondamental pour aborder :
  - Le roman comme miroir critique et instrument de subversion politique ;
  - Le rire et l'ironie comme armes de résistance contre la tragédie de l'oppression ;
  - Le rapport entre vérité historique et fiction romanesque.
• En commentaire composé : Analyser les techniques de double énonciation (ce que dit le narrateur ingénu vs ce que comprend le lecteur averti), les antithèses brutales entre le discours moralisateur colonial et la violence physique exercée dans les cachots, et la portée symbolique des objets (la médaille, les chaussures vernies qui blessent les pieds, la soutane).

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Les romans anticoloniaux des années 1950 ont accompli une besogne révolutionnaire d'une portée inestimable. En retournant l'arme du roman réaliste et satirique contre l'oppresseur, René Maran, Ferdinand Oyono et Mongo Beti ont brisé la mystification coloniale et hâté l'avènement des indépendances africaines. Leurs œuvres demeurent des monuments vivants de lucidité, d'ironie et d'humanisme intransigeant.`,
  sections: [
    {
      title: 'I. Le scandale précurseur de René Maran : Batouala (1921)',
      content: `1. La Préface du scandale : charge incendiaire contre la « civilisation bâtie sur des charniers » et la brutalité des fonctionnaires coloniaux.
2. Réalisme documentaire : peinture crue du travail forcé, du système du caoutchouc et des ravages sanitaires en Oubangui-Chari.
3. Prix Goncourt 1921 : première consécration littéraire majeure d\'un auteur noir brisant l\'omerta métropolitaine.`
    },
    {
      title: 'II. Ferdinand Oyono : La déconstruction de l\'intimité coloniale',
      content: `1. Une vie de boy (1956) : le journal intime de Toundi ; découverte de la déchéance morale des maîtres sous les lambris de la résidence.
2. Le piège du savoir : avoir percé le secret de l\'adultère de la Commandante condamne le boy au supplice et à la mort.
3. Le Vieux Nègre et la médaille (1956) : Meka et le piège du 14-Juillet ; désillusion cruelle d\'un vieillard sacrifié sur l\'autel de l\'illusion républicaine.`
    },
    {
      title: 'III. Mongo Beti : Le procès du cléricalisme colonial',
      content: `1. Le Pauvre Christ de Bomba (1956) : l\'aventure désastreuse du Révérend Père Drumont chez les Tala insoumis.
2. La voix de Denis : ironie naïve dévoilant la collusion entre l\'évangélisation forcée et les corvées administratives.
3. La chute du temple : découverte des turpitudes de la sixaine et fuite désabusée du missionnaire vaincu par le bon sens populaire africain.`
    },
    {
      title: 'IV. Spécificités stylistiques : L\'ironie comme arme de subversion',
      content: `1. Le regard ingénu : fausse innocence du narrateur enfant ou boy pour mieux démasquer l\'absurdité de l\'ordre établi.
2. L\'humour et la dérision : le rire africain comme ultime bouclier protecteur et instrument d\'anéantissement symbolique du maître.
3. Oralité et polyphonie : insertion vivante des palabres, proverbes et rythmes du langage populaire dans le moule romanesque français.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Sujets de dissertation : « L\'écrivain doit-il être la conscience accusatrice de son époque ? », « Le rire peut-il être une arme plus destructrice que la colère en littérature ? ».
• Analyse de texte : repérer l\'ironie dramatique, les décalages de registre, les métaphores animalières et la symbolique de l\'enfermement.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Le roman anticolonial des années 1950 a démantelé la légitimité morale de l\'empire. En alliant le témoignage véridique au rire ravageur, Oyono et Beti ont préparé les consciences à l\'émancipation politique et à la souveraineté retrouvée.`
    }
  ]
};
