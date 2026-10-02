import { LessonContent } from './courses';

// =========================================================================
// SVT CLASSE DE TERMINALE S (S1 & S2) — PARTIE 4 (LEÇONS S-11 À S-13)
// Réponses immunitaires, VIH/SIDA et tectonique des plaques
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_11_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-11',
  number: 'LEÇON S-11',
  title: 'LES RÉPONSES IMMUNITAIRES ADAPTATIVES ET LA COOPÉRATION CELLULAIRE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 4 • Immunologie et Défense de l\'organisme (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '70 min d\'étude approfondie',
  description: 'Analyse intégrale des mécanismes effecteurs de l\'immunité adaptative : réponse humorale (activation des LB, plasmocytes, structure et rôles des anticorps, neutralisation et complexe immun), réponse cellulaire (activation des LT8, cytotoxicité par perforines/granzymes des LTc), coopération cellulaire impérative médiée par les cytokines/interleukines des LT4 (chefs d\'orchestre du système), et mémoire immunologique.',
  image: {
    caption: 'Figure S4.1 : Coopération cellulaire immunitaire et mécanismes effecteurs (humoral et cellulaire)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad11" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad11)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">LES VOIES DE LA RÉPONSE IMMUNITAIRE ADAPTATIVE ET EFFECTEURS</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Pivot : LT4 Auxiliaires</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Activation par CPA (CMH II)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Différenciation en LTh (Th1/Th2)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Sécrétion d'interleukines (IL-2)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Stimule prolifération LB &amp; LT8</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Chef d'orchestre indispensable</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Voie Humorale (LB)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• LB activé + IL → Plasmocytes</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Sécrétion d'anticorps circulants</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Complexe immun (neutralisation)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Opsonisation &amp; Complément</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Élimination des toxines &amp; bactéries</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Voie Cellulaire (LT8)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• LT8 activé + IL-2 → LTc</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Reconnaissance du CMH I anormal</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Libération de perforine &amp; granzymes</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Perforation osmotique &amp; apoptose</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Destruction des cellules infectées</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 4 : IMMUNOLOGIE ET DÉFENSE DE L'ORGANISME
LEÇON S-11 : LES RÉPONSES IMMUNITAIRES ADAPTATIVES ET LA COOPÉRATION CELLULAIRE

INTRODUCTION GÉNÉRALE

Lorsque les barrières naturelles anatomiques (peau, muqueuses) et les mécanismes de l'immunité innée (réaction inflammatoire aiguë, phagocytose) sont franchis par un agent pathogène virulent, l'organisme déploie sa seconde ligne de défense : l'immunité adaptative (ou spécifique).

Contrairement à l'immunité innée présente dès la naissance et stéréotypée, l'immunité adaptative est personnalisée : elle s'adapte spécifiquement à chaque déterminant antigénique rencontré, possède une mémoire immunologique durable et opère selon deux modalités complémentaires coordonnées par les lymphocytes T4 :
- La réponse immunitaire à médiation humorale (RIMH), assurée par les lymphocytes B producteurs d'anticorps circulants solubles ;
- La réponse immunitaire à médiation cellulaire (RIMC), assurée par les lymphocytes T cytotoxiques tueurs de cellules.
Cette coopération cellulaire harmonieuse est au cœur des sujets de synthèse du Baccalauréat scientifique sénégalais.

---

I. LA RÉPONSE IMMUNITAIRE À MÉDIATION HUMORALE (RIMH)

La RIMH est la voie de défense par excellence contre les toxines bactériennes circulantes (ex. toxine tétanique, diphtérique) et contre les micro-organismes extracellulaires présents dans le sang, la lymphe et les liquides interstitiels.

1. Les trois phases de la réponse humorale
- Phase 1 : La sélection clonale :
  * Parmi le répertoire immense de milliards de LB naïfs, seuls les rares clones dont le BCR (anticorps membranaire) présente une complémentarité stéréochimique parfaite avec un épitope de l'antigène sont sélectionnés et se lient à lui.
  * Le LB internalise l'antigène, le dégrade et présente ses peptides sur son CMH II.
- Phase 2 : L'amplification clonale (prolifération) :
  * Avec l'aide indispensable des signaux cytokiniques (interleukine 4 et interleukine 2) sécrétés par les lymphocytes T4 auxiliaires spécifiques activés, le LB sélectionné entre en division mitotique intense dans les centres germinatifs des ganglions lymphatiques.
  * Il se forme un clone de milliers de cellules filles génétiquement identiques programmées contre cet antigène unique.
- Phase 3 : La différenciation en cellules effectrices et mémoires :
  * La majorité des cellules du clone se métamorphosent en plasmocytes : cellules volumineuses au réticulum endoplasmique rugueux hypertrophié et à l'appareil de Golgi surdéveloppé, véritables usines biologiques sécrétant jusqu'à 2 000 à 5 000 molécules d'anticorps spécifiques par seconde ! Les plasmocytes ont une durée de vie brève (quelques jours) et ne portent plus de BCR de surface.
  * Une fraction des cellules devient des lymphocytes B mémoires : cellules à longue durée de vie (plusieurs décennies) circulant dans l'organisme, responsables de la réponse secondaire ultra-rapide et puissante lors d'un contact ultérieur avec le même antigène (base biologique de la vaccination).

2. Structure moléculaire et fonctions des anticorps (Immunoglobulines - Ig)
- Structure tridimensionnelle en "Y" :
  * Formée de 4 chaînes polypeptidiques identiques deux à deux : 2 chaînes lourdes (H) et 2 chaînes légères (L), reliées par des ponts disulfures.
  * Région variable Fab (les deux bras du Y) : Contient les sites de fixation spécifiques à l'antigène (paratope), variables d'un clone à l'autre.
  * Région constante Fc (la tige du Y) : Commune aux anticorps d'une même classe (isotypes IgG, IgM, IgA, IgE, IgD), responsable des propriétés effectrices biologiques.
- Mécanismes d'élimination de l'antigène par les anticorps :
  * 1. La neutralisation : La fixation de l'anticorps sur l'antigène forme un réseau macromoléculaire insoluble appelé complexe immun. Les sites pathogènes du microbe ou de la toxine sont bloqués, les empêchant de pénétrer dans les cellules cibles.
  * 2. L'opsonisation et la phagocytose facilitée : Les macrophages possèdent sur leur membrane des récepteurs spécifiques du fragment Fc des anticorps. Les macrophages s'arriment facilement au complexe immun et le phagocytent avec une efficacité décuplée.
  * 3. L'activation du système du complément : La fixation des anticorps déclenche une cascade enzymatique de protéines plasmatiques qui perforent la membrane bactérienne par le Complexe d'Attaque Membranaire (CAM).

---

II. LA RÉPONSE IMMUNITAIRE À MÉDIATION CELLULAIRE (RIMC)

La RIMC intervient lorsque le pathogène est inaccessible aux anticorps circulants parce qu'il s'est réfugié à l'intérieur même des cellules de l'hôte (virus intracellulaires, bactéries à multiplication intracellulaire comme le bacille de Koch de la tuberculose, parasites comme Plasmodium) ou lorsqu'il s'agit de cellules cancéreuses ou de cellules d'un greffon étranger.

1. Sélection, amplification et différenciation des LT8
- Sélection clonale : Le récepteur TCR d'un lymphocyte T8 naïf reconnaît spécifiquement un peptide antigénique viral présenté par une molécule du CMH de classe I à la surface d'une cellule cible infectée (ou d'une CPA).
- Amplification clonale : Sous l'effet direct de l'interleukine 2 (IL-2) massivement déversée par les LT4 auxiliaires, le clone de LT8 prolifère par mitoses successives.
- Différenciation : Les LT8 se différencient en lymphocytes T cytotoxiques effecteurs (LTc ou CTL) et en LT8 mémoires.

2. Le mécanisme de destruction de la cellule cible : La cytotoxicité ("le baiser de la mort")
Le LTc s'accole étroitement à la membrane de la cellule cible infectée grâce à la reconnaissance spécifique TCR / peptide-CMH I et déclenche sa mort programmée selon deux voies :
- Voie des granules lytiques (perforine et granzymes) :
  * Le LTc exocyte vers la synapse cytotoxique des molécules de perforine qui polymérisent dans la membrane de la cellule cible, y forant des pores cylindriques béants.
  * Des enzymes protéolytiques (les granzymes) pénètrent à travers ces pores dans la cellule cible et activent des caspases intracellulaires qui fragmentent l'ADN et détruisent les protéines structurales.
  * L'eau s'engouffre par osmose à travers les pores : lyse osmotique et éclatement de la cellule cible.
- Voie Fas / Fas-Ligand :
  * L'interaction entre la protéine FasL du LTc et le récepteur Fas de la cellule cible envoie un signal qui ordonne le suicide cellulaire par apoptose (mort cellulaire propre sans libération des particules virales dans le milieu extérieur).
  * Les débris apoptotiques sont ensuite nettoyés par les macrophages.
  * Le LTc se détache, intact, et peut éliminer successivement plusieurs dizaines de cellules infectées.

---

III. LA COOPÉRATION CELLULAIRE ET LE RÔLE CENTRAL DES LYMPHOCYTES T4

Des expériences historiques de transfert cellulaire chez la souris irradiée (expériences de Claman, 1966) ont apporté la preuve irréfutable de la coopération cellulaire :
- Des souris irradiées recevant uniquement des LB ne produisent pas d'anticorps après injection d'un antigène thymo-dépendant.
- Des souris recevant uniquement des LT ne produisent pas non plus d'anticorps.
- Seules les souris recevant à la fois des LB et des LT produisent des anticorps en abondance !

1. Les étapes de la coopération cellulaire
- Étape 1 : Présentation de l'antigène par les CPA aux LT4 :
  Les cellules dendritiques ou macrophages phagocytent l'antigène, l'apprêtent et en présentent les fragments peptidiques sur leurs molécules du CMH II aux LT4 naïfs.
- Étape 2 : Activation des LT4 et sécrétion d'interleukines :
  Une fois activés, les LT4 se différencient en lymphocytes T auxiliaires (LTh ou T-helper). Ils sécrètent des médiateurs chimiques solubles fondamentaux : les interleukines (principalement l'IL-2, l'IL-4, l'IL-5, l'interféron gamma).
- Étape 3 : Stimulation des voies B et T8 :
  * L'interleukine 2 agit de manière autocrine sur les LT4 eux-mêmes et de manière paracrine sur les LT8 pour stimuler leur multiplication et leur transformation en LTc cytotoxiques.
  * Les interleukines 4 et 5 stimulent la prolifération des LB et leur différenciation en plasmocytes sécréteurs d'anticorps.
- Conclusion : Le lymphocyte T4 est le chef d'orchestre incontournable et absolu de tout le système immunitaire adaptatif. Sa disparition entraîne l'effondrement simultané de la réponse humorale et de la réponse cellulaire.`
  ,
  sections: [
    {
      title: 'I. La réponse immunitaire à médiation humorale (RIMH)',
      content: [
        '1. Déroulement en 3 phases : sélection clonale des LB par le BCR, amplification clonale mitotique et différenciation en plasmocytes et LB mémoires.',
        '2. Structure et action des anticorps : molécules en Y (Fab spécifique variable et Fc constant), formation du complexe immun, neutralisation, opsonisation et activation du complément.'
      ]
    },
    {
      title: 'II. La réponse immunitaire à médiation cellulaire (RIMC)',
      content: [
        '1. Activation des LT8 par double reconnaissance peptide-CMH I et différenciation en LT cytotoxiques (LTc).',
        '2. Mécanisme de cytotoxicité létale : exocytose de perforines (pores membranaires) et granzymes déclenchant l\'apoptose et la lyse osmotique de la cellule cible.'
      ]
    },
    {
      title: 'III. La coopération cellulaire : le rôle pivot des LT4',
      content: [
        '1. Preuve expérimentale (Claman) : la production d\'anticorps exige la synergie simultanée des LB et des LT.',
        '2. Cascade d\'interleukines : présentation par les CPA aux LT4 -> sécrétion d\'IL-2 et cytokines stimulant à la fois les LB (plasmocytes) et les LT8 (cytotoxiques).'
      ]
    }
  ]
};

export const LESSON_12_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-12',
  number: 'LEÇON S-12',
  title: 'LE VIRUS DE L\'IMMUNODÉFICIENCE HUMAINE (VIH) ET LE SIDA',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 4 • Immunologie et Défense de l\'organisme (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '65 min d\'étude approfondie',
  description: 'Virologie et immunopathologie de l\'infection par le VIH : ultrastructure moléculaire du rétrovirus (ARN, transcriptase inverse, intégrase, gp120/gp41), cycle réplicatif intracellulaire dans les cellules cibles CD4+, mécanismes de destruction progressive des lymphocytes T4, les trois phases cliniques (primo-infection, latence asymptomatique, phase SIDA déclaré et maladies opportunistes), tests diagnostiques (ELISA, Western Blot) et stratégies thérapeutiques antirétrovirales (trithérapies ARV).',
  image: {
    caption: 'Figure S4.2 : Ultrastructure du VIH, cycle de réplication du rétrovirus et cinétique de l\'infection',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad12" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad12)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">LE CYCLE DU VIH ET L'EFFONDREMENT DU SYSTÈME IMMUNITAIRE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Structure du VIH</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Rétrovirus enveloppé à ARN</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Glycoprotéines gp120 et gp41</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Capside interne de protéine p24</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Enzymes : RT, Intégrase, Protéase</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Tropisme sélectif pour CD4</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Cycle Réplicatif</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Fixation gp120 sur CD4 + CCR5</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Fusion &amp; décapsidation</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Transcription inverse : ARN → ADN</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Intégration dans génome hôte</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Bourgeonnement de virions</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Phases Cliniques SIDA</text>
        <text x="14" y="52" font-size="11" fill="#374151">• 1. Primo-infection (virémie + sérum+)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• 2. Latence (baisse lente LT4)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• 3. SIDA déclaré (LT4 &lt; 200/µL)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Maladies opportunistes (BK, Kaposi)</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Traitement : Trithérapies ARV</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 4 : IMMUNOLOGIE ET DÉFENSE DE L'ORGANISME
LEÇON S-12 : LE VIRUS DE L'IMMUNODÉFICIENCE HUMAINE (VIH) ET LE SIDA

INTRODUCTION GÉNÉRALE

Identifié pour la première fois en 1983 à l'Institut Pasteur de Paris par l'équipe des professeurs Luc Montagnier et Françoise Barré-Sinoussi (Prix Nobel de physiologie ou médecine 2008), le Virus de l'Immunodéficience Humaine (VIH) est l'agent étiologique responsable du Syndrome d'Immuno-Déficience Acquise (SIDA).

Le VIH est un virus redoutable et pernicieux : au lieu d'attaquer un organe périphérique ordinaire, il s'attaque directement au cœur même du système de défense de l'organisme en ciblant sélectivement les lymphocytes T4, les chefs d'orchestre indispensables de la réponse immunitaire adaptative. Sa réplication continue aboutit à la destruction progressive du contingent de LT4, plongeant le patient dans un état d'immunodépression profonde où de simples germes habituellement inoffensifs deviennent des agents infectieux mortels (maladies opportunistes).

---

I. STRUCTURE DU VIRUS ET CYCLE DE RÉPLICATION INTRACELLULAIRE

1. Ultrastructure du VIH
Le VIH est un rétrovirus enveloppé sphérique d'environ 100 à 120 nanomètres de diamètre :
- L'enveloppe externe : bicouche lipidique empruntée à la membrane plasmique de la cellule hôte lors du bourgeonnement, hérissée de spicules glycoprotéiques formés de deux sous-unités :
  * La gp120 (glycoprotéine de surface en forme de tête d'épingle) : possède une affinité stéréochimique extrêmement élevée pour la molécule CD4 de l'hôte ;
  * La gp41 (glycoprotéine transmembranaire) : responsable de la fusion des membranes.
- La matrice protéique sous-jacente (protéine p17).
- La capside interne conique (formée de protéines p24) qui renferme :
  * Deux molécules identiques d'ARN monocaténaire simple brin (génome viral à polarité positive) ;
  * Trois enzymes indispensables au cycle viral :
    - La transcriptase inverse (reverse transcriptase) : polymérase capable de rétro-transcrire l'ARN viral en ADN proviral ;
    - L'intégrase : assure l'insertion de l'ADN proviral dans l'ADN chromosomique de la cellule hôte ;
    - La protéase : clive les précurseurs polyprotéiques pour assembler des virions matures infectieux.

2. Le tropisme cellulaire du VIH
Le VIH infecte exclusivement les cellules exprimant à leur surface la molécule CD4 :
- En priorité absolue : les lymphocytes T4 (LT4 auxiliaires) ;
- Les macrophages et les monocytes sanguins ;
- Les cellules dendritiques et les cellules microgliales du cerveau (qui agissent comme des réservoirs viraux protégés).
La fixation nécessite en outre un co-récepteur membranaire chimioquinique : le récepteur CCR5 (au début de l'infection) ou CXCR4 (dans les phases tardives).

3. Les 7 étapes du cycle réplicatif
- 1. Fixation (Attachement) : La gp120 du virus se lie spécifiquement au récepteur CD4 de la cellule hôte, puis au co-récepteur CCR5 ou CXCR4.
- 2. Pénétration et fusion : La gp41 change de conformation et fait fusionner l'enveloppe virale avec la membrane plasmique de la cellule. La capside pénètre dans le cytoplasme où elle se désagrège (décapsidation), libérant l'ARN viral et les enzymes.
- 3. Transcription inverse (Rétrotranscription) : Dans le cytoplasme, la transcriptase inverse copie l'ARN viral simple brin en un brin d'ADN complémentaire, dégrade l'ARN matrice, puis synthétise le second brin d'ADN pour former un ADN proviral double brin. Cette enzyme ne possède pas de système de correction d'erreur : elle commet de fréquentes mutations (1 erreur toutes les 10 000 bases), conférant au VIH une variabilité génétique prodigieuse qui lui permet d'échapper au système immunitaire et de résister aux antiviraux.
- 4. Intégration : L'ADN proviral pénètre dans le noyau cellulaire à travers les pores nucléaires. L'intégrase coupe l'ADN de l'hôte et y insère définitivement l'ADN proviral. Le provirus fait désormais partie intégrante du génome de la cellule hôte pour le reste de sa vie.
- 5. Transcription et traduction : Lorsque le lymphocyte T4 est activé (par exemple à l'occasion d'une infection banale), l'ARN polymérase cellulaire de l'hôte transcrit l'ADN proviral en ARN messagers viraux et en nouveaux génomes d'ARN viraux. Les ribosomes cellulaires traduisent ces ARNm en longues polyprotéines virales.
- 6. Assemblage et maturation : La protéase clive les polyprotéines en enzymes fonctionnelles et protéines de capside. L'ARN génomique et les protéines s'assemblent sous la membrane plasmique.
- 7. Bourgeonnement et libération : Les nouveaux virions bourgeonnent à travers la membrane plasmique en emportant un fragment de bicouche lipidique ornée de gp120/gp41. Chaque cellule infectée peut libérer des milliers de nouveaux virions avant de mourir.

---

II. LES MÉCANISMES DE DESTRUCTION DES CELLULES CD4+

La déplétion des lymphocytes T4 au cours de l'infection n'est pas uniquement causée par la destruction directe liée au bourgeonnement viral :
- Lyse directe par effet cytopathogène lors de l'échappement massif des virions.
- Destruction par le système immunitaire lui-même : Les cellules infectées présentent des peptides viraux sur leur CMH I et sont reconnues et impitoyablement détruites par les propres lymphocytes T cytotoxiques (LT8) du patient !
- Formation de syncytia : Une cellule infectée exprimant la gp120 à sa surface peut fusionner avec des dizaines de LT4 sains voisins non infectés portant du CD4, formant une cellule géante multinucléée non fonctionnelle qui meurt rapidement.
- Apoptose induite : Mort programmée déclenchée chez les lymphocytes T4 bystanders (cellules saines activées de façon chronique par l'état inflammatoire permanent).

---

III. L'ÉVOLUTION CLINIQUE EN TROIS PHASES ET LES MALADIES OPPORTUNISTES

Sans traitement antirétroviral, l'histoire naturelle de l'infection à VIH s'étend sur une dizaine d'années et traverse trois phases typiques :

1. Phase de primo-infection (semaines 1 à 8)
- Réplication virale explosive : charge virale plasmatique très élevée (> 1 million de copies d'ARN/mL).
- Chute brutale et transitoire du taux de LT4 (de 1 000 à 500 cellules/µL).
- Symptômes pseudo-grippaux (fièvre, adénopathies, éruption cutanée, fatigue) chez 50 % des patients, passant souvent inaperçus.
- Apparition des anticorps anti-VIH circulants après 3 à 6 semaines : c'est la séroconversion. Le patient devient séropositif.

2. Phase asymptomatique ou de latence clinique (durée : 5 à 10 ans)
- Le système immunitaire se mobilise : les LTc éliminent une grande partie des cellules infectées et les anticorps neutralisent des virions. La charge virale chute et se stabilise à un niveau plancher (le "set-point" viral).
- Le patient ne présente aucun symptôme apparent et mène une vie normale, mais il est contagieux.
- En coulisses, une guerre d'usure féroce se livre dans les ganglions lymphatiques : chaque jour, des milliards de virions sont produits et des milliards de LT4 sont détruits et renouvelés. Peu à peu, la moelle osseuse et le thymus s'épuisent : le taux de LT4 décline inexorablement d'environ 50 à 70 cellules/µL par an.

3. Phase de SIDA déclaré (phase terminale)
- Dès que le taux de LT4 s'effondre en dessous du seuil critique de 200 cellules/µL de sang (ou 14 % des lymphocytes), le système immunitaire perd sa capacité de coordination. La charge virale explose à nouveau.
- Apparition des infections opportunistes graves :
  * Bactériennes : Tuberculose pulmonaire et extrapulmonaire (cause majeure de décès chez les séropositifs au Sénégal et en Afrique subsaharienne) ;
  * Fongiques : Candidose œsophagienne, cryptococcose neuroméningée, pneumocystose pulmonaire (Pneumocystis jirovecii) ;
  * Virales : Réactivations sévères du virus zona, rétinite à cytomégalovirus (CMV) menant à la cécité ;
  * Parasitaires : Toxoplasmose cérébrale, cryptosporidiose avec diarrhées profuses chroniques ;
  * Cancers opportunistes induits par des virus oncogènes : Sarcome de Kaposi (lié à l'herpèsvirus HHV-8, nodules violacés cutanés), lymphomes non hodgkiniens malins, cancer invasif du col de l'utérus (lié au HPV).

---

IV. DÉPISTAGE, PRÉVENTION ET TRAITEMENTS ACTUELS

1. Le dépistage biologique de l'infection
- Test de dépistage ELISA (Enzyme-Linked Immunosorbent Assay) : Détecte les anticorps anti-VIH et l'antigène p24 dans le sérum du patient avec une sensibilité proche de 100 %.
- Test de confirmation Western Blot : En cas de positivité au test ELISA, on sépare par électrophorèse les protéines du VIH (gp120, gp41, p24, p17...) et on vérifie que le sérum réagit avec au moins deux glycoprotéines d'enveloppe distinctes.
- Mesure de la charge virale par PCR (Polymerase Chain Reaction) : Quantifie le nombre de copies d'ARN du VIH par mL de plasma.

2. Les thérapeutiques antirétrovirales (ARV)
On ne guérit pas encore du VIH (car l'ADN proviral reste tapi dans les réservoirs cellulaires latents), mais les trithérapies (combinaison quotidienne de 3 molécules antivirales) bloquent totalement la réplication virale :
- Inhibiteurs nucléosidiques et non nucléosidiques de la transcriptase inverse (ex. Ténofovir, Emtricitabine, Éfavirenz) ;
- Inhibiteurs de l'intégrase (ex. Dolutégravir) ;
- Inhibiteurs de protéase (ex. Darunavir, Ritonavir).
- Objectif clinique universel : Atteindre une charge virale indétectable dans le sang (< 50 copies/mL). Selon le principe médical fondamental : Indétectable = Intransmissible (I = I), une personne vivant avec le VIH sous traitement efficace avec charge virale indétectable ne transmet plus le virus à ses partenaires sexuels.`
  ,
  sections: [
    {
      title: 'I. Ultrastructure du VIH et cycle réplicatif intracellulaire',
      content: [
        '1. Organisation du virion : rétrovirus enveloppé à ARN, spicules gp120/gp41, capside p24 et enzymes (transcriptase inverse, intégrase, protéase).',
        '2. Tropisme CD4 sélectif : fixation sur CD4 et corécepteur CCR5/CXCR4 des LT4 et macrophages.',
        '3. Étapes du cycle : pénétration, rétrotranscription sans correction générant une forte variabilité, intégration provirale définitive et bourgeonnement.'
      ]
    },
    {
      title: 'II. Mécanismes de destruction des lymphocytes T4',
      content: [
        '1. Effet cytopathogène direct du virus et destruction par les propres LT cytotoxiques de l\'organisme.',
        '2. Formation de syncytia multinucléés géants non viables et apoptose généralisée des cellules bystanders.'
      ]
    },
    {
      title: 'III. Phases cliniques, dépistage et prise en charge',
      content: [
        '1. Trois phases : primo-infection fébrile et séroconversion, latence asymptomatique de plusieurs années et SIDA déclaré (LT4 < 200/µL).',
        '2. Maladies opportunistes mortelles : tuberculose, candidoses, pneumocystose et sarcome de Kaposi.',
        '3. Traitement ARV : trithérapies combinées rendant la charge virale indétectable (I = I) et restaurant l\'espérance de vie.'
      ]
    }
  ]
};

export const LESSON_13_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-13',
  number: 'LEÇON S-13',
  title: 'LA TECTONIQUE DES PLAQUES ET LA GÉODYNAMIQUE DU GLOBE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 5 • Géologie et Tectonique des plaques (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '70 min d\'étude approfondie',
  description: 'Étude géophysique et géologique de la Terre active : structure interne du globe révélée par la sismologie (discontinuités de Moho, Gutenberg et Lehmann, zones d\'ombre sismique), modèle rhéologique lithosphère rigide / asthénosphère ductile, théorie de la dérive des continents d\'Alfred Wegener, expansion océanique et paléomagnétisme (Vine et Matthews), frontières de divergence (dorsales), de convergence (subduction avec plan de Wadati-Benioff, collision et orogenèse) et moteur thermique de la convection mantellique.',
  image: {
    caption: 'Figure S4.3 : Structure interne de la Terre et dynamique des plaques aux frontières de divergence et convergence',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad13" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad13)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">STRUCTURE INTERNE ET GÉODYNAMIQUE GLOBALE DU GLOBE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Structure Interne</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Croûte continentale &amp; océanique</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Moho : séparation croûte/manteau</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Gutenberg (2900 km) : manteau/noyau</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Lehmann (5100 km) : liquide/graine</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Ondes sismiques P et S révélatrices</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Divergence (Dorsales)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Rifting &amp; décompression péridotite</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Fusion partielle du manteau (15%)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Magma basaltique en coussins</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Expansion du plancher océanique</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Paléomagnétisme symétrique</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Convergence (Subduction)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Plaque océanique dense plongeante</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Plan de Wadati-Benioff sismique</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Déshydratation &amp; fusion du coin</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Volcanisme andésitique explosif</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Collision &amp; chaînes de montagnes</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 5 : GÉOLOGIE ET TECTONIQUE DES PLAQUES
LEÇON S-13 : LA TECTONIQUE DES PLAQUES ET LA GÉODYNAMIQUE DU GLOBE

INTRODUCTION GÉNÉRALE

La Terre n'est pas un astre inerte et figé, mais une planète vivante et thermiquement active animée d'une dynamique géologique incessante. Les séismes dévastateurs, les éruptions volcaniques spectaculaires, la dérive des continents et l'érection des plus hautes chaînes de montagnes témoignent des formidables mouvements d'énergie qui agitent les entrailles du globe.

Unifiée à la fin des années 1960 par la théorie de la Tectonique des Plaques (Morgan, Le Pichon, McKenzie), la géologie moderne conçoit la surface terrestre comme une mosaïque d'une douzaine de calottes rigides — les plaques lithosphériques — se déplaçant les unes par rapport aux autres sur une couche sous-jacente plus déformable : l'asthénosphère. Ce modèle unificateur s'appuie sur la physique des ondes sismiques, le magnétisme fossile des fonds océaniques et la thermodynamique de la convection mantellique.

---

I. LA STRUCTURE INTERNE DU GLOBE RÉVÉLÉE PAR LA SISMOLOGIE

L'homme n'ayant jamais pu forer la Terre à plus de 12 kilomètres de profondeur (forage de Kola en Russie), la connaissance de la structure profonde du globe repose principalement sur l'analyse de la propagation des ondes sismiques naturelles produites lors des tremblements de terre :

1. Les propriétés physiques des ondes sismiques de volume
- Les ondes P (Primaires ou de compression) :
  * Ondes longitudinales ultra-rapides se propageant dans tous les milieux matériels (solides, liquides et gazeux).
  * Leur vitesse augmente avec la densité et la rigidité du milieu traversé.
- Les ondes S (Secondaires ou de cisaillement) :
  * Ondes transversales plus lentes ne se propageant strictement que dans les milieux solides.
  * Elles sont totalement arrêtées et réfléchies par les milieux liquides ou fondus (rigidité nulle).

2. Les trois discontinuités majeures du globe terrestre
Les sauts brusques de vitesse des ondes ont permis de découper la Terre en enveloppes concentriques délimitées par des discontinuités physiques et chimiques :
- La discontinuité de Mohorovičić (Moho) :
  * Sécurité chimique séparant la croûte terrestre du manteau supérieur.
  * Située en moyenne à environ 30 à 35 km sous les continents (pouvant atteindre 70 km sous les racines crustales des chaînes de montagnes) et à seulement 5 à 8 km sous les fonds océaniques.
  * Au passage du Moho, la vitesse des ondes P saute brutalement de 6 à 8 km/s, marquant le passage de roches silicatées légères (granite continental ou basalte océanique) à une roche mantellique ultrabasique dense : la péridotite.
- La discontinuité de Gutenberg (à 2 900 km de profondeur) :
  * Sépare le manteau inférieur solide du noyau externe.
  * À cette profondeur, les ondes S disparaissent brutalement et la vitesse des ondes P s'effondre de 13,7 à 8 km/s. Cela prouve de façon irréfutable que le noyau externe est constitué d'un alliage métallique de fer et de nickel en fusion totalement liquide (créant une "zone d'ombre sismique" sur le globe entre 103° et 143° de l'épicentre). Les mouvements de convection dans ce fer liquide engendrent le champ magnétique terrestre par effet dynamo.
- La discontinuité de Lehmann (à 5 100 km de profondeur) :
  * Sépare le noyau externe liquide de la graine centrale (noyau interne solide).
  * Sous la pression phénoménale (> 3 millions d'atmosphères), le fer cristallise à nouveau à l'état solide : les ondes P réaccélèrent et des ondes de cisaillement peuvent à nouveau s'y propager.

3. La distinction rhéologique : Lithosphère et Asthénosphère
Au-delà de la composition chimique (croûte/manteau), la géodynamique distingue deux couches mécaniques fondamentales :
- La lithosphère : Enveloppe superficielle rigide et cassante d'environ 100 km d'épaisseur (70 km sous les océans, 150 km sous les continents), comprenant la croûte et la partie sommitale du manteau supérieur (le manteau lithosphérique).
- La zone à faible vitesse (LVZ - Low Velocity Zone) vers 100-200 km de profondeur :
  * Chute modérée de la vitesse des ondes sismiques marquant une diminution de la rigidité mécanique sous l'effet de la température élevée (> 1300 °C, début de fusion partielle à 1 % de la péridotite).
- L'asthénosphère : Couche du manteau située sous la lithosphère (s'étendant jusqu'à 700 km), ductile et déformable à l'échelle des temps géologiques, sur laquelle les plaques lithosphériques rigides peuvent glisser.

---

II. LES PREUVES DE LA MOBILITÉ HORIZONTALE DES PLAQUES

1. La théorie précurseur de la Dérive des Continents (Alfred Wegener, 1912)
Wegener avait postulé que tous les continents étaient réunis il y a 250 millions d'années en un supercontinent unique, la Pangée, entouré de l'océan Panthalassa, qui s'était ensuite disloqué. Ses arguments clés :
- Argument morphologique : Concordance géométrique quasi parfaite des lignes de côte de part et d'autre de l'Atlantique (notamment entre l'Afrique occidentale et l'Amérique du Sud).
- Argument paléontologique : Présence de fossiles identiques d'espèces continentales incapables de traverser l'océan (le petit reptile Mesosaurus et la fougère Glossopteris) retrouvés simultanément en Afrique du Sud et au Brésil.
- Argument géologique et pétrographique : Continuité des anciens boucliers géologiques précambriens et des chaînes calédoniennes et hercyniennes brisées par l'ouverture océanique.
- Argument paléoclimatique : Traces de glaciations permo-carbonifères synchrones (moraines, stries glaciaires) réparties en Afrique australe, Amérique du Sud, Inde et Australie.

2. La confirmation par le paléomagnétisme des fonds marins (Vine et Matthews, 1963)
- Les basaltes de la croûte océanique contiennent de la magnétite qui s'aimante en se refroidissant sous le point de Curie (580 °C), enregistrant la direction du champ magnétique terrestre de l'époque.
- Le champ magnétique de la Terre s'inverse périodiquement au cours des ères géologiques (pôles magnétiques Nord et Sud intervertis).
- L'enregistrement magnétométrique des fonds océaniques montre une alternance remarquable de bandes d'anomalies magnétiques positives (champ normal) et négatives (champ inverse), disposées en bandes parallèles parfaitement symétriques de part et d'autre de l'axe de la dorsale océanique.
- Conclusion : La croûte océanique se forme continuellement au niveau de l'axe de la dorsale par injection de magma mantellique, puis s'écarte symétriquement de part et d'autre comme un tapis roulant : c'est l'expansion des fonds océaniques (accrétion océanique). Plus on s'éloigne de la dorsale, plus les sédiments et les basaltes du plancher océanique sont anciens et épais.

---

III. LES FRONTIÈRES DE PLAQUES ET LEUR GÉODYNAMIQUE

Le rayon de la Terre restant rigoureusement constant, la création continue de lithosphère océanique au niveau des zones d'accrétion doit être compensée par une destruction équivalente de matière dans les zones de convergence :

1. Les frontières divergentes (constructives) : Les dorsales océaniques
- Ex. : La dorsale médio-atlantique, le rift est-africain (stade initial continental).
- Mécanisme : L'écartement des plaques induit une remontée adiabatique de l'asthénosphère sous l'axe du rift. La décompression sans perte de chaleur provoque la fusion partielle (environ 15 %) des péridotites mantelliques vers 30 à 60 km de profondeur.
- Le magma basaltique produit remonte dans des chambres magmatiques :
  * Refroidissement lent en profondeur -> formation de gabbros grenus lités ;
  * Remontée par des filons verticaux de diabase -> basaltes en dykes ;
  * Épanchement sous-marin au contact de l'eau froide à 2 °C -> basaltes en coussins (pillow-lavas).

2. Les frontières convergentes (destructives) : La subduction océanique
- Ex. : Fosse du Pérou-Chili (cordillère des Andes), ceinture de feu du Pacifique.
- En s'éloignant de la dorsale, la lithosphère océanique se refroidit par conduction, s'épaissit et se charge de sédiments : sa densité moyenne augmente. Au bout de 20 à 30 millions d'années, sa densité devient supérieure à celle de l'asthénosphère sous-jacente : instabilité gravitaire.
- La plaque océanique dense plonge sous la plaque chevauchante moins dense : c'est la subduction.
- Signatures géophysiques majeures de la subduction :
  * Fosse océanique profonde (jusqu'à 11 000 m dans la fosse des Mariannes) ;
  * Sismicité intense ordonnée le long d'un plan incliné de 30° à 60° sous le continent : le plan de Wadati-Benioff, traçant la plaque froide qui s'enfonce dans le manteau chaud ;
  * Anomalie thermique négative dans la plaque plongeante ;
  * Magmatisme calco-alcalin et volcanisme andésitique explosif : En plongeant, les minéraux hydratés de la croûte océanique subissent un métamorphisme haute pression - basse température (schistes bleus puis éclogites) et expulsent de l'eau. Cette eau percole vers le coin de manteau chevauchant situé au-dessus et abaisse le point de fusion des péridotites mantelliques, déclenchant leur fusion partielle à l'origine des magmas andésitiques et des granitoïdes.

3. La collision continentale et l'orogenèse
- Ex. : Chaîne de l'Himalaya (collision de la plaque indienne contre la plaque eurasienne), Alpes.
- Lorsque l'océan est totalement subducté, les deux marges continentales s'affrontent. La croûte continentale granitique étant beaucoup trop légère pour s'enfoncer durablement dans le manteau dense, les deux masses rocheuses s'empilent, se plissent et se chevauchent le long de gigantesques failles inverses.
- Il en résulte un raccourcissement horizontal et un épaississement vertical de la croûte continentale (racine crustale profonde jusqu'à 70 km, formation de reliefs montagneux élevés).

---

IV. LE MOTEUR THERMIQUE DE LA TECTONIQUE : LA CONVECTION MANTELLIQUE

La Terre est une gigantesque machine thermique évacuant sa chaleur interne (chaleur primordiale d'accrétion planétaire et désintégration radioactive naturelle des isotopes d'uranium, de thorium et de potassium).
- La chaleur ne pouvant être évacuée assez vite par simple conduction à travers les roches peu conductrices, le manteau s'anime de mouvements de convection thermique lente (quelques centimètres par an).
- Les courants ascendants de matière chaude et moins dense alimentent les dorsales et les points chauds (ex. îles d'Hawaï, La Réunion).
- Les plaques océaniques froides et denses qui plongent dans les zones de subduction constituent le moteur mécanique principal (traction de la plaque plongeante par son propre poids sous l'effet de la gravité : le slab pull).`
  ,
  sections: [
    {
      title: 'I. La structure interne du globe terrestre',
      content: [
        '1. Sismologie et ondes sismiques : ondes P longitudinales (solides et liquides) et ondes S transversales de cisaillement (arrêtées par les liquides).',
        '2. Discontinuités physiques et chimiques : Moho (croûte/manteau), Gutenberg à 2 900 km (noyau externe liquide) et Lehmann à 5 100 km (graine solide).',
        '3. Découpage rhéologique : lithosphère rigide cassante d\'environ 100 km glissant sur l\'asthénosphère ductile.'
      ]
    },
    {
      title: 'II. Preuves de la mobilité et dérive des continents',
      content: [
        '1. Arguments historiques de Wegener : concordance géométrique des côtes, similitudes des fossiles continentaux (Mesosaurus) et des séries géologiques.',
        '2. Paléomagnétisme océanique (Vine et Matthews) : bandes d\'anomalies magnétiques symétriques prouvant l\'accrétion et l\'expansion continue du plancher océanique.'
      ]
    },
    {
      title: 'III. Frontières géodynamiques et moteur de la tectonique',
      content: [
        '1. Divergence : dorsales océaniques avec décompression adiabatique du manteau et volcanisme basaltique.',
        '2. Convergence : subduction océanique (plan de Benioff, fusion hydratée du coin de manteau, volcanisme andésitique) et collision continentale orogénique.',
        '3. Moteur thermique : cellules de convection mantelliques et traction gravitaire de la plaque plongeante (slab pull).'
      ]
    }
  ]
};
