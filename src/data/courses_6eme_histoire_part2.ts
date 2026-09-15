import { LessonContent } from './courses';

// =========================================================================
// DEUXIÈME PARTIE : LA PRÉHISTOIRE
// CLASSE DE 6ÈME - PROGRAMME OFFICIEL SÉNÉGALAIS
// LEÇONS 4, 5 ET 6 AVEC INTRODUCTION ET CONCLUSION COMPLÈTES
// =========================================================================

export const LESSON_4_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-4',
  number: 'Leçon 4',
  title: "LES GRANDES DIVISIONS DE LA PRÉHISTOIRE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `La Préhistoire représente la période la plus vaste et la plus mystérieuse de l'aventure humaine, embrassant plusieurs millions d'années depuis les origines des premiers êtres humains jusqu'à l'invention décisive de l'écriture vers 3300 av. J.-C. Pour ordonner cette immense durée, les spécialistes ont divisé la Préhistoire en deux époques majeures fondées sur l'évolution technique de l'outillage et les transformations profondes des modes de vie : le Paléolithique et le Néolithique.`,
  fullText: `DEUXIÈME PARTIE : LA PRÉHISTOIRE
Leçon 4 : Les grandes divisions de la Préhistoire

1. Définition et limites de la Préhistoire
La Préhistoire est la période la plus gigantesque et la plus longue de l'aventure humaine. Elle débute précisément avec l'apparition des tout premiers êtres humains sur la Terre (il y a plusieurs millions d'années) et s'achève au moment où les hommes inventent l'écriture (vers 3300 avant J.-C.). Pour s'y retrouver dans ces millions d'années, les préhistoriens ont découpé la Préhistoire en deux époques successives, en se basant sur le progrès des outils créés par l'Homme.

2. Le Paléolithique ou l'âge de la pierre taillée
Ce mot technique vient de deux racines grecques anciennes : Palaios (ancien) et Lithos (pierre). C'est l'époque la plus reculée et la plus dure.
- La technique de fabrication : Pour faire un outil, l'homme prend une pierre lourde (comme du silex ou du quartzite) et la frappe violemment contre une autre pour en détacher des éclats. Il obtient ainsi un tranchant. L'outil le plus célèbre est le biface, une pierre taillée sur ses deux faces pour couper la viande, fendre le bois ou racler la peau des bêtes.
- Le mode de vie économique : Les hommes du Paléolithique sont des nomades, ce qui signifie qu'ils n'ont absolument pas de maison fixe. Ils se déplacent sans cesse, marchant sur de longues distances pour suivre les troupeaux d'animaux sauvages. Ils tirent leur nourriture uniquement de la chasse, de la pêche et de la cueillette de fruits sauvages, de feuilles ou de racines. Ils consomment la nature sans rien produire.

3. Le Néolithique ou l'âge de la pierre polie
Le mot vient de Neos (nouveau) et Lithos (pierre). Vers 10 000 avant J.-C., un changement climatique global entraîne une véritable métamorphose appelée par les savants la « Révolution néolithique ».
- La technique de fabrication : L'homme ne se contente plus de tailler grossièrement la pierre. Il la frotte patiemment et longuement contre un bloc de grès humide avec du sable pour l'user. Il obtient un outil lisse, parfaitement aiguisé et extrêmement solide (haches, herminettes, pointes de flèches fines).
- La sédentarisation : C'est la naissance merveilleuse de l'agriculture (culture du mil, du blé, du riz) et de la domestication des animaux (l'élevage de vaches, chèvres, moutons). Puisqu'il doit surveiller la pousse de ses champs et s'occuper de ses troupeaux, l'homme cesse de courir partout : il devient sédentaire. Il construit des maisons durables en bois, en boue séchée ou en paille, donnant naissance aux tout premiers villages de l'histoire humaine.
- Les nouvelles techniques : Pour stocker le surplus de céréales récoltées, l'homme invente la poterie (modelage de l'argile cuite au feu). Pour s'habiller autrement qu'avec des peaux de bêtes, il invente le tissage des fibres végétales ou de la laine.`,
  sections: [
    {
      title: "1. Définition et limites de la Préhistoire",
      content: [
        `Délimitation temporelle : La Préhistoire débute avec l'apparition des premiers hominidés sur Terre (il y a plusieurs millions d'années) et se clôt avec l'invention de l'écriture (vers 3300 av. J.-C.).`,
        `Critère de découpage : Les préhistoriens distinguent deux époques successives en se fondant sur les progrès technologiques apportés aux outils de pierre.`
      ]
    },
    {
      title: "2. Le Paléolithique ou l'âge de la pierre taillée",
      content: [
        `Étymologie : Du grec ancien Palaios (ancien) et Lithos (pierre). C'est l'ère la plus ancienne, la plus longue et la plus rude.`,
        `Technique de fabrication : L'homme percute une pierre dure (silex, quartzite) contre une autre pour détacher des éclats tranchants. L'outil emblématique est le biface, taillé sur ses deux faces pour couper, fendre ou racler les peaux.`,
        `Mode de vie nomade : Dépourvus d'habitat fixe, les groupes humains se déplacent au gré des saisons pour suivre le gibier. Ils vivent de chasse, pêche et cueillette : une économie purement prédatrice où l'homme consomme sans produire.`
      ]
    },
    {
      title: "3. Le Néolithique ou l'âge de la pierre polie",
      content: [
        `Étymologie et Révolution : Du grec Neos (nouveau) et Lithos (pierre). Vers 10 000 av. J.-C., un réchauffement climatique engendre la « Révolution néolithique ».`,
        `Technique de polissage : L'homme frotte la pierre avec du sable et de l'eau sur du grès pour créer des surfaces lisses et des tranchants résistants (haches polies, herminettes, pointes de flèches).`,
        `Sédentarisation, agriculture et élevage : Découverte de la culture du mil, du blé, du riz et domestication des ovins et bovins. L'Homme s'établit dans des villages permanents faits de bois et de pisé.`,
        `Inventions associées : Poterie en argile cuite pour conserver les denrées et tissage de fibres végétales ou animales.`
      ]
    }
  ],
  diagram: {
    title: "LES DEUX GRANDES ÉTAPES DE LA PRÉHISTOIRE",
    root: "LA PRÉHISTOIRE",
    branches: [
      {
        name: "Paléolithique",
        subtitle: "Pierre taillée (Nomadisme)",
        items: ["Éclats & bifaces taillés", "Chasse, pêche, cueillette", "Habitats provisoires"]
      },
      {
        name: "Néolithique",
        subtitle: "Pierre polie (Sédentarité)",
        items: ["Révolution vers -10 000", "Agriculture (mil, riz, blé)", "Élevage & premiers villages", "Poterie et tissage"]
      }
    ]
  },
  conclusion: `En conclusion, le passage du Paléolithique au Néolithique marque le tournant le plus décisif de la Préhistoire : en passant du statut de prédateur nomade à celui de producteur sédentaire, l'Homme domestique la nature par l'agriculture et l'artisanat, posant ainsi les assises indispensables aux premières grandes civilisations de l'Antiquité.`
};

export const LESSON_5_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-5',
  number: 'Leçon 5',
  title: "LA PRÉHISTOIRE AFRICAINE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `Pendant longtemps occultée par des théories erronées, la vérité sur les origines de l'Homme a été scientifiquement établie par la paléontologie contemporaine : l'Afrique est sans conteste le berceau unique de toute l'humanité. C'est sur le sol africain que les premiers ancêtres des êtres humains ont évolué, se sont redressés et ont façonné les premiers outils avant de se diffuser sur les autres continents.`,
  fullText: `DEUXIÈME PARTIE : LA PRÉHISTOIRE
Leçon 5 : La Préhistoire africaine

1. L'Afrique, berceau incontesté de l'humanité
C'est une vérité scientifique majeure que chaque élève sénégalais doit porter avec fierté : l'Afrique est le berceau originel de toute l'humanité. Tous les êtres humains qui peuplent la Terre aujourd'hui, qu'ils vivent en Europe, en Amérique ou en Asie, ont pour ancêtres des populations nées en Afrique. Les plus anciens restes préhumains et humains de la planète ont tous été découverts enfouis dans le sol africain.
- Toumaï : Un crâne fossile incroyable découvert au Tchad (Afrique Centrale) en 2001. Il est daté d'environ 7 millions d'années et représente l'un des plus anciens ancêtres de la lignée humaine.
- Lucy : Une célèbre représentante des Australopithèques découverte en Éthiopie (Afrique de l'Est) en 1974. Son squelette est âgé de 3,2 millions d'années. Sa structure prouve qu'elle marchait déjà debout sur ses deux jambes.

2. Les grandes étapes de l'évolution humaine
L'être humain n'est pas devenu ce qu'il est en un jour. Sur des millions d'années, plusieurs espèces d'hommes se sont succédé et transformées en Afrique :
- L'Australopithèque : Il n'est pas encore un homme complet. Il marche debout mais possède un petit cerveau et grimpe encore souvent aux arbres pour se protéger.
- L'Homo habilis (L'homme habile) : Il apparaît vers 2,5 millions d'années en Afrique. Son cerveau grandit. Il est le premier à avoir l'intelligence de fabriquer de vrais outils en pierre taillée (les galets aménagés). Il vit exclusivement sur le sol africain.
- L'Homo erectus (L'homme droit) : Il apparaît vers 1,8 million d'années. Il se tient parfaitement droit, court avec agilité et possède un cerveau volumineux. Il invente le biface et réalise une découverte immense : la maîtrise du feu. Il est le tout premier homme à sortir d'Afrique pour aller explorer et peupler l'Asie et l'Europe.
- L'Homo sapiens (L'homme sage) : Apparu vers 300 000 ans en Afrique (notamment au Maroc et en Afrique de l'Est). C'est l'homme moderne, c'est-à-dire nous-mêmes ! Il possède un langage articulé très développé, invente l'art sous toutes ses formes et finit par peupler l'ensemble de la surface du globe terrestre.`,
  sections: [
    {
      title: "1. L'Afrique, berceau incontesté de l'humanité",
      content: [
        `Une fierté scientifique universelle : Toutes les populations de la planète descendent d'ancêtres nés sur le continent africain, où sont concentrés les plus anciens fossiles préhumains et humains.`,
        `Toumaï (Tchad, 2001) : Crâne fossile daté de 7 millions d'années, considéré comme l'un des premiers représentants connus de la lignée des hominidés.`,
        `Lucy (Éthiopie, 1974) : Squelette fossile d'Australopithèque afarensis âgé de 3,2 millions d'années, démontrant une bipédie régulière sur ses deux membres inférieurs.`
      ]
    },
    {
      title: "2. Les grandes étapes de l'évolution humaine",
      content: [
        `1. L'Australopithèque : Stade préhumain combinant bipédie naissante, petit volume crânien et aptitudes à grimper aux arbres pour fuir les prédateurs.`,
        `2. L'Homo habilis (« l'homme habile », vers -2,5 millions d'années) : Émergence du genre Homo en Afrique. Capacité crânienne accrue et fabrication des premiers outils lithiques (galets aménagés / choppers).`,
        `3. L'Homo erectus (« l'homme dressé », vers -1,8 million d'années) : Bipédie parfaite, cerveau volumineux, façonnage des bifaces symétriques et domestication du feu. Il est le pionnier des migrations hors d'Afrique vers l'Eurasie.`,
        `4. L'Homo sapiens (« l'homme sage », vers -300 000 ans en Afrique) : L'homme anatomiquement moderne. Langage articulé perfectionné, pensée symbolique et artistique (peintures rupestres, parures) et colonisation de tous les continents.`
      ]
    }
  ],
  diagram: {
    title: "ÉVOLUTION DES HOMINIDÉS EN AFRIQUE",
    root: "BERCEAU AFRICAIN",
    branches: [
      {
        name: "Fossiles clés",
        subtitle: "Preuves géologiques",
        items: ["Toumaï (-7 millions d'années)", "Lucy en Éthiopie (-3,2 Ma)", "Sols d'Afrique de l'Est & Centrale"]
      },
      {
        name: "Lignée humaine",
        subtitle: "Du galet à l'homme moderne",
        items: ["Australopithèque (bipédie)", "Homo habilis (premiers outils)", "Homo erectus (biface & feu)", "Homo sapiens (art & pensée)"]
      }
    ]
  },
  conclusion: `En conclusion, la Préhistoire africaine démontre avec force que notre continent n'a pas seulement enfanté l'espèce humaine, mais qu'il a été le creuset exclusif des premières innovations technologiques et cognitives qui ont permis à l'Homo sapiens de conquérir l'ensemble de la Terre.`
};

export const LESSON_6_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-6',
  number: 'Leçon 6',
  title: "LA VIE DES HOMMES DE LA PRÉHISTOIRE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `Reconstituer le quotidien des premiers êtres humains permet de mesurer les prodigieux obstacles qu'ils ont dû surmonter face à une nature redoutable. De la quête permanente de subsistance à l'aménagement des abris, en passant par la conquête libératrice du feu et les premières manifestations artistiques, nos lointains ancêtres ont peu à peu transformé leur monde physique et spirituel.`,
  fullText: `DEUXIÈME PARTIE : LA PRÉHISTOIRE
Leçon 6 : La vie des hommes de la Préhistoire

1. L'alimentation et l'habitat au quotidien
Au Paléolithique, la vie quotidienne est un combat permanent contre la faim et les prédateurs. Les hommes n'ont pas de tentes fixes : ils s'abritent sous des abris de branches provisoires ou dorment à l'entrée des grottes rocheuses profondes pour se protéger de la pluie et des fauves. Leur nourriture change selon les saisons : ils mangent de la viande crue puis cuite (gibier, mammouths, antilopes), des coquillages, des petits poissons, des baies sauvages, des œufs d'oiseaux et des racines sauvages.
Au Néolithique, le changement est total. L'alimentation devient abondante, stable et variée grâce aux récoltes régulières de mil, de sorgho, de blé ou de légumes, complétée par le lait et la viande des animaux de l'élevage. L'habitat se transforme en huttes circulaires ou rectangulaires solides construites en briques de boue séchée au soleil, regroupées au sein de villages protégés par de solides barrières en bois.

2. La révolution monumentale de la maîtrise du Feu
Domestiqué par l'Homo erectus aux alentours de 400 000 avant J.-C., le feu a complètement bouleversé le destin de l'humanité :
- La cuisson des aliments : Cuire la viande et les racines permet de tuer les parasites et les microbes dangereux. La nourriture devient tendre, plus facile à mâcher et beaucoup plus digeste, ce qui a aidé au développement du cerveau humain.
- La protection active : Le feu est la seule arme capable de terrifier les grands fauves carnivores la nuit. Installer un grand foyer à l'entrée d'une grotte garantit un sommeil sécurisé.
- L'amélioration technique : Le feu permet de s'éclairer la nuit dans le noir total des grottes et sert à durcir la pointe en bois des lances de chasse pour les rendre redoutables.
- Le lien social : Autour du feu de camp le soir, les hommes se rassemblent, se réchauffent en hiver, se parlent et développent les premiers récits et le langage.

3. L'art préhistorique : Peinture et sculpture
Les hommes préhistoriques possédaient une sensibilité artistique impressionnante. On sépare leur art en deux formes :
- L'art pariétal : Ce sont les peintures magiques et les gravures profondes réalisées directement sur les parois intérieures rocheuses des grottes sombres. Les artistes utilisaient du charbon de bois pour le noir, et des terres colorées (ocre) pour le rouge et le jaune. Ils dessinaient des scènes de chasse réalistes et des animaux sauvages (bisons, chevaux, mammouths, antilopes) pour s'attirer la chance avant de partir chasser.
- L'art mobilier : Ce sont les petits objets d'art sculptés que l'on peut transporter pendant les voyages. Les hommes taillaient de petites statuettes en ivoire de mammouth, en os ou en pierre molle. Les plus célèbres sont les « Vénus préhistoriques », des figurines représentant des femmes aux formes très exagérées, symbolisant la fertilité, la maternité et la protection de la vie.`,
  sections: [
    {
      title: "1. L'alimentation et l'habitat au quotidien",
      content: [
        `Au Paléolithique : Survie incertaine et périlleuse. Habitats de fortune (abris sous roche, surplombs et porches de grottes). Alimentation opportuniste basée sur la chasse au gibier, la pêche et la cueillette de graines, racines et fruits sauvages.`,
        `Au Néolithique : Mutation radicale vers la sécurité alimentaire grâce aux surplus de récoltes (sorgho, mil, céréales) et aux produits de l'élevage (lait, viande). Naissance de l'habitat sédentaire : huttes en briques crues et pieux de bois formant les premiers villages fortifiés.`
      ]
    },
    {
      title: "2. La révolution monumentale de la maîtrise du Feu",
      content: [
        `Domestiqué par l'Homo erectus aux alentours de 400 000 av. J.-C., le feu a métamorphosé la condition humaine sur plusieurs plans :`,
        `• Hygiène et digestion : La cuisson élimine bactéries et parasites, attendrit les aliments et contribue à l'essor du volume cérébral.`,
        `• Sécurité nocturne : Le feu repousse les prédateurs carnivores et sécurise le campement.`,
        `• Progrès technique : Éclairage des cavernes et durcissement thermique de la pointe des sagaies.`,
        `• Socialisation : Le foyer réunit le clan, favorisant les échanges oraux, la cohésion sociale et la transmission des mythes.`
      ]
    },
    {
      title: "3. L'art préhistorique : Peinture et sculpture",
      content: [
        `L'art pariétal (peintures et gravures rupestres) : Réalisé sur les parois profondes des grottes à l'aide de pigments naturels (charbon de bois, ocres rouge et jaune). Les représentations animales (mammouths, antilopes, bisons) et scènes cynégétiques possédaient une fonction magique ou rituelle pour favoriser la chasse.`,
        `L'art mobilier (sculptures transportables) : Figurations façonnées dans l'os, l'ivoire ou la roche tendre. Les célèbres « Vénus » aux formes généreuses célébraient le culte de la fécondité, de la maternité et la perpétuation du groupe.`
      ]
    }
  ],
  diagram: {
    title: "CADRE DE VIE, MAÎTRISE DU FEU ET ART PRÉHISTORIQUE",
    root: "VIE PRÉHISTORIQUE",
    branches: [
      {
        name: "Habitat & Alimentation",
        subtitle: "Du nomade au sédentaire",
        items: ["Paléolithique : grottes & cueillette", "Néolithique : villages & élevage", "Transition vers la sécurité alimentaire"]
      },
      {
        name: "Révolution du Feu",
        subtitle: "Domestiqué vers -400 000",
        items: ["Cuisson & nutrition", "Défense contre les fauves", "Éclairage & technique", "Lien social autour du foyer"]
      },
      {
        name: "Art Préhistorique",
        subtitle: "Pariétal & Mobilier",
        items: ["Parois peintes à l'ocre", "Rituels de chasse magiques", "Vénus sculptées (fertilité)"]
      }
    ]
  },
  conclusion: `En conclusion, la maîtrise du feu, l'amélioration de l'habitat et l'avènement d'un art à la fois symbolique et rituel démontrent la prodigieuse inventivité des hommes de la Préhistoire, affirmant leur humanité profonde et leur capacité d'émerveillement face au monde qui les entourait.`
};
