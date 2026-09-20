import { LessonContent } from './courses';
import {
  SVG_SVT_3EME_DIGESTION
} from './diagrams_3eme_svt';

// =========================================================================
// SVT 3ÈME - SCIENCES DE LA VIE
// LEÇONS 23 À 26 : NUTRITION, DIGESTION, ABSORPTION ET HYGIÈNE ALIMENTAIRE
// COURS INTÉGRAUX DÉTAILLÉS CONFORMES AU PROGRAMME BFEM DU SÉNÉGAL
// =========================================================================

export const LESSON_23_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-23',
  number: 'Leçon 23',
  title: 'LES ALIMENTS ET LES BESOINS NUTRITIONNELS DE L’HOMME',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Pour maintenir ses fonctions vitales, assurer sa croissance et fournir l’énergie nécessaire à ses activités quotidiennes, l’organisme humain doit puiser dans son environnement des substances nutritives : les aliments. L’analyse biochimique révèle que les aliments que nous consommons sont des mélanges complexes composés d’aliments simples minéraux et organiques. Une alimentation saine et équilibrée doit couvrir précisément les dépenses énergétiques et qualitatives de chaque individu.",
  fullText: `L’étude biochimique des aliments permet de comprendre leur rôle spécifique dans le métabolisme corporel.

I. COMPOSITION CHIMIQUE DES ALIMENTS
Un aliment composé (pain, lait, viande, riz) est constitué de plusieurs aliments simples que l’on peut mettre en évidence par des réactions chimiques caractéristiques :
1. Les Aliments Simples Minéraux :
- L’Eau : constituant majeur du corps humain (environ 65 % du poids corporel). Mise en évidence : la condensation de buée sur les parois d’un tube à essai lorsqu’on chauffe modérément un aliment.
- Les Sels Minéraux :
  * Les Chlorures (Cl-) : précipité blanc qui noircit à la lumière en présence de Nitrate d’argent (AgNO3).
  * Le Calcium (Ca2+) : précipité blanc en présence d’Oxalate d’ammonium.
  * Le Fer (Fe) : indispensable à la fabrication de l’hémoglobine des hématies.
  * L’Iode (I) : nécessaire au fonctionnement de la glande thyroïde.

2. Les Aliments Simples Organiques :
- Les Glucides (Sucres) :
  * Les sucres simples réducteurs (Glucose, Maltose) : test à la liqueur de Fehling à chaud produisant un précipité rouge brique caractéristique.
  * Les glucides complexes (Amidon) : coloration bleue-noire intense en présence d’eau iodée (lugol).
- Les Lipides (Matières grasses) :
  * Taches translucides indélébiles qui ne disparaissent pas au séchage sur du papier filtre.
  * Solubles dans les solvants organiques (éther, acétone), insolubles dans l’eau.
- Les Protides (Protéines) :
  * Réaction du Biuret : coloration violette après ajout de sulfate de cuivre et de soude concentrée.
  * Réaction Xanthoprotéique : coloration jaune intense en présence d’acide nitrique concentré, virant à l’orange avec l’ammoniaque.
  * Coagulation thermique : précipitation en grumeaux blancs sous l’effet de la chaleur (ex : blanc d’œuf).

II. CLASSIFICATION FONCTIONNELLE DES ALIMENTS
Selon leur utilisation par les cellules du corps, les aliments simples se classent en trois groupes fonctionnels :
1. Les Aliments Énergétiques :
Fournissent le carburant nécessaire au travail musculaire, au fonctionnement des organes et au maintien de la température corporelle (thermorégulation à 37°C).
- Les Glucides : carburant d’utilisation rapide (1 g de glucide libère 17 kJ ou 4 kcal).
- Les Lipides : carburant de réserve à très haut rendement énergétique (1 g de lipide libère 38 kJ ou 9 kcal).
2. Les Aliments Bâtisseurs ou Plastiques :
Fournissent les matériaux de construction pour la croissance du squelette et des muscles chez l’enfant et pour le renouvellement permanent des cellules usées chez l’adulte.
- Les Protides (acides aminés).
- Les Sels minéraux de Calcium et de Phosphore (édification des os et des dents).
3. Les Aliments Fonctionnels ou Protecteurs :
Indispensables en petites quantités pour réguler les réactions métaboliques et protéger l’organisme contre les infections et les carences.
- Les Vitamines (vitamine A pour la vue, vitamine C anti-infectieuse, vitamine D pour la fixation osseuse du calcium).
- Les Fibres végétales (cellulose) facilitant le transit intestinal.
- Les Sels minéraux et oligo-éléments.

III. LES BESOINS ÉNERGÉTIQUES ET LE MÉTABOLISME DE BASE
1. La Dépense Énergétique Totale (DET) :
Elle correspond à la somme des dépenses énergétiques de l’organisme au cours d’une journée (24 heures) :
- Le Métabolisme de Base (MB) : dépense minimale incompressible nécessaire pour maintenir en vie l’organisme au repos complet, à jeun depuis 12 heures, à température neutre (travail du cœur, respiration, activité cérébrale, tonus musculaire). Il représente environ 60 à 70 % de la dépense totale.
- Le travail musculaire lié aux activités physiques et professionnelles.
- La thermorégulation (lutte contre le froid ou la chaleur excessive).
- L’action dynamique spécifique des aliments (travail de digestion).
2. Variation des besoins :
Les besoins énergétiques varient selon : l’âge (plus élevés chez l’adolescent en pleine croissance), le sexe (plus élevés chez l’homme en raison d’une masse musculaire plus développée), l’activité physique, le climat et les états physiologiques particuliers (femme enceinte ou allaitante).`,
  sections: [
    {
      title: 'I. Mise en Évidence Expérimentale des Aliments Simples',
      content: [
        'Les aliments composés résultent de l’assemblage d’eau, sels minéraux, glucides, lipides et protides.',
        'La liqueur de Fehling à chaud révèle les sucres réducteurs, l’eau iodée détecte l’amidon, et le réactif du Biuret met en évidence les liaisons peptidiques des protéines.'
      ],
      table: {
        headers: ['Aliment simple recherché', 'Réactif chimique utilisé', 'Condition expérimentale', 'Résultat caractéristique positif'],
        rows: [
          ['Amidon (glucide complexe)', 'Eau iodée (Lugol)', 'À froid sur coupe ou solution', 'Coloration bleu-nuit / violette foncée'],
          ['Glucose (sucre réducteur)', 'Liqueur de Fehling', 'Chauffage au bec Bunsen', 'Précipité rouge brique franc'],
          ['Protéines (protides)', 'Sulfate de cuivre + Soude (Biuret)', 'À froid', 'Coloration violette persistante'],
          ['Protéines', 'Acide nitrique concentré', 'Chauffage léger', 'Coloration jaune intense (Xanthoprotéique)'],
          ['Lipides (graisses)', 'Frottement sur papier absorbant', 'Séchage à l’air chaud', 'Tache translucide permanente'],
          ['Chlorures (sels minéraux)', 'Nitrate d’argent (AgNO3)', 'À froid', 'Précipité blanc noircissant au soleil']
        ]
      }
    },
    {
      title: 'II. Les Trois Grandes Fonctions Biologiques des Aliments',
      content: [
        'Aliments énergétiques (glucides, lipides) pour alimenter le moteur cellulaire.',
        'Aliments bâtisseurs (protéines, calcium) pour construire et régénérer les tissus.',
        'Aliments fonctionnels et protecteurs (vitamines, fibres, eau) pour orchestrer l’homéostasie.'
      ]
    }
  ],
  diagram: {
    title: 'Les Aliments Simples et Leurs Rôles',
    root: 'NUTRITION HUMAINE',
    branches: [
      {
        name: 'Familles Nutritives',
        subtitle: 'Classification biochimique',
        items: ['Minéraux : Eau, Calcium, Fer, Iode', 'Glucides : Glucose & Amidon (17 kJ/g)', 'Lipides : Graisses de réserve (38 kJ/g)', 'Protides : Acides aminés bâtisseurs']
      },
      {
        name: 'Besoins Métaboliques',
        subtitle: 'Dépenses corporelles',
        items: ['Métabolisme de Base (60-70% vital)', 'Activité physique & croissance', 'Thermorégulation à 37°C', 'Tests : Fehling, Eau iodée, Biuret']
      }
    ]
  },
  conclusion: "La nutrition fournit à l’organisme les briques moléculaires et l’énergie indispensables à la vie. La connaissance biochimique des aliments est la base d’une gestion rationnelle de l’équilibre alimentaire."
};

export const LESSON_24_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-24',
  number: 'Leçon 24',
  title: 'LA DIGESTION DES ALIMENTS DANS LE TUBE DIGESTIF',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Les aliments que nous mangeons sont constitués de macromolécules complexes, volumineuses et insolubles, totalement incapables de traverser la barrière de la paroi intestinale pour rejoindre le sang. La digestion est l’ensemble des transformations mécaniques et chimiques successives qui découpent ces grosses molécules alimentaires en molécules élémentaires simples, solubles et assimilables par l’organisme : les nutriments. Ce processus est catalysé par des agents biologiques spécialisés d’une efficacité redoutable : les enzymes digestives.",
  fullText: `La digestion assure la simplification moléculaire progressive des aliments le long du tube digestif.

I. ANATOMIE DE L’APPAREIL DIGESTIF
L’appareil digestif comprend deux entités anatomiques coordonnées :
1. Le Tube Digestif :
Long canal d’environ 8 à 9 mètres de long chez l’adulte, comprenant successivement :
- La Bouche (cavité buccale garnie de dents et de la langue).
- Le Pharynx (carrefour aéro-digestif avec l’épiglotte qui bascule pour protéger les voies respiratoires lors de la déglutition).
- L’Œsophage (tube musculaire droit reliant le pharynx à l’estomac par des contractions péristaltiques).
- L’Estomac (poche musculaire en forme de J d’une capacité de 1,5 litre fermée par deux sphincters : le cardia en haut et le pylore en bas).
- L’Intestin grêle (tube étroit et très replié de 6 mètres, comprenant le duodénum, le jéjunum et l’iléon).
- Le Gros intestin ou Côlon (cadre colique terminé par le rectum et l’anus).

2. Les Glandes Digestives (Glandes annexes et intégrées) :
Organes glandulaires sécrétant des sucs digestifs riches en enzymes :
- Les glandes salivaires (parotides, sous-maxillaires, sublinguales) déversant la salive dans la bouche.
- Les glandes gastriques de la paroi stomacale sécrétant le suc gastrique.
- Le Foie (la plus volumineuse glande de l’organisme) : fabrique la Bile, stockée dans la vésicule biliaire et déversée dans le duodénum via le canal cholédoque. Attention : la bile ne contient AUCUNE enzyme digestive ! Elle contient des sels biliaires qui émulsionnent les graisses en fines gouttelettes pour faciliter l’attaque des lipases.
- Le Pancréas : glande mixte sécrétant le suc pancréatique riche en enzymes alcalines versé dans le duodénum par le canal de Wirsung.
- Les glandes intestinales sécrétant le suc intestinal tout au long du grêle.

II. LES DEUX VOLETS DE LA DIGESTION : MÉCANIQUE ET CHIMIQUE
1. Les actions mécaniques (préparation et brassage) :
- La mastication dentaire broie et déchiquette les aliments solides.
- L’insalivation humidifie et lubrifie le bol alimentaire.
- Le péristaltisme (ondes de contractions des muscles lisses de l’œsophage, de l’estomac et de l’intestin) brasse énergiquement les aliments et les fait progresser d’amont en aval.

2. Les actions chimiques (hydrolyse enzymatique) :
Une enzyme digestive est un biocatalyseur protéique soluble, hautement spécifique (une enzyme ne découpe qu’un seul substrat défini), agissant à température corporelle (37°C) et à un pH optimal, sans être détruite au cours de la réaction.
La digestion chimique se fait par hydrolyse (coupure de liaisons chimiques avec consommation de molécules d’eau).

III. LES ÉTAPES CHRONOLOGIQUES DE LA DIGESTION DANS LES ORGANES
1. Dans la Bouche :
- Action mécanique : mastication et formation du bol alimentaire.
- Action chimique : l’Amylase salivaire découpe l’amidon cuit en molécules plus petites de Maltose (sucre double formé de deux glucoses). Les protides et les lipides ne subissent aucune modification chimique dans la bouche.
- Le bol alimentaire est dégluti vers l’estomac.

2. Dans l’Estomac :
- Action mécanique : brassage intense par la puissante musculeuse gastrique.
- Action chimique : le suc gastrique, très acide grâce à l’acide chlorhydrique (HCl, pH ~ 1,5 à 2), contient une protéase : la Pepsine. La pepsine découpe les longues chaînes protéiques complexes en chaînes plus courtes appelées Peptides (ou polypeptides).
- Le contenu stomacal se transforme en une bouillie semi-liquide acide : le Chyme gastrique, libéré par petites giclées à travers le pylore dans le duodénum.

3. Dans l’Intestin Grêle (Le haut lieu de la digestion terminale) :
Le chyme acide est neutralisé par le suc pancréatique alcalin riche en bicarbonates.
C’est ici qu’intervient la batterie enzymatique complète :
- Digestion des Glucides : l’Amylase pancréatique achève la transformation de l’amidon restant en maltose. Puis la Maltase intestinale découpe le maltose en molécules simples de Glucose.
- Digestion des Protides : la Trypsine (du suc pancréatique) et les Peptidases intestinales découpent les peptides en acides aminés libres.
- Digestion des Lipides : les sels biliaires de la bile émulsionnent les grosses gouttes d’huile en micro-gouttelettes. La Lipase (pancréatique et intestinale) hydrolyse les triglycérides en Acides gras et Glycérol.
- Au terme de ce voyage, dans l’intestin grêle, tous les aliments digestibles ont été transformés en une émulsion laiteuse liquide appelée Chyle intestinal, riche en nutriments prêts à être absorbés.`,
  sections: [
    {
      title: 'I. Organisation Générale du Système Digestif',
      content: [
        'Le système digestif associe le tube digestif (bouche, pharynx, œsophage, estomac, grêle, côlon) et les glandes annexes (salivaires, foie, pancréas).',
        'Les actions mécaniques de broyage et de péristaltisme préparent et favorisent l’hydrolyse chimique par les enzymes.'
      ],
      image: {
        url: SVG_SVT_3EME_DIGESTION,
        alt: 'Schéma anatomique complet de l’appareil digestif humain et simplification enzymatique',
        caption: 'Figure 24.1 : L’appareil digestif humain et la cascade de simplification chimique des macromolécules alimentaires en nutriments élémentaires.'
      }
    },
    {
      title: 'II. Tableau Récapitulatif de la Simplification Enzymatique des Aliments',
      content: [
        'Chaque macromolécule subit une découpe séquentielle par des enzymes spécifiques jusqu’aux nutriments finaux assimilables.'
      ],
      table: {
        headers: ['Aliment initial (Macromolécule)', 'Lieux de digestion successifs', 'Enzymes digestives actives', 'Nutriment final obtenu (forme soluble)'],
        rows: [
          ['Amidon (glucide complexe)', 'Bouche puis Intestin grêle', 'Amylase salivaire, Amylase pancréatique, Maltase', 'Glucose (monosaccharide réducteur)'],
          ['Protéines (protides complexes)', 'Estomac puis Intestin grêle', 'Pepsine gastrique, Trypsine pancréatique, Peptidases', 'Acides aminés libres (20 sortes)'],
          ['Lipides (graisses, triglycérides)', 'Intestin grêle (avec bile)', 'Sels biliaires (émulsion) puis Lipase pancréatique', 'Acides gras et Glycérol'],
          ['Eau, Sels minéraux, Vitamines', 'Tube digestif entier', 'Aucune enzyme nécessaire (déjà de petite taille)', 'Eau, Ions minéraux, Vitamines (absorbés tels quels)'],
          ['Cellulose (fibres végétales)', 'Côlon', 'Non digestible chez l’Homme (absence de cellulase)', 'Excrétée dans les matières fécales (rôle mécanique)']
        ]
      }
    },
    {
      title: 'III. Du Bol Alimentaire au Chyme et au Chyle',
      content: [
        'Dans la bouche : le bol alimentaire lubrifié.',
        'Dans l’estomac : le chyme gastrique acide.',
        'Dans l’intestin grêle : le chyle intestinal fluide, véritable concentré de nutriments dissous.'
      ]
    }
  ],
  diagram: {
    title: 'La Digestion Chimique des Aliments',
    root: 'DIGESTION CHIMIQUE',
    branches: [
      {
        name: '3 Échelons Anatomiques',
        subtitle: 'Transformation continue',
        items: ['Bouche : Amylase salivaire (Amidon -> Maltose)', 'Estomac : Pepsine acide (Protéines -> Peptides)', 'Intestin : Pancréas & Bile (Trypsine, Lipase, Maltase)', 'Chyle intestinal riche en nutriments']
      },
      {
        name: 'Nutriments Finaux',
        subtitle: 'Molécules élémentaires',
        items: ['Glucose (issu de l’amidon)', 'Acides aminés (issus des protéines)', 'Acides gras & glycérol (issus des lipides)', 'Eau, sels minéraux & vitamines intacts']
      }
    ]
  },
  conclusion: "La digestion est une merveille de précision biochimique où les aliments complexes sont méticuleusement scindés en nutriments élémentaires solubles, prêts à franchir la barrière intestinale pour nourrir les cellules."
};

export const LESSON_25_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-25',
  number: 'Leçon 25',
  title: 'L’ABSORPTION INTESTINALE DES NUTRIMENTS',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Une fois achevée la simplification moléculaire dans le duodénum, le chyle intestinal contient une multitude de nutriments dissous dans l’eau. Pour parvenir aux milliards de cellules de notre corps qui en ont un besoin impérieux, ces nutriments doivent quitter la lumière de l’intestin grêle et pénétrer dans le milieu intérieur (le sang et la lymphe) : ce passage physiologique fondamental s’appelle l’Absorption Intestinale. L’intestin grêle présente des adaptations anatomiques remarquables qui en font une surface d’échange exceptionnelle.",
  fullText: `L’absorption intestinale est le transfert des nutriments de la lumière digestive vers les liquides circulants.

I. L’INTESTIN GRÊLE : UNE SURFACE D’ÉCHANGE COLOSSALE
L’intestin grêle est l’organe d’absorption par excellence grâce à une triple amplification de sa surface interne :
1. Les Replis ou Valvules conniventes :
Replis transversaux circulaires de la muqueuse et de la sous-muqueuse visibles à l’œil nu, multipliant la surface par 3.
2. Les Villosités intestinales :
Des millions de minuscules saillies digitiformes (en forme de doigts de gant d’environ 0,5 à 1 mm de hauteur) tapissant entièrement la muqueuse, multipliant la surface par 10.
3. Les Microvillosités (la bordure en brosse) :
Chaque cellule épithéliale superficielle (entérocyte) porte à son pôle apical des milliers de replis microscopiques serrés de sa membrane plasmique, multipliant encore la surface par 20.
Bilan impressionnant : Grâce à cette triple invagination, l’intestin grêle développe une surface d’échange totale estimée à plus de 250 à 300 mètres carrés (l’équivalent de la surface d’un terrain de tennis !) pour une longueur de seulement 6 mètres.

II. STRUCTURE D’UNE VILLOSITÉ INTESTINALE ET PERMÉABILITÉ
Une villosité intestinale est une unité fonctionnelle d’échange parfaite :
- Une paroi extrêmement mince : constituée d’une seule couche de cellules épithéliales (les entérocytes à bordure en brosse) associée à un fin mucus protecteur, réduisant la distance de diffusion à quelques micromètres.
- Une vascularisation sanguine et lymphatique extraordinairement dense : chaque villosité est parcourue en son centre par une anse de capillaires sanguins entourant un vaisseau lymphatique central borgne appelé Chylifère (ou vaisseau chylifère).
- Un débit sanguin élevé : le sang circule en continu, maintenant un gradient de concentration favorable qui attire passivement et activement les nutriments.

III. LES DEUX VOIES D’ABSORPTION DES NUTRIMENTS
Les nutriments quittent la lumière intestinale et empruntent deux voies de transport distinctes :
1. La Voie Sanguine (Nutriments hydrosolubles) :
- Les nutriments solubles dans l’eau : l’Eau, les Sels minéraux, le Glucose, les autres sucres simples, les Acides aminés et les Vitamines hydrosolubles (vitamines B et C).
- Trajet circulatoire : ils traversent les entérocytes et pénètrent directement dans les capillaires sanguins de la villosité -> se rassemblent dans les veinules mésentériques -> rejoignent la Veine Porte Hépatique qui les conduit immédiatement au Foie.
- Le rôle régulateur capital du Foie : le foie filtre le sang, stocke le surplus de glucose sous forme de glycogène (fonction glycogénique) pour maintenir la glycémie constante à environ 1 g/L, traite les acides aminés et neutralise les toxines éventuelles avant de renvoyer les nutriments dans la veine cave inférieure vers le cœur.

2. La Voie Lymphatique (Nutriments liposolubles) :
- Les nutriments solubles dans les graisses : les Acides gras, le Glycérol et les Vitamines liposolubles (A, D, E, K).
- Trajet circulatoire : dans l’entérocyte, les acides gras et le glycérol se réassemblent en micro-gouttelettes lipidiques (chylomicrons) qui sont trop volumineuses pour pénétrer dans les capillaires sanguins. Ils pénètrent donc dans le Vaisseau Chylifère central.
- La lymphe prend un aspect blanc laiteux. Elle circule dans le canal thoracique lymphatique et se déverse dans la circulation sanguine générale au niveau de la Veine sous-clavière gauche à la base du cou, contournant ainsi le foie.

IV. LE RÔLE DU GROS INTESTIN ET LA DÉFÉCATION
Les résidus non digérés (fibres de cellulose, débris cellulaires, bactéries) parviennent dans le gros intestin (côlon).
Le côlon n’absorbe plus de nutriments organiques, mais il réabsorbe activement la majeure partie de l’eau et des sels minéraux restants, évitant la déshydratation mortelle. Les résidus déshydratés forment les matières fécales (selles), stockées dans le rectum puis évacuées à l’extérieur par l’anus lors de la défécation.`,
  sections: [
    {
      title: 'I. Les Caractéristiques Anatomiques de la Surface d’Échange Intestinale',
      content: [
        'L’intestin grêle déploie une surface géante de 300 m² grâce aux valvules conniventes, aux villosités et à la bordure en brosse des entérocytes.',
        'L’extrême minceur de la paroi et l’irrigation sanguine et lymphatique maximale optimisent les flux d’absorption.'
      ]
    },
    {
      title: 'II. Voie Sanguine et Voie Lymphatique d’Absorption',
      content: [
        'Les nutriments solubles dans l’eau transitent par le sang et sont régulés par le foie via la veine porte hépatique.',
        'Les nutriments lipidiques empruntent les vaisseaux chylifères lymphatiques avant de rejoindre la veine sous-clavière.'
      ],
      table: {
        headers: ['Voie d’absorption', 'Nutriments transportés', 'Vaisseau initial de la villosité', 'Organe traversé avant la grande circulation'],
        rows: [
          ['Voie Sanguine', 'Eau, sels minéraux, glucose, acides aminés, vitamines B et C', 'Capillaires sanguins de la villosité', 'Le Foie (via la Veine Porte Hépatique pour stockage)'],
          ['Voie Lymphatique', 'Acides gras, glycérol, vitamines liposolubles (A, D, E, K)', 'Chylifère central borgne', 'Canal thoracique (rejoint la veine sous-clavière sans passer par le foie)']
        ]
      }
    },
    {
      title: 'III. Le Gros Intestin et la Réabsorption de l’Eau',
      content: [
        'Le côlon assure la réabsorption terminale indispensable de l’eau pour compacter les selles.',
        'La perturbation de cette réabsorption (par exemple par la toxine cholérique) entraîne une diarrhée profuse et une déshydratation aiguë mortelle.'
      ]
    }
  ],
  diagram: {
    title: 'L’Absorption Intestinale',
    root: 'ABSORPTION INTESTINALE',
    branches: [
      {
        name: 'Surface d’Échange (300 m²)',
        subtitle: 'Adaptations morphologiques',
        items: ['Valvules conniventes repliées', 'Villosités intestinales très fines', 'Microvillosités en brosse des entérocytes', 'Paroi monocellulaire hyper-vascularisée']
      },
      {
        name: 'Deux Voies Circulatoires',
        subtitle: 'Distribution des nutriments',
        items: ['Voie sanguine : Glucose & acides aminés vers le foie', 'Voie lymphatique : Acides gras dans le chylifère', 'Réabsorption d’eau dans le côlon', 'Évacuation des fibres fécales']
      }
    ]
  },
  conclusion: "L’absorption intestinale est la passerelle vitale reliant le monde extérieur des aliments au milieu intérieur de nos cellules. Elle garantit l’approvisionnement continu de tous les organes en eau, énergie et biomolécules."
};

export const LESSON_26_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-26',
  number: 'Leçon 26',
  title: 'L’UTILISATION DES NUTRIMENTS ET L’HYGIÈNE ALIMENTAIRE',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Une fois absorbés et disséminés par la circulation sanguine, les nutriments sont captés par les cellules pour subvenir à leurs besoins vitaux. À l’intérieur de la cellule, les nutriments subissent un ensemble de transformations biochimiques : le métabolisme cellulaire, qui comprend le catabolisme (production d’énergie avec rejet de déchets) et l’anabolisme (synthèse de nouvelles molécules). La ration alimentaire doit être rigoureusement équilibrée pour éviter les maladies nutritionnelles par carence ou par excès.",
  fullText: `L’utilisation des nutriments conditionne la santé, la vigueur physique et la longévité de l’être humain.

I. LE DESTIN CELLULAIRE DES NUTRIMENTS : LE MÉTABOLISME
Dans le cytoplasme et les mitochondries des cellules, les nutriments sont utilisés selon deux processus métaboliques majeurs :
1. Le Catabolisme énergétique : la Respiration Cellulaire :
- Le Glucose et les acides gras constituent le carburant de prédilection de la cellule.
- En présence de dioxygène (O2) apporté par le sang, les mitochondries réalisent l’oxydation complète du glucose selon l’équation globale :
  C6H12O6 (Glucose) + 6 O2 -> 6 CO2 (déchet rejeté) + 6 H2O + Énergie (ATP).
- Cette énergie chimique libérée est convertie en travail mécanique (contraction musculaire), en travail osmotique, en synthèses moléculaires et en chaleur (maintien des 37°C corporels).

2. L’Anabolisme bâtisseur : les Synthèses Moléculaires :
- Les Acides aminés sont réassemblés au niveau des ribosomes pour fabriquer les protéines propres à notre organisme : kératine des cheveux et ongles, actine et myosine musculaires, collagène de la peau, hémoglobine du sang, anticorps du système immunitaire et enzymes digestives.
- Le stockage de réserve : le glucose excédentaire est stocké sous forme de glycogène dans le foie et les muscles, tandis que les surplus de lipides et de glucides sont transformés en triglycérides stockés dans le tissu adipeux (graisse corporelle).

II. LES DÉCHETS DU MÉTABOLISME ET LEUR EXCRÉTION
L’utilisation des nutriments génère des déchets toxiques qui doivent impérativement être éliminés hors de l’organisme :
- Le Dioxyde de carbone (CO2) : éliminé par la ventilation pulmonaire au niveau des alvéoles pulmonaires.
- L’Urée et l’Acide urique : déchets azotés toxiques provenant de la dégradation des acides aminés, filtrés par les Reins et éliminés dans l’Urine.
- La sueur émise par les glandes sudoripares participe également à l’excrétion de petites quantités d’urée et de sels.

III. HYGIÈNE ALIMENTAIRE ET MALADIES NUTRITIONNELLES
1. La Ration Alimentaire Équilibrée :
La ration alimentaire quotidienne doit être :
- Suffisante en quantité pour couvrir la dépense énergétique journalière.
- Équilibrée en qualité selon la règle d’or nutritionnelle :
  * 50 à 55 % de l’énergie totale sous forme de Glucides (sucres lents).
  * 30 à 35 % de l’énergie sous forme de Lipides (matières grasses végétales de préférence).
  * 12 à 15 % de l’énergie sous forme de Protides (avec équilibre entre protéines animales et végétales).
  * Un apport suffisant en eau (au moins 1,5 à 2 litres par jour), en vitamines, sels minéraux et fibres alimentaires.

2. Les Maladies Nutritionnelles par Carence (Malnutritions par défaut) :
- Le Kwashiorkor : carence sévère en protéines chez le jeune enfant sevré brutalement du lait maternel et nourri exclusivement de bouillies de céréales (mil, manioc). Symptômes : œdème spectaculaire du ventre et des membres, décoloration rousse et fragilité des cheveux, lésions cutanées, apathie et fonte musculaire.
- Le Marasme nutritionnel : dénutrition globale et précoce par déficit à la fois en calories et en protéines. L’enfant présente une maigreur extrême ("visage de vieillard"), les os saillent sous la peau, disparition totale du panicule adipeux.
- L’Anémie ferriprive : carence en fer entraînant une diminution du taux d’hémoglobine dans le sang (pâleur de la peau et des conjonctives, fatigue intense, vertiges, essoufflement).
- L’Avitaminose A : carence en vitamine A entraînant des troubles graves de la vision nocturne (héméralopie) et pouvant aboutir à la cécité définitive par dessèchement de la cornée (xérophtalmie).
- Le Scorbut : carence en vitamine C (saignements des gencives, déchaussement des dents, hémorragies cutanées).
- Le Rachitisme : carence en vitamine D et en calcium chez l’enfant entraînant une déformation permanente des os (jambes arquées en parenthèses, chapelet costal).
- Le Goître endémique : carence en iode provoquant une hypertrophie volumineuse de la glande thyroïde à la base du cou.

3. Les Maladies Nutritionnelles par Excès (Malnutritions de pléthore) :
- L’Obésité : surcharge pondérale par accumulation massive de graisse dans le tissu adipeux due à une sédentarité et une suralimentation riche en graisses et sucres raffinés.
- Le Diabète de type 2 et les Maladies Cardiovasculaires : l’excès de cholestérol bouche les artères (athérosclérose), provoquant hypertension artérielle, infarctus du myocarde et accidents vasculaires cérébraux (AVC).
- La Carie dentaire : destruction de l’émail et de l’ivoire de la dent par l’acide produit par les bactéries buccales qui fermentent les débris de sucres restés entre les dents. Prévention : brossage soigné des dents avec un dentifrice fluoré après chaque repas.`,
  sections: [
    {
      title: 'I. Métabolisme Cellulaire : Oxydation Énergétique et Synthèses Protéiques',
      content: [
        'Dans les mitochondries, la respiration cellulaire oxyde le glucose grâce au dioxygène pour produire de l’énergie utilisable (ATP).',
        'Les acides aminés servent à bâtir les protéines corporelles et les enzymes indispensables à la vie.'
      ]
    },
    {
      title: 'II. Grandes Maladies Nutritionnelles : Carences et Excès',
      content: [
        'Le kwashiorkor (carence en protéines) et le marasme (carence globale) touchent gravement les jeunes enfants.',
        'L’anémie, les avitaminoses et le rachitisme sont évités par une alimentation variée et diversifiée.',
        'L’obésité, l’athérosclérose et le diabète résultent des excès de graisses et de sucres sédentaires.'
      ],
      table: {
        headers: ['Pathologie nutritionnelle', 'Origine du déséquilibre alimentaire', 'Manifestations cliniques caractéristiques', 'Mesures préventives ou curatives'],
        rows: [
          ['Kwashiorkor', 'Carence aiguë en protéines après sevrage', 'Gros ventre œdémateux, cheveux roux cassants, apathie', 'Aliments riches en protéines : poisson, œuf, niébé, lait'],
          ['Marasme', 'Carence globale extrême (calories + protéines)', 'Maigreur squelettique, visage de vieillard, fonte musculaire', 'Ration énergétique et protéique complète progressive'],
          ['Anémie ferriprive', 'Carence en Fer minéral', 'Pâleur conjonctivale, fatigue constante, palpitations', 'Consommation de viande rouge, foie, légumes à feuilles vertes'],
          ['Rachitisme', 'Carence conjointe en Vitamine D et Calcium', 'Déformation osseuse des jambes, thorax en carène', 'Exposition au soleil matinal, laitages, huile de foie de poisson'],
          ['Goître endémique', 'Carence chronique en Iode', 'Hypertrophie de la thyroïde à la base du cou', 'Utilisation systématique de sel de cuisine iodé au Sénégal'],
          ['Obésité & Athérome', 'Excès chronique de calories, graisses et sucres', 'Surcharge pondérale, obstruction des artères, infarctus', 'Alimentation équilibrée, réduction des sucres, activité physique régulière']
        ]
      }
    },
    {
      title: 'III. Les Règles d’Or de la Ration Alimentaire',
      content: [
        'Une ration saine respecte l’équilibre 421 GPL (4 parts de glucides, 2 parts de protides, 1 part de lipides).',
        'L’hygiène bucco-dentaire quotidienne et la pratique régulière du sport complètent l’équilibre nutritionnel.'
      ]
    }
  ],
  diagram: {
    title: 'Utilisation des Nutriments et Santé',
    root: 'NUTRITION CELLULAIRE',
    branches: [
      {
        name: 'Métabolisme Intracellulaire',
        subtitle: 'Production & Déchets',
        items: ['Respiration : Glucose + O2 -> Énergie (ATP)', 'Synthèse des protéines musculaires & enzymes', 'Urée éliminée par les reins (urines)', 'CO2 rejeté par les poumons']
      },
      {
        name: 'Équilibre & Carences',
        subtitle: 'Hygiène alimentaire',
        items: ['Ration équilibrée (Glucides 55%, Lipides 30%, Protides 15%)', 'Carences : Kwashiorkor, Marasme, Anémie, Rachitisme', 'Excès : Obésité, Diabète & Athérosclérose', 'Hygiène bucco-dentaire & sel iodé']
      }
    ]
  },
  conclusion: "« Que ton aliment soit ton médicament » disait Hippocrate. Une ration alimentaire équilibrée, diversifiée et adaptée aux besoins physiologiques individuels est le garant suprême de la santé et du bien-être durable."
};
