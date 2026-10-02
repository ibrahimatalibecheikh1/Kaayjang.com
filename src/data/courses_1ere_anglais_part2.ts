import { LessonContent } from './courses';

// =========================================================================
// MANUEL COMPLET D'ANGLAIS — PREMIÈRE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// PARTIE 2 : UNITS 9 À 17 — GRAMMAIRE AVANCÉE & THÉMATIQUES MAJEURES
// =========================================================================

export const LESSON_9_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-09',
  title: 'Unit 9: Adjectives, Adverbs and Comparison — Mastery of Comparative & Superlative Forms',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Les adjectifs décrivent les noms ; les adverbes modifient les verbes, adjectifs ou autres adverbes. Formation rigoureuse des degrés de comparaison : comparatifs de supériorité, superlatifs, égalité (as...as) et formes irrégulières incontournables.',
  image: {
    url: '',
    caption: 'Figure 2.1 : L\'Échelle morphologique des comparatifs et superlatifs anglais',
    alt: 'Schéma comparatifs et superlatifs',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">COMPARATIVE &amp; SUPERLATIVE STRUCTURES</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Short (-er/-est) • Long (more/most) • Irregulars</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#60a5fa">SHORT ADJECTIVES</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">faster than, higher than</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">the fastest, the highest</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">LONG ADJECTIVES</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">more efficient than</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">the most efficient</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#facc15">IRREGULARS &amp; EQUALITY</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">good → better → best</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">bad → worse → worst</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#f472b6">as + adj + as</text></svg>`
  },
  sections: [
    {
      title: 'I. Adjectifs et Adverbes : Rôles et Positions Syntaxiques',
      content: `### 1. Les Adjectifs
* **Épithète (devant le nom) :** L'adjectif qualificatif anglais se place **toujours avant** le nom qu'il qualifie et reste **invariable** en genre et en nombre :
  * *a **difficult** exercise* / *two **difficult** exercises* (jamais de *-s* à l'adjectif).
* **Attribut (après un verbe de perception ou d'état) :** Après *be, seem, look, appear, become, feel, smell, taste* :
  * *The exam seems **challenging**.* / *The mango tastes **sweet**.*

### 2. Les Adverbes de Manière
Ils précisent comment une action est accomplie. La plupart sont formés en ajoutant **-ly** à l'adjectif :
* *careful → carefully* / *quick → quickly* / *clear → clearly* / *easy → easily*.
* **Exceptions et irréguliers fréquents :**
  * *good → **well*** (*She speaks English well.*)
  * *fast → **fast*** (*He runs fast.*)
  * *hard → **hard*** (*They study hard.*)
  * *early → **early*** / *late → **late***.`
    },
    {
      title: 'II. Les Degrés de Comparaison : Règles Morphologiques',
      content: `| Type d'Adjectif | Comparatif de Supériorité (+ THAN) | Superlatif Absolu (THE + ...) |
| :--- | :--- | :--- |
| **Adjectifs courts (1 syllabe)** | **-er than** : *tall → taller than* | **the -est** : *the tallest* |
| **Adjectifs courts en C-V-C** | Doubler la consonne : *big → bigger than* | *the biggest* / *the hottest* |
| **Adjectifs de 2 syllabes en -y** | **-ier than** : *easy → easier than* | **the -iest** : *the easiest* / *the happiest* |
| **Adjectifs longs (2 syllabes ou +)**| **more ... than** : *more interesting than* | **the most ...** : *the most interesting* |

### Irréguliers Fondamentaux à Mémoriser
* **good / well** → **better than** → **the best**
* **bad / badly** → **worse than** → **the worst**
* **far** → **further / farther than** → **the furthest / the farthest**`
    },
    {
      title: 'III. L\'Égalité et l\'Infériorité',
      content: `* **Comparatif d'égalité :** **as** + **adjectif / adverbe** + **as**
  * *This English exercise is **as difficult as** the math problem.*
* **Négation de l'égalité (infériorité) :** **not as / not so** + **adjectif** + **as**
  * *Travelling by bus is **not as fast as** the Train Express Régional (TER).*
* **Comparatif d'infériorité :** **less** + **adjectif** + **than**
  * *This machine is **less expensive than** that modern computer.*`
    },
    {
      title: 'IV. Exercices Guidés & Corrigé',
      content: `### Exercices
1. **Complete with the comparative or superlative form:**
   * English is *(easy)* than I initially thought.
   * She speaks English very *(fluent)*.
   * Dakar is the *(large)* city in Senegal.
   * This solution is *(good)* than the previous proposal.
2. **Rewrite using AS...AS:**
   * The train is faster than the bus. (The bus is not...)

### Corrigé Détaillé
1. *English is **easier** than I initially thought.* (Consonne + y → -ier).
   *She speaks English very **fluently**.* (Adverbe de manière modifiant le verbe *speaks*).
   *Dakar is the **largest** city in Senegal.* (Superlatif de *large*).
   *This solution is **better** than the previous proposal.* (Forme irrégulière de *good*).
2. *The bus is **not as fast as** the train.*`
    }
  ,
    {
      title: 'V. Texte Intégral : Comparative Geography of West African Ecosystems',
      content: `### Reading Passage
West Africa features extraordinarily diverse biomes, ranging from the arid expanses of the Sahel to the dense tropical rainforests of the Guinean coast. Northern regions receive **far less rainfall than** southern territories, making agriculture in the Ferlo valley **much more precarious than** in the fertile Casamance basin. 

Climatologists note that while the Sahel experiences **the highest temperatures** during the dry season, coastal cities such as Dakar enjoy **a noticeably milder climate** because of continuous Atlantic sea breezes. Economically, the peanut basin remains **the most densely cultivated** agricultural zone, but modern solar power farms in Bokhol generate clean electricity **more efficiently than** older thermal power stations. 

Preserving these varied landscapes requires balanced policies. Protecting biodiversity in Niokolo-Koba National Park is **as vital as** preventing soil erosion in the northern dunes. The **more systematically** communities adopt agroforestry, the **more resilient** our ecosystems will become against climate extremes.`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Exercices
1. *Saint-Louis is older than Dakar.* (Rewrite with: *Dakar is not...*)
2. *Casamance receives more rain than any other region in Senegal.* (Rewrite using the superlative: *the wettest*).
3. *As you study harder, your results become better.* (Rewrite with: *The harder... the better...*)
4. *Moussa is 1.80m tall. Ousmane is 1.80m tall.* (Combine using: *as... as...*)
5. *Solar energy is cleaner than coal.* (Rewrite with: *Coal is not...*)

### Corrigé Détaillé
1. *Dakar is **not as old as** (or: **not so old as**) Saint-Louis.* (Comparatif d'infériorité / négation de l'égalité).
2. *Casamance is **the wettest region** in Senegal.* (Superlatif de supériorité avec doublement du t : *wet ──→ the wettest*).
3. ***The harder you study, the better your results become**.* (Double comparatif proportionnel).
4. *Moussa is **as tall as** Ousmane.* (Comparatif d'égalité).
5. *Coal is **not as clean as** solar energy (or: **less clean than** solar energy).*`
    }
  ]
};

export const LESSON_10_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-10',
  title: 'Unit 10: Prepositions and Connectors — Spatial-Temporal Relations & Discourse Logic',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Les prépositions organisent les relations de temps, de lieu et de mouvement ; les connecteurs organisent la logique du discours (cause, conséquence, opposition, concession). Outils indispensables pour la rédaction de paragraphes cohérents.',
  image: {
    url: '',
    caption: 'Figure 2.2 : Matrice spatio-temporelle des prépositions AT, ON, IN et connecteurs logiques',
    alt: 'Schéma prépositions et connecteurs',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">PREPOSITIONS (AT, ON, IN) &amp; LOGICAL CONNECTORS</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Precise • Days • Extended Time • Transitions</text><polygon points="180,70 60,215 300,215" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/><text x="180" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">AT (Hours: at 7:00)</text><text x="180" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">ON (Days: on Monday)</text><text x="180" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">IN (Years: in 2026)</text><rect x="340" y="70" width="420" height="145" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/><text x="360" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#c084fc">ESSAY TRANSITION WORDS</text><text x="360" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Addition: Furthermore, Moreover, In addition</text><text x="360" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Contrast: However, On the other hand, Nevertheless</text><text x="360" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Result: Therefore, Consequently, As a result</text><text x="360" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Concession: Although, Even though, Despite (+ noun)</text></svg>`
  },
  sections: [
    {
      title: 'I. Prépositions de Temps : AT, ON, IN',
      content: `La maîtrise du trio *at, on, in* est un impératif grammatical absolu :

| Préposition | Domaine d'Application Temporel | Exemples Concrets |
| :--- | :--- | :--- |
| **AT** | **Heures précises**, moments ponctuels de la journée, fêtes | *at 8 o'clock*, *at noon*, *at midnight*, *at sunset*, *at the weekend* |
| **ON** | **Jours précis** de la semaine et **dates complètes** | *on Monday*, *on Fridays*, *on 4th April*, *on my birthday* |
| **IN** | **Mois, années, siècles, saisons**, et moments généraux | *in July*, *in 2026*, *in the 21st century*, *in the morning*, *in summer* |

* *Exemple récapitulatif :* The examination begins **on** Monday, 15th June, **at** 8:00 a.m., **in** the morning.`
    },
    {
      title: 'II. Prépositions de Lieu et Mouvement',
      content: `* **AT (position ponctuelle / institution) :** *at the station*, *at school*, *at home*, *at university*, *at the bus stop*.
* **IN (dans un espace fermé ou une zone géographique) :** *in the classroom*, *in Dakar*, *in Senegal*, *in Africa*.
* **ON (sur une surface ou un axe de circulation) :** *on the table*, *on the second floor*, *on Boulevard du Centenaire*.
* **Prépositions de mouvement :** *into* (entrer dans), *out of* (sortir de), *towards* (en direction de), *through* (à travers), *across* (de l'autre côté de).`
    },
    {
      title: 'III. Les Connecteurs Logiques du Discours (Connectors & Linking Words)',
      content: `Les connecteurs structurent l'argumentation écrite demandée à l'examen :

1. **Addition :** *moreover, furthermore, in addition, besides, also*.
   * *The school provides clean water; **moreover**, it has installed solar panels.*
2. **Contraste & Concession :** *however, nevertheless, whereas, although, even though, despite (+ nom/V-ing)*.
   * *He was tired; **however**, he continued writing his essay.*
   * *Although it was raining heavily, the students arrived on time.*
3. **Cause :** *because, since, as, due to (+ nom), owing to (+ nom)*.
   * *The match was postponed **due to** the heavy rain.*
4. **Conséquence :** *therefore, as a result, consequently, so, thus*.
   * *She studied regularly; **therefore**, she passed with flying colours.*
5. **But (Purpose) :** *in order to (+ BV), so as to (+ BV), so that (+ sujet + can/could/would)*.
   * *He woke up early **so that he would not miss** the morning bus.*`
    },
    {
      title: 'IV. Exercices & Corrigé',
      content: `### Exercices
1. **Fill in with AT, ON or IN:**
   * Senegal celebrated its national day ___ 4th April.
   * The school bus arrives ___ 7:30 a.m. ___ the morning.
   * Moussa was born ___ 2008.
2. **Combine sentences using the given connector:**
   * He was sick. He attended all classes. (*Although*)
   * Fatou revised her lessons carefully. She achieved top marks. (*Therefore*)

### Corrigé Détaillé
1. *on 4th April* (date précise).
   *at 7:30 a.m. in the morning* (heure précise = at ; moment de la journée = in).
   *in 2008* (année).
2. *Although he was sick, he attended all classes.*
   *Fatou revised her lessons carefully; therefore, she achieved top marks.*`
    }
  ,
    {
      title: 'V. Texte d\'Application Contextualisé : A Journey across Senegal',
      content: `### Reading Passage
**On** Monday morning **at** dawn, the regional express train departed smoothly **from** Dakar Central Station **towards** Diamniadio. Passengers looked **through** large panoramic windows as urban neighborhoods gave way **to** green agricultural plains. 

**Despite** the heavy rain that had fallen **during** the previous night, the modernized drainage network prevented water **from** accumulating **on** the tracks. **In spite of** minor schedule delays caused by safety checks **at** Rufisque, commuters arrived punctually **at** their technological workplaces. 

Transportation planners observe that traveling **by** train is **far safer and faster than** navigating congested expressways. **Furthermore**, it reduces carbon emissions drastically. **Consequently**, the government intends to expand the network **towards** Blaise Diagne International Airport **before** the end of next year.`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Exercices
1. *Fill in with: AT, ON, IN, BY, FOR, DURING, SINCE:*
   * a) He has been living in Thiès ........ 2018.
   * b) The summit will begin ........ Monday morning ........ 9:00 AM.
   * c) Thousands of passengers travel ........ train every day.
   * d) He studied diligently ........ the vacation.
2. *Combine using the connector in brackets:*
   * a) It rained heavily. We arrived on time. (*Despite*)
   * b) He worked hard. He passed with honors. (*Consequently*)

### Corrigé Détaillé
1. a) *since* (point de départ précis) ; b) *on* Monday / *at* 9:00 AM ; c) *by* train (moyen de transport) ; d) *during* the vacation (durée continue).
2. a) ***Despite the heavy rain**, we arrived on time.* (*Despite + Noun Phrase* sans *of*).
   b) *He worked hard; **consequently**, he passed with honors.* (Expression de la conséquence logique).`
    }
  ]
};

export const LESSON_11_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-11',
  title: 'Unit 11: Modal Auxiliaries — Capacity, Obligation, Advice, Permission & Probability',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '70 min',
  description: 'Les modaux permettent d’exprimer la capacité, la permission, l’obligation, le conseil et la probabilité. Règle absolue de la base verbale sans to, absence de -s à la 3e personne et nuances entre can, could, may, might, must, have to, should et ought to.',
  image: {
    url: '',
    caption: 'Figure 2.3 : Spectre d\'autorité et de certitude des auxiliaires modaux',
    alt: 'Schéma auxiliaires modaux',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a855f7">MODAL AUXILIARIES : CAPACITY, DUTY &amp; PROBABILITY</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Bare Infinitive • Invariable • Modal Logic</text><rect x="40" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">CAPACITY</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">CAN / COULD / MAY</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Ability &amp; permission</text><rect x="225" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="235" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">OBLIGATION</text><text x="235" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">MUST / HAVE TO</text><text x="235" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Strict duty</text><rect x="410" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/><text x="420" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">PROHIBITION</text><text x="420" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">MUSTN'T vs NEEDN'T</text><text x="420" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Strict ban vs optional</text><rect x="595" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="605" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">ADVICE / CHANCE</text><text x="605" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">SHOULD / MIGHT</text><text x="605" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Moral advice &amp; possibility</text></svg>`
  },
  sections: [
    {
      title: 'I. Caractéristiques Morphologiques des Modaux',
      content: `Les verbes modaux (*modal auxiliaries*) présentent trois propriétés syntaxiques invariables :
1. Ils sont **directement suivis de la base verbale sans TO** (sauf *ought to*).
2. Ils ne prennent **jamais de -s** à la 3ᵉ personne du singulier : *He can*, *She must*, *It might* (JAMAIS : *he cans*).
3. Ils forment eux-mêmes leurs négations et interrogations sans l'auxiliaire *do/does* : *Can you swim?* / *You must not enter.*`
    },
    {
      title: 'II. Tableau des Principales Valeurs Modales',
      content: `| Modal | Valeur Fondamentale | Exemple Type |
| :--- | :--- | :--- |
| **CAN** | Capacité physique ou intellectuelle ; permission informelle | *She **can speak** three languages fluently.* / *Can I borrow your pen?* |
| **COULD** | Capacité passée ; demande polie au présent | *When I was ten, I **could run** very fast.* / *Could you help me, please?* |
| **MAY** | Permission formelle ; probabilité moyenne (50%) | *May I come in, Sir?* / *Take an umbrella; it **may rain** later.* |
| **MIGHT** | Probabilité faible ou hypothèse prudente (30%) | *He is not in class; he **might be** in the school clinic.* |
| **MUST** | Obligation stricte émanant du locuteur ; quasi-certitude | *Students **must wear** the school uniform.* / *She has studied for hours; she **must be** tired.* |
| **HAVE TO** | Obligation imposée de l'extérieur (règles, lois) | *In Senegal, drivers **have to carry** a valid driving licence.* |
| **MUSTN'T** | **Interdiction absolue** (Défense formelle) | *You **must not smoke** in the library.* |
| **NEEDN'T / DON'T HAVE TO**| **Absence d'obligation** (Inutile de faire) | *Tomorrow is a public holiday; we **don't have to wake up** early.* |
| **SHOULD / OUGHT TO** | Conseil bienveillant, recommandation morale | *You **should read** more books to enrich your vocabulary.* |`
    },
    {
      title: 'III. Exercices & Corrigé Détaillé',
      content: `### Exercices
1. **Choose the most appropriate modal:**
   * You *(must / might)* respect school regulations; it is compulsory.
   * "___ I use your dictionary for a moment?" — "Certainly, go ahead."
   * Look at the sky! The weather is unpredictable; it *(might / must)* rain this afternoon.
   * You look exhausted; you *(should / can)* see a doctor.
2. **Rewrite to express the opposite (prohibition vs absence of obligation):**
   * You must attend the optional conference. (Rewrite using *don't have to*).

### Corrigé Détaillé
1. *You **must** respect school regulations...* (Obligation stricte et obligatoire).
   ***May / Could** I use your dictionary...?* (Demande polie d'autorisation).
   *...it **might** rain this afternoon.* (Possibilité incertaine).
   *...you **should** see a doctor.* (Conseil judicieux).
2. *You **don't have to attend** the optional conference.* (L'obligation est levée).`
    }
  ,
    {
      title: 'IV. Les Semi-Modaux et Équivalents Périfrastiques',
      content: `Les verbes modaux étant défectifs (pas d'infinitif, pas de futur en *will*), on emploie des équivalents :

| Modal | Équivalent Périfrastique | Exemple au Futur / Passé |
| :--- | :--- | :--- |
| **CAN** (Capacité) | **BE ABLE TO** | *In the future, automated software **will be able to diagnose** crop diseases.* |
| **MUST** (Obligation) | **HAVE TO** | *Yesterday, the technician **had to repair** the solar battery.* |
| **MAY** (Permission) | **BE ALLOWED TO** | *During exams, candidates **are not allowed to use** smartphones.* |
| **Conseil urgent** | **HAD BETTER + BV** | *You **had better review** your irregular verbs tonight.* |`
    },
    {
      title: 'V. Texte d\'Application Contextualisé : Community Health Advice',
      content: `### Reading Passage
Speaking at a local community clinic in Podor, a dedicated district nurse shared critical health guidelines with families: *"To prevent seasonal malaria, every household **must sleep** under insecticide-treated bed nets. You **needn't purchase** expensive imported remedies; primary healthcare centers provide certified medication free of charge. 

If a child develops a persistent fever, parents **should not delay** medical consultation. You **had better visit** the clinic promptly rather than administering unregulated pills purchased from informal markets. With early intervention, our medical staff **can treat** fevers effectively, and children **will be able to resume** their schooling without complication."*`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Exercices
1. *It is forbidden for vehicles to park on the pedestrian walkway.* (Rewrite using: **MUSTN'T**).
2. *It is not necessary for you to bring extra paper.* (Rewrite using: **NEEDN'T**).
3. *Perhaps Aminata is in the library.* (Rewrite using: **MAY**).
4. *It is strongly advisable that you drink safe boiled water.* (Rewrite using: **OUGHT TO**).
5. *He was able to swim across the river.* (Rewrite using: **COULD**).

### Corrigé Détaillé
1. *Vehicles **mustn't park** on the pedestrian walkway.* (Interdiction stricte).
2. *You **needn't bring** extra paper.* (Absence totale d'obligation).
3. *Aminata **may be** in the library.* (Probabilité présente).
4. *You **ought to drink** safe boiled water.* (Conseil moral équivalent à *should*).
5. *He **could swim** across the river (or: **managed to swim**).*`
    }
  ]
};

export const LESSON_12_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-12',
  title: 'Unit 12: The Passive Voice — Agent Omission, Focus on Action & Tense Transformations',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '70 min',
  description: 'La voix passive met l’accent sur l’action ou sur le résultat plutôt que sur l’agent. Règle fondamentale BE + Past Participle, transposition systématique des temps de l\'actif au passif, rôle et omission de l\'agent (BY), et exercices types d\'examen.',
  image: {
    url: '',
    caption: 'Figure 2.4 : Mécanisme de transformation passive et règles de transfert du verbe BE',
    alt: 'Schéma de la voix passive',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f43f5e">PASSIVE VOICE MECHANISM &amp; TENSE SHIFTS</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Active Object ──→ Passive Subject • BE + V3</text><rect x="50" y="75" width="200" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="150" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">The architect (Subject)</text><rect x="300" y="75" width="200" height="40" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="400" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">designed (Past Simple)</text><rect x="550" y="75" width="200" height="40" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="650" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">the school (Object)</text><path d="M 650 120 C 650 160, 150 140, 150 170" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4"/><path d="M 150 120 C 150 160, 650 140, 650 170" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/><line x1="400" y1="120" x2="400" y2="170" stroke="#eab308" stroke-width="2"/><rect x="50" y="175" width="200" height="45" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/><text x="150" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">The school (New Subject)</text><rect x="300" y="175" width="200" height="45" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/><text x="400" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">was designed (BE + V3)</text><rect x="550" y="175" width="200" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="650" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">by the architect</text></svg>`
  },
  sections: [
    {
      title: 'I. Principe Fondamental & Mécanisme de Transformation',
      content: `Dans la voix passive, le **complément d'objet direct (COD)** de la phrase active devient le **sujet** de la phrase passive. L'agent de l'action est introduit par la préposition **BY** :

* **Voix active :** *The teacher **explains** the difficult grammatical lesson.*
* **Voix passive :** *The difficult grammatical lesson **is explained** by the teacher.*

### Règle d'or de la formation passive :
**Objet Actif (devenu Sujet)** + **BE (au même temps que le verbe actif)} + **Participe Passé (V3)} + (**by** + **Agent**)`
    },
    {
      title: 'II. Tableau des Transformations Passives par Temps',
      content: `| Temps Grammatical | Phrase Active | Phrase Passive Correspondante |
| :--- | :--- | :--- |
| **Simple Present** | *People **speak** English worldwide.* | *English **is spoken** worldwide.* |
| **Present Continuous** | *The engineers **are building** a bridge.* | *A bridge **is being built** by the engineers.* |
| **Simple Past** | *They **built** the railway in 2020.* | *The railway **was built** in 2020.* |
| **Past Continuous** | *They **were painting** the school.* | *The school **was being painted**.* |
| **Present Perfect** | *The committee **has approved** the project.* | *The project **has been approved**.* |
| **Past Perfect** | *They **had finished** the work.* | *The work **had been finished**.* |
| **Future (will)** | *The principal **will announce** the results.* | *The results **will be announced** by the principal.* |
| **Modaux (can, must)** | *Students **must wear** uniforms.* | *Uniforms **must be worn** by students.* |`
    },
    {
      title: 'III. Quand faut-il omettre l\'Agent (BY + Agent) ?',
      content: `Contrairement au français, l'anglais utilise très fréquemment la voix passive sans mentionner l'agent lorsque :
1. **L'agent est inconnu :** *My wallet was stolen on the bus.* (On ne sait pas qui est le voleur).
2. **L'agent est évident :** *The criminal was arrested yesterday.* (Évidemment par la police).
3. **L'agent est général ou indéfini (people, they, someone, somebody) :**
   * Active : *Someone cleaned the room.* → Passive : *The room was cleaned.* (omission de *by someone*).`
    },
    {
      title: 'IV. Exercices Types & Corrigé Détaillé',
      content: `### Exercices
1. **Transform into the passive voice:**
   * A renowned Senegalese architect designed this library.
   * Millions of people use social networks every day.
   * The government will construct five new schools in the rural zone.
   * The students have organized a memorable cultural event.
2. **Identify the tense and voice:**
   * *The national bridge was opened in 2018.*

### Corrigé Détaillé
1. *This library **was designed** by a renowned Senegalese architect.* (Simple Past passive).
   *Social networks **are used** by millions of people every day.* (Simple Present passive).
   *Five new schools **will be constructed** by the government in the rural zone.* (Future passive).
   *A memorable cultural event **has been organized** by the students.* (Present Perfect passive).
2. *The national bridge was opened* est à la **voix passive au Simple Past** (*was + opened*).`
    }
  ,
    {
      title: 'V. Texte Intégral : Modernizing Senegal\'s National Transport Network',
      content: `### Reading Passage
Across all fourteen administrative regions of Senegal, modern transport infrastructure **is being systematically constructed**. Major arterial roads connecting agricultural basins to regional ports **have been surfaced** with resilient asphalt. 

During the past five years, state-of-the-art bridges **were erected** across the Saloum and Casamance rivers, replacing slow and hazardous ferry crossings. Cargo safety **is rigorously monitored** by digital surveillance networks. Transportation analysts project that within the coming decade, regional trade **will be accelerated** by expanded electric rail corridors, ensuring that fresh harvests **are transported** to consumer markets without post-harvest decay.`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Exercices
1. *Engineers are repairing the solar generators right now. (Turn into Passive Voice).*
2. *The president will inaugurate the new university next week. (Turn into Passive Voice).*
3. *Someone has cleaned the science laboratory. (Turn into Passive Voice).*
4. *The government constructed modern bridges across the river. (Turn into Passive Voice).*
5. *They must respect traffic regulations. (Turn into Passive Voice).*

### Corrigé Détaillé
1. *The solar generators **are being repaired** by engineers right now.* (Passif au présent continu : *are being + V3*).
2. *The new university **will be inaugurated** by the president next week.* (Passif futur simple : *will be + V3*).
3. *The science laboratory **has been cleaned**.* (Passif au present perfect ; omission de l'agent indéterminé *someone*).
4. *Modern bridges **were constructed** across the river by the government.* (Passif au prétérit : *were + V3*).
5. *Traffic regulations **must be respected**.* (Passif avec modal : *must be + V3*).`
    }
  ]
};

export const LESSON_13_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-13',
  title: 'Unit 13: Reported Speech — Statements, Questions, Commands & Tense Backshift',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '70 min',
  description: 'Le discours indirect rapporte les paroles d’une personne sans nécessairement reprendre mot pour mot son énoncé. Règle du recul temporel (backshift) quand le verbe introducteur est au passé, transformation des questions sans inversion, et formules d\'ordres ou requêtes.',
  image: {
    url: '',
    caption: 'Figure 2.5 : L\'Horloge du recul temporel (Tense Backshift) dans le discours indirect',
    alt: 'Schéma du discours indirect',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#3b82f6">REPORTED SPEECH : THE TENSE BACKSHIFT CLOCK</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Past Reporting Verb ──→ Obligatory Backshift</text><rect x="40" y="70" width="340" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="55" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">DIRECT SPEECH</text><text x="55" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Simple Present: "I work hard"</text><text x="55" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Present Continuous: "I am reading"</text><text x="55" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Past Simple: "I arrived late"</text><text x="55" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Will / Can: "I will help you"</text><line x1="390" y1="145" x2="410" y2="145" stroke="#facc15" stroke-width="4"/><rect x="420" y="70" width="340" height="150" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="435" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">REPORTED SPEECH</text><text x="435" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Simple Past: ...that he worked hard</text><text x="435" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Past Continuous: ...that he was reading</text><text x="435" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Past Perfect: ...that he had arrived late</text><text x="435" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Would / Could: ...he would help me</text></svg>`
  },
  sections: [
    {
      title: 'I. La Règle du Recul Temporel (Tense Backshift)',
      content: `Lorsque le verbe introducteur (*reporting verb* : *said, told, asked, explained*) est au **passé**, tous les temps du discours direct subissent un recul temporel (*backshift*) :

| Discours Direct (Direct Speech) | Discours Indirect (Reported Speech) |
| :--- | :--- |
| **Simple Present :** *"I **work** hard."* | **Simple Past :** *He said that he **worked** hard.* |
| **Present Continuous :** *"I **am studying**."* | **Past Continuous :** *She said that she **was studying**.* |
| **Simple Past :** *"I **saw** the film."* | **Past Perfect :** *He said that he **had seen** the film.* |
| **Present Perfect :** *"I **have finished**."* | **Past Perfect :** *She said that she **had finished**.* |
| **Future (will) :** *"I **will call** you."* | **Conditional (would) :** *He promised he **would call** me.* |
| **CAN :** *"I **can solve** this."* | **COULD :** *She explained that she **could solve** it.* |
| **MAY :** *"It **may rain**."* | **MIGHT :** *He mentioned that it **might rain**.* |
| **MUST :** *"You **must leave**."* | **HAD TO :** *The guard told us we **had to leave**.* |`
    },
    {
      title: 'II. Changement des Pronoms et des Repères Temporels',
      content: `| Discours Direct | Discours Indirect |
| :--- | :--- |
| **now** | **then / at that time** |
| **today** | **that day** |
| **yesterday** | **the day before / the previous day** |
| **tomorrow** | **the next day / the following day** |
| **next week** | **the following week** |
| **last year** | **the previous year / the year before** |
| **this / these** | **that / those** |
| **here** | **there** |`
    },
    {
      title: 'III. Questions Indirectes & Ordres Rapportés',
      content: `### 1. Les Questions Indirectes
Dans une question indirecte, l'ordre sujet-verbe **redevient affirmatif** : il n'y a plus d'auxiliaire *do/does/did* ni de point d'interrogation final !
* **Yes/No questions :** on introduit avec **IF** ou **WHETHER** :
  * Direct : *"Do you understand the lesson?"*
  * Reported : *The teacher asked me **if I understood** the lesson.* (sujet *I* + verbe *understood*).
* **Wh-questions :** on conserve le mot interrogatif (*what, where, why, how*) :
  * Direct : *"Where do you live?"*
  * Reported : *She asked me **where I lived**.* (et JAMAIS : *where did I live*).

### 2. Ordres et Requêtes : TELL / ASK + Object + TO + BV
* Direct : *"Open your books," the teacher said.*
* Reported : *The teacher **told us to open** our books.*
* Négation : *The librarian **told them not to shout**.*`
    },
    {
      title: 'IV. Exercices Guidés & Corrigé',
      content: `### Exercices
1. **Turn into reported speech:**
   * Aminata said: "I am writing an essay for my English class."
   * Moussa said: "I will travel to Saint-Louis tomorrow."
   * He asked: "Do you know the answer to this question?"
   * "Sit down and be quiet," the instructor ordered the students.

### Corrigé Détaillé
1. *Aminata said that she **was writing** an essay for her English class.*
2. *Moussa said that he **would travel** to Saint-Louis **the next day**.*
3. *He asked **if / whether I knew** the answer to that question.*
4. *The instructor ordered the students **to sit down and be quiet**.*`
    }
  ,
    {
      title: 'V. Texte d\'Application Contextualisé : The School Press Conference',
      content: `### Reading Passage
During the annual science symposium at Lycée Seydina Limamou Laye, the school principal addressed students and visiting journalists: *"Our high school has accomplished outstanding achievements in renewable technology this academic term. Students are building miniature solar ovens, and teachers will organize an environmental exhibition next Friday."*

In his newspaper article the following morning, a student reporter wrote: *The principal proudly announced that their high school **had accomplished** outstanding achievements in renewable technology that academic term. He added that students **were building** miniature solar ovens and that teachers **would organize** an environmental exhibition the following Friday.*`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Exercices
1. *"I will submit my biology project tomorrow," Fatou said.* (Turn into reported speech).
2. *"We have planted fifty trees in the schoolyard today," the students declared.* (Turn into reported speech).
3. *"Why did you miss the mathematics lecture yesterday?" the teacher asked Samba.* (Turn into reported speech).
4. *"Don't forget to lock the laboratory door," the inspector reminded us.* (Turn into reported speech).

### Corrigé Détaillé
1. *Fatou said that she **would submit** her biology project **the following day** (or: the next day).*
2. *The students declared that they **had planted** fifty trees in the schoolyard **that day**.*
3. *The teacher asked Samba **why he had missed** the mathematics lecture **the day before**.* (Question indirecte sans inversion ; prétérit recule en past perfect).
4. *The inspector reminded us **not to lock** (or: **reminded us to lock**) the laboratory door.* (Ordre / conseil rapporté : *told / reminded not to + BV*).`
    }
  ]
};

export const LESSON_14_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-14',
  title: 'Unit 14: Conditionals — Zero, First, Second and Third Conditionals',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '70 min',
  description: 'Les conditionnels permettent de présenter une condition et sa conséquence. Étude des quatre types canoniques : Type 0 (vérités scientifiques), Type 1 (hypothèse réelle ou future), Type 2 (hypothèse imaginaire au présent) et Type 3 (regret irréversible dans le passé).',
  image: {
    url: '',
    caption: 'Figure 2.6 : Arbre décisionnel des 4 propositions conditionnelles (Types 0, 1, 2, 3)',
    alt: 'Schéma des conditionnels',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#10b981">THE FOUR CONDITIONAL CLAUSES (TYPES 0, 1, 2, 3)</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Scientific Fact • Real Future • Unreal Present • Past Regret</text><rect x="40" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">TYPE 0 : FACT</text><text x="50" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">If + Pres ──→ Pres</text><text x="50" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#cbd5e1">"If ice melts, it becomes water."</text><rect x="225" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="235" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">TYPE 1 : FUTURE</text><text x="235" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">If + Pres ──→ WILL</text><text x="235" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#cbd5e1">"If you study, you will succeed."</text><rect x="410" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="420" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">TYPE 2 : UNREAL</text><text x="420" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">If + Past ──→ WOULD</text><text x="420" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#cbd5e1">"If I had time, I would travel."</text><rect x="595" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/><text x="605" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">TYPE 3 : REGRET</text><text x="605" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">If + Past Perf ──→ WOULD HAVE + V3</text><text x="605" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#cbd5e1">"If she had asked, I would have answered."</text></svg>`
  },
  sections: [
    {
      title: 'I. Synthèse des Quatre Types de Conditionnels',
      content: `| Type | Condition (Proposition IF) | Conséquence (Proposition Principale) | Valeur Pragmatique |
| :--- | :--- | :--- | :--- |
| **Type 0** | **If + Simple Present** | **Simple Present** | Vérité générale, loi physique ou naturelle |
| **Type 1** | **If + Simple Present** | **WILL + Base Verbale** | Possibilité réelle, projet ou prédiction future |
| **Type 2** | **If + Simple Past** | **WOULD + Base Verbale** | Hypothèse irréelle ou imaginaire au présent |
| **Type 3** | **If + Past Perfect (had + V3)** | **WOULD HAVE + Past Participle** | Situation passée non réalisée, regret irréversible |`
    },
    {
      title: 'II. Analyse Détaillée par Exemple',
      content: `### Type 0 : La Vérité Scientifique Invariable
* *If you heat water to 100 degrees Celsius, it **boils**.*
* *If plants do not receive sunlight, they **die**.*

### Type 1 : La Condition Réalisable dans le Futur
* *If you **study** hard for your Première exams, you **will succeed**.*
* *If it **rains** tomorrow, we **will stay** at home.*

### Type 2 : L'Irréel du Présent
On imagine une situation contraire à la réalité présente.
* *Remarque élégante :* Au conditionnel Type 2, l'auxiliaire *BE* prend traditionnellement la forme **WERE** pour toutes les personnes :
* *If I **had** more time, I **would read** the entire novel.* (Mais en réalité, je manque de temps).
* *If I **were** you, I **would accept** that scholarship offer.*

### Type 3 : Le Regret du Passé
L'événement est terminé ; on ne peut plus rien y changer :
* *If she **had revised** regularly, she **would have passed** the test.* (En réalité, elle n'a pas révisé et a échoué).
* *If we **had taken** the earlier train, we **would not have missed** the opening ceremony.*`
    },
    {
      title: 'III. Exercices d\'Application & Corrigé',
      content: `### Exercices
1. **Put the verbs in brackets into the correct conditional form:**
   * If it *(rain)* this afternoon, we *(cancel)* the outdoor football match. (Type 1)
   * If I *(win)* a million francs, I *(build)* a public library in my village. (Type 2)
   * If they *(listen)* to the teacher's instructions, they *(not make)* those mistakes yesterday. (Type 3)
   * If you *(freeze)* water, it *(become)* solid ice. (Type 0)

### Corrigé Détaillé
1. *If it **rains** this afternoon, we **will cancel** the outdoor football match.*
2. *If I **won** a million francs, I **would build** a public library in my village.*
3. *If they **had listened** to the teacher's instructions, they **would not have made** those mistakes yesterday.*
4. *If you **freeze** water, it **becomes** solid ice.*`
    }
,
    {
      title: 'IV. Les Expressions Équivalentes à IF (UNLESS, PROVIDED THAT, AS LONG AS)',
      content: `Au Baccalauréat, plusieurs locutions introduisent des conditions sans utiliser le mot **IF** :
* **UNLESS = IF ... NOT (À moins que, sauf si) :**
  * *If you do not review your lessons, you will not pass.* ──→ ***Unless you review** your lessons, you will not pass.*
* **PROVIDED THAT / PROVIDING THAT (À condition que, pourvu que) :**
  * *You will succeed **provided that you work** consistently.*
* **AS LONG AS (Tant que, pourvu que) :**
  * *We will support your project **as long as you demonstrate** financial transparency.*`
    },
    {
      title: 'V. Texte d\'Application Contextualisé : Agricultural Climate Resilience',
      content: `### Reading Passage
Speaking at a regional climate summit in Kaolack, an agronomist outlined vital strategies for farmers: *"If rainfall **becomes** more erratic in the coming decades, our traditional farming calendar **will have to adapt** immediately. If farmers **possessed** modern rainwater harvesting cisterns, they **would produce** fresh vegetables throughout the dry season.

Historically, if our ancestors **had not preserved** drought-tolerant millet varieties, our communities **would not have survived** the harsh droughts of the 1970s. Today, unless we **protect** our topsoil against erosion, future generations will inherit degraded lands. Provided that cooperatives **integrate** agroforestry with solar pumping, rural communities will thrive."*`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Exercices
1. *If you (not water) the seedlings, they (dry out) quickly.* (Type 1 Conditional).
2. *If I (be) the minister of education, I (build) scientific laboratories in every high school.* (Type 2 Conditional).
3. *If they (adopt) drip irrigation earlier, they (not lose) their harvest last year.* (Type 3 Conditional).
4. *If you do not wear a safety helmet, you will be penalized.* (Rewrite using: **UNLESS**).
5. *You can borrow my dictionary. You must return it tomorrow.* (Join using: **PROVIDED THAT**).

### Corrigé Détaillé
1. *If you **do not water** the seedlings, they **will dry out** quickly.*
2. *If I **were** the minister of education, I **would build** scientific laboratories in every high school.* (Subjonctif passé *were* pour l'hypothèse irréelle au présent).
3. *If they **had adopted** drip irrigation earlier, they **would not have lost** their harvest last year.* (Past Perfect ──→ would have + V3).
4. ***Unless you wear** a safety helmet, you will be penalized.*
5. *You can borrow my dictionary **provided that you return** it tomorrow.*`
    }  ]
};

export const LESSON_15_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-15',
  title: 'Unit 15: Thematic Field — Education, School Life and Academic Achievement',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Le vocabulaire thématique de l’éducation permet de décrire l’établissement, les disciplines scolaires, les méthodes d’apprentissage et les défis éducatifs. Expressions utiles, collocations clés, modèle de paragraphe argumenté et critères d\'évaluation.',
  image: {
    url: '',
    caption: 'Figure 2.7 : Cadre conceptuel des politiques éducatives et de l\'inclusion scolaire',
    alt: 'Schéma éducation et scolarisation',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">THEMATIC FIELD : EDUCATION &amp; ACADEMIC SUCCESS</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Curriculum • Equity • Excellence</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">CORE PILLARS</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Academic rigor</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Science &amp; Technology</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Critical thinking skills</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">CHALLENGES</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Combat school dropout</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Bridge regional gaps</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Encourage girls' STEM</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">IMPACT</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Economic productivity</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Youth employment</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Democratic citizenship</text></svg>`
  },
  sections: [
    {
      title: 'I. Core Vocabulary: Education & School Life',
      content: `| English Word | Grammatical Category | French Equivalent | Illustrative Sentence |
| :--- | :--- | :--- | :--- |
| **Curriculum** | noun | Programme scolaire | *The national curriculum aims to promote science and digital literacy.* |
| **Timetable / Schedule** | noun | Emploi du temps | *Our weekly timetable includes four hours of English instruction.* |
| **Assignment** | noun | Devoir / travail assigné | *Students must submit their assignments before Friday afternoon.* |
| **Scholarship** | noun | Bourse d'études | *She was awarded a merit-based scholarship to study engineering.* |
| **Head teacher / Principal** | noun | Proviseur / directeur | *The school principal addressed the students during the assembly.* |
| **Attendance** | noun | Présence / assiduité | *Regular attendance is essential for achieving academic success.* |
| **Dropout** | noun / verb | Décrochage / abandon | *Community programs strive to reduce school dropout among girls.* |
| **Achievement** | noun | Réussite / accomplissement | *Graduating from high school is a significant personal achievement.* |
| **Revision** | noun | Révision | *A structured revision plan prevents last-minute exam stress.* |`
    },
    {
      title: 'II. Essential Collocations & Expressions',
      content: `* **attend school** (*fréquenter l'école / être scolarisé*)
* **take an exam** (*passer un examen / composer*)
* **pass an exam** (*réussir un examen*) vs. **fail an exam** (*échouer à un examen*)
* **do homework** (*faire ses devoirs* — attention : *do* et non *make*)
* **revise for a test** (*réviser pour une épreuve*)
* **improve one's English** (*perfectionner son anglais*)
* **pay attention in class** (*être attentif en cours*)
* **take notes** (*prendre des notes synthétiques*)`
    },
    {
      title: 'III. Model Production Paragraph & Writing Practice',
      content: `### Modèle de Paragraphe Argumenté
> *"A successful learning routine relies on discipline, consistency, and active engagement. Firstly, regular attendance and careful note-taking during class allow students to grasp complex concepts directly from the teacher. Moreover, revising lessons daily rather than cramming before examinations consolidates long-term memory. Finally, collaborating with classmates in study groups helps learners clarify misunderstandings and build mutual academic confidence. In conclusion, academic excellence is not merely a matter of talent, but the outcome of structured habits."*

### Exercice de Production Écrite
Rédigez un paragraphe de 100 à 150 mots expliquant comment les bibliothèques et les ressources numériques peuvent améliorer les performances des lycéens sénégalais. Utilisez au moins cinq mots du vocabulaire de la leçon et des connecteurs logiques (*firstly, furthermore, however, as a result*).`
    }
,
    {
      title: 'IV. Texte Intégral : Bridging the Educational Divide in West Africa',
      content: `### Reading Passage
Education is internationally acknowledged as the primary catalyst for sustainable human development. In Senegal, governmental initiatives have prioritized the expansion of preschool nurseries and primary schools across underserved rural regions. By eliminating tuition fees and distributing free textbooks, the national literacy rate among young girls has climbed substantially over the past decade.

However, secondary and tertiary institutions face structural obstacles. High school dropout rates remain problematic in agricultural districts where adolescent boys are drawn into seasonal manual labor and girls confront pressure toward early domestic responsibilities. Educational sociologists advocate for the rapid multiplication of vocational training centers equipped with solar power, computerized laboratories, and technical workshops. By preparing students for directly employable occupations in agronomy, digital coding, and renewable mechanics, educational institutions can foster inclusive economic empowerment.`
    },
    {
      title: 'V. Sujet d\'Argumentation Guidé : "Is Free Higher Education Possible?"',
      content: `### Model Argumentative Matrix :
* **Thesis (In Favor of Free Higher Education) :**
  1. *Universities become meritocracies where intelligence, rather than family wealth, determines academic success.*
  2. *Higher graduation rates provide the nation with specialized doctors, engineers, and teachers essential for economic emergence.*
* **Antithesis (Counter-arguments & Financial Realities) :**
  1. *Free tuition places immense strain on public budgets, resulting in overcrowded amphitheatres and under-equipped laboratories.*
  2. *Targeted student bursaries for low-income candidates combined with moderate fees for wealthy families ensure financial sustainability.*
* **Conclusion :**
  *A hybrid model—where tuition is subsidized by public-private partnerships while maintaining generous scholarships for the underprivileged—balances equity and academic excellence.*`
    },
    {
      title: 'VI. Exercices de Vocabulaire & Maniement de la Langue',
      content: `### Exercices
1. *Complete with the correct word:* (literacy, dropout, vocational, scholarship)
   * a) He was awarded a full ........ to study aerospace engineering.
   * b) Expanding ........ institutes trains skilled mechanics and electricians.
   * c) A high national ........ rate fosters democratic participation.
   * d) Economic hardship is a primary cause of school ........ among teenagers.
2. *Turn into passive:* *Educational reformers introduced new digital curricula.*

### Corrigé Détaillé
1. a) *scholarship* ; b) *vocational* ; c) *literacy* ; d) *dropout*.
2. *New digital curricula **were introduced** by educational reformers.*`
    }  ]
};

export const LESSON_16_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-16',
  title: 'Unit 16: Thematic Field — Health, Food, Nutrition and Well-Being',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Ce thème permet de décrire le corps, les habitudes alimentaires équilibrées, les maladies courantes et les conseils de prévention sanitaire. Corpus lexical, structures modales de recommandation médicale et ateliers de production.',
  image: {
    url: '',
    caption: 'Figure 2.8 : Schéma systémique de la santé communautaire et nutritionnelle',
    alt: 'Schéma santé publique',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#10b981">THEMATIC FIELD : HEALTH, NUTRITION &amp; COMMUNITY CARE</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Hygiene • Preventive Care • Balanced Diet</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">NUTRITIONAL HEALTH</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Indigenous grains (millet)</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Rich micronutrients</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Reduce processed sugar</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">PREVENTIVE MEASURES</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Potable drinking water</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Bed nets against malaria</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Child immunization</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">COMMUNITY WELLNESS</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Accessible dispensaries</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Regular exercise &amp; rest</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Mental health awareness</text></svg>`
  },
  sections: [
    {
      title: 'I. Lexique Essentiel : Health, Nutrition & Healthcare',
      content: `| English Word | Part of Speech | French Meaning | Contextual Example |
| :--- | :--- | :--- | :--- |
| **Illness / Disease** | noun | Maladie | *Preventive hygiene stops the spread of infectious diseases.* |
| **Symptom** | noun | Symptôme | *A high fever and a severe headache are common symptoms of malaria.* |
| **Treatment** | noun | Traitement médical | *Early diagnosis ensures more effective medical treatment.* |
| **Diet** | noun | Régime alimentaire | *A balanced diet includes fresh fruits, vegetables, and proteins.* |
| **Hygiene** | noun | Hygiène | *Washing hands with clean water and soap is basic personal hygiene.* |
| **Obesity** | noun | Obésité | *Consuming excessive sugar and processed food leads to obesity.* |
| **Healthcare** | noun | Soins de santé | *Governments must invest in rural healthcare infrastructure.* |
| **Prevention** | noun | Prévention | *Vaccination remains the cornerstone of disease prevention.* |`
    },
    {
      title: 'II. Expressions Utiles & Structures Modales de Conseil',
      content: `* **feel sick / unwell** (*se sentir malade*)
* **suffer from** (*souffrir de / être atteint de*) : *Many people suffer from seasonal allergies.*
* **see a doctor / consult a physician** (*consulter un médecin*)
* **eat a balanced diet** (*avoir une alimentation équilibrée*)
* **Structures pour formuler des conseils de santé :**
  * *You **should drink** at least two litres of clean water every day.*
  * *Patients **must follow** the medical prescription strictly.*
  * *People **ought to exercise** regularly to protect their cardiovascular system.*`
    },
    {
      title: 'III. Production & Sujet Pratique',
      content: `### Sujet d'Entraînement
*"Many young people consume fast food and sugary beverages instead of traditional nutritious dishes. Discuss the health consequences and suggest actionable solutions."*

### Éléments Pédagogiques Attendus
1. **Causes :** Influence de la publicité, rapidité, mode de vie urbain.
2. **Conséquences :** Risque de diabète, fatigue, surpoids, carences vitaminiques.
3. **Solutions :** Campagnes de sensibilisation dans les écoles, valorisation des céréales et légumes locaux (mil, niébé, bissap), pratique sportive hebdomadaire.`
    }
  ,
    {
      title: 'IV. Texte Intégral : Public Health Challenges and Community Resilience',
      content: `### Reading Passage
Public health infrastructure in West Africa has made remarkable strides since the turn of the millennium. Eradication campaigns against polio, widespread vaccination drives against yellow fever, and the nationwide distribution of long-lasting insecticide-treated mosquito nets have reduced infant mortality by more than half. 

Nevertheless, health authorities now confront a dual burden of disease: while communicable tropical illnesses such as malaria and tuberculosis persist, non-communicable lifestyle ailments like diabetes and hypertension are escalating rapidly in urban centers due to sedentary habits and processed diets. Community health workers (Badiénou Gox) play a pivotal frontline role in educating mothers, promoting exclusive breastfeeding, and ensuring early clinical referral. Strengthening local pharmaceutical manufacturing is crucial to shield vulnerable populations from reliance on costly foreign imports.`
    },
    {
      title: 'V. Modèle de Paragraphe Argumentatif : "Prevention is Better than Cure"',
      content: `### Model Argumentative Paragraph :
The timeless proverb *"prevention is better than cure"* encapsulates the most rational and cost-effective philosophy of modern medicine. Investing in preventative measures—such as community sanitation, potable water distribution, routine childhood immunization, and balanced nutritional education—curbs epidemic outbreaks before they overwhelm hospital capacities. In developing nations where tertiary intensive care units are financially inaccessible for ordinary citizens, preventative interventions safeguard countless lives at a fraction of the cost of long-term pharmaceutical therapies. Therefore, national healthcare budgets must allocate priority funding to preventative grassroots hygiene rather than exclusively financing curative urban hospital complexes.`
    },
    {
      title: 'VI. Exercices de Vocabulaire & Transformations Médicales',
      content: `### Exercices
1. *Fill in with: epidemic, malnutrition, vaccination, hygiene:*
   * a) Good personal ........ prevents the transmission of waterborne bacteria.
   * b) Routine childhood ........ protects infants against deadly measles.
   * c) Severe drought triggers child ........ in pastoral arid zones.
   * d) Rapid contact tracing contained the viral ........ outbreak.
2. *Rephrase with IF:* *Doctors did not arrive in time, so the patient died.*

### Corrigé Détaillé
1. a) *hygiene* ; b) *vaccination* ; c) *malnutrition* ; d) *epidemic*.
2. *If doctors **had arrived** in time, the patient **would not have died**.* (Conditionnel Type 3).`
    }
  ]
};

export const LESSON_17_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-17',
  title: 'Unit 17: Thematic Field — Environment, Climate Change and Renewable Energy',
  module: 'Partie 2 • Grammaire Avancée & Thématiques Majeures',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Le vocabulaire environnemental permet de débattre des pollutions, des ressources naturelles, de la protection de la biodiversité et du changement climatique. Vocabulaire argumentatif : causes, conséquences, responsabilités et solutions durables.',
  image: {
    url: '',
    caption: 'Figure 2.9 : Carte écologique de la Grande Muraille Verte et énergies renouvelables au Sahel',
    alt: 'Schéma environnement et Grande Muraille Verte',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#eab308">THEMATIC FIELD : ENVIRONMENT &amp; THE GREAT GREEN WALL</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Dakar to Djibouti • Agroforestry • Solar Transition</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">THREATS</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Desert encroachment</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Severe droughts</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Biodiversity loss</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">RESTORATION ACTIONS</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Plant native acacia trees</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Solar water boreholes</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Community vegetable gardens</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">COMMUNITY GAINS</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Gum arabic harvest revenue</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Livestock fodder in drought</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Youth green job creation</text></svg>`
  },
  sections: [
    {
      title: 'I. Core Vocabulary: Environment & Sustainability',
      content: `| English Term | French Meaning | Detailed Sentence |
| :--- | :--- | :--- |
| **Greenhouse gases** | Gaz à effet de serre | *Carbon dioxide emissions trap heat in the atmosphere, driving global warming.* |
| **Deforestation** | Déforestation | *Illegal tree cutting causes rapid deforestation and land degradation.* |
| **Desertification** | Désertification | *The Great Green Wall initiative combats desertification across the Sahel.* |
| **Biodiversity** | Biodiversité | *Protecting mangrove ecosystems preserves coastal marine biodiversity.* |
| **Drought** | Sécheresse | *Severe droughts threaten crop production and food security.* |
| **Renewable energy** | Énergie renouvelable | *Solar and wind power are clean, sustainable alternatives to fossil fuels.* |
| **Recycling** | Recyclage | *Recycling plastic waste reduces pollution in coastal cities.* |
| **Sustainable development** | Développement durable | *Sustainable development meets present needs without compromising future generations.* |`
    },
    {
      title: 'II. Modèle Argumentatif : Cause, Consequence and Solution',
      content: `Pour rédiger une argumentation environnementale percutante, appliquez la structure tripartite :

1. **The Cause :**
   * *The primary cause of environmental degradation is human industrial activity and uncontrolled plastic consumption.*
2. **The Consequence :**
   * *As a consequence, plastic waste clogs urban drainage channels, leading to severe flooding during the rainy season.*
3. **The Solution :**
   * *To resolve this crisis, citizens and local authorities must collaborate to ban single-use plastics and develop systematic waste management programs.*`
    },
    {
      title: 'III. Exercice Pratique & Critères d\'Évaluation',
      content: `### Exercice
Rédigez un paragraphe de 120 mots sur l'importance de planter des arbres dans les zones scolaires et urbaines au Sénégal. Utilisez : *biodiversity, shade, combat desertification, climate change, community engagement*.`
    }
,
    {
      title: 'IV. Texte Intégral : Combating Coastal Erosion and Desertification in Senegal',
      content: `### Reading Passage
Senegal stands on the frontlines of global environmental disruption, contending simultaneously with desert encroachment in the northern Sahel and ferocious coastal erosion along its 700-kilometer Atlantic coastline. In historic coastal settlements such as Saint-Louis and Bargny, surging tidal waves and storm surges have destroyed ancestral fishing villages, submerging residential compounds and salinizing freshwater aquifers.

In the interior, decades of unsustainable charcoal production and erratic rainfall have degraded once-fertile topsoil. To combat these dual crises, national environmental programs have mobilized civic volunteers and international partners. The construction of massive protective rock revetments along the Langue de Barbarie shields vulnerable neighborhoods from Atlantic breakers, while the reforestation of millions of mangrove saplings in the Sine-Saloum delta restores natural ecological barriers. Protecting the biosphere is not merely an aesthetic endeavor; it is an urgent requirement to guarantee the survival and economic livelihood of future generations.`
    },
    {
      title: 'V. Sujet d\'Argumentation : "How Can Young People Protect Their Local Environment?"',
      content: `### Essay Blueprint :
* **Introduction :** Hook on environmental threats (plastic pollution, deforestation) + Importance of youth mobilization + Thesis statement.
* **Body Paragraph 1 (Community Action) :** Organizing neighborhood clean-up drives (Set-Setal), recycling plastic waste into paving stones, and planting shade trees along school streets.
* **Body Paragraph 2 (Advocacy & Digital Consciousness) :** Utilizing social media platforms to expose illegal waste dumping, promoting reusable bags, and demanding green energy policies from municipal councils.
* **Conclusion :** Summary of youth's transformative ecological power + Visionary call to action.`
    },
    {
      title: 'VI. Exercices de Langue & Vocabulaire Écologique',
      content: `### Exercices
1. *Match the word with its definition:*
   * a) *Erosion* ── 1. The gradual transformation of habitable land into arid desert.
   * b) *Desertification* ── 2. The wearing away of soil or rock by water, wind, or waves.
   * c) *Renewable* ── 3. Capable of being replenished naturally, like solar or wind energy.
2. *Rephrase with Passive Voice:* *Volunteers planted ten thousand mangrove propagules.*
3. *Rewrite with UNLESS:* *If we do not ban single-use plastics, our oceans will choke with trash.*

### Corrigé Détaillé
1. a-2 ; b-1 ; c-3.
2. *Ten thousand mangrove propagules **were planted** by volunteers.*
3. ***Unless we ban** single-use plastics, our oceans will choke with trash.*`
    }  ]
};

export const COURSES_ANGLAIS_1ERE_MANUEL_PART2 = [
  LESSON_9_ANGLAIS_1ERE_MANUEL,
  LESSON_10_ANGLAIS_1ERE_MANUEL,
  LESSON_11_ANGLAIS_1ERE_MANUEL,
  LESSON_12_ANGLAIS_1ERE_MANUEL,
  LESSON_13_ANGLAIS_1ERE_MANUEL,
  LESSON_14_ANGLAIS_1ERE_MANUEL,
  LESSON_15_ANGLAIS_1ERE_MANUEL,
  LESSON_16_ANGLAIS_1ERE_MANUEL,
  LESSON_17_ANGLAIS_1ERE_MANUEL
];
