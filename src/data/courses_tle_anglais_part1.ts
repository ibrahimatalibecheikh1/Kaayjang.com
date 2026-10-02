import { LessonContent } from './courses';

// =========================================================================
// ANGLAIS CLASSE DE TERMINALE (SÉRIES L & S) — MANUEL OFFICIEL NATIONAL
// Conforme au programme officiel de la République du Sénégal
// PARTIE I : GRAMMAR & CONJUGATION MASTERCLASS DU BACCALAURÉAT
// =========================================================================

export const LESSON_1_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-01',
  title: 'Part I - Chapter 1: The English Verb Tense System — Contrastive Analysis & Aspectual Logic',
  module: 'Partie I • Grammar & Conjugation (Terminale L & S)',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Logique d\'ensemble des temps anglais : aspect simple, continu, parfait et parfait continu. Étude approfondie des 12 temps, contraste systématique Present Perfect vs Past Simple, Past Continuous vs Past Perfect, et emploi des futurs dans les subordonnées temporelles (When, As soon as + Present).',
  image: {
    url: '',
    caption: 'Figure T1.1 : Matrice des 12 temps anglais et logique d\'aspect énonciatif pour le Baccalauréat',
    alt: 'Schéma des 12 temps anglais',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">THE 12-TENSE ASPECTUAL MATRIX &amp; TEMPORAL CLAUSE RULE</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Simple (Ø) • Continuous (BE + ing) • Perfect (HAVE + V3)</text><rect x="40" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">SIMPLE ASPECT (Ø)</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Fact, habit, routine</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Pres: works / Past: worked</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Fut: will work</text><rect x="225" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="235" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">CONTINUOUS (BE+-ing)</text><text x="235" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Ongoing, temporary</text><text x="235" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Pres: is working</text><text x="235" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Past: was working</text><rect x="410" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="420" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">PERFECT (HAVE+V3)</text><text x="420" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Link, balance, result</text><text x="420" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Pres Perf: has worked</text><text x="420" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Past Perf: had worked</text><rect x="595" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/><text x="605" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">TEMPORAL RULE</text><text x="605" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• When + Present ──→</text><text x="605" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">Principal with WILL</text><text x="605" y="160" font-family="system-ui, sans-serif" font-size="9" fill="#fca5a5">"When he arrives, we will start"</text></svg>`
  },
  sections: [
    {
      title: 'I. La Logique d\'Aspect dans le Système Verbal Anglais',
      content: `En Terminale, le choix d'un temps ne dépend pas uniquement du moment chronologique de l'action, mais de **l'angle sous lequel l'énonciateur envisage l'événement** (l'aspect) :

| Forme / Aspect | Question Fondamentale de l'Énonciateur | Exemple Canonique |
| :--- | :--- | :--- |
| **Simple (Ø)** | L'action est-elle considérée comme un fait global, une habitude ou une vérité permanente ? | *She **works** in a laboratory.* / *He **graduated** in 2023.* |
| **Continuous (BE + V-ing)** | L'action est-elle en cours d'accomplissement, temporaire ou inachevée ? | *She **is working** on a scientific research paper.* |
| **Perfect (HAVE + V3)** | Y a-t-il un lien, un bilan ou une conséquence directe avec un repère ultérieur ? | *She **has published** three articles.* (Bilan dans sa vie). |
| **Perfect Continuous** | L'activité s'étend-elle sur une durée menant jusqu'au repère temporel ? | *She **has been conducting** experiments for six hours.* |`
    },
    {
      title: 'II. Les 12 Temps de l\'Anglais au Baccalauréat',
      content: `### Synthèse Complète des 12 Temps
1. **Simple Present :** *They export peanuts.* (Vérité générale / habitude).
2. **Present Continuous :** *They are exporting more organic goods this season.* (Tendance en cours).
3. **Simple Past :** *Senegal joined the organization in 1975.* (Date révolue, action coupée du présent).
4. **Past Continuous :** *The minister was addressing the assembly when the lights went out.* (Action en cours interrompue).
5. **Present Perfect Simple :** *The nation has developed extensive solar farms since 2017.* (Lien avec le présent).
6. **Present Perfect Continuous :** *Farmers have been waiting for the rainy season for weeks.* (Durée continue).
7. **Past Perfect Simple :** *The conference had ended before the delegates signed the treaty.* (Antériorité passée).
8. **Past Perfect Continuous :** *He had been studying English for four years before he took the Baccalaureate.* (Durée antérieure).
9. **Future Simple (will) :** *Technological innovations will transform agriculture.* (Prédiction / certitude).
10. **Future Continuous :** *At this time tomorrow, candidates will be writing their English exam.* (Action en déroulement futur).
11. **Future Perfect :** *By 2030, the government will have electrified all rural villages.* (Achèvement avant échéance).
12. **Future Perfect Continuous :** *By next December, our teacher will have been teaching here for 25 years.* (Durée projetée).`
    },
    {
      title: 'III. Règle d\'Or du Bac : Les Subordonnées Temporelles au Futur',
      content: `C'est un piège majeur aux épreuves de transformation du Baccalauréat sénégalais :
* En français, on dit : *« Quand il arrivera, nous commencerons. »* (Deux futurs).
* **En anglais, il est strictement interdit d'utiliser WILL dans une subordonnée de temps !**
* Après les conjonctions temporelles : **WHEN, AS SOON AS, BEFORE, AFTER, UNTIL, ONCE, AS LONG AS, BY THE TIME** :
  **Conjonction de temps** + **Simple Present** ──→ **Proposition Principale au Futur (will)**

**Exemples types d'examen :**
* *When the president **arrives** (Simple Present), the ceremony **will begin** (Future).* (JAMAIS : *When the president will arrive*).
* *As soon as the results **are published**, we **will celebrate**.*
* *We will not sign the contract **until** they **provide** guarantees.*
* *By the time you **finish** reading this manual, your vocabulary **will have doubled**.*`
    },
    {
      title: 'IV. Present Perfect vs. Past Simple & Past Continuous vs. Past Perfect',
      content: `### 1. Present Perfect vs. Simple Past
* **Simple Past :** L'action s'est déroulée dans une période temporelle **totalement close et révolue** (repères : *yesterday, in 2021, two days ago, last year, when I was a child*).
  *Exemple :* *Senegal **won** the Africa Cup of Nations in 2022.*
* **Present Perfect :** L'action a eu lieu dans le passé mais possède un **lien direct, un bilan ou une conséquence visible dans le présent** (repères : *since, for, already, yet, never, ever, so far, recently*).
  *Exemple :* *Senegal **has won** several continental trophies since 2020.*

### 2. Past Continuous vs. Past Perfect
* **Past Continuous (WAS/WERE + V-ing) :** Établit le décor, l'arrière-plan ou l'action qui était en train de se dérouler quand un fait ponctuel au Simple Past est survenu (*While we **were walking**, it started to rain*).
* **Past Perfect (HAD + V3) :** Exprime l'antériorité absolue : une action s'est produite **avant une autre action passée** (*When the ambulance arrived, the patient **had already stabilized***).`
    },
    {
      title: 'V. Texte d\'Application Intégral : The Modernization of Regional Infrastructure',
      content: `### Reading Passage
Over the past two decades, West African economies **have undergone** profound infrastructural transformations. In 2018, engineers **began** building the Regional Express Train (TER) connecting Dakar to Diamniadio. While thousands of daily commuters **were struggling** with severe traffic congestion along the national highway, civil engineers **were laying** high-speed railway tracks. 

By the time the first electric train **made** its inaugural commercial trip in December 2021, the government **had invested** billions of CFA francs in public transit modernization. Today, over 50,000 passengers **use** the train each day. Economists project that as soon as the second phase to Blaise Diagne International Airport **reaches** completion, regional travel times **will drop** by more than 70 percent. Technicians **have been maintaining** the tracks rigorously to guarantee maximum safety.

### Temporal Analysis
* *have undergone :* Present Perfect (bilan historique liant le passé récent à la situation actuelle).
* *began / made :* Simple Past (dates précises et révolues : 2018, December 2021).
* *were struggling / were laying :* Past Continuous (actions simultanées en déroulement dans le passé).
* *had invested :* Past Perfect (investissement achevé antérieurement au voyage inaugural de 2021).
* *reaches ... will drop :* Subordonnée temporelle introduite par *as soon as* (présent simple dans la subordonnée, *will* dans la principale).`
    },
    {
      title: 'VI. Exercices de Niveau Baccalauréat & Corrigé Détaillé',
      content: `### Exercices
1. *When the Minister (arrive) at the summit tomorrow, the delegates (welcome) him warmly.*
2. *Senegal (construct) several modern universities since the launch of the emerging plan.*
3. *While the delegates (discuss) the energy bill, a sudden thunderstorm (cause) a localized power outage.*
4. *By the year 2035, green hydrogen technologies (revolutionize) heavy industry.*
5. *Before Moussa moved to Dakar in 2020, he (live) in Saint-Louis for fifteen years.*

### Corrigé Détaillé
1. *When the Minister **arrives** at the summit tomorrow, the delegates **will welcome** him warmly.* (Règle subordonnée temporelle : présent après *when*, futur dans la principale).
2. *Senegal **has constructed** several modern universities since the launch of the emerging plan.* (Présent perfect imposé par la préposition de bilan *since*).
3. *While the delegates **were discussing** the energy bill, a sudden thunderstorm **caused** a localized power outage.* (Action continue d'arrière-plan en *-ing* interrompue par un événement ponctuel au *Simple Past*).
4. *By the year 2035, green hydrogen technologies **will have revolutionized** heavy industry.* (Futur antérieur *Future Perfect* imposé par l'échéance *By + date future*).
5. *Before Moussa moved to Dakar in 2020, he **had lived** (or: **had been living**) in Saint-Louis for fifteen years.* (Antériorité dans le passé par rapport au déménagement de 2020).`
    }
  ]
};

export const LESSON_2_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-02',
  title: 'Part I - Chapter 2: Advanced Modals & Modal Perfects (Deduction, Regret, Necessity)',
  module: 'Partie I • Grammar & Conjugation (Terminale L & S)',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Les auxiliaires modaux avancés au Baccalauréat : modaux simples et modaux du passé (Modal + HAVE + Past Participle). Exprimer la déduction logique, la quasi-certitude, le regret rétrospectif (should have done), l\'impossibilité (couldn\'t have done) et l\'interdiction.',
  image: {
    url: '',
    caption: 'Figure T1.2 : Matrice des modaux du passé (Modal Perfects) pour l\'épreuve de transformation du Bac',
    alt: 'Schéma des modaux du passé',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">MODAL PERFECTS IN PAST REASONING : MODAL + HAVE + PAST PARTICIPLE</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Deduction • Regret • Impossibility</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">MUST HAVE + V3</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Logical certainty about the past</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• "He got 20/20; he must have</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">studied tremendously hard."</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">CAN'T / COULDN'T HAVE</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Past impossibility</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• "He was abroad; he couldn't</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">have stolen the documents."</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">SHOULD HAVE + V3</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Retrospective regret / criticism</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• "We missed the flight; we</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">should have set an early alarm."</text></svg>`
  },
  sections: [
    {
      title: 'I. Rappel des Modaux Simples & Nuances de Sens',
      content: `Les modaux sont des auxiliaires invariables (pas de *-s* à la 3e personne, jamais précédés ni suivis de *to*, suivis d'une base verbale nue) :

| Modal | Valeur Énonciative Principale | Exemple Contextuel |
| :--- | :--- | :--- |
| **CAN** | Capacité physique ou intellectuelle / permission informelle | *African scientists **can design** resilient drought-resistant crops.* |
| **COULD** | Capacité passée ou possibilité hypothétique atténuée | *In the 1990s, few families **could afford** home internet connections.* |
| **MAY** | Probabilité incertaine (environ 50%) / permission très polie | *The new international airport **may expand** its cargo terminal next year.* |
| **MIGHT** | Probabilité très faible ou conditionnelle (environ 25%) | *If rainfall drops further, crop yields **might decline** slightly.* |
| **MUST** | Obligation forte / quasi-certitude logique au présent | *You **must verify** your exam index number.* / *He has run 40 km, he **must be** exhausted.* |
| **NEEDN'T** | Absence totale d'obligation ou d'utilité | *Students **needn't print** the documents; digital copies are accepted.* |
| **SHOULD** | Conseil, recommandation morale ou attente logique | *Citizens **should participate** in communal reforestation campaigns.* |`
    },
    {
      title: 'II. Les Modaux du Passé (Modal Perfects) : Structure & Emploi',
      content: `Pour porter un jugement au présent sur un événement déjà passé, la langue anglaise associe le modal à l'auxiliaire **HAVE** suivi du participe passé (**V3**) :
**Modal** + **HAVE** + **Past Participle (V3)**

| Modal Perfect | Valeur Sémantique Précise | Exemple Type du Bac |
| :--- | :--- | :--- |
| **MUST HAVE + V3** | **Quasi-certitude logique sur le passé** (« Il a sûrement / a dû... ») | *The ancient ruins **must have required** hundreds of master stonemasons.* |
| **CANNOT / COULDN'T HAVE + V3** | **Impossibilité absolue dans le passé** (« C'est impossible qu'il ait... ») | *He **couldn't have forged** the signature; he was hospitalized all week.* |
| **SHOULD HAVE + V3** | **Regret rétrospectif ou reproche** (« Il aurait dû... ») | *We **should have left** earlier; now we are stuck in a massive traffic jam.* |
| **SHOULDN'T HAVE + V3** | **Critique d'une action commise** (« Il n'aurait pas dû... ») | *You **shouldn't have shared** your confidential password online.* |
| **MIGHT / MAY HAVE + V3** | **Hypothèse passée incertaine** (« Il a peut-être... ») | *Aminata is absent; she **might have missed** the suburban train.* |
| **NEEDN'T HAVE + V3** | **Action accomplie mais inutile** (« Ce n'était pas la peine de... ») | *You **needn't have bought** bread; we already had plenty.* |`
    },
    {
      title: 'III. Les Semi-Modaux & Tournures Idiomatiques Équivalentes',
      content: `Au Baccalauréat, plusieurs expressions idiomatiques jouent le rôle d'auxiliaires modaux et font l'objet d'exercices réguliers de rephrasing :

| Expression Idiomatique | Signification & Nuance | Exemple Type d'Examen | Règle de Transformation |
| :--- | :--- | :--- | :--- |
| **Had better + BV** | Conseil pressant / avertissement (Il vaudrait mieux) | *You **had better leave** right now.* | Rephrase : *It is advisable for you to leave.* |
| **Would rather + BV** | Préférence personnelle au présent (Je préférerais) | *I **would rather study** law than medicine.* | Rephrase : *I prefer studying law to medicine.* |
| **Would rather + Past**| Souhait portant sur l'action d'une autre personne | *I **would rather you told** the truth.* | *I wish you told the truth.* |
| **Be supposed to + BV**| Devoir faire selon les règles ou la réputation | *Candidates **are supposed to bring** ID cards.* | *Regulations require candidates to bring IDs.* |
| **Be bound to + BV** | Inéluctabilité / certitude absolue (C'est fatal) | *Prices **are bound to rise** with inflation.* | *It is certain that prices will rise.* |`
    },
    {
      title: 'IV. Tableau Récapitulatif du Spectre Modal pour le Baccalauréat',
      content: `Le candidat doit maîtriser la graduation sémantique entre certitude, obligation, probabilité et interdiction :

1. **Quasi-certitude positive :** **MUST** (*She has won the gold medal; she must be thrilled.*)
2. **Probabilité élevée :** **SHOULD / OUGHT TO** (*The meeting should end before noon.*)
3. **Possibilité modérée (50%) :** **MAY** (*It may rain later; take an umbrella.*)
4. **Possibilité faible / théorique :** **MIGHT / COULD** (*He might still come if the bus arrives.*)
5. **Quasi-certitude négative (impossibilité) :** **CANNOT / CAN'T** (*That cannot be true; it defies logic.*)
6. **Absence d'obligation (inutilité) :** **NEEDN'T / DON'T HAVE TO** (*You needn't bring food; lunch is provided.*)
7. **Interdiction formelle :** **MUSTN'T / CANNOT** (*Candidates mustn't use phones during exams.*)`
    },
    {
      title: 'V. Texte d\'Application Contextualisé : Modern Renewable Challenges',
      content: `### Reading Passage
The national grid was under tremendous pressure during the summer heatwave. The authorities had to act swiftly to prevent rolling blackouts. Experts argued that the regional utility **should have anticipated** the surging demand by investing earlier in backup battery storage. A senior energy commissioner stated: *"The solar park at Bokhol **must have mitigated** the peak shortfall, but without decentralized microgrids, rural clinics **might have suffered** catastrophic power outages. Technicians **had to work** around the clock to synchronize the generators. Looking forward, the country **ought to accelerate** independent renewable installations so that future generations **need not fear** electrical collapse."*

### Analytical Highlights
* Note the contrast between **should have anticipated** (unfulfilled past recommendation), **must have mitigated** (past logical deduction based on empirical evidence), and **might have suffered** (counterfactual past danger avoided).`
    },
    {
      title: 'VI. Exercices de Transformation Type Bac & Corrigé Approfondi',
      content: `### Exercices
1. *I am certain that Babacar studied very hard because he got twenty out of twenty.* (Use **MUST**).
2. *It was a mistake for the government to ignore the warnings of meteorologists.* (Use **SHOULD**).
3. *It is impossible that Samba broke the window; he was in Saint-Louis yesterday.* (Use **CANNOT / COULDN'T**).
4. *Perhaps the letter got lost in the postal system.* (Use **MIGHT**).
5. *It was not necessary for the school to buy extra computers because all students brought laptops.* (Use **NEEDN'T**).
6. *It is strongly recommended that you revise your irregular verbs before the Baccalaureate exam.* (Use **HAD BETTER**).

### Corrigé Détaillé
1. *Babacar **must have studied** very hard because he got twenty out of twenty.* (Déduction logique certaine sur le passé).
2. *The government **should not have ignored** the warnings of meteorologists.* (Critique / reproche rétrospectif).
3. *Samba **cannot have broken** (or: **couldn't have broken**) the window; he was in Saint-Louis yesterday.* (Impossibilité absolue passée).
4. *The letter **might have got (or: gotten) lost** in the postal system.* (Hypothèse incertaine passée).
5. *The school **needn't have bought** extra computers...* (Action accomplie inutilement).
6. *You **had better revise** your irregular verbs before the Baccalaureate exam.* (Conseil urgent avec avertissement sous-jacent).`
    }
  ]
};

export const LESSON_3_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-03',
  title: 'Part I - Chapter 3: Advanced Passive Structures, Causatives & Impersonal Passive',
  module: 'Partie I • Grammar & Conjugation (Terminale L & S)',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Structures passives avancées indispensables en Terminale : passif avec deux objets (direct et indirect), passif impersonnel de rumeur (It is said that / He is said to be), passif avec les modaux et structures causatives (HAVE / GET something done, MAKE someone do).',
  image: {
    url: '',
    caption: 'Figure T1.3 : Structures avancées du passif impersonnel et causatives',
    alt: 'Schéma passif impersonnel et causatif',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f43f5e">ADVANCED PASSIVE &amp; IMPERSONAL STRUCTURES</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">It is said that... ──→ Subject + is said to + BV</text><rect x="40" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="55" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#60a5fa">STRUCTURE IMPERSONNELLE 1</text><text x="55" y="120" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• It + BE + V3 (said, believed, reported) + that...</text><text x="55" y="145" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">"It is believed that clean energy creates green jobs."</text><rect x="415" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="430" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">STRUCTURE PERSONNELLE 2 (BAC FAVOURITE)</text><text x="430" y="120" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• Subject + BE + V3 + to + Base Verbale</text><text x="430" y="145" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">"Clean energy is believed to create green jobs."</text></svg>`
  },
  sections: [
    {
      title: 'I. Le Passif des Verbes à Deux Objets (Ditransitive Verbs)',
      content: `En anglais, lorsqu'un verbe possède un complément d'objet indirect (la personne) et un complément d'objet direct (la chose) comme *give, offer, send, teach, show, award, lend, pay* :
* **Voix active :** *The university awarded **Fatou** (COI) **a prestigious scholarship** (COD).*
* **Passif 1 (Privilégié en anglais normatif - la personne devient sujet) :**
  ***Fatou** was awarded a prestigious scholarship by the university.*
* **Passif 2 (La chose devient sujet) :**
  ***A prestigious scholarship** was awarded **to** Fatou by the university.*

Au Baccalauréat, la transformation privilégiant la personne comme sujet grammatical est systématiquement attendue dans les barèmes officiels.`
    },
    {
      title: 'II. Le Passif Impersonnel et de Rumeur (It is said that... / Subject + is said to...)',
      content: `Avec les verbes d'opinion, de déclaration ou de pensée (*say, believe, think, report, expect, consider, understand, claim*) :

### Exemple Actif :
*People believe that the economy is growing rapidly.*

### Deux Options Passives :
1. **Option Impersonnelle :**
   * **It is believed that** the economy is growing rapidly.
2. **Option Personnelle Noble (Attendue au Bac) :**
   * **The economy is believed to be growing** rapidly.

### Quand l'action subordonnée est passée (Infinitif Passé : TO HAVE + V3) :
* Actif : *People say that the ancient king built this palace.*
* Passif : *The ancient king **is said to have built** this palace.*`
    },
    {
      title: 'III. Les Causatives Actives et Passives (HAVE / GET / MAKE)',
      content: `### 1. Faire faire quelque chose par autrui (Causative Passive)
**HAVE / GET + Objet + Past Participle (V3)**
* *The director **had the report translated** into English.* (Il a fait traduire le rapport par un traducteur).
* *She **got her laptop repaired** by a computer technician.*

### 2. Faire agir quelqu'un (Causatives Actives)
* **MAKE + Personne + Base Verbale (sans to) :** Contrainte ou obligation directe.
  *The police officer **made the driver show** his driving licence.*
  *(Attention au passif de make : The driver **was made to show** his licence).*
* **HAVE + Personne + Base Verbale (sans to) :** Délégation professionnelle.
  *The manager **had his secretary send** the formal invitations.*
* **GET + Personne + TO + Infinitif :** Persuasion ou négociation.
  *The teacher **got the students to clean** the laboratory.*`
    },
    {
      title: 'IV. Le Passif avec les Modaux et Verbes Prépositionnels',
      content: `### 1. Modaux au Passé et Présent
* Modal Présent : **Modal + BE + V3** (*The law must be respected.*)
* Modal Passé : **Modal + HAVE BEEN + V3** (*The highway should have been completed earlier.*)

### 2. Verbes Prépositionnels au Passé
La préposition reste collée au verbe passif :
* Actif : *They looked after the orphaned children.*
* Passif : *The orphaned children **were looked after**.*`
    },
    {
      title: 'V. Texte Authentique Contextualisé : Infrastructure Development in Senegal',
      content: `### Reading Passage
Over recent years, several milestone infrastructure projects **have been commissioned** across the nation. The toll highway linking Diamniadio to Mbour **is considered to have reduced** transport bottlenecks substantially. During the construction phase, thousands of local youths **were provided** with technical vocational training on heavy machinery. 

Municipal authorities **had new drainage channels excavated** before the arrival of the monsoonal rains to mitigate flash flooding in vulnerable peri-urban districts. Sociologists observe that local communities **are being empowered** through these modern amenities. It **is reported that** further railway extensions **will be launched** to link mining enclaves with regional commercial ports.

### Grammatical Features
* *have been commissioned :* Present Perfect Passive.
* *is considered to have reduced :* Impersonal passive with perfect infinitive (*to have reduced*).
* *were provided :* Ditransitive passive with the recipient in subject position.
* *had new drainage channels excavated :* Causative passive (*had + object + V3*).`
    },
    {
      title: 'VI. Exercices de Transformation Type Bac & Corrigé Analytique',
      content: `### Exercices
1. *The committee offered Ousmane a lucrative executive position.* (Begin with: *Ousmane...*)
2. *Journalists report that the summit resolved the regional border dispute.* (Begin with: *The summit...*)
3. *A local carpenter repaired our wooden classroom benches.* (Rewrite using the causative: *We had...*)
4. *They must complete the construction before the onset of the rainy season.* (Turn into passive).
5. *People believe that the ancient Griots preserved oral history with flawless accuracy.* (Begin with: *The ancient Griots...*)

### Corrigé Détaillé
1. *Ousmane **was offered** a lucrative executive position by the committee.* (Passif de verbe ditransitif : la personne est promue sujet).
2. *The summit **is reported to have resolved** the regional border dispute.* (Passif impersonnel noble avec infinitif passé *to have resolved* car l'action du sommet est antérieure).
3. *We **had our wooden classroom benches repaired** by a local carpenter.* (Structure causative passive *HAVE + object + V3*).
4. *The construction **must be completed** before the onset of the rainy season.* (Passif avec modal *MUST + BE + V3*).
5. *The ancient Griots **are believed to have preserved** oral history with flawless accuracy.* (Passif personnel de croyance avec antériorité).`
    }
  ]
};

export const LESSON_4_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-04',
  title: 'Part I - Chapter 4: Complex Conditionals, Mixed Conditionals, Wish & If Only',
  module: 'Partie I • Grammar & Conjugation (Terminale L & S)',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Système conditionnel complet : Conditionnels classiques (Types 0, 1, 2, 3), conditionnels mixtes (causes passées avec effets présents et vice-versa), l\'expression du regret et du souhait avec WISH et IF ONLY, et les connecteurs alternatifs (UNLESS, PROVIDED THAT, IN CASE).',
  image: {
    url: '',
    caption: 'Figure T1.4 : Arborescence des 4 types de conditionnels et conditionnels mixtes du Baccalauréat',
    alt: 'Schéma conditionnels mixtes et wish',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">CONDITIONALS &amp; WISH MATRIX : FROM REALITY TO HYPOTHESIS</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Type 1 • Type 2 • Type 3 • Mixed Conditionals</text><rect x="40" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">TYPE 1 (REAL)</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• If + Present ──→</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">WILL + Base Verb</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">If it rains, we will stay</text><rect x="225" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="235" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">TYPE 2 (UNREAL PRES)</text><text x="235" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• If + Past ──→</text><text x="235" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">WOULD + Base Verb</text><text x="235" y="160" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">If I knew, I would tell</text><rect x="410" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="420" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">TYPE 3 (UNREAL PAST)</text><text x="420" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• If + Had V3 ──→</text><text x="420" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">WOULD HAVE + V3</text><text x="420" y="160" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">If I had seen, I would have...</text><rect x="595" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/><text x="605" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">MIXED CONDITIONALS</text><text x="605" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Past Cause ──→</text><text x="605" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">Present Consequence</text><text x="605" y="160" font-family="system-ui, sans-serif" font-size="9" fill="#fca5a5">"If I had studied, I would be..."</text></svg>`
  },
  sections: [
    {
      title: 'I. Les Conditionnels Mixtes (Mixed Conditionals)',
      content: `Les épreuves du Baccalauréat testent régulièrement les conditionnels mixtes, qui combinent une cause et une conséquence situées dans deux sphères temporelles différentes :

### Type Mixte A : Cause dans le Passé ──→ Conséquence dans le Présent
* **Structure :** **If** + **had + V3 (Past Perfect)** ──→ **WOULD + Base Verbale**
* *Exemple :* *If I **had passed** the entrance exam last year, I **would be** a university student today.*
  (Réalité : Je n'ai pas réussi l'an dernier [passé], donc je ne suis pas étudiant aujourd'hui [présent]).

### Type Mixte B : Caractéristique Permanente Présente ──→ Conséquence dans le Passé
* **Structure :** **If** + **Simple Past** ──→ **WOULD HAVE + V3**
* *Exemple :* *If Aminata **were not** so hardworking, she **would not have won** the national award.*
  (Réalité : Aminata est une personne travailleuse par nature [présent], c'est pourquoi elle a remporté ce prix [passé]).`
    },
    {
      title: 'II. WISH et IF ONLY : Exprimer le Souhait et le Regret',
      content: `Les verbes **WISH** et l'expression **IF ONLY** (plus emphatique) impliquent toujours un recul temporel par rapport à la réalité :

| Situation Réelle | Structure de WISH / IF ONLY | Exemple Type d'Examen |
| :--- | :--- | :--- |
| **Regret sur le Présent** | **WISH + Past Subjunctive** (Past Simple ; *WERE* pour toutes les personnes) | *I am poor.* ──→ *I wish I **were** wealthy.* |
| **Regret sur le Passé** | **WISH + Past Perfect (HAD + V3)** | *I didn't revise.* ──→ *I wish I **had revised**.* |
| **Plainte / Agacement sur le Comportement d'Autrui** | **WISH + WOULD + Base Verbale** (Sujets différents) | *He is shouting.* ──→ *I wish he **would stop** shouting.* |`
    },
    {
      title: 'III. Substituts de IF : UNLESS, PROVIDED THAT & Inversion Hypothétique',
      content: `### 1. UNLESS (À moins que / sauf si)
**UNLESS = IF ... NOT**
* *If you do not hurry, you will miss the train.*
* ──→ * **Unless you hurry**, you will miss the train.* (Attention : pas de négation après *unless*).

### 2. PROVIDED THAT / AS LONG AS (Pourvu que / à condition que)
* *You can borrow my dictionary **provided that you return** it tomorrow.*

### 3. Inversion Hypothétique Littéraire (Style Soutenu au Bac)
On peut supprimer **IF** en inversant l'auxiliaire et le sujet :
* Type 1 : *If you should need assistance...* ──→ ***Should you need** assistance...*
* Type 2 : *If I were the president...* ──→ ***Were I** the president...*
* Type 3 : *If we had known the risk...* ──→ ***Had we known** the risk...*`
    },
    {
      title: 'IV. Autres Structures Hypothétiques : AS IF / AS THOUGH, IT\'S TIME + Past',
      content: `### 1. As if / As though (Comme si)
* Quand la supposition est contraire aux faits réels, on utilise le prétérit :
  *He talks **as if he knew** everything about nuclear physics.* (En réalité, il n'en sait rien).
* S'il s'agit d'un fait réel et constatable :
  *It looks **as if it is going to rain**.* (Le ciel est noir, il va pleuvoir).

### 2. It's time / It's high time + Sujet + Simple Past (Il est grand temps que...)
Cette structure exprime qu'une action aurait déjà dû être accomplie :
* *It is high time the international community **took** radical steps against deforestation.*
  *(JAMAIS : It is high time takes / take).*`
    },
    {
      title: 'V. Texte d\'Analyse Réflective : Agro-ecological Regrets and Visions',
      content: `### Reading Passage
Speaking at an agricultural forum in Kaolack, a seasoned agronomist shared his reflections on sustainable farming: *"If colonial authorities **had not imposed** monocultural peanut farming decades ago, our regional soils **would be** far richer in organic nutrients today. **Had regional leaders invested** systematically in drip irrigation during the 1980s, the rural exodus **would have been prevented** to a large extent. 

Today, farmers often act **as though ground water reserves were** infinite. **It is high time rural cooperatives adopted** regenerative agroforestry. **Unless we halt** the expansion of chemical pesticides immediately, future generations will inherit exhausted lands. I **wish all high schools taught** soil biology so that young graduates would see farming not as archaic drudgery, but as a dignified science."*

### Syntactic Highlights
* *had not imposed ... would be :* Mixed Conditional (Past Cause ──→ Present Consequence).
* *Had regional leaders invested... :* Inverted 3rd Conditional (*Had + Subject + V3*).
* *as though ... were :* Unreal comparative clause with past subjunctive *were*.
* *It is high time ... adopted :* Demanded past tense after *It is high time*.
* *Unless we halt :* Subordinate clause with affirmative present after *unless*.`
    },
    {
      title: 'VI. Exercices Types d\'Examen & Corrigé Détaillé',
      content: `### Exercices
1. *I did not study diligently for the exam, so I am not eligible for the scholarship today.* (Rewrite with **IF**).
2. *If you do not wear a helmet, the traffic police will fine you.* (Rewrite with **UNLESS**).
3. *I regret that I spoke so rudely to my elder sister yesterday.* (Rewrite with **I WISH**).
4. *It is really time for the government to invest heavily in public healthcare.* (Begin with: *It is high time...*)
5. *If we had known about the train strike, we would have booked a shared taxi.* (Invert without using **IF**).

### Corrigé Détaillé
1. *If I **had studied** diligently for the exam, I **would be** eligible for the scholarship today.* (Conditionnel mixte : Past Perfect dans la subordonnée, conditional present dans la principale).
2. * **Unless you wear** a helmet, the traffic police will fine you.* (*Unless* remplace *if not* sans double négation).
3. *I **wish I had not spoken** so rudely to my elder sister yesterday.* (*Wish* + Past Perfect pour exprimer le regret rétrospectif).
4. *It is high time the government **invested** heavily in public healthcare.* (Prétérit obligatoire après *It is high time*).
5. ***Had we known** about the train strike, we would have booked a shared taxi.* (Inversion conditionnelle de Type 3).`
    }
  ]
};

export const LESSON_5_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-05',
  title: 'Part I - Chapter 5: Relative Clauses, Noun Clauses, Inversion & Phrasal Verbs',
  module: 'Partie I • Grammar & Conjugation (Terminale L & S)',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Propositions relatives déterminatives et explicatives (who, which, that, whose, whom, where), propositions complétives (noun clauses), structures emphatiques d\'inversion après adverbes négatifs (Never, Seldom, Hardly), et verbes à particule (phrasal verbs) récurrents au Bac.',
  image: {
    url: '',
    caption: 'Figure T1.5 : Syntaxe de l\'inversion emphatique après adverbes négatifs ou restrictifs',
    alt: 'Schéma inversion et relatives',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">SYNTAX OF NEGATIVE INVERSION &amp; RELATIVE CLAUSE ARCHITECTURE</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Auxiliary Inversion • Defining vs Non-Defining</text><rect x="40" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="55" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#60a5fa">NEGATIVE INVERSION SYNTAX</text><text x="55" y="120" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• Negative / Restrictive Adverb at Head :</text><text x="55" y="140" font-family="system-ui, sans-serif" font-size="11" fill="#eab308">NEVER / HARDLY / SELDOM / NO SOONER</text><text x="55" y="165" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">+ Auxiliary (had, did, was) + Subject + Verb</text><text x="55" y="190" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">"Hardly had the bell rung when they stood up."</text><rect x="415" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="430" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">RELATIVE PRONOUN USAGE</text><text x="430" y="120" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• WHO : People (Subject)</text><text x="430" y="140" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• WHICH : Animals / Things</text><text x="430" y="160" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• WHOSE : Possession (Whose father)</text><text x="430" y="185" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">Non-defining = Between commas, NO 'that'</text></svg>`
  },
  sections: [
    {
      title: 'I. Relative Clauses : Defining vs. Non-Defining',
      content: `| Type de Relative | Définition & Règle des Virgules | Pronom Utilisable | Exemple Typique |
| :--- | :--- | :--- | :--- |
| **Defining (Déterminative)** | Indispensable au sens de la phrase ; identifie précisément l'antécédent. **Pas de virgules.** | **WHO, WHOM, WHICH, THAT, WHOSE, WHERE** | *The student **who won the essay competition** received a scholarship.* |
| **Non-Defining (Explicative)** | Apporte une information secondaire entre parenthèses. **Entre deux virgules obligatoires. THAT est strictement interdit !** | **WHO, WHOM, WHICH, WHOSE, WHERE** (*THAT interdit*) | *Dakar, **which is the capital of Senegal**, is situated on the Cap-Vert peninsula.* |

### Règle d'Omission du Pronom Relatif :
Le pronom relatif (*who, which, that*) peut être omis **uniquement s'il est complément d'objet** dans une relative déterminative :
* *The novel (which/that) I read yesterday was fascinating.* (Omission autorisée car *I* est le sujet de *read*).
* *The author who wrote this novel is Senegalese.* (Omission interdite car *who* est le sujet de *wrote*).`
    },
    {
      title: 'II. L\'Inversion Emphatique après Adverbes Négatifs ou Restrictifs',
      content: `Lorsqu'une phrase commence par un adverbe ou locution à sens négatif ou restrictif, l'ordre sujet-auxiliaire s'inverse exactement comme dans une question :
**Adverbe Négatif** + **Auxiliaire** + **Sujet** + **Verbe Principal**

| Adverbe Négatif en Tête | Exemple Ordinaire | Transformation Emphatique Inversée |
| :--- | :--- | :--- |
| **NEVER** | *He had never seen such courage.* | ***Never had he seen** such courage.* |
| **SELDOM / RARELY** | *They rarely travel during rainy season.*| ***Rarely do they travel** during rainy season.* |
| **HARDLY ... WHEN** | *We had hardly arrived when it rained.* | ***Hardly had we arrived when** it began to rain.* |
| **NO SOONER ... THAN** | *She had no sooner spoken than he left.* | ***No sooner had she spoken than** he left.* |
| **NOT ONLY ... BUT ALSO**| *He is not only polite, but also witty.*| ***Not only is he** polite, but he is also witty.* |
| **UNDER NO CIRCUMSTANCES**| *You must not enter this room.* | ***Under no circumstances must you enter** this room.* |`
    },
    {
      title: 'III. Phrasal Verbs Indispensables au Baccalauréat',
      content: `Les verbes à particule modifient profondément le sens du verbe de base :

| Phrasal Verb | Sens en Français | Exemple en Contexte |
| :--- | :--- | :--- |
| **Bring about** | Provoquer, susciter | *Technological innovation will **bring about** economic growth.* |
| **Call off** | Annuler | *The organizers decided to **call off** the match due to storms.* |
| **Carry out** | Mener à bien, exécuter | *The scientists will **carry out** field experiments next month.* |
| **Cope with** | Faire face à, surmonter | *Many families struggle to **cope with** the rising cost of living.* |
| **Give up** | Abandonner, renoncer | *Never **give up** your educational dreams despite hardships.* |
| **Look down on** | Mépriser, regarder de haut | *Wealthy elites must not **look down on** modest rural workers.* |
| **Look forward to (+ V-ing)**| Attendre avec impatience | *Students **look forward to receiving** their diploma.* |
| **Put off** | Reporter, différer | *Do not **put off** until tomorrow what you can accomplish today.* |`
    },
    {
      title: 'IV. Propositions Participiales et Réduction des Propositions Relatives',
      content: `Pour alléger le style académique et densifier les essais, on remplace fréquemment les propositions relatives par des participes :

### 1. Participe Présent (Sens Actif en -ING)
* Forme longue : *Candidates who wish to take the exam must bring their ID.*
* Forme réduite : *Candidates **wishing to take** the exam must bring their ID.*
* Forme longue : *The road which connects Dakar to Touba is modern.*
* Forme réduite : *The road **connecting** Dakar to Touba is modern.*

### 2. Participe Passé (Sens Passif en -ED / V3)
* Forme longue : *The artifacts which were discovered in the ancient tumuli are sacred.*
* Forme réduite : *The artifacts **discovered in** the ancient tumuli are sacred.*`
    },
    {
      title: 'V. Texte d\'Application Avancée : The Brain Drain Dilemma',
      content: `### Reading Passage
The departure of qualified specialists, **which is commonly termed "the brain drain"**, continues to pose a severe handicap for African public healthcare systems. **Seldom have African hospitals witnessed** such an alarming exodus of doctors toward Western clinical centers. 

A prominent university physician, **whose pioneering research on infectious diseases won global accolades**, emphasized during a recent symposium: *"Under no circumstances **should we condemn** young graduates **wishing to explore** international fellowships. However, **rarely does the diaspora realize** how urgently their motherland requires their clinical expertise. **Not only do local institutions offer** opportunities for transformative leadership, **but they also provide** the unique satisfaction of saving lives in one's own community. Governments must urgently **carry out** structural salary reforms so that young doctors will not **call off** their lifelong commitment to national public health."*

### Syntactic Highlights
* *which is commonly termed :* Non-defining relative clause enclosed in commas (*that* is forbidden).
* *Seldom have African hospitals witnessed :* Negative inversion (*Seldom + have + subject + V3*).
* *whose pioneering research :* Relative pronoun expressing possession (*whose + noun*).
* *Under no circumstances should we condemn :* Negative inversion after conditional prohibition.
* *graduates wishing to explore :* Reduced relative clause using present participle (*wishing* = *who wish*).`
    },
    {
      title: 'VI. Exercices d\'Entraînement de Haut Niveau & Corrigé',
      content: `### Exercices
1. *He had never encountered such genuine hospitality before.* (Begin with: *Never...*)
2. *Dakar is the capital of Senegal. It hosts the biennial African Contemporary Art exhibition.* (Combine using a non-defining relative clause).
3. *She had scarcely submitted the test when the invigilator collected the answer sheets.* (Begin with: *Hardly...*)
4. *Students who study digital programming will find ample job opportunities.* (Reduce the relative clause using a participle).
5. *The authorities cancelled the outdoor concert because of the severe dust storm.* (Replace the verb with an appropriate phrasal verb).

### Corrigé Détaillé
1. ***Never had he encountered** such genuine hospitality before.* (Inversion négative : *Never + had + subject + V3*).
2. *Dakar, **which is the capital of Senegal, hosts** the biennial African Contemporary Art exhibition.* (Proposition relative non-déterminative entre virgules ; *which* obligatoire, *that* banni).
3. ***Hardly had she submitted** the test **when** the invigilator collected the answer sheets.* (Inversion après *Hardly* suivi de *when*).
4. *Students **studying digital programming** will find ample job opportunities.* (Réduction de relative avec le participe présent actif *-ing*).
5. *The authorities **called off** the outdoor concert because of the severe dust storm.* (Emploi du phrasal verb *call off* au prétérit : *called off*).`
    }
  ]
};

export const LESSON_6_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-06',
  title: 'Part I - Chapter 6: Ten Recurring Grammatical Pitfalls for Francophone Candidates',
  module: 'Partie I • Grammar & Conjugation (Terminale L & S)',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Analyse méthodique des 10 erreurs les plus pénalisantes commises par les candidats sénégalais au Baccalauréat : faux amis, transferts linguistiques calqués sur le français, accords délicats, formes verbales après prépositions et constructions causatives.',
  image: {
    url: '',
    caption: 'Figure T1.6 : Les 10 pièges grammaticaux récurrents pour les candidats francophones au Baccalauréat',
    alt: 'Schéma pièges grammaticaux du Bac',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ef4444">TEN RECURRING BACCALAUREATE PITFALLS FOR FRANCOPHONES</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">False Friends • Prepositions • Syntax</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">FALSE FRIENDS</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Actually = En réalité</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Currently = Actuellement</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Eventually = Finalement</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">TEMPORAL ERRORS</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• When he arrives (NO will)</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Since 2020 (NOT for)</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Despite the rain (NO of)</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">VERB PATTERNS</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Look forward to + V-ing</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Stop smoking vs to smoke</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Used to + BV</text></svg>`
  },
  sections: [
    {
      title: 'I. Les 10 Pièges Grammaticaux Mortels au Baccalauréat',
      content: `1. **Oubli de la base verbale après les auxiliaires modaux :**
   * *Erreur :* *He must to do his homework.* → **Correct :** *He **must do** his homework.*
2. **Emploi abusif du présent continu avec les verbes d\'état :**
   * *Erreur :* *I am understanding the question.* → **Correct :** *I **understand** the question.*
3. **Pluriel erroné des indénombrables :**
   * *Erreur :* *The teacher gave us several advices.* → **Correct :** *The teacher gave us **some advice** (or: **pieces of advice**).*
4. **Verbe en -ING obligatoire après TOUTES les prépositions :**
   * Toute préposition (*in, on, at, by, for, of, without, before, after, instead of*) doit être suivie d'un verbe en **-ING** :
   * *Erreur :* *He left without say goodbye.* → **Correct :** *He left without **saying** goodbye.*
   * *He is fond **of reading**.* / *Thank you **for helping** me.*
5. **Le piège de "LOOK FORWARD TO + V-ING" :**
   * Ici *to* est une préposition et non la marque de l'infinitif :
   * *Erreur :* *I look forward to hear from you.* → **Correct :** *I look forward to **hearing** from you.*
6. **Confusion entre MAKE et DO :**
   * **DO** pour les actions générales, tâches et travail : *do homework, do research, do an exam, do someone a favour*.
   * **MAKE** pour la création, fabrication, décision et résultat : *make a mistake, make a decision, make progress, make an effort, make money*.
7. **Accord sujet-verbe avec les quantifieurs collectifs :**
   * *Neither of the students **is** present.* (Singulier requis en anglais normatif).
   * *Everyone / Everybody / Someone **has** arrived.* (Verbe au singulier).
8. **Double négation bannie en anglais standard :**
   * *Erreur :* *I didn't see nobody.* → **Correct :** *I didn't see **anybody** (or: I saw **nobody**).*
9. **Inversion fautive dans les questions indirectes :**
   * *Erreur :* *She asked me where did I live.* → **Correct :** *She asked me **where I lived**.*
10. **L\'adjectif reste STRICTEMENT invariable :**
   * *Erreur :* *They are intelligentes students.* → **Correct :** *They are **intelligent** students.*`
    },
    {
      title: 'II. Les Pièges Lexicaux et Faux-Amis Dangereux',
      content: `Les faux-amis provoquent des contresens dramatiques dans les épreuves d'expression écrite et de compréhension :

| Mot Anglais Trompeur | Ce qu'il signifie RÉELLEMENT | Faux Ami Français Calqué | Le Vrai Mot pour le Sens Français |
| :--- | :--- | :--- | :--- |
| **Actually** | En réalité, en fait | Actuellement | **Currently / At present / Nowadays** |
| **Currently** | Actuellement, de nos jours | Couramment | **Fluently** |
| **Eventually** | Finalement, en fin de compte | Éventuellement | **Possibly / If necessary** |
| **Sympathetic** | Compatissant, compréhensif | Sympathique | **Friendly / Nice / Likable** |
| **Comprehensive** | Exhaustif, complet, détaillé | Compréhensif | **Understanding** |
| **Opportunity** | Opportunité, occasion favorable| Opportunisme | **Opportunism** |
| **Faculty** | Corps enseignant universitaire | Faculté mentale / branche | **University department / mental ability** |
| **Demand** | Exiger formellement | Demander gentiment | **Ask / Inquire** |`
    },
    {
      title: 'III. Les Régimes Prépositionnels Fixes du Baccalauréat',
      content: `Les prépositions ne se traduisent jamais mot à mot depuis le français. Voici les collocations prépositionnelles les plus testées au Bac :

| Verbe / Adjectif + Préposition | Sens Français | Exemple Canonique |
| :--- | :--- | :--- |
| **Accuse someone OF (+ V-ing)**| Accuser quelqu'un de | *He was accused **of embezzling** public funds.* |
| **Interested IN (+ V-ing)** | S'intéresser à | *She is interested **in studying** medicine.* |
| **Responsible FOR (+ V-ing)**| Être responsable de | *The minister is responsible **for ensuring** food safety.* |
| **Congratulate ON (+ V-ing)** | Féliciter pour | *We congratulated Fatou **on winning** the prize.* |
| **Prevent someone FROM (+ V-ing)**| Empêcher quelqu'un de | *Dams prevent the river **from overflowing**.* |
| **Depend ON** | Dépendre de | *Our success depends **on hard work**.* |
| **Succeed IN (+ V-ing)** | Réussir à | *He succeeded **in passing** the difficult exam.* |
| **Despite (JAMAIS 'despite of')**| Malgré, en dépit de | ***Despite the heavy rain**, the match took place.* |
| **In spite OF** | En dépit de (avec of) | ***In spite of his age**, he ran the marathon.* |`
    },
    {
      title: 'IV. Texte d\'Analyse Pédagogique : The Inspector\'s Diagnostic Report',
      content: `### Reading Passage
Following a nationwide inspection of final-year high school examinations, the regional pedagogy board **issued some valuable advice** to senior candidates. The chief inspector noted: *"Many students **are fond of translating** directly from French into English, which **inevitably brings about** serious grammatical slips. For instance, candidates frequently write *'I am living here since five years'*, whereas standard English requires the present perfect continuous: *'I **have been living** here **for** five years'*.

Furthermore, when candidates draft their argumentative essays, they must avoid writing *'Despite of the obstacles'*; they must write either ***Despite** the obstacles* or ***In spite of** the obstacles*. Candidates **are expected to pay** close attention to subject-verb agreement: remember that *information, luggage, advice* and *equipment* are uncountable nouns that **never take** a plural -s. By mastering these ten recurring traps, students **will substantially increase** their final English scores at the Baccalaureate."*`
    },
    {
      title: 'V. Exercice de Détection & Correction d\'Erreurs Type Bac',
      content: `### Exercice
Chacune des phrases suivantes contient une erreur récurrente. Détectez-la et corrigez-la :
1. *She is looking forward to meet the new English inspector.*
2. *Before to leave the examination room, ensure all papers are signed.*
3. *The news on television are very alarming tonight.*
4. *They made a lot of research before publishing the scientific report.*
5. *If you will come tomorrow, we will discuss the project.*
6. *Despite of his poverty, he succeeded to gain admission into the polytechnic institute.*
7. *Neither of the teachers were aware of the revised syllabus.*
8. *He asked to the student why was he late.*
9. *Actually, I am living in Dakar, but I was born in Saint-Louis.*
10. *The government took severe measures for preventing the disease to spread.*

### Corrigé Détaillé
1. *She is looking forward to **meeting** the new English inspector.* (*look forward to* est suivi du gérondif en *-ing*).
2. ***Before leaving** the examination room...* (Préposition *before* + verbe en *-ing*).
3. *The news on television **is** very alarming tonight.* (*News* est indénombrable et prend un verbe au singulier).
4. *They **did** a lot of research...* (*Do research* et non *make*).
5. *If you **come** tomorrow...* (Pas d'auxiliaire *will* dans la subordonnée en *if*).
6. ***Despite his poverty** (or: **In spite of his poverty**), he succeeded **in gaining** admission...* (*Despite* sans *of* ; *succeed in + V-ing*).
7. *Neither of the teachers **was** aware of the revised syllabus.* (*Neither of* régit un verbe au singulier en norme standard).
8. *He asked the student why **he was** late.* (Pas de *to* après *ask* ; pas d'inversion sujet-verbe dans une question indirecte).
9. ***Currently** (or: **At present**), I am living in Dakar...* (*Actually* signifie « en réalité » et non « actuellement »).
10. *...for preventing the disease **from spreading**.* (*Prevent someone/something from + V-ing*).`
    },
    {
      title: 'VI. Fiche Récapitulative & Grille Anti-Erreurs pour le Candidat',
      content: `### Grille d'Auto-Vérification Avant de Rendre sa Copie :
* [ ] Ai-je vérifié que chaque verbe suivant une préposition se termine bien par **-ING** ?
* [ ] Ai-je supprimé tout **WILL** situé après *when, as soon as, if, unless, before, after* ?
* [ ] Mes adjectifs sont-ils tous **strictement invariables** (aucun *-s* de pluriel) ?
* [ ] Ai-je utilisé **HAD + V3** après *I wish* pour un regret passé, et le **prétérit** pour un regret présent ?
* [ ] Ai-je bien écrit **despite** (SANS of) ou **in spite of** (AVEC of) ?
* [ ] Dans mes questions indirectes, l'ordre des mots est-il bien **Sujet + Verbe** sans inversion ?
* [ ] Ai-je évité les faux-amis : **currently** pour « actuellement », **actually** pour « en réalité » ?
* [ ] Mes noms indénombrables (*advice, information, furniture, homework*) sont-ils bien restés au singulier ?`
    }
  ]
};

export const COURSES_ANGLAIS_TLE_PART1 = [
  LESSON_1_ANGLAIS_TLE,
  LESSON_2_ANGLAIS_TLE,
  LESSON_3_ANGLAIS_TLE,
  LESSON_4_ANGLAIS_TLE,
  LESSON_5_ANGLAIS_TLE,
  LESSON_6_ANGLAIS_TLE
];
