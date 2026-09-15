import { LessonContent } from './courses';

// ============================================================================
// PARTIE 3 : CONJUGAISON (LEÇONS 22 À 28) - FRANÇAIS 4ÈME
// Fascicule officiel - Programme de Français
// ============================================================================

// ----------------------------------------------------------------------------
// LEÇON 22 : FORMES ET VALEURS DES TEMPS DE L'INDICATIF
// ----------------------------------------------------------------------------
export const LESSON_22_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-22',
  number: 'LEÇON 22',
  title: 'FORMES ET VALEURS DES TEMPS DE L’INDICATIF',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `L'indicatif est le mode du réel et de la certitude. Il comporte huit temps : quatre temps simples (présent, imparfait, passé simple, futur simple) et quatre temps composés formés avec les auxiliaires avoir ou être (passé composé, plus-que-parfait, passé antérieur, futur antérieur).`,
  fullText: `FORMES ET VALEURS DES TEMPS DE L’INDICATIF

L’indicatif est un mode qui sert à exprimer une action certaine ou probable. Il contient huit temps dont quatre temps simples et quatre temps composés.

I - Les temps simples de l'indicatif :
1 - Le présent de l’indicatif :
- Terminaisons du 1er groupe (-er) : -e, -es, -e, -ons, -ez, -ent (j'aime, tu aimes, il aime...).
- Terminaisons du 2e groupe (-ir) : -is, -is, -it, -issons, -issez, -issent (je finis, nous finissons...).
- Terminaisons du 3e groupe : généralement -s, -s, -t (ou -d pour les verbes en -dre comme rendre : -ds, -ds, -d), -ons, -ez, -ont. Verbes pouvoir/vouloir/valoir : -x, -x, -t.
Valeurs du présent :
- Présent d'énonciation : coïncide avec le moment où l'on parle (ex : Le professeur explique la leçon).
- Présent de narration : actualise une action passée pour la rendre vivante.
- Présent de vérité générale : vérités scientifiques, morales ou proverbes (ex : La terre tourne autour du soleil).
- Présent d'habitude : action répétée (ex : Tous les matins, il fait son jogging).
- Futur proche ou passé récent immédiat (ex : J'arrive dans un instant / Il sort à la seconde).

2 - L’imparfait de l’indicatif :
Terminaisons universelles pour tous les groupes : -ais, -ais, -ait, -ions, -iez, -aient.
(Pour le 2e groupe, intercaler l'inflexion -iss- : nous finissions).
Valeurs de l'imparfait :
- Imparfait descriptif : description d'un paysage, d'un lieu ou d'un portrait dans le passé.
- Imparfait d'habitude / itératif : action répétée dans le passé (ex : Chaque soir, il lisait un conte).
- Imparfait d'action secondaire : action en cours non délimitée servant de toile de fond au passé simple.

3 - Le passé simple de l’indicatif :
Temps du récit écrit :
- Verbes en -a (1er groupe et aller) : -ai, -as, -a, -âmes, -âtes, -èrent (j'aimai, tu aimas, il aima, nous aimâmes, vous aimâtes, ils aimèrent).
- Verbes en -i (2e groupe et certains du 3e) : -is, -is, -it, -îmes, -îtes, -irent (je finis, il finit, nous finîmes...).
- Verbes en -u (avoir et certains du 3e) : -us, -us, -ut, -ûmes, -ûtes, -urent (je voulus, nous voulûmes...).
- Verbes en -in (venir, tenir et composés) : -ins, -ins, -int, -înmes, -întes, -inrent (je vins, il vint, nous vînmes...).
Valeur du passé simple : action de premier plan, brève, délimitée, achevée et successive.

4 - Le futur simple de l’indicatif :
Formé sur l'infinitif + terminaisons de l'auxiliaire avoir au présent : -ai, -as, -a, -ons, -ez, -ont.
Valeurs : action à venir, certitude d'un fait futur, valeur d'ordre ou de prière polie (ex : Vous prendrez ce médicament).

II - Les temps composés de l'indicatif :
Formés d’un auxiliaire (avoir ou être) conjugué à un temps simple + le participe passé du verbe :
1 - Le passé composé : Auxiliaire au présent + participe passé.
(J'ai aimé / Je suis parti). Exprime un fait achevé dont les conséquences sont encore sensibles dans le présent.
2 - Le plus-que-parfait : Auxiliaire à l'imparfait + participe passé.
(J'avais aimé / J'étais parti). Exprime l'antériorité par rapport à un fait passé à l'imparfait.
3 - Le passé antérieur : Auxiliaire au passé simple + participe passé.
(J'eus aimé / Je fus parti). Exprime l'antériorité immédiate par rapport au passé simple, souvent introduit par dès que, quand, aussitôt que.
4 - Le futur antérieur : Auxiliaire au futur simple + participe passé.
(J'aurai aimé / Je serai parti). Exprime une action future qui sera achevée avant une autre action future (ex : Quand j'aurai fini, je sortirai).`,
  sections: [
    {
      title: 'I - LES 4 TEMPS SIMPLES',
      content: [
        `Présent : terminaisons -e/-es/-e/-ons/-ez/-ent (1er gr), -is/-is/-it/-issons/-issez/-issent (2e gr), -s/-s/-t ou -ds/-ds/-d ou -x/-x/-t (3e gr).`,
        `Imparfait : terminaisons uniques pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient.`,
        `Passé simple : 4 séries de terminaisons (-ai, -is, -us, -ins). Temps du récit écrit par excellence.`,
        `Futur simple : radical du futur + -ai, -as, -a, -ons, -ez, -ont.`
      ]
    },
    {
      title: 'II - LES 4 TEMPS COMPOSÉS',
      content: [
        `Passé composé : auxiliaire au présent + participe passé (action accomplie liée au présent).`,
        `Plus-que-parfait : auxiliaire à l'imparfait + participe passé (antériorité par rapport au passé).`,
        `Passé antérieur : auxiliaire au passé simple + participe passé (antériorité immédiate avec passé simple).`,
        `Futur antérieur : auxiliaire au futur simple + participe passé (accompli du futur).`
      ]
    }
  ],
  diagram: {
    title: 'LES 8 TEMPS DE L\'INDICATIF',
    root: 'INDICATIF',
    branches: [
      {
        name: 'TEMPS SIMPLES',
        subtitle: '1 seul mot verbal',
        items: ['Présent', 'Imparfait', 'Passé simple', 'Futur simple']
      },
      {
        name: 'TEMPS COMPOSÉS',
        subtitle: 'Auxiliaire + Participe passé',
        items: ['Passé composé', 'Plus-que-parfait', 'Passé antérieur', 'Futur antérieur']
      }
    ]
  },
  conclusion: `L'indicatif est le pivot du système temporel français. La maîtrise de ses huit temps permet de structurer précisément la chronologie et les nuances du récit.`
};

// ----------------------------------------------------------------------------
// LEÇON 23 : FORMES ET VALEURS DES TEMPS DU SUBJONCTIF
// ----------------------------------------------------------------------------
export const LESSON_23_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-23',
  number: 'LEÇON 23',
  title: 'FORMES ET VALEURS DES TEMPS DU SUBJONCTIF',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Le subjonctif est le mode de la possibilité, du doute, de la volonté, du sentiment ou de l'obligation. Il comprend quatre temps : présent, passé, imparfait et plus-que-parfait.`,
  fullText: `FORMES ET VALEURS DES TEMPS DU SUBJONCTIF

Le mode subjonctif s'emploie principalement dans les propositions subordonnées après des verbes exprimant un souhait, un doute, un sentiment, une volonté ou après certaines conjonctions (bien que, pour que, afin que, avant que, à moins que...). Il peut également s'employer dans une proposition indépendante pour exprimer un ordre (à la 3e personne) ou un souhait.

I - Le présent du subjonctif :
1. Terminaisons :
Pour tous les groupes (sauf avoir et être), les terminaisons sont invariables : -e, -es, -e, -ions, -iez, -ent.
- Verbe du 1er groupe (aimer) : que j'aime, que tu aimes, qu'il aime, que nous aimions, que vous aimiez, qu'ils aiment.
- Verbe du 2e groupe (finir) : que je finisse, que tu finisses, qu'il finisse, que nous finissions, que vous finissiez, qu'ils finissent.
- Verbe du 3e groupe (prendre) : que je prenne, que tu prennes, qu'il prenne, que nous prenions, que vous preniez, qu'ils prennent.

2. Cas particuliers des auxiliaires :
- Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient.
- Être : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient.

3. Verbes irréguliers fréquents au présent du subjonctif :
- Faire : que je fasse, que nous fassions...
- Pouvoir : que je puisse, que nous puissions...
- Savoir : que je sache, que nous sachions...
- Aller : que j'aille, que nous allions, qu'ils aillent...
- Vouloir : que je veuille, que nous voulions, qu'ils veuillent...
- Valoir : que je vaille, que nous valions...

II - Le passé du subjonctif :
Il est formé de l'auxiliaire avoir ou être au présent du subjonctif + participe passé du verbe :
- que j'aie aimé, que tu aies aimé, qu'il ait aimé, que nous ayons aimé, que vous ayez aimé, qu'ils aient aimé.
- que je sois venu(e), que tu sois venu(e), qu'il soit venu, que nous soyons venu(e)s, que vous soyez venu(e)s, qu'ils soient venus.
Valeur : action envisagée comme accomplie par rapport au présent ou au futur (ex : Il faut que tu aies fini avant midi).

III - L’imparfait du subjonctif :
Formé sur le radical du passé simple de l'indicatif :
- 1er groupe : -asse, -asses, -ât, -assions, -assiez, -assent (qu'il aimât).
- 2e et 3e groupes en -i : -isse, -isses, -ît, -issions, -issiez, -issent (qu'il finît, qu'il prît).
- 3e groupe en -u : -usse, -usses, -ût, -ussions, -ussiez, -ussent (qu'il voulût, qu'il sût).
- Verbes en -in : -insse, -insses, -înt, -inssions, -inssiez, -inssent (qu'il vînt).
Remarque : Toujours un accent circonflexe sur la voyelle de la 3e personne du singulier (-ât, -ît, -ût, -înt).

IV - Le plus-que-parfait du subjonctif :
Formé de l'auxiliaire avoir ou être à l'imparfait du subjonctif + participe passé :
- qu'il eût aimé / qu'il fût venu.`,
  sections: [
    {
      title: 'I - LE PRÉSENT DU SUBJONCTIF',
      content: [
        `Terminaisons : -e, -es, -e, -ions, -iez, -ent.`,
        `Auxiliaires indispensables :`,
        `- Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient.`,
        `- Être : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient.`,
        `Formes clés : que je fasse, que je puisse, que je sache, que j'aille, que je veuille.`
      ]
    },
    {
      title: 'II - LE PASSÉ DU SUBJONCTIF',
      content: [
        `Formé de l'auxiliaire au présent du subjonctif + participe passé.`,
        `Exemples : que j'aie terminé / qu'elle soit partie.`
      ]
    },
    {
      title: 'III - L\'IMPARFAIT ET LE PLUS-QUE-PARFAIT DU SUBJONCTIF',
      content: [
        `Imparfait du subjonctif : construit sur le passé simple (que j'aimasse, qu'il aimât, qu'il finît, qu'il vînt). Noter l'accent circonflexe à la 3e personne du singulier.`,
        `Plus-que-parfait : auxiliaire à l'imparfait du subjonctif + participe passé (qu'il eût aimé, qu'elle fût partie).`
      ]
    }
  ],
  diagram: {
    title: 'TEMPS DU SUBJONCTIF',
    root: 'SUBJONCTIF',
    branches: [
      {
        name: 'PRÉSENT & PASSÉ',
        subtitle: 'Temps usuels',
        items: ['Présent (-e, -es, -e, -ions, -iez, -ent)', 'Passé (aie/sois + participe passé)']
      },
      {
        name: 'IMPARFAIT & PLUS-QUE-PARFAIT',
        subtitle: 'Temps littéraires (concordance)',
        items: ['Imparfait (-asse, -isse, -usse, -insse)', 'Plus-que-parfait (eût/fût + participe passé)']
      }
    ]
  },
  conclusion: `Le subjonctif exprime la subjectivité, le souhait, le doute ou l'obligation. Ses terminaisons sont régulières au présent et son imparfait se reconnaît à l'accent circonflexe de la 3e personne.`
};

// ----------------------------------------------------------------------------
// LEÇON 24 : FORMES ET VALEURS DES TEMPS DU CONDITIONNEL
// ----------------------------------------------------------------------------
export const LESSON_24_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-24',
  number: 'LEÇON 24',
  title: 'FORMES ET VALEURS DES TEMPS DU CONDITIONNEL',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Le conditionnel exprime une action soumise à condition, une éventualité, un souhait ou une demande polie. Il comprend un temps simple (le présent) et deux formes du passé.`,
  fullText: `FORMES ET VALEURS DES TEMPS DU CONDITIONNEL

Le mode conditionnel permet d’exprimer un fait dépendant d’une condition, une supposition, un souhait, un conseil ou une formule de politesse.

I - Le conditionnel présent :
1. Formation :
Radical du futur simple + terminaisons de l'imparfait de l'indicatif : -ais, -ais, -ait, -ions, -iez, -aient.
- Verbe aimer : j'aimerais, tu aimerais, il aimerait, nous aimerions, vous aimeriez, ils aimeraient.
- Verbe finir : je finirais, tu finirais, il finirait, nous finirions, vous finiriez, ils finiraient.
- Verbe avoir : j'aurais, tu aurais, il aurait, nous aurions, vous auriez, ils auraient.
- Verbe être : je serais, tu serais, il serait, nous serions, vous seriez, ils seraient.

2. Valeurs du conditionnel présent :
- Le potentiel ou l'irréel du présent après « si + imparfait » : Si j'avais de l'argent, j'achèterais ce livre.
- La politesse / l'atténuation : Pourriez-vous fermer la porte ? / J'aimerais vous poser une question.
- L'information non confirmée (journalistique) : L'accident aurait fait trois blessés.
- Le souhait, le regret ou le conseil : Tu devrais réviser davantage.
- Le futur dans le passé (en concordance) : Il disait qu'il viendrait demain.

II - Le conditionnel passé :
1. Première forme (la plus usuelle) :
Formé de l'auxiliaire avoir ou être au conditionnel présent + le participe passé du verbe :
- J'aurais aimé, tu aurais aimé, il aurait aimé, nous aurions aimé, vous auriez aimé, ils auraient aimé.
- Je serais parti(e), tu serais parti(e), il serait parti, nous serions parti(e)s, vous seriez parti(e)s, ils seraient partis.

2. Deuxième forme (littéraire) :
Identique au plus-que-parfait du subjonctif :
- J'eusse aimé, tu eusses aimé, il eût aimé... / Je fusse parti...

3. Valeurs du conditionnel passé :
- L'irréel du passé après « si + plus-que-parfait » : Si tu avais travaillé, tu aurais réussi.
- Le regret : J'aurais tant aimé être parmi vous.
- L'information passée non confirmée : Le ministre aurait démissionné hier soir.`,
  sections: [
    {
      title: 'I - LE CONDITIONNEL PRÉSENT',
      content: [
        `Formation : Radical du futur + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).`,
        `Valeurs :`,
        `- Hypothèse avec « si + imparfait » (Si j'avais le temps, je viendrais).`,
        `- Politesse et courtoisie (Je voudrais un renseignement).`,
        `- Information journalistique sous réserve (Il y aurait des victimes).`,
        `- Futur du passé en discours rapporté (Il a promis qu'il viendrait).`
      ]
    },
    {
      title: 'II - LE CONDITIONNEL PASSÉ',
      content: [
        `Première forme : auxiliaire au conditionnel présent + participe passé (j'aurais su, je serais venu).`,
        `Deuxième forme : forme littéraire égale au plus-que-parfait du subjonctif (il eût préféré).`,
        `Valeurs : irréel du passé (Si tu étais venu, nous aurions gagné), regret et reproche.`
      ]
    }
  ],
  diagram: {
    title: 'LE CONDITIONNEL',
    root: 'CONDITIONNEL',
    branches: [
      {
        name: 'PRÉSENT',
        subtitle: 'Radical futur + -ais...',
        items: ['Hypothèse (si + imparfait)', 'Politesse (je voudrais)', 'Futur dans le passé']
      },
      {
        name: 'PASSÉ (1re FORME)',
        subtitle: 'Aurais/Serais + Participe',
        items: ['Irréel du passé (si + PQP)', 'Regret & Reproche', 'Fait incertain passé']
      }
    ]
  },
  conclusion: `Le conditionnel oscille entre mode d'atténuation et mode de l'hypothèse, permettant de formuler souhaits, regrets et politesse.`
};

// ----------------------------------------------------------------------------
// LEÇON 25 : FORMES ET VALEURS DES TEMPS DE L'IMPÉRATIF
// ----------------------------------------------------------------------------
export const LESSON_25_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-25',
  number: 'LEÇON 25',
  title: 'FORMES ET VALEURS DES TEMPS DE L’IMPÉRATIF',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `L'impératif est le mode du commandement, du conseil et de la prière. Il n'a pas de pronoms sujets exprimés et ne se conjugue qu'à trois personnes : la 2e personne du singulier, la 1re personne du pluriel et la 2e personne du pluriel.`,
  fullText: `FORMES ET VALEURS DES TEMPS DE L’IMPERATIF

L’impératif permet de donner un ordre, une consigne, un conseil, une interdiction ou d'adresser une prière. Il se caractérise par l'absence totale de pronom sujet exprimé.

I - L’impératif présent :
1. Terminaisons régulières :
- 1er groupe (-er) : pas de « -s » à la 2e personne du singulier !
  * Marche ! Marchons ! Marchez !
  * Chante ! Chantons ! Chantez !
- 2e groupe (-ir) : -s, -ons, -ez (Finis ! Finissons ! Finissez !).
- 3e groupe : généralement -s, -ons, -ez (Prends ! Prenons ! Prenez !).

2. Règle du « -s » euphonique :
Les verbes du 1er groupe (et verbes comme ouvrir, cueillir, aller) prennent un « -s » à la 2e personne du singulier devant les pronoms « en » et « y » pour des raisons de prononciation :
- Mange ! -> Manges-en !
- Va ! -> Vas-y !
- Cueille ! -> Cueilles-en !

3. Cas irréguliers des auxiliaires et verbes fréquents :
- Être : Sois ! Soyons ! Soyez !
- Avoir : Aie ! Ayons ! Ayez !
- Savoir : Sache ! Sachons ! Sachez !
- Vouloir : Veuille ! Veuillons ! Veuillez !

II - L’impératif passé :
Formé de l'auxiliaire avoir ou être à l'impératif présent + le participe passé du verbe :
- Aie fini ce travail avant mon retour !
- Sois rentré avant la tombée de la nuit !
Valeur : ordre qui doit être accompli avant un moment déterminé dans le futur.

III - Valeurs d’emploi de l’impératif :
- Ordre formel : Rangez vos affaires immédiatement !
- Interdiction (défense) : Ne touchez pas à ces câbles !
- Conseil : Prenez ce chemin, il est plus court.
- Prière / supplication : Ayez pitié de nous !
- Consigne : Cochez la bonne réponse.`,
  sections: [
    {
      title: 'I - L\'IMPÉRATIF PRÉSENT',
      content: [
        `Seulement 3 personnes sans sujet exprimé (tu, nous, vous).`,
        `Règle d'or : pas de « s » au 1er groupe à la 2e personne du singulier (Chante ! Écoute ! Va !).`,
        `Exception euphonique devant « en » et « y » : Manges-en ! Vas-y !`,
        `Irréguliers majeurs : Aie/Ayons/Ayez ; Sois/Soyons/Soyez ; Sache/Sachons/Sachez ; Veuillez.'`
      ]
    },
    {
      title: 'II - L\'IMPÉRATIF PASSÉ ET VALEURS',
      content: [
        `Impératif passé : Aie fini ! Sois rentré ! (accompli avant une échéance future).`,
        `Valeurs d'emploi : ordre, interdiction, conseil, recommandation, prière ou consigne.'`
      ]
    }
  ],
  diagram: {
    title: 'L\'IMPÉRATIF',
    root: 'IMPÉRATIF',
    branches: [
      {
        name: '3 PERSONNES SEULEMENT',
        subtitle: 'Sans pronom sujet',
        items: ['2e sg : Tu (Chante ! / Prends !)', '1re pl : Nous (Chantons !)', '2e pl : Vous (Chantez !)']
      },
      {
        name: 'RÈGLE EU-PHONIQUE',
        subtitle: 'Ajout du « s »',
        items: ['Chante -> Chantes-en !', 'Va -> Vas-y !']
      },
      {
        name: 'VALEURS',
        subtitle: 'Intentions',
        items: ['Ordre direct', 'Défense (ne... pas)', 'Conseil & Prière']
      }
    ]
  },
  conclusion: `L'impératif ne dispose que de trois personnes et ne mentionne jamais de pronom sujet. Au premier groupe, la deuxième personne du singulier ne prend pas de « s », sauf liaison euphonique devant « en » ou « y ».'`
};

// ----------------------------------------------------------------------------
// LEÇON 26 : LES VERBES IRRÉGULIERS
// ----------------------------------------------------------------------------
export const LESSON_26_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-26',
  number: 'LEÇON 26',
  title: 'LES VERBES IRRÉGULIERS',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Les verbes du troisième groupe sont qualifiés d'irréguliers car leur radical subit de profondes modifications phonétiques selon les modes et les temps (aller, s'asseoir, dire, faire, savoir, vouloir, pouvoir).`,
  fullText: `LES VERBES IRREGULIERS

Les verbes irréguliers appartiennent principalement au 3e groupe (ainsi que le verbe Aller). Leur radical change selon le temps et la personne.

Tableau des verbes irréguliers fondamentaux :

1 - Verbe ALLER :
- Présent indicatif : je vais, tu vas, il va, nous allons, vous allez, ils vont.
- Imparfait : j'allais, nous allions.
- Passé simple : j'allai, tu allas, il alla, nous allâmes, ils allèrent.
- Futur : j'irai, nous irons.
- Subjonctif présent : que j'aille, que nous allions, qu'ils aillent.
- Impératif : Va ! (Vas-y !), Allons ! Allez !

2 - Verbe FAIRE :
- Présent indicatif : je fais, tu fais, il fait, nous faisons, vous faites, ils font.
- Imparfait : je faisais, nous faisions.
- Passé simple : je fis, tu fis, il fit, nous fîmes, ils firent.
- Futur : je ferai, nous ferons.
- Subjonctif présent : que je fasse, que tu fasses, que nous fassions.
- Impératif : Fais ! Faisons ! Faites !

3 - Verbe DIRE :
- Présent indicatif : je dis, tu dis, il dit, nous disons, vous dites, ils disent.
- Passé simple : je dis, nous dîmes, ils dirent.
- Subjonctif présent : que je dise, que nous disions.
- Impératif : Dis ! Disons ! Dites !
(Attention : contredire -> vous contredisez ; interdire -> vous interdisez).

4 - Verbe POUVOIR :
- Présent indicatif : je peux (ou je puis), tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.
- Passé simple : je pus, il put, nous pûmes, ils purent.
- Futur : je pourrai (avec deux « r »).
- Subjonctif présent : que je puisse, que nous puissions.

5 - Verbe VOULOIR :
- Présent indicatif : je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent.
- Passé simple : je voulus, nous voulûmes.
- Futur : je voudrai.
- Subjonctif présent : que je veuille, que nous voulions, qu'ils veuillent.
- Impératif : Veuille ! Veuillez !

6 - Verbe SAVOIR :
- Présent indicatif : je sais, tu sais, il sait, nous savons, vous savez, ils savent.
- Passé simple : je sus, nous sûmes.
- Futur : je saurai.
- Subjonctif présent : que je sache, que nous sachions.
- Impératif : Sache ! Sachons ! Sachez !

7 - Verbe ASSEOIR (ou ASSIR) :
- Deux conjugaisons possibles au présent :
  * je m'assieds, tu t'assieds, il s'assied, nous nous asseyons, vous vous asseyez, ils s'asseyent.
  * je m'assois, tu t'assois, il s'assoit, nous nous镍soyons (nous nous assoyons), ils s'assoient.`,
  sections: [
    {
      title: 'I - PRINCIPAUX VERBES DU 3E GROUPE',
      content: [
        `Aller : je vais, nous allons, ils vont ; j'irai ; que j'aille.`,
        `Faire : je fais, nous faisons, vous faites, ils font ; je ferai ; que je fasse.`,
        `Dire : vous dites (mais vous interdisez, vous médisez).`,
        `Pouvoir : je peux/puis ; je pourrai (2 r) ; que je puisse.`,
        `Vouloir : ils veulent ; je voudrai ; veuillez.`,
        `Savoir : nous savons, ils savent ; je saurai ; sache/sachez.`
      ]
    },
    {
      title: 'II - VERBES À RADICAUX MULTIPLES',
      content: [
        `Asseoir : j'assieds / j'assois ; nous asseyons / nous assoyons.`,
        `Prendre : je prends, nous prenons, ils prennent ; que je prenne.`,
        `Venir / Tenir : je viens, nous venons, ils viennent ; je vins, nous vînmes ; je viendrai.`
      ]
    }
  ],
  diagram: {
    title: 'VERBES IRRÉGULIERS ESSENTIELS',
    root: '3E GROUPE',
    branches: [
      {
        name: 'VOUS EN -TES',
        subtitle: 'Irrégularités de 2e personne',
        items: ['Vous êtes (être)', 'Vous faites (faire)', 'Vous dites (dire)']
      },
      {
        name: 'SUBJONCTIFS SPÉCIAUX',
        subtitle: 'Racine modifiée',
        items: ['Fasse (faire)', 'Puisse (pouvoir)', 'Sache (savoir)', 'Veuille (vouloir)']
      },
      {
        name: 'DOUBLE R AU FUTUR',
        subtitle: 'Phonétique',
        items: ['Pourrai (pouvoir)', 'Courrai (courir)', 'Mourrai (mourir)', 'Verrai (voir)']
      }
    ]
  },
  conclusion: `Les verbes irréguliers constituent la trame quotidienne de la langue française. Leur maîtrise requiert la mémorisation rigoureuse de leurs radicaux spécifiques.`
};

// ----------------------------------------------------------------------------
// LEÇON 27 : LES VERBES PRONOMINAUX
// ----------------------------------------------------------------------------
export const LESSON_27_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-27',
  number: 'LEÇON 27',
  title: 'LES VERBES PRONOMINAUX',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `Un verbe pronominal se conjugue avec un pronom réfléchi de la même personne que le sujet (me, te, se, nous, vous, se). On distingue les verbes réfléchis, réciproques, passifs et essentiellement pronominaux.`,
  fullText: `LES VERBES PRONOMINAUX

Un verbe pronominal est un verbe qui est accompagné d’un pronom réfléchi de la même personne que le sujet : me, te, se, nous, vous, se.
Exemple : Je me lave, tu te laves, il se lave, nous nous lavons, vous vous lavez, ils se lavent.

I - Les quatre catégories de verbes pronominaux :
1 - Les verbes de sens réfléchi :
Le sujet fait l'action sur lui-même (le pronom est COD ou COI).
- Exemple 1 : Moussa se regarde dans le miroir. (Moussa regarde lui-même : « se » est COD).
- Exemple 2 : Fatou se lave les mains. (Fatou lave les mains à elle-même : « les mains » est COD, « se » est COI).

2 - Les verbes de sens réciproque :
Deux ou plusieurs sujets agissent l'un sur l'autre (au pluriel).
- Exemple : Les deux amis se saluent chaleureusement. (l'un salue l'autre).
- Exemple : Ils se parlent depuis une heure. (l'un parle à l'autre : « se » est COI).

3 - Les verbes de sens passif :
Le sujet subit l'action sans que l'agent soit précisé (tournure équivalente au passif).
- Exemple : Ce livre se vend très bien. (= ce livre est vendu par les libraires).
- Exemple : Le français se parle dans de nombreux pays. (= est parlé).

4 - Les verbes essentiellement pronominaux :
Ce sont des verbes qui n'existent qu'à la forme pronominale ou qui changent totalement de sens à cette forme. Le pronom réfléchi ne s'analyse pas.
- Exemples de verbes n'existant qu'à la forme pronominale : s’enfuir, s’évanouir, se souvenir, s’empresser, se méfier, s’abstenir, s’écrier, se repentir...
- Exemples de verbes changeant de sens : apercevoir (voir) ≠ s’apercevoir (se rendre compte) ; douter (avoir un doute) ≠ se douter (soupçonner).

II - Auxiliaire et accord du participe passé :
Les verbes pronominaux se conjuguent TOUJOURS avec l'auxiliaire ÊTRE aux temps composés.
- Règle 1 : Les verbes essentiellement pronominaux s'accordent toujours en genre et en nombre avec le sujet (ex : Elles se sont souvenues de leur enfance / Ils se sont enfuis).
- Règle 2 : Pour les verbes réfléchis et réciproques, le participe s'accorde avec le pronom réfléchi seulement si celui-ci est COD :
  * Elles se sont lavées. (se = COD placé avant -> accord).
  * Elles se sont lavé les mains. (COD « les mains » placé après -> pas d'accord).
  * Elles se sont téléphoné. (téléphoner à quelqu'un -> se est COI -> invariable !).`,
  sections: [
    {
      title: 'I - LES 4 CATÉGORIES DE PRONOMINAUX',
      content: [
        `1. Sens réfléchi : le sujet agit sur lui-même (Elle se peigne).`,
        `2. Sens réciproque : les sujets agissent l'un sur l'autre (Ils se félicitent).`,
        `3. Sens passif : équivaut à la voix passive (Cette revue se lit vite).`,
        `4. Essentiellement pronominaux : verbes sans forme simple (s'évanouir, se souvenir, s'enfuir).`
      ]
    },
    {
      title: 'II - RÈGLES D\'ACCORD AUX TEMPS COMPOSÉS',
      content: [
        `Toujours l'auxiliaire Être aux temps composés.`,
        `Essentiellement pronominaux : accord systématique avec le sujet (Ils se sont enfuis).`,
        `Réfléchis/Réciproques : accord avec le COD s'il précède (Elles se sont regardées) ; pas d'accord si COI (Elles se sont parlé) ou si COD placé après (Elle s'est coupé les doigts).`
      ]
    }
  ],
  diagram: {
    title: 'VERBES PRONOMINAUX',
    root: 'SE + VERBE',
    branches: [
      {
        name: 'RÉFLÉCHI',
        subtitle: 'Action sur soi',
        items: ['Moussa se regarde', 'Fatou se lave les mains']
      },
      {
        name: 'RÉCIPROQUE',
        subtitle: 'Action mutuelle',
        items: ['Les deux amis se saluent', 'Ils s\'entraident']
      },
      {
        name: 'PASSIF & ESSENTIEL',
        subtitle: 'Sans agent / Figé',
        items: ['Le wolof se parle', 'S\'enfuir, se souvenir (accord sujet)']
      }
    ]
  },
  conclusion: `Les verbes pronominaux se conjuguent tous avec l'auxiliaire Être, mais l'accord de leur participe passé dépend de la fonction exacte (COD ou COI) du pronom réfléchi.`
};

// ----------------------------------------------------------------------------
// LEÇON 28 : INFINITIF ET PARTICIPE
// ----------------------------------------------------------------------------
export const LESSON_28_FRANCAIS_4EME: LessonContent = {
  id: 'fr-4eme-lecon-28',
  number: 'LEÇON 28',
  title: 'INFINITIF ET PARTICIPE',
  subject: 'Français',
  classLevel: '4ème',
  introduction: `L'infinitif et le participe sont des modes impersonnels. L'infinitif est la forme nominale du verbe, tandis que le participe est sa forme adjectivale. Ils permettent d'alléger la phrase en remplaçant des propositions complètes.`,
  fullText: `INFINITIF ET PARTICIPE

I - L’infinitif :
L’infinitif est la forme nominale du verbe. Il ne s'accorde pas en personne.
1. Formes de l'infinitif :
- Infinitif présent : chanter, finir, prendre, avoir, être.
- Infinitif passé : avoir chanté, avoir fini, être parti, s'être souvenu.

2. Fonctions de l'infinitif :
Comme un nom, l'infinitif peut occuper presque toutes les fonctions dans la phrase :
- Sujet : Partir, c’est mourir un peu. / Mentir est un péché.
- Attribut du sujet : Son rêve était de devenir médecin.
- Complément d'objet direct : Il désire réussir à son examen.
- Complément d'objet indirect : Elle songe à partir à l’étranger.
- Complément circonstanciel (avec préposition pour, sans, avant de, afin de) : Il s’entraîne pour gagner la course.
- Complément du nom : L'art de convaincre.
- Noyau d'une proposition subordonnée infinitive : J'entends les oiseaux chanter.

II - Le participe :
Le participe est la forme adjectivale du verbe.
1. Le participe présent et le gérondif :
- Participe présent : se termine en -ant pour tous les verbes (aimant, finissant, sachant, ayant, étant).
  * Il est invariable lorsqu'il exprime une action : Des enfants chantant dans la rue.
- Adjectif verbal : issu du participe présent, il exprime un état et s'accorde en genre et en nombre avec le nom qualifié : Une histoire passionnante / Des élèves obéissants.
- Le gérondif : formé de la préposition « en » + participe présent. Il a la fonction de complément circonstanciel (manière, temps, cause, condition) : Il marche en chantant.

2. Le participe passé :
- Se termine en -é (1er groupe), -i (2e groupe), -u, -is, -it (3e groupe).
- Employé sans auxiliaire : il a la valeur d'un adjectif qualificatif et s'accorde en genre et en nombre avec le nom qu'il qualifie (ex : Les portes fermées).
- Employé avec l'auxiliaire être : s'accorde avec le sujet (ex : Les lettres sont envoyées).
- Employé avec l'auxiliaire avoir : s'accorde avec le COD s'il est placé avant le verbe (ex : Les lettres qu'il a reçues).`,
  sections: [
    {
      title: 'I - LE MODE INFINITIF',
      content: [
        `Forme nominale du verbe : présent (aimer) et passé (avoir aimé).`,
        `Fonctions grammaticales multiples : sujet (Voyager forme la jeunesse), COD (Il veut réussir), complément du nom (Le désir de vaincre), circonstanciel (Partir sans prévenir).`,
        `Subordonnée infinitive : possède son propre sujet (J'entends la pluie tomber).`
      ]
    },
    {
      title: 'II - LE MODE PARTICIPE ET GÉRONDIF',
      content: [
        `Participe présent : en -ant, invariable lorsqu'il indique une action (Des garçons courant vite).`,
        `Adjectif verbal : s'accorde avec le nom (Une mélodie charmante).`,
        `Gérondif : en + participe présent, complément circonstanciel de manière, cause ou temps (En travaillant, on réussit).`,
        `Participe passé : accord avec le nom (seul), avec le sujet (être), ou avec le COD antéposé (avoir).' `
      ]
    }
  ],
  diagram: {
    title: 'MODES IMPERSONNELS',
    root: 'MODES NON CONJUGUÉS',
    branches: [
      {
        name: 'INFINITIF',
        subtitle: 'Forme nominale',
        items: ['Présent (courir)', 'Passé (avoir couru)', 'Fonctions du nom (Sujet, COD, CC)']
      },
      {
        name: 'PARTICIPE PRÉSENT & GÉRONDIF',
        subtitle: 'En -ant',
        items: ['Participe présent (action invariable)', 'Adjectif verbal (accord)', 'Gérondif (en + -ant)']
      },
      {
        name: 'PARTICIPE PASSÉ',
        subtitle: 'Forme adjectivale',
        items: ['Seul (accord nom)', 'Avec être (accord sujet)', 'Avec avoir (accord COD avant)']
      }
    ]
  },
  conclusion: `L'infinitif et le participe apportent concision et élégance au style en condensant l'information verbale sans alourdir la syntaxe.`
};
