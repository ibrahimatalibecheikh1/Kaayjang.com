import { LessonContent } from './courses';

// =========================================================================
// FRANÇAIS CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 2 (LEÇONS 6 À 10)
// Programme officiel national de la République du Sénégal
// Cours exhaustifs intégraux sans résumé, grands axes et méthodologie Bac
// =========================================================================

export const LESSON_6_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-6',
  number: 'LEÇON 6',
  title: 'L\'AVENTURE AMBIGUË DE CHEIKH HAMIDOU KANE : ITINÉRAIRE SPIRITUEL ET CHOC DES CIVILISATIONS',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 2 • Roman Négro-Africain & Roman Moderne',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'Analyse magistrale du chef-d\'œuvre de la littérature sénégalaise : le dilemme des Diallobé, l\'école coranique du Maître Thierno, la Grande Royale et la décision d\'aller à l\'école nouvelle (« apprendre à lier le bois au bois »), le drame de l\'écartèlement à Paris et le dénouement mystique.',
  image: {
    caption: 'Figure T2.1 : L\'itinéraire philosophique et tragique de Samba Diallo dans L\'Aventure ambiguë',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="ambigGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#ambigGrad)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#0c4a6e" text-anchor="middle">L\'AVENTURE AMBIGUË : ARCHITECTURE DE LA DÉCHIRURE IDENTITAIRE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">1. Le Foyer Spirituel</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Le Foyer des Diallobé</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Maître Thierno &amp; la Parole sacrée</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Mortification de la chair</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Culte exclusif de l\'Au-delà</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Foi islamique pure</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">2. Le Choix Historique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• La Grande Royale : pragmatisme</text>
        <text x="14" y="74" font-size="11" fill="#374151">• « Lier le bois au bois »</text>
        <text x="14" y="96" font-size="11" fill="#374151">• École étrangère = arme de survie</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Risque : s\'oublier soi-même</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Rupture dialectique</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">3. L\'Écartèlement &amp; Mort</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Exil parisien : le vide matériel</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Le Chevalier vs Descartes</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Samba Diallo : être hybride</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Le coup fatal du Fou</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Résolution métaphysique</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 6 : L'AVENTURE AMBIGUË DE CHEIKH HAMIDOU KANE : ITINÉRAIRE SPIRITUEL ET CHOC DES CIVILISATIONS

INTRODUCTION
Publié en 1961 et couronné par le Grand Prix Littéraire d'Afrique Noire en 1962, L'Aventure ambiguë de l'écrivain sénégalais Cheikh Hamidou Kane est unanimement considéré comme l'un des sommets absolus de la littérature universelle. Récit philosophique et spirituel d'une prodigieuse densité, l'œuvre dépasse le cadre classique de la simple dénonciation anticoloniale pour poser les questions métaphysiques les plus vertigineuses : Comment préserver son âme spirituelle face à la séduction matérielle et technique de l'Occident ? Est-il possible de s'ouvrir au savoir moderne sans perdre ses racines ancestrales ? À travers le destin bouleversant de Samba Diallo, jeune aristocrate peul destiné au sacerdoce islamique dans le pays des Diallobé, Cheikh Hamidou Kane met en scène le drame de l'écartèlement culturel et de la rencontre violente entre l'Orient mystique et l'Occident rationaliste.

I. LE FOYER DES DIALLOBÉ ET L'INITIATION MYSTIQUE AU SALUT DE L'ÂME
1. Le Maître de la Parole divine : Maître Thierno :
Le roman s'ouvre sur une scène saisissante de violence pédagogique et d'amour mystique : Maître Thierno corrige impitoyablement Samba Diallo qui a trébuché sur un verset du Coran. Pour Thierno, la Parole de Dieu ne tolère aucune approximation. Le corps doit être brisé, mortifié, humilié, afin que l'esprit puisse accueillir la lumière divine : « Ce garçon était la joie de son cœur, mais il fallait qu'il mourût à lui-même pour renaître en Dieu. »
2. La mendicité rituelle et l'effacement de l'orgueil aristocratique :
Bien qu'issu de la plus haute noblesse royale peule, Samba Diallo est contraint d'errer de concession en concession vêtu de haillons pour mendier sa nourriture quotidienne (« Gens de Dieu, donnez à qui ne possède rien pour l'amour de Dieu »). Cette mendicité sacrée a une fonction éthique fondamentale : détruire l'orgueil de la naissance, enseigner l'humilité absolue et rappeler la finitude radicale de la condition humaine face à la mort inéluctable.
3. L'harmonie d'une civilisation de la contemplation :
Le pays des Diallobé vit dans une communion symbiotique avec Dieu et le cosmos. L'existence matérielle y est volontairement réduite au minimum afin de préserver l'espace intérieur de la prière et de la méditation.

II. LE DILEMME DES DIALLOBÉ ET LA DÉCISION RÉVOLUTIONNAIRE DE LA GRANDE ROYALE
1. Le choc de la conquête coloniale :
Les Européens ne sont pas seulement venus avec des canons ; ils ont apporté une civilisation technique irrésistible. Le chef des Diallobé et son frère le Chevalier constatent avec angoisse l'impuissance de leurs armes traditionnelles face à la puissance d'acier des envahisseurs.
2. Le discours visionnaire de la Grande Royale :
C'est une femme, la Grande Royale, sœur aînée du chef, qui débloque la situation lors d'une assemblée historique mémorable. Face aux hésitations des hommes terrifiés à l'idée que leurs enfants perdent leur foi, elle prononce une allégorie décisive :
« La tornade qui approche disperse nos troupeaux [...] L'école où nous poussons nos enfants tuera en eux ce qu'aujourd'hui nous aimons et conservons avec soin. Mais si nous n'y allons pas, nous périrons. Il faut aller apprendre chez eux l'art de vaincre sans avoir raison. Il faut envoyer nos enfants à l'école nouvelle pour apprendre à lier le bois au bois. »
3. La déchirure dialectique :
La Grande Royale compare ce sacrifice à celui du paysan qui enterre son meilleur grain dans la terre humide pour que germe la récolte future : pour survivre politiquement et matériellement, les Diallobé doivent accepter de risquer la mort spirituelle de leur progéniture dans l'école des Blancs.

III. L'EXIL PARISIEN ET LE DRAME DU DÉCHIREMENT CULTUREL
1. La découverte de la jungle de pierre et de la mécanique occidentale :
Brillant élève, Samba Diallo termine ses études de philosophie à Paris. Mais la métropole occidentale lui apparaît comme un univers désolé, glacé, déshumanisé. L'Occident a conquis la matière et dominé la nature grâce à la science cartésienne, mais il a assassiné Dieu et vidé l'homme de sa substance spirituelle.
2. L'écartèlement insurmontable : être deux personnes à la fois :
Samba Diallo prend conscience avec épouvante de son aliénation irréversible : « Il m'arrive de n'être plus personne. Je ne suis pas un pays des Diallobé distinct, face à un Occident distinct. Je suis devenu les deux. Il n'y a pas une tête lucide entre deux termes d'un choix. Il y a une nature étrange, en détresse d'être deux. »
3. Le dialogue entre le Chevalier et le pasteur Martignac :
À travers les échanges épistolaires et philosophiques entre le père de Samba (le Chevalier) et des penseurs occidentaux, le roman confronte la métaphysique de l'être et la civilisation de l'avoir. Le Chevalier prédit la faillite tragique d'un Occident ivre de puissance technique mais incapable d'offrir un sens à la mort.

IV. LE RETOUR TRAGIQUE ET LE DÉNOUEMENT MYSTIQUE AU CIMETIÈRE
1. Le refus de prier et le conflit avec le Fou :
Rappelé au pays des Diallobé à la mort de Maître Thierno, Samba Diallo ne peut plus accomplir les gestes de la prière avec la foi limpide de son enfance. Il a été contaminé par le poison du doute philosophique occidental. Il rencontre alors le personnage énigmatique du « Fou », un ancien soldat traumatisé par son séjour en Europe qui a voué sa vie à la vénération fanatique de la tombe de Maître Thierno.
2. Le meurtre sacrificiel et la libération spirituelle :
Voyant que Samba refuse de faire la prière du crépuscule sur la tombe du Maître, le Fou, croyant sauver son âme de la damnation éternelle, le poignarde mortellement.
3. Le chant sublime de la fusion cosmique finale :
Le dernier chapitre est un chef-d'œuvre de poésie mystique en prose. Au moment où la vie quitte son corps mortel, Samba Diallo échappe enfin aux contradictions de l'Histoire et à la déchirure du temps terrestre : « Salut à toi, sagesse retrouvée, mon amour [...] Je ne suis plus distinct. Je suis l'être. » L'aventure ambiguë s'achève dans l'apothéose de la réunification avec la Lumière incréée de Dieu.

V. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : L'Aventure ambiguë est l'argument souverain pour tous les sujets traitant de :
  - Le conflit des civilisations, l'acculturation et le déchirement identitaire ;
  - La dialectique entre tradition spirituelle et progrès scientifique ;
  - Le roman comme essai philosophique et poétique de haute volée.
• En commentaire composé : Analyser la structure dialogique du texte, la dimension allégorique des personnages (Thierno = la sainteté mystique ; la Grande Royale = le pragmatisme politique ; le Fou = la fidélité fanatique ; Samba = le drame de l'hybridation), et la prose incantatoire empreinte de mysticisme soufi.

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
L'Aventure ambiguë dépasse de loin le cadre circonstanciel de l'époque coloniale pour poser un diagnostic universel d'une brûlante actualité. En disséquant l'angoisse de l'homme contemporain pris en étau entre la tentation du matérialisme destructeur et l'exigence sacrée du salut de l'esprit, Cheikh Hamidou Kane a signé l'une des méditations les plus bouleversantes et les plus lumineuses de notre temps.`,
  sections: [
    {
      title: 'I. Le Foyer des Diallobé et l\'ascèse mystique originelle',
      content: `1. Maître Thierno : incarnation vivante de la sainteté islamique soufie ; mortification de la chair pour exalter la lumière de l\'Esprit.
2. La pédagogie sacrée : la souffrance physique imposée pour graver la Parole éternelle du Coran dans la conscience de l\'enfant.
3. L\'épreuve de la mendicité : Samba Diallo dépouillé de ses privilèges princiers pour apprendre l\'égalité absolue de tous les hommes devant la mort.`
    },
    {
      title: 'II. Le dilemme existentiel et l\'impératif de la Grande Royale',
      content: `1. Le traumatisme de la défaite matérielle : l\'Occident a triomphé des Diallobé par sa technologie militaire et organisationnelle.
2. Le discours pragmatique : nécessité vitale d\'envoyer les enfants à « l\'école nouvelle » pour « apprendre à lier le bois au bois ».
3. L\'allégorie des semailles : enfouir le grain précieux de la jeunesse au risque qu\'il meure spirituellement afin d\'assurer la survie politique de la communauté.`
    },
    {
      title: 'III. L\'exil métropolitain et la détresse de l\'écartèlement',
      content: `1. La désolation de Paris : critique lucide du matérialisme froid, du règne de la machine et de l\'oubli de Dieu en Europe.
2. Le drame de l\'hybridation : Samba Diallo se sent dépossédé de son unité d\'origine sans appartenir pleinement au monde occidental (« une nature étrange en détresse d\'être deux »).
3. Confrontation philosophique : le Chevalier vs Descartes ; le primat de l\'Être et du Sens face à la tyrannie de l\'Avoir et de la Technique.`
    },
    {
      title: 'IV. Le dénouement au cimetière et la rédemption mystique',
      content: `1. L\'incapacité de prier : la contamination par le doute cartésien interdit à Samba la foi ingénue de son enfance.
2. Le geste fatal du Fou : un crime sacrificiel motivé par l\'amour mystique pour arracher Samba à l\'apostasie moderne.
3. L\'extase finale : fusion dans la Lumière divine universelle où s\'effacent enfin les déchirements de l\'Histoire et de la dualité culturelle.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : mobiliser Samba Diallo pour incarner le coût psychologique et spirituel de l\'assimilation culturelle et les vertiges de la mondialisation.
• Commentaire composé : disséquer la tonalité tragique et mystique, les dialogues philosophiques et l\'usage de paraboles hautement symboliques.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Chef-d\'œuvre immortel de la littérature sénégalaise, L\'Aventure ambiguë avertit l\'humanité contre l\'illusion d\'un progrès exclusivement matériel qui ferait l\'économie de l\'âme. Elle demeure la grande boussole philosophique de la jeunesse africaine.`
    }
  ]
};

export const LESSON_7_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-7',
  number: 'LEÇON 7',
  title: 'LE ROMAN DES DÉSILLUSIONS POST-COLONIALES : LES SOLEILS DES INDÉPENDANCES ET SEMBÈNE OUSMANE',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 2 • Roman Négro-Africain & Roman Moderne',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'La rupture stylistique et politique monumentale des Soleils des indépendances d\'Ahmadou Kourouma (1968) : subversion de la langue française (« malinkisation »), faillite des soleils nouveaux et agonie du prince Fama. L\'engagement socialiste et syndical de Sembène Ousmane dans Les Bouts de bois de Dieu (1960), Le Mandat et Xala.',
  image: {
    caption: 'Figure T2.2 : La deuxième génération romanesque — Désillusion politique et audace linguistique',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="desilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#b45309" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#desilGrad)" stroke="#b45309" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#451a03" text-anchor="middle">LES DÉSILLUSIONS DES INDÉPENDANCES : KOUROUMA &amp; SEMBÈNE OUSMANE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">1. Kourouma : Le Style</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Les Soleils des indépendances (1968)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Malinkisation du français</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Inversion de la syntaxe classique</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Proverbes, injures et truculence</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Révolution littéraire</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">2. Fama &amp; la Faillite</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Fama Doumbouya : prince déchu</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Chasseur de funérailles à la ville</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Parti unique &amp; népotisme</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Mort tragique face aux caïmans</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Tragédie des bâtards</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">3. Sembène Ousmane</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Les Bouts de bois de Dieu (1960)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• La grève ferroviaire Dakar-Niger</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Rôle héroïque des femmes</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Le Mandat &amp; Xala (satire bourgeoisie)</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Réalisme militant &amp; Peuple</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 7 : LE ROMAN DES DÉSILLUSIONS POST-COLONIALES : LES SOLEILS DES INDÉPENDANCES ET SEMBÈNE OUSMANE

INTRODUCTION
Après l'euphorie et les espoirs immenses suscités par les indépendances africaines en 1960, le roman négro-africain opère un tournant critique fondamental à partir de 1968. Constatant que le départ des maîtres blancs n'a pas mis fin à la misère populaire, mais a au contraire installé de nouvelles tyrannies locales dominées par le parti unique, le népotisme, la corruption et la confiscation des richesses, les romanciers de la deuxième génération s'érigent en juges sans concession des nouveaux pouvoirs africains. Ce désenchantement historique culmine avec la déflagration stylistique des Soleils des indépendances (1968) de l'Ivoirien Ahmadou Kourouma, qui dynamite le classicisme académique de la langue française pour lui injecter le souffle et la violence métaphorique du malinké. Parallèlement, au Sénégal, l'aîné des romanciers et cinéastes militants, Sembène Ousmane, déploie dans Les Bouts de bois de Dieu (1960), Le Mandat (1966) et Xala (1973) une critique lucide et impitoyable de l'embourgeoisement parasite de la classe dirigeante post-coloniale.

I. LA RÉVOLUTION LINGUISTIQUE ET POLITIQUE D'AHMADOU KOUROUMA
1. La naissance des Soleils des indépendances (1968) :
Refusé par les grands éditeurs parisiens qui jugeaient son style « incorrect », le manuscrit de Kourouma est publié pour la première fois à Montréal avant de triompher aux Éditions du Seuil en 1970. Dès son incipit légendaire (« Il y avait une semaine qu'avait fini dans la capitale Koné Ibrahima, de race malinké... »), le ton est donné : la langue française est brutalement « malinkisée ».
2. La désarticulation du français classique :
Kourouma ne se contente pas d'écrire en français : il pense en malinké et traduit directement les tournures idiomatiques, les proverbes ancestraux, les imprécations et les structures syntaxiques de sa langue maternelle dans le texte français : « Qu'avaient apporté les Indépendances à Fama ? Rien que la carte d'identité et celle du parti unique [...] Des indépendances de bâtardise ! » Kourouma désacralise la langue de l'Académie pour en faire l'outil rugueux et charnel de la vérité populaire.
3. Le destin tragique de Fama Doumbouya :
Dernier descendant légitime de la noble dynastie des princes du Horodougou, Fama n'a pas sa place dans la république nouvelle issue des indépendances. Dépouillé de ses privilèges féodaux et incapable de trouver un emploi de commis dans l'administration faute d'avoir fréquenté l'école des Blancs, il est réduit à écumer la capitale pour quêter sa pitance lors des cérémonies de funérailles (« un vautour qui attend les charognes »). Fama incarne la tragédie d'une noblesse traditionnelle obsolète broyée par une modernité frelatée.
4. Salimata et le drame de la stérilité :
Son épouse Salimata, violée autrefois par un marabout guérisseur lors de son excision rituelle, tente désespérément de donner un héritier à Fama pour sauver la lignée des Doumbouya. Elle travaille jusqu'à l'épuisement pour nourrir son époux orgueilleux et subit la duplicité des charlatans religieux et des fonctionnaires corrompus.

II. LA SATIRE DES NOUVEAUX RÉGIMES ET LA « BÂTARDISE » DES INDÉPENDANCES
1. Le parti unique et l'arbitraire policier :
Kourouma dresse un réquisitoire implacable contre le parti unique qui quadrille le pays. Jeté en prison sans motif valable pour un complot imaginaire, Fama découvre l'enfer des cachots du nouveau régime où les prisonniers politiques sont torturés au son des hymnes patriotiques.
2. La mort sacrificielle face aux crocodiles sacrés :
Libéré par amnistie présidentielle mais brisé dans son âme, Fama décide de retourner mourir sur la terre de ses ancêtres au Horodougou. À la frontière arbitraire tracée par la colonisation et gardée par les miliciens du parti, Fama défie les barbelés et se jette dans le fleuve frontalier où il est mordu à mort par les crocodiles sacrés, signant l'extinction définitive de sa race princière.

III. SEMBÈNE OUSMANE : LA VOIX DES OPPRIMÉS ET LA SATIRE DE LA BOURGEOISIE SÉNÉGALAISE
1. Les Bouts de bois de Dieu (1960) : L'épopée de la grève ouvrière
Dans ce chef-d'œuvre du réalisme socialiste africain, Sembène Ousmane retrace la grève historique des cheminots du Dakar-Niger en 1947-1948.
- L'affirmation d'une conscience de classe ouvrière : Sous la direction d'Ibrahima Bakayoko, les cheminots africains découvrent que la machine a transformé leur rapport au monde : « L'homme que nous étions hier est mort, une machine nouvelle a pris sa place. »
- Le rôle héroïque et décisif des femmes : Pénurie d'eau et de nourriture, répression policière sanglante : ce sont les femmes (Penda, Ramatoulaye, Mame Sofi) qui organisent la résistance et mènent la marche héroïque de Thiès à Dakar, démontrant que la véritable révolution commence par l'émancipation féminine.
2. Le Mandat (1966) : Le calvaire d'Ibrahima Dieng dans la jungle bureaucratique
À travers l'histoire tragi-comique d'Ibrahima Dieng, vieux musulman crédule qui reçoit un mandat de 25 000 francs CFA envoyé de Paris par son neveu, Sembène radiographie la faillite morale de la société dakaroise. Dieng se heurte à une bureaucratie ubuesque qui lui réclame carte d'identité, photos d'identité, timbres fiscaux, et se fait dépouiller par des intermédiaires véreux et des voisins opportunistes. Sembène fustige une société où la fraternité traditionnelle a été corrompue par l'argent roi.
3. Xala (1973) : L'impuissance physique comme allégorie de l'impuissance nationale
Dans Xala (« la malédiction de l'impuissance sexuelle » en wolof), El Hadji Abdou Kader Bèye, homme d'affaires sénégalais arrogant et polygame, célèbre son troisième mariage avec faste en pleine crise économique. Mais la nuit de noces, il est frappé par le « xala ». Cette impuissance sexuelle ridicule est en réalité la métaphore éclatante de l'impuissance politique et économique de la bourgeoisie nationale compradore, incapable de produire par elle-même et entièrement vassalisée au néocolonialisme étranger. Le roman s'achève par le châtiment purificateur où les mendiants de la ville crachent sur le bourgeois déchu.

IV. L'IMPACT ESTHÉTIQUE DE LA DEUXIÈME GÉNÉRATION ROMANESQUE
1. Du réquisitoire anticolonial à l'autocritique africaine :
Le roman cesse d'attribuer tous les maux de l'Afrique au seul colonisateur blanc. Il regarde avec lucidité les tares internes : tyrannie des dirigeants locaux, opportunisme des élites, exploitation des croyances religieuses par les marabouts véreux.
2. La déchéance du héros épique :
Le héros n'est plus une figure mythique immaculée, mais un être vulnérable, ambigu, déchu (Fama, El Hadji Bèye) ou une collectivité en lutte (les cheminots de Thiès).

V. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation : Corpus indispensable pour les sujets interrogeant :
  - La fonction de désillusion et de démystification assumée par la littérature africaine ;
  - Le rapport entre renouvellement formel/linguistique et subversion politique ;
  - L'engagement de l'écrivain comme porte-parole des sans-voix.
• En commentaire composé : Analyser les ruptures de registre (le tragique côtoyant le grotesque ou l'ironie mordante), la métaphorisation animale, le rôle des dialogues populaires et la satire de la bureaucratie néocoloniale.

VI. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Les Soleils des indépendances et les romans de Sembène Ousmane ont affranchi le roman africain de ses derniers complexes académiques. En mariant l'audace stylistique la plus radicale à un engagement social sans compromis, ils ont légué à la postérité des œuvres d'une lucidité féroce qui demeurent des phares incontournables pour appréhender les défis du continent africain contemporain.`,
  sections: [
    {
      title: 'I. La rupture stylistique et politique d\'Ahmadou Kourouma',
      content: `1. Genèse des Soleils des indépendances (1968) : rejet initial de l\'orthodoxie académique parisienne et sacre d\'une écriture transgressive.
2. La « malinkisation » du français : subversion de la syntaxe hexagonale par les proverbes, injures rituelles et images métaphoriques de l\'oralité malinké.
3. Portrait du prince Fama Doumbouya : noblesse déchue d\'un héritier féodal réduit à quémander aux enterrements de la capitale.`
    },
    {
      title: 'II. Les désillusions post-coloniales : Parti unique et « bâtardise »',
      content: `1. Réquisitoire contre les nouveaux pouvoirs : faillite des promesses nationales, népotisme et confiscation autoritaire par le parti unique.
2. Salimata et la tragédie intime : viol sous couvert de rituel, stérilité douloureuse et dévouement héroïque d\'une femme broyée par la superstition.
3. L\'agonie de Fama : mort héroïque et désespérée face aux caïmans sacrés du fleuve frontière ; épitaphe d\'une Afrique immémoriale trahie.`
    },
    {
      title: 'III. Sembène Ousmane : Réalisme socialiste et satire des élites',
      content: `1. Les Bouts de bois de Dieu (1960) : l\'épopée des cheminots du Dakar-Niger ; naissance de la solidarité syndicale et marche héroïque des femmes de Thiès à Dakar.
2. Le Mandat (1966) : le calvaire d\'Ibrahima Dieng dans le labyrinthe bureaucratique ; dénonciation de la gangrène vénale de la société dakaroise.
3. Xala (1973) : l\'impuissance d\'El Hadji Abdou Kader Bèye comme métaphore cinglante de l\'impuissance politique et économique de la bourgeoisie néocoloniale.`
    },
    {
      title: 'IV. Mutations esthétiques : De la dénonciation blanche à l\'autocritique',
      content: `1. Déplacement du réquisitoire : le roman africain analyse courageusement ses propres contradictions politiques et sociales internes.
2. L\'émergence du personnage collectif : le peuple laborieux et les laissés-pour-compte deviennent les véritables moteurs de l\'intrigue romanesque.
3. Rire grinçant et grotesque : utilisation de la satire burlesque pour dégonfler l\'arrogance des parvenus de la république.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : analyser comment la langue de Kourouma participe à l\'authentification de l\'expérience africaine ; confronter l\'engagement de Sembène Ousmane aux théories de l\'art engagé.
• Commentaire composé : identifier les modalisateurs ironiques, le lexique scatologique ou familier de la dégradation morale, et le dynamisme des scènes de foule.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `La deuxième génération romanesque a sauvé l\'Afrique du piège de l\'autosatisfaction post-coloniale. Avec Kourouma et Sembène, le roman africain a affirmé sa maturité suprême en devenant la mauvaise conscience vigoureuse et incorruptible des peuples en marche.`
    }
  ]
};

export const LESSON_8_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-8',
  number: 'LEÇON 8',
  title: 'L\'ÉMERGENCE DU ROMAN FÉMININ AFRICAIN : MARIAMA BÂ ET AMINATA SOW FALL',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 2 • Roman Négro-Africain & Roman Moderne',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'L\'irruption fondatrice des voix féminines sénégalaises dans la littérature francophone : Une si longue lettre de Mariama Bâ (1979 - la forme épistolaire, le mirage polygamique, l\'émancipation par l\'école) et La Grève des bàtthu d\'Aminata Sow Fall (1979 - la révolte des mendiants, Mour Ndiaye et la satire du pouvoir).',
  image: {
    caption: 'Figure T2.3 : Les pionnières du roman féminin sénégalais — Deux regards critiques sur la société',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="femGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#9333ea" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#c084fc" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#femGrad)" stroke="#a855f7" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">L\'ÉCLOSION DU ROMAN FÉMININ SÉNÉGALAIS (1979) : MARIAMA BÂ &amp; AMINATA SOW FALL</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#c084fc" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7e22ce" text-anchor="middle">1. Mariama Bâ (1979)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Une si longue lettre</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Forme épistolaire intime</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Ramatoulaye vs Modou Fall</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Trahison de la polygamie</text>
        <text x="14" y="140" font-size="11" fill="#7e22ce" font-weight="bold">→ Dignité &amp; Émancipation</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#c084fc" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#7e22ce" text-anchor="middle">2. Aminata Sow Fall</text>
        <text x="14" y="52" font-size="11" fill="#374151">• La Grève des bàtthu (1979)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Satire sociopolitique féroce</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Mour Ndiaye &amp; l\'ambition</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Révolte des mendiants</text>
        <text x="14" y="140" font-size="11" fill="#7e22ce" font-weight="bold">→ Parabole du pouvoir</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#c084fc" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7e22ce" text-anchor="middle">3. Apports Fondamentaux</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Fin du silence séculaire</text>
        <text x="14" y="74" font-size="11" fill="#374151">• L\'école : arme de libération</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Regard neuf sur la tradition</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Prix Noma &amp; Grand Prix</text>
        <text x="14" y="140" font-size="11" fill="#7e22ce" font-weight="bold">→ Renaissance littéraire</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 8 : L'ÉMERGENCE DU ROMAN FÉMININ AFRICAIN : MARIAMA BÂ ET AMINATA SOW FALL

INTRODUCTION
L'année 1979 constitue une date charnière dans l'histoire des lettres africaines : pour la première fois, des écrivaines sénégalaises s'emparent de la parole romanesque pour faire entendre un discours inédit sur la condition féminine, les pesanteurs de la tradition patriarcale et les dérives du pouvoir politique. Avec Une si longue lettre de Mariama Bâ (qui remporte le tout premier Prix Noma de l'édition en 1980) et La Grève des bàtthu d'Aminata Sow Fall (Grand Prix Littéraire d'Afrique Noire en 1980), le roman négro-africain brise un tabou séculaire. Jusqu'alors, la femme africaine n'était souvent qu'un objet poétisé par les hommes (la muse intouchable de la Négritude ou la mère doloriste). Avec Mariama Bâ et Aminata Sow Fall, elle devient le sujet parlant et pensant de son propre destin, portant sur la polygamie, les castes, la cupidité des belles-familles et la manipulation politique de la religion un regard lucide, exigeant et fraternel.

I. MARIAMA BÂ ET UNE SI LONGUE LETTRE : LE CRI DE DIGNITÉ DE RAMATOULAYE
1. Le choix signifiant du genre épistolaire :
Une si longue lettre se présente sous la forme d'un journal-lettre intime rédigé par Ramatoulaye, institutrice sénégalaise en retraite, à sa meilleure amie d'enfance Aïssatou, partie vivre aux États-Unis. Ce choix formel permet une sincérité désarmante : confinée dans sa maison durant la réclusion rituelle du veuvage (le mirasse) après la mort brutale de son mari Modou Fall, Ramatoulaye profite de ce temps de recueillement forcé pour faire le bilan sans fard de trente années de vie conjugale.
2. La trahison polygamique et l'effondrement de l'idéal :
Après avoir lutté ensemble pour l'indépendance et élevé douze enfants dans l'amour et la complicité intellectuelle, Modou Fall cède à la tentation bourgeoise et prend secrètement en secondes noces la jeune Binetou, la meilleure amie de sa propre fille Daba. Ramatoulaye apprend cette trahison par l'arrivée impromptue chez elle de l'imam et de son beau-frère venus lui signifier le fait accompli au nom de la « volonté divine ». Modou abandonne totalement son premier foyer, dilapide ses économies pour couvrir de bijoux sa jeune épouse capricieuse, et meurt prématurément d'une crise cardiaque, laissant Ramatoulaye endettée.
3. Deux réponses féminines à la polygamie : Ramatoulaye et Aïssatou :
Le roman confronte magistralement deux attitudes féminines face à la lâcheté masculine :
- Aïssatou refuse catégoriquement le compromis : lorsque son mari Mawdo Bâ, médecin brillant, accepte sous la pression féodale de sa mère (la princesse Nabou) d'épouser sa jeune cousine par orgueil de caste, Aïssatou claque la porte avec fierté, refusant de partager son époux (« Les princes dominent leurs sentiments pour honorer leurs devoirs. Les autres courbent la tête. Je ne m'accoutume pas à la nuit. Je m'en vais »). Elle reprend ses études, réussit brillamment et devient diplomate.
- Ramatoulaye choisit de rester au foyer par amour pour ses enfants et attachement à la foi musulmane, mais elle refuse ensuite les demandes en mariage opportunistes du frère de son défunt mari (Tamsir) et de son ancien prétendant Daouda Dieng, affirmant sa souveraineté morale : « Je ne serai jamais le complément d'un autre. »
4. L'école comme instrument suprême d'émancipation :
Mariama Bâ rend un hommage vibrant à l'institutrice blanche de l'école normale de Rufisque (Madame Berthe Maubert) qui a forgé leur conscience : « Nous sortir de l'enlisement des traditions, des superstitions et des mœurs ; nous faire apprécier de multiples civilisations sans renier la nôtre ; élever notre vision du monde. »

II. AMINATA SOW FALL ET LA GRÈVE DES BÀTTHU : LA PARABOLE SOCIALE ET POLITIQUE
1. Une posture littéraire différente : le refus du féminisme intimiste :
Contrairement à Mariama Bâ, Aminata Sow Fall récuse l'étiquette de romancière féministe militante. Elle préfère ausculter la société sénégalaise dans son ensemble, mettant à nu les travers de la bureaucratie, la vanité des puissants et la dialectique des classes sociales.
2. L'intrigue dramatique de La Grève des bàtthu :
Mour Ndiaye, haut fonctionnaire ambitieux chargé de la salubrité publique, veut débarrasser les rues de Dakar des mendiants, lépreux et infirmes pour offrir aux touristes étrangers une vitrine aseptisée de la capitale. Ses agents municipaux brutalisent les mendiants et les expulsent manu militari à des kilomètres de la ville.
3. La riposte des mendiants : la grève des calebasses (bàtthu) :
Menés par le charismatique Salla Niang, les mendiants décident d'un mot d'ordre révolutionnaire : cesser totalement de mendier et refuser l'aumône de quiconque. Or, dans la société sénégalaise, la mendicité a une fonction théologique et magico-religieuse vitale : l'aumône (sarax) est indispensable aux riches et aux ambitieux pour conjurer le mauvais sort et attirer les grâces célestes. Sans mendiants dans les rues pour recevoir les sacrifices rituels, la bourgeoisie dakaroise panique !
4. La déchéance finale de Mour Ndiaye :
Pressenti pour devenir vice-président de la République, Mour Ndiaye consulte son marabout Kébé, qui lui ordonne un sacrifice impératif : immoler un taureau fauve et distribuer sa viande crue aux mendiants répartis aux quatre coins cardinaux de la ville en personne. Face au refus unanime des mendiants de regagner les rues avant la fin de leur grève victorieuse, Mour Ndiaye est incapable d'accomplir son sacrifice et voit la vice-présidence lui échapper au profit d'un rival, démontrant que les exclus détiennent en réalité la clé du destin des puissants.

III. LES CONVERGENCES THÉMATIQUES DU ROMAN FÉMININ SÉNÉGALAIS
1. La dénonciation des dérives du matérialisme et des castes :
Mariama Bâ et Aminata Sow Fall fustigent l'obsession du luxe paraître, les dépenses fastueuses et ruineuses lors des baptêmes, mariages et deuils familiaux, et le poison des préjugés de castes qui brisent les amours sincères.
2. La défense de l'éthique de la solidarité authentique :
Contre l'hypocrisie de la charité intéressée (l'aumône faite pour s'enrichir plutôt que par bonté chrétienne ou islamique), les romancières réclament une véritable justice sociale fondée sur le respect de la dignité humaine.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Corpus majeur pour :
  - Le roman comme analyse sociologique et critique des mœurs traditionnelles ;
  - L'écriture féminine comme renouveau esthétique et thématique en Afrique ;
  - Le regard de l'écrivain sur la polygamie, la condition féminine et le statut des marginaux.
• En commentaire composé : Analyser la tonalité élégiaque et pathétique chez Mariama Bâ (l'effusion lyrique, les apostrophes intimes), et la tonalité satirique, ironique et tragi-comique chez Aminata Sow Fall (la dramatisation du suspense, l'inversion carnavalesque des rôles sociaux).

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
L'irruption de Mariama Bâ et d'Aminata Sow Fall a marqué l'âge de raison de la littérature africaine. En portant un regard à la fois tendre et lucide sur les blessures intimes et les failles collectives de leur peuple, elles ont prouvé que la libération de l'Afrique ne saurait s'accomplir sans la pleine souveraineté de la femme et l'écoute des plus humbles.`,
  sections: [
    {
      title: 'I. Mariama Bâ : La souveraineté de la parole épistolaire intime',
      content: `1. Le mirasse comme espace de vérité : le temps de réclusion du veuvage devient le moment privilégié de la confession et de la lucidité introspective.
2. Le traumatisme de la seconde épouse : Modou Fall brise trente ans d\'amour pour épouser Binetou, la camarade de sa fille, cédant au mirage de la jeunesse.
3. Deux modèles de résistance : Aïssatou choisit la rupture fière et l\'émancipation par le travail ; Ramatoulaye choisit la dignité au sein du foyer tout en refusant le remariage imposé.`
    },
    {
      title: 'II. L\'école comme tremplin de libération dans Une si longue lettre',
      content: `1. L\'hommage aux éducatrices pionnières : l\'école normale de Rufisque comme matrice d\'une émancipation respectueuse des valeurs fondamentales.
2. Critique des pesanteurs sociologiques : le parasitisme des belles-familles, la folie des dépenses ostentatoires lors des funérailles et le fardeau des castes.`
    },
    {
      title: 'III. Aminata Sow Fall : La satire sociale et la révolte des calebasses',
      content: `1. Refus du ghetto féministe : volonté d\'ausculter la société dans sa globalité politique, éthique et spirituelle.
2. La Grève des bàtthu : les mendiants expulsés cessent de tendre la sébile, privant les nantis de l\'instrument indispensable de leurs sacrifices conjuratoires.
3. Chute tragi-comique de Mour Ndiaye : l\'arrogance technocratique vaincue par la résistance solidaire des marginaux.`
    },
    {
      title: 'IV. Spécificités stylistiques : Du lyrisme confessionnel à la parabole',
      content: `1. Mariama Bâ : écriture sensible, confessions poignantes, analyse psychologique fine de la souffrance et de la résilience féminine.
2. Aminata Sow Fall : ironie théâtrale, sens aigu du dialogue vivant, rythme trépidant de la comédie de mœurs satirique.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : argumenter sur l\'évolution des représentations féminines dans la littérature ; interroger le rôle de la femme comme gardienne lucide de l\'éthique communautaire.
• Commentaire : analyser le lexique de la blessure intime et de la libération chez Mariama Bâ, et l\'ironie dramatique chez Aminata Sow Fall.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Les voix pionnières de Mariama Bâ et Aminata Sow Fall ont enrichi le patrimoine littéraire mondial d\'une intensité éthique inégalée. Elles demeurent les marraines bienveillantes de toutes les générations d\'écrivaines contemporaines.`
    }
  ]
};

export const LESSON_9_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-9',
  number: 'LEÇON 9',
  title: 'LE ROMAN MODERNE OCCIDENTAL : L\'EXISTENTIALISME ET LE NOUVEAU ROMAN',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 2 • Roman Négro-Africain & Roman Moderne',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'La déconstruction de l\'illusion romanesque balzacienne au XXe siècle : l\'Absurde et l\'Existentialisme (Albert Camus avec L\'Étranger et La Peste ; Jean-Paul Sartre avec La Nausée), puis la démolition méthodique des codes traditionnels par le Nouveau Roman (Alain Robbe-Grillet, Nathalie Sarraute - mort du personnage, refus de l\'intrigue).',
  image: {
    caption: 'Figure T2.4 : La double mutation du roman occidental au XXe siècle',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="modGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#334155" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#modGrad)" stroke="#475569" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">LES MUTATIONS DU ROMAN MODERNE OCCIDENTAL</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">1. L\'Existentialisme</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Sartre : La Nausée (1938)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• L\'existence précède l\'essence</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Contingence de la matière</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Liberté angoissante de l\'homme</text>
        <text x="14" y="140" font-size="11" fill="#334155" font-weight="bold">→ Roman philosophique</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">2. La Philosophie de l\'Absurde</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Camus : L\'Étranger (1942)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Meursault &amp; le meurtre solaire</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Écriture blanche au passé composé</text>
        <text x="14" y="118" font-size="11" fill="#374151">• La Peste : solidarité en lutte</text>
        <text x="14" y="140" font-size="11" fill="#334155" font-weight="bold">→ Révolte contre le néant</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">3. Le Nouveau Roman</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Robbe-Grillet, Sarraute, Butor</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Mort du personnage psychologique</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Éclatement de l\'intrigue chronologique</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Regard géométrique sur les objets</text>
        <text x="14" y="140" font-size="11" fill="#334155" font-weight="bold">→ Déconstruction formelle</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 9 : LE ROMAN MODERNE OCCIDENTAL : L'EXISTENTIALISME ET LE NOUVEAU ROMAN

INTRODUCTION
Au XXe siècle, le roman occidental traverse une crise esthétique et épistémologique sans précédent qui met à bas le modèle canonique du roman réaliste du XIXe siècle hérité de Balzac et de Flaubert. Dans un monde traumatisé par deux guerres mondiales, l'effondrement des métaphysiques religieuses et la découverte de l'absurdité de l'existence, les romanciers renoncent à l'illusion d'un narrateur tout-puissant capable d'expliquer rationnellement le monde. Cette révolution romanesque s'opère en deux temps majeurs : d'abord, dans les années 1930-1940, avec le roman existentialiste et de l'Absurde porté par Jean-Paul Sartre (La Nausée) et Albert Camus (L'Étranger, La Peste), où le récit devient une interrogation poignante sur la liberté et le non-sens de la condition humaine ; puis, dans les années 1950-1960, avec le « Nouveau Roman » (Alain Robbe-Grillet, Nathalie Sarraute, Michel Butor), qui accomplit la démolition méthodique des piliers traditionnels du genre : mort du personnage, dissolution de l'intrigue linéaire et primauté de la description géométrique des objets.

I. JEAN-PAUL SARTRE ET LE ROMAN EXISTENTIALISTE : LA NAUSÉE (1938)
1. « L'existence précède l'essence » :
Théorisé dans L'Être et le Néant (1943) et vulgarisé dans L'Existentialisme est un humanisme (1946), le principe cardinal de Sartre affirme que l'homme n'a pas été créé selon un plan prédéterminé par Dieu. L'homme surgit dans le monde, existe d'abord, et se définit ensuite par la totalité de ses actes et de ses choix souverains. Il est condamné à être libre.
2. L'expérience de la contingence dans La Nausée :
Dans son roman inaugural La Nausée (1938), écrit sous la forme du journal intime d'Antoine Roquentin dans la ville fictive de Bouville, Sartre met en scène la découverte vertigineuse de la « contingence ». Assis sur un banc public devant la racine d'un marronnier, Roquentin éprouve une révélation écoeurante : les choses existent sans justification logique, sans nécessité métaphysique. La matière est « de trop ». Cette prise de conscience du vide ontologique provoque la « nausée ».
3. Le refus de la mauvaise foi bourgeoise :
Roquentin méprise les notables de Bouville qui contemplent leurs portraits dans les musées (« les Salauds »), croyant hypocritement que leur naissance ou leur position sociale leur conférait un droit divin et naturel à exister.

II. ALBERT CAMUS : L'ABSURDE ET LA RÉVOLTE SOLIDAIRE
1. Le sentiment de l'Absurde dans L'Étranger (1942) :
Paru la même année que son essai philosophique Le Mythe de Sisyphe, L'Étranger révolutionne la narration romanesque. L'Absurde camusien naît de la confrontation déchirante entre l'appel éperdu de l'homme à la clarté et le silence déraisonnable du monde.
2. La figure de Meursault et l'écriture « blanche » :
Dès la première phrase devenue culte (« Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas »), Meursault se présente comme un homme imperméable aux convenances hypocrites de la société. Il ne pleure pas à l'enterrement de sa mère, aime nager au soleil avec Marie, et tue un Arabe sur une plage d'Alger dans un moment d'éblouissement solaire tragique (« C'est à cause du soleil »). Jugé et condamné à mort moins pour son meurtre que parce qu'il refuse de mentir sur ses sentiments et de jouer la comédie des remords chrétiens, Meursault meurt en homme libre qui accepte « la tendre indifférence du monde ». Camus invente une « écriture blanche », atone, paratactique, utilisant le passé composé pour isoler chaque instant dans sa gratuité brute.
3. La Peste (1947) : De l'Absurde solitaire à la Révolte solidaire
Face au fléau qui frappe la ville d'Oran (allégorie transparente de l'occupation nazie et de tout mal totalitaire), le docteur Bernard Rieux et ses compagnons s'engagent dans une lutte acharnée sans illusion religieuse. La révolte cesse d'être une aventure individuelle pour devenir une fraternité active : « Je me révolte, donc nous sommes. »

III. LE NOUVEAU ROMAN (1950-1960) : LA MORT DU PERSONNAGE ET DE L'INTRIGUE
1. Le refus de la convention balzacienne :
Réunis autour des Éditions de Minuit sous la houlette d'Alain Robbe-Grillet (Pour un nouveau roman, 1963) et de Nathalie Sarraute (L'Ère du soupçon, 1956), les « Nouveaux Romanciers » refusent de continuer à écrire comme au XIXe siècle. Ils dénoncent comme une supercherie dépassée le roman fondé sur une intrigue chronologique bien huilée et des personnages munis d'un état civil précis, d'une psychologie rassurante et d'une hérédité sociale.
2. La dissolution du personnage :
Dans La Jalousie (1957) de Robbe-Grillet, le narrateur n'a même plus de nom ni de corps : il est réduit à un regard pur (l'œil d'un mari invisible qui espionne sa femme A... à travers les lames d'une jalousie). Chez Michel Butor (La Modification, 1957), le personnage est interpellé à la deuxième personne du pluriel (« Vous »), invitant le lecteur à co-construire l'expérience du voyage en train entre Paris et Rome.
3. Le règne des objets et l'exploration des « tropismes » :
- L'objectalisme de Robbe-Grillet : Le roman privilégie la description géométrique, froide et minutieuse des objets (un quartier de tomate, une gomme, une tâche d'huile) débarrassés de tout symbolisme anthropomorphique.
- Les « tropismes » de Nathalie Sarraute : Dans Tropismes (1939) et Le Planétarium (1959), Sarraute traque les micro-mouvements psychologiques invisibles, quasi-biologiques, qui se produisent sous la surface policée des conversations mondaines quotidiennes.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Ce corpus est indispensable pour traiter :
  - La crise du personnage romanesque : « Le personnage de roman doit-il être un être vivant ou une simple créature de papier ? » ;
  - Le roman comme laboratoire philosophique vs le roman comme évasion ou divertissement ;
  - L'évolution de l'intrigue et le refus du réalisme naïf.
• En commentaire composé : Analyser la narration à la première personne distanciée, la parataxe (absence de connecteurs logiques), la focalisation interne stricte ou l'écriture objectale dépouillée de jugements moraux.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Le roman moderne occidental a accompli une mutation radicale en passant de la peinture rassurante du monde extérieur à l'exploration vertigineuse de l'absurdité de l'existence et à la contestation de ses propres formes. En invitant le lecteur à abandonner sa passivité confortable pour devenir le déchiffreur actif d'un univers désenchanté, Sartre, Camus et le Nouveau Roman ont refondé pour toujours les règles de l'art romanesque.`,
  sections: [
    {
      title: 'I. Jean-Paul Sartre et l\'angoisse existentielle',
      content: `1. L\'existence précède l\'essence : l\'homme surgit dans le monde sans nature prédéterminée et se forge par la liberté totale de ses choix.
2. L\'épreuve de La Nausée (1938) : Roquentin découvre l\'injustification radicale de la matière et la gratuité absurde de la vie devant la racine du marronnier.
3. Le refus des faux-semblants : réquisitoire contre la « mauvaise foi » des bourgeois qui se croient investis d\'un droit naturel à commander.`
    },
    {
      title: 'II. Albert Camus : L\'Absurde et la transcendance par la révolte',
      content: `1. L\'Étranger (1942) : Meursault incarne la lucidité de l\'homme absurde qui refuse le mensonge social et assume jusqu\'à l\'échafaud la vérité de son ressenti.
2. L\'écriture blanche : syntaxe dépouillée, passé composé impassible brisant la chaîne de la causalité classique.
3. La Peste (1947) : transition majeure de l\'isolement tragique vers la fraternité agissante face au mal métaphysique et politique.`
    },
    {
      title: 'III. Le Nouveau Roman : La déconstruction méthodique des codes',
      content: `1. Le réquisitoire de Pour un nouveau roman (1963) : Robbe-Grillet récuse l\'illusion balzacienne du personnage héroïque et de l\'intrigue linéaire.
2. La mort du personnage : réduction à une voix anonyme, à un regard géométrique ou à un pronom inhabituel (« Vous » chez Butor).
3. Les tropismes de Sarraute : exploration microscopique des sensations pré-verbales et des tensions invisibles dissimulées sous le bavardage quotidien.`
    },
    {
      title: 'IV. Comparaison stylistique : Roman classique vs Roman moderne',
      content: `• Roman classique (Balzac) : narrateur omniscient, intrigue chronologique, psychologie explicative, illusion de réel absolue.
• Roman moderne (Camus, Robbe-Grillet) : narrateur faillible ou impersonnel, temps éclaté, énigme indéchiffrable, mise en abyme de l\'acte d\'écrire.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : mobiliser Meursault ou Roquentin pour illustrer le personnage comme interrogation métaphysique plutôt que modèle moral ; utiliser le Nouveau Roman pour questionner les frontières du récit.
• Commentaire : traquer la sécheresse des descriptions, l\'ellipse temporelle, le rejet du sensationnalisme et la distanciation ironique.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `En dynamitant les certitudes rassurantes du XIXe siècle, le roman moderne occidental a mis l\'écriture à l\'heure des angoisses de l\'homme contemporain. Il a fait du doute, de la liberté et de l\'expérimentation formelle le cœur battant de la création littéraire.`
    }
  ]
};

export const LESSON_10_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-10',
  number: 'LEÇON 10',
  title: 'LE THÉÂTRE NÉGRO-AFRICAIN D\'ENGAGEMENT HISTORIQUE : L\'EXIL D\'ALBOURI ET LA TRAGÉDIE DU ROI CHRISTOPHE',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 3 • Théâtre au XXe Siècle : Tragique, Épique & Absurde',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'Le théâtre historique africain comme tribunal de la mémoire : L\'Exil d\'Albouri de Cheik Aliou Ndao (1967 - résistance nationale, dilemme cornélien, choix héroïque de l\'exil face au canon colonial) et La Tragédie du roi Christophe d\'Aimé Césaire (1963 - les défis herculéens de la décolonisation haïtienne, la démesure du tyran visionnaire).',
  image: {
    caption: 'Figure T2.5 : La dramaturgie historique africaine — Du dilemme d\'Albouri à la folie bâtisseuse de Christophe',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="theatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#theatGrad)" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7f1d1d" text-anchor="middle">LE THÉÂTRE HISTORIQUE : RÉINVENTER LE TRAGIQUE ÉMANCIPATEUR</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">1. Cheik Aliou Ndao</text>
        <text x="14" y="52" font-size="11" fill="#374151">• L\'Exil d\'Albouri (1967)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Royaume du Djoloff (1890)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dilemme : se battre ou partir ?</text>
        <text x="14" y="118" font-size="11" fill="#374151">• L\'exil comme résistance active</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Épopée de la dignité</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">2. Aimé Césaire</text>
        <text x="14" y="52" font-size="11" fill="#374151">• La Tragédie du roi Christophe</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Première république noire (Haïti)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• La Citadelle La Ferrière</text>
        <text x="14" y="118" font-size="11" fill="#374151">• La démesure du dirigeant pressé</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Tragédie du pouvoir décolonisé</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">3. Portée Éducative</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Réhabilitation des héros nationaux</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Le théâtre comme agora civique</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Rôle central du Griot (Samba)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Avertissement aux nouveaux chefs</text>
        <text x="14" y="140" font-size="11" fill="#b91c1c" font-weight="bold">→ Conscience patriotique</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 10 : LE THÉÂTRE NÉGRO-AFRICAIN D'ENGAGEMENT HISTORIQUE : L'EXIL D'ALBOURI ET LA TRAGÉDIE DU ROI CHRISTOPHE

INTRODUCTION
Au lendemain des indépendances africaines, le théâtre s'impose comme le genre littéraire le plus immédiatement accessible et le plus puissant pour réveiller la conscience civique et politique des masses populaires. Face aux falsifications de l'histoire coloniale qui dépeignait l'Afrique précoloniale comme une terre de barbarie passive sans héros ni souverains dignes de mémoire, la dramaturgie historique négro-africaine entreprend une vaste entreprise de réhabilitation mémorielle. Avec L'Exil d'Albouri (1967) du dramaturge sénégalais Cheik Aliou Ndao (couronné du Premier Prix au Festival Panafricain d'Alger en 1969) et La Tragédie du roi Christophe (1963) du Martiniquais Aimé Césaire, le théâtre historique ne se borne pas à ressusciter un passé glorieux : il transforme la scène en une agora démocratique où se débattent les dilemmes tragiques du pouvoir, de la résistance nationale et des périls de la décolonisation.

I. CHEIK ALIOU NDAO ET L'EXIL D'ALBOURI : L'ÉPOPÉE DE LA DIGNITÉ PATRIOTIQUE
1. Le manifeste civique de la Préface de L'Exil d'Albouri :
Dans une préface devenue le bréviaire du théâtre engagé sénégalais, Cheik Aliou Ndao définit la mission de l'artiste : « Le théâtre n'est pas un jeu d'évasion ; il doit être une prise de conscience historique, une école de civisme et de courage. Réhabiliter nos héros, non pour nous endormir dans la nostalgie stérile de leurs exploits, mais pour galvaniser notre volonté de bâtir une nation libre et unie. »
2. La trame dramatique et le contexte historique (1890) :
La pièce se déroule à Yang-Yang en 1890, capitale du royaume du Djoloff. La colonne militaire française commandée par le colonel Dodds marche sur le pays pour anéantir sa souveraineté et imposer le protectorat colonial.
3. Le dilemme cornélien d'Albouri Ndiaye :
Le roi Albouri est confronté à un choix tragique d'une intensité déchirante :
- La tentation du suicide d'honneur immédiat : livrer une bataille frontale désespérée contre les canons rayés français pour périr glorieusement l'arme à la main, quitte à livrer les femmes, les enfants et les survivants au massacre et à la servitude ;
- Le choix sacrificiel et incompris de l'Exil : refuser la capitulation, abandonner le sol natal et emmener tout son peuple dans une longue marche vers l'Est pour rejoindre l'empire d'Ahmadou Tall et de Samory Touré afin de fédérer les forces de résistance anticoloniale.
4. L'affrontement idéologique avec le prince Samba Laobé Penda :
Le demi-frère d'Albouri, Samba Laobé Penda, incarne la compromission collaborationniste : il préfère pactiser lâchement avec le colonisateur blanc pour recevoir une couronne factice de roi fantoche. Face à lui, la reine-mère Seb Fall et le griot royal soutiennent la grandeur inflexible d'Albouri. Dans une réplique mémorable, Albouri proclame : « Je ne livre pas le Djoloff ! Si je reste, je me bats et je meurs en roi, mais mon peuple devient esclave. Mieux vaut partir vivant et libre pour continuer le combat ailleurs : la patrie n'est pas seulement une terre, elle est dans le cœur d'hommes libres ! »

II. AIMÉ CÉSAIRE ET LA TRAGÉDIE DU ROI CHRISTOPHE : LA DÉMESURE DU DESTIN DÉCOLONISÉ
1. Le contexte haïtien : la première république noire de l'Histoire :
En 1804, après avoir brisé les chaînes de l'esclavage et défait les armées de Napoléon Bonaparte, le peuple haïtien proclame la première république noire indépendante au monde. Mais cette liberté chèrement conquise est aussitôt menacée de faillite économique, d'isolement diplomatique et de guerre civile.
2. Le personnage prométhéen d'Henri Christophe :
Élu président mais refusant une constitution parlementaire qui le prive de pouvoir réel, Henri Christophe se proclame roi du Nord d'Haïti. Christophe est habité par une obsession surhumaine : prouver à l'Occident raciste que les Noirs sont capables de bâtir une nation aussi moderne, puissante et prestigieuse que les monarchies européennes.
3. La construction titanesque de la Citadelle La Ferrière :
Pour matérialiser cette dignité noire, Christophe contraint son peuple à un travail herculéen pour ériger sur la montagne la monumentale Citadelle La Ferrière : « Ce peuple doit se procurer par son propre travail une fierté que rien ne pourra jamais briser ! » Mais cette volonté titanique tourne à la tyrannie aveugle. Christophe exige l'impossible de paysans épuisés qui voient dans ses corvées une réplique cruelle de l'esclavage d'antan.
4. La chute tragique du roi visionnaire :
Frappé d'une crise d'apoplexie en pleine messe alors que son peuple se révolte contre son autorité d'airain, Christophe comprend que l'on ne peut pas forcer un peuple à être libre contre son gré en lui imposant un rythme surhumain. Refusant de tomber vivant aux mains des insurgés, il se tire une balle d'argent dans le cœur, vêtu de son manteau royal immaculé. Césaire offre ici une mise en garde prophétique d'une lucidité féroce pour tous les dirigeants de la jeune Afrique indépendante.

III. LES CARACTÉRISTIQUES DRAMATURGIQUES DU THÉÂTRE HISTORIQUE AFRICAIN
1. Le rôle central du Griot :
Héritier du chœur tragique de la tragédie grecque antique, le griot (comme Samba dans L'Exil d'Albouri ou Hugonin dans La Tragédie du roi Christophe) commente l'action, module l'émotion populaire, rappelle la mémoire des ancêtres et interpelle directement la conscience du souverain et des spectateurs.
2. L'hybridation poétique :
La dramaturgie associe le verset noble, les chants traditionnels, le son vibrant des tambours de guerre et la prose oratoire majestueuse, conférant au spectacle théâtral la solennité d'une communion rituelle nationale.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Références capitales pour :
  - Le théâtre comme instrument d'éveil politique et de réécriture de l'Histoire ;
  - La figure du héros tragique : entre devoir collectif, grandeur morale et solitude du pouvoir ;
  - Les écueils de la liberté conquise : comment gouverner au lendemain de la décolonisation ?
• En commentaire composé : Analyser la dramatisation des tirades oratoires, la stichomythie (affrontement réplique contre réplique), l'emploi d'antithèses frappantes (servitude dorée vs exil héroïque) et le lyrisme prophétique.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
L'Exil d'Albouri et La Tragédie du roi Christophe illustrent magistralement la grandeur du théâtre négro-africain. En refusant le piège de la flatterie chauvine pour scruter avec gravité le prix de la dignité et les périls de l'exercice du pouvoir, Cheik Aliou Ndao et Aimé Césaire ont offert à la scène dramatique mondiale deux tragédies impérissables qui continuent d'instruire et d'exalter les peuples libres.`,
  sections: [
    {
      title: 'I. Cheik Aliou Ndao : La scène comme tribunal de l\'Histoire',
      content: `1. La leçon civique de la Préface : le théâtre comme outil pédagogique pour forger la conscience nationale et exhumer les héros gommés par le colonisateur.
2. Le Djoloff en 1890 : l\'imminence de l\'invasion coloniale du colonel Dodds et l\'épreuve suprême imposée à la royauté wolof.`
    },
    {
      title: 'II. Le dilemme cornélien d\'Albouri Ndiaye',
      content: `1. Rejet de la soumission lâche : refus catégorique de pactiser avec l\'envahisseur blanc pour sauver son trône comme le suggère Samba Laobé Penda.
2. L\'arbitrage entre suicide d\'honneur et survie collective : préférer l\'exil douloureux mais lucide pour préserver la liberté du peuple et continuer la résistance à l\'Est.
3. Dimension éthique de la patrie : la nation ne se réduit pas à une portion de terre conquise ; elle vit dans la dignité inaliénable des hommes libres.`
    },
    {
      title: 'III. Aimé Césaire : L\'épopée d\'Henri Christophe et le vertige haïtien',
      content: `1. Haïti 1804 : la responsabilité historique colossale de la première république noire après l\'abolition héroïque de l\'esclavage.
2. Le rêve prométhéen : Christophe veut arracher son peuple à l\'humiliation séculaire par l\'édification titanesque de la Citadelle La Ferrière.
3. La dérive tyrannique et la mort royale : le piège d\'un chef qui veut aller plus vite que son peuple et préfère la mort souveraine à la déchéance.`
    },
    {
      title: 'IV. Spécificités dramaturgiques de la tragédie africaine',
      content: `1. Le griot comme médiateur civique : fonction d\'archive vivante, de censeur moral du roi et de porte-voix des angoisses populaires.
2. Poétique de l\'affrontement : tirades éloquentes, solennité des adieux au sol natal et intégration des percussions sacrées marquant le destin.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : analyser comment le théâtre historique permet d\'éclairer les dilemmes politiques du présent ; confronter le destin d\'Albouri à la figure du héros classique.
• Commentaire : disséquer les figures d\'opposition rhétorique, le lexique de l\'honneur et de la trahison, et le registre épico-tragique.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `En transfigurant les épopées d\'Albouri et de Christophe en tragédies universelles, Ndao et Césaire ont offert au monde noir un miroir grandiose. Le théâtre historique y démontre que la véritable victoire réside dans le refus absolu de courber la tête.`
    }
  ]
};
