import { LessonContent } from './courses';

// -------------------------------------------------------------
// LEÇON 14 (5ÈME) : LA FAMILLE DE MOTS
// -------------------------------------------------------------
export const LESSON_14_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-14-francais-5eme',
  number: 'LEÇON 14 (5ÈME)',
  title: 'LA FAMILLE DE MOTS',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Une famille de mots est l'ensemble des mots formés sur un même radical. Les mots d'une même famille partagent un noyau de sens commun, même si la forme du radical peut parfois subir des variations historiques.`,
  fullText: `LA FAMILLE DE MOTS

I. DÉFINITION :
Une famille de mots est l'ensemble des mots formés sur un même radical.
Exemples réguliers :
- Les mots « marchandise », « marchander », « marchandage » appartiennent à la même famille car ils sont formés à partir du radical « marchand ».
- Les mots « journalier », « journée », « ajourner » appartiennent à la même famille car ils sont formés à partir du radical « jour ».

II. LES VARIATIONS DU RADICAL :
Le radical ne se présente pas toujours sous la même forme d'un mot à l'autre d'une même famille :
- « dominical » appartient à la famille de « dimanche ».
- « estival » appartient à la famille de « été ».
- « père », « paternel », « patriarcat » appartiennent à la même famille.
- « rupture », « interruption » appartiennent à la même famille que « rompre », « interrompre ».

EXERCICES OFFICIELS :
• Exercice 1 : Reconstitue les deux familles de mots : Bois – bondir – boisé – bond – rebond – reboiser – déboiser – rebondir – bosquet – rebondissement – reboisement.
• Exercice 2 : Compose la famille des mots : 1. Marchand 2. Honorer 3. Entraîner 4. Jouer 5. Fin 6. Habit 7. Narrer 8. Compagne 9. Aimer 10. Responsable.
• Exercice 4 : Classe en deux colonnes (famille de Terre vs famille de Terreur) : Terrien, terroriser, terrorisme, terreux, terrible, enterrer, terrifier, atterrir, terreur, terrasser, terrestre, terriblement.`,
  sections: [
    {
      title: 'I. Définition et constitution',
      content: [
        'Une famille de mots regroupe tous les termes construits à partir d\'une base sémantique commune (radical).',
        'Exemple : terre -> terrain, terrier, déterrer, atterrir, terrestre.'
      ]
    },
    {
      title: 'II. Les alternances et variations de radicaux',
      content: [
        'Certains radicaux changent de graphie d\'origine latine ou grecque : mer / maritime ; œil / oculaire ; sang / sanguin ; été / estival ; siècle / séculaire.'
      ]
    }
  ],
  diagram: {
    title: 'Structure d\'une famille de mots',
    root: 'Famille de mots',
    branches: [
      {
        name: 'Radical régulier',
        subtitle: 'Base identique',
        items: ['marchand -> marchander, marchandise', 'jour -> journée, ajourner']
      },
      {
        name: 'Radical variable',
        subtitle: 'Alternance étymologique',
        items: ['mer -> marin, maritime', 'dimanche -> dominical', 'rompre -> rupture']
      }
    ]
  },
  conclusion: `L'identification du radical commun enrichit le vocabulaire et facilite l'orthographe lexicale.`
};

// -------------------------------------------------------------
// LEÇON 15 (5ÈME) : LA DÉRIVATION ET LA COMPOSITION
// -------------------------------------------------------------
export const LESSON_15_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-15-francais-5eme',
  number: 'LEÇON 15 (5ÈME)',
  title: 'LA FORMATION DES MOTS : DÉRIVATION ET COMPOSITION',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `À partir de formes simples (mots de base), la langue française crée des mots nouveaux soit par dérivation (ajout de préfixes ou de suffixes au radical), soit par composition (association de mots existants).`,
  fullText: `LA DÉRIVATION ET LA COMPOSITION

I. LA DÉRIVATION :
La dérivation consiste à former un mot nouveau à partir d'un radical par addition d'un préfixe, d'un suffixe ou des deux à la fois.

1. Le radical : élément de base portant le sens fondamental (ex : pardon -> pardonner, impardonnable).
2. Le préfixe : placé devant le radical, il en modifie le sens sans changer la classe grammaticale :
- venir (verbe) -> survenir (verbe).
- charge (nom) -> décharge (nom).
- re- (répétition : refaire), in-/im- (négation : impur, intolérable), pré- (antériorité : prévoir).
3. Le suffixe : placé après le radical, il peut changer la classe grammaticale du mot :
- force (nom) -> forcer (verbe), forcé (adjectif), forcément (adverbe).
- boulanger -> boulangerie (-erie = lieu/activité).
- école -> écolier (-ier = agent/personne).

II. LA COMPOSITION :
Création d'un mot nouveau par réunion de deux ou plusieurs mots autonomes :
- Nom + nom : oiseau-mouche, timbre-poste.
- Verbe + nom : tire-bouchon, gratte-ciel.
- Adjectif + nom : coffre-fort, basse-cour.
- Préposition/Adverbe + nom : sous-sol, avant-centre, bienheureux.`,
  sections: [
    {
      title: 'I. Les mécanismes de la dérivation',
      content: [
        'Préfixe : antéposé, modifie le sens sans changer la classe grammaticale (faire -> refaire, possible -> impossible).',
        'Suffixe : postposé, modifie souvent la classe grammaticale (nation [nom] -> national [adj] -> nationaliser [verbe]).'
      ]
    },
    {
      title: 'II. Les procédés de composition',
      content: [
        'Mots composés soudés (portefeuille, bonhomme) ou reliés par trait d\'union (porte-monnaie, demi-lune, lave-vaisselle).'
      ]
    }
  ],
  diagram: {
    title: 'Formation lexicale',
    root: 'Formation des mots',
    branches: [
      {
        name: 'Dérivation',
        subtitle: 'Affixes',
        items: ['Préfixe + Radical (in-variable)', 'Radical + Suffixe (lent-ement)', 'Parasynthétique (dérèglement)']
      },
      {
        name: 'Composition',
        subtitle: 'Association de mots',
        items: ['Nom + Nom (chou-fleur)', 'Verbe + Nom (couvre-lit)', 'Préposition + Nom (sous-sol)']
      }
    ]
  },
  conclusion: `La dérivation et la composition sont les deux moteurs essentiels de création lexicale en français.`
};

// -------------------------------------------------------------
// LEÇON 16 (5ÈME) : SENS PROPRE ET SENS FIGURÉ
// -------------------------------------------------------------
export const LESSON_16_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-16-francais-5eme',
  number: 'LEÇON 16 (5ÈME)',
  title: 'LA VALEUR D’EMPLOI DES MOTS : SENS PROPRE ET SENS FIGURÉ',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `En fonction du contexte, un mot peut être employé dans son sens premier, concret et usuel (sens propre) ou dans un sens second, métaphorique et imagé (sens figuré).`,
  fullText: `LA VALEUR D’EMPLOI DES MOTS : SENS PROPRE ET SENS FIGURÉ

I. LE SENS PROPRE DU MOT :
On dit d'un mot qu'il est employé au sens propre lorsqu'il est utilisé dans son sens premier, le plus simple, le plus concret et le plus courant.
Exemple : « Dans plusieurs contes africains, le lion est considéré comme le roi des animaux. »
-> Ici, « lion » désigne au sens propre le grand félin sauvage de la savane.

II. LE SENS FIGURÉ DU MOT :
Un mot a un sens figuré lorsqu'il prend une signification secondaire qui le détourne de son sens premier pour créer une image.
Exemple : « Les Lions du Sénégal ont été les finalistes de la Coupe d'Afrique des Nations. »
-> Ici, « Lions » est employé au sens figuré pour désigner les vaillants joueurs de football de l'équipe nationale.

EXERCICES DU LIVRE :
• Distinguer sens propre et figuré :
1. Un temps froid (sens propre) / Un caractère froid (sens figuré).
2. Une tarte brûlée (sens propre) / Une tête brûlée (sens figuré).
3. Une bouteille vide (sens propre) / Un esprit vide (sens figuré).
4. Une soupe toute chaude (sens propre) / Une nouvelle toute chaude (sens figuré).
5. Un trou profond (sens propre) / Un sentiment profond (sens figuré).`,
  sections: [
    {
      title: 'I. Le sens propre : référence concrète première',
      content: [
        'Le sens propre est la signification fondamentale enregistrée en premier dans le dictionnaire.',
        'Exemples : dévorer une pomme, avoir mal au cœur, verser des larmes.'
      ]
    },
    {
      title: 'II. Le sens figuré : image et analogie',
      content: [
        'Le sens figuré naît d\'une comparaison implicite ou d\'un transfert d\'un domaine concret vers un domaine abstrait.',
        'Exemples : dévorer un livre (lire avec passion), avoir un cœur d\'or (être généreux).'
      ]
    }
  ],
  diagram: {
    title: 'Dualité sémantique des mots',
    root: 'Sens des mots',
    branches: [
      {
        name: 'Sens Propre',
        subtitle: 'Concret et premier',
        items: ['Sens littéral', 'Réalité matérielle', 'Ex : Le lion dans la savane']
      },
      {
        name: 'Sens Figuré',
        subtitle: 'Imagé et second',
        items: ['Sens métaphorique', 'Domaine abstrait', 'Ex : Les Lions de la Téranga']
      }
    ]
  },
  conclusion: `Le sens figuré permet de donner du relief, de la poésie et de l'expressivité aux écrits.`
};

// -------------------------------------------------------------
// LEÇON 17 (5ÈME) : LES REGISTRES DE LANGUE
// -------------------------------------------------------------
export const LESSON_17_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-17-francais-5eme',
  number: 'LEÇON 17 (5ÈME)',
  title: 'LES REGISTRES DE LANGUE : FAMILIER, COURANT ET SOUTENU',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Les registres (ou niveaux) de langue sont des manières différentes de s'exprimer, adaptées à la situation de communication, au destinataire et au contexte social.`,
  fullText: `LES REGISTRES DE LANGUE

I. LE LANGAGE SOUTENU :
Manifeste un grand respect et une recherche stylistique. Employé dans la haute administration, les discours officiels, les écrits littéraires :
- Syntaxe soignée, inversion du sujet, subjonctif imparfait, vocabulaire noble.
Exemples : « Je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées », « une personne âgée », « un précepteur », « converser », « s'égarer ».

II. LE LANGAGE COURANT :
Le plus utilisé au quotidien, compris de tous (à l'école, en famille, dans les médias) :
- Respect des règles de grammaire standard, vocabulaire usuel neutre.
Exemples : « Bonjour papa ! Tu vas au travail ? », « un camarade », « parler », « se perdre », « écrire ».

III. LE LANGAGE FAMILIER :
Langue de la détente entre amis, avec relâchement des règles grammaticales et emploi d'argot :
- Omission de la négation « ne », abréviations, syntaxe simplifiée.
Exemples : « un pote / un frangin », « un tacot / une bagnole », « se paumer », « se gourer », « bouffer ».

TABLEAU DE CORRESPONDANCES OFFICIEL :
- Familier : se paumer / Courant : se perdre / Soutenu : s'égarer
- Familier : gueuler / Courant : crier, parler fort / Soutenu : vociférer
- Familier : se foutre de / Courant : se moquer de / Soutenu : railler
- Familier : pondre / Courant : écrire / Soutenu : rédiger
- Familier : super / Courant : très bien / Soutenu : remarquable, exceptionnel
- Familier : décamper / Courant : fuir / Soutenu : s'éclipser, s'enfuir`,
  sections: [
    {
      title: 'I. Caractéristiques des trois registres',
      content: [
        'Registre familier : utilisé entre intimes, syntaxe relâchée, vocabulaire familier (bagnole, pote).',
        'Registre courant : standard, correct et compris de tous (voiture, ami).',
        'Registre soutenu : raffiné, vocabulaire recherché et syntaxe complexe (automobile, compagnon).'
      ]
    }
  ],
  diagram: {
    title: 'Les 3 registres de langue',
    root: 'Niveaux de langue',
    branches: [
      {
        name: 'Soutenu',
        subtitle: 'Prestige & Écrit',
        items: ['Vocabulaire précieux', 'Syntaxe parfaite', 'Ex : S\'égarer, rédiger']
      },
      {
        name: 'Courant',
        subtitle: 'Standard',
        items: ['Correct et neutre', 'Communication générale', 'Ex : Se perdre, écrire']
      },
      {
        name: 'Familier',
        subtitle: 'Oral & Intimité',
        items: ['Mots relâchés', 'Élisions orales', 'Ex : Se paumer, pondre']
      }
    ]
  },
  conclusion: `Savoir adapter son registre à son interlocuteur est la marque essentielle de la maîtrise linguistique.`
};

// -------------------------------------------------------------
// LEÇON 18 (5ÈME) : QUELQUES FIGURES DE STYLE
// -------------------------------------------------------------
export const LESSON_18_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-18-francais-5eme',
  number: 'LEÇON 18 (5ÈME)',
  title: 'QUELQUES FIGURES DE STYLE',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Les figures de style sont des procédés d'expression qui modifient le sens ordinaire des mots pour frapper l'imagination, susciter l'émotion ou rendre une idée plus frappante.`,
  fullText: `QUELQUES FIGURES DE STYLE

I. LA PROSOPOPÉE :
Figure qui consiste à faire parler une personne morte ou absente, un animal, un objet inanimé ou une idée abstraite personnifiée.
Exemple tiré d'un conte de Birago Diop :
« Voilà pourquoi le jour où il partit en voyage avec Deug-la-Vérité, Fène-le-Mensonge dit à sa compagne de route :
- C'est toi que Dieu aime, c'est toi que les gens préfèrent sans doute, c'est donc à toi de parler... »
-> Ici, le Mensonge (notion abstraite) prend la parole comme un être humain.

II. LA PERSONNIFICATION :
Figure qui attribue des sentiments, des intentions ou des comportements humains à un animal, un objet ou un phénomène naturel.
Exemple : « Les souffles du vent lui fouettaient le dos. »
-> L'action humaine de « fouetter » est attribuée au vent.

III. LA COMPARAISON :
Elle rapproche deux éléments (le comparé et le comparant) ayant un point commun, au moyen d'un outil grammatical de comparaison (comme, tel, pareil à, semblable à, ainsi que...).
Exemple : « Moussa est pareil à un lion. » (Comparé = Moussa, outil = pareil à, comparant = un lion).

IV. LA MÉTAPHORE :
C'est une comparaison directe sous-entendue, sans outil de comparaison. Le rapprochement se fait directement dans l'esprit du lecteur.
Exemples :
- « Moussa est un lion. »
- « Le monde est un village planétaire. »
- « Ce lutteur est un ouragan qui ravage tout. »`,
  sections: [
    {
      title: 'I. Comparaison et Métaphore',
      content: [
        'Comparaison : met en relation le comparé et le comparant avec un mot-outil (comme, tel que, pareil à).',
        'Métaphore : assimilation directe sans outil de comparaison (« Cet homme est un roc »).'
      ]
    },
    {
      title: 'II. Personnification et Prosopopée',
      content: [
        'Personnification : attribue des traits ou comportements humains à des choses inanimées (« La forêt gémit »).',
        'Prosopopée : donne directement la parole à un absent, un défunt ou une allégorie (« La Mort parla et dit... »).'
      ]
    }
  ],
  diagram: {
    title: 'Figures de style d\'analogie',
    root: 'Figures de style',
    branches: [
      {
        name: 'Comparaison',
        subtitle: 'Avec outil',
        items: ['Comparé + Outil (comme) + Comparant', 'Ex : Fort comme un baobab']
      },
      {
        name: 'Métaphore',
        subtitle: 'Sans outil',
        items: ['Assimilation directe', 'Ex : Moussa est un lion']
      },
      {
        name: 'Personnification / Prosopopée',
        subtitle: 'Attributs humains',
        items: ['Personnification : actes humains', 'Prosopopée : discours prêté']
      }
    ]
  },
  conclusion: `Ces figures enrichissent la puissance évocatrice des descriptions et des récits littéraires.`
};
