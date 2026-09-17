import { LessonContent } from './courses';
import { SVG_CIRCUIT_SIMPLE, SVG_SENS_COURANT_DIODE } from './diagrams_4eme';

// =========================================================================
// COURS DE PHYSIQUE-CHIMIE (PC) — CLASSE DE 4ÈME
// PARTIE 2 : PHYSIQUE (ÉLECTRICITÉ) — CIRCUITS ÉLECTRIQUES & SENS DU COURANT
// COURS COMPLET ET DÉTAILLÉ AVEC DÉFINITIONS, SCHÉMAS NORMALISÉS ET EXERCICES CORRIGÉS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 3 (LEÇON 8 DU PROGRAMME) : LE CIRCUIT ÉLECTRIQUE SIMPLE
// -------------------------------------------------------------------------
export const LESSON_3_PC_4EME: LessonContent = {
  id: 'pc-4eme-lecon-3',
  number: 'Leçon 3 (Physique)',
  title: 'Le circuit électrique simple',
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "L'électricité est au cœur de toutes les technologies modernes. Un circuit électrique simple est une chaîne continue et fermée de dipôles conducteurs comprenant obligatoirement un générateur qui fournit l'énergie, un récepteur qui l'utilise, un interrupteur de commande et des fils de connexion. En classe de 4ème, la maîtrise du schéma normalisé universel (normes CEI/AFNOR), la distinction rigoureuse entre conducteurs et isolants, et la prévention des courts-circuits constituent les fondements indispensables de la physique.",
  fullText: `Leçon 3 : Le circuit électrique simple

Introduction :
L'électricité est au cœur de toutes les technologies modernes. Un circuit électrique simple est une chaîne continue et fermée de dipôles conducteurs comprenant obligatoirement un générateur qui fournit l'énergie, un récepteur qui l'utilise, un interrupteur de commande et des fils de connexion. En classe de 4ème, la maîtrise du schéma normalisé universel (normes CEI/AFNOR), la distinction rigoureuse entre conducteurs et isolants, et la prévention des courts-circuits constituent les fondements indispensables de la physique.

1. Notion de dipôle et les quatre constituants indispensables
Un dipôle électrique est un composant électrique possédant exactement deux bornes (points de connexion) pour être inséré dans un circuit.

Un circuit électrique simple en série comporte obligatoirement :
A. Le générateur (ex : pile cylindrique 1,5 V, pile plate 4,5 V, batterie d'accumulateurs, générateur basse tension G du collège) :
- C'est la source motrice indispensable : il crée et entretient une différence de potentiel (tension) qui met en mouvement ordonné les charges électriques.
- Il possède deux bornes différentes : une borne positive (+) et une borne négative (-).
- Sans générateur, aucun courant ne peut circuler !

B. Le récepteur (ex : lampe à incandescence, moteur électrique, DEL, résistance chauffante, vibreur sonore) :
- Il reçoit l'énergie électrique fournie par le générateur et la transforme en une autre forme d'énergie utile : énergie lumineuse (lampe), mécanique (moteur), thermique (résistance) ou sonore.

C. L'interrupteur (organe de commande et de sécurité) :
- Interrupteur FERMÉ : Le contact métallique interne est établi. Le circuit forme une boucle fermée continue. Le courant électrique circule et les récepteurs fonctionnent (la lampe s'allume).
- Interrupteur OUVERT : Le contact est rompu (présence d'air isolant entre les contacts). Le circuit est ouvert. Le courant ne peut plus circuler (I = 0) et les récepteurs s'éteignent.

D. Les fils de connexion :
- Ils relient les composants entre eux pour fermer la boucle.
- Constitution : Une âme centrale en cuivre métallique (excellent conducteur) entourée d'une gaine souple en matière plastique (isolant protégeant l'utilisateur de l'électrisation).

2. Les conducteurs et les isolants électriques
Pour tester si un matériau laisse passer le courant, on utilise un « circuit testeur » composé d'une pile, d'une lampe témoin et de deux pointes de touche entre lesquelles on intercale l'échantillon à tester :
A. Les conducteurs électriques (la lampe témoin s'allume) :
- Ce sont les matériaux qui permettent le déplacement libre des charges électriques.
- Exemples :
  • Tous les métaux sans exception (l'argent, le cuivre, l'or, l'aluminium, le fer, le zinc).
  • Le graphite (carbone minéral constituant la mine noire des crayons de papier).
  • Les solutions aqueuses ioniques (l'eau salée, l'eau du robinet, les acides, les bases).
  • Le corps humain et les organismes vivants (très riches en eau et en ions, d'où le danger mortel d'électrocution).

B. Les isolants électriques (la lampe témoin reste éteinte) :
- Ce sont les matériaux qui s'opposent rigoureusement au passage du courant électrique.
- Exemples :
  • Les matières plastiques (PVC, polyéthylène, nylon).
  • Le verre et la céramique (porcelaine).
  • Le bois sec et le papier sec.
  • Le caoutchouc et le latex.
  • L'air sec.
  • L'eau distillée pure (sans ions dissous).

3. La schématisation normalisée d'un circuit électrique (FIG 2)
Pour que n'importe quel scientifique, ingénieur ou technicien dans le monde puisse comprendre et câbler un circuit sans ambiguïté linguistique :
- Chaque dipôle est représenté par un symbole normalisé officiel (normes internationales CEI / AFNOR).
- Le circuit est dessiné sous forme d'un RECTANGLE aux coins propres à 90°, tracé à la règle et au crayon à papier.
- Les fils de connexion sont représentés par des traits horizontaux et verticaux.
- Les dipôles sont placés au milieu des côtés du rectangle (jamais dans les coins).

Symboles officiels à connaître par cœur :
• Pile / Générateur continu : Deux traits parallèles inégaux. Le grand trait fin représente la borne positive (+), le petit trait épais représente la borne négative (-).
• Lampe à incandescence : Un cercle contenant une croix en diagonale (⊗).
• Interrupteur fermé : Deux points reliés par un trait horizontal continu.
• Interrupteur ouvert : Deux points avec un levier oblique relevé.
• Moteur : Un cercle contenant la lettre majuscule M.
• Résistance (conducteur ohmique) : Un rectangle simple.

4. Le danger majeur du court-circuit
- Définition d'un court-circuit d'un générateur : Se produit lorsque les deux bornes (+) et (-) d'une pile ou d'une source d'alimentation sont reliées directement par un fil conducteur sans aucun récepteur pour consommer l'énergie.
- Conséquences directes :
  1. L'intensité du courant électrique devient gigantesque.
  2. Par effet Joule, les fils et la pile s'échauffent intensément en quelques secondes.
  3. Risque imminent d'incendie domestique, de brûlures graves et d'explosion de la batterie.
- Court-circuit d'un récepteur : Si on branche un fil conducteur en dérivation aux deux bornes d'une lampe, tout le courant passe préférentiellement par le fil court-circuitant (qui oppose une résistance quasi-nulle) : la lampe s'éteint immédiatement et le reste du circuit supporte une surintensité.`,
  sections: [
    {
      title: '1. Schéma normalisé du circuit simple et symboles',
      image: {
        url: SVG_CIRCUIT_SIMPLE,
        alt: 'Fig 2 : Schéma normalisé d\'un circuit électrique simple en série',
        caption:
          'Fig 2 : Circuit électrique simple en série (pile, interrupteur fermé, lampe allumée, fils rectangulaires) et tableau des symboles normalisés officiels (normes CEI/AFNOR).'
      },
      subsections: [
        {
          subtitle: 'Règles de tracé du schéma normalisé',
          content: [
            "• Règle 1 : Utiliser impérativement la règle pour tracer un cadre rectangulaire net.",
            "• Règle 2 : Ne jamais placer de composant dans les coins à angle droit du schéma.",
            "• Règle 3 : Respecter scrupuleusement les polarités (+ et -) du générateur.",
            "• Règle 4 : Le cercle de la lampe est traversé d'une croix X, jamais d'un signe plus (+)."
          ]
        },
        {
          subtitle: 'Les deux états du circuit : Ouvert vs Fermé',
          content: [
            "• Circuit fermé : La boucle conductrice est continue de la borne (+) à la borne (-). Le courant circule, la lampe brille.",
            "• Circuit ouvert : Rupture de la boucle (interrupteur ouvert, fil débranché ou filament de lampe grillé). Le courant est strictement nul."
          ]
        }
      ]
    },
    {
      title: '2. Conducteurs, isolants et sécurité électrique',
      subsections: [
        {
          subtitle: 'Classification des matériaux usuels',
          content: [
            "• Conducteurs : Métaux (cuivre, fer, aluminium, or), graphite, eau salée, corps humain.",
            "• Isolants : Plastique, verre, bois sec, caoutchouc, porcelaine, air sec.",
            "• Application : Les câbles électriques associent une âme conductrice en cuivre et une gaine isolante en PVC pour empêcher tout contact accidentel."
          ]
        },
        {
          subtitle: 'Prévention des courts-circuits',
          content: [
            "• Court-circuiter une pile détruit la pile et peut déclencher un incendie par surchauffe.",
            "• Dispositifs de sécurité domestiques : Les fusibles et les disjoncteurs coupent instantanément le courant en cas de court-circuit."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Analyse d\'un circuit et dysfonctionnement',
          content: [
            "On réalise un circuit comprenant en série une pile plate de 4,5 V, un interrupteur fermé et deux lampes L₁ et L₂.",
            "1. Les deux lampes brillent normalement. Que se passe-t-il si l'on ouvre l'interrupteur ? Justifier.",
            "2. L'interrupteur étant à nouveau fermé, le filament de la lampe L₁ se rompt (la lampe grille). Que devient la lampe L₂ ? Justifier avec le vocabulaire scientifique.",
            "3. Un élève connecte un fil de cuivre dénudé directement entre les deux bornes de la lampe L₂. Que constate-t-on pour la lampe L₂ ? Pour la lampe L₁ ? Quel est le nom de ce phénomène ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Ouverture de l'interrupteur :",
            "   • Les deux lampes L₁ et L₂ s'éteignent immédiatement. En effet, l'interrupteur ouvert interrompt la continuité de la boucle conductrice : le circuit devient ouvert et le courant ne peut plus circuler (I = 0).",
            "2. Rupture du filament de L₁ :",
            "   • La lampe L₂ s'éteint également ! Dans un circuit en série, tous les dipôles sont branchés à la suite les uns des autres dans une seule et unique boucle. Si une lampe grille, son filament métallique est coupé : le circuit est alors ouvert au niveau de L₁, ce qui empêche le courant d'atteindre L₂.",
            "3. Connexion d'un fil aux bornes de L₂ :",
            "   • Observation pour L₂ : La lampe L₂ s'éteint immédiatement.",
            "   • Observation pour L₁ : La lampe L₁ brille plus intensément qu'auparavant.",
            "   • Nom du phénomène : La lampe L₂ a été mise en COURT-CIRCUIT. Le courant électrique choisit préférentiellement le chemin de résistance négligeable offert par le fil de cuivre. L₁ reçoit alors toute la tension de la pile."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Identification de matériaux avec un circuit testeur',
          content: [
            "Pour identifier des matériaux inconnus, une élève réalise un circuit testeur avec une pile, une lampe et deux pinces crocodiles A et B. Entre A et B, elle insère successivement :",
            "1. Une règle en matière plastique.",
            "2. Une clé en acier (fer).",
            "3. Une mine de crayon à papier (graphite).",
            "4. Un morceau de bois sec.",
            "5. Un verre rempli d'eau fortement salée.",
            "Pour chaque élément, indiquer si la lampe s'allume ou non et en déduire la nature conductrice ou isolante du matériau."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Règle en plastique : La lampe ne s'allume pas ➔ Le plastique est un ISOLANT électrique.",
            "2. Clé en acier : La lampe s'allume avec éclat ➔ L'acier (alliage de fer) est un métal, donc un très bon CONDUCTEUR électrique.",
            "3. Mine de crayon : La lampe s'allume ➔ Le graphite est une forme de carbone qui est un CONDUCTEUR électrique (cas particulier rare de minéral non métallique conducteur).",
            "4. Bois sec : La lampe reste éteinte ➔ Le bois sec est un ISOLANT électrique (attention : le bois mouillé devient conducteur).",
            "5. Eau salée : La lampe s'allume ➔ L'eau salée contient des ions libres mobiles (Na⁺ et Cl⁻), c'est un milieu liquide CONDUCTEUR."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Architecture du circuit électrique simple',
    root: 'Circuit en Série',
    branches: [
      {
        name: 'GÉNÉRATEUR & RÉCEPTEUR',
        subtitle: 'Production & Consommation',
        items: [
          'Générateur : Crée la tension motrice (pôles + et -)',
          'Récepteur : Transforme l\'énergie (Lampe, Moteur)',
          'Fils de connexion : Cuivre conducteur sous gaine plastique'
        ]
      },
      {
        name: 'COMMANDE & MODES',
        subtitle: 'États du circuit',
        items: [
          'Interrupteur fermé : Boucle conductrice fermée (Courant I > 0)',
          'Interrupteur ouvert : Boucle coupée (Courant I = 0)',
          'Schéma normalisé : Tracé rectangulaire à la règle aux normes CEI'
        ]
      },
      {
        name: 'SÉCURITÉ & DANGERS',
        subtitle: 'Risque de court-circuit',
        items: [
          'Court-circuit : Connexion directe des bornes de la pile par un fil',
          'Surchauffe brutale par effet Joule et risque d\'incendie',
          'Protection obligatoire par fusibles et disjoncteurs'
        ]
      }
    ]
  },
  conclusion:
    "Le circuit électrique simple en série exige une chaîne ininterrompue de conducteurs reliant les deux bornes du générateur. La maîtrise des symboles normalisés universels et le respect scrupuleux des consignes de sécurité anti-court-circuit forment le socle de toute la physique électrique."
};

// -------------------------------------------------------------------------
// LEÇON 4 (LEÇON 9 DU PROGRAMME) : LE SENS DU COURANT ÉLECTRIQUE
// -------------------------------------------------------------------------
export const LESSON_4_PC_4EME: LessonContent = {
  id: 'pc-4eme-lecon-4',
  number: 'Leçon 4 (Physique)',
  title: 'Le sens du courant électrique',
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "Le courant électrique n'est pas un phénomène statique : il possède un sens d'écoulement bien déterminé dans les circuits. Historiquement fixé par convention internationale avant la découverte des particules subatomiques, le sens conventionnel du courant s'effectue de la borne positive vers la borne négative à l'extérieur du générateur. En classe de 4ème, l'utilisation de dipôles polarisés tels que le moteur électrique, la diode et la diode électroluminescente (DEL/LED) permet d'illustrer expérimentalement ce sens et d'en comprendre les applications technologiques vitales.",
  fullText: `Leçon 4 : Le sens du courant électrique

Introduction :
Le courant électrique n'est pas un phénomène statique : il possède un sens d'écoulement bien déterminé dans les circuits. Historiquement fixé par convention internationale avant la découverte des particules subatomiques, le sens conventionnel du courant s'effectue de la borne positive vers la borne négative à l'extérieur du générateur. En classe de 4ème, l'utilisation de dipôles polarisés tels que le moteur électrique, la diode et la diode électroluminescente (DEL/LED) permet d'illustrer expérimentalement ce sens et d'en comprendre les applications technologiques vitales.

1. Le sens conventionnel du courant électrique
- Par convention universelle adoptée au XIXe siècle par les physiciens (notamment André-Marie Ampère) :
  À l'extérieur du générateur, le courant électrique circule de la BORNE POSITIVE (+) vers la BORNE NÉGATIVE (-).
- Sur un schéma de circuit électrique, le sens conventionnel du courant se représente par des FLÈCHES ROUGES tracées sur les fils de connexion, orientées dans le sens de déplacement du courant (partant du pôle + et se dirigeant vers le pôle -).
- Note pour la culture scientifique : Dans les conducteurs métalliques, les charges électriques qui se déplacent réellement sont les électrons libres, qui portent une charge négative. Ils sont repoussés par la borne (-) et attirés par la borne (+) : les électrons se déplacent donc en sens inverse du sens conventionnel. Cependant, dans tous les calculs et raisonnements en physique, on applique strictement le sens conventionnel (+ vers -).

2. Mise en évidence expérimentale du sens du courant

Expérience 1 : Avec un moteur électrique
- Montage : On relie un petit moteur électrique aux bornes d'une pile plate. Le moteur se met à tourner dans le sens des aiguilles d'une montre.
- Inversion des connexions : Si l'on permute les deux fils branchés sur la pile (on inverse les bornes), le moteur se met immédiatement à tourner en sens inverse (sens trigonométrique inverse) !
- Conclusion : Le sens de rotation d'un moteur dépend directement du sens du courant qui le traverse. Le courant électrique possède donc une orientation physique bien réelle.

Expérience 2 : Avec une diode et une DEL (Diode Électroluminescente) (FIG 3)
La diode est un composant électronique semi-conducteur révolutionnaire :
- Rôle : Elle ne laisse passer le courant électrique que dans un seul sens, appelé le « SENS PASSANT ». Elle bloque totalement le courant dans l'autre sens, appelé le « SENS BLOQUANT ».
- Symbole normalisé : Un triangle pointe vers une barre verticale. La pointe du triangle indique le seul sens autorisé pour le passage du courant.
- La DEL (ou LED en anglais) : C'est une diode qui a la particularité d'émettre de la lumière lorsqu'elle est traversée par un courant en sens passant. Son symbole comporte deux petites flèches rayonnantes symbolisant la lumière émise.

3. Étude comparative des deux montages de la diode (FIG 3)
A. Montage en SENS PASSANT (Montage A) :
- La borne positive (+) du générateur est reliée à l'anode (la base du triangle) de la diode.
- Le sens conventionnel du courant (+ vers -) correspond à la pointe du triangle de la diode.
- Comportement : La diode est conductrice (elle se comporte comme un interrupteur fermé).
- Résultat : Le courant circule dans le circuit (I > 0). La DEL brille de mille feux et la lampe témoin s'allume.

B. Montage en SENS BLOQUANT (Montage B) :
- La borne positive (+) du générateur est reliée à la cathode (la barre verticale) de la diode.
- Le sens conventionnel du courant heurte la barre transversale du symbole de la diode.
- Comportement : La diode est bloquante (elle se comporte comme un interrupteur ouvert).
- Résultat : Le courant électrique est rigoureusement nul (I = 0). La DEL et la lampe restent complètement éteintes.

4. Importance technologique et industrielle des diodes
- Protection contre l'inversion de polarité : Une diode insérée dans un smartphone, un chargeur ou un ordinateur empêche la destruction des circuits électroniques si l'on insère par erreur les piles ou la batterie à l'envers.
- Éclairage économique et écologique : Les lampes à LED consomment jusqu'à 85 % d'électricité en moins que les anciennes ampoules à filament et durent plus de 25 000 heures.
- Redressement du courant alternatif : Les diodes permettent de transformer le courant alternatif du réseau électrique de la Senelec en courant continu pour recharger nos téléphones portables.`,
  sections: [
    {
      title: '1. Sens conventionnel et fonctionnement de la Diode / DEL',
      image: {
        url: SVG_SENS_COURANT_DIODE,
        alt: 'Fig 3 : Sens conventionnel du courant et diode en sens passant et bloquant',
        caption:
          'Fig 3 : Le courant conventionnel circule de la borne (+) vers la borne (−). Montage A (Sens passant : DEL allumée, le courant passe) vs Montage B (Sens bloquant : DEL éteinte, courant bloqué).'
      },
      subsections: [
        {
          subtitle: 'Le sens conventionnel universel',
          content: [
            "• Règle internationale : À l'extérieur du générateur, le courant sort par la borne (+) et rentre par la borne (-).",
            "• Représentation graphique : Flèches rouges obligatoires sur chaque branche du circuit.",
            "• Les électrons circulent en sens inverse (de - vers +), mais n'altèrent en rien la règle conventionnelle."
          ]
        },
        {
          subtitle: 'La Diode et la DEL comme sens unique',
          content: [
            "• Sens passant : Le courant circule si la flèche du symbole de la diode est orientée dans le même sens que le courant conventionnel.",
            "• Sens bloquant : La diode arrête le courant si celui-ci heurte la barre verticale du symbole.",
            "• Une DEL émet de la lumière UNIQUEMENT lorsqu'elle est branchée en sens passant."
          ]
        }
      ]
    },
    {
      title: '2. Détection expérimentale et applications',
      subsections: [
        {
          subtitle: 'Expérience du moteur électrique',
          content: [
            "• Branché dans un sens : L'axe du moteur tourne dans le sens horaire.",
            "• En inversant les bornes : L'axe du moteur s'inverse instantanément et tourne en sens antihoraire.",
            "• Preuve irréfutable : Le moteur réagit directement au sens du courant électrique."
          ]
        },
        {
          subtitle: 'Protection des appareils électroniques',
          content: [
            "• Sans diode : Brancher une batterie à l'envers grille instantanément les composants fragiles.",
            "• Avec diode anti-retour : Le courant inverse est immédiatement bloqué (I = 0), sauvant le circuit."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Prédiction de l\'état de diodes dans un circuit',
          content: [
            "On considère un circuit en série comportant une pile 9V (borne + à gauche, borne - à droite), un interrupteur fermé K, une résistance de protection R, et deux diodes électroluminescentes D₁ et D₂ montées en série.",
            "• La diode D₁ a sa flèche triangulaire pointée de la gauche vers la droite.",
            "• La diode D₂ a sa flèche triangulaire pointée de la droite vers la gauche.",
            "1. Dans quel sens le courant conventionnel tente-t-il de circuler dans ce circuit ?",
            "2. Quel est l'état (passant ou bloquant) de la diode D₁ ? De la diode D₂ ?",
            "3. Les diodes vont-elles s'éclairer ? Justifier avec précision.",
            "4. Que doit-on faire pour que les diodes s'allument ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Sens conventionnel du courant :",
            "   • Le courant sort par la borne (+) située à gauche et circule dans le sens horaire le long du circuit pour rentrer par la borne (-) à droite. Dans la branche supérieure, il va donc de la GAUCHE vers la DROITE.",
            "2. État des diodes :",
            "   • Diode D₁ : Sa flèche pointe vers la droite, c'est-à-dire dans le sens du courant conventionnel. Elle est donc en SENS PASSANT.",
            "   • Diode D₂ : Sa flèche pointe vers la gauche, ce qui s'oppose au sens du courant (le courant heurte sa barre d'arrêt). Elle est donc en SENS BLOQUANT.",
            "3. Éclairage des diodes :",
            "   • Les deux diodes sont éteintes ! Comme le circuit est monté en série, il suffit qu'UN SEUL composant bloque le courant pour que l'intensité devienne nulle dans TOUTE la boucle (I = 0). D₂ agit comme un interrupteur ouvert.",
            "4. Solution pour allumer le circuit :",
            "   • Il faut dessouder et retourner la diode D₂ afin que sa flèche pointe également de la gauche vers la droite (dans le même sens que D₁ et que le courant)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Le phare de vélo et le sens de rotation d\'un moteur',
          content: [
            "Un élève monte sur un petit chariot expérimental un moteur électrique connecté à une pile. Quand il connecte le pôle (+) à la borne rouge du moteur et le pôle (-) à la borne noire, le chariot avance vers l'avant.",
            "1. Que fait le chariot si l'élève inverse les branchements sur la pile ? Justifier.",
            "2. L'élève souhaite ajouter une DEL blanche à l'avant du chariot pour servir de phare. Il veut que le phare ne s'allume QUE lorsque le chariot avance (et s'éteigne s'il recule). Comment doit-il brancher cette DEL par rapport aux bornes du moteur ?",
            "3. Tracer mentalement ou décrire le schéma de ce montage de sécurité."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Conséquence de l'inversion des branchements :",
            "   • Le chariot REVIRE et recule vers l'arrière. En effet, en inversant les bornes de la pile, on inverse le sens de circulation du courant à travers le moteur, ce qui entraîne automatiquement l'inversion du sens de rotation de son rotor.",
            "2. Branchement de la DEL blanche :",
            "   • Pour que la DEL ne s'allume que lors de la marche avant, il faut la brancher en dérivation (parallèle) aux bornes du moteur en SENS PASSANT pour la polarité de la marche avant :",
            "     - L'anode (borne triangle + de la DEL) doit être reliée à la borne rouge du moteur.",
            "     - La cathode (borne avec barre transversale - de la DEL) doit être reliée à la borne noire du moteur.",
            "   • En marche arrière, la polarité aux bornes du moteur s'inverse : la DEL se retrouve alors polarisée en SENS BLOQUANT et reste automatiquement éteinte !",
            "3. Bilan pédagogique :",
            "   • Cette application démontre parfaitement la double propriété de la DEL : émettre de la lumière et servir de clapet de contrôle anti-retour."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Sens du courant électrique et comportement des diodes',
    root: 'Courant Électrique',
    branches: [
      {
        name: 'SENS CONVENTIONNEL',
        subtitle: 'Règle universelle (+ vers -)',
        items: [
          'À l\'extérieur du générateur : circule du pôle (+) vers le pôle (-)',
          'Représenté par des flèches rouges sur les schémas',
          'Déplacement des électrons en sens opposé (- vers +)'
        ]
      },
      {
        name: 'PREUVE EXPÉRIMENTALE',
        subtitle: 'Dipôles polarisés',
        items: [
          'Moteur électrique : Son sens de rotation s\'inverse avec les bornes',
          'Preuve irréfutable du caractère vectoriel du courant'
        ]
      },
      {
        name: 'DIODE & DEL (LED)',
        subtitle: 'Sens unique électronique',
        items: [
          'Sens passant : Flèche de la diode alignée avec le courant (I > 0)',
          'Sens bloquant : Courant heurte la barre transversale (I = 0)',
          'Protection capitale contre l\'inversion accidentelle de polarité'
        ]
      }
    ]
  },
  conclusion:
    "Le courant électrique continu possède un sens physique bien défini qui s'écoule par convention du pôle positif (+) vers le pôle négatif (-). L'insertion de diodes et de DEL illustre ce sens unique et protège efficacement tous les circuits électroniques modernes."
};
