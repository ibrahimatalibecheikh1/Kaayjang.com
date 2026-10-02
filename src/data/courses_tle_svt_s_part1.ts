import { LessonContent } from './courses';

// =========================================================================
// SVT CLASSE DE TERMINALE S (S1 & S2) — PARTIE 1 (LEÇONS S-1 À S-4)
// Neurobiologie, tissu musculaire squelettique et régulation nerveuse
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_1_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-1',
  number: 'LEÇON S-1',
  title: 'LE RÉFLEXE MYOTATIQUE ET LE FONCTIONNEMENT DU FUSEAU NEUROMUSCULAIRE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 1 • Neurobiologie et Fonction musculaire (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '60 min d\'étude approfondie',
  description: 'Étude physiologique complète du réflexe myotatique (rotulien et achilléen) : récepteur sensoriel (fuseau neuromusculaire), fibres afférentes Ia et II, centre nerveux médullaire, motoneurone alpha, jonction neuromusculaire, et innervation réciproque de Sherrington avec interneurone inhibiteur.',
  image: {
    caption: 'Figure S1.1 : Arc réflexe myotatique monosynaptique et innervation réciproque de Sherrington',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad1)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">ORGANISATION DE L'ARC RÉFLEXE MYOTATIQUE MÉDULLAIRE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Récepteur Sensoriel</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Fuseau neuromusculaire</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Fibres intrafusales étirées</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Potentiel de récepteur gradué</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Fibres sensitives Ia (myéline)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Conduction centripète rapide</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Centre Médullaire</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Moelle épinière (substance grise)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Synapse monosynaptique excitatrice</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Interneurone inhibiteur glycinergique</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Motoneurone alpha homonyme</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Intégration et aiguillage</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Effecteurs Musculaires</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Muscle agoniste : contraction</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Muscle antagoniste : relâchement</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Jonction neuromusculaire (ACh)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Maintien de la posture debout</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Coordination motrice parfaite</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 1 : RELATIONS DE L'ORGANISME AVEC SON ENVIRONNEMENT
LEÇON S-1 : LE RÉFLEXE MYOTATIQUE ET LE FONCTIONNEMENT DU FUSEAU NEUROMUSCULAIRE

INTRODUCTION GÉNÉRALE

Le maintien de la posture corporelle chez l'Homme, qu'il s'agisse de la station debout contre la pesanteur terrestre ou de l'ajustement dynamique lors de la marche et du saut, repose sur des contractions musculaires involontaires, précises et coordonnées. Ces ajustements sont régis par un mécanisme neurophysiologique fondamental : le réflexe myotatique.

Par définition, le réflexe myotatique est la contraction réflexe (involontaire, rapide et stéréotypée) d'un muscle squelettique en réponse à son propre étirement. Découvert et analysé expérimentalement par le neurophysiologiste Charles Scott Sherrington (Prix Nobel de physiologie 1932), ce réflexe présente la particularité unique d'intégrer dans un même organe musculaire le capteur sensoriel (le fuseau neuromusculaire) et l'organe effecteur (les fibres musculaires extrafusales). L'étude détaillée de son arc réflexe constitue le prototype absolu de l'intégration nerveuse spinale (médullaire) au programme du Baccalauréat scientifique sénégalais.

---

I. MISE EN ÉVIDENCE EXPÉRIMENTALE DU RÉFLEXE MYOTATIQUE

1. Les observations cliniques chez l'Homme
- Le réflexe rotulien (patellaire) : Une percussion brève et sèche portée sur le tendon sous-rotulien à l'aide d'un marteau réflexe entraîne une extension involontaire et soudaine de la jambe sur la cuisse par contraction réflexe du muscle quadriceps fémoral (muscle extenseur étiré).
- Le réflexe achilléen : La percussion du tendon d'Achille provoque une extension du pied (flexion plantaire) par contraction brutale du muscle triceps sural (mollet).
- Caractéristiques universelles : Réponse immédiate (temps de latence très court de l'ordre de 15 à 25 millisecondes chez l'humain), constante chez le sujet sain, reproductible et totalement indépendante de la volonté du sujet.

2. Les expériences de section et de stimulation de Magendie et Bell
Pour identifier les voies nerveuses empruntées par le message, des sections expérimentales sont pratiquées sur les racines des nerfs rachidiens chez l'animal (grenouille, chat) :
- Section du nerf sciatique (nerf mixte) : Perte totale et définitive à la fois de la motricité réflexe et de la sensibilité du membre innervé. Le nerf sciatique est donc un nerf conducteur mixte sensitivo-moteur.
- Section de la racine postérieure (dorsale) en amont du ganglion spinal : Perte de la sensibilité dans le territoire innervé, mais maintien intégral de la motricité volontaire et réflexe induite par d'autres voies. La racine dorsale conduit exclusivement les messages sensitifs afférents (centripètes).
- Section de la racine antérieure (ventrale) : Paralysie motrice complète sans altération de la sensibilité consciente. La racine antérieure conduit exclusivement les messages moteurs efférents (centrifuges).
- Conclusion anatomique : Le message nerveux sensitif naît à la périphérie, pénètre dans la moelle épinière par la racine postérieure (où réside le corps cellulaire dans le ganglion spinal), s'articule dans la substance grise médullaire, et le message moteur en ressort par la racine antérieure pour rejoindre le muscle.

---

II. LE FUSEAU NEUROMUSCULAIRE : CAPTEUR DE L'ÉTIREMENT

1. Organisation histologique du fuseau neuromusculaire (FNM)
- Les FNM sont des récepteurs sensoriels microscopiques encapsulés, disposés en parallèle entre les fibres musculaires ordinaires (extrafusales).
- Chaque fuseau contient 3 à 10 fibres musculaires modifiées dites fibres intrafusales, dont la partie centrale est dépourvue de myofibrilles contractiles et riche en noyaux (fibres à sac nucléaire et fibres à chaîne nucléaire).
- L'innervation sensitive est assurée par :
  * Les fibres sensitives primaires (fibres Ia) : Fibres myélinisées de fort calibre (12 à 20 µm) à conduction ultrarapide (70 à 120 m/s), qui s'enroulent en spirale (terminaisons annulo-spirales) autour du centre de toutes les fibres intrafusales. Elles sont ultra-sensibles à la vitesse d'étirement (réponse phasique dynamique) et à l'amplitude d'étirement (réponse tonique statique).
  * Les fibres sensitives secondaires (fibres II) : Sensibles principalement au degré statique d'étirement.

2. Transduction et codage de l'étirement
- Lorsqu'un choc percute le tendon, le muscle s'allonge brutalement, ce qui distend la région centrale des fibres intrafusales du FNM.
- Cette déformation mécanique ouvre des canaux ioniques mécanosensibles dans la membrane des terminaisons sensitives : entrée d'ions Na+ et Ca2+, générant une dépolarisation membranaire locale appelée potentiel de récepteur.
- Le potentiel de récepteur est un signal analogique gradué : son amplitude est rigoureusement proportionnelle à l'intensité de l'étirement appliqué.
- Au niveau du premier nœud de Ranvier (site générateur), si le potentiel de récepteur dépasse le seuil d'excitation membranaire (-50 mV), il est converti en une salve de potentiels d'action (PA).
- Le codage du message nerveux dans la fibre afférente Ia se fait en modulation de fréquence de potentiels d'action : plus l'étirement musculaire est rapide et intense, plus la fréquence des potentiels d'action par unité de temps est élevée.

---

III. LE CENTRE NERVEUX MÉDULLAIRE ET L'INNERVATION RÉCIPROQUE DE SHERRINGTON

1. Le circuit monosynaptique excitateur homonyme
- L'axone myélinisé de la fibre Ia pénètre dans la moelle épinière par la racine postérieure, traverse la corne postérieure de la substance grise sans interruption et gagne directement la corne antérieure.
- Dans la corne antérieure, la fibre Ia établit une synapse chimique directe, excitatrice et unique avec les dendrites et le soma du motoneurone alpha innervant le même muscle étiré (muscle homonyme) et ses agonistes synergiques.
- Ce trajet ne comporte qu'une seule synapse centrale : c'est un réflexe monosynaptique. C'est ce qui explique son extrême brièveté temporelle (délai synaptique central d'à peine 0,5 à 0,7 ms).
- Le motoneurone alpha émet alors des potentiels d'action moteurs qui cheminent le long de son axone via la racine ventrale pour provoquer la contraction du muscle quadriceps, ramenant le muscle à sa longueur de consigne initiale.

2. L'innervation réciproque et le circuit disynaptique inhibiteur
- Pour que la jambe puisse s'étendre efficacement, il est biomécaniquement indispensable que le muscle opposé (le muscle semi-tendineux ou biceps fémoral, fléchisseur antagoniste) ne se contracte pas en même temps, mais se relâche totalement.
- Mécanisme cellulaire découvert par Sherrington :
  * Avant de faire synapse avec le motoneurone alpha, la fibre Ia émet une collatérale axonale qui s'articule avec un interneurone inhibiteur (interneurone de Renshaw ou interneurone Ia).
  * Cet interneurone libère au niveau de sa synapse avec le motoneurone du muscle antagoniste un neurotransmetteur inhibiteur : la glycine (ou le GABA).
  * La fixation de la glycine sur les récepteurs post-synaptiques provoque l'ouverture de canaux chlorures (Cl-), entraînant une entrée massive de Cl- et une hyperpolarisation de la membrane du motoneurone antagoniste : c'est un Potentiel Post-Synaptique Inhibiteur (PPSI).
  * Le motoneurone du muscle antagoniste est totalement réduit au silence : le muscle fléchisseur se décontracte passivement.
- Ce circuit comporte deux synapses (fibre Ia -> interneurone -> motoneurone antagoniste) : il est disynaptique.

---

IV. CONTRÔLE SUPRA-SPINAL ET SYSTÈME FUSIMOTEUR GAMMA

1. Le rôle du motoneurone gamma et la boucle gamma
- Les pôles contractiles des fibres intrafusales reçoivent une innervation motrice spécifique par de petits axones : les motoneurones gamma.
- Si le muscle entier se contracte, le FNM devrait théoriquement se détendre et devenir incapable de détecter un nouvel étirement (silence fusorial).
- Pour éviter cela, le système nerveux central active simultanément les motoneurones alpha et gamma (coactivation alpha-gamma) : la contraction des extrémités des fibres intrafusales maintient la portion centrale étirée et réactive, permettant au fuseau de surveiller en continu la tension musculaire même pendant la contraction active.

2. Les influences cérébrales et le tonus musculaire
- La moelle épinière n'est pas un centre isolé : elle est soumise en permanence aux influences descendantes excitatrices ou inhibitrices venues de la formation réticulée du tronc cérébral, du cervelet et du cortex moteur cérébral.
- La manœuvre de Jendrassik (le sujet tire sur ses mains croisées) augmente l'amplitude du réflexe rotulien en diminuant les inhibitions cérébrales descendantes.
- Le réflexe myotatique est à l'origine du tonus musculaire de posture : un état permanent de légère tension isométrique des muscles squelettiques anti-gravitaires.`,
  sections: [
    {
      title: 'I. Mise en évidence expérimentale du réflexe myotatique',
      content: [
        '1. Réflexes cliniques ostéo-tendineux : réflexe rotulien (extension de la jambe) et achilléen (flexion plantaire), involontaires et stéréotypés.',
        '2. Expériences de section de Magendie : la racine postérieure est strictement sensitive, la racine antérieure est strictement motrice, le nerf rachidien est mixte.'
      ]
    },
    {
      title: 'II. Le fuseau neuromusculaire et la genèse du message sensitif',
      content: [
        '1. Histologie : mécanorécepteur disposé en parallèle contenant des fibres intrafusales innervées par les fibres sensitives Ia à conduction rapide.',
        '2. Transduction sensorielle : étirement mécanique -> potentiel de récepteur gradué -> émission de potentiels d\'action codés en modulation de fréquence.'
      ]
    },
    {
      title: 'III. Le centre médullaire et l\'innervation réciproque de Sherrington',
      content: [
        '1. Circuit monosynaptique excitateur : synapse directe entre la fibre Ia et le motoneurone alpha du muscle agoniste homonyme.',
        '2. Circuit disynaptique inhibiteur : collatérale Ia excitant un interneurone glycinergique qui hyperpolarise (PPSI) le motoneurone du muscle antagoniste.'
      ]
    },
    {
      title: 'IV. Contrôle supra-spinal et boucle gamma',
      content: [
        '1. Motoneurones gamma : ajustement de la tension intrafusale lors du raccourcissement musculaire (coactivation alpha-gamma).',
        '2. Tonus musculaire de posture : régulation permanente par les voies motrices cérébrales descendantes de la tonicité anti-gravitaire.'
      ]
    }
  ]
};

export const LESSON_2_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-2',
  number: 'LEÇON S-2',
  title: 'LE TISSU NERVEUX : POTENTIEL DE REPOS ET POTENTIEL D\'ACTION',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 1 • Neurobiologie et Fonction musculaire (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '65 min d\'étude approfondie',
  description: 'Analyse biophysique et ionique du fonctionnement neuronal : genèse du potentiel de repos (-70 mV, perméabilité aux ions K+, pompe Na+/K+ ATPase), cinétique du potentiel d\'action (canaux sodiques et potassiques voltage-dépendants), loi du tout ou rien, périodes réfractaires et propagation saltatoire de l\'influx nerveux.',
  image: {
    caption: 'Figure S1.2 : Cinétique ionique du potentiel d\'action neuronal et propagation saltatoire de l\'influx',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad2)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">BIOPHYSIQUE DU POTENTIEL D'ACTION ET CONDUCTION IONIQUE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Potentiel de Repos (-70mV)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Gradient chimique Na+/K+</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Canaux de fuite à K+ ouverts</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Sortie d'ions K+ (polarisation)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Pompe Na+/K+ (3 Na+ out / 2 K+ in)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ État électrochimique stable</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Phases du PA (+30mV)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Seuil d'excitation (-50mV)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Dépolarisation : entrée Na+ CVD</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Repolarisation : sortie K+ CVD</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Hyperpolarisation : retard K+</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Durée brève : 1 à 2 ms</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Conduction Saltatoire</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Fibres myélinisées (Schwann)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Isolant lipidique de myéline</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Nœuds de Ranvier denses en CVD</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Saut d'un nœud à l'autre (100 m/s)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Vitesse &amp; économie d'énergie</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 1 : RELATIONS DE L'ORGANISME AVEC SON ENVIRONNEMENT
LEÇON S-2 : LE TISSU NERVEUX : POTENTIEL DE REPOS ET POTENTIEL D'ACTION

INTRODUCTION GÉNÉRALE

Le système nerveux assure la communication rapide et le traitement des informations au sein de l'organisme grâce à des cellules hautement spécialisées : les neurones. Ces cellules excitables possèdent la propriété unique d'engendrer et de propager des signaux bioélectriques.

À l'aide de microélectrodes intracellulaires et d'oscilloscopes cathodiques (expériences pionnières de Hodgkin, Huxley et Katz sur l'axone géant de calmar, Prix Nobel 1963), les neurophysiologistes ont pu mesurer avec une extrême précision les différences de potentiel transmembranaires. Deux phénomènes électriques majeurs caractérisent le neurone :
- Le potentiel de repos (ou potentiel de membrane), présent en permanence en l'absence de toute stimulation ;
- Le potentiel d'action, réponse explosive et transitoire déclenchée lorsque la cellule est stimulée efficacement.
La compréhension fine des mécanismes biophysiques et des mouvements d'ions à travers les canaux membranaires est un classique incontournable des épreuves du Baccalauréat scientifique sénégalais.

---

I. LE POTENTIEL DE REPOS (PR) : ORIGINE ÉLECTROCHIMIQUE

1. Mise en évidence expérimentale et valeur du PR
- Lorsqu'on place une microélectrode de référence à la surface externe d'un axone non stimulé et qu'on enfonce une microélectrode réceptrice de verre (diamètre < 0,5 µm) à l'intérieur du cytoplasme (axoplasme), l'écran de l'oscilloscope enregistre un saut brutal de tension : le potentiel passe de 0 mV à environ -70 mV.
- Cette valeur négative permanente atteste que la face interne de la membrane plasmique neuronale est chargée négativement par rapport à sa face externe, chargée positivement. C'est le potentiel de repos (PR).

2. La dissymétrie de répartition des ions de part et d'autre de la membrane
L'analyse chimique montre une inégale répartition des ions majeurs entre le milieu intracellulaire et le liquide extracellulaire :
- Les ions potassium (K+) sont très concentrés à l'intérieur de la cellule (environ 140 à 150 mmol/L) et peu concentrés à l'extérieur (environ 4 à 5 mmol/L).
- Les ions sodium (Na+) sont très concentrés à l'extérieur (environ 145 mmol/L) et faiblement concentrés à l'intérieur (environ 12 à 15 mmol/L).
- Les ions chlorures (Cl-) sont prédominants à l'extérieur (110 à 120 mmol/L contre 10 mmol/L à l'intérieur).
- De gros anions protéiques et phosphates organiques non diffusibles (A-) sont confinés exclusivement à l'intérieur de la cellule.

3. Les mécanismes de maintien du potentiel de repos
- La perméabilité sélective et les canaux de fuite (canaux ioniques passifs) :
  * À l'état de repos, la membrane neuronale est environ 50 à 100 fois plus perméable aux ions K+ qu'aux ions Na+, car elle contient une grande densité de canaux de fuite à K+ ouverts en permanence.
  * Les ions K+ ont donc une tendance naturelle à sortir de la cellule en descendant leur gradient de concentration chimique.
  * En sortant, ils emportent avec eux des charges positives, laissant derrière eux les gros anions A- non diffusibles, ce qui crée une charge négative sur la face interne de la membrane.
  * Cette électronégativité interne crée un gradient électrique qui retient les K+ : le potentiel d'équilibre électrochimique du potassium (défini par l'équation de Nernst : E_K ≈ -90 mV) est très proche de la valeur du PR (-70 mV).
  * Une faible entrée passive d'ions Na+ par quelques canaux de fuite à Na+ ramène la valeur de -90 mV à -70 mV.
- Le rôle indispensable de la pompe Na+/K+ ATPase :
  * Les fuites passives continues de K+ vers l'extérieur et de Na+ vers l'intérieur risqueraient d'annihiler les gradients chimiques à long terme.
  * La pompe Na+/K+ ATPase, protéine membranaire enzymatique utilisant l'énergie de l'hydrolyse de l'ATP, rétablit activement ces gradients en expulsant 3 ions Na+ vers l'extérieur et en réintroduisant 2 ions K+ vers l'intérieur contre leurs gradients respectifs.
  * Cette pompe est électrogène et maintient indéfiniment la négativité membranaire. Si l'on empoisonne la cellule au dinitrophénol (DNP) ou à l'ouabaïne (qui bloque la pompe), les gradients s'estompent et le potentiel de repos s'effondre à 0 mV.

---

II. LE POTENTIEL D'ACTION (PA) : ÉLECTROPHYSIOLOGIE ET PHASES IONIQUES

1. Caractéristiques du potentiel d'action
- Lorsqu'une stimulation électrique efficace (dépassant le seuil d'excitation liminaire d'environ -50 mV) est appliquée à l'axone, la membrane réagit par une variation brusque et stéréotypée du potentiel : c'est le potentiel d'action (durée : 1 à 2 millisecondes).
- Loi du "Tout ou Rien" : Pour une fibre nerveuse isolée, une stimulation infra-liminaire (au-dessous du seuil) ne déclenche aucun PA. Dès que le seuil d'excitation est atteint ou dépassé, le potentiel d'action se déclenche avec son amplitude maximale constante (environ 100 à 110 mV, allant de -70 mV à +35 mV), quelle que soit l'intensité de la stimulation sus-liminaire.

2. Les différentes phases du potentiel d'action
- Phase 1 : La dépolarisation locale jusqu'au seuil (-70 mV à -50 mV) suite à la stimulation.
- Phase 2 : La dépolarisation explosive et inversion de polarité (overshoot) :
  * Dès que le seuil de -50 mV est atteint, des canaux sodium voltage-dépendants (CVD-Na+) s'ouvrent massivement en une fraction de milliseconde.
  * Les ions Na+ s'engouffrent brutalement dans la cellule, attirés à la fois par le gradient de concentration et le gradient électrique (gradient électrochimique).
  * Cette entrée massive de charges positives dépolarise la membrane et inverse sa polarité : l'intérieur devient positif (+30 à +35 mV).
- Phase 3 : La repolarisation (+35 mV à -70 mV) :
  * Après environ 0,5 ms, les CVD-Na+ se ferment et s'inactivent automatiquement. L'entrée de sodium cesse.
  * Simultanément, des canaux potassium voltage-dépendants (CVD-K+) s'ouvrent plus lentement.
  * Les ions K+ sont violemment expulsés de la cellule vers l'extérieur par répulsion électrique et gradient chimique.
  * Cette fuite de charges positives rétablit la négativité intracellulaire.
- Phase 4 : L'hyperpolarisation transitoire (-70 mV à -80 mV) :
  * La fermeture des CVD-K+ est lente et retardée. Les ions K+ continuent de sortir brièvement au-delà du potentiel de repos, atteignant -80 mV.
- Phase 5 : Retour au potentiel de repos :
  * La pompe Na+/K+ ATPase restaure les concentrations initiales respectives en chassant les ions Na+ entrés et en réintégrant les ions K+ sortis.

3. Les périodes réfractaires
- Période réfractaire absolue (PRA) : Durant la dépolarisation et le début de la repolarisation (environ 1 ms), les CVD-Na+ sont soit déjà tous ouverts, soit complètement inactivés. Aucun second potentiel d'action ne peut être généré, quelle que soit la puissance de la stimulation. C'est ce qui impose une fréquence maximale de décharge des neurones (limite de 500 à 1000 PA/s) et empêche le signal de faire demi-tour.
- Période réfractaire relative (PRR) : Durant l'hyperpolarisation, les CVD-Na+ commencent à redevenir activables, mais une stimulation supraliminaire beaucoup plus forte est nécessaire pour atteindre le seuil.

---

III. LA PROPAGATION DE L'INFLUX NERVEUX

1. Dans les fibres amyéliniques (conduction continue de proche en proche)
- La dépolarisation d'une zone membranaire crée des courants locaux entre la région active (chargée positivement à l'intérieur) et la région voisine au repos (chargée négativement).
- Ces courants locaux dépolarisent la zone contiguë jusqu'au seuil, y ouvrant de nouveaux CVD-Na+ qui génèrent un nouveau PA identique.
- La propagation est continue, unidirectionnelle (en raison de la période réfractaire de la zone venant de décharger) mais relativement lente (0,5 à 2 m/s).

2. Dans les fibres myélinisées (conduction saltatoire ultrarapide)
- Les fibres nerveuses des vertébrés sont entourées d'une gaine de myéline (cellules de Schwann en périphérie, oligodendrocytes dans le système nerveux central), riche en lipides isolants.
- La myéline est interrompue à intervalles réguliers par les nœuds de Ranvier, où la membrane plasmique de l'axone est nue et surchargée d'une densité prodigieuse de CVD-Na+ et CVD-K+ (plus de 10 000 canaux/µm²).
- L'influx nerveux ne peut pas circuler à travers la myéline isolante : les courants locaux sautent d'un nœud de Ranvier au suivant. C'est la conduction saltatoire.
- Avantages décisifs :
  * Vitesse phénoménale : jusqu'à 100 à 120 m/s (contre 1 m/s en fibre amyélinique).
  * Économie d'énergie cellulaire : les échanges ioniques n'ont lieu qu'au niveau des nœuds de Ranvier, ce qui réduit considérablement le travail de pompage d'ATP de la pompe Na+/K+ ATPase.`,
  sections: [
    {
      title: 'I. Le potentiel de repos : nature et origine ionique',
      content: [
        '1. Démonstration expérimentale : mesure intracellulaire stable à -70 mV sur l\'axone au repos (face interne électronégative).',
        '2. Asymétrie ionique : prédominance intracellulaire de K+ et extracellulaire de Na+ et Cl-.',
        '3. Mécanismes : sortie passive d\'ions K+ par les canaux de fuite et maintien actif contre les gradients par la pompe Na+/K+ ATPase.'
      ]
    },
    {
      title: 'II. Le potentiel d\'action : cinétique et perméabilités ioniques',
      content: [
        '1. Loi du tout ou rien : absence de réponse sous le seuil (-50 mV) et amplitude maximale constante (100 mV) dès le seuil atteint.',
        '2. Dépolarisation : ouverture foudroyante des CVD-Na+ et entrée massive de sodium (inversion jusqu\'à +35 mV).',
        '3. Repolarisation et hyperpolarisation : inactivation des CVD-Na+, ouverture des CVD-K+ et sortie de potassium.',
        '4. Périodes réfractaires absolue et relative limitant la fréquence maximale d\'émission et imposant le sens de propagation.'
      ]
    },
    {
      title: 'III. La propagation de l\'influx nerveux',
      content: [
        '1. Fibres amyéliniques : courants locaux de proche en proche à vitesse lente (1 m/s).',
        '2. Fibres myélinisées : conduction saltatoire d\'un nœud de Ranvier à l\'autre à vitesse ultrarapide (100 à 120 m/s) avec économie d\'ATP.'
      ]
    }
  ]
};

export const LESSON_3_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-3',
  number: 'LEÇON S-3',
  title: 'LA TRANSMISSION SYNAPTIQUE ET L\'INTÉGRATION NEURONALE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 1 • Neurobiologie et Fonction musculaire (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '65 min d\'étude approfondie',
  description: 'Fonctionnement ultrastructural de la synapse chimique : entrée d\'ions Ca2+, exocytose du neurotransmetteur, récepteurs ionotropes post-synaptiques, genèse des PPSE et PPSI, sommation spatiale et temporelle, intégration au niveau du cône axonique (cône d\'émergence) et action des drogues et toxines (curare, toxine botulique, sarin).',
  image: {
    caption: 'Figure S1.3 : Événements moléculaires de la transmission synaptique chimique et intégration neuronale',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad3)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">FONCTIONNEMENT D'UNE SYNAPSE CHIMIQUE ET SOMMATION</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Bouton Pré-synaptique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Arrivée du potentiel d'action</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Dépolarisation membranaire</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Entrée massive de Ca2+ (CVD)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Exocytose du neurotransmetteur</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Libération quantique dans fente</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Membrane Post-synaptique</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Fixation sur récepteurs-canaux</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Synapse excitatrice (ACh/Glu) :</text>
        <text x="14" y="96" font-size="11" fill="#374151">  Entrée Na+ → PPSE dépolarisant</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Synapse inhibitrice (GABA/Gly) :</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">  Entrée Cl- → PPSI hyperpolarisant</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Intégration Neuronale</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Sommation spatiale (multi-synapses)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Sommation temporelle (fréquence)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Bilan algébrique au cône d'émergence</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Si somme ≥ seuil : genèse de PA</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Rôle intégrateur fondamental</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 1 : RELATIONS DE L'ORGANISME AVEC SON ENVIRONNEMENT
LEÇON S-3 : LA TRANSMISSION SYNAPTIQUE ET L'INTÉGRATION NEURONALE

INTRODUCTION GÉNÉRALE

Dans le système nerveux, l'information ne circule pas le long d'un réseau continu fermé, mais franchit des zones de jonction spécialisées appelées synapses (terme forgé par Sherrington du grec "sunaptein", joindre). On dénombre plus de 100 000 milliards de synapses dans le cerveau humain.

Contrairement aux synapses électriques rares (jonctions communicantes de type gap junctions), la très grande majorité des synapses sont des synapses chimiques. Elles transforment un signal électrique présynaptique en un signal chimique moléculaire (le neurotransmetteur), qui est ensuite reconverti en signal électrique sur la membrane postsynaptique. Cette discontinuité anatomique confère à la synapse des propriétés fondamentales : transmission unidirectionnelle stricte, retard synaptique (délai de 0,5 ms), sensibilité aux molécules pharmacologiques et surtout capacité d'intégration de milliers de signaux convergents.

---

I. ULTRASTRUCTURE D'UNE SYNAPSE CHIMIQUE

L'observation au microscope électronique à transmission révèle trois compartiments anatomiques indissociables :
1. L'élément présynaptique (bouton terminal de l'axone) :
   - Renferme de nombreuses mitochondries fournissant l'énergie (ATP).
   - Contient des milliers de vésicules synaptiques sphériques (diamètre 40 à 50 nm), chacune remplie de quelques milliers de molécules de neurotransmetteurs (les quanta).
   - Présente une membrane présynaptique munie de canaux calcium voltage-dépendants (CVD-Ca2+).
2. La fente synaptique :
   - Étroit espace extracellulaire de 20 à 50 nanomètres de large séparant physiquement les deux cellules, empêchant le passage direct du courant électrique.
3. L'élément postsynaptique (dendrite, corps cellulaire, axone ou plaque motrice musculaire) :
   - Sa membrane plasmique présente une densité postsynaptique épaisse formée d'échafaudages protéiques et de récepteurs spécifiques du neurotransmetteur.

---

II. LES ÉTAPES MOLÉCULAIRES DE LA TRANSMISSION SYNAPTIQUE

1. Étape 1 : Arrivée du potentiel d'action et entrée de calcium
- L'onde de dépolarisation du potentiel d'action atteint l'extrémité de l'axone présynaptique.
- Cette dépolarisation provoque l'ouverture immédiate des canaux calcium voltage-dépendants (CVD-Ca2+).
- Le calcium extracellulaire, très concentré à l'extérieur (environ 2 mmol/L contre 0,0001 mmol/L à l'intérieur), s'engouffre massivement dans le bouton terminal.
- L'élévation de la concentration cytosolique de Ca2+ est le déclencheur indispensable de la cascade : si l'on perfuse un milieu sans calcium, le PA arrive mais aucun neurotransmetteur n'est libéré.

2. Étape 2 : Exocytose du neurotransmetteur
- Les ions Ca2+ se fixent sur la synaptotagmine, protéine régulatrice du complexe SNARE (qui arrime les vésicules à la membrane).
- Les vésicules fusionnent avec la membrane présynaptique et déversent leur contenu par exocytose dans la fente synaptique.
- Plus la fréquence des potentiels d'action présynaptiques est élevée, plus l'entrée de Ca2+ est abondante et plus le nombre de vésicules exocytées est grand : le message électrique codé en fréquence de PA est converti en message chimique codé en concentration de neurotransmetteur.

3. Étape 3 : Interaction neurotransmetteur-récepteurs et réponse postsynaptique
- Les molécules de neurotransmetteur diffusent à travers la fente synaptique en quelques microsecondes et se fixent réversiblement sur des récepteurs spécifiques de la membrane postsynaptique :
  * Cas d'une synapse excitatrice (ex. récepteurs nicotiniques à l'acétylcholine ou récepteurs AMPA au glutamate) :
    La fixation ouvre des récepteurs-canaux ionotropes perméables aux cations (Na+).
    L'entrée de Na+ dépolarise localement la membrane postsynaptique : c'est le Potentiel Post-Synaptique Excitateur (PPSE).
  * Cas d'une synapse inhibitrice (ex. récepteurs GABA-A au GABA ou récepteurs à la glycine) :
    La fixation ouvre des récepteurs-canaux perméables aux anions chlorures (Cl-) ou au potassium (K+).
    L'entrée de Cl- ou la sortie de K+ hyperpolarise la membrane (de -70 mV à -75 mV) : c'est le Potentiel Post-Synaptique Inhibiteur (PPSI), qui éloigne le neurone du seuil de déclenchement.
- Caractéristiques des potentiels postsynaptiques (PPSE et PPSI) :
  * Ce sont des potentiels locaux, gradués (leur amplitude dépend de la quantité de neurotransmetteur fixé).
  * Ils ne respectent pas la loi du tout ou rien et se propagent avec décrément (atténuation exponentielle avec la distance).

4. Étape 4 : Inactivation et élimination rapide du neurotransmetteur
Pour que la synapse puisse transmettre de nouveaux messages successifs, le neurotransmetteur doit disparaître de la fente en moins de quelques millisecondes selon trois mécanismes :
- Dégradation enzymatique : L'acétylcholinestérase (AChE) hydrolyse l'acétylcholine en acétate et choline (cette dernière est recaptée par le bouton présynaptique).
- Recapture active : Des transporteurs membranaires présynaptiques réabsorbent le neurotransmetteur intact (cas de la dopamine, sérotonine, noradrénaline).
- Diffusion hors de la fente et capture par les cellules gliales (astrocytes).

---

III. L'INTÉGRATION NEURONALE ET LES SOMMATIONS

Un neurone moteur spinal reçoit sur ses dendrites et son soma entre 1 000 et 10 000 boutons synaptiques provenant de sources diverses, certains libérant des signaux excitateurs (PPSE) et d'autres des signaux inhibiteurs (PPSI).
Le neurone agit comme un véritable microprocesseur biologique grâce aux mécanismes de sommation :

1. La sommation spatiale :
- C'est l'addition algébrique, à un instant donné, de tous les PPSE et PPSI arrivant simultanément au niveau de synapses situées en des points géographiques différents de la membrane neuronale.
- Un PPSE isolé de 2 mV ne peut pas déclencher de PA (le seuil nécessite une dépolarisation d'au moins 15 à 20 mV). Mais si dix synapses excitatrices déchargent au même instant, leurs dépolarisations s'additionnent. À l'inverse, un PPSI concomitant peut annuler un PPSE de même amplitude.

2. La sommation temporelle :
- C'est l'addition de potentiels postsynaptiques successifs déclenchés au niveau d'une même synapse lorsque les potentiels d'action présynaptiques arrivent à fréquence rapprochée.
- Si le deuxième PPSE survient avant que le premier ne soit totalement dissipé, il s'ajoute au précédent et amplifie la dépolarisation.

3. Le site intégrateur : le cône d'émergence (zone gâchette)
- Les courants électriques nés sur les dendrites et le soma convergent vers le cône d'émergence de l'axone (cône axonique).
- Cette zone possède le seuil d'excitabilité le plus bas du neurone car elle abrite une densité exceptionnelle de canaux sodium voltage-dépendants (CVD-Na+).
- Le bilan algébrique s'y opère :
  * Si la somme globale (PPSE - PPSI) atteint ou dépasse le seuil critique (-50 mV), le cône génère un ou plusieurs potentiels d'action qui se propageront le long de l'axone sans faiblir.
  * Si la somme reste infra-liminaire, aucun potentiel d'action n'est émis : le neurone reste au repos.

---

IV. PHARMACOLOGIE ET PERTURBATIONS DES SYNAPSES

1. Le curare (antagoniste compétitif) :
- Se fixe sur les récepteurs nicotiniques de l'acétylcholine à la jonction neuromusculaire sans ouvrir le canal ionique.
- Il empêche l'acétylcholine de se fixer : blocage de la contraction musculaire, paralysie motrice flasque et mort par asphyxie respiratoire (paralysie du diaphragme).
2. Les organophosphorés et gaz innervants (ex. sarin) :
- Inhibiteurs irréversibles de l'acétylcholinestérase : l'acétylcholine s'accumule sans fin dans la fente, entraînant une tétanisation musculaire continue et convulsive.
3. La toxine botulique (Botox) :
- Détruit les protéines SNARE et empêche l'exocytose de l'acétylcholine : paralysie flasque mortelle.`,
  sections: [
    {
      title: 'I. Ultrastructure et propriétés de la synapse chimique',
      content: [
        '1. Anatomie : compartiment présynaptique (vésicules et CVD-Ca2+), fente synaptique (20 à 50 nm) et densité postsynaptique avec récepteurs spécifiques.',
        '2. Propriétés fondamentales : polarité unidirectionnelle stricte et délai synaptique de 0,5 milliseconde.'
      ]
    },
    {
      title: 'II. Mécanisme moléculaire en 4 étapes',
      content: [
        '1. Arrivée du PA et entrée de calcium : dépolarisation ouvrant les CVD-Ca2+ intracellulaires.',
        '2. Exocytose du neurotransmetteur : fusion vésiculaire dépendante du calcium et libération proportionnelle à la fréquence des PA présynaptiques.',
        '3. Réponses postsynaptiques : PPSE dépolarisant (entrée de Na+) ou PPSI hyperpolarisant (entrée de Cl- ou sortie de K+).',
        '4. Élimination : dégradation enzymatique (AChE) ou recapture pour réarmer la synapse.'
      ]
    },
    {
      title: 'III. L\'intégration neuronale et les sommations',
      content: [
        '1. Sommation spatiale : combinaison algébrique simultanée des signaux provenant de synapses multiples.',
        '2. Sommation temporelle : empilement de potentiels successifs générés par une salve à haute fréquence sur une même synapse.',
        '3. Rôle du cône d\'émergence : site déclencheur à haute densité de CVD-Na+ convertissant le résultat de la sommation en potentiels d\'action si le seuil est franchi.'
      ]
    }
  ]
};

export const LESSON_4_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-4',
  number: 'LEÇON S-4',
  title: 'LE TISSU MUSCULAIRE SQUELETTIQUE ET LA CONVERSION D\'ÉNERGIE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 1 • Neurobiologie et Fonction musculaire (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '65 min d\'étude approfondie',
  description: 'Organisation histologique et ultrastructurale de la cellule musculaire striée squelettique : sarcomère, filaments fins d\'actine et filaments épais de myosine, cycle moléculaire de la contraction (rôle de Ca2+ et de l\'ATP), couplage excitation-contraction au niveau des tubules en T et du réticulum sarcoplasmique, et voies métaboliques de régénération de l\'ATP (anaérobie alactique, anaérobie lactique, aérobie).',
  image: {
    caption: 'Figure S1.4 : Ultrastructure du sarcomère et cycle moléculaire du glissement actine-myosine',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad4)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">LE SARCOMÈRE : UNITÉ FONCTIONNELLE ET CONVERSIONS D'ÉNERGIE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Le Sarcomère</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Délimité par 2 stries Z</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Disque sombre A (myosine + actine)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Disques clairs I (actine seule)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Zone H centrale (myosine seule)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Raccourcissement de H et I</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Rôle du Calcium et ATP</text>
        <text x="14" y="52" font-size="11" fill="#374151">• PA musculaire dans tubules T</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Libération Ca2+ du réticulum (RS)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Fixation Ca2+ sur troponine</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Démasquage des sites d'actine</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Basculement têtes myosine (45°)</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Régénération de l'ATP</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Voie anaérobie alactique (PCr)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Voie anaérobie lactique (glycolyse)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Voie aérobie mitochondriale (Krebs)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Rendement énergétique élevé</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Fourniture d'ATP permanente</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 1 : RELATIONS DE L'ORGANISME AVEC SON ENVIRONNEMENT
LEÇON S-4 : LE TISSU MUSCULAIRE SQUELETTIQUE ET LA CONVERSION D'ÉNERGIE

INTRODUCTION GÉNÉRALE

Le muscle strié squelettique est un convertisseur d'énergie biologique hors pair : il transforme de l'énergie chimique sous forme d'adénosine triphosphate (ATP) en travail mécanique (mouvement, force et tension) avec dégagement corollaire de chaleur indispensable à la thermorégulation corporelle.

Chez l'adulte, les muscles squelettiques représentent environ 40 % de la masse corporelle totale. Leur architecture hautement ordonnée et périodique au niveau microscopique confère au tissu son aspect "strié". La contraction musculaire ne correspond pas à un racornissement ou un rétrécissement des molécules protéiques, mais à un glissement actif des filaments d'actine entre les filaments de myosine au sein de chaque sarcomère, commandé par les ions calcium et motorisé par l'hydrolyse de l'ATP.

---

I. ORGANISATION STRUCTURALE ET ULTRASTRUCTURALE DU MUSCLE

1. De l'organe à la cellule musculaire (rhabdomyocyte)
- Le muscle est entouré d'une enveloppe conjonctive (épimysium) et constitué de faisceaux de fibres musculaires délimités par le périmysium.
- Chaque fibre musculaire est une cellule géante cylindrique (longueur pouvant atteindre plusieurs centimètres pour un diamètre de 10 à 100 µm), plurinucléée (syncytium issu de la fusion embryonnaire de nombreux myoblastes), délimitée par une membrane plasmique appelée sarcolemme doublée d'une lame basale.
- Le cytoplasme (sarcoplasme) est saturé de milliers de myofibrilles longitudinales contractiles, de réserves de glycogène, de molécules de myoglobine (pigment fixateur d'O2) et d'innombrables mitochondries volumineuses.

2. Le sarcomère : unité fonctionnelle contractile de la myofibrille
Au microscope optique à contraste de phase et au microscope électronique, les myofibrilles présentent une striation transversale périodique régulière constituée de motifs répétitifs appelés sarcomères (longueur au repos : environ 2,5 µm) :
- Les stries Z (Zwischenscheibe) : disques protéiques denses délimitant les deux extrémités d'un sarcomère.
- Le disque sombre A (bande anisotrope) : région centrale d'une longueur constante de 1,5 µm contenant les filaments épais de myosine et le chevauchement avec les filaments fins d'actine.
- Les disques clairs I (bandes isotropes) : situés de part et d'autre des stries Z, ils ne contiennent que des filaments fins d'actine.
- La bande H (Hell) : zone plus claire au milieu du disque sombre A, occupée exclusivement par la partie centrale des filaments épais de myosine (sans têtes).
- La ligne M (Mittelscheibe) : fine bande centrale reliant les filaments épais entre eux.

3. Ultrastructure moléculaire des myofilaments
- Les filaments fins d'actine (diamètre 5 à 7 nm) :
  * Formés par l'assemblage hélicoïdal de molécules d'actine globulaire (actine G polymérisée en actine F).
  * Associés à deux protéines régulatrices indispensables :
    - La tropomyosine : protéine filamenteuse qui masque les sites de liaison de la myosine sur l'actine à l'état de repos.
    - La troponine : complexe protéique fixé à intervalles réguliers sur la tropomyosine, possédant des sites de haute affinité pour les ions calcium (Ca2+).
- Les filaments épais de myosine (diamètre 15 nm) :
  * Composés de plusieurs centaines de molécules de myosine associées en faisceau.
  * Chaque molécule de myosine comprend une tige rigide terminée par deux têtes globulaires articulées capables de pivoter.
  * Chaque tête de myosine possède deux sites catalytiques majeurs : un site de fixation spécifique pour l'actine et un site enzymatique doué d'une activité ATPasique (capable d'hydrolyser l'ATP en ADP + Pi).

---

II. LE MÉCANISME MOLÉCULAIRE DU GLISSEMENT ET LE CYCLE DE LA CONTRACTION

1. Modifications structurales du sarcomère lors de la contraction
- Les deux stries Z se rapprochent l'une de l'autre : le sarcomère se raccourcit.
- Les disques clairs I rétrécissent.
- La zone H rétrécit et peut disparaître complètement lors d'une contraction maximale.
- La longueur du disque sombre A reste rigoureusement inchangée.
- Déduction de Hugh Huxley : Les filaments ne changent pas de longueur ; ils glissent les uns par rapport aux autres vers le centre du sarcomère.

2. Le couplage excitation-contraction
- Le potentiel d'action musculaire né à la jonction neuromusculaire se propage le long du sarcolemme et pénètre au cœur de la cellule grâce à des invaginations tubulaires transversales : les tubules en T.
- Au contact des citernes terminales du réticulum sarcoplasmique (qui séquestrent de très fortes concentrations d'ions Ca2+), le potentiel d'action stimule des récepteurs membranaires voltage-dépendants (récepteurs DHP couplés aux récepteurs à la ryanodine RyR1).
- Ce couplage mécanique provoque l'ouverture foudroyante des canaux Ca2+ du réticulum : le calcium inonde le sarcoplasme, passant d'une concentration basale de 0,1 µmol/L à plus de 10 µmol/L.

3. Le cycle des ponts d'union actomyosine en 4 étapes
- Étape 1 : Démasquage des sites d'interaction :
  Le Ca2+ libéré se fixe sur la troponine C. Cela induit un changement de conformation qui déplace la tropomyosine hors du sillon d'actine, démasquant ainsi les sites de liaison pour les têtes de myosine.
- Étape 2 : Formation du complexe actomyosine :
  Les têtes de myosine (chargées d'ADP et de Pi résultant d'une hydrolyse préalable de l'ATP) se fixent perpendiculairement sur les molécules d'actine.
- Étape 3 : Coup de force moteur (basculement des têtes) :
  La libération du phosphate inorganique (Pi) puis de l'ADP déclenche la détente mécanique du col de la myosine : les têtes pivotent vigoureusement de 90° à 45°. Ce mouvement tracte le filament d'actine d'environ 10 nm vers le centre du sarcomère.
- Étape 4 : Détachement et réarmement :
  Une nouvelle molécule d'ATP vient se fixer sur la tête de myosine. Cette fixation brise immédiatement la liaison actine-myosine : la tête se détache de l'actine.
  L'hydrolyse de l'ATP en ADP + Pi par l'activité ATPasique de la tête redresse celle-ci à sa position initiale de 90°, prête pour un nouveau cycle si le calcium est toujours présent.
- Phénomène de la rigidité cadavérique (rigor mortis) :
  Après la mort, la production d'ATP cesse par arrêt métabolique. Les têtes de myosine restent fixées irréversiblement à l'actine en position basculée : les muscles demeurent inextensibles et rigides jusqu'à la décomposition protéolytique des tissus.

4. La relaxation musculaire
- Dès la fin de la stimulation nerveuse, des pompes à calcium ATP-dépendantes situées sur la membrane du réticulum sarcoplasmique (pompes SERCA) réabsorbent activement les ions Ca2+ contre leur gradient.
- La troponine perd son calcium ; la tropomyosine reprend sa place et masque à nouveau les sites d'interaction de l'actine. Le muscle se relâche passivement.

---

III. LES VOIES BIOCHIMIQUES DE RÉGÉNÉRATION DE L'ATP DANS LE MUSCLE

La concentration intracellulaire d'ATP dans la fibre musculaire est minime (environ 4 à 6 mmol/kg de muscle frais), ce qui ne permet d'alimenter qu'une ou deux secondes d'effort maximal. Pour maintenir la contraction, le muscle régénère en continu son ATP via trois voies métaboliques complémentaires :

1. La voie anaérobie alactique (filière des phosphagènes — effort explosif de 0 à 10 secondes) :
- Elle n'utilise ni dioxygène (O2) ni ne produit d'acide lactique.
- Utilise la phosphocréatine (PCr) présente dans le sarcoplasme :
  Phosphocréatine + ADP <==> Créatine + ATP (réaction catalysée par la créatine kinase).
- Réaction ultra-rapide fournissant une puissance instantanée maximale (sprint du 100 mètres, saut, haltérophilie).

2. La voie anaérobie lactique (glycolyse anaérobie — effort intense de 10 secondes à 2 minutes) :
- Dégradation du glucose (issu du glycogène musculaire) en absence d'O2 :
  Glucose + 2 ADP + 2 Pi ===> 2 Lactate + 2 H+ + 2 ATP.
- Permet une puissance élevée mais limitée par l'accumulation de protons H+ et d'ions lactate qui abaissent le pH intracellulaire (acidose métabolique), inhibant les enzymes de contraction et provoquant la fatigue musculaire aiguë.

3. La voie aérobie (respiration cellulaire mitochondriale — effort d'endurance supérieur à 2 minutes) :
- Utilise le dioxygène apporté par la circulation sanguine pour oxyder complètement les substrats organiques (glucose, acides gras libres, corps cétoniques) dans les mitochondries :
  Cycle de Krebs et phosphorylation oxydative :
  1 Glucose + 6 O2 + 32 ADP + 32 Pi ===> 6 CO2 + 6 H2O + 32 ATP.
- Rendement énergétique colossal (32 ATP par molécule de glucose oxydée, et jusqu'à plus de 100 ATP par acide gras comme le palmitate). C'est la filière reine des efforts prolongés (marathon, cyclisme, vie quotidienne).`
  ,
  sections: [
    {
      title: 'I. Structure et organisation du sarcomère',
      content: [
        '1. Cellule musculaire striée : syncytium plurinucléé rempli de myofibrilles longitudinales, sarcolemme et tubules en T.',
        '2. Sarcomère délimité par deux stries Z : disques sombres A à longueur fixe (1,5 µm), disques clairs I et bande H centrale.',
        '3. Protéines myofilamentaires : actine hélicoïdale associée à la troponine/tropomyosine, et filaments épais de myosine à têtes motrices ATPasiques.'
      ]
    },
    {
      title: 'II. Couplage excitation-contraction et cycle actomyosine',
      content: [
        '1. Rôle du calcium : potentiel d\'action musculaire dans les tubules T ouvrant les canaux Ca2+ du réticulum sarcoplasmique.',
        '2. Démasquage par la troponine et formation du complexe actomyosine.',
        '3. Basculement des têtes (45°) et glissement de l\'actine vers le centre du sarcomère lors de la libération d\'ADP et Pi.',
        '4. Rôle primordial de l\'ATP : rupture de la liaison actomyosine permettant le détachement, puis hydrolyse pour le réarmement des têtes.'
      ]
    },
    {
      title: 'III. Voies de régénération de l\'ATP musculaire',
      content: [
        '1. Anaérobie alactique : phosphocréatine (PCr + ADP -> Créatine + ATP), effort instantané explosif (0 à 10 s).',
        '2. Anaérobie lactique : glycolyse (2 ATP/glucose et production de lactate), effort intense intermédiaire (10 s à 2 min).',
        '3. Aérobie mitochondriale : respiration cellulaire complète (32 ATP/glucose), rendement maximal pour les efforts d\'endurance.'
      ]
    }
  ]
};
