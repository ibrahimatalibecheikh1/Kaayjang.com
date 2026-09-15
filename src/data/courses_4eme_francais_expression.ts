import { LessonContent } from './courses';

// ============================================================================
// PARTIE 5 : EXPRESSION ÉCRITE (LEÇONS 35 À 41) - FRANÇAIS 4ÈME
// Fascicule officiel - Programme de Français
// ============================================================================

// ----------------------------------------------------------------------------
// LEÇON 35 : LA NATURE ET LE SENS DES MOTS DANS LA PHRASE
// ----------------------------------------------------------------------------
export const LESSON_35_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-35',
  number: 'LEÇON 35',
  title: 'LA NATURE ET LE SENS DES MOTS DANS LA PHRASE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `La nature (ou classe grammaticale) d'un mot est son identité fixe enregistrée dans le dictionnaire. On distingue les classes de mots variables (verbe, nom, article, adjectif, pronom) et invariables (adverbe, préposition, conjonction, interjection).`,
  fullText: `LA NATURE ET LE SENS DES MOTS DANS LA PHRASE

La nature (ou classe grammaticale) d'un mot indique ce qu’il est. C’est sa carte d’identité dans la langue. Il ne faut jamais confondre la nature d'un mot (ce qu'il est) avec sa fonction (le rôle qu'il joue dans la phrase).

I - Les classes de mots variables :
1 - Le verbe :
Exprime une action, un état ou un devenir.
- Verbe d'action : courir, construire, manger, étudier.
- Verbe d'état : être, paraître, sembler, devenir, demeurer, rester, avoir l'air, passer pour.
- Locutions verbales : avoir faim, prendre garde, rendre compte, faire attention.

2 - Le nom (ou substantif) :
Désigne un être, un objet, un lieu ou une notion abstraite.
- Nom propre : commence par une majuscule (Dakar, Fatou, Sénégal, Saint-Louis).
- Nom commun : précédé d'un déterminant (élève, table, maison, courage, paix).

3 - Les déterminants :
Précèdent toujours le nom et s'accordent avec lui en genre et en nombre :
- Articles définis : le, la, les, l' (formes contractées : au, aux, du, des).
- Articles indéfinis : un, une, des.
- Articles partitifs : du, de la, de l' (indiquent une quantité indéterminée : du pain, de l'eau).
- Adjectifs possessifs : mon, ton, son, notre, votre, leur, mes, tes, ses, nos, vos, leurs.
- Adjectifs démonstratifs : ce, cet, cette, ces.
- Adjectifs numéraux : cardinaux (un, deux, cent) ou ordinaux (premier, deuxième).
- Adjectifs indéfinis : chaque, tout, plusieurs, certains, aucun, nul.

4 - L'adjectif qualificatif :
Précise et caractérise le nom qu'il accompagne (grand, beau, rapide, courageux).

5 - Le pronom :
Remplace un nom ou un groupe nominal pour éviter les répétitions :
- Pronoms personnels : je, tu, il, elle, nous, vous, ils, elles, me, te, se, le, la, les, lui, leur, en, y, moi, toi, soi, eux.
- Pronoms démonstratifs : celui, celle, ceux, celles, ce, ceci, cela, ça.
- Pronoms possessifs : le mien, le tien, le sien, le nôtre, le vôtre, le leur...
- Pronoms relatifs : qui, que, quoi, dont, où, lequel, laquelle, lesquels, desquels, auquel...
- Pronoms indéfinis : chacun, quelqu'un, personne, rien, tout, certains.

II - Les classes de mots invariables :
1 - L'adverbe :
Modifie le sens d'un verbe, d'un adjectif ou d'un autre adverbe (vite, lentement, très, beaucoup, ici, hier, ne... pas, bien, mal).
2 - La préposition :
Relie un mot à son complément (à, dans, par, pour, en, vers, avec, de, sans, sous, sur, chez, pendant...).
3 - La conjonction :
- De coordination : mais, ou, et, donc, or, ni, car.
- De subordination : que, quand, comme, si, lorsque, puisque, quoique, bien que, parce que...
4 - L'interjection et l'onomatopée :
Expriment une vive émotion ou un son (Ah !, Oh !, Hélas !, Ouf !, Boum !, Tic-tac !).`,
  sections: [
    {
      title: 'I - CLASSES VARIABLES',
      content: [
        `Verbe : action (travailler) ou état (être, sembler, devenir).`,
        `Nom : propre (majuscule) ou commun (animé / inanimé).`,
        `Déterminants : articles (définis, indéfinis, partitifs) et adjectifs non qualificatifs (possessifs, démonstratifs, numéraux, indéfinis).`,
        `Adjectif qualificatif : caractérise le nom.`,
        `Pronom : remplace le nom (personnel, possessif, démonstratif, relatif, indéfini).' `
      ]
    },
    {
      title: 'II - CLASSES INVARIABLES',
      content: [
        `Adverbes : modifient le sens (temps, lieu, manière, quantité, négation).`,
        `Prépositions : introduisent un complément (à, dans, par, pour, en, vers, avec, de, sans, sous...).`,
        `Conjonctions : coordination (mais, ou, et, donc, or, ni, car) et subordination (que, quand, parce que, bien que).`,
        `Interjections : expriment un cri ou une émotion vive (Hélas ! Bravo !).' `
      ]
    }
  ],
  diagram: {
    title: 'NATURES GRAMMATICALES',
    root: 'LES 9 CLASSES DE MOTS',
    branches: [
      {
        name: '5 VARIABLES',
        subtitle: 'Varient en genre/nombre/temps',
        items: ['Verbe', 'Nom', 'Déterminant', 'Adjectif', 'Pronom']
      },
      {
        name: '4 INVARIABLES',
        subtitle: 'Orthographe fixe',
        items: ['Adverbe', 'Préposition', 'Conjonction (coord./sub.)', 'Interjection']
      }
    ]
  },
  conclusion: `La classe grammaticale d'un mot est immuable et le définit en toute circonstance, tandis que sa fonction varie selon la structure syntaxique de la phrase.`
};

// ----------------------------------------------------------------------------
// LEÇON 36 : LE TEXTE NARRATIF
// ----------------------------------------------------------------------------
export const LESSON_36_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-36',
  number: 'LEÇON 36',
  title: 'LE TEXTE NARRATIF : SCHÉMA NARRATIF, PERSONNAGES ET ACTIONS, TEMPS ET ESPACE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Le récit ou texte narratif rapporte une succession d'événements réels ou imaginaires vécus par des personnages dans un cadre spatio-temporel précis. Il s'articule autour des cinq étapes du schéma narratif canonique et du schéma actanciel.`,
  fullText: `LE TEXTE NARRATIF : schema narratif – personnages et actions – temps et espace

Le texte narratif raconte une histoire avec des personnages situés dans un cadre spatial et temporel.

I - Le schéma narratif canonique en 5 étapes :
1. La situation initiale :
Elle présente l'état de départ du récit : le cadre (où ? quand ?), les personnages principaux et l'atmosphère de stabilité ou d'harmonie. Les verbes y sont le plus souvent à l'imparfait (temps de la description).
2. L'élément déclencheur (ou modificateur / perturbateur) :
Un événement soudain, inattendu vient rompre l'équilibre initial. Il lance l'intrigue et déclenche l'aventure. Il est généralement introduit par un connecteur de rupture (Tout à coup, soudain, un jour...) avec un verbe au passé simple.
3. Les péripéties (ou actions) :
Suite d'actions, d'épreuves, d'obstacles et d'aventures traversées par les personnages pour surmonter la crise. Utilisation du passé simple pour les actions rapides et successives.
4. L'élément de résolution (ou dénouement) :
L'événement qui met un terme aux péripéties et apporte la solution au problème initial (victoire, échec, réconciliation, découverte du coupable).
5. La situation finale :
C'est le nouvel état d'équilibre stable à la fin du récit. Les personnages ont évolué (heureux, transformés ou punis).

II - Les personnages et leurs rôles (le schéma actanciel) :
- Le Héros (ou sujet) : poursuit une quête ou un objectif précis.
- L'Objet de la quête : ce que le héros cherche à obtenir (un trésor, délivrer quelqu'un, la paix, le savoir).
- Le Destinateur : celui qui pousse le héros à agir ou lui confie la mission.
- Le Destinataire : celui à qui profite la quête.
- Les Adjuvants : personnages ou éléments magiques/matériels qui aident le héros.
- Les Opposants : ennemis, rivaux ou obstacles qui s'opposent au succès du héros.

III - Le temps et l'espace du récit :
- Le temps de l'histoire (la fiction) : durée des faits racontés (quelques heures, des mois, des années).
- Le temps du récit (la narration) : manière d'agencer la chronologie avec des retours en arrière (analepses) ou des anticipations (prolepses), des accélérations (ellipses) ou des ralentissements (pauses descriptives).
- L'espace : décor réaliste ou imaginaire, qui donne de la vraisemblance et crée une atmosphère symbolique.`,
  sections: [
    {
      title: 'I - LES 5 ÉTAPES DU SCHÉMA NARRATIF',
      content: [
        `1. Situation initiale : équilibre de départ, présentation des personnages et du lieu (imparfait).`,
        `2. Élément déclencheur : événement soudain brisant l'équilibre (soudain, un jour... au passé simple).`,
        `3. Péripéties : actions, combats, péripéties et quêtes du héros.`,
        `4. Dénouement / Élément de résolution : résolution du conflit central.`,
        `5. Situation finale : nouvel équilibre atteint (bonheur, défaite ou enseignement moral).' `
      ]
    },
    {
      title: 'II - LE SYSTÈME DES PERSONNAGES (SCHÉMA ACTANCIEL)',
      content: [
        `Sujet (Héros) -> poursuit l'Objet (But).`,
        `Destinateur (Initiateur) -> transmet au Destinataire (Bénéficiaire).`,
        `Adjuvants (Alliés secourables) vs Opposants (Ennemis et épreuves).' `
      ]
    },
    {
      title: 'III - CADRE SPATIO-TEMPOREL ET RYTHME',
      content: [
        `Gestion du temps : analepse (retour arrière), prolepse (anticipation), ellipse (saut dans le temps).`,
        `Lieux : décors structurants créant la couleur locale et l'atmosphère émotionnelle.`
      ]
    }
  ],
  diagram: {
    title: 'SCHÉMA NARRATIF CANONIQUE',
    root: 'LE RÉCIT',
    branches: [
      {
        name: 'ÉQUILIBRE INITIAL',
        subtitle: 'Stabilité & Cadre',
        items: ['Situation Initiale (imparfait)']
      },
      {
        name: 'DYNAMIQUE DE L\'ACTION',
        subtitle: 'Changement & Conflit',
        items: ['Élément déclencheur (rupture)', 'Péripéties (aventures/obstacles)', 'Résolution (dénouement)']
      },
      {
        name: 'ÉQUILIBRE FINAL',
        subtitle: 'Nouvel état stable',
        items: ['Situation Finale (morale ou issue)']
      }
    ]
  },
  conclusion: `Le texte narratif captive le lecteur en orchestrant un schéma narratif rigoureux, animé par des forces agissantes complémentaires et un rythme temporel maîtrisé.`
};

// ----------------------------------------------------------------------------
// LEÇON 37 : LA DESCRIPTION ET LE PORTRAIT
// ----------------------------------------------------------------------------
export const LESSON_37_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-37',
  number: 'LEÇON 37',
  title: 'LA DESCRIPTION ET LE PORTRAIT',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `La description fait voir un lieu, un objet ou un être vivant en interrompant momentanément la trame des actions. Le portrait est la description d'une personne humaine sous ses trois facettes : physique, morale et comportementale.`,
  fullText: `LA DESCRIPTION ET LE PORTRAIT

I - La description d’un lieu ou d’un objet :
1. Organisation spatiale :
La description doit être structurée avec des repères spatiaux précis pour guider le regard du lecteur :
- du général au particulier ou du particulier au général ;
- de gauche à droite, de haut en bas, de près en loin (au premier plan, au second plan, à l'arrière-plan, à l'horizon).
2. Mobilisation des cinq sens :
- Vue : formes, couleurs, contrastes, jeux de lumière.
- Ouïe : bruits, murmures, vacarme, mélodies, silence pesant.
- Odorat : parfums, senteurs fraîches, relents nauséabonds.
- Toucher : textures rudes, soyeuses, chaleur, fraîcheur.
- Goût : saveurs douces, amères, pimentées, acidulées.

II - Le portrait :
Le portrait est la description d’un personnage. Il comprend trois volets :
1. Le portrait physique :
- Silhouette, taille, corpulence (élancé, râblé, robuste, frêle, squelettique).
- Le visage : teint (ébène, cuivré, blême), regard (perçant, doux, malicieux), nez (aquilin, épaté), bouche, lèvres, chevelure.
- Vêtements et allure générale : costume apprêté, haillons, élégance altière.

2. Le portrait moral (psychologique) :
- Caractère, qualités et défauts : générosité, franchise, modestie, témérité ou au contraire avarice, perfidie, couardise, rancune.
- Idéaux, passions, croyances et craintes.

3. Le portrait en action (comportement) :
- Façon de parler (voix grave, hésitante, débit rapide), tics gestuels, démarche (lourde, altière, féline), réactions face aux épreuves.

III - Portrait mélioratif et portrait péjoratif :
- Portrait mélioratif (élogieux) : met en valeur les aspects positifs avec un vocabulaire valorisant pour susciter l'admiration ou la sympathie.
- Portrait péjoratif (dépréciatif) : souligne les difformités, la laideur ou les vices avec un vocabulaire dévalorisant pour inspirer le dégoût, le mépris ou le rire (caricature).`,
  sections: [
    {
      title: 'I - ORGANISATION DE LA DESCRIPTION',
      content: [
        `Progression méthodique : de haut en bas, du premier plan vers l'arrière-plan, de l'extérieur vers l'intérieur.`,
        `Mobilisation sensorielle complète : couleurs, sons, senteurs, textures.`
      ]
    },
    {
      title: 'II - LES TROIS COMPOSANTES DU PORTRAIT',
      content: [
        `1. Physique : anatomie, visage, regard, corpulence, vêtements.`,
        `2. Moral : tempérament, intelligence, vertus, vices et sentiments.`,
        `3. En action : démarche, gestuelle, intonation et manières d'agir.' `
      ]
    },
    {
      title: 'III - PERSPECTIVES MÉLIORATIVES ET PÉJORATIVES',
      content: [
        `Vocabulaire valorisant / mélioratif : harmonie, éclat, dignité, bravoure.`,
        `Vocabulaire dévalorisant / péjoratif : difformité, mesquinerie, cupidité, laideur grotesque.' `
      ]
    }
  ],
  diagram: {
    title: 'STRUCTURE DU PORTRAIT',
    root: 'LE PORTRAIT',
    branches: [
      {
        name: 'PORTRAIT PHYSIQUE',
        subtitle: 'Apparence visible',
        items: ['Taille & Corpulence', 'Visage & Regard', 'Vêtements & Parures']
      },
      {
        name: 'PORTRAIT MORAL',
        subtitle: 'Personnalité intérieure',
        items: ['Qualités & Vertus', 'Défauts & Vices', 'Sentiments profonds']
      },
      {
        name: 'PORTRAIT EN ACTION',
        subtitle: 'Comportement dynamique',
        items: ['Démarche & Gestes', 'Tics & Voix', 'Attitude au quotidien']
      }
    ]
  },
  conclusion: `La description et le portrait donnent vie au cadre et aux protagonistes du récit en mobilisant un lexique sensoriel riche et des connecteurs spatiaux précis.`
};

// ----------------------------------------------------------------------------
// LEÇON 38 : LA LETTRE ADMINISTRATIVE PERSONNELLE
// ----------------------------------------------------------------------------
export const LESSON_38_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-38',
  number: 'LEÇON 38',
  title: 'LA LETTRE ADMINISTRATIVE PERSONNELLE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `La lettre administrative est un écrit formel adressé à un responsable ou une institution (demande d'emploi, d'inscription, de transfert ou de réclamation). Elle obéit à une disposition graphique normalisée et à un ton d'une stricte courtoisie.`,
  fullText: `LA LETTRE ADMINISTRATIVE PERSONNELLE

La lettre administrative répond à des normes de mise en page très précises et à un code de politesse formel.

I - Schéma de disposition d’une lettre administrative :
1. En-tête en haut à gauche :
Nom, prénom, adresse postale, numéro de téléphone et adresse électronique de l'expéditeur.
2. Lieu et date en haut à droite :
Toujours sous la forme : « Ville, le [date complète] » (ex : Saint-Louis, le 15 octobre 2024).
3. Coordonnées du destinataire (en dessous à droite) :
Titre exact du responsable et nom de l'organisme (ex : À Monsieur le Principal du Collège d'Enseignement Moyen de...).
4. Objet de la lettre (à gauche sous l'expéditeur) :
Formule résumant brièvement le motif du courrier (ex : Objet : Demande de réinscription en classe de 4ème).
5. Pièces jointes (éventuelles, sous l'objet) :
P.J. : Bulletins de notes de l'année précédente, certificat de scolarité...
6. Formule d'appel (au centre) :
« Monsieur le Principal, » ou « Madame la Directrice, » (selon la fonction de la personne, sans son nom de famille).
7. Le corps de la lettre :
Rédigé en trois étapes :
- Introduction : rappel des circonstances ou de la référence.
- Développement : exposé clair, précis et argumenté des faits ou de la demande.
- Conclusion : réitération polie de l'attente d'une suite favorable.
8. Formule de politesse finale :
« Je vous prie d’agréer, Monsieur le Principal, l’expression de ma considération distinguée. »
9. Signature (en bas à droite) :
Nom et prénom précédés de la signature manuscrite.

II - Caractéristiques stylistiques :
- Neutralité, clarté, concision et politesse respectueuse.
- Emploi du « vous » de politesse.
- Absence totale de familiarités ou d'abréviations orales.`,
  sections: [
    {
      title: 'I - DISPOSITION FORMELLE NORMALISÉE',
      content: [
        `1. Expéditeur (haut gauche) : Prénom, Nom, Adresse, Contact.`,
        `2. Lieu et Date (haut droite) : Dakar, le ...`,
        `3. Destinataire (droite sous la date) : À Monsieur le ..., Entreprise/Institution.`,
        `4. Objet et P.J. (gauche).`,
        `5. Formule d'appel : Monsieur le Directeur,`,
        `6. Corps du texte (exposé structuré du motif).`,
        `7. Formule de courtoisie finale et Signature.`
      ]
    },
    {
      title: 'II - RÈGLES DE RÉDACTION',
      content: [
        `Ton courtois, neutre et respectueux.`,
        `Phrases claires et précises sans divagations.`,
        `Formules d'adieu officielles protocolaires (considération distinguée, sentiments dévoués).' `
      ]
    }
  ],
  diagram: {
    title: 'MISE EN PAGE DE LA LETTRE ADMINISTRATIVE',
    root: 'LETTRE FORMELLE',
    branches: [
      {
        name: 'PARTIE SUPÉRIEURE',
        subtitle: 'Identification',
        items: ['Expéditeur (haut gauche)', 'Lieu et date (haut droite)', 'Destinataire (milieu droite)', 'Objet (gauche)']
      },
      {
        name: 'CORPS DE LETTRE',
        subtitle: 'Contenu',
        items: ['Formule d\'appel', 'Exposé des motifs & demande', 'Formule de politesse finale']
      },
      {
        name: 'CLÔTURE',
        subtitle: 'Authentification',
        items: ['Signature & Nom (bas droite)']
      }
    ]
  },
  conclusion: `La lettre administrative personnelle doit impérativement respecter la norme épistolaire officielle sénégalaise afin d'assurer son efficacité auprès des administrations.`
};

// ----------------------------------------------------------------------------
// LEÇON 39 : LE DIALOGUE
// ----------------------------------------------------------------------------
export const LESSON_39_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-39',
  number: 'LEÇON 39',
  title: 'LE DIALOGUE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Le dialogue est l'échange de répliques entre deux ou plusieurs interlocuteurs. Inséré dans un récit ou sous forme de texte théâtral, il rend la narration vivante, caractérise les personnages et fait progresser l'intrigue.`,
  fullText: `LE DIALOGUE

Le dialogue permet de donner directement la parole aux personnages dans un récit, au théâtre ou dans une bande dessinée.

I - Ponctuation et mise en page du dialogue romanesque :
- Le dialogue est souvent annoncé par deux-points (:).
- On ouvre les guillemets («) au début de la conversation et on ne les referme (») qu'à la toute fin de l'échange.
- À chaque changement d'interlocuteur, on va à la ligne et on place un tiret (–).
- On emploie des propositions incises avec inversion du sujet pour indiquer qui parle et comment (dit-il, répliqua-t-elle avec assurance).

II - Fonctions du dialogue :
1. Fonction narrative : faire progresser l'intrigue en révélant une information capitale, un secret, un aveu ou un accord.
2. Fonction explicative : apporter des éclaircissements sur le passé d'un personnage ou la cause d'un événement.
3. Fonction expressive et dramatique : montrer les émotions (colère, jalousie, amour, peur) et le niveau de langue de chaque personnage.

III - Vocabulaire et variété des répliques :
- Remplacer les simples « oui » et « non » par des répliques plus subtiles : certainement, parfaitement, sans doute, assurément, jamais de la vie, point du tout, hors de question !
- Utiliser des interjections expressives : Hélas !, Tiens !, Bah !, Ciel !
- Varier les verbes introducteurs selon les nuances de la voix : susurrer, riposter, protester, ordonner, ironiser.`,
  sections: [
    {
      title: 'I - RÈGLES TYPOGRAPHIQUES DU DIALOGUE',
      content: [
        `Deux-points et guillemets d'ouverture («) au début.`,
        `Tiret (–) à chaque réplique avec retour à la ligne.`,
        `Fermeture des guillemets (») à la fin du dialogue.`,
        `Verbes en incise avec inversion du sujet (demanda-t-il, s'étonna Samba).' `
      ]
    },
    {
      title: 'II - RÔLES DANS LE RÉCIT',
      content: [
        `Dynamise le récit et rompt la monotonie de la narration.`,
        `Révèle la psychologie, les conflits et le statut social des interlocuteurs.`,
        `Fait progresser l'action par des révélations décisives.' `
      ]
    }
  ],
  diagram: {
    title: 'COMPOSANTES DU DIALOGUE',
    root: 'LE DIALOGUE',
    branches: [
      {
        name: 'TYPOGRAPHIE',
        subtitle: 'Ponctuation exacte',
        items: ['Deux-points (:)', 'Guillemets (« »)', 'Tirets de changement (–)', 'Incises avec inversion']
      },
      {
        name: 'ENJEUX NARRATIFS',
        subtitle: 'Intérêt romanesque',
        items: ['Avancement de l\'action', 'Révélation de secrets', 'Confrontation des caractères']
      }
    ]
  },
  conclusion: `Le dialogue donne un rythme vif et direct au récit romanesque en donnant voix aux conflits et émotions des personnages.`
};

// ----------------------------------------------------------------------------
// LEÇON 40 : LE TEXTE ARGUMENTATIF
// ----------------------------------------------------------------------------
export const LESSON_40_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-40',
  number: 'LEÇON 40',
  title: 'LE TEXTE ARGUMENTATIF',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Le texte argumentatif a pour objectif de convaincre ou de persuader un lecteur ou un auditeur du bien-fondé d'une thèse. Il s'articule autour d'un thème, d'une problématique, d'une prise de position défendue par des arguments logiques illustrés d'exemples précis, et reliés par des connecteurs logiques.`,
  fullText: `LE TEXTE ARGUMENTATIF

I - Les éléments constitutifs de l'argumentation :
1. Le thème : le sujet général débattu (ex : le travail des enfants, le port de l'uniforme à l'école, les réseaux sociaux, la protection de la nature).
2. La thèse : la prise de position ou l'opinion défendue par l'auteur (ex : l'école doit rester gratuite et obligatoire pour tous). La thèse opposée est appelée antithèse ou thèse réfutée.
3. Les arguments : les raisons logiques, abstraites et générales avancées pour prouver que la thèse est juste.
4. Les exemples : les faits concrets, vécus, historiques ou statistiques qui viennent illustrer et valider chaque argument.

II - La structure d’un paragraphe argumentatif :
Dans un paragraphe bien rédigé, on observe généralement la démarche A-E-E :
1. Affirmation de l'argument (idée générale).
2. Explication et développement logique.
3. Exemple illustratif concret.

III - Les connecteurs logiques :
Ils structurent le raisonnement et fluidifient la pensée :
- Pour introduire la cause : car, parce que, puisque, étant donné que, sous prétexte que...
- Pour introduire la conséquence : donc, par conséquent, ainsi, c'est pourquoi, de sorte que...
- Pour introduire l'opposition / la concession : mais, cependant, néanmoins, toutefois, bien que, en revanche, alors que...
- Pour additionner des arguments : d'abord, ensuite, de plus, en outre, enfin...
- Pour illustrer par un exemple : par exemple, ainsi, c'est le cas de, comme en témoigne...
- Pour conclure : en conclusion, pour conclure, au terme de cette réflexion, en somme...

IV - La progression thématique :
- Progression à thème constant : le même thème est conservé d'une phrase à l'autre avec des rhèmes (informations nouvelles) successifs.
- Progression linéaire : le rhème d'une phrase devient le thème de la phrase suivante.
- Progression à thèmes dérivés : un hyperthème général éclate en plusieurs sous-thèmes particuliers.`,
  sections: [
    {
      title: 'I - LES FONDEMENTS DE L\'ARGUMENTATION',
      content: [
        `Thème : sujet général abordé.`,
        `Thèse : opinion ou position prise par l'auteur.`,
        `Arguments : justifications théoriques et logiques.`,
        `Exemples : preuves concrètes et vérifiables (chiffres, faits historiques, citations littéraires).' `
      ]
    },
    {
      title: 'II - TABLEAU COMPLET DES CONNECTEURS LOGIQUES',
      content: [
        `Tableau des connecteurs essentiels :`
      ],
      table: {
        headers: ['Rôle logique', 'Connecteurs clés', 'Exemple d\'emploi'],
        rows: [
          ['Addition / Classement', 'd\'abord, ensuite, de plus, enfin', 'D\'abord, le sport fortifie le corps.'],
          ['Cause', 'car, parce que, puisque, vu que', 'Il est fort parce qu\'il s\'entraîne.'],
          ['Conséquence', 'donc, par conséquent, ainsi', 'Il a travaillé, donc il a réussi.'],
          ['Opposition / Concession', 'mais, cependant, pourtant, néanmoins', 'Il est fatigué, pourtant il continue.'],
          ['Illustration', 'par exemple, ainsi, notamment', 'Par exemple, la lecture enrichit l\'esprit.'],
          ['Conclusion', 'en somme, pour finir, en conclusion', 'En conclusion, la paix est précieuse.']
        ]
      }
    }
  ],
  diagram: {
    title: 'ARCHITECTURE ARGUMENTATIVE',
    root: 'LE DISCOURS ARGUMENTATIF',
    branches: [
      {
        name: 'CADRE DE DÉPART',
        subtitle: 'Objet du débat',
        items: ['Thème (sujet général)', 'Problématique (question posée)', 'Thèse (prise de position)']
      },
      {
        name: 'DÉMONSTRATION',
        subtitle: 'Appui logique',
        items: ['Arguments rationnels', 'Exemples concrets & vécus', 'Connecteurs de liaison']
      },
      {
        name: 'OBJECTIF',
        subtitle: 'Effet visé',
        items: ['Convaincre (par la raison)', 'Persuader (par l\'émotion)']
      }
    ]
  },
  conclusion: `Convaincre exige de structurer rigoureusement sa pensée en articulant chaque argument à un exemple concret relié par des connecteurs logiques appropriés.`
};

// ----------------------------------------------------------------------------
// LEÇON 41 : LE COMPTE RENDU
// ----------------------------------------------------------------------------
export const LESSON_41_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-41',
  number: 'LEÇON 41',
  title: 'LE COMPTE RENDU',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Le compte rendu est un document officiel par lequel un rapporteur relate de manière fidèle, objective et concise le déroulement d'une réunion, d'un événement, d'une visite ou d'une lecture afin d'en informer un tiers absent.`,
  fullText: `LE COMPTE RENDU

I - Définition et objectif :
Le compte rendu est un écrit institutionnel ou scolaire qui rend compte fidèlement des faits, des débats et des décisions prises lors d'une réunion, d'un conseil de classe, d'une sortie pédagogique ou d'une manifestation. Il a pour but de garder une trace écrite officielle et d'informer objectivement les personnes qui n'ont pas assisté à l'événement.

II - Mentions obligatoires d'un compte rendu :
1. Le titre : indique clairement l'objet de l'événement (ex : Compte rendu de la réunion du Club d'Anglais tenue le 12 janvier 2024).
2. Les circonstances :
- Date, heure et lieu exact de la séance.
- Liste des personnes présentes, excusées ou absentes.
- Nom du président de séance et nom du secrétaire (rapporteur).
3. L'ordre du jour : liste des points précis inscrits au programme de la réunion.

III - Le corps du compte rendu :
Il reprend chaque point de l'ordre du jour dans l'ordre chronologique :
- Résumé fidèle des interventions sans déformation de la pensée des orateurs.
- Formulation claire des décisions prises et des résolutions votées.
- Répartition des tâches futures avec leurs échéances.
- Heure de levée de séance.

IV - Qualités fondamentales du rapporteur :
- L'objectivité absolue : ne jamais donner son avis personnel ni exprimer d'émotion partisane.
- La fidélité aux propos réels.
- La concision et la clarté : phrases courtes et précises au présent ou au passé composé.
- La signature finale du secrétaire et visa du président.`,
  sections: [
    {
      title: 'I - RÔLE ET NATURE DU COMPTE RENDU',
      content: [
        `Rapport écrit officiel, fidèle, neutre et concis.`,
        `Conserve la mémoire d'une assemblée, réunion ou sortie d'études.' `
      ]
    },
    {
      title: 'II - RUBRIQUES OBLIGATOIRES',
      content: [
        `Titre précis précisant l'événement.`,
        `Date, heure, lieu, président et secrétaire de séance.`,
        `Liste des présences et ordre du jour numéroté.`,
        `Déroulement des débats et décisions adoptées.`,
        `Levée de séance et signatures officielles.' `
      ]
    },
    {
      title: 'III - RÈGLES DE STYLE',
      content: [
        `Neutralité impartiale sans prise de parti.`,
        `Langage courant ou soutenu sans familiarités.`,
        `Emploi de phrases déclaratives claires.' `
      ]
    }
  ],
  diagram: {
    title: 'COMPTE RENDU OFFICIEL',
    root: 'LE COMPTE RENDU',
    branches: [
      {
        name: 'EN-TÊTE',
        subtitle: 'Circonstances',
        items: ['Titre & Date', 'Lieu & Heure', 'Présents & Excusés', 'Ordre du jour']
      },
      {
        name: 'CONTENU DU DÉBAT',
        subtitle: 'Fidélité',
        items: ['Synthèse par point abordé', 'Décisions votées', 'Engagements & Responsables']
      },
      {
        name: 'CLÔTURE',
        subtitle: 'Validation',
        items: ['Heure de levée', 'Signature du rapporteur']
      }
    ]
  },
  conclusion: `Le compte rendu garantit la transparence administrative par sa rigueur chronologique, sa neutralité impartiale et sa fidélité aux décisions prises.`
};
