import { LessonContent } from './courses';

// -------------------------------------------------------------
// LEÇON 31 (5ÈME) : CLASSE ET SENS DES MOTS DANS LA PHRASE
// -------------------------------------------------------------
export const LESSON_31_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-31-francais-5eme',
  number: 'LEÇON 31 (5ÈME)',
  title: 'CLASSE ET SENS DES MOTS DANS LA PHRASE',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Une phrase est constituée de la combinaison organisée d'un ensemble de mots qui lui donne un sens. On distingue les mots selon leur classe grammaticale (nature) et leur sens au sein de l'énoncé.`,
  fullText: `CLASSE ET SENS DES MOTS DANS LA PHRASE

I. LA CLASSE DES MOTS (NATURE GRAMMATICALE) :
Les différentes classes de mots se divisent en deux grands groupes :
1. Les mots variables (changent de genre et de nombre) :
- Les noms (communs et propres)
- Les articles (définis, indéfinis, partitifs)
- Les adjectifs (qualificatifs, démonstratifs, possessifs, indéfinis, numéraux)
- Les pronoms (personnels, possessifs, démonstratifs, relatifs, indéfinis)
- Les verbes (noyau du GV, se conjuguent en modes, temps, personnes).

2. Les mots invariables (forme fixe) :
- Les adverbes (précisent un verbe, adjectif ou adverbe : vite, hier, beaucoup)
- Les prépositions (introduisent un complément : à, de, pour, sans, avec, dans)
- Les conjonctions (de coordination : mais, ou, et, donc, or, ni, car ; de subordination : quand, parce que, si)
- Les interjections (expriment une émotion vive : Ah !, Oh !, Ouf !, Hé !).

II. LE SENS DES MOTS DANS LA PHRASE :
1. Le verbe :
- Verbe d'action : dit ce que fait le sujet (« Le chien se bat », « Pierre mange »).
- Verbe d'état : exprime la manière d'être (« L'entraîneur semble mécontent », « La table paraît solide »).
- Locution verbale : groupe figé équivalant à un verbe (« avoir besoin », « faire mieux »).

2. Le nom :
- Nom commun : désigne une catégorie générale (« les élèves », « la table »).
- Nom propre : identifie un individu ou un lieu unique, avec majuscule (« Mamadou », « Dakar »).

3. L'article : détermine le nom en genre et nombre (défini, indéfini, partitif).

4. L'adjectif qualificatif : précise les qualités du nom (épithète, attribut du sujet ou du COD).

5. Le pronom : remplace un nom ou GN pour éviter la répétition.

6. L'adverbe : module le sens (manière, temps, lieu, quantité, négation, doute).`,
  sections: [
    {
      title: 'I. Mots variables vs Mots invariables',
      content: [
        '5 classes variables : Nom, Déterminant/Article, Adjectif, Pronom, Verbe.',
        '4 classes invariables : Adverbe, Préposition, Conjonction, Interjection.'
      ]
    },
    {
      title: 'II. Rôles et valeurs dans l\'énoncé',
      content: [
        'Verbe : action dynamique ou état permanent/passager.',
        'Nom : pivot sémantique.',
        'Connecteurs et prépositions : armature logique de la phrase.'
      ]
    }
  ],
  diagram: {
    title: 'Classes grammaticales',
    root: 'Classes de mots',
    branches: [
      {
        name: 'Variables (5)',
        subtitle: 'S\'accordent',
        items: ['Nom (propre/commun)', 'Déterminant', 'Adjectif', 'Pronom', 'Verbe']
      },
      {
        name: 'Invariables (4)',
        subtitle: 'Forme fixe',
        items: ['Adverbe (vite, bien)', 'Préposition (à, de, par)', 'Conjonction', 'Interjection (Ouf !)']
      }
    ]
  },
  conclusion: `L'identification rigoureuse de la classe grammaticale est indispensable pour réussir l'analyse syntaxique et les accords.`
};

// -------------------------------------------------------------
// LEÇON 32 (5ÈME) : LE TEXTE NARRATIF
// -------------------------------------------------------------
export const LESSON_32_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-32-francais-5eme',
  number: 'LEÇON 32 (5ÈME)',
  title: 'LE TEXTE NARRATIF : SCHÉMA NARRATIF ET SCHÉMA ACTANTIEL',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Un texte narratif est un récit dans lequel l'auteur raconte une histoire réelle ou imaginaire. Il présente une organisation rigoureuse en cinq étapes (schéma narratif) et met en scène des personnages selon leurs rôles (schéma actantiel).`,
  fullText: `LE TEXTE NARRATIF

I. LE SCHÉMA NARRATIF (EN 5 ÉTAPES) :
Exemple d'illustration : le conte d'Ésope « Le garçon qui criait au loup ».
1. La situation initiale :
Présente le cadre stable de départ (qui ? quoi ? où ? quand ?). Verbes souvent à l'imparfait.
Exemple : Le jeune berger gardait paisiblement ses moutons sur la colline.

2. L'élément déclencheur (ou perturbateur) :
Événement inattendu introduit par un connecteur temporel (« Un jour », « Soudain ») qui rompt l'équilibre initial.
Exemple : Un jour qu'il s'ennuyait, le berger cria au loup pour faire une farce aux villageois.

3. Le déroulement des actions (les péripéties) :
Succession d'actions entreprises pour tenter de rétablir la situation. Verbes souvent au passé simple.
Exemple : Les villageois montent armés sur la colline, constatent la farce, redescendent furieux ; le berger recommence une semaine plus tard.

4. Le dénouement (élément de résolution) :
Moment où le sort bascule et trouve son issue.
Exemple : Un soir d'hiver, un vrai loup apparaît ; le berger hurle, mais plus personne ne le croit.

5. La situation finale :
Fin du récit, équilibre nouveau rétabli (positif ou tragique).
Exemple : Le loup dévore le troupeau et le menteur.

II. LE SCHÉMA ACTANTIEL (RÔLES DES PERSONNAGES) :
1. Le Sujet (héros) : personnage principal qui poursuit une quête ou mène l'action.
2. Le Destinateur : ce qui pousse le héros à agir (sentiment, devoir, autorité).
3. Le Destinataire : celui ou ceux qui profitent de la quête.
4. Les Adjuvants : personnes, forces ou objets qui aident le héros.
5. Les Opposants : personnes, monstres ou obstacles qui freinent ou combattent le héros.

III. TEMPS ET ESPACE DE L'HISTOIRE :
- Temps de l'histoire (durée des faits réels) vs Temps de la narration (moment où l'on raconte).
- Narration postérieure (la plus courante, récit après les faits), simultanée (au présent) ou antérieure (anticipation).
- Alternance des temps du récit : Imparfait (décor, durée, répétition) et Passé simple (actions soudaines de premier plan).`,
  sections: [
    {
      title: 'I. Les 5 étapes du schéma narratif',
      content: [
        '1. Situation initiale (équilibre au passé).',
        '2. Élément perturbateur (rupture).',
        '3. Péripéties (actions et rebondissements).',
        '4. Dénouement (résolution finale).',
        '5. Situation finale (nouvel équilibre).'
      ]
    },
    {
      title: 'II. Le modèle actantiel de Greimas',
      content: [
        'Axe du vouloir : Sujet -> Objet de la quête.',
        'Axe de la transmission : Destinateur -> Destinataire.',
        'Axe du pouvoir : Adjuvants (alliés) vs Opposants (ennemis).'
      ]
    },
    {
      title: 'III. Les temps verbaux du récit',
      content: [
        'Passé simple : actions brèves, délimitées, successives.',
        'Imparfait : arrière-plan, descriptions, actions continues ou habituelles.',
        'Présent de narration : actualisation vive du récit.'
      ]
    }
  ],
  diagram: {
    title: 'Structure du récit narratif',
    root: 'Texte narratif',
    branches: [
      {
        name: 'Schéma narratif (5)',
        subtitle: 'Chronologie',
        items: ['1. Situation initiale', '2. Élément perturbateur', '3. Péripéties', '4. Dénouement', '5. Situation finale']
      },
      {
        name: 'Schéma actantiel',
        subtitle: 'Forces en jeu',
        items: ['Sujet & Objet de quête', 'Destinateur & Destinataire', 'Adjuvants & Opposants']
      },
      {
        name: 'Temps du récit',
        subtitle: 'Conjugaison',
        items: ['Passé simple (premier plan)', 'Imparfait (décor et arrière-plan)']
      }
    ]
  },
  conclusion: `La maîtrise du schéma narratif permet de construire des récits palpitants, cohérents et captivants.`
};

// -------------------------------------------------------------
// LEÇON 33 (5ÈME) : LA DESCRIPTION ET LE PORTRAIT
// -------------------------------------------------------------
export const LESSON_33_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-33-francais-5eme',
  number: 'LEÇON 33 (5ÈME)',
  title: 'LA DESCRIPTION ET LE PORTRAIT',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Décrire, c'est donner à voir ce que l'on observe (lieu, paysage, objet). Quand la description s'applique à un être vivant (être humain ou animal), on l'appelle un portrait. Le portrait associe l'aspect physique, les traits moraux et le comportement en action.`,
  fullText: `LA DESCRIPTION ET LE PORTRAIT

I. LA DESCRIPTION :
1. Définition :
Décrire, c'est traduire par des mots une réalité visible (lieu, décor, objet).
2. Les outils de la langue :
- Recours aux cinq sens (la vue, l'ouïe, l'odorat, le toucher, le goût).
- Expansions du nom : adjectifs qualificatifs précis, compléments du nom, propositions subordonnées relatives.
- Verbes de perception et de localisation dans l'espace (au premier plan, au loin, à gauche, au centre).
- Temps usuel : l'imparfait de description (ou le présent).
- Exemple d'analyse : Extrait du Père Goriot de Balzac (mise en valeur de la vétusté et du délabrement d'une salle par le lexique de la ruine).

II. LE PORTRAIT :
Le portrait est la description d'une personne ou d'un personnage.

1. Le portrait physique :
- Aspect général : âge, silhouette, stature (trapu, élancé, courbé), corpulence, démarche.
- Le visage : forme (osseux, rond, émacié), teint (blême, cuivré, bronzé), regard et yeux (vifs, étincelants, sombres), chevelure, bouche, nez.
- Vêtements et parure : tenues, accessoires caractéristiques.

2. Le portrait moral :
- Traits de caractère et personnalité : qualités (brave, intègre, bienveillant, sage) ou défauts (avare, rancunier, hypocrite, orgueilleux).
- Portrait en action : révéler le tempérament du personnage à travers ses gestes, ses manières de parler et ses réactions (cf. exemple de Birago Diop sur Serigne Fall).

3. Conseils de rédaction pour un portrait réussi :
- Éviter la répétition des verbes « être » et « avoir » (« il était grand, il avait des yeux... »). Utiliser des verbes expressifs et des tournures variées.
- Enrichir le portrait par des comparaisons et des métaphores (« des mains dures comme le roc », « un regard d'aigle »).
- Terminer par une impression générale ou un jugement personnel.`,
  sections: [
    {
      title: 'I. Techniques de la description de lieu',
      content: [
        'Organisation spatiale rigoureuse : du général au particulier, du premier plan vers l\'arrière-plan.',
        'Mobilisation du vocabulaire sensoriel des 5 sens.',
        'Emploi d\'expansions du nom pour qualifier chaque détail.'
      ]
    },
    {
      title: 'II. Les deux versants du portrait',
      content: [
        'Portrait physique : stature, physionomie, visage, regard, habillement.',
        'Portrait moral : psychologie, vertus, vices, manies, statut social.',
        'Portrait en action : le comportement et les gestes qui trahissent la personnalité.'
      ]
    },
    {
      title: 'III. Conseils stylistiques d\'embellissement',
      content: [
        'Bannir l\'accumulation monotone de "il avait" / "il était".',
        'Recourir aux comparaisons et métaphores frappantes.'
      ]
    }
  ],
  diagram: {
    title: 'Art de la description et du portrait',
    root: 'Description & Portrait',
    branches: [
      {
        name: 'Description de lieu',
        subtitle: 'Espace & Sens',
        items: ['Vocabulaire des 5 sens', 'Repères spatiaux (au loin, à droite)', 'Imparfait descriptif']
      },
      {
        name: 'Portrait physique',
        subtitle: 'Extérieur',
        items: ['Allure générale & Taille', 'Détails du visage & Regard', 'Vêtements & Démarche']
      },
      {
        name: 'Portrait moral',
        subtitle: 'Intérieur',
        items: ['Qualités & Défauts', 'Caractère révélé en action', 'Métaphores & Comparaisons']
      }
    ]
  },
  conclusion: `Un portrait vivant combine détails physiques saisissants et profondeur psychologique.`
};

// -------------------------------------------------------------
// LEÇON 34 (5ÈME) : LA LETTRE PERSONNELLE ET AUTRES ÉCRITS SOCIAUX
// -------------------------------------------------------------
export const LESSON_34_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-34-francais-5eme',
  number: 'LEÇON 34 (5ÈME)',
  title: 'LA LETTRE PERSONNELLE ET LES AUTRES ÉCRITS SOCIAUX',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `La lettre personnelle est un échange épistolaire destiné à des proches (famille, amis). Elle obéit à une disposition spatiale conventionnelle codifiée, tout comme l'invitation, le télégramme et le message court (SMS).`,
  fullText: `LA LETTRE PERSONNELLE ET LES AUTRES ÉCRITS SOCIAUX

I. LA LETTRE PERSONNELLE :
1. Présentation et structure formelle :
- En haut à gauche : nom et adresse de l'expéditeur.
- En haut à droite : lieu et date d'écriture (« Saint-Louis, le 15 octobre 2024 »).
- Vers le milieu : formule d'interpellation (« Cher Papa », « Chère Aïssatou », « Mon cher ami »).
- Corps de la lettre : organisé en paragraphes distincts précédés d'un alinéa. Registre courant ou affectueux. Formule de prise de nouvelles (« J'espère que ma lettre te trouvera en bonne santé »).
- Formule finale de congé / d'amitié : « À bientôt », « Bien affectueusement », « Je t'embrasse ».
- Signature manuscrite en bas à droite.

2. Sur l'enveloppe :
- Recto : timbre postal en haut à droite ; nom, prénom et adresse complète du destinataire (rue, ville, boîte postale, pays).
- Verso : coordonnées de l'expéditeur au dos.

II. LES AUTRES ÉCRITS SOCIAUX :
1. La lettre d'invitation :
- Officielle : formule de respect, mention « Sous le haut patronage de... », mention de l'objet, date, heure, lieu, et formule de congé formelle (« Je vous prie de croire, Monsieur le Préfet... »).
- Personnelle : simple, cordiale, mentionnant le motif (fête, baptême, anniversaire), la date, le lieu et l'heure.

2. Le télégramme :
Message concis transmis par télégraphe, payé au mot : suppression des articles, pronoms superflus et formules de politesse ; transmission du sens essentiel en style télégraphique (« ARRIVÉE DAKAR 18H VOL 402 AIR SÉNÉGAL ACCUEILLIR »).

3. Le message SMS (Texto) :
Message électronique court sur téléphone mobile, rapide et direct.`,
  sections: [
    {
      title: 'I. Les 5 zones d\'une lettre personnelle',
      content: [
        '1. En-tête : Expéditeur (haut gauche) & Lieu/Date (haut droite).',
        '2. Formule d\'interpellation du destinataire.',
        '3. Corps de texte structuré avec alinéas.',
        '4. Formule de politesse ou de congé affectueuse.',
        '5. Signature de l\'expéditeur.'
      ]
    },
    {
      title: 'II. Écrits sociaux spécifiques',
      content: [
        'Lettre d\'invitation (formelle ou amicale) : précise toujours date, heure, lieu et motif.',
        'Télégramme : économie maximale de mots (style condensé sans déterminants).',
        'SMS / Texto : communication instantanée moderne.'
      ]
    }
  ],
  diagram: {
    title: 'Mise en page de la lettre personnelle',
    root: 'Lettre personnelle',
    branches: [
      {
        name: 'Haut de page',
        subtitle: 'Repères',
        items: ['Haut gauche : Expéditeur', 'Haut droite : Lieu et Date', 'Centre : Formule d\'appel (Cher ami)']
      },
      {
        name: 'Corps du message',
        subtitle: 'Développement',
        items: ['Paragraphes avec alinéa', 'Nouvelles & Informations', 'Ton chaleureux / personnel']
      },
      {
        name: 'Bas de page',
        subtitle: 'Clôture',
        items: ['Formule de congé (À bientôt)', 'Signature à droite']
      }
    ]
  },
  conclusion: `La lettre personnelle perpétue le lien humain à travers une écriture soignée et respectueuse des codes épistolaires.`
};

// -------------------------------------------------------------
// LEÇON 35 (5ÈME) : LE DIALOGUE
// -------------------------------------------------------------
export const LESSON_35_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-35-francais-5eme',
  number: 'LEÇON 35 (5ÈME)',
  title: 'LE DIALOGUE DANS LE RÉCIT',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Le dialogue est un échange verbal direct entre deux ou plusieurs personnages au sein d'un récit, d'un conte ou d'une pièce de théâtre. Il donne vie et réalisme à l'action.`,
  fullText: `LE DIALOGUE

I. DÉFINITION :
Le dialogue est une communication entre deux ou plusieurs interlocuteurs. Il requiert au minimum :
- Un émetteur (celui qui parle)
- Un récepteur (celui qui écoute)
- Un message (les répliques)
- Un code commun (la langue).

II. LES RÈGLES DE PRÉSENTATION DU DIALOGUE :
1. Aller à la ligne et mettre un tiret cadratin ( - ) chaque fois qu'un nouvel interlocuteur prend la parole.
2. Utiliser deux-points ( : ) et des guillemets ( « » ) pour encadrer le passage au discours direct.
3. Employer des verbes de parole variés et expressifs qui traduisent les sentiments et le ton :
- Au lieu du banal « dit-il », utiliser : gémir, murmurer, crier, hurler, répliquer, rétorquer, insister, ordonner, supplier, s'exclamer, bredouiller, rugir.
Exemple tiré de Ferdinand Oyono (Le vieux nègre et la médaille) :
- « C'est la guerre ! se mit à gémir Mbogsi.
- C'est ce que j'avais d'abord pensé, reprit l'étranger.
- Meka ! rugit Engamba... »

III. LE DIALOGUE THÉÂTRAL :
Dans une pièce de théâtre, le nom de chaque personnage précède directement sa réplique (en majuscules), suivi de didascalies éventuelles entre parenthèses ou en italique (indications de jeu, de gestes ou d'intonation).`,
  sections: [
    {
      title: 'I. Règles typographiques du dialogue',
      content: [
        'Ouverture par deux-points et guillemets.',
        'Retour à la ligne et tiret à chaque nouvelle prise de parole.',
        'Fermeture des guillemets à la fin de l\'échange.'
      ]
    },
    {
      title: 'II. Rôle expressif des verbes de parole',
      content: [
        'Remplacer "dire" par des verbes précisant l\'intonation (chuchoter, rugir), l\'émotion (s\'indigner, trembler), ou la dynamique d\'échange (répliquer, couper).'
      ]
    }
  ],
  diagram: {
    title: 'Règles du dialogue narratif',
    root: 'Dialogue dans le récit',
    branches: [
      {
        name: 'Ponctuation',
        subtitle: 'Marques visuelles',
        items: ['Deux points (:) avant ouverture', 'Guillemets (« ») encadrant', 'Tiret (-) à chaque réplique']
      },
      {
        name: 'Verbes de parole',
        subtitle: 'Expressivité',
        items: ['Précisent le ton (hurler, gémir)', 'Précisent la réplique (rétorquer)', 'Placés en incise ou en amorce']
      },
      {
        name: 'Au théâtre',
        subtitle: 'Dramaturgie',
        items: ['NOM en capitales', 'Didascalies en italique']
      }
    ]
  },
  conclusion: `Un dialogue bien rythmé et enrichi de verbes de parole expressifs rend le récit captivant et révèle la psychologie des personnages.`
};
