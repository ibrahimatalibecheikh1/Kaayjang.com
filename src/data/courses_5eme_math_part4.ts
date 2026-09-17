import { LessonContent } from './courses';
import {
  SVG_MATH5_FIG4_PARALLELOGRAMME,
  SVG_MATH5_FIG5_CYLINDRE_PRISME
} from './diagrams_5eme_math';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 5ÈME
// PARTIE 4 : GÉOMÉTRIE PLANE & ESPACE (LEÇONS 11 ET 12)
// PROGRAMME OFFICIEL SÉNÉGALAIS & FRANCOPHONE
// INCLUT OBLIGATOIREMENT LES FIGURES 4 ET 5 DU DOCUMENT OFFICIEL
// ET 4 EXERCICES D'APPLICATION COMPLETS AVEC CORRIGÉS DÉTAILLÉS PAR LEÇON
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 11 : LES PARALLÉLOGRAMMES
// -------------------------------------------------------------------------
export const LESSON_11_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-11',
  number: 'Leçon 11',
  title: 'Les Parallélogrammes',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "Le parallélogramme est le quadrilatère central de la géométrie au collège. Il sert de pont direct entre la symétrie centrale et la caractérisation des quadrilatères particuliers usuels : le rectangle, le losange et le carré. Ses multiples propriétés caractéristiques (portant sur les diagonales, les côtés opposés et les angles consécutifs ou opposés) fournissent des méthodes de démonstration très fréquentes dans les examens et concours.",
  fullText: `Leçon 11 : Les Parallélogrammes

Introduction :
Un parallélogramme est un quadrilatère qui possède un centre de symétrie. Ses propriétés remarquables en font la pierre angulaire de l'étude des quadrilatères au collège.

1. Définition et propriétés caractéristiques du parallélogramme
• Définition de base :
Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux :
Dans ABCD : (AB) // (CD) et (AD) // (BC).

• Propriétés directes (Si un quadrilatère est un parallélogramme...) :
1. Diagonales : Ses diagonales se coupent en leur milieu commun O, qui est le centre de symétrie du quadrilatère.
2. Côtés opposés : Ses côtés opposés ont deux à deux la même longueur (AB = CD et BC = AD).
3. Angles opposés : Ses angles opposés ont la même mesure (Â = Ĉ et B̂ = D̂).
4. Angles consécutifs : Deux angles consécutifs quelconques sont toujours supplémentaires (leur somme vaut 180° : Â + B̂ = 180°).

• Propriétés réciproques (Comment prouver qu'un quadrilatère est un parallélogramme ?) :
Pour démontrer qu'un quadrilatère est un parallélogramme, il suffit d'établir UNE SEULE des conditions suivantes :
- Réciproque 1 (par les diagonales) : Si ses diagonales se coupent en leur milieu commun, alors c'est un parallélogramme.
- Réciproque 2 (par les côtés opposés) : Si ses côtés opposés sont parallèles deux à deux, alors c'est un parallélogramme.
- Réciproque 3 (par les longueurs) : Si ses côtés opposés sont de même longueur deux à deux, alors c'est un parallélogramme.
- Réciproque 4 (condition combinée très puissante) : Si un quadrilatère non croisé a DEUX CÔTÉS OPPOSÉS À LA FOIS PARALLÈLES ET DE MÊME LONGUEUR, alors c'est un parallélogramme.

2. Les parallélogrammes particuliers
• Le Rectangle :
- Définition : Parallélogramme ayant au moins un angle droit.
- Propriété spécifique des diagonales : Ses diagonales sont de MÊME LONGUEUR et se coupent en leur milieu.
• Le Losange :
- Définition : Parallélogramme ayant deux côtés consécutifs de même longueur (donc ses 4 côtés sont égaux).
- Propriété spécifique des diagonales : Ses diagonales sont PERPENDICULAIRES et se coupent en leur milieu.
• Le Carré :
- Définition : Quadrilatère qui est À LA FOIS un rectangle et un losange.
- Propriétés : 4 angles droits, 4 côtés égaux, diagonales perpendiculaires, de même longueur et se coupant en leur milieu.

3. Calcul de l'aire d'un parallélogramme
Aire = Base × Hauteur correspondante :
A = b × h (où h est la hauteur perpendiculaire à la base b).`,
  sections: [
    {
      title: '1. Propriétés géométriques et Figure 4 officielle',
      image: {
        url: SVG_MATH5_FIG4_PARALLELOGRAMME,
        alt: 'Figure 4 : Parallélogramme ABCD avec diagonales se coupant en leur milieu O',
        caption:
          'Figure 4 : Parallélogramme ABCD. Les diagonales [AC] et [BD] se coupent en leur milieu commun O (centre de symétrie). Les côtés opposés sont parallèles et de même longueur : AB = CD et AD = BC.'
      },
      subsections: [
        {
          subtitle: 'A. Tableau synthétique des quadrilatères particuliers',
          content: [
            '• Parallélogramme : Diagonales se coupent en leur milieu.',
            '• Rectangle : Parallélogramme + diagonales égales (ou 1 angle droit).',
            '• Losange : Parallélogramme + diagonales perpendiculaires (ou 4 côtés égaux).',
            '• Carré : Rectangle + Losange (diagonales égales, perpendiculaires et de même milieu).'
          ]
        },
        {
          subtitle: 'B. Calcul d\'aire',
          content: [
            'Aire du parallélogramme : A = Base × Hauteur = b × h.',
            'Attention : La hauteur h doit toujours être perpendiculaire à la base choisie.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calcul de longueurs et milieu de diagonales',
          content: [
            'Énoncé : Soit ABCD un parallélogramme de centre O tel que AB = 7 cm, BC = 4,5 cm et AC = 8 cm.',
            '1. Donner les longueurs des côtés CD et AD en justifiant.',
            '2. Calculer la longueur OA.',
            'Corrigé détaillé :',
            '1. Propriété : Dans un parallélogramme, les côtés opposés ont la même longueur.',
            '   Comme ABCD est un parallélogramme : CD = AB = 7 cm et AD = BC = 4,5 cm.',
            '2. Propriété : Les diagonales d\'un parallélogramme se coupent en leur milieu commun.',
            '   Le centre O est donc le milieu de la diagonale [AC] : OA = AC ÷ 2 = 8 ÷ 2 = 4 cm.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Calcul d\'angles dans un parallélogramme',
          content: [
            'Énoncé : Soit MNPQ un parallélogramme tel que l\'angle MNP mesure 65°.',
            '1. Déterminer la mesure de l\'angle opposé MQP en justifiant.',
            '2. Déterminer la mesure de l\'angle consécutif NPQ.',
            'Corrigé détaillé :',
            '1. Propriété : Dans un parallélogramme, deux angles opposés ont la même mesure.',
            '   Les angles MNP et MQP étant opposés : Angle MQP = Angle MNP = 65°.',
            '2. Propriété : Deux angles consécutifs d\'un parallélogramme sont supplémentaires (leur somme vaut 180°).',
            '   Les angles MNP et NPQ sont consécutifs :',
            '   Angle NPQ = 180° - 65° = 115°.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Démonstrations sur les parallélogrammes particuliers',
          content: [
            'Énoncé :',
            '1. Un parallélogramme EFGH a ses diagonales qui mesurent EG = 10 cm et FH = 10 cm. Quelle est la nature précise de EFGH ?',
            '2. Un parallélogramme IJKL a ses diagonales (IK) et (JL) qui sont perpendiculaires. Quelle est la nature précise de IJKL ?',
            'Corrigé détaillé :',
            '1. Propriété : Si un parallélogramme a ses diagonales de même longueur, alors c\'est un RECTANGLE.',
            '   Comme EG = FH = 10 cm, le parallélogramme EFGH est un rectangle.',
            '2. Propriété : Si un parallélogramme a ses diagonales perpendiculaires, alors c\'est un LOSANGE.',
            '   Comme (IK) ⟂ (JL), le parallélogramme IJKL est un losange.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Calcul d\'aire et problème',
          content: [
            'Énoncé : Un champ a la forme d\'un parallélogramme ABCD. La base [AB] mesure 85 mètres et la hauteur relative à cette base mesure 42 mètres.',
            '1. Calculer l\'aire totale du champ en mètres carrés.',
            '2. Le propriétaire vend ce terrain à raison de 15 000 FCFA le mètre carré. Quel est le prix total de la vente ?',
            'Corrigé détaillé :',
            '1. Formule de l\'aire du parallélogramme : Aire = Base × Hauteur.',
            '   Aire = 85 m × 42 m = 3 570 m².',
            '2. Prix de vente : Prix = 3 570 × 15 000 = 53 550 000 FCFA.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Famille des parallélogrammes',
    root: 'Quadrilatères',
    branches: [
      {
        name: 'Parallélogramme',
        subtitle: 'Base commune',
        items: ['Diagonales de même milieu O', 'Côtés opposés // et égaux', 'Angles consécutifs = 180°']
      },
      {
        name: 'Rectangle',
        subtitle: 'Angles droits',
        items: ['1 angle droit suffit', 'Diagonales de même longueur', 'Aire = Longueur × largeur']
      },
      {
        name: 'Losange & Carré',
        subtitle: 'Côtés égaux',
        items: ['Losange : diagonales ⟂', 'Carré : rectangle + losange réuni', 'Diagonales égales, ⟂ et de même milieu']
      }
    ]
  },
  conclusion:
    "Le parallélogramme unifie les quadrilatères géométriques. La maîtrise de ses diagonales et de ses symétries permet de structurer des démonstrations claires et sans faille."
};

// -------------------------------------------------------------------------
// LEÇON 12 : GÉOMÉTRIE DANS L'ESPACE — PRISME DROIT ET CYLINDRE
// -------------------------------------------------------------------------
export const LESSON_12_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-12',
  number: 'Leçon 12',
  title: 'Géométrie dans l\'espace, prisme droit et cylindre',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "La géométrie dans l'espace permet de passer de la feuille plane en deux dimensions aux solides réels du monde physique à trois dimensions. En 5ème, l'élève étudie la perspective cavalière, la description des prismes droits et des cylindres de révolution, la construction de leurs patrons par pliage, ainsi que les formules universelles de calcul d'aires latérales et de volumes.",
  fullText: `Leçon 12 : Géométrie dans l'espace, prisme droit et cylindre

Introduction :
La géométrie dans l'espace étudie les solides à trois dimensions. En classe de 5ème, l'accent est mis sur deux familles fondamentales de solides droits : les prismes droits et les cylindres de révolution.

1. Règles universelles de la perspective cavalière
La perspective cavalière permet de représenter un solide 3D sur une feuille plane 2D selon des conventions universelles :
- Les arêtes ou contours visibles sont tracés en traits pleins continus.
- Les arêtes ou contours cachés sont impérativement tracés en traits pointillés.
- La face avant (située dans le plan frontal) est représentée en vraie grandeur et sans déformation (les angles droits restent droits).
- Les droites parallèles dans la réalité restent représentées par des droites parallèles (conservation du parallélisme).
- Les fuyantes (arêtes s'éloignant vers l'arrière) sont inclinées d'un angle de fuite (souvent 30° ou 45°) et sont raccourcies selon un coefficient de réduction (généralement 0,5 à 0,7).

2. Le prisme droit
• Description :
Un prisme droit est un solide qui possède :
- Deux bases polygonales identiques (triangles, quadrilatères, pentagones...) situées dans deux plans parallèles.
- Des faces latérales qui sont TOUTES des RECTANGLES.
- Des arêtes latérales perpendiculaires aux deux bases et toutes de même longueur (cette longueur commune est la hauteur h du prisme).
• Patron d'un prisme droit :
Le patron d'un prisme droit se compose d'une longue bande rectangulaire (dont la longueur est égale au périmètre de la base et la largeur à la hauteur h) et des deux bases polygonales rattachées.

3. Le cylindre de révolution
• Description :
Un cylindre de révolution est le solide engendré par la rotation complète d'un rectangle autour de l'un de ses côtés fixes, appelé axe du cylindre.
Il possède :
- Deux bases qui sont des disques superposables de même rayon R, situés dans des plans parallèles.
- Une surface latérale courbe qui, une fois déroulée à plat, forme un grand rectangle parfait.
• Patron du cylindre de révolution :
Le patron se compose :
- D'un rectangle de hauteur h et dont la longueur L est exactement égale au périmètre du cercle de base :
  L = 2 × π × R.
- De deux disques de rayon R tangents au rectangle.

4. Formules indispensables de calcul d'aires et de volumes
Soit B l'aire de la base et h la hauteur du solide :
• Aire latérale :
L'aire latérale correspond à la surface entourant le solide (sans les deux bases) :
Aire latérale = Périmètre de la base × Hauteur
- Pour le cylindre : A_latérale = 2 × π × R × h.
• Aire totale :
Aire totale = Aire latérale + 2 × Aire d'une base.
• Volume V (Formule universelle pour tout solide droit) :
Volume = Aire de la base × Hauteur
V = B × h
- Pour le cylindre de rayon R : B = π × R², donc :
  V_cylindre = π × R² × h.
• Unités de volume et de contenance :
1 L (litre) = 1 dm³ = 1 000 cm³ ; 1 m³ = 1 000 L.`,
  sections: [
    {
      title: '1. Représentation 3D, patrons et Figure 5 officielle',
      image: {
        url: SVG_MATH5_FIG5_CYLINDRE_PRISME,
        alt: 'Figure 5 : Perspective cavalière et patron d\'un cylindre de révolution',
        caption:
          'Figure 5 : Cylindre de révolution en perspective cavalière (rayon R, hauteur h) et son patron déroulé. La longueur du rectangle latéral déroulé est égale au périmètre du disque de base : L = 2 × π × R.'
      },
      subsections: [
        {
          subtitle: 'A. Déroulement du patron du cylindre',
          content: [
            'Le rectangle latéral a pour dimensions la hauteur h et la circonférence de base 2πR.',
            'Si la longueur du rectangle n\'est pas exactement égale à 2πR, le patron ne pourra pas se refermer correctement sur les disques.'
          ]
        },
        {
          subtitle: 'B. Formule universelle du volume droit',
          content: [
            'Pour TOUT prisme droit ou cylindre :',
            'Volume = Aire de la Base × Hauteur (V = B × h).',
            'Cylindre : V = π × R² × h (avec π ≈ 3,14 ou valeur exacte π).'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calcul du patron d\'un cylindre de révolution',
          content: [
            'Énoncé : On souhaite fabriquer le patron d\'un cylindre de révolution de rayon de base R = 3 cm et de hauteur h = 7 cm (prendre π ≈ 3,14).',
            '1. Calculer la circonférence exacte du disque de base, puis sa valeur approchée au dixième de cm.',
            '2. Quelles sont les dimensions du rectangle formant la surface latérale déroulée ?',
            'Corrigé détaillé :',
            '1. Périmètre de la base : P = 2 × π × R = 2 × π × 3 = 6π cm.',
            '   Valeur approchée : P ≈ 6 × 3,14 = 18,84 cm ≈ 18,8 cm.',
            '2. Le rectangle formant la surface latérale déroulée a pour dimensions :',
            '   - Longueur L = 2 × π × R ≈ 18,84 cm.',
            '   - Largeur (hauteur du cylindre) h = 7 cm.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Aire latérale et aire totale d\'un cylindre',
          content: [
            'Énoncé : Une boîte de conserve cylindrique a un diamètre de 10 cm et une hauteur de 12 cm.',
            '1. Quel est son rayon R ?',
            '2. Calculer son aire latérale en fonction de π, puis au cm² près.',
            '3. Calculer l\'aire totale de métal nécessaire à sa fabrication.',
            'Corrigé détaillé :',
            '1. Le rayon R est la moitié du diamètre : R = 10 ÷ 2 = 5 cm.',
            '2. Aire latérale = 2 × π × R × h = 2 × π × 5 × 12 = 120π cm².',
            '   Valeur approchée : 120 × 3,14 = 376,8 cm² ≈ 377 cm².',
            '3. Aire des deux bases : Chaque disque a pour aire B = π × R² = π × 5² = 25π cm².',
            '   Aire des deux bases = 2 × 25π = 50π cm².',
            '   Aire totale = Aire latérale + 2 × B = 120π + 50π = 170π cm² ≈ 533,8 cm².'
          ]
        },
        {
          subtitle: 'Exercice 3 : Volume d\'un prisme droit à base triangulaire',
          content: [
            'Énoncé : Un prisme droit a pour base un triangle rectangle dont les côtés de l\'angle droit mesurent 6 cm et 8 cm. La hauteur du prisme est de 15 cm.',
            '1. Calculer l\'aire de la base triangulaire.',
            '2. Calculer le volume de ce prisme droit en cm³.',
            'Corrigé détaillé :',
            '1. La base est un triangle rectangle. Son aire est donnée par :',
            '   Aire de base B = (base × hauteur) ÷ 2 = (6 × 8) ÷ 2 = 48 ÷ 2 = 24 cm².',
            '2. Volume du prisme droit : V = B × h = 24 cm² × 15 cm = 360 cm³.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Problème concret de contenance et citerne cylindrique',
          content: [
            'Énoncé : Une citerne cylindrique installée dans une ferme a un rayon intérieur R = 1,2 m et une hauteur intérieure h = 2,5 m. (Prendre π ≈ 3,14).',
            '1. Calculer le volume intérieur de la citerne en m³.',
            '2. Combien de litres d\'eau cette citerne peut-elle contenir au maximum ?',
            'Corrigé détaillé :',
            '1. Formule du volume du cylindre : V = π × R² × h.',
            '   V = 3,14 × (1,2)² × 2,5 = 3,14 × 1,44 × 2,5 = 3,14 × 3,6 = 11,304 m³.',
            '2. Conversion en litres : On sait que 1 m³ = 1 000 dm³ = 1 000 litres.',
            '   Capacité maximale = 11,304 × 1 000 = 11 304 litres d\'eau.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse des solides de l\'espace',
    root: 'Géométrie dans l\'espace 5ème',
    branches: [
      {
        name: 'Perspective cavalière',
        subtitle: 'Règles de tracé',
        items: ['Faces avant en vraie grandeur', 'Arêtes cachées en pointillés', 'Conservation du parallélisme']
      },
      {
        name: 'Prisme droit',
        subtitle: 'Bases polygonales',
        items: ['2 bases identiques parallèles', 'Faces latérales rectangulaires', 'Arêtes latérales = hauteur h']
      },
      {
        name: 'Cylindre de révolution',
        subtitle: 'Bases circulaires',
        items: ['2 disques parallèles de rayon R', 'Patron : rectangle 2πR × h', 'Volume = π × R² × h']
      }
    ]
  },
  conclusion:
    "La maîtrise de la perspective cavalière, des patrons et de la formule universelle V = Base × Hauteur permet d'aborder avec confiance les solides complexes et les calculs de capacité industrielle."
};
