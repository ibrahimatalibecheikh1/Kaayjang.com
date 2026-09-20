import { LessonContent } from './courses';

// LEÇON 1 : LA PHRASE SIMPLE ET LA PHRASE COMPLEXE
export const LESSON_1_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-1',
  number: 'Leçon 1',
  title: 'La phrase simple et la phrase complexe',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude exhaustive des structures de phrases en français, distinction entre proposition indépendante, propositions coordonnées, juxtaposées et subordonnées pour les épreuves du BFEM.',
  introduction: 'La syntaxe de la phrase constitue le socle de l\'analyse grammaticale et de la maîtrise de l\'expression écrite. En classe de 3ème et au BFEM, la distinction entre la phrase simple (qui ne comporte qu\'un seul verbe conjugué à un mode personnel) et la phrase complexe (qui en comporte deux ou plusieurs) est fondamentale. Elle permet à la fois d\'analyser les liens logiques entre les propositions et de varier le style pour produire des textes riches et nuancés.',
  sections: [
    {
      title: '1. La Phrase Simple : Définition, Caractéristiques et Structure',
      subsections: [
        {
          subtitle: 'A. Définition et principe fondamental',
          content: [
            'Une phrase simple ne contient qu\'un seul verbe conjugué à un mode personnel (indicatif, subjonctif, conditionnel, impératif).',
            'Elle est également appelée proposition indépendante car elle se suffit à elle-même sur le plan du sens : elle ne dépend d\'aucune autre proposition et aucune autre proposition ne dépend d\'elle.',
            'Exemple fondamental : « L\'élève assidu révise méthodiquement toutes ses leçons pour réussir brillamment son BFEM. » Dans cette phrase longue, il n\'y a qu\'un seul verbe conjugué (« révise ») : il s\'agit donc bel et bien d\'une phrase simple.'
          ]
        },
        {
          subtitle: 'B. Les constituants de la phrase simple',
          content: [
            'Le Groupe Nominal Sujet (GNS) : indique qui fait ou subit l\'action ou de qui l\'on parle.',
            'Le Groupe Verbal (GV) : constitué du verbe et de ses compléments essentiels (Complément d\'Objet Direct, Complément d\'Objet Indirect, Attribut du sujet).',
            'Les Groupes Circonstanciels (GC) : compléments facultatifs et mobiles apportant des précisions de temps, de lieu, de moyen, de manière ou de cause.'
          ]
        },
        {
          subtitle: 'C. Les pièges à éviter lors de l\'épreuve du BFEM',
          content: [
            'Attention aux verbes à l\'infinitif et aux participes : ils ne constituent pas des verbes conjugués à un mode personnel (sauf dans le cas spécifique de la proposition infinitive ou participiale avec sujet propre). Exemple : « Il court pour attraper le car. » Le verbe « attraper » est à l\'infinitif ; il n\'y a qu\'un verbe conjugué (« court »), c\'est donc une phrase simple.',
            'Attention aux temps composés : « Les candidats ont composé avec sérieux. » « Ont composé » forme un seul et unique verbe au passé composé (auxiliaire + participe passé), ce n\'est pas deux verbes distincts.'
          ]
        }
      ]
    },
    {
      title: '2. La Phrase Complexe : Organisation et Modalités de Liaison',
      subsections: [
        {
          subtitle: 'A. Définition',
          content: [
            'Une phrase complexe comprend au moins deux propositions, et donc au moins deux verbes conjugués à un mode personnel.',
            'Règle d\'or du décompte : il y a autant de propositions dans une phrase qu\'il y a de verbes conjugués à un mode personnel.',
            'Les propositions d\'une phrase complexe peuvent être reliées entre elles selon trois procédés syntaxiques majeurs : la juxtaposition, la coordination et la subordination.'
          ]
        },
        {
          subtitle: 'B. La Juxtaposition',
          content: [
            'Les propositions sont posées côte à côte, sans aucun mot de liaison grammatical, séparées uniquement par un signe de ponctuation faible : la virgule (,), le point-virgule (;) ou les deux-points (:).',
            'Exemple : « L\'harmattan souffle violemment, la poussière ocre envahit les concessions, les habitants s\'abritent. » (Trois propositions indépendantes juxtaposées).',
            'Rôle stylistique : les deux-points traduisent souvent une relation logique implicite de cause ou de conséquence : « L\'athlète sénégalais rayonne : il vient de remporter la médaille d\'or. » (les deux-points ont valeur de cause).'
          ]
        },
        {
          subtitle: 'C. La Coordination',
          content: [
            'Les propositions indépendantes sont reliées entre elles par une conjonction de coordination (mais, ou, et, donc, or, ni, car) ou un adverbe de liaison (puis, ensuite, cependant, toutefois, néanmoins, par conséquent, en effet).',
            'Chaque conjonction exprime une valeur logique spécifique : « mais » (opposition), « ou » (alternative), « et » (addition), « donc » (conséquence), « or » (argument nouveau), « ni » (double négation), « car » (cause).',
            'Exemple : « Le candidat a révisé avec constance et persévérance, donc il a obtenu sa mention très bien au BFEM. »'
          ]
        },
        {
          subtitle: 'D. La Subordination',
          content: [
            'La subordination établit une relation hiérarchique : une proposition principale commande une ou plusieurs propositions subordonnées par l\'intermédiaire d\'un mot subordonnant.',
            'La proposition subordonnée dépend étroitement de la principale : elle ne peut pas fonctionner seule à l\'oral ni à l\'écrit.',
            'Les trois grandes familles de subordonnées sont : les propositions subordonnées relatives (introduites par un pronom relatif), les propositions subordonnées complétives (introduites par que, si ou un mot interrogatif) et les propositions subordonnées circonstancielles (introduites par des conjonctions marquant le temps, la cause, le but, la conséquence, la condition, etc.).'
          ]
        }
      ]
    },
    {
      title: '3. Tableau Comparatif & Synthèse Méthodologique BFEM',
      table: {
        headers: ['Type de liaison', 'Moyens de liaison', 'Rapport hiérarchique', 'Exemple type BFEM'],
        rows: [
          ['Juxtaposition', 'Virgule (,), point-virgule (;), deux-points (:)', 'Propositions indépendantes sur le même plan', 'La cloche a retenti : les épreuves du BFEM commencent.'],
          ['Coordination', 'Mais, ou, et, donc, or, ni, car / puis, pourtant, ainsi', 'Propositions indépendantes coordonnées', 'Aminata hésitait, mais elle prit courageusement la parole devant l\'assemblée.'],
          ['Subordination', 'Conjonctions (que, parce que, si...), pronoms relatifs (qui, que, dont...)', 'Proposition subordonnée dépendante d\'une proposition principale', 'Le jury proclamera les résultats dès que les moyennes seront calculées.']
        ]
      },
      content: [
        'Méthode pour l\'analyse grammaticale au BFEM : 1° Souligner les verbes conjugués. 2° Délimiter chaque proposition entre crochets. 3° Identifier le mot introducteur. 4° Préciser la nature exacte (proposition indépendante juxtaposée/coordonnée, ou proposition principale / subordonnée relative / complétive / circonstancielle).'
      ]
    }
  ],
  conclusion: 'La maîtrise de la phrase simple et complexe est indispensable pour réussir l\'épreuve de langue au BFEM et pour structurer avec clarté ses idées dans la production écrite (récit ou argumentation). Savoir alterner phrases simples percutantes et phrases complexes articulées confère du rythme et de la maturité au style.'
};

// LEÇON 2 : LES PROPOSITIONS SUBORDONNÉES COMPLÉTIVES
export const LESSON_2_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-2',
  number: 'Leçon 2',
  title: 'Les propositions subordonnées complétives',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude intégrale des propositions subordonnées complétives : complétives conjonctives pures par que, complétives infinitives et interrogatives indirectes.',
  introduction: 'Les propositions subordonnées complétives tirent leur nom du fait qu\'elles complètent directement le verbe de la proposition principale. Contrairement aux subordonnées circonstancielles qui sont déplaçables ou supprimables, la subordonnée complétive est essentielle : elle remplit généralement la fonction de Complément d\'Objet Direct (COD) ou parfois de Complément d\'Objet Indirect (COI) du verbe principal. L\'élève de 3ème doit maîtriser les trois types de complétives et leurs modes verbaux respectifs.',
  sections: [
    {
      title: '1. La Complétive Conjonctive Pure (introduite par « que »)',
      subsections: [
        {
          subtitle: 'A. Caractéristiques et fonction',
          content: [
            'Elle est introduite par la conjonction de subordination pure « que » (ou « qu\' » devant voyelle).',
            'Attention fondamentale : « que » conjonction n\'a pas d\'antécédent ! Il suit immédiatement un verbe transitif (penser que, dire que, vouloir que, ordonner que). C\'est ce qui la distingue catégoriquement de la proposition subordonnée relative où « que » est un pronom ayant pour antécédent un nom.',
            'Fonction syntaxique majeure : Complément d\'Objet Direct (COD) du verbe de la principale. Exemple : « Le professeur certifie [que tous les élèves réussiront]. » (certifie quoi ? -> que tous réussiront).'
          ]
        },
        {
          subtitle: 'B. Le choix du mode : Indicatif ou Subjonctif',
          content: [
            'Le mode de la subordonnée complétive dépend rigoureusement du sens du verbe de la proposition principale :',
            '1° Mode Indicatif : après les verbes de déclaration (dire, affirmer, déclarer, certifier), d\'opinion ou de pensée (penser, croire, estimer) et de certitude (savoir, être sûr, être certain). Exemple : « Je sais qu\'il dit la vérité. »',
            '2° Mode Subjonctif : après les verbes de volonté (vouloir, exiger, souhaiter, ordonner), de sentiment (craindre, avoir peur, se réjouir, regretter), de doute ou d\'incertitude (douter, contester), et les tournures impersonnelles de nécessité (il faut que, il est indispensable que). Exemple : « Les inspecteurs exigent [que la neutralité soit scrupuleusement respectée]. »'
          ]
        },
        {
          subtitle: 'C. Les nuances avec les verbes d\'opinion à la forme négative ou interrogative',
          content: [
            'À la forme affirmative, les verbes d\'opinion prennent l\'indicatif : « Je crois qu\'il est présent. »',
            'À la forme négative ou interrogative (doute introduit), le subjonctif devient recommandé : « Je ne crois pas qu\'il soit coupable. » / « Croyez-vous qu\'il puisse réussir sans travailler ? »'
          ]
        }
      ]
    },
    {
      title: '2. La Complétive Infinitive',
      subsections: [
        {
          subtitle: 'A. Définition et mécanisme',
          content: [
            'La proposition subordonnée complétive infinitive ne possède pas de mot subordonnant introducteur.',
            'Elle est construite autour d\'un verbe à l\'infinitif qui possède un sujet propre, distinct du sujet de la proposition principale.',
            'Elle se rencontre quasi exclusivement après les verbes de perception sensorielle : voir, entendre, écouter, regarder, sentir, apercevoir.',
            'Exemple : « Dans la cour de récréation, le surveillant regarde [les enfants jouer au ballon]. » (« les enfants » est le sujet propre de « jouer » ; la proposition infinitive est COD de « regarde »).'
          ]
        },
        {
          subtitle: 'B. Distinction essentielle',
          content: [
            '« J\'espère réussir mon examen. » : « réussir » n\'a pas de sujet propre distinct (le sujet est « je »), c\'est un simple verbe à l\'infinitif COD, et non une proposition complétive infinitive.',
            '« J\'entends [le tonnerre gronder]. » : « le tonnerre » est le sujet du verbe « gronder », distinct de « je ». C\'est une proposition subordonnée infinitive complète.'
          ]
        }
      ]
    },
    {
      title: '3. La Complétive Interrogative Indirecte',
      subsections: [
        {
          subtitle: 'A. Définition et caractéristiques',
          content: [
            'Elle rapporte une question de manière indirecte, intégrée dans une proposition subordonnée dépendante d\'un verbe exprimant l\'interrogation, la recherche ou l\'ignorance (demander, ignorer, savoir à la forme négative, chercher, vouloir savoir).',
            'Règles formelles : suppression du point d\'interrogation final, suppression de l\'inversion du sujet, absence de tiret.',
            '1° Interrogation totale : introduite par la conjonction « si ». Exemple : « Le doyen demande [si les surveillants sont déjà installés]. »',
            '2° Interrogation partielle : introduite par un mot interrogatif (pourquoi, comment, où, quand, quel, qui, ce que, ce qui). Exemple : « J\'ignore [pourquoi le candidat a abandonné l\'épreuve]. »'
          ]
        },
        {
          subtitle: 'B. Le piège classique : « ce que » interrogatif vs pronom relatif',
          content: [
            '« Je me demande ce qu\'il prépare. » : interrogative indirecte (dépend du verbe de question « demander »).',
            '« Il contemple ce que tu as fabriqué. » : « ce » est pronom démonstratif antécédent et « que tu as fabriqué » est proposition subordonnée relative.'
          ]
        }
      ]
    },
    {
      title: '4. Synthèse pour l\'Analyse Grammaticale au BFEM',
      table: {
        headers: ['Type de complétive', 'Mots introducteurs', 'Verbes de la principale', 'Mode verbal', 'Fonction type'],
        rows: [
          ['Conjonctive pure', 'Que, qu\'', 'Dire, penser (indicatif) / Vouloir, craindre (subjonctif)', 'Indicatif ou Subjonctif', 'COD du verbe principal'],
          ['Infinitive', 'Aucun (verbe à l\'infinitif avec sujet propre)', 'Verbes de perception (voir, entendre, sentir...)', 'Infinitif', 'COD du verbe principal'],
          ['Interrogative indirecte', 'Si, pourquoi, comment, où, quand, quel, qui, ce que', 'Demander, ignorer, chercher, vouloir savoir', 'Indicatif (ou conditionnel)', 'COD du verbe principal']
        ]
      }
    }
  ],
  conclusion: 'Au BFEM, reconnaître une proposition subordonnée complétive repose sur un réflexe simple : tester si la proposition peut être remplacée par le pronom « cela » ou « le » après le verbe (« Je sais qu\'il viendra » -> « Je le sais » / « Je sais cela »). Cette manipulation confirme sans équivoque la fonction COD.'
};

// LEÇON 3 : LES PROPOSITIONS SUBORDONNÉES RELATIVES
export const LESSON_3_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-3',
  number: 'Leçon 3',
  title: 'Les propositions subordonnées relatives',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude approfondie de la proposition subordonnée relative : pronoms relatifs simples et composés, fonctions du pronom au sein de la subordonnée, distinction essentielle entre relative déterminative et explicative.',
  introduction: 'La proposition subordonnée relative est l\'une des expansions du nom les plus riches et les plus fréquentes de la langue française. Elle est introduite par un pronom relatif qui reprend un mot de la proposition principale appelé l\'antécédent. Sa fonction syntaxique générale est toujours d\'être complément de l\'antécédent. L\'élève de 3ème doit maîtriser l\'analyse à deux niveaux : la fonction de la proposition entière par rapport à l\'antécédent, et la fonction propre du pronom relatif à l\'intérieur de sa propre proposition.',
  sections: [
    {
      title: '1. Le Pronom Relatif et ses Deux Fonctions Fondamentales',
      subsections: [
        {
          subtitle: 'A. Les deux catégories de pronoms relatifs',
          content: [
            'Les pronoms relatifs simples (invariables) : qui, que (qu\'), quoi, dont, où.',
            'Les pronoms relatifs composés (variables en genre et en nombre) : lequel, laquelle, lesquels, lesquelles ; et leurs formes contractées avec les prépositions « à » et « de » : auquel, à laquelle, auxquels, auxquelles, duquel, de laquelle, desquels, desquelles.',
            'Le pronom relatif a un double rôle : il sert de mot de liaison reliant la subordonnée à la principale, et il remplace l\'antécédent en occupant une fonction syntaxique propre.'
          ]
        },
        {
          subtitle: 'B. Les fonctions du pronom relatif à l\'intérieur de la relative',
          content: [
            '1° « QUI » est généralement Sujet du verbe de la relative : « L\'écrivain [qui a composé cette œuvre] s\'appelle Cheikh Hamidou Kane. » (« qui » a pour antécédent « l\'écrivain » et est sujet de « a composé »).',
            '2° « QUE » est généralement Complément d\'Objet Direct (COD) : « Le livre [que le professeur m\'a prêté] est passionnant. » (prêté quoi ? -> « que », mis pour « le livre », COD de « a prêté »).',
            '3° « DONT » remplace un groupe prépositionnel introduit par « de » : Complément du Nom (« L\'auteur dont j\'admire l\'écriture... » = l\'écriture de cet auteur), Complément de l\'Adjectif (« La bourse dont il est fier... » = fier de cette bourse), Complément d\'Objet Indirect (« La question dont nous débattons... » = débattre de cette question).',
            '4° « OÙ » est Complément Circonstanciel de Lieu ou de Temps : « L\'île de Gorée est un lieu où se recueillent les visiteurs. » (CC de lieu) / « L\'année où le Sénégal obtint son indépendance fut historique. » (CC de temps).',
            '5° Les relatifs composés introduits par préposition : « La table [sur laquelle reposent les copies] est cirée. » (« sur laquelle » est CC de lieu de « reposent »).'
          ]
        }
      ]
    },
    {
      title: '2. Distinction Sémantique Majeure : Relative Déterminative vs Relative Explicative',
      subsections: [
        {
          subtitle: 'A. La Relative Déterminative (ou Restrictive)',
          content: [
            'Elle est indispensable à la compréhension du sens de la phrase : elle restreint l\'extension de l\'antécédent pour préciser de qui ou de quoi il s\'agit exactement.',
            'Elle ne peut pas être supprimée sans altérer ou rendre incompréhensible le message.',
            'Elle n\'est jamais encadrée de virgules.',
            'Exemple fondamental : « Les candidats [qui ont révisé avec sérieux] obtiendront leur diplôme. » Si l\'on supprime la relative, on affirme faussement que « Tous les candidats obtiendront leur diplôme ». La relative limite l\'effet aux seuls candidats sérieux.'
          ]
        },
        {
          subtitle: 'B. La Relative Explicative (ou Appositive)',
          content: [
            'Elle apporte une simple information accessoire ou descriptive sur un antécédent déjà parfaitement identifié.',
            'Elle peut être supprimée sans modifier le sens fondamental de la phrase principale.',
            'Elle est toujours isolée ou encadrée par des virgules.',
            'Exemple : « Léopold Sédar Senghor, [qui fut le premier président du Sénégal], était un poète de renommée mondiale. » Si l\'on retire la relative, la phrase conserve tout son sens.'
          ]
        }
      ]
    },
    {
      title: '3. Règles d\'Accord Particulières Liées au Pronom Relatif',
      content: [
        'Accord du verbe avec le pronom « qui » sujet : le verbe de la relative s\'accorde en personne et en nombre avec l\'antécédent. Exemple : « C\'est moi qui [ai] trouvé la solution » (et non *qui a trouvé*) / « C\'est vous qui [avez] parlé ». Citations littéraires et pièges BFEM récurrents.',
        'Accord du participe passé conjugué avec « avoir » dans la relative : quand « que » est COD antéposé, le participe passé s\'accorde en genre et en nombre avec l\'antécédent. Exemple : « Les épreuves que les candidats ont [terminées] étaient exigeantes. » (COD « que » mis pour « les épreuves », féminin pluriel).'
      ]
    },
    {
      title: '4. Modèle d\'Analyse Syntaxique pour le BFEM',
      table: {
        headers: ['Segment de phrase', 'Nature grammaticale', 'Fonction syntaxique'],
        rows: [
          ['« que nous avons visité »', 'Proposition subordonnée relative', 'Complément de l\'antécédent « le monument »'],
          ['« que »', 'Pronom relatif simple', 'COD du verbe « avons visité »'],
          ['« qui chantent dans les arbres »', 'Proposition subordonnée relative explicative', 'Complément de l\'antécédent « les oiseaux »'],
          ['« qui »', 'Pronom relatif simple', 'Sujet du verbe « chantent »']
        ]
      }
    }
  ],
  conclusion: 'La proposition subordonnée relative enrichit la description et la caractérisation des personnages ou des décors dans le récit, tout en permettant des démonstrations rigoureuses dans le devoir argumentatif du BFEM.'
};

// LEÇON 4 : LES SUBORDONNÉES CIRCONSTANCIELLES DE CAUSE ET DE CONSÉQUENCE
export const LESSON_4_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-4',
  number: 'Leçon 4',
  title: 'Les subordonnées circonstancielles de cause et de conséquence',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude des liens logiques de causalité : cause (motif en amont) et conséquence (aboutissement en aval), conjonctions, modes verbaux et transformations obligatoires pour le BFEM.',
  introduction: 'La cause et la conséquence représentent les deux faces d\'une même relation logique de causalité. La cause regarde vers l\'amont (l\'origine, la raison du phénomène), tandis que la conséquence regarde vers l\'aval (le résultat, l\'effet produit). Dans les épreuves du BFEM, les questions de transformation de la cause en conséquence (et réciproquement) sont très fréquentes et requièrent une rigueur syntaxique absolue.',
  sections: [
    {
      title: '1. La Proposition Subordonnée Circonstancielle de Cause',
      subsections: [
        {
          subtitle: 'A. Définition et rôle',
          content: [
            'Elle indique la raison, le motif ou l\'explication pour laquelle s\'accomplit l\'action énoncée dans la proposition principale.',
            'Elle répond à la question « pour quelle raison ? » ou « pourquoi ? » posée après le verbe de la principale.',
            'Sa fonction grammaticale est : Complément Circonstanciel de Cause du verbe de la principale.'
          ]
        },
        {
          subtitle: 'B. Les conjonctions et locutions conjonctives de cause',
          content: [
            '« Parce que » : introducteur le plus courant, exprime une cause purement informative. Exemple : « Il s\'est distingué parce qu\'il a travaillé méthodiquement. »',
            '« Comme » : s\'emploie TOUJOURS en tête de phrase pour mettre en avant une cause évidente. Exemple : « Comme la saison des pluies approchait, les paysans préparaient activement les semences. »',
            '« Puisque » : introduit une cause connue de l\'interlocuteur ou incontestable. Exemple : « Puisque tout le monde est réuni, nous pouvons commencer la délibération. »',
            '« Étant donné que », « vu que », « du fait que » : constat objectif d\'un fait avéré.',
            '« Sous prétexte que » (+ indicatif) : introduit une fausse cause invoquée pour se disculper. Exemple : « Il s\'est absenté sous prétexte qu\'il était souffrant. »',
            '« Non que » / « non parce que » (+ SUBJONCTIF) : écarte une cause fausse pour en proposer une autre. Exemple : « Il a renoncé, non qu\'il manquât de courage, mais parce qu\'il était épuisé. »'
          ]
        },
        {
          subtitle: 'C. Les modes verbaux de la subordonnée de cause',
          content: [
            'L\'indicatif est le mode habituel, car la cause évoque un fait réel et accompli.',
            'Le subjonctif s\'emploie obligatoirement après « non que », « ce n\'est pas que » (cause rejetée) ou « soit que... soit que... » (causes alternatives hypothétiques).'
          ]
        }
      ]
    },
    {
      title: '2. La Proposition Subordonnée Circonstancielle de Conséquence',
      subsections: [
        {
          subtitle: 'A. Définition et rôle',
          content: [
            'Elle exprime le résultat effectif, l\'effet ou l\'aboutissement logique du fait exposé dans la proposition principale.',
            'Elle s\'oppose chronologiquement à la cause : Fait 1 (dans la principale) -> Résultat / Effet (dans la subordonnée de conséquence).',
            'Fonction : Complément Circonstanciel de Conséquence du verbe de la proposition principale.'
          ]
        },
        {
          subtitle: 'B. Les formes syntaxiques de la conséquence',
          content: [
            '1° Conséquence simple liée au verbe : « de sorte que », « si bien que », « au point que », « de façon que ». Exemple : « La marée est montée très vite, si bien que les pêcheurs ont dû regagner le rivage en urgence. »',
            '2° Conséquence corrélative liée à un adverbe d\'intensité dans la principale : « si... que », « tellement... que », « tant... que », « tellement de... que ». Exemple : « L\'épreuve de dictée comportait tellement de pièges que plusieurs candidats ont douté de leur orthographe. »',
            '3° Conséquence liée à un nom par un déterminant d\'intensité : « un tel... que », « une telle... que ». Exemple : « Il y avait une telle chaleur dans la salle que les surveillants ont ouvert toutes les fenêtres. »'
          ]
        },
        {
          subtitle: 'C. Les modes verbaux de la conséquence',
          content: [
            'L\'indicatif est de règle lorsque la conséquence est un fait réel et constaté.',
            'Le conditionnel s\'emploie si la conséquence est soumise à une condition préalable.',
            'Le subjonctif s\'emploie obligatoirement après « trop / assez / pas assez... pour que » ou après une tournure négative ou interrogative. Exemple : « Cet obstacle est trop difficile pour que nous puissions le franchir sans aide. »'
          ]
        }
      ]
    },
    {
      title: '3. L\'Exercice Incontournable du BFEM : La Transformation Cause <-> Conséquence',
      table: {
        headers: ['Énoncé de départ', 'Relation exprimée', 'Transformation équivalente', 'Nouvelle relation'],
        rows: [
          ['« Il a fait preuve de courage parce qu\'il aimait sa patrie. »', 'Subordonnée de cause', '« Il aimait sa patrie si bien qu\'il fit preuve d\'un grand courage. »', 'Subordonnée de conséquence'],
          ['« Le fleuve a débordé, donc les récoltes sont inondées. »', 'Coordination (conséquence)', '« Comme le fleuve a débordé, les récoltes sont inondées. »', 'Subordonnée de cause'],
          ['« L\'orage était d\'une telle violence que les toitures ont cédé. »', 'Subordonnée de conséquence corrélative', '« Les toitures ont cédé car l\'orage était d\'une rare violence. »', 'Coordination (cause)']
        ]
      }
    }
  ],
  conclusion: 'Savoir manier avec aisance les connecteurs de cause et de conséquence permet d\'argumenter avec clarté, de démontrer rigoureusement une thèse et de maîtriser l\'un des exercices rois de l\'épreuve de texte suivi de questions au BFEM.'
};

// LEÇON 5 : LES SUBORDONNÉES CIRCONSTANCIELLES DE BUT ET DE TEMPS
export const LESSON_5_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-5',
  number: 'Leçon 5',
  title: 'Les subordonnées circonstancielles de but et de temps',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude exhaustive des subordonnées circonstancielles de but (intention visée/évitée, mode subjonctif obligatoire) et de temps (simultanéité, antériorité, postériorité et concordances des modes).',
  introduction: 'Les propositions subordonnées circonstancielles de but et de temps permettent de situer les actions dans la durée et de préciser les intentions des personnages. Alors que la cause répond à la question « d\'où cela vient-il ? », le but répond à la question « vers quoi tend-on ? ». La concordance des modes (indicatif vs subjonctif) fait l\'objet de nombreuses questions pièges aux examens du BFEM.',
  sections: [
    {
      title: '1. La Proposition Subordonnée Circonstancielle de But (ou Finale)',
      subsections: [
        {
          subtitle: 'A. Définition et notion d\'intention',
          content: [
            'Elle exprime l\'intention, la visée, le dessein ou l\'objectif recherché par le sujet de la proposition principale.',
            'Elle peut aussi exprimer un but que l\'on cherche à éviter ou à conjurer (but négatif ou craint).',
            'Elle répond à la question « dans quel but ? » ou « en vue de quoi ? ».'
          ]
        },
        {
          subtitle: 'B. Les locutions conjonctives et le mode SUBJONCTIF OBLIGATOIRE',
          content: [
            '1° But à atteindre : « pour que », « afin que », « de manière que », « de façon que » (avec nuance d\'intention).',
            '2° But à éviter : « de peur que... (ne) », « de crainte que... (ne) ». Exemple : « Le maître répète la consigne de peur que les candidats ne commettent une erreur. » (le « ne » employé sans « pas » est un « ne explétif »).',
            'Règle d\'or du mode verbal : le verbe de la subordonnée de but est TOUJOURS conjugué au SUBJONCTIF, car le but envisagé n\'est jamais un fait acquis au moment où l\'on parle ; il s\'agit d\'une visée future, espérée ou redoutée.'
          ]
        },
        {
          subtitle: 'C. La règle impérative de coréférence du sujet',
          content: [
            'Lorsque le sujet de la proposition principale et le sujet du verbe de but sont identiques, la subordonnée est impossible en bon français ! On doit impérativement employer un groupe infinitif prépositionnel.',
            'Incorrect : *Je travaille dur pour que je réussisse.*',
            'Correct : « Je travaille dur pour réussir / afin de réussir mon BFEM. » (pour / afin de / de peur de / de crainte de + infinitif).'
          ]
        }
      ]
    },
    {
      title: '2. La Proposition Subordonnée Circonstancielle de Temps (ou Temporelle)',
      subsections: [
        {
          subtitle: 'A. Définition et les trois rapports chronologiques',
          content: [
            'Elle situe l\'action de la principale dans le temps par rapport à l\'action de la subordonnée.',
            'Il existe trois rapports chronologiques fondamentaux qu\'il faut savoir distinguer rigoureusement : la simultanéité, l\'antériorité et la postériorité.'
          ]
        },
        {
          subtitle: 'B. La Simultanéité (les deux actions ont lieu en même temps)',
          content: [
            'Locutions : quand, lorsque, pendant que, tandis que, alors que, au moment où, au fur et à mesure que.',
            'Mode verbal : INDICATIF (les faits sont réels et concomitants).',
            'Exemple : « Pendant que les élèves composaient dans un silence religieux, la pluie battait contre les persiennes. »'
          ]
        },
        {
          subtitle: 'C. L\'Antériorité (l\'action de la principale a lieu avant celle de la subordonnée)',
          content: [
            'Locutions : avant que, jusqu\'à ce que, en attendant que.',
            'Mode verbal : SUBJONCTIF OBLIGATOIRE, car au moment où l\'action principale a lieu, l\'action de la subordonnée n\'est pas encore accomplie.',
            'Exemple : « Rangez soigneusement vos stylos avant que le surveillant ne ramasse les feuilles. »'
          ]
        },
        {
          subtitle: 'D. La Postériorité (l\'action de la principale a lieu après celle de la subordonnée)',
          content: [
            'Locutions : après que, dès que, aussitôt que, une fois que.',
            'Mode verbal : INDICATIF OBLIGATOIRE (les faits de la subordonnée sont déjà accomplis et certains !).',
            'PIÈGE MAJEUR DU BFEM : Après « après que », l\'usage du subjonctif est une faute d\'orthographe grammaticale lourdement sanctionnée. On écrit : « Après que le candidat a terminé son devoir » (indicatif passé composé), et JAMAIS *après qu\'il ait terminé*.'
          ]
        }
      ]
    },
    {
      title: '3. Tableau Récapitulatif des Modes dans les Temporelles et Finales',
      table: {
        headers: ['Rapport logique / temporel', 'Locutions conjonctives', 'Mode obligatoire', 'Exemple type BFEM'],
        rows: [
          ['But / Fin visée', 'Pour que, afin que, de crainte que (ne)', 'SUBJONCTIF', 'Nous dialoguons afin que la concorde règne.'],
          ['Temps : Antériorité', 'Avant que, jusqu\'à ce que', 'SUBJONCTIF', 'Étudiez sans relâche avant que l\'échéance n\'arrive.'],
          ['Temps : Simultanéité', 'Quand, lorsque, pendant que', 'INDICATIF', 'Le surveillant vérifie les cartes pendant que les candidats s\'installent.'],
          ['Temps : Postériorité', 'Après que, dès que, aussitôt que', 'INDICATIF (impératif)', 'Aussitôt que la sonnerie retentit, le silence s\'établit.']
        ]
      }
    }
  ],
  conclusion: 'Distinguer le but de la cause et respecter rigoureusement l\'alternance indicatif / subjonctif dans les temporelles garantit un score parfait aux exercices d\'analyse logique et à la dictée du BFEM.'
};

// LEÇON 6 : LES SUBORDONNÉES DE CONDITION (HYPOTHÈSE) ET DE CONCESSION / OPPOSITION
export const LESSON_6_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-6',
  number: 'Leçon 6',
  title: 'Les subordonnées de condition (hypothèse) et de concession/opposition',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude intégrale des propositions subordonnées de condition et d\'hypothèse (système de si), et de concession / opposition (bien que, quoique, même si). Concordances verbales et nuances stylistiques.',
  introduction: 'L\'hypothèse et la concession sont des articulations logiques complexes qui enrichissent la pensée critique et le raisonnement argumenté. L\'hypothèse formule une condition préalable pour que se réalise un fait, tandis que la concession constate qu\'un obstacle n\'a pas empêché la réalisation d\'un résultat inattendu. Ces constructions grammaticales sont au cœur des attentes du jury du BFEM.',
  sections: [
    {
      title: '1. La Subordonnée Circonstancielle de Condition et d\'Hypothèse',
      subsections: [
        {
          subtitle: 'A. Le système hypothétique classique avec « si »',
          content: [
            'La conjonction « si » n\'est JAMAIS suivie du conditionnel ni du subjonctif dans ce cadre : la fameuse règle mnémotechnique rappelle que « les si n\'aiment pas les -rais » !',
            '1° Le Réel ou le Potentiel (l\'action est réalisable) : Si + présent de l\'indicatif -> Futur simple (ou présent de l\'indicatif / impératif) dans la principale. Exemple : « Si tu révises consciencieusement (présent), tu réussiras (futur) ton examen. »',
            '2° L\'Irréel du présent (l\'action est imaginaire ou impossible dans le présent) : Si + imparfait de l\'indicatif -> Conditionnel présent dans la principale. Exemple : « Si j\'avais des ailes (imparfait), je survolerais (conditionnel présent) mon pays natal. »',
            '3° L\'Irréel du passé (l\'action ne s\'est pas réalisée dans le passé, c\'est le regret) : Si + plus-que-parfait de l\'indicatif -> Conditionnel passé dans la principale. Exemple : « Si vous aviez suivi les conseils du doyen (PQP), vous n\'auriez pas commis cette erreur (conditionnel passé). »'
          ]
        },
        {
          subtitle: 'B. Les autres locutions conjonctives de condition',
          content: [
            'Avec le SUBJONCTIF : « à condition que », « pourvu que », « pour peu que », « à moins que... (ne) ». Exemple : « Vous triompherez de cette épreuve pourvu que vous restiez concentrés jusqu\'au bout. »',
            'Avec le CONDITIONNEL : « au cas où », « dans l\'hypothèse où », « dans la mesure où » (nuance d\'éventualité). Exemple : « Au cas où vous auriez besoin d\'explications supplémentaires, le professeur sera disponible. »'
          ]
        }
      ]
    },
    {
      title: '2. Les Subordonnées d\'Opposition et de Concession',
      subsections: [
        {
          subtitle: 'A. Distinction essentielle entre Opposition et Concession',
          content: [
            'L\'Opposition confronte deux faits différents ou deux situations contrastées, sans qu\'il y ait de contradiction logique. Introducteurs : « alors que », « tandis que » (+ indicatif). Exemple : « Cheikh est passionné de mathématiques tandis que sa sœur préfère la littérature. »',
            'La Concession exprime une cause qui aurait normalement dû empêcher l\'action principale d\'aboutir, mais qui n\'a pas agi. C\'est une conséquence inattendue ou illogique. Exemple : « Bien qu\'il fût blessé à la cheville, l\'attaquant sénégalais a disputé toute la finale. »'
          ]
        },
        {
          subtitle: 'B. Les introducteurs de la concession et leurs modes',
          content: [
            '1° Conjonctions avec le SUBJONCTIF OBLIGATOIRE : « bien que », « quoique », « encore que », « malgré que » (l\'Académie française déconseille « malgré que », sauf avec le verbe avoir : « malgré qu\'il en ait » ; préférer « bien que »). Exemple : « Quoiqu\'il fasse très chaud, les ouvriers poursuivent le chantier. »',
            '2° Locution avec l\'INDICATIF : « même si ». Exemple : « Même si les difficultés s\'accumulent, notre détermination reste inébranlable. »',
            '3° Tournure d\'intensité concessive : « tout... que », « quel que... », « quoi que... ». Exemple : « Tout savant qu\'il est, il reste humble. »'
          ]
        }
      ]
    },
    {
      title: '3. Tableau Comparatif des Subordonnées Logiques au BFEM',
      table: {
        headers: ['Nuance logique', 'Conjonction type', 'Mode verbal exigé', 'Exemple type BFEM'],
        rows: [
          ['Condition / Potentiel', 'Si + présent', 'Futur simple dans la principale', 'Si vous persévérez, vous triompherez.'],
          ['Condition / Irréel présent', 'Si + imparfait', 'Conditionnel présent dans la principale', 'Si nous avions du temps, nous lirions davantage.'],
          ['Condition restrictive', 'À condition que, pourvu que', 'SUBJONCTIF', 'Le prêt sera accordé à condition que le dossier soit complet.'],
          ['Opposition pure', 'Alors que, tandis que', 'INDICATIF', 'Le port de Dakar s\'active alors que la ville dort encore.'],
          ['Concession', 'Bien que, quoique', 'SUBJONCTIF', 'Bien qu\'il soit jeune, il possède une grande sagesse.'],
          ['Concession d\'évidence', 'Même si', 'INDICATIF', 'Même s\'il pleut, le match aura lieu.']
        ]
      }
    }
  ],
  conclusion: 'La maîtrise de la condition et de la concession permet de développer des argumentations solides et nuancées, en démontrant sa capacité à anticiper les contre-arguments et à formuler des thèses réfléchies.'
};
