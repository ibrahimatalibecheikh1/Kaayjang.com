import { LessonContent } from './courses';

// LEÇON 7 : LES FONCTIONS AUTOUR DU NOM
export const LESSON_7_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-7',
  number: 'Leçon 7',
  title: 'Les fonctions autour du nom',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude exhaustive des expansions du nom : épithète liée, épithète détachée (apposition), complément du nom (CDN) et complément de l\'antécédent. Règles d\'accord et méthodologie pour le BFEM.',
  introduction: 'Au sein de la phrase, le Groupe Nominal (GN) s\'organise autour d\'un nom noyau. Ce nom peut être enrichi, précisé et qualifié par diverses expansions nominales. Maîtriser l\'analyse grammaticale de ces fonctions est indispensable pour les questions de morphosyntaxe au BFEM et permet d\'enrichir la précision descriptive dans les productions écrites.',
  sections: [
    {
      title: '1. L\'Épithète (Liée ou Détachée / Apposée)',
      subsections: [
        {
          subtitle: 'A. L\'épithète liée',
          content: [
            'L\'épithète liée est un adjectif qualificatif ou un participe placé directement avant ou après le nom qu\'il qualifie, sans être séparé de lui par une virgule.',
            'Elle fait corps avec le groupe nominal et ne peut pas être déplacée librement dans la phrase.',
            'Accord : elle s\'accorde obligatoirement en genre et en nombre avec le nom noyau.',
            'Exemple : « Une brillante réussite illumine le visage des lauréats sénégalais. » (« brillante » est adjectif qualificatif, épithète liée du nom « réussite » ; « sénégalais » est épithète liée du nom « lauréats »).'
          ]
        },
        {
          subtitle: 'B. L\'épithète détachée (ou apposition)',
          content: [
            'L\'adjectif qualificatif est dit épithète détachée lorsqu\'il est séparé du nom qu\'il qualifie par une virgule (ou deux virgules s\'il est inséré en incise).',
            'Elle bénéficie d\'une grande mobilité dans la phrase : elle peut être placée en tête de phrase, au milieu ou en fin.',
            'Valeur sémantique : elle apporte souvent une nuance de cause ou d\'explication. Exemple : « Heureux et fiers, les élèves remercient chaleureusement leurs professeurs. » (« Heureux et fiers » apporte la cause du remerciement).'
          ]
        }
      ]
    },
    {
      title: '2. Le Complément du Nom (CDN)',
      subsections: [
        {
          subtitle: 'A. Structure et prépositions de liaison',
          content: [
            'Le complément du nom est un mot ou un groupe de mots rattaché au nom noyau par l\'intermédiaire d\'une préposition : de, à, en, sans, pour, par, contre, avec.',
            'La classe grammaticale du CDN peut être variée : un nom propre ou commun (« le fleuve Sénégal », « un cahier de français »), un pronom (« la maison de celle-ci »), un infinitif (« une machine à coudre », « le désir de réussir »), un adverbe (« les cours d\'hier »).',
            'Contrairement à l\'adjectif épithète, le complément du nom ne s\'accorde pas en genre et en nombre avec le nom qu\'il complète : son accord dépend de son propre sens (Exemple : « une tarte aux pommes » -> plusieurs pommes dans la tarte ; « du jus de pomme » -> substance générale sans pluriel).'
          ]
        },
        {
          subtitle: 'B. Les valeurs sémantiques du complément du nom',
          content: [
            'Appartenance / Possession : « Le stylo du maître »',
            'Matière : « Une pirogue en bois de baobab »',
            'Destination / Usage : « Une tenue de cérémonie »',
            'Origine géographique : « Le sel de Kaolack »',
            'Contenu : « Un sac de mil »'
          ]
        }
      ]
    },
    {
      title: '3. Le Complément de l\'Antécédent',
      content: [
        'C\'est la fonction syntaxique exclusive de la proposition subordonnée relative par rapport au nom ou au pronom qu\'elle complète dans la proposition principale.',
        'Exemple : « Le monument [que nous avons visité] est grandiose. » La proposition entre crochets a pour fonction : complément de l\'antécédent « monument ».',
        'Piège fréquent au BFEM : ne pas confondre la fonction de la proposition relative entière (complément de l\'antécédent) avec la fonction interne du pronom relatif à l\'intérieur de sa proposition (sujet, COD, COI, CC...).'
      ]
    },
    {
      title: '4. L\'Apposition Nominale',
      content: [
        'L\'apposition peut aussi être assurée par un nom ou un groupe nominal placé à côté d\'un autre nom pour le désigner autrement, le renommer ou préciser sa qualité.',
        'Elle est généralement séparée par une virgule ou deux-points : « Dakar, capitale du Sénégal, est une métropole vibrante. » (« capitale du Sénégal » est groupe nominal apposé au nom « Dakar »).',
        'Cas particulier de l\'apposition de titre : « Le président Macky Sall », « Le fleuve Casamance » (apposition directe sans virgule).'
      ]
    },
    {
      title: '5. Tableau Comparatif des Expansions du Nom pour le BFEM',
      table: {
        headers: ['Fonction grammaticale', 'Nature possible', 'Liaison avec le nom', 'Exemple type BFEM'],
        rows: [
          ['Épithète liée', 'Adjectif qualificatif, participe', 'Directe, sans ponctuation', 'Un travail exemplaire.'],
          ['Épithète détachée', 'Adjectif qualificatif, participe', 'Séparé par une ou deux virgules', 'Courageux, l\'athlète franchit la ligne d\'arrivée.'],
          ['Complément du Nom (CDN)', 'Groupe prépositionnel (nom, infinitif, adverbe)', 'Relié par préposition (à, de, en, sans...)', 'La porte de la classe ; une envie d\'apprendre.'],
          ['Complément de l\'antécédent', 'Proposition subordonnée relative', 'Introduite par un pronom relatif', 'L\'élève qui étudie réussira.']
        ]
      }
    }
  ],
  conclusion: 'L\'identification rigoureuse des expansions nominales permet de distinguer les niveaux d\'analyse grammaticale au BFEM et de construire des descriptions littéraires soignées et variées.'
};

// LEÇON 8 : LES FONCTIONS AUTOUR DU VERBE
export const LESSON_8_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-8',
  number: 'Leçon 8',
  title: 'Les fonctions autour du verbe',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude des compléments essentiels du verbe : COD, COI, COS, Attribut du sujet et Attribut du COD. Critères d\'identification, tests de pronominalisation et pièges du BFEM.',
  introduction: 'Les fonctions autour du verbe représentent les compléments essentiels de la phrase. Contrairement aux compléments circonstanciels, ils ne peuvent généralement être ni déplacés ni supprimés sans rendre la phrase agrammaticale ou sans en altérer profondément le sens. La maîtrise de ces fonctions est la clé de voûte de la syntaxe et des accords du participe passé.',
  sections: [
    {
      title: '1. Le Complément d\'Objet Direct (COD)',
      subsections: [
        {
          subtitle: 'A. Définition et caractéristiques',
          content: [
            'Le COD se rattache directement au verbe transitif direct, sans préposition intermédiaire.',
            'Il désigne l\'être ou la chose sur laquelle s\'exerce directement l\'action du verbe.',
            'Question de repérage : on pose la question « qui ? » ou « quoi ? » après le verbe conjugué. Exemple : « L\'écrivain sénégalais rédige un roman historique. » (rédige quoi ? -> « un roman historique » = COD).',
            'Test syntaxique : le COD d\'une phrase active devient obligatoirement le sujet de la phrase passive correspondante (« Un roman historique est rédigé par l\'écrivain »).'
          ]
        },
        {
          subtitle: 'B. Les classes grammaticales du COD',
          content: [
            'Un nom propre ou groupe nominal : « J\'ai rencontré Aminata. »',
            'Un pronom personnel (le, la, les, l\', se, me, te, nous, vous) : « Le professeur les encourage. »',
            'Un pronom relatif (que) : « Le diplôme que tu convoites... »',
            'Un verbe à l\'infinitif : « L\'athlète désire triompher. »',
            'Une proposition subordonnée complétive : « Il affirme qu\'il a révisé. »'
          ]
        }
      ]
    },
    {
      title: '2. Le Complément d\'Objet Indirect (COI) et le Complément d\'Objet Second (COS)',
      subsections: [
        {
          subtitle: 'A. Le Complément d\'Objet Indirect (COI)',
          content: [
            'Le COI se rattache au verbe transitif indirect par l\'intermédiaire d\'une préposition (le plus souvent « à » ou « de »).',
            'Question de repérage : « à qui ? / à quoi ? » ou « de qui / de quoi ? » après le verbe. Exemple : « L\'enfant obéit scrupuleusement à ses parents. » (obéit à qui ? -> « à ses parents » = COI).',
            'Pronominalisation : remplacé par « lui », « leur » (pour les personnes) ou « en », « y » (pour les choses et idées).'
          ]
        },
        {
          subtitle: 'B. Le Complément d\'Objet Second (COS)',
          content: [
            'Le COS est un complément d\'objet indirect qui s\'ajoute à un verbe qui possède déjà un premier complément d\'objet (généralement un COD).',
            'On le rencontre avec des verbes de transmission, don, parole ou attribution (donner, offrir, enseigner, dire, promettre, envoyer).',
            'Exemple classique : « Le professeur distribue les fascicules (COD) aux élèves de 3ème (COS). »'
          ]
        }
      ]
    },
    {
      title: '3. L\'Attribut du Sujet',
      subsections: [
        {
          subtitle: 'A. Définition et verbes d\'état',
          content: [
            'L\'attribut du sujet exprime une qualité, un état, une identité ou une caractéristique attribuée au sujet par l\'intermédiaire d\'un verbe d\'état.',
            'Liste officielle des verbes d\'état : être, paraître, sembler, devenir, demeurer, rester, avoir l\'air, passer pour.',
            'Règle d\'accord absolue : l\'attribut du sujet s\'accorde OBLIGATOIREMENT en genre et en nombre avec le sujet.',
            'Exemple : « Cette candidate sénégalaise est persévérante et brillante. » (« persévérante et brillante » = adjectifs qualificatifs, attributs du sujet « Cette candidate sénégalaise »).'
          ]
        },
        {
          subtitle: 'B. Différence cruciale entre COD et Attribut du sujet',
          content: [
            'Un verbe d\'état ne prend JAMAIS de COD ! Même si l\'on peut poser la question « qui ? » ou « quoi ? », il s\'agit toujours d\'un attribut du sujet.',
            'Test de l\'égalité : Sujet = Attribut (« Cette élève est une championne » -> Cette élève = la championne). Avec un COD, il n\'y a pas d\'égalité d\'identité (« L\'élève mange une mangue » -> l\'élève n\'est pas la mangue !).'
          ]
        }
      ]
    },
    {
      title: '4. L\'Attribut du Complément d\'Objet Direct (Attribut du COD)',
      content: [
        'L\'attribut du COD exprime une qualité attribuée non pas au sujet, mais au COD par l\'intermédiaire du verbe.',
        'On le rencontre après les verbes de jugement (juger, croire, estimer, trouver), de choix/nomination (élire, nommer, proclamer, choisir) ou de transformation (rendre).',
        'Exemple : « Les citoyens ont élu ce député président de l\'Assemblée. » (« président » qualifie « ce député » qui est COD ; « président » est donc Attribut du COD).',
        'Autre exemple : « La chaleur a rendu les candidats fatigués. » (« fatigués » s\'accorde avec le COD « candidats »).'
      ]
    },
    {
      title: '5. Tableau Récapitulatif des Fonctions Verbales',
      table: {
        headers: ['Fonction', 'Type de verbe', 'Liaison prépositionnelle', 'Question test', 'Exemple'],
        rows: [
          ['COD', 'Transitif direct', 'Directe (sans préposition)', 'Verbe + qui / quoi ?', 'Il prépare son examen.'],
          ['COI', 'Transitif indirect', 'Indirecte (à, de...)', 'Verbe + à qui/quoi ? de qui/quoi ?', 'Elle rêve de son avenir.'],
          ['COS', 'Verbe de don/parole avec COD', 'Indirecte (à, de...)', 'Verbe + COD + à qui ?', 'Il offre un livre à sa sœur.'],
          ['Attribut du Sujet', 'Verbe d\'état', 'Par l\'intermédiaire du verbe d\'état', 'Sujet = attribut', 'Ces étudiants restent confiants.'],
          ['Attribut du COD', 'Verbe de jugement/élection', 'Porte sur le COD', 'Attribue une qualité au COD', 'Le jury juge ce travail remarquable.']
        ]
      }
    }
  ],
  conclusion: 'Savoir distinguer le COD de l\'attribut du sujet et du COI évite les erreurs grossières lors de la dictée et de l\'analyse grammaticale au BFEM.'
};

// LEÇON 9 : LA VOIX ACTIVE ET LA VOIX PASSIVE
export const LESSON_9_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-9',
  number: 'Leçon 9',
  title: 'La voix active et la voix passive',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude rigoureuse de la transformation passive : conditions syntaxiques, rôle de l\'auxiliaire être, accord du participe passé, statut du complément d\'agent et pièges au BFEM.',
  introduction: 'La voix (ou diathèse) exprime la relation qui unit le sujet de la phrase et le procès désigné par le verbe. À la voix active, le sujet accomplit l\'action énoncée ; à la voix passive, le sujet subit l\'action opérée par un agent. Au BFEM, la transformation active/passive est un classique qui teste la rigueur dans la concordance des temps et les accords du participe passé.',
  sections: [
    {
      title: '1. Conditions Fondamentales de la Transformation Passive',
      subsections: [
        {
          subtitle: 'A. Règle absolue de transitivité',
          content: [
            'Seuls les verbes transitifs directs (qui admettent un COD) peuvent être transformés à la voix passive.',
            'Les verbes intransitifs (dormir, tomber, marcher, partir, voyager) ne peuvent JAMAIS être mis au passif.',
            'Les verbes transitifs indirects (obéir à, nuire à, parler de) ne se mettent pas au passif en français, à l\'exception unique du verbe « obéir » dans la tournure archaïque (« être obéi »). On ne dit jamais *Mes parents sont obéis par moi*.'
          ]
        },
        {
          subtitle: 'B. Les rôles actanciels',
          content: [
            'Voix active : « Le lion dévore la gazelle. » Le sujet (« Le lion ») est l\'agent qui accomplit l\'action ; « la gazelle » est le COD.',
            'Voix passive : « La gazelle est dévorée par le lion. » Le sujet (« La gazelle ») subit l\'action ; « par le lion » est le complément d\'agent.'
          ]
        }
      ]
    },
    {
      title: '2. Le Mécanisme Rigoureux de la Transformation Active -> Passive',
      subsections: [
        {
          subtitle: 'A. Les 3 étapes systématiques',
          content: [
            '1° Le COD de la phrase active devient le Sujet de la phrase passive.',
            '2° Le verbe actif se transforme : on utilise l\'auxiliaire « être » conjugué AU MÊME TEMPS que le verbe actif, suivi du participe passé du verbe actif. Ce participe passé s\'accorde OBLIGATOIREMENT en genre et en nombre avec le nouveau sujet.',
            '3° Le Sujet de la phrase active devient le Complément d\'Agent, introduit par la préposition « par » (ou « de »).'
          ]
        },
        {
          subtitle: 'B. Le choix de la préposition du complément d\'agent : « par » ou « de »',
          content: [
            'La préposition « par » s\'emploie pour une action physique concrète et ponctuelle : « La porte a été fermée par le gardien. »',
            'La préposition « de » s\'emploie obligatoirement avec :',
            '- Les verbes de sentiment ou d\'estime : être aimé de, être détesté de, être estimé de, être respecté de (« Cet enseignant est respecté de tous les élèves »).',
            '- Les verbes de description ou d\'état passif : être entouré de, être bordé de, être couvert de, être composé de (« Le champ est entouré d\'une clôture épineuse »).'
          ]
        }
      ]
    },
    {
      title: '3. Les Cas Particuliers Fréquents au BFEM',
      subsections: [
        {
          subtitle: 'A. Le sujet indéfini « on »',
          content: [
            'Lorsque le sujet de la phrase active est le pronom indéfini « on », la phrase passive ne comporte AUCUN complément d\'agent.',
            'Exemple actif : « On proclamera les résultats du BFEM à midi. »',
            'Exemple passif : « Les résultats du BFEM seront proclamés à midi. » (et JAMAIS *par on* !).'
          ]
        },
        {
          subtitle: 'B. Le pronom personnel COD',
          content: [
            'Actif : « Le jury les a félicités. » (« les » est pronom COD).',
            'Passif : « Ils ont été félicités par le jury. » (le pronom COD devient pronom sujet).'
          ]
        }
      ]
    },
    {
      title: '4. Tableau de Conjugaison Temporelle de la Voix Passive',
      table: {
        headers: ['Temps de l\'actif', 'Phrase à la voix active', 'Temps de l\'auxiliaire être', 'Phrase à la voix passive'],
        rows: [
          ['Présent', 'Le maître corrige la copie.', 'Présent (est)', 'La copie est corrigée par le maître.'],
          ['Imparfait', 'Le maître corrigeait la copie.', 'Imparfait (était)', 'La copie était corrigée par le maître.'],
          ['Passé composé', 'Le maître a corrigé la copie.', 'Passé composé (a été)', 'La copie a été corrigée par le maître.'],
          ['Passé simple', 'Le maître corrigea la copie.', 'Passé simple (fut)', 'La copie fut corrigée par le maître.'],
          ['Plus-que-parfait', 'Le maître avait corrigé la copie.', 'Plus-que-parfait (avait été)', 'La copie avait été corrigée par le maître.'],
          ['Futur simple', 'Le maître corrigera la copie.', 'Futur simple (sera)', 'La copie sera corrigée par le maître.'],
          ['Futur antérieur', 'Le maître aura corrigé la copie.', 'Futur antérieur (aura été)', 'La copie aura été corrigée par le maître.'],
          ['Conditionnel présent', 'Le maître corrigerait la copie.', 'Conditionnel présent (serait)', 'La copie serait corrigée par le maître.']
        ]
      }
    }
  ],
  conclusion: 'La voix passive permet de mettre en lumière l\'objet ou la victime de l\'action plutôt que son auteur. Maîtriser le temps de l\'auxiliaire être garantit une transformation impeccable sans altérer l\'époque temporelle du texte original.'
};

// LEÇON 10 : LES DISCOURS RAPPORTÉS
export const LESSON_10_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-10',
  number: 'Leçon 10',
  title: 'Les discours rapportés',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude intégrale des trois formes de discours rapportés : discours direct, discours indirect (concordance des temps et repères spatio-temporels) et discours indirect libre.',
  introduction: 'Dans la narration littéraire et journalistique, rapporter les paroles ou les pensées d\'un personnage peut se faire de trois manières distinctes : le discours direct (restitution brute et théâtrale), le discours indirect (intégration grammaticale dans le récit) et le discours indirect libre (synthèse esthétique mariant expressivité et fluidité narrative). Les transpositions du discours direct au discours indirect constituent une épreuve reine du BFEM.',
  sections: [
    {
      title: '1. Le Discours Direct (DD)',
      subsections: [
        {
          subtitle: 'A. Caractéristiques énonciatives et typographiques',
          content: [
            'Les paroles sont rapportées exactement telles qu\'elles ont été prononcées, sans altération syntaxique.',
            'Indices typographiques obligatoires : les deux-points (:), l\'ouverture et la fermeture des guillemets (« »), et les tirets (-) lors des répliques successives du dialogue.',
            'Présence des marques de l\'énonciation directe : pronoms de la 1ère et 2ème personne (je, tu, nous, vous), déterminants possessifs (mon, ton, notre), apostrophes, interjections et tournures interrogatives ou exclamatives.',
            'Exemple : Le président du jury annonça : « Demain, vous viendrez ici retirer vos attestations de réussite ! »'
          ]
        },
        {
          subtitle: 'B. Les verbes introducteurs de parole',
          content: [
            'Pour éviter la répétition monotone de « dire », le candidat au BFEM doit enrichir ses verbes de parole selon l\'intention : déclarer, affirmer, certifier, insinuer, répliquer, s\'exclamer, murmurer, ordonner, supplier.'
          ]
        }
      ]
    },
    {
      title: '2. Le Discours Indirect (DI) et ses Règles Rigoureuses de Transposition',
      subsections: [
        {
          subtitle: 'A. Transformation structurelle',
          content: [
            'Disparition totale des signes de ponctuation du dialogue (deux-points, guillemets, points d\'exclamation, points d\'interrogation).',
            'Les paroles deviennent une proposition subordonnée complétive rattachée au verbe introducteur par « que », « si » (interrogation totale) ou un mot interrogatif (pourquoi, comment, ce que...).',
            'Les pronoms personnels et adjectifs possessifs basculent à la 3ème personne (il, elle, ils, elles, son, leur).'
          ]
        },
        {
          subtitle: 'B. La concordance des temps (si le verbe introducteur est au PASSÉ)',
          content: [
            'Si le verbe introducteur est au présent ou au futur, les temps verbaux ne changent pas : « Il dit : "J\'arrive" » -> « Il dit qu\'il arrive ».',
            'Si le verbe introducteur est au passé (passé composé, imparfait, passé simple), l\'alignement temporel est obligatoire :',
            '- Présent du DD -> Imparfait au DI : « Il affirmait : "Je connais la leçon" » -> « Il affirmait qu\'il connaissait la leçon ».',
            '- Futur simple du DD -> Conditionnel présent au DI : « Il promit : "Je réussirai" » -> « Il promit qu\'il réussirait ».',
            '- Passé composé / Passé simple du DD -> Plus-que-parfait au DI : « Il expliqua : "J\'ai compris" » -> « Il expliqua qu\'il avait compris ».',
            '- Futur antérieur du DD -> Conditionnel passé au DI : « Il ajouta : "J\'aurai fini à midi" » -> « Il ajouta qu\'il aurait fini à midi ».',
            '- Impératif du DD -> De + Infinitif (ou subjonctif) au DI : « Le maître ordonna : "Sortez vos stylos !" » -> « Le maître ordonna de sortir leurs stylos » (ou « qu\'ils sortent leurs stylos »).'
          ]
        },
        {
          subtitle: 'C. La transposition des repères spatio-temporels',
          content: [
            'Aujourd\'hui -> Ce jour-là',
            'Hier -> La veille',
            'Avant-hier -> L\'avant-veille',
            'Demain -> Le lendemain',
            'Après-demain -> Le surlendemain',
            'Cette semaine / ce matin -> Cette semaine-là / ce matin-là',
            'Ici -> Là / Là-bas'
          ]
        }
      ]
    },
    {
      title: '3. Le Discours Indirect Libre (DIL)',
      content: [
        'Le discours indirect libre est une modalité narrative littéraire subtile, fréquemment employée par Gustave Flaubert, Émile Zola, ou les grands romanciers africains comme Ousmane Sembène.',
        'Caractéristiques : aucune ponctuation de dialogue (pas de guillemets) et pas de verbe introducteur ni de subordination (« que » est absent).',
        'Les temps du récit sont conservés (imparfait, conditionnel, pronoms de 3e personne), MAIS le ton vivant, les exclamations, les interrogations et le lexique affectif du personnage sont préservés.',
        'Exemple comparatif : « Le jeune candidat regardait la feuille. Mon Dieu, allait-il échouer si près du but ? Jamais il ne capitulerait ! » (Ici, le lecteur accède directement aux pensées angoissées du héros tout en restant dans le fil du récit).'
      ]
    },
    {
      title: '4. Synthèse de Transposition Direct -> Indirect pour le BFEM',
      table: {
        headers: ['Discours Direct (verbe introducteur au passé)', 'Discours Indirect correspondant', 'Règle grammaticale appliquée'],
        rows: [
          ['« Il déclara : "Je pars aujourd\'hui." »', 'Il déclara qu\'il partait ce jour-là.', 'Présent -> Imparfait + repère temporel'],
          ['« Elle promit : "Je viendrai demain." »', 'Elle promit qu\'elle viendrait le lendemain.', 'Futur simple -> Conditionnel présent'],
          ['« Le garde cria : "Halte ! Qui êtes-vous ?" »', 'Le garde cria de faire halte et demanda qui ils étaient.', 'Impératif -> De + inf. + interrogation indirecte'],
          ['« Ils avouèrent : "Nous avons commis une faute." »', 'Ils avouèrent qu\'ils avaient commis une faute.', 'Passé composé -> Plus-que-parfait']
        ]
      }
    }
  ],
  conclusion: 'La manipulation fluide des trois discours est indispensable aussi bien pour réussir les exercices de réécriture du BFEM que pour composer un récit dynamique où s\'articulent dialogues et narration.'
};

// LEÇON 11 : LES OUTILS DU DISCOURS : PRÉSENTATIFS ET MODALISATEURS
export const LESSON_11_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-11',
  number: 'Leçon 11',
  title: 'Les outils du discours : Présentatifs et modalisateurs',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude des présentatifs (mise en relief, extraction) et des modalisateurs (degrés de certitude, nuances affectives, jugement mélioratif ou péjoratif) pour l\'analyse de texte et l\'argumentation.',
  introduction: 'L\'énonciation ne se réduit jamais à une simple transmission neutre d\'informations. À travers des procédés linguistiques ciblés, le locuteur met en lumière certains éléments de son message (les présentatifs) et dévoile son degré d\'adhésion, ses doutes ou ses jugements de valeur par rapport à ce qu\'il affirme (les modalisateurs). Ces notions sont au cœur de la lecture méthodique et du commentaire de texte au BFEM.',
  sections: [
    {
      title: '1. Les Présentatifs et la Mise en Relief',
      subsections: [
        {
          subtitle: 'A. Définition et inventaire',
          content: [
            'Les présentatifs sont des tournures ou locutions servant à introduire, désigner ou mettre en valeur un élément dans l\'énoncé.',
            'Les principaux présentatifs de la langue française sont : « c\'est... qui », « c\'est... que », « ce sont », « il y a... qui/que », « voici », « voilà ». Exemple : « Voici le chef du village », « Il y a un problème urgent à résoudre ».'
          ]
        },
        {
          subtitle: 'B. Le mécanisme syntaxique de l\'extraction',
          content: [
            'L\'extraction consiste à encadrer un constituant de la phrase par la formule « c\'est... qui » (pour un sujet) ou « c\'est... que » (pour un complément).',
            'Phrase neutre : « La persévérance garantit le succès. »',
            'Mise en relief du sujet : « C\'est la persévérance [qui] garantit le succès. »',
            'Mise en relief du COD : « C\'est le succès [que] garantit la persévérance. »',
            'Mise en relief d\'un complément circonstanciel : « C\'est avec dignité [que] le peuple sénégalais s\'exprime. »'
          ]
        }
      ]
    },
    {
      title: '2. Les Modalisateurs : Traces de la Subjectivité',
      subsections: [
        {
          subtitle: 'A. Définition',
          content: [
            'Les modalisateurs sont l\'ensemble des indices linguistiques (mots, tournures syntaxiques, modes verbaux, ponctuation) par lesquels l\'émetteur manifeste son opinion, son attitude, son émotion ou son degré de certitude face à son énoncé.',
            'Énoncé neutre (sans modalisateur) : « Le train arrive à 18 heures. »',
            'Énoncé modalisé : « Le train devrait, semble-t-il, arriver vers 18 heures. » (expression du doute et de l\'hypothèse).'
          ]
        },
        {
          subtitle: 'B. Les différentes classes de modalisateurs',
          content: [
            '1° Les adverbes d\'opinion et de certitude : peut-être, sans doute, probablement (doute) ; assurément, incontestablement, certes, évidemment (certitude) ; heureusement, hélas, malheureusement (sentiment affectif).',
            '2° Les verbes modaux et d\'opinion : sembler, paraître (apparence) ; devoir, pouvoir (probabilité) ; estimer, supposer, croire, prétendre.',
            '3° Les modes et temps verbaux : le conditionnel journalistique ou d\'incertitude (« Le ministre aurait démissionné ») ; le subjonctif de souhait.',
            '4° Le lexique évaluatif / axiologique :',
            '- Vocabulaire mélioratif (valorisant, élogieux) : remarquable, grandiose, héroïque, noble, admirable.',
            '- Vocabulaire péjoratif (dépréciatif, critique) : médiocre, odieux, lamentable, pernicieux, stérile.',
            '5° La ponctuation expressive et typographie : points de suspension, points d\'exclamation, guillemets de distanciation ou d\'ironie (« ces soi-disant "experts" »).'
          ]
        }
      ]
    },
    {
      title: '3. Application à l\'Épreuve de Français du BFEM',
      content: [
        'Dans les questions de texte du BFEM, la consigne « Quelle est la tonalité du texte ? » ou « Relevez les modalisateurs traduisant l\'engagement de l\'auteur » est récurrente.',
        'Savoir identifier si un texte est engagé, satirique, élogieux ou dubitatif dépend directement de la traque de ces modalisateurs.',
        'Dans le sujet argumentatif, l\'élève doit lui-même manier les modalisateurs pour nuancer son propos et démontrer sa maturité intellectuelle.'
      ]
    }
  ],
  conclusion: 'Maîtriser les présentatifs permet de dynamiser la syntaxe et de focaliser l\'attention du lecteur, tandis que les modalisateurs permettent de décrypter l\'implicite d\'un texte littéraire et de soutenir un plaidoyer rigoureux.'
};

// LEÇON 12 : LE SYSTÈME VERBAL : VALEURS DES TEMPS DE L'INDICATIF ET DU SUBJONCTIF
export const LESSON_12_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-12',
  number: 'Leçon 12',
  title: 'Le système verbal : valeurs des temps de l\'indicatif et du subjonctif',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude exhaustive du système verbal en français : modes indicatif et subjonctif, valeurs aspectuelles et temporelles de chaque temps pour l\'explication de texte et la rédaction au BFEM.',
  introduction: 'Le verbe est le cœur battant de la phrase. En français, conjuguer un verbe ne consiste pas seulement à lui donner une terminaison correcte : chaque temps et chaque mode véhicule une « valeur », c\'est-à-dire une nuance temporelle ou aspectuelle précise. Au BFEM, les questions du type « Donnez le temps, le mode et la valeur de tel verbe » exigent une connaissance rigoureuse de ce système.',
  sections: [
    {
      title: '1. Le Mode Indicatif (Mode du Réel, du Fait Établi)',
      subsections: [
        {
          subtitle: 'A. Les valeurs du Présent de l\'indicatif',
          content: [
            '1° Présent d\'énonciation : coïncide avec le moment précis où l\'on parle (« Je vous écoute avec attention »).',
            '2° Présent de vérité générale : exprime un fait scientifique universel, un proverbe ou une maxime intemporelle (« La Terre tourne autour du Soleil », « Tout ce qui brille n\'est pas or »).',
            '3° Présent d\'habitude (ou itératif) : action répétée (« Chaque matin, il se lève à l\'aube pour réviser »).',
            '4° Présent de narration : employé dans un récit au passé pour rendre l\'action soudainement vivante et haletante aux yeux du lecteur (« Il marchait dans la nuit obscure ; tout à coup, un cri retentit ! »).',
            '5° Présent à valeur de futur proche ou de passé récent : « J\'arrive dans cinq minutes », « Il sort à l\'instant ».'
          ]
        },
        {
          subtitle: 'B. Les valeurs de l\'Imparfait et du Passé Simple dans le récit',
          content: [
            'L\'Imparfait de l\'indicatif (temps de l\'arrière-plan, aspect non délimité / duratif) :',
            '- Imparfait de description (décor, personnages, paysage) : « Le baobab déployait ses branches noueuses. »',
            '- Imparfait d\'habitude (actions répétées dans le passé) : « Chaque dimanche, nous allions pêcher à Soumbédioune. »',
            '- Imparfait de durée / action secondaire inachevée : « Il lisait quand le coup de feu éclata. »',
            'Le Passé Simple de l\'indicatif (temps du premier plan, aspect délimité / ponctuel) :',
            '- Actions soudaines, brèves, uniques et achevées dans le passé.',
            '- Actions successives qui font progresser la trame narrative : « Il ouvrit la lettre, pâlit, puis s\'effondra sur sa chaise. »'
          ]
        },
        {
          subtitle: 'C. Les valeurs du Passé Composé, Plus-que-Parfait et Futur Simple',
          content: [
            'Le Passé Composé : fait passé accompli qui conserve un lien ou des répercussions directes dans le présent (« J\'ai terminé mon devoir, je peux sortir »).',
            'Le Plus-que-parfait : exprime l\'antériorité absolue par rapport à une autre action passée (« Quand le secours arriva, les flammes avaient déjà dévoré la toiture »).',
            'Le Futur Simple : action future certaine, promesse ou ordre atténué par politesse (« Vous voudrez bien ouvrir votre manuel à la page 10 »).'
          ]
        }
      ]
    },
    {
      title: '2. Le Mode Subjonctif (Mode du Virtuel, du Souhait et de la Volonté)',
      subsections: [
        {
          subtitle: 'A. Définition et opposition avec l\'indicatif',
          content: [
            'Tandis que l\'indicatif pose l\'action comme réelle et certaine, le subjonctif la présente comme envisagée dans l\'esprit du locuteur, mais non encore accomplie ou soumise au doute.',
            'Temps essentiels étudiés en 3ème : le présent du subjonctif (simultanéité ou futur) et le passé du subjonctif (antériorité).'
          ]
        },
        {
          subtitle: 'B. Les valeurs et contextes d\'emploi du Subjonctif',
          content: [
            '1° En proposition indépendante ou principale :',
            '- Ordre ou injonction à la 3ème personne : « Qu\'il entre immédiatement ! »',
            '- Souhait ou bénédiction : « Dieu vous garde ! », « Puisse-t-il réussir son examen ! »',
            '- Indignation ou protestation : « Moi, que je capitule sans lutter ! »',
            '2° En proposition subordonnée :',
            '- Après les verbes de volonté, sentiment, doute, crainte et ordre.',
            '- Après les conjonctions imposant le subjonctif : pour que, avant que, bien que, quoique, à condition que.'
          ]
        }
      ]
    },
    {
      title: '3. Tableau Synthétique des Valeurs des Temps pour l\'Épreuve du BFEM',
      table: {
        headers: ['Temps / Mode', 'Valeur dominante', 'Rôle dans le texte', 'Exemple type'],
        rows: [
          ['Présent de l\'indicatif', 'Vérité générale / Maxime', 'Affirmer une loi universelle', 'L\'union fait la force.'],
          ['Présent de l\'indicatif', 'Narration', 'Rendre l\'action vivante', 'Il avançait prudemment ; un monstre surgit !'],
          ['Imparfait de l\'indicatif', 'Description / Arrière-plan', 'Poser le cadre ou le décor', 'Le soleil dardait ses rayons implacables.'],
          ['Passé simple', 'Premier plan / Actions successives', 'Faire avancer l\'intrigue', 'Il saisit son carquois, visa et tira.'],
          ['Plus-que-parfait', 'Antériorité dans le passé', 'Rappeler un événement antérieur', 'Il portait l\'habit que sa mère lui avait cousu.'],
          ['Subjonctif présent', 'Injonction / Souhait', 'Exprimer une volonté ou prière', 'Que la paix règne sur le Sénégal !']
        ]
      }
    }
  ],
  conclusion: 'La connaissance précise des valeurs des temps verbaux est l\'un des critères d\'évaluation les plus rigoureux des correcteurs du BFEM, garantissant la cohérence chronologique et stylistique du candidat.'
};
