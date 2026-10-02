import { LessonContent } from './courses';

// =========================================================================
// SVT CLASSE DE TERMINALE S (S1 & S2) — PARTIE 2 (LEÇONS S-5 À S-7)
// Homéostasie, régulation hormonale et reproduction humaine
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_5_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-5',
  number: 'LEÇON S-5',
  title: 'LA RÉGULATION DE LA GLYCÉMIE ET LES DIABÈTES',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 2 • Homéostasie et Communication hormonale (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '65 min d\'étude approfondie',
  description: 'Étude biophysique et endocrinienne de l\'homéostasie glucidique : la glycémie paramètre physiologique régulé (0,8 à 1,1 g/L), le pancréas endocrine (îlots de Langerhans, cellules alpha et bêta), l\'insuline seule hormone hypoglycémiante, les hormones hyperglycémiantes (glucagon, adrénaline, cortisol), les organes effecteurs (foie, muscle, tissu adipeux) et l\'étiologie des diabètes de type 1 et de type 2.',
  image: {
    caption: 'Figure S2.1 : Boucle de régulation homéostasique de la glycémie par le pancréas endocrine',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad5)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">SYSTÈME HOMÉOSTASIQUE DE RÉGULATION DE LA GLYCÉMIE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Paramètre Régulé</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Valeur consigne : 1,00 g/L</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Fourchette normale : 0,8 - 1,1 g/L</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Perturbation : repas (hyperglycémie)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Perturbation : jeûne/effort (hypo)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Capteur = Cellules des îlots</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Capteurs &amp; Effecteurs</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Cellules bêta : Insuline (hypoglyc.)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Cellules alpha : Glucagon (hyperglyc.)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Foie : glycogénogenèse / lyse</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Muscles : stockage glycogène</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Rétroaction négative parfaite</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Pathologies Diabétiques</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Diabète Type 1 : auto-immun</text>
        <text x="14" y="74" font-size="11" fill="#374151">  Destruction totale des cellules bêta</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Diabète Type 2 : insulinorésistance</text>
        <text x="14" y="118" font-size="11" fill="#374151">  Déficit des récepteurs cibles</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Glycosurie &amp; polyuro-polydipsie</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 2 : L'HOMÉOSTASIE ET LA COMMUNICATION HORMONALE
LEÇON S-5 : LA RÉGULATION DE LA GLYCÉMIE ET LES DIABÈTES

INTRODUCTION GÉNÉRALE

Le glucose est le carburant énergétique universel et indispensable des cellules animales. Certaines cellules de l'organisme, comme les neurones cérébraux et les hématies (globules rouges), sont dites strictement glucodépendantes : privées de glucose ne serait-ce que quelques minutes, elles subissent des lésions irréversibles ou meurent. À l'inverse, un excès chronique de glucose sanguin est toxique pour les microvaisseaux, les reins et la rétine.

Par conséquent, l'organisme maintient la concentration plasmatique de glucose — appelée glycémie — autour d'une valeur de consigne remarquablement stable, comprise entre 0,80 g/L et 1,10 g/L (soit 4,4 à 6,1 mmol/L) chez un sujet sain à jeun. Ce maintien dynamique, en dépit d'apports alimentaires massifs et discontinus ou de jeûnes prolongés, constitue un exemple archétypal d'homéostasie biologique régie par une boucle de rétroaction négative hormonale.

---

I. LA GLYCÉMIE : UN PARAMÈTRE PHYSIOLOGIQUE RÉGULÉ

1. Constats expérimentaux de la stabilité glycémique
- Après l'ingestion d'un repas riche en glucides (épreuve d'hyperglycémie provoquée par voie orale), la glycémie s'élève brièvement jusqu'à 1,40 g/L, puis revient à sa valeur basale en moins de deux heures.
- Lors d'un effort physique intense ou d'un jeûne nocturne de 12 heures, la glycémie ne s'effondre pas : elle oscille autour de 0,85 à 0,90 g/L.
- Ces observations prouvent l'existence d'un système cybernétique de régulation comprenant :
  * Un capteur d'écart mesurant en permanence la glycémie ;
  * Des messagers endocriniens (les hormones) véhiculés par le sang ;
  * Des organes effecteurs capables de stocker ou de libérer du glucose.

2. Les organes effecteurs du stockage et de la libération
- Le foie, organe pivot et carrefour métabolique :
  * L'expérience historique du "foie lavé" de Claude Bernard (1855) : Bernard lave abondamment un foie de chien fraîchement prélevé jusqu'à ce que l'eau sortant des veines sus-hépatiques ne contienne plus aucune trace de sucre. Laissé à température ambiante pendant 24 heures, le foie produit à nouveau d'abondantes quantités de glucose. Conclusion : le foie contient une substance de réserve insoluble (le glycogène) qu'il est capable d'hydrolyser en glucose libre.
  * Le foie est le seul organe capable de libérer du glucose dans le sang circulant (organe exportateur de glucose), car ses hépatocytes possèdent l'enzyme clé : la glucose-6-phosphatase.
  * Réactions hépatiques :
    - La glycogénogenèse : polymérisation du glucose sanguin en glycogène hépatique (réserve d'environ 100 g).
    - La glycogénolyse : hydrolyse du glycogène en glucose-6-phosphate puis en glucose libre déversé dans le sang.
    - La néoglucogenèse : synthèse de novo de glucose à partir de précurseurs non glucidiques (lactate, glycérol des lipides, acides aminés glucoformateurs comme l'alanine).
- Les muscles squelettiques :
  * Stockent d'importantes réserves de glycogène (environ 400 g pour l'ensemble de la masse musculaire).
  * Les myocytes sont dépourvus de glucose-6-phosphatase : le glycogène musculaire est strictement réservé à la consommation énergétique propre de la fibre musculaire par glycolyse. Le muscle ne peut jamais libérer de glucose dans la circulation générale.
- Le tissu adipeux :
  * Transforme l'excédent de glucose en triglycérides stockés dans les adipocytes (lipogenèse). En période de jeûne prolongé, la lipolyse libère du glycérol qui alimente la néoglucogenèse hépatique.

---

II. LE SYSTÈME HORMONAL DE RÉGULATION : LE PANCRÉAS ENDOCRINE

1. Démonstration du rôle du pancréas
- La pancreatectomie totale chez le chien provoque dans les heures qui suivent une hyperglycémie foudroyante (> 3 g/L), une glycosurie (présence de glucose dans les urines au-delà du seuil rénal de 1,80 g/L), une polyurie-polydipsie et la mort par coma acido-cétosique.
- La greffe temporaire d'un pancréas vascularisé au cou de l'animal rétablit immédiatement une glycémie normale. La régulation pancréatique est donc strictement humorale (hormonale) et non nerveuse.

2. Histologie des îlots de Langerhans
Le pancréas est une glande amphicrine (à la fois exocrine pour la digestion et endocrine pour la glycémie). La fonction endocrine est assurée par environ 1 million d'îlots de Langerhans disséminés dans le parenchyme :
- Les cellules alpha périphériques (20 %) : sécrètent le glucagon, hormone hyperglycémiante.
- Les cellules bêta centrales (70 à 80 %) : sécrètent l'insuline, unique hormone hypoglycémiante de l'organisme.
- Les cellules delta (5 %) : sécrètent la somatostatine (rôle paracrine inhibiteur).

3. L'insuline : seule hormone hypoglycémiante
- Protéine peptidique de 51 acides aminés reliés par deux ponts disulfures.
- Déclencheur de sécrétion : L'élévation de la glycémie au-dessus de 1 g/L stimule directement les cellules bêta (entrée de glucose par GLUT2, augmentation du rapport ATP/ADP, fermeture des canaux K+ sensibles à l'ATP, dépolarisation, ouverture des canaux Ca2+ et exocytose d'insuline).
- Actions cellulaires de l'insuline sur les organes cibles :
  * Elle se fixe sur un récepteur membranaire spécifique à activité tyrosine kinase.
  * Déclenche la translocation vers la membrane plasmique des transporteurs de glucose GLUT4 dans le muscle et le tissu adipeux, multipliant l'entrée cellulaire de glucose par 20 à 40.
  * Dans le foie : active la glycogène synthase (stimule la glycogénogenèse), inhibe la glycogène phosphorylase (bloque la glycogénolyse) et freine la néoglucogenèse.
  * Dans le tissu adipeux : stimule la lipogenèse et inhibe la lipolyse.
  * Résultat global : diminution nette de la glycémie vers la valeur consigne de 1 g/L.

4. Les hormones hyperglycémiantes : le glucagon et ses synergiques
- Le glucagon : polypeptide de 29 acides aminés sécrété par les cellules alpha en réponse à une hypoglycémie (< 0,8 g/L).
  * Cible presque exclusivement les hépatocytes (récepteur couplé aux protéines G, augmentation de l'AMPc et de la PKA).
  * Stimule puissamment la glycogénolyse hépatique et la néoglucogenèse.
  * Résultat : libération rapide de glucose dans la veine sus-hépatique et remontée de la glycémie.
- Les hormones hyperglycémiantes relais d'urgence et d'adaptation :
  * L'adrénaline (médullosurrénale) : sécrétée lors du stress ou de l'effort aigu, stimule la glycogénolyse hépatique et musculaire.
  * Le cortisol (corticosurrénale) : hormone stéroïde stimulant la néoglucogenèse lors du jeûne prolongé ou du stress chronique.
  * L'hormone de croissance (GH).

---

III. LES DIYSFONCTIONNEMENTS : LES DIABÈTES SUCRÉS

On définit le diabète sucré par une glycémie à jeun supérieure ou égale à 1,26 g/L (7,0 mmol/L) mesurée à deux reprises :

1. Le Diabète de Type 1 (DT1) : Diabète insulinodépendant (DID)
- Touche préférentiellement l'enfant, l'adolescent et l'adulte jeune (10 % des cas de diabète).
- Mécanisme étiologique : Maladie auto-immune. Le système immunitaire du patient produit des lymphocytes T cytotoxiques et des auto-anticorps dirigés contre ses propres cellules bêta des îlots de Langerhans (insulite).
- Symptômes cardinaux : Les 4 "P" : Polyurie (urines abondantes), Polydipsie (soif intense insatiable), Polyphagie (faim permanente) avec amaigrissement paradoxal rapide et Asthénie.
- Traitement vital : Injections quotidiennes d'insuline sous-cutanée à vie (ou pompe à insuline).

2. Le Diabète de Type 2 (DT2) : Diabète non insulinodépendant (DNID)
- Représente 90 % des cas mondiaux, frappant traditionnellement l'adulte de plus de 45 ans, en forte recrudescence chez les populations urbaines d'Afrique liée à la sédentarité et à l'alimentation ultra-transformée.
- Mécanisme en deux temps :
  * 1. L'insulinorésistance : Les cellules cibles (foie, muscle, adipocytes) deviennent sourdes à l'insuline en raison d'une saturation lipidique et d'altérations des récepteurs. Le pancréas compense d'abord en sécrétant davantage d'insuline (hyperinsulinisme).
  * 2. L'insulinodéficience relative : Après des années d'épuisement sécrétoire, les cellules bêta s'altèrent et ne suffisent plus à compenser : l'hyperglycémie s'installe.
- Traitement : Mesures hygiéno-diététiques (perte de poids, exercice physique régulier), antidiabétiques oraux (metformine améliorant la sensibilité à l'insuline, sulfamides stimulant la sécrétion) puis insulinothérapie tardive.`
  ,
  sections: [
    {
      title: 'I. La glycémie : paramètre homéostasique et organes de réserve',
      content: [
        '1. Définition et valeur de consigne : 0,8 à 1,1 g/L à jeun, maintien indispensable pour les organes glucodépendants (cerveau, hématies).',
        '2. Rôle unique du foie : seul organe capable de libérer du glucose dans la circulation grâce à la glucose-6-phosphatase (expérience du foie lavé de Claude Bernard).',
        '3. Rôles du muscle et du tissu adipeux : consommateurs et stockeurs sous forme de glycogène musculaire et triglycérides.'
      ]
    },
    {
      title: 'II. Régulation hormonale par le pancréas endocrine',
      content: [
        '1. Histologie des îlots de Langerhans : cellules bêta (insuline) et cellules alpha (glucagon).',
        '2. L\'insuline (hypoglycémiante) : stimule la translocation de GLUT4, la glycogénogenèse hépatique et musculaire, et la lipogenèse.',
        '3. Le glucagon et hormones de contre-régulation (adrénaline, cortisol) : stimulent la glycogénolyse hépatique et la néoglucogenèse.'
      ]
    },
    {
      title: 'III. Physiopathologie des diabètes sucrés',
      content: [
        '1. Diabète de type 1 : destruction auto-immune des cellules bêta, carence absolue en insuline, syndrome cardinal des 4 P et insulinothérapie vitale.',
        '2. Diabète de type 2 : insulinorésistance périphérique associée au surpoids/sédentarité, suivie d\'un épuisement sécrétoire pancréatique.'
      ]
    }
  ]
};

export const LESSON_6_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-6',
  number: 'LEÇON S-6',
  title: 'LA RÉGULATION DE LA PRESSION ARTÉRIELLE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 2 • Homéostasie et Communication hormonale (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '65 min d\'étude approfondie',
  description: 'Biophysique et régulation neuro-hormonale de la pression artérielle : paramètres déterminants (PA = Débit cardiaque x Résistances périphériques), barorécepteurs du sinus carotidien et de la crosse aortique, voies afférentes (nerfs de Hering et Cyon), centres bulbaires cardio-vasculaires, voies efférentes végétatives (parasympathique cardio-modérateur et orthosympathique cardio-accélérateur/vasoconstricteur) et système hormonal Rénine-Angiotensine-Aldostérone.',
  image: {
    caption: 'Figure S2.2 : Boucle réflexe baroréceptrice de régulation nerveuse à court terme de la pression artérielle',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad6)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">LE RÉFLEXE BARORÉCEPTEUR DE RÉGULATION DE LA PRESSION ARTÉRIELLE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Barorécepteurs</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Sinus carotidien (Hering - IX)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Crosse aortique (Cyon - X)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Sensibles à l'étirement pariétal</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Si PA monte : ↑ fréquence de PA</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Messages afférents au bulbe</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Intégration Bulbaire</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Noyau du tractus solitaire (NTS)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Centre cardio-modérateur (X)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Centre vasoconstricteur inhibé</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Nerf vague parasympathique actif</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Libération d'acétylcholine</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Effets Correcteurs</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Baisse de fréquence cardiaque (FC)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Baisse du volume d'éjection (VES)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Vasodilatation artériolaire</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Baisse du débit et résistances</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Retour de la PA à la normale</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 2 : L'HOMÉOSTASIE ET LA COMMUNICATION HORMONALE
LEÇON S-6 : LA RÉGULATION DE LA PRESSION ARTÉRIELLE

INTRODUCTION GÉNÉRALE

La pression artérielle (PA) — couramment appelée "tension artérielle" — est la force hydrostatique exercée par le sang sur l'unité de surface de la paroi des grosses artères. Elle est indispensable pour assurer une perfusion sanguine permanente et adéquate de l'ensemble des organes vitaux du corps humain, en particulier le cerveau, le cœur et les reins.

Mesurée au brassard tensiométrique au niveau de l'artère humérale, elle s'exprime par deux valeurs : la pression systolique (maximale lors de la contraction ventriculaire, normale à 120 mmHg ou 12 cmHg) et la pression diastolique (minimale lors du relâchement cardiaque, normale à 80 mmHg ou 8 cmHg). La pression artérielle est un paramètre physiologique étroitement régulé : toute chute brutale (hypotension) entraîne une syncope ou un choc hypovolémique mortel, tandis qu'une élévation chronique (hypertension artérielle - HTA) use prématurément le cœur et brise les vaisseaux cérébraux (AVC).

---

I. LES FACTEURS DÉTERMINANTS DE LA PRESSION ARTÉRIELLE

D'après les lois de l'hémodynamique (analogie avec la loi d'Ohm en physique : U = R x I), la pression artérielle dépend de deux facteurs biophysiques majeurs :
PA = Débit Cardiaque (Q) x Résistances Vasculaires Périphériques (R)

1. Le Débit cardiaque (Q) :
- Volume de sang éjecté par chaque ventricule par minute (environ 5 L/min au repos) :
  Q = Fréquence Cardiaque (FC, battements/min) x Volume d'Éjection Systolique (VES, mL/battement).
- Toute augmentation de la fréquence cardiaque ou de la force de contraction augmente mécaniquement le débit cardiaque et donc la PA.
- Le volume sanguin total (la volémie, environ 5 L chez l'adulte) influence directement le retour veineux et donc le VES.

2. Les Résistances vasculaires périphériques (R) :
- Déterminées par la loi de Poiseuille : R est inversement proportionnelle au rayon de l'artériole à la puissance 4 (R ≈ 1 / r^4).
- La vasomotricité artériolaire est donc le levier le plus puissant de la régulation : une vasoconstriction minime augmente considérablement les résistances et fait flamber la PA, tandis qu'une vasodilatation fait chuter la PA.

---

II. LA RÉGULATION NERVEUSE À COURT TERME : LE RÉFLEXE BARORÉCEPTEUR

Lors d'un changement de posture (passage brutal de la position couchée à debout : orthostatisme), la pesanteur accumule le sang dans les membres inférieurs. Sans une réaction réflexe immédiate en quelques secondes, l'irrigation cérébrale chuterait. Ce contrôle ultra-rapide est assuré par le réflexe barorécepteur :

1. Les récepteurs : les barorécepteurs artériels
- Mécanorécepteurs microscopiques situés dans l'épaisseur de la paroi des gros vaisseaux stratégiques :
  * Le sinus carotidien (à la bifurcation de l'artère carotide interne irriguant le cerveau) ;
  * La crosse aortique (à la sortie directe du ventricule gauche).
- Ils sont sensibles à l'étirement mécanique de la paroi artérielle causé par la pression pulsatile du sang.
- Plus la pression artérielle s'élève, plus la paroi est distendue et plus la fréquence des potentiels d'action émis par les barorécepteurs augmente.

2. Les voies afférentes sensitives
- Les potentiels d'action cheminent par deux paires de nerfs crâniens sensitifs :
  * Le nerf de Hering (branche du nerf glosso-pharyngien IX) issu du sinus carotidien ;
  * Le nerf de Cyon-Ludwig (branche du nerf vague ou pneumogastrique X) issu de la crosse aortique.

3. Les centres intégrateurs bulbaires (dans le tronc cérébral)
- Les fibres de Hering et Cyon se terminent dans le noyau du tractus solitaire (NTS) du bulbe rachidien.
- Le NTS traite l'information et orchestre la réponse par deux voies opposées :
  * Il stimule le centre cardio-modérateur (noyau dorsal du vague et noyau ambigu) ;
  * Il inhibe par l'intermédiaire d'interneurones GABAergiques le centre vasomoteur et cardio-accélérateur orthosympathique (situé dans la moelle épinière dorso-lombaire).

4. Les voies efférentes motrices et les effecteurs
- Le contingent parasympathique (nerfs vagues X) :
  * Libère de l'acétylcholine sur les récepteurs muscariniques du nœud sinusal cardiaque.
  * Effets : cardio-modérateur pur (diminue la fréquence cardiaque : bradycardie, et la force contractile auriculaire). Il n'innerve pas les vaisseaux sanguins.
- Le contingent orthosympathique :
  * Passe par la chaîne ganglionnaire paravertébrale et libère de la noradrénaline (et de l'adrénaline surrénalienne) sur les récepteurs bêta-1 cardiaques et alpha-1 vasculaires.
  * Effets : cardio-accélérateur (tachycardie), inotrope positif (augmente la force contractile du myocarde ventriculaire) et vasoconstricteur artériolaire puissant.

5. Fonctionnement en boucle fermée
- Cas d'une hausse brutale de PA (ex. injection de noradrénaline) :
  Étirement des barorécepteurs -> ↑ décharge dans les nerfs de Hering/Cyon -> stimulation du NTS -> activation parasympathique (vague) et inhibition sympathique -> bradycardie, baisse du VES et vasodilatation artériolaire -> retour immédiat de la PA à la valeur consigne normale.
- Cas d'une chute brutale de PA (ex. hémorragie aiguë ou lever brutal) :
  Diminution de l'étirement des barorécepteurs -> ↓ décharge dans Hering/Cyon -> levée de l'inhibition du centre sympathique et freinage du vague -> activation sympathique intense -> tachycardie, augmentation du VES et vasoconstriction périphérique -> correction de l'hypotension.

---

III. LA RÉGULATION HORMONALE À MOYEN ET LONG TERME

Lorsque la variation tensionnelle persiste (perte d'eau, déshydratation, hémorragie), le système nerveux s'adapte (désensibilisation des barorécepteurs). Des régulations hormonales prennent le relais pour ajuster la volémie :

1. Le système Rénine-Angiotensine-Aldostérone (SRAA)
- Déclenché par l'appareil juxtaglomérulaire rénal en réponse à une baisse de perfusion rénale ou d'ions Na+.
- Le rein sécrète une enzyme : la rénine.
- La rénine clive l'angiotensinogène hépatique en angiotensine I.
- L'enzyme de conversion de l'angiotensine (ECA, présente dans les capillaires pulmonaires) convertit l'angiotensine I en angiotensine II :
  * L'angiotensine II est le plus puissant vasoconstricteur biologique connu (hausse immédiate des résistances périphériques) ;
  * Elle stimule la soif au niveau de l'hypothalamus ;
  * Elle stimule la corticosurrénale pour libérer l'aldostérone.
- L'aldostérone agit sur le tube contourné distal rénal : elle stimule la réabsorption active de sodium (Na+) vers le sang, entraînant une rétention d'eau par osmose. La volémie augmente, restaurant la PA à long terme.

2. L'hormone antidiurétique (ADH ou vasopressine)
- Synthétisée par l'hypothalamus et libérée par la posthypophyse en réponse à une baisse de volémie ou hausse d'osmolarité.
- Stimule l'insertion d'aquaporines dans les canaux collecteurs du rein, provoquant une réabsorption massive d'eau pure (antidiurèse). À forte dose, elle est vasoconstrictrice.

3. Le Facteur Natriurétique Auriculaire (ANP)
- Sécrété par les oreillettes cardiaques lorsqu'elles sont distendues par un excès de volémie (hypertension).
- Hormone hypotensive : stimule l'élimination urinaire d'eau et de sodium (natriurèse) et inhibe la sécrétion de rénine et d'aldostérone.`
  ,
  sections: [
    {
      title: 'I. Facteurs biophysiques déterminants de la pression artérielle',
      content: [
        '1. Équation fondamentale : PA = Débit Cardiaque (FC x VES) x Résistances Vasculaires Périphériques.',
        '2. Influence majeure du rayon artériolaire selon la loi de Poiseuille (résistances quadruplées si le diamètre est réduit de moitié).'
      ]
    },
    {
      title: 'II. Le réflexe barorécepteur à court terme',
      content: [
        '1. Capteurs : barorécepteurs carotidiens (nerf de Hering IX) et aortiques (nerf de Cyon X) sensibles à l\'étirement de la paroi.',
        '2. Centre bulbaire : noyau du tractus solitaire stimulant le parasympathique et inhibant l\'orthosympathique.',
        '3. Effecteurs : nerf vague cardio-modérateur (acétylcholine) et nerf sympathique cardio-accélérateur/vasoconstricteur (noradrénaline).'
      ]
    },
    {
      title: 'III. Régulations hormonales à moyen et long terme',
      content: [
        '1. Système Rénine-Angiotensine-Aldostérone : cascade enzymatique déclenchée par le rein, puissante vasoconstriction et rétention hydrosodée.',
        '2. Hormone antidiurétique (ADH) : réabsorption d\'eau rénale maintenant la volémie.',
        '3. Facteur natriurétique auriculaire (ANP) : hormone hypotensive libérée lors de la surcharge volémique.'
      ]
    }
  ]
};

export const LESSON_7_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-7',
  number: 'LEÇON S-7',
  title: 'LA REPRODUCTION HUMAINE ET SON CONTRÔLE HORMONAL',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 3 • Reproduction, Génétique et Hérédité (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '70 min d\'étude approfondie',
  description: 'Physiologie comparée de la reproduction humaine : spermatogenèse continue dans les tubes séminifères versus ovogenèse cyclique discontinue, régulation neuro-endocrinienne de l\'axe hypothalamo-hypophysaire (GnRH, LH, FSH), rétrocontrôles négatifs et positifs (déclenchement du pic ovulatoire par œstradiol), fécondation, nidation et début de grossesse (rôle de l\'hCG).',
  image: {
    caption: 'Figure S2.3 : Régulation neuro-endocrine comparée des fonctions reproductrices mâle et femelle',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad7)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">CONTRÔLE HORMONAL DE L'AXE HYPOTHALAMO-HYPOPHYSAIRE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Axe Neuro-Endocrine</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Hypothalamus : GnRH pulsatile</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Antéhypophyse : gonadostimulines</text>
        <text x="14" y="96" font-size="11" fill="#374151">• FSH : follicules / Sertoli</text>
        <text x="14" y="118" font-size="11" fill="#374151">• LH : ovulation / Leydig</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Commande pulsatile centrale</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Cycles Féminins</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Phase folliculaire : œstrogènes</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Rétrocontrôle négatif initial</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Pic d'œstradiol (>200pg/mL)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Rétrocontrôle positif → Pic LH</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Ovulation à J14 (rupture)</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Contrôle Masculin</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Cellules de Leydig : testostérone</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Cellules de Sertoli : ABP + inhibine</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Rétrocontrôle négatif permanent</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Spermatogenèse continue</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Stabilité hormonale mâle</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 3 : REPRODUCTION, GÉNÉTIQUE ET HÉRÉDITÉ
LEÇON S-7 : LA REPRODUCTION HUMAINE ET SON CONTRÔLE HORMONAL

INTRODUCTION GÉNÉRALE

La reproduction sexuée assure la pérennité de l'espèce humaine et le brassage génétique des générations futures. Contrairement à la majorité des mammifères régis par des cycles œstraux saisonniers stricts, l'espèce humaine présente une physiologie reproductrice continue chez l'homme dès la puberté, et cyclique d'environ 28 jours chez la femme de la ménarche à la ménopause.

Cette fonction complexe est coordonnée par une cascade neuro-endocrinienne hautement sophistiquée reliant l'hypothalamus cérébral, l'antéhypophyse et les gonades (testicules et ovaires). L'alternance remarquable entre rétrocontrôles négatifs stabilisateurs et rétrocontrôle positif déclenchant l'ovulation constitue l'un des sommets conceptuels du programme de Sciences de la Vie et de la Terre en Terminale scientifique au Sénégal.

---

I. GAMÉTOGENÈSE COMPARÉE : SPERMATOGENÈSE ET OVOGENÈSE

1. La spermatogenèse dans le testicule
- Se déroule dans la paroi des tubes séminifères (environ 250 mètres de tubules pelotonnés par testicule), de la puberté jusqu'à la fin de la vie.
- Organisation centripète de la périphérie vers la lumière du tube en 4 phases :
  * 1. Multiplication : Les spermatogonies souches (cellules diploïdes à 2n = 46 chromosomes) se multiplient activement par mitoses successives.
  * 2. Accroissement : Une spermatogonie devient un spermatocyte I volumineux à 2n chromosomes.
  * 3. Maturation (Méiose) :
    - Première division méiotique (réductionnelle) : Le spermatocyte I donne deux spermatocytes II haploïdes (n = 23 chromosomes à 2 chromatides).
    - Deuxième division méiotique (équationnelle) : Chaque spermatocyte II donne deux spermatides haploïdes (n = 23 chromosomes à 1 chromatide). Un spermatocyte I produit donc 4 spermatides.
  * 4. Spermiogenèse (différenciation sans division) :
    La spermatide se métamorphose en spermatozoïde mobile : condensation extrême du noyau, formation de l'acrosome (vésicule enzymatique coiffant le noyau, riche en hyaluronidase), éjection du cytoplasme résiduel, formation de la pièce intermédiaire riche en mitochondries spiralées et développement du flagelle propulseur.
- Rôle nourricier des cellules de Sertoli : Cellules somatiques géantes formant la barrière hémato-testiculaire, guidant et nourrissant les cellules germinales.

2. L'ovogenèse dans l'ovaire
- Processus discontinu et limité dans le temps :
  * Phase fœtale in utero : Les ovogonies se multiplient par mitose puis entrent en prophase de première division de méiose pour devenir des ovocytes I. La méiose se bloque au stade diplotène de la prophase I. À la naissance, la petite fille possède un stock définitif non renouvelable d'environ 400 000 follicules primordiaux renfermant des ovocytes I bloqués.
  * De la puberté à la ménopause (environ 400 ovulations au total) : À chaque cycle menstruel, une cohorte de follicules reprend sa croissance, mais un seul (follicule dominant de De Graaf) parvient à maturité complète.
  * 36 heures avant l'ovulation, sous l'effet du pic de LH, l'ovocyte I achève sa première division méiotique en expulsant une cellule minuscule atrophiée : le premier globule polaire (GP1). Il devient un ovocyte II qui s'engage immédiatement dans la deuxième division méiotique et se bloque en métaphase II.
  * L'ovulation libère cet ovocyte II bloqué en métaphase II entouré de sa zone pellucide et de sa corona radiata.
  * La méiose ne s'achève (expulsion du deuxième globule polaire GP2) que si et seulement si un spermatozoïde féconde l'ovocyte !

---

II. LA RÉGULATION NEURO-ENDOCRINIENNE CHEZ L'HOMME

1. L'axe hypothalamo-hypophyso-testiculaire
- L'hypothalamus sécrète une neurohormone peptidique : la GnRH (Gonadotropin-Releasing Hormone), libérée de manière pulsatile (un pulse toutes les 90 à 120 minutes) dans le système porte hypothalamo-hypophysaire.
- La GnRH stimule les cellules gonadotropes de l'antéhypophyse qui sécrètent deux gonadostimulines :
  * La LH (Luteinizing Hormone) : Se fixe sur les cellules interstitielles de Leydig situées entre les tubes séminifères et stimule la synthèse et la sécrétion de testostérone (hormone stéroïde mâle).
  * La FSH (Follicle-Stimulating Hormone) : Se fixe sur les cellules de Sertoli et stimule la synthèse de l'ABP (Androgen Binding Protein, protéine fixatrice d'androgènes concentrant la testostérone dans les tubes) et déclenche la spermatogenèse.

2. Le rétrocontrôle négatif testiculaire
- La testostérone circulante exerce en permanence un rétrocontrôle négatif (feed-back négatif) sur l'hypothalamus et l'hypophyse : elle freine la fréquence des pulses de GnRH et la sécrétion de LH. Si le taux de testostérone baisse (ex. castration), les taux de LH et FSH explosent.
- Les cellules de Sertoli sécrètent une hormone peptidique : l'inhibine, qui exerce un rétrocontrôle négatif spécifique et direct sur la sécrétion hypophysaire de FSH.
- Résultat : Chez l'homme adulte sain, les concentrations hormonales sont remarquablement constantes et stables dans le temps.

---

III. LA RÉGULATION CYCLIQUE CHEZ LA FEMME

Le cycle sexuel de la femme dure en moyenne 28 jours et comprend deux cycles synchronisés par les hormones : le cycle ovarien et le cycle utérin (menstruel).

1. Le cycle ovarien (28 jours)
- Phase folliculaire (J1 à J13) :
  Sous l'action de la FSH hypophysaire, un follicule cavitaire grossit et devient un volumineux follicule mûr de De Graaf (diamètre 20 mm). Les cellules de la thèque interne et de la granulosa sécrètent des quantités croissantes d'œstrogènes (principalement l'œstradiol).
- Ovulation (J14) :
  Rupture explosive du follicule de De Graaf à la surface de l'ovaire et expulsion de l'ovocyte II dans le pavillon de la trompe de Fallope.
- Phase lutéale (J15 à J28) :
  Sous l'action de la LH, les restes du follicule déhiscent se transforment en une glande endocrine temporaire jaune d'or : le corps jaune. Les cellules lutéales sécrètent d'importantes quantités de progestérone et des œstrogènes.
  En l'absence de fécondation, le corps jaune dégénère spontanément en corpus albicans fibreux à J28 : effondrement brutal de la progestérone et des œstrogènes.

2. Le cycle utérin (de l'endomètre)
- Menstruations (Règles, J1 à J5) :
  La chute brutale des hormones ovariennes à la fin du cycle précédent prive la muqueuse utérine (endomètre) de soutien trophique : vasoconstriction des artères spiralées, nécrose ischémique et desquamation de la couche superficielle avec hémorragie.
- Phase proliférative (J6 à J14) :
  Sous l'influence exclusive des œstrogènes folliculaires, l'endomètre s'épaissit de 1 à 4 mm, les glandes utérines s'allongent et se multiplient, la glaire cervicale au niveau du col devient claire, fluide et filante (maillage lâche permettant le passage des spermatozoïdes).
- Phase sécrétoire (J15 à J28) :
  Sous l'action conjointe de la progestérone et des œstrogènes, la muqueuse atteint 7 à 8 mm d'épaisseur et prend l'aspect caractéristique de dentelle utérine : glandes tortueuses gorgées de glycogène et de mucus, artères spiralées dilatées. Le myomètre est rendu silencieux (silence utérin inhibé par la progestérone pour favoriser la nidation).

3. La dynamique des rétrocontrôles au cours du cycle
- Début et milieu de phase folliculaire (J1 à J11) :
  Les taux modérés d'œstradiol exercent un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire, maintenant des taux bas de LH et FSH (ce qui provoque l'atrésie des follicules concurrents et sélectionne le follicule unique dominant).
- Fin de phase folliculaire (J12-J13) : La bascule vers le rétrocontrôle positif !
  Le follicule mûr sécrète une quantité massive d'œstradiol qui dépasse un seuil critique d'environ 200 pg/mL de plasma pendant plus de 36 heures consécutives.
  Ce signal inverse brutalement la réponse de l'axe : le rétrocontrôle devient positif. Il déclenche une décharge massive et soudaine de gonadostimulines : le pic de LH (ou décharge ovulante, multipliée par 6 à 10) accompagné d'un pic moindre de FSH.
  Ce pic de LH déclenche impérativement l'ovulation 24 à 36 heures plus tard.
- Phase lutéale (J15 à J28) :
  La progestérone et les œstrogènes sécrétés par le corps jaune exercent à nouveau un rétrocontrôle négatif puissant sur la LH et la FSH, bloquant toute nouvelle maturation folliculaire pendant la seconde moitié du cycle.

---

IV. FÉCONDATION, NIDATION ET DÉBUT DE GROSSESSE

1. La fécondation dans l'ampoule tubaire
- Rencontre des gamètes dans le tiers supérieur de la trompe.
- Réaction acrosomique : les enzymes de l'acrosome perforent la zone pellucide.
- Fusion des membranes et blocage immédiat de la polyspermie par la réaction corticale (exocytose des granules corticaux durcissant la zone pellucide).
- Reprise et achèvement de la méiose ovocytaire (expulsion de GP2), fusion des deux pronoyaux mâle et femelle (caryogamie) : formation de la cellule-œuf diploïde (zygote).

2. Maintien du corps jaune par l'hCG
- L'embryon migre vers l'utérus tout en se divisant (stades morula puis blastocyste). Il s'implante dans la dentelle utérine au 6e-7e jour : c'est la nidation.
- Les cellules périphériques du blastocyste (trophoblaste, futur placenta) sécrètent une hormone d'alerte : l'hCG (Gonadotrophine chorionique humaine).
- L'hCG mime l'action de la LH : elle maintient en vie le corps jaune qui continue de produire massivement de la progestérone et des œstrogènes.
- La muqueuse utérine n'est pas détruite : les règles ne surviennent pas (aménorrhée, premier signe clinique de la grossesse). À partir du 3e mois, le placenta prend lui-même le relais complet de la sécrétion d'œstrogènes et de progestérone jusqu'au terme.`
  ,
  sections: [
    {
      title: 'I. Gamétogenèse comparée : spermatogenèse et ovogenèse',
      content: [
        '1. Spermatogenèse : continue de la puberté à la mort, centripète dans les tubes séminifères, production de 4 spermatozoïdes par spermatocyte I avec spermiogenèse.',
        '2. Ovogenèse : discontinue, stock folliculaire fœtal fixé, blocage en prophase I puis métaphase II, achèvement méiotique conditionné par la fécondation.'
      ]
    },
    {
      title: 'II. Régulation neuro-endocrine chez l\'homme',
      content: [
        '1. Axe hypothalamo-hypophysaire : GnRH pulsatile stimulant la LH (cellules de Leydig -> testostérone) et la FSH (cellules de Sertoli -> ABP).',
        '2. Rétrocontrôles négatifs permanents exercés par la testostérone et l\'inhibine garantissant une production hormonale stable.'
      ]
    },
    {
      title: 'III. Régulation cyclique chez la femme et déclenchement de l\'ovulation',
      content: [
        '1. Synchronisation ovarienne et utérine : phases folliculaire et lutéale ovariennes guidant prolifération et dentelle utérine sécrétoire.',
        '2. Mécanisme du pic ovulatoire : rétrocontrôle négatif initial suivi d\'un rétrocontrôle positif déclenché lorsque l\'œstradiol dépasse 200 pg/mL.',
        '3. Rôle de l\'hCG lors de la nidation : sauvetage du corps jaune gravidique empêchant l\'apparition des règles.'
      ]
    }
  ]
};
