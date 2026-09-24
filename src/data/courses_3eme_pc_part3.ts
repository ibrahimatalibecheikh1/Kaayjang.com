import { LessonContent } from './courses';
import {
  SVG_PC3_FIG6_LENTILLES,
  SVG_PC3_FIG7_DISPERSION_OEIL
} from './diagrams_3eme_pc';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE 3ÈME — TROISIÈME PARTIE : PHYSIQUE (OPTIQUE : LEÇONS 7 ET 8-9)
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (BFEM Sénégal)
// Leçons approfondies et détaillées avec protocoles expérimentaux obligatoires et figures
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 7 : LES LENTILLES MINCES
// -------------------------------------------------------------------------
export const LESSON_7_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-7',
  number: 'Leçon 7 (Physique)',
  title: 'Les lentilles minces : convergence, vergence et construction géométrique d\'images',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Les lentilles sont des composants optiques fondamentaux utilisés dans une multitude d'instruments du quotidien et de la science : lunettes de vue, loupes, microscopes, télescopes astronomiques et objectifs d'appareils photo de nos smartphones. Une lentille mince est un milieu transparent et homogène limité par deux surfaces sphériques ou par une surface plane et une surface sphérique, dont l'épaisseur au centre reste très faible devant ses rayons de courbure. Cette leçon de physique permet d'identifier les deux grandes familles de lentilles, de définir leurs points caractéristiques (centre optique, foyers, distance focale), de calculer leur vergence et de construire géométriquement l'image d'un objet lumineux sur un banc d'optique.",
  fullText: `Leçon 7 : Les lentilles minces : convergence, vergence et construction géométrique d'images

Introduction :
Une lentille mince transforme les faisceaux lumineux incidents par réfraction à travers ses deux dioptres.

I. Classification des lentilles minces
1. Reconnaissance au toucher et à la forme géométrique :
- Lentilles à bords minces : Le centre est plus épais que les bords.
- Lentilles à bords épais : Le centre est plus mince que les bords.

2. Reconnaissance optique (action sur un faisceau de lumière parallèle) :
- Les lentilles convergentes (à bords minces) : Elles font converger un faisceau de rayons parallèles vers un point unique situé derrière la lentille. Symbolisées par un segment terminé par des flèches orientées vers l'extérieur.
- Les lentilles divergentes (à bords épais) : Elles écartent les rayons lumineux, qui semblent provenir d'un point situé en avant de la lentille. Symbolisées par un segment terminé par des flèches orientées vers l'intérieur.

3. Action sur un texte écrit :
- Vue à travers une lentille convergente tenue près du papier : l'écriture apparaît grossie (effet loupe).
- Vue à travers une lentille divergente : l'écriture apparaît rétrécie.

II. Points et grandeurs caractéristiques d'une lentille convergente
1. Axe optique principal (Δ) :
C'est la droite perpendiculaire au plan de la lentille passant par ses centres de courbure et son centre optique O.

2. Centre optique (O) :
C'est le point central de la lentille situé sur l'axe optique. Tout rayon lumineux passant par le centre optique O traverse la lentille en ligne droite SANS SUBIR AUCUNE DÉVIATION.

3. Foyer principal image (F') et foyer principal objet (F) :
- Foyer image F' : C'est le point de l'axe optique où convergent tous les rayons incidents parallèles à l'axe optique.
- Foyer objet F : C'est le point symétrique de F' par rapport au centre optique O (OF = OF').

4. Distance focale (f) et Vergence (C) :
- La distance focale est la distance séparant le centre optique O du foyer image F' :
  f = OF' = OF (exprimée en mètres, m).
- La vergence C mesure la capacité d'une lentille à faire converger les rayons lumineux. C'est l'inverse de la distance focale :
  C = 1 / f
  Unités : f en mètres (m), C en dioptries (symbole : δ).
- Règle fondamentale : Pour une lentille convergente, f > 0 et C > 0. Plus la lentille est bombée, plus f est courte et plus sa vergence C est élevée.

III. Construction géométrique de l'image d'un objet lumineux
Pour déterminer graphiquement la position, la taille et le sens de l'image A'B' d'un objet rectiligne AB perpendiculaire à l'axe optique en A, on trace les 3 RAYONS CARACTÉRISTIQUES issus du point B :
1. Le rayon passant par le centre optique O : il n'est pas dévié et continue tout droit.
2. Le rayon parallèle à l'axe optique : il émerge de la lentille en passant par le foyer principal image F'.
3. Le rayon passant par le foyer principal objet F : il émerge de la lentille parallèlement à l'axe optique.
Le point d'intersection de ces trois rayons émergents donne l'image B'. En projetant orthogonalement B' sur l'axe optique, on obtient le point A'.

Nature de l'image selon la position de l'objet (distance OA) :
- Si OA > 2f : L'image A'B' est réelle, renversée et plus petite que l'objet (cas de l'appareil photographique).
- Si OA = 2f : L'image A'B' est réelle, renversée et de même taille que l'objet (A'B' = AB) à une distance OA' = 2f.
- Si f < OA < 2f : L'image A'B' est réelle, renversée et plus grande que l'objet (cas du rétroprojecteur ou vidéoprojecteur).
- Si OA = f : Les rayons émergents sont parallèles ; l'image est rejetée à l'infini (projecteur de phare).
- Si OA < f (objet entre le foyer F et le centre O) : Les rayons émergents divergent ; leurs prolongements vers l'arrière se coupent en un point situé du même côté que l'objet. L'image est VIRTUELLE, droite (dans le même sens) et agrandie : c'est le fonctionnement de la LOUPE.`,
  sections: [
    {
      title: '1. Caractéristiques d\'une lentille convergente et tracé des rayons',
      image: {
        url: SVG_PC3_FIG6_LENTILLES,
        alt: 'Figure 6 : Lentilles minces convergentes et divergentes et tracé des 3 rayons caractéristiques',
        caption:
          'Figure 6 : Profils des lentilles (bords minces vs bords épais), points caractéristiques (O, F, F\', f) et construction géométrique de l\'image réelle renversée A\'B\' à l\'aide des 3 rayons remarquables.'
      },
      subsections: [
        {
          subtitle: 'Protocole expérimental obligatoire n°1 : Mesure de la distance focale au soleil ou à l\'infini',
          content: [
            "• Matériel : Banc d'optique gradué en millimètres, une lentille convergente sur support, un écran blanc mobile, source de lumière lointaine (le soleil ou une fenêtre située à plus de 10 mètres).",
            "• Principe : Les rayons émanant d'un objet situé à l'infini arrivent rigoureusement parallèles entre eux sur la lentille.",
            "• Mode opératoire : Diriger la lentille vers la fenêtre ou le soleil. Déplacer doucement l'écran blanc placé derrière la lentille jusqu'à obtenir sur l'écran une petite tache de lumière minuscule, très nette et brillante (l'image de la fenêtre ou du soleil).",
            "• Mesure : Mesurer avec la règle du banc d'optique la distance séparant le centre de la lentille de l'écran. Cette distance est exactement la distance focale f = OF'.",
            "• Exemple numérique : Si l'écran est net à 20 cm de la lentille, alors f = 0,20 m et la vergence vaut C = 1 / 0,20 = 5 dioptries (δ)."
          ]
        },
        {
          subtitle: 'Protocole expérimental obligatoire n°2 : Formation d\'images sur banc d\'optique',
          content: [
            "• Matériel : Banc d'optique, lanterne munie d'une diapositive représentant la lettre 'F' ou une flèche lumineuse graduée (objet AB), lentille convergente de distance focale connue f = 10 cm, écran dépoli blanc.",
            "• Manipulation 1 (Image réelle) : Placer l'objet AB à la graduation 0 cm, la lentille à 25 cm (OA = 25 cm > 2f). Déplacer l'écran jusqu'à obtenir une image très nette.",
            "• Constat : L'image sur l'écran apparaît renversée (tête en bas) et plus petite que l'objet.",
            "• Manipulation 2 (Effet Loupe) : Rapprocher la lentille à 6 cm de l'objet (OA = 6 cm < f = 10 cm). On ne peut plus recueillir d'image nette sur l'écran blanc.",
            "• Constat visuel : En regardant directement à travers la lentille avec son œil, on observe une image droite, très agrandie de la lettre 'F'. C'est une image virtuelle."
          ]
        }
      ]
    },
    {
      title: '2. Formule de conjugaison et grandissement linéaire',
      subsections: [
        {
          subtitle: 'Formules d\'analyse géométrique pour le BFEM',
          content: [
            "• Relation de conjugaison de Descartes : (1 / OA') - (1 / OA) = 1 / f = C (avec les grandeurs algébriques).",
            "• En 3ème, on utilise les triangles semblables (théorème de Thalès) :",
            "  Les triangles OAB et OA'B' sont homothétiques de sommet O :",
            "  A'B' / AB = OA' / OA.",
            "• Le grandissement γ (gamma) est le rapport entre la taille de l'image et la taille de l'objet :",
            "  γ = A'B' / AB = OA' / OA."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calcul de vergence et construction géométrique d\'image',
          content: [
            "Une lentille mince convergente (L) a une vergence C = +20 dioptries (δ).",
            "1. Calculer la distance focale f de cette lentille en mètres puis en centimètres.",
            "2. Un objet lumineux AB de hauteur h = 2 cm est placé perpendiculairement à l'axe optique, le point A étant sur l'axe à une distance OA = 10 cm devant la lentille.",
            "3. Faire un schéma soigné à l'échelle 1/2 horizontalement et 1/1 verticalement en plaçant O, F, F' et l'objet AB.",
            "4. Construire l'image A'B' à l'aide des rayons caractéristiques.",
            "5. Donner la nature, le sens et la taille de l'image A'B'. Vérifier par le calcul."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique et rédigé',
          content: [
            "1. Calcul de la distance focale f :",
            "   C = 1 / f ➔ f = 1 / C = 1 / 20 = 0,05 m = 5 cm.",
            "2. Position de l'objet :",
            "   OA = 10 cm = 2 × f (l'objet est situé très exactement au double de la distance focale).",
            "3. Construction géométrique :",
            "   - On trace l'axe horizontal (Δ) et la lentille verticale (L) se coupant en O.",
            "   - On place F à 5 cm à gauche de O, et F' à 5 cm à droite de O.",
            "   - On place A à 10 cm à gauche de O et la flèche verticale AB de 2 cm vers le haut.",
            "   - On trace le rayon 1 issu de B passant par O : il continue en ligne droite sans déviation.",
            "   - On trace le rayon 2 issu de B parallèle à l'axe : il est réfracté en passant par F'.",
            "   - L'intersection des deux rayons définit le point B'.",
            "4. Caractéristiques de l'image A'B' :",
            "   - Position : A' est situé à exactement 10 cm à droite de la lentille (OA' = 10 cm).",
            "   - Nature : L'image peut être recueillie sur un écran, elle est donc RÉELLE.",
            "   - Sens : B' est sous l'axe optique, l'image est donc RENVERSÉE.",
            "   - Grandeur : D'après Thalès, A'B' / AB = OA' / OA = 10 / 10 = 1 ➔ A'B' = AB = 2 cm.",
            "   L'image a la même dimension que l'objet initial."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Lentilles minces et tracé géométrique',
    root: 'Lentilles Minces',
    branches: [
      {
        name: 'CLASSIFICATION',
        subtitle: 'Convergente vs Divergente',
        items: [
          'Convergente : bords minces, C > 0, effet loupe',
          'Divergente : bords épais, C < 0, image rétrécie',
          'Vergence : C = 1 / f (en dioptries δ)'
        ]
      },
      {
        name: '3 RAYONS NOTABLES',
        subtitle: 'Tracé graphique',
        items: [
          'Passe par O ➔ Non dévié',
          'Parallèle à l\'axe ➔ Émerge par F\' (foyer image)',
          'Passe par F ➔ Émerge parallèle à l\'axe'
        ]
      },
      {
        name: 'NATURE D\'IMAGE',
        subtitle: 'Selon OA',
        items: [
          'OA > f : Image réelle renversée (sur écran)',
          'OA = f : Image à l\'infini (faisceau parallèle)',
          'OA < f : Image virtuelle droite agrandie (Loupe)'
        ]
      }
    ]
  },
  conclusion:
    "Les lentilles convergentes obéissent à des lois géométriques strictes. La maîtrise de la relation C = 1/f et du tracé des 3 rayons caractéristiques permet d'anticiper avec exactitude la position et la taille de toute image optique."
};

// -------------------------------------------------------------------------
// LEÇON 8 : DISPERSION DE LA LUMIÈRE BLANCHE (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_8_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-8',
  number: 'Leçon 8 (Physique)',
  title: 'Dispersion de la lumière blanche par le prisme : spectre continu, déviation et recomposition',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Pourquoi le ciel est-il bleu ? Comment se forme un arc-en-ciel après une pluie d'hivernage au Sénégal ? En 1666, Isaac Newton a prouvé de manière éclatante que la lumière blanche du soleil n'est pas pure et simple, mais formée de la superposition d'une infinité de lumières colorées. Lorsqu'un faisceau de lumière blanche traverse un prisme en verre, il subit une déviation inégale selon les couleurs, révélant le spectre continu de la lumière visible.",
  fullText: `Leçon 8 : Dispersion de la lumière blanche par le prisme : spectre continu, déviation et recomposition

Introduction :
La lumière blanche émise par le soleil ou une lampe à incandescence est polychromatique. Sa traversée d'un milieu transparent dispersif comme le verre ou l'eau permet de séparer ses différentes composantes colorées : c'est le phénomène de dispersion.

I. L'expérience historique du prisme de Newton
1. Dispositif expérimental :
On fait passer un fin pinceau de lumière blanche (obtenu à l'aide d'une lanterne et d'une fente réglable) à travers un prisme en verre transparent à base triangulaire.
Le faisceau traverse la première face du prisme (première réfraction), se propage dans le verre, puis émerge par la seconde face (deuxième réfraction) avant d'être projeté sur un écran blanc.

2. Observations expérimentales :
- Le faisceau émergeant est dévié vers la base du prisme.
- Le faisceau ne forme plus une fente blanche sur l'écran, mais s'étale en une bande continue de magnifiques couleurs irisées appelée le SPECTRE VISIBLE DE LA LUMIÈRE BLANCHE.
- Les couleurs principales se succèdent sans discontinuité dans l'ordre suivant :
  Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet (moyen mnémotechnique : ROJVBIV).

3. Déviation des différentes radiations :
- La lumière ROUGE est la MOINS déviée de toutes les radiations visibles (angle de déviation minimal).
- La lumière VIOLETTE est la PLUS déviée de toutes les radiations visibles (angle de déviation maximal).
- Entre le rouge et le violet s'intercalent toutes les autres couleurs avec une déviation croissante.

II. Interprétation du phénomène de dispersion
1. Nature polychromatique de la lumière blanche :
La lumière blanche est qualifiée de POLYCHROMATIQUE car elle est constituée d'une superposition d'une multitude de radiations colorées simples.
À l'opposé, une lumière qui ne comporte qu'une seule couleur (comme le faisceau d'un pointeur laser rouge) est dite MONOCHROMATIQUE. Une lumière monochromatique traversant un prisme est déviée mais n'est JAMAIS dispersée.

2. Milieu dispersif :
L'indice de réfraction n du verre dépend de la longueur d'onde de la lumière. Comme n(violet) > n(rouge), le violet est plus réfracté et donc plus dévié que le rouge : le verre est un milieu DISPERSIF.

III. Recomposition de la lumière blanche (Synthèse additive)
1. Le disque tournant de Newton :
Sur un disque circulaire en carton, on peint en secteurs égaux les sept couleurs fondamentales du spectre (rouge, orange, jaune, vert, bleu, indigo, violet).
Lorsqu'on fait tourner ce disque à une vitesse suffisante (plus de 16 tours par seconde) :
- En raison du temps de persistance rétinienne de l'œil humain (environ 1/10 de seconde), les différentes sensations colorées se mélangent sur notre rétine.
- Le disque en rotation rapide apparaît uniformément BLANC grisâtre.
- Cette expérience prouve que la synthèse additive de toutes les lumières du spectre reconstitue la lumière blanche.

2. Phénomène naturel : l'arc-en-ciel :
Après une averse au Sénégal, lorsque le soleil brille dans notre dos et éclaire un rideau de pluie :
Chaque gouttelette d'eau sphérique suspendue dans l'atmosphère agit comme un minuscule prisme : elle réfracte la lumière solaire à l'entrée, la réfléchit totalement au fond de la goutte et la réfracte à nouveau à la sortie en la dispersant. L'ensemble des milliards de gouttes crée l'arc-en-ciel circulaire dans le ciel.`,
  sections: [
    {
      title: '1. Protocole expérimental obligatoire : Décomposition de la lumière par le prisme',
      image: {
        url: SVG_PC3_FIG7_DISPERSION_OEIL,
        alt: 'Figure 7A : Décomposition de la lumière blanche par le prisme',
        caption:
          'Figure 7A : Dispersion de la lumière blanche par un prisme en verre (le rouge est le moins dévié, le violet est le plus dévié vers la base du prisme).'
      },
      subsections: [
        {
          subtitle: 'Protocole opératoire en laboratoire',
          content: [
            "• Matériel : Lanterne de projection avec lampe blanche, fente fine réglable, prisme en verre à section équilatérale, écran blanc plat, obscurité de la salle.",
            "• Étape 1 : Régler la fente pour obtenir un faisceau lumineux rectiligne blanc très net sur l'écran.",
            "• Étape 2 : Placer le prisme sur le trajet du faisceau et observer la déviation du faisceau vers la base du prisme.",
            "• Étape 3 : Observer le spectre continu étalé sur l'écran : Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet.",
            "• Étape 4 (Contre-épreuve) : Remplacer la lanterne blanche par un laser monochromatique rouge. Constat : le rayon est dévié mais ne se décompose pas, prouvant sa nature monochromatique."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Analyse du spectre lumineux au prisme',
          content: [
            "Énoncé : Un pinceau lumineux blanc tombe sur une face d'un prisme en verre.",
            "1. Définir le phénomène de dispersion de la lumière.",
            "2. Quelles sont les sept couleurs principales qui composent le spectre visible ?",
            "3. Parmi les radiations rouge et violette, laquelle est la plus déviée ? Laquelle est la moins déviée ?",
            "4. Quel dispositif expérimental permet de prouver que l'on peut reconstituer la lumière blanche à partir des lumières colorées ?",
            "Corrigé :",
            "1. La dispersion est la séparation des différentes radiations colorées constituant une lumière polychromatique lors de sa traversée d'un milieu dispersif.",
            "2. Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet.",
            "3. La radiation violette est la plus déviée ; la radiation rouge est la moins déviée.",
            "4. Le disque de Newton en rotation rapide permet la recomposition par synthèse additive."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Dispersion de la lumière blanche',
    root: 'Dispersion Prismatique',
    branches: [
      {
        name: 'SPECTRE VISIBLE',
        subtitle: 'Bande continue',
        items: ['Ordre : ROJVBIV', 'Lumière polychromatique', 'Absence de séparation noire']
      },
      {
        name: 'DÉVIATION ANGULAIRE',
        subtitle: 'Réfraction inégale',
        items: ['Rouge = déviation minimale', 'Violet = déviation maximale', 'Déviation vers la base du prisme']
      },
      {
        name: 'RECOMPOSITION',
        subtitle: 'Synthèse additive',
        items: ['Disque tournant de Newton', 'Persistance rétinienne (1/10 s)', 'Reconstitution du blanc']
      }
    ]
  },
  conclusion:
    "La dispersion de la lumière blanche démontre qu'elle est polychromatique. La différence d'indice du verre selon la radiation explique pourquoi le violet est plus dévié que le rouge, principe également à l'origine de la formation des arcs-en-ciel."
};

// -------------------------------------------------------------------------
// LEÇON 9 : MODÈLE OPTIQUE DE L'ŒIL ET DÉFAUTS DE VISION (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_9_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-9',
  number: 'Leçon 9 (Physique)',
  title: 'Modèle optique de l\'œil, accommodation et correction des défauts de vision (myopie, hypermétropie)',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "L'œil humain est l'organe de la vision. D'un point de vue physique, son fonctionnement est assimilable à celui d'un appareil photographique biologique ou d'un banc d'optique élémentaire. Lorsque le système optique oculaire présente une anomalie géométrique ou de vergence, la vision devient floue. En classe de 3ème, nous modélisons l'œil réduit et déterminons scientifiquement les verres correcteurs (lentilles minces convergentes ou divergentes) nécessaires pour corriger la myopie et l'hypermétropie.",
  fullText: `Leçon 9 : Modèle optique de l'œil, accommodation et correction des défauts de vision (myopie, hypermétropie)

Introduction :
L'œil est un système optique complexe centré qui forme sur la rétine une image réelle, renversée et plus petite de l'objet observé.

I. Modèle optique réduit de l'œil humain
L'œil peut être représenté par un modèle physique simplifié composé de trois éléments fondamentaux :
1. L'iris et la pupille : assimilables au DIAPHRAGME.
L'iris est un muscle annulaire pigmenté qui fait varier l'ouverture de la pupille selon la luminosité ambiante (réflexe pupillaire) pour protéger la rétine et doser le flux lumineux.
2. Les milieux transparents (cornée, humeur aqueuse, cristallin, humeur vitrée) : assimilables à une LENTILLE CONVERGENTE unique à vergence variable. Le cristallin est une lentille biconvexe souple et élastique.
3. La rétine : assimilable à l'ÉCRAN de projection. Située au fond du globe oculaire, elle est tapissée de cellules photosensibles (cônes et bâtonnets) reliées au nerf optique.

II. Le phénomène d'accommodation
1. Définition :
Pour un œil normal (emmétrope) au repos, le foyer image F' du système est situé exactement sur la rétine : l'œil voit net à l'infini sans aucun effort musculaire.
Lorsqu'un objet se rapproche de l'œil, son image tend à reculer derrière la rétine. Pour conserver la netteté, les muscles ciliaires se contractent et compriment le cristallin : celui-ci devient plus bombé, sa distance focale diminue et sa vergence augmente. Cette adaptation réflexe est l'ACCOMMODATION.
2. Limites de vision distincte :
- Le Punctum Remotum (PR) : point le plus éloigné qu'un œil peut voir net sans accommoder (situé à l'infini pour un œil normal).
- Le Punctum Proximum (PP) : point le plus proche qu'un œil peut voir net en accommodant au maximum (environ 25 cm chez l'adolescent de 3ème).

III. Les défauts de vision et leurs corrections
1. La myopie (Œil trop convergent ou trop long) :
- Caractéristique : Le globe oculaire est trop allongé ou le cristallin est trop convergent au repos.
- Conséquence : Pour un objet éloigné, l'image se forme EN AVANT DE LA RÉTINE. Le myope voit flou de loin et net de très près. Son PP et son PR sont trop rapprochés.
- Correction : On place devant l'œil une LENTILLE DIVERGENTE (à vergence négative C < 0). La lentille divergente écarte les rayons lumineux incidents afin de repousser la formation de l'image exactement sur la rétine.

2. L'hypermétropie (Œil pas assez convergent ou trop court) :
- Caractéristique : Le globe oculaire est trop court ou le cristallin n'est pas assez convergent.
- Conséquence : Au repos, l'image d'un objet se formerait EN ARRIÈRE DE LA RÉTINE. L'hypermétrope doit accommoder en permanence, même pour voir de loin, ce qui entraîne maux de tête et fatigue oculaire.
- Correction : On place devant l'œil une LENTILLE CONVERGENTE (à vergence positive C > 0) qui augmente la vergence globale pour ramener l'image sur la rétine.

3. La presbytie :
Due au vieillissement physiologique naturel (à partir de 45 ans), le cristallin perd de son élasticité et ne parvient plus à bomber suffisamment. La vision de près devient floue. Elle se corrige par des verres convergents.

IV. Règle des vergences pour lentilles accolées
Lorsque le verre de lunette (lentille L₁) est placé devant l'œil (lentille L₂), la vergence équivalente totale est :
C_totale = C₁ + C₂.`,
  sections: [
    {
      title: '1. Modèle optique réduit et simulation des anomalies',
      image: {
        url: SVG_PC3_FIG7_DISPERSION_OEIL,
        alt: 'Figure 7B : Modèle optique de l\'œil et correction des défauts',
        caption:
          'Figure 7B : Modèle réduit de l\'œil humain (diaphragme, cristallin convergent, rétine écran) et principes de correction de la myopie (lentille divergente) et de l\'hypermétropie (lentille convergente).'
      },
      subsections: [
        {
          subtitle: 'Simulation expérimentale sur banc d\'optique',
          content: [
            "• Banc d'optique de référence : Utiliser une lentille convergente L₁ de vergence +10 δ pour représenter le cristallin et un écran plat à 10 cm pour la rétine.",
            "• Simulation de la myopie : Remplacer L₁ par une lentille plus puissante de +12 δ. L'image de l'objet éloigné se projette à 8,3 cm, soit en avant de l'écran (flou sur l'écran).",
            "• Correction de la myopie : Accoler une lentille divergente de vergence -2 δ. La vergence totale devient C = +12 - 2 = +10 δ et l'image redevient parfaitement nette sur la rétine.",
            "• Simulation de l'hypermétropie : Remplacer par une lentille moins puissante de +8 δ (image en arrière). Ajouter une lentille convergente de +2 δ pour restaurer la netteté."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Analyse d\'une ordonnance ophtalmologique',
          content: [
            "Énoncé : Un élève de 3ème ne parvient pas à lire le tableau à 6 mètres mais lit sans peine son livre à 15 cm de ses yeux.",
            "1. Quel est le défaut de l'œil de cet élève ? Justifier.",
            "2. Où se forme l'image des écritures du tableau par rapport à la rétine de cet élève sans lunettes ?",
            "3. L'ophtalmologiste lui prescrit des verres de vergence C = -2,5 dioptries. Quel est le type de ces lentilles ?",
            "4. Calculer la distance focale f de ces verres en cm.",
            "Corrigé :",
            "1. L'élève voit net de près et flou de loin : il est MYOPE.",
            "2. L'image se forme EN AVANT DE LA RÉTINE.",
            "3. Le signe « moins » de la vergence (C = -2,5 δ) indique qu'il s'agit de LENTILLES DIVERGENTES.",
            "4. f = 1 / |C| = 1 / 2,5 = 0,40 m = 40 cm."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Modèle de l\'œil et défauts de vision',
    root: 'Optique Oculaire',
    branches: [
      {
        name: 'MODÈLE RÉDUIT',
        subtitle: 'Composants',
        items: ['Pupille / Iris = Diaphragme', 'Cristallin = Lentille convergente', 'Rétine = Écran sensible']
      },
      {
        name: 'MYOPIE',
        subtitle: 'Œil trop puissant',
        items: ['Image formée EN AVANT de la rétine', 'Vision de loin floue', 'Correction : Lentille DIVERGENTE (C < 0)']
      },
      {
        name: 'HYPERMÉTROPIE',
        subtitle: 'Œil trop faible',
        items: ['Image formée EN ARRIÈRE de la rétine', 'Vision de près difficile / fatigue', 'Correction : Lentille CONVERGENTE (C > 0)']
      }
    ]
  },
  conclusion:
    "L'assimilation de l'œil à un système optique centré permet d'appliquer directement les lois des lentilles minces. La myopie (œil trop convergent) se corrige par une lentille divergente, et l'hypermétropie (œil insuffisamment convergent) par une lentille convergente."
};

// Rétrocompatibilité : export de l'ancienne variable combinée
export const LESSON_8_9_PC_3EME: LessonContent = LESSON_8_PC_3EME;
