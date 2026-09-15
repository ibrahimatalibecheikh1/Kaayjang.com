import { LessonContent } from './courses';

// ============================================================================
// PARTIE 2 : VOCABULAIRE (LEÇONS 14 À 21) - FRANÇAIS 4ÈME
// Fascicule officiel - Programme de Français
// ============================================================================

// ----------------------------------------------------------------------------
// LEÇON 14 : LES FAMILLES DE MOTS – LA DÉRIVATION
// ----------------------------------------------------------------------------
export const LESSON_14_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-14',
  number: 'LEÇON 14',
  title: 'LES FAMILLES DE MOTS – LA DÉRIVATION',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Les mots sont formés de différentes manières ; certains sont issus de la même famille alors que d’autres sont formés par dérivation à partir d'un radical auquel on adjoint des préfixes et des suffixes.`,
  fullText: `LES FAMILLES DE MOTS – LA DERIVATION

Les mots sont formés de différentes manières ; certains sont issus de la même famille alors que d’autres sont formés par dérivation.

I – Les familles de mots :
Une famille de mots est l'ensemble des mots formés sur un même radical.
Exemples :
- marchandise – marchandage – marchander, etc. sont des mots de la même famille formés sur le radical « marchand ».
- journalier – journée – aujourd’hui, etc. sont des mots de la même famille formés sur le radical « jour ».
Néanmoins le radical ne se présente pas toujours sous la même forme d'un mot à l'autre d'une même famille.
Exemples : achat -> acheter / été -> estival / père -> paternel.

II - La dérivation :
La dérivation est le procédé qui consiste depuis un mot de base à former un mot nouveau soit par addition, soit par suppression, soit par remplacement d'éléments appelés préfixes et suffixes et qui viennent s'ajouter à un mot de base appelé radical. Le mot de sens nouveau ainsi créé s'appelle un dérivé.
Exemples :
- Le mot « déchargement » : le préfixe « -dé » suivi du radical « charge » terminé par le suffixe « -ement ». Le préfixe précède le radical et le suffixe le suit.
La famille lexicale d'un mot est celle qui est constituée de l'ensemble des mots apparentés par le sens et la forme.
Exemples : rompre, interrompre appartiennent à la famille de rupture, interruption...`,
  sections: [
    {
      title: 'I - LA FAMILLE DE MOTS',
      content: [
        `Une famille de mots regroupe tous les mots construits à partir d'un même radical de base.`,
        `Exemples : marchand, marchandise, marchander / jour, journalier, journée.`,
        `Variations du radical : le radical peut changer de forme selon l'étymologie latine (achat -> acheter ; été -> estival ; père -> paternel).`
      ]
    },
    {
      title: 'II - LE MÉCANISME DE LA DÉRIVATION',
      content: [
        `Préfixe : placé avant le radical (ex : dé- dans déchargement). Modifie le sens sans changer la classe grammaticale.`,
        `Radical : noyau porteur du sens fondamental (ex : charge).`,
        `Suffixe : placé après le radical (ex : -ement dans déchargement). Modifie souvent la classe grammaticale (verbe -> nom).`,
        `Famille lexicale : ensemble des dérivés apparentés par la forme et le sens (rompre, interrompre, rupture, interruption).`
      ]
    }
  ],
  diagram: {
    title: 'FORMATION DES MOTS PAR DÉRIVATION',
    root: 'LE MOT DÉRIVÉ',
    branches: [
      {
        name: 'PRÉFIXE',
        subtitle: 'Avant le radical',
        items: ['Modifie le sens (dé-, in-, re-)', 'Conserve la classe grammaticale']
      },
      {
        name: 'RADICAL',
        subtitle: 'Cœur sémantique',
        items: ['Porteur du sens principal', 'Peut avoir des variantes étymologiques']
      },
      {
        name: 'SUFFIXE',
        subtitle: 'Après le radical',
        items: ['Crée un nouveau mot', 'Change souvent la classe grammaticale (nom, adj, verbe)']
      }
    ]
  },
  conclusion: `La dérivation par préfixation et suffixation enrichit la langue à partir d'un radical commun, formant de vastes familles de mots interconnectées par le sens.`
};

// ----------------------------------------------------------------------------
// LEÇON 15 : SENS PROPRE ET SENS FIGURÉ D'UN MOT
// ----------------------------------------------------------------------------
export const LESSON_15_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-15',
  number: 'LEÇON 15',
  title: 'SENS PROPRE ET SENS FIGURÉ D’UN MOT',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Le sens propre d'un mot est son sens premier et concret. Le sens figuré est un sens imagé ou abstrait dérivé du sens propre, qui interpelle l'imaginaire du lecteur pour transmettre émotions et nuances.`,
  fullText: `SENS PROPRE ET SENS FIGURE D’UN MOT

Le sens propre d'un mot est son sens premier. Les sens figurés sont les sens qui en dérivent. En général, le sens propre renvoie au sens concret.
Exemple : le mot « cochon » évoque un animal.

Les sens figurés sont souvent des sens abstraits ou imagés.
Exemple : le même mot « cochon » peut renvoyer à une personne qui se comporte de manière peu soigneuse.

Le sens figuré permet à celui qui écrit d'interpeller l'imaginaire du lecteur et ainsi de faire passer une sensation, une émotion, une idée qu'il ne serait peut-être pas possible de faire passer avec l'unique emploi de mots aux sens propres.
Exemples :
- Maïmouna tombe dans les escaliers. (sens propre : chute physique)
- Maïmouna tombe par hasard sur sa meilleure amie. (sens figuré : rencontre fortuite)`,
  sections: [
    {
      title: 'I - LE SENS PROPRE',
      content: [
        `Sens premier, originel et généralement concret d'un mot.`,
        `Exemples : « cochon » (l'animal de la ferme) ; « Maïmouna tombe dans les escaliers » (chute physique réelle).`
      ]
    },
    {
      title: 'II - LE SENS FIGURÉ',
      content: [
        `Sens second, imagé, métaphorique ou abstrait.`,
        `Exemples : « Quel cochon ! » (personne sale ou désordonnée) ; « Maïmouna tombe sur une amie » (rencontrer par hasard).`,
        `Rôle littéraire : stimule l'imagination, exprime la sensibilité, enrichit le vocabulaire et rend les descriptions vivantes.`
      ]
    }
  ],
  diagram: {
    title: 'DU SENS PROPRE AU SENS FIGURÉ',
    root: 'POLYSÉMIE',
    branches: [
      {
        name: 'SENS PROPRE',
        subtitle: 'Concret & Premier',
        items: ['Réalité physique matérielle', 'Définition première du dictionnaire']
      },
      {
        name: 'SENS FIGURÉ',
        subtitle: 'Abstrait & Imagé',
        items: ['Analogie et métaphore', 'Expression des émotions et des idées']
      }
    ]
  },
  conclusion: `La distinction entre sens propre (littéral et concret) et sens figuré (imagé et abstrait) est au cœur de l'expression littéraire et des figures de style.`
};

// ----------------------------------------------------------------------------
// LEÇON 16 : SYNONYMIE ET ANTONYMIE
// ----------------------------------------------------------------------------
export const LESSON_16_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-16',
  number: 'LEÇON 16',
  title: 'SYNONYMIE ET ANTONYMIE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Les synonymes sont des mots de même classe grammaticale qui partagent un sens très proche. Les antonymes sont des mots de sens contraire. Tous deux dépendent étroitement du contexte d'emploi de la phrase.`,
  fullText: `SYNONYMIE ET ANTONYMIE

I – Synonymie :
Les synonymes sont les mots qui ont une même fonction (classe) grammaticale et qui ont un sens commun ou très voisin.
Exemples : les verbes Envoyer et Lancer :
- Il envoie (lance) le ballon à son frère.
- On a envoyé (lancé) une fusée sur la lune.

Mais la synonymie varie avec les contextes : il y aura toujours des contextes où les deux mots ne pourront pas être remplacés l’un par l’autre.
Selon le contexte, le même mot aura alors des synonymes différents :
Exemples 1 :
- Elle a envoyé un colis à ses enfants. (impossible de remplacer envoyé par lancé)
- Ils lancèrent des cris. (impossible de remplacer lancèrent par envoyèrent)
Exemples 2 :
- Elle a envoyé un colis -> envoyé = expédier
- On a envoyé un expert -> envoyé = déléguer

II – Antonymie :
Les antonymes sont des mots de sens contraire.
Exemples : prêter ≠ emprunter / beau ≠ laid / ouvrir ≠ fermer
La langue dispose de plusieurs moyens pour exprimer l’idée de contraire :
- par dérivation, à l’aide de préfixes : relier ≠ délier ; reconstruire ≠ déconstruire ; légal ≠ illégal ; adroit ≠ maladroit.
- à l’aide de couples complémentaires ou réciproques qui s’expriment mutuellement : succès ≠ échec ; bien ≠ mal ; acheter ≠ vendre...

Les antonymes sont évidemment fonction du contexte dans lequel le mot est employé :
Exemple : Le contraire de frais peut ainsi être :
- tiède (un vent)
- fané (des fleurs)
- rassis, sec, dur (du pain)
- chaleureux (un accueil)
- fatigué (un cheval)
- rance (du beurre)
- avarié (du poisson)
- sec (des haricots)
- en conserve (des sardines)...`,
  sections: [
    {
      title: 'I - LA SYNONYMIE ET LE CONTEXTE',
      content: [
        `Mots de même nature grammaticale ayant un sens équivalent ou très voisin.`,
        `Nécessité du contexte : « envoyer un colis » = expédier ; « envoyer un expert » = déléguer. On ne peut pas dire « lancer un colis » ou « envoyer des cris ».'`
      ]
    },
    {
      title: 'II - L\'ANTONYMIE ET LE CONTEXTE',
      content: [
        `Mots de sens opposé.`,
        `Procédés : préfixes négatifs (dé-, in-, mal-) ou mots lexicaux distincts (beau/laid, monter/descendre).`,
        `Polysémie du contraire selon le contexte :`,
        `- Pain frais ≠ pain rassis`,
        `- Vent frais ≠ vent tiède`,
        `- Accueil frais ≠ accueil chaleureux`,
        `- Fleur fraîche ≠ fleur fanée`,
        `- Poisson frais ≠ poisson avarié`
      ]
    }
  ],
  diagram: {
    title: 'RELATIONS SÉMANTIQUES',
    root: 'LE SENS DES MOTS',
    branches: [
      {
        name: 'SYNONYMES',
        subtitle: 'Sens équivalent',
        items: ['Même nature grammaticale', 'Nuances d\'intensité', 'Dépend du contexte']
      },
      {
        name: 'ANTONYMES',
        subtitle: 'Sens contraire',
        items: ['Par préfixe (honnête / malhonnête)', 'Par racine différente (chaud / froid)', 'Contrainte contextuelle']
      }
    ]
  },
  conclusion: `Synonymes et antonymes enrichissent la langue et évitent les répétitions, mais leur pertinence dépend strictement du contexte d'énonciation.`
};

// ----------------------------------------------------------------------------
// LEÇON 17 : QUELQUES FIGURES DE STYLE
// ----------------------------------------------------------------------------
export const LESSON_17_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-17',
  number: 'LEÇON 17',
  title: 'QUELQUES FIGURES DE STYLE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Les figures de style permettent de détourner les mots de leur sens habituel pour créer des images fortes, émouvantes ou saisissantes (comparaison, métaphore, personnification, antithèse, périphrase, métonymie).`,
  fullText: `QUELQUES FIGURES DE STYLE

Les figures de style permettent de détourner les mots de leurs sens habituel. En voici quelques-unes parmi les plus utilisées :

1 - La comparaison :
Elle met en relation deux éléments, le comparé et le comparant, en établissant un élément qui leur est commun, à l'aide d'un outil de comparaison explicite (comme, ressembler à, tel que, ainsi que, aussi…que, etc.).
Exemple : Golo-le-Singe s’était comporté comme un vulgaire chacal. (Birago Diop)
Le mot de comparaison « comme » établit une ressemblance entre le comportement de Golo-le-Singe (le comparé) et celui du chacal (le comparant).

2 - La métaphore :
Comme la comparaison, elle met en relation deux éléments, le comparé et le comparant, mais cette fois-ci l’outil de comparaison disparaît.
Exemples :
- Cet homme s’est comporté comme un vrai lion. (comparaison)
- Cet homme est un vrai lion. (métaphore)
La comparaison devient directe du fait de la disparition de l’élément comparatif.

3 - La personnification :
Elle consiste à attribuer des comportements humains à des animaux, des éléments de la nature, des objets...
Exemple : « La maison de Nini est située au bord du Petit-Bras du fleuve à Saint-Louis du Sénégal. Elle fait partie d’un groupement de masures toutes vieilles, toutes lézardées, qui se tiennent, s’appuient les unes aux autres dans un suprême élan de solidarité. » (Abdoulaye Sadji, Nini, mulâtresse du Sénégal)
Les expressions « se tiennent », « s’appuient les unes aux autres », « élan de solidarité » donnent des caractères humains à ces vieilles maisons.

4 - L'antithèse :
Elle consiste à opposer deux mots, deux expressions ou deux notions tout à fait contraires pour faire ressentir un contraste saisissant.
Exemple : « Innocents dans un bagne, anges dans un enfer. » (Victor Hugo)
« Innocents » s’oppose à « bagne », « anges » s’oppose à « enfer ».

5 – La périphrase :
Elle consiste à remplacer un mot par sa définition ou par une expression plus longue mais équivalente :
Exemples :
- « Celui qui gouverne ce pays » = le président ou le roi
- « La capitale du Sénégal » = Dakar

6 – La métonymie :
Elle consiste à désigner un objet ou une idée par un autre terme qui lui est lié par un rapport logique de glissement de sens :
- Le tout et la partie : un toit pour une maison.
- L’objet et sa matière : un verre pour un récipient en verre.
- Le contenu et le contenant : boire un verre (pour boire le liquide contenu dans le verre).
- Le lieu et l’activité : aller au théâtre / nettoyer la cuisine.
- L’activité et l’instrument : faire du vélo, jouer aux cartes.
- La cause et l’effet : boire la mort (pour boire le poison).
- L’écrivain et son œuvre : lire un Senghor (lire l'œuvre de Léopold Sédar Senghor).`,
  sections: [
    {
      title: 'I - FIGURES D\'ANALOGIE',
      content: [
        `1. Comparaison : comparé + outil comparatif (comme, tel que, pareil à) + comparant (Golo s'était comporté comme un chacal - Birago Diop).`,
        `2. Métaphore : analogie directe sans outil de comparaison (Cet homme est un lion).`,
        `3. Personnification : attribue des traits ou sentiments humains à des objets ou des animaux (Les maisons s'appuient dans un élan de solidarité - Abdoulaye Sadji).`
      ]
    },
    {
      title: 'II - FIGURES D\'OPPOSITION ET DE SUBSTITUTION',
      content: [
        `4. Antithèse : rapprochement de contraires pour créer un contraste saisissant (Innocents dans un bagne, anges dans un enfer - Victor Hugo).`,
        `5. Périphrase : désigne une réalité par une expression développée (La capitale du Sénégal pour Dakar).`,
        `6. Métonymie : substitution par contiguïté logique (le contenant pour le contenu : boire un verre ; l'auteur pour l'œuvre : lire un Senghor ; la partie pour le tout : un toit pour une maison).`
      ]
    }
  ],
  diagram: {
    title: 'LES 6 FIGURES DE STYLE CLÉS',
    root: 'FIGURES DE STYLE',
    branches: [
      {
        name: 'ANALOGIE',
        subtitle: 'Ressemblance & Images',
        items: ['Comparaison (avec outil)', 'Métaphore (sans outil)', 'Personnification (traits humains)']
      },
      {
        name: 'OPPOSITION',
        subtitle: 'Contraste fort',
        items: ['Antithèse (opposition de deux termes dans une phrase)']
      },
      {
        name: 'SUBSTITUTION',
        subtitle: 'Remplacement logique',
        items: ['Périphrase (expression équivalente)', 'Métonymie (contenant/contenu, auteur/œuvre)']
      }
    ]
  },
  conclusion: `Les figures de style transforment la langue ordinaire en langage littéraire évocateur, captivant l'émotion et l'attention du lecteur.`
};

// ----------------------------------------------------------------------------
// LEÇON 18 : LES REGISTRES DE LANGUE
// ----------------------------------------------------------------------------
export const LESSON_18_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-18',
  number: 'LEÇON 18',
  title: 'LES REGISTRES DE LANGUE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Un registre de langue (ou niveau de langue) est un mode d’expression choisi en fonction du statut de l'interlocuteur et du contexte social : le registre familier, le registre courant et le registre soutenu.`,
  fullText: `LES REGISTRES DE LANGUE

Un registre de langue (on dit aussi niveau de langue) est un mode d’expression, une façon de parler choisie par celui qui s’exprime en fonction du statut de son interlocuteur ; il détermine, notamment, le choix de certains mots et une certaine forme de construction.
Il existe trois registres de langue : le registre familier, le registre courant et le registre soutenu.

I – Le registre familier :
Il se caractérise par un langage constitué de termes familiers, jugés parfois impolis, incorrects ou relâchés. Il comporte des libertés grammaticales (omission du « ne » de négation, abréviations, syntaxe approximative). Employé entre proches ou amis.
Exemple : « … suis insolent, incorrect comme barbe d’un bouc et parle comme un salopard. Je dis pas comme les nègres noirs africains indigènes bien cravatés : merde ! putain ! salaud ! » (Ahmadou Kourouma, Allah n’est pas obligé)

II - Le registre courant :
Le registre courant correspond à un langage correct, tant du point de vue lexical que syntaxique. Il utilise le vocabulaire usuel de tous les jours. C’est le style attendu dans les échanges scolaires, administratifs, journalistiques et professionnels.
Exemple : « … Chaque peuple a ses coutumes et traditions. L’homme qui renie celles de son peuple pour adopter celles d’un autre est un homme perdu. Nos parents qui ont eu le malheur d’avoir été à l’école du Toubab ne suivent plus les coutumes... » (Marouba Fall, Adja, militante du G.R.A.S)

III - Le registre soutenu :
C’est un niveau de langue caractérisé par une grande recherche dans le choix des mots et de la construction syntaxique. Utilisé dans la haute littérature, la diplomatie et les discours officiels : vocabulaire noble, inversion du sujet, subjonctif imparfait, phrases amples.
Exemple : Discours du roi Chaka à ses pairs :
« CHAKA. - Le gouvernement et le peuple zoulous vous témoignent leur estime et leur joie de vous recevoir à Om’ngoungoun en ce jour qui figurera dans les annales de notre histoire commune, parce que marquant l’avènement d’une ère nouvelle dans les rapports de nos peuples. C’est pour vous convier à l’unité dans la paix et la fraternité... que je vous ai appelés... La sagesse nous dicte l’entente mutuelle. » (Marouba Fall, Chaka ou le roi visionnaire)`,
  sections: [
    {
      title: 'I - LE REGISTRE FAMILIER',
      content: [
        `Utilisé entre proches, complices ou camarades.`,
        `Caractéristiques : vocabulaire argotique ou relâché, omission du « ne », phrases tronquées (ex : pote, bagnole, croulant ; Ahmadou Kourouma).`
      ]
    },
    {
      title: 'II - LE REGISTRE COURANT',
      content: [
        `Norme de communication standard, correcte et respectueuse des règles grammaticales.`,
        `Utilisé à l'école, avec les professeurs, dans la presse et le travail (ex : ami, voiture, personne âgée ; Marouba Fall).`
      ]
    },
    {
      title: 'III - LE REGISTRE SOUTENU',
      content: [
        `Langage soigné, raffiné et élégant.`,
        `Caractéristiques : vocabulaire rare, structures complexes, imparfait du subjonctif, inversion soutenue (ex : automobile, compagnon, vénérable vieillard ; discours de Chaka par Marouba Fall).`
      ]
    }
  ],
  diagram: {
    title: 'LES 3 REGISTRES DE LANGUE',
    root: 'NIVEAUX DE LANGUE',
    branches: [
      {
        name: 'FAMILIER',
        subtitle: 'Entre pairs & intimes',
        items: ['Vocabulaire relâché', 'Règles assouplies', 'Pote / bagnole']
      },
      {
        name: 'COURANT',
        subtitle: 'Norme sociale & scolaire',
        items: ['Grammaire correcte', 'Vocabulaire usuel', 'Camarade / voiture']
      },
      {
        name: 'SOUTENU',
        subtitle: 'Écrit & Discours d\'apparat',
        items: ['Vocabulaire noble & rare', 'Syntaxe élaborée', 'Compagnon / véhicule']
      }
    ]
  },
  conclusion: `Maîtriser les registres de langue permet d'adapter son expression à la situation de communication, du cercle intime aux discours d'apparat.`
};

// ----------------------------------------------------------------------------
// LEÇON 19 : TERME GÉNÉRIQUE ET TERME SPÉCIFIQUE
// ----------------------------------------------------------------------------
export const LESSON_19_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-19',
  number: 'LEÇON 19',
  title: 'TERME GÉNÉRIQUE ET TERME SPÉCIFIQUE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Un terme générique est un mot qui désigne un ensemble d'objets ou d'êtres vivants appartenant à une même catégorie (genre). Chaque élément particulier de cet ensemble est appelé terme spécifique.`,
  fullText: `TERME GENERIQUE ET TERME SPECIFIQUE

Un terme générique est un mot qui désigne un ensemble d'objets ou d'êtres vivants dont la particularité est qu’ils sont du même genre (générique désigne un genre). Chaque élément de cet ensemble de mots est appelé terme spécifique.

Exemple d'association générique / spécifique :
- Pour les termes spécifiques « aspirine » et « doliprane », le terme générique est « médicament ».
- Pour les termes spécifiques « rougeole », « otite », « épidémie », « paludisme », le terme générique est « maladie ».
- Pour les termes spécifiques « hôpital », « cabinet médical », « maternité », le terme générique est « lieu ».
- Pour les termes spécifiques « médecin », « chirurgien », « pharmacien », le terme générique est « personne ».

Tableau récapitulatif :
- Terme générique MALADIE : rougeole, otite, épidémie, paludisme...
- Terme générique MÉDICAMENT : aspirine, doliprane, antibiotique...
- Terme générique LIEU : hôpital, cabinet médical, maternité, clinique...
- Terme générique PERSONNE / MÉTIER : médecin, chirurgien, pharmacien, infirmier...`,
  sections: [
    {
      title: 'I - DÉFINITIONS',
      content: [
        `Terme générique (hyperonyme) : mot de sens général qui englobe une catégorie entière.`,
        `Terme spécifique (hyponyme) : mot précis qui désigne un élément particulier appartenant à cette catégorie.`
      ]
    },
    {
      title: 'II - TABLEAU D\'APPLICATION',
      content: [
        `Exemples d'organisation lexicale :`
      ],
      table: {
        headers: ['Terme Générique', 'Termes Spécifiques Associés'],
        rows: [
          ['Médicament', 'Doliprane, aspirine, sirop, antibiotique'],
          ['Maladie', 'Rougeole, otite, épidémie, paludisme'],
          ['Lieu médical', 'Hôpital, cabinet médical, maternité'],
          ['Professionnel de santé', 'Médecin, chirurgien, pharmacien']
        ]
      }
    }
  ],
  diagram: {
    title: 'HIÉRARCHIE DU VOCABULAIRE',
    root: 'ORGANISATION LEXICALE',
    branches: [
      {
        name: 'TERME GÉNÉRIQUE',
        subtitle: 'Sens global (Genre)',
        items: ['Maladie', 'Médicament', 'Animal', 'Outil']
      },
      {
        name: 'TERMES SPÉCIFIQUES',
        subtitle: 'Éléments particuliers (Espèces)',
        items: ['Paludisme, rougeole', 'Aspirine, doliprane', 'Lion, girafe', 'Marteau, tournevis']
      }
    ]
  },
  conclusion: `L'alternance entre termes génériques et termes spécifiques permet de classer les idées, de préciser la pensée et d'éviter les répétitions par des reprises anaphoriques efficaces.`
};

// ----------------------------------------------------------------------------
// LEÇON 20 : LES JOURNAUX : PÉRIODICITÉ, FORMAT, TYPES D'INFORMATIONS ET DISTRIBUTION
// ----------------------------------------------------------------------------
export const LESSON_20_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-20',
  number: 'LEÇON 20',
  title: 'LES JOURNAUX : PÉRIODICITÉ, FORMAT, TYPE D’INFORMATIONS, DISTRIBUTION',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Une publication périodique est un titre de presse qui paraît régulièrement. On distingue les périodiques selon leur fréquence de parution, leur format matériel, leur ligne éditoriale et leurs modes de distribution.`,
  fullText: `LES JOURNAUX : periodicite – format – type d’informations - distribution

1 - La périodicité des journaux :
Une publication périodique est un titre de presse qui paraît régulièrement.
Les termes précis selon le rythme de publication :
- un quotidien (ou journal) paraît tous les jours ou presque tous les jours ;
- un bihebdomadaire paraît deux fois par semaine ;
- un hebdomadaire paraît toutes les semaines ;
- un bimensuel paraît deux fois par mois ;
- un mensuel paraît tous les mois ;
- un bimestriel paraît tous les deux mois ;
- un trimestriel paraît tous les trois mois ;
- un semestriel paraît tous les six mois ;
- un annuel paraît tous les ans ;
- un biennal ou bisannuel paraît tous les deux ans.

2 – Le format des journaux :
a - Le journal :
Publication souvent quotidienne qui donne des informations politiques, scientifiques, artistiques, sportives, des faits divers.
Exemples au Sénégal : « Le Soleil », « Sud Quotidien », « L’Observateur »...
b - Le magazine :
Publication périodique illustrée, traitant le plus souvent dans un but de vulgarisation de sujets divers ou d'un domaine précis.
Exemples : « Jeune Afrique », « Lifa », « Icône », « Nouvel Horizon »...
c – La revue :
Publication périodique où l'on traite avec une certaine ampleur des questions variées, politiques, littéraires, scientifiques, et où l'on insère des textes littéraires et des études approfondies.
Exemples : « La Revue des Deux Mondes », « La Revue historique », « La Revue médicale »...

3 – Les types d’informations :
- Informations d’ordre général : politique, sport, économie, société (Le Soleil, Sud Quotidien, L'Observateur).
- Satirique : s’attaque aux mœurs publiques ou privées en tournant en ridicule par l'écrit ou le dessin (Charlie Hebdo, Le Canard enchaîné, Le Cafard Libéré).
- Spécialisé : dédié à un domaine précis comme le sport (« Sunu Lamb » pour la lutte, « L’Équipe » pour le sport).
- Presse populaire / people / à scandale : vie privée des célébrités, photos chocs, textes brefs (« Dakar Soir », « Le Tract », « Mœurs »...).

4 - Les canaux de distribution :
Gratuitement, points de vente publics (kiosques), abonnements postaux ou directement en ligne sur Internet.`,
  sections: [
    {
      title: 'I - LA PÉRIODICITÉ DE LA PRESSE',
      content: [
        `Quotidien (tous les jours), Bihebdomadaire (2 fois/semaine), Hebdomadaire (chaque semaine), Bimensuel (2 fois/mois), Mensuel (chaque mois), Bimestriel (tous les 2 mois), Trimestriel (tous les 3 mois), Semestriel (tous les 6 mois), Annuel (chaque an).' `
      ]
    },
    {
      title: 'II - FORMATS ET SUPPORTS',
      content: [
        `Journal : format grand papier ou tabloïd, centré sur l'actualité immédiate (Le Soleil, Sud Quotidien).`,
        `Magazine : reliure brochée, photos couleur, dossiers thématiques et reportages (Jeune Afrique).`,
        `Revue : études spécialisées de fond, littérature, sciences (Revue des Deux Mondes).`
      ]
    },
    {
      title: 'III - TYPES D\'INFORMATIONS ET DISTRIBUTION',
      content: [
        `Presse d'information générale, presse satirique (caricatures et critique des mœurs), presse spécialisée (sport, lutte avec Sunu Lamb), presse people.`,
        `Canaux : kiosques, abonnements et éditions numériques en ligne.`
      ]
    }
  ],
  diagram: {
    title: 'LA PRESSE ET LES MÉDIAS ÉCRITS',
    root: 'LE PÉRIODIQUE',
    branches: [
      {
        name: 'PÉRIODICITÉ',
        subtitle: 'Rythme de parution',
        items: ['Quotidien (1 jour)', 'Hebdomadaire (1 semaine)', 'Mensuel (1 mois)', 'Trimestriel (3 mois)']
      },
      {
        name: 'FORMATS',
        subtitle: 'Supports',
        items: ['Journal (actualité)', 'Magazine (illustrations & dossiers)', 'Revue (articles de fond)']
      },
      {
        name: 'LIGNES ÉDITORIALES',
        subtitle: 'Contenu',
        items: ['Généraliste', 'Satirique & Caricature', 'Spécialisé (Sport/Lutte)', 'Presse en ligne']
      }
    ]
  },
  conclusion: `Le monde de la presse écrite se caractérise par une grande diversité de rythmes de parution, de formats de diffusion et de lignes d'information au service des citoyens.`
};

// ----------------------------------------------------------------------------
// LEÇON 21 : VERBES DE PAROLE ET MARQUES DE POLITESSE
// ----------------------------------------------------------------------------
export const LESSON_21_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-21',
  number: 'LEÇON 21',
  title: 'VERBES DE PAROLE ET MARQUES DE POLITESSE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Dans les dialogues et les correspondances écrites, le choix des verbes de parole et des formules de politesse indique le statut des interlocuteurs, leur humeur et le respect mutuel accordé.`,
  fullText: `VERBES DE PAROLES ET MARQUES DE POLITESSE

I - Les verbes de parole :
Les verbes de parole sont tous les verbes que l’on retrouve dans les dialogues pour indiquer qui parle ainsi que de quelle manière.
Exemple :
« Iras-tu à la plage ce soir ? » demanda Moussa à Ibrahima.
- Non, répondit celui-ci, j’ai des exercices à faire.

1 - La position des verbes de parole dans la phrase :
- Après les paroles : « Mais, qu’est-ce que tu fais là ? » s’étonna-t-il. (construction la plus fréquente dans les dialogues).
- Au milieu des paroles : « Mais, chuchota-t-il, qu’est-ce que tu fais là ? »
- Avant les paroles : Il lui dit : « Mais, qu'est-ce que tu fais là ? »

2 – Le sens des verbes de parole :
Ils donnent du relief au récit en révélant le caractère et l'émotion du personnage :
Exemple neutre :
« Bonjour, belle journée n’est-ce pas ? », dit Ousseynou.
- Oui, vraiment un temps pour se balader, répondit Jacques.
- Bon et bien au revoir », reprit Ousseynou.
Exemple expressif :
« Bonjour, s'exclama Ousseynou, belle journée n’est-ce pas ?
- Oui, vraiment un temps pour se balader, grommela Jacques, l’air songeur.
- Bon, eh bien au revoir !, se désola Ousseynou ».

Classification des verbes de parole :
- Colère et polémique : crier, s’exclamer, menacer, insister, couper, maudire, hurler, s’égosiller, interrompre, accuser, protester, s’emporter, brailler, vociférer, injurier, siffler, pester...
- Discours triste ou implorant : implorer, bredouiller, supplier, geindre, gémir, sangloter, se lamenter, hoqueter...
- Discours vif et joyeux : s’exclamer, dire, conseiller, s’esclaffer, affirmer, répondre, déclarer...

II - Les marques de politesse :
Les formules de politesse ferment les correspondances écrites et permettent de mesurer l’importance du destinataire du message et le respect qu’on lui accorde.
1. Formules de politesse classiques (courriers officiels et administratifs) :
- « Veuillez agréer l’expression de ma considération distinguée. »
- « Je vous prie de recevoir l’assurance de ma considération. »
- « Je vous prie d’agréer mes sincères salutations. »
- « Veuillez accepter mes sincères salutations. »

2. Formules de politesse modernes et conviviales :
- « Cordialement », « Cordialement vôtre », « Bien cordialement »
- « Sincèrement », « Bien sincèrement », « Sincèrement vôtre »
- « Sincères salutations »
- « Amicalement », « Mes amitiés ».`,
  sections: [
    {
      title: 'I - LES VERBES DE PAROLE DANS LE DIALOGUE',
      content: [
        `Positions : incise (au milieu ou après avec inversion du sujet) ou introducteur (avant avec deux-points).`,
        `Rôle : ils précisent l'intensité vocale, l'état psychologique et l'attitude des personnages (exclamer, grommeler, supplier, rétorquer).`
      ]
    },
    {
      title: 'II - RÉPERTOIRE PAR ÉMOTION ET TON',
      content: [
        `Colère : vociférer, s'emporter, pester, hurler.`,
        `Tristesse / supplication : sangloter, gémir, implorer, geindre.`,
        `Joie / gaieté : s'esclaffer, jubiler, s'exclamer.`
      ]
    },
    {
      title: 'III - FORMULES DE POLITESSE DANS LA CORRESPONDANCE',
      content: [
        `Lettres officielles : « Veuillez agréer, Monsieur le Directeur, l'expression de ma considération distinguée ».`,
        `Courriers cordiaux : « Bien cordialement », « Sincères salutations », « Amicalement ».'`
      ]
    }
  ],
  diagram: {
    title: 'COMMUNICATION & POLITESSE',
    root: 'DIALOGUE & LETTRES',
    branches: [
      {
        name: 'VERBES INTRODUCTEURS',
        subtitle: 'Nuances du dialogue',
        items: ['Ton (chuchoter, vociférer)', 'Émotion (s\'indigner, supplier)', 'Répartie (rétorquer, riposter)']
      },
      {
        name: 'FORMULES DE POLITESSE',
        subtitle: 'Fin de lettre',
        items: ['Officielles (considération distinguée)', 'Conviviales (cordialement, amitiés)']
      }
    ]
  },
  conclusion: `Le choix précis des verbes de parole et des marques de politesse donne corps aux personnages de roman et assure la convenance sociale dans les correspondances écrites.`
};
