import { LessonContent } from './courses';

// =========================================================================
// COURS D'ANGLAIS - CLASSE DE 5ÈME (MANUEL OFFICIEL VOLUME 2 - IBRAHIMA KANE)
// PARTIE 3 : RÈGLES D'ORTHOGRAPHE FONDAMENTALES ET HOMOPHONES COURANTS
// COURS LONGS ET EXHAUSTIFS - AUCUN RÉSUMÉ + DÉTAILS DE COMPRÉHENSION
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_26_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-26',
  number: 'Leçon 26',
  title: 'Orthographe : Le pluriel des noms réguliers et irréguliers',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "L'orthographe anglaise obéit à des règles de formation rigoureuses mais comporte également des exceptions historiques fascinantes. Si la règle générale du pluriel consiste à ajouter un 'S', de nombreuses terminaisons exigent l'ajout de '-ES', la modification de consonnes comme le 'F' en 'V', ou une transformation complète de la voyelle centrale. Cette vingt-sixième leçon passe en revue toutes les catégories de pluriels réguliers et irréguliers.",
  fullText: `Leçon 26 : Orthographe : Le pluriel des noms réguliers et irréguliers

Introduction : L'orthographe anglaise obéit à des règles de formation rigoureuses mais comporte également des exceptions historiques fascinantes. Si la règle générale du pluriel consiste à ajouter un 'S', de nombreuses terminaisons exigent l'ajout de '-ES', la modification de consonnes comme le 'F' en 'V', ou une transformation complète de la voyelle centrale. Cette vingt-sixième leçon passe en revue toutes les catégories de pluriels réguliers et irréguliers.

1. La règle générale et les terminaisons en -ES
• Règle générale : On ajoute un simple -S à la fin du nom singulier :
  - a book ➔ two books ; a car ➔ five cars ; a pen ➔ three pens.
• Terminaisons sifflantes (-S, -SH, -CH, -X, -Z) : Pour permettre la prononciation sans bloquer la langue, on ajoute obligatoirement -ES (prononcé /ɪz/) :
  - a bus ➔ buses ; a watch ➔ watches ; a box ➔ boxes ; a dish ➔ dishes.
• Terminaisons en -O précédé d'une consonne : La plupart prennent -ES :
  - a tomato ➔ tomatoes ; a potato ➔ potatoes ; a hero ➔ heroes.
  - Exceptions modernes (mots d'origine étrangère ou abrégés) : a photo ➔ photos ; a piano ➔ pianos.

2. Les mutations du -F / -FE en -VES
Les noms se terminant par -F ou -FE transforment leur consonne en -VES au pluriel :
• a knife (un couteau) ➔ knives.
• a life (une vie) ➔ lives.
• a leaf (une feuille d'arbre) ➔ leaves.
• a shelf (une étagère) ➔ shelves.
• a wolf (un loup) ➔ wolves.
• half (une moitié) ➔ halves.
• Exceptions notables qui prennent un simple -S : a roof (un toit) ➔ roofs ; a chef (un cuisinier) ➔ chefs ; a cliff (une falaise) ➔ cliffs.

3. Les pluriels irréguliers par changement vocalique et mots invariables
Certains des mots les plus fréquents de la langue anglaise conservent des pluriels germaniques anciens qui ne prennent JAMAIS de 'S' :
• a man ➔ men (des hommes).
• a woman ➔ women (des femmes - attention à la prononciation : /ˈwɪmɪn/).
• a child ➔ children (des enfants).
• a person ➔ people (des personnes / des gens).
• a foot ➔ feet (des pieds).
• a tooth ➔ teeth (des dents).
• a mouse ➔ mice (des souris).
• Noms invariables (identiques au singulier et au pluriel) :
  - a sheep ➔ sheep (des moutons).
  - a fish ➔ fish (des poissons).
  - a deer ➔ deer (des cerfs).

4. Détails approfondis de compréhension et pièges fréquents
A. Ne jamais ajouter de -S à un pluriel déjà irrégulier :
- Ne dites JAMAIS : « childrens » ➔ Dites : « children ».
- Ne dites JAMAIS : « peoples » (sauf pour désigner les peuples de la terre) ➔ Dites : « people » (People are friendly).

B. Accord du verbe avec PEOPLE :
Le mot 'people' est grammaticalement pluriel :
- These people ARE waiting for the bus (et non 'is').

C. Prononciation des terminaisons de pluriel :
- /s/ après consonnes sourdes : books, cups, cats.
- /z/ après consonnes sonores et voyelles : dogs, pens, days.
- /ɪz/ après les sifflantes (-es) : watches, buses, boxes.

Conclusion : En conclusion, la maîtrise des pluriels anglais élimine les fautes d'orthographe les plus récurrentes dans les devoirs et rédactions. En retenant la règle des sifflantes (-es), la bascule du f en -ves et la liste des sept grands pluriels irréguliers, l'élève de 5ème gagne en précision et en élégance rédactionnelle.`,
  sections: [
    {
      title: '1. La règle générale et l\'ajout de -ES',
      content: [
        "Règle de base : ajout d'un -S au singulier (a table ➔ tables).",
        "Règle phonétique des sifflantes : les mots terminés par -s, -sh, -ch, -x, -z prennent obligatoirement -ES :",
        "• a watch ➔ watches (des montres).",
        "• a box ➔ boxes (des boîtes).",
        "• a bus ➔ buses (des bus).",
        "Mots en -O précédé d'une consonne :",
        "• a tomato ➔ tomatoes ; a potato ➔ potatoes ; a hero ➔ heroes.",
        "• Exceptions en -S simple : a photo ➔ photos ; a piano ➔ pianos."
      ]
    },
    {
      title: '2. La transformation de -F / -FE en -VES',
      content: [
        "Règle d'adoucissement phonétique : le son /f/ se transforme en son voisé /v/ écrit -VES :",
        "• a knife ➔ knives (couteaux).",
        "• a life ➔ lives (vies).",
        "• a leaf ➔ leaves (feuilles).",
        "• a wife ➔ wives (épouses).",
        "• a shelf ➔ shelves (étagères).",
        "Exceptions à retenir : roofs (toits), chefs (chefs cuisiniers), cliffs (falaises)."
      ]
    },
    {
      title: '3. Les pluriels irréguliers historiques et mots invariables',
      content: [
        "Les 7 pluriels irréguliers majeurs issus du vieil anglais :",
        "• a child ➔ children (enfants).",
        "• a man ➔ men (hommes) / a woman ➔ women (femmes, prononcé /ˈwɪmɪn/).",
        "• a person ➔ people (gens / personnes).",
        "• a tooth ➔ teeth (dents) / a foot ➔ feet (pieds).",
        "• a mouse ➔ mice (souris).",
        "Les noms invariables (le singulier est égal au pluriel) :",
        "• a sheep ➔ two sheep (deux moutons).",
        "• a fish ➔ ten fish (dix poissons)."
      ]
    },
    {
      title: '4. Détails approfondis de compréhension et pièges à éliminer',
      content: [
        "A. Règle absolue anti-faute :",
        "• Ne jamais écrire 'childrens' ou 'peoples' pour désigner des personnes ordinaires.",
        "B. Accord du verbe avec les pluriels irréguliers :",
        "• Les mots 'people' et 'children' s'accordent TOUJOURS avec un verbe au pluriel :",
        "• 'The children ARE playing' (et non 'is').",
        "• 'People ARE kind' (et non 'is').",
        "C. Les trois prononciations du -S final :",
        "• /s/ : cats, books (sons non voisés).",
        "• /z/ : dogs, trees, days (sons voisés).",
        "• /ɪz/ : boxes, watches, oranges (après sifflantes)."
      ],
      table: {
        headers: ['Singulier', 'Pluriel', 'Règle appliquée', 'Prononciation finale'],
        rows: [
          ['a watch', 'watches', 'Terminaison en -ch (+es)', '/ɪz/'],
          ['a knife', 'knives', 'Mutation de -fe en -ves', '/vz/'],
          ['a tomato', 'tomatoes', 'Terminaison en -o consonne (+es)', '/z/'],
          ['a child', 'children', 'Pluriel irrégulier sans -s', '/drən/'],
          ['a person', 'people', 'Remplacement lexical complet', '/p/ (pluriel)']
        ]
      }
    }
  ],
  diagram: {
    title: 'Formation des Pluriels Réguliers et Irréguliers',
    root: 'PLURAL OF NOUNS',
    branches: [
      {
        name: 'Pluriels en -S et -ES',
        subtitle: 'Règles régulières',
        items: ['Règle générale : + S (books, cars)', 'Sifflantes (-s, -sh, -ch, -x) : + ES', 'Mots en -O : tomatoes, potatoes']
      },
      {
        name: 'Mutation en -VES',
        subtitle: 'Terminaisons en F/FE',
        items: ['knife ➔ knives, life ➔ lives', 'leaf ➔ leaves, shelf ➔ shelves', 'Exceptions : roofs, chefs, cliffs']
      },
      {
        name: 'Pluriels Irréguliers Purs',
        subtitle: 'Aucun "s" final',
        items: ['child ➔ children, person ➔ people', 'man ➔ men, woman ➔ women', 'tooth ➔ teeth, foot ➔ feet, sheep ➔ sheep']
      }
    ]
  },
  conclusion:
    "En conclusion, la maîtrise des pluriels anglais élimine les fautes d'orthographe les plus récurrentes dans les devoirs et rédactions. En retenant la règle des sifflantes (-es), la bascule du f en -ves et la liste des sept grands pluriels irréguliers, l'élève de 5ème gagne en précision et en élégance rédactionnelle."
};

export const LESSON_27_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-27',
  number: 'Leçon 27',
  title: 'Orthographe : Le doublement de la consonne finale (C-V-C)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Pourquoi le verbe RUN devient-il RUNNING avec deux 'N', alors que JUMP devient simplement JUMPING avec un seul 'P' ? Cette apparente anomalie obéit en réalité à une règle phonétique et orthographique mathématique : la règle Consonne-Voyelle-Consonne (C-V-C). Cette vingt-septième leçon décortique le mécanisme du doublement de la consonne finale lors de l'ajout de suffixes comme -ING ou -ED.",
  fullText: `Leçon 27 : Orthographe : Le doublement de la consonne finale (C-V-C)

Introduction : Pourquoi le verbe RUN devient-il RUNNING avec deux 'N', alors que JUMP devient simplement JUMPING avec un seul 'P' ? Cette apparente anomalie obéit en réalité à une règle phonétique et orthographique mathématique : la règle Consonne-Voyelle-Consonne (C-V-C). Cette vingt-septième leçon décortique le mécanisme du doublement de la consonne finale lors de l'ajout de suffixes comme -ING ou -ED.

1. Le principe fondamental de la règle C-V-C
Lorsqu'un verbe se compose d'une seule syllabe (monosyllabique) et qu'il se termine par la combinaison exacte :
UNE SEULE CONSONNE + UNE SEULE VOYELLE COURTE + UNE SEULE CONSONNE FINALE (schéma C-V-C),
on doit obligatoirement doubler la consonne finale avant d'ajouter un suffixe qui commence par une voyelle (-ING, -ED, -ER).
Exemples :
• STOP (S - T [consonne] - O [voyelle] - P [consonne]) ➔ STOPPING / STOPPED.
• RUN (R [consonne] - U [voyelle] - N [consonne]) ➔ RUNNING / RUNNER.
• SWIM (S - W [consonne] - I [voyelle] - M [consonne]) ➔ SWIMMING / SWIMMER.
• GET ➔ GETTING.
• SIT ➔ SITTING.
• PLAN ➔ PLANNING / PLANNED.

2. Les cas où l'on NE double PAS la consonne
La consonne ne se double pas si l'une des conditions C-V-C n'est pas remplie :
• Si le mot se termine par deux consonnes :
  - JUMP ➔ JUMPING (se termine par m + p = deux consonnes).
  - HELP ➔ HELPING / HELPED (l + p = deux consonnes).
• Si le mot possède deux voyelles avant la consonne finale :
  - READ ➔ READING (e + a = deux voyelles).
  - CLEAN ➔ CLEANING / CLEANED (e + a = deux voyelles).
• Si la consonne finale est W, X ou Y : Ces lettres ne se doublent JAMAIS en anglais !
  - PLAY ➔ PLAYING.
  - SNOW ➔ SNOWING.
  - FIX ➔ FIXING / FIXED.

3. Détails approfondis de compréhension et verbes à deux syllabes
A. La règle de l'accent tonique pour les verbes à deux syllabes :
Pour les verbes de deux syllabes qui respectent C-V-C, on ne double la consonne finale QUE SI la dernière syllabe est accentuée à l'oral :
• PREFER ➔ PREFERRING / PREFERRED (l'accent est sur -FER, donc on double).
• FORGET ➔ FORGETTING (l'accent est sur -GET, donc on double).
• En revanche : HAPPEN ➔ HAPPENING / HAPPENED (l'accent est sur HAP-, donc on ne double PAS !).
• VISIT ➔ VISITING / VISITED (l'accent est sur VIS-, donc pas de doublement).

B. Pourquoi double-t-on la consonne ? (Explication phonétique) :
En anglais, une consonne simple après une voyelle transforme souvent celle-ci en voyelle longue ou diphtongue. Le doublement sert de « bouclier » phonétique pour maintenir le son de la voyelle court :
- HOP (sautiller) ➔ HOPPING (avec voyelle courte /ɒ/).
- HOPE (espérer) ➔ HOPING (avec diphtongue /əʊ/).
Sans doublement, hopping deviendrait hoping !

Conclusion : En conclusion, la règle C-V-C garantit la préservation phonétique des voyelles courtes lors de la conjugaison. En vérifiant méthodiquement la formule (1 syllabe + 1 voyelle + 1 consonne), l'élève de 5ème orthographie avec une certitude absolue tous les participes présents et passés.` ,
  sections: [
    {
      title: '1. La règle fondamentale Consonne-Voyelle-Consonne (C-V-C)',
      content: [
        "Condition d'application : verbe d'une seule syllabe se terminant par une consonne précédée d'une seule voyelle brève.",
        "Action : on double la consonne finale avant d'ajouter -ING ou -ED.",
        "Exemples types du manuel :",
        "• STOP ➔ STOPPING, STOPPED.",
        "• RUN ➔ RUNNING, RUNNER.",
        "• SWIM ➔ SWIMMING, SWIMMER.",
        "• SIT ➔ SITTING.",
        "• DIG (creuser) ➔ DIGGING."
      ]
    },
    {
      title: '2. Les situations d\'exclusion (Pas de doublement)',
      content: [
        "On n'applique pas le doublement si :",
        "• Le verbe finit par 2 consonnes : JUMP ➔ JUMPING ; HELP ➔ HELPING.",
        "• Le verbe possède 2 voyelles consécutives : READ ➔ READING ; COOK ➔ COOKING.",
        "• La consonne finale est W, X ou Y (ces lettres ne se doublent jamais en anglais) :",
        "  - PLAY ➔ PLAYING ; SHOW ➔ SHOWING ; FIX ➔ FIXING."
      ]
    },
    {
      title: '3. Détails approfondis de compréhension et accent tonique',
      content: [
        "A. Cas des verbes dissyllabiques (2 syllabes) :",
        "• Si la dernière syllabe est accentuée ➔ on double : PREFER ➔ PREFERRING ; BEGIN ➔ BEGINNING.",
        "• Si la première syllabe est accentuée ➔ pas de doublement : VISIT ➔ VISITING ; OPEN ➔ OPENING ; HAPPEN ➔ HAPPENING.",
        "B. La raison d'être phonétique (Le bouclier vocalique) :",
        "• Doubler la consonne permet de préserver la voyelle brève :",
        "• HOP (sauter à cloche-pied) ➔ HOPPING vs HOPE (espérer) ➔ HOPING.",
        "• ROB (cambrioler) ➔ ROBBING vs ROBE (robe longue) ➔ ROBING."
      ],
      table: {
        headers: ['Verbe infinitif', 'Structure finale', 'Forme en -ING', 'Règle / Justification'],
        rows: [
          ['STOP', 'C - V - C (t - o - p)', 'STOPPING', '1 syllabe, 1 voyelle, 1 consonne ➔ Doublement'],
          ['JUMP', 'V - C - C (u - m - p)', 'JUMPING', '2 consonnes finales ➔ Pas de doublement'],
          ['CLEAN', 'V - V - C (e - a - n)', 'CLEANING', '2 voyelles avant consonne ➔ Pas de doublement'],
          ['PLAY', 'Terminaison en Y', 'PLAYING', 'Les lettres W, X, Y ne se doublent jamais'],
          ['PREFER', 'Accent sur la 2e syllabe', 'PREFERRING', 'Dernière syllabe accentuée ➔ Doublement']
        ]
      }
    }
  ],
  diagram: {
    title: 'Mécanisme du Doublement C-V-C',
    root: 'RÈGLE C-V-C (DOUBLEMENT)',
    branches: [
      {
        name: 'Quand DOUBLER ?',
        subtitle: '1 syllabe + C-V-C',
        items: ['RUN ➔ RUNNING, SWIM ➔ SWIMMING', 'STOP ➔ STOPPING / STOPPED', 'Verbes à 2 syllabes accentués en fin (preferring)']
      },
      {
        name: 'Quand NE PAS doubler ?',
        subtitle: 'Exceptions de structure',
        items: ['2 consonnes finales (JUMP ➔ jumping)', '2 voyelles ensemble (READ ➔ reading)', 'Lettres interdites de doublon : W, X, Y']
      },
      {
        name: 'Rôle Phonétique',
        subtitle: 'Bouclier de voyelle brève',
        items: ['Protège le son court de la voyelle', 'HOPPING (sauter) ≠ HOPING (espérer)', 'Clarté de prononciation orale']
      }
    ]
  },
  conclusion:
    "En conclusion, la règle C-V-C garantit la préservation phonétique des voyelles courtes lors de la conjugaison. En vérifiant méthodiquement la formule (1 syllabe + 1 voyelle + 1 consonne), l'élève de 5ème orthographie avec une certitude absolue tous les participes présents et passés."
};

export const LESSON_28_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-28',
  number: 'Leçon 28',
  title: 'Orthographe : Les mutations de la lettre -Y en fin de mot',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "La lettre 'Y' en fin de mot est une véritable caméléon dans la grammaire anglaise : selon la lettre qui la précède, elle reste intacte ou se transforme radicalement en 'I' ou 'IE' dès qu'on y ajoute une terminaison (-S, -ED, -ER, -EST, -LY). Cette vingt-huitième leçon expose avec rigueur la règle du 'Y précédé d'une consonne' et l'exception protectrice du suffixe -ING.",
  fullText: `Leçon 28 : Orthographe : Les mutations de la lettre -Y en fin de mot

Introduction : La lettre 'Y' en fin de mot est une véritable caméléon dans la grammaire anglaise : selon la lettre qui la précède, elle reste intacte ou se transforme radicalement en 'I' ou 'IE' dès qu'on y ajoute une terminaison (-S, -ED, -ER, -EST, -LY). Cette vingt-huitième leçon expose avec rigueur la règle du 'Y précédé d'une consonne' et l'exception protectrice du suffixe -ING.

1. La règle d'or : Consonne + Y versus Voyelle + Y
Pour savoir ce qu'il advient du 'Y' final lorsqu'on ajoute un suffixe, il faut regarder la lettre immédiatement placée AVANT lui :
• Cas 1 : CONSONNE + Y ➔ Le Y se transforme en 'I' (ou 'IE' devant un -S) :
  - Au pluriel des noms : a baby ➔ babies ; a city ➔ cities ; a country ➔ countries.
  - Au présent simple (3e personne) : study ➔ studies ; cry ➔ cries ; fly ➔ flies.
  - Au prétérit (-ED) : marry ➔ married ; carry ➔ carried ; tidy ➔ tidied.
  - Aux comparatifs / superlatifs : happy ➔ happier / happiest ; easy ➔ easier / easiest.
  - Aux adverbes (-LY) : easy ➔ easily ; happy ➔ happily.
• Cas 2 : VOYELLE + Y ➔ Le Y reste STRICTEMENT INTACT (on ajoute simplement le suffixe) :
  - a boy ➔ boys (voyelle O avant Y).
  - a day ➔ days (voyelle A avant Y).
  - play ➔ plays / played.
  - enjoy ➔ enjoys / enjoyed.
  - stay ➔ stays / stayed.

2. L'exception protectrice absolue : Le suffixe -ING
Même si le verbe se termine par une CONSONNE + Y, le 'Y' ne change JAMAIS devant le suffixe -ING !
La raison est simple : la langue anglaise refuse catégoriquement d'écrire deux 'I' à la suite (ce qui donnerait l'aberration visuelle 'studiing').
Exemples :
• STUDY ➔ STUDYING (et non 'studiing').
• CRY ➔ CRYING.
• TIDY ➔ TIDYING.
• CARRY ➔ CARRYING.
• FLY ➔ FLYING.

3. Détails approfondis de compréhension et cas particuliers
A. Les verbes en -IE qui se transforment en -Y devant -ING :
Trois verbes très courants font exactement l'inverse : terminés par -IE, ils transforment leur -IE en -Y devant -ING :
• DIE (mourir) ➔ DYING.
• LIE (mentir / être étendu) ➔ LYING.
• TIE (attacher / nouer) ➔ TYING.

B. Tableau comparatif visuel :
- play + s = plays (voyelle a + y ➔ pas de changement).
- study + s = studies (consonne d + y ➔ y devient ie).
- play + ed = played.
- marry + ed = married.

Conclusion : En conclusion, la règle des mutations de la lettre Y est une équation simple et prévisible : regardez toujours la lettre qui précède. Si c'est une consonne, le Y se mue en I (sauf devant le suffixe protecteur -ING) ; si c'est une voyelle, le Y demeure inchangé. Une clé infaillible pour ne plus hésiter à l'écrit.` ,
  sections: [
    {
      title: '1. La règle fondamentale : Consonne + Y vs Voyelle + Y',
      content: [
        "Tout dépend de la lettre située juste avant le Y :",
        "• Formule 1 : CONSONNE + Y ➔ le Y se mue en I :",
        "  - Devant -S : Y devient IE (baby ➔ babies ; city ➔ cities ; study ➔ studies).",
        "  - Devant -ED : Y devient I (tidy ➔ tidied ; cry ➔ cried).",
        "  - Devant -ER / -EST : Y devient I (happy ➔ happier, happiest).",
        "• Formule 2 : VOYELLE + Y ➔ le Y ne bouge JAMAIS :",
        "  - boy ➔ boys ; day ➔ days ; play ➔ plays, played ; enjoy ➔ enjoyed."
      ]
    },
    {
      title: '2. L\'exception protectrice du suffixe -ING',
      content: [
        "Règle de rejet du double 'I' : l'anglais interdit la suite orthographique 'ii'.",
        "Par conséquent, devant le suffixe -ING, le Y est intégralement maintenu, même après consonne :",
        "• STUDY ➔ STUDYING (jamais 'studiing').",
        "• CRY ➔ CRYING.",
        "• CARRY ➔ CARRYING.",
        "• FLY ➔ FLYING."
      ]
    },
    {
      title: '3. Détails approfondis de compréhension et inversion -IE ➔ -Y',
      content: [
        "A. Le phénomène inverse (-IE devient -Y devant -ING) :",
        "• Trois verbes monosyllabiques cruciaux :",
        "  - DIE (mourir) ➔ DYING.",
        "  - LIE (mentir / s'allonger) ➔ LYING.",
        "  - TIE (attacher une cravate ou ses lacets) ➔ TYING.",
        "B. Formation des adverbes de manière :",
        "• Les adjectifs en -Y se transforment en -ILY :",
        "  - Easy ➔ Easily (facilement).",
        "  - Heavy ➔ Heavily (lourdement / abondamment : it rained heavily)."
      ],
      table: {
        headers: ['Mot de base', 'Environnement du Y', 'Suffixe ajouté', 'Forme finale correcte'],
        rows: [
          ['CITY', 'Consonne (T) + Y', '+ S (Pluriel)', 'CITIES'],
          ['BOY', 'Voyelle (O) + Y', '+ S (Pluriel)', 'BOYS'],
          ['CRY', 'Consonne (R) + Y', '+ ED (Passé)', 'CRIED'],
          ['PLAY', 'Voyelle (A) + Y', '+ ED (Passé)', 'PLAYED'],
          ['STUDY', 'Consonne (D) + Y', '+ ING (Participe)', 'STUDYING (protection du Y)'],
          ['DIE', 'Terminaison en -IE', '+ ING (Participe)', 'DYING']
        ]
      }
    }
  ],
  diagram: {
    title: 'Mutations et Règles de la Lettre -Y',
    root: 'RÈGLES DE LA LETTRE -Y',
    branches: [
      {
        name: 'Consonne + Y (Mutation)',
        subtitle: 'Y devient I / IE',
        items: ['Devant -S : baby ➔ babies, fly ➔ flies', 'Devant -ED : study ➔ studied', 'Devant -ER/-EST : happy ➔ happier']
      },
      {
        name: 'Voyelle + Y (Stabilité)',
        subtitle: 'Y reste intact',
        items: ['boy ➔ boys, day ➔ days', 'play ➔ played, enjoy ➔ enjoyed', 'stay ➔ stays / staying']
      },
      {
        name: 'Exceptions -ING & -IE',
        subtitle: 'Phonétique & Harmonie',
        items: ['Protection -ING : STUDYING, CRYING', 'Anti-double I (jamais "ii")', 'Inversion -IE en Y : DIE ➔ DYING, LIE ➔ LYING']
      }
    ]
  },
  conclusion:
    "En conclusion, la règle des mutations de la lettre Y est une équation simple et prévisible : regardez toujours la lettre qui précède. Si c'est une consonne, le Y se mue en I (sauf devant le suffixe protecteur -ING) ; si c'est une voyelle, le Y demeure inchangé. Une clé infaillible pour ne plus hésiter à l'écrit."
};

export const LESSON_29_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-29',
  number: 'Leçon 29',
  title: "Orthographe : Les homophones courants — THEIR / THERE / THEY'RE & YOUR / YOU'RE",
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Les homophones sont des mots qui se prononcent exactement de la même manière à l'oreille mais qui possèdent une orthographe et une fonction grammaticale totalement différentes. Les confusions entre THEIR / THERE / THEY'RE et entre YOUR / YOU'RE représentent plus de la moitié des fautes d'inattention commises par les élèves de 5ème et même par certains locuteurs natifs ! Cette vingt-neuvième leçon offre des tests de substitution infaillibles pour ne plus jamais les confondre.",
  fullText: `Leçon 29 : Orthographe : Les homophones courants — THEIR / THERE / THEY'RE & YOUR / YOU'RE

Introduction : Les homophones sont des mots qui se prononcent exactement de la même manière à l'oreille mais qui possèdent une orthographe et une fonction grammaticale totalement différentes. Les confusions entre THEIR / THERE / THEY'RE et entre YOUR / YOU'RE représentent plus de la moitié des fautes d'inattention commises par les élèves de 5ème et même par certains locuteurs natifs ! Cette vingt-neuvième leçon offre des tests de substitution infaillibles pour ne plus jamais les confondre.

1. Le trio THEIR / THERE / THEY'RE
Tous trois se prononcent rigoureusement /ðeə(r)/.
• THEIR (adjectif possessif) = leur / leurs. Il est TOUJOURS suivi d'un nom qui appartient à 'eux' :
  - The students opened their books. (Les élèves ont ouvert leurs livres.)
  - Their house is in Saint-Louis. (Leur maison est à Saint-Louis.)
• THERE (adverbe de lieu ou pronom de l'existence) = là-bas / y, ou dans la structure 'there is / there are' (il y a) :
  - Look over there! (Regarde là-bas !)
  - There is a pen on the desk. (Il y a un stylo sur le bureau.)
  - Put the box there. (Mets la boîte là.)
• THEY'RE (contraction de 'THEY ARE') = ils sont / elles sont :
  - They're waiting for the bus. (Ils sont en train d'attendre le bus.)
  - They're very happy today. (Elles sont très heureuses aujourd'hui.)

2. Le duo YOUR / YOU'RE
Tous deux se prononcent /jɔː(r)/.
• YOUR (adjectif possessif) = ton / ta / tes / votre / vos. Il est TOUJOURS suivi d'un nom :
  - What is your name? (Quel est ton nom ?)
  - Don't forget your schoolbag! (N'oublie pas ton cartable !)
• YOU'RE (contraction de 'YOU ARE') = tu es / vous êtes :
  - You're my best friend. (Tu es mon meilleur ami.)
  - You're doing a fantastic job! (Tu es en train de faire un travail fantastique !)

3. Détails approfondis de compréhension et tests de substitution infaillibles
A. Le test de remplacement pour THEY'RE :
Si vous hésitez, remplacez mentalement le mot par « THEY ARE » :
- Si la phrase a encore du sens ➔ Écrivez THEY'RE.
- Exemple : « (They're / Their) very tired » ➔ « They are very tired » fonctionne ! Donc écrivez : THEY'RE.
- En revanche : « (They're / Their) bags are heavy » ➔ « They are bags are heavy » ne veut rien dire ! Donc écrivez : THEIR.

B. Le test visuel pour THERE :
Notez que le mot THERE contient le mot HERE (ici) ! Il s'agit donc bien d'un indicateur de lieu dans l'espace (T + HERE = THERE).

C. Le test de remplacement pour YOU'RE :
Remplacez mentalement par « YOU ARE » :
- « Is this (your / you're) pen? » ➔ « Is this you are pen? » est absurde ➔ Donc écrivez : YOUR.
- « (Your / You're) welcome! » ➔ « You are welcome » est parfait ➔ Donc écrivez : YOU'RE.

Conclusion : En conclusion, maîtriser ces homophones courants est la marque d'un élève attentif et rigoureux. En appliquant systématiquement les tests de substitution (« they are » et « you are »), l'élève de 5ème neutralise les pièges auditifs et produit des textes d'une irréprochable correction orthographique.` ,
  sections: [
    {
      title: '1. Le trio THEIR / THERE / THEY\'RE (/ðeə/)',
      content: [
        "Bien que prononcés à l'identique, ces trois mots remplissent des fonctions grammaticales distinctes :",
        "• THEIR : adjectif possessif (leur, leurs). Toujours placé devant un nom possédé.",
        "  - Exemple : The children are playing with their dog.",
        "• THERE : adverbe de lieu (là-bas) ou structure d'existence (there is / there are).",
        "  - Exemple : Look over there! / There are twenty students in the classroom.",
        "• THEY'RE : forme contractée de 'THEY ARE' (sujet + verbe be).",
        "  - Exemple : They're studying English for the exam."
      ]
    },
    {
      title: '2. Le duo YOUR / YOU\'RE (/jɔː/)',
      content: [
        "Différenciation de la possession et de l'état :",
        "• YOUR : adjectif possessif (ton, ta, tes, votre, vos). Suivi obligatoirement d'un substantif.",
        "  - Exemple : Open your English book on page 50.",
        "• YOU'RE : contraction du pronom sujet YOU et du verbe ARE (tu es / vous êtes).",
        "  - Exemple : You're late this morning! (Tu es en retard ce matin !)"
      ]
    },
    {
      title: '3. Détails approfondis de compréhension et astuces de substitution',
      content: [
        "A. Le test infaillible de THEY ARE / YOU ARE :",
        "• Dès que vous voulez écrire 'they're' ou 'you're', essayez de prononcer la phrase en disant 'they are' ou 'you are'. Si la phrase reste correcte, l'apostrophe est obligatoire.",
        "B. L'indice visuel du lieu (T + HERE = THERE) :",
        "• Pour se souvenir que THERE désigne un endroit, observez qu'il contient le mot HERE (ici).",
        "C. Autres homophones fréquents au collège :",
        "• IT'S (it is / it has) vs ITS (possessif d'un animal ou d'un objet : the dog wagged its tail).",
        "• TWO (chiffre 2) vs TO (préposition) vs TOO (aussi / trop)."
      ],
      table: {
        headers: ['Mot', 'Nature grammaticale', 'Test de validation', 'Exemple type'],
        rows: [
          ['THEIR', 'Possessif (leur)', 'Suivi d\'un nom possédé', 'Their teacher is very patient.'],
          ['THERE', 'Lieu / Existence', 'Contient "here" (ici / là-bas)', 'There is an apple on the table.'],
          ['THEY\'RE', 'Sujet + Verbe (They are)', 'Remplaçable par "they are"', 'They\'re going to the stadium.'],
          ['YOUR', 'Possessif (ton/votre)', 'Suivi d\'un nom possédé', 'Where is your ruler?'],
          ['YOU\'RE', 'Sujet + Verbe (You are)', 'Remplaçable par "you are"', 'You\'re doing very well today!']
        ]
      }
    }
  ],
  diagram: {
    title: 'Différenciation des Homophones Fréquents',
    root: 'HOMOPHONES COURANTS',
    branches: [
      {
        name: 'THEIR vs THERE vs THEY\'RE',
        subtitle: 'Prononciation /ðeə/',
        items: ['THEIR = Possession (their schoolbag)', 'THERE = Lieu / Existence (T + HERE)', 'THEY\'RE = They are (Ils sont)']
      },
      {
        name: 'YOUR vs YOU\'RE',
        subtitle: 'Prononciation /jɔː/',
        items: ['YOUR = Possession (your pencil case)', 'YOU\'RE = You are (Tu es / Vous êtes)', 'Test : Remplacer par "you are"']
      },
      {
        name: 'Autres Pièges Majeurs',
        subtitle: 'Paires fréquentes',
        items: ['IT\'S (it is) vs ITS (possessif)', 'TWO (2) vs TO (vers) vs TOO (aussi)', 'Rigueur de relecture écrite']
      }
    ]
  },
  conclusion:
    "En conclusion, maîtriser ces homophones courants est la marque d'un élève attentif et rigoureux. En appliquant systématiquement les tests de substitution (« they are » et « you are »), l'élève de 5ème neutralise les pièges auditifs et produit des textes d'une irréprochable correction orthographique."
};
