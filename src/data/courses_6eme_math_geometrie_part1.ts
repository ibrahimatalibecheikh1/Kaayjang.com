import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE GÉOMÉTRIE — CLASSE DE 6ÈME
// ACTIVITÉS GÉOMÉTRIQUES — CONFORME AU PROGRAMME OFFICIEL DU SÉNÉGAL
// LEÇONS 1 À 3 : VOCABULAIRE ENSEMBLISTE, POSITIONS DE DROITES ET SEGMENTS
// AUCUN RÉSUMÉ, DÉVELOPPEMENT INTÉGRAL, DÉTAILS APPROFONDIS,
// REMARQUES CAPITALES, PROPRIÉTÉS FORMELLES ET EXERCICES CORRIGÉS
// =========================================================================

export const LESSON_1_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-1',
  number: 'Géométrie • Leçon 1',
  title: 'Vocabulaire ensembliste et éléments de base de la géométrie',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "La géométrie, du grec 'gê' (la Terre) et 'metron' (la mesure), est née des besoins concrets de l'humanité : arpenter les terres inondées par les crues des grands fleuves comme le Nil en Égypte ou le fleuve Sénégal, construire des habitations stables et tracer des routes. En classe de 6ème, l'étude de la géométrie plane débute par des objets fondamentaux idéaux, non mesurables en épaisseur : le point, la droite, le segment et la demi-droite. L'apprentissage du langage géométrique et des notations ensemblistes d'appartenance constitue la grammaire indispensable sur laquelle repose tout le raisonnement mathématique du collège.",
  fullText: `Leçon 1 : Vocabulaire ensembliste et éléments de base de la géométrie

Introduction : La géométrie est née des besoins concrets d'arpentage et de construction. En 6ème, nous étudions des objets idéaux dépourvus d'épaisseur. Cette leçon introduit les notions de base et les symboles d'appartenance essentiels.

1. Le Point
• Définition : Le point est la plus petite entité géométrique. Il n'a aucune dimension (ni longueur, ni largeur, ni épaisseur). Il indique un emplacement exact dans le plan.
• Représentation : On le représente généralement par une petite croix droite (+) ou par l'intersection de deux traits fins.
• Notation : On le désigne toujours par une lettre majuscule d'imprimerie (ex : A, B, M, O).

2. La Droite
• Définition : Une droite est un ensemble infini de points alignés. Elle est illimitée dans les deux sens : elle n'a ni début, ni fin, ni milieu, ni longueur mesurable.
• Notations :
  - Par deux de ses points distincts entre parenthèses : (AB) ou (BA).
  - Par une lettre minuscule entre parenthèses : (d), (d'), (Δ).
• Règle d'or : Par deux points distincts A et B du plan, il passe une seule et unique droite.

3. Le Segment de droite
• Définition : Un segment est une portion de droite délimitée par deux points distincts appelés extrémités du segment.
• Notations et distinction cruciale :
  - [AB] ou [BA] avec des CROCHETS désigne l'objet géométrique (la figure tracée sur la feuille).
  - AB ou BA SANS CROCHET désigne la longueur du segment, c'est-à-dire un nombre positif exprimé avec une unité (ex : AB = 6 cm).
• Règle d'or : On ne doit JAMAIS écrire "[AB] = 6 cm" (une figure ne peut pas être égale à un nombre), mais toujours "AB = 6 cm".

4. La Demi-droite
• Définition : Une demi-droite est une portion de droite limitée d'un côté par un point appelé origine, et illimitée de l'autre côté.
• Notation : [AB) désigne la demi-droite d'origine A (crochet fermé en A) passant par le point B et se prolongeant à l'infini au-delà de B (parenthèse ouverte en B).
• Remarque : [AB) et [BA) sont deux demi-droites complètement différentes : la première a pour origine A, la seconde a pour origine B !

5. Vocabulaire ensembliste et symboles mathématiques
• Appartenance (∈) : Si un point M se trouve sur une droite (d), on écrit mathématiquement : M ∈ (d) (se lit : "M appartient à la droite d").
• Non-appartenance (∉) : Si un point N n'est pas situé sur la droite (d), on écrit : N ∉ (d) (se lit : "N n'appartient pas à la droite d").
• Points alignés : Des points sont dits alignés lorsqu'ils appartiennent tous à une même droite.
• Intersection (∩) : Si deux droites (d1) et (d2) se coupent en un point unique I, on écrit : (d1) ∩ (d2) = {I}.

Propriétés fondamentales :
- Propriété 1 : Par un point donné du plan, il passe une infinité de droites.
- Propriété 2 : Par deux points distincts A et B, il passe une seule et unique droite notée (AB).
- Propriété 3 : Trois points distincts A, B et C sont alignés si et seulement si C appartient à la droite (AB), noté C ∈ (AB).

Remarques et pièges à éviter :
- Remarque 1 : Attention aux parenthèses et crochets : (AB) est une droite infinie, [AB] est un segment mesurable, [AB) est une demi-droite, et AB est une mesure de longueur !
- Remarque 2 : Une droite ne s'arrête jamais au bord de votre feuille ; on ne trace qu'un morceau visible, mais elle continue indéfiniment.
- Remarque 3 : Un point géométrique n'est pas une grosse tache d'encre mais l'intersection précise de deux lignes fines.

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Notations et symboles) : Donner la signification géométrique exacte des notations : [MN], (MN), [MN) et MN.
- Exercice 2 (Appartenance et alignement) : Soit une droite (d) passant par A et B. Un point C est tel que C ∈ (d), et un point D tel que D ∉ (d). Les points A, B et C sont-ils alignés ? Qu'en est-il de A, B et D ?
- Exercice 3 (Comptage de droites) : On place 3 points A, B, C non alignés sur une feuille. Combien de droites différentes passant par au moins deux de ces points peut-on tracer ? Nommer ces droites.

Conclusion : La maîtrise rigoureuse des notations géométriques et des symboles d'appartenance garantit la précision des figures et la clarté du raisonnement. Elle évite toute confusion entre un objet tracé et sa mesure numérique.`,
  sections: [
    {
      title: '1. Le Point et la Droite : Fondements du plan',
      subsections: [
        {
          subtitle: 'A. Le Point géométrique',
          content: [
            "Le point est l'élément le plus simple de la géométrie plane : il représente une position exacte mais ne possède aucune dimension (longueur = 0, épaisseur = 0).",
            "• Tracé pratique : On trace une petite croix droite (+) à la pointe d'un crayon sec et bien taillé.",
            "• Désignation : On utilise toujours une lettre majuscule d'imprimerie (ex : A, B, C, M, P).",
            "• Deux points sont dits distincts s'ils n'occupent pas le même emplacement. S'ils occupent la même position, on dit qu'ils sont confondus (noté A = B)."
          ]
        },
        {
          subtitle: 'B. La Droite géométrique',
          content: [
            "Une droite est une ligne continue, rectiligne et infinie dans les deux sens.",
            "• Propriété d'alignement : Elle est formée d'une infinité de points alignés.",
            "• Notations usuelles :",
            "  - (AB) ou (BA) : la droite passant par les deux points distincts A et B (les parenthèses indiquent l'absence de limites).",
            "  - (d), (d'), (Δ) : lorsqu'on utilise une seule lettre minuscule.",
            "• Propriété fondamentale : Par un point unique, il passe une infinité de droites. En revanche, par deux points distincts A et B, il passe UNE SEULE ET UNIQUE droite."
          ]
        }
      ]
    },
    {
      title: '2. Le Segment de droite et la Demi-droite',
      subsections: [
        {
          subtitle: 'A. Le Segment de droite [AB]',
          content: [
            "Un segment de droite est la portion de la droite (AB) située entre les points A et B, extrémités comprises.",
            "• Notation de l'objet : On écrit [AB] ou [BA] entre crochets carrés.",
            "• Notation de la longueur : On écrit AB ou BA sans aucun symbole entourant les lettres. AB représente un nombre exprimé en unité de longueur (ex : AB = 5,4 cm).",
            "• Remarque capitale d'écriture : Il est strictement interdit d'écrire '[AB] = 5 cm'. On écrit : AB = 5 cm (la longueur vaut 5 cm) ou M ∈ [AB] (le point M appartient au segment)."
          ]
        },
        {
          subtitle: 'B. La Demi-droite [AB)',
          content: [
            "Une demi-droite est la partie d'une droite limitée par un point d'origine et prolongée à l'infini dans une seule direction.",
            "• Notation normalisée : [AB) possède un crochet devant l'origine A (point de blocage) et une parenthèse après B (prolongement infini).",
            "• Attention au piège de l'ordre :",
            "  - [AB) a pour origine A et passe par B.",
            "  - [BA) a pour origine B et passe par A. Ce sont deux demi-droites opposées et distinctes."
          ]
        }
      ]
    },
    {
      title: '3. Tableau comparatif des notations fondamentales',
      table: {
        headers: ['Symbole & Écriture', 'Nature de l\'objet', 'Limites & Extrémités', 'Mesurable ?', 'Exemple d\'écriture correcte'],
        rows: [
          ['(AB)', 'Droite', 'Aucune (infinie dans les deux sens)', 'Non (longueur infinie)', 'A ∈ (AB) et B ∈ (AB)'],
          ['[AB]', 'Segment de droite', 'Deux extrémités distinctes A et B', 'Oui (sa longueur se note AB)', 'Le segment [AB] mesure AB = 7 cm'],
          ['[AB)', 'Demi-droite', 'Une seule origine (le point A)', 'Non (infinie vers B)', 'C ∈ [AB) signifie C est au-delà de A'],
          ['AB', 'Longueur (distance)', 'Nombre positif avec unité', 'Oui (valeur numérique)', 'AB = 4,5 cm ou AB = CD'],
          ['M ∈ (d)', 'Relation d\'appartenance', 'M est un point situé sur la droite (d)', 'Sans objet (affirmation logique)', 'Si M ∈ (AB), A, B et M sont alignés']
        ]
      }
    },
    {
      title: '4. Vocabulaire ensembliste, appartenance et points alignés',
      subsections: [
        {
          subtitle: 'A. Symboles d\'appartenance ∈ et ∉',
          content: [
            "• Le symbole ∈ signifie 'appartient à' : M ∈ [AB] indique que le point M est situé exactement sur le segment reliant A à B.",
            "• Le symbole ∉ signifie 'n'appartient pas à' : P ∉ (d) indique que le point P est extérieur à la droite (d).",
            "• Notion de points alignés : Trois points (ou plus) sont alignés s'ils sont tous situés sur une même droite. Si C ∈ (AB), alors les points A, B et C sont alignés."
          ]
        },
        {
          subtitle: 'B. Intersection de droites ∩',
          content: [
            "• Le symbole ∩ désigne l'intersection (les points communs).",
            "• Si deux droites sécantes (d1) et (d2) se croisent en un point unique nommé K, on écrit rigoureusement : (d1) ∩ (d2) = {K}."
          ]
        }
      ]
    },
    {
      title: '5. Remarques pédagogiques et règles de rédaction',
      content: [
        "• Remarque 1 (Les instruments) : Ne jamais tracer une droite ou un segment à main levée. Utilisez toujours une règle plate bien appuyée et un crayon fin HB ou 2H.",
        "• Remarque 2 (Ne pas confondre objet et mesure) : Une figure géométrique ([AB], (d)) ne peut jamais être additionnée ou mesurée directement sans passer par sa longueur (AB + BC = AC si B ∈ [AC]).",
        "• Remarque 3 (Condition d'alignement par les longueurs) : Le point B appartient au segment [AC] si et seulement si AB + BC = AC. Si AB + BC > AC, les points A, B et C forment un triangle et ne sont pas alignés !"
      ]
    },
    {
      title: '6. Exercices d\'application résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Reconnaissance des écritures et symboles',
          content: [
            "Énoncé : Parmi les expressions suivantes, indiquer celles qui ont un sens mathématique correct et corriger les écritures incorrectes :",
            "1) [EF] = 8 cm",
            "2) M ∈ [AB)",
            "3) (d) = 12 cm",
            "4) CD = 6,5 cm",
            "5) A ∈ (BC)",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Incorrect : [EF] désigne le segment (la figure). On doit écrire EF = 8 cm.",
            "2) Correct : Le point M appartient à la demi-droite d'origine A passant par B.",
            "3) Incorrect : Une droite (d) est infinie, elle n'a pas de mesure. Cette phrase n'a aucun sens mathématique.",
            "4) Correct : CD sans crochet désigne la longueur du segment [CD], qui vaut bien 6,5 cm.",
            "5) Correct : Le point A appartient à la droite qui passe par B et C (ce qui implique que A, B et C sont alignés)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Alignement et calcul de longueurs',
          content: [
            "Énoncé : Sur une droite graduée en centimètres, on place trois points alignés A, B et C dans cet ordre tels que AB = 3,8 cm et AC = 9,2 cm.",
            "1) Écrire la relation entre les longueurs AB, BC et AC.",
            "2) Calculer la longueur exacte du segment [BC].",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Puisque les points A, B et C sont placés dans cet ordre sur la même droite, le point B appartient au segment [AC] (noté B ∈ [AC]). On a donc l'égalité fondamentale des longueurs : AB + BC = AC.",
            "2) On en déduit : BC = AC - AB.",
            "Application numérique : BC = 9,2 cm - 3,8 cm = 5,4 cm.",
            "Conclusion : La longueur du segment [BC] est exactement égale à 5,4 cm."
          ]
        },
        {
          subtitle: 'Exercice 3 : Problème de tracé et de dénombrement',
          content: [
            "Énoncé : On place 4 points A, B, C et D dans le plan tels qu'aucun groupe de 3 points ne soit aligné.",
            "Combien de droites distinctes passant par deux de ces points peut-on tracer au maximum ? Donner leur liste complète.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "Pour former une droite, il faut associer 2 points distincts parmi les 4 :",
            "• Droites passant par A : (AB), (AC), (AD) (soit 3 droites).",
            "• Droites passant par B (sans recompter (AB)) : (BC), (BD) (soit 2 droites).",
            "• Droites passant par C (sans recompter celles avec A et B) : (CD) (soit 1 droite).",
            "Total : 3 + 2 + 1 = 6 droites distinctes.",
            "Les 6 droites sont : (AB), (AC), (AD), (BC), (BD) et (CD)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Éléments géométriques fondamentaux',
    root: 'Géométrie plane de base',
    branches: [
      {
        name: 'Le Point (A)',
        subtitle: 'Position exacte sans épaisseur',
        items: ['Marqué par une croix (+)', 'Nommé par lettre majuscule', 'Appartenance : M ∈ (d) ou M ∉ (d)']
      },
      {
        name: 'La Droite (AB)',
        subtitle: 'Ligne infinie sans extrémités',
        items: ['Non mesurable', 'Passe par 2 points distincts', 'Infinité de points alignés']
      },
      {
        name: 'Le Segment [AB]',
        subtitle: 'Portion délimitée entre 2 points',
        items: ['Extrémités A et B', 'Mesurable : longueur AB', 'Milieu si AI = IB']
      },
      {
        name: 'La Demi-droite [AB)',
        subtitle: 'Une origine, infinie d\'un côté',
        items: ['Origine bloquée en [A', 'Prolongement infini vers B)', '[AB) ≠ [BA)']
      }
    ]
  },
  conclusion:
    "En résumé, la distinction rigoureuse entre la droite (AB), le segment [AB], la demi-droite [AB) et la longueur AB constitue le socle indispensable de la géométrie en classe de 6ème. En mémorisant les symboles d'appartenance (∈, ∉) et la règle d'alignement, l'élève acquiert le vocabulaire mathématique universel indispensable pour aborder l'étude des droites perpendiculaires et parallèles."
};

export const LESSON_2_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-2',
  number: 'Géométrie • Leçon 2',
  title: 'Positions relatives de deux droites : Sécantes, perpendiculaires et parallèles',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Dans un même plan géométrique (comme une feuille de papier, un tableau d'école ou un champ arpenté), deux droites peuvent entretenir différentes relations selon qu'elles se croisent ou ne se rencontrent jamais. Ces relations spatiales constituent les 'positions relatives' de deux droites. La maîtrise de la perpendicularité et du parallélisme est capitale, non seulement pour réussir les tracés d'équerre et de règle, mais surtout pour débuter les premières véritables démonstrations géométriques au collège à l'aide des célèbres théorèmes : 'Si deux droites sont perpendiculaires à une même troisième, alors...'.",
  fullText: `Leçon 2 : Positions relatives de deux droites : Sécantes, perpendiculaires et parallèles

Introduction : Deux droites distinctes tracées dans un plan peuvent être sécantes, perpendiculaires ou parallèles. Cette leçon détaille les définitions, notations, méthodes de tracé et les 3 propriétés de déduction logique fondamentales du collège.

1. Droites sécantes
• Définition : Deux droites sont sécantes lorsqu'elles possèdent un unique point commun.
• Vocabulaire : Ce point commun unique est appelé le point d'intersection des deux droites.
• Exemple : Si la droite (d1) et la droite (d2) se coupent au point A, on dit que (d1) et (d2) sont sécantes en A, et on écrit : (d1) ∩ (d2) = {A}.

2. Droites perpendiculaires
• Définition : Deux droites perpendiculaires sont deux droites sécantes qui se coupent en formant quatre angles droits (mesurant chacun exactement 90°).
• Notation : On utilise le symbole universel ⊥. On écrit : (d1) ⊥ (d2), qui se lit "(d1) est perpendiculaire à (d2)".
• Tracé et codage :
  - On utilise une équerre et une règle plate.
  - On code TOUJOURS l'angle droit par un petit carré à l'intersection des deux droites.

3. Droites parallèles
• Définition : Deux droites d'un même plan sont parallèles si elles n'ont aucun point commun, même si on les prolonge indéfiniment (droites strictement parallèles), ou si elles sont superposées en tous leurs points (droites confondues).
• Notation : On utilise le symbole //. On écrit : (d1) // (d2), qui se lit "(d1) est parallèle à (d2)".
• Écartement constant : La distance entre deux droites parallèles reste constante et identique en tout point.

4. Les Propriétés fondamentales de déduction (Théorèmes de 6ème)
Ces trois propriétés permettent de prouver (démontrer) un résultat sans avoir besoin de mesurer sur le dessin :

• Propriété 1 (Perpendiculaire commune ➔ Parallèles) :
  Si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles.
  Formulation déductive :
  - Données : (d1) ⊥ (Δ) et (d2) ⊥ (Δ).
  - Conclusion : (d1) // (d2).

• Propriété 2 (Parallèle et perpendiculaire ➔ Perpendiculaire) :
  Si deux droites sont parallèles, toute droite perpendiculaire à l'une est obligatoirement perpendiculaire à l'autre.
  Formulation déductive :
  - Données : (d1) // (d2) et (Δ) ⊥ (d1).
  - Conclusion : (Δ) ⊥ (d2).

• Propriété 3 (Transititivité du parallélisme) :
  Si deux droites sont parallèles à une même troisième droite, alors elles sont parallèles entre elles.
  Formulation déductive :
  - Données : (d1) // (d3) et (d2) // (d3).
  - Conclusion : (d1) // (d2).

• Axiome d'Euclide :
  Par un point donné A n'appartenant pas à une droite (d), il passe une et une seule droite parallèle à (d).

5. Méthode de démonstration en 3 étapes :
Au collège, une démonstration géométrique doit toujours comporter 3 étapes distinctes :
1) "On sait que..." (on cite les informations de l'énoncé ou de la figure).
2) "Or, si..." (on cite textuellement la propriété ou la règle du cours).
3) "Donc..." (on énonce la conclusion mathématique).

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Démonstration de parallélisme) : On donne une droite (D). On trace deux droites (L1) et (L2) telles que (L1) ⊥ (D) et (L2) ⊥ (D). Démontrer que (L1) est parallèle à (L2).
- Exercice 2 (Démonstration de perpendicularité) : Les rails d'un chemin de fer sont matérialisés par deux droites parallèles (r1) et (r2). Une traverse (t) est posée perpendiculairement au rail (r1). Que peut-on affirmer pour la traverse (t) et le rail (r2) ? Justifier avec rigueur.
- Exercice 3 (Vrai ou Faux avec justification) : "Deux droites qui ne se coupent pas sur le dessin de mon cahier sont forcément parallèles." Vrai ou faux ?

Conclusion : La maîtrise des trois propriétés liant parallélisme et perpendicularité constitue l'apprentissage clé de la démonstration logique. La géométrie cesse d'être une simple observation visuelle pour devenir une science exacte fondée sur la déduction.`,
  sections: [
    {
      title: '1. Les trois positions relatives de deux droites dans le plan',
      subsections: [
        {
          subtitle: 'A. Droites sécantes et point d\'intersection',
          content: [
            "Deux droites du plan sont dites sécantes lorsqu'elles se coupent en un seul et unique point.",
            "• Point commun : Si les droites (d) et (d') se coupent au point P, on note (d) ∩ (d') = {P}.",
            "• Cas particulier : Si l'angle d'intersection mesure exactement 90°, les droites sont dites sécantes et perpendiculaires."
          ]
        },
        {
          subtitle: 'B. Droites perpendiculaires (Symbole ⊥)',
          content: [
            "Deux droites sont perpendiculaires lorsqu'elles se coupent en formant quatre angles droits de 90°.",
            "• Notation officielle : (d) ⊥ (Δ).",
            "• Construction : On place un côté de l'angle droit de l'équerre le long de la première droite, puis on trace le long de l'autre côté à travers le point désiré.",
            "• Codage obligatoire : On dessine un petit carré au sommet de l'angle formé pour attester mathématiquement de la perpendicularité."
          ]
        },
        {
          subtitle: 'C. Droites parallèles (Symbole //)',
          content: [
            "Deux droites d'un plan sont parallèles si elles ne se coupent jamais, quelle que soit la longueur sur laquelle on les prolonge.",
            "• Notation officielle : (d1) // (d2).",
            "• Propriété d'écartement : Deux droites parallèles conservent un écartement (distance) strictement constant entre elles.",
            "• Cas limite : Deux droites ayant tous leurs points en commun sont dites parallèles et confondues."
          ]
        }
      ]
    },
    {
      title: '2. Les trois propriétés fondamentales de déduction (Les théorèmes)',
      subsections: [
        {
          subtitle: 'Théorème 1 : Deux perpendiculaires à une même droite',
          content: [
            "Énoncé : Si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles.",
            "• Schéma déductif :",
            "  - Données : (d1) ⊥ (d) ET (d2) ⊥ (d).",
            "  - Conclusion logique : (d1) // (d2).",
            "• Exemple de la vie courante : Les deux montants verticaux d'une échelle sont tous les deux perpendiculaires au même barreau horizontal ; par conséquent, les deux montants sont rigoureusement parallèles !"
          ]
        },
        {
          subtitle: 'Théorème 2 : Parallèle et perpendiculaire',
          content: [
            "Énoncé : Si deux droites sont parallèles, alors toute droite perpendiculaire à l'une est perpendiculaire à l'autre.",
            "• Schéma déductif :",
            "  - Données : (d1) // (d2) ET (Δ) ⊥ (d1).",
            "  - Conclusion logique : (Δ) ⊥ (d2).",
            "• Utilisation typique : Permet de prouver qu'un angle est droit sans avoir à le mesurer avec une équerre ou un rapporteur."
          ]
        },
        {
          subtitle: 'Théorème 3 : Transitivité du parallélisme',
          content: [
            "Énoncé : Si deux droites sont parallèles à une même troisième droite, alors elles sont parallèles entre elles.",
            "• Schéma déductif :",
            "  - Données : (d1) // (d3) ET (d2) // (d3).",
            "  - Conclusion logique : (d1) // (d2)."
          ]
        }
      ]
    },
    {
      title: '3. Tableau synthétique des relations de droites',
      table: {
        headers: ['Relation géométrique', 'Symbole', 'Nombre de points communs', 'Propriété caractéristique', 'Codage sur la figure'],
        rows: [
          ['Droites sécantes', '∩', 'Exactement 1 point', 'Se croisent en un point d\'intersection', 'Point d\'intersection nommé (ex : I)'],
          ['Droites perpendiculaires', '⊥', 'Exactement 1 point', 'Forment 4 angles droits (90°)', 'Petit carré à l\'intersection'],
          ['Droites strictement parallèles', '//', '0 point commun', 'Écartement constant, ne se coupent jamais', 'Aucun point commun'],
          ['Droites confondues', '= ou //', 'Une infinité de points', 'Superposées en tous leurs points', 'Une seule ligne visible pour deux noms']
        ]
      }
    },
    {
      title: '4. Méthodologie officielle de la rédaction mathématique',
      content: [
        "Pour rédiger une démonstration en 6ème, vous devez impérativement respecter le plan en 3 étapes :",
        "• 1. 'On sait que...' : Vous listez uniquement les hypothèses fournies par l'énoncé ou le codage de la figure.",
        "• 2. 'Or, si...' : Vous récitez la propriété du cours qui s'applique exactement à la situation.",
        "• 3. 'Donc...' : Vous donnez la conclusion formelle avec les bons symboles mathématiques (⊥ ou //).",
        "Piège classique à bannir : Ne jamais dire 'ça se voit sur le dessin' ! En géométrie, un dessin peut être imprécis ou trompeur ; seule la démonstration logique fait foi."
      ]
    },
    {
      title: '5. Exercices d\'application rédigés et corrigés pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Démontrer le parallélisme de deux droites',
          content: [
            "Énoncé : Soit un triangle ABC rectangle en B. La droite (d) est perpendiculaire à la droite (AB) et passe par un point M extérieur au triangle.",
            "Démontrer que la droite (BC) est parallèle à la droite (d).",
            "--------------------------------------------------",
            "Corrigé rédigé selon la méthode des 3 étapes :",
            "• On sait que : Le triangle ABC est rectangle en B, donc la droite (BC) est perpendiculaire à la droite (AB), soit (BC) ⊥ (AB). De plus, l'énoncé indique que (d) ⊥ (AB).",
            "• Or : Si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles.",
            "• Donc : La droite (BC) est parallèle à la droite (d), noté (BC) // (d)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Démontrer qu\'un angle est droit sans mesurer',
          content: [
            "Énoncé : On considère deux droites parallèles (d1) et (d2). Une droite (t) coupe (d1) perpendiculairement au point A.",
            "La droite (t) coupe également (d2) au point B.",
            "Prouver que la droite (t) est perpendiculaire à la droite (d2).",
            "--------------------------------------------------",
            "Corrigé rédigé selon la méthode des 3 étapes :",
            "• On sait que : Les droites (d1) et (d2) sont parallèles ((d1) // (d2)) et la droite (t) est perpendiculaire à la droite (d1) ((t) ⊥ (d1)).",
            "• Or : Si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre.",
            "• Donc : La droite (t) est perpendiculaire à la droite (d2), noté (t) ⊥ (d2). L'angle formé en B est donc un angle droit de 90°."
          ]
        },
        {
          subtitle: 'Exercice 3 : Vrai / Faux et analyse critique',
          content: [
            "Énoncé : Répondre par Vrai ou Faux et justifier chaque affirmation :",
            "a) Si deux droites ne se coupent pas sur ma feuille, elles sont forcément parallèles.",
            "b) Deux droites peuvent être à la fois parallèles et perpendiculaires.",
            "c) Par un point P donné, on peut tracer une seule droite perpendiculaire à une droite (d).",
            "--------------------------------------------------",
            "Corrigé détaillé :",
            "a) FAUX : Deux droites peuvent ne pas se couper sur la feuille tout en étant sécantes plus loin si on les prolonge. Pour être parallèles, elles ne doivent JAMAIS se couper même prolongées à l'infini.",
            "b) FAUX : C'est impossible. Des droites parallèles n'ont aucun point commun (ou sont confondues), alors que des droites perpendiculaires sont sécantes et forment un angle de 90°.",
            "c) VRAI : C'est une propriété fondamentale : par un point donné, il passe une unique droite perpendiculaire à une droite donnée."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Positions relatives de deux droites',
    root: 'Deux droites dans le plan',
    branches: [
      {
        name: 'Sécantes (∩)',
        subtitle: 'Un seul point commun',
        items: ['Point d\'intersection unique', 'Peuvent se couper sous n\'importe quel angle']
      },
      {
        name: 'Perpendiculaires (⊥)',
        subtitle: 'Sécantes à angle droit (90°)',
        items: ['Quatre angles droits', 'Tracé à l\'équerre', 'Codage : petit carré']
      },
      {
        name: 'Parallèles (//)',
        subtitle: 'Aucun point commun',
        items: ['Écartement constant', 'Ne se coupent jamais', 'Axiome d\'Euclide (unicité)']
      },
      {
        name: 'Théorèmes clés',
        subtitle: 'Règles de déduction',
        items: ['2 perpendiculaires à la même droite ➔ //', 'Une perpendiculaire à l\'une de 2 // ➔ ⊥ à l\'autre', '2 parallèles à une même 3e ➔ //']
      }
    ]
  },
  conclusion:
    "En conclusion, les notions de sécance, de perpendicularité et de parallélisme permettent d'organiser rigoureusement l'espace plan. Les trois propriétés fondamentales du cours fournissent les premiers outils de déduction formelle en trois étapes ('On sait que...', 'Or si...', 'Donc...'), transformant la géométrie en une démarche scientifique solide."
};

export const LESSON_3_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-3',
  number: 'Géométrie • Leçon 3',
  title: 'Le segment de droite et ses propriétés : Milieu et médiatrice',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Le segment de droite, portion mesurable délimitée par deux extrémités, possède deux propriétés géométriques capitales au cœur de la symétrie axiale et de l'équidistance : la notion de milieu et celle de médiatrice. Que ce soit pour partager équitablement un terrain entre deux propriétaires à Thiès ou pour implanter un puits à égale distance de deux villages, la médiatrice d'un segment est un outil géométrique universel. Cette leçon enseigne sa définition géométrique, ses deux propriétés fondamentales d'équidistance et les techniques précises de tracé à la règle et au compas.",
  fullText: `Leçon 3 : Le segment de droite et ses propriétés : Milieu et médiatrice

Introduction : Un segment est défini par ses deux extrémités. Deux concepts essentiels lui sont associés : son milieu (point unique) et sa médiatrice (droite perpendiculaire d'équidistance et axe de symétrie).

1. Le Milieu d'un segment
• Définition rigoureuse : Le milieu d'un segment [AB] est le point unique I appartenant au segment [AB] et situé à égale distance des deux extrémités A et B.
• Conditions mathématiques indispensables :
  1) I ∈ [AB] (le point I doit obligatoirement être sur le segment).
  2) IA = IB = AB / 2.
• Codage : Sur une figure, on indique que I est le milieu en traçant le même symbole (deux petits traits, un rond, etc.) sur les segments [AI] et [IB].
• Piège classique : Si un point M vérifie MA = MB mais n'est pas sur le segment [AB] (M ∉ [AB]), alors M n'est PAS le milieu de [AB] !

2. La Médiatrice d'un segment
• Définition géométrique : La médiatrice d'un segment [AB] est la droite perpendiculaire à ce segment qui passe par son milieu.
• Double condition :
  1) Elle passe par le milieu I de [AB].
  2) Elle est perpendiculaire à la droite (AB) : (Δ) ⊥ (AB).
• Axe de symétrie : La médiatrice est l'axe de symétrie du segment [AB] : le symétrique de A par rapport à la médiatrice est B.

3. Propriété fondamentale de la médiatrice (Caractérisation par l'équidistance)
Cette propriété capitale fonctionne dans les deux sens (théorème direct et théorème réciproque) :

• Propriété directe (Médiatrice ➔ Équidistance) :
  Si un point M appartient à la médiatrice d'un segment [AB], alors il est situé à égale distance (équidistant) des deux extrémités A et B.
  Autrement dit : Si M ∈ (médiatrice de [AB]), alors MA = MB.
  Conséquence : Le triangle MAB est un triangle isocèle en M.

• Propriété réciproque (Équidistance ➔ Médiatrice) :
  Si un point M est à égale distance des extrémités A et B d'un segment (c'est-à-dire si MA = MB), alors ce point M appartient obligatoirement à la médiatrice du segment [AB].

4. Méthodes de construction de la médiatrice :
• Méthode 1 : Règle graduée et équerre :
  1) On mesure la longueur AB à la règle graduée et on place le milieu I au millimètre près (AI = AB/2).
  2) On positionne l'équerre en I perpendiculairement à (AB) et on trace la droite en n'oubliant pas de coder l'angle droit et les deux longueurs égales.

• Méthode 2 (Méthode officielle au compas - la plus précise) :
  1) On prend un écartement de compas strictement supérieur à la moitié de la longueur AB.
  2) La pointe sèche en A, on trace un arc de cercle de chaque côté du segment [AB].
  3) Sans modifier l'écartement du compas, la pointe sèche en B, on trace deux autres arcs de cercle qui coupent les premiers en deux points P et Q.
  4) À la règle, on relie les points P et Q : la droite (PQ) est la médiatrice exacte de [AB] !
  Justification mathématique : Comme PA = PB (même rayon de compas) et QA = QB, les points P et Q appartiennent tous deux à la médiatrice de [AB]. Comme par deux points distincts il ne passe qu'une seule droite, (PQ) est la médiatrice.

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Application directe de la définition du milieu) : Soit un segment [EF] mesurant 7,6 cm. Le point K est le milieu de [EF]. Calculer la longueur EK et donner le codage de la figure.
- Exercice 2 (Propriété de l'équidistance) : Soit un segment [AB] de longueur 6 cm et sa médiatrice (d). Un point P est situé sur (d) à 4 cm du milieu I. On sait que PA = 5 cm. Sans mesurer, quelle est la longueur PB ? Justifier par une propriété du cours.
- Exercice 3 (Problème d'implantation - Géométrie concrète) : Deux villages voisins A et B sont séparés de 8 km. Une compagnie d'eau doit construire un château d'eau C situé à égale distance des deux villages pour alimenter les deux communautés équitablement.
  1) Sur quelle ligne géométrique précise doit-on implanter le château d'eau C ?
  2) Si le château d'eau se trouve à 5 km du village A, à quelle distance se trouve-t-il du village B ?

Conclusion : La médiatrice est indissociable de l'équidistance. Comprendre qu'appartenir à la médiatrice équivaut exactement à être à égale distance des extrémités constitue l'une des compétences géométriques majeures du cycle moyen.`,
  sections: [
    {
      title: '1. Le Milieu d\'un segment de droite',
      subsections: [
        {
          subtitle: 'A. Définition et conditions nécessaires',
          content: [
            "Le milieu d'un segment [AB] est le point unique I qui appartient au segment et qui le partage en deux segments de même longueur.",
            "• Double condition impérative :",
            "  1) I ∈ [AB] (I est aligné entre A et B).",
            "  2) IA = IB = AB / 2.",
            "• Exemple : Si AB = 8,4 cm, alors IA = 4,2 cm et IB = 4,2 cm."
          ]
        },
        {
          subtitle: 'B. Codage et pièges à éviter',
          content: [
            "• Codage : On appose un signe identique sur les deux moitiés [AI] et [IB] (ex : une double barre oblique //).",
            "• Attention : Si un point N vérifie NA = NB mais se trouve hors de la droite (AB), le point N n'est pas le milieu de [AB] ; il est sur la médiatrice de [AB]."
          ]
        }
      ]
    },
    {
      title: '2. La Médiatrice d\'un segment : Définition et Axe de symétrie',
      subsections: [
        {
          subtitle: 'A. Définition géométrique',
          content: [
            "La médiatrice d'un segment est la droite perpendiculaire à ce segment passant par son milieu.",
            "• Deux caractéristiques obligatoires :",
            "  1) Perpendicularité : (Δ) ⊥ (AB).",
            "  2) Passage par le milieu I : I ∈ (Δ) et IA = IB.",
            "• Axe de symétrie : Le segment [AB] admet sa médiatrice comme axe de symétrie axiale orthogonal."
          ]
        }
      ]
    },
    {
      title: '3. Les Deux Propriétés capitales de la Médiatrice',
      subsections: [
        {
          subtitle: 'A. Propriété directe (Médiatrice ➔ Équidistance)',
          content: [
            "Énoncé : Si un point M appartient à la médiatrice d'un segment [AB], alors il est équidistant (à égale distance) des extrémités A et B de ce segment.",
            "• Formule mathématique : M ∈ médiatrice de [AB] ⟹ MA = MB.",
            "• Conséquence immédiate : Pour tout point M de la médiatrice (distinct du milieu I), le triangle MAB est un triangle isocèle de sommet principal M."
          ]
        },
        {
          subtitle: 'B. Propriété réciproque (Équidistance ➔ Médiatrice)',
          content: [
            "Énoncé : Si un point M est situé à égale distance des deux extrémités A et B d'un segment (c'est-à-dire si MA = MB), alors ce point M appartient à la médiatrice du segment [AB].",
            "• Formule mathématique : MA = MB ⟹ M ∈ médiatrice de [AB].",
            "• Utilisation en démonstration : Permet de prouver qu'une droite est une médiatrice en trouvant simplement deux points équidistants des extrémités."
          ]
        }
      ]
    },
    {
      title: '4. Techniques de tracé de la médiatrice',
      table: {
        headers: ['Méthode', 'Instruments requis', 'Étapes de réalisation', 'Précision obtenue'],
        rows: [
          [
            'Règle graduée + Équerre',
            'Règle graduée, équerre, crayon',
            '1. Mesurer AB et placer I tel que AI = AB/2\n2. Placer l\'équerre en I perpendiculairement à (AB)\n3. Tracer et coder l\'angle droit et les longueurs',
            'Moyenne (dépend de la lecture visuelle du millimètre)'
          ],
          [
            'Compas + Règle non graduée',
            'Compas, règle plate, crayon',
            '1. Ouvrir le compas avec un rayon > AB/2\n2. Tracer deux arcs de cercle depuis A (dessus/dessous)\n3. Avec le MÊME rayon, tracer deux arcs depuis B\n4. Relier les deux points d\'intersection P et Q',
            'Maximale et absolue (technique géométrique euclidienne parfaite)'
          ]
        ]
      }
    },
    {
      title: '5. Exercices d\'application rédigés avec solutions détaillées',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calcul de longueur et notion de milieu',
          content: [
            "Énoncé : Soit un segment [RS] de longueur RS = 9,4 cm. Le point M est le milieu de [RS].",
            "1) Quelle est la longueur du segment [RM] ? Justifier.",
            "2) On place un point T sur le segment [RS] tel que RT = 4,7 cm. Que peut-on dire du point T et du point M ?",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Par définition, le milieu M d'un segment [RS] partage ce segment en deux parties de longueurs égales :",
            "RM = MS = RS / 2.",
            "Application numérique : RM = 9,4 cm / 2 = 4,7 cm.",
            "2) Le point T est situé sur le segment [RS] et sa distance à R vaut RT = 4,7 cm, ce qui est exactement égal à RM. Comme le milieu d'un segment est unique, le point T et le point M sont confondus (T = M)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Démonstration utilisant la propriété de la médiatrice',
          content: [
            "Énoncé : Soit un segment [CD] de longueur 7 cm et sa médiatrice (d). Un point S appartient à la droite (d). On sait que SC = 5,8 cm.",
            "1) Sans mesurer, déterminer la longueur SD.",
            "2) Quelle est la nature précise du triangle SCD ? Justifier par une phrase du cours.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) On sait que : S appartient à la médiatrice du segment [CD].",
            "Or : Si un point appartient à la médiatrice d'un segment, alors il est à égale distance des extrémités de ce segment.",
            "Donc : SD = SC = 5,8 cm.",
            "2) Dans le triangle SCD, les côtés [SC] et [SD] ont la même longueur (SC = SD = 5,8 cm).",
            "Par conséquent, le triangle SCD est un triangle isocèle de sommet principal S."
          ]
        },
        {
          subtitle: 'Exercice 3 : Problème de localisation équidistante',
          content: [
            "Énoncé : Deux villes A et B sont distantes de 40 km. Un pylône de télécommunication T doit être installé de telle sorte qu'il reçoive les signaux des deux villes avec la même puissance (TA = TB = 25 km).",
            "1) Justifier que le point d'installation T appartient à une droite géométrique remarquable liée au segment [AB].",
            "2) Peut-on installer le pylône en plusieurs emplacements possibles ? Expliquer géométriquement.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) On sait que le pylône T vérifie TA = TB (il est équidistant des deux villes A et B).",
            "Or : Si un point est à égale distance des extrémités d'un segment, alors il appartient à la médiatrice de ce segment.",
            "Donc : Le point T appartient obligatoirement à la médiatrice du segment [AB].",
            "2) Oui, il existe deux emplacements symétriques possibles situés de part et d'autre de la droite (AB) à l'intersection de la médiatrice et des cercles de rayon 25 km centrés en A et B."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Milieu et Médiatrice d\'un segment',
    root: 'Propriétés du segment [AB]',
    branches: [
      {
        name: 'Le Milieu I',
        subtitle: 'Point unique sur le segment',
        items: ['I ∈ [AB]', 'IA = IB = AB / 2', 'Codage : marques identiques']
      },
      {
        name: 'La Médiatrice (Δ)',
        subtitle: 'Droite perpendiculaire au milieu',
        items: ['Passe par le milieu I', 'Perpendiculaire : (Δ) ⊥ (AB)', 'Axe de symétrie axiale']
      },
      {
        name: 'Propriété directe',
        subtitle: 'Médiatrice ➔ Équidistance',
        items: ['Si M ∈ médiatrice de [AB]', 'Alors MA = MB', 'Triangle MAB isocèle en M']
      },
      {
        name: 'Propriété réciproque',
        subtitle: 'Équidistance ➔ Médiatrice',
        items: ['Si MA = MB', 'Alors M ∈ médiatrice de [AB]', 'Tracé au compas : arcs croisés']
      }
    ]
  },
  conclusion:
    "En définitive, la notion de milieu est ponctuelle tandis que la médiatrice est linéaire et infinie. La règle d'équidistance (M ∈ médiatrice ⟺ MA = MB) est l'une des propriétés les plus puissantes de la géométrie euclidienne en classe de 6ème pour résoudre des problèmes concrets et bâtir des démonstrations rigoureuses."
};
