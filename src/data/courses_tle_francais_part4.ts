import { LessonContent } from './courses';

// =========================================================================
// FRANÇAIS CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 4 (LEÇONS 16 À 20)
// Programme officiel national de la République du Sénégal
// Cours exhaustifs intégraux sans résumé, grands axes et méthodologie Bac
// =========================================================================

export const LESSON_16_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-16',
  number: 'LEÇON 16',
  title: 'LA PENSÉE DÉCOLONIALE ET LA RENAISSANCE AFRICAINE : FRANTZ FANON ET CHEIKH ANTA DIOP',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 4 • Littérature d\'Idées, Essai & Fonctions Littéraires',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'Les deux piliers intellectuels de la décolonisation africaine : Les Damnés de la terre de Frantz Fanon (1961 - la psychiatrie coloniale, la violence purificatrice du colonisé, les mésaventures de la conscience nationale) et Nations nègres et culture de Cheikh Anta Diop (1954 - la preuve scientifique de l\'origine nègre de la civilisation égyptienne antique, la souveraineté linguistique et l\'unité fédérale africaine).',
  image: {
    caption: 'Figure T4.1 : La double révolution décoloniale — La rupture révolutionnaire (Fanon) et la réhabilitation historique (Diop)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="fanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#fanGrad)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#082f49" text-anchor="middle">LES GÉANTS DE LA LIBÉRATION INTELLECTUELLE AFRICAINE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">1. Frantz Fanon (1961)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Les Damnés de la terre</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Psychiatrie de l\'oppression</text>
        <text x="14" y="96" font-size="11" fill="#374151">• La violence désaliénante</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Pièges de la bourgeoisie locale</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Révolution anticoloniale</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">2. Cheikh Anta Diop (1954)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Nations nègres et culture</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Égypte pharaonique = nègre</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Rigueur scientifique &amp; carbone 14</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Langues nationales &amp; État fédéral</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Renaissance scientifique</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">3. Impact Historique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Restauration de l\'estime de soi</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Décolonisation des esprits</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Refus du néocolonialisme</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Horizon : Humanité réconciliée</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Souveraineté africaine</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 16 : LA PENSÉE DÉCOLONIALE ET LA RENAISSANCE AFRICAINE : FRANTZ FANON ET CHEIKH ANTA DIOP

INTRODUCTION
Au cœur des luttes d'émancipation du monde noir au XXe siècle, deux figures intellectuelles d'une stature gigantesque ont révolutionné la conscience politique et scientifique contemporaine : le psychiatre martiniquais Frantz Fanon (1925-1961) et le savant polymathe sénégalais Cheikh Anta Diop (1923-1986). Loin de se cantonner à la dénonciation poétique des souffrances coloniales, ces deux géants de la pensée ont armé l'Afrique d'une armature théorique, clinique et historique indestructible. Avec Les Damnés de la terre (1961), Fanon livre une autopsie sans complaisance du système colonial et avertit prophétiquement contre la faillite prévisible des bourgeoisies compradores après les indépendances. Avec Nations nègres et culture (1954), qualifié par Aimé Césaire de « livre le plus audacieux qu'un Noir ait jamais écrit », Cheikh Anta Diop pulvérise le mythe colonial de l'Afrique anhistorique en démontrant scientifiquement l'origine négro-africaine de la brillante civilisation de l'Égypte pharaonique, posant ainsi le socle inébranlable de la renaissance africaine.

I. FRANTZ FANON ET LES DAMNÉS DE LA TERRE (1961) : CLINIQUE DE LA LIBÉRATION
1. La trajectoire d'un combattant de la liberté :
Médecin psychiatre à l'hôpital de Blida-Joinville durant la guerre d'Algérie, Fanon démissionne avec éclat pour rejoindre le Front de Libération Nationale (FLN). Il comprend que les troubles mentaux de ses patients algériens ne sont pas des pathologies individuelles, mais la conséquence directe et inévitable de la violence structurelle imposée par la domination coloniale.
2. « De la violence » : La fonction désaliénante de la contre-violence révolutionnaire :
Fanon théorise la violence coloniale comme un système manichéen absolu qui a compartimenté le monde en deux zones étanches (la ville propre et opulente du colon vs le bidonville affamé du colonisé). Face à cette agression permanente soutenue par les fusils et les baïonnettes, la violence du colonisé n'est pas une sauvagerie aveugle : elle est une thérapie d'auto-délivrance psychologique. Elle désintoxique le colonisé de son complexe d'infériorité séculaire et lui redonne sa stature d'homme debout : « Pour le colonisé, la violence est une force purificatrice. Elle le débarrasse de son désespoir et de son inaction ; elle le rend intrépide et réhabilite sa dignité. »
3. « Mésaventures de la conscience nationale » : Le réquisitoire prophétique :
Dans le chapitre le plus visionnaire des Damnés de la terre, Fanon prophétise avec une exactitude saisissante les dérives des jeunes républiques post-coloniales :
- La bourgeoisie nationale africaine n'est pas une classe de capitaines d'industrie créateurs de richesses ; c'est une bourgeoisie parasitaire, paresseuse et corrompue, qui se contente de remplacer le colon blanc dans les villas cossues et de gérer les comptoirs commerciaux des firmes étrangères ;
- Le parti unique devient une coquille vide servant à bâillonner le peuple et à assurer l'enrichissement insolent d'une clique de privilégiés ;
- Fanon lance son avertissement solennel : « Il ne faut pas payer de tribut à l'Europe en créant des États, des institutions et des sociétés qui s'en inspirent. L'humanité attend autre chose de nous que cette imitation caricaturale et dans l'ensemble obscène. Quittons cette Europe qui n'en finit pas de parler de l'homme tout en le massacrant partout où elle le rencontre ! »

II. CHEIKH ANTA DIOP ET NATIONS NÈGRES ET CULTURE (1954) : LA RÉVOLUTION HISTORIQUE ET SCIENTIFIQUE
1. Le refus de l'aliénation historique :
Pour maintenir le Noir dans la servitude, l'Occident impérialiste avait effacé son passé. Comme l'affirmaient les philosophes européens racistes (Hegel prétendant que « l'Afrique est un monde anhistorique, non développé »), le Noir était décrété n'avoir jamais rien produit dans l'ordre de la science, de l'art ou de la civilisation.
2. La thèse révolutionnaire de 1954 : L'Égypte antique, civilisation négro-africaine :
Docteur ès sciences et historien, Cheikh Anta Diop établit avec une rigueur méthodologique implacable que l'Égypte des pharaons — berceau des sciences, des mathématiques, de l'architecture, de l'astronomie et de la philosophie qui ont fécondé la Grèce antique — était une civilisation noire.
3. Les preuves scientifiques pluridisciplinaires :
Contre les préjugés idéologiques de l'égyptologie coloniale occidentale, Diop mobilise un faisceau d'arguments scientifiques irréfutables :
- Arguments anthropologiques et biologiques : analyse des momies royales au microscope électronique, test de dosage de la mélanine sur la peau des pharaons, groupe sanguin, mensurations ostéologiques ;
- Témoignages des Anciens grecs : les témoignages unanimes d'Hérodote, de Diodore de Sicile, de Strabon décrivant les Égyptiens anciens comme ayant « la peau noire et les cheveux crépus » ;
- Preuves linguistiques incontestables : parenté génétique directe démontrée entre l'égyptien ancien (hiéroglyphique) et les langues négro-africaines vivantes contemporaines, tout particulièrement le wolof (grammaire, lexique fondamental des mathématiques et de la royauté) ;
- Continuités socioculturelles : le totémisme, le matriarcat, la circoncision, la sacralité royale partagée par l'Égypte pharaonique et l'Afrique subsaharienne.
4. Le triomphe au Colloque International du Caire (1974) :
Convoqué par l'UNESCO pour confronter les thèses en présence, le Colloque du Caire réunit les plus grands égyptologues de la planète. Au terme de débats scientifiques acharnés, le rapport final de l'UNESCO acte la victoire magistrale de Cheikh Anta Diop et de Théophile Obenga : les arguments des partisans d'une Égypte blanche sont jugés périmés et méthodologiquement sans consistance.

III. LES CHANTIERS DE L'AVENIR SELON CHEIKH ANTA DIOP
1. La réhabilitation des langues nationales :
Pour Diop, aucun peuple ne s'est jamais développé dans la langue d'un autre. Il prouve la ductilité et la puissance scientifique du wolof en traduisant dans cette langue la Théorie de la Relativité d'Albert Einstein, des traités de physique nucléaire et des pièces de théâtre classiques.
2. L'unité politique fédérale : Les fondements économiques et culturels d'un État fédéral d'Afrique Noire :
L'Afrique émiettée en micro-États n'a aucun avenir économique face aux superpuissances mondiales. Seule la constitution immédiate d'un grand État Fédéral continental démocratique, exploitant souverainement ses ressources énergétiques immenses (barrages hydroélectriques sur le fleuve Zaïre/Congo, énergie solaire), permettra à l'Afrique de redevenir un géant politique et industriel mondial.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire et philosophique : Citations et arguments d'autorité capitaux pour :
  - La fonction de l'essai et de la littérature d'idées comme moteurs de l'Histoire ;
  - La décolonisation de la mémoire et la réhabilitation de la vérité historique contre le mensonge impérialiste ;
  - Les écueils du néocolonialisme et la responsabilité de l'intellectuel africain contemporain.
• En commentaire composé : Analyser la puissance du réquisitoire polémique chez Fanon (métaphores médicales de la gangrène et de la cure, virulence de l'apostrophe), et la rigueur du raisonnement scientifique démonstratif chez Diop (démarche hypothético-déductive, réfutabilité poppérienne).

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Frantz Fanon et Cheikh Anta Diop ont accompli la plus prodigieuse révolution copernicienne des temps modernes pour le monde noir. Fanon a libéré la volonté d'action des opprimés de ses complexes psychologiques ; Diop a rendu à l'Afrique son passé glorieux et sa souveraineté scientifique. Leurs pensées demeurent les phares indestructibles qui éclairent la marche de la jeunesse africaine vers son émancipation totale et définitive.`,
  sections: [
    {
      title: 'I. Frantz Fanon : Diagnostic clinique du complexe colonial',
      content: `1. Expérience de Blida-Joinville : la psychiatrie au contact de la guerre d\'Algérie ; la folie comme symptôme direct de l\'aliénation coloniale institutionnalisée.
2. La violence purificatrice : la contre-violence révolutionnaire comme unique thérapie capable de briser la sidération psychologique du colonisé et de restaurer son humanité souveraine.`
    },
    {
      title: 'II. Les Damnés de la terre et la faillite de la bourgeoisie compradore',
      content: `1. « Mésaventures de la conscience nationale » : prophétie éclatante sur le parasitisme des nouvelles élites africaines se contentant de singer le colonisateur.
2. Le danger du parti unique : dérive autocratique et détournement des richesses nationales au détriment des masses paysannes.
3. L\'appel à l\'homme nouveau : rupture impérative avec le modèle décadent de l\'Europe pour inventer une nouvelle fraternité universelle.`
    },
    {
      title: 'III. Cheikh Anta Diop : La preuve scientifique de la grandeur africaine',
      content: `1. Révolution de Nations nègres et culture (1954) : démolition du postulat hégélien et colonial de l\'Afrique sans histoire.
2. L\'origine nègre de l\'Égypte pharaonique : démonstrations croisées (analyse de la mélanine, parenté linguistique égyptien-wolof, témoignages des historiens grecs Hérodote et Strabon).
3. Le Colloque d\'Égyptologie du Caire (UNESCO, 1974) : triomphe académique mondial de Diop et Obenga face aux thèses eurocentristes.`
    },
    {
      title: 'IV. Le programme panafricain pour le XXIe siècle',
      content: `1. Souveraineté linguistique : modernisation et enseignement dans les langues africaines (traduction de la relativité d\'Einstein en wolof).
2. L\'État fédéral africain : nécessité vitale de l\'unité continentale économique, énergétique et géostratégique pour affronter les blocs mondiaux.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : mobiliser Fanon pour argumenter sur l\'engagement radical de l\'intellectuel ; convoquer Diop pour illustrer le combat de la vérité scientifique contre l\'idéologie dominatrice.
• Commentaire : traquer la rhétorique du manifeste, la dialectique matérialiste et l\'éloquence persuasive.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Fanon et Diop ont donné à l\'Afrique les clés de sa résurrection. En alliant le courage du combattant à la rigueur du laboratoire, ils ont brisé les chaînes de l\'aliénation et tracé la route royale de la souveraineté africaine.`
    }
  ]
};

export const LESSON_17_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-17',
  number: 'LEÇON 17',
  title: 'LES FONCTIONS PLURIELLES DE LA LITTÉRATURE : ESTHÉTIQUE, SUBVERSIVE, CATHARTIQUE ET MÉMORIELLE',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 4 • Littérature d\'Idées, Essai & Fonctions Littéraires',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Panorama exhaustif et théorique des finalités de l\'art d\'écrire : la fonction esthétique (l\'Art pour l\'Art, le culte de la forme pure), la fonction critique et subversive (le glaive du combat politique et social), la fonction cathartique et psychologique (la purgation des passions), la fonction mémorielle et testimoniale (le devoir de mémoire), et la fonction didactique et philosophique.',
  image: {
    caption: 'Figure T4.2 : L\'étoile des finalités littéraires — Les cinq grandes fonctions cardinales',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="foncGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#a855f7" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#foncGrad)" stroke="#a855f7" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#4c1d95" text-anchor="middle">TYPOLOGIE EXHAUSTIVE DES FONCTIONS DE LA LITTÉRATURE</text>
      
      <g transform="translate(20, 60)">
        <rect width="135" height="170" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.2"/>
        <text x="67" y="22" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">1. Esthétique</text>
        <text x="8" y="44" font-size="10" fill="#374151">• L\'art pour l\'art</text>
        <text x="8" y="64" font-size="10" fill="#374151">• Parnasse (Gautier)</text>
        <text x="8" y="84" font-size="10" fill="#374151">• Culte du Beau</text>
        <text x="8" y="104" font-size="10" fill="#374151">• Rigueur métrique</text>
        <text x="8" y="124" font-size="10" fill="#374151">• Jouissance pure</text>
        <text x="8" y="148" font-size="10" fill="#7e22ce" font-weight="bold">→ Harmonie</text>
      </g>

      <g transform="translate(170, 60)">
        <rect width="135" height="170" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.2"/>
        <text x="67" y="22" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">2. Subversive</text>
        <text x="8" y="44" font-size="10" fill="#374151">• Engagement total</text>
        <text x="8" y="64" font-size="10" fill="#374151">• Voltaire, Hugo</text>
        <text x="8" y="84" font-size="10" fill="#374151">• Césaire, Sembène</text>
        <text x="8" y="104" font-size="10" fill="#374151">• Arme de combat</text>
        <text x="8" y="124" font-size="10" fill="#374151">• Dénoncer l\'injustice</text>
        <text x="8" y="148" font-size="10" fill="#7e22ce" font-weight="bold">→ Révolution</text>
      </g>

      <g transform="translate(320, 60)">
        <rect width="135" height="170" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.2"/>
        <text x="67" y="22" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">3. Cathartique</text>
        <text x="8" y="44" font-size="10" fill="#374151">• Catharsis grecque</text>
        <text x="8" y="64" font-size="10" fill="#374151">• Purgation passions</text>
        <text x="8" y="84" font-size="10" fill="#374151">• Terreur &amp; Pitié</text>
        <text x="8" y="104" font-size="10" fill="#374151">• Épanchement lyrique</text>
        <text x="8" y="124" font-size="10" fill="#374151">• Apaisement âme</text>
        <text x="8" y="148" font-size="10" fill="#7e22ce" font-weight="bold">→ Soulagement</text>
      </g>

      <g transform="translate(470, 60)">
        <rect width="135" height="170" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.2"/>
        <text x="67" y="22" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">4. Mémorielle</text>
        <text x="8" y="44" font-size="10" fill="#374151">• Devoir de mémoire</text>
        <text x="8" y="64" font-size="10" fill="#374151">• Traite &amp; Esclavage</text>
        <text x="8" y="84" font-size="10" fill="#374151">• Primo Levi, Boris Diop</text>
        <text x="8" y="104" font-size="10" fill="#374151">• Tombeau des morts</text>
        <text x="8" y="124" font-size="10" fill="#374151">• Contre l\'oubli</text>
        <text x="8" y="148" font-size="10" fill="#7e22ce" font-weight="bold">→ Témoignage</text>
      </g>

      <g transform="translate(620, 60)">
        <rect width="140" height="170" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.2"/>
        <text x="70" y="22" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">5. Didactique</text>
        <text x="8" y="44" font-size="10" fill="#374151">• « Docere et placere »</text>
        <text x="8" y="64" font-size="10" fill="#374151">• Instruire en plaisant</text>
        <text x="8" y="84" font-size="10" fill="#374151">• Fables de La Fontaine</text>
        <text x="8" y="104" font-size="10" fill="#374151">• Contes d\'Amadou Koumba</text>
        <text x="8" y="124" font-size="10" fill="#374151">• Éveil philosophique</text>
        <text x="8" y="148" font-size="10" fill="#7e22ce" font-weight="bold">→ Connaissance</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 17 : LES FONCTIONS PLURIELLES DE LA LITTÉRATURE : ESTHÉTIQUE, SUBVERSIVE, CATHARTIQUE ET MÉMORIELLE

INTRODUCTION
Qu'est-ce qui pousse les hommes, depuis l'aube des civilisations, à composer des poèmes, à imaginer des fictions romanesques et à monter des pièces de théâtre ? La littérature n'est réductible à aucune fin univoque : elle est un carrefour prodigieux d'aspirations humaines où se croisent la quête de la beauté formelle, le cri de révolte politique contre la tyrannie, le besoin de soulager ses souffrances intimes, l'impérieux devoir de transmettre la mémoire des victimes et la volonté d'éduquer les consciences. En classe de Terminale, la maîtrise rigoureuse de la typologie des fonctions littéraires constitue la clé de voûte de toute dissertation littéraire réussie au Baccalauréat. Dépasser les oppositions simplistes pour penser la complémentarité dialectique de ces finalités permet de saisir l'inépuisable fécondité du génie créateur.

I. LA FONCTION ESTHÉTIQUE : LE CULTE DU BEAU ET « L'ART POUR L'ART »
1. La doctrine de l'autonomie de l'art :
Théorisée avec éclat par Théophile Gautier dans la célèbre Préface de Mademoiselle de Maupin (1835) puis adoptée par les Parnassiens (Leconte de Lisle, Heredia) et les Symbolistes (Mallarmé) : « Il n'y a de vraiment beau que ce qui ne peut servir à rien ; tout ce qui est utile est laid. » Selon cette vision, l'art ne doit servir ni la morale, ni la politique, ni la religion : sa seule justification réside dans la perfection harmonique de sa forme et la musicalité de son langage.
2. Le travail d'orfèvre sur la langue :
L'écrivain est un artisan sculpteur du verbe. Chez Flaubert recherchant obstinément le « mot juste » ou Mallarmé proclamant que « c'est avec des mots, et non avec des idées, qu'on fait des vers », la littérature procure une jouissance intellectuelle et sensible désintéressée qui élève l'esprit au-dessus de la médiocrité utilitaire quotidienne.

II. LA FONCTION CRITIQUE, SUBVERSIVE ET COMBATIVE : LA LITTÉRATURE COMME GLAIVE
1. L'écrivain comme conscience morale et dénonciateur des abus :
À l'opposé de la gratuité esthétique pure, la littérature a toujours été l'une des armes les plus redoutables pour bousculer l'ordre établi et dynamiter l'injustice :
- Les Philosophes des Lumières (Voltaire combattant l'intolérance fanatique dans le Traité sur la tolérance et Candide ; Rousseau dénonçant l'inégalité dans le Contrat social) ;
- Victor Hugo fustigeant la tyrannie dans Les Châtiments et la misère populaire dans Les Misérables ;
- Aimé Césaire (Discours sur le colonialisme) et Frantz Fanon (Les Damnés de la terre) brisant les fers de la sujétion coloniale ;
- Sembène Ousmane et Ahmadou Kourouma dénonçant les dérives du néocolonialisme africain.
2. Éveiller, déranger, désenchanter :
Comme l'écrivait Jean-Paul Sartre : « La littérature n'est pas un chant innocent, elle est un acte d'accusation. » Elle empêche les sociétés de dormir en paix sur leurs certitudes criminelles.

III. LA FONCTION CATHARTIQUE ET PSYCHOLOGIQUE : PURGER LES PASSIONS ET SOULAGER L'ÂME
1. La catharsis aristotélicienne :
Dans la Poétique, Aristote montre que le spectacle des passions violentes (la haine, l'amour incestueux, la terreur du destin chez Sophocle ou Racine) permet aux spectateurs d'expulser symboliquement leurs propres démons intérieurs et de retrouver la paix de l'âme.
2. Le refuge lyrique et thérapeutique :
Pour l'écrivain lui-même, l'acte d'écrire est souvent une thérapie de salut face au deuil, à la folie ou au désespoir. Victor Hugo consacrant Les Contemplations à sa fille Léopoldine tragiquement noyée affirme : « Ce livre doit être lu comme on lirait le livre d'un mort [...] C'est une âme qui se raconte. » Pour le lecteur, le roman ou le poème est un confident silencieux qui brise la solitude existentielle en prouvant que d'autres avant lui ont éprouvé les mêmes déchirements.

IV. LA FONCTION MÉMORIELLE ET TESTIMONIALE : LE DEVOIR DE MÉMOIRE CONTRE L'OUBLI
1. Sauver les disparus de la seconde mort :
Lorsque l'Histoire est tragique (la traite négrière transatlantique, les tranchées de 14-18, la Shoah, les massacres coloniaux, le génocide des Tutsi au Rwanda), les bourreaux tentent toujours d'effacer les traces de leurs forfaits. La littérature s'érige alors en sanctuaire mémoriel inaltérable :
- Primo Levi avec Si c'est un homme (1947), témoignant de l'enfer d'Auschwitz ;
- David Diop avec Frère d'âme (Prix Booker 2021), ressuscitant la tragédie des tirailleurs sénégalais dans les tranchées de la Grande Guerre ;
- Boubacar Boris Diop avec Murambi, le livre des ossements (2000), gravant dans la conscience universelle le souvenir du génocide rwandais de 1994.
2. Être le tombeau des sans-voix :
Comme l'exprimait magistralement Aimé Césaire : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche. » Le texte littéraire devient le monument funéraire indestructible élevé à la dignité des massacrés.

V. LA FONCTION DIDACTIQUE ET PHILOSOPHIQUE : INSTRUIRE EN PLAISANT (« PLACERE ET DOCERE »)
1. L'apologue, la fable et le conte :
D'Ésope à Jean de La Fontaine, et des contes traditionnels de Birago Diop (Les Contes d'Amadou Koumba) aux paraboles philosophiques, la littérature utilise le détour plaisant de la fiction imaginaire pour faire passer un enseignement éthique fondamental : « Le monde est vieux, dit-on : je le crois, cependant / Il le faut amuser encor comme un enfant » (La Fontaine).
2. L'apprentissage du discernement critique :
En confrontant le lecteur à des dilemmes moraux complexes, la littérature aiguise l'esprit critique, apprend la nuance et préserve l'humanité du poison du dogmatisme simpliste.

VI. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : La maîtrise des cinq fonctions permet de répondre avec aisance à des sujets récurrents :
  - « La littérature doit-elle être utile ou simplement belle ? » (Confronter fonction esthétique et fonction subversive) ;
  - « Un roman n'est-il qu'un miroir de la vie ou une création souveraine ? » (Confronter fonction testimoniale et fonction esthétique/philosophique) ;
  - « Lire sert-il à fuir le réel ou à mieux l'affronter ? » (Confronter évasion récréative et prise de conscience civique).
• En commentaire composé : Déterminer la fonction dominante du texte à étudier pour formuler la problématique et bâtir les axes de lecture.

VII. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La littérature est le miroir total de l'aventure humaine. Vouloir l'enfermer dans une fonction unique serait mutiler sa grandeur. C'est précisément parce qu'elle sait être à la fois pure mélodie, glaive de justice, tombeau des martyrs et baume consolateur qu'elle demeure, par-delà les siècles, la plus sublime création de l'esprit humain.`,
  sections: [
    {
      title: 'I. La fonction esthétique : Culte du Beau et perfection formelle',
      content: `1. « L\'art pour l\'art » : Théophile Gautier et le rejet de l\'utilitarisme bourgeois étriqué (« Tout ce qui est utile est laid »).
2. L\'alchimie du verbe : Flaubert et le labeur du mot juste ; Mallarmé et la suprématie de la musicalité poétique pure.`
    },
    {
      title: 'II. La fonction subversive et combattive : Le verbe comme glaive',
      content: `1. L\'engagement politique : des pamphlets de Voltaire à la plume incandescente de Césaire et Sembène Ousmane.
2. Dévoiler pour transformer : Sartre affirme que nommer l\'injustice, c\'est déjà la rendre intolérable et appeler le peuple à la révolte.`
    },
    {
      title: 'III. La fonction cathartique : La purgation des tourments de l\'âme',
      content: `1. La catharsis aristotélicienne : évacuation salutaire de la terreur et de la pitié par le spectacle des passions théâtrales.
2. Thérapeutique de l\'écriture : Les Contemplations de Hugo ; écrire pour survivre au deuil et offrir au lecteur un compagnon de détresse.`
    },
    {
      title: 'IV. La fonction mémorielle et testimoniale : Vaincre l\'oubli historique',
      content: `1. Contre l\'amnésie : Primo Levi (Si c\'est un homme), Boubacar Boris Diop (Murambi) et David Diop (Frère d\'âme).
2. Le devoir sacré : transformer la page de livre en tombeau éternel pour les victimes anonymes de la barbarie humaine.`
    },
    {
      title: 'V. La fonction didactique et philosophique : Éduquer l\'esprit',
      content: `1. « Placere et docere » : la tradition de l\'apologue chez La Fontaine et du conte oral chez Birago Diop.
2. L\'éveil du jugement : la fiction comme miroir éthique pour déconstruire les préjugés et apprendre à penser librement.`
    },
    {
      title: 'VI. Portée méthodologique pour le Baccalauréat',
      content: `• Clés de dissertation : organiser sa réflexion autour de la dialectique Plaisir esthétique vs Utilité morale et politique.
• Clés de commentaire : identifier les registres (polémique, élégiaque, tragique, épidictique, satirique) associés à chaque finalité textuelle.`
    },
    {
      title: 'VII. Conclusion générale et bilan critique',
      content: `Les fonctions littéraires forment un polyèdre vivant. C\'est dans leur harmonieuse coexistence que la littérature accomplit sa plus haute mission : élever l\'homme au-dessus de sa condition mortelle.`
    }
  ]
};

export const LESSON_18_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-18',
  number: 'LEÇON 18',
  title: 'LA DISSERTATION LITTÉRAIRE AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE COMPLÈTE ET DEVOIR TYPE ENTIÈREMENT RÉDIGÉ',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 5 • Méthodologie Experte des Épreuves du Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'Le guide magistral et exhaustif pour dominer l\'épreuve reine du Baccalauréat de français au Sénégal : déconstruction notionnelle du libellé, analyse du présupposé et de la thèse, formulation de la problématique, typologie des plans (dialectique, thématique, analytique), technique du paragraphe A.E.I. et devoir type intégral rédigé avec corpus d\'exemples sénégalais et mondiaux.',
  image: {
    caption: 'Figure T5.1 : Architecture officielle de la dissertation littéraire au Baccalauréat sénégalais',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="dissGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b45309" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#dissGrad)" stroke="#d97706" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">MÉTHODOLOGIE OFFICIELLE DE LA DISSERTATION AU BACCALAURÉAT</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">1. L\'Introduction (4 Étapes)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Amorce générale (contexte)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Citation exacte &amp; auteur</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Problématique centrale</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Annonce claire du plan</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Aucun saut de ligne interne</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">2. Le Développement A.E.I.</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Affirmation de l\'idée directrice</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Explication théorique fine</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Illustration littéraire précise</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Transitions rédigées soignées</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ 2 ou 3 grandes parties</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">3. La Conclusion (3 Étapes)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Bilan synthétique des acquis</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Réponse nette au problème</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Prise de position personnelle</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Ouverture féconde pertinente</text>
        <text x="14" y="140" font-size="11" fill="#b45309" font-weight="bold">→ Couronnement du devoir</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 18 : LA DISSERTATION LITTÉRAIRE AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE COMPLÈTE ET DEVOIR TYPE ENTIÈREMENT RÉDIGÉ

INTRODUCTION
Épreuve reine du Baccalauréat sénégalais en Séries L et S, la dissertation littéraire est un exercice rigoureux de réflexion argumentée, de composition rhétorique et d'évaluation critique de la culture littéraire du candidat. Elle ne consiste en aucun cas en un bavardage impressionniste ou en une récitation mécanique de cours appris par cœur. Elle exige une démarche intellectuelle scientifique en trois temps : déconstruire méticuleusement les termes d'une citation d'auteur ou d'un sujet d'opinion ; dégager la problématique implicite ou explicite qui sous-tend le problème posé ; et construire un raisonnement dialectique ou thématique étayé d'exemples littéraires précis, analysés et commentés, issus du patrimoine littéraire négro-africain et universel.

I. LES QUATRE ÉTAPES DU TRAVAIL PRÉPARATOIRE AU BROUILLON (1H15)
1. Analyse notionnelle et déconstruction du libellé :
- Souligner les mots-clés et les définir précisément en contexte ;
- Identifier les connecteurs logiques (mais, cependant, parce que, afin de) qui structurent la pensée de l'auteur ;
- Dégager le présupposé (ce que l'auteur admet comme évident sans le dire) et la thèse explicite (ce qu'il affirme avec force).
2. Formulation de la problématique :
La problématique est la question centrale que soulève le sujet. Elle doit être formulée sous forme d'une question directe ou indirecte mettant en tension deux aspects contradictoires de la vérité littéraire.
3. Choix du plan approprié :
- Plan dialectique (Thèse / Antithèse / Synthèse ou Dépassement) : indispensable lorsque la consigne est ouverte (« Discutez cette affirmation », « Partagez-vous ce point de vue ? », « Dans quelle mesure peut-on affirmer que... ? ») ;
- Plan thématique (Inventaire analytique ordonné) : s'impose lorsque le sujet invite à explorer les multiples facettes d'un genre (« Quels sont les différents rôles du personnage de roman ? ») ;
- Plan comparatif : confronte deux conceptions, deux genres ou deux époques (« Comparez le tragique classique et le tragique moderne »).
4. Élaboration du tableau d'arguments et d'exemples (corpus A.E.I.) :
Ne jamais rédiger sans avoir couché au brouillon au moins deux arguments par partie, chacun flanqué d'une référence littéraire indiscutable (auteur, titre souligné, date ou personnage, citation ou scène clé commentée).

II. LA RÉDACTION CODIFIÉE DE L'INTRODUCTION ET DE LA CONCLUSION
1. Les 4 composantes obligatoires de l'introduction (en un seul paragraphe compact) :
- L'Amorce (ou sujet amené) : contextualisation générale liée au thème (mouvement littéraire, histoire des idées, condition de l'écrivain), évitant impérativement les clichés éculés (« De tout temps », « Depuis que le monde existe ») ;
- La Citation et l'Auteur (sujet posé) : insertion fidèle de la citation entre guillemets et mention de son auteur ;
- La Problématique : question directrice qui problématise les enjeux soulevés ;
- L'Annonce du Plan (sujet divisé) : formulation élégante et fluide des grandes articulations sans style télégraphique lourd.
2. Les 3 composantes obligatoires de la conclusion :
- Le Bilan synthétique : résumé concis des résultats de la démonstration sans répéter mot pour mot le développement ;
- La Réponse au problème : prise de position nuancée et tranchée du candidat ;
- L'Ouverture : élargissement fécond vers un autre genre, une époque ultérieure ou une interrogation philosophique majeure (ne jamais poser une question banale).

III. LA RÈGLE D'OR DU PARAGRAPHE ARGUMENTATIF : LA STRUCTURE A.E.I.
Chaque paragraphe du corps du devoir doit être bâti selon la formule A.E.I. :
1. A (Affirmation) : Énoncé clair et péremptoire de l'idée directrice dès la première phrase ;
2. E (Explication) : Démonstration théorique, analyse conceptuelle et argumentation logique justifiant pourquoi cette idée est vraie ;
3. I (Illustration) : Convocation d'un exemple littéraire précis (auteur, œuvre, épisode ou citation) analysé dans son détail esthétique pour prouver l'affirmation.

IV. MODÈLE COMPLET ENTIÈREMENT RÉDIGÉ D'UN SUJET TYPE BACCALAURÉAT SÉNÉGALAIS
• SUJET :
« Un critique contemporain affirmait : "L'écrivain véritable n'a pas à se préoccuper des querelles politiques et sociales de son temps. Sa mission suprême est de bâtir un monument de beauté pure, à l'abri des fureurs éphémères du monde."
À la lumière de vos lectures et des œuvres au programme, vous discuterez cette conception de la création littéraire. »

--- CORRIGÉ INTÉGRAL DU DEVOIR ---

[INTRODUCTION]
Depuis l'émancipation des lettres modernes, la finalité de l'acte d'écrire suscite un débat fondamental qui divise créateurs et théoriciens de l'art. Si certains considèrent que l'œuvre littéraire tire sa grandeur de son utilité civique et de son impact sur la cité, d'autres réclament pour l'art une souveraineté absolue, affranchie de toute contingence utilitaire. C'est dans cette perspective qu'un critique contemporain a pu avancer : « L'écrivain véritable n'a pas à se préoccuper des querelles politiques et sociales de son temps. Sa mission suprême est de bâtir un monument de beauté pure, à l'abri des fureurs éphémères du monde. » Une telle assertion pose avec acuité le problème de la responsabilité de l'artiste : la littérature doit-elle s'enfermer dans la tour d'ivoire du culte de la perfection esthétique pour aspirer à l'immortalité, ou sa grandeur authentique réside-t-elle précisément dans sa capacité à affronter les déchirures politiques et historiques de son époque ? Pour répondre à cette interrogation, il conviendra d'abord d'examiner la légitimité d'une poétique de la beauté pure détachée des contingences immédiates, avant de démontrer que la littérature s'élève souvent au sommet de sa dignité lorsqu'elle s'érige en glaive de combat social et politique, pour enfin parvenir à une synthèse où la perfection formelle apparaît comme la condition même de l'efficacité du message universel.

[PREMIÈRE PARTIE : L'EXIGENCE DE BEAUTÉ PURE ET LE REFUS DE L'UTILITARISME ÉPHÉMÈRE]
(Argument 1 - A.E.I.)
En premier lieu, la vocation fondamentale de l'écrivain réside dans la recherche d'une beauté autonome, capable de traverser les siècles précisément parce qu'elle s'affranchit des passions passagères de la politique. En effet, les combats partisans, les querelles électorales ou les modes idéologiques d'un jour sont par nature transitoires et voués à l'obsolescence, tandis que la forme ciselée avec rigueur confère au texte littéraire une pérennité intemporelle. Lorsque l'artiste sacrifie son talent à la propagande circonstancielle, il risque d'abaisser son œuvre au niveau du tract de circonstance périssable. C'est cette exigence d'incorruptibilité esthétique que théorisait Théophile Gautier dans sa célèbre Préface de Mademoiselle de Maupin (1835), en proclamant le dogme de l'art pour l'art : « Il n'y a de vraiment beau que ce qui ne peut servir à rien ; tout ce qui est utile est laid. » De même, les poètes du Parnasse comme Leconte de Lisle dans ses Poèmes barbares ont délibérément fui les fureurs politiques du XIXe siècle pour travailler le vers comme un sculpteur taille le marbre, offrant à l'humanité des œuvres dont la perfection plastique demeure intacte bien après la mort des régimes politiques de leur temps.

(Argument 2 - A.E.I.)
En second lieu, la littérature offre un refuge spirituel irremplaçable et une source d'évasion régénératrice pour l'âme humaine confrontée à la laideur du monde réel. Le lecteur n'attend pas de la poésie ou de la fiction romanesque qu'elle lui rappelle sans cesse ses misères quotidiennes et les déchirements de l'actualité, mais qu'elle lui ouvre les portes d'un univers enchanté, gouverné par l'harmonie, la musicalité et le mystère. Chez Stéphane Mallarmé, le poète s'isole volontairement du vacarme social pour accomplir le « grand œuvre » du langage, transmutant le réel ordinaire en joyau pur : « Donner un sens plus pur aux mots de la tribu ». Dans la tradition négro-africaine elle-même, la célébration par Léopold Sédar Senghor de la beauté plastique et sacrée dans son hymne « Femme noire » (« Femme nue, femme noire / Vêtue de ta couleur qui est vie, de ta forme qui est beauté ») relève d'une liturgie esthétique où la parole poétique sanctifie l'existence bien au-delà de toute considération partisane immédiate.

[TRANSITION]
Néanmoins, si la recherche de la perfection esthétique confère à l'œuvre sa splendeur intemporelle, l'écrivain peut-il demeurer impassible lorsque son peuple est écrasé sous les fers de la tyrannie et de l'injustice ? N'y a-t-il pas une complicité coupable à s'enfermer dans sa tour d'ivoire pendant que l'Histoire saigne ?

[DEUXIÈME PARTIE : LA LITTÉRATURE COMME ARME D'ENGAGEMENT ET DE DÉNONCIATION POLITIQUE]
(Argument 1 - A.E.I.)
D'une part, l'écrivain est un citoyen immergé corps et âme dans son siècle, dont la parole a le devoir impérieux de dénoncer l'oppression et d'éveiller la conscience des peuples. Le silence de l'intellectuel face au crime équivaut à une lâche trahison de sa vocation morale. Comme le soulignait magistralement Jean-Paul Sartre dans Qu'est-ce que la littérature ? (1947), le prosateur utilise la parole comme une arme de dévoilement : « Nommer les choses, c'est déjà les changer. » Durant le XIXe siècle français, Victor Hugo n'a pas craint de descendre dans l'arène politique : chassé par le coup d'État de Napoléon III, il compose depuis son exil de Guernesey Les Châtiments (1853), où la foudre de ses vers satiriques démasque la tyrannie impériale, tout en offrant dans Les Misérables (1862) une voix inoubliable aux opprimés et aux forçats du peuple.

(Argument 2 - A.E.I.)
D'autre part, dans le contexte des peuples colonisés et marginalisés, la prise de parole littéraire a constitué l'instrument décisif de la reconquête de la souveraineté et de la dignité humaine. Pour les écrivains du monde noir, se désintéresser des « querelles politiques et sociales » eût signifié accepter la mort programmée de leur civilisation sous le joug de l'assimilation coloniale. Avec Cahier d'un retour au pays natal (1939), Aimé Césaire brise l'esthétisme complaisant pour proclamer solennellement : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir. » De même, au Sénégal, Sembène Ousmane dans Les Bouts de bois de Dieu (1960) immortalise la grève héroïque des cheminots du Dakar-Niger, prouvant que la fiction romanesque est le plus formidable des leviers pour galvaniser l'émancipation populaire et forger la conscience de classe de tout un continent.

[TRANSITION]
Dès lors, faut-il opposer irrévocablement beauté formelle et combat engagé ? L'art véritable ne réside-t-il pas précisément dans la synthèse harmonieuse où la puissance esthétique décuple la portée universelle du message humain ?

[TROISIÈME PARTIE : LA SYNTHÈSE DIALECTIQUE : LA FORME COMME CONDITION DE L'EFFICACITÉ POLITIQUE]
(Argument 1 - A.E.I.)
En réalité, la grandeur littéraire suprême s'accomplit lorsque la perfection du style se met au service d'une cause sacrée. Un texte dépourvu de qualité esthétique, si noble soit sa cause, retombe aussitôt dans la futilité du slogan de propagande vite oublié ; inversement, une forme somptueuse offre aux combats les plus ardents le passeport de l'éternité. C'est précisément parce qu'Albert Camus allie la sécheresse d'une écriture blanche et rigoureuse à une réflexion philosophique poignante sur la solidarité face au totalitarisme dans La Peste (1947) que son avertissement contre la bête immonde continue de résonner à travers les générations. L'art ne perd rien de sa pureté à côtoyer l'Histoire : il la transfigure.

(Argument 2 - A.E.I.)
Dans la littérature sénégalaise, L'Aventure ambiguë (1961) de Cheikh Hamidou Kane illustre à la perfection cette réconciliation souveraine. En abordant le drame politique et culturel le plus brûlant de l'Afrique contemporaine — le choc violent des civilisations et le péril de l'acculturation —, Cheikh Hamidou Kane ne sacrifie jamais la splendeur poétique de sa prose à la facilité partisane. En drapant le dilemme des Diallobé dans une langue mystique d'une prodigieuse élévation spirituelle, il a édifié un chef-d'œuvre qui est tout ensemble un « monument de beauté pure » et un guide politique prophétique pour les nations en quête d'émancipation.

[CONCLUSION]
Au terme de notre analyse, il apparaît clairement que la vision d'un écrivain réfugié dans une tour d'ivoire coupée du monde mutile la grandeur de la littérature. Si le culte de la perfection esthétique préserve l'art de la vulgarité et du militantisme de bazar, il ne saurait devenir un prétexte à l'indifférence morale. Loin de s'exclure mutuellement, la quête du Beau et la défense de la justice sociale s'appellent et se renforcent : c'est la splendeur de la forme qui arrache le combat éthique à l'éphémère pour l'inscrire dans l'éternité, tout comme c'est la gravité de l'Histoire humaine qui nourrit le chef-d'œuvre de sa sève tragique. Dès lors, ne peut-on pas affirmer avec Albert Camus, lors de son Discours de Suède en 1957, que la tâche de l'écrivain aujourd'hui est d'unir indissolublement « la beauté et la douleur », afin de demeurer jusqu'au bout au service de ceux qui subissent l'Histoire ?`,
  sections: [
    {
      title: 'I. Déconstruction du sujet et problématisation au brouillon',
      content: `1. Analyse lexicale serrée : « écrivain véritable » (idéal esthétique), « querelles éphémères » (contingence politique), « monument de beauté pure » (l\'Art pour l\'art).
2. Présupposé et thèse de l\'auteur : l\'auteur postule que l\'engagement politique dégrade la valeur artistique et décrète l\'autonomie totale de l\'acte créateur.
3. Problématique directrice : comment concilier l\'aspiration à la perfection formelle intemporelle et le devoir éthique d\'intervenir dans les tourments de son époque ?`
    },
    {
      title: 'II. Typologie des plans canoniques au Baccalauréat sénégalais',
      content: `1. Le Plan dialectique (Thèse / Antithèse / Dépassement) : la norme obligatoire pour les sujets d\'évaluation critique et de discussion.
2. Le Plan thématique : exploration multidimensionnelle ordonnée d\'un concept littéraire sans confrontation binaire directe.
3. Le Plan analytique : enchaînement logique Constat du phénomène → Causes historiques/psychologiques → Conséquences esthétiques et solutions.`
    },
    {
      title: 'III. La technique rédactionnelle du paragraphe A.E.I.',
      content: `1. A (Affirmation) : formuler l\'argument central en tête de paragraphe sans verbiage inutile.
2. E (Explication) : déployer l\'analyse conceptuelle, le raisonnement démonstratif et les justifications théoriques.
3. I (Illustration) : citer une œuvre précise (auteur, titre, épisode ou citation) analysée en profondeur pour prouver la thèse.`
    },
    {
      title: 'IV. Normes impératives de présentation et de style',
      content: `1. Présentation visuelle : sauter deux lignes entre l\'introduction, le développement et la conclusion ; marquer un alinéa de deux carreaux à chaque sous-partie.
2. Interdiction absolue : aucun titre ou chiffre visible dans le devoir final rédigé ; toutes les transitions doivent être rédigées in extenso.
3. Rigueur de la langue : concordance des temps, richesse des connecteurs logiques, soulignement obligatoire de tous les titres d\'œuvres.`
    },
    {
      title: 'V. Conclusion générale et bilan critique',
      content: `La dissertation littéraire est l\'épreuve de maturité intellectuelle par excellence. Elle permet au futur bachelier de faire la preuve de sa vaste culture, de son esprit critique acéré et de sa maîtrise souveraine de la langue française.`
    }
  ]
};

export const LESSON_19_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-19',
  number: 'LEÇON 19',
  title: 'LE COMMENTAIRE COMPOSÉ AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE COMPLÈTE ET DEVOIR TYPE ENTIÈREMENT RÉDIGÉ',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 5 • Méthodologie Experte des Épreuves du Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'La méthode scientifique intégrale pour réussir le commentaire composé de texte littéraire au Baccalauréat : lecture méthodique au surligneur, grille d\'analyse stylistique systématique (Procédé → Effet produit → Sens symbolique), formulation des deux ou trois centres d\'intérêt (axes de lecture), rédaction normée de l\'introduction, transitions internes et devoir complet rédigé in extenso sur un texte poétique majeur de Léopold Sédar Senghor.',
  image: {
    caption: 'Figure T5.2 : La grille de lecture méthodique du commentaire composé au Baccalauréat',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="comGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#comGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#065f46" text-anchor="middle">MÉTHODOLOGIE OFFICIELLE DU COMMENTAIRE COMPOSÉ (BAC SÉNÉGAL)</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">1. Lecture Méthodique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Lecture attentive 4 à 5 fois</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Repérage des champs lexicaux</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Système d\'énonciation (Je, Tu)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Figures de style &amp; Rythme</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Diagnostic stylistique pur</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">2. Le Triptyque Clé</text>
        <text x="14" y="52" font-size="11" fill="#374151">• 1. PROCÉDÉ STYLISTIQUE</text>
        <text x="14" y="74" font-size="11" fill="#374151">• 2. CITATION EXACTE DU TEXTE</text>
        <text x="14" y="96" font-size="11" fill="#374151">• 3. ANALYSE CRITIQUE DU SENS</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Rejet de la paraphrase plate</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Commenter = lier forme et fond</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">3. Les 2 ou 3 Axes</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Centres d\'intérêt organisés</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Ordre d\'intensité croissante</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Du sens manifeste au symbole</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Jamais de plan linéaire (strophes)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Démonstration globale</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 19 : LE COMMENTAIRE COMPOSÉ AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE COMPLÈTE ET DEVOIR TYPE ENTIÈREMENT RÉDIGÉ

INTRODUCTION
Épreuve littéraire majeure choisie chaque année par de nombreux candidats au Baccalauréat sénégalais, le commentaire composé de texte littéraire consiste à rendre compte de manière ordonnée, méthodique et sensible de ce qu'un texte dit (le fond, les thèmes, les émotions) et de la manière dont il le dit (la forme, la stylistique, la syntaxe, la métrique, le rythme). Le principe d'or absolu de l'épreuve tient en une formule : ne jamais séparer le fond de la forme. Deux écueils mortels guettent le candidat négligent :
- La paraphrase plate : raconter naïvement ce qui se passe dans le texte avec ses propres mots sans analyser aucun procédé stylistique ;
- Le catalogue stylistique stérile : dresser une liste froide de figures de style (« il y a une anaphore à la ligne 3 et une métaphore à la ligne 7 ») sans jamais expliquer le sens poétique ou psychologique produit sur le lecteur.
Un commentaire réussi est une démonstration littéraire organisée en deux ou trois grands « centres d'intérêt » (ou axes de lecture), rédigée dans une langue élégante, précise et rigoureuse.

I. LA MÉTHODE SCIENTIFIQUE DE DÉPOUILLEMENT AU BROUILLON (1H15)
1. Les 4 lectures méthodiques au surligneur :
- 1ère lecture attentive : identification du genre (poème en vers libres ou rimés, scène théâtrale, extrait de roman), de l'auteur, de l'époque et de la tonalité générale (lyrique, tragique, satirique, élégiaque) ;
- 2ème lecture : repérage des réseaux lexicaux dominants (champs lexicaux de la nature, de la nuit, de la lumière, de la souffrance) ;
- 3ème lecture : examen de la morphosyntaxe et de l'énonciation (quels pronoms personnels dominent ? quel est le système des temps verbaux ? quelle est la structure des phrases : amples, hachées, paratactiques ?) ;
- 4ème lecture : traque des figures de style signifiantes (métaphores, métonymies, anaphores, oxymores, allitérations, enjambements).
2. La règle du triptyque méthodologique dans le tableau préparatoire :
Construire au brouillon un tableau à trois colonnes qui garantit la rigueur du devoir :
| PROCÉDÉ FORMEL RELEVÉ | CITATION EXACTE ENTRE GUILLEMETS | ANALYSE DU SENS ET EFFET PRODUIT |
3. La détermination des axes de lecture (centres d'intérêt) :
Regrouper les remarques éparses en 2 ou 3 grands axes thématiques et stylistiques ordonnés du plus évident au plus subtil et symbolique.
ATTENTION : Ne jamais faire un plan linéaire suivant bêtement le texte paragraphe par paragraphe ou strophe par strophe ! Le commentaire doit être « composé », c'est-à-dire thématique et transversal à l'ensemble du texte.

II. LA RÉDACTION PROTOCOLAIRE DE L'INTRODUCTION ET DE LA CONCLUSION
1. L'introduction du commentaire (un seul paragraphe indissociable) :
- Présentation de l'auteur, de l'œuvre et du contexte historique/esthétique ;
- Situation précise du passage dans l'économie générale du texte ;
- Idée générale et tonalité dominante du texte ;
- Annonce explicite et élégante des deux ou trois axes de lecture retenus.
2. La conclusion :
- Bilan synthétique des deux ou trois centres d'intérêt démontrés ;
- Mise en valeur de la singularité esthétique du texte (sa réussite poétique) ;
- Ouverture littéraire pertinente vers un texte analogue du même auteur ou d'un mouvement contemporain.

III. DEVOIR TYPE INTÉGRAL ENTIÈREMENT RÉDIGÉ SUR UN TEXTE CANONIQUE SÉNÉGALAIS
• TEXTE SUPPORT :
« Nuit de Sine » de Léopold Sédar Senghor (extrait de Chants d'ombre, 1945)

« Femme, pose sur mon front tes mains de baume, tes mains douces plus que fourrure.
Là-haut les palmes balancées qui bruissent dans la haute brise nocturne
À peine. Pas même la chanson de toile. Qu'il nous berce, le silence rythmé.
Écoutons son silence. Voici que décline la lune lasse vers son lit de mer étalée
Voici que s'assoupissent les éclats de rire, que les conteurs eux-mêmes
Dodelinent de la tête, comme l'enfant sur le dos de sa mère
Les pieds des danseurs s'alourdissent, s'alourdit la voix des répondurs alternés.
C'est l'heure des étoiles et de la Nuit qui songe
Et s'accoude à cette colline de nuages, drapée dans son long pagne de lait.
Les toits des cases luisent tendrement. Que disent-ils, si secrets, aux étoiles ?
Dedans, le foyer s'éteint dans l'intimité d'odeurs âcres et douces.
Femme, allume la lampe au beurre de karité, que causent autour les Ancêtres comme les parents, les enfants au lit.
Écoutons la voix des Anciens d'Élissa. Comme nous exilés
Ils n'ont pas voulu mourir, que ne se perdît par les sables leur semence séminale.
Qu'il me soit permis d'écouter dans la case d'ombre, où visite un souffle d'apaisement,
Le chant des morts qui s'élève au cœur de la nuit. »

--- CORRIGÉ INTÉGRAL DU COMMENTAIRE COMPOSÉ ---

[INTRODUCTION]
Figure de proue de la Négritude et chantre universel des civilisations de l'oralité, Léopold Sédar Senghor a offert aux lettres francophones une voix poétique d'une prodigieuse résonance mystique et musicale. Publié en 1945 au lendemain de la Seconde Guerre mondiale, son recueil fondateur Chants d'ombre s'enracine profondément dans la terre sérère de son enfance pour célébrer l'âme africaine dans sa plénitude sacrée. Le poème « Nuit de Sine », dont est extrait ce passage, constitue une communion nocturne et liturgique d'une rare ferveur. Dans ce tableau crépusculaire d'un village sérère qui s'endort, le poète invite la femme aimée à célébrer l'apaisement du monde avant d'invoquer la présence tutélaire des ancêtres défunts. Dès lors, comment Senghor métamorphose-t-il cette paisible nuit villageoise en une cérémonie sacrée de réconciliation universelle ? Pour répondre à cette question, nous analyserons dans un premier temps le tableau d'une nuit de paix et de tendresse féminine enveloppant la cité, puis nous étudierons dans un second temps la transfiguration mystique du lieu en un sanctuaire vivant où communient les vivants et les ancêtres.

[PREMIER AXE : LE TABLEAU D'UNE NUIT DE TENDRESSE ET L'APAISEMENT DU MONDE]
(Sous-partie 1 : L'intimité amoureuse et la douceur protectrice féminine)
Dès l'incipit du poème, Senghor instaure une atmosphère de ferveur intime placée sous le signe de la tendresse réparatrice de la femme. L'apostrophe solennelle et dépouillée « Femme » (vers 1), reprise comme un refrain litanique au vers 12, confère à la compagne un statut d'archétype protecteur et nourricier. Cette douceur physique et spirituelle est matérialisée par la métaphore tactile et olfactive « tes mains de baume » (vers 1), qui suggère l'onction apaisante capable de guérir les blessures de l'âme du poète exilé. La comparaison hyperbolique « tes mains douces plus que fourrure » fait appel aux sensations les plus délicates, enveloppant le locuteur dans un cocon de confiance absolue. Le poète ne demande pas l'étreinte charnelle orageuse, mais le geste maternel et sacré qui invite au repos : « pose sur mon front tes mains ».

(Sous-partie 2 : L'engourdissement progressif du village et le ralentissement du temps)
Cette paix intime s'élargit ensuite harmonieusement à l'ensemble du village qui s'enfonce dans le sommeil. Senghor orchestre une gradation descendante remarquable qui peint l'extinction graduelle de l'activité humaine. L'anaphore solennelle de la formule présentative « Voici que » (vers 4 et 5) introduit un mouvement de décélération universelle : la lune elle-même est personnifiée comme un être épuisé (« la lune lasse vers son lit de mer étalée »), dont la lente déclinaison dicte le repos aux créatures terrestres. Les voix festives s'éteignent doucement (« s'assoupissent les éclats de rire »), les joutes oratoires s'achèvent tandis que les conteurs eux-mêmes « dodelinent de la tête ». La comparaison touchante avec « l'enfant sur le dos de sa mère » réaffirme le thème de la matrice originelle rassurante. Même la transe des danses traditionnelles reflue : par un chiasme syntaxique saisissant au vers 7 (« Les pieds des danseurs s'alourdissent, s'alourdit la voix des répondurs alternés »), Senghor imite rythmiquement la pesanteur physique du sommeil qui s'empare des corps, substituant à la rumeur du jour un silence majestueux qui se fait musique : « Qu'il nous berce, le silence rythmé ».

[TRANSITION]
Toutefois, ce sommeil de la terre n'est pas un anéantissement stérile ou une léthargie vide. En dépouillant le monde visible de son agitation superficielle, la nuit permet l'ouverture des portes de l'Invisible et consacre la métamorphose sacrée de l'espace.

[DEUXIÈME AXE : LA COMMUNION MYSTIQUE ET LE DIALOGUE LITURGIQUE AVEC LES ANCÊTRES]
(Sous-partie 1 : La Nuit personnifiée et la sacralisation cosmique)
À mesure que l'ombre s'épaissit, le cosmos s'anime d'une vie mystérieuse et majestueuse. Au vers 8, la Nuit majuscule cesse d'être une simple coordonnée temporelle pour devenir une déesse souveraine : « C'est l'heure des étoiles et de la Nuit qui songe ». La personnification sculpturale de la Nuit qui « s'accoude à cette colline de nuages » lui confère une attitude méditative d'une noblesse olympienne. Sa parure cosmique — « drapée dans son long pagne de lait » — convoque la métaphore de la Voie lactée tout en faisant écho aux étoffes blanches traditionnelles des cérémonies initiatiques sérères. Les éléments inanimés entrent en dialogue télépathique : l'interrogation poétique du vers 10 (« Que disent-ils, si secrets, aux étoiles ? ») suggère une osmose parfaite entre le monde d'en bas (les toits des cases) et l'infini céleste.

(Sous-partie 2 : L'allumage du foyer et la convocation des Manes)
C'est au cœur de cette obscurité complice que s'accomplit l'acte rituel décisif. Le poète réclame l'allumage de la « lampe au beurre de karité » (vers 12), dont la flamme douce et la fragrance végétale typiquement africaine créent l'espace sanctifié propice à la théophanie. Dès lors s'abolit la frontière tragique entre la vie et le trépas : « que causent autour les Ancêtres comme les parents ». Pour Senghor, fidèle à l'ontologie négro-africaine, les morts ne sont pas absents : ils sont les « invisibles bienveillants » qui entourent les vivants. L'évocation solennelle de « la voix des Anciens d'Élissa » (terre mythique d'origine des ancêtres sérères de Senghor) prend une tonalité épique et sacrée. Par l'antithèse « Ils n'ont pas voulu mourir », le poète salue la résistance spirituelle de ces aïeux qui ont refusé que « ne se perdît par les sables leur semence séminale ». Le poème culmine au vers final dans une ferveur recueillie où le poète obtient le privilège d'entendre « Le chant des morts qui s'élève au cœur de la nuit ». Le verbe poétique devient ainsi le réceptacle liturgique d'une mémoire immortelle.

[CONCLUSION]
En définitive, « Nuit de Sine » dépasse magnifiquement le cadre d'une simple pastorale descriptive pour s'affirmer comme un hymne liturgique à la réconciliation de l'homme avec le temps et le cosmos. Par un savant dosage d'images tactiles voluptueuses, de rythmes amples calqués sur la respiration nocturne et de métaphores sacrées issues du terroir sérère, Léopold Sédar Senghor démontre que la nuit africaine est le sanctuaire privilégié de la plénitude spirituelle. Loin du vide angoissant de la nuit occidentale, la nuit poétique senghorienne est habitée par l'amour, la lumière des étoiles et la voix bienveillante des disparus. Cette fusion poétique entre la ferveur intime et la piété ancestrale annonce le célèbre poème « Prière aux Masques » et rappelle avec force la conviction profonde de Birago Diop : « Ceux qui sont morts ne sont jamais partis / Ils sont dans l'ombre qui s'éclaire et dans l'ombre qui s'épaissit. »`,
  sections: [
    {
      title: 'I. Principes d\'or et grille de lecture méthodique',
      content: `1. Rejet absolu des deux pièges : la paraphrase plate (raconter sans analyser) et le catalogue stylistique (nommer des figures sans donner le sens).
2. La règle du triptyque : toujours lier le PROCÉDÉ formel à la CITATION textuelle et à l\'EFFET DE SENS produit sur l\'imaginaire du lecteur.
3. Les 2 ou 3 centres d\'intérêt : ordonner ses parties du sens manifeste et descriptif vers la signification symbolique, philosophique et universelle.`
    },
    {
      title: 'II. Les étapes incontournables de l\'Introduction',
      content: `1. Amorce littéraire : situer l\'auteur (Senghor, poète de la Négritude) et l\'œuvre (Chants d\'ombre, 1945).
2. Présentation du texte : extrait de « Nuit de Sine », poème élégiaque et liturgique.
3. Problématique : formuler la question directrice montrant la portée esthétique du poème.
4. Annonce élégante du plan : énoncer les deux axes retenus sans formule scolaire pesante.`
    },
    {
      title: 'III. Analyse détaillée du Premier Axe : Tendresse et paix nocturne',
      content: `1. La figure féminine tutélaire : l\'apostrophe solennelle « Femme », métaphores du baume et de la douceur protectrice.
2. La gradation descendante du sommeil : « décline la lune lasse », « s\'assoupissent les rires », conteurs dodelinant de la tête.
3. Le chiasme du vers 7 : mimétisme syntaxique de l\'alourdissement des danseurs et des répondurs marquant la fin de la fête.`
    },
    {
      title: 'IV. Analyse détaillée du Deuxième Axe : La liturgie avec les Ancêtres',
      content: `1. Personnification monumentale de la Nuit : souveraine accoudée à la colline et drapée de lait (la Voie lactée).
2. Le rituel du beurre de karité : sacralisation de la case d\'ombre pour accueillir les Invisibles.
3. Les Anciens d\'Élissa : triomphe de la semence ancestrale sur la mort ; le poème comme cantique de la pérennité spirituelle africaine.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Gestion du temps : 1h30 au brouillon pour le dépouillement stylistique et le plan détaillé, 2h pour la rédaction intégrale, 30 min pour la relecture orthographique.
• Soin de la forme : transitions travaillées entre les axes, citations toujours insérées entre guillemets et commentées.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Le commentaire composé est la démonstration éclatante de la sensibilité esthétique du candidat. En révélant comment la forme féconde le sens, il offre la plus haute joie intellectuelle des études littéraires.`
    }
  ]
};

export const LESSON_20_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-20',
  number: 'LEÇON 20',
  title: 'LA CONTRACTION DE TEXTE ET LA DISCUSSION AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE ET CORRIGÉ INTÉGRAL',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 5 • Méthodologie Experte des Épreuves du Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'Le protocole officiel et rigoureux pour maîtriser l\'épreuve de contraction de texte au Baccalauréat sénégalais : décompte mathématique strict des mots (±10%), règles de reformulation personnelle, respect absolu du système d\'énonciation de l\'auteur, élimination des exemples illustratifs et redondances ; puis méthodologie complète de la discussion argumentative (structure A.E.I., plan dialectique) avec un sujet intégral officiel entièrement traité et résolu.',
  image: {
    caption: 'Figure T5.3 : Le protocole en deux volets de l\'épreuve de contraction de texte au Baccalauréat',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="contGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#contGrad)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#082f49" text-anchor="middle">LA CONTRACTION DE TEXTE AU BACCALAURÉAT SÉNÉGALAIS</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">1. Le Résumé (Règles)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Réduction au quart (±10%)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Même système d\'énonciation</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Zéro citation entre guillemets</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Pas de « L\'auteur dit que »</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Condensation fidèle</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">2. Décompte des Mots</text>
        <text x="14" y="52" font-size="11" fill="#374151">• 1 mot = unité graphique isolée</text>
        <text x="14" y="74" font-size="11" fill="#374151">• « C\'est-à-dire » = 4 mots</text>
        <text x="14" y="96" font-size="11" fill="#374151">• « L\'homme » = 2 mots</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Mention obligatoire du total</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Rigueur mathématique</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">3. La Discussion</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Mini-dissertation autonome</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Citation extraite du texte</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Plan dialectique (Thèse/Antithèse)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Exemples précis A.E.I.</text>
        <text x="14" y="140" font-size="11" fill="#0284c7" font-weight="bold">→ Argumentation personnelle</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 20 : LA CONTRACTION DE TEXTE ET LA DISCUSSION AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE ET CORRIGÉ INTÉGRAL

INTRODUCTION
Troisième sujet au choix au Baccalauréat de français au Sénégal (particulièrement prisé en Séries Scientifiques S1, S2 et Tertiaires G), l'épreuve de contraction de texte évalue deux compétences complémentaires majeures : la capacité à comprendre et résumer fidèlement la pensée d'un auteur sans la trahir (le Résumé de texte, noté sur 8 à 10 points) et l'aptitude à débattre de manière critique d'une idée essentielle soulevée par le texte (la Discussion, notée sur 10 à 12 points). Épreuve d'une rigueur quasi-mathématique, elle exige le respect scrupuleux de normes académiques strictes qui ne tolèrent aucune improvisation.

I. LES RÈGLES IMPÉRATIVES DU RÉSUMÉ DE TEXTE
1. Le respect du volume exigé et la tolérance des ±10% :
Le texte officiel est généralement un texte d'idées de 600 à 800 mots. La consigne exige une réduction au quart (1/4) de sa longueur initiale, assortie d'une marge de tolérance impérative de plus ou moins 10%. Par exemple, pour un texte de 600 mots à réduire à 150 mots, la longueur finale du résumé doit obligatoirement se situer entre 135 et 165 mots. Tout dépassement vers le haut ou vers le bas est sanctionné lourdement par les correcteurs (pénalités de points par tranche de mots excédentaires).
2. La règle officielle du décompte des mots :
Un mot est défini comme une unité graphique isolée par deux espaces typographiques.
- « L'arbre » = 2 mots (l' + arbre) ; « D'accord » = 2 mots ;
- Un mot composé avec trait d'union compte pour autant de mots qu'il y a d'éléments : « c'est-à-dire » = 4 mots ; « grand-père » = 2 mots ; « socio-économique » = 2 mots ;
- Les dates en chiffres comptent pour un mot : « 1960 » = 1 mot ;
- Le total exact des mots doit obligatoirement être mentionné à la fin de la copie : « Résumé rédigé en 148 mots. »
3. Les 4 interdictions formelles absolues dans le résumé :
- INTERDICTION DE CITER : Ne jamais mettre de guillemets ni reprendre de phrases entières de l'auteur. Il faut reformuler intégralement avec son propre vocabulaire ;
- INTERDICTION DE LA DISTANCIATION : Ne jamais utiliser des formules de régie extérieure telles que : « L'auteur démontre que... », « Selon le texte... », « Le philosophe ajoute que... ». Le candidat doit se glisser dans la peau de l'auteur et adopter rigoureusement son système d'énonciation (utiliser « Je » si l'auteur dit « Je », « Nous » s'il dit « Nous ») ;
- INTERDICTION DU MONTAGE DE CITATIONS : Ne pas juxtaposer des bouts de phrases prélevés dans le texte ;
- INTERDICTION D'AJOUTER DES IDÉES PERSONNELLES : Ne jamais introduire d'arguments extérieurs ou de jugements de valeur dans le résumé.
4. Ce qu'il faut éliminer méthodiquement :
- Les exemples illustratifs anecdotiques et les digressions ;
- Les répétitions et redondances stylistiques ;
- Les métaphores ornementales (garder uniquement l'idée abstraite qu'elles recouvrent) ;
- Les citations d'autres auteurs faites par le texte.

II. LA MÉTHODOLOGIE DE LA DISCUSSION ARGUMENTÉE
1. Nature de la discussion :
La discussion n'est pas un commentaire du texte : c'est une véritable mini-dissertation autonome portant sur une citation ou une thèse extraite du texte d'appui.
2. Structure formelle de la discussion :
- Une introduction concise : rappel de la pensée de l'auteur, problématisation et annonce du plan ;
- Un développement équilibré en deux ou trois parties (généralement selon le plan dialectique : Thèse / Antithèse / Synthèse), chaque partie comportant au moins deux paragraphes A.E.I. étayés d'exemples précis ;
- Une conclusion brève : synthèse des arguments et prise de position personnelle finale.

III. ÉPREUVE COMPLÈTE OFFICIELLE TRAITÉE ET CORRIGÉE IN EXTENSO
• TEXTE SUPPORT :
« La prolifération frénétique des technologies numériques et des réseaux sociaux a engendré chez l'homme contemporain une illusion trompeuse de toute-puissance communicationnelle. Connecté en permanence à des milliers d'interlocuteurs virtuels d'un bout à l'autre de la planète, l'individu moderne se persuade qu'il a enfin brisé les fers de la solitude ancestrale. Pourtant, sous les apparences chatoyantes de cette hyper-connexion planétaire, se dissimule une détresse psychologique et humaine sans précédent. Jamais, dans l'histoire des sociétés, l'être humain ne s'est senti aussi désespérément seul, incompris et vulnérable.
En substituant l'échange fugace de messages instantanés et d'images éphémères à la profondeur de la rencontre physique réelle, les plateformes virtuelles ont dévitalisé la relation humaine de sa chair et de sa vérité vivante. On accumule compulsivement des "amis" numériques sans visage avec lesquels on ne partagera jamais ni une larme sincère ni une épreuve partagée. Le dialogue authentique, qui exigeait autrefois la présence des corps, la patience de l'écoute, le déchiffrement des silences et le regard dans les yeux, s'est dissous dans un bruit de fond mécanique et addictif.
Dès lors, loin d'élargir l'horizon de l'esprit, l'enfermement dans ces bulles algorithmiques flatte nos préjugés les plus étroits et fabrique une société d'individus égocentriques et narcissiques, incapables d'affronter l'altérité véritable. »
(Texte adapté, 218 mots)

• CONSIGNE DU RÉSUMÉ :
Vous résumerez ce texte en 55 mots. Une marge de tolérance de plus ou moins 10% est accordée (soit entre 50 et 60 mots). Vous indiquerez à la fin le nombre exact de mots utilisés.

• CONSIGNE DE LA DISCUSSION :
Discutez cette affirmation du texte : « Loin d'élargir l'horizon de l'esprit, l'enfermement dans ces bulles numériques flatte nos préjugés et fabrique une société d'individus égocentriques. »

--- CORRIGÉ INTÉGRAL DU RÉSUMÉ ---
« Si les réseaux numériques procurent l'illusion d'une communication universelle abolissant l'isolement, ils plongent en vérité l'homme moderne dans une solitude tragique. Remplaçant la rencontre incarnée par des échanges virtuels superficiels, ils dénaturent les liens affectifs réels. Enfin, les algorithmes renforcent l'égocentrisme et le sectarisme des individus, stérilisant tout dialogue authentique avec autrui. »
(Résumé rédigé en 54 mots — parfaitement conforme à la fourchette autorisée de 50 à 60 mots).

--- CORRIGÉ INTÉGRAL DE LA DISCUSSION ---

[INTRODUCTION]
À l'ère de la révolution technologique triomphante, les outils numériques ont transformé de fond en comble nos manières d'échanger et d'accéder au savoir. Pourtant, cette mutation suscite de vives inquiétudes quant à ses répercussions intellectuelles et morales. C'est ainsi que l'auteur affirme avec gravité que « loin d'élargir l'horizon de l'esprit, l'enfermement dans ces bulles numériques flatte nos préjugés et fabrique une société d'individus égocentriques. » Une telle assertion pose le problème de l'impact des algorithmes sur l'émancipation de la conscience humaine : le numérique condamne-t-il inéluctablement l'individu au repli narcissique et au dogmatisme, ou peut-il au contraire constituer un levier formidable d'ouverture culturelle et de solidarité universelle ? Nous analyserons d'abord en quoi les bulles algorithmiques favorisent effectivement le sectarisme et l'isolement égoïste, avant de montrer que les plateformes numériques offrent également des opportunités inédites de démocratisation du savoir et de mobilisation citoyenne fraternelle.

[PREMIÈRE PARTIE : L'ENFERMEMENT ALGORITHMIQUE ET LE PIÈGE DU NARCISSISME]
(Argument 1 - A.E.I.)
En premier lieu, le fonctionnement intrinsèque des plateformes numériques tend à enfermer l'utilisateur dans une chambre d'écho intellectuelle qui renforce ses certitudes préexistantes. En effet, conçus pour maximiser le temps d'attention et la rentabilité publicitaire, les algorithmes de recommandation ne proposent aux internautes que des contenus conformes à leurs opinions antérieures, éliminant toute confrontation stimulante avec des idées contradictoires. Cet enfermement favorise la prolifération des thèses complotistes et l'intolérance fanatique. Comme le constatait l'écrivain italien Umberto Eco, les réseaux sociaux ont souvent donné la parole à des légions de commentateurs agressifs qui confondent le bavardage arrogant avec le raisonnement philosophique, fragmentant l'espace public en tribus hostiles incapables de débattre rationnellement.

(Argument 2 - A.E.I.)
En second lieu, la mise en scène permanente de soi sur les plateformes virtuelles nourrit un culte morbide de l'image superficielle au détriment de l'empathie véritable. L'obsession des « likes », des partages et des filtres esthétiques flatte le narcissisme juvénile et transforme l'existence en un spectacle continu où la valeur d'un être se mesure à sa popularité numérique. Cette quête effrénée d'approbation factice engendre la jalousie, le cyber-harcèlement et une indifférence cruelle aux souffrances d'autrui. Dans son roman La Société du spectacle (1967), Guy Debord avait génialement anticipé cette dérive : lorsque le paraître supplante totalement l'être, les rapports humains se dégradent en une consommation marchande déshumanisée où l'autre n'est plus qu'un miroir de sa propre vanité.

[TRANSITION]
Cependant, serait-il juste de diaboliser l'outil technique lui-même pour des dérives qui relèvent de son usage dévoyé ? Utilisé avec discernement et esprit critique, le numérique ne constitue-t-il pas le plus formidable vecteur de désenclavement et de fraternité de notre siècle ?

[DEUXIÈME PARTIE : LE NUMÉRIQUE COMME TREMPLIN D'ÉMANCIPATION ET DE SOLIDARITÉ]
(Argument 1 - A.E.I.)
D'une part, les réseaux connectés permettent une démocratisation spectaculaire de l'accès aux chefs-d'œuvre de la culture universelle, brisant les barrières géographiques et sociales d'autrefois. Pour la jeunesse africaine en particulier, l'internet offre un accès instantané aux bibliothèques mondiales, aux cours académiques dispensés par les plus grandes universités et aux archives historiques numérisées. Un lycéen de Ziguinchor, de Podor ou de Dakar peut aujourd'hui consulter librement les travaux de Cheikh Anta Diop, lire les tragédies de Shakespeare ou visionner des conférences scientifiques de pointe en quelques clics. L'horizon de l'esprit s'en trouve prodigieusement élargi, offrant aux autodidactes une revanche éclatante sur les privilèges de classe.

(Argument 2 - A.E.I.)
D'autre part, loin de fabriquer uniquement des êtres égocentriques, le numérique s'affirme comme un instrument incomparable de mobilisation citoyenne et de solidarité transnationale face à l'injustice. Les mouvements populaires contemporains ont prouvé que la connexion virtuelle pouvait faire vaciller les régimes autoritaires et fédérer les élans fraternels les plus nobles. Au Sénégal, les mouvements citoyens de jeunesse (comme le collectif « Y'en a marre ») ont utilisé les plateformes numériques pour sensibiliser les populations, surveiller la transparence démocratique des scrutins électoraux et organiser des chaînes d'entraide humanitaire lors des inondations. De même, la prise de conscience écologique mondiale portée par les jeunes générations se diffuse à la vitesse de la lumière grâce à ces mêmes réseaux, démontrant que la toile peut être le creuset d'un nouvel humanisme mondial solidaire.

[CONCLUSION]
En définitive, le verdict sans appel condamnant les bulles numériques mérite d'être profondément nuancé. S'il est indéniable que la dictature des algorithmes mercantiles flatte les pulsions narcissiques et enferme les esprits crédules dans le dogmatisme sectaire, le numérique recèle également un potentiel d'émancipation intellectuelle et de fraternité collective sans équivalent dans l'histoire humaine. L'outil n'est ni bon ni mauvais en soi : tout dépend de l'éthique et de la formation intellectuelle de l'utilisateur. Dès lors, l'urgence suprême de notre temps ne réside pas dans un rejet passéiste de la technologie, mais dans une éducation rigoureuse aux médias et à l'esprit critique, afin que l'homme demeure le maître souverain de ses machines au lieu d'en être le prisonnier docile.`,
  sections: [
    {
      title: 'I. Protocole scientifique du Résumé de texte au Baccalauréat',
      content: `1. Décompte rigoureux des mots : formule mathématique de la tolérance à ±10% ; un mot = unité graphique isolée par deux espaces.
2. Reformulation et neutralité : interdiction de citer entre guillemets et interdiction absolue d\'utiliser des formules de régie (« l\'auteur montre »).
3. Sélection des idées indispensables : éliminer les exemples concrets, métaphores fleuries et redondances pour ne garder que la colonne vertébrale logique.`
    },
    {
      title: 'II. Les étapes méthodologiques de la Discussion',
      content: `1. Problématisation de la citation : mettre au jour le paradoxe philosophique soulevé par l\'auteur.
2. Bâtir le plan dialectique : Thèse (confirmer les risques réels dénoncés par le texte) / Antithèse (réhabiliter les vertus d\'émancipation et d\'ouverture de l\'outil numérique).
3. Rédaction des paragraphes A.E.I. : chaque idée justifiée par un exemple culturel indiscutable (Debord, Umberto Eco, Cheikh Anta Diop, mouvements citoyens sénégalais).`
    },
    {
      title: 'III. Erreurs fatales à éviter le jour de l\'épreuve',
      content: `1. Oublier de mentionner le décompte final des mots du résumé à la fin de la copie (sanction automatique).
2. Confondre la discussion avec un commentaire stylistique du texte d\'appui.
3. Rédiger une discussion purement abstraite sans convoquer d\'exemples concrets empruntés à l\'actualité ou à la culture générale.`
    },
    {
      title: 'IV. Conclusion générale et bilan critique',
      content: `La contraction de texte et la discussion constituent l\'épreuve d\'efficacité logique et de citoyenneté par excellence. Elles préparent le bachelier à synthétiser rapidement des dossiers complexes et à débattre avec rigueur et hauteur de vue.`
    }
  ]
};
