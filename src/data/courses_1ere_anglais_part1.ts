import { LessonContent } from './courses';

// =========================================================================
// MANUEL COMPLET D'ANGLAIS — PREMIÈRE (SÉRIES L & S)
// PARTIE 1 : UNITS 1 À 8 — LE SYSTÈME VERBAL & DÉTERMINANTS FONDAMENTAUX
// Leçons exhaustives sans résumé : Grandes Parties I à VII, Figures & Schémas SVG obligatoires
// =========================================================================

export const LESSON_1_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-01',
  title: 'Unit 1: The Simple Present — Habits, Universal Truths, Stative Rules & Practice',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '75 min',
  description: 'Morphologie de la 3e personne du singulier (-s, -es, -ies), auxiliaires do/does, valeur aspecto-temporelle, adverbes de fréquence, texte authentique sur l\'agriculture durable au Sénégal et exercices résolus.',
  image: {
    url: '',
    caption: 'Figure 1.1 : Schéma conceptuel du Simple Present — Ligne du temps, régularités cycliques et règles d\'accord de la 3e personne',
    alt: 'Schéma syntaxique et temporel du Simple Present',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">TIMELINE &amp; STRUCTURE : THE SIMPLE PRESENT TENSE</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Habits • General Truths • Timetables</text>
  <line x1="60" y1="95" x2="740" y2="95" stroke="#475569" stroke-width="4" stroke-dasharray="6 6"/>
  <line x1="400" y1="75" x2="400" y2="115" stroke="#38bdf8" stroke-width="4"/>
  <circle cx="400" cy="95" r="7" fill="#0284c7"/>
  <text x="400" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">PRESENT MOMENT (NOW)</text>
  <circle cx="160" cy="95" r="5" fill="#10b981"/><circle cx="280" cy="95" r="5" fill="#10b981"/><circle cx="520" cy="95" r="5" fill="#10b981"/><circle cx="640" cy="95" r="5" fill="#10b981"/>
  <path d="M 160 85 Q 220 60 280 85" fill="none" stroke="#10b981" stroke-width="2"/>
  <path d="M 280 85 Q 340 60 400 85" fill="none" stroke="#10b981" stroke-width="2"/>
  <path d="M 400 85 Q 460 60 520 85" fill="none" stroke="#10b981" stroke-width="2"/>
  <path d="M 520 85 Q 580 60 640 85" fill="none" stroke="#10b981" stroke-width="2"/>
  <rect x="40" y="140" width="220" height="75" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="50" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">General Rule (+s)</text>
  <text x="50" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">work → works / live → lives</text>
  <rect x="290" y="140" width="220" height="75" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
  <text x="300" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">Verbs in -ch, -sh, -ss, -x, -o (+es)</text>
  <text x="300" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">watch → watches (/ɪz/) / go → goes</text>
  <rect x="540" y="140" width="220" height="75" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="550" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">Consonant + y (→ -ies)</text>
  <text x="550" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">study → studies / try → tries</text>
</svg>`
  },
  introduction: `Le Present Simple (ou Simple Present) constitue la base absolue de la grammaire anglaise au lycée. Il s'emploie principalement lorsque l'énonciateur pose un fait comme permanent, une vérité scientifique, une coutume ou une habitude récurrente. Sa maîtrise parfaite élimine les erreurs récurrentes aux examens nationaux.`,
  sections: [
    {
      title: 'I. Morphologie & Règles Orthographiques Fondamentales',
      content: `À la forme affirmative, le verbe s'emploie à la base verbale nue avec tous les sujets, sauf à la 3e personne du singulier (*he, she, it*).

### 1. Règle Générale (+s)
* *I speak Wolof and French.* ──→ *He **speaks** English fluently.*
* *They build solar panels.* ──→ *She **builds** clean water pumps.*

### 2. Terminaisons en -ch, -sh, -ss, -x, -o (+es)
* *watch → watches*, *wash → washes*, *pass → passes*, *fix → fixes*, *go → goes*, *do → does*.

### 3. Verbes en -y
* **Consonne + y :** devient **-ies** (*study → studies*, *try → tries*, *carry → carries*).
* **Voyelle + y :** conserve le -y et ajoute simplement **-s** (*play → plays*, *enjoy → enjoys*).`
    },
    {
      title: 'II. Syntaxe : Formes Négative, Interrogative & Adverbes de Fréquence',
      content: `Le verbe lexical ne peut pas porter lui-même la négation ou l'inversion interrogative. Il fait appel à l'auxiliaire **DO** :

> **Structure Négative :** **Subject** + **do not (don't) / does not (doesn't)** + **Base Verbale**
* *She **doesn't work** on Sundays.* (Le verbe *work* perd impérativement son -s dès que *does* apparaît !).

> **Structure Interrogative :** **Do / Does** + **Subject** + **Base Verbale ?**
* *Do you live in Dakar?* ──→ *Yes, I do. / No, I don't.*
* *Where **does** your brother study engineering?*

### Place des Adverbes de Fréquence (always, usually, often, sometimes, rarely, never)
* **Avant le verbe lexical :** *He **always reads** scientific journals.*
* **Après l'auxiliaire BE :** *They are **often** punctual for class.*`
    },
    {
      title: 'III. Texte Intégral Authentique de Lecture (Non Résumé)',
      content: `*(Texte complet de lecture non résumé — Modèle d'entraînement au Baccalauréat)*

### Reading Passage : "Revitalizing Farming in the Senegalese Groundnut Basin"
Agriculture represents the economic and cultural backbone of rural communities across Senegal. In the central Groundnut Basin, encompassing regions like Kaolack, Fatick, and Diourbel, millions of smallholder farmers cultivate peanuts, millet, sorghum, and cowpeas to sustain their households and contribute to national food sovereignty.

Every year, when the dry season approaches its end in June, rural families diligently prepare their fields. Farmers clear the land, sort traditional seeds, and repair ploughs before the first raindrops fall. Demba Ndiaye, a fifty-two-year-old farmer living near Gossas, explains the rhythm of his daily life: "Our existence depends on patience and hard labor. I wake up at dawn every day, inspect my crops, and ensure that our irrigation channels remain unobstructed. My sons help me weed the plots, while my wife manages our poultry farm and sells fresh produce at the weekly community louma."

However, erratic rainfall patterns and soil degradation present continuous obstacles. To overcome these environmental constraints, local agricultural cooperatives now advocate sustainable agroecological techniques. Instead of relying solely on expensive synthetic fertilizers that damage soil biodiversity, Demba and his neighbors systematically incorporate compost, practise crop rotation, and plant indigenous acacia trees (such as Faidherbia albida) inside their fields. These remarkable trees fix atmospheric nitrogen into the soil and provide valuable fodder for livestock during drought periods.

Scientific studies conducted by national agronomic institutes confirm that agroforestry boosts crop yields by more than thirty percent while mitigating desertification. Moreover, rural women play a paramount role in food processing. They transform raw groundnuts into paste, oil, and roasted confectionery, thereby generating independent revenue and securing schooling fees for their children. Across the Sahel, sustainable farming demonstrates that ancestral wisdom combined with appropriate ecological science guarantees resilient rural futures.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Smallholder farmer** | noun | Petit exploitant agricole | *Smallholder farmers feed the nation.* |
| **Food sovereignty** | noun | Souveraineté alimentaire | *Senegal invests in rice food sovereignty.* |
| **Crop rotation** | noun | Rotation des cultures | *Crop rotation enriches soil biodiversity.* |
| **Soil degradation** | noun | Dégradation des sols | *Agroforestry stops soil degradation.* |
| **Mitigate** | verb | Atténuer / freiner | *Trees mitigate severe desertification.* |
| **Resilient** | adj. | Résilient / robuste | *Local crops prove resilient to heat.* |

### Questions de Compréhension
1. *Why is agriculture vital for Senegal according to paragraph 1?* ──→ It provides household livelihood and ensures food sovereignty.
2. *What agroecological methods does Demba apply?* ──→ Natural composting, crop rotation, and planting nitrogen-fixing acacia trees.
3. *What economic role do rural women perform?* ──→ They process raw groundnuts into valuable culinary products to finance their children's education.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Double marquage avec does :**
   * *Erreur :* ~~*Does she likes English?*~~
   * *Correction :* **Does she like English?**
2. **Oubli du -s à la 3e personne :**
   * *Erreur :* ~~*The government encourage youth agriculture.*~~
   * *Correction :* **The government encourages youth agriculture.**
3. **Confusion verbes d'état :**
   * *Erreur :* ~~*I am knowing the answer.*~~
   * *Correction :* **I know the answer.**`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Conjugate the verbs in brackets into the correct Simple Present form:
1. She *(manage)* an agro-business cooperative in Louga.
2. They *(not / import)* chemical pesticides anymore.
3. Why *(do)* your teacher *(emphasize)* environmental conservation?
4. The train to Thiès *(depart)* at precisely 08:30 a.m.

---

### Detailed Answer Key
1. *She **manages**...* (Ajout de -s régulier).
2. *They **do not import (don't import)**...* (Sujet pluriel + do not + base verbale).
3. *Why **does** your teacher **emphasize**...?* (Sujet singulier 'your teacher' ──→ does + base verbale).
4. *The train **departs**...* (Horaire officiel fixé ──→ Simple Present avec -s).`
    }
  ],
  conclusion: `Le Simple Present régit l'expression des régularités, des plannings et des vérités générales. La rigueur sur la 3e personne du singulier et l'usage de do/does garantit des points précieux au Baccalauréat.`
};

export const LESSON_2_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-02',
  title: 'Unit 2: The Present Continuous — Actions in Progress, Stative Verbs & Contrast',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '70 min',
  description: 'Formation de BE au présent + V-ing, règles orthographiques, verbes d\'état (stative verbs) refusant la forme continue, contraste fondamental avec le Simple Present et analyse d\'un texte sur la transition numérique.',
  image: {
    url: '',
    caption: 'Figure 1.2 : Schéma différentiel Present Continuous (aspect progressif) vs Simple Present (aspect neutre)',
    alt: 'Schéma syntaxique du Present Continuous et stative verbs',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#10b981">PRESENT CONTINUOUS (BE + V-ing) VS SIMPLE PRESENT</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Progressive Aspect • Actions in Progress • Stative Verbs</text>
  <rect x="50" y="70" width="330" height="75" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
  <text x="65" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#60a5fa">SIMPLE PRESENT : FACTUAL &amp; PERMANENT</text>
  <text x="65" y="117" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• She works in a national research lab.</text>
  <text x="65" y="133" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">(Permanent occupation / factual routine)</text>
  <rect x="420" y="70" width="330" height="75" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="435" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">PRESENT CONTINUOUS : IN PROGRESS / TEMPORARY</text>
  <text x="435" y="117" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• She is working on a vaccine prototype today.</text>
  <text x="435" y="133" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">(Ongoing activity right now / temporary state)</text>
  <rect x="50" y="160" width="700" height="60" rx="8" fill="#1e1e38" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="70" y="183" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#c084fc">CRITICAL EXAM TRAP : STATIVE VERBS (NEVER IN -ING !)</text>
  <text x="70" y="205" font-family="system-ui, sans-serif" font-size="10" fill="#e2e8f0">I know him well (NOT: I am knowing him) • She believes the news • This phone belongs to me</text>
</svg>`
  },
  introduction: `Le Present Continuous (ou Present Progressive) exprime une action en cours d'accomplissement au moment de la parole, une tendance temporaire ou un changement graduel. Son opposition avec le Simple Present et l'étude des verbes d'état (stative verbs) constituent des piliers de l'évaluation en Première.`,
  sections: [
    {
      title: 'I. Formation & Syntaxe du Present Continuous',
      content: `La structure associe l'auxiliaire **BE conjugué au présent** (*am, is, are*) suivi du **participe présent (verbe en -ing)** :

> **Structure Affirmative :** **Subject** + **am / is / are** + **Verb-ing**
* *I am reading an official scientific report.*
* *She is supervising a technological workshop.*
* *They are designing a solar microgrid in Matam.*

> **Structure Négative :** **Subject** + **am not / isn't / aren't** + **Verb-ing**
* *He isn't sleeping; he is studying his English vocabulary.*

> **Structure Interrogative :** **Am / Is / Are** + **Subject** + **Verb-ing ?**
* *Are you preparing for the regional academic competition?* ──→ *Yes, I am. / No, I am not.*`
    },
    {
      title: 'II. Règles d\'Orthographe de la Terminaison -ING & Verbes d\'État',
      content: `### 1. Orthographe du suffixe -ING
* **Règle générale :** Ajouter directement *-ing* (*work → working*, *learn → learning*).
* **Verbes en -e muet :** Supprimer le *-e* (*write → writing*, *make → making*).
* **Verbes C-V-C d'une syllabe :** Doubler la consonne finale (*run → running*, *stop → stopping*, *get → getting*).
* **Verbes en -ie :** Remplacer par *-y* + *-ing* (*die → dying*, *lie → lying*).

### 2. Les Verbes d'État (Stative Verbs)
Certains verbes expriment un état permanent, une cognition, une émotion ou une possession et ne s'emploient **normalement pas** à la forme continue :
* **Opinion / Pensée :** *know, understand, believe, think (= avoir une opinion), remember*
* **Sentiments :** *like, love, hate, prefer, want, need*
* **Possession :** *belong, have (= posséder), own, possess*
* **Perception :** *seem, appear, hear, see*`
    },
    {
      title: 'III. Texte Intégral Authentique : The Digital Revolution in West Africa',
      content: `*(Texte complet de lecture non résumé)*

### Reading Passage : "Digital Leapfrogging in West African Schools"
At this very moment, a quiet transformation is unfolding throughout classrooms across West Africa. In secondary schools from Dakar to Ziguinchor, students and teachers are embracing digital education tools with unprecedented enthusiasm. Tablets, interactive projectors, and open-source educational software are gradually supplementing traditional chalkboards, opening fresh horizons for ambitious learners.

At Lycée Seydina Limamou Laye in Guédiawaye, the senior science class is currently conducting an interactive biology simulation. Instead of merely memorizing diagrams from old textbooks, students are examining high-resolution three-dimensional models of human cellular structures on networked computer screens. Mr. Babacar Faye, a dedicated physics instructor, observes the shift: "Right now, my students are collaborating in small groups, testing virtual electric circuits, and debating scientific hypotheses. They are not simply absorbing passive data; they are actively developing problem-solving skills that global engineering universities value immensely."

Furthermore, modern mobile learning platforms are bridging geographic disparities. Rural teenagers who once struggled with scarce library resources are currently accessing national curriculum modules and past Baccalaureate exam papers via low-bandwidth mobile applications. Telecom operators are partnering with the Ministry of National Education to provide zero-rated educational data packages, ensuring that financial constraints do not derail talented students.

Nevertheless, educational analysts emphasize that technological hardware alone cannot replace inspiring pedagogues. While digital gadgets are enriching classroom experiences, rigorous discipline, analytical writing, and teacher guidance remain the true pillars of academic distinction. As Senegal advances toward its national digital emergence, technology is serving as an empowering catalyst for human intellect.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Unprecedented** | adj. | Sans précédent | *The youth show unprecedented creativity.* |
| **Supplement** | verb | Compléter / enrichir | *Tablets supplement paper manuals.* |
| **Disparity** | noun | Disparité / écart | *E-learning reduces regional disparities.* |
| **Zero-rated** | adj. | Gratuit (sans consommation data) | *Educational sites are zero-rated.* |
| **Catalyst** | noun | Catalyseur / accélérateur | *Innovation is a catalyst for growth.* |

### Questions d'Analyse
1. *What specific activity are pupils doing at Lycée Seydina Limamou Laye?* ──→ They are testing virtual circuits and analyzing 3D cellular models on screens.
2. *How do telecom partnerships support disadvantaged rural learners?* ──→ By offering zero-rated data access to official curriculum platforms.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Emploi fautif de stative verbs en -ing :**
   * *Erreur :* ~~*I am believing that education is essential.*~~
   * *Correction :* **I believe that education is essential.**
2. **Oubli de l'auxiliaire BE :**
   * *Erreur :* ~~*They working on the project right now.*~~
   * *Correction :* **They are working on the project right now.**`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Choose between Simple Present and Present Continuous:
1. Listen! The principal *(speak)* to the student assembly.
2. She *(belong)* to the scientific youth association of Dakar.
3. Every Sunday, we *(clean)* our neighborhood public spaces.
4. At present, African engineers *(build)* the Great Green Wall.

---

### Detailed Answer Key
1. *Listen! The principal **is speaking**...* (Événement en cours audible en ce moment).
2. *She **belongs**...* (Verbe d'état 'belong' ──→ Simple Present obligatoire).
3. *Every Sunday, we **clean**...* (Habitude hebdomadaire ──→ Simple Present).
4. *At present, African engineers **are building**...* (Processus contemporain en cours ──→ Present Continuous).`
    }
  ],
  conclusion: `La nuance fondamentale entre le Simple Present (permanent, général) et le Present Continuous (temporaire, en cours) constitue un repère méthodologique incontournable pour l'expression écrite et les épreuves de grammaire.`
};

export const LESSON_3_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-03',
  title: 'Unit 3: The Simple Past — Finished Events, Regular & Irregular Verbs, -ed Phonetics',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '80 min',
  description: 'Le prétérit simple pour relater des faits révolus et datés. Étude des verbes réguliers et irréguliers, phonétique des trois prononciations de la terminaison -ed (/t/, /d/, /ɪd/), marqueurs temporels du passé et texte historique sur Cheikh Anta Diop.',
  image: {
    url: '',
    caption: 'Figure 1.3 : Ligne temporelle du Simple Past (action close et datée) et phonétique de la désinence -ed',
    alt: 'Schéma syntaxique et phonétique du Simple Past',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ef4444">THE SIMPLE PAST TENSE (PRÉTÉRIT) &amp; PHONETICS OF -ED</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Completed Past Events • Cut Off From The Present</text>
  <line x1="60" y1="85" x2="740" y2="85" stroke="#475569" stroke-width="4"/>
  <circle cx="220" cy="85" r="9" fill="#ef4444"/>
  <text x="220" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">PAST EVENT (COMPLETED)</text>
  <text x="220" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">yesterday • in 1960 • 5 years ago</text>
  <line x1="600" y1="65" x2="600" y2="105" stroke="#38bdf8" stroke-width="4"/>
  <circle cx="600" cy="85" r="7" fill="#0284c7"/>
  <text x="600" y="55" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">NOW (PRESENT)</text>
  <rect x="40" y="135" width="220" height="85" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="50" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">Pronunciation: /t/</text>
  <text x="50" y="175" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">After voiceless: /p, k, f, s, ʃ, tʃ/</text>
  <text x="50" y="193" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">helped, worked, watched</text>
  <rect x="290" y="135" width="220" height="85" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="300" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">Pronunciation: /d/</text>
  <text x="300" y="175" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">After voiced sounds &amp; vowels</text>
  <text x="300" y="193" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">lived, played, cleaned</text>
  <rect x="540" y="135" width="220" height="85" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
  <text x="550" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">Pronunciation: /ɪd/</text>
  <text x="550" y="175" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">After sounds /t/ or /d/ only</text>
  <text x="550" y="193" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">started, wanted, decided</text>
</svg>`
  },
  introduction: `Le Simple Past (prétérit simple) est le temps du récit par excellence. Il exprime des actions révolues, ancrées dans un passé défini et déconnectées du présent. Sa maîtrise requiert l'apprentissage des verbes irréguliers et des règles phonétiques de la désinence -ed.`,
  sections: [
    {
      title: 'I. Formation des Verbes Réguliers & Irréguliers',
      content: `### 1. Verbes Réguliers (+ed)
* Règle générale : *Base Verbale + ed* (*work → worked*, *visit → visited*).
* Verbes en -e : *live → lived*, *create → created*.
* Consonne + y : *study → studied*, *cry → cried*.
* Voyelle + y : *play → played*, *stay → stayed*.
* C-V-C d'une syllabe : *stop → stopped*, *plan → planned*.

### 2. Verbes Irréguliers Majeurs (V2)
| Base Verbale | Simple Past (V2) | Past Participle (V3) | Signification |
| :--- | :--- | :--- | :--- |
| **be** | was / were | been | être |
| **build** | built | built | construire |
| **buy** | bought | bought | acheter |
| **do** | did | done | faire |
| **find** | found | found | trouver |
| **give** | gave | given | donner |
| **go** | went | gone | aller |
| **see** | saw | seen | voir |
| **write** | wrote | written | écrire |`
    },
    {
      title: 'II. Syntaxe avec DID & Phonétique de -ED',
      content: `### 1. Syntaxe Négative et Interrogative
> **Négatif :** **Subject** + **did not (didn't)** + **Base Verbale**
* *She didn't visit Gorée yesterday.* (JAMAIS : ~~*She didn't visited*~~).

> **Interrogatif :** **Did** + **Subject** + **Base Verbale ?**
* *Did you meet the director last week?* ──→ *Yes, I did. / No, I didn't.*

### 2. Les Trois Prononciations de la Désinence -ED
1. **/t/ :** après consonnes sourdes (/p, k, f, s, ʃ, tʃ/) ──→ *helped, worked, laughed, washed, watched*.
2. **/d/ :** après consonnes sonores et voyelles ──→ *lived, played, cleaned, called, enjoyed*.
3. **/ɪd/ :** exclusivement après les sons /t/ ou /d/ ──→ *started, wanted, decided, divided*.`
    },
    {
      title: 'III. Texte Intégral Authentique : Professor Cheikh Anta Diop',
      content: `*(Texte complet de lecture non résumé)*

### Reading Passage : "The Scientific Legacy of Cheikh Anta Diop (1923–1986)"
In the middle decades of the twentieth century, African historiography underwent a profound scientific revolution that forever altered the global understanding of human civilization. At the vanguard of this intellectual renaissance stood Professor Cheikh Anta Diop, a visionary Senegalese physicist, historian, anthropologist, and linguist whose groundbreaking multidisciplinary research restored Africa's central place in world history.

Born in 1923 in Thieytou, near Bambey, Diop demonstrated an exceptional passion for scientific inquiry and classical learning from an early age. In 1946, he travelled to Paris to pursue advanced studies in physics, chemistry, philosophy, and Egyptology at the Sorbonne. During his years in France, he refused to accept the biased colonial narratives that portrayed the African continent as an ahistorical vacuum devoid of intellectual achievement. Instead, Diop applied rigorous radiological carbon-14 dating techniques and comparative linguistics to establish the Black African origins of ancient Egyptian civilization.

In 1954, Diop published his seminal doctoral thesis, "Nations nègres et culture", which shook the international academic establishment to its foundations. He proved through anatomical, cultural, and linguistic evidence that the ancient pharaohs shared genetic, spiritual, and artistic affinities with modern African populations. After returning to independent Senegal, Diop established the first radiocarbon dating laboratory in sub-Saharan Africa at the Fundamental Institute of Black Africa (IFAN) in Dakar.

Until his death in February 1986, Professor Diop tirelessly advocated for the cultural re-enracinement of African youth and championed the urgent political unification of African democratic states. Today, Cheikh Anta Diop University in Dakar proudly bears his name, perpetuating his enduring call for scientific rigor, intellectual sovereignty, and unconditional cultural dignity.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Vanguard** | noun | Avant-garde | *Diop was at the vanguard of African science.* |
| **Groundbreaking** | adj. | Révolutionnaire / novateur | *He published groundbreaking studies.* |
| **Seminal** | adj. | Fondateur / capital | *His book is a seminal masterpiece.* |
| **Affinity** | noun | Affinité / parenté | *Linguistic affinities link Wolof and ancient Egyptian.* |
| **Sovereignty** | noun | Souveraineté | *True progress requires intellectual sovereignty.* |

### Questions de Compréhension
1. *What modern scientific method did Diop introduce to African archaeology?* ──→ Radiocarbon-14 dating.
2. *What central thesis did he prove in 'Nations nègres et culture'?* ──→ The Black African origin and cultural legacy of ancient Egypt.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Conserver le prétérit après did :**
   * *Erreur :* ~~*Did he went to Saint-Louis?*~~
   * *Correction :* **Did he go to Saint-Louis?**
2. **Mauvaise prononciation de -ed :**
   * Prononcer /ɪd/ sur *worked* ou *helped* (au lieu de /t/).`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Conjugate into the Simple Past:
1. In 1960, Senegal *(proclaim)* national sovereignty.
2. The scientists *(not / find)* any contradiction in Diop's linguistic demonstrations.
3. Where *(did)* they *(build)* the first radiocarbon laboratory in West Africa?

---

### Detailed Answer Key
1. *In 1960, Senegal **proclaimed**...* (Verbe régulier).
2. *The scientists **did not find (didn't find)**...* (Négation avec did not + base verbale).
3. *Where **did** they **build**...?* (Inversion Did + Sujet + base verbale build).`
    }
  ],
  conclusion: `Le Simple Past exige la rigueur absolue sur les verbes irréguliers, le maniement de l'auxiliaire DID et la discrimination phonétique des trois sons de la désinence -ed.`
};

export const LESSON_4_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-04',
  title: 'Unit 4: The Present Perfect — Linking Past Actions to the Present (Since, For, Already, Yet)',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '80 min',
  description: 'Le Present Perfect Simple et Continuous : formation avec HAVE/HAS + V3, le pont sémantique entre passé et présent, distinction nette entre SINCE (point de départ) et FOR (durée), adverbes associés (already, yet, just, ever) et texte sur les énergies renouvelables.',
  image: {
    url: '',
    caption: 'Figure 1.4 : Le pont sémantique du Present Perfect (action passée avec conséquence présente) et SINCE vs FOR',
    alt: 'Schéma syntaxique du Present Perfect et marqueurs de durée',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#6366f1">THE PRESENT PERFECT : BRIDGE FROM PAST TO PRESENT</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">HAVE/HAS + V3 • Life Experience • Since vs For</text>
  <path d="M 120 115 C 260 45, 480 45, 640 115" fill="none" stroke="#818cf8" stroke-width="4" stroke-dasharray="4 4"/>
  <circle cx="120" cy="115" r="7" fill="#ef4444"/>
  <text x="120" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">PAST ACTION</text>
  <circle cx="640" cy="115" r="7" fill="#10b981"/>
  <text x="640" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">PRESENT RESULT</text>
  <text x="380" y="60" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#a5b4fc">"I have lost my key" ──→ (I cannot enter the room NOW)</text>
  <rect x="40" y="165" width="345" height="55" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="55" y="185" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">SINCE + Starting Point (Point de départ)</text>
  <text x="55" y="205" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">since 2018 • since Monday • since he graduated</text>
  <rect x="415" y="165" width="345" height="55" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="430" y="185" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">FOR + Duration (Période chiffrée)</text>
  <text x="430" y="205" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">for six years • for three hours • for a long time</text>
</svg>`
  },
  introduction: `Le Present Perfect n'a pas d'équivalent exact en français. Bien que traduit souvent par un passé composé, il exprime un lien vital avec le moment présent : soit parce que le résultat de l'action est directement visible, soit parce que la période de temps n'est pas achevée, soit pour faire le bilan d'une expérience de vie.`,
  sections: [
    {
      title: 'I. Formation & Syntaxe du Present Perfect',
      content: `> **Structure Affirmative :** **Subject** + **have / has** + **Past Participle (V3)**
* *I have completed my laboratory report.*
* *She **has invested** in clean solar energy.*

> **Structure Négative :** **Subject** + **have not (haven't) / has not (hasn't)** + **Past Participle (V3)**
* *They **haven't received** the examination schedule yet.*

> **Structure Interrogative :** **Have / Has** + **Subject** + **Past Participle (V3) ?**
* *Have you ever visited the Niokolo-Koba National Park?* ──→ *Yes, I have. / No, I haven't.*`
    },
    {
      title: 'II. Marqueurs Temporels Clés : SINCE vs. FOR, ALREADY, JUST, YET',
      content: `### 1. SINCE vs FOR
* **SINCE + Point de départ précis dans le passé :**
  * *He has lived in Dakar **since 2015**.*
  * *We have studied English **since 8:00 a.m.***
* **FOR + Durée globale quantifiée :**
  * *She has worked in this hospital **for ten years**.*
  * *They have waited for the bus **for forty minutes**.*

### 2. Adverbes Spécifiques
* **JUST (vient de) :** entre l'auxiliaire et le participe : *The minister has **just** arrived.*
* **ALREADY (déjà) :** *I have **already** finished my homework.*
* **YET (pas encore / déjà en question) :** en fin de phrase : *Has the doctor arrived **yet**? No, he hasn't arrived **yet**.*
* **EVER / NEVER :** pour le bilan d'expérience : *Have you **ever** flown in an airplane? I have **never** seen a lion.*`
    },
    {
      title: 'III. Texte Intégral Authentique : Senegal\'s Solar Energy Leap',
      content: `*(Texte complet de lecture non résumé)*

### Reading Passage : "Harnessing the Sun: Senegal's Clean Energy Revolution"
Over the past decade, the Republic of Senegal has emerged as one of the undisputed leaders in Africa's clean energy transition. Confronted with the volatile costs of imported heavy fuels and the urgent imperative to reduce national carbon emissions, the Senegalese government has implemented an ambitious green power strategy that has transformed the national electricity grid.

Since the inauguration of the landmark Senergy II solar photovoltaic power plant in Bokhol in 2016, several major utility-scale solar facilities have commenced operations across the country. Solar farms in Malicounda, Kahone, Touba, and Sakal have collectively injected hundreds of megawatts of clean, reliable electricity into the national power network managed by Senelec. Today, renewable sources account for more than thirty percent of Senegal's total energy capacity, representing an extraordinary environmental and industrial achievement.

"We have been operating this facility for five years without a single major interruption," explains Aïssatou Ba, a senior electrical engineer stationed at the Kahone solar park. "Our teams have acquired advanced technical skills in solar array maintenance, high-voltage battery storage, and inverter monitoring. Senegal has shown the world that developing nations do not need to follow polluting twentieth-century pathways to achieve industrial prosperity."

Moreover, rural electrification through decentralized solar micro-grids has dramatically improved living conditions for isolated populations. Off-grid villages in the Matam and Tambacounda regions have gained access to domestic lighting, solar-powered water boreholes, and refrigeration for health clinics. Consequently, maternal healthcare outcomes have improved, while pupils can study their lessons after sunset without relying on dangerous kerosene lamps. Senegal's solar revolution proves that visionary policy and ecological stewardship can harmonize to uplift human communities.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Undisputed** | adj. | Incontesté | *Senegal is an undisputed green leader.* |
| **Utility-scale** | adj. | À échelle industrielle | *Utility-scale solar farms provide megawatts.* |
| **Decentralized** | adj. | Décentralisé | *Decentralized microgrids power villages.* |
| **Stewardship** | noun | Gestion responsable | *Ecological stewardship protects our earth.* |
| **Interruption** | noun | Panne / coupure | *The plant operates without interruption.* |

### Questions de Compréhension
1. *What percentage of clean energy has Senegal achieved in its power mix?* ──→ Over thirty percent.
2. *How has decentralized solar power benefited rural education and health?* ──→ Pupils can study at night and health clinics can refrigerate vaccines safely.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Emploi du Present Perfect avec une date révolue :**
   * *Erreur :* ~~*I have seen him yesterday.*~~
   * *Correction :* **I saw him yesterday.** (Yesterday impose le Simple Past !).
2. **Confusion entre SINCE et FOR :**
   * *Erreur :* ~~*He has taught here since five years.*~~
   * *Correction :* **He has taught here for five years.**`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Fill in the blanks with SINCE or FOR, then conjugate the verb in the Present Perfect:
1. Senegal *(develop)* solar farms *(since / for)* 2016.
2. The technician *(work)* on this solar turbine *(since / for)* three hours.
3. They *(not / finish)* the installation *(already / yet)*.

---

### Detailed Answer Key
1. *Senegal **has developed** solar farms **since** 2016.* (Date précise de départ ──→ since).
2. *The technician **has worked** on this solar turbine **for** three hours.* (Durée chiffrée ──→ for).
3. *They **have not finished (haven't finished)** the installation **yet**.* (Fin de phrase négative ──→ yet).`
    }
  ],
  conclusion: `Le Present Perfect constitue le pivot entre l'action passée et sa pertinence présente. La rigueur sur le choix entre SINCE et FOR et l'exclusion des dates révolues garantit la réussite aux examens.`
};

export const LESSON_5_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-05',
  title: 'Unit 5: Past Continuous and Past Perfect — Narrative Chronology & Event Interaction',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '75 min',
  description: 'Combinaison des trois temps du passé dans le récit : Past Continuous pour l\'action en cours interrompue (while/when), Past Perfect pour l\'antériorité absolue (had + V3) et Simple Past pour les actions principales.',
  image: {
    url: '',
    caption: 'Figure 1.5 : Chronologie narrative du passé — Past Continuous (déroulement) et Past Perfect (antériorité)',
    alt: 'Schéma narratif du passé',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f59e0b">PAST NARRATIVE TIMELINE : PAST PERFECT &amp; PAST CONTINUOUS</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Action 1 (Anteriority) • Ongoing Action • Interruption</text>
  <line x1="50" y1="110" x2="750" y2="110" stroke="#475569" stroke-width="4"/>
  <circle cx="150" cy="110" r="8" fill="#8b5cf6"/>
  <text x="150" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#a78bfa">ACTION 1 : PAST PERFECT</text>
  <text x="150" y="135" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">had + V3 (Before another past action)</text>
  <rect x="300" y="98" width="220" height="24" rx="6" fill="#3b82f6" opacity="0.6"/>
  <text x="410" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#93c5fd">While he was writing his exam...</text>
  <line x1="420" y1="80" x2="420" y2="125" stroke="#ef4444" stroke-width="3"/>
  <circle cx="420" cy="110" r="6" fill="#ef4444"/>
  <text x="420" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">...the bell rang (Simple Past)</text>
  <line x1="680" y1="90" x2="680" y2="130" stroke="#38bdf8" stroke-width="4"/>
  <circle cx="680" cy="110" r="7" fill="#0284c7"/>
  <text x="680" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">PRESENT (NOW)</text>
  <rect x="50" y="165" width="700" height="55" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
  <text x="70" y="187" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">NARRATIVE GOLDEN RULE :</text>
  <text x="70" y="207" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">When we arrived at the station (Action 2), the train had already departed (Action 1 = Past Perfect).</text>
</svg>`
  },
  introduction: `Dans la narration élaborée, le Simple Past ne suffit pas à rendre compte de la complexité temporelle. Le Past Continuous décrit les décors et les actions en cours d'accomplissement dans le passé, tandis que le Past Perfect établit l'antériorité d'une action par rapport à une autre.`,
  sections: [
    {
      title: 'I. Le Past Continuous : Formation et Emploi d\'Arrière-Plan',
      content: `> **Structure :** **Subject** + **was / were** + **Verb-ing**
* *While the teacher **was explaining** the physics formula, the electricity went out.*
* *At 10:00 p.m. last night, I **was revising** my historical dates.*

### Les Mots Déclencheurs : WHILE et WHEN
* **WHILE + Past Continuous :** pour l'action longue en déroulement :
  * *While they **were travelling** to Ziguinchor, it rained heavily.*
* **WHEN + Simple Past :** pour l'action courte et ponctuelle qui interrompt :
  * *I was walking near the beach **when I met** an old classmate.*`
    },
    {
      title: 'II. Le Past Perfect : L\'Antériorité Absolue dans le Passé',
      content: `> **Structure :** **Subject** + **had** + **Past Participle (V3)**
Le Past Perfect (le plus-que-parfait) s'emploie lorsqu'on évoque un événement antérieur à un repère déjà passé :
* *Action 1 (la plus ancienne) :* The train had left.
* *Action 2 (la plus récente) :* We arrived at the station.
* ──→ *When we arrived at the station, the train **had already left**.*`
    },
    {
      title: 'III. Texte Intégral Authentique : An Unforgettable Journey to Saint-Louis',
      content: `*(Texte narratif complet non résumé)*

### Reading Passage : "Storm over the Senegal River"
The morning sun was rising gently over the colonial facades of Saint-Louis when the regional passenger boat departed from the northern quay. Captain Amadou Wade, an experienced navigator who had sailed along the Senegal River for more than three decades, inspected the river currents with customary vigilance. The passengers were conversing cheerfully on the upper deck, admiring the migratory pelicans nesting in the mangrove swamps of the Langue de Barbarie.

By mid-afternoon, however, the meteorological conditions shifted dramatically. Dark, ominous thunderclouds were gathering along the eastern horizon. While the passengers were eating their lunch, violent wind gusts began to batter the vessel's hull. Captain Wade immediately realized that an unexpected tropical squall was approaching. Before the passengers could panic, the crew had secured all cargo hatches and distributed life vests.

Suddenly, a lightning bolt struck a towering baobab tree on the riverbank, accompanied by a deafening clap of thunder. The rain was pouring down in torrential sheets, completely blinding the helmsman. Fortunately, because Captain Wade had rehearsed emergency maneuvers countless times with his sailors, the crew kept their composure. They guided the boat into a sheltered inlet near Dagana until the storm had completely dissipated.

When the passengers finally reached their destination that evening, they applauded the captain's exemplary seamanship. They had experienced the raw power of African nature, but disciplined training had brought them safely ashore.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Ominous** | adj. | Menaçant / de mauvais augure | *Ominous clouds gathered quickly.* |
| **Squall** | noun | Bourrasque / grain violent | *A tropical squall hit the boat.* |
| **Composure** | noun | Sang-froid / sérénité | *The captain kept his composure.* |
| **Dissipate** | verb | Se dissiper | *The heavy storm had dissipated.* |
| **Seamanship** | noun | Compétence maritime | *His seamanship saved the crew.* |

### Questions de Compréhension
1. *What were the passengers doing when the wind gusts began to hit the boat?* ──→ They were eating their lunch on deck.
2. *Why was Captain Wade able to save the boat during the squall?* ──→ Because he had rehearsed emergency maneuvers many times and kept his composure.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Inversion de l'ordre temporel avec when/before :**
   * *Erreur :* ~~*When the film started, we had arrived.*~~ (Si on était déjà là, c'est l'arrivée qui est en Past Perfect).
   * *Correction :* **When we arrived, the film had already started.**
2. **Confusion entre Past Continuous et Simple Past :**
   * *Erreur :* ~~*While I walked, I saw an accident.*~~
   * *Correction :* **While I was walking, I saw an accident.**`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Conjugate into the Past Continuous or Past Perfect:
1. When the fire brigade arrived, the villagers *(already / put out)* the fire.
2. While Fatou *(read)* her history lesson, her brother knocked at the door.
3. She did not know the result because she *(not / check)* the website.

---

### Detailed Answer Key
1. *...the villagers **had already put out** the fire.* (Action 1 antérieure ──→ Past Perfect).
2. *While Fatou **was reading**...* (Action en cours d'accomplissement ──→ Past Continuous).
3. *...because she **had not checked (hadn't checked)** the website.* (Antériorité causale ──→ Past Perfect).`
    }
  ],
  conclusion: `Le Past Continuous installe le décor et la durée, le Simple Past déclenche l'événement ponctuel et le Past Perfect apporte la perspective historique indispensable aux dissertations et narrations.`
};

export const LESSON_6_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-06',
  title: 'Unit 6: Future Forms — Will, Be Going To, Present Continuous, Future Perfect',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '75 min',
  description: 'Panorama complet des futurs anglais : Will (décision spontanée, prédiction), Be Going To (intention, preuve physique), Present Continuous (rendez-vous fixé) et Future Perfect (will have + V3). Règle d\'or des subordonnées temporelles (When + Present).',
  image: {
    url: '',
    caption: 'Figure 1.6 : Le spectre des futurs anglais — Will, Be Going To, Present Continuous et Future Perfect',
    alt: 'Schéma syntaxique des formes du futur',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#06b6d4">THE SPECTRUM OF ENGLISH FUTURE FORMS</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Prediction • Prior Intention • Scheduled Event • Completion</text>
  <rect x="40" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="50" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">WILL + Base Verb</text>
  <text x="50" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• Spontaneous decision</text>
  <text x="50" y="128" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• General prediction</text>
  <text x="50" y="148" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">"I will help you with that bag!"</text>
  <rect x="225" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="235" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">BE GOING TO + V</text>
  <text x="235" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• Premeditated intention</text>
  <text x="235" y="128" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• Obvious physical proof</text>
  <text x="235" y="148" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">"Look at dark clouds: it is going to rain!"</text>
  <rect x="410" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
  <text x="420" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">PRESENT CONTINUOUS</text>
  <text x="420" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• Fixed arrangement</text>
  <text x="420" y="128" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• Diary reservation</text>
  <text x="420" y="148" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">"I am meeting the doctor tomorrow at 3."</text>
  <rect x="595" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="605" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">FUTURE PERFECT</text>
  <text x="605" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• will have + V3</text>
  <text x="605" y="128" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• Completed before deadline</text>
  <text x="605" y="148" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">"By 2030, we will have graduated."</text>
</svg>`
  },
  introduction: `La langue anglaise ne possède pas de temps futur morphologique unique, mais un éventail d'expressions modales et aspectuelles choisies selon l'attitude de l'énonciateur : décision spontanée, prédiction, intention préméditée, organisation programmée ou accomplissement antérieur à une échéance.`,
  sections: [
    {
      title: 'I. Comparatif des Quatre Formes Majeures du Futur',
      content: `### 1. WILL + Base Verbale
* **Décision spontanée prise à l'instant :** *The phone is ringing. I will answer it.*
* **Prédiction générale sur l'avenir :** *Artificial intelligence will transform healthcare in Africa.*
* **Promesses et refus :** *I will never disclose your confidential password.*

### 2. BE GOING TO + Base Verbale
* **Intention ou projet déjà mûri :** *I am going to study renewable energy in Saint-Louis next autumn.*
* **Prédiction fondée sur un indice physique immédiat :** *Look at those dark clouds! It is going to rain.*

### 3. PRESENT CONTINUOUS (Sens de Futur)
* **Arrangement personnel ferme et calendrier arrêté :** *We are flying to Abidjan tomorrow at 9 a.m.*

### 4. FUTURE PERFECT (will have + V3)
* **Action qui sera accomplie avant une échéance future :**
  > **Structure :** **Subject** + **will have** + **Past Participle (V3)**
  * *By next July, candidates **will have passed** their national Baccalaureate.*`
    },
    {
      title: 'II. La Règle d\'Or des Subordonnées Temporelles au Futur',
      content: `C'est la règle d'or la plus testée au Baccalauréat sénégalais :
* **Interdiction stricte d'employer WILL dans une subordonnée de temps !**
* Après : **WHEN, AS SOON AS, BEFORE, AFTER, UNTIL, BY THE TIME** :
  > **Structure :** **Conjonction temporelle** + **Simple Present** ──→ **Proposition principale avec WILL**
* *Exemple :* *When the rain **stops** (Simple Present), we **will play** soccer.* (JAMAIS : ~~*When the rain will stop*~~).
* *Exemple :* *As soon as the results **are published**, we **will celebrate**.*`
    },
    {
      title: 'III. Texte Intégral Authentique : The Vision of Diamniadio Smart City',
      content: `*(Texte complet de lecture non résumé)*

### Reading Passage : "Building the Future: The Emergence of Diamniadio"
Thirty kilometres outside the congested peninsula of Dakar, a futuristic urban center is rising from the baobab plains of Diamniadio. Conceived as a strategic hub to relieve demographic congestion and catalyze industrial modernization, Diamniadio represents Senegal's boldest urban planning initiative since national independence.

Within the next decade, urban planners project that more than three hundred thousand residents will live and work in this state-of-the-art eco-city. High-speed electric express trains already connect downtown Dakar to the regional train station in less than forty minutes. Digital technology parks, biotechnology research institutes, ministerial headquarters, and international conference complexes are rapidly taking shape.

"By 2030, our national technological innovators will have developed indigenous software solutions capable of managing municipal energy grids, automated waste recycling, and intelligent public transit," declares Aminata Fall, an urban architect working on the master project. "We are not merely constructing concrete towers; we are designing a sustainable green ecosystem powered by rooftop solar installations and circular water management systems."

Furthermore, as soon as the proposed industrial special economic zone reaches full operational capacity, it will generate tens of thousands of skilled engineering and manufacturing jobs for young university graduates. For the youth of Senegal, Diamniadio embodies a tangible promise: the future is not something to await passively, but an inspiring territory to construct through visionary engineering and collective patriotism.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Congested** | adj. | Congestionné / embouteillé | *Diamniadio relieves congested Dakar.* |
| **State-of-the-art** | adj. | À la pointe de la technologie | *The smart city offers state-of-the-art facilities.* |
| **Catalyze** | verb | Catalyser / stimuler | *Industrial parks catalyze jobs.* |
| **Tangible** | adj. | Concret / tangible | *Diamniadio offers tangible hope.* |
| **Circular** | adj. | Circulaire | *Circular water systems preserve water.* |

### Questions de Compréhension
1. *What primary goal does Diamniadio achieve regarding Dakar?* ──→ It relieves urban congestion and decentralizes administrative services.
2. *By 2030, what will technological innovators have developed?* ──→ Indigenous software managing smart energy grids and automated recycling.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Will après when / as soon as :**
   * *Erreur :* ~~*As soon as he will arrive, we will call you.*~~
   * *Correction :* **As soon as he arrives, we will call you.**
2. **Confusion will vs going to pour une preuve évidente :**
   * *Erreur :* ~~*Look, he will fall!*~~
   * *Correction :* **Look, he is going to fall!** (Preuve visible en cours).`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Choose the most appropriate future form:
1. When my sister *(arrive)* at the airport, we *(pick)* her up.
2. By next December, our school *(complete)* the new scientific laboratory.
3. Look at that driver! He is speeding dangerously; he *(crash)*!

---

### Detailed Answer Key
1. *When my sister **arrives**... we **will pick** her up.* (Présent dans la temporelle, will dans la principale).
2. *...our school **will have completed** the new laboratory.* (Future Perfect avec By next December).
3. *...he **is going to crash**!* (Preuve immédiate dans la situation présente ──→ be going to).`
    }
  ],
  conclusion: `La maîtrise du futur repose sur la précision sémantique (will, be going to, present continuous) et sur l'application automatique de la règle temporelle 'When + Present'.`
};

export const LESSON_7_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-07',
  title: 'Unit 7: Modal Auxiliaries — Capacity, Obligation, Advice, Permission & Probability',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '75 min',
  description: 'Étude complète des auxiliaires modaux : CAN, COULD, MUST, HAVE TO, SHOULD, OUGHT TO, MAY, MIGHT, NEEDN\'T. Échelle de certitude, nuances d\'obligation vs conseil et texte d\'application sur la santé publique.',
  image: {
    url: '',
    caption: 'Figure 1.7 : Échelle d\'intensité et de probabilité des auxiliaires modaux anglais',
    alt: 'Schéma des auxiliaires modaux',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a855f7">MODAL AUXILIARIES : SCALE OF CERTAINTY &amp; OBLIGATION</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">0% Impossibility ──→ 50% Possibility ──→ 100% Certainty / Obligation</text>
  <line x1="60" y1="100" x2="740" y2="100" stroke="#475569" stroke-width="6"/>
  <rect x="60" y="80" width="130" height="40" rx="8" fill="#ef4444"/>
  <text x="125" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">CAN'T / MUSTN'T</text>
  <text x="125" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#fca5a5">0% Impossibility / Strict Prohibition</text>
  <rect x="240" y="80" width="130" height="40" rx="8" fill="#eab308"/>
  <text x="305" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b">MIGHT / MAY</text>
  <text x="305" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#fde047">30-50% Theoretical Possibility</text>
  <rect x="420" y="80" width="130" height="40" rx="8" fill="#3b82f6"/>
  <text x="485" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">SHOULD / OUGHT TO</text>
  <text x="485" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#93c5fd">70% Moral Advice / Expectation</text>
  <rect x="600" y="80" width="140" height="40" rx="8" fill="#10b981"/>
  <text x="670" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">MUST / HAVE TO</text>
  <text x="670" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#86efac">100% Logical Certainty / Strict Duty</text>
  <rect x="60" y="170" width="680" height="50" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="80" y="192" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#e2e8f0">MODAL SYNTAX RULE :</text>
  <text x="80" y="209" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">Always followed by Bare Infinitive (no 'to') • No '-s' at 3rd person • Invariable in form</text>
</svg>`
  },
  introduction: `Les modaux ne décrivent pas des faits bruts, mais traduisent l'attitude, l'évaluation ou le jugement de l'énonciateur sur l'action : obligation, interdiction, conseil, capacité ou probabilité. Ils obéissent à des règles syntaxiques inflexibles.`,
  sections: [
    {
      title: 'I. Caractéristiques Morphologiques Invariables des Modaux',
      content: `Tous les modaux partagent trois propriétés grammaticales fondamentales :
1. Ils sont **toujours suivis de la base verbale nue** (sans *to*) : *He can swim* (et jamais : ~~*He can to swim*~~).
2. Ils ne prennent **jamais de -s** à la 3e personne du singulier : *She must study* (et non : ~~*She musts*~~).
3. Ils forment directement leur négation avec **not** et leur interrogation par inversion sans l'auxiliaire *do* : *Can you help me?* / *You shouldn't worry.*`
    },
    {
      title: 'II. Tableau des Valeurs Modales Fondamentales',
      content: `| Modal | Valeur Énonciative | Exemple Concret | Traduction / Équivalence |
| :--- | :--- | :--- | :--- |
| **CAN** | Capacité physique / intellectuelle | *She can speak four languages.* | Pouvoir / savoir faire |
| **CAN'T** | Impossibilité logique / Incapacité | *That story can't be true!* | Ce n'est pas possible |
| **MUST** | Obligation forte / Quasi-certitude | *You must submit your exam now.* | Devoir absolu |
| **MUSTN'T**| Interdiction absolue | *You mustn't cheat during the Bac.*| Il est strictement interdit |
| **SHOULD** | Conseil moral / Recommandation | *You should sleep eight hours.* | Tu devrais |
| **MAY / MIGHT**| Possibilité / Éventualité (30-50%)| *It may rain this afternoon.* | Il se peut que |
| **NEEDN'T**| Absence d'obligation (inutile de) | *You needn't buy water; it is free.*| Tu n'as pas besoin de |`
    },
    {
      title: 'III. Texte Intégral Authentique : Public Health and Epidemic Prevention',
      content: `*(Texte complet de lecture non résumé)*

### Reading Passage : "Safeguarding Community Health in West Africa"
Effective public healthcare systems must balance clinical treatment with rigorous community prevention. In the wake of historical regional health emergencies, West African health authorities have learned that public sensitization campaigns can save thousands of human lives before infectious diseases spread through vulnerable settlements.

Medical officers stationed across regional dispensaries emphasize that individuals must adopt essential hygiene protocols. Communities should ensure that drinking water sources remain uncontaminated and that domestic wastewater does not stagnate around residential compounds. Stagnant puddles provide fertile breeding grounds for anopheles mosquitoes, which can transmit malaria parasites to young children and pregnant women. Therefore, families ought to sleep under long-lasting insecticide-treated mosquito nets every night.

Furthermore, vaccination represents the most reliable shield against preventable pediatric illnesses. Parents must not neglect routine immunization appointments for measles, polio, and yellow fever. Dr. Khady Seck, a pediatrician in Kaolack, notes: "Citizens may sometimes hesitate because of baseless rumours circulating on social media networks. However, healthcare workers must engage directly with community leaders to restore scientific trust. When parents understand that vaccines protect their offspring, they willingly participate in national vaccination drives."

Finally, sanitation officers remind urban populations that citizens needn't purchase expensive sanitizing chemicals when clean water and traditional soap can eliminate the vast majority of pathogens. By fostering civic responsibility and reinforcing medical infrastructure, Senegal can build an impenetrable barrier against emerging biological threats.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Sensitization** | noun | Sensibilisation | *Sensitization stops disease outbreaks.* |
| **Stagnant** | adj. | Stagnant | *Stagnant puddles breed mosquitoes.* |
| **Offspring** | noun | Enfants / descendance | *Vaccines protect our offspring.* |
| **Immunization** | noun | Vaccination / immunisation | *Routine immunization is compulsory.* |
| **Pathogen** | noun | Agent pathogène | *Soap eliminates harmful pathogens.* |

### Questions de Compréhension
1. *What must families do to prevent malaria transmission?* ──→ They should eliminate stagnant water and sleep under insecticide-treated bed nets.
2. *Why do citizens needn't buy expensive chemicals according to the passage?* ──→ Because ordinary clean water and soap eliminate most pathogens effectively.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Mustn't vs Don't have to :**
   * *Mustn't = Interdiction formelle :* *You mustn't smoke here.*
   * *Don't have to = Absence d'obligation (tu peux le faire si tu veux, mais ce n'est pas exigé) :* *Tomorrow is Sunday; you don't have to wake up early.*
2. **Ajout fautif de 'to' après can / must :**
   * *Erreur :* ~~*She must to go.*~~
   * *Correction :* **She must go.**`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Choose the correct modal auxiliary:
1. You *(mustn't / needn't)* bring an encyclopedia to the exam; it is strictly prohibited.
2. Look at his medical diploma; he *(must / can't)* be a qualified physician.
3. Students *(should / must to)* revise their grammar notes regularly.

---

### Detailed Answer Key
1. *...you **mustn't** bring an encyclopedia...* (Interdiction stricte sous peine de sanction).
2. *...he **must** be a qualified physician.* (Déduction logique quasi-certaine).
3. *Students **should** revise...* (Conseil avisé sans 'to').`
    }
  ],
  conclusion: `Les auxiliaires modaux permettent d'exprimer des nuances infinies de pensée. La distinction capitale entre interdiction (mustn't) et dispense (needn't / don't have to) est systématiquement testée au Baccalauréat.`
};

export const LESSON_8_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-08',
  title: 'Unit 8: The Passive Voice — Agent Omission, Focus on Action & Tense Transformations',
  module: 'Partie 1 • Le Système Verbal et Déterminants fondamentaux',
  level: 'Première (Séries L & S)',
  readTime: '80 min',
  description: 'Transformation passive intégrale à tous les temps : mécanisme de BE + V3, transfert de l\'objet en position sujet, règles d\'omission de l\'agent (by + agent) et analyse d\'un texte sur les grands chantiers d\'infrastructure au Sénégal.',
  image: {
    url: '',
    caption: 'Figure 1.8 : Mécanisme transformationnel de la voix active à la voix passive',
    alt: 'Schéma transformationnel de la voix passive',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none">
  <rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/>
  <text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f43f5e">THE PASSIVE VOICE TRANSFORMATION MECHANISM</text>
  <text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Active Object ──→ Passive Subject • BE + V3 • (by + Agent)</text>
  <rect x="60" y="75" width="200" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="160" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">Subject (The engineer)</text>
  <rect x="300" y="75" width="200" height="40" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
  <text x="400" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#facc15">Verb (built [Past Simple])</text>
  <rect x="540" y="75" width="200" height="40" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="640" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">Direct Object (the bridge)</text>
  <path d="M 640 120 C 640 160, 160 140, 160 170" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 160 120 C 160 160, 640 140, 640 170" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
  <line x1="400" y1="120" x2="400" y2="170" stroke="#eab308" stroke-width="2"/>
  <rect x="60" y="175" width="200" height="45" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="160" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">New Subject</text>
  <text x="160" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">The bridge</text>
  <rect x="300" y="175" width="200" height="45" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
  <text x="400" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">BE in past + V3</text>
  <text x="400" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">was built</text>
  <rect x="540" y="175" width="200" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="640" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">by + Agent</text>
  <text x="640" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">by the engineer</text>
</svg>`
  },
  introduction: `La voix passive est prépondérante dans les articles de presse, les rapports scientifiques et les épreuves de transformation du Baccalauréat. Elle permet de focaliser l'attention sur l'action accomplie ou sur son résultat plutôt que sur l'auteur de l'action.`,
  sections: [
    {
      title: 'I. Principe Fondamental & Mécanisme de Transformation',
      content: `Pour transformer une phrase active en phrase passive :
1. L'**objet direct** de la phrase active devient le **sujet** de la phrase passive.
2. L'auxiliaire **BE** est conjugué au **même temps que le verbe actif**.
3. Le verbe actif se met au **participe passé (V3)**.
4. Le sujet actif devient le **complément d'agent** précédé de **by** (facultatif si non informatif).

> **Structure Passive :** **Objet Actif (devenu Sujet)** + **BE (au temps actif)** + **Participe Passé (V3)** + **(by + Agent)**`
    },
    {
      title: 'II. Tableau des Transformations Passives par Temps',
      content: `| Temps Actif | Phrase Active | Phrase Passive Correspondante |
| :--- | :--- | :--- |
| **Simple Present** | *Farmers harvest peanuts.* | *Peanuts **are harvested** by farmers.* |
| **Present Continuous** | *Technicians are building a solar plant.*| *A solar plant **is being built**.* |
| **Simple Past** | *President Senghor founded the university.*| *The university **was founded** by Senghor.* |
| **Past Continuous** | *They were repairing the railway.* | *The railway **was being repaired**.* |
| **Present Perfect** | *Engineers have constructed the bridge.* | *The bridge **has been constructed**.* |
| **Past Perfect** | *The workers had cleared the road.* | *The road **had been cleared**.* |
| **Simple Future** | *The minister will announce the decision.*| *The decision **will be announced**.* |
| **Modaux** | *We must preserve natural forests.* | *Natural forests **must be preserved**.* |`
    },
    {
      title: 'III. Texte Intégral Authentique : Modernizing Senegal\'s Transportation',
      content: `*(Texte complet de lecture non résumé)*

### Reading Passage : "Infrastructure Renaissance in Senegal"
Over the past decade, unprecedented infrastructural developments have been witnessed across the Senegalese territory. Roads, regional airports, deep-water ports, and modern expressways are being rehabilitated to stimulate economic vitality and connect isolated agricultural regions to domestic and international markets.

Among these strategic endeavors, the Regional Express Train (TER) linking Dakar to the Blaise Diagne International Airport (AIBD) in Diass represents a flagship achievement. Every day, tens of thousands of commuters are transported comfortably in air-conditioned rail carriages, significantly reducing the massive traffic bottlenecks that once crippled the Dakar peninsula. Furthermore, new toll motorways have been constructed toward Mbour, Thiès, and Touba, cutting transit times by more than half for freight haulers and public transport buses.

In the southern regions, the historic Senegambia Bridge across the Gambia River was officially inaugurated to foster trade between northern and southern Senegalese provinces. Previously, vehicles were delayed for days at congested ferry crossings. Today, trucks carrying agricultural produce from Casamance are granted seamless transit across borders, lowering transport costs and preserving perishable fruits.

These transformative infrastructure programs are financed through collaborative partnerships between the Senegalese state, international development funds, and private concessionaires. By modernizing logistical networks, the foundation for sustainable industrialization is being firmly established across West Africa.`
    },
    {
      title: 'IV. Lexique Thématique, Vocabulaire Bilingue & Analyse Textuelle',
      content: `| English Term | Category | French Translation | Example Sentence |
| :--- | :--- | :--- | :--- |
| **Endeavor** | noun | Entreprise / grand projet | *Strategic endeavors transform the nation.* |
| **Flagship** | adj. | Phare / emblématique | *The TER is a flagship achievement.* |
| **Bottleneck** | noun | Goulot d'étranglement / bouchon | *Trains reduce road bottlenecks.* |
| **Seamless** | adj. | Fluide / sans accroc | *The bridge enables seamless transit.* |
| **Perishable** | adj. | Périssable | *Perishable fruits reach Dakar quickly.* |

### Questions de Compréhension
1. *What major infrastructure was constructed to connect northern and southern Senegal through Gambia?* ──→ The Senegambia Bridge.
2. *Identify two passive structures used in the first paragraph of the passage.* ──→ *have been witnessed* and *are being rehabilitated*.`
    },
    {
      title: 'V. Pièges Fréquents & Erreurs Récurrentes au Baccalauréat',
      content: `1. **Oubli de 'being' dans les formes continues :**
   * *Actif :* *They are repairing the bridge.*
   * *Erreur :* ~~*The bridge is repaired.*~~ (Devient un état présent !).
   * *Correction :* **The bridge is being repaired.**
2. **Maintenir des agents inutiles :**
   * Il ne faut pas ajouter *by someone*, *by people*, *by them* si l'agent n'apporte aucune information pertinente.`
    },
    {
      title: 'VI. Exercices d\'Application & Évaluation Corrigée Détaillée',
      content: `### Practice Exercise
Transform the active sentences into the passive voice:
1. Young engineers are testing a new solar water pump.
2. The government has built three regional university centers.
3. The storm damaged several fishing boats in Saint-Louis yesterday.

---

### Detailed Answer Key
1. *A new solar water pump **is being tested** by young engineers.* (Present Continuous passif : is being + V3).
2. *Three regional university centers **have been built** by the government.* (Present Perfect passif : have been + V3).
3. *Several fishing boats **were damaged** in Saint-Louis yesterday.* (Simple Past passif : were + V3).`
    }
  ],
  conclusion: `La voix passive réclame une rigueur mathématique : adapter l'auxiliaire BE au sujet et au temps de la phrase, ajouter le participe passé (V3) et omettre l'agent non informatif.`
};

export const COURSES_ANGLAIS_1ERE_MANUEL_PART1 = [
  LESSON_1_ANGLAIS_1ERE_MANUEL,
  LESSON_2_ANGLAIS_1ERE_MANUEL,
  LESSON_3_ANGLAIS_1ERE_MANUEL,
  LESSON_4_ANGLAIS_1ERE_MANUEL,
  LESSON_5_ANGLAIS_1ERE_MANUEL,
  LESSON_6_ANGLAIS_1ERE_MANUEL,
  LESSON_7_ANGLAIS_1ERE_MANUEL,
  LESSON_8_ANGLAIS_1ERE_MANUEL
];
