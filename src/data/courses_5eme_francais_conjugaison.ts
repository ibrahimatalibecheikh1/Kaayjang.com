import { LessonContent } from './courses';

// -------------------------------------------------------------
// LEÇON 19 (5ÈME) : FORMES ET VALEURS DES TEMPS DE L'INDICATIF
// -------------------------------------------------------------
export const LESSON_19_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-19-francais-5eme',
  number: 'LEÇON 19 (5ÈME)',
  title: 'FORMES ET VALEURS DES TEMPS DE L’INDICATIF',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Le mode indicatif comprend huit temps : quatre temps simples (présent, imparfait, passé simple, futur simple) et quatre temps composés (passé composé, plus-que-parfait, passé antérieur, futur antérieur). À chaque temps simple correspond un temps composé exprimant l'antériorité.`,
  fullText: `FORMES ET VALEURS DES TEMPS DE L’INDICATIF

I. LES TEMPS SIMPLES DE L'INDICATIF :
1. Terminaisons des 3 groupes :
• 1er groupe (-er) :
- Présent : -e, -es, -e, -ons, -ez, -ent (je raconte, tu racontes...)
- Imparfait : -ais, -ais, -ait, -ions, -iez, -aient (je racontais...)
- Passé simple : -ai, -as, -a, -âmes, -âtes, -èrent (je racontai, nous racontâmes, ils racontèrent)
- Futur simple : -erai, -eras, -era, -erons, -erez, -eront (je raconterai...)

• 2e groupe (-ir avec -issant) :
- Présent : -is, -is, -it, -issons, -issez, -issent (je vomis, nous vomissons)
- Imparfait : -issais, -issais, -issait, -issions, -issiez, -issaient (je vomissais)
- Passé simple : -is, -is, -it, -îmes, -îtes, -irent (je vomis, nous vomîmes, ils vomirent)
- Futur simple : -irai, -iras, -ira, -irons, -irez, -iront (je vomirai)

• 3e groupe :
- Présent : -s/-x/-e, -s/-x/-es, -d/-t/-e, -ons, -ez, -ent (je prends, je veux, je cueille)
- Imparfait : -ais, -ais, -ait, -ions, -iez, -aient (je prenais, je voulais, je cueillais)
- Passé simple : en -i (je pris, nous prîmes), en -u (je voulus, nous voulûmes), en -in (je vins)
- Futur simple : radical + -rai, -ras, -ra, -rons, -rez, -ront (je prendrai, je voudrai).

II. LES TEMPS COMPOSÉS DE L'INDICATIF :
Formés d'un auxiliaire (avoir ou être) + le participe passé du verbe :
1. Passé composé : Auxiliaire au présent + participe passé (« J'ai mangé », « Je suis descendu(e) »).
2. Passé antérieur : Auxiliaire au passé simple + participe passé (« J'eus mangé », « Je fus descendu(e) »).
3. Plus-que-parfait : Auxiliaire à l'imparfait + participe passé (« J'avais mangé », « J'étais descendu(e) »).
4. Futur antérieur : Auxiliaire au futur simple + participe passé (« J'aurai mangé », « Je serai descendu(e) »).

III. VALEURS D'EMPLOI DES TEMPS DE L'INDICATIF :
1. Le présent :
- Présent d'énonciation : action au moment où l'on parle (« Les voitures passent »).
- Présent d'habitude : action répétée (« Chaque matin, il va à l'école »).
- Présent de vérité générale : vérités scientifiques, proverbes (« Qui sème le vent récolte la tempête »).
- Passé récent / Futur proche : (« Nous sortons de table », « Les amis arrivent dans deux heures »).
- Présent de narration : dynamise un récit au passé.

2. L'imparfait :
- Action en cours d'accomplissement dans le passé (aspect sécant/non achevé).
- Description d'un cadre, d'un personnage, d'une scène (« La cour était remplie de monde »).
- Habitude / répétition passée (« Le vendredi, nous allions à la mosquée »).

3. Le passé simple :
- Action ponctuelle, soudaine et achevée dans le passé (« Tout à coup, il vit surgir un lion »).
- Succession rapide des faits d'un récit historique ou romanesque.

4. Le futur simple :
- Action à venir (« Je finirai mes devoirs demain »).
- Politesse / ordre atténué (« En ce cas, je vous demanderai de sortir », « Vous voudrez bien patienter »).

5. Les temps composés :
- Passé composé : action passée liée au présent par ses résultats.
- Plus-que-parfait : action passée antérieure à une autre action du passé.
- Passé antérieur : antériorité immédiate avant le passé simple (« Quand il l'eut rejoint, ils partirent »).
- Futur antérieur : action future accomplie avant une autre action future (« Quand la tempête aura cessé, je réparerai le toit »).`,
  sections: [
    {
      title: 'I. Les 4 temps simples de l\'indicatif',
      content: [
        'Présent : terminaisons spécifiques selon le groupe (1er : -e, -es, -e ; 2e : -is, -issons ; 3e : variable).',
        'Imparfait : terminaisons universelles (-ais, -ais, -ait, -ions, -iez, -aient).',
        'Passé simple : en -a (1er gr.), en -i (2e et 3e gr.), en -u (3e gr.), en -in (tenir, venir).',
        'Futur simple : infinitif + -ai, -as, -a, -ons, -ez, -ont.'
      ]
    },
    {
      title: 'II. Les 4 temps composés',
      content: [
        'Passé composé = Présent de l\'auxiliaire + participe passé.',
        'Plus-que-parfait = Imparfait de l\'auxiliaire + participe passé.',
        'Passé antérieur = Passé simple de l\'auxiliaire + participe passé.',
        'Futur antérieur = Futur simple de l\'auxiliaire + participe passé.'
      ]
    },
    {
      title: 'III. Valeurs d\'emploi en contexte',
      content: [
        'Le couple Imparfait / Passé simple est la base du récit : l\'imparfait pour l\'arrière-plan (description, durée), le passé simple pour le premier plan (actions soudaines de premier plan).',
        'Valeurs du présent : énonciation, habitude, vérité générale, narration.',
        'Valeurs de politesse ou d\'atténuation : futur simple (« Vous voudrez bien... »).'
      ]
    }
  ],
  diagram: {
    title: 'Système temporel de l\'indicatif',
    root: 'Indicatif (8 temps)',
    branches: [
      {
        name: 'Temps simples',
        subtitle: 'Un seul mot verbal',
        items: ['Présent', 'Imparfait', 'Passé simple', 'Futur simple']
      },
      {
        name: 'Temps composés',
        subtitle: 'Auxiliaire + Participe',
        items: ['Passé composé', 'Plus-que-parfait', 'Passé antérieur', 'Futur antérieur']
      },
      {
        name: 'Valeurs narratives',
        subtitle: 'Récit au passé',
        items: ['Imparfait : décor, durée', 'Passé simple : action de premier plan']
      }
    ]
  },
  conclusion: `La concordance des temps à l'indicatif garantit la précision chronologique du récit.`
};

// -------------------------------------------------------------
// LEÇON 20 (5ÈME) : FORMES ET VALEURS DES TEMPS DU SUBJONCTIF
// -------------------------------------------------------------
export const LESSON_20_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-20-francais-5eme',
  number: 'LEÇON 20 (5ÈME)',
  title: 'FORMES ET VALEURS DES TEMPS DU SUBJONCTIF',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Le mode subjonctif est le mode de l'incertitude, du sentiment, de la volonté, du souhait et du doute. Il comprend deux temps simples (présent, imparfait) et deux temps composés (passé, plus-que-parfait).`,
  fullText: `FORMES ET VALEURS DES TEMPS DU SUBJONCTIF

I. LES FORMES DU SUBJONCTIF :
1. Le présent du subjonctif :
Terminaisons régulières pour tous les verbes : -e, -es, -e, -ions, -iez, -ent (sauf avoir et être) :
- Aimer : que j'aime, que tu aimes, qu'il aime, que nous aimions, que vous aimiez, qu'ils aiment.
- Finir : que je finisse, que tu finisses, qu'il finisse, que nous finissions, que vous finissiez, qu'ils finissent.
- Prendre : que je prenne, que tu prennes, qu'il prenne, que nous prenions, que vous preniez, qu'ils prennent.
- Être : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient.
- Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient.
- Radicaux particuliers : pouvoir (que je puisse), faire (que je fasse), savoir (que je sache), aller (que j'aille, que nous allions), vouloir (que je veuille, que nous voulions).

2. L'imparfait du subjonctif :
Formé sur le passé simple (3e pers. sg) :
Terminaisons : -sse, -sses, -ât/-ît/-ût, -ssions, -ssiez, -ssent.
Exemples :
- Pouvoir : que je pusse, qu'il pût, que nous pussions.
- Manger : que je mangeasse, qu'il mangeât, que nous mangeassions.
- Punir : que je punisse, qu'il punît, que nous punissions.

3. Le passé du subjonctif :
Présent du subjonctif de l'auxiliaire + participe passé (« que j'aie fini », « que je sois parti »).

4. Le plus-que-parfait du subjonctif :
Imparfait du subjonctif de l'auxiliaire + participe passé (« que j'eusse fini », « que je fusse parti »).

II. VALEURS D'EMPLOI DU SUBJONCTIF :
1. En proposition indépendante ou principale :
- Souhait, prière : « Dieu fasse qu'il réussisse ! »
- Ordre, défense : « Qu'il sorte immédiatement ! »
- Indignation, doute : « Moi, que je fasse cela ! »

2. En proposition subordonnée :
- Après verbes exprimant volonté, désir, crainte, regret : vouloir, exiger, craindre, regretter (« Je souhaite qu'il devienne médecin »).
- Après locutions conjonctives obligatoires : avant que, afin que, pour que, bien que, quoique, pourvu que, à condition que, en attendant que... (« En attendant que le professeur vienne, révisez vos leçons »).`,
  sections: [
    {
      title: 'I. Morphologie du subjonctif',
      content: [
        'Présent : terminaisons -e, -es, -e, -ions, -iez, -ent pour tous les verbes (irréguliers : être, avoir, aller, savoir, faire, pouvoir, vouloir).',
        'Imparfait : formé sur le radical du passé simple avec -sse, -sses, -^t, -ssions, -ssiez, -ssent.'
      ]
    },
    {
      title: 'II. Valeurs d\'expression',
      content: [
        'Exprime le possible, le virtuel, le sentiment intérieur (désir, regret, ordre, crainte, doute).',
        'Usage obligatoire après certaines conjonctions : afin que, bien que, avant que, pourvu que.'
      ]
    }
  ],
  diagram: {
    title: 'Le mode subjonctif',
    root: 'Subjonctif',
    branches: [
      {
        name: 'Présent',
        subtitle: 'Terminaisons',
        items: ['-e, -es, -e, -ions, -iez, -ent', 'Être : sois / Avoir : aie']
      },
      {
        name: 'Imparfait',
        subtitle: 'Forme noble',
        items: ['-sse, -sses, -ât/-ît/-ût', '-ssions, -ssiez, -ssent']
      },
      {
        name: 'Valeurs',
        subtitle: 'Modalités',
        items: ['Volonté, ordre, souhait', 'Doute, regret, sentiment', 'Après bien que, afin que...']
      }
    ]
  },
  conclusion: `Le subjonctif colore l'énoncé d'une subjectivité que l'indicatif ne peut pas traduire.`
};

// -------------------------------------------------------------
// LEÇON 21 (5ÈME) : FORMES ET VALEURS DES TEMPS DU CONDITIONNEL
// -------------------------------------------------------------
export const LESSON_21_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-21-francais-5eme',
  number: 'LEÇON 21 (5ÈME)',
  title: 'FORMES ET VALEURS DES TEMPS DU CONDITIONNEL',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Le conditionnel comprend un temps présent et deux formes de temps passé. Il sert à exprimer des faits soumis à condition, des souhaits, des suppositions ou des formules de politesse.`,
  fullText: `FORMES ET VALEURS DES TEMPS DU CONDITIONNEL

I. LES FORMES DU CONDITIONNEL :
1. Le conditionnel présent :
Formé du radical du futur de l'indicatif + les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient) :
- Partir : je partirais, tu partirais, il partirait, nous partirions, vous partiriez, ils partiraient.
- Travailler : je travaillerais, tu travaillerais, il travaillerait, nous travaillerions, vous travailleriez, ils travailleraient.
- Tendre : je tendrais, tu tendrais, il tendrait, nous tendrions, vous tendriez, ils tendraient.

2. Le conditionnel passé 1re forme :
Conditionnel présent de l'auxiliaire avoir ou être + participe passé :
- « J'aurais travaillé », « Je serais parti(e) ».

3. Le conditionnel passé 2e forme :
Identique au plus-que-parfait du subjonctif : auxiliaire à l'imparfait du subjonctif + participe passé :
- « J'eusse raconté », « Je fusse parti(e) ».

II. LES VALEURS DU CONDITIONNEL :
1. Fait soumis à condition (système hypothétique avec « si ») :
« Si tu te rendais libre, nous rendrions visite à notre oncle. » (Si + imparfait -> conditionnel présent).
2. Futur du passé (dans un récit au passé) :
« Le fabricant présentait les nouveautés que les commerçants vendraient. »
3. Souhait / Fait désiré :
« Je participerais volontiers à cette course. »
4. Fait imaginaire ou irréel :
« Je rêve d'un voyage où je visiterais Tombouctou. »
5. Politesse et atténuation :
« Je vous accueillerais volontiers chez moi », « Pourriez-vous m'aider ? »
6. Information incertaine / Doute :
« Le président visiterait le nouvel hôpital demain. »`,
  sections: [
    {
      title: 'I. Formation du conditionnel',
      content: [
        'Présent = Radical du futur simple + Terminaisons d\'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).',
        'Passé 1re forme = Auxiliaire au conditionnel présent + Participe passé.'
      ]
    },
    {
      title: 'II. Les valeurs du conditionnel',
      content: [
        'Hypothèse avec « si » : si + imparfait -> conditionnel présent.',
        'Futur dans le passé en concordance temporelle.',
        'Politesse, atténuation, incertitude journalistique.'
      ]
    }
  ],
  diagram: {
    title: 'Le mode conditionnel',
    root: 'Conditionnel',
    branches: [
      {
        name: 'Présent',
        subtitle: 'Radical Futur + Imparfait',
        items: ['-rais, -rais, -rait', '-rions, -riez, -raient']
      },
      {
        name: 'Passé',
        subtitle: 'Forme composée',
        items: ['1re forme : aurais / serais + PP', '2e forme : eusse / fusse + PP']
      },
      {
        name: 'Emplois',
        subtitle: 'Valeurs',
        items: ['Hypothèse (Si + imparfait)', 'Politesse (Pourriez-vous)', 'Futur du passé']
      }
    ]
  },
  conclusion: `Le conditionnel module l'affirmation en la nuançant d'incertitude ou d'amabilité.`
};

// -------------------------------------------------------------
// LEÇON 22 (5ÈME) : FORMES ET VALEURS DES TEMPS DE L'IMPÉRATIF
// -------------------------------------------------------------
export const LESSON_22_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-22-francais-5eme',
  number: 'LEÇON 22 (5ÈME)',
  title: 'FORMES ET VALEURS DES TEMPS DE L’IMPÉRATIF',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `L'impératif sert à donner un ordre, un conseil, une prière ou une interdiction. Il ne possède que trois personnes (2e personne du singulier, 1re et 2e personnes du pluriel) et s'emploie sans sujet exprimé.`,
  fullText: `FORMES ET VALEURS DES TEMPS DE L’IMPÉRATIF

I. LES FORMES DE L'IMPÉRATIF :
1. Le présent de l'impératif :
a) Le singulier (2e personne) :
- En -e pour les verbes du 1er groupe et certains du 3e groupe (cueillir, ouvrir, offrir, savoir) : continue, méfie-toi, appuie, répare, cueille, ouvre, offre, sache.
- En -s pour les verbes du 2e groupe et les autres du 3e groupe : finis, choisis, bois, lis, prends, crains.
Exceptions : aie (verbe avoir), va (verbe aller, qui prend un « s » devant « y » et « en » pour l'euphonie : vas-y !).
b) Le pluriel :
- 1re personne en -ons : partons, cueillons, finissons.
- 2e personne en -ez : partez, cueillez, finissez.

2. Le passé de l'impératif :
Formé de l'impératif présent de l'auxiliaire + le participe passé :
« aie mangé », « ayons rangé », « sois parti », « soyez rentrés ».

Remarque orthographique :
Devant les pronoms « en » et « y », on ajoute un trait d'union et un « s » euphonique aux verbes terminés par une voyelle : « coupes-en », « vas-y », « retournes-y ».

II. LES VALEURS DE L'IMPÉRATIF :
- Ordre impératif : « Faites cet exercice pour demain ! »
- Conseil : « Prenez un taxi, c'est plus rapide. »
- Prière / Demande polie : « Accordez-moi cette faveur, s'il vous plaît. »
- Souhait : « Passez un bon séjour ! »`,
  sections: [
    {
      title: 'I. Règles morphologiques de l\'impératif',
      content: [
        'Trois personnes sans pronom sujet : tu (2e sg), nous (1re pl), vous (2e pl).',
        'Règle du 1er groupe : pas de « -s » à la 2e pers. du singulier (chante, parle, mange). Exception euphonique : chantes-en, manges-en, vas-y.'
      ]
    },
    {
      title: 'II. Les valeurs pragmatiques',
      content: [
        'Ordre directif, défense (avec négation : « ne fumez pas »), recommandation ou supplication.'
      ]
    }
  ],
  diagram: {
    title: 'Le mode impératif',
    root: 'Impératif',
    branches: [
      {
        name: 'Singulier (tu)',
        subtitle: 'Terminaison',
        items: ['1er gr. : -e (écoute, va)', '2e/3e gr. : -s (finis, pars)', 'Euphonie devant en/y : vas-y']
      },
      {
        name: 'Pluriel',
        subtitle: 'nous / vous',
        items: ['1re pl : -ons (partons)', '2e pl : -ez (partez)']
      },
      {
        name: 'Valeurs',
        subtitle: 'Injonction',
        items: ['Ordre, conseil, prière, interdiction']
      }
    ]
  },
  conclusion: `L'impératif est le mode par excellence de la communication directe et de l'injonction.`
};

// -------------------------------------------------------------
// LEÇON 23 (5ÈME) : SYNTHÈSE DES CONSTRUCTIONS VERBALES
// -------------------------------------------------------------
export const LESSON_23_FRANCAIS_5EME: LessonContent = {
  id: 'lecon-23-francais-5eme',
  number: 'LEÇON 23 (5ÈME)',
  title: 'SYNTHÈSE DES FORMES DU VERBE : ACTIVE, PASSIVE, PRONOMINALE ET IMPERSONNELLE',
  subject: 'Français',
  classLevel: '5ème',
  introduction: `Le verbe français peut entrer dans quatre constructions fondamentales : la forme active, la forme passive, la forme pronominale et la forme impersonnelle, chacune ayant des propriétés de concordance et de syntaxe propres.`,
  fullText: `SYNTHÈSE DES CONSTRUCTIONS VERBALES

1. FORME ACTIVE ET FORME PASSIVE DU VERBE :
- Forme active : le sujet fait l'action (« Un vent léger balaie le terrain »).
- Forme passive : le sujet subit l'action (« Le terrain est balayé par un vent léger »).

2. FORME PRONOMINALE DU VERBE :
Le verbe est accompagné d'un pronom personnel réfléchi de la même personne que son sujet :
- « Je me suis lavé. »
- « Ils se sont battus. »

3. FORME IMPERSONNELLE DU VERBE :
Une phrase est à la forme impersonnelle quand elle a pour sujet grammatical le pronom « il » neutre qui ne renvoie à aucune personne ni objet déterminé :
- « Il a beaucoup plu cette année. »
- « Il faut qu'il aille voir le directeur. »
- « Il ne lui reste plus qu'à travailler davantage. »`,
  sections: [
    {
      title: 'I. Comparatif des 4 formes verbales',
      content: [
        'Forme active : acteur = sujet.',
        'Forme passive : patient = sujet (avec auxiliaire être).',
        'Forme pronominale : sujet et objet sont la même entité.',
        'Forme impersonnelle : sujet grammatical "il" sans équivalent réel.'
      ]
    }
  ],
  diagram: {
    title: 'Constructions verbales',
    root: 'Formes du verbe',
    branches: [
      {
        name: 'Active & Passive',
        subtitle: 'Rôle du sujet',
        items: ['Active : le sujet agit', 'Passive : le sujet subit']
      },
      {
        name: 'Pronominale',
        subtitle: 'Réfléchi',
        items: ['Pronom personnel conjoint de même personne (se laver)']
      },
      {
        name: 'Impersonnelle',
        subtitle: 'Sujet neutre',
        items: ['« Il » invariable (il pleut, il faut)']
      }
    ]
  },
  conclusion: `Ces quatre formes offrent au locuteur la flexibilité stylistique nécessaire pour focaliser son propos.`
};
