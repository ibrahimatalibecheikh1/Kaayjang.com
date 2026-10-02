import { LessonContent } from './courses';

// =========================================================================
// ANGLAIS CLASSE DE SECONDE (SÉRIES L & S) — DEUXIÈME PARTIE
// Conforme au programme officiel national de la République du Sénégal
// Approche Par les Compétences (APC) — Cours intégraux sans résumé
// =========================================================================

export const LESSON_5_ANGLAIS_2NDE: LessonContent = {
  id: 'anglais-2nde-cours-05',
  title: 'Unit 5: Science, Technology, and Modern Communication',
  module: 'Deuxième Partie : Culture, Droits, Technologies et Carrières',
  level: 'Seconde (Séries L & S)',
  readTime: '70 min',
  description: 'Étude exhaustive des révolutions numériques (smartphones, réseaux sociaux, intelligence artificielle, cyberharcèlement), grammaire approfondie de la Voix Passive (tous les temps, omissions de l\'agent, structures impersonnelles it is said that...), et analyse des impacts technologiques en Afrique.',
  sections: [
    {
      title: 'I. Comprehensive Thematic Vocabulary: Digital Tech, Internet & AI',
      content: `### 1. Digital Revolution & Information Technology Word Bank

| English Term | Part of Speech | French Meaning | Detailed Sentence & Technological Context |
| :--- | :--- | :--- | :--- |
| **Artificial Intelligence (AI)**| noun phr. | Intelligence Artificielle (IA) | *AI algorithms automate complex data processing and medical diagnostic tasks.* |
| **Broadband connection** | noun phr. | Connexion haut débit | *Fiber-optic broadband connections are expanding across secondary schools in Senegal.* |
| **Cyberbullying & Harassment** | noun | Cyberharcèlement | *Victims of online cyberbullying often suffer from severe anxiety and academic decline.* |
| **Data privacy & Encryption** | noun phr. | Confidentialité et cryptage | *Strong encryption protocols safeguard users' private financial data from hackers.* |
| **Digital divide** | noun phr. | Fracture numérique | *The digital divide separates urban populations with high-speed internet from isolated rural areas.* |
| **E-learning & Telecommuting** | noun | Télé-enseignement et télétravail| *During emergencies, universities adopted e-learning platforms to deliver lectures remotely.* |
| **Information overload** | noun phr. | Surcharge informationnelle | *Browsing countless social media feeds leads to cognitive fatigue and information overload.* |
| **Malware & Phishing** | noun | Logiciel malveillant et hameçonnage| *Cybersecurity experts warn internet users against suspicious links used in phishing scams.* |
| **Mobile money transfer** | noun phr. | Transfert d'argent par mobile | *Platforms like Wave and Orange Money have revolutionized financial inclusion in Senegal.* |
| **Plagiarism & Copyright** | noun | Plagiat et droits d'auteur | *Copying online articles without acknowledging the author constitutes intellectual plagiarism.* |
| **Search engine optimization** | noun phr. | Référencement web | *Companies optimize website content to rank higher on popular search engines.* |
| **Smartphone addiction** | noun phr. | Dépendance aux téléphones | *Screen addiction diminishes attention spans and disrupts sleep patterns among teenagers.* |
| **Social media influencer** | noun phr. | Influenceur sur réseaux sociaux| *Influencers leverage video platforms to promote commercial brands to adolescent followers.* |
| **Virtual reality (VR)** | noun phr. | Réalité virtuelle | *VR headsets allow biology students to simulate three-dimensional anatomy dissections.* |`
    },
    {
      title: 'II. Complete Grammar Study: The Passive Voice in All Tenses',
      content: `### 1. Fundamental Principles and Transformation Rules
The passive voice is employed when the **action itself** or the **recipient of the action (the object)** is more significant than the agent who performed it, or when the agent is unknown, obvious, or intentionally concealed.

#### General Transformation Algorithm:
\Active:   Subject (S_A) +  Verb (V_A) +  Direct Object (O_A)
\⇓
\Passive:   Object (O_A \→ S_P) +  **be**  (in the tense of  V_A) + \**Past Participle (V3)** (V_P) + \(\**by** + \Agent) (\Optional)

---

### 2. Systematic Tense Conjugation Chart
| Tense / Structure | Active Voice Sentence | Passive Voice Transformation |
| :--- | :--- | :--- |
| **Present Simple** | *Engineers design new applications.* | *New applications **are designed** by engineers.* |
| **Present Continuous**| *Technicians are installing fiber cables.* | *Fiber cables **are being installed** by technicians.* |
| **Past Simple** | *A Senegalese scientist invented this device.*| *This device **was invented** by a Senegalese scientist.* |
| **Past Continuous** | *Hackers were attacking the server.* | *The server **was being attacked** by hackers.* |
| **Present Perfect** | *The school has acquired forty computers.* | *Forty computers **have been acquired** by the school.* |
| **Past Perfect** | *They had resolved the network glitch.* | *The network glitch **had been resolved**.* |
| **Future Simple (will)**| *Government will inaugurate the data center.*| *The data center **will be inaugurated** by government.* |
| **Be going to** | *They are going to launch a new satellite.* | *A new satellite **is going to be launched**.* |
| **Modal Verbs** | *Students must respect cybersecurity rules.* | *Cybersecurity rules **must be respected**.* |
| **Modal Perfect** | *He should have backed up the hard drive.* | *The hard drive **should have been backed up**.* |

---

### 3. Agent Usage: By vs. With
* **By + Human / Instigating Agent**: Indicates who performed the action:
  * *The educational app was developed **by** a Senegalese computer science student.*
* **With + Instrument / Material / Tool**: Indicates the physical tool, substance, or instrument used:
  * *The server room was secured **with** an electronic fingerprint lock.*
  * *The microchip was manufactured **with** silicon and copper.*

---

### 4. Advanced Passive Structures: Impersonal Reporting Verbs
When reporting general opinions, rumors, or scientific beliefs (*say, believe, think, report, expect, consider, understand, know*):

#### Structure A: Impersonal "It + Passive + That-clause"
* *People believe that technology stimulates economic growth.*
  \→   \**It is believed that**  technology stimulates economic growth.
* *They reported that the submarine internet cable was cut.*
  \→   \**It was reported that**  the submarine internet cable was cut.

#### Structure B: Personal Subject + Passive Verb + To-Infinitive
\Subject + \be + \V3 (said, thought, known) +  begin{cases} \**to + base verb** & \(present/general fact)  \ \**to have + V3** & \(past completed action)  end{cases}
* *People say that Aminata is a coding genius.*
  \→   \Aminata  \**is said to be**  a coding genius.
* *Experts believe that the hacker fled the country.*
  \→   \The hacker  \**is believed to have fled**  the country.`
    },
    {
      title: 'III. Reading Comprehension: "Mobile Money and the Fintech Boom in Senegal"',
      content: `### 1. Reading Text
> Over the preceding decade, sub-Saharan Africa has emerged as the global epicenter of mobile financial innovation. In Senegal, the rapid proliferation of mobile telephony, coupled with expanding digital infrastructure, has completely disrupted conventional banking systems. Historically, commercial banking in the country was characterized by severe structural limitations: exorbitant account maintenance fees, cumbersome bureaucratic paperwork, and an extreme physical concentration of bank branches in Dakar. Consequently, more than eighty percent of the adult population was excluded from formal financial services, forced to rely on cash transactions and vulnerable informal savings circles (*tontines*).
>
> The introduction of mobile money platforms—initially through telecommunications operators like Orange Money and subsequently transformed by low-commission disruptors such as Wave—radically dismantled these obstacles. Today, a mobile phone functions as a portable, secure bank branch. With a basic smartphone or even a simple feature phone utilizing USSD technology, citizens across rural and urban locales can deposit money, transfer funds to relatives in distant villages, pay electricity and water bills, purchase merchandise, and receive international remittances instantaneously.
>
> This fintech revolution has unlocked immense entrepreneurial dynamism, particularly within the informal sector which employs the vast majority of Senegalese workers. Market vendors in Sandaga or Tilène, rural cattle herders in Dahra, and roadside artisans can now accept cashless digital payments without needing costly credit card terminals. Transaction fees have dropped precipitously, allowing micro-entrepreneurs to protect their profit margins.
>
> Nevertheless, this widespread digital adoption introduces pressing regulatory and ethical dilemmas. Cyber fraud, SIM-swap scams, and identity theft have escalated, targeting digitally illiterate users who inadvertently reveal confidential PIN codes to criminal syndicates. Furthermore, heavy reliance on digital transactions raises concerns regarding data sovereignty and algorithmic surveillance. To ensure that the digital economy remains an equitable engine of national emergence, financial authorities must reinforce consumer protection laws, mandate robust cybersecurity safeguards, and aggressively expand nationwide digital literacy initiatives.

---

### 2. Reading Questions & Answers
* **Why were most Senegalese citizens historically excluded from traditional banking?**
  * **Answer**: *They were excluded due to high account maintenance fees, excessive paperwork, and the heavy concentration of commercial bank branches solely in the capital city of Dakar.*
* **How has mobile money empowered informal workers and micro-entrepreneurs?**
  * **Answer**: *It allows them to conduct instant, secure cashless transactions at extremely low fees without expensive credit card hardware, thereby safeguarding their profits and integrating them into the modern economy.*`
    },
    {
      title: 'IV. Practical Exercises & Detailed Answer Keys: Passive Voice',
      content: `### 1. Passive Voice Transformation Exercises
Transform each active sentence into the passive voice:
1. *A young Senegalese programmer created this viral educational application.*
2. *Telecommunication companies are laying new submarine fiber cables across the Atlantic.*
3. *Students must not share their confidential network passwords.*
4. *Technicians have successfully updated the high school computer laboratory.*
5. *People believe that artificial intelligence will transform African agriculture.* (Provide both Structure A and Structure B).
6. *The mechanic fixed the school generator with a brand new spare part.*

---

### 2. Detailed Answer Key & Explanations
1. **This viral educational application was created by a young Senegalese programmer.**
   *(Past Simple active \→ was + created).*
2. **New submarine fiber cables are being laid across the Atlantic by telecommunication companies.**
   *(Present Continuous active \→ are being + laid).*
3. **Confidential network passwords must not be shared by students.**
   *(Modal verb \→ must not be + shared).*
4. **The high school computer laboratory has been successfully updated by technicians.**
   *(Present Perfect active \→ has been + updated).*
5. *Structure A*: **It is believed that artificial intelligence will transform African agriculture.**
   *Structure B*: **Artificial intelligence is believed to transform African agriculture.**
6. **The school generator was fixed with a brand new spare part (by the mechanic).**
   *(Notice "with" indicates the instrument/part, while "by" denotes the person).*`
    }
  ]
};

export const LESSON_6_ANGLAIS_2NDE: LessonContent = {
  id: 'anglais-2nde-cours-06',
  title: 'Unit 6: African Culture, Heritage, and Tourism in Senegal',
  module: 'Deuxième Partie : Culture, Droits, Technologies et Carrières',
  level: 'Seconde (Séries L & S)',
  readTime: '70 min',
  description: 'Patrimoine historique et immatériel (l\'île de Gorée, Saint-Louis, le Saloum, artisanat d\'art, écotourisme vs tourisme de masse), grammaire complète des Propositions Conditionnelles (Conditionals Zero, First, Second, Third, Wish / If only clauses), et production de récits et dépliants touristiques.',
  sections: [
    {
      title: 'I. Comprehensive Thematic Vocabulary: Heritage, Arts & Tourism',
      content: `### 1. Cultural Heritage, Historical Memory & Tourism Word Bank

| English Term | Part of Speech | French Meaning | Detailed Sentence & Cultural Usage |
| :--- | :--- | :--- | :--- |
| **Architectural relic** | noun phr. | Vestige architectural | *Saint-Louis features colonial architectural relics alongside traditional Senegalese structures.* |
| **Artisanal craftsmanship** | noun phr. | Artisanat d'art | *Complex leatherwork, basketry, and wood carving embody Senegalese artisanal craftsmanship.* |
| **Cultural preservation** | noun phr. | Sauvegarde culturelle | *UNESCO partners with local authorities to guarantee the cultural preservation of Gorée Island.* |
| **Customs & Folk customs** | noun | Coutumes et traditions | *Wrestling matches (*Laamb*) with musical drumming represent cherished Senegalese folk customs.* |
| **Eco-tourism / Green tourism**| noun | Écotourisme | *In Casamance and the Saloum Delta, eco-tourism lodges protect mangroves while employing locals.* |
| **Griot / Oral genealogist** | noun | Griot / traditionaliste | *Griots preserve ancient royal lineage and oral chronicles through melodic Kora songs.* |
| **Historical landmark** | noun phr. | Monument / site historique | *The House of Slaves on Gorée Island stands as a solemn global historical landmark.* |
| **Hospitality (Teranga)** | noun | Hospitalité chaleureuse | *Senegalese 'Teranga' signifies welcoming travelers with generosity, food, and human warmth.* |
| **Intangible cultural heritage**| noun phr. | Patrimoine culturel immatériel | *Traditional wrestling rites and the Kankurang masquerade are recognized as intangible heritage.* |
| **Mass tourism & Leakage** | noun phr. | Tourisme de masse et fuite | *Uncontrolled mass tourism damages coastal ecosystems and enriches foreign hotel chains.* |
| **Monument of the Renaissance**| proper noun | Monument de la Renaissance | *The monumental bronze statue overlooking Dakar symbolizes African resilience and emergence.* |
| **Pilgrimage & Sacred site** | noun | Pèlerinage et site sacré | *Millions of disciples travel annually to Touba and Tivaouane for religious pilgrimages.* |
| **World Heritage Site** | noun phr. | Site du patrimoine mondial | *The Djoudj National Bird Sanctuary is an internationally recognized World Heritage Site.* |`
    },
    {
      title: 'II. Complete Grammar Study: Conditionals (Zero, First, Second, Third) & Wish Clauses',
      content: `### 1. The Zero Conditional: Universal Realities & Scientific Truths
* **Formula**:
  \**If / When** + \Present Simple,   \──→   \Present Simple
* **Meaning**: Expresses inescapable facts, scientific laws, or automatic routines:
  * *If you heat seawater, it evaporates.*
  * *If you visit Gorée, you feel a profound historical reverence.*

---

### 2. The First Conditional: Real and Probable Future Conditions
* **Formula**:
  \**If** + \Present Simple,   \──→   \**will / can / may** + \Base Verb
* **Meaning**: Expresses an open, highly realistic condition regarding a future occurrence:
  * *If tourists respect local cultural norms, villagers **will welcome** them with genuine warmth.*
  * *If we protect our coastal mangroves, marine life **will regenerate** rapidly.*
* **Variations with Imperative in the main clause**:
  * *If you travel to Saint-Louis, **make** sure to attend the International Jazz Festival.*

---

### 3. The Second Conditional: Hypothetical / Imaginary Present Situations
* **Formula**:
  \**If** + \Past Simple   (\were for all subjects),   \──→   \**would / could / might** + \Base Verb
* **Meaning**: Expresses an unreal, improbable, or imaginary condition in the present or future:
  * *If I **had** sufficient financial savings, I **would travel** to the Bassari country.* (Reality: I do not have enough money).
  * *If the government **invested** more in artisanal infrastructure, local carvers **could export** their works globally.*
* **Giving Advice ("If I were you")**:
  * *If I **were** you, I **would read** Cheikh Anta Diop's books on African antiquity.*

---

### 4. The Third Conditional: Impossible Past Regrets & Unreal Historical Conditions
* **Formula**:
  \**If** + \Past Perfect (had + V3),   \──→   \**would / could / might have** + \Past Participle (V3)
* **Meaning**: Expresses an imaginary condition in the past that never occurred (regret, reproach, historical hypothesis):
  * *If the colonial authorities **had maintained** the historic buildings of Saint-Louis, the roofs **would not have collapsed**.* (Reality: They did not maintain them, so they collapsed).
  * *If you **had informed** me about the cultural festival, I **would have accompanied** you.*

---

### 5. Summary Matrix of Conditional Structures
 begin{array}{|l|l|l|l|}
 hline
\**Type** & \**If-Clause (Condition)** & \**Main Clause (Result)** & \**Temporal Reality**   
 hline
\**Zero** & \Present Simple & \Present Simple & \Always true / Law of nature   
 hline
\**First** & \Present Simple & \will + Verb & \Realistic future possibility   
 hline
\**Second** & \Past Simple (were) & \would + Verb & \Imaginary present / Unlikely   
 hline
\**Third** & \Past Perfect (had + V3) & \would have + V3 & \Impossible past / Regret   
 hline
 end{array}

---

### 6. Expressing Wishes and Regrets: "Wish" & "If only"
* **Wish about the Present (Desire for a different current situation)**:
  \Subject + \**wish** / \**If only** + \Past Simple (were)
  * *I wish our city **had** more public libraries.* (Reality: It lacks libraries).
  * *If only I **were** fluent in Wolof, English, and Spanish!*
* **Wish about the Past (Regret over a past action)**:
  \Subject + \**wish** / \**If only** + \Past Perfect (had + V3)
  * *He wishes he **had visited** the Museum of Black Civilizations during his stay in Dakar.* (Reality: He did not visit it).
* **Wish about Annoyance / Desired change in someone else's behavior**:
  \Subject + \**wish** + \Person + \**would** + \Base Verb
  * *I wish tourists **would stop** discarding plastic bottles along our pristine beaches.*`
    },
    {
      title: 'III. Reading Comprehension: "Gorée Island: Memorial of the Transatlantic Slave Trade"',
      content: `### 1. Reading Text
> Floating three kilometers off the coast of the vibrant capital city of Dakar, the tranquil island of Gorée presents a profound, poignant paradox to every sensitive traveler. Today, the island charms visitors with its picturesque pastel-washed colonial residences, flowering bougainvillea vines, narrow cobblestone alleyways, and the absence of automobile engines. Yet, beneath this Mediterranean-like serenity lies one of the darkest, most agonizing chapters in the chronicle of human civilization: the Transatlantic Slave Trade.
>
> Inscribed on the UNESCO World Heritage list in 1978, Gorée served from the fifteenth to the nineteenth century as one of the prominent transit emporiums fought over by Portuguese, Dutch, British, and French colonial merchant fleets. From its shores, millions of captured African men, women, and children were torn from their homelands, branded with red-hot irons, crammed into suffocating dungeons, and forcibly transported across the harrowing Atlantic Ocean on the notorious Middle Passage to endure generational enslavement in the Americas.
>
> At the emotional epicenter of the island stands the House of Slaves (*Maison des Esclaves*), constructed in 1776 by the Dutch and later managed by the French. Guided through its somber corridors, visitors view the tiny, airless cells where human beings were segregated by gender and weight. The focal point of the pilgrimage is the iconic "Door of No Return" (*La Porte du Non-Retour*), an aperture opening directly onto the rocky ocean swell. Stepping through this portal meant the irreversible severance from family, motherland, and ancestral freedom.
>
> For contemporary travelers, intellectuals, and members of the global African diaspora, Gorée is not an ordinary leisure destination; it is a sacred sanctuary of historical remembrance and spiritual catharsis. World leaders—including Nelson Mandela, Léopold Sédar Senghor, and Barack Obama—have made reverent pilgrimages to Gorée to contemplate the inhumanity of racial subjugation and reaffirm human dignity. As modern Senegalese authorities promote sustainable heritage tourism, the fundamental imperative remains clear: to ensure that the remembrance of Gorée inspires ongoing struggles against contemporary forms of servitude, racism, and intolerance worldwide.

---

### 2. Reading Questions & Answers
* **Why is Gorée Island described as a "poignant paradox"?**
  * **Answer**: *Because its current visual appearance is picturesque, peaceful, and beautiful with flowering vines and colorful houses, yet it represents one of the most brutal and agonizing sites of human enslavement in global history.*
* **What historical and emotional significance does the "Door of No Return" hold?**
  * **Answer**: *It represents the final boundary through which enslaved Africans passed to board slave ships, symbolizing the complete, irreversible loss of freedom, homeland, and cultural ties.*`
    },
    {
      title: 'IV. Practical Exercises & Detailed Answer Keys: Conditionals & Wish',
      content: `### 1. Conditional Sentences Exercises
Put the verb in brackets into the correct tense according to the specified conditional type:
1. *If our government (protect) .................... historical monuments, international tourists will visit our country in greater numbers. (First Conditional)*
2. *If I (be) .................... the Minister of Culture, I would build artisanal training academies in every region. (Second Conditional)*
3. *If the tour guide (warn) .................... the travelers yesterday, they (not / miss) .................... the ferry to Gorée. (Third Conditional)*
4. *If seawater (freeze) ...................., it turns into solid sea ice. (Zero Conditional)*
5. *I don't have enough free time to visit Casamance. \→ I wish I (have) .................... more free time.*
6. *Cheikh did not revise his English grammar notes before the test. \→ Cheikh wishes he (revise) .................... his notes.*

---

### 2. Detailed Answer Key
1. **protects** (First conditional: If + Present Simple, will + base verb).
2. **were** (Second conditional: If + Past Subjunctive 'were', would + base verb).
3. **had warned / would not have missed** (Third conditional: If + Past Perfect, would have + V3).
4. **freezes** (Zero conditional: scientific fact with Present Simple).
5. **had** (Wish about a present situation requiring the Past Simple).
6. **had revised** (Wish expressing regret over an unfulfilled past action requiring the Past Perfect).`
    }
  ]
};

export const LESSON_7_ANGLAIS_2NDE: LessonContent = {
  id: 'anglais-2nde-cours-07',
  title: 'Unit 7: Civic Education, Human Rights, and Child Protection',
  module: 'Deuxième Partie : Culture, Droits, Technologies et Carrières',
  level: 'Seconde (Séries L & S)',
  readTime: '70 min',
  description: 'Droits de l\'homme, citoyenneté responsable, protection de l\'enfance (travail des enfants, enfants de la rue, scolarisation des filles), grammaire intégrale des Modaux et Semi-Modaux (obligation, interdiction, déduction présente et passée must have/can\'t have), et élaboration de chartes citoyennes.',
  sections: [
    {
      title: 'I. Comprehensive Thematic Vocabulary: Civic Duty, Rights & Child Advocacy',
      content: `### 1. Human Rights, Civic Responsibility & Child Protection Word Bank

| English Term | Part of Speech | French Meaning | Detailed Sentence & Civic Context |
| :--- | :--- | :--- | :--- |
| **Abuse & Exploitation** | noun | Abus et exploitation | *Labor inspection laws strictly penalize the commercial exploitation of minors.* |
| **Child labor** | noun phr. | Travail des enfants | *Engaging children in hazardous brickfields or gold mines constitutes illegal child labor.* |
| **Civic responsibility** | noun phr. | Devoir / responsabilité civique| *Voting in national elections and paying taxes are fundamental civic responsibilities.* |
| **Convention on the Rights of the Child**| proper noun | Convention des droits de l'enfant| *Adopted by the United Nations in 1989, the CRC guarantees education and healthcare.* |
| **Domestic servitude** | noun phr. | Servitude domestique | *Underage housemaids (*petites bonnes*) must be liberated from domestic servitude.* |
| **Equal opportunities** | noun phr. | Égalité des chances | *Quality public education provides equal opportunities for all socioeconomic classes.* |
| **Freedom of expression** | noun phr. | Liberté d'expression | *A vibrant democracy protects freedom of expression and independent journalism.* |
| **Gender-based violence (GBV)**| noun phr. | Violences basées sur le genre | *Community clinics provide psychological counseling for survivors of gender-based violence.* |
| **Inalienable human rights**| noun phr. | Droits inaliénables | *The right to life, dignity, and bodily integrity are inalienable human rights.* |
| **Juvenile delinquency** | noun phr. | Délinquance juvénile | *Social work and vocational apprentice programs prevent juvenile delinquency.* |
| **Non-governmental organization (NGO)**| noun phr. | ONG | *Local NGOs advocate vigorously for the eradication of female genital mutilation.* |
| **Rule of law & Due process**| noun phr. | État de droit et justice | *An independent judiciary ensures the rule of law and due process for all citizens.* |
| **Street children (Talibés)** | noun phr. | Enfants de la rue / talibés | *National social programs seek to modernize Daaras to protect talibés from forced begging.* |
| **Universal suffrage** | noun phr. | Suffrage universel | *All adult Senegalese citizens exercise universal suffrage in transparent ballots.* |`
    },
    {
      title: 'II. Complete Grammar Study: Modals and Semi-Modals in Present and Past',
      content: `### 1. Overview of Modal Verbs Characteristics
Modal auxiliaries (*can, could, may, might, must, shall, should, will, would, ought to*):
1. **Never take an \`-s\`** in the third person singular (*He must*, not *He musts*).
2. Are followed directly by the **bare infinitive** (base form without "to", except *ought to* and semi-modals *have to, need to*).
3. Form negatives and questions **without the auxiliary do/does/did** (*Must you leave?*, not *Do you must leave?*).

---

### 2. Modals of Obligation, Necessity, and Prohibition
#### A. Obligation & Necessity
* **Must**: Expresses **internal moral obligation** felt by the speaker:
  * *I must work harder to succeed in my Baccalauréat.*
* **Have to**: Expresses **external obligation** imposed by rules, laws, or authority:
  * *All Senegalese citizens **have to** renew their national biometric ID card.*
  * In the past, *must* has no past form; we use **had to**:
    * *Yesterday, we **had to** attend a compulsory civic seminar.*
* **Should / Ought to**: Expresses **advice, recommendation, or moral duty**:
  * *Citizens **should** vote during legislative elections.*
  * *You **ought to** treat elderly people with deference.*

#### B. Absence of Obligation (Lack of Necessity)
* **Needn't / Don't have to / Don't need to** ("Il n'est pas nécessaire de", "Pas obligé"):
  * *Tomorrow is Sunday; we **don't have to** wake up at dawn for school.*
  * *You **needn't buy** that book; it is freely accessible in the school library.*
  * *Note*: Do not confuse with *Mustn't*!

#### C. Strict Prohibition ("Interdiction absolue")
* **Mustn't / May not / Cannot**:
  * *You **mustn't force** underage children to beg in the streets; it is strictly illegal.*
  * *Students **must not smoke** on the school premises.*

---

### 3. Modals of Deduction and Probability (Present & Past)
#### A. Present Deductions
* **Must (95% Certainty - Positive Deduction)**:
  * *Look at his lab coat and stethoscope; he **must be** a medical doctor.*
* **Can't / Couldn't (95% Certainty - Negative Impossibility)**:
  * *Cheikh **can't be** in Kaolack right now; I saw him studying in our classroom five minutes ago.*
* **May / Might / Could (50% Possibility / Uncertainty)**:
  * *The minister **may arrive** late because traffic in downtown Dakar is congested.*

#### B. Past Deductions (Modal Perfect: Modal + Have + Past Participle)
 begin{array}{|l|l|l|}
 hline
\**Structure** & \**Meaning / Communicative Value** & \**Example Sentence**   
 hline
\**Must have + V3** & \Almost certain that something happened &  textit{The streets are wet; it } \**must have rained**  textit{ last night.}   
 hline
\**Can't have + V3** & \Certain that something was impossible &  textit{Fatou } \**can't have stolen**  textit{ the money; she was in France.}   
 hline
\**May / Might have + V3** & \Possible that something occurred (uncertainty) &  textit{He } \**might have forgotten**  textit{ his keys at home.}   
 hline
\**Should have + V3** & \Criticism / Regret over a missed past duty &  textit{You } \**should have reported**  textit{ that child abuse to the police.}   
 hline
 end{array}`
    },
    {
      title: 'III. Reading Comprehension: "Protecting Child Rights: The Modernization of the Daaras"',
      content: `### 1. Reading Text
> The protection of children against economic exploitation and physical vulnerability constitutes an indispensable benchmark of a civilized, equitable society. In Senegal, traditional Quranic boarding schools (*Daaras*) have historically fulfilled a profound spiritual, educational, and cultural mission, instilling religious literacy, moral rectitude, and communal humility in generations of young learners. However, over the past several decades, uncontrolled urbanization and deep socio-economic distress have led to severe deviations within certain informal urban institutions.
>
> In major metropolitan hubs such as Dakar, Saint-Louis, and Thiès, thousands of young students—commonly referred to as *talibés*—can be observed roaming the congested streets under hazardous conditions. Deprived of formal elementary schooling and healthcare, these vulnerable children are frequently subjected to forced begging by exploitative masters who impose daily monetary quotas. Children who fail to deliver the mandated sums face harsh corporal punishment or psychological intimidation. They sleep in overcrowded, unsanitary squatting buildings, exposed to tropical diseases and street violence.
>
> In response to this humanitarian crisis, the Senegalese state, in close partnership with international bodies such as UNICEF and civil society organizations, has embarked on a comprehensive program to modernize the Daara system. Rather than abolishing these valued traditional institutions, the reform aims to harmonize religious instruction with formal modern education. Modernized Daaras incorporate standardized curricula teaching reading and writing in French, mathematics, vocational skills, and Arabic, alongside Quranic memorization.
>
> Concurrently, legislation prohibiting forced street begging has been strengthened, and social protection services have launched rescue and reintegration centers. Nevertheless, enduring solutions necessitate tackling the root drivers of the problem: extreme rural poverty, the absence of basic social safety nets, and lingering public complacency. Every child, regardless of birth status, possesses the inalienable right to bodily safety, intellectual nourishment, and a dignified childhood.

---

### 2. Reading Questions & Answers
* **What historical mission did the Daaras fulfill in Senegalese society?**
  * **Answer**: *They fulfilled an essential educational, moral, and spiritual role by teaching religious literacy, ethical values, and communal humility to young learners.*
* **What concrete changes are introduced by modernized Daaras?**
  * **Answer**: *They integrate formal academic subjects (French literacy, mathematics, vocational training) into the religious curriculum while guaranteeing safe housing, health monitoring, and the elimination of forced begging.*`
    },
    {
      title: 'IV. Practical Exercises & Detailed Answer Keys: Modals',
      content: `### 1. Modal Exercises
Choose the appropriate modal expression (*must, have to, mustn't, don't have to, should, must have, can't have, should have*):
1. *Drivers in Senegal .................... stop immediately when the traffic light turns red. (Legal obligation)*
2. *Tomorrow is a national public holiday; students .................... attend classes. (Absence of obligation)*
3. *You .................... hit or exploit children under any circumstances; it is an unforgivable offense. (Prohibition)*
4. *Look at the teacher's empty desk; she .................... (already / leave) for the staff meeting. (Past positive deduction)*
5. *Moussa was at home with his parents all evening; he .................... (commit) the robbery. (Past negative impossibility)*
6. *You failed your English exam because you watched television all night. You .................... (study) instead. (Past criticism/regret)*

---

### 2. Detailed Answer Key
1. **have to** (or **must**): Legal statutory obligation.
2. **don't have to** (or **needn't**): No obligation to go to school because of the holiday.
3. **mustn't** (or **must not**): Strict moral and legal prohibition.
4. **must have already left**: Logical deduction about a past completed fact.
5. **can't have committed**: Past impossibility based on an airtight alibi.
6. **should have studied**: Past regret/criticism of an action that ought to have been done.`
    }
  ]
};

export const LESSON_8_ANGLAIS_2NDE: LessonContent = {
  id: 'anglais-2nde-cours-08',
  title: 'Unit 8: Occupations, Entrepreneurship, and Career Pathways',
  module: 'Deuxième Partie : Culture, Droits, Technologies et Carrières',
  level: 'Seconde (Séries L & S)',
  readTime: '75 min',
  description: 'Le monde du travail au Sénégal (secteur formel vs informel, auto-emploi, entrepreneuriat des jeunes, compétences du XXIe siècle), grammaire intégrale du Discours Rapporté (Reported Speech: changements de temps, pronoms, adverbes, questions et ordres), et rédaction professionnelle (Curriculum Vitae et lettres de candidature).',
  sections: [
    {
      title: 'I. Comprehensive Thematic Vocabulary: Labor Market & Entrepreneurship',
      content: `### 1. Careers, Job Market & Professional Life Word Bank

| English Term | Part of Speech | French Meaning | Detailed Sentence & Career Context |
| :--- | :--- | :--- | :--- |
| **Apprenticeship & Intern** | noun | Apprentissage et stagiaire | *Vocational apprenticeships allow youths to acquire technical mechanics and carpentry skills.* |
| **Blue-collar vs. White-collar**| noun phr. | Ouvrier manuel vs. Cadre de bureau| *Blue-collar workers perform manual tasks, while white-collar professionals work in offices.* |
| **Cover letter / Letter of intent**| noun phr. | Lettre de motivation | *A compelling cover letter highlights how your qualifications align with the employer's needs.* |
| **Curriculum Vitae (CV) / Resume**| noun | Curriculum Vitae (CV) | *Your CV must clearly document your educational background and practical work experience.* |
| **Employability skills** | noun phr. | Compétences d'employabilité | *Communication, teamwork, and digital fluency are essential employability skills.* |
| **Entrepreneur / Startup** | noun | Entrepreneur et jeune pousse | *Innovative entrepreneurs launch tech startups in Dakar to address logistics challenges.* |
| **Informal economy** | noun phr. | Secteur informel | *In Senegal, the informal economy generates livelihoods for the majority of urban workers.* |
| **Job interview** | noun phr. | Entretien d'embauche | *Punctuality and self-confidence are decisive factors during a competitive job interview.* |
| **Microfinance institution** | noun phr. | Institution de microfinance | *Microfinance institutions provide seed capital to female cooperative entrepreneurs.* |
| **Promotion & Pay raise** | noun | Promotion et augmentation | *Exemplary dedication and continuous professional development earn workers a promotion.* |
| **Self-employment** | noun | Auto-emploi / travail indépendant| *With high youth unemployment, university graduates increasingly turn to self-employment.* |
| **Severance pay / Retirement** | noun | Indemnité de départ et retraite | *Senior employees receive pensions from the social security fund upon reaching retirement.* |
| **Unemployment rate** | noun phr. | Taux de chômage | *Government job creation policies strive to reduce the national youth unemployment rate.* |
| **Vocational training center**| noun phr. | Centre de formation professionnelle| *Vocational centers train certified plumbers, electricians, and solar panel technicians.* |`
    },
    {
      title: 'II. Complete Grammar Study: Reported Speech (Direct to Indirect Speech)',
      content: `### 1. General Principles of Reported Speech
When reporting statements, questions, or commands uttered by another person in the past, the grammatical tense in the subordinate clause undergoes a **systematic backward shift in time (Backshift)**, accompanied by adjustments in pronouns, possessives, and time/place adverbials.

---

### 2. Systematic Tense Backshift Chart
 begin{array}{|l|l|}
 hline
\**Direct Speech (Present Reporting)** & \**Reported Speech (Past Reporting Verb: Said, Told...)**   
 hline
\**Present Simple** & \**Past Simple**   
 textit{\"I study English every day.\"} &  textit{He said that he } \**studied**  textit{ English every day.}   
 hline
\**Present Continuous** & \**Past Continuous**   
 textit{\"We are preparing for our interview.\"} &  textit{They told me that they } \**were preparing**  textit{ for their interview.}   
 hline
\**Past Simple** & \**Past Perfect**   
 textit{\"Fatou founded a modern startup.\"} &  textit{He said that Fatou } \**had founded**  textit{ a modern startup.}   
 hline
\**Past Continuous** & \**Past Perfect Continuous**   
 textit{\"I was writing my cover letter.\"} &  textit{She said that she } \**had been writing**  textit{ her cover letter.}   
 hline
\**Present Perfect** & \**Past Perfect**   
 textit{\"The manager has hired two technicians.\"} &  textit{The secretary said that the manager } \**had hired**  textit{ two technicians.}   
 hline
\**Future Simple (will)** & \**Conditional Simple (would)**   
 textit{\"I will attend the job fair tomorrow.\"} &  textit{He affirmed that he } \**would attend**  textit{ the job fair the following day.}   
 hline
\**Can / May / Must** & \**Could / Might / Had to**   
 textit{\"You must submit your CV today.\"} &  textit{The recruiter told me that I } \**had to**  textit{ submit my CV that day.}   
 hline
 end{array}

*Note*: Modals like *could, would, should, might, ought to, had better* do not shift further into the past.

---

### 3. Shifts in Time and Place Adverbials & Demonstratives
* \`Now\` \→ \`Then\` / \`At that moment\`
* \`Today\` \→ \`That day\`
* \`Yesterday\` \→ \`The day before\` / \`The previous day\`
* \`Tomorrow\` \→ \`The next day\` / \`The following day\`
* \`Last week / month\` \→ \`The week / month before\`
* \`Next year\` \→ \`The following year\`
* \`Here\` \→ \`There\`
* \`This\` \→ \`That\`
* \`These\` \→ \`Those\`
* \`Ago\` \→ \`Before\` / \`Earlier\`

---

### 4. Reporting Questions
#### A. Wh- Questions (Information Questions)
* The reporting structure uses: \Subject + \**asked** + (\Object) + \**Wh-word** + \**Subject** + \**Verb (Affirmative Word Order)**.
* **Never use do/does/did** in reported questions; invert back to regular statement order:
  * Direct: *"Where do you live?" the interviewer asked.*
  * Reported: *The interviewer asked me **where I lived**.* (Not: *where did I live*).

#### B. Yes / No Questions
* Introduced using **if** or **whether**:
  * Direct: *"Have you ever worked in telecommunications?"*
  * Reported: *She inquired **if / whether I had ever worked** in telecommunications.*

---

### 5. Reporting Commands, Requests, and Advice
* **Affirmative Commands / Requests**: \Verb of command (ordered, told, asked, advised) + \Object + \**to + Base Verb**.
  * Direct: *"Submit your certificates immediately!" the director commanded.*
  * Reported: *The director ordered us **to submit our certificates** immediately.*
* **Negative Commands (Prohibitions)**: \Object + \**not   to + Base Verb**.
  * Direct: *"Do not be late for the aptitude interview!"*
  * Reported: *She warned him **not to be late** for the aptitude interview.*`
    },
    {
      title: 'III. Professional Writing Workshop: Formal Job Application Letter & Resume (CV)',
      content: `### 1. Structure of a Formal Job Application Letter
> **[Applicant's Full Name]**  
> Villa 142, Sacré-Cœur 3, Dakar, Senegal.  
> Email: babacar.sy@email.sn | Phone: +221 77 000 00 00  
>
> 18th November 2026  
>
> **The Human Resources Manager**,  
> Sonatel Senegal S.A., Boulevard de la République, Dakar.  
>
> **Dear Sir or Madam,** (or *Dear Mr. / Ms. [Last Name]* if known)  
>
> **Subject: Application for the Position of Junior Technical Assistant (Ref: JTA-2026)**  
>
> I am writing to express my enthusiastic interest in the Junior Technical Assistant position currently advertised on your official employment portal. Having recently completed my secondary studies in the scientific/literary stream with honors, I possess a strong foundation in digital tools and bilingual communication.  
>
> During my academic training, I developed robust competencies in computer hardware maintenance, customer assistance, and collaborative teamwork through my involvement in our school's ICT and English debate clubs. My fluency in both French and English allows me to interact professionally with diverse stakeholders and international clients. Furthermore, my dynamism, punctuality, and eager willingness to learn make me an adaptable candidate ready to contribute effectively to your esteemed organization.  
>
> Please find enclosed my detailed Curriculum Vitae for your perusal. I would welcome the opportunity to discuss my qualifications and motivation during a personal interview at your earliest convenience.  
>
> Thank you for considering my application.  
>
> **Yours faithfully,** (or *Yours sincerely*, if addressing a named individual)  
>
> *(Handwritten Signature)*  
>
> **Babacar Sy**  
> *Enclosure: Curriculum Vitae*

---

### 2. Standard High School / Entry-Level Curriculum Vitae (CV) Model
* **Personal Details**: Full name, address, contact numbers, email.
* **Objective / Profile**: A succinct 2-sentence summary of professional aspirations.
* **Education & Qualifications**: Reverse chronological order (most recent first):
  * *2026: Baccalauréat Candidate (Série L / S), Lycée Lamine Guèye, Dakar.*
  * *2023: Brevet de Fin d'Études Moyennes (BFEM), CEM Malick Sy, Thiès.*
* **Key Skills & Competencies**:
  * Languages: *French (Fluent), English (Upper-Intermediate), Wolof (Native).*
  * Technical Skills: *MS Office suite, Google Workspace, basic Python scripting.*
  * Soft Skills: *Public speaking, conflict mediation, leadership.*
* **Interests & Community Service**: Red Cross volunteering, school sports team captain.`
    },
    {
      title: 'IV. Practical Exercises & Detailed Answer Keys: Reported Speech',
      content: `### 1. Reported Speech Transformation Exercises
Turn each direct speech utterance into reported speech (using the past reporting verb indicated in brackets):
1. *\"I have been looking for an internship in Kaolack for two months,\" Mamadou said. (Mamadou said that...)*
2. *\"We will open a modern sewing workshop next week,\" the female entrepreneurs announced. (The entrepreneurs announced that...)*
3. *\"Why did you choose this technical career?\" the recruiter asked Aïssatou. (The recruiter asked Aïssatou...)*
4. *\"Can you speak fluent English with international tourists?\" the hotel manager inquired. (The manager inquired...)*
5. *\"Do not sign any work contract without reading every clause carefully!\" the trade unionist advised us. (The trade unionist advised us...)*

---

### 2. Detailed Answer Key & Explanations
1. **Mamadou said that he had been looking for an internship in Kaolack for two months.**
   *(Present Perfect Continuous \→ Past Perfect Continuous; \"I\" becomes \"he\").*
2. **The female entrepreneurs announced that they would open a modern sewing workshop the following week.**
   *(\"will\" becomes \"would\"; \"next week\" becomes \"the following week\").*
3. **The recruiter asked Aïssatou why she had chosen that technical career.**
   *(Wh-word retained; Past Simple \"did choose\" shifts to Past Perfect \"had chosen\"; question order reverts to subject + verb).*
4. **The hotel manager inquired if (or whether) I could speak fluent English with international tourists.**
   *(Yes/No question introduced by if/whether; \"can\" becomes \"could\").*
5. **The trade unionist advised us not to sign any work contract without reading every clause carefully.**
   *(Negative command reported with \"not to + base verb\").*`
    }
  ]
};

export const COURSES_ANGLAIS_2NDE_PART2: LessonContent[] = [
  LESSON_5_ANGLAIS_2NDE,
  LESSON_6_ANGLAIS_2NDE,
  LESSON_7_ANGLAIS_2NDE,
  LESSON_8_ANGLAIS_2NDE
];

export interface Anglais2ndePart {
  id: string;
  name: string;
  shortName: string;
  description: string;
  badge: string;
  count: number;
}

export const ANGLAIS_2NDE_PART2_MODULES: Anglais2ndePart[] = [
  {
    id: 'part2',
    name: 'Deuxième Partie : Technologies, Culture, Droits et Carrières (Units 5 - 8)',
    shortName: 'Partie 2 (Units 5-8)',
    description: 'Programme officiel complet : technologies et IA, patrimoine et tourisme au Sénégal, droits humains et enfance, monde du travail et entrepreneuriat.',
    badge: 'Units 5-8 • 4 Leçons exhaustives',
    count: 4
  }
];
