import { LessonContent } from './courses';

// =========================================================================
// FRANÇAIS CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 3 (LEÇONS 11 À 15)
// Programme officiel national de la République du Sénégal
// Cours exhaustifs intégraux sans résumé, grands axes et méthodologie Bac
// =========================================================================

export const LESSON_11_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-11',
  number: 'LEÇON 11',
  title: 'LA SATIRE POLITIQUE ET SOCIALE DANS LE THÉÂTRE AFRICAIN : BERNARD DADIÉ ET OYÔNÔ MBIA',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 3 • Théâtre au XXe Siècle : Tragique, Épique & Absurde',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Le rire comme arme de salubrité publique : Monsieur Thôgô-gnini de Bernard Dadié (1970 - satire féroce de l\'arrivisme bourgeois, cupidité, servilité néocoloniale) et Trois prétendants... un mari de Guillaume Oyônô Mbia (1964 - comédie de mœurs sur l\'inflation de la dot et les conflits de générations).',
  image: {
    caption: 'Figure T3.1 : La comédie satirique africaine — Démystifier les travers par le rire libérateur',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="satGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ea580c" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#f97316" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#satGrad)" stroke="#ea580c" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7c2d12" text-anchor="middle">LA SATIRE DRAMATIQUE AFRICAINE : DE THÔGÔ-GNINI À MBIA</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">1. Bernard Dadié (1970)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Monsieur Thôgô-gnini</text>
        <text x="14" y="74" font-size="11" fill="#374151">• « Chercheur de nom » en baoulé</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Valet cupide des Blancs</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Spoliation de son propre peuple</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Farce politique féroce</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">2. Oyônô Mbia (1964)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Trois prétendants... un mari</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Enchères autour de la dot</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Juliette : émancipation féminine</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Village de Mvoutessi démasqué</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Comédie de mœurs vive</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">3. Portée Critique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• « Castigat ridendo mores »</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Corriger les mœurs par le rire</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dénoncer l\'argent corrupteur</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Réappropriation festive</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Éveil civique universel</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 11 : LA SATIRE POLITIQUE ET SOCIALE DANS LE THÉÂTRE AFRICAIN : BERNARD DADIÉ ET OYÔNÔ MBIA

INTRODUCTION
Si la tragédie historique exalte les grandes figures de la résistance nationale pour galvaniser la fierté patriotique, la comédie satirique africaine emprunte les chemins du rire, de la caricature et de la farce truculente pour accomplir une besogne tout aussi indispensable : assainir les mœurs sociales et dénoncer sans complaisance les travers des nouveaux parvenus. Avec Monsieur Thôgô-gnini (1970) du dramaturge ivoirien Bernard Dadié et Trois prétendants... un mari (1964) du Camerounais Guillaume Oyônô Mbia, la scène théâtrale négro-africaine renoue avec la grande tradition comique universelle de Molière (« Castigat ridendo mores » : corriger les mœurs en riant). En moquant avec une verve étincelante la vénalité des élites compradores, l'obsession de la renommée facile, l'inflation mercantile de la dot et le conservatisme hypocrite des patriarches de village, ces comédies révèlent les blocages intimes d'une Afrique en pleine mutation.

I. BERNARD DADIÉ ET MONSIEUR THÔGÔ-GNINI : LE MONSTRE DE L'ARRIVISME NÉOCOLONIAL
1. L'onomastique révélatrice :
En langue baoulé, « Thôgô-gnini » signifie littéralement « celui qui cherche un nom » ou « le coureur d'honneurs ». Ce nom programmatique résume à lui seul la tare fondamentale du personnage principal : une soif maladive de gloire, d'argent et de domination sociale, affranchie de tout scrupule moral.
2. L'intrigue dramatique et la spoliation populaire :
Dans un pays côtier au XIXe siècle, Thôgô-gnini s'érige en intermédiaire exclusif et servile entre les commerçants occidentaux blancs et les populations autochtones. Pour s'enrichir à une vitesse vertigineuse, il invente des monopoles exorbitants, spolie les paysans de leurs récoltes d'huile de palme, accapare les terres villageoises et jette en prison quiconque ose contester son insolente suprématie.
3. Le valet grotesque des maîtres coloniaux :
Thôgô-gnini singe grotesquement les attitudes des aristocrates européens. Il exige qu'on le salue avec obséquiosité, se fait éventer par des esclaves noirs, porte une redingote ridicule sous le soleil équatorial et méprise profondément son propre peuple : « Les Blancs commandent, et moi j'exécute ! Quiconque s'oppose à mes affaires s'oppose à la Civilisation ! » Dadié montre comment la bourgeoisie intermédiaire compradore trahit les siens pour quelques miettes tombées de la table impérialiste.
4. La chute tragi-comique du tyranneau :
Lorsque les marchands blancs réalisent que les abus sanglants de Thôgô-gnini menacent de provoquer une insurrection populaire générale qui ruinerait leurs intérêts commerciaux, ils le lâchent impitoyablement. Abandonné de tous, conspué par la foule enfin libérée de la peur, Thôgô-gnini finit menotté et jeté dans le cachot où il avait fait périr tant d'innocents, prouvant que les laquais du néocolonialisme sont toujours sacrifiés par leurs maîtres.

II. GUILLAUME OYÔNÔ MBIA ET TROIS PRÉTENDANTS... UN MARI : LA DOT MERCANTILE EN PROCÈS
1. Le microcosme du village de Mvoutessi :
La pièce dépeint la frénésie qui s'empare d'un village de la forêt camerounaise lorsque la jeune Juliette, première fille du village à avoir obtenu son Brevet d'études du premier cycle (BEPC) au collège de Yaoundé, rentre pour les vacances scolaires.
2. La mise aux enchères matrimoniale de Juliette :
Pour son père Atangana et les anciens du conseil villageois (le grand-père Ondua, l'oncle Mbarga), Juliette n'est pas un être humain libre de choisir son destin amoureux, mais un investissement familial hautement rentable destiné à être vendu au plus offrant pour rapporter une dot colossale. Se succèdent ainsi trois prétendants révélateurs des strates de la société camerounaise :
- Ndi, le jeune paysan travailleur mais pauvre, qui n'offre qu'une dot dérisoire de 100 000 francs CFA ;
- Mbia, le grand fonctionnaire de la capitale, hautain et ventripotent, qui arrive en limousine avec des caisses de boissons et verse sans sourciller 200 000 francs CFA, éblouissant les villageois ;
- Tchetgen, le richissime commerçant bamileké, qui surenchérit avec 300 000 francs CFA.
3. La révolte de la jeunesse instruite et la ruse de Juliette :
Juliette refuse catégoriquement d'être vendue comme une vulgaire marchandise à des vieillards qu'elle n'aime pas. Amoureuse d'Oko, un jeune lycéen fauché, elle organise avec l'aide de son cousin une ruse mémorable : subtiliser nuitamment l'argent de la dot conservé dans la case de son père. Face au scandale de la disparition des billets, Oko arrive opportunément au village déguisé en grand notable généreux pour « rembourser » la somme volée et emporter la main de Juliette avec la bénédiction naïve des anciens dupés !

III. LA FORCE DÉMYSTIFICATRICE DE LA COMÉDIE SATIRIQUE AFRICAINE
1. La subversion par le rire carnavalesque :
Dans la comédie africaine, le rire désacralise l'autorité arbitraire des patriarches et la suffisance des bureaucrates. L'inversion des rôles (la jeune fille instruite dupant les anciens du conseil) marque l'irréversible entrée de l'Afrique dans l'ère de la modernité critique et de l'émancipation des femmes.
2. L'utilisation du langage populaire et des quiproquos :
Dadié et Oyônô Mbia exploitent magistralement les ressources de la langue théâtrale : quiproquos jubilatoires, répétitions obsessionnelles, déformations du vocabulaire français administratif par les villageois et maximes proverbiales détournées.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Références capitales pour :
  - La fonction de correction sociale dévolue au genre dramatique ;
  - Le rire comme moyen pédagogique et politique plus percutant que le sermon moralisateur ;
  - Le conflit générationnel et le statut de la tradition face à l'argent.
• En commentaire composé : Analyser les ressorts du comique (comique de caractère chez Thôgô-gnini, comique de situation et de répétition chez Oyônô Mbia), les didascalies gestuelles et la dramatisation de l'avarice ou de l'arrivisme.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
En utilisant le rire comme un miroir impitoyable tendu à la société africaine contemporaine, Bernard Dadié et Guillaume Oyônô Mbia ont démontré que la décolonisation la plus urgente est d'abord morale et psychologique. Leurs pièces demeurent des classiques universels d'une truculence savoureuse et d'une salutaire portée civique.`,
  sections: [
    {
      title: 'I. Bernard Dadié : La farce grinçante de l\'aliénation bourgeoise',
      content: `1. Portrait de Monsieur Thôgô-gnini : l\'archétype du parvenu cupide et sans honneur qui tire sa puissance de la vassalisation aux intérêts coloniaux.
2. La spoliation érigée en système : confiscation des denrées du terroir, corruption de la justice indigène et servilité humiliante devant les maîtres blancs.
3. La trahison des élites et la déchéance finale : abandonné par ses commanditaires européens dès que la révolte gronde, le tyranneau s\'effondre dans le ridicule.`
    },
    {
      title: 'II. Guillaume Oyônô Mbia : La comédie de mœurs villageoise',
      content: `1. Le village de Mvoutessi en émoi : l\'instruction scolaire de Juliette transformée en prétexte spéculatif par les patriarches cupides.
2. Défilé des prétendants : dénonciation féroce de la dérive mercantile de la dot traditionnelle devenue une véritable vente aux enchères d\'êtres humains.
3. Le triomphe de l\'intelligence juvénile : la ruse de Juliette et d\'Oko qui ridiculise l\'avarice des anciens et consacre la liberté du choix amoureux.`
    },
    {
      title: 'III. Les mécanismes universels de la satire théâtrale',
      content: `1. « Castigat ridendo mores » : faire rire le spectateur pour l\'amener à réprouver spontanément l\'égoïsme, la pédanterie et l\'immoralité publique.
2. Inversion carnavalesque : les faibles et les femmes instruites triomphent de l\'autorité arbitraire des pères et des chefs.
3. Théâtralisation de la parole : maîtrise étincelante des joutes verbales, des quiproquos savoureux et de l\'ironie dramatique.`
    },
    {
      title: 'IV. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : disserter sur la portée démystificatrice de la comédie ; opposer l\'efficacité de la satire au sérieux tragique ; interroger le rapport entre tradition et modernité mercantile.
• Commentaire composé : identifier les formes du comique (mots, gestes, situation, mœurs), le rythme des répliques et l\'exagération parodique.`
    },
    {
      title: 'V. Conclusion générale et bilan critique',
      content: `La satire théâtrale africaine est le grand miroir purificateur de la société post-coloniale. En châtiant les travers par le rire, Dadié et Oyônô Mbia ont libéré l\'Afrique de ses complexes et ouvert la voie à un humanisme lucide et joyeux.`
    }
  ]
};

export const LESSON_12_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-12',
  number: 'LEÇON 12',
  title: 'LA RÉÉCRITURE DES MYTHES ANTIQUES ET LE TRAGIQUE MODERNE : JEAN ANOUILH ET SARTRE',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 3 • Théâtre au XXe Siècle : Tragique, Épique & Absurde',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'La métamorphose des mythes grecs au XXe siècle sous l\'Occupation : Antigone de Jean Anouilh (1944 - le refus héroïque du compromis adulte et de la realpolitik de Créon), Les Mouches de Jean-Paul Sartre (1943 - la reconquête de la liberté révoltée d\'Oreste contre les remords) et Jean Giraudoux.',
  image: {
    caption: 'Figure T3.2 : La réécriture moderne du mythe — Du tragique fataliste à l\'angoisse de la liberté',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="mythGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4338ca" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#6366f1" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#mythGrad)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#1e1b4b" text-anchor="middle">LE TRAGIQUE MODERNE : RÉÉCRIRE LES MYTHES SOUS L\'OCCUPATION</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">1. Anouilh : Antigone (1944)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Le refus du « petit bonheur »</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Le NON héroïque &amp; absolu</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Créon et la sale besogne du roi</text>
        <text x="14" y="118" font-size="11" fill="#374151">• La machine tragique bien huilée</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Résistance existentielle</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">2. Sartre : Les Mouches (1943)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Argos écrasée de remords</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Oreste et l\'acte libérateur</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Défi lancé à Jupiter (Dieu)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• L\'homme condamné à être libre</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Émancipation philosophique</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">3. Pourquoi les Mythes ?</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Tromper la censure ennemie</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Parler du présent sous le voile</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Universalité des archétypes</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Dé-sacralisation du destin</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Modernité philosophique</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 12 : LA RÉÉCRITURE DES MYTHES ANTIQUES ET LE TRAGIQUE MODERNE : JEAN ANOUILH ET SARTRE

INTRODUCTION
Durant la première moitié du XXe siècle, et tout particulièrement pendant les heures sombres de la Seconde Guerre mondiale et de l'Occupation allemande en France (1940-1944), le théâtre français connaît une prodigieuse floraison de pièces fondées sur la réécriture des mythes de l'Antiquité grecque. Loin d'être un exercice académique rétrograde, le recours aux grandes figures mythologiques (Antigone, Électre, Oreste, Œdipe) permet aux dramaturges comme Jean Anouilh (Antigone), Jean-Paul Sartre (Les Mouches) et Jean Giraudoux (La guerre de Troie n'aura pas lieu) de tromper la censure de l'occupant tout en posant les questions politiques et existentielles les plus brûlantes de leur temps : la révolte contre la tyrannie, le refus du compromis lâche avec le pouvoir, et la solitude vertigineuse de la liberté humaine. En désacralisant la fatalité divine au profit de la responsabilité individuelle, ces auteurs refondent de fond en comble la notion même de « tragique ».

I. JEAN ANOUILH ET ANTIGONE (1944) : LE DIALOGUE IMPOSSIBLE DE LA PURETÉ ET DU COMPROMIS
1. La création clandestine sous l'Occupation :
Représentée pour la première fois à Paris en février 1944 au Théâtre de l'Atelier, Antigone d'Anouilh suscite une onde de choc immédiate. Le public français reconnaît sous le costume mythologique l'affrontement métaphorique entre la jeunesse résistante qui refuse de courber l'échine et les partisans de la collaboration pétainiste retranchés derrière le discours de l'ordre public.
2. Le prologue et la théorie de la machine tragique :
Dans un prologue célèbre récité par un comédien en complet veston, Anouilh définit le tragique moderne : « C'est propre, la tragédie. C'est reposant, c'est sûr [...] Dans le drame, avec ces traîtres, ces méchants acharnés, cette innocence persécutée, on espère qu'on va pouvoir s'en sortir. Dans la tragédie, on est tranquille. D'abord, on est tous égaux. C'est sans espoir, la tragédie. C'est gratuit. C'est pour les rois. Et il n'y a plus rien à tenter, enfin ! »
3. Le grand duel verbal entre Créon et Antigone :
Le cœur de la pièce est une joute oratoire magistrale de plus de quarante minutes entre le roi Créon et sa nièce Antigone, arrêtée pour avoir bravé la loi en recouvrant de terre le cadavre pourrissant de son frère Polynice :
- Créon incarne la raison d'État et la realpolitik adulte : Pour que l'État fonctionne, il faut faire la sale besogne, accepter de salir ses mains (« Quelqu'un doit dire oui et piloter le navire ») et se contenter du « petit bonheur » bourgeois quotidien (un bon repas, un toit, un mari, des enfants).
- Antigone incarne l'intransigeance absolue de la jeunesse : Elle refuse ce bonheur frelaté fait de lâchetés quotidiennes et de concessions dégradantes : « Vous me dégoûtez tous avec votre bonheur ! Avec votre vie qu'il faut aimer coûte que coûte. Moi, je veux tout, tout de suite, et que ce soit entier, ou alors je refuse ! Je ne veux pas être modeste, moi, et me contenter d'un petit morceau si j'ai été bien sage ! »
4. Le mot héroïque : dire « NON » :
Antigone sait qu'elle va mourir emmurée vivante, mais sa mort est sa victoire suprême : en prononçant son refus inflexible, elle reste fidèle à son idéal de pureté et force le roi Créon à assumer son rôle de boucher désabusé.

II. JEAN-PAUL SARTRE ET LES MOUCHES (1943) : L'APOTHÉOSE DE LA LIBERTÉ EXISTENTIELLE
1. Le contexte d'Argos et l'allégorie de la France occupée :
Dans Les Mouches, Sartre reprend le mythe des Atrides. La ville d'Argos vit sous le règne usurpé du roi Égisthe et de la reine Clytemnestre, qui ont assassiné le roi légitime Agamemnon. Pour maintenir le peuple dans la docilité servile, Égisthe entretient un culte permanent de la repentance, de la honte et du remords, symbolisé par l'invasion de la cité par des millions de mouches voraces envoyées par Jupiter, le dieu des cadavres et de l'ordre oppresseur.
2. Le retour d'Oreste et la conquête de la liberté :
Oreste arrive à Argos en touriste léger, instruit mais sans attaches. Révolté par l'abaissement de sa sœur Électre et l'esclavage moral des citoyens d'Argos, Oreste décide d'abandonner sa légèreté d'intellectuel détaché pour commettre l'acte libérateur : tuer Égisthe et Clytemnestre.
3. Le défi face à Jupiter : la liberté comme gouffre :
Lorsque le dieu Jupiter tente d'écraser Oreste sous la terreur sacrée en lui rappelant la foudre cosmique, Oreste le regarde en face et réplique avec une fierté prométhéenne inouïe : « Tu es le roi des dieux, Jupiter, le roi des pierres et des étoiles, mais tu n'es pas le roi des hommes [...] À peine m'as-tu créé que j'ai cessé de t'appartenir. L'homme est condamné à être libre. Tu n'as plus aucun pouvoir sur moi. »
4. Le départ tragique mais émancipateur :
Contrairement à la tragédie grecque antique où Oreste était rendu fou par les Érinyes, chez Sartre, Oreste assume pleinement son acte régicide sans aucun remords. Il quitte Argos en emportant sur lui toutes les mouches et tous les remords de son peuple pour lui rendre sa liberté souveraine, telle la figure du joueur de flûte de Hamelin.

III. LES SPÉCIFICITÉS DU TRAGIQUE MODERNE AU XXe SIÈCLE
1. De la fatalité des Dieux à la responsabilité de l'Homme :
Dans l'Antiquité, le destin (fatum) était une malédiction extérieure imposée par des dieux cruels. Chez Anouilh et Sartre, le destin n'existe plus : la fatalité réside désormais dans les choix conscients et souverains de l'homme. La tragédie devient existentielle.
2. La dé-sacralisation et l'anachronisme volontaire :
Anouilh et Sartre dépouillent les héros grecs de leur toge hiératique : les gardes d'Anouilh jouent aux cartes, sentent l'ail, parlent de leur prime de solde et de leur avancement comme des agents de police modernes, accentuant le décalage burlesque et la proximité immédiate avec le spectateur contemporain.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Références souveraines pour :
  - La dialectique entre liberté individuelle et contrainte de la loi étatique ;
  - Pourquoi les écrivains réécrivent-ils les mythes anciens ? (valeur métaphorique, universalité, contournement de la censure) ;
  - Le conflit tragique entre idéalisme adolescent et réalisme politique adulte.
• En commentaire composé : Analyser la dynamique du dialogue argumentatif (confrontation rhétorique, réfutations), le ton faussement familier des didascalies et l'évolution psychologique des personnages.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
En s'emparant des figures d'Antigone et d'Oreste, Anouilh et Sartre ont régénéré la flamme tragique au cœur du XXe siècle. Ils ont démontré que le mythe n'est pas une relique morte du passé, mais un instrument philosophique éternellement vivant capable de proclamer le triomphe de la conscience libre contre toutes les tyrannies de l'Histoire.`,
  sections: [
    {
      title: 'I. Jean Anouilh : Antigone ou l\'intransigeance du refus pur',
      content: `1. Contexte historique de 1944 : la scène théâtrale comme métaphore clandestine du combat de la Résistance contre la collaboration pétainiste.
2. Théorie de la mécanique tragique : la tragédie opposée au mélodrame ; absence totale d\'illusion consolatrice et pureté implacable du destin accepté.
3. Le grand affrontement Créon - Antigone : duel philosophique irréconciliable entre la raison d\'État cynique (« la sale besogne ») et la quête de pureté absolue.`
    },
    {
      title: 'II. La signification éthique du « NON » d\'Antigone',
      content: `1. Rejet du bonheur bourgeois rabougri : Antigone refuse une vie achetée au prix du renoncement moral et des lâchetés ordinaires.
2. La souveraineté de la mort : mourir emmurée vivante devient l\'affirmation triomphante de sa dignité inentamée face à la déchéance du pouvoir.`
    },
    {
      title: 'III. Jean-Paul Sartre : Les Mouches et la proclamation de la liberté',
      content: `1. La cité d\'Argos enchaînée : l\'institutionnalisation du remords et de la pénitence collective par Égisthe pour maintenir le peuple dans la servitude.
2. L\'éveil d\'Oreste : le passage de la neutralité stérile de l\'intellectuel désengagé à l\'action révolutionnaire directe.
3. Le défi prométhéen à Jupiter : proclamation magistrale de l\'existentialisme athée ; Dieu perd tout pouvoir dès lors que l\'homme découvre sa liberté infinie.`
    },
    {
      title: 'IV. Spécificités esthétiques de la réécriture mythologique',
      content: `1. Anachronismes délibérés : costumes modernes, gardes buveurs de bière et langage populaire pour briser la distance académique du texte classique.
2. Désacralisation du fatum : substitution du choix éthique individuel et politique aux caprices des dieux de l\'Olympe.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : analyser l\'actualisation des mythes pour contester l\'ordre politique ; interroger la solitude du héros qui dit « non ».
• Commentaire composé : repérer les oppositions lexicales (la boue/la lumière, le compromis/la pureté), la stichomythie théâtrale et l\'ironie tragique.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `La réécriture moderne des mythes par Anouilh et Sartre a offert au théâtre du XXe siècle ses plus intenses monuments de liberté intérieure. Antigone et Oreste demeurent les modèles immortels de l\'homme qui refuse de trahir son idéal.`
    }
  ]
};

export const LESSON_13_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-13',
  number: 'LEÇON 13',
  title: 'LE THÉÂTRE DE L\'ABSURDE ET LA CRISE DU LANGAGE : SAMUEL BECKETT ET EUGÈNE IONESCO',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 3 • Théâtre au XXe Siècle : Tragique, Épique & Absurde',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'La déconstruction radicale de l\'illusion dramatique dans l\'après-guerre : En attendant Godot de Samuel Beckett (1953 - l\'attente infinie, le vide existentiel, Vladimir et Estragon) et Rhinocéros d\'Eugène Ionesco (1959 - la contamination totalitaire de la « rhinocérite », le langage en miettes, Bérenger résistant solitaire).',
  image: {
    caption: 'Figure T3.3 : L\'esthétique du Théâtre de l\'Absurde — Le néant de l\'action et la crise de la parole',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="absGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#334155" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#1e293b" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#absGrad)" stroke="#475569" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">LE THÉÂTRE DE L\'ABSURDE : DÉCONSTRUCTION DU DRAME TRADITIONNEL</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">1. Beckett : Godot (1953)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Vladimir &amp; Estragon (Didi/Gogo)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• L\'attente vaine qui n\'en finit pas</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Décor dépouillé : un arbre nu</text>
        <text x="14" y="118" font-size="11" fill="#374151">• « Rien à faire » : circularité</text>
        <text x="14" y="140" font-size="11" fill="#334155" font-weight="bold">→ Tragicomédie de l\'attente</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">2. Ionesco : Rhinocéros (1959)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Métamorphose bestiale en masse</text>
        <text x="14" y="74" font-size="11" fill="#374151">• La rhinocérite = le totalitarisme</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Contamination des intellectuels</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Bérenger : « Je ne capitule pas ! »</text>
        <text x="14" y="140" font-size="11" fill="#334155" font-weight="bold">→ Résistance de l\'humain</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">3. Ruptures Esthétiques</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Mort de l\'intrigue linéaire</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Faillite du langage (clichés)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Personnages pantins ou clowns</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Rire angoissant &amp; dérision</text>
        <text x="14" y="140" font-size="11" fill="#334155" font-weight="bold">→ Anti-théâtre révolutionnaire</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 13 : LE THÉÂTRE DE L'ABSURDE ET LA CRISE DU LANGAGE : SAMUEL BECKETT ET EUGÈNE IONESCO

INTRODUCTION
Au lendemain de la Seconde Guerre mondiale, marquée par l'horreur indicible des camps d'extermination nazis et le feu atomique d'Hiroshima, une révolution dramaturgique sans précédent ébranle les scènes européennes : l'avènement du « Nouveau Théâtre » ou « Théâtre de l'Absurde » (expression forgée par le critique Martin Esslin en 1961). Constatant la faillite des idéologies totalitaires et le naufrage de la raison humaniste, des dramaturges marginaux d'origine étrangère écrivant en français — notamment l'Irlandais Samuel Beckett (En attendant Godot, Fin de partie) et le Roumain Eugène Ionesco (La Cantatrice chauve, Rhinocéros) — dynamitent méthodiquement toutes les règles du théâtre traditionnel. Refusant l'intrigue logique, la psychologie crédible des personnages et la toute-puissance du dialogue communicatif, ils portent sur scène le vide métaphysique, l'incommunicabilité des êtres et la tragique bouffonnerie de la condition humaine.

I. SAMUEL BECKETT ET EN ATTENDANT GODOT (1953) : L'ÉPOPÉE DU NÉANT ET DE L'ATTENTE
1. Le scandale de la création en 1953 :
Créée au minuscule Théâtre de Babylone à Paris sous la direction de Roger Blin, En attendant Godot déconcerte et fascine. La pièce ne raconte rien au sens conventionnel du terme : deux vagabonds déguenillés, Vladimir (Didi) et Estragon (Gogo), attendent sur une route de campagne déserte, près d'un arbre squelettique, un mystérieux personnage nommé Godot, qui ne viendra jamais.
2. La démolition de l'action dramatique et la structure circulaire :
Le critique Vivian Mercier résuma la pièce par ce trait génial : « C'est une pièce où rien ne se passe, deux fois ! » L'acte II répète presque à l'identique les événements dérisoires de l'acte I : la même attente stérile, le même arbre (qui a gagné mystérieusement quatre ou cinq feuilles), la visite du maître cruel Pozzo et de son esclave en laisse Lucky, et l'apparition finale du jeune garçon messager affirmant imperturbablement : « Monsieur Godot m'a dit de vous dire qu'il ne viendra pas ce soir, mais qu'il viendra sûrement demain. »
3. Le couple Didi-Gogo : la fraternité dérisoire des clowns métaphysiques :
Inspirés des clowns de cirque et du cinéma muet (Charlie Chaplin, Buster Keaton), Vladimir et Estragon passent le temps pour tromper le vertige de l'attente : ils ôtent et remettent leurs chaussures, cherchent des poux dans leur chapeau melon, se disputent, se réconcilient et songent comiquement à se pendre à l'arbre pour avoir une érection. Beckett démontre que l'existence humaine est un immense passe-temps meublé de paroles vaines pour masquer l'angoisse de la mort inéluctable.
4. L'énigme de Godot :
Godot symbolise-t-il Dieu (God), le sens de la vie, l'espoir d'un sauveur politique ou la mort ? Beckett s'est toujours refusé à trancher : « Si j'avais su qui était Godot, je l'aurais dit dans la pièce. » L'essentiel n'est pas qui est Godot, mais l'acte même d'attendre qui définit ontologiquement l'humain.

II. EUGÈNE IONESCO ET RHINOCÉROS (1959) : LA CONTAMINATION TOTALITAIRE ET LE LANGAGE EN MIETTES
1. La critique de la parole pétrifiée : de La Cantatrice chauve à Rhinocéros :
Dès La Cantatrice chauve (1950), « anti-pièce » magistrale inspirée des phrases stéréotypées d'une méthode d'anglais Assimil, Ionesco dénonce la prolifération des clichés et des automatismes de langage qui transforment les êtres humains en robots parlants interchangeables (les Smith et les Martin).
2. L'allégorie terrifiante de la « rhinocérite » :
Dans Rhinocéros (1959), une tranquille ville de province est troublée par l'apparition soudaine d'un rhinocéros féroce au galop. Bientôt, les habitants découvrent avec horreur que leurs concitoyens se métamorphosent volontairement, les uns après les autres, en pachydermes à peau cuirassée et à corne meurtrière.
3. La capitulation des intellectuels et des proches :
Ionesco dépeint avec une lucidité glaçante la lâcheté et le conformisme social :
- Le logicien trouve des raisonnements spécieux et absurdes pour justifier la présence des monstres ;
- Botard, le syndicaliste zélé, commence par nier la réalité des faits avant d'y voir une étape dialectique nécessaire du progrès populaire ;
- Jean, le parangon de la vertu bourgeoise et ami de Bérenger, succombe à la tentation de la force brute (« La nature a ses lois ! La morale n'a rien à voir là-dedans ! Il faut rétablir les principes fondamentaux de l'énergie animale ! ») et se transforme sous les yeux du spectateur horrifié ;
- Daisy, l'amoureuse de Bérenger, finit elle aussi par trouver le rugissement des monstres musical et majestueux, et rejoint la meute.
4. Bérenger, le dernier homme debout :
Seul contre tous, imparfait, angoissé, alcoolique mais profondément humain, Bérenger refuse la contagion grégaire. Dans un monologue final héroïque, il contemple sa peau fragile et lance son cri de défi immortel : « Contre tout le monde, je me défendrai ! Je suis le dernier homme, je le resterai jusqu'au bout ! Je ne capitule pas ! »

III. LA CRISE DU LANGAGE : DE L'OUTIL DE RAISON AU BRUIT ABSURDE
1. L'incommunicabilité tragique :
Dans le Théâtre de l'Absurde, le dialogue cesse d'être un échange véritable d'idées. Les personnages parlent en parallèle sans s'écouter (monologues croisés), débitent des truismes creux ou répètent les mêmes phrases obsessionnelles.
2. Le rire tragique : la farce métaphysique :
L'humour de l'Absurde n'est pas une joie légère : c'est un rire noir, grinçant, désespéré. Comme l'affirmait Ionesco : « Le comique étant intuition de l'absurde, il me paraît plus désespérant que le tragique ; le comique n'offre aucune issue. »

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Sujets incontournables portant sur :
  - La crise du personnage et de l'action au théâtre au XXe siècle ;
  - Le langage théâtral : sert-il à communiquer ou à révéler l'impossibilité de communiquer ?
  - La résistance au conformisme et la défense de la dignité humaine dans un monde en crise.
• En commentaire composé : Analyser les silences et les didascalies omniprésentes chez Beckett (« Un temps », « Silence »), la prolifération matérielle des objets (chaises, rhinocéros), les coq-à-l'âne et la syntaxe désarticulée.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Le Théâtre de l'Absurde a opéré un salutaire décapage de la scène mondiale. En osant regarder en face le néant de la condition humaine et la fragilité de nos langages, Beckett et Ionesco n'ont pas versé dans un pessimisme complaisant : ils ont réhabilité, par-delà la dérision burlesque, la bouleversante grandeur de l'homme qui persiste à espérer et à résister au cœur même de la nuit.`,
  sections: [
    {
      title: 'I. Samuel Beckett : En attendant Godot ou la dramaturgie du vide',
      content: `1. Révolution de 1953 : dynamitage de l\'illusion d\'intrigue traditionnelle ; représentation théâtrale de l\'attente pure sans événement déclencheur.
2. Didi et Gogo, les vagabonds de l\'existence : gestuelle de clowns déchus, jeux verbaux dérisoires pour tuer le silence et tromper l\'angoisse de la finitude.
3. Pozzo et Lucky : parabole de la domination maître-esclave aliénante et dégradation physique accélérée entre les deux actes.`
    },
    {
      title: 'II. Le mystère ontologique de Godot',
      content: `1. Polysémie du nom : allégorie de Dieu, du salut politique ou du néant absolu ; refus délibéré de toute clé d\'interprétation dogmatique univoque.
2. L\'attente comme condition humaine fondamentale : l\'homme défini non par ce qu\'il accomplit, mais par ce qu\'il espère vainement dans le temps qui s\'écoule.`
    },
    {
      title: 'III. Eugène Ionesco : Rhinocéros et l\'épidémie du conformisme',
      content: `1. De La Cantatrice chauve à Rhinocéros : procès impitoyable de la langue mécanique sclérosée par les slogans et les stéréotypes idéologiques.
2. La métaphore de la « rhinocérite » : dénonciation féroce de la séduction exercée par les totalitarismes (nazisme, stalinisme) sur les masses et les intellectuels.
3. Le sursaut de Bérenger : l\'homme ordinaire qui surmonte ses peurs pour affirmer la sainteté de l\'humanité singulière face à la barbarie triomphante.`
    },
    {
      title: 'IV. Les procédés esthétiques de l\'Absurde',
      content: `1. Rupture de la communication : prolifération des quiproquos insolubles, tautologies bouffonnes et coq-à-l\'âne déroutants.
2. Importance capitale des didascalies : le jeu corporel, les mimiques muettes et les silences deviennent plus signifiants que les paroles prononcées.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : analyser comment le rire noir permet d\'aborder l\'angoisse métaphysique ; interroger la notion d\'« anti-héros ».
• Commentaire composé : disséquer le dépouillement scénique, les répétitions en écho, la parodie de logique formelle et la tonalité tragi-comique.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `En montrant la vérité de l\'homme dépossédé de ses illusions rassurantes, le Théâtre de l\'Absurde a réinventé le sacré sur scène. Bérenger et Vladimir rappellent que tant que l\'homme refuse de devenir bête, l\'espoir demeure invincible.`
    }
  ]
};

export const LESSON_14_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-14',
  number: 'LEÇON 14',
  title: 'LE THÉÂTRE ÉPIQUE ET LA DISTANCIATION CRITIQUE : BERTOLT BRECHT',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 3 • Théâtre au XXe Siècle : Tragique, Épique & Absurde',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'La théorie révolutionnaire du théâtre épique marxiste de Bertolt Brecht : rejet de l\'illusion dramatique bourgeoise et de la catharsis aristotélicienne, le concept d\'effet de distanciation (Verfremdungseffekt), et l\'analyse intégrale de Mère Courage et ses enfants (1939 - la guerre comme commerce meurtrier).',
  image: {
    caption: 'Figure T3.4 : Le théâtre épique brechtien — De l\'illusion émotionnelle à l\'éveil politique critique',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="brGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#047857" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#brGrad)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">LE THÉÂTRE ÉPIQUE BRECHTIEN : LA DISTANCIATION CRITIQUE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">1. Rejet de la Catharsis</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Refus de l\'illusion bourgeoise</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Ne pas hypnotiser le spectateur</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Refus de la pitié passive</text>
        <text x="14" y="118" font-size="11" fill="#374151">• La scène n\'est pas la vraie vie</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Spectateur acteur &amp; juge</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">2. Le « V-Effekt »</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Étrangeté du familier</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Chants interrompant l\'action</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Pancartes &amp; projecteurs visibles</text>
        <text x="14" y="118" font-size="11" fill="#374151">• L\'acteur montre son personnage</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Éveil de la raison critique</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">3. Mère Courage (1939)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Guerre de Trente Ans (1618)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Cantinière avide &amp; ses enfants</text>
        <text x="14" y="96" font-size="11" fill="#374151">• La guerre = le capitalisme nu</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Perte de tous ses enfants</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Parabole anti-guerre</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 14 : LE THÉÂTRE ÉPIQUE ET LA DISTANCIATION CRITIQUE : BERTOLT BRECHT

INTRODUCTION
Figure tutélaire de la dramaturgie mondiale au XXe siècle, le dramaturge et théoricien allemand Bertolt Brecht (1898-1956) a bouleversé les fondements mêmes de la représentation théâtrale en créant le « Théâtre Épique ». Hostile au théâtre bourgeois traditionnel qui plongeait le spectateur dans une transe émotionnelle passive (l'identification aveugle aux héros et la catharsis aristotélicienne), Brecht propose un théâtre militant fondé sur le marxisme, où la scène devient une tribune politique et scientifique destinée à éveiller la conscience lucide du peuple. Grâce au concept révolutionnaire de « distanciation » (le Verfremdungseffekt ou V-Effekt), Brecht empêche le spectateur de s'évader dans le rêve pour le contraindre à analyser les causes socio-économiques des injustices et à agir dans le monde réel. Avec des chefs-d'œuvre comme Mère Courage et ses enfants (1939), La Vie de Galilée (1939) et La Bonne Âme du Se-Tchouan (1943), le théâtre brechtien s'affirme comme une formidable machine d'émancipation politique.

I. LA RUPTURE AVEC LE MODÈLE DRAMATIQUE ARISTOTÉLICIEN
1. Le refus de la catharsis bourgeoise :
Depuis la Poétique d'Aristote, le théâtre classique reposait sur la « catharsis » (la purgation des passions par la terreur et la pitié). Pour Brecht, cette catharsis est un narcotique dangereux au service de la classe dominante : le spectateur pleure au spectacle des malheurs du héros, s'apolitise dans l'émotion stérile, et rentre chez lui rassuré sans rien changer à l'injustice sociale du monde réel.
2. Le théâtre épique : raconter plutôt qu'incarner :
Brecht oppose point par point le théâtre dramatique aristotélicien et son propre théâtre épique :
- Théâtre dramatique : action linéaire, implique le spectateur émotionnellement, épuise son activité psychique, montre l'homme comme une nature humaine immuable et fatale.
- Théâtre épique brechtien : narration en tableaux autonomes, transforme le spectateur en observateur critique, éveille sa combativité rationnelle, démontre que l'homme est le produit modifiable des rapports sociaux et historiques de son époque.

II. LE CONCEPT RÉVOLUTIONNAIRE D'EFFET DE DISTANCIATION (VERFREMDUNGSEFFEKT)
1. Définition du V-Effekt :
« Distancier un événement ou un caractère, c'est d'abord tout simplement lui ôter son caractère d'évidence, de familiarité, et susciter devant lui l'étonnement et la curiosité. » Le spectateur ne doit plus considérer la misère ou la guerre comme des fatalités naturelles inéluctables, mais comme des scandales construits par les hommes, que les hommes peuvent et doivent abolir.
2. Les dispositifs techniques de la distanciation sur scène :
Pour casser l'illusion réaliste et rappeler sans cesse au public qu'il se trouve dans un théâtre :
- L'acteur ne s'identifie pas corps et âme à son rôle : il « montre » son personnage avec recul critique, comme un témoin raconte un accident au tribunal ;
- Ruptures narratives : des chants (songs) dissonants et des poèmes interrompent brutalement l'action tragique pour commenter la situation politique ;
- Transparence technique : les projecteurs sont laissés visibles, les coulisses dénudées, et des pancartes ou projections sur écran annoncent à l'avance au public le dénouement de chaque scène afin d'éliminer le suspense sensationnel au profit de l'analyse des mécanismes.

III. MÈRE COURAGE ET SES ENFANTS (1939) : LA GUERRE COMME COMMERCE MORTIFÈRE
1. Le contexte historique et la parabole :
Écrite à la veille de la Seconde Guerre mondiale alors que le nazisme d'Hitler s'apprête à embraser la planète, la pièce situe son action pendant la Guerre de Trente Ans (1618-1648), sanglant conflit religieux européen dévastateur.
2. Le personnage contradictoire d'Anna Fierling (Mère Courage) :
Cantinière rusée et cupide, Mère Courage tire sa charrette sur les champs de bataille pour vendre de l'alcool, des bottes et des provisions aux soldats. Elle adore ses trois enfants (Eilif, Schweizerkas et la muette Catherine), mais son obsession du profit commercial l'aveugle : elle veut vivre de la guerre tout en protégeant sa famille du massacre.
3. La perte inéluctable des enfants :
Brecht démontre avec une rigueur géométrique l'impossibilité de ce compromis avec l'horreur :
- Eilif, le fils aîné courageux, est fusillé pour avoir pillé des paysans pendant une brève trêve ;
- Schweizerkas, le cadet honnête devenu trésorier du régiment, est exécuté par l'ennemi parce que sa mère a trop marchandé le montant de la rançon pour sauver sa marchandise ;
- Catherine, la fille muette héroïque, est abattue par les soldats alors qu'elle tambourine sur le toit d'une grange pour réveiller la ville assiégée d'Halle et sauver les enfants endormis.
4. L'absence de conversion finale : la leçon adressée au public :
Dans la scène finale tragique, Mère Courage, vieillie et solitaire, ne comprend toujours rien à sa propre ruine : elle paie un paysan pour enterrer Catherine, reharnache sa charrette délabrée et repart seule au pas de course derrière les armées en chantant : « La guerre s'arrête jamais ! » Ce n'est pas le personnage qui doit comprendre la leçon, c'est le spectateur dans la salle qui doit tirer la conclusion révolutionnaire : ceux qui espèrent s'enrichir avec la guerre finissent inéluctablement broyés par elle.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : Référence capitale pour :
  - Le théâtre comme outil d'éducation populaire et de transformation révolutionnaire ;
  - Le rejet du spectacle pur divertissement au profit du théâtre d'idées politiques ;
  - La dialectique entre émotion artistique et jugement rationnel lucide.
• En commentaire composé : Analyser l'effet de rupture produit par les didascalies distanciatrices, le lyrisme froid des chansons satiriques, le refus du pathétique facile et l'ironie dialectique.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
Bertolt Brecht a libéré le théâtre du carcan des conventions sentimentales bourgeoises. En substituant le citoyen critique au spectateur hypnotisé, il a prouvé que la création esthétique trouve sa plus haute dignité lorsqu'elle fournit aux hommes les armes intellectuelles pour comprendre le monde et le transformer dans le sens de la justice et de la paix.`,
  sections: [
    {
      title: 'I. La révolution brechtienne : Refus du modèle aristotélicien',
      content: `1. Critique de la catharsis bourgeoise : rejet de la terreur et de la pitié passives qui anesthésient la révolte politique du spectateur.
2. Théâtre dramatique vs Théâtre épique : substituer la narration critique à l\'illusion scénique ; montrer que l\'ordre social est historiquement modifiable.`
    },
    {
      title: 'II. Le Verfremdungseffekt (effet de distanciation)',
      content: `1. Rendre insolite l\'évidence familière : déconstruire les fatalités naturelles (guerre, misère, exploitation) pour révéler leur genèse socio-économique.
2. Procédés de scène : l\'acteur qui commente son rôle, présence visible des projecteurs, interruption de l\'action par les songs et cartons explicatifs.`
    },
    {
      title: 'III. Mère Courage et ses enfants (1939) : Autopsie de la guerre',
      content: `1. La guerre comme prolongement du capitalisme : Anna Fierling espère s\'enrichir sur les hécatombes en tirant sa charrette de cantinière.
2. La loi d\'airain du profit : Mère Courage perd ses trois enfants l\'un après l\'autre pour n\'avoir pas su renoncer à son négoce meurtrier.
3. La leçon au spectateur : Courage repart sans avoir compris, chargeant le public d\'accomplir dans l\'Histoire réelle la révolution nécessaire.`
    },
    {
      title: 'IV. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : mobiliser Brecht pour soutenir la thèse de l\'art engagé comme émancipation intellectuelle ; analyser les limites du théâtre émotionnel.
• Commentaire : traquer les ruptures de ton, l\'ironie didactique, la déconstruction des élans sentimentaux et les paradoxes moraux.`
    },
    {
      title: 'V. Conclusion générale et bilan critique',
      content: `Le théâtre épique brechtien a réconcilié l\'intelligence critique et le plaisir du jeu scénique. Il demeure l\'inspiration majeure de tous les théâtres politiques et populaires contemporains.`
    }
  ]
};

export const LESSON_15_FRANCAIS_TLE: LessonContent = {
  id: 'fr-tle-lecon-15',
  number: 'LEÇON 15',
  title: 'L\'ENGAGEMENT LITTÉRAIRE ET PHILOSOPHIQUE AU XXe SIÈCLE : LA QUERELLE SARTRE-CAMUS',
  subject: 'Français',
  classLevel: 'Terminale',
  module: 'Module 4 • Littérature d\'Idées, Essai & Fonctions Littéraires',
  level: 'Terminale (Séries L & S)',
  readTime: '95 min',
  description: 'Le débat historique sur la responsabilité de l\'écrivain dans l\'Histoire : Qu\'est-ce que la littérature ? de Jean-Paul Sartre (1947 - pourquoi écrire ? pour qui écrire ? la littérature comme action et dévoilement du monde) face à la contestation d\'Albert Camus dans L\'Homme révolté (1951 - le refus du terrorisme d\'État et de la fin justifiant les moyens).',
  image: {
    caption: 'Figure T3.5 : La fracture philosophique de l\'engagement — Sartre et l\'Histoire vs Camus et la Mesure',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="engGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#7c3aed" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#engGrad)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#1e1b4b" text-anchor="middle">L\'ENGAGEMENT AU XXe SIÈCLE : LA RUPTURE SARTRE - CAMUS (1952)</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">1. Sartre : Qu\'est-ce que la litt. ?</text>
        <text x="14" y="52" font-size="11" fill="#374151">• L\'écrivain dans sa situation</text>
        <text x="14" y="74" font-size="11" fill="#374151">• « La parole est action »</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dévoiler le monde pour changer</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Refus de l\'art pour l\'art</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Responsabilité absolue</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">2. Camus : L\'Homme révolté</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Refus des tyrannies idéologiques</text>
        <text x="14" y="74" font-size="11" fill="#374151">• La fin ne justifie pas les moyens</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Pensée de midi &amp; la Mesure</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Refus du réalisme socialiste</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Morale de la dignité</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#818cf8" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">3. L\'Enjeu Majeur</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Littérature = tribunal moral</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Servir l\'Histoire ou l\'Homme ?</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Silence coupable impossible</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Écrire pour ses contemporains</text>
        <text x="14" y="140" font-size="11" fill="#4338ca" font-weight="bold">→ Débat éthique universel</text>
      </g>
    </svg>`
  },
  fullText: `LEÇON 15 : L'ENGAGEMENT LITTÉRAIRE ET PHILOSOPHIQUE AU XXe SIÈCLE : LA QUERELLE SARTRE-CAMUS

INTRODUCTION
Au XXe siècle, sous le choc des totalitarismes, de la Seconde Guerre mondiale et des luttes de décolonisation, la question du rôle et de la responsabilité de l'écrivain prend une dimension existentielle et politique vertigineuse. L'époque où le poète ou le romancier pouvait s'enfermer dans une « tour d'ivoire » pour célébrer la beauté pure et l'art pour l'art apparaît désormais comme une coupable lâcheté. Avec son traité manifeste Qu'est-ce que la littérature ? (1947), Jean-Paul Sartre théorise avec une rigueur implacable la notion d'« engagement » : écrire n'est pas un passe-temps gratuit, c'est un acte public de dévoilement du monde qui engage la responsabilité morale de l'auteur devant l'Histoire. Cependant, cette conception militante de l'art suscite en 1951-1952 une violente discorde au sommet de l'intelligentsia française : la querelle retentissante entre Jean-Paul Sartre et Albert Camus autour de la parution de L'Homme révolté. Ce débat magistral sur les fins et les moyens, la liberté et l'efficacité révolutionnaire demeure le grand phare philosophique des débats intellectuels modernes.

I. JEAN-PAUL SARTRE ET LA THÉORISATION DE L'ENGAGEMENT DANS QU'EST-CE QUE LA LITTÉRATURE ? (1947)
1. L'écrivain « en situation » dans son époque :
Pour Sartre, l'écrivain ne plane pas au-dessus de la mêlée : il est immergé corps et âme dans son époque historique. Se taire devant l'injustice, c'est déjà prendre parti pour l'oppresseur : « L'écrivain est en situation dans son époque : chaque parole a des retentissements. Chaque silence aussi. Je tiens Flaubert et Goncourt pour responsables de la répression qui suivit la Commune parce qu'ils n'ont pas écrit une ligne pour l'empêcher. »
2. La prose comme action et instrument de dévoilement :
Sartre opère une distinction capitale entre la poésie et la prose :
- Le poète traite les mots comme des objets ou des notes de musique : il est fasciné par leur sonorité et leur mystère intérieur sans viser une action pratique immédiate ;
- Le prosateur (romancier, essayiste, dramaturge), en revanche, utilise les mots comme des outils transparents et des armes de combat : « La parole est action : nommer les choses, c'est déjà les changer. Dévoiler le monde, c'est le proposer à la liberté d'autres hommes pour qu'ils le transforment. »
3. Le pacte de liberté entre l'auteur et le lecteur :
Écrire est un appel confiant lancé à la liberté d'autrui : « L'opération d'écrire implique celle de lire comme son corrélatif dialectique [...] Il n'y a pas d'art pour des esclaves : on n'écrit pas pour des tyrans. L'écrivain engagé réclame la liberté de son lecteur afin que tous deux travaillent solidairement à l'avènement d'une société libre. »

II. ALBERT CAMUS ET L'HOMME RÉVOLTÉ (1951) : LA MESURE CONTRE LES FANATISMES
1. Le refus de la fin qui justifie les moyens :
Dans son essai L'Homme révolté (1951), Albert Camus analyse les dérives criminelles des révolutions modernes. Admirant la révolte originelle de l'homme bafoué qui dit « non » à l'humiliation (« Qu'est-ce qu'un homme révolté ? Un homme qui dit non »), Camus constate avec douleur que la plupart des révolutions historiques ont fini par se renier en instaurant des dictatures totalitaires terroristes (les procès de Moscou, le Goulag, la guillotine jacobine). Camus affirme avec force qu'aucune fin grandiose promise dans un futur radieux hypothétique ne saurait justifier l'assassinat d'un seul innocent aujourd'hui.
2. « La Pensée de Midi » et l'exigence de la Mesure :
Contre l'hybris (la démesure prométhéenne de l'Occident) qui sacrifie les hommes réels sur l'autel d'abstractions idéologiques, Camus oppose la sagesse méditerranéenne de la « Pensée de Midi » : la fidélité à la vie présente, le respect des limites et la compassion envers les êtres de chair et de sang.
3. Le rôle de l'artiste selon Camus :
Dans son célèbre Discours de Suède (1957) lors de la réception du Prix Nobel de littérature, Camus réaffirme la vocation irréductible de l'écrivain : « L'écrivain ne peut se mettre au service de ceux qui font l'histoire : il est au service de ceux qui la subissent [...] Le rôle de l'écrivain ne se sépare pas de devoirs difficiles : le refus de mentir sur ce qu'on sait et la résistance à l'oppression. »

III. LA RUPTURE FRACASSANTE DE 1952 ENTRE LES DEUX GÉANTS
1. La critique de Francis Jeanson dans Les Temps Modernes :
En 1952, la revue de Sartre Les Temps Modernes publie une recension incendiaire de L'Homme révolté signée Francis Jeanson, accusant Camus d'idéalisme petit-bourgeois réactionnaire et de déserter la lutte des classes par une morale des mains pures sans efficacité politique.
2. La réponse publique de Sartre et l'adieu à l'amitié :
Camus répond avec dignité en s'adressant au « Directeur de la revue ». Sartre lui réplique alors dans une lettre ouverte d'une cruauté intellectuelle dévastatrice : « Votre morale s'est d'abord changée en moralisme, aujourd'hui elle n'est plus que littérature, demain elle sera peut-être immoralité. » Cette rupture publique consomme le divorce irréconciliable entre deux visions du monde :
- L'intellectuel sartrien, prêt à s'allier aux forces révolutionnaires historiques malgré leurs erreurs pour hâter l'émancipation collective ;
- L'intellectuel camusien, refusant de pactiser avec le mensonge politique au nom de la vérité morale immédiate et de la solidarité avec les victimes.

IV. PORTÉE MÉTHODOLOGIQUE POUR LE BACCALAURÉAT
• En dissertation littéraire : C'est le débat suprême et incontournable du programme de Terminale :
  - L'écrivain a-t-il le droit de se désintéresser des combats de son époque ?
  - La littérature doit-elle être utile ou simplement belle ? (débat Art engagé vs Art pour l'art) ;
  - Peut-on séparer la valeur esthétique d'un texte de son contenu moral et idéologique ?
• En commentaire composé : Analyser les techniques de l'argumentation d'idées : présence des connecteurs logiques, emploi des modalisateurs de certitude, réfutation des arguments adverses, métaphores polémiques et éloquence oratoire.

V. CONCLUSION GÉNÉRALE ET BILAN CRITIQUE
La querelle Sartre-Camus n'a pas pris une ride car elle pose la question la plus déchirante de la conscience moderne : comment combattre l'injustice sans engendrer une nouvelle tyrannie ? En posant les jalons de la responsabilité de l'écrivain, Sartre et Camus ont élevé la littérature au rang de conscience vigilante de l'humanité, rappelant que chaque mot écrit résonne comme un engagement irréversible devant la postérité.`,
  sections: [
    {
      title: 'I. Jean-Paul Sartre et le manifeste de Qu\'est-ce que la littérature ?',
      content: `1. L\'écrivain en situation : l\'impossibilité de la neutralité ; le silence devant l\'oppression constitue une complicité objective avec le pouvoir établi.
2. La prose comme dévoilement : les mots du prosateur sont des instruments d\'action pour rendre le monde intolérable aux yeux des opprimés.
3. Le pacte de liberté : écrire est une adresse solennelle à la liberté du lecteur pour construire ensemble une cité d\'hommes libres.`
    },
    {
      title: 'II. Albert Camus : L\'Homme révolté et le refus des tyrannies',
      content: `1. Anatomie de la révolte : le cri de dignité originel (« Je me révolte, donc nous sommes ») trahi par les révolutions absolutistes qui instaurent la terreur d\'État.
2. Refus de la fin justifiant les moyens : condamnation catégorique du meurtre politique ; aucune utopie future ne légitime les crimes d\'aujourd\'hui.
3. La Pensée de Midi : éloge de la mesure méditerranéenne, de la lucidité morale et de la beauté sensible contre les dogmes abstraits du matérialisme historique.`
    },
    {
      title: 'III. L\'affrontement de 1952 et la fracture des consciences',
      content: `1. La passe d\'armes des Temps Modernes : Jeanson et Sartre fustigent le moralisme jugé inefficace de Camus face aux violences concrètes de l\'Histoire.
2. Deux éthiques inconciliables : l\'éthique sartrienne de la responsabilité révolutionnaire aux mains sales vs l\'éthique camusienne de la conviction intransigeante et du refus de mentir.`
    },
    {
      title: 'IV. Le statut de l\'écrivain : Du prophète romantique au témoin engagé',
      content: `1. Métamorphose historique : la disparition de la tour d\'ivoire au profit du tribunal public des idées.
2. La fonction critique de la littérature : dénonciation des injustices, protection des minorités persécutées et sauvegarde de la liberté d\'expression.`
    },
    {
      title: 'V. Portée méthodologique pour le Baccalauréat',
      content: `• Dissertation : corpus de prédilection pour confronter « l\'art pour l\'art » (Théophile Gautier, Parnasse) et « l\'art engagé » (Sartre, Hugo, Césaire, Fanon) ; bâtir des plans dialectiques rigoureux.
• Commentaire : traquer la rhétorique démonstrative, les dilemmes éthiques, le rythme oratoire et les formules péremptoires.`
    },
    {
      title: 'VI. Conclusion générale et bilan critique',
      content: `Le dialogue tendu entre Sartre et Camus demeure la plus haute leçon de lucidité du XXe siècle. Il enseigne à la jeunesse que penser et écrire sont des actes graves qui exigent un courage intellectuel absolu et une fidélité sans faille à la dignité de l\'homme.`
    }
  ]
};
