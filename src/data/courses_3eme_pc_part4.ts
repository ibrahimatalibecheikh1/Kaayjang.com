import { LessonContent } from './courses';
import {
  SVG_PC3_FIG8_POIDS_MASSE,
  SVG_PC3_FIG9_EQUILIBRE_TRAVAIL,
  SVG_PC3_FIG10_ELECTRICITE
} from './diagrams_3eme_pc';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE 3ÈME — QUATRIÈME PARTIE : PHYSIQUE (MÉCANIQUE & ÉLECTRICITÉ : LEÇONS 10-11, 12-13, 14-15)
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (BFEM Sénégal)
// Leçons approfondies et détaillées avec protocoles expérimentaux obligatoires et figures
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 10 : LES FORCES ET LEURS CARACTÉRISTIQUES (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_10_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-10',
  number: 'Leçon 10 (Physique)',
  title: 'Les forces et leurs caractéristiques : vecteur-force, dynamomètre et effets mécaniques',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Qu'il s'agisse de tirer un seau d'eau d'un puits au village, de freiner une bicyclette ou de frapper dans un ballon de football, chaque action mécanique se traduit par l'exercice d'une force. En physique, une force est modélisée par un outil mathématique puissant : le vecteur-force. Cette leçon fondamentale de mécanique définit les effets d'une force, ses quatre caractéristiques indissociables et sa mesure expérimentale au dynamomètre.",
  fullText: `Leçon 10 : Les forces et leurs caractéristiques : vecteur-force, dynamomètre et effets mécaniques

Introduction :
Une force est toute action mécanique exercée par un corps (l'auteur) sur un autre corps (le receveur), capable de produire un effet statique ou un effet dynamique.

I. Les effets d'une force
Une force peut produire deux grands types d'effets observables :
1. Effet dynamique :
- Mettre un corps au repos en mouvement (ex : frapper dans un ballon de football immobile).
- Modifier la vitesse ou la trajectoire d'un corps déjà en mouvement (ex : freiner une moto, dévier une balle de tennis).
2. Effet statique :
- Maintenir un corps en équilibre statique (ex : câble maintenant suspendu un lustre).
- Déformer un corps de façon temporaire ou permanente (ex : étirer un ressort élastique, écraser une canette en aluminium).

II. Les deux grandes catégories de forces
1. Forces de contact :
L'auteur et le receveur se touchent matériellement.
- Force de contact localisée : Le contact se fait en un point ou sur une surface minuscule (ex : traction d'un fil fin, poussée d'une pointe).
- Force de contact répartie : Le contact s'effectue sur toute une surface étendue (ex : poussée du vent sur la voile d'une pirogue, pression de l'eau sur les parois d'un barrage).
2. Forces à distance (forces de champ) :
L'auteur agit sur le receveur sans aucun contact matériel direct.
- La force gravitationnelle (ex : attraction de la Terre sur les corps : le poids).
- La force magnétique (ex : aimant attirant un clou en fer à travers l'air).
- La force électrostatique (ex : règle en plastique frottée attirant des morceaux de papier).

III. Les quatre caractéristiques fondamentales d'une force
Une force est une grandeur vectorielle modélisée par un vecteur noté F⃗. Elle est entièrement définie par quatre caractéristiques indissociables :
1. Le point d'application : Point géométrique où s'applique la force.
- Pour une force de contact : le point de contact réel entre les deux corps.
- Pour une force à distance : le centre de gravité G de l'objet receveur.
2. La droite d'action (ou direction) :
La ligne droite selon laquelle s'exerce l'action mécanique (droite verticale, horizontale, ou oblique formant un angle α avec l'horizontale).
3. Le sens :
L'orientation du mouvement que la force tend à provoquer le long de sa droite d'action (vers le haut, vers le bas, vers la droite, vers la gauche).
4. L'intensité (ou valeur) :
La grandeur mesurable de l'effort mécanique.
- Unité légale internationale : le Newton (symbole : N).
- Instrument de mesure : le DYNAMOMÈTRE à ressort étalonné.

IV. Représentation graphique d'une force
Pour représenter graphiquement une force, on trace un segment de droite fléché (vecteur F⃗) :
- L'origine de la flèche est le point d'application.
- La direction de la flèche est la droite d'action.
- La pointe de la flèche indique le sens.
- La longueur de la flèche est strictement proportionnelle à l'intensité de la force selon une échelle graphique choisie (ex : 1 cm pour 5 N).`,
  sections: [
    {
      title: '1. Mesure et étalonnage du dynamomètre',
      image: {
        url: SVG_PC3_FIG8_POIDS_MASSE,
        alt: 'Figure 8A : Mesure d\'une force au dynamomètre',
        caption:
          'Figure 8A : Dynamomètre de laboratoire et représentation graphique vectorielle d\'une force (point d\'application, direction, sens et longueur proportionnelle).'
      },
      subsections: [
        {
          subtitle: 'Protocole expérimental : Étalonnage et lecture au dynamomètre',
          content: [
            "• Matériel : Dynamomètre tubulaire à ressort gradué en Newtons (0 à 5 N), potence, masses marquées.",
            "• Réglage du zéro : Suspendre le dynamomètre verticalement à vide. Tourner la molette supérieure pour aligner l'index sur 0 N.",
            "• Mesure d'une force de traction : Tirer sur le crochet avec un fil. L'allongement du ressort est proportionnel à l'intensité de la force exercée.",
            "• Règle d'or du BFEM : Une force se caractérise toujours par quatre éléments : point d'application, droite d'action, sens et intensité en Newtons."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Représentation graphique d\'une force de traction',
          content: [
            "Énoncé : Un ouvrier tire un chariot sur un sol horizontal à l'aide d'une corde attachée au point A. Il exerce une force constante de 60 N dirigée obliquement vers la droite en faisant un angle de 30° avec l'horizontale.",
            "1. Donner les quatre caractéristiques de cette force.",
            "2. Représenter le vecteur-force F⃗ en adoptant l'échelle : 1 cm pour 15 N.",
            "Corrigé :",
            "1. Caractéristiques :",
            "   - Point d'application : Point A (point d'attache de la corde).",
            "   - Droite d'action : Droite oblique inclinée de 30° au-dessus de l'horizontale.",
            "   - Sens : Vers la droite et le haut (sens de la traction).",
            "   - Intensité : F = 60 N.",
            "2. Longueur de la flèche : L = 60 N / 15 N/cm = 4 cm. On trace une flèche de 4 cm partant de A orientée à 30° vers le haut et la droite."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Caractéristiques d\'une force',
    root: 'Vecteur-Force (F⃗)',
    branches: [
      {
        name: 'POINT D\'APPLICATION',
        subtitle: 'Origine du vecteur',
        items: ['Point de contact réel (forces de contact)', 'Centre de gravité G (forces à distance)']
      },
      {
        name: 'DROITE D\'ACTION',
        subtitle: 'Direction',
        items: ['Ligne droite du mouvement', 'Verticale, horizontale ou oblique']
      },
      {
        name: 'SENS ET INTENSITÉ',
        subtitle: 'Orientation et mesure',
        items: ['Sens : vers le haut, bas, etc.', 'Intensité en Newtons (N)', 'Mesure : dynamomètre à ressort']
      }
    ]
  },
  conclusion:
    "Toute action mécanique se modélise par un vecteur-force défini par quatre caractéristiques précises. La maîtrise de sa représentation graphique à l'échelle est une exigence permanente du BFEM."
};

// -------------------------------------------------------------------------
// LEÇON 11 : POIDS ET MASSE D'UN CORPS (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_11_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-11',
  number: 'Leçon 11 (Physique)',
  title: 'Poids et masse d\'un corps : distinction fondamentale et relation P = m × g',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Dans le langage courant, on commet fréquemment la confusion en disant « je vais mesurer mon poids sur le pèse-personne ». Du point de vue de la physique rigoureuse, c'est une faute scientifique ! La balance mesure la masse en kilogrammes, alors que le poids est la force d'attraction exercée par la Terre, mesurée en Newtons. Cette leçon clarifie définitivement la distinction entre ces deux grandeurs et établit la relation universelle P = m × g.",
  fullText: `Leçon 11 : Poids et masse d'un corps : distinction fondamentale et relation P = m × g

Introduction :
Le poids et la masse sont deux grandeurs physiques distinctes, reliées en un lieu donné par l'intensité de la pesanteur g.

I. La masse d'un corps (m)
1. Définition :
La masse mesure la quantité de matière constituant un corps (nombre d'atomes ou de molécules). Elle caractérise aussi son inertie face aux variations de mouvement.
2. Propriétés :
- Instrument de mesure : La BALANCE (balance de Roberval avec boîtes de masses marquées ou balance électronique).
- Unité légale internationale : Le KILOGRAMME (symbole : kg).
- Invariance absolue : La masse est une grandeur scalaire invariable. Elle ne varie jamais, quel que soit le lieu de mesure (sur Terre, sur la Lune ou en impesanteur dans l'espace).

II. Le poids d'un corps (P⃗)
1. Définition :
Le poids d'un corps est la force gravitationnelle exercée à distance par la Terre sur ce corps.
2. Les quatre caractéristiques du poids :
- Point d'application : Le centre de gravité G de l'objet.
- Droite d'action : La VERTICALE du lieu (matérialisée par le fil à plomb).
- Sens : Dirigé vers le bas (vers le centre de la Terre).
- Intensité : Mesurée en NEWTONS (N) avec un dynamomètre.
3. Variabilité :
Le poids varie selon l'altitude (il diminue quand on s'élève) et selon l'astre attracteur (sur la Lune, le poids est 6 fois plus faible que sur Terre car la Lune est moins massive).

III. La relation fondamentale : P = m × g
1. Mise en évidence expérimentale :
Lorsqu'on suspend des masses marquées successives à un dynamomètre, le quotient P / m reste strictement constant en un lieu donné :
P = m × g
- P : intensité du poids en Newtons (N).
- m : masse en kilogrammes (kg) [Attention : convertir les grammes en kg en divisant par 1 000].
- g : intensité de la pesanteur en Newtons par kilogramme (N/kg).

2. Valeurs caractéristiques de g :
- Au Sénégal (Dakar) : g ≈ 9,8 N/kg (ou 10 N/kg dans les sujets du BFEM).
- Sur la Lune : g_Lune ≈ 1,6 N/kg (g_Terre / 6).`,
  sections: [
    {
      title: '1. Étude expérimentale et droite linéaire P = f(m)',
      image: {
        url: SVG_PC3_FIG8_POIDS_MASSE,
        alt: 'Figure 8B : Courbe d\'étalonnage P = f(m)',
        caption:
          'Figure 8B : Tracé expérimental de la droite P = f(m) passant par l\'origine dont la pente correspond à l\'intensité locale de pesanteur g = 9,8 N/kg.'
      },
      subsections: [
        {
          subtitle: 'Tableau comparatif Masse vs Poids pour le BFEM',
          content: [
            "• Masse : quantité de matière (invariable), mesurée à la balance en kilogrammes (kg).",
            "• Poids : force de gravité (variable avec l'astre et l'altitude), mesuré au dynamomètre en Newtons (N).",
            "• Formule de liaison : P = m × g   ⟺   m = P / g   ⟺   g = P / m.",
            "• Piège fréquent du BFEM : Toujours convertir m en kg avant de multiplier par g !"
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Poids d\'une sonde sur Terre et sur la Lune',
          content: [
            "Énoncé : Une sonde spatiale a une masse m = 300 kg sur Terre.",
            "Données : g_Terre = 9,8 N/kg ; g_Lune = 1,6 N/kg.",
            "1. Calculer le poids P_Terre de la sonde sur le pas de tir de Dakar.",
            "2. Quelle est la masse de la sonde sur le sol lunaire ?",
            "3. Calculer son poids P_Lune sur la Lune.",
            "Corrigé :",
            "1. P_Terre = m × g_Terre = 300 × 9,8 = 2 940 N.",
            "2. La masse est invariable : m_Lune = 300 kg.",
            "3. P_Lune = m × g_Lune = 300 × 1,6 = 480 N. Le poids est plus de 6 fois plus faible sur la Lune."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Poids et Masse',
    root: 'Gravitation & Pesanteur',
    branches: [
      {
        name: 'MASSE (m)',
        subtitle: 'Quantité de matière',
        items: ['Unité : kg (Balance)', 'Invariable partout dans l\'univers', 'Grandeur scalaire']
      },
      {
        name: 'POIDS (P⃗)',
        subtitle: 'Force de gravité',
        items: ['Unité : N (Dynamomètre)', 'P = m × g', 'Vertical, orienté vers le bas', 'Variable avec l\'astre']
      },
      {
        name: 'PESANTEUR (g)',
        subtitle: 'Constante locale',
        items: ['Terre (Dakar) : g ≈ 9,8 N/kg', 'Lune : g ≈ 1,6 N/kg', 'Pente de la droite P = f(m)']
      }
    ]
  },
  conclusion:
    "La masse (en kg, mesurée à la balance) est une propriété constante de la matière, tandis que le poids (en N, mesuré au dynamomètre) est la force d'attraction gravitationnelle variable selon la loi P = m × g."
};

// Rétrocompatibilité : export de l'ancienne variable combinée
export const LESSON_10_11_PC_3EME: LessonContent = LESSON_10_PC_3EME;

// -------------------------------------------------------------------------
// LEÇON 12 : ÉQUILIBRE D'UN SOLIDE SOUMIS À DEUX FORCES (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_12_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-12',
  number: 'Leçon 12 (Physique)',
  title: 'Équilibre d\'un solide soumis à deux forces : conditions d\'équilibre et écriture vectorielle',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Qu'il s'agisse d'une lampe suspendue au plafond de la salle de classe, d'un tableau d'affichage fixé au mur ou d'un livre posé sur un bureau, de nombreux objets restent parfaitement immobiles dans notre environnement quotidien. En physique, l'immobilité traduit un équilibre statique des forces. Lorsqu'un solide indéformable est soumis à deux forces extérieures, son équilibre exige des conditions mathématiques et géométriques très précises que nous étudions dans cette leçon.",
  fullText: `Leçon 12 : Équilibre d'un solide soumis à deux forces : conditions d'équilibre et écriture vectorielle

Introduction :
Un solide est en équilibre statique lorsqu'il est immobile dans un référentiel donné et que toutes les forces qui lui sont appliquées se neutralisent.

I. Conditions d'équilibre d'un solide soumis à deux forces
Lorsqu'un solide indéformable de masse quelconque est soumis à l'action exclusive de deux forces F⃗₁ et F⃗₂, il est en équilibre si et seulement si ces deux forces vérifient simultanément trois conditions :
1. Même droite d'action : Les deux forces sont portées par la même ligne droite géométrique (forces colinéaires de même support).
2. Sens opposés : Une force tire dans une direction et la seconde tire dans le sens exactement inverse.
3. Même intensité : Les valeurs numériques mesurées en Newtons sont strictement égales : F₁ = F₂.

II. Écriture vectorielle fondamentale
La condition d'équilibre s'écrit de manière synthétique et rigoureuse par la relation vectorielle nulle :
F⃗₁ + F⃗₂ = 0⃗   ⟺   F⃗₁ = - F⃗₂

III. Exemples classiques étudiés au BFEM
1. Solide suspendu à un ressort vertical :
Le solide de masse m est soumis à deux forces :
- Son poids P⃗ : force à distance exercée par la Terre (verticale, vers le bas, intensité P = m × g).
- La tension T⃗ du ressort : force de contact exercée par le ressort (verticale, vers le haut, intensité T).
À l'équilibre : P⃗ + T⃗ = 0⃗, d'où T = P = m × g.
Si le ressort a une raideur k et un allongement ΔL, alors T = k × ΔL = m × g.

2. Solide posé sur un plan horizontal :
Le solide est soumis à son poids P⃗ et à la réaction normale R⃗ de la table :
P⃗ + R⃗ = 0⃗   ⟺   R = P = m × g.`,
  sections: [
    {
      title: '1. Vérification expérimentale des conditions d\'équilibre',
      image: {
        url: SVG_PC3_FIG9_EQUILIBRE_TRAVAIL,
        alt: 'Figure 9A : Équilibre sous deux forces',
        caption:
          'Figure 9A : Conditions d\'équilibre d\'un solide soumis à deux forces : même droite d\'action, sens opposés et même intensité (T⃗ + P⃗ = 0⃗).'
      },
      subsections: [
        {
          subtitle: 'Protocole opératoire obligatoire : Solide léger entre deux dynamomètres',
          content: [
            "• Matériel : Feuille de carton rigide de masse négligeable munie de deux anneaux A et B, deux dynamomètres identiques D₁ et D₂, table horizontale.",
            "• Expérience : Tirer sur les dynamomètres pour immobiliser le carton au repos.",
            "• Constatations :",
            "  1. La droite (AB) coïncide rigoureusement avec l'axe des deux ressorts (même droite d'action).",
            "  2. Les indications des deux dynamomètres sont strictement identiques : D₁ = D₂.",
            "  3. Les flèches sont orientées en sens contraires.",
            "• Validation : La relation F⃗₁ + F⃗₂ = 0⃗ est confirmée avec une exactitude totale."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Équilibre d\'un solide suspendu à un ressort',
          content: [
            "Énoncé : Un solide S de masse m = 250 g est suspendu à l'extrémité inférieure d'un ressort vertical de raideur k = 50 N/m. Le système est en équilibre. On donne g = 10 N/kg.",
            "1. Quelles sont les forces appliquées au solide S ?",
            "2. Donner les conditions d'équilibre de S et en déduire la tension T du ressort.",
            "3. Calculer l'allongement ΔL du ressort en cm.",
            "Corrigé :",
            "1. Le solide est soumis à son poids P⃗ et à la tension T⃗ du ressort.",
            "2. À l'équilibre : P⃗ + T⃗ = 0⃗, donc T = P = m × g.",
            "   m = 250 g = 0,25 kg ➔ P = 0,25 × 10 = 2,5 N. Donc T = 2,5 N.",
            "3. T = k × ΔL ➔ ΔL = T / k = 2,5 / 50 = 0,05 m = 5 cm."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Équilibre sous deux forces',
    root: 'Équilibre Statique',
    branches: [
      {
        name: 'DROITE D\'ACTION',
        subtitle: 'Colinéarité',
        items: ['Même droite de support', 'Les forces sont alignées']
      },
      {
        name: 'SENS OPPOSÉS',
        subtitle: 'Direction opposée',
        items: ['L\'une vers le haut, l\'autre vers le bas', 'Neutralisation mutuelle']
      },
      {
        name: 'MÊME INTENSITÉ',
        subtitle: 'Égalité scalaire',
        items: ['F₁ = F₂ (en Newtons)', 'Écriture : F⃗₁ + F⃗₂ = 0⃗']
      }
    ]
  },
  conclusion:
    "L'équilibre statique d'un solide soumis à deux forces exige que ces forces soient colinéaires, opposées et de même intensité (F⃗₁ + F⃗₂ = 0⃗)."
};

// -------------------------------------------------------------------------
// LEÇON 13 : TRAVAIL ET PUISSANCE MÉCANIQUES (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_13_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-13',
  number: 'Leçon 13 (Physique)',
  title: 'Travail et puissance mécaniques : travail moteur, résistant, travail du poids et formule P = W / t',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Lorsqu'un ouvrier hisse une charge de ciment sur un chantier de Dakar ou qu'un moteur de camion entraîne le véhicule le long d'une route nationale, une force est exercée au cours d'un déplacement. En physique, l'énergie transférée lors de ce mouvement s'appelle le travail mécanique. Cette leçon définit le travail d'une force constante, analyse ses trois natures (moteur, résistant ou nul), établit l'expression du travail du poids et relie le travail à la puissance développée.",
  fullText: `Leçon 13 : Travail et puissance mécaniques : travail moteur, résistant, travail du poids et formule P = W / t

Introduction :
Une force n'effectue un travail mécanique que si son point d'application se déplace au cours du temps. Une force appliquée à un solide immobile ne fournit aucun travail (W = 0).

I. Le travail d'une force constante
1. Définition et formule :
Une force constante F⃗ dont le point d'application effectue un déplacement rectiligne de longueur L dans sa propre direction produit un travail noté W :
W = F × L
Unités SI :
- F : intensité de la force en Newtons (N).
- L : longueur du déplacement en mètres (m).
- W : travail mécanique en Joules (symbole : J).

2. Les trois types de travail selon le sens de la force :
- Travail MOTEUR (W > 0) : La force agit dans le même sens que le déplacement (elle favorise le mouvement). Formule : W = + F × L.
- Travail RÉSISTANT (W < 0) : La force agit en sens opposé au déplacement (elle s'oppose au mouvement, ex : frottements). Formule : W = - F × L.
- Travail NUL (W = 0) : La force est perpendiculaire à la direction du déplacement. Une force perpendiculaire à la trajectoire ne travaille pas.

II. Le travail du poids d'un corps
Lorsqu'un corps de masse m passe d'une altitude z_A à une altitude z_B, le travail de son poids P⃗ ne dépend que de la dénivellation verticale h = |z_A - z_B| et est INDÉPENDANT du chemin suivi :
- En descente (chute) : Le poids favorise le mouvement (moteur) :
  W(P⃗) = + m × g × h   (W > 0).
- En montée (soulèvement) : Le poids s'oppose au mouvement (résistant) :
  W(P⃗) = - m × g × h   (W < 0).

III. La puissance mécanique
1. Définition :
La puissance mécanique mesure la rapidité avec laquelle un travail est accompli :
P = W / t
- W en Joules (J).
- t en secondes (s).
- P en Watts (symbole : W) [1 kW = 1 000 W ; 1 cheval-vapeur ch ≈ 736 W].

2. Puissance d'un mobile à vitesse constante v :
P = F × v   (avec F en N et v en m/s).`,
  sections: [
    {
      title: '1. Analyse des types de travail et du travail du poids',
      image: {
        url: SVG_PC3_FIG9_EQUILIBRE_TRAVAIL,
        alt: 'Figure 9B : Travail mécanique moteur, résistant et travail du poids',
        caption:
          'Figure 9B : Travail moteur (W = +F×L), travail résistant négatif, travail nul perpendiculaire et travail du poids indépendant du chemin W(P) = ± m·g·h.'
      },
      subsections: [
        {
          subtitle: 'Synthèse des formules de travail et puissance pour le BFEM',
          content: [
            "• Travail colinéaire : W = F × L (Joules).",
            "• Travail du poids : W(P⃗) = ± m × g × h (+ en descente, - en montée).",
            "• Puissance moyenne : P = W / t (Watts, t en s).",
            "• Puissance et vitesse : P = F × v (Watts, v en m/s)."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Grue de chantier hissant une charge',
          content: [
            "Énoncé : Une grue soulève verticalement une palette de parpaings de masse m = 500 kg sur une hauteur h = 12 m à vitesse constante en t = 20 s. On donne g = 10 N/kg.",
            "1. Calculer le travail du poids de la charge lors de cette montée. Est-il moteur ou résistant ?",
            "2. Calculer le travail fourni par le câble de la grue.",
            "3. Déterminer la puissance mécanique développée par le moteur de la grue en Watts puis en kilowatts.",
            "Corrigé :",
            "1. En montée, le poids est résistant : W(P⃗) = - m × g × h = - 500 × 10 × 12 = - 60 000 J (- 60 kJ).",
            "2. La force de traction compense le poids (vitesse constante) : W(T⃗) = + m × g × h = + 60 000 J (+ 60 kJ).",
            "3. P = W / t = 60 000 J / 20 s = 3 000 W = 3 kW."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Travail et Puissance',
    root: 'Énergie Mécanique',
    branches: [
      {
        name: 'TRAVAIL MOTEUR / RÉSISTANT',
        subtitle: 'W = F × L',
        items: ['Moteur : W > 0 (même sens)', 'Résistant : W < 0 (sens contraire)', 'Nul : force perpendiculaire']
      },
      {
        name: 'TRAVAIL DU POIDS',
        subtitle: 'W(P) = ± m·g·h',
        items: ['Indépendant du chemin suivi', 'Descente : moteur (+mgh)', 'Montée : résistant (-mgh)']
      },
      {
        name: 'PUISSANCE (P)',
        subtitle: 'Rapidité du travail',
        items: ['P = W / t (en Watts)', 'P = F × v (en régime uniforme)', '1 kW = 1 000 W']
      }
    ]
  },
  conclusion:
    "Le travail mécanique quantifie l'énergie transférée par une force au cours d'un déplacement. Le travail du poids (W = ±mgh) est indépendant de la trajectoire, et la puissance (P = W/t) mesure le rythme de transfert de cette énergie."
};

// Rétrocompatibilité : export de l'ancienne variable combinée
export const LESSON_12_13_PC_3EME: LessonContent = LESSON_12_PC_3EME;

// -------------------------------------------------------------------------
// LEÇON 14 : LE COURANT ALTERNATIF SINUSOÏDAL ET L'OSCILLOSCOPE (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_14_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-14',
  number: 'Leçon 14 (Physique)',
  title: 'Le courant alternatif sinusoïdal et l\'oscilloscope : période, fréquence, tensions maximale et efficace',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "À la différence d'une pile ou d'une batterie qui délivrent un courant continu à tension constante, les prises murales du réseau électrique de la Senelec fournissent un courant alternatif sinusoïdal. Sa tension change constamment de sens et de grandeur selon un cycle régulier. Grâce à un instrument de mesure visuel appelé oscilloscope, nous visualisons la forme de l'onde sinusoïdale et mesurons ses grandeurs caractéristiques : période, fréquence, tension maximale et tension efficace.",
  fullText: `Leçon 14 : Le courant alternatif sinusoïdal et l'oscilloscope : période, fréquence, tensions maximale et efficace

Introduction :
Une tension alternative sinusoïdale est une tension périodique dont la valeur oscille régulièrement de part et d'autre de zéro selon une courbe sinusoïdale.

I. L'oscilloscope et la visualisation d'une tension
L'oscilloscope permet de visualiser sur un écran quadrillé les variations de la tension u(t) en fonction du temps :
- Axe vertical (ordonnées) : mesure de la tension. Chaque division (div) correspond à la sensibilité verticale S_v (en V/div).
- Axe horizontal (abscisses) : mesure du temps. Chaque division correspond à la sensibilité horizontale ou balayage S_h (en ms/div ou s/div).

II. Grandeurs caractéristiques fondamentales
1. La période (T) :
C'est la durée du plus petit motif qui se reproduit identique à lui-même (un cycle complet comprenant une alternance positive et une alternance négative).
T = X × S_h
- X : nombre de divisions horizontales pour un motif.
- S_h : sensibilité horizontale (balayage).
- Unité légale : la seconde (s) [Rappel : 1 ms = 0,001 s = 10⁻³ s].

2. La fréquence (f) :
C'est le nombre de périodes effectuées par seconde. Elle est l'inverse de la période :
f = 1 / T
- Unité légale : le Hertz (symbole : Hz).
- Fréquence du réseau Senelec au Sénégal : f = 50 Hz (la tension effectue 50 cycles complets par seconde, soit une période T = 1 / 50 = 0,02 s = 20 ms).

3. La tension maximale ou tension crête (Umax) :
C'est la valeur maximale atteinte par la tension au sommet de la crête :
Umax = Y × S_v
- Y : nombre de divisions verticales mesurées depuis l'axe central.
- S_v : sensibilité verticale en V/div.

4. La tension efficace (Ueff) :
C'est la tension mesurée directement par un voltmètre branché en mode alternatif (AC).
Relation mathématique fondamentale :
Umax = Ueff × √2 ≈ 1,414 × Ueff   ⟺   Ueff = Umax / √2 ≈ Umax / 1,414
Sur le réseau domestique Senelec : Ueff = 230 V, ce qui donne une tension de crête Umax ≈ 230 × 1,414 ≈ 325 V.`,
  sections: [
    {
      title: '1. Analyse d\'un oscillogramme sinusoïdal',
      image: {
        url: SVG_PC3_FIG10_ELECTRICITE,
        alt: 'Figure 10A : Oscillogramme d\'une tension alternative sinusoïdale',
        caption:
          'Figure 10A : Oscillogramme d\'une tension sinusoïdale montrant la période T (axe horizontal) et la tension crête Umax (axe vertical).'
      },
      subsections: [
        {
          subtitle: 'Protocole opératoire : Mesure de T, f, Umax et vérification de Ueff',
          content: [
            "• Matériel : Générateur basse fréquence (GBF) sinusoïdal, oscilloscope, voltmètre numérique AC.",
            "• Réglages : Sensibilité verticale S_v = 5 V/div ; Balayage horizontal S_h = 5 ms/div.",
            "• Mesures sur l'écran :",
            "  - Déviation verticale crête : Y = 2 div ➔ Umax = 2 × 5 = 10 V.",
            "  - Motif horizontal complet : X = 4 div ➔ T = 4 × 5 ms = 20 ms = 0,02 s.",
            "  - Fréquence : f = 1 / 0,02 = 50 Hz.",
            "• Mesure au voltmètre AC : Ueff = 7,07 V. On vérifie que Umax / Ueff = 10 / 7,07 ≈ 1,414 = √2."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Détermination des caractéristiques d\'une tension au BFEM',
          content: [
            "Énoncé : Sur l'écran d'un oscilloscope, une tension sinusoïdale occupe 3 divisions de part et d'autre de l'axe central. Un motif complet occupe 5 divisions horizontales. Sensibilités : S_v = 4 V/div et S_h = 2 ms/div.",
            "1. Calculer la tension maximale Umax.",
            "2. En déduire la tension efficace Ueff.",
            "3. Calculer la période T en secondes, puis la fréquence f.",
            "Corrigé :",
            "1. Umax = Y × S_v = 3 div × 4 V/div = 12 V.",
            "2. Ueff = Umax / √2 = 12 / 1,414 ≈ 8,49 V.",
            "3. T = X × S_h = 5 div × 2 ms/div = 10 ms = 0,01 s.",
            "   f = 1 / T = 1 / 0,01 = 100 Hz."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Tension alternative sinusoïdale',
    root: 'Oscilloscope & Courant AC',
    branches: [
      {
        name: 'AXE HORIZONTAL (TEMPS)',
        subtitle: 'Période et Fréquence',
        items: ['T = X × S_h (en secondes)', 'f = 1 / T (en Hertz)', 'Senelec : f = 50 Hz, T = 20 ms']
      },
      {
        name: 'AXE VERTICAL (TENSION)',
        subtitle: 'Umax et Ueff',
        items: ['Umax = Y × S_v (en Volts)', 'Ueff = Umax / √2', 'Ueff mesurée au voltmètre AC']
      },
      {
        name: 'RELATION DU BFEM',
        subtitle: 'Rapport √2',
        items: ['Umax ≈ 1,414 × Ueff', 'Réseau Senelec : Ueff = 230 V ➔ Umax ≈ 325 V']
      }
    ]
  },
  conclusion:
    "Une tension sinusoïdale se caractérise à l'oscilloscope par sa période T (et fréquence f = 1/T) et par sa tension crête Umax liée à la tension efficace du voltmètre par la relation universelle Umax = Ueff × √2."
};

// -------------------------------------------------------------------------
// LEÇON 15 : PUISSANCE, ÉNERGIE ÉLECTRIQUE ET SÉCURITÉ (PHYSIQUE)
// -------------------------------------------------------------------------
export const LESSON_15_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-15',
  number: 'Leçon 15 (Physique)',
  title: 'Puissance, énergie électrique, facture Senelec et sécurité des installations domestiques',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Dans tous les foyers sénégalais, le compteur Senelec enregistre jour après jour notre consommation d'énergie électrique en kilowatt-heures. Comprendre la relation entre la puissance nominale des appareils électroménagers et l'énergie facturée à la fin du mois permet de gérer son budget et d'éviter les gaspillages. De plus, l'électricité sous haute tension présente des risques mortels : cette leçon détaille le calcul d'une facture Senelec et les dispositifs essentiels de protection des personnes (phase, neutre, prise de terre et disjoncteur différentiel 30 mA).",
  fullText: `Leçon 15 : Puissance, énergie électrique, facture Senelec et sécurité des installations domestiques

Introduction :
L'énergie électrique consommée par les appareils domestiques dépend de leur puissance électrique et de leur durée d'utilisation.

I. Puissance électrique en régime alternatif
Pour les appareils à effet thermique (lampes, fer à repasser, chauffe-eau, plaques de cuisson) :
P = Ueff × Ieff
- Ueff : tension efficace en Volts (V).
- Ieff : intensité efficace en Ampères (A).
- P : puissance électrique en Watts (symbole : W).

II. Énergie électrique consommée
1. Formule générale :
E = P × t
Unités :
- Si P est en Watts (W) et t en secondes (s), l'énergie E est en JOULES (J).
- Si P est en kilowatts (kW) et t en heures (h), l'énergie E est en KILOWATT-HEURES (kWh).
2. Équivalence fondamentale du BFEM :
1 kWh = 1 000 W × 3 600 s = 3 600 000 Joules = 3,6 × 10⁶ J.

III. Calcul de la facture d'électricité Senelec
1. Le compteur électrique :
Il enregistre la consommation globale du domicile en kWh.
Énergie consommée = Nouvel index - Ancien index.
2. Structure du montant à payer :
- Montant HT = Consommation (kWh) × Prix unitaire du kWh (selon la tranche).
- Redevance fixe d'abonnement et taxe municipale.
- Taxe sur la Valeur Ajoutée : TVA = 18 % du montant HT.
- Montant TTC = Montant HT + TVA + Redevances.

IV. Sécurité des personnes et des installations domestiques
1. Les 3 bornes d'une prise de courant domestique :
- La Phase (fil marron/rouge) : Sous tension dangereuse de 230 V par rapport au sol.
- Le Neutre (fil bleu) : Potentiel proche de 0 V.
- La Terre (fil vert et jaune) : Relié à un piquet conducteur enfoui sous le sol.
2. Les dispositifs de protection obligatoires :
- Le disjoncteur divisionnaire (ou fusible) : Protège contre les surcharges et courts-circuits.
- Le disjoncteur différentiel (30 mA) associé à la prise de terre : Détecte immédiatement toute fuite de courant vers la carcasse métallique d'un appareil et coupe l'alimentation en quelques millisecondes pour éviter une électrocution mortelle.`,
  sections: [
    {
      title: '1. Facture d\'électricité et schéma de protection domestique',
      image: {
        url: SVG_PC3_FIG10_ELECTRICITE,
        alt: 'Figure 10B : Compteur Senelec et sécurité électrique',
        caption:
          'Figure 10B : Schéma de calcul d\'une facture d\'électricité en kWh et principe du disjoncteur différentiel protégeant les personnes contre l\'électrocution.'
      },
      subsections: [
        {
          subtitle: 'Règles de sécurité indispensables au domicile',
          content: [
            "• Ne jamais toucher un conducteur dénudé sous tension.",
            "• Ne jamais utiliser d'appareil électrique avec les mains mouillées ou les pieds nus dans l'eau.",
            "• Relier impérativement la carcasse de tout appareil métallique à la prise de terre munie d'un disjoncteur différentiel 30 mA."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Facture Senelec d\'une famille sénégalaise',
          content: [
            "Énoncé : Une maison dispose de 6 lampes de 25 W allumées 5 h par jour, et d'un réfrigérateur de 200 W fonctionnant 10 h par jour.",
            "1. Calculer l'énergie consommée par jour en kWh.",
            "2. En déduire la consommation pour un mois de 30 jours.",
            "3. Si le prix du kWh est de 100 FCFA HT et la TVA est de 18 %, calculer le montant total TTC de la facture mensuelle.",
            "Corrigé :",
            "1. Lampes : 6 × 25 W × 5 h = 750 Wh. Réfrigérateur : 200 W × 10 h = 2 000 Wh.",
            "   E_jour = 750 + 2 000 = 2 750 Wh = 2,75 kWh/jour.",
            "2. E_mois = 2,75 × 30 = 82,5 kWh.",
            "3. Montant HT = 82,5 × 100 = 8 250 FCFA. TVA = 8 250 × 0,18 = 1 485 FCFA. Montant TTC = 8 250 + 1 485 = 9 735 FCFA."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Énergie et sécurité électrique',
    root: 'Électricité Domestique',
    branches: [
      {
        name: 'ÉNERGIE (E = P × t)',
        subtitle: 'Calculs',
        items: ['Joules (J) si t en s', 'kWh si P en kW et t en h', '1 kWh = 3,6 × 10⁶ J']
      },
      {
        name: 'FACTURE SENELEC',
        subtitle: 'Consommation',
        items: ['Index nouveau - Index ancien', 'Montant HT = kWh × tarif', 'Montant TTC = HT + 18% TVA']
      },
      {
        name: 'SÉCURITÉ',
        subtitle: 'Protection des personnes',
        items: ['Phase (230 V) dangereuse', 'Prise de terre', 'Disjoncteur différentiel 30 mA']
      }
    ]
  },
  conclusion:
    "L'énergie électrique consommée E = P × t est facturée en kilowatt-heures par la Senelec. La conformité des installations domestiques avec une prise de terre et un disjoncteur différentiel 30 mA est indispensable pour éliminer les risques d'électrocution."
};

// Rétrocompatibilité : export de l'ancienne variable combinée
export const LESSON_14_15_PC_3EME: LessonContent = LESSON_14_PC_3EME;
