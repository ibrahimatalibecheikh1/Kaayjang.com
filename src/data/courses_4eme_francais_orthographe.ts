import { LessonContent } from './courses';

// ============================================================================
// PARTIE 4 : ORTHOGRAPHE (LEÇONS 29 À 34) - FRANÇAIS 4ÈME
// Fascicule officiel - Programme de Français
// ============================================================================

// ----------------------------------------------------------------------------
// LEÇON 29 : RADICAL – PRÉFIXE – SUFFIXE
// ----------------------------------------------------------------------------
export const LESSON_29_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-29',
  number: 'LEÇON 29',
  title: 'RADICAL – PRÉFIXE – SUFFIXE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `En orthographe lexicale, la connaissance du radical et des règles d'accolement des préfixes et suffixes permet de déduire le sens et l'écriture exacte de milliers de mots dérivés en évitant les erreurs de redoublement de consonnes.`,
  fullText: `RADICAL – PREFIXE - SUFFIXE

I - Le radical :
Le radical est la partie invariable du mot qui porte le sens fondamental.
Exemples : chant (radical) -> chanteur, chanter, chantable, enchantement.
Attention aux variations du radical selon l’origine latine :
- fleur -> floral
- doigt -> digital
- œil -> oculaire
- mer -> maritime

II - Les préfixes :
Le préfixe se place avant le radical et modifie son sens sans changer sa classe grammaticale :
1. Préfixes de négation ou de privation :
- in- (impossible, intolérable, illisible devant l, irresponsable devant r, immoral devant m, b, p).
- dé-, dés- (défaire, désaccord).
- a-, an- (anormal, analphabète).
- mé-, més- (médire, mésaventure).

2. Préfixes d'espace et de temps :
- pré- : avant (préhistoire, préavis).
- post- : après (postface, posthume).
- sous-, sub- : sous (sous-titre, subalterne).
- sur-, super- : au-dessus (surmonter, surdoué).
- trans- : à travers (transsaharien, transporter).
- inter- : entre (international, interclasse).

3. Préfixes de répétition ou d'intensité :
- re-, ré-, r- : répétition (refaire, rouvrir).
- hyper-, super-, archi- : excès (hyperactif, archiconnu).

III - Les suffixes :
Le suffixe se place après le radical. Contrairement au préfixe, il change souvent la classe grammaticale du mot :
- Verbe -> Nom : laver -> lavage (-age) ; former -> formation (-tion) ; bâtir -> bâtiment (-ment).
- Nom -> Adjectif : musique -> musical (-al) ; courage -> courageux (-eux).
- Adjectif -> Nom : doux -> douceur (-eur) ; pur -> pureté (-té).
- Adjectif -> Adverbe : rapide -> rapidement (-ment).

Attention aux règles d'orthographe :
- Suffixes en -able / -ible : navigable, lisible.
- Suffixes de diminution : -ette (fillette), -eau (lionceau), -in (poussin).`,
  sections: [
    {
      title: 'I - LE RADICAL ET SES FORMES',
      content: [
        `Partie fixe du mot portant l'idée principale.`,
        `Évolutions étymologiques : œil -> oculaire ; mer -> maritime ; bouche -> buccal.`
      ]
    },
    {
      title: 'II - ORTHOGRAPHE DES PRÉFIXES',
      content: [
        `Privation / contraire : in- devient im- devant m, b, p (imbuvable) ; il- devant l (illisible) ; ir- devant r (irréel).`,
        `Temps et lieu : pré- (avant), post- (après), sub- (sous), inter- (entre), trans- (à travers).`,
        `Répétition : re-, ré- (redire, réformer).`
      ]
    },
    {
      title: 'III - RÔLE ORTHOGRAPHIQUE DES SUFFIXES',
      content: [
        `Changement de catégorie grammaticale : -ment, -tion, -age (noms d'action) ; -able, -ible (adjectifs de possibilité) ; -eux, -al (adjectifs qualificatifs) ; -ment (adverbes de manière).' `
      ]
    }
  ],
  diagram: {
    title: 'STRUCTURE DU MOT DÉRIVÉ',
    root: 'MORPHOLOGIE',
    branches: [
      {
        name: 'PRÉFIXE (AVANT)',
        subtitle: 'Nuance le sens',
        items: ['Privation (in-, dé-)', 'Lieu/Temps (pré-, sub-)', 'Répétition (re-)']
      },
      {
        name: 'RADICAL (CENTRE)',
        subtitle: 'Sens racine',
        items: ['Porteur du sens principal']
      },
      {
        name: 'SUFFIXE (APRÈS)',
        subtitle: 'Change la nature',
        items: ['Nom d\'action (-age, -tion)', 'Adjectif (-able, -eux)', 'Adverbe (-ment)']
      }
    ]
  },
  conclusion: `L'analyse du radical, des préfixes et des suffixes garantit une orthographe lexicale sûre et permet de comprendre instantanément les néologismes dérivés.`
};

// ----------------------------------------------------------------------------
// LEÇON 30 : LES HOMONYMES
// ----------------------------------------------------------------------------
export const LESSON_30_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-30',
  number: 'LEÇON 30',
  title: 'LES HOMONYMES',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Les homonymes sont des mots qui se prononcent de la même façon (homophones) ou qui s'écrivent de la même façon (homographes) mais qui ont des sens totalement différents. Leur orthographe correcte repose sur des tests de substitution syntaxique.`,
  fullText: `LES HOMONYMES

Les homonymes sont des mots qui se prononcent de la même façon mais qui ont un sens différent. Pour ne pas les confondre lors de la dictée ou de la rédaction, on utilise des techniques de substitution :

1 - à / a / as :
- « a » (sans accent) est le verbe avoir conjugué au présent (3e pers. sg). On peut le remplacer par « avait ».
  * Exemple : Il a faim -> Il avait faim.
- « as » est le verbe avoir à la 2e pers. sg (tu avais).
- « à » (avec accent grave) est une préposition invariable. On ne peut pas le remplacer par « avait ».
  * Exemple : Il va à l'école (impossible de dire « il va avait l'école »).

2 - on / ont :
- « ont » est le verbe avoir à la 3e pers. pl du présent. Remplaçable par « avaient ».
  * Exemple : Les élèves ont de bons résultats -> Les élèves avaient de bons résultats.
- « on » est un pronom personnel indéfini sujet (3e pers. sg). Remplaçable par « il » ou « elle ».
  * Exemple : On frappe à la porte -> Il frappe à la porte.

3 - et / est / es / ai / aie / aies / ait / aient :
- « et » est une conjonction de coordination qui relie deux éléments. Remplaçable par « et puis ».
  * Exemple : Paul et Marie -> Paul et puis Marie.
- « est » est le verbe être au présent (3e pers. sg). Remplaçable par « était ».
  * Exemple : Il est sage -> Il était sage.
- « es » est le verbe être au présent (2e pers. sg : tu étais).
- « ai » est le verbe avoir au présent (1re pers. sg : j'avais).
- « aie / aies / ait / aient » sont des formes du subjonctif ou de l'impératif du verbe avoir.

4 - son / sont :
- « sont » est le verbe être au présent (3e pers. pl). Remplaçable par « étaient ».
  * Exemple : Ils sont absents -> Ils étaient absents.
- « son » est un adjectif possessif (3e pers. sg). Remplaçable par « mon » ou « ton ».
  * Exemple : Il range son sac -> Il range mon sac.

5 - leur / leurs :
- « leur » placé devant un verbe est un pronom personnel complément (invariable, jamais de « s » !). Remplaçable par « lui ».
  * Exemple : Je leur donne des cahiers -> Je lui donne des cahiers.
- « leur / leurs » placé devant un nom est un adjectif possessif. Il s'accorde avec le nom :
  * Exemple : Ils aiment leur père / Ils rangent leurs affaires.

6 - quand / quant / qu'en :
- « quand » exprime le temps (remplaçable par « lorsque ») ou l'interrogation.
  * Exemple : Quand viendras-tu ? / Il est parti quand la pluie a commencé.
- « quant » est toujours suivi de « à », « au » ou « aux » (signifie « pour ce qui concerne »).
  * Exemple : Quant à moi, je reste ici.
- « qu'en » est la contraction de que + en (remplaçable par « que de cela »).
  * Exemple : Il n'en fait qu'à sa tête / Qu'en penses-tu ?

7 - c'est / s'est :
- « s'est » fait partie d'un verbe pronominal (remplaçable par « je me suis » ou « tu t'es »).
  * Exemple : Il s'est blessé -> Je me suis blessé.
- « c'est » est composé du pronom démonstratif « c' » et du verbe être (remplaçable par « cela est »).
  * Exemple : C'est magnifique -> Cela est magnifique.`,
  sections: [
    {
      title: 'I - RÈGLES DE SUBSTITUTION DES HOMOPHONES COURANTS',
      content: [
        `a / à : a = avait (verbe avoir) ; à = préposition invariable (impossible de remplacer par avait).`,
        `ont / on : ont = avaient (verbe avoir) ; on = il / elle (pronom sujet).`,
        `est / et : est = était (verbe être) ; et = et puis (conjonction de coordination).`,
        `sont / son : sont = étaient (verbe être) ; son = mon/ton (adjectif possessif).`
      ]
    },
    {
      title: 'II - CAS COMPLEXES : LEUR, QUAND ET C\'EST',
      content: [
        `leur / leurs : devant un verbe, « leur » est pronom personnel invariable (remplaçable par « lui » : je leur dis) ; devant un nom, c'est un possessif variable (leur ami, leurs amis).`,
        `quand / quant à : quand = lorsque ; quant à = en ce qui concerne.`,
        `c'est / s'est : c'est = cela est ; s'est = verbe pronominal (il s'est lavé -> je me suis lavé).`
      ]
    }
  ],
  diagram: {
    title: 'TESTS DE SUBSTITUTION DES HOMOPHONES',
    root: 'HOMOPHONES',
    branches: [
      {
        name: 'A / À',
        subtitle: 'Test « avait »',
        items: ['a -> avait (OK = verbe)', 'à -> préposition']
      },
      {
        name: 'ONT / ON',
        subtitle: 'Test « avaient » ou « il »',
        items: ['ont -> avaient (verbe)', 'on -> il (pronom)']
      },
      {
        name: 'LEUR / LEURS',
        subtitle: 'Devant verbe ou nom',
        items: ['Devant verbe : invariable (lui)', 'Devant nom : variable au pluriel (leurs)']
      },
      {
        name: 'C\'EST / S\'EST',
        subtitle: 'Démonstratif ou pronominal',
        items: ['C\'est -> cela est', 'S\'est -> je me suis (pronominal)']
      }
    ]
  },
  conclusion: `L'orthographe des homophones grammaticaux se maîtrise par l'application systématique des tests de remplacement syntaxique.`
};

// ----------------------------------------------------------------------------
// LEÇON 31 : LES MARQUES DE GENRE ET DE NOMBRE
// ----------------------------------------------------------------------------
export const LESSON_31_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-31',
  number: 'LEÇON 31',
  title: 'LES MARQUES DE GENRE ET DE NOMBRE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `En français, les noms et adjectifs varient en genre (masculin/féminin) et en nombre (singulier/pluriel). Si la règle générale ajoute un « -e » au féminin et un « -s » au pluriel, de nombreuses variations orthographiques obéissent à des règles rigoureuses.`,
  fullText: `LES MARQUES DE GENRE ET DE NOMBRE

I - Les marques de genre (le féminin) :
1. Règle générale :
On forme généralement le féminin des noms et des adjectifs en ajoutant un « -e » muet au masculin :
- un ami -> une amie ; petit -> petite ; un voisin -> une voisine.

2. Cas particuliers du féminin :
- Terminaisons en -er : font leur féminin en -ère avec un accent grave (un boulanger -> une boulangère ; premier -> première).
- Doublement de la consonne finale :
  * -el -> -elle (naturel -> naturelle)
  * -en / -on -> -enne / -onne (lion -> lionne ; paysan -> paysanne ; ancien -> ancienne)
  * -et -> -ette (cadet -> cadette), sauf complet -> complète, discret -> discrète, secret -> secrète, inquiet -> inquiète.
- Terminaisons en -f : font -ve (neuf -> neuve ; attentif -> attentive ; veuf -> veuve).
- Terminaisons en -x : font -se (heureux -> heureuse ; jaloux -> jalouse), mais doux -> douce, faux -> fausse, roux -> rousse.
- Terminaisons en -eur :
  * verbes d'action -> -euse (chanteur -> chanteuse ; menteur -> menteuse).
  * dérivés savants en -teur -> -trice (directeur -> directrice ; acteur -> actrice ; électeur -> électrice).
  * comparatifs -> -eure (meilleur -> meilleure ; supérieur -> supérieure ; majeur -> majeure).
- Noms à formes totalement différentes : père / mère ; oncle / tante ; cheval / jument ; bélier / brebis.

II - Les marques de nombre (le pluriel) :
1. Règle générale :
On ajoute généralement un « -s » au singulier : un livre -> des livres ; une maison -> des maisons.

2. Noms terminés par -s, -x, -z :
Ils sont invariables au pluriel : une souris -> des souris ; un nez -> des nez ; une voix -> des voix.

3. Noms en -al : font généralement leur pluriel en -aux (un journal -> des journaux ; un cheval -> des chevaux).
Exceptions en -s : bals, carnavals, festivals, chacals, récitals, régals, cales.

4. Noms en -ail : font leur pluriel en -ails (des détails, des éventails).
Exceptions en -aux : baux, coraux, émaux, soupiraux, travaux, vantaux, vitraux.

5. Noms en -ou : font leur pluriel en -ous (des clous, des trous, des fous).
Les 7 exceptions en -oux : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.

6. Noms en -au, -eau, -eu : prennent un « -x » au pluriel (des châteaux, des tuyaux, des feux).
Exceptions en -s : landaus, sarraus, bleus, pneus, émeus.`,
  sections: [
    {
      title: 'I - LE FÉMININ DES NOMS ET ADJECTIFS',
      content: [
        `Règle générale : ajout d'un « -e ».`,
        `Changements de finale : -er -> -ère ; -f -> -ve ; -x -> -se.`,
        `Doublement consonantique : -el -> -elle ; -en/-on -> -enne/-onne ; -et -> -ette (sauf discret, inquiet, complet qui prennent -ète).`,
        `-teur -> -trice ou -teuse selon l'existence d'un verbe en racine.`
      ]
    },
    {
      title: 'II - LE PLURIEL DES NOMS ET ADJECTIFS',
      content: [
        `Invariables : mots finissant en -s, -x, -z au singulier (des gaz, des prix, des tapis).`,
        `-al -> -aux (journaux), sauf bals, carnavals, chacals, festivals, récitals, régals.`,
        `-ou -> -ous, sauf les 7 célèbres en -oux : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.`,
        `-ail -> -ails, sauf travaux, coraux, vitraux, baux, émaux, soupiraux.`,
        `-au, -eau, -eu -> prennent un -x, sauf bleus, pneus, landaus.' `
      ]
    }
  ],
  diagram: {
    title: 'MARQUES DE GENRE ET DE NOMBRE',
    root: 'ACCORDS',
    branches: [
      {
        name: 'FÉMININ',
        subtitle: 'Variations du féminin',
        items: ['Règle générale : + e', '-er -> -ère', '-teur -> -trice', '-x -> -se / -f -> -ve']
      },
      {
        name: 'PLURIEL',
        subtitle: 'Exceptions du pluriel',
        items: ['-al -> -aux (sauf carnaval, festival...)', '7 noms en -oux (bijoux, cailloux...)', '-eau/-eu -> -x (sauf bleus, pneus)']
      }
    ]
  },
  conclusion: `La formation du féminin et du pluriel s'appuie sur des règles phonétiques et étymologiques dont les exceptions classiques doivent être retenues par cœur.`
};

// ----------------------------------------------------------------------------
// LEÇON 32 : LES ACCORDS DU PARTICIPE PASSÉ
// ----------------------------------------------------------------------------
export const LESSON_32_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-32',
  number: 'LEÇON 32',
  title: 'LES ACCORDS DU PARTICIPE PASSÉ',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `L'accord du participe passé constitue l'une des règles fondamentales de l'orthographe française. Il varie selon que le participe est employé sans auxiliaire, avec l'auxiliaire être, avec l'auxiliaire avoir ou sous la forme pronominale.`,
  fullText: `LES ACCORDS DU PARTICIPE PASSE

I - Participe passé employé sans auxiliaire :
Employé seul (sans être ni avoir), il a la valeur d'un adjectif qualificatif et s'accorde en genre et en nombre avec le nom ou pronom auquel il se rapporte.
Exemples :
- Une porte fermée / Des portes fermées.
- Arrivés à l'heure, les élèves ont commencé leur devoir.

II - Participe passé avec l'auxiliaire ÊTRE :
Le participe passé conjugué avec l'auxiliaire être s'accorde TOUJOURS en genre et en nombre avec le sujet du verbe.
Exemples :
- La voiture est réparée. (sujet féminin singulier -> -ée)
- Les enfants sont partis en vacances. (sujet masculin pluriel -> -is)
- Elles sont venues nous rendre visite. (sujet féminin pluriel -> -ues)

III - Participe passé avec l'auxiliaire AVOIR :
Règle fondamentale : Le participe passé conjugué avec avoir ne s'accorde JAMAIS avec le sujet !
1. Règle d'accord : Il s'accorde en genre et en nombre avec son Complément d'Objet Direct (COD) si et seulement si celui-ci est placé AVANT le verbe.
- Si le COD est placé après le verbe : pas d'accord (participe invariable).
  * Exemple : Elle a acheté des mangues. (COD « des mangues » est placé après -> acheté reste au masculin singulier).
- Si le COD est placé avant le verbe : accord en genre et en nombre avec ce COD.
  * Exemple 1 : Les mangues qu'elle a achetées sont mûres. (« qu' » mis pour « les mangues » féminin pluriel, placé avant -> achetées).
  * Exemple 2 : Ces mangues, elle les a achetées au marché. (pronom « les » placé avant -> achetées).
  * Exemple 3 : Quelle robe as-tu choisie ? (« quelle robe » placé avant -> choisie).
- S'il n'y a pas de COD : pas d'accord (ex : Ils ont dormi toute la nuit).

2. Cas particuliers avec Avoir :
- Précédé du pronom « en » : le participe passé reste invariable lorsqu'il a « en » pour complément (ex : Des mangues, j'en ai mangé).
- Suivi d'un infinitif : il s'accorde si le sujet fait l'action de l'infinitif (Les acteurs que j'ai vus jouer / Les pièces que j'ai vu jouer).
- Verbes de mesure, prix, durée (coûter, valoir, peser, vivre, courir) : invariables au sens propre (Les cent mille francs que ce livre m'a coûté).

IV - Participe passé des verbes pronominaux :
Les verbes pronominaux se conjuguent toujours avec Être, mais obéissent aux règles d'accord d'Avoir :
1. Verbes essentiellement pronominaux : accord toujours avec le sujet (Elles se sont souvenues).
2. Verbes réfléchis et réciproques : accord avec le COD si celui-ci précède le verbe :
- Elles se sont lavées. (se = COD placé avant -> accord).
- Elles se sont lavé les mains. (COD « les mains » placé après -> pas d'accord).
- Elles se sont parlé / souri / téléphoné. (parler, sourire, téléphoner à quelqu'un : « se » est COI -> participe toujours invariable !).`,
  sections: [
    {
      title: 'I - RÈGLES GÉNÉRALES D\'ACCORD',
      content: [
        `Sans auxiliaire : s'accorde comme un adjectif avec le nom qualifié.`,
        `Avec Être : s'accorde en genre et en nombre avec le sujet (Elles sont parties).`,
        `Avec Avoir : s'accorde avec le COD si celui-ci est placé AVANT le verbe. Pas d'accord si le COD est après ou s'il n'y a pas de COD.`
      ]
    },
    {
      title: 'II - EXEMPLES AVEC L\'AUXILIAIRE AVOIR',
      content: [
        `- Elle a cueilli des fleurs (COD fleurs placé après -> cueilli).`,
        `- Les fleurs qu'elle a cueillies (COD fleurs placé avant -> cueillies).`,
        `- Elle les a cueillies (pronom COD « les » placé avant -> cueillies).`
      ]
    },
    {
      title: 'III - VERBES PRONOMINAUX ET PIÈGES COURANTS',
      content: [
        `Essentiellement pronominaux : accord sujet (Ils se sont enfuis).`,
        `Réfléchis/Réciproques : accord si le pronom réfléchi est COD antéposé.`,
        `Participe invariable quand le verbe n'admet qu'un COI : se parler, se plaire, se complaire, se succéder, se convenir, se ressembler, se téléphoner, se sourire (ex : Elles se sont parlé).' `
      ]
    }
  ],
  diagram: {
    title: 'ARBRE DÉCISIONNEL DU PARTICIPE PASSÉ',
    root: 'ACCORD DU PARTICIPE',
    branches: [
      {
        name: 'SANS AUXILIAIRE',
        subtitle: 'Comme un adjectif',
        items: ['Accord avec le nom qualifié']
      },
      {
        name: 'AVEC ÊTRE',
        subtitle: 'Accord avec le sujet',
        items: ['Toujours accord en genre et nombre']
      },
      {
        name: 'AVEC AVOIR',
        subtitle: 'Recherche du COD',
        items: ['COD placé avant -> ACCORD avec COD', 'COD placé après ou absent -> INVARIABLE']
      },
      {
        name: 'PRONOMINAUX',
        subtitle: 'Être mais règle COD',
        items: ['Essentiel -> accord sujet', 'COD avant -> accord', 'COI (se parler) -> invariable']
      }
    ]
  },
  conclusion: `L'accord du participe passé dépend de la nature de l'auxiliaire et de la position exacte du COD dans la phrase.`
};

// ----------------------------------------------------------------------------
// LEÇON 33 : ACCORDS PARTICULIERS DE L'ADJECTIF
// ----------------------------------------------------------------------------
export const LESSON_33_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-33',
  number: 'LEÇON 33',
  title: 'ACCORDS PARTICULIERS DE L’ADJECTIF',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Si l'adjectif qualificatif s'accorde ordinairement en genre et en nombre avec le nom qu'il qualifie, plusieurs catégories particulières dérogent à cette règle : les adjectifs de couleur, les adjectifs composés et les adjectifs employés comme adverbes.`,
  fullText: `ACCORDS PARTICULIERS DE L’ADJECTIF

I - Les adjectifs de couleur :
1. Adjectifs de couleur simples :
Ce sont de véritables adjectifs qui s'accordent en genre et en nombre avec le nom :
- bleu, vert, blanc, noir, rouge, jaune, gris, violet...
* Exemples : des robes blanches, des pantalons noirs, des chemises vertes.

2. Noms employés comme adjectifs de couleur :
Lorsqu'un nom de fruit, de fleur, de pierre précieuse ou d'objet est utilisé pour désigner une couleur, il reste totalement INVARIABLE :
- marron, orange, chocolat, cerise, paille, abricot, olive, émeraude, rubis, turquoise, bronze, café...
* Exemples : des chaussures marron, des chemises orange, des yeux émeraude.
* Six exceptions traditionnelles qui s'accordent comme de vrais adjectifs : rose, mauve, pourpre, écarlate, fauve, incarnat (ex : des joues roses, des rubans pourpres).

3. Adjectifs de couleur composés :
Lorsque la couleur est exprimée par deux adjectifs ou un adjectif et un nom précisant la nuance, les deux termes restent INVARIABLES :
- vert clair, bleu foncé, jaune poussin, gris perle, bleu ciel...
* Exemples : des jupes bleu marine, des yeux vert clair, des tissus rouge foncé.

II - Les adjectifs employés comme adverbes :
Quand un adjectif est employé pour modifier un verbe, il a la valeur d'un adverbe et devient INVARIABLE :
- chanter faux, parler haut, sentir bon, coûter cher, peser lourd, marcher droit, voir clair...
* Exemples :
- Ces fleurs sentent bon (et non « bonnes »).
- Ces robes coûtent cher (et non « chères »).
- Elles parlent bas.

III - Adjectif verbal vs Participe présent :
- Le participe présent exprime une action, admet des compléments ou une négation et reste INVARIABLE :
  * Exemple : Des passagers tremblant de peur.
- L'adjectif verbal exprime un état ou une qualité permanente et s'accorde avec le nom :
  * Exemple : Des mains tremblantes / Une voix charmante.
Attention aux différences orthographiques :
- adhérant (participe) / adhérent (adjectif)
- communiquant (participe) / communicatif (adjectif)
- différant (participe) / différent (adjectif)
- négligeant (participe) / négligent (adjectif)
- provoquant (participe) / provocant (adjectif)
- précédant (participe) / précédent (adjectif).`,
  sections: [
    {
      title: 'I - RÈGLES DES ADJECTIFS DE COULEUR',
      content: [
        `Adjectifs simples : s'accordent normalement (des vestes vertes, des foulards bleus).`,
        `Noms de couleur : restent invariables (des chemises orange, des jupes marron).`,
        `Exceptions variables : rose, mauve, pourpre, écarlate, fauve, incarnat (des fleurs roses).`,
        `Couleurs composées : toujours invariables (des yeux bleu foncé, des robes vert olive).' `
      ]
    },
    {
      title: 'II - ADJECTIFS ADVERBIAUX ET ADJECTIFS VERBAUX',
      content: [
        `Adjectifs à valeur d'adverbe : invariables après verbe (coûter cher, sentir bon, parler bas, couper court).`,
        `Adjectif verbal (accord) vs Participe présent (invariable).`,
        `Pièges d'écriture : fatiguant (participe) / fatigant (adj) ; différant (participe) / différent (adj) ; convainquant (participe) / convaincant (adj).' `
      ]
    }
  ],
  diagram: {
    title: 'ACCORDS DE COULEURS ET D\'ADJECTIFS',
    root: 'CAS PARTICULIERS',
    branches: [
      {
        name: 'COULEUR SIMPLE',
        subtitle: 'Accord classique',
        items: ['Blanc, noir, vert, rouge', 'Exceptions : rose, mauve, fauve...']
      },
      {
        name: 'NOMS DE COULEUR',
        subtitle: 'Invariables',
        items: ['Marron, orange, chocolat', 'Émeraude, turquoise']
      },
      {
        name: 'COULEURS COMPOSÉES',
        subtitle: 'Invariables',
        items: ['Bleu ciel, vert clair, rouge foncé']
      },
      {
        name: 'ADJECTIF ADVERBIAL',
        subtitle: 'Invariable',
        items: ['Coûter cher, parler fort, sentir bon']
      }
    ]
  },
  conclusion: `Les adjectifs de couleur et les adjectifs employés adverbialement obéissent à des règles de figement orthographique précises garantissant la clarté de la langue.`
};

// ----------------------------------------------------------------------------
// LEÇON 34 : LE PLURIEL DES NOMS COMPOSÉS
// ----------------------------------------------------------------------------
export const LESSON_34_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-34',
  number: 'LEÇON 34',
  title: 'LE PLURIEL DES NOMS COMPOSÉS',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Dans les noms composés reliés par un trait d'union, la règle générale stipule que seuls le nom et l'adjectif peuvent prendre la marque du pluriel, si le sens le permet. Les verbes, adverbes et prépositions restent strictement invariables.`,
  fullText: `LE PLURIEL DES NOMS COMPOSES

Règle générale : Dans un nom composé relié par un trait d'union, seuls les NOMS et les ADJECTIFS peuvent se mettre au pluriel si le sens le permet. Les VERBES, les ADVERBES et les PRÉPOSITIONS restent toujours invariables.

I - Nom + Nom :
Les deux noms prennent la marque du pluriel :
- un chou-fleur -> des choux-fleurs
- un oiseau-mouche -> des oiseaux-mouches
- un wagon-lit -> des wagons-lits
Exception : Quand le second nom est le complément du premier avec préposition sous-entendue, seul le premier s'accorde :
- un timbre-poste -> des timbres-poste (timbres pour la poste)
- un chef-d'œuvre -> des chefs-d'œuvre (chefs de l'œuvre)
- un arc-en-ciel -> des arcs-en-ciel

II - Adjectif + Nom ou Nom + Adjectif :
Les deux éléments s'accordent en genre et en nombre :
- un coffre-fort -> des coffres-forts
- une chauve-souris -> des chauves-souris
- un grand-père -> des grands-pères
- une basse-cour -> des basses-cours
- un cerf-volant -> des cerfs-volants
- un beau-frère -> des beaux-frères

III - Verbe + Nom :
Le verbe reste toujours INVARIABLE. Le nom s'accorde ou reste invariable selon le sens :
- un tire-bouchon -> des tire-bouchons (qui tire les bouchons)
- un couvre-lit -> des couvre-lits
- un porte-avion -> des porte-avions
- un essuie-mains -> des essuie-mains (qui essuie les mains : nom déjà au pluriel au singulier)
- un gratte-ciel -> des gratte-ciel (qui gratte le ciel : invariable)
- un abat-jour -> des abat-jour
- un coupe-gorge -> des coupe-gorge

IV - Verbe + Verbe :
Les deux verbes restent totalement INVARIABLES :
- un laissez-passer -> des laissez-passer
- un va-et-vient -> des va-et-vient
- un ouï-dire -> des ouï-dire
- un savoir-vivre -> des savoir-vivre

V - Adverbe / Préposition + Nom :
L'adverbe ou la préposition reste INVARIABLE, seul le nom se met au pluriel si le sens le permet :
- un avant-poste -> des avant-postes
- un sous-sol -> des sous-sols
- une arrière-garde -> des arrière-gardes
- un haut-parleur -> des haut-parleurs (haut = adverbe ici)
- un à-côté -> des à-côtés.`,
  sections: [
    {
      title: 'I - RÈGLE D\'OR DU PLURIEL DES NOMS COMPOSÉS',
      content: [
        `Seuls les Noms et Adjectifs prennent la marque du pluriel.`,
        `Les Verbes, Adverbes et Prépositions sont TOUJOURS invariables.`
      ]
    },
    {
      title: 'II - TABLEAU SYNTHÉTIQUE PAR COMBINAISON',
      content: [
        `Synthèse des différentes associations :`
      ],
      table: {
        headers: ['Combinaison', 'Règle d\'accord', 'Exemples'],
        rows: [
          ['Nom + Nom', 'Les deux s\'accordent', 'des oiseaux-mouches, des choux-fleurs'],
          ['Nom + Prép + Nom', 'Seul le premier s\'accorde', 'des chefs-d\'œuvre, des arcs-en-ciel'],
          ['Nom + Adjectif', 'Les deux s\'accordent', 'des coffres-forts, des plates-bandes'],
          ['Adjectif + Nom', 'Les deux s\'accordent', 'des grands-mères, des beaux-frères'],
          ['Verbe + Nom', 'Verbe invar., nom selon le sens', 'des tire-bouchons, des gratte-ciel'],
          ['Verbe + Verbe', 'Les deux invariables', 'des va-et-vient, des laissez-passer'],
          ['Préposition + Nom', 'Préposition invar., nom s\'accorde', 'des avant-postes, des sous-sols']
        ]
      }
    }
  ],
  diagram: {
    title: 'PLURIEL DES NOMS COMPOSÉS',
    root: 'NOMS COMPOSÉS',
    branches: [
      {
        name: 'NOM + NOM / ADJ',
        subtitle: 'Les deux prennent -s/-x',
        items: ['Choux-fleurs', 'Coffres-forts', 'Grands-pères']
      },
      {
        name: 'NOM + COMPLÉMENT',
        subtitle: 'Seul le premier prend -s',
        items: ['Chefs-d\'œuvre', 'Arcs-en-ciel', 'Timbres-poste']
      },
      {
        name: 'VERBE / ADVERBE + NOM',
        subtitle: 'Invariable en tête',
        items: ['Tire-bouchons', 'Avant-postes', 'Haut-parleurs']
      },
      {
        name: 'VERBE + VERBE',
        subtitle: 'Totalement invariable',
        items: ['Laissez-passer', 'Va-et-vient']
      }
    ]
  },
  conclusion: `La règle des noms composés s'articule autour de la nature des constituants : le nom et l'adjectif sont variables, les mots grammaticaux et verbes demeurent invariables.`
};
