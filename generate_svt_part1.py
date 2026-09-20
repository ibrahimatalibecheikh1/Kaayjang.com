# -*- coding: utf-8 -*-
"""Generates courses_3eme_svt_part1.ts (Lessons 1 to 7)"""

import json

code = '''import { LessonContent } from './courses';
import {
  SVG_SVT_3EME_OEIL_VISION,
  SVG_SVT_3EME_SYNAPSE,
  SVG_SVT_3EME_ARC_REFLEXE
} from './diagrams_3eme_svt';

// =========================================================================
// SVT 3ÈME - PREMIÈRE PARTIE : SCIENCES DE LA VIE
// LEÇONS 1 À 7 : SYSTÈME NERVEUX, VISION ET SYSTÈME MUSCULAIRE
// COURS COMPLETS, DÉTAILLÉS ET ENRICHIS POUR LE BFEM (SÉNÉGAL)
// =========================================================================

export const LESSON_1_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-1',
  number: 'Leçon 1',
  title: 'ORGANISATION GÉNÉRALE DU SYSTÈME NERVEUX',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Le système nerveux assure la commande, la coordination et la régulation de l'ensemble des organes du corps humain. Il permet à l'organisme d'interagir avec son environnement en captant des informations sensorielles (stimuli), en les traitant et en élaborant des réponses motrices adaptées. Chez l'être humain, cette machinerie biologique d'une extrême précision se divise sur le plan anatomique en deux grands ensembles : le Système Nerveux Central (SNC ou névraxe) qui élabore les ordres, et le Système Nerveux Périphérique (SNP) qui assure la conduction des messages nerveux.",
  fullText: `Le système nerveux est le centre intégrateur et régulateur suprême du corps humain. Il coordonne les fonctions vitales, régule les comportements et permet les activités intellectuelles et conscientes.

I. LE SYSTÈME NERVEUX CENTRAL (SNC OU NÉVRAXE)
Le SNC comprend l'encéphale logé dans la boîte crânienne et la moelle épinière située dans le canal rachidien de la colonne vertébrale.
1. L'encéphale :
- Le Cerveau : constitué de deux hémisphères cérébraux réunis par le corps calleux. Sa surface plissée présente des circonvolutions cérébrales délimitées par des sillons et des scissures. En coupe, il montre une substance grise périphérique (cortex cérébral, 2 à 4 mm d'épaisseur) contenant les corps cellulaires des neurones et une substance blanche centrale constituée de fibres nerveuses myélinisées.
- Le Cervelet : situé en arrière et sous le cerveau, il est le centre de l'équilibre et de la coordination motrice fine.
- Le Tronc cérébral (dont le bulbe rachidien) : relie l'encéphale à la moelle épinière. C'est le centre autonome vital régulant la respiration, le rythme cardiaque et la pression artérielle.

2. La Moelle épinière :
Cordon blanchâtre d'environ 45 cm de long chez l'adulte, s'étendant du bulbe rachidien jusqu'à la deuxième vertèbre lombaire (L2). En coupe transversale, la disposition est inversée par rapport au cerveau : la substance grise est centrale en forme de papillon ou de H (avec des cornes dorsales sensitives et des cornes ventrales motrices), entourée par la substance blanche périphérique.

3. La protection du Système Nerveux Central :
Le SNC est protégé par deux enveloppes :
- Une protection osseuse rigide : la boîte crânienne pour l'encéphale et la colonne vertébrale pour la moelle épinière.
- Une protection méningée composée de trois membranes superposées : la Dure-mère (externe, fibreuse et résistante), l'Arachnoïde (intermédiaire, d'aspect toiles d'araignée) et la Pie-mère (interne, très fine et richement vascularisée).
Entre l'arachnoïde et la pie-mère circule le Liquide Céphalo-Rachidien (LCR) qui amortit les chocs mécaniques et assure un rôle nourricier et épurateur.

II. LE SYSTÈME NERVEUX PÉRIPHÉRIQUE (SNP)
Le SNP est constitué par l'ensemble des nerfs reliant le SNC à tous les organes récepteurs et effecteurs du corps.
1. Les Nerfs Crâniens :
Au nombre de 12 paires, ils émergent directement de l'encéphale et innervent principalement la tête, les organes des sens et le cou (ex : nerf optique II, nerf vague ou pneumogastrique X).
2. Les Nerfs Rachidiens (ou Spinaux) :
Au nombre de 31 paires chez l'Homme, ils émergent de la moelle épinière par deux racines : une racine dorsale (sensitive, portant un renflement : le ganglion spinal) et une racine ventrale (motrice). Les deux racines se réunissent pour former un nerf rachidien mixte, conduisant à la fois des messages sensitifs et moteurs.

III. LES VOIES SENSITIVES ET MOTRICES
Les messages nerveux circulent selon une polarité stricte :
- Les voies afférentes (sensitives ou centripètes) : transportent l'influx nerveux des récepteurs sensoriels vers les centres nerveux (SNC).
- Les voies efférentes (motrices ou centrifuges) : acheminent les ordres moteurs des centres nerveux vers les organes effecteurs (muscles ou glandes).`,
  sections: [
    {
      title: 'I. Le Système Nerveux Central (SNC)',
      content: [
        'Le système nerveux central (SNC) est le quartier général du traitement des données nerveuses.',
        'L\'encéphale regroupe le cerveau (siège de la pensée, de la motricité volontaire et de la sensibilité consciente), le cervelet (coordination et équilibre) et le tronc cérébral (centres réflexes vitaux respiratoires et cardiaques).',
        'La moelle épinière constitue le centre des réflexes médullaires et la voie de transmission ascendante et descendante des messages nerveux.'
      ],
      table: {
        headers: ['Partie du SNC', 'Localisation anatomique', 'Rôles physiologiques majeurs'],
        rows: [
          ['Cerveau', 'Boîte crânienne (hémisphères)', 'Sensibilité consciente, motricité volontaire, mémoire, pensée'],
          ['Cervelet', 'Fosse crânienne postérieure', 'Coordination des mouvements, posture et équilibre'],
          ['Tronc cérébral / Bulbe', 'Base du crâne (au-dessus moelle)', 'Régulation du rythme cardiaque, ventilation pulmonaire, déglutition'],
          ['Moelle épinière', 'Canal rachidien vertébral', 'Centre des réflexes involontaires, relais sensitivo-moteur']
        ]
      }
    },
    {
      title: 'II. Les Enveloppes Protectrices : Os et Méninges',
      content: [
        'Le tissu nerveux étant mou, fragile et incapable de régénération complète en cas de destruction, il dispose d\'une double protection.',
        'La Dure-mère tapisse la paroi osseuse interne. L\'Arachnoïde forme un réseau trabéculaire où s\'écoule le Liquide Céphalo-Rachidien (LCR). La Pie-mère adhère intimement aux circonvolutions nerveuses en leur apportant nutriments et dioxygène par ses capillaires.'
      ]
    },
    {
      title: 'III. Le Système Nerveux Périphérique (SNP) : Nerfs Crâniens et Rachidiens',
      content: [
        'Le SNP connecte les organes périphériques au centre décisionnel par des cordons de fibres nerveuses.',
        'Les 12 paires de nerfs crâniens desservent les sens spéciaux (odorat, vision, ouïe) et les muscles céphaliques.',
        'Les 31 paires de nerfs rachidiens sont tous des nerfs mixtes issus de la fusion de la racine postérieure sensitive (portant le ganglion spinal) et de la racine antérieure motrice.'
      ]
    }
  ],
  diagram: {
    title: 'Organisation du Système Nerveux Humain',
    root: 'SYSTÈME NERVEUX',
    branches: [
      {
        name: 'SNC (Névraxe)',
        subtitle: 'Centres de commande',
        items: ['Encéphale (Cerveau, Cervelet, Tronc)', 'Moelle épinière (Canal rachidien)', 'Méninges (Dure-mère, Arachnoïde, Pie-mère)', 'Liquide Céphalo-Rachidien (LCR)']
      },
      {
        name: 'SNP (Nerfs)',
        subtitle: 'Voies de transmission',
        items: ['12 paires de nerfs crâniens', '31 paires de nerfs rachidiens (mixtes)', 'Voies afférentes (sensitives)', 'Voies efférentes (motrices)']
      }
    ]
  },
  conclusion: "Le système nerveux central et périphérique forment un réseau intégré garantissant la relation de l'organisme avec le milieu extérieur et la coordination interne des fonctions végétatives. La compréhension de cette anatomie est indispensable pour étudier les actes réflexes et volontaires."
};

export const LESSON_2_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-2',
  number: 'Leçon 2',
  title: 'STRUCTURE DE L\'ŒIL ET ÉTUDE DE LA VISION',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "La vision est le sens par lequel nous percevons les formes, les couleurs, les distances et les mouvements du monde environnant. L'œil humain (ou globe oculaire) est un photorécepteur hautement perfectionné qui fonctionne comme une chambre noire photographique : il concentre les rayons lumineux émis par les objets sur une membrane réceptrice photosensible, la rétine, avant de convertir l'énergie lumineuse en influx nerveux transmis au cerveau via le nerf optique.",
  fullText: `L'œil humain est un organe sphérique d'environ 24 mm de diamètre logé dans la cavité orbitaire.

I. ANATOMIE DU GLOBE OCULAIRE
Le globe oculaire est constitué de trois tuniques concentriques et de quatre milieux transparents réfringents.
1. Les trois tuniques concentriques :
- La Sclérotique : enveloppe externe blanche, épaisse et résistante assurant la protection mécanique et la forme de l'œil. En avant, elle devient bombée et parfaitement transparente : c'est la Cornée.
- L'Uvée ou Choroïde : tunique intermédiaire sombre, très vascularisée, formant une véritable chambre noire et nourrissant les cellules oculaires. En avant, elle forme l'Iris, disque coloré percé d'un orifice central modulable : la Pupille. Les muscles de l'iris régulent le diamètre pupillaire (réflexe photomoteur pupillaire).
- La Rétine : tunique interne, membrane nerveuse photosensible tapissée d'environ 130 millions de cellules réceptrices :
  * Les Bâtonnets (~120 millions) : très sensibles à la lumière faible, permettent la vision nocturne en noir et blanc.
  * Les Cônes (~7 millions) : permettent la vision diurne nette et la perception des couleurs (3 types : sensibles au rouge, vert et bleu).
  * La Fovéa (ou tache jaune) : zone centrale de la rétine située dans l'axe optique, ne contenant que des cônes très serrés, siège de l'acuité visuelle maximale.
  * Le Point aveugle (papille optique) : zone de départ du nerf optique, dépourvue de photorécepteurs, totalement insensible à la lumière.

2. Les quatre milieux transparents :
Dans l'ordre de traversée de la lumière :
- La Cornée transparente : lentille divergente fixe antérieure.
- L'Humeur aqueuse : liquide limpide et fluide remplissant la chambre antérieure entre la cornée et l'iris.
- Le Cristallin : lentille biconvexe élastique et transparente dont la courbure peut varier sous l'action des muscles ciliaires (mécanisme de l'accommodation).
- Le Corps vitré (ou humeur vitrée) : gelée transparente et volumineuse qui maintient la rétine appliquée contre la choroïde.

II. LE FONCTIONNEMENT OPTIQUE ET L'ACCOMMODATION
1. Formation de l'image :
L'ensemble des milieux transparents agit comme une lentille convergente équivalente d'une vergence d'environ 60 dioptries. L'image d'un objet se forme sur la rétine : elle est réelle, inversée et plus petite que l'objet. C'est le cerveau (cortex visuel occipital) qui redresse l'image pour nous donner la perception réelle.
2. L'Accommodation :
Pour voir nettement un objet qui se rapproche, le cristallin se bombe sous la contraction du muscle ciliaire : sa vergence augmente et les rayons continuent de converger exactement sur la rétine. Au repos, l'œil normal est réglé pour la vision à l'infini.

III. LES ANOMALIES DE RÉFRACTION ET LEUR CORRECTION
- L'Œil normal (Émmétrope) : l'image se forme spontanément sur la rétine sans fatigue visuelle.
- La Myopie : œil trop long ou cristallin trop convergent. Les rayons d'un objet lointain convergent en avant de la rétine : la vision de loin est floue. Correction par des verres divergents (biconcaves) qui repoussent le foyer sur la rétine.
- L'Hypermétropie : œil trop court ou cristallin trop plat. Les rayons convergent en arrière de la rétine : fatigue oculaire et vision de près floue. Correction par des verres convergents (biconvexes).
- La Presbytie : perte naturelle d'élasticité du cristallin liée à l'âge (> 45 ans), rendant l'accommodation difficile pour la lecture de près.
- L'Astigmatisme : anomalie de courbure de la cornée (ovale au lieu de sphérique), rendant la vision déformée de près comme de loin. Correction par des verres cylindriques.`,
  sections: [
    {
      title: 'I. Anatomie et Milieux Transparents de l\'Œil',
      content: [
        'L\'œil superpose trois tuniques (Sclérotique, Choroïde et Rétine) protégeant et alimentant les cellules visuelles.',
        'La lumière pénètre successivement à travers la cornée, l\'humeur aqueuse, le cristallin et le corps vitré pour frapper la rétine au niveau de la fovéa.'
      ],
      image: {
        url: SVG_SVT_3EME_OEIL_VISION,
        alt: 'Schéma anatomique de l\'œil humain et anomalies optiques de réfraction',
        caption: 'Figure 2.1 : Structure de l\'œil, réfraction des rayons sur la rétine et correction des amétropies (Myopie et Hypermétropie).'
      }
    },
    {
      title: 'II. Rôle des Photorécepteurs Rétiniens',
      content: [
        'La rétine transforme l\'énergie lumineuse en influx nerveux grâce à deux familles de récepteurs cellulaires.',
        'Les bâtonnets sont spécialisés dans la détection des contrastes faibles et la vision dans l\'obscurité.',
        'Les cônes permettent la discrimination des couleurs (trichromatisme) et la précision des détails à la lumière du jour.'
      ],
      table: {
        headers: ['Type de photorécepteur', 'Nombre approximatif', 'Localisation rétinienne', 'Rôle physiologique'],
        rows: [
          ['Cônes', '6 à 7 millions', 'Fovéa centrale (axe visuel)', 'Vision diurne, détails fins, perception des couleurs (R, V, B)'],
          ['Bâtonnets', '120 à 130 millions', 'Périphérie de la rétine', 'Vision crépusculaire et nocturne, détection des mouvements'],
          ['Papille optique', '0 (zone aveugle)', 'Point d\'émergence du nerf optique', 'Aucun (point aveugle physiologique)']
        ]
      }
    },
    {
      title: 'III. Anomalies de la Vision et Principes de Correction Optique',
      content: [
        'Les amétropies sont des défauts de focalisation de l\'image par rapport à la rétine.',
        'Dans la myopie, l\'image se forme en avant de la rétine : on interpose des lentilles divergentes (à bords épais).',
        'Dans l\'hypermétropie, l\'image se forme en arrière de la rétine : on interpose des lentilles convergentes (à centre épais).'
      ]
    }
  ],
  diagram: {
    title: 'Optique et Milieux de l\'Œil',
    root: 'ŒIL ET VISION',
    branches: [
      {
        name: 'Milieux Réfringents',
        subtitle: 'Traversée de la lumière',
        items: ['Cornée transparente', 'Humeur aqueuse limpide', 'Cristallin (accommodation)', 'Corps vitré gélatineux']
      },
      {
        name: 'Défauts de Réfraction',
        subtitle: 'Corrections optiques',
        items: ['Myopie : foyer en avant -> verre divergent', 'Hypermétropie : foyer en arrière -> verre convergent', 'Presbytie : vieillissement cristallin', 'Astigmatisme : cornée asymétrique']
      }
    ]
  },
  conclusion: "L'œil est un capteur sensoriel sophistiqué combinant des lois physiques d'optique géométrique et des mécanismes biochimiques de transduction nerveuse. La préservation de la santé oculaire nécessite un éclairage adapté, un dépistage précoce des vices de réfraction et une protection contre les rayonnements intenses."
};

export const LESSON_3_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-3',
  number: 'Leçon 3',
  title: 'LE TISSU NERVEUX ET LES PROPRIÉTÉS DU NERF',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Le système nerveux est constitué d'un tissu hautement spécialisé dont l'unité structurale et fonctionnelle de base est le neurone ou cellule nerveuse. Capable de générer et de conduire des signaux bioélectriques appelés potentiels d'action, le neurone communique avec d'autres cellules au niveau de jonctions fonctionnelles spécialisées : les synapses. L'étude du tissu nerveux et des propriétés physiologiques du nerf permet de comprendre les bases physiques et chimiques de la communication nerveuse.",
  fullText: `Le tissu nerveux est composé de neurones (cellules excitables et conductrices) et de cellules gliales (cellules de soutien, de protection et de nutrition des neurones).

I. STRUCTURE DU NEURONE
Le neurone est une cellule hautement différenciée qui ne se divise plus après le développement embryonnaire. Il se compose de trois parties :
1. Le Corps cellulaire (ou péricaryon) :
Contient le noyau, le cytoplasme et les organites habituels ainsi que des corps de Nissl (réticulum rugueux très développé synthétisant les neurotransmetteurs). Les corps cellulaires sont concentrés dans la substance grise des centres nerveux et dans les ganglions spinaux.
2. Les Dendrites :
Prolongements cytoplasmiques courts, nombreux et très ramifiés, qui reçoivent les influx nerveux provenant d'autres neurones et les conduisent de façon centripète vers le corps cellulaire.
3. L'Axone (ou cylindraxe) :
Prolongement unique, long (pouvant atteindre 1 mètre chez l'Homme pour les motoneurones de la jambe), qui conduit l'influx nerveux de manière centrifuge du corps cellulaire vers la terminaison axonale ramifiée en boutons synaptiques.
L'axone est entouré par une gaine de myéline isolante (produite par les cellules de Schwann dans le SNP et les oligodendrocytes dans le SNC), interrompue à intervalles réguliers par les étranglements ou nœuds de Ranvier.

II. LES PROPRIÉTÉS FONDAMENTALES DU NERF
Un nerf est constitué de milliers de fibres nerveuses (axones) regroupées en faisceaux par du tissu conjonctif.
1. L'Excitabilité :
C'est la capacité du nerf à réagir à une stimulation externe (mécanique, électrique, chimique, thermique) en produisant une variation de potentiel de membrane : le Potentiel d'Action (PA).
- Seuil d'excitabilité (ou rhéobase) : intensité minimale de stimulation nécessaire pour déclencher un potentiel d'action. En dessous de ce seuil (stimulation infraliminaire), aucune réponse propagée n'est générée.
- Loi du tout ou rien : pour une fibre isolée, dès que le seuil est atteint, le PA apparaît d'emblée avec son amplitude maximale.

2. La Conductibilité :
C'est la capacité du nerf à propager le potentiel d'action le long de ses axones.
- Dans une fibre amyélinique : la propagation est de proche en proche (vitesse lente : 1 à 2 m/s).
- Dans une fibre myélinisée : la myéline étant un isolant électrique étanche, l'influx "saute" d'un nœud de Ranvier au suivant : c'est la conduction saltatoire, beaucoup plus rapide et économe en énergie (vitesse atteignant 100 à 120 m/s).

III. LA TRANSMISSION SYNAPTIQUE
La synapse est la zone de contact fonctionnel entre deux neurones (synapse neuro-neuronique) ou entre un neurone et une fibre musculaire (synapse neuro-musculaire ou plaque motrice).
Elle comprend :
- L'élément pré-synaptique : renflement contenant des mitochondries et des vésicules synaptiques remplies de neuromédiateurs chimiques (ex : acétylcholine, noradrénaline, dopamine, GABA).
- La fente synaptique : espace microscopique de 20 à 50 nm séparant les deux cellules.
- L'élément post-synaptique : membrane portant des récepteurs protéiques spécifiques aux molécules de neuromédiateurs.

Mécanisme :
1. L'arrivée du potentiel d'action à la terminaison axonale pré-synaptique provoque l'ouverture de canaux calcium Ca2+.
2. L'entrée de calcium déclenche l'exocytose des vésicules et la libération des neurotransmetteurs dans la fente synaptique.
3. Les neurotransmetteurs diffusent et se fixent sur leurs récepteurs membranaires post-synaptiques.
4. Cette fixation ouvre des canaux ioniques et déclenche un nouveau potentiel d'action post-synaptique.
5. Les neurotransmetteurs sont ensuite rapidement éliminés par dégradation enzymatique ou recapture pour permettre une nouvelle transmission.`,
  sections: [
    {
      title: 'I. Morphologie et Diversité du Neurone',
      content: [
        'Le neurone est l\'unité fonctionnelle du tissu nerveux, constitué d\'un corps cellulaire intégrateur, de dendrites réceptrices et d\'un axone conducteur.',
        'La gaine de myéline accélère prodigieusement la transmission de l\'information grâce à la conduction saltatoire de nœud de Ranvier en nœud de Ranvier.'
      ]
    },
    {
      title: 'II. Ultrastructure et Fonctionnement de la Synapse Chimique',
      content: [
        'La communication entre neurones est unidirectionnelle : elle s\'effectue au niveau de la synapse chimique par l\'intermédiaire de messagers moléculaires.',
        'La conversion électrique-chimique-électrique garantit la précision et la modulation des circuits nerveux.'
      ],
      image: {
        url: SVG_SVT_3EME_SYNAPSE,
        alt: 'Schéma ultra-structural d\'une synapse chimique neuro-neuronique',
        caption: 'Figure 3.1 : Fonctionnement de la synapse chimique : exocytose de l\'acétylcholine dans la fente synaptique et genèse du potentiel post-synaptique.'
      }
    },
    {
      title: 'III. Les Propriétés Électriques du Nerf',
      content: [
        'L\'excitabilité dépend du franchissement d\'un seuil liminaire (rhéobase).',
        'La conductibilité est saltatoire le long des fibres myélinisées, atteignant plus de 100 m/s.'
      ],
      table: {
        headers: ['Propriété physiologique', 'Définition exacte', 'Facteurs d\'influence'],
        rows: [
          ['Excitabilité', 'Aptitude à réagir à un stimulus en créant un PA', 'Intensité, durée du stimulus, seuil liminaire'],
          ['Conductibilité', 'Aptitude à propager le PA le long de la fibre', 'Diamètre de l\'axone, présence de gaine de myéline, température'],
          ['Période réfractaire', 'Bref instant d\'inexcitabilité totale après un PA', 'Inactivation transitoire des canaux sodium Na+ voltage-dépendants']
        ]
      }
    }
  ],
  diagram: {
    title: 'Le Tissu Nerveux et la Synapse',
    root: 'TISSU NERVEUX',
    branches: [
      {
        name: 'Neurone & Myéline',
        subtitle: 'Anatomie cellulaire',
        items: ['Corps cellulaire (substance grise)', 'Dendrites réceptrices', 'Axone myélinisé (substance blanche)', 'Nœuds de Ranvier (conduction saltatoire)']
      },
      {
        name: 'Transmission Synaptique',
        subtitle: 'Médiateurs chimiques',
        items: ['Élément pré-synaptique & vésicules', 'Fente synaptique (20-50 nm)', 'Récepteurs post-synaptiques', 'Neuromédiateurs (Acétylcholine, GABA)']
      }
    ]
  },
  conclusion: "Le neurone est une cellule excitable hautement spécialisée. La transmission synaptique chimique permet un traitement sélectif de l'information nerveuse et constitue la cible privilégiée de nombreuses substances pharmacologiques et toxiques."
};

export const LESSON_4_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-4',
  number: 'Leçon 4',
  title: 'L\'ACTIVITÉ NERVEUSE : LES MOUVEMENTS RÉFLEXES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Un mouvement réflexe est une réaction motrice involontaire, automatique, stéréotypée et rapide de l'organisme en réponse à un stimulus sensoriel précis. Les réflexes jouent un rôle fondamental de protection immédiate (ex : retrait de la main au contact d'une épine ou d'un objet brûlant) et de maintien de la posture corporelle (ex : réflexe rotulien maintenant la station debout). L'exécution d'un réflexe inné repose sur un circuit anatomique rigoureux : l'arc réflexe.",
  fullText: `Les actes réflexes sont indépendants de la volonté et peuvent s'accomplir sans l'intervention du cerveau.

I. LES CARACTÉRISTIQUES DES RÉFLEXES INNÉS (INCONDITIONNELS)
- Involontaires : ils s'exécutent sans décision préalable de la conscience.
- Inconditionnels : ils sont présents dès la naissance chez tous les individus d'une même espèce, sans apprentissage.
- Rapides et stéréotypés : une même stimulation produit toujours rigoureusement la même réponse motrice.
- Protecteurs : ils protègent l'organisme contre les lésions immédiates.
Exemples classiques :
* Le réflexe myotatique rotulien : un coup sec porté sur le tendon sous-rotulien étire le muscle quadriceps, qui répond immédiatement par une contraction réflexe étendant la jambe.
* Le réflexe pupillaire photomoteur : constriction de la pupille sous l'effet d'une lumière vive.
* Le réflexe cornéen : clignement palpébral automatique dès qu'un corps étranger effleure la cornée.

II. L'ARC RÉFLEXE ET SES CINQ ÉLÉMENTS ANATOMIQUES
Le support structural d'un réflexe médullaire comprend obligatoirement 5 organes disposés en série :
1. Le Récepteur sensoriel : structure anatomique spécialisée qui capte la stimulation et la convertit en influx nerveux sensitif (ex : fuseau neuromusculaire, corpuscules tactiles de la peau).
2. Le Conducteur afférent (nerf sensitif) : fibre nerveuse sensitive centripète conduisant l'influx nerveux du récepteur vers le centre nerveux via la racine dorsale (postérieure) du nerf rachidien.
3. Le Centre réflexe (Moelle épinière) : traite l'information sensitive dans la substance grise, la transforme en ordre moteur, souvent par l'intermédiaire d'un interneurone d'association.
4. Le Conducteur efférent (nerf moteur) : fibre nerveuse motrice centrifuge (motoneurone alpha) qui quitte la moelle par la racine ventrale (antérieure) pour acheminer l'ordre moteur.
5. L'Effecteur (Muscle squelettique ou glande) : organe qui exécute l'action ordonnée (contraction musculaire ou sécrétion glandulaire).

III. LES EXPÉRIENCES HISTORIQUES DE SECTION ET DE DÉGÉNÉRESCENCE (MAGENDIE ET WALLER)
Pour établir le rôle des racines du nerf rachidien :
- Section de la racine postérieure : perte totale de sensibilité dans le territoire innervé, mais motricité intacte -> la racine postérieure est exclusivement sensitive.
- Section de la racine antérieure : paralysie motrice totale du membre, mais sensibilité conservée -> la racine antérieure est exclusivement motrice.
- Section du nerf rachidien : perte à la fois de la motricité et de la sensibilité -> le nerf rachidien est un nerf mixte.
- Expériences de Waller : la partie de la fibre séparée de son noyau (corps cellulaire) dégénère. Cela prouve que les corps cellulaires des fibres sensitives sont dans le ganglion spinal et ceux des fibres motrices sont dans la corne ventrale de la moelle épinière.

IV. LES RÉFLEXES CONDITIONNELS OU ACQUIS (PAVLOV)
Découverts par le physiologiste russe Ivan Pavlov chez le chien :
- Un stimulus inconditionnel (viande dans la bouche) provoque une sécrétion salivaire innée.
- Si l'on associe de façon répétée un stimulus neutre (son d'une cloche) au repas, le stimulus neutre devient un stimulus conditionnel : le chien salive au seul son de la cloche.
Contrairement aux réflexes innés, le réflexe conditionnel est acquis, individuel, temporaire (peut s'éteindre sans renforcement) et nécessite impérativement la participation du cortex cérébral.`,
  sections: [
    {
      title: 'I. Notion de Réflexe Inné et Déroulement de l\'Arc Réflexe',
      content: [
        'Le réflexe inné est une réponse automatique et immédiate assurant la protection du corps.',
        'L\'arc réflexe comprend 5 maillons indissociables : récepteur, conducteur sensitif centripète, centre médullaire, conducteur moteur centrifuge et effecteur musculaire.'
      ],
      image: {
        url: SVG_SVT_3EME_ARC_REFLEXE,
        alt: 'Schéma anatomique de l\'arc réflexe médullaire inné',
        caption: 'Figure 4.1 : L\'arc réflexe médullaire : circuit anatomique à 5 maillons reliant le stimulus cutané à la réponse motrice du muscle.'
      }
    },
    {
      title: 'II. Démonstration Expérimentale : Les Expériences de Magendie',
      content: [
        'Les expériences de section des racines rachidiennes établissent la spécialisation fonctionnelle des voies nerveuses.',
        'La racine dorsale porteuse du ganglion spinal est sensitive, la racine ventrale est motrice, et le nerf rachidien est mixte.'
      ],
      table: {
        headers: ['Intervention chirurgicale', 'Résultat observé', 'Conclusion physiologique'],
        rows: [
          ['Section du nerf rachidien', 'Perte de sensibilité et paralysie motrice', 'Le nerf rachidien est mixte (conduit les 2 types d\'influx)'],
          ['Section de la racine dorsale (postérieure)', 'Perte de sensibilité, motricité intacte', 'La racine dorsale est uniquement sensitive (afférente)'],
          ['Section de la racine ventrale (antérieure)', 'Paralysie motrice, sensibilité intacte', 'La racine ventrale est uniquement motrice (efférente)'],
          ['Section avant le ganglion spinal', 'Dégénérescence de la portion périphérique vers la moelle', 'Le corps cellulaire sensitif réside dans le ganglion spinal']
        ]
      }
    },
    {
      title: 'III. Réflexes Conditionnels d\'Apprentissage (Travaux de Pavlov)',
      content: [
        'Les réflexes conditionnels se construisent par association répétée entre un stimulus neutre et un stimulus absolu.',
        'Ils nécessitent l\'intégrité du cortex cérébral et sous-tendent les apprentissages et le dressage.'
      ]
    }
  ],
  diagram: {
    title: 'L\'Arc Réflexe Médullaire',
    root: 'MOUVEMENT RÉFLEXE',
    branches: [
      {
        name: '5 Organes de l\'Arc Réflexe',
        subtitle: 'Circuit anatomique',
        items: ['1. Récepteur sensoriel (peau, fuseau)', '2. Conducteur sensitif (racine dorsale)', '3. Centre réflexe (moelle épinière)', '4. Conducteur moteur (racine ventrale)', '5. Effecteur (muscle squelettique)']
      },
      {
        name: 'Types de Réflexes',
        subtitle: 'Classification',
        items: ['Innés / Inconditionnels (stéréotypés, médullaires)', 'Acquis / Conditionnels (Pavlov, corticaux)', 'Fonction de défense et d\'ajustement postural']
      }
    ]
  },
  conclusion: "Les mouvements réflexes constituent les briques élémentaires de l'activité motrice, combinant des arcs réflexes simples pour garantir la survie immédiate de l'individu sans encombrer la conscience cérébrale."
};

export const LESSON_5_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-5',
  number: 'Leçon 5',
  title: 'L\'ACTIVITÉ NERVEUSE : LES MOUVEMENTS VOLONTAIRES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Contrairement au réflexe inné qui est automatique et stéréotypé, le mouvement volontaire est un acte conscient, intentionnel, réfléchi et modulable. Qu'il s'agisse de saisir un stylo, de marcher ou de frapper dans un ballon, ce type d'activité motrice est commandé par le cerveau, plus précisément par le cortex moteur des hémisphères cérébraux, avant d'être transmis aux muscles par l'intermédiaire des voies nerveuses descendantes.",
  fullText: `Le mouvement volontaire implique la décision consciente de l'individu et un traitement cérébral élaboré.

I. ORIGINE DU MOUVEMENT VOLONTAIRE : L'AIRE MOTRICE CÉRÉBRALE
1. Localisation de l'aire motrice :
L'aire motrice primaire (aire 4 de Brodmann) est située dans le cortex cérébral, sur la circonvolution frontale ascendante (ou gyrus précentral), juste en avant de la scissure de Rolando.
2. L'Hémisphère cérébral et l'homonculus moteur de Penfield :
Sur cette bande de cortex, chaque groupe de muscles du corps est représenté de façon inversée (les pieds en haut, la face et les mains en bas). La surface corticale allouée à chaque partie du corps ne dépend pas de sa taille physique, mais de la finesse et de la précision de ses mouvements : la main, les doigts, la langue et les lèvres occupent une surface immense sur le cortex moteur.
3. Rôle des aires associatives pré-motrices :
Avant l'exécution, les aires pré-motrices et le cortex préfrontal conçoivent le plan du mouvement et anticipent sa trajectoire.

II. LE TRAJET DU MESSAGE MOTEUR VOLONTAIRE
1. Les cellules pyramidales de Betz :
Ce sont de volumineux neurones moteurs situés dans l'aire motrice dont les longs axones forment le faisceau pyramidal (voie motrice principale).
2. Le croisement des voies motrices (Décussation pyramidale) :
Au niveau du bulbe rachidien, 85 à 90 % des fibres nerveuses du faisceau pyramidal se croisent : les fibres issues de l'hémisphère cérébral gauche passent à droite, et inversement.
Conséquence clinique majeure : la motricité est croisée ! L'hémisphère cérébral gauche commande les muscles de la moitié droite du corps, tandis que l'hémisphère droit commande la moitié gauche.
3. Rôle de relais de la moelle épinière :
Dans la moelle épinière, les fibres pyramidales font synapse avec les motoneurones de la corne antérieure (motoneurones alpha). Ces derniers envoient leurs axones par les racines antérieures des nerfs rachidiens jusqu'aux muscles effecteurs.

III. LES ANOMALIES ET PATHOLOGIES DU MOUVEMENT VOLONTAIRE
- L'AVC (Accident Vasculaire Cérébral) : l'obstruction d'une artère cérébrale (infarctus) ou sa rupture (hémorragie) prive de sang une zone du cortex moteur. Une lésion de l'hémisphère gauche entraîne une paralysie de la moitié droite du corps : c'est l'hémiplégie droite.
- La section accidentelle de la moelle épinière :
  * Si la section se produit dans la région lombaire ou dorsale : paralysie des deux membres inférieurs (paraplégie).
  * Si la section se produit dans la région cervicale : paralysie des quatre membres (tétraplégie).`,
  sections: [
    {
      title: 'I. L\'Aire Motrice Primaire et la Motricité Croisée',
      content: [
        'Le mouvement volontaire naît dans l\'aire motrice de la circonvolution frontale ascendante.',
        'La décussation pyramidale dans le bulbe rachidien explique que chaque hémisphère commande la motricité de la moitié opposée du corps (hétérolatéralité).'
      ],
      table: {
        headers: ['Élément anatomique', 'Localisation', 'Fonction dans le mouvement volontaire'],
        rows: [
          ['Aire motrice primaire', 'Circonvolution frontale ascendante', 'Genèse de l\'ordre moteur conscient'],
          ['Faisceau pyramidal', 'Tronc cérébral et moelle épinière', 'Conduction descendante de l\'influx moteur'],
          ['Décussation bulbaire', 'Bulbe rachidien', 'Croisement des voies motrices (commande croisée)'],
          ['Motoneurone médullaire', 'Corne ventrale de la moelle', 'Relais synaptique et voie motrice finale commune'],
          ['Muscle strié squelettique', 'Périphérie corporelle', 'Contraction et déplacement des pièces osseuses']
        ]
      }
    },
    {
      title: 'II. Conséquences des Lésions Nerveuses Motrices',
      content: [
        'Une atteinte du cortex moteur (AVC) produit une hémiplégie controlatérale.',
        'Une lésion médullaire interrompt la transmission descendante des ordres volontaires, entraînant une paraplégie ou une tétraplégie selon le niveau de la fracture vertébrale.'
      ]
    }
  ],
  diagram: {
    title: 'Voie du Mouvement Volontaire',
    root: 'MOUVEMENT VOLONTAIRE',
    branches: [
      {
        name: 'Origine Corticale',
        subtitle: 'Cerveau décisionnel',
        items: ['Aire motrice primaire (Gyrus précentral)', 'Cellules pyramidales de Betz', 'Homonculus moteur (mains, visage surreprésentés)']
      },
      {
        name: 'Voie Descendante',
        subtitle: 'Trajet de l\'ordre',
        items: ['Décussation pyramidale dans le bulbe (croisement)', 'Moelle épinière (relais moteur)', 'Nerfs moteurs rachidiens', 'Muscle effecteur (plaque motrice)']
      }
    ]
  },
  conclusion: "L'acte moteur volontaire illustre l'intégration sophistiquée du cortex cérébral, capable de coordonner des dizaines de muscles avec une précision millimétrique pour concrétiser nos intentions."
};

export const LESSON_6_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-6',
  number: 'Leçon 6',
  title: 'HYGIÈNE DU SYSTÈME NERVEUX',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Le système nerveux est un ensemble d'organes d'une extrême fragilité dont le bon fonctionnement conditionne l'équilibre physique, mental et social de l'individu. Exposé en permanence aux agressions de l'environnement moderne (bruit, écrans, stress, manque de sommeil) et aux substances chimiques nocives (drogues, alcool, tabac, médicaments psychotropes), il doit faire l'objet d'une hygiène rigoureuse afin d'éviter la dégénérescence neuronale, la dépendance et les troubles mentaux.",
  fullText: `L'hygiène du système nerveux regroupe l'ensemble des mesures visant à préserver l'intégrité anatomique et la vitalité fonctionnelle des neurones.

I. LES FACTEURS PERTURBATEURS DU SYSTÈME NERVEUX
1. Le surmenage et le manque de sommeil :
Le sommeil est un besoin biologique fondamental indispensable au repos des neurones, à la consolidation de la mémoire et à l'élimination des toxines cérébrales par le système glymphatique. Le manque chronique de sommeil provoque l'irritabilité, la baisse de la vigilance, des troubles de la concentration et un affaiblissement immunitaire.
2. Le bruit et les agressions sonores :
L'exposition prolongée à des bruits dépassant 85 décibels (circulation dense, écouteurs à volume excessif, ateliers bruyants) détruit irréversiblement les cellules ciliées de l'oreille interne et induit un stress nerveux permanent avec hypertension et insomnies.
3. Le stress et l'anxiété chronique :
La sécrétion prolongée de cortisol et d'adrénaline épuise l'organisme et altère les synapses de l'hippocampe, région clé de la mémoire.

II. LES SUBSTANCES PSYCHOACTIVES ET LEURS EFFETS TOXIQUES
Une substance psychoactive (drogue) est un composé chimique qui modifie le fonctionnement du système nerveux central en agissant sur la transmission synaptique.
1. Classification des drogues :
- Les Dépresseurs du SNC : ralentissent l'activité cérébrale (ex : Alcool, somnifères, anxiolytiques, héroïne).
- Les Stimulants du SNC : accélèrent le rythme cardiaque et créent une fausse impression d'énergie (ex : Tabac/nicotine, caféine, cocaïne, amphétamines).
- Les Perturbateurs ou Hallucinogènes : altèrent la perception de la réalité, créent des hallucinations visuelles et auditives (ex : Cannabis/THC, LSD, solvants volatils).

2. Mécanismes d'action synaptique :
Les drogues miment les neurotransmetteurs naturels, bloquent leur recapture ou forcent une libération massive de Dopamine dans le circuit de la récompense (noyau accumbens). Ce dérèglement engendre :
- La Tolérance (ou accoutumance) : nécessité d'augmenter sans cesse les doses pour ressentir le même effet.
- La Dépendance psychique : désir irrépressible et obsessionnel de consommer la substance (craving).
- La Dépendance physique : apparition d'un syndrome de sevrage très douloureux et angoissant en cas d'arrêt brutal (tremblements, sueurs, nausées, convulsions).

III. LES RÈGLES FONDAMENTALES D'HYGIÈNE NERVEUSE
Pour maintenir un système nerveux sain :
- Respecter un rythme de sommeil régulier (8 à 9 heures par nuit pour un adolescent).
- Pratiquer une activité physique régulière stimulant la sécrétion d'endorphines bienfaisantes.
- Adopter une alimentation équilibrée riche en vitamines B (légumineuses, céréales complètes) et en acides gras essentiels (oméga-3 du poisson).
- Éviter rigoureusement toute consommation de tabac, d'alcool, de chicha, de stupéfiants et d'automédication.
- Modérer le temps passé devant les écrans (téléphone portable, jeux vidéo), en particulier avant le coucher.`,
  sections: [
    {
      title: 'I. Agressions Quotidiennes : Sommeil, Bruit et Stress',
      content: [
        'Le sommeil nocturne permet la régénération métabolique des neurones et la consolidation synaptique de la mémoire.',
        'Les nuisances sonores et la surcharge d\'écrans génèrent fatigue nerveuse et baisse des capacités scolaires.'
      ]
    },
    {
      title: 'II. Les Drogues et le Détournement du Circuit de la Récompense',
      content: [
        'Les substances psychoactives altèrent la transmission au niveau des synapses dopaminergiques.',
        'La dépendance et l\'accoutumance enferment le toxicomane dans un cycle de destruction physique, psychologique et sociale.'
      ],
      table: {
        headers: ['Famille de substance', 'Exemples fréquents', 'Effets aigus sur le système nerveux', 'Dangers à long terme'],
        rows: [
          ['Dépresseurs', 'Alcool, anxiolytiques, opiacés', 'Ralentissement des réflexes, somnolence, euphorie passagère', 'Cirrhose, démence alcoolique, dépendance physique majeure'],
          ['Stimulants', 'Tabac (nicotine), cocaïne', 'Excitation, accélération cardiaque, insomnie', 'Hypertension, AVC, dépendance psychique foudroyante'],
          ['Hallucinogènes / Perturbateurs', 'Cannabis (THC), solvants', 'Altération du jugement, troubles de mémoire, hallucinations', 'Psychose cannabique, syndrome amotivationnel, échec scolaire']
        ]
      }
    },
    {
      title: 'III. Règles de Vie pour Préserver son Capital Nerveux',
      content: [
        'Pratique sportive et hygiène alimentaire variée protègent les neurones.',
        'Le refus ferme des drogues et de l\'alcool constitue la décision protectrice essentielle de l\'adolescent.'
      ]
    }
  ],
  diagram: {
    title: 'Hygiène du Système Nerveux',
    root: 'SANTÉ NERVEUSE',
    branches: [
      {
        name: 'Facteurs de Protection',
        subtitle: 'Bonnes pratiques',
        items: ['Sommeil suffisant (8-9h par nuit)', 'Alimentation équilibrée (Vitamines B, Oméga-3)', 'Sport & aération de l\'esprit', 'Limitation des écrans']
      },
      {
        name: 'Dangers Majeurs',
        subtitle: 'Substances à bannir',
        items: ['Alcool & ralentissement des réflexes', 'Tabac & dépendance à la nicotine', 'Cannabis, drogues dures & psychoses', 'Bruit excessif & stress chronique']
      }
    ]
  },
  conclusion: "Les neurones étant des cellules irremplaçables, la préservation du système nerveux exige une hygiène de vie saine et la vigilance constante face aux substances psychoactives pour sauvegarder son avenir intellectuel et physique."
};

export const LESSON_7_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-7',
  number: 'Leçon 7',
  title: 'LE SYSTÈME MUSCULAIRE',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Le système musculaire est le moteur mécanique du corps humain. Grâce à leurs propriétés contractiles uniques, les muscles squelettiques striés transforment l'énergie chimique issue des nutriments en travail mécanique et en chaleur, permettant le maintien de la posture, la locomotion et tous les mouvements volontaires ou réflexes en tirant sur les leviers osseux par l'intermédiaire des tendons.",
  fullText: `Le corps humain compte plus de 600 muscles squelettiques représentant environ 40 % du poids corporel.

I. STRUCTURE ANATOMIQUE ET HISTOLOGIQUE DU MUSCLE SQUELETTIQUE
1. Organisation macroscopique :
Un muscle strié typique (comme le biceps) présente un ventre charnu rouge, épais et contractile, terminé à ses deux extrémités par des tendons blancs, fibreux et inextensibles qui s'insèrent solidement sur les os.
2. Organisation microscopique :
Le muscle est entouré d'une membrane conjonctive (épimysium) et composé de faisceaux de fibres musculaires.
Chaque fibre musculaire est une cellule géante allongée (plusieurs centimètres), plurinucléée (comportant de nombreux noyaux en périphérie), dont le cytoplasme (sarcoplasme) est rempli de cylindres parallèles appelés myofibrilles.
3. Ultrastructure des myofibrilles :
Au microscope électronique, les myofibrilles présentent une alternance régulière de bandes sombres (bandes A anisotropes) et de bandes claires (bandes I isotropes), d'où le nom de muscle strié.
L'unité fonctionnelle contractile répétitive s'appelle le Sarcomère, délimité par deux stries Z successives. Le sarcomère est composé de deux types de myofilaments de nature protéique :
- Les filaments fins d'actine.
- Les filaments épais de myosine munis de têtes pivotantes.

II. LES TROIS PROPRIÉTÉS FONDAMENTALES DU MUSCLE SQUELETTIQUE
1. L'Excitabilité :
Aptitude du muscle à réagir à une stimulation directe (électrique) ou indirecte (via son nerf moteur) par une réponse mécanique.
2. La Contractilité :
Capacité du muscle à se raccourcir, s'épaissir et durcir lors de la contraction, exerçant ainsi une traction sur les os.
3. L'Élasticité :
Propriété qui permet au muscle, après avoir été étiré par une charge, de reprendre sa longueur initiale dès le retrait de la charge. Cette élasticité est amortissante mais limitée : au-delà d'une charge excessive, il y a déchirure musculaire (claquage).

III. MÉCANISME MOLÉCULAIRE DE LA CONTRACTION ET SOURCES D'ÉNERGIE
1. Le glissement des myofilaments :
Lors de la contraction, sous l'influence des ions calcium Ca2+ libérés par le réticulum sarcoplasmique, les têtes de myosine s'accrochent aux filaments d'actine et pivotent, entraînant le glissement des filaments d'actine entre les filaments de myosine vers le centre du sarcomère. Le sarcomère se raccourcit sans que les molécules elles-mêmes ne changent de longueur.
2. La molécule d'énergie : l'ATP (Adénosine Triphosphate) :
Le glissement et le décrochage des têtes de myosine consomment de l'ATP. L'énergie chimique de l'ATP est convertie en travail mécanique (~25 %) et en chaleur (~75 %, d'où l'élévation thermique à l'effort).
3. Voies de régénération de l'ATP :
- Voie aérobie (respiration cellulaire) : glucose + dioxygène -> dioxyde de carbone + eau + beaucoup d'ATP. Voie privilégiée lors des efforts d'endurance modérés.
- Voie anaérobie lactique (fermentation) : en cas d'effort intense où l'apport d'oxygène est insuffisant, le glucose est transformé rapidement en acide lactique. L'accumulation d'acide lactique et la baisse du pH participent à la fatigue musculaire.

IV. HYGIÈNE ET ACCIDENTS MUSCULAIRES
- Courbatures : micro-déchirures musculaires bénignes apparaissant 24 à 48h après un effort inhabituel.
- Crampe : contraction involontaire, douloureuse et prolongée d'un muscle due à un manque d'hydratation, d'électrolytes (potassium, magnésium) ou d'échauffement.
- Élongation et Déchirure (claquage) : rupture brutale de faisceaux de fibres sous un étirement excessif nécessitant un repos immédiat et du froid.
- Règles d'or : échauffement progressif, hydratation abondante avant, pendant et après l'effort, et étirements doux.`,
  sections: [
    {
      title: 'I. Anatomie et Histologie du Muscle Strié Squelettique',
      content: [
        'Le muscle squelettique est organisé en faisceaux de fibres musculaires délimités par du tissu conjonctif.',
        'La fibre musculaire est une cellule plurinucléée contenant des milliers de myofibrilles striées organisées en sarcomères.'
      ],
      table: {
        headers: ['Niveau d\'organisation', 'Composition', 'Rôle fonctionnel'],
        rows: [
          ['Muscle entier', 'Ventre charnu + tendons conjonctifs', 'Traction sur les leviers osseux articulés'],
          ['Faisceau musculaire', 'Groupe de 10 à 100 fibres musculaires', 'Cohésion mécanique du muscle'],
          ['Fibre musculaire', 'Cellule géante plurinucléée contractile', 'Unité cellulaire de contraction'],
          ['Sarcomère', 'Filaments d\'actine (fins) et myosine (épais)', 'Unité élémentaire de raccourcissement moléculaire']
        ]
      }
    },
    {
      title: 'II. Les Propriétés Physiologiques : Excitabilité, Contractilité, Élasticité',
      content: [
        'La contractilité permet au muscle de raccourcir et de durcir pour mouvoir les os.',
        'L\'élasticité agit comme un amortisseur mécanique protégeant les articulations lors des impacts.'
      ]
    },
    {
      title: 'III. Biochimie de la Contraction et Hygiène Sportive',
      content: [
        'La contraction résulte du glissement moléculaire de l\'actine sur la myosine mû par l\'hydrolyse de l\'ATP et modulé par le calcium.',
        'L\'échauffement, la bonne hydratation et une alimentation adaptée préviennent les accidents comme la crampe et le claquage.'
      ]
    }
  ],
  diagram: {
    title: 'Structure et Propriétés du Muscle',
    root: 'SYSTÈME MUSCULAIRE',
    branches: [
      {
        name: 'Propriétés Majeures',
        subtitle: 'Réponses physiologiques',
        items: ['Excitabilité (réponse au stimulus)', 'Contractilité (raccourcissement et force)', 'Élasticité (retour à la longueur initiale)']
      },
      {
        name: 'Structure & Énergie',
        subtitle: 'Mécanisme moléculaire',
        items: ['Sarcomères (actine & myosine)', 'Hydrolyse de l\'ATP & rôle du Ca2+', 'Respiration aérobie vs fermentation lactique', 'Échauffement & prévention des crampes']
      }
    ]
  },
  conclusion: "Le système musculaire convertit avec efficience l'énergie chimique des aliments en mouvement coordonné. Sa préservation repose sur une pratique sportive progressive, un échauffement méthodique et une hydratation continue."
};
'''

with open('src/data/courses_3eme_svt_part1.ts', 'w', encoding='utf-8') as f:
    f.write(code)

print("Created src/data/courses_3eme_svt_part1.ts successfully.")
