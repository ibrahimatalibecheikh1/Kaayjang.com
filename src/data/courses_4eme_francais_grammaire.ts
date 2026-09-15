import { LessonContent } from './courses';

// ============================================================================
// PARTIE 1 : GRAMMAIRE (LEÇONS 1 À 13) - FRANÇAIS 4ÈME
// Fascicule officiel - Programme de Français
// ============================================================================

// ----------------------------------------------------------------------------
// LEÇON 1 : TYPES ET FORMES DE LA PHRASE
// ----------------------------------------------------------------------------
export const LESSON_1_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-1',
  number: 'LEÇON 1',
  title: 'TYPES ET FORMES DE LA PHRASE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `On peut distinguer quatre types de phrases qui correspondent à quatre intentions différentes de celui qui parle : la phrase déclarative, la phrase exclamative, la phrase impérative et la phrase interrogative. Une phrase peut en outre être à la forme active, à la forme passive, à la forme affirmative ou à la forme négative.`,
  fullText: `TYPES ET FORMES DE LA PHRASE

A/ LES TYPES DE PHRASES
On peut distinguer quatre types de phrases qui correspondent à quatre intentions différentes de celui qui parle : la phrase déclarative, la phrase exclamative, la phrase impérative et la phrase interrogative.

I - La phrase déclarative :
Elle déclare ou affirme quelque chose. Elle se termine par un point (.).
Exemples :
- Les élèves de la commune ont reçu leurs camarades du lycée de Banjul.
- Il ne viendra pas à la rencontre.

II - La phrase exclamative :
Elle exprime un sentiment (l’étonnement, la joie, la colère, la tristesse, la fierté ou l'indignation…). Elle est caractérisée le plus souvent par l'emploi de pronoms exclamatifs. Elle se termine par un point d'exclamation (!).
Exemples :
- Ah ! Quel triste évènement !
- Quelle belle maison !

III - La phrase impérative :
Elle permet d’exprimer un ordre, un conseil, une prière... Elle peut se terminer soit par un point soit par un point d'exclamation.
Exemples :
- Ne joue pas ici.
- Faites ce travail au plus vite !

IV - La phrase interrogative :
Elle exprime une question, une demande. Elle est souvent caractérisée par l'emploi de pronoms interrogatifs et elle se termine par un point d'interrogation (?).
Exemples :
- Quelles sont les raisons de ta visite ?
- Ne crois-tu pas qu’il est temps de rentrer ?

B/ LES FORMES DE LA PHRASE :
Une phrase peut être à la forme active, à la forme passive, à la forme affirmative ou à la forme négative.

I – La forme active et la forme passive :
1 – Définition :
Dans une phrase à la forme active, le sujet fait l'action exprimée par le verbe.
Exemple : Les élèves lisent des livres.
Une phrase est à la forme passive quand le sujet subit l'action exprimée par le verbe. Le sujet de la phrase active devient le complément d'agent (ou complément indirect) de la phrase passive.
Exemple : Des livres sont lus par les élèves.
L'information livrée reste la même mais le point de vue est différent : dans la première phrase, on met l'accent sur la personne ; dans la deuxième, on met l'accent sur la chose.

2 – La formation du passif :
- Pour mettre un verbe à la forme passive, il doit être transitif direct, c'est-à-dire qu'il doit admettre un complément d’objet direct (COD). Le passif est ensuite formé de l’auxiliaire être suivi du participe passé du verbe conjugué qui s'accorde avec son sujet.
Exemples :
* Le mécanicien répare la voiture. (forme active)
* La voiture est réparée par le mécanicien. (forme passive)

- En passant de la forme active à la forme passive, on tient compte des temps auxquels sont conjugués les verbes :
* Exemple 1 : Paul trouvait la solution (imparfait) -> La solution était trouvée par Paul (imparfait passif / auxiliaire à l'imparfait).
* Exemple 2 : Paul trouvera la solution (futur simple) -> La solution sera trouvée par Paul (futur passif).
* Exemple 3 : Paul a trouvé la solution (passé composé) -> La solution a été trouvée par Paul (passé composé passif).
* Exemple 4 : Paul trouva la solution (passé simple) -> La solution fut trouvée par Paul (passé simple passif).

II – La forme affirmative et la forme négative :
1. Définition :
Dans une phrase à la forme affirmative, il n’y a pas de négation, alors qu’une phrase est à la forme négative lorsqu'elle nie quelque chose.
Exemples :
- Le garagiste répare la voiture. (forme affirmative)
- Le garagiste ne répare pas la voiture. (forme négative)
- Ce garagiste répare-t-il la voiture ? (forme affirmative)
- Ce garagiste ne répare-t-il pas la voiture ? (forme négative)
À la forme négative, il faut toujours utiliser au moins deux mots qui encadrent le verbe : ne ... pas, ne ... plus, ne ... jamais, ne ... rien, etc. (à choisir selon le sens de la phrase).

2. Les types de phrases négatives :
Une phrase déclarative, exclamative, impérative ou interrogative peut être à la forme affirmative ou à la forme négative.
- Déclaratif : Le garagiste répare la voiture. / Le garagiste ne répare pas la voiture.
- Interrogatif : Ce garagiste répare-t-il la voiture ? / Ce garagiste ne répare-t-il pas la voiture ?
- Exclamatif : Cette maison est belle ! / Cette maison n’est pas belle du tout !
- Impératif : Réparez cette voiture. / Ne réparez pas cette voiture.

3. Les différents sens de la négation :
La négation peut exprimer des sens différents en fonction de l'adverbe de négation utilisé :
- J'aime les fruits -> Je n'aime pas les fruits.
- J'aime beaucoup de fruits -> Je n'aime aucun fruit.
- Je mange toujours des fruits -> Je ne mange jamais de fruits.
- Je mange encore des fruits -> Je ne mange plus de fruits.
- Je vois quelque chose -> Je ne vois rien.
- Je vois quelqu'un -> Je ne vois personne.
Remarque de sens : « Je n'aime pas les fruits » signifie qu'on n'a jamais aimé les fruits ; « Je n'aime plus les fruits » signifie qu'on les aimait auparavant mais que ce n'est plus le cas.`,
  sections: [
    {
      title: 'A/ LES TYPES DE PHRASES',
      subsections: [
        {
          subtitle: 'I - La phrase déclarative',
          content: [
            `Elle déclare ou affirme quelque chose. Elle se termine par un point (.).`,
            `Exemples : Les élèves de la commune ont reçu leurs camarades du lycée de Banjul. / Il ne viendra pas à la rencontre.`
          ]
        },
        {
          subtitle: 'II - La phrase exclamative',
          content: [
            `Elle exprime un sentiment (l’étonnement, la joie, la colère, la tristesse, la fierté ou l'indignation…). Elle est caractérisée le plus souvent par l'emploi de pronoms exclamatifs. Elle se termine par un point d'exclamation (!).`,
            `Exemples : Ah ! Quel triste évènement ! / Quelle belle maison !`
          ]
        },
        {
          subtitle: 'III - La phrase impérative',
          content: [
            `Elle permet d’exprimer un ordre, un conseil, une prière... Elle peut se terminer soit par un point soit par un point d'exclamation.`,
            `Exemples : Ne joue pas ici. / Faites ce travail au plus vite !`
          ]
        },
        {
          subtitle: 'IV - La phrase interrogative',
          content: [
            `Elle exprime une question, une demande. Elle est souvent caractérisée par l'emploi de pronoms interrogatifs et se termine par un point d'interrogation (?).`,
            `Exemples : Quelles sont les raisons de ta visite ? / Ne crois-tu pas qu’il est temps de rentrer ?`
          ]
        }
      ]
    },
    {
      title: 'B/ LES FORMES DE LA PHRASE',
      subsections: [
        {
          subtitle: 'I – La forme active et la forme passive',
          content: [
            `Dans une phrase à la forme active, le sujet fait l'action exprimée par le verbe (ex : Les élèves lisent des livres).`,
            `Une phrase est à la forme passive quand le sujet subit l'action exprimée par le verbe. Le sujet de la phrase active devient le complément d'agent de la phrase passive (ex : Des livres sont lus par les élèves).`,
            `Pour mettre un verbe au passif, il doit être transitif direct (admettre un COD). Le passif est formé de l’auxiliaire être suivi du participe passé accordé avec le sujet.`,
            `Concordance des temps au passif :`,
            `- Paul trouvait la solution (imparfait) -> La solution était trouvée par Paul.`,
            `- Paul trouvera la solution (futur simple) -> La solution sera trouvée par Paul.`,
            `- Paul a trouvé la solution (passé composé) -> La solution a été trouvée par Paul.`,
            `- Paul trouva la solution (passé simple) -> La solution fut trouvée par Paul.`
          ]
        },
        {
          subtitle: 'II – La forme affirmative et la forme négative',
          content: [
            `Dans une phrase à la forme affirmative, il n’y a pas de négation. La phrase est négative lorsqu'elle nie quelque chose avec au moins deux mots encadrant le verbe (ne... pas, ne... plus, ne... jamais, ne... rien).`,
            `Tableau des correspondances de formes négatives :`
          ],
          table: {
            headers: ['Type de phrase', 'Forme affirmative', 'Forme négative'],
            rows: [
              ['Déclaratif', 'Le garagiste répare la voiture.', 'Le garagiste ne répare pas la voiture.'],
              ['Interrogatif', 'Ce garagiste répare-t-il la voiture ?', 'Ce garagiste ne répare-t-il pas la voiture ?'],
              ['Exclamatif', 'Cette maison est belle !', 'Cette maison n’est pas belle du tout !'],
              ['Impératif', 'Réparez cette voiture.', 'Ne réparez pas cette voiture.']
            ]
          }
        },
        {
          subtitle: 'III – Les différents sens de la négation',
          content: [
            `J'aime les fruits -> Je n'aime pas les fruits.`,
            `J'aime beaucoup de fruits -> Je n'aime aucun fruit.`,
            `Je mange toujours des fruits -> Je ne mange jamais de fruits.`,
            `Je mange encore des fruits -> Je ne mange plus de fruits.`,
            `Je vois quelque chose -> Je ne vois rien.`,
            `Je vois quelqu'un -> Je ne vois personne.`,
            `Nuance : « Je n'aime pas » indique une absence totale de goût ; « Je n'aime plus » indique qu'on aimait auparavant mais que tel n'est plus le cas.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE : TYPES ET FORMES DE LA PHRASE',
    root: 'LA PHRASE',
    branches: [
      {
        name: '4 TYPES OBLIGATOIRES',
        subtitle: 'Chaque phrase a un seul type',
        items: ['Déclarative (.)', 'Exclamative (!)', 'Impérative (. ou !)', 'Interrogative (?)']
      },
      {
        name: 'FORMES COMBINABLES',
        subtitle: 'Peuvent s\'associer aux types',
        items: ['Active vs Passive (être + participe passé)', 'Affirmative vs Négative (ne... pas, plus, jamais, rien, personne)']
      }
    ]
  },
  conclusion: `Toute phrase en français relève obligatoirement d'un type précis (déclaratif, interrogatif, exclamatif ou impératif) et peut adopter différentes formes (active/passive, affirmative/négative). Le passage au passif nécessite un verbe transitif direct.`
};

// ----------------------------------------------------------------------------
// LEÇON 2 : LA PHRASE VERBALE ET LA PHRASE NON VERBALE
// ----------------------------------------------------------------------------
export const LESSON_2_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LA PHRASE VERBALE ET LA PHRASE NON VERBALE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Une phrase peut s'organiser autour d'un verbe conjugué (phrase verbale) ou être construite sans verbe conjugué (phrase non verbale). La phrase non verbale apporte vivacité, rapidité et expressivité au récit ou au message.`,
  fullText: `LA PHRASE VERBALE ET LA PHRASE NON VERBALE

I - La phrase verbale :
Elle s'organise en général autour d'une information en suivant la structure simple : groupe sujet + groupe verbal.
Exemple : Chaque élève a fait son devoir.
La phrase verbale simple est présente dans tous les types de textes. Sa fréquence est néanmoins plus grande dans les écrits de vulgarisation (vulgariser = « rendre une connaissance, des idées accessibles au grand public » selon le Larousse) : dans les articles de journaux, dans les modes d'emploi, dans les titres, dans les slogans, etc.
Exemple : Vivez les grands moments de la CAN avec notre chaîne de télévision !

II – La phrase non verbale :
1 - La phrase nominale :
La plupart du temps, elle repose sur un nom qui devient, à la place d'un verbe, la base de la phrase.
Exemple : Première étape du voyage : la ville de Kinshasa.

2 - La phrase adjectivale et la phrase adverbiale :
Il existe d’autres types de phrases non verbales reposant sur un adjectif ou un adverbe.
Exemples :
- Extraordinaire, ce voyage ! (adjectivale)
- Doucement, les enfants. (adverbiale)

La phrase non verbale permet des raccourcis dans l’expression. Elle est employée, par exemple, pour accélérer le déroulement d'un récit lorsque les événements se précipitent.
Exemple : voilà comment la narratrice d’Une si longue lettre (Mariama Bâ) a réagi quand on lui a annoncé le décès de son mari :
« Un taxi hélé ! Vite ! Plus vite ! Ma gorge sèche. Dans ma poitrine une boule immobile. Vite ! Plus vite ! Enfin l’hôpital ! L’odeur des suppurations et de l’éther mêlés. L’hôpital ! Des visages crispés, une escorte larmoyante de gens connus ou inconnus, témoins malgré eux de l’atroce tragédie. Un couloir qui s’étire, qui n’en finit pas de s’étirer. Au bout, une chambre. Dans la chambre un lit. Sur ce lit : Modou étendu »

Les phrases non verbales se rencontrent souvent dans des phrases exclamatives (comme ici dans ce texte) ou interrogatives, mais aussi dans des titres ou bien des slogans.
Exemples :
- Quelle histoire ? (phrase interrogative)
- Le tabac, un danger pour la santé ! (slogan)
- L’exil d’Albouri (titre d’une pièce de théâtre de Cheik Aliou Ndao)`,
  sections: [
    {
      title: 'I - LA PHRASE VERBALE',
      content: [
        `Elle s'organise en général autour d'une information en suivant la structure : groupe sujet + groupe verbal.`,
        `Exemple : Chaque élève a fait son devoir.`,
        `On la retrouve dans tous les écrits, particulièrement dans les écrits de vulgarisation, articles de presse, modes d'emploi et slogans.`,
        `Exemple : Vivez les grands moments de la CAN avec notre chaîne de télévision !`
      ]
    },
    {
      title: 'II – LA PHRASE NON VERBALE',
      subsections: [
        {
          subtitle: '1 - La phrase nominale',
          content: [
            `Elle repose sur un nom qui devient le noyau de la phrase à la place d'un verbe.`,
            `Exemple : Première étape du voyage : la ville de Kinshasa.`
          ]
        },
        {
          subtitle: '2 - La phrase adjectivale et la phrase adverbiale',
          content: [
            `Elles reposent sur un adjectif ou un adverbe.`,
            `Exemples : Extraordinaire, ce voyage ! (adjectivale) / Doucement, les enfants. (adverbiale)`
          ]
        },
        {
          subtitle: '3 - Valeur expressive et accélération du récit',
          content: [
            `La phrase non verbale accélère le récit quand les événements se précipitent.`,
            `Exemple littéraire (Une si longue lettre de Mariama Bâ) :`,
            `« Un taxi hélé ! Vite ! Plus vite ! Ma gorge sèche. Dans ma poitrine une boule immobile. Vite ! Plus vite ! Enfin l’hôpital ! L’odeur des suppurations et de l’éther mêlés. L’hôpital ! Des visages crispés, une escorte larmoyante... »`,
            `Emplois fréquents : titres d'œuvres (L’exil d’Albouri de Cheik Aliou Ndao), slogans (Le tabac, un danger pour la santé !) et interrogations vives (Quelle histoire ?).`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'PHRASE VERBALE ET NON VERBALE',
    root: 'TYPES DE PHRASES',
    branches: [
      {
        name: 'PHRASE VERBALE',
        subtitle: 'Noyau = verbe conjugué',
        items: ['Structure : Sujet + Verbe + Compléments', 'Courante dans récits et articles']
      },
      {
        name: 'PHRASE NON VERBALE',
        subtitle: 'Sans verbe conjugué',
        items: ['Nominale (nom noyau)', 'Adjectivale (adjectif noyau)', 'Adverbiale (adverbe noyau)', 'Effet : rapidité, émotion, slogans']
      }
    ]
  },
  conclusion: `La phrase verbale s'articule autour d'un verbe conjugué, tandis que la phrase non verbale (nominale, adjectivale ou adverbiale) permet de créer un rythme rapide, saisissant et percutant dans les récits, les titres et les slogans.`
};

// ----------------------------------------------------------------------------
// LEÇON 3 : PHRASE SIMPLE – PHRASE COMPOSÉE – PHRASE COMPLEXE
// ----------------------------------------------------------------------------
export const LESSON_3_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-3',
  number: 'LEÇON 3',
  title: 'PHRASE SIMPLE – PHRASE COMPOSÉE – PHRASE COMPLEXE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Selon le nombre de verbes conjugués et la manière dont les propositions s'articulent entre elles, on distingue la phrase simple (une seule proposition indépendante), la phrase composée (plusieurs propositions indépendantes coordonnées ou juxtaposées) et la phrase complexe (une principale et une ou plusieurs subordonnées).`,
  fullText: `PHRASE SIMPLE – PHRASE COMPOSEE – PHRASE COMPLEXE

I - La phrase simple :
Elle s'organise autour d'un verbe, de son sujet et de ses éventuels compléments.
Exemples :
- Les élèves travaillent.
- La compagnie se réunissait chez Abdoulaye. (Ousmane Socé Diop)

II - La phrase composée :
C'est une phrase formée de deux ou plusieurs propositions indépendantes. Celles-ci peuvent être coordonnées ou juxtaposées.
Exemple : Dehors le soleil est ardent mais la rue est devenue plus animée. (A. Sadji)
Les deux propositions de cette phrase sont coordonnées par la conjonction de coordination « mais ».

III - La phrase complexe :
Elle s'organise autour d'une proposition principale autour de laquelle gravite une ou des propositions subordonnées.
Exemple : Mes futurs beaux-parents me demandent un portable pour que je puisse épouser leur fille.
- Proposition principale : Mes futurs beaux-parents me demandent un portable.
- Proposition subordonnée : pour que je puisse épouser leur fille.

Les différentes propositions subordonnées sont :
1 - Les propositions subordonnées relatives :
Introduites par un pronom relatif (qui, que, dont, où, lequel, laquelle, auxquelles, etc.), elles complètent un nom ou un pronom (leur antécédent) à la manière d'un adjectif qualificatif.
Exemple : Les bêtes auxquelles il fait allusion sont dans l’enclos.

2 - Les propositions subordonnées conjonctives :
Introduites par une conjonction de subordination ou une locution conjonctive :
- La proposition complétive : introduite par que, de ce que, à ce que, quand, ce que, etc., on la trouve après des verbes de déclaration, de perception, de pensée, de sentiment. Elle a la fonction de complément d’objet.
Exemple : Je crois que vous vous trompez.
- Les subordonnées circonstancielles : elles expriment les circonstances de l'action verbale (le temps, le but, la cause, la conséquence, la concession, l'opposition, la condition, la comparaison).
Exemple : Mes futurs beaux-parents me demandent un portable pour que je puisse épouser leur fille.

3 - Les propositions subordonnées infinitives :
Elles contiennent un verbe à l’infinitif qui a son propre sujet, différent d’un autre sujet de verbe dans la phrase.
Exemple : Ils ont vu le voleur s’enfuir. (« ils » est le sujet de ont vu et « le voleur » est le sujet de s’enfuir).

4 - Les propositions subordonnées participiales :
Elles contiennent un participe qui, comme dans la subordonnée infinitive, a son propre sujet, différent d’un autre sujet de verbe dans la phrase. Elles ont généralement la fonction de complément circonstanciel.
Exemple : J’ai rencontré mes amis allant à la plage. (« Je » est le sujet de ai rencontré et « mes amis » est le sujet de allant).`,
  sections: [
    {
      title: 'I - LA PHRASE SIMPLE',
      content: [
        `Elle ne comporte qu'un seul verbe conjugué (une proposition indépendante).`,
        `Exemples : Les élèves travaillent. / La compagnie se réunissait chez Abdoulaye (Ousmane Socé Diop).`
      ]
    },
    {
      title: 'II - LA PHRASE COMPOSÉE',
      content: [
        `Elle est formée de deux ou plusieurs propositions indépendantes, reliées par juxtaposition (signes de ponctuation) ou coordination (conjonctions mais, ou, et, donc, or, ni, car).`,
        `Exemple : Dehors le soleil est ardent mais la rue est devenue plus animée (Abdoulaye Sadji).`
      ]
    },
    {
      title: 'III - LA PHRASE COMPLEXE',
      subsections: [
        {
          subtitle: 'Structure générale',
          content: [
            `Elle comprend une proposition principale et une ou plusieurs propositions subordonnées qui en dépendent.`,
            `Exemple : Mes futurs beaux-parents me demandent un portable [principale] pour que je puisse épouser leur fille [subordonnée].`
          ]
        },
        {
          subtitle: '1. Les subordonnées relatives',
          content: [
            `Introduites par un pronom relatif (qui, que, dont, où, lequel, laquelle, etc.), elles complètent leur antécédent.`,
            `Exemple : Les bêtes auxquelles il fait allusion sont dans l’enclos.`
          ]
        },
        {
          subtitle: '2. Les subordonnées conjonctives',
          content: [
            `- Complétives : introduites par que, compléments d’objet de verbes de pensée/déclaration (ex : Je crois que vous vous trompez).`,
            `- Circonstancielles : expriment le temps, le but, la cause, la conséquence, la condition, etc. (ex : ...pour que je puisse épouser leur fille).`
          ]
        },
        {
          subtitle: '3. Les subordonnées infinitives et participiales',
          content: [
            `- Subordonnée infinitive : le verbe à l'infinitif a son sujet propre différent du verbe principal (ex : Ils ont vu le voleur s’enfuir).`,
            `- Subordonnée participiale : le participe a son sujet propre (ex : J’ai rencontré mes amis allant à la plage).`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'STRUCTURES DE LA PHRASE',
    root: 'LA PHRASE',
    branches: [
      {
        name: 'PHRASE SIMPLE',
        subtitle: '1 seul verbe conjugué',
        items: ['1 proposition indépendante']
      },
      {
        name: 'PHRASE COMPOSÉE',
        subtitle: 'Propositions indépendantes',
        items: ['Juxtaposées (, ; :)', 'Coordonnées (mais, ou, et, donc, or, ni, car)']
      },
      {
        name: 'PHRASE COMPLEXE',
        subtitle: 'Principale + Subordonnée(s)',
        items: ['Relatives (pronom relatif)', 'Conjonctives (complétive / circonstancielle)', 'Infinitives & Participiales (sujet propre)']
      }
    ]
  },
  conclusion: `La phrase simple contient un seul verbe ; la phrase composée relie des propositions indépendantes par coordination ou juxtaposition ; la phrase complexe soumet une ou plusieurs subordonnées à une proposition principale.`
};

// ----------------------------------------------------------------------------
// LEÇON 4 : LA CONSTRUCTION DE LA PHRASE
// ----------------------------------------------------------------------------
export const LESSON_4_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LA CONSTRUCTION DE LA PHRASE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Généralement une phrase est construite dans l’ordre Sujet + Verbe + Complément. Certains compléments circonstanciels peuvent être déplacés sans altérer le sens. La construction varie selon le type de phrase, la forme et la nature du verbe (transitif direct ou indirect).`,
  fullText: `LA CONSTRUCTION DE LA PHRASE

Généralement une phrase est construite dans l’ordre sujet + verbe + complément.
Exemple : Il se rend à son travail tous les matins. (Sujet: Il / Verbe: se rend / CC lieu: à son travail / CC temps: tous les matins)
Certains éléments peuvent changer de place sans que le sens de la phrase soit altéré :
Exemple : Tous les matins, il se rend à son travail.
Mais une phrase se construit surtout en fonction de son type et de sa forme mais aussi en fonction de la forme du verbe (transitif direct ou indirect).

I - La phrase interrogative :
La structure de la phrase interrogative est la suivante : (Pronom interrogatif) + verbe + sujet + complément(s) + point d'interrogation. Il y a donc inversion du verbe et du sujet.
Exemple : Joue-t-elle au ballon avec ses amis ?
On peut également préciser la question en y ajoutant un pronom interrogatif :
Exemples :
- Quand joue-t-elle au ballon avec ses amis ?
- Où joue-t-elle au ballon avec ses amis ?

Remarque 1 : On ajoute -t entre le verbe et le sujet chaque fois qu'il faut respecter la règle des liaisons euphoniques (ex : Aime-t-il).
Tournure interronégative : Ne + verbe + sujet + pas + complément(s) + ? (ex : Ne joue-t-elle pas au ballon avec ses amis ? -> demande confirmation).
Remarque 2 : Avec « est-ce que ? », il n'y a pas d'inversion du sujet (ex : Est-ce qu'elle joue au ballon ?). Ne pas cumuler pronom interrogatif et est-ce que dans une syntaxe incorrecte.

II – La phrase exclamative :
Plusieurs constructions sont possibles :
- Sujet + verbe + complément(s) (conseil) : Tu ferais mieux de faire tes devoirs avant d'aller jouer !
- Verbe à l'impératif + compléments (ordre) : Fais tes devoirs avant d'aller jouer !
- Adjectif exclamatif + sujet + verbe + complément ou adjectif exclamatif + adjectif qualificatif + nom :
  * Comme il est intelligent !
  * Quelle belle maison !
  * Quel joueur extraordinaire !

III - La phrase affirmative :
- Phrase déclarative affirmative : Sujet + verbe + complément + point (ex : Le garagiste répare la voiture).
- Phrase interrogative affirmative : Sujet + verbe + (t) + pronom + complément + ? (ex : Ce garagiste répare-t-il la voiture ? / Le maçon construit-il la maison ?).

IV - La phrase négative :
- Phrase déclarative négative : Sujet + ne + verbe + pas/plus/jamais + complément + point (ex : Le garagiste ne répare pas la voiture).
- Phrase interrogative négative : Sujet + ne + verbe + (t) + pronom + pas + complément + ? (ex : Ce garagiste ne répare-t-il pas la voiture ?).
- Phrase exclamative négative : Sujet + ne + verbe + pas + complément + !
- Phrase impérative négative : Ne + verbe + pas + complément + point/! (ex : Ne réparez pas cette voiture).

V – Les verbes transitifs :
Les verbes transitifs se construisent avec un complément d'objet :
- Transitif direct : le complément n'est pas introduit par une préposition (Sujet + Verbe + COD).
Exemple : Le formateur explique la répartition des groupes. (« expliquer » est transitif direct).
- Transitif indirect : le complément est introduit par une préposition (Sujet + Verbe + préposition + COI).
Exemple : Le formateur parle de la répartition des groupes. (La préposition « de » introduit le COI : « parler » est transitif indirect).`,
  sections: [
    {
      title: 'I - ORDRE DE BASE ET DÉPLACEMENTS',
      content: [
        `L'ordre canonique en français est Sujet + Verbe + Complément.`,
        `Les compléments circonstanciels peuvent se déplacer : « Il se rend à son travail tous les matins » -> « Tous les matins, il se rend à son travail ».`
      ]
    },
    {
      title: 'II - STRUCTURES DES TYPES ET FORMES',
      subsections: [
        {
          subtitle: '1. La phrase interrogative',
          content: [
            `Structure avec inversion du sujet : (Pronom interrogatif) + Verbe + Sujet + Complément + ? (ex : Joue-t-elle au ballon avec ses amis ? / Où joue-t-elle ?).`,
            `Ajout d'un -t- euphonique entre voyelles.`,
            `Tournure interronégative : Ne + verbe + sujet + pas + compléments + ? (ex : Ne joue-t-elle pas au ballon ?).`,
            `Tournure « Est-ce que » : maintient l'ordre sujet + verbe (ex : Est-ce qu'elle joue ?).`
          ]
        },
        {
          subtitle: '2. La phrase exclamative',
          content: [
            `Constructions : Sujet + verbe + complément (conseil), impératif (ordre), ou avec mots exclamatifs (Comme il est intelligent ! / Quelle belle maison ! / Quel joueur extraordinaire !).`
          ]
        },
        {
          subtitle: '3. Formes affirmative et négative',
          content: [
            `Affirmative : Le garagiste répare la voiture. / Ce garagiste répare-t-il la voiture ?`,
            `Négative : Le garagiste ne répare pas la voiture. / Ce garagiste ne répare-t-il pas la voiture ? / Ne réparez pas cette voiture.`
          ]
        }
      ]
    },
    {
      title: 'III - LES VERBES TRANSITIFS',
      content: [
        `- Transitif direct : se construit directement avec un COD sans préposition (ex : Le formateur explique la répartition des groupes).`,
        `- Transitif indirect : se construit avec un COI introduit par une préposition comme à ou de (ex : Le formateur parle de la répartition des groupes).`
      ]
    }
  ],
  diagram: {
    title: 'CONSTRUCTION DE LA PHRASE',
    root: 'CONSTRUCTION',
    branches: [
      {
        name: 'ORDRE DE BASE',
        subtitle: 'Sujet + Verbe + Compléments',
        items: ['Compléments circonstanciels mobiles', 'Compléments d\'objet fixes']
      },
      {
        name: 'TRANSITIVITÉ DU VERBE',
        subtitle: 'Nature du complément d\'objet',
        items: ['Transitif direct (COD sans préposition)', 'Transitif indirect (COI avec préposition à, de...)']
      }
    ]
  },
  conclusion: `La syntaxe de la phrase dépend du type de phrase (inversion en interrogation), de la négation (encadrement du verbe) et de la transitivité directe ou indirecte du verbe.`
};

// ----------------------------------------------------------------------------
// LEÇON 5 : LES PROCÉDÉS DE MISE EN RELIEF
// ----------------------------------------------------------------------------
export const LESSON_5_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LES PROCÉDÉS DE MISE EN RELIEF',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Pour mettre en relief un groupe de mots dans une phrase, on peut utiliser différents procédés qui varient selon la fonction de ce groupe. On parle aussi d’emphase ou de forme emphatique.`,
  fullText: `LES PROCEDES DE MISE EN RELIEF

Pour mettre en relief un groupe de mots dans une phrase, on peut utiliser différents procédés qui varient selon la fonction de ce groupe. On parle aussi d’emphase ou de forme emphatique.

1 - Par encadrement avec un présentatif :
On encadre le groupe avec un présentatif, par exemple avec « c’est…qui » s'il s'agit du sujet, « c’est…que » dans les autres cas.
- Exemple 1 : Sa tante l’a élevé -> C’est sa tante qui l’a élevé. (mise en relief du sujet « sa tante »).
- Exemple 2 : La conférence se déroule en anglais -> C’est en anglais que se déroule la conférence. (mise en relief du complément « en anglais »).

2 - Par détachement et reprise pronominale :
On détache le mot ou le groupe mis en relief soit en tête de phrase soit en fin de phrase, avec reprise par un pronom s'il s'agit d'un constituant obligatoire (sujet, complément d'objet…) mais sans autre modification s'il s'agit d'un complément circonstanciel.
Exemple de départ : On lui a volé son sac à la gare routière. (on met en relief le COD « son sac »).
- 1ère possibilité (détachement en tête) : Son sac, on le lui a volé à la gare routière. (COD détaché en tête de phrase et reprise par le pronom complément « le »).
- 2ème possibilité (détachement en fin) : On le lui a volé à la gare routière, son sac. (COD détaché en fin de phrase, repris avant par le pronom complément « le »).

3 - Par la tournure « quant à » :
On peut utiliser aussi dans ce cas la tournure « quant à ».
Exemple : Quant à son sac, on le lui a volé à la gare routière.`,
  sections: [
    {
      title: 'I - LE PRÉSENTATIF (C\'EST... QUI / C\'EST... QUE)',
      content: [
        `Pour le sujet : « C'est... qui » (ex : Sa tante l’a élevé -> C’est sa tante qui l’a élevé).`,
        `Pour les compléments : « C'est... que » (ex : La conférence se déroule en anglais -> C’est en anglais que se déroule la conférence).`
      ]
    },
    {
      title: 'II - LE DÉTACHEMENT AVEC REPRISE PRONOMINALE',
      content: [
        `Détachement en tête de phrase : Son sac, on le lui a volé à la gare routière.`,
        `Détachement en fin de phrase : On le lui a volé à la gare routière, son sac.`,
        `Le pronom personnel « le » reprend le constituant obligatoire mis en relief.`
      ]
    },
    {
      title: 'III - LA TOURNURE « QUANT À »',
      content: [
        `Elle introduit le constituant en tête de phrase pour focaliser l'attention.`,
        `Exemple : Quant à son sac, on le lui a volé à la gare routière.`
      ]
    }
  ],
  diagram: {
    title: 'PROCÉDÉS DE MISE EN RELIEF',
    root: 'EMPHASE',
    branches: [
      {
        name: 'PRÉSENTATIFS',
        subtitle: 'Encadrement',
        items: ['C\'est... qui (Sujet)', 'C\'est... que (Compléments)']
      },
      {
        name: 'DÉTACHEMENT',
        subtitle: 'Isolé par une virgule',
        items: ['En tête avec reprise pronominale', 'En fin avec annonce pronominale']
      },
      {
        name: 'LOCUTION',
        subtitle: 'Focalisation',
        items: ['Quant à + groupe nominal']
      }
    ]
  },
  conclusion: `La mise en relief (ou emphase) permet d'insister sur un élément de la phrase au moyen de présentatifs (c'est... qui/que), du détachement avec reprise pronominale, ou de locutions comme « quant à ».'`
};

// ----------------------------------------------------------------------------
// LEÇON 6 : LA PONCTUATION
// ----------------------------------------------------------------------------
export const LESSON_6_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LA PONCTUATION',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `La ponctuation a pour but l'organisation de l'écrit grâce à un ensemble de signes graphiques. Destinée à faciliter la compréhension du texte, elle indique aussi des marques de la langue orale comme l'intonation ou les pauses.`,
  fullText: `LA PONCTUATION

La ponctuation a pour but l'organisation de l'écrit grâce à un ensemble de signes graphiques. Destinée à faciliter la compréhension du texte, elle est un élément essentiel de la communication écrite. Elle indique aussi des marques de la langue orale comme l'intonation ou les pauses.
Exemples :
- Moustapha est là.
- Moustapha est là ?
Dites oralement, ces deux phrases ne peuvent avoir la même intonation.
Un seul signe de ponctuation peut modifier la nature d'une phrase, la rendant énonciative, exclamative, injonctive, interrogative, changeant donc son sens et la manière de la prononcer.
Exemples :
- Vous sortez maintenant.
- Vous sortez maintenant ?
- Vous sortez maintenant !
- Vous sortez maintenant…

Les signes de ponctuation les plus utilisés sont : le point {.}, le point d'interrogation {?}, le point d'exclamation {!}, la virgule {,}, le point-virgule {;}, les deux points {:}, les points de suspension {…}, les parenthèses {()}, les guillemets {« »}, le tiret {–}.

1 - Le point :
Le point marque la fin d'une phrase, donc une pause plus longue lors de la lecture. Il est aussi employé dans certaines abréviations comme M., S.V.P., etc. Il n'est suivi d'une majuscule que lorsqu'il termine une phrase.
Exemple : L’autre jour, j’ai vu M. Ndiaye. Il allait en ville.

2 - Le point d'exclamation :
Le point d'exclamation s'emploie :
- à la fin d'une phrase qui désigne une émotion comme la surprise, la déception, la colère (ex : Comme je suis heureuse de te revoir ! / J'aurais tant voulu aller à la plage hier ! Il faisait si beau !).
- après une interjection (ah ! allô ! aïe ! bon ! bravo ! hélas ! minute ! etc.) et à la fin d'une phrase qui commence par une interjection (ex : Ah ! quelle journée magnifique ! / Elle savait la réponse mais hélas ! ne put la dire à temps).

3 - Le point d'interrogation :
Il indique la fin d'une question.
Exemples : Es-tu sûr de ce que tu dis ? Je n'en crois pas un mot. / Qui sait ? il réussira peut-être.

4 - Les points de suspension :
Ils se placent à l'intérieur ou à la fin d'une phrase pour marquer l'hésitation, l'incertitude, créer une interruption, une attente ou un suspense.
Exemples :
- Moussa aperçut au loin une silhouette familière... Il crut que c'était Fatou.
- Je t'apporterai des oranges, des pommes... et du chocolat, si tu es sage.

5 - Le point-virgule :
Il marque une pause plus longue que la virgule tout en indiquant que la phrase n'est pas terminée. On l'emploie :
- lorsqu'on veut poursuivre, préciser une idée exprimée dans la 1ère partie de la phrase (ex : Cette île compte parmi les plus visitées au monde... ; le tourisme représente d'ailleurs sa principale source de revenus).
- pour séparer des éléments contenant une ellipse où un mot n'est pas répété (ex : Mody et Coumba apporteront les plus légers ; Pape et Jacques, les plus lourds).
- pour séparer deux parties d'une phrase contenant déjà plusieurs virgules (ex : Parmi les animaux de ce zoo, on retrouve des fauves, comme le lion, le tigre... ; des singes, comme le chimpanzé... ; et quelques grands mammifères...). Pas de majuscule après.

6 - Les deux points :
Ils servent à annoncer :
- une énumération (ex : Fatou reçut trois cadeaux pour son anniversaire : un portable, un sac et une belle robe).
- une explication (ex : Les élèves ne sont pas venus à l’école : ils sont allés à la fête).
- une citation (ex : Il lui dit, d'un ton joyeux : « Je t'invite au restaurant ce soir ! »).

7 - La virgule :
C'est le signe le plus fréquemment utilisé :
- dans une énumération d'éléments semblables, sauf avant et, ou, ni (ex : Cet élève lit, vérifie, relit avec soin).
- après une indication de temps, de lieu, de manière, de condition en tête de phrase (ex : Dès que je serai prête, je partirai. / Comme son grand-père le lui avait promis, ils allèrent se promener).
- pour éviter de répéter un mot (ellipse) : Moussa aime le football, Paul, le basket.
- après le nom de la personne à qui on s'adresse : Mody, allume la télé s’il te plaît.
- pour encadrer une explication ou une proposition incise (ex : Coumba, le frère de Mody, est une excellente élève. / Demain, dit-elle, c'est le grand jour).
- On ne met pas de virgule après et, mais, ou, donc, or, car, sauf en cas d'explication intercalée.

8 - Les guillemets :
Pour encadrer un dialogue, une citation (ex : Nous avons tout de suite crié : « Au secours ! ») ou isoler un mot particulier ou populaire (ex : Cet homme, qu’on surnommait « Mange-tout », avait un appétit démesuré).

9 – Les parenthèses :
Pour isoler des mots qui précisent ou définissent une idée (ex : Les fleurs de ce jardin (tulipes, roses, lilas) dégagent une délicieuse odeur).

10 - Le tiret :
Pour marquer le changement d'interlocuteur dans un dialogue ou encadrer une explication (ex : De nombreux visiteurs - plus de dix mille - ont profité de l'exposition).`,
  sections: [
    {
      title: 'I - LES SIGNES DE FIN DE PHRASE',
      content: [
        `1. Le point (.) : pause finale ou abréviation (M., S.V.P.). Suivi d'une majuscule.`,
        `2. Le point d'exclamation (!) : émotion (surprise, colère) ou après une interjection.`,
        `3. Le point d'interrogation (?) : fin d'une question directe.`,
        `4. Les points de suspension (…) : hésitation, inachèvement, attente ou suspense.`
      ]
    },
    {
      title: 'II - LES SIGNES DE PAUSE INTERMÉDIAIRE',
      content: [
        `5. Le point-virgule (;) : pause moyenne entre propositions liées par le sens, en cas d'ellipse ou de phrases à virgules multiples. Pas de majuscule après.`,
        `6. Les deux points (:) : annonce une énumération, une explication causale ou une citation directe.`,
        `7. La virgule (,) : courte pause, sépare les termes d'une énumération, isole les compléments en tête, marque l'apostrophe et encadre les incises ou appositions.`
      ]
    },
    {
      title: 'III - LES SIGNES D\'ENCADREMENT ET DE DIALOGUE',
      content: [
        `8. Les guillemets (« ») : encadrent les paroles rapportées, citations ou termes au sens particulier.`,
        `9. Les parenthèses ( ) : isolent une précision ou explication accessoire.`,
        `10. Le tiret (–) : marque la prise de parole dans un dialogue ou encadre une explication.`
      ]
    }
  ],
  diagram: {
    title: 'LES 10 SIGNES DE PONCTUATION',
    root: 'LA PONCTUATION',
    branches: [
      {
        name: 'FIN DE PHRASE',
        subtitle: 'Pause forte + Majuscule',
        items: ['Point (.)', 'Point d\'exclamation (!)', 'Point d\'interrogation (?)', 'Points de suspension (...)']
      },
      {
        name: 'DANS LA PHRASE',
        subtitle: 'Pauses & Liens',
        items: ['Virgule (,)', 'Point-virgule (;)', 'Deux points (:)']
      },
      {
        name: 'DISCOURS & PRÉCISIONS',
        subtitle: 'Encadrement',
        items: ['Guillemets (« »)', 'Parenthèses ( )', 'Tiret (–)']
      }
    ]
  },
  conclusion: `La ponctuation structure la pensée écrite, rythme la lecture à voix haute et donne le ton et le sens exact de chaque énoncé.`
};

// ----------------------------------------------------------------------------
// LEÇON 7 : LES GROUPES FONCTIONNELS
// ----------------------------------------------------------------------------
export const LESSON_7_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LES GROUPES FONCTIONNELS',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `La fonction grammaticale est le rôle que joue le mot dans le groupe ou dans la phrase. Il faut distinguer les fonctions dans la phrase (sujet, verbe, COD, COI, attribut, complément d'agent, circonstanciel) des fonctions au sein du groupe nominal (déterminant, épithète, complément du nom, apposition).`,
  fullText: `LES GROUPES FONCTIONNELS

La fonction grammaticale est le rôle que joue le mot dans le groupe ou dans la phrase. Le nom et le groupe nominal ont différentes fonctions soit dans la phrase soit dans le groupe nominal qui, lui-même, peut avoir diverses fonctions.

I – Les fonctions dans la phrase :
Dans une phrase, les mots ont différentes fonctions :
1 - Le sujet :
Généralement placé avant le verbe, il lui impose l'accord. Il peut être remplacé par un pronom personnel. Agent à la forme active, il subit l'action à la forme passive.
Exemples :
- Cette femme a acheté la maison. (cette femme = sujet agent)
- La maison a été achetée par cette femme. (la maison = sujet patient)

2 - Le verbe :
C'est le noyau de la phrase verbale. Il dit ce que fait, ce qu’est, ce qu’a le sujet ou en montre l’état.
Exemples :
- Les enfants regardent la télévision. (action)
- Cet homme est un grand lutteur. (identité/nature)
- Moussa a l’air malade. (état)

3 - Le complément d'objet direct (COD) :
Il se construit généralement après le verbe, sans préposition et répond aux questions « qui ? » ou « quoi ? » après le verbe. Remplaçable par le, la, les.
Exemple : L'enfant étudie sa leçon -> L’enfant l’étudie.

4 - Le complément d'objet indirect (COI) :
Il est rattaché au verbe par une préposition (sauf pronoms me, te, lui, nous, vous, leur, en, y). Il répond aux questions à qui, à quoi, de qui, de quoi.
Exemples : Il parle de ses vacances à ses amis. / Le directeur s’adresse aux élèves.

5 - L'attribut :
C’est un adjectif ou un nom qui qualifie le sujet ou le COD par le biais d’un verbe attributif ou verbe d’état ; il s’accorde avec ce sujet ou ce COD.
Exemples :
- Daniel a été élu délégué. (attribut du sujet)
- Les élèves ont élu Catherine déléguée. (attribut du COD)

6 - Le complément d'agent :
N'existe qu'avec un verbe à la forme passive. Il indique l'acteur de l'action, introduit par la préposition « par ».
Exemple : Le piéton a été renversé par la voiture. (« par la voiture » = complément d'agent).

7 - Le complément circonstanciel :
Il indique le moment, le lieu, la cause, le but,... de l'action. Déplaçable et souvent supprimable.
Exemple : La semaine prochaine (temps), nous irons rendre visite à mon oncle au village (lieu).

II – Les fonctions dans le groupe nominal :
Le nom noyau règle l'accord avec les déterminants et les éléments qui l'accompagnent.
Exemple : Les meilleurs élèves, fêtés par l’école, sont récompensés.
- « les » : déterminant
- « élèves » : nom noyau, sujet du verbe
- « meilleurs » : épithète liée
- « fêtés par l’école » : mis en apposition

III - Nature des groupes fonctionnels :
1 - Le sujet peut être :
- un nom : Moussa n’est pas venu.
- un pronom : Il n’est pas venu.
- un infinitif : Réussir sous-entend travailler durement.
- une proposition subordonnée : Qui veut réussir doit travailler durement.

2 - Le complément d’objet peut être :
- un nom : Nous étudierons votre dossier.
- un pronom : Je parle d’elle.
- une subordonnée : Nous attendrons que le dossier soit enregistré.
- un infinitif : Elle ne renoncera pas à partir.

3 - L’attribut peut être :
- un participe : Elle reste hésitante. Elle est désespérée.
- un adverbe : Votre devoir est très bien.
- un groupe nominal : Elle est de bonne humeur.
- un nom : Coumba est (une) infirmière.
- un pronom : Elle l’est.
- une proposition subordonnée : Elle n’est pas qui vous croyez.
- un infinitif : Travailler n’est pas jouer.

4 - Le complément d’agent peut être :
- un nom : L'élève est interrogé par le professeur.
- un pronom : Le gardien est félicité par tous.
- une subordonnée relative indéfinie : Il sera ramené par qui le trouvera.

5 - Le complément circonstanciel peut être : nom, pronom, infinitif, adverbe, gérondif (Il parle en bégayant), proposition (Il partira quand vous arriverez).

6 – L’apposition peut être : groupe nominal, pronom, infinitif (Un de ses plaisirs, lire, lui fait...), subordonnée (Moussa, qui semble très intelligent, a commis une erreur).

7 – Le déterminant peut être : adjectif possessif, démonstratif, numéral, indéfini ou article.

8 – L’épithète : adjectif qualificatif, participe passé ou participe présent adjectivé (ex : Les problèmes rencontrés ont été rapidement résolus).

9 – Le complément du nom peut être : nom propre (L'ordinateur de Paul), nom commun, groupe nominal, pronom, adverbe (vision de loin), infinitif (la joie de réussir), proposition subordonnée (la perspective qu’il réussisse).`,
  sections: [
    {
      title: 'I - FONCTIONS DANS LA PHRASE',
      content: [
        `1. Sujet : fait ou subit l'action, impose l'accord au verbe.`,
        `2. Verbe : noyau de la phrase, action ou état.`,
        `3. COD : objet direct sans préposition (qui ? quoi ?).`,
        `4. COI : objet indirect avec préposition (à qui ? de quoi ?).`,
        `5. Attribut : qualifie le sujet (verbe d'état) ou le COD.`,
        `6. Complément d'agent : auteur de l'action à la voix passive (introduit par « par »).`,
        `7. Complément circonstanciel : précise le temps, le lieu, le moyen, la cause, le but.`
      ]
    },
    {
      title: 'II - FONCTIONS DANS LE GROUPE NOMINAL',
      content: [
        `Le nom noyau est accompagné de :`,
        `- Déterminant (article ou adjectif possessif, démonstratif, etc.).`,
        `- Épithète (adjectif ou participe relié directement).`,
        `- Complément du nom (relié par une préposition : de, à, en...).`,
        `- Apposition (séparée par des virgules).`
      ]
    },
    {
      title: 'III - NATURES GRAMMATICALES DES GROUPES',
      content: [
        `Chaque fonction peut être assurée par un nom, un pronom, un verbe à l'infinitif ou une proposition subordonnée complète.`
      ]
    }
  ],
  diagram: {
    title: 'GROUPES FONCTIONNELS',
    root: 'FONCTIONS',
    branches: [
      {
        name: 'DANS LA PHRASE',
        subtitle: 'Autour du verbe',
        items: ['Sujet', 'COD & COI', 'Attribut (sujet / COD)', 'Complément d\'agent', 'Compléments circonstanciels']
      },
      {
        name: 'DANS LE GROUPE NOMINAL',
        subtitle: 'Autour du nom',
        items: ['Déterminant', 'Épithète (liée ou détachée)', 'Complément du nom', 'Apposition']
      }
    ]
  },
  conclusion: `La fonction représente le rôle d'un mot dans l'énoncé. On distingue les fonctions régies par le verbe (sujet, objets, attributs, compléments d'agent et circonstanciels) des expansions internes au groupe nominal (épithète, complément du nom, apposition).`
};

// ----------------------------------------------------------------------------
// LEÇON 8 : JUXTAPOSITION - COORDINATION - SUBORDINATION
// ----------------------------------------------------------------------------
export const LESSON_8_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-8',
  number: 'LEÇON 8',
  title: 'JUXTAPOSITION - COORDINATION - SUBORDINATION',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Dans la phrase composée ou la phrase complexe, les propositions s'articulent selon trois modes de liaison : la juxtaposition (signe de ponctuation), la coordination (conjonction de coordination ou adverbe de liaison) ou la subordination (relation de dépendance où une subordonnée dépend d'une proposition principale).`,
  fullText: `JUXTAPOSITION - COORDINATION - SUBORDINATION

Dans la phrase composée ou la phrase complexe, les propositions sont juxtaposées, coordonnées ou subordonnées.

I – La juxtaposition :
Des propositions de même nature qui, dans une phrase, sont placées les unes à côté des autres, sans l'aide d'une conjonction ou d’un pronom relatif, sont dites juxtaposées. Elles sont alors séparées par une ponctuation : virgule, point-virgule, deux points…
Exemples :
- Il a réussi à son examen ; il avait beaucoup travaillé.
- Il est parti, il avait un rendez-vous.

II – La coordination :
La coordination est la relation qui unit des éléments de même statut. Cette relation peut concerner des phrases ou des propositions.
Exemples :
- Je le trouve aussi démuni que moi mais je ne demande rien à personne.
- L'hivernage est venu et les premières pluies sont tombées.
Elle peut aussi concerner des mots : sujet, verbe, attribut…
Exemples : Ils sont rapides et décidés. / Ils vivent et se comportent comme des riches.
La coordination est réalisée à l'aide de mots outils nommés conjonctions de coordination : mais, ou, et, donc, or, ni, car.

III – La subordination :
1 – Définition :
La subordination est la relation qui s'établit entre deux éléments de la phrase dont l’un dépend de l’autre ; l’un des éléments ne peut pas exister seul sans l’autre.
Exemple : J'ai visité le jardin de ma voisine. (« de ma voisine » est subordonné à « le jardin »).

2 - La proposition subordonnée :
Une proposition subordonnée est placée sous la dépendance d'une autre proposition (la principale). Les mots de liaison sont appelés conjonctions de subordination ou pronoms relatifs.
On distingue quatre grandes catégories :

a - Les subordonnées complétives :
Compléments d'objet, introduites par la conjonction « que » ou des locutions (de ce que, à ce que, quand, ce que).
Exemple : Je vois que tu as bien travaillé. / Je vois la fille jouer dans la cour (infinitive complétive).

b - Les propositions subordonnées relatives :
Compléments de nom ou de pronom (de l’antécédent), introduites par les pronoms relatifs : qui, que, dont, où, lequel, laquelle, desquels, auquel, etc.
Exemple : J’ai lu le livre dont tu m’avais parlé. / Les histoires auxquelles tu fais allusion sont anciennes.

c - Les propositions subordonnées circonstancielles :
Introduites par des conjonctions simples (que, quand, comme, si), composées (lorsque, quoique, puisque) ou des locutions (alors que, avant que, après que, pour que, bien que, de manière que...).
Elles sont classées d'après sept catégories :
- Circonstancielles temporelles :
  * Simultanéité : pendant que, tandis que, comme, au moment où, quand, lorsque, alors que, tant que...
  * Antériorité : avant que, jusqu’à ce que, en attendant que...
  * Postériorité : après que, dès que, depuis que, aussitôt que, sitôt que...
  Exemple : Quand il eut acheté le livre, il le parcourut rapidement.
- Circonstancielles finales (but) : pour que, afin que, de crainte que, de peur que... (ex : Je te laisse pour que tu puisses vaquer à tes occupations).
- Circonstancielles consécutives (conséquence) : de sorte que, au point que, si bien que, tellement... que (ex : Il a tellement mangé qu’il n’arrive pas à prier convenablement).
- Circonstancielles causales (cause) : parce que, puisque, comme, sous prétexte que, vu que... (ex : Je suis restée chez moi parce que j’avais du travail).
- Circonstancielles concessives (opposition/concession) : bien que, quoique, sans que... (ex : Bien qu’il soit très fatigué, il est venu à la cérémonie).
- Circonstancielles comparatives : comme, ainsi que... (ex : Il a travaillé ainsi que son père le faisait).
- Circonstancielles hypothétiques (condition) : si, à condition que, pourvu que, à supposer que, au cas où... (ex : S’il ne pleuvait pas, je sortirais).

Remarque 1 (Emboîtement) : Une subordonnée peut être la principale d'une sous-subordonnée (ex : Mon ami m'a dit [1] qu'il avait été surpris [2] quand il a appris la nouvelle [3]).
Remarque 2 (« car » vs « parce que ») : « car » est une conjonction de coordination non déplaçable en tête de phrase ; « parce que » est une conjonction de subordination déplaçable avec sa proposition (ex : Parce qu’elle préfère lire, elle ne vient pas).

d - Les subordonnées participiales :
Le verbe au participe passé ou présent possède son sujet propre.
Exemples : Le vent aidant, ils ont rapidement traversé la mer. / Les élèves réunis, le principal leur fixa les règles.

e - Les subordonnées infinitives :
Le verbe à l’infinitif a son propre sujet.
Exemple : J’ai vu les voleurs se répartir le butin.`,
  sections: [
    {
      title: 'I - JUXTAPOSITION ET COORDINATION',
      content: [
        `Juxtaposition : propositions reliées par un signe de ponctuation (, ; :) sans mot de liaison (ex : Il est parti, il avait un rendez-vous).`,
        `Coordination : propositions reliées par une conjonction de coordination (mais, ou, et, donc, or, ni, car) ayant le même statut grammatical (ex : L'hivernage est venu et les premières pluies sont tombées).`
      ]
    },
    {
      title: 'II - LA SUBORDINATION',
      subsections: [
        {
          subtitle: '1. Définition et principe',
          content: [
            `La subordonnée est sous la dépendance d'une proposition principale et ne peut former une phrase complète à elle seule.`
          ]
        },
        {
          subtitle: '2. Types de subordonnées',
          content: [
            `- Complétives : introduites par « que », compléments d'objet (Je crois que vous vous trompez).`,
            `- Relatives : introduites par un pronom relatif, complètent un antécédent (Le livre dont tu m'as parlé).`,
            `- Infinitives et participiales : verbe à l'infinitif ou participe avec son propre sujet (J'ai vu les voleurs fuir / Le vent aidant, ils partirent).`
          ]
        },
        {
          subtitle: '3. Tableau des 7 subordonnées circonstancielles',
          content: [
            `Temporelles, Finales, Consécutives, Causales, Concessives, Comparatives et Hypothétiques.`
          ],
          table: {
            headers: ['Nuance', 'Conjonctions principales', 'Exemple'],
            rows: [
              ['Temps', 'quand, lorsque, pendant que, dès que, avant que', 'Quand il eut acheté le livre, il le parcourut.'],
              ['Cause', 'parce que, puisque, comme, vu que', 'Je suis restée parce que j’avais du travail.'],
              ['Conséquence', 'si bien que, de sorte que, tellement... que', 'Il a tellement mangé qu\'il a mal au ventre.'],
              ['But (finale)', 'pour que, afin que, de peur que', 'Je te laisse pour que tu puisses travailler.'],
              ['Concession', 'bien que, quoique, sans que', 'Bien qu\'il soit fatigué, il est venu.'],
              ['Condition', 'si, à condition que, pourvu que, au cas où', 'S\'il ne pleuvait pas, je sortirais.'],
              ['Comparaison', 'comme, de même que, ainsi que', 'Il a travaillé ainsi que son père le faisait.']
            ]
          }
        }
      ]
    }
  ],
  diagram: {
    title: 'LIENS ENTRE PROPOSITIONS',
    root: 'LIAISONS',
    branches: [
      {
        name: 'JUXTAPOSITION',
        subtitle: 'Signe de ponctuation',
        items: ['Virgule (,)', 'Point-virgule (;)', 'Deux-points (:)']
      },
      {
        name: 'COORDINATION',
        subtitle: 'Même niveau grammatical',
        items: ['Mais, ou, et, donc, or, ni, car', 'Adverbes de liaison (puis, ensuite...)']
      },
      {
        name: 'SUBORDINATION',
        subtitle: 'Dépendance de la principale',
        items: ['Complétive (que)', 'Relative (qui, que, dont, où)', 'Circonstancielle (7 nuances)', 'Infinitive & Participiale']
      }
    ]
  },
  conclusion: `Les propositions s'unissent par juxtaposition (ponctuation), par coordination (conjonctions de coordination) ou par subordination (dépendance par conjonctions de subordination ou pronoms relatifs).`
};

// ----------------------------------------------------------------------------
// LEÇON 9 : LES DISCOURS RAPPORTÉS
// ----------------------------------------------------------------------------
export const LESSON_9_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-9',
  number: 'LEÇON 9',
  title: 'LES DISCOURS RAPPORTÉS',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Dans un récit, les paroles peuvent être rapportées directement (discours direct), transposées et intégrées dans la phrase (discours indirect) ou fusionnées sans verbe introducteur (discours indirect libre). Cette transposition obéit à des règles strictes de concordance des temps et de modification des repères spatio-temporels.`,
  fullText: `LES DISCOURS RAPPORTES

Dans un récit, les paroles peuvent être rapportées indirectement. Elles sont alors intégrées au récit dont elles ne rompent pas la progression. Ce procédé appelé discours indirect impose de nombreuses transformations dans la phrase. Entre ces deux types de discours s’intercale le discours indirect libre.
Les discours sont rapportés par le biais de verbes appelés verbes de parole.

I – Les discours direct, indirect, indirect libre :
1. Le discours direct :
Il s’agit d’un discours rapporté directement : quelqu’un rapporte les paroles de quelqu’un d’autre telles qu’elles ont été énoncées. Les propos rapportés directement sont mis entre guillemets.
Exemple : Puis le prêtre dira le dimanche : « Mes chers enfants, priez pour tous ces prisonniers qui meurent sans avoir fait leur paix avec Dieu. » (Ferdinand Oyono, Une vie de boy)

2. Le discours indirect :
Dans le discours direct, il y a transformation, transposition — selon un certain nombre de règles — de la parole rapportée directement. C’est pourquoi on parle de discours transposé.
Exemple : Passons du discours direct au discours indirect avec l’exemple précédent :
Puis le prêtre dira le dimanche à ses chers enfants de prier pour tous ces prisonniers qui meurent sans avoir fait leur paix avec Dieu.
Les paroles sont insérées dans une subordonnée introduite par « que », « si » ou « de + infinitif », après un verbe introducteur.

Tableau 1 : Les modifications de temps dans le style indirect (après un verbe au passé) :
- Présent -> Imparfait (Il m'a dit : « je vais bien » -> Il m'a dit qu'il allait bien)
- Futur -> Conditionnel présent (Il m'a dit : « je téléphonerai » -> Il m'a dit qu'il téléphonerait)
- Futur antérieur -> Conditionnel passé (Il m'a dit : « nous aurons terminé » -> Il m'a dit qu'ils auraient terminé)
- Passé composé -> Plus-que-parfait (Il m'a dit : « J'ai tout vendu » -> Il m'a dit qu'il avait tout vendu)

Tableau 2 : Les marqueurs de temps :
- Aujourd'hui -> Ce jour-là
- Hier -> La veille
- Demain -> Le lendemain
- (jour) prochain -> Le (jour) suivant

Tableau 3 : Les pronoms et déterminants :
- Pronoms : « Je suis là » -> qu'il était là / « Tu viendras » -> que je viendrais / « Vous viendrez » -> que nous viendrions.
- Démonstratifs : ce livre -> ce livre-là / cet enfant -> cet enfant-là.
- Possessifs : votre livre -> mon livre / vos livres -> nos/mes livres / sa voiture / mon problème.

Tableau 4 : Autres modifications interrogatives et impératives :
- Est-ce que -> si (Il lui demanda : « Est-ce que tu viendras ? » -> Il lui demanda s'il viendrait).
- Qu'est-ce que / que -> ce que (Il m'a demandé : « Qu'est-ce que tu fais ? » -> Il m'a demandé ce que je faisais).
- Qu'est-ce qui -> ce qui (Il m'a demandé : « Qu'est-ce qui te fait plaisir ? » -> Il m'a demandé ce qui me faisait plaisir).
- Questions inversées -> si (Il lui dit : « Croyez-vous qu'elle viendra ? » -> Il lui a demandé s'il croyait qu'elle viendrait).
- Mots interrogatifs simples (où, quand, comment) -> conservés (Où vas-tu ? -> Il me demande où je vais).
- Impératif -> de + infinitif (Il lui a dit : « Pars ! » -> Il lui a dit de partir).

3. Le discours indirect libre :
Le discours indirect libre modifie les paroles pour les intégrer au récit.
Comme au discours indirect, on modifie les pronoms, le temps et les connecteurs après un récit au passé. C'est un style intermédiaire qui supprime l'élément introducteur et les guillemets : les modalités interrogatives et exclamatives sont maintenues.
Exemple : Emile songea qu'il fallait faire le déplacement. Mais il n'avait pas encore choisi le moment. La semaine prochaine ? Pourquoi pas ? Pourvu qu'il n'y ait pas trop de monde sur les routes ! Il verrait bien !

II - Les verbes de parole :
1. Signification et place :
- En tête de réplique : Une secrétaire lui disait : « Monsieur le directeur... » (Tierno Monenembo).
- En proposition incise : « Gens du Diallobé, dit-elle au milieu d'un grand silence, je vous salue. » (Cheikh Hamidou Kane, L’aventure ambiguë).
- En proposition principale au style indirect : Il affirma que sa grand-mère avait un secret.

2. Variété des verbes de parole :
- Phrase déclarative : dire, affirmer, déclarer, répéter, annoncer, ajouter, poursuivre, préciser, confirmer, raconter, noter, conclure...
- Phrase interrogative : demander, questionner, interroger, s’enquérir, s’informer...
- Phrase exclamative : s’écrier, s’exclamer, se récrier, s’indigner...
- Réponse / réplique : répondre, répliquer, rétorquer, riposter...
- Voix forte : crier, hurler, vociférer, rugir... ; voix faible : murmurer, chuchoter, susurrer...
- Articulation : bredouiller, bégayer, marmonner, balbutier...`,
  sections: [
    {
      title: 'I - LES TROIS FORMES DE DISCOURS',
      content: [
        `1. Discours direct : paroles brutes telles qu'énoncées, encadrées de guillemets après deux-points ou avec tirets.`,
        `2. Discours indirect : paroles transposées dans une subordonnée, avec ajustement des pronoms, des temps et des repères temporels.`,
        `3. Discours indirect libre : paroles intégrées directement sans verbe introducteur ni guillemets, tout en conservant l'intonation et les exclamations/interrogations.`
      ]
    },
    {
      title: 'II - RÈGLES DE TRANSPOSITION DU DISCOURS INDIRECT',
      content: [
        `Concordance des temps au passé :`,
        `- Présent -> Imparfait`,
        `- Futur simple -> Conditionnel présent`,
        `- Futur antérieur -> Conditionnel passé`,
        `- Passé composé -> Plus-que-parfait`,
        `Marqueurs de temps : Aujourd'hui -> ce jour-là ; Demain -> le lendemain ; Hier -> la veille ; La semaine prochaine -> la semaine suivante.`
      ]
    },
    {
      title: 'III - LES VERBES DE PAROLE',
      content: [
        `Le verbe « dire » est neutre. On enrichit le dialogue avec des verbes expressifs selon l'intention (affirmer, ordonner, supplier), l'émotion (s'indigner, s'exclamer), ou le volume de la voix (chuchoter, hurler, bredouiller).`
      ]
    }
  ],
  diagram: {
    title: 'DISCOURS RAPPORTÉS',
    root: 'PAROLES DANS LE RÉCIT',
    branches: [
      {
        name: 'DISCOURS DIRECT',
        subtitle: 'Paroles authentiques',
        items: ['Deux-points et guillemets (« »)', 'Verbe introducteur ou incise', 'Ponctuation expressive maintenue']
      },
      {
        name: 'DISCOURS INDIRECT',
        subtitle: 'Paroles transposées',
        items: ['Subordonnée avec que/si/de', 'Concordance des temps passés', 'Changement pronoms & adverbes']
      },
      {
        name: 'INDIRECT LIBRE',
        subtitle: 'Fusion narrative',
        items: ['Sans verbe introducteur', 'Sans guillemets', 'Ton vivant et expressif']
      }
    ]
  },
  conclusion: `Rapporter des paroles exige de maîtriser les trois styles (direct, indirect, indirect libre) et les règles de transposition temporelle et pronominale.`
};

// ----------------------------------------------------------------------------
// LEÇON 10 : LE VERBE : CLASSEMENT – MODE ET TEMPS
// ----------------------------------------------------------------------------
export const LESSON_10_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-10',
  number: 'LEÇON 10',
  title: 'LE VERBE : CLASSEMENT – MODE ET TEMPS',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Les verbes français sont classés en trois groupes selon la terminaison de leur infinitif. Ils se conjuguent à sept modes (quatre personnels et trois impersonnels) qui expriment la manière dont l'action est envisagée (réelle, éventuelle, ordonnée, souhaitée, etc.) et à différents temps du passé, du présent et du futur.`,
  fullText: `LE VERBE : CLASSEMENT – MODE ET TEMPS

I – Le classement des verbes :
Les verbes sont traditionnellement classés en 3 groupes :
- 1er groupe : verbes terminés en « -er » (aimer, penser, regarder, etc.), sauf aller.
- 2e groupe : verbes terminés en « -ir » qui prennent « -issons » aux personnes du pluriel du présent de l’indicatif (finir -> nous finissons, vomir, etc.).
- 3e groupe : verbes terminés en « -oir » (vouloir, pouvoir, savoir), en « -re » (apprendre, mettre), en « -ir » sans -iss- (courir, venir, servir) et le verbe Aller.

II – Modes et temps du verbe :
Les modes représentent la manière dont l'action exprimée par le verbe est conçue et présentée.
Les 7 modes du verbe :
- L'indicatif : présente l'action comme réelle et certaine.
- Le conditionnel : présente l'action comme éventuelle ou soumise à condition.
- L'impératif : présente l'action comme un ordre, conseil ou prière.
- Le subjonctif : présente l'action comme désirée, envisagée ou douteuse.
- L'infinitif : nomme l'action sans précision de personne.
- Le participe : exprime l'action comme un adjectif.
- Le gérondif : indique une circonstance (forme adverbiale du verbe).

Modes personnels (se conjuguent avec pronoms de personnes) : Indicatif, Conditionnel, Impératif, Subjonctif.
Modes impersonnels (invariables en personne) : Infinitif, Participe, Gérondif.

1 – Le mode indicatif et ses valeurs :
8 temps (4 temps simples, 4 temps composés) :
- Présent :
  * Présent d'énonciation : moment où l'on parle (ex : Je lui prête mon stylo).
  * Présent d'habitude : fait répété (ex : Tous les jours je prends le bus).
  * Présent de vérité générale (gnomique) : La parole se suspend, mais la vie, elle, ne se suspend pas (C. A. Kane, L’aventure ambiguë).
  * Passé récent ou futur proche : Je le quitte à l'instant / J'arrive dans cinq minutes.
  * Présent de narration : rend vivant un récit au passé (Jean Ikelle-Matiba).
- Imparfait : action passée non délimitée dans sa durée, description, répétition ou simultanéité (Ousmane Socé Diop, Ahmadou Kourouma, Ferdinand Oyono).
- Passé simple : actions de premier plan, successives et délimitées dans le récit passé (Oyono, Kourouma).
- Passé composé : fait achevé ayant un lien ou des conséquences dans le présent.
- Plus-que-parfait : antériorité par rapport à un fait passé à l'imparfait.
- Passé antérieur : antériorité immédiate par rapport au passé simple.
- Futur simple : action à venir, ordre atténué ou formule de politesse.
- Futur antérieur : action future achevée avant une autre action future, ou supposition.

2 – Le mode subjonctif :
Présente l'action comme une éventualité, un souhait, un doute ou un ordre (3e personne) :
- Présent du subjonctif : Je doute qu'il réussisse / Qu'il sorte !
- Passé du subjonctif : Je souhaite qu'il ait réussi.
- Imparfait du subjonctif : Je craignais qu'il partît seul.
- Plus-que-parfait du subjonctif : Je regrettais qu'il fût parti de si bonne heure.

3 – Le mode conditionnel :
Action possible soumise à condition, futur du passé ou fait imaginaire :
- Présent : Il disait qu'il viendrait / Si j'étais riche, je voyagerais.
- Passé : Il aurait pu avoir la meilleure note.

4 – Le mode impératif :
Ordre, défense, conseil (3 personnes : 2e sg, 1re pl, 2e pl) : Marche, marchons, marchez !

5 – Le mode infinitif : présent (partir) et passé (être parti, avoir vu).
6 – Le mode participe : présent (faisant), adjectif verbal (intéressante), gérondif (en chantant), participe passé (arrosé).`,
  sections: [
    {
      title: 'I - CLASSEMENT EN 3 GROUPES',
      content: [
        `1er groupe : verbes en -er (aimer, parler), réguliers sauf aller.`,
        `2e groupe : verbes en -ir avec participe en -issant (finir -> finissant / nous finissons).`,
        `3e groupe : verbes en -re, -oir, -ir sans -iss-, et aller (irréguliers).`
      ]
    },
    {
      title: 'II - LES 7 MODES DU VERBE',
      content: [
        `Modes personnels : Indicatif (certitude/réel), Conditionnel (éventualité/condition), Impératif (ordre), Subjonctif (souhait/doute).`,
        `Modes impersonnels : Infinitif (nom du verbe), Participe (forme adjective/verbale), Gérondif (en + participe présent, circonstance).`
      ]
    },
    {
      title: 'III - VALEURS DES TEMPS DE L\'INDICATIF',
      content: [
        `Présent : énonciation, habitude, vérité générale, narration.`,
        `Passé : imparfait (durée, second plan, description) vs passé simple (actions brèves successives de premier plan) ; passé composé (lien avec présent) ; plus-que-parfait et passé antérieur (antériorité).`,
        `Futur : futur simple (action à venir, ordre poli) et futur antérieur (antériorité future, hypothèse).`
      ]
    }
  ],
  diagram: {
    title: 'SYSTÈME VERBAL',
    root: 'LE VERBE',
    branches: [
      {
        name: '3 GROUPES',
        subtitle: 'Terminaisons',
        items: ['1er groupe (-er)', '2e groupe (-ir en -issant)', '3e groupe (-re, -oir, -ir, aller)']
      },
      {
        name: '4 MODES PERSONNELS',
        subtitle: 'Avec personnes (je, tu...)',
        items: ['Indicatif (8 temps)', 'Subjonctif (4 temps)', 'Conditionnel (3 temps)', 'Impératif (2 temps)']
      },
      {
        name: '3 MODES IMPERSONNELS',
        subtitle: 'Sans personnes',
        items: ['Infinitif (présent/passé)', 'Participe (présent/passé)', 'Gérondif (en + -ant)']
      }
    ]
  },
  conclusion: `Le verbe constitue le cœur de la syntaxe. Ses 3 groupes, 7 modes et multiples temps permettent d'exprimer avec exactitude le degré de réalité et la chronologie de chaque action.`
};

// ----------------------------------------------------------------------------
// LEÇON 11 : LES FORMES DU VERBE : FORME PERSONNELLE ET IMPERSONNELLE
// ----------------------------------------------------------------------------
export const LESSON_11_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-11',
  number: 'LEÇON 11',
  title: 'LES FORMES DU VERBE : FORME PERSONNELLE ET FORME IMPERSONNELLE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Une phrase de forme impersonnelle se caractérise par l'emploi d'un verbe conjugué à la troisième personne du singulier et d'un pronom sujet « il » (plus rarement « c' ») ne représentant rien ni personne.`,
  fullText: `LES FORMES DU VERBE : FORME PERSONNELLE, FORME IMPERSONNELLE

I - Définition :
• Une phrase de forme impersonnelle se caractérise par l'emploi d'un verbe conjugué à la troisième personne du singulier et d'un pronom sujet « il » (plus rarement « c' ») ne représentant rien ni personne.
Exemple : Il faut qu’on fasse ce travail.

• Dans une phrase de forme impersonnelle, on distingue :
- Les verbes essentiellement impersonnels : qui n'existent qu'à cette forme (météorologie et nécessité) :
  * il pleut, il gèle, il vente, il faut, il y a, il est question de, il fait nuit/jour, etc.
- Les verbes occasionnellement impersonnels : qui peuvent également être employés dans une phrase de forme personnelle :
  * il convient de, il importe de, il est prouvé que, il s'est produit, il s'agit de, il se peut que, il semble que, il est certain que, etc.

Remarque : Un même verbe peut être employé dans les deux formes :
- Il m'a prouvé qu'il avait raison (forme personnelle : sujet réel « il » = la personne).
- Il est prouvé que les absents ont toujours tort (forme impersonnelle : sujet apparent « il » neutre).

II - De la forme personnelle à la forme impersonnelle :
Par comparaison à la phrase personnelle correspondante, on remarque que le groupe qui était sujet apparaît en fin de phrase comme complément du verbe impersonnel (ou séquence impersonnelle).
Exemples :
- Phrase personnelle : Un phénomène inexplicable s’est produit.
  -> Phrase impersonnelle : Il s’est produit un phénomène inexplicable.
- Phrase personnelle : Beaucoup de choses ont été dites sur son compte.
  -> Phrase impersonnelle : Il s’est dit beaucoup de choses sur son compte.`,
  sections: [
    {
      title: 'I - DÉFINITION ET CARACTÉRISTIQUES',
      content: [
        `Sujet grammatical neutre « il » qui ne renvoie à aucun être réel.`,
        `Le verbe est toujours figé à la 3e personne du singulier.`,
        `Exemple : Il faut partir tôt.`
      ]
    },
    {
      title: 'II - VERBES ESSENTIELS ET OCCASIONNELS',
      content: [
        `Verbes essentiellement impersonnels : météo (il pleut, il vente, il neige), nécessité (il faut), existence (il y a).`,
        `Verbes occasionnellement impersonnels : il arrive que, il convient de, il paraît que, il semble que.`
      ]
    },
    {
      title: 'III - TRANSFORMATION PERSONNELLE -> IMPERSONNELLE',
      content: [
        `Le sujet réel de la phrase personnelle devient complément du verbe impersonnel :`,
        `- Un train est arrivé -> Il est arrivé un train.`,
        `- Des erreurs ont été commises -> Il s'est commis des erreurs.`
      ]
    }
  ],
  diagram: {
    title: 'FORMES DU VERBE',
    root: 'PERSONNELLE / IMPERSONNELLE',
    branches: [
      {
        name: 'FORME PERSONNELLE',
        subtitle: 'Sujet réel identifié',
        items: ['Je, tu, il, nous, vous, ils', 'Accord complet en genre/nombre']
      },
      {
        name: 'FORME IMPERSONNELLE',
        subtitle: 'Sujet neutre « il »',
        items: ['Verbes météo (il pleut)', 'Verbe falloir (il faut)', 'Verbes occasionnels (il arrive, il convient)']
      }
    ]
  },
  conclusion: `La forme impersonnelle recourt au pronom neutre « il » à la 3e personne du singulier pour énoncer des faits généraux, des phénomènes naturels ou mettre en relief le sujet réel reporté en fin de phrase.`
};

// ----------------------------------------------------------------------------
// LEÇON 12 : LES AUXILIAIRES ÊTRE ET AVOIR
// ----------------------------------------------------------------------------
export const LESSON_12_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-12',
  number: 'LEÇON 12',
  title: 'LES AUXILIAIRES ÊTRE ET AVOIR',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Les verbes Être et Avoir sont appelés auxiliaires lorsqu'ils servent à former les temps composés des autres verbes et la voix passive. Leur emploi détermine les règles fondamentales d'accord du participe passé.`,
  fullText: `LES AUXILIAIRES ETRE ET AVOIR

Les verbes Être et Avoir sont appelés auxiliaires parce qu’ils servent à former les temps composés des autres verbes.
Exemples : Il a beaucoup travaillé. / Je suis surpris par sa réaction.

I – L’auxiliaire Avoir :
On l’emploie pour former les temps composés :
1 - Des verbes avoir et être : J'ai eu de bonnes notes / J'ai été sélectionné.
2 - De tous les verbes transitifs (directs ou indirects) : J'ai lu un livre / J'ai parlé à ma fille.
3 - De la plupart des verbes intransitifs : J'ai beaucoup travaillé ce matin.
4 - De tous les verbes impersonnels : Il aura fallu dix minutes pour ouvrir.

II – L’auxiliaire Être :
On l’emploie pour former :
1 - Tous les temps des verbes passifs : La voiture a été réparée.
2 - Les temps composés des verbes pronominaux : Je me suis levé à huit heures.
3 - Les temps composés de certains verbes intransitifs exprimant un mouvement ou un changement d'état : aller, arriver, descendre, entrer, monter, mourir, naître, partir, rester, retourner, sortir, tomber, venir, repartir, intervenir, provenir, survenir, parvenir, revenir...

Remarques importantes :
- Les verbes contrevenir, prévenir, subvenir se conjuguent avec Avoir ; le verbe convenir accepte les deux auxiliaires (Nous avons convenu de nous voir / Nous sommes convenus que cela ne convient pas).
- Les verbes descendre, monter, rentrer, sortir, passer et retourner se conjuguent avec Avoir lorsqu'ils sont employés de manière transitive (avec un COD) et avec Être au sens intransitif :
  * Exemple transitif : J’ai retourné la voiture chez le mécanicien.
  * Exemple intransitif : Je suis retourné plusieurs fois au bureau.
- Le verbe demeurer au sens de « habiter » se conjugue avec Avoir : « Je suis demeuré (resté) 3 mois à Paris où j'ai demeuré (habité) au quartier latin ».

Attention à l'accord du participe passé :
- Avec Avoir : accord en genre et en nombre avec le COD si celui-ci est placé avant le verbe (ex : Elle l'a achetée, cette robe).
- Avec Être : accord avec le sujet du verbe (ex : Les filles sont arrivées).`,
  sections: [
    {
      title: 'I - EMPLOI DE L\'AUXILIAIRE AVOIR',
      content: [
        `Temps composés de avoir et être (j'ai eu, j'ai été).`,
        `Tous les verbes transitifs (directs et indirects).`,
        `La majorité des verbes intransitifs et tous les verbes impersonnels (il a fallu).`
      ]
    },
    {
      title: 'II - EMPLOI DE L\'AUXILIAIRE ÊTRE',
      content: [
        `Voix passive (La porte a été fermée).`,
        `Verbes pronominaux (Elle s'est levée).`,
        `Verbes intransitifs de mouvement/changement d'état : aller, venir, partir, naître, mourir, rester, tomber...`
      ]
    },
    {
      title: 'III - VERBES À DOUBLE AUXILIAIRE SELON LE SENS',
      content: [
        `Monter, descendre, sortir, rentrer, retourner, passer :`,
        `- Avec Avoir si COD (transitif) : J'ai descendu les valises.`,
        `- Avec Être si sans COD (intransitif) : Je suis descendu par l'escalier.`,
        `Demeurer : avec être au sens de « rester », avec avoir au sens de « habiter ».'`
      ]
    }
  ],
  diagram: {
    title: 'AUXILIAIRES ÊTRE ET AVOIR',
    root: 'AUXILIAIRES',
    branches: [
      {
        name: 'AVOIR',
        subtitle: 'Majorité des verbes',
        items: ['Verbes transitifs', 'Verbes impersonnels', 'Accord COD si placé avant']
      },
      {
        name: 'ÊTRE',
        subtitle: 'Mouvement & État',
        items: ['Voix passive', 'Verbes pronominaux', 'Verbes de mouvement', 'Accord avec le sujet']
      }
    ]
  },
  conclusion: `Être et Avoir permettent la construction de tous les temps composés. Le choix de l'auxiliaire dépend de la transitivité du verbe, de la voix passive ou pronominale et conditionne les accords du participe passé.`
};

// ----------------------------------------------------------------------------
// LEÇON 13 : LES PÉRIPHRASES VERBALES
// ----------------------------------------------------------------------------
export const LESSON_13_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-13',
  number: 'LEÇON 13',
  title: 'LES PÉRIPHRASES VERBALES',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Également appelés semi-auxiliaires, ce sont des verbes ou locutions verbales qui expriment certains aspects de l’action d’un autre verbe. Ils sont toujours suivis d’un infinitif, constituant ainsi une périphrase verbale (semi-auxiliaires de temps, de mode et d'aspect).`,
  fullText: `LES PERIPHRASES VERBALES

Également appelés semi-auxiliaires, ce sont des verbes ou locutions verbales qui expriment certains aspects de l’action d’un autre verbe. Ils sont toujours suivis d’un infinitif, constituant ainsi une périphrase verbale. On distingue :

I - Les semi-auxiliaires de temps :
Ils servent à exprimer le moment de l’action. Ce sont les verbes suivants :
1 - aller + infinitif pour exprimer le futur proche (ex : Elle va partir = elle partira bientôt).
2 - venir de + infinitif pour exprimer le passé récent (ex : Elle vient de partir = elle est partie il y a peu de temps).
3 - être en train de + infinitif pour exprimer l'action qui est en cours (ex : Elle est en train de partir = elle part en ce moment).
4 - être sur le point de + infinitif pour exprimer le futur imminent (ex : Elle est sur le point de partir = elle est prête à partir).

II - Les semi-auxiliaires de mode :
Suivis d'un infinitif, ils servent à ajouter au verbe une nuance de probabilité, un sentiment, une idée :
1 - devoir + infinitif pour exprimer une action obligatoire, probable, souhaitable (ex : Il doit étudier pour réussir / Il doit être le fils du maître).
2 – pouvoir + infinitif pour exprimer la possibilité, la probabilité ou un souhait (ex : Elle peut venir quand même...).
3 – faillir (avec Avoir), manquer de, avoir été sur le point de + infinitif pour exprimer un fait de peu évité (ex : Il a failli tomber / Il a manqué d'échouer).
4 - avoir beau + infinitif pour exprimer la concession (ex : Il a beau travailler, il reste pauvre).
5 - ne faire que + infinitif pour exprimer la répétition ou la restriction (ex : Elle ne fait que raconter des histoires).
6 - faire + infinitif pour exprimer que le sujet fait accomplir l'action par autrui (ex : Je fais venir le médecin / Je fais coudre une robe).
7 - se faire / se voir / s'entendre + infinitif pour exprimer le sens passif (ex : Ils se sont fait arrêter = ils ont été arrêtés / Il s'est vu abandonner / Il s'est entendu réprimander). Remarque : fait, vu, entendu restent invariables dans cet emploi.

III - Les semi-auxiliaires d’aspect :
Ils indiquent surtout la progression de l'action :
1 - commencer / se mettre à + infinitif pour exprimer le début de l’action (inchoatif) : Il a commencé à construire / L’ouvrier s'est mis à travailler.
2 - être en train de + infinitif pour exprimer la durée de l'action dans le présent ou le passé (duratif) : Il était en train de prendre le thé quand la pluie commença.
3 - finir de / cesser de + infinitif pour exprimer la fin d'une action ou d'une série d'actions (aspect conclusif) : Il a fini de faire ses calculs / Ils ont cessé de faire la grève.`,
  sections: [
    {
      title: 'I - SEMI-AUXILIAIRES DE TEMPS',
      content: [
        `Futur proche : aller + infinitif (Elle va partir).`,
        `Passé récent : venir de + infinitif (Elle vient de partir).`,
        `Imminence : être sur le point de + infinitif.`,
        `Action en cours : être en train de + infinitif.`
      ]
    },
    {
      title: 'II - SEMI-AUXILIAIRES DE MODE',
      content: [
        `Obligation ou probabilité : devoir + infinitif.`,
        `Possibilité ou permission : pouvoir + infinitif.`,
        `Action évitée de justesse : faillir + infinitif / manquer de + infinitif.`,
        `Concession : avoir beau + infinitif (Il a beau travailler...).`,
        `Action causée (faire-faire) : faire + infinitif (Je fais réparer la voiture).`,
        `Sens passif : se faire, se voir, s'entendre + infinitif (invariables).`
      ]
    },
    {
      title: 'III - SEMI-AUXILIAIRES D\'ASPECT',
      content: [
        `Aspect inchoatif (début) : commencer à / se mettre à + infinitif.`,
        `Aspect duratif (déroulement) : être en train de + infinitif.`,
        `Aspect conclusif (fin) : finir de / cesser de + infinitif.`
      ]
    }
  ],
  diagram: {
    title: 'PÉRIPHRASES VERBALES',
    root: 'SEMI-AUXILIAIRE + INFINITIF',
    branches: [
      {
        name: 'TEMPS',
        subtitle: 'Moment de l\'action',
        items: ['Aller (futur proche)', 'Venir de (passé récent)', 'Être sur le point de']
      },
      {
        name: 'MODE',
        subtitle: 'Nuance d\'intention',
        items: ['Devoir (obligation)', 'Pouvoir (possibilité)', 'Faillir (quasi-fait)', 'Avoir beau (concession)']
      },
      {
        name: 'ASPECT',
        subtitle: 'Stade de l\'action',
        items: ['Commencer à (début)', 'Être en train de (durée)', 'Finir de / Cesser de (fin)']
      }
    ]
  },
  conclusion: `Une périphrase verbale associe un semi-auxiliaire conjugué à un infinitif pour apporter une nuance précise de temps, de mode ou d'aspect sans recourir à une proposition subordonnée.`
};
