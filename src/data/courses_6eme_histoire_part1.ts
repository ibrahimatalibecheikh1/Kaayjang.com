import { LessonContent } from './courses';

// =========================================================================
// PREMIÈRE PARTIE : L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE
// CLASSE DE 6ÈME - PROGRAMME OFFICIEL SÉNÉGALAIS
// LEÇONS 1, 2 ET 3 AVEC INTRODUCTION ET CONCLUSION COMPLÈTES
// =========================================================================

export const LESSON_1_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-1',
  number: 'Leçon 1',
  title: "DÉFINITION, OBJET ET UTILITÉ DE L'HISTOIRE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `L'Histoire est une discipline fondamentale qui nous invite à explorer l'aventure humaine à travers les âges. Loin d'être un simple recueil de récits imaginaires ou de mythes anciens, elle constitue une science rigoureuse dont la maîtrise est indispensable pour comprendre les racines de notre société actuelle, développer l'esprit critique et forger notre conscience citoyenne au Sénégal.`,
  fullText: `PREMIÈRE PARTIE : L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE
Leçon 1 : Définition, objet et utilité de l'Histoire

1. La définition de l'Histoire
Le mot Histoire trouve sa lointaine racine dans le mot grec ancien Historia, qui signifie à la fois « enquête », « recherche d'informations » ou « récit des faits observés ». Sur le plan de la science, l'Histoire se définit comme la discipline scientifique exacte qui étudie de façon critique le passé des êtres humains au sein des sociétés.
Il est capital d'apprendre qu'un savant grec nommé Hérodote (qui a vécu au Vème siècle avant Jésus-Christ) est universellement considéré comme le « Père de l'Histoire ». Avant lui, les hommes racontaient le passé en inventant des légendes et en faisant intervenir des dieux ou de la magie. Hérodote a été le tout premier à voyager partout, à interroger des témoins sur le terrain et à écrire un récit réaliste, logique et basé sur des observations neutres.

2. L'objet de l'Histoire
L'objet d'étude fondamental de l'Histoire est l'Homme dans le temps et dans l'espace. L'histoire n'étudie pas les animaux ou l'évolution géologique de la Terre pour elle-même. Elle se focalise uniquement sur les actions, les modes de vie, les erreurs, les guerres, les inventions et l'évolution globale de l'humanité.
- Dans le temps : L'historien analyse les changements survenus à travers les jours, les années et les époques. Il étudie la manière dont une société se transforme.
- Dans l'espace : L'historien étudie l'Homme là où il a vécu, en prenant en compte son environnement géographique local, national (le Sénégal) ou continental (l'Afrique et le monde).

3. L'utilité de l'Histoire
Contrairement aux idées reçues, l'Histoire n'est pas une simple récitation par cœur de dates de batailles ou de noms de souverains défunts. C'est une science d'une utilité quotidienne fondamentale :
- Comprendre notre présent : Le monde dans lequel nous évoluons aujourd'hui (nos frontières, nos religions, nos lois au Sénégal, nos traditions familiales) est directement le résultat d'événements passés. On ne peut pas savoir où l'on va sans savoir d'où l'on vient.
- Forger la conscience citoyenne : L'Histoire nous apprend à connaître les figures marquantes de notre pays, favorisant la cohésion nationale, la solidarité, l'amour de la patrie et le respect mutuel entre les différentes cultures.
- Développer l'esprit critique : L'Histoire apprend à l'élève à analyser des documents, à repérer le mensonge ou l'exagération, et à ne jamais accepter une affirmation sans en réclamer des preuves solides.`,
  sections: [
    {
      title: "1. La définition de l'Histoire",
      content: [
        `Étymologie : Le mot Histoire trouve sa lointaine racine dans le mot grec ancien Historia, qui signifie à la fois « enquête », « recherche d'informations » ou « récit des faits observés ».`,
        `Définition scientifique : Sur le plan de la science, l'Histoire se définit comme la discipline scientifique exacte qui étudie de façon critique le passé des êtres humains au sein des sociétés.`,
        `Le Père de l'Histoire : Un savant grec nommé Hérodote (Vème siècle avant Jésus-Christ) est universellement considéré comme le « Père de l'Histoire ». Avant lui, les hommes racontaient le passé en inventant des légendes et en faisant intervenir des dieux ou de la magie. Hérodote a été le tout premier à voyager, à interroger des témoins sur le terrain et à rédiger un récit réaliste, logique et fondé sur des observations neutres.`
      ]
    },
    {
      title: "2. L'objet de l'Histoire",
      content: [
        `L'objet d'étude fondamental de l'Histoire est l'Homme dans le temps et dans l'espace. Elle ne s'intéresse pas à l'évolution géologique de la Terre pour elle-même, mais se focalise sur les actions, les modes de vie, les erreurs, les guerres, les inventions et l'évolution globale de l'humanité.`,
        `Dans le temps : L'historien analyse les changements survenus à travers les jours, les années et les époques. Il étudie la façon dont une société se transforme au fil des siècles.`,
        `Dans l'espace : L'historien étudie l'Homme là où il a vécu, en prenant en compte son cadre géographique local, national (le Sénégal) ou continental (l'Afrique et le monde).`
      ]
    },
    {
      title: "3. L'utilité de l'Histoire",
      content: [
        `Comprendre notre présent : Le monde dans lequel nous évoluons aujourd'hui (nos frontières, nos religions, nos lois au Sénégal, nos traditions familiales) est directement le résultat d'événements passés. Comme le dit l'adage : « On ne peut pas savoir où l'on va sans savoir d'où l'on vient ».`,
        `Forger la conscience citoyenne : L'Histoire nous apprend à connaître les figures marquantes de notre pays, favorisant la cohésion nationale, la solidarité, l'amour de la patrie et le respect mutuel entre les différentes cultures.`,
        `Développer l'esprit critique : L'Histoire apprend à l'élève à analyser des documents avec rigueur, à déceler le mensonge ou l'exagération, et à ne jamais accepter une affirmation sans réclamer des preuves solides.`
      ]
    }
  ],
  diagram: {
    title: "SYNTHÈSE : DÉFINITION, OBJET ET UTILITÉ DE L'HISTOIRE",
    root: "L'HISTOIRE",
    branches: [
      {
        name: "Définition & Origine",
        subtitle: "Historia (enquête)",
        items: ["Racine grecque Historia", "Hérodote (Vème s. av. J.-C.)", "Recherche critique de la vérité"]
      },
      {
        name: "Objet d'étude",
        subtitle: "L'Homme en société",
        items: ["Dans le temps (évolution)", "Dans l'espace (milieu de vie)", "Actions et civilisations"]
      },
      {
        name: "Utilité majeure",
        subtitle: "Formation du citoyen",
        items: ["Comprendre le présent", "Forger l'esprit critique", "Cohésion & patriotisme"]
      }
    ]
  },
  conclusion: `En conclusion, l'Histoire n'est pas une simple récitation stérile de dates ou de faits révolus, mais une véritable boussole pour le citoyen sénégalais. En étudiant le passé des hommes dans le temps et l'espace avec rigueur et esprit critique, elle nous éclaire sur notre présent et nous prépare à construire un avenir uni, libre et éclairé.`
};

export const LESSON_2_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-2',
  number: 'Leçon 2',
  title: "LES SOURCES DE L'HISTOIRE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `Pour reconstituer des événements qui se sont déroulés il y a des siècles ou des millénaires, l'historien ne peut pas deviner le passé : il travaille à la manière d'un détective à partir des traces laissées par les générations disparues. Ces indices indispensables constituent les sources de l'Histoire, rigoureusement classées en trois catégories complémentaires.`,
  fullText: `PREMIÈRE PARTIE : L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE
Leçon 2 : Les sources de l'Histoire

1. Qu'est-ce qu'une source historique ?
L'historien agit exactement comme un détective ou un juge d'instruction. N'ayant pas vécu dans le passé lointain qu'il étudie, il est incapable de deviner ce qui s'est produit. Il doit impérativement chercher, collecter et analyser toutes les traces, empreintes, vestiges ou témoignages laissés derrière eux par les hommes du passé. Ces matériaux bruts indispensables à la science historique s'appellent les sources de l'Histoire. Sans sources, il n'y a pas d'histoire possible. On les classe rigoureusement en trois catégories principales.

2. Les sources muettes ou archéologiques
Ce sont les traces matérielles physiques laissées par les anciennes générations. On les qualifie de « muettes » car elles ne contiennent aucun texte écrit et ne peuvent pas parler directement. C'est le domaine exclusif des archéologues, ces savants qui réalisent de minutieuses fouilles sous la terre pour déterrer le passé.
- Exemples : Les outils primitifs en silex ou en pierre taillée, les restes d'anciennes poteries en argile cuite, les squelettes fossilisés d'hommes ou d'animaux, les bijoux anciens, les armes en bronze ou en fer, les ruines de monuments mégalithiques (comme les célèbres cercles mégalithiques de Sine Ngayène ou Wanar au Sénégal). Ces sources sont extrêmement fiables car l'objet matériel ne peut pas mentir sur son existence.

3. Les sources orales
Ce sont tous les récits historiques, les contes, les légendes, les généalogies et les poèmes transmis de bouche à oreille, de la bouche des aînés vers l'oreille des plus jeunes, de génération en génération.
- Importance en Afrique : C'est la source maîtresse, royale et indispensable pour reconstituer l'histoire du continent africain avant la colonisation, car les traditions s'y transmettaient principalement par la parole.
- Les gardiens de la mémoire : Ce rôle revient aux griots (comme les traditionalistes ou communicateurs traditionnels). Ils reçoivent une formation très stricte dès l'enfance pour mémoriser sans erreur les généalogies des familles, les hauts faits des rois et l'histoire des différents royaumes du Sénégal.
- Limites : La mémoire de l'homme peut être fragile. Au fil des siècles, un récit peut être déformé, oublier des détails précis ou exagérer la gloire d'un ancêtre familial.

4. Les sources écrites
Ce sont toutes les traces du passé qui portent des caractères alphabétiques, des signes, des lettres ou des écritures lisibles. Elles sont apparues tardivement, vers 3300 avant J.-C., marquant la fin de la Préhistoire et le début de l'Histoire.
- Exemples : Les textes gravés sur la pierre des temples, les papyrus égyptiens, les parchemins en peau d'animal, les manuscrits anciens (comme ceux des grandes universités de Tombouctou au Mali), les journaux, les traités de paix, les archives administratives, les correspondances royales. Elles apportent une précision immense sur les noms, les dates et les chiffres, mais l'historien doit se méfier car l'auteur d'un texte écrit peut mentir pour plaire à son roi.`,
  sections: [
    {
      title: "1. Qu'est-ce qu'une source historique ?",
      content: [
        `L'historien agit exactement comme un détective ou un juge d'instruction. N'ayant pas été témoin direct du passé lointain, il est incapable de deviner ce qui s'est produit.`,
        `Il doit chercher, collecter et analyser toutes les traces, empreintes, vestiges ou témoignages laissés par les hommes du passé. Ces matériaux constituent les sources de l'Histoire. Sans sources, il n'y a pas d'histoire possible.`
      ]
    },
    {
      title: "2. Les sources muettes ou archéologiques",
      content: [
        `Définition : Ce sont les traces matérielles physiques laissées par les anciennes générations. On les qualifie de « muettes » car elles ne comportent pas d'écritures et ne parlent pas directement.`,
        `Rôle de l'archéologie : C'est le domaine exclusif des archéologues, qui mènent des fouilles sous le sol pour exhumer le passé.`,
        `Exemples concrets : Outils primitifs en silex ou en pierre taillée, poteries d'argile cuite, squelettes fossiles d'hommes ou d'animaux, bijoux anciens, armes de bronze ou de fer, et monuments mégalithiques (comme les célèbres cercles mégalithiques de Sine Ngayène ou de Wanar au Sénégal). Ces sources sont très fiables car l'objet matériel témoigne concrètement de son existence.`
      ]
    },
    {
      title: "3. Les sources orales",
      content: [
        `Définition : Ensemble des récits historiques, contes, légendes, poèmes et généalogies transmis de bouche à oreille, de génération en génération.`,
        `Importance majeure en Afrique : C'est la source maîtresse et indispensable pour reconstituer l'histoire du continent africain avant la colonisation, où la tradition orale prédominait.`,
        `Les gardiens de la mémoire : Ce rôle incombe aux griots et traditionalistes. Formés dès leur plus jeune âge, ils mémorisent fidèlement les généalogies familiales, les hauts faits des rois et l'épopée des royaumes du Sénégal.`,
        `Limites : La mémoire humaine peut comporter des faiblesses ; au fil des générations, certains détails peuvent s'estomper ou être embellis pour glorifier une lignée.`
      ]
    },
    {
      title: "4. Les sources écrites",
      content: [
        `Définition : Traces matérielles portant des signes alphabétiques, des lettres ou des écritures lisibles. Nées vers 3300 av. J.-C., elles marquent le passage officiel de la Préhistoire à l'Histoire.`,
        `Exemples : Inscriptions gravées sur pierre, papyrus égyptiens, parchemins en peau, manuscrits anciens (tels que ceux des universités de Tombouctou au Mali), archives administratives, correspondances royales et traités de paix.`,
        `Intérêt et vigilance : Elles offrent une grande précision sur les dates, les noms et les chiffres, mais l'historien doit exercer son esprit critique car certains écrits ont pu être orientés pour flatter les dirigeants de l'époque.`
      ]
    }
  ],
  diagram: {
    title: "LES TROIS GRANDES CATÉGORIES DE SOURCES HISTORIQUES",
    root: "SOURCES DE L'HISTOIRE",
    branches: [
      {
        name: "Sources Archéologiques",
        subtitle: "Traces matérielles muettes",
        items: ["Fouilles des archéologues", "Outils, ossements, poteries", "Mégalithes de Sine Ngayène"]
      },
      {
        name: "Sources Orales",
        subtitle: "Transmission de bouche à oreille",
        items: ["Rôle capital en Afrique", "Griots et traditionalistes", "Contes, récits, généalogies"]
      },
      {
        name: "Sources Écrites",
        subtitle: "Signes & textes (dès 3300 av. J.-C.)",
        items: ["Papyrus, manuscrits, traités", "Manuscrits de Tombouctou", "Précision des dates et noms"]
      }
    ]
  },
  conclusion: `En conclusion, la reconstitution du passé historique nécessite de confronter et de croiser les trois grands types de sources : archéologiques, orales et écrites. En Afrique, la complémentarité féconde entre la tradition orale incarnée par les griots et les fouilles archéologiques modernes permet de restituer toute la vérité et la splendeur des civilisations du passé.`
};

export const LESSON_3_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-3',
  number: 'Leçon 3',
  title: "LES TEMPS DE L'HISTOIRE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `Pour ne pas confondre les événements du passé et suivre l'évolution continue des sociétés humaines, l'historien a besoin de mesurer la durée et d'ordonner les faits avec rigueur. C'est le rôle fondamental de la chronologie, des calendriers et des grandes périodes qui découpent l'histoire universelle.`,
  fullText: `PREMIÈRE PARTIE : L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE
Leçon 3 : Les temps de l'Histoire

1. La chronologie et les unités de mesure
Pour étudier le passé sans tout mélanger, l'historien doit classer les événements du plus ancien au plus récent. Cette mise en ordre logique et temporelle s'appelle la chronologie. Pour mesurer le passage du temps, l'histoire utilise des repères fixes et des unités de regroupement strictes :
- L'année : L'unité de base (365 jours).
- La décennie : Un regroupement de 10 ans.
- Le siècle : Un regroupement de 100 ans.
- Le millénaire : Un regroupement de 1000 ans.

2. Le point de repère de notre calendrier : L'ère chrétienne
Chaque grande civilisation a choisi un événement majeur pour marquer le début de son calendrier. Dans le système scolaire et international actuel, le calendrier officiel utilisé est le calendrier grégorien. Son point de départ fixe (l'an 1) est la naissance de Jésus-Christ.
- Tout ce qui s'est déroulé avant cette naissance est situé « avant Jésus-Christ » (av. J.-C.). Pour ces dates lointaines, les années se comptent à l'envers : plus le chiffre est grand, plus l'événement est ancien dans le passé (par exemple, -3000 est plus ancien que -500).
- Tout ce qui s'est déroulé après cette naissance est compté normalement en marche avant « après Jésus-Christ » (apr. J.-C.).

3. La méthode infaillible pour calculer les siècles
Pour trouver à quel siècle appartient une année donnée, il existe une règle mathématique simple que tout élève de 6ème doit maîtriser :
- Règle générale : Prends l'année, supprime ou cache les deux derniers chiffres de droite. Prends le nombre qui reste à gauche et ajoute-lui le chiffre 1. Écris le résultat final en chiffres romains.
- Exemple : L'année 1885 (fondation de Saint-Louis ou événements coloniaux). Je cache '85', il reste '18'. Je calcule : 18 + 1 = 19. Nous sommes au XIXème siècle.
- Exemple : L'année 2026. Je cache '26', il reste '20'. Je calcule : 20 + 1 = 21. Nous sommes au XXIème siècle.
- Exception importante : Si l'année se termine exactement par deux zéros (00), on cache les deux zéros mais on n'ajoute rien ! Exemple : L'an 800. Je cache '00', il reste '8'. C'est le VIIIème siècle.

4. Les quatre grandes périodes de l'Histoire
Après la longue Préhistoire, la période historique est divisée par les historiens en quatre grandes tranches de temps séparées par des cassures majeures :
1. L'Antiquité : Commence avec l'invention de l'écriture (vers 3300 av. J.-C.) et s'achève en 476 après J.-C. lors de la chute brutale de l'Empire romain d'Occident.
2. Le Moyen Âge : S'étend de 476 apr. J.-C. jusqu'en 1492, date à laquelle le navigateur Christophe Colomb atteint l'Amérique (ou 1453 avec la chute de Constantinople).
3. L'Époque moderne : S'étend de 1492 jusqu'à la Révolution française en 1789.
4. L'Époque contemporaine : Débute en 1789 et se poursuit activement jusqu'à nos jours.`,
  sections: [
    {
      title: "1. La chronologie et les unités de mesure",
      content: [
        `Définition : La chronologie est la science qui classe les faits historiques dans leur ordre de succession, du plus ancien au plus récent.`,
        `Unités usuelles :`,
        `• L'année : unité élémentaire de mesure du temps (365 jours).`,
        `• La décennie : période de 10 ans consécutifs.`,
        `• Le siècle : période de 100 ans.`,
        `• Le millénaire : période de 1 000 ans.`
      ]
    },
    {
      title: "2. Le point de repère de notre calendrier : L'ère chrétienne",
      content: [
        `Origine : Le calendrier grégorien, utilisé à l'échelle scolaire et internationale, prend pour point de départ (an 1) la naissance de Jésus-Christ.`,
        `Avant Jésus-Christ (av. J.-C.) : Les événements antérieurs se comptent à rebours. Plus le nombre est élevé, plus le fait est ancien (-3000 av. J.-C. précède -500 av. J.-C.).`,
        `Après Jésus-Christ (apr. J.-C.) : Les dates se comptent dans l'ordre chronologique croissant usuel.`
      ]
    },
    {
      title: "3. La méthode de calcul des siècles",
      content: [
        `Règle générale : Pour déterminer le siècle d'une année, on retire ses deux derniers chiffres de droite, on ajoute 1 au nombre restant à gauche, et on note le résultat en chiffres romains.`,
        `• Exemple 1885 : on isole '85', il reste '18' ; 18 + 1 = 19, soit le XIXème siècle.`,
        `• Exemple 2026 : on isole '26', il reste '20' ; 20 + 1 = 21, soit le XXIème siècle.`,
        `Exception des années séculaires (terminées par 00) : on supprime les deux zéros sans rien ajouter. Exemple : l'an 800 correspond directement au VIIIème siècle.`
      ]
    },
    {
      title: "4. Les quatre grandes périodes de l'Histoire",
      content: [
        `1. L'Antiquité : de l'invention de l'écriture (vers 3300 av. J.-C.) à la chute de l'Empire romain d'Occident en 476 apr. J.-C.`,
        `2. Le Moyen Âge : de 476 apr. J.-C. à 1492 (arrivée de Christophe Colomb en Amérique / chute de Constantinople en 1453).`,
        `3. L'Époque moderne : de 1492 à la Révolution française de 1789.`,
        `4. L'Époque contemporaine : de 1789 à nos jours.`
      ]
    }
  ],
  diagram: {
    title: "CHRONOLOGIE ET GRANDES ÉPOQUES DE L'HISTOIRE",
    root: "LES TEMPS DE L'HISTOIRE",
    branches: [
      {
        name: "Unités de mesure",
        subtitle: "Mesurer le temps",
        items: ["Année (365 j)", "Décennie (10 ans)", "Siècle (100 ans)", "Millénaire (1000 ans)"]
      },
      {
        name: "Calcul des siècles",
        subtitle: "Règle mathématique",
        items: ["Enlever 2 derniers chiffres", "Ajouter +1 au reste", "Chiffres romains (XIXe, XXIe)"]
      },
      {
        name: "Grandes Périodes",
        subtitle: "Découpage universel",
        items: ["Antiquité (-3300 à 476)", "Moyen Âge (476 à 1492)", "Époque moderne (1492-1789)", "Époque contemporaine (1789-...)"]
      }
    ]
  },
  conclusion: `En conclusion, la maîtrise de la chronologie, le calcul rigoureux des siècles et la connaissance des quatre grandes ères historiques fournissent à l'élève une grille de lecture indispensable pour ordonner les événements et situer avec précision chaque étape de l'aventure humaine.`
};
