import { LessonContent } from './courses';

// =========================================================================
// SVT CLASSE DE TERMINALE S (S1 & S2) — PARTIE 3 (LEÇONS S-8 À S-10)
// Génétique formelle, génétique humaine et bases de l'immunologie
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_8_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-8',
  number: 'LEÇON S-8',
  title: 'LA GÉNÉTIQUE MENDÉLIENNE ET CHROMOSOMIQUE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 3 • Reproduction, Génétique et Hérédité (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '70 min d\'étude approfondie',
  description: 'Analyse méthodique des lois de Mendel et de la théorie chromosomique de l\'hérédité (Morgan) : monohybridisme (dominance absolue, codominance, gènes létaux), dihybridisme à gènes indépendants (proportions 9:3:3:1 et test-cross 1:1:1:1), gènes liés (linkage absolu et partiel), crossing-over méiotique en prophase I, calcul des fréquences de recombinaison et établissement des cartes factorielles chromosomiques (centimorgans).',
  image: {
    caption: 'Figure S3.1 : Brassage interchromosomique et intrachromosomique (crossing-over) au cours de la méiose',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad8)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">LES MÉCANISMES DU BRASSAGE GÉNÉTIQUE EN MÉIOSE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Gènes Indépendants</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Paires de chromosomes distinctes</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Brassage interchromosomique</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Anaphase I : ségrégation au hasard</text>
        <text x="14" y="118" font-size="11" fill="#374151">• F2 : [9/16 ; 3/16 ; 3/16 ; 1/16]</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Test-cross : 25% / 25% / 25% / 25%</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Gènes Liés (Linkage)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Gènes sur le même chromosome</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Brassage intrachromosomique</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Prophase I : Crossing-over</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Chiasmas entre chromatides non-sœurs</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Gamètes recombinés &lt; parentaux</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Carte Factorielle</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Distance génétique (d)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• d = % de recombinés</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Unité : 1% = 1 centimorgan (cM)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Ordre linéaire des loci</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Cartographie chromosomique</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 3 : REPRODUCTION, GÉNÉTIQUE ET HÉRÉDITÉ
LEÇON S-8 : LA GÉNÉTIQUE MENDÉLIENNE ET CHROMOSOMIQUE

INTRODUCTION GÉNÉRALE

La génétique formelle est la science qui étudie les lois de transmission des caractères héréditaires à travers les générations sexuées. Initiée au milieu du XIXe siècle par les célèbres travaux du moine botaniste Gregor Mendel sur le pois de senteur (Pisum sativum, 1865), elle a été enrichie au début du XXe siècle par Thomas Hunt Morgan et son équipe de l'Université Columbia sur la mouche du vinaigre (Drosophila melanogaster, Prix Nobel 1933).

Morgan a formulé la théorie chromosomique de l'hérédité : les gènes sont portés physiquement par les chromosomes, ordonnés de façon linéaire en des emplacements fixes appelés loci (singulier : locus). Les lois statistiques de Mendel trouvent ainsi leur explication biophysique directe dans le comportement des chromosomes homologues lors de la méiose (ségrégation et enjambements). La maîtrise de la résolution rigoureuse des problèmes de croisement constitue un pilier fondamental de l'épreuve de SVT au Baccalauréat scientifique sénégalais.

---

I. LE MONOHYBRIDISME : TRANSMISSION D'UN SEUL COUPLE D'ALLÈLES

Le monohybridisme est le croisement de deux individus appartenant à deux lignées pures (homozygotes) qui diffèrent par un seul caractère héréditaire gouverné par un seul gène.

1. Cas de la dominance absolue
- Exemple classique de Mendel : Croisement de lignées pures de pois à graines lisses (L) et à graines ridées (r) :
  * Génération F1 : 100 % d'individus à graines lisses [L].
  * 1ère Loi de Mendel (Loi d'uniformité des hybrides de F1) : Tous les individus de la F1 sont phénotypiquement et génotypiquement identiques. L'allèle qui s'exprime est dit dominant (noté en majuscule L) ; l'allèle masqué est récessif (noté en minuscule r).
- Autofécondation des hybrides F1 (F1 x F1 -> F2) :
  * La méiose des hybrides (génotype L//r) produit 50 % de gamètes (L) et 50 % de gamètes (r) : c'est la 2e Loi de Mendel (Loi de pureté des gamètes ou de ségrégation indépendante des allèles). Un gamète ne contient qu'un seul allèle de chaque gène.
  * L'échiquier de croisement donne en génération F2 :
    - 1/4 L//L phénotype [L]
    - 2/4 L//r phénotype [L]
    - 1/4 r//r phénotype [r]
  * Proportions statistiques caractéristiques de F2 : 3/4 [L] (75 %) et 1/4 [r] (25 %), soit le ratio 3:1.

2. Cas de la codominance (absence de dominance)
- Lorsque deux allèles s'expriment simultanément chez l'hétérozygote, produisant un phénotype intermédiaire ou mixte (ex. croisement de fleurs de belle-de-nuit rouges [R] et blanches [B] -> F1 100 % de fleurs roses [RB]).
- En F2, le croisement F1 x F1 donne des proportions phénotypiques 1:2:1 :
  * 1/4 [R] (25 % R//R)
  * 2/4 [RB] (50 % R//B)
  * 1/4 [B] (25 % B//B).

3. Cas des gènes létaux
- Certains allèles à l'état homozygote provoquent la mort précoce de l'embryon (ex. gène pelage jaune chez la souris).
- Les proportions phénotypiques en F2 sont alors modifiées en 2/3 de phénotype dominant et 1/3 de phénotype récessif (ratio 2:1), car la classe homozygote dominante 1/4 meurt in utero.

4. Le test-cross (ou back-cross) en monohybridisme
- Croisement d'un individu de phénotype dominant et de génotype inconnu avec un individu homozygote récessif testeur.
- Le parent récessif ne produisant qu'un seul type de gamètes portant l'allèle récessif, le phénotype des descendants reflète directement la nature et les proportions des gamètes produits par l'individu testé :
  * Si le descendant est 100 % [Dominant] : l'individu testé était homozygote pur.
  * Si la descendance comprend 50 % [Dominant] et 50 % [Récessif] (ratio 1:1) : l'individu testé était hétérozygote.

---

II. LE DIHYBRIDISME ET LES GÈNES INDÉPENDANTS

Le dihybridisme étudie la transmission simultanée de deux couples d'allèles gouvernant deux caractères distincts.

1. La 3e Loi de Mendel : Ségrégation indépendante des couples d'allèles
- Exemple de croisement : Pois à graines lisses et jaunes [L, J] croisé avec pois à graines ridées et vertes [r, v].
- La F1 est uniforme [L, J].
- Le croisement des hybrides de F1 entre eux (F1 x F1 -> F2) fait apparaître 4 phénotypes distincts dans des proportions hautement caractéristiques :
  * 9/16 de phénotype parental double dominant [L, J]
  * 3/16 de phénotype nouveau recombiné [L, v]
  * 3/16 de phénotype nouveau recombiné [r, J]
  * 1/16 de phénotype parental double récessif [r, v].
- Ratio 9:3:3:1 de Mendel : Il prouve que les deux couples d'allèles se disjonctent de manière totalement indépendante l'un de l'autre lors de la méiose.

2. Base chromosomique : Le brassage interchromosomique
- Les deux gènes sont situés sur deux paires de chromosomes homologues différentes : ce sont des gènes indépendants (ou non liés).
- En métaphase I de méiose, l'orientation des paires de bivalents de part et d'autre du plan équatorial se fait de façon aléatoire et équiprobable.
- En anaphase I, la disjonction indépendante produit 4 types de gamètes en proportions égales (25 % de chaque) : (L, J), (L, v), (r, J), (r, v).
- Le test-cross d'un dihybride à gènes indépendants avec un double récessif donne toujours 4 phénotypes équiprobables : 25 % [L, J], 25 % [L, v], 25 % [r, J], 25 % [r, v] (ratio 1:1:1:1).

---

III. LE DIHYBRIDISME ET LES GÈNES LIÉS (LINKAGE)

Lorsque les deux gènes étudiés sont localisés sur la même paire de chromosomes homologues, ils forment un groupe de liaison (linkage) et ont tendance à être transmis ensemble.

1. Le linkage absolu (liaison totale sans crossing-over)
- Observé expérimentalement par Morgan chez le mâle de la drosophile (où il n'y a jamais de crossing-over).
- L'hybride ne produit que 2 types de gamètes parentaux identiques aux chromosomes hérités des parents.
- Le test-cross donne 50 % de phénotype parental 1 et 50 % de phénotype parental 2 (aucun phénotype recombiné).

2. Le linkage partiel et le brassage intrachromosomique (Crossing-over)
- Chez la femelle de drosophile ou chez la majorité des êtres vivants :
  * Lors de la prophase I de la méiose, les chromosomes homologues s'apparient intimement pour former des tétrades.
  * Des enjambements (chiasmas) peuvent se produire entre chromatides non-sœurs : des segments de chromatides se brisent et s'échangent réciproquement. C'est le crossing-over (CO).
  * Conséquence : formation de chromatides recombinées portant de nouvelles combinaisons d'allèles.
- Résultats du test-cross en cas de gènes liés avec crossing-over :
  * On obtient 4 phénotypes, mais les proportions ne sont pas égales :
    - Les deux phénotypes parentaux sont très majoritaires (> 50 %, ex. 41 % et 41 %) ;
    - Les deux phénotypes recombinés sont minoritaires (< 50 %, ex. 9 % et 9 %).
  * La règle d'or du Bac : Si un test-cross donne 4 phénotypes avec % Parentaux > % Recombinés, les deux gènes sont obligatoirement liés et le parent hétérozygote a subi un brassage intrachromosomique par crossing-over.

---

IV. ÉTABLISSEMENT DE LA CARTE FACTORIELLE (CARTE GÉNÉTIQUE)

1. Définition et principe d'Alfred Sturtevant
- Plus deux gènes sont éloignés l'un de l'autre sur un même chromosome, plus la probabilité qu'un chiasma (crossing-over) se produise entre eux est grande.
- La fréquence des recombinés (p) est directement proportionnelle à la distance physique séparant les deux loci :
  Distance (d) = (Nombre total d'individus recombinés / Nombre total d'individus) x 100.
- L'unité de distance génétique est le centimorgan (cM) : 1 % de recombinaison = 1 cM (ou unité de carte).
- La distance maximale théorique mesurable entre deux gènes est de 50 cM (au-delà, le taux de recombinaison atteint 50 % et les gènes se comportent statistiquement comme des gènes indépendants).

2. Méthodologie d'établissement d'une carte génétique
- Pour situer trois gènes liés A, B et C sur un chromosome :
  * On mesure les distances deux à deux : d(A,B), d(B,C) et d(A,C).
  * La plus grande distance indique les deux gènes situés aux extrémités. Le troisième gène se place à l'intérieur selon la règle d'additivité des distances : d(A,C) = d(A,B) + d(B,C).`
  ,
  sections: [
    {
      title: 'I. Le monohybridisme et les lois de Mendel',
      content: [
        '1. Première loi (uniformité des hybrides de F1) et deuxième loi (ségrégation indépendante des allèles dans les gamètes).',
        '2. Proportions classiques : dominance absolue (F2 = 3:1), codominance (F2 = 1:2:1) et gènes létaux (F2 = 2:1).',
        '3. Le test-cross en monohybridisme : révélateur du génotype par croisement avec l\'homozygote récessif (ratio 1:1 si hétérozygote).'
      ]
    },
    {
      title: 'II. Dihybridisme à gènes indépendants et brassage interchromosomique',
      content: [
        '1. Troisième loi de Mendel : disjonction indépendante de deux paires d\'allèles sur des chromosomes distincts (F2 = 9:3:3:1).',
        '2. Base cytologique : ségrégation aléatoire des bivalents en anaphase I produisant 4 types de gamètes équiprobables (test-cross 1:1:1:1).'
      ]
    },
    {
      title: 'III. Dihybridisme à gènes liés et cartographie factorielle',
      content: [
        '1. Gènes liés (linkage) : présence sur le même chromosome ; linkage absolu versus linkage partiel avec crossing-over en prophase I.',
        '2. Signature du test-cross : 4 phénotypes avec surreprésentation des formes parentales (% Parentaux > % Recombinés).',
        '3. Carte factorielle : distance génétique en centimorgans (1 cM = 1 % de recombinaison) traduisant la disposition linéaire des loci.'
      ]
    }
  ]
};

export const LESSON_9_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-9',
  number: 'LEÇON S-9',
  title: 'LA GÉNÉTIQUE HUMAINE ET LES ANOMALIES CHROMOSOMIQUES',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 3 • Reproduction, Génétique et Hérédité (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '70 min d\'étude approfondie',
  description: 'Méthodologie experte d\'analyse des arbres généalogiques (pedigrees) en génétique médicale : critères d\'identification de l\'allèle morbide (dominant ou récessif) et de son déterminisme chromosomique (autosome ou gonosome X/Y) ; étude clinique des maladies héréditaires fréquentes au Sénégal (drépanocytose HbS, hémophilie, daltonisme, albinisme) et analyse cytogénétique des anomalies de nombre et de structure du caryotype (trisomie 21, Turner, Klinefelter).',
  image: {
    caption: 'Figure S3.2 : Analyse d\'un pedigree en génétique humaine et mécanisme de non-disjonction méiotique',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad9" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad9)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">ANALYSE GÉNÉTIQUE DES PEDIGREES ET CARYOTYPES</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Autosomal Récessif</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Enfants malades de parents sains</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Saut de générations dans pedigree</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Touche autant garçons que filles</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Ex : Drépanocytose HbS au Sénégal</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Parents obligatoirement hétérozygotes</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Récessif Lié à l'X</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Presque exclusivement des garçons</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Mère conductrice saine (X^M X^m)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Père malade ne transmet JAMAIS au fils</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Ex : Hémophilie, Daltonisme</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Fille malade si père malade + mère cond.</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Anomalies Caryotype</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Non-disjonction méiotique (I ou II)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Trisomie 21 : 47 chromosomes</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Syndrome de Turner : 45, X0 (femme)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Syndrome de Klinefelter : 47, XXY</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Diagnostic prénatal (amniocentèse)</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 3 : REPRODUCTION, GÉNÉTIQUE ET HÉRÉDITÉ
LEÇON S-9 : LA GÉNÉTIQUE HUMAINE ET LES ANOMALIES CHROMOSOMIQUES

INTRODUCTION GÉNÉRALE

L'étude génétique de l'espèce humaine présente des contraintes éthiques et biologiques majeures : impossibilité absolue de pratiquer des croisements expérimentaux dirigés, temps de génération très long (25 à 30 ans) et descendance numériquement faible par couple.

Pour contourner ces obstacles, la génétique humaine s'appuie sur deux méthodes d'investigation rigoureuses :
- L'analyse des arbres généalogiques (pedigrees) retraçant la transmission d'un phénotype sur plusieurs générations successives au sein d'une même famille ;
- L'analyse cytogénétique du caryotype (microscopie des chromosomes métaphasiques colorés en bandes) complétée par les techniques modernes de biologie moléculaire (séquençage de l'ADN, PCR, électrophorèse des protéines).
Les exercices de génétique humaine comptent parmi les épreuves les plus fréquentes et les plus discriminantes du Baccalauréat sénégalais.

---

I. MÉTHODOLOGIE SCIENTIFIQUE D'ANALYSE D'UN ARBRE GÉNÉALOGIQUE

Face à un pedigree, le candidat au Baccalauréat doit résoudre successivement et méthodiquement deux questions capitales en justifiant scrupuleusement par des individus précis de l'arbre :

1. Question 1 : L'allèle responsable de la maladie est-il dominant ou récessif ?
- Critère de récessivité :
  * Si deux parents sains ont au moins un enfant malade, l'allèle de la maladie est obligatoirement récessif.
  * Justification rédigée type Bac : "Les parents [II-1 et II-2], sains sur le plan phénotypique, ont engendré un enfant [III-3] malade. L'enfant a nécessairement hérité l'allèle morbide de ses parents. Cet allèle était donc présent chez les parents à l'état masqué sans s'exprimer dans leur phénotype : l'allèle responsable de la maladie est donc récessif (noté m) et l'allèle normal est dominant (noté N). Les parents sont hétérozygotes porteurs sains."
  * La maladie saute des générations.
- Critère de dominance :
  * Si la maladie apparaît à chaque génération sans saut (transmission verticale continue) et que tout individu malade a au moins un de ses deux parents obligatoirement malade : l'allèle est vraisemblablement dominant.
  * Deux parents malades ayant un enfant sain prouvent formellement la dominance de l'allèle anormal.

2. Question 2 : Le gène morbide est-il porté par un autosome ou un gonosome (chromosome sexuel X ou Y) ?
On teste rigoureusement les hypothèses par élimination logique :
- Hypothèse 1 : Le gène est-il porté par le chromosome Y ?
  * Rejet immédiat si une seule fille ou femme dans toute la généalogie est malade.
  * Rejet si un père malade engendre des fils sains, ou si un père sain a un fils malade (l'Y se transmettant obligatoirement de père en fils).
- Hypothèse 2 : Le gène est-il porté par le chromosome X ?
  * Cas d'un allèle récessif lié à l'X (X^m) :
    - Règle de vérification absolue 1 : Toute fille malade (X^m // X^m) doit avoir un père obligatoirement malade (X^m // Y) car son père lui transmet son unique X. Si une fille malade a un père sain, l'hypothèse est réfutée : le gène est autosomique.
    - Règle de vérification absolue 2 : Toute mère malade (X^m // X^m) doit avoir tous ses fils obligatoirement malades (X^m // Y). Si une mère malade a un fils sain, l'hypothèse est réfutée.
  * Cas d'un allèle dominant lié à l'X (X^M) :
    - Tout homme malade (X^M // Y) transmet obligatoirement la maladie à toutes ses filles (100 %) sans exception, et ne la transmet à aucun de ses fils (0 %).
- Hypothèse 3 : Si les hypothèses de liaison aux gonosomes sont éliminées, le gène est obligatoirement autosomique (porté par une paire d'autosomes numérotés de 1 à 22).

---

II. LES MALADIES HÉRÉDITAIRES MONOGÉNIQUES MAJEURES AU SÉNÉGAL

1. La drépanocytose (Anémie falciforme) : Maladie autosomique récessive
- Problème de santé publique primordial au Sénégal (près de 10 à 12 % de la population sénégalaise est porteuse du trait drépanocytaire hétérozygote AS).
- Origine moléculaire : Mutation ponctuelle par substitution dans le gène de la globine bêta sur le chromosome 11 (remplacement du codon GAG par GTG, substituant l'acide glutamique par la valine en position 6 de la chaîne bêta).
- Conséquences physiopathologiques :
  * L'hémoglobine anormale HbS se polymérise en longues fibres rigides lors d'une baisse de pression en O2 (hypoxie, fièvre, déshydratation).
  * Les hématies se déforment en forme de faucille rigide (falciformation).
  * Conséquences cliniques : anémie hémolytique chronique sévère, crises vaso-occlusives atroces (ischémie osseuse, abdominale) et grande sensibilité aux infections bactériennes.
- Analyse génétique et électrophorèse de l'hémoglobine :
  * Individu sain homozygote : génotype A//A (migre en bande A à l'électrophorèse).
  * Porteur sain hétérozygote : génotype A//S (présente deux bandes A et S, résistant au paludisme : avantage sélectif hétérozygote).
  * Sujet malade homozygote : génotype S//S (bande unique S). Deux parents AS ont un risque de 1/4 (25 %) d'avoir un enfant drépanocytaire SS à chaque grossesse.

2. L'albinisme oculo-cutané : Maladie autosomique récessive
- Déficit enzymatique en tyrosinase empêchant la synthèse de mélanine : peau blanche laiteuse, cheveux décolorés, photophobie sévère et risque extrême de cancers cutanés sous le soleil tropical.

3. L'hémophilie et le daltonisme : Maladies récessives liées au chromosome X
- L'hémophilie : Déficit en facteur VIII (hémophilie A) ou facteur IX (hémophilie B) de la coagulation sanguine, provoquant des hémorragies prolongées et des hémarthroses articulaires invalidantes.
- Ne touche pratiquement que les hommes (hémizygotes X^h // Y). Les femmes hétérozygotes (X^H // X^h) sont conductrices saines.

---

III. LES ANOMALIES CHROMOSOMIQUES ET LE CARYOTYPE HUMAIN

Le caryotype humain normal comporte 46 chromosomes répartis en 23 paires : 22 paires d'autosomes et 1 paire de gonosomes (XX chez la femme, XY chez l'homme).

1. Mécanisme cytologique des aneuploïdies (anomalies de nombre)
- Résultent d'un accident de ségrégation méiotique : la non-disjonction d'une paire de chromosomes homologues lors de l'anaphase I ou la non-séparation des chromatides sœurs lors de l'anaphase II de la gamétogenèse parentale.
- Un gamète anormal reçoit deux chromosomes (n+1) ou aucun chromosome (n-1). La fécondation avec un gamète normal à n chromosomes produit :
  * Un zygote à 2n+1 chromosomes (Trisomie) ;
  * Un zygote à 2n-1 chromosomes (Monosomie, presque toujours létale in utero, sauf le syndrome de Turner).

2. Les principales anomalies chromosomiques viables
- La Trisomie 21 (Syndrome de Down) :
  * Présence de 3 chromosomes 21 (caryotype 47, XX, +21 ou 47, XY, +21).
  * Signes cliniques : faciès mongoloïde, pli palmaire transverse unique, hypotonie musculaire, cardiopathie congénitale et déficience intellectuelle de degré variable. Le risque augmente exponentiellement avec l'âge maternel (> 35 ans).
  * Peut aussi résulter d'une translocation robertsonienne (ex. translocation du chromosome 21 sur le 14 : caryotype à 46 chromosomes mais trisomie fonctionnelle partielle).
- Le Syndrome de Turner (Monosomie X) :
  * Caryotype 45, X0 (absence totale d'un deuxième chromosome sexuel).
  * Phénotype féminin stérile : petite taille, cou palmé (pterygium colli), absence de puberté et ovaires réduits à des bandelettes fibreuses non fonctionnelles.
- Le Syndrome de Klinefelter :
  * Caryotype 47, XXY (présence d'un X surnuméraire chez un individu de sexe masculin).
  * Homme de grande taille avec atrophie testiculaire, azoospermie (stérilité totale) et gynécomastie (développement mammaire).`
  ,
  sections: [
    {
      title: 'I. Méthodologie d\'analyse des arbres généalogiques (pedigrees)',
      content: [
        '1. Détermination de la dominance ou récessivité : parents sains ayant un enfant malade -> allèle morbide récessif masqué.',
        '2. Localisation chromosomique par élimination : tests de liaison au chromosome Y, au chromosome X (fille malade ayant un père sain exclut la récessivité liée à l\'X) et conclusion autosomique.'
      ]
    },
    {
      title: 'II. Maladies monogéniques majeures au Sénégal',
      content: [
        '1. Drépanocytose HbS (autosomique récessive) : mutation ponctuelle de la chaîne bêta-globine, falciformation hypoxique, électrophorèse et conseil génétique prénuptial.',
        '2. Maladies liées à l\'X : hémophilie et daltonisme frappant préférentiellement les hommes hémizygotes X^m//Y transmis par mères conductrices.'
      ]
    },
    {
      title: 'III. Anomalies chromosomiques de nombre et de structure',
      content: [
        '1. Mécanisme : non-disjonction méiotique en anaphase I ou II produisant des gamètes anormaux à n+1 ou n-1.',
        '2. Trisomie 21 (Down), monosomie X (Turner 45,X0) et polysomie sexuelle (Klinefelter 47,XXY).'
      ]
    }
  ]
};

export const LESSON_10_SVT_TLE_S: LessonContent = {
  id: 'svt-tle-s-lecon-10',
  number: 'LEÇON S-10',
  title: 'LE SYSTÈME IMMUNITAIRE ET LA RECONNAISSANCE DU NON-SOI',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 4 • Immunologie et Défense de l\'organisme (Série S)',
  level: 'Terminale S1 & S2',
  readTime: '65 min d\'étude approfondie',
  description: 'Bases cellulaires et moléculaires de l\'immunologie : notion de soi et de non-soi, Complexe Majeur d\'Histocompatibilité (CMH I sur toutes les cellules nucléées et CMH II sur les cellules présentatrices d\'antigène), cellules effectrices de l\'immunité (macrophages, cellules dendritiques, lymphocytes B à BCR, lymphocytes T CD4+ et CD8+ à TCR), organes lymphoïdes primaires (moelle osseuse, thymus) et secondaires (rate, ganglions lymphatiques).',
  image: {
    caption: 'Figure S3.3 : Les récepteurs de l\'immunité adaptative (BCR et TCR) et présentation par le CMH',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtGrad10" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#065f46" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtGrad10)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#064e3b" text-anchor="middle">LE MARQUAGE BIOLOGIQUE DU SOI ET LES RÉCEPTEURS CELLULAIRES</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">1. Le CMH (MHC / HLA)</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Carte d'identité biologique</text>
        <text x="14" y="74" font-size="11" fill="#374151">• CMH I : toutes cellules nucléées</text>
        <text x="14" y="96" font-size="11" fill="#374151">• CMH II : CPA (macrophages, LB)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Présentation de peptides antigéniques</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Rejet des allogreffes</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">2. Récepteurs B et T</text>
        <text x="14" y="52" font-size="11" fill="#374151">• BCR (Lymphocytes B) : Ig de surface</text>
        <text x="14" y="74" font-size="11" fill="#374151">  Reconnaît antigène libre natif</text>
        <text x="14" y="96" font-size="11" fill="#374151">• TCR (Lymphocytes T) :</text>
        <text x="14" y="118" font-size="11" fill="#374151">  Reconnaît peptide associé au CMH</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Double reconnaissance obligatoire</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">3. Organes Lymphoïdes</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Primaires : Moelle osseuse &amp; Thymus</text>
        <text x="14" y="74" font-size="11" fill="#374151">  Lieu de maturation &amp; sélection</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Secondaires : Ganglions &amp; Rate</text>
        <text x="14" y="118" font-size="11" fill="#374151">  Lieu de rencontre avec l'antigène</text>
        <text x="14" y="140" font-size="11" fill="#047857" font-weight="bold">→ Déclenchement de la réponse</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — TERMINALE S1 & S2

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 4 : IMMUNOLOGIE ET DÉFENSE DE L'ORGANISME
LEÇON S-10 : LE SYSTÈME IMMUNITAIRE ET LA RECONNAISSANCE DU NON-SOI

INTRODUCTION GÉNÉRALE

Vivant en immersion permanente dans un environnement peuplé de milliards de micro-organismes pathogènes (bactéries, virus, champignons microscopiques, parasites) et soumis en continu à l'apparition interne de cellules tumorales anormales, l'organisme maintient son intégrité biologique grâce au système immunitaire.

L'immunité repose sur une distinction ontologique absolue : la reconnaissance du "Soi" (les constituants cellulaires et macromoléculaires propres de l'individu) et le rejet impitoyable du "Non-Soi" (tout élément étranger ou altéré). Cette discrimination d'une précision moléculaire infime est sous-tendue par des marqueurs membranaires codés génétiquement : le Complexe Majeur d'Histocompatibilité (CMH ou système HLA chez l'homme), découvert par Jean Dausset (Prix Nobel de médecine 1980).

---

I. LE MARQUAGE BIOLOGIQUE DU SOI ET LES ANTIGÈNES

1. La carte d'identité biologique : Le Complexe Majeur d'Histocompatibilité (CMH / HLA)
- Le CMH est un groupe de glycoprotéines membranaires codées par un ensemble de gènes hautement polymorphes situés sur le bras court du chromosome 6 chez l'Homme. Le polymorphisme est tel que la probabilité que deux individus non apparentés possèdent exactement le même jeu de molécules du CMH est inférieure à une sur un million (seuls les jumeaux vrais monozygotes sont génétiquement identiques).
- On distingue deux classes principales de molécules du CMH :
  * Le CMH de classe I (molécules HLA-A, HLA-B, HLA-C) :
    Exprimé à la surface de toutes les cellules nucléées de l'organisme ainsi que sur les plaquettes (absent des hématies anucléées).
    Rôle : Présente en permanence des fragments peptidiques endogènes issus de la dégradation des protéines intracellulaires. Si la cellule est saine, elle présente un peptide du Soi (toléré par le système). Si la cellule est infectée par un virus ou transformée en cellule cancéreuse, elle présente un peptide viral ou tumoral anormal, reconnu par les lymphocytes T CD8+.
  * Le CMH de classe II (molécules HLA-DP, HLA-DQ, HLA-DR) :
    Exprimé exclusivement sur les cellules présentatrices d'antigènes professionnelles (CPA) : macrophages, cellules dendritiques et lymphocytes B.
    Rôle : Présente des peptides exogènes issus de la phagocytose et de la digestion de microbes extracellulaires aux lymphocytes T CD4+.

2. Les groupes sanguins érythrocytaires (Systèmes ABO et Rhésus)
- Les hématies étant dépourvues de noyau et de CMH, leur identité membranaire repose sur des glycolipides de surface : les agglutinogènes A, B, AB ou O et l'antigène D (Rhésus).
- Présence naturelle dans le plasma d'anticorps agglutinines réguliers (anti-A chez le groupe B, anti-B chez le groupe A, anti-A et anti-B chez le groupe O).
- Règle de transfusion d'urgence : Ne jamais apporter d'agglutinogènes érythrocytaires contre lesquels le receveur possède déjà les anticorps agglutinants correspondants dans son plasma, sous peine de choc transfusionnel hémolytique mortel.

3. La notion d'antigène
- Un antigène est toute substance biologique (protéine, polysaccharide, toxine bactérienne, capside virale, cellule greffée étrangère) capable d'être reconnue spécifiquement par les récepteurs du système immunitaire et de déclencher une réponse immunitaire adaptative.
- L'antigène n'est pas reconnu dans sa totalité, mais par de petites zones moléculaires spécifiques en relief appelées épitopes ou déterminants antigéniques.

---

II. LES ACTEURS CELLULAIRES DE L'IMMUNITÉ

Toutes les cellules immunitaires dérivent de cellules souches hématopoïétiques pluripotentes de la moelle osseuse rouge des os plats :

1. Les cellules de l'immunité innée non spécifique
- Les polynucléaires (granulocytes) : neutrophiles (phagocytes rapides), éosinophiles (défense antiparasitaire) et basophiles (médiateurs de l'inflammation).
- Les monocytes sanguins qui se transforment dans les tissus en volumineux macrophages phagocytaires.
- Les cellules dendritiques : sentinelles tissulaires ramifiées, CPA professionnelles les plus puissantes, capables de migrer vers les ganglions pour alerter les lymphocytes.
- Les cellules NK (Natural Killer) : lymphocytes tueurs non spécifiques capables d'éliminer directement les cellules cancéreuses ou infectées ayant perdu leur CMH I.

2. Les cellules de l'immunité adaptative spécifique
- Les Lymphocytes B (LB) :
  * Responsables de la réponse à médiation humorale.
  * Portent à leur surface des récepteurs antigéniques appelés BCR (B Cell Receptor), qui sont en réalité des anticorps membranaires (immunoglobulines IgM ou IgD).
  * Propriété unique : Le BCR reconnaît directement l'antigène natif tridimensionnel libre ou particulaire sans nécessiter de présentation par le CMH.
- Les Lymphocytes T (LT) :
  * Responsables de la réponse à médiation cellulaire et de la coordination immunitaire.
  * Portent à leur surface le récepteur TCR (T Cell Receptor), hétérodimère associé au complexe CD3.
  * Règle de la double reconnaissance : Le TCR est incapable de reconnaître un antigène libre ! Il exige obligatoirement que l'antigène peptidique lui soit présenté niché dans le sillon d'une molécule du CMH de l'organisme.
  * Deux grandes sous-populations de LT :
    - Les LT4 (ou LT auxiliaires / T-helper) : expriment le co-récepteur CD4 qui s'arrime au CMH II des CPA. Ce sont les chefs d'orchestre de toute la réponse immunitaire.
    - Les LT8 (ou pré-cytotoxiques) : expriment le co-récepteur CD8 qui s'arrime au CMH I de toutes les cellules de l'organisme.

---

III. LES ORGANES DU SYSTÈME IMMUNITAIRE ET LA SÉLECTION DES LYMPHOCYTES

1. Les organes lymphoïdes primaires (centraux) : Naissance et maturation
- La moelle osseuse rouge :
  * Lieu de production de tous les leucocytes par hématopoïèse.
  * Lieu de maturation et d'apprentissage des lymphocytes B : élimination impitoyable par apoptose des clones de LB autoréactifs qui reconnaissent des constituants du Soi (tolérance centrale).
- Le thymus :
  * Organe bilobé situé dans le médiastin antérieur au-dessus du cœur.
  * Lieu d'apprentissage et de maturation exclusive des lymphocytes T :
    - Sélection positive dans le cortex : seuls les LT dont le TCR est capable d'interagir avec les molécules du CMH de l'individu reçoivent un signal de survie.
    - Sélection négative dans la médulla : les LT dont le TCR se lie avec une trop forte affinité aux peptides du Soi sont éliminés par apoptose (suppression de l'auto-immunité). Plus de 95 % des thymocytes meurent durant ce stage éducatif impitoyable.

2. Les organes lymphoïdes secondaires (périphériques) : Rencontre et activation
- Les ganglions lymphatiques disséminés le long du réseau vasculaire lymphatique (cervicaux, axillaires, inguinaux).
- La rate (filtre immunologique sanguin).
- Les formations lymphoïdes associées aux muqueuses (MALT, amygdales, plaques de Peyer de l'intestin).
- C'est dans ces organes que les lymphocytes naïfs matures rencontrent les antigènes drainés par la lymphe et les CPA, s'activent, prolifèrent et déclenchent la réponse immunitaire adaptative.`
  ,
  sections: [
    {
      title: 'I. Le marquage biologique du soi : le CMH et les antigènes',
      content: [
        '1. Le CMH (HLA) : carte d\'identité génétique hautement polymorphe codée sur le chromosome 6.',
        '2. CMH I (toutes cellules nucléées, présentation des peptides endogènes aux LT8) et CMH II (CPA professionnelles, présentation des peptides exogènes aux LT4).',
        '3. Définition de l\'antigène et des épitopes reconnus spécifiquement par le système immunitaire.'
      ]
    },
    {
      title: 'II. Cellules de l\'immunité innée et adaptative',
      content: [
        '1. Immunité innée : macrophages, cellules dendritiques sentinelles (CPA) et granulocytes.',
        '2. Lymphocytes B : récepteur BCR reconnaissant l\'antigène libre tridimensionnel.',
        '3. Lymphocytes T : récepteur TCR à double reconnaissance obligatoire (peptide antigénique + CMH de l\'individu).'
      ]
    },
    {
      title: 'III. Organes lymphoïdes primaires et éducation immunitaire',
      content: [
        '1. Organes primaires : moelle osseuse (naissance et maturation des LB) et thymus (maturation et sélections positive/négative des LT).',
        '2. Organes secondaires : ganglions lymphatiques et rate, lieux d\'activation et de prolifération clonale.'
      ]
    }
  ]
};
