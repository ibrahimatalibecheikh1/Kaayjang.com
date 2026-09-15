import { LessonContent } from './courses';

// -------------------------------------------------------------
// LEÇON 24 (5ÈME) : ACCORDS DU PARTICIPE PASSÉ
// -------------------------------------------------------------
export const LESSON_24_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-24-francais-5eme',
  number: 'LEÇON 24 (5ÈME)',
  title: 'ACCORDS DU PARTICIPE PASSÉ',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `L'accord du participe passé obéit à des règles précises selon qu'il est employé seul, avec l'auxiliaire être, avec l'auxiliaire avoir, ou au sein de constructions particulières (verbes pronominaux, suivi d'un infinitif, précédé de "en" ou verbes de mesure).`,
  fullText: `ACCORDS DU PARTICIPE PASSÉ

I. PARTICIPES PASSÉS EMPLOYÉS SEULS OU AVEC AVOIR ET ÊTRE :
1. Employé seul (sans auxiliaire) : s'accorde en genre et en nombre avec le nom ou pronom auquel il se rapporte (comme un adjectif qualificatif) : « Des fleurs séchées », « Un article vendu », « Des maisons ouvertes ».
2. Avec l'auxiliaire « être » : s'accorde en genre et en nombre avec le sujet du verbe : « Mes amies sont parties », « Elles sont reçues par le directeur ».
3. Avec l'auxiliaire « avoir » :
- S'accorde avec le complément d'objet direct (COD) si celui-ci est placé AVANT le verbe : « Ces fleurs, je les ai coupées hier », « La lettre que j'ai écrite ».
- Reste invariable si le COD est placé après ou s'il n'y a pas de COD : « J'ai coupé ces fleurs », « Nous avons assisté au spectacle ».

II. ACCORD DU PARTICIPE PASSÉ DES VERBES PRONOMINAUX :
Les verbes pronominaux se conjuguent avec l'auxiliaire « être ».
- Règle générale : accord avec le sujet ou le pronom réfléchi COD : « Elles se sont promenées », « Ils se sont battus ».
- Cas particuliers :
* Si le COD est placé APRÈS le verbe, le participe reste invariable : « Elle s'est blessé la main » (main = COD après), « Ils se sont lavé les mains ».
* S'il n'y a pas de COD (le pronom est COI), le participe est invariable : « Ils se sont succédé », « Elles se sont parlé au téléphone » (succéder à, parler à).

III. ACCORD DU PARTICIPE PASSÉ SUIVI D'UN INFINITIF :
- S'accorde avec le COD qui précède SI ce COD fait l'action exprimée par l'infinitif : « Je les ai vus manger » (ce sont eux qui mangent), « Les athlètes que nous avons regardés courir ».
- Reste invariable si le COD ne fait pas l'action de l'infinitif mais la subit : « Les histoires que j'ai entendu raconter » (les histoires sont racontées par quelqu'un d'autre).
- Remarque : le participe « fait » suivi d'un infinitif est TOUJOURS invariable : « Les voleurs se sont fait avoir ».

IV. ACCORD DU PARTICIPE PASSÉ PRÉCÉDÉ DE « EN » :
- Reste invariable quand « en » est employé seul : « Des livres, j'en ai lu beaucoup », « En avez-vous mangé ? ».
- S'accorde quand « en » est accompagné du pronom relatif « que » (qui est le véritable COD antécédent) : « Les enseignements que j'en ai tirés ».

V. VERBES PARTICULIERS (COÛTÉ, VALU, PESÉ, COURU, VÉCU, DORMI, DURÉ...) :
- Invariables quand ils sont suivis d'un complément circonstanciel de mesure (qui répond à « combien ? » et non « quoi ? ») : « Les six mille francs que ce pantalon m'a coûté », « Les cinq heures qu'a duré notre marche ».
- S'accordent s'ils sont employés au sens figuré transitif avec un véritable COD : « Les dangers qu'il a courus », « Les efforts que ce travail m'a coûtés », « Ses propositions, je les ai pesées ».`,
  sections: [
    {
      title: 'I. Règles de base (Seul, Être, Avoir)',
      content: [
        'Seul : comme un adjectif qualificatif.',
        'Avec Être : accord avec le sujet.',
        'Avec Avoir : accord avec le COD s\'il est placé avant (invariable si après ou absent).'
      ]
    },
    {
      title: 'II. Cas délicats des verbes pronominaux',
      content: [
        'Invariable si le COD est placé après (« Elle s\'est coupé la main »).',
        'Invariable si le pronom réfléchi est COI (« Ils se sont parlé, téléphoné, succédé, plu, ri »).'
      ]
    },
    {
      title: 'III. Suivi d\'infinitif, avec « en » et verbes de mesure',
      content: [
        'Suivi d\'infinitif : accord uniquement si le COD antécédent fait l\'action (« Je les ai entendus chanter » vs « Je les ai entendu chanter [par la chorale] »). « Fait » + infinitif est toujours invariable.',
        'Précédé de « en » : invariable, sauf si précédé de « que ».',
        'Verbes de prix/durée/poids : invariable avec complément de mesure (combien ?).'
      ]
    }
  ],
  diagram: {
    title: 'Arbre décisionnel de l\'accord du participe passé',
    root: 'Participe passé',
    branches: [
      {
        name: 'Sans auxiliaire',
        subtitle: 'Adjectif',
        items: ['Accord avec le nom qualifié']
      },
      {
        name: 'Avec Être',
        subtitle: 'Sujet',
        items: ['Accord avec le sujet', 'Pronominal : chercher le COD']
      },
      {
        name: 'Avec Avoir',
        subtitle: 'COD antécédent',
        items: ['COD AVANT -> accord', 'COD après / absent -> invariable']
      }
    ]
  },
  conclusion: `L'accord du participe passé exige de toujours repérer la présence et la position exacte du complément d'objet direct.`
};

// -------------------------------------------------------------
// LEÇON 25 (5ÈME) : LES ACCORDS DE L'ADJECTIF
// -------------------------------------------------------------
export const LESSON_25_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-25-francais-5eme',
  number: 'LEÇON 25 (5ÈME)',
  title: 'LES ACCORDS DE L’ADJECTIF : COULEUR, VALEUR ADVERBIALE ET ADJECTIF VERBAL',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Certains adjectifs présentent des difficultés d'accord spécifiques : les adjectifs de couleur, les adjectifs employés avec une valeur adverbiale, et la distinction essentielle entre le participe présent et l'adjectif verbal.`,
  fullText: `LES ACCORDS DE L’ADJECTIF

I. L'ACCORD DES ADJECTIFS DE COULEURS :
1. Règle générale : Les adjectifs simples de couleur s'accordent en genre et en nombre avec le nom : blanc, noir, gris, rose, fauve, mauve, rouge, brun, violet, bleu, jaune, vert, blond, beige, pourpre, écarlate, incarnat.
Exemples : « l'ombre verte », « deux trous rouges ».

2. Noms employés comme adjectifs de couleur : ils restent invariables : marron, orange, citron, cerise, indigo, ocre, kaki, olive, or, marine, émeraude.
Exemples : « Des jupes marron », « des motifs orange », « des vestes kaki ».
Exceptions (prennent la marque du pluriel) : rose, fauve, mauve, pourpre, écarlate (« des chaussures roses », « des robes écarlates »).

3. Adjectifs de couleur composés : ils sont toujours invariables :
Exemples : « des chaussettes rouge cerise », « des pantalons bleu clair », « des chapeaux jaune foncé ».

II. LES ADJECTIFS EMPLOYÉS ADVERBIALEMENT :
1. Modifiant un verbe : ils jouent le rôle d'adverbes et restent invariables :
Exemples : « Cette fille crie fort », « Il place la barre très haut », « Ces denrées coûtent cher », « Ces plats sentent bon ».
2. Modifiant un adjectif : invariables : « Elles sont fin prêtes », « des habits flambant neufs », « des personnalités haut placées ».

III. ADJECTIF VERBAL ET PARTICIPE PRÉSENT :
1. Le participe présent : exprime une action, admet des compléments d'objet ou de lieu, est invariable et se termine toujours en -ant :
Exemple : « Les enfants se sont blessés en jouant », « Vendant le même produit, ils se font la guerre ».
2. L'adjectif verbal : exprime un état, une qualité permanente, s'accorde en genre et en nombre avec le nom, et se termine en -ant ou en -ent :
Exemples : « Ces devoirs sont excellents », « Les exercices ont été très fatigants ».
Variations orthographiques courantes :
- adhérer : adhérant (participe) / adhérent (adjectif verbal)
- communiquer : communiquant (participe) / communicant (adjectif verbal)
- convaincre : convainquant (participe) / convaincant (adjectif verbal)
- converger : convergeant (participe) / convergent (adjectif verbal)
- fatiguer : fatiguant (participe) / fatigant (adjectif verbal)
- négliger : négligeant (participe) / négligent (adjectif verbal).`,
  sections: [
    {
      title: 'I. Adjectifs de couleur',
      content: [
        'Adjectifs simples : s\'accordent normalement (robes vertes).',
        'Noms utilisés comme couleurs : invariables (marron, orange, or, émeraude). Exceptions qui s\'accordent : rose, mauve, pourpre, écarlate, fauve.',
        'Couleurs composées : invariables (bleu marine, vert clair, jaune banane).'
      ]
    },
    {
      title: 'II. Adjectifs à valeur adverbiale',
      content: [
        'Restent invariables lorsqu\'ils modifient un verbe (chanter faux, parler fort, coûter cher, sentir bon).'
      ]
    },
    {
      title: 'III. Participe présent vs Adjectif verbal',
      content: [
        'Participe présent : invariable, valeur d\'action, toujours en -ant.',
        'Adjectif verbal : variable, valeur d\'état, parfois écrit en -ent (négligent, adhérent, différent) ou -cant (communicant, provocant).'
      ]
    }
  ],
  diagram: {
    title: 'Accords complexes de l\'adjectif',
    root: 'Adjectifs particuliers',
    branches: [
      {
        name: 'Couleurs',
        subtitle: 'Règles triples',
        items: ['Simple -> Accord', 'Nom -> Invariable (sauf rose/mauve)', 'Composé -> Invariable']
      },
      {
        name: 'Valeur d\'adverbe',
        subtitle: 'Invariabilité',
        items: ['Parler fort', 'Coûter cher', 'Fin prêtes']
      },
      {
        name: 'Adjectif verbal',
        subtitle: 'Distinction participe',
        items: ['Action (-ant invariable)', 'Qualité (variable en genre/nombre)']
      }
    ]
  },
  conclusion: `Ces règles évitent les erreurs fréquentes dans les rédactions et dictées d'évaluation.`
};

// -------------------------------------------------------------
// LEÇON 26 (5ÈME) : LE PLURIEL DES NOMS COMPOSÉS
// -------------------------------------------------------------
export const LESSON_26_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-26-francais-5eme',
  number: 'LEÇON 26 (5ÈME)',
  title: 'LE PLURIEL DES NOMS COMPOSÉS',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Un nom composé est formé de deux ou plusieurs mots réunis avec ou sans trait d'union. Règle d'or : seuls les noms et les adjectifs peuvent prendre la marque du pluriel, si le sens le permet. Les verbes, adverbes et prépositions restent invariables.`,
  fullText: `LE PLURIEL DES NOMS COMPOSÉS

RÈGLE GÉNÉRALE FONDAMENTALE :
Dans un nom composé, seuls les NOMS et les ADJECTIFS peuvent prendre la marque du pluriel, selon le sens et l'usage. Les VERBES, les ADVERBES et les PRÉPOSITIONS demeurent invariables.

1. VERBE + NOM :
Le verbe reste toujours invariable. Le nom prend le pluriel ou reste au singulier selon le sens logique :
- « des chasse-neige » (chasser la neige, indénombrable -> singulier)
- « des porte-monnaie » (porter de la monnaie -> singulier)
- « des couvre-pieds » (couvrir les pieds -> pluriel)
- « un porte-avions » / « des porte-avions » (porter des avions -> toujours pluriel)
- « des sèche-cheveux » (sécher des cheveux -> pluriel).

2. NOM + NOM :
En général, les deux noms prennent la marque du pluriel :
- « des choux-fleurs », « des sourds-muets ».
Cas d'un nom complément sans préposition exprimée :
- « des timbres-poste » (timbres de la poste -> poste au singulier)
- « des stations-service » (stations pour le service -> service au singulier)
- « des pauses-café » (pauses pour prendre du café -> café au singulier).

3. NOM + ADJECTIF (ou ADJECTIF + NOM) :
Les deux éléments s'accordent au pluriel :
- « des grands-mères » (ou « grand-mères »)
- « des beaux-frères »
- « des plates-bandes »
- « des coffres-forts ».

4. ADVERBE / PRÉPOSITION + NOM :
L'adverbe ou la préposition est invariable ; seul le nom prend le pluriel :
- « des arrière-boutiques »
- « des sous-sols »
- « des avant-postes ».

5. VERBE + VERBE :
Les deux verbes restent strictement invariables :
- « des savoir-vivre »
- « des va-et-vient »
- « des laissez-passer ».`,
  sections: [
    {
      title: 'I. La règle d\'accord des natures de mots',
      content: [
        'Seuls NOMS et ADJECTIFS varient.',
        'VERBES, ADVERBES, PRÉPOSITIONS sont INVARIABLES.'
      ]
    },
    {
      title: 'II. Cas particuliers selon le sens',
      content: [
        'Nom complément sous-entendu : des timbres-poste (de la poste), des stations-service (pour le service).',
        'Verbe + verbe : totalement invariable (des va-et-vient).'
      ]
    }
  ],
  diagram: {
    title: 'Pluriel des mots composés',
    root: 'Noms composés',
    branches: [
      {
        name: 'Nom + Nom / Nom + Adj',
        subtitle: 'Double accord',
        items: ['des choux-fleurs', 'des coffres-forts', 'des plates-bandes']
      },
      {
        name: 'Verbe + Nom',
        subtitle: 'Verbe invariable',
        items: ['des couvre-pieds (pl.)', 'des chasse-neige (sg.)', 'des porte-avions (pl.)']
      },
      {
        name: 'Invariables',
        subtitle: 'Mots figés',
        items: ['Verbe + Verbe (des va-et-vient)', 'Adverbe + Nom (des arrière-cours)']
      }
    ]
  },
  conclusion: `L'analyse de la nature grammaticale des composants donne la clé immédiate de l'accord orthographique.`
};

// -------------------------------------------------------------
// LEÇON 27 (5ÈME) : FORMES ET RÔLES DES SIGNES DE PONCTUATION
// -------------------------------------------------------------
export const LESSON_27_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-27-francais-5eme',
  number: 'LEÇON 27 (5ÈME)',
  title: 'FORMES ET RÔLES DES DIFFÉRENTS SIGNES DE PONCTUATION',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Les signes de ponctuation servent à séparer les phrases et les propositions pour rendre le texte clair et intelligible. À l'oral, ils dictent les pauses et les intonations ; à l'écrit, ils construisent le sens.`,
  fullText: `FORMES ET RÔLES DES DIFFÉRENTS SIGNES DE PONCTUATION

I. LA VIRGULE ( , ) :
Marque une courte pause sans baisse d'intonation. Elle s'emploie :
- Dans une énumération : « Elle monte, elle descend, elle n'arrête pas de bouger ! »
- Pour séparer des termes coordonnés répétés : « Il ne craint ni le vent, ni le froid, ni la pluie. »
- Pour mettre en relief un élément mis en apostrophe ou en tête/fin de phrase : « Mon sac, je l'ai perdu », « Moi, je ne croirais jamais cela ».
- Pour isoler les propositions participiales : « Son travail terminé, il rentra chez lui. »
- Pour encadrer les termes mis en apposition : « Moussa, le plus brillant de la classe, est récompensé. »
- Pour isoler les propositions incises dans le dialogue : « Je vais, dit le professeur, vous expliquer la leçon. »

II. LE POINT-VIRGULE ( ; ) :
Marque une pause plus importante que la virgule. Il sépare deux propositions indépendantes reliées par un lien logique fort :
« La planète se réchauffe ; les glaciers reculent d'année en année. »

III. LES DEUX POINTS ( : ) :
- Annoncent une énumération : « Il a eu trois prix : un en math, un en français et un en anglais. »
- Introduisent une citation ou des paroles rapportées au discours direct : « Jean de La Fontaine a écrit : « La raison du plus fort est toujours la meilleure. » »
- Introduisent une explication de cause ou conséquence : « Je n'ai pas aimé ce film : il était vulgaire. »

IV. LE POINT ( . ) :
Marque la fin d'une phrase déclarative ou impérative avec intonation descendante et pause complète.

V. LES POINTS DE SUSPENSION ( ... ) :
Toujours au nombre de trois. Indiquent une interruption, une émotion non dite ou une énumération inachevée (attention : ne jamais écrire « etc... » car etc. suffit).

VI. LE POINT D'INTERROGATION ( ? ) ET D'EXCLAMATION ( ! ) :
- ? : à la fin d'une interrogation directe (intonation montante). Dans l'interrogation indirecte, on met un point ordinaire (« Je me demande s'il viendra. »).
- ! : exprime surprise, joie, colère, ordre ou douleur (« Que cette fleur est belle ! », « Sortez ! »).

VII. GUILLEMETS ( « » ), PARENTHÈSES ( ) ET TIRETS ( - ) :
- Guillemets : citations et discours direct.
- Parenthèses : isolent un commentaire ou une explication sans lien syntaxique direct.
- Tirets : indiquent les répliques dans un dialogue ou encadrent une incise.`,
  sections: [
    {
      title: 'I. Ponctuation de fin de phrase',
      content: [
        'Point (.), Point d\'interrogation (?), Point d\'exclamation (!), Points de suspension (...).',
        'Imposent une majuscule au mot qui suit.'
      ]
    },
    {
      title: 'II. Ponctuation interne à la phrase',
      content: [
        'Virgule (pause brève, énumération, détachement, incise).',
        'Point-virgule (séparation de propositions complètes liées logiquement).',
        'Deux-points (annonce d\'énumération, explication ou citation).'
      ]
    },
    {
      title: 'III. Ponctuation du dialogue et des citations',
      content: [
        'Deux points + guillemets (« ... ») pour ouvrir le dialogue.',
        'Tirets (-) à chaque changement d\'interlocuteur.'
      ]
    }
  ],
  diagram: {
    title: 'Signes de ponctuation',
    root: 'Ponctuation',
    branches: [
      {
        name: 'Fin de phrase',
        subtitle: 'Intonation & Clôture',
        items: ['Point (.)', 'Point d\'interrogation (?)', 'Point d\'exclamation (!)', 'Points de suspension (...)']
      },
      {
        name: 'Dans la phrase',
        subtitle: 'Rythme & Hiérarchie',
        items: ['Virgule (,) pause courte', 'Point-virgule (;) pause moyenne', 'Deux points (:) explication']
      },
      {
        name: 'Discours & Précision',
        subtitle: 'Dialogues & Citations',
        items: ['Guillemets (« »)', 'Tirets (-) de dialogue', 'Parenthèses ( ) explicatives']
      }
    ]
  },
  conclusion: `La ponctuation donne au texte écrit sa mélodie orale et clarifie la hiérarchie de la pensée.`
};

// -------------------------------------------------------------
// LEÇON 28 (5ÈME) : L'ACCENTUATION ET LES SIGNES AUXILIAIRES
// -------------------------------------------------------------
export const LESSON_28_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-28-francais-5eme',
  number: 'LEÇON 28 (5ÈME)',
  title: 'L’ACCENTUATION ET LES SIGNES AUXILIAIRES',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Les accents garantissent la prononciation correcte des voyelles et permettent de différencier les homophones. Les signes auxiliaires (tréma, cédille, apostrophe, trait d'union) complètent l'orthographe.`,
  fullText: `L’ACCENTUATION ET LES SIGNES AUXILIAIRES

I. LES TROIS ACCENTS DU FRANÇAIS :
1. L'accent aigu (é) : porte uniquement sur la lettre « e » :
- Première lettre du mot : étable, élection, étendre (exception : ère).
- Dernière lettre : canapé, abonné, randonnée, et participes passés en -é (mangé, travaillé, été).
- RÈGLES D'INTERDICTION : jamais d'accent aigu sur un « e » précédant un « x » (exercice, circonflexe) ni devant une consonne double (intéressant, il appelle, trompette).
- Jamais d'accent aigu lorsque « e » est suivi de d, f, r final ou z final (clef, pied, nez, chanter).

2. L'accent grave (à, è, ù) :
- Sur le « e » : mots en « -s » non pluriels (après, congrès, décès, près, progrès) et « e » précédant une syllabe avec un « e » muet (collège, avènement, fièrement).
- Sur le « a » : distinction entre « a » (verbe avoir, remplaçable par avait) et « à » (préposition invariable) ; « la » (article/pronom) et « là » (lieu) ; « çà et là » ; « déjà », « voilà » (mais « cela » sans accent).
- Sur le « u » : uniquement dans le mot « où » (lieu ou temps, opposé à « ou » signifiant « ou bien »).

3. L'accent circonflexe (â, ê, î, ô, û) :
- Sur les pronoms possessifs : le nôtre, le vôtre, les nôtres, les vôtres.
- Sur certains noms et adjectifs : mûr, sûr, boîte, chaîne, château, grâce, traître, voûte.
- En conjugaison : aux deux premières personnes du passé simple (nous fûmes, nous chantâmes, vous fîtes) et à la 3e pers. du subjonctif imparfait (qu'il fût, qu'il chantât).

II. LES SIGNES AUXILIAIRES :
1. L'apostrophe ( ' ) : marque l'élision de la voyelle devant voyelle ou h muet (l'école, l'homme, s'il).
2. Le tréma ( ¨ ) : placé sur ï, ë, ü pour forcer la prononciation séparée des voyelles (aïeux, égoïsme, maïs, exiguïté, voix aiguë).
3. Le trait d'union ( - ) : unit les mots composés (garde-corps, avant-hier), relie l'impératif à son pronom (fais-le, donnes-en) et le sujet inversé (vient-il ?).
4. La cédille ( ç ) : se met sous le « c » devant a, o, u pour lui donner le son [s] (garçon, français, reçu).`,
  sections: [
    {
      title: 'I. Règles capitales des accents',
      content: [
        'Jamais d\'accent sur un "e" devant consonne double (trompette, pelle) ou devant "x" (exact, examen).',
        'Distinction par accent grave : a/à, ou/où, la/là, des/dès.',
        'Accent circonflexe historique témoin d\'un "s" disparu (château = castel, hôpital = hospital).'
      ]
    },
    {
      title: 'II. Les signes auxiliaires',
      content: [
        'Tréma : sépare deux voyelles contiguës (coïncidence, Jamaïque).',
        'Cédille : son [s] devant A, O, U (façade, leçon, aperçu). Jamais de cédille devant E ou I.'
      ]
    }
  ],
  diagram: {
    title: 'Système accentuel',
    root: 'Accents & Signes',
    branches: [
      {
        name: 'Accents (é, è, ê)',
        subtitle: 'Sur voyelles',
        items: ['Aigu : é', 'Grave : è, à, ù', 'Circonflexe : â, ê, î, ô, û']
      },
      {
        name: 'Signes auxiliaires',
        subtitle: 'Fonction orthographique',
        items: ['Tréma (¨) : aïeux', 'Cédille (ç) devant a/o/u', 'Apostrophe (\') élision', 'Trait d\'union (-)']
      }
    ]
  },
  conclusion: `L'exactitude de l'accentuation préserve la précision phonétique et le sens grammatical des termes.`
};

// -------------------------------------------------------------
// LEÇON 29 (5ÈME) : LES HOMONYMES ET HOMOPHONES GRAMMATICAUX
// -------------------------------------------------------------
export const LESSON_29_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-29-francais-5eme',
  number: 'LEÇON 29 (5ÈME)',
  title: 'LES HOMONYMES ET LES HOMOPHONES GRAMMATICAUX',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Les homonymes sont des mots qui se prononcent ou s'écrivent de la même manière mais ont des sens différents. Les homophones grammaticaux se distinguent par des tests simples de substitution.`,
  fullText: `LES HOMONYMES ET LES HOMOPHONES GRAMMATICAUX

I. NOTIONS :
- Homophones : même son, graphie différente (mer / mère / maire ; vert / verre / vers).
- Homographes : même graphie, sens différent (une glace pour se mirer / une glace à la vanille).

II. LES RÈGLES DE SUBSTITUTION DES HOMOPHONES USUELS :
1. On / Ont :
- « on » = pronom sujet remplaçable par « il » ou « elle ».
- « ont » = verbe avoir (présent) remplaçable par « avaient ».

2. Peu / Peux / Peut :
- « peu » = adverbe de quantité opposé à « beaucoup » (« un peu de vent »).
- « peux / peut » = verbe pouvoir remplaçable par « pouvais / pouvait ».

3. Quand / Quant / Qu'en :
- « quand » = au moment où, à quel moment.
- « quant à » = en ce qui concerne (« quant à Jacques »).
- « qu'en » = que ... de cela (« Qu'en penses-tu ? »).

4. Leur / Leurs :
- « leur » invariable devant un verbe = pronom personnel COI remplaçable par « lui » (« On leur parle »).
- « leur / leurs » variable devant un nom = adjectif possessif (« leur cahier », « leurs cahiers »).

5. A / À :
- « a » = verbe avoir remplaçable par « avait ».
- « à » = préposition invariable marquant le lieu, le temps ou la manière.

6. C'est / S'est :
- « c'est » = démonstratif + être remplaçable par « c'était ».
- « s'est » = pronom réfléchi + être (verbe pronominal : « il s'est lavé »).

7. Son / Sont :
- « son » = adjectif possessif remplaçable par « mon » ou « ton ».
- « sont » = verbe être remplaçable par « étaient ».

8. Et / Est :
- « et » = conjonction d'addition remplaçable par « et puis ».
- « est » = verbe être remplaçable par « était ».`,
  sections: [
    {
      title: 'I. Tests de substitution classiques',
      content: [
        'a / à : Si on peut dire "avait", on écrit "a". Sinon "à".',
        'on / ont : Si on peut dire "avaient", on écrit "ont". Sinon "on".',
        'son / sont : Si on peut dire "étaient", on écrit "sont". Sinon "son".',
        'et / est : Si on peut dire "était", on écrit "est". Sinon "et".'
      ]
    },
    {
      title: 'II. Démonstratifs vs réfléchis (c\'est / s\'est ; ce / se)',
      content: [
        'c\'est = remplaçable par "c\'était".',
        's\'est = suivi d\'un participe passé avec sujet identique (« il s\'est blessé »).'
      ]
    }
  ],
  diagram: {
    title: 'Clés des homophones grammaticaux',
    root: 'Homophones',
    branches: [
      {
        name: 'Verbe Avoir / Être',
        subtitle: 'Test de l\'imparfait',
        items: ['a -> avait / à -> préposition', 'ont -> avaient / on -> pronom il', 'sont -> étaient / son -> possessif']
      },
      {
        name: 'Démonstratif / Réfléchi',
        subtitle: 'c\'est vs s\'est',
        items: ['c\'est = cela est', 's\'est = forme pronominale (se)']
      },
      {
        name: 'Leur / Leurs',
        subtitle: 'Pronom vs Déterminant',
        items: ['Devant verbe : invariable (leur)', 'Devant nom : accord (leur / leurs)']
      }
    ]
  },
  conclusion: `L'usage systématique du test de remplacement à l'imparfait supprime la quasi-totalité des fautes d'homophonie.`
};

// -------------------------------------------------------------
// LEÇON 30 (5ÈME) : VARIATIONS ORTHOGRAPHIQUES DES VERBES EN -QUER, -GUER, -ELER, -ETER
// -------------------------------------------------------------
export const LESSON_30_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-30-francais-5eme',
  number: 'LEÇON 30 (5ÈME)',
  title: 'VARIATIONS ORTHOGRAPHIQUES DES VERBES EN -QUER, -GUER, -ELER ET -ETER',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Certains verbes du 1er groupe présentent des particularités orthographiques pour maintenir la prononciation du radical ou transcrire l'alternance phonétique des sons [e] et [ɛ].`,
  fullText: `VARIATIONS ORTHOGRAPHIQUES DES VERBES

I. LES VERBES EN -QUER ET -GUER :
1. Ils gardent leur radical complet avec « u » même devant « a » ou « o » :
- « J'expliquais », « nous nous appliquons ».
- « Il naviguait », « nous conjuguons ».
2. Participe présent vs Adjectif verbal :
- Verbes en -guer : participe présent en « -guant » (naviguant) / adjectif verbal en « -gant » (un personnel navigant).
- Verbes en -quer : participe présent en « -quant » (provoquant) / certains adjectifs verbaux en « -cant » si le verbe donne un nom en -tion (provocant / provocation ; communicant / communication).
3. Noms dérivés :
- Si le nom se termine par -c : bloquer -> bloc -> blocage ; parquer -> parc -> parcage.
- Sinon en -quage : astiquer -> astiquage ; braquer -> braquage.

II. LES VERBES EN -ELER ET -ETER :
1. Verbes en -eler :
- Règle traditionnelle : redoublent le « l » devant un « e » muet pour faire le son [ɛ] : j'appelle, ils appellent, j'appellerai (mais nous appelons).
- Exceptions prenant un accent grave : geler (je gèle), peler (je pèle), démanteler (il démantele), ciseler, marteler, modeler, congeler.
2. Verbes en -eter :
- Règle traditionnelle : redoublent le « t » devant un « e » muet : je jette, ils jettent, je jetterai (mais nous jetons).
- Exceptions prenant un accent grave : acheter (j'achète, nous achetons), racheter, fureter, haleter, crocheter.
3. Rectifications orthographiques de 1990 :
Autorisent l'accent grave è pour tous les verbes en -eler et -eter (elle ruissèle, il époussète), SAUF pour appeler et jeter (et leurs composés) qui continuent de doubler « l » et « t ». Recommandation : interpeler (avec 1 seul l).`,
  sections: [
    {
      title: 'I. Verbes en -quer et -guer',
      content: [
        'Maintien du radical invariant en toutes circonstances.',
        'Participe en -guant / adjectif en -gant (fatiguant / fatigant).',
        'Participe en -quant / adjectif en -cant (provoquant / provocant).'
      ]
    },
    {
      title: 'II. Verbes en -eler et -eter',
      content: [
        'Modèle Appeler / Jeter : doublement de consonne (j\'appelle, je jette).',
        'Modèle Peler / Acheter : accent grave sur le "e" du radical (je pèle, j\'achète).',
        'Règles tolérées de 1990 : généralisation de l\'accent grave.'
      ]
    }
  ],
  diagram: {
    title: 'Particularités des verbes du 1er groupe',
    root: 'Verbes à variations',
    branches: [
      {
        name: '-quer / -guer',
        subtitle: 'Conservation du U',
        items: ['Participe : -quant / -guant', 'Adjectif verbal : -cant / -gant']
      },
      {
        name: '-eler',
        subtitle: 'Double L ou È',
        items: ['Appeler -> j\'appelle (double l)', 'Geler, peler -> je gèle (accent grave)']
      },
      {
        name: '-eter',
        subtitle: 'Double T ou È',
        items: ['Jeter -> je jette (double t)', 'Acheter -> j\'achète (accent grave)']
      }
    ]
  },
  conclusion: `Ces règles assurent le respect fidèle de la phonétique française dans la conjugaison écrite.`
};
