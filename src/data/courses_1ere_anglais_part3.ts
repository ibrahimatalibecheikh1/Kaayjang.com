import { LessonContent } from './courses';

// =========================================================================
// MANUEL COMPLET D'ANGLAIS — PREMIÈRE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// PARTIE 3 : UNITS 18 À 26 & ANNEXES — SOCIÉTÉ, ÉCRITURE, PHONÉTIQUE & TEST
// =========================================================================

export const LESSON_18_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-18',
  title: 'Unit 18: Technology, Internet, Social Media and Digital Literacy',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Les technologies numériques, Internet, les réseaux sociaux et l’esprit critique face à l’information. Vocabulaire spécialisé (privacy, misinformation, cyberbullying), analyse des avantages et dérives, et techniques de dissertation.',
  image: {
    url: '',
    caption: 'Figure 3.1 : Écosystème de la culture numérique, intelligence artificielle et cybersécurité',
    alt: 'Schéma culture numérique',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">DIGITAL LITERACY, AI &amp; CYBERSECURITY ECOSYSTEM</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Critical Thinking • Data Privacy • Fact-Checking</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">OPPORTUNITIES</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Instant access to knowledge</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Global scientific collaboration</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Coding and tech careers</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">DIGITAL RISKS</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Viral fake news &amp; deepfakes</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Online harassment &amp; bullying</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Personal data exploitation</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">BEST PRACTICES</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Verify cross-source accuracy</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Use multi-factor passwords</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Maintain healthy screen time</text></svg>`
  },
  sections: [
    {
      title: 'I. Lexique Spécialisé des Technologies et Médias',
      content: `| English Word | Grammatical Category | French Meaning | Detailed Sentence |
| :--- | :--- | :--- | :--- |
| **Digital literacy** | noun | Littératie / culture numérique | *Digital literacy enables students to evaluate the credibility of online sources.* |
| **Misinformation / Fake news** | noun | Désinformation / fausses nouvelles | *Social networks can rapidly amplify misinformation during election periods.* |
| **Privacy / Data protection** | noun | Vie privée / protection des données | *Users should set strong passwords to preserve their online privacy.* |
| **Cyberbullying** | noun | Cyberharcèlement | *Schools must implement strict policies against cyberbullying and online harassment.* |
| **Artificial Intelligence (AI)** | noun | Intelligence Artificielle (IA) | *AI algorithms power modern educational applications and translation tools.* |
| **Reliable source** | noun phr. | Source fiable | *Before sharing a sensational headline, always verify if it comes from a reliable source.* |
| **E-learning / Online learning** | noun | Apprentissage en ligne | *E-learning platforms offer flexible opportunities for remote students in regional areas.* |`
    },
    {
      title: 'II. Expressions Utiles & Modèle de Paragraphe Contrasté',
      content: `* **browse the web / surf the internet** (*naviguer sur Internet*)
* **share content / post a comment** (*partager du contenu / publier un commentaire*)
* **check the reliability of a source** (*vérifier la fiabilité d'une source*)
* **protect personal data** (*protéger ses données personnelles*)

### Modèle de Paragraphe Contrasté (Advantages vs. Drawbacks)
> *"Technology has undoubtedly revolutionized education by democratizing access to knowledge. Through smartphones and online platforms, students can consult global encyclopedias, watch scientific tutorials, and communicate with international peers. **On the other hand**, uncontrolled screen time poses serious risks, including digital addiction, decreased concentration, and vulnerability to misleading fake news. **Therefore**, young people must develop strong critical thinking skills to harness the benefits of technology while safeguarding their academic focus."*`
    },
    {
      title: 'III. Exercice de Réflexion Argumentée',
      content: `### Consigne
Rédigez un paragraphe argumentatif répondant à la question suivante : *"Should mobile phones be banned in secondary schools?"*
Présentez une thèse claire, deux arguments étayés et une phrase de conclusion équilibrée.`
    }
  ,
    {
      title: 'IV. Texte Intégral : The Mobile Money Revolution in Senegal',
      content: `### Reading Passage
Over the past decade, financial technology (FinTech) has fundamentally transformed the commercial landscape of West Africa. In Senegal, services like Wave and Orange Money have enabled millions of unbanked citizens—especially rural smallholders and urban market vendors—to participate directly in the digital economy. 

Previously, sending money from Dakar to relatives in remote villages required risky journeys in shared taxis or costly bank wire transfers. Today, a simple smartphone tap transfers funds securely in seconds with negligible transaction fees. Financial analysts note that mobile money does not merely facilitate family remittances; it also fuels small business entrepreneurship. Female market traders now accept QR-code payments for fresh fish and vegetables, while solar energy startups collect pay-as-you-go micro-installments automatically. The mobile revolution demonstrates how accessible digital tools can democratize financial dignity and accelerate grassroots economic development.`
    },
    {
      title: 'V. Sujet d\'Argumentation : "Are Smartphones Making Students Smarter or More Distracted?"',
      content: `### Argumentative Outline :
* **Thesis (Educational Benefits) :**
  1. Instant access to global libraries, online dictionaries, educational videos, and e-learning platforms.
  2. Collaborative group research and instantaneous academic communication between teachers and students.
* **Antithesis (Distractions & Cognitive Hazards) :**
  1. Endless algorithmic notifications on TikTok, Instagram, and video games lead to shortened attention spans and sleep deprivation.
  2. Superficial copying of AI answers without genuine analytical reflection degrades deep critical thinking.
* **Conclusion :**
  *Smartphones are powerful intellectual instruments whose educational value depends entirely on individual digital discipline and parental supervision.*`
    },
    {
      title: 'VI. Exercices de Langue & Vocabulaire Numérique',
      content: `### Exercices
1. *Fill in with: broadband, privacy, cybersecurity, startup:*
   * a) Protect your personal password to safeguard your digital ........
   * b) High-speed ........ internet connects schools to world universities.
   * c) A young Senegalese ........ developed an agricultural weather application.
   * d) Banks invest heavily in ........ to prevent financial hacking.
2. *Rephrase with Passive Voice:* *Mobile companies transformed rural banking.*

### Corrigé Détaillé
1. a) *privacy* ; b) *broadband* ; c) *startup* ; d) *cybersecurity*.
2. *Rural banking **was transformed** by mobile companies.*`
    }
  ]
};

export const LESSON_19_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-19',
  title: 'Unit 19: Society, Citizenship, Community Development and Youth Empowerment',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Ce thème fournit le vocabulaire nécessaire pour discuter de la vie collective, des droits, des devoirs, des défis de l’urbanisation, de la solidarité et du développement communautaire au Sénégal et en Afrique.',
  image: {
    url: '',
    caption: 'Figure 3.2 : Piliers de l\'engagement civique, de la jeunesse et de la cohésion sociale',
    alt: 'Schéma citoyenneté et société',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#10b981">CIVIC PARTICIPATION &amp; COMMUNITY RESILIENCE</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Rights • Duties • Solidarity</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">CIVIC DUTIES</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Respect the Constitution</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Active voting in elections</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Pay municipal taxes</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">YOUTH EMPOWERMENT</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Community volunteering</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Neighborhood cleanups (set-setal)</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Peer education and tutoring</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">COLLECTIVE GAINS</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Peaceful inter-ethnic harmony</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Inclusive social justice</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Transparent governance</text></svg>`
  },
  sections: [
    {
      title: 'I. Vocabulaire Fondamental : Citoyenneté et Société',
      content: `| English Word | French Equivalent | Contextual Example |
| :--- | :--- | :--- |
| **Citizenship** | Citoyenneté | *Active citizenship involves participating in community initiatives and voting.* |
| **Rights and duties** | Droits et devoirs | *Every citizen enjoys fundamental rights while respecting civic duties.* |
| **Gender equality** | Égalité des genres | *Promoting gender equality in education empowers women in leadership roles.* |
| **Urbanization** | Urbanisation | *Rapid urbanization creates challenges for housing and public transport in Dakar.* |
| **Solidarity / Mutual aid** | Solidarité / entraide | *Traditional Senegalese 'Teranga' embodies hospitality and community solidarity.* |
| **Poverty reduction** | Réduction de la pauvreté | *Vocational training programs are crucial tools for poverty reduction.* |
| **Civic engagement** | Engagement civique | *Youth organizations foster civic engagement through environmental cleaning days.* |`
    },
    {
      title: 'II. Connecteurs Clés pour le Débat Social',
      content: `* **In my view / In my opinion :** Pour exprimer un point de vue personnel.
* **On the one hand... On the other hand... :** Pour contraster deux perspectives sociales.
* **For instance / For example :** Pour illustrer par une réalité concrète.
* **Consequently / As a result :** Pour introduire l'impact social d'une mesure.
* **In conclusion / To sum up :** Pour synthétiser les enjeux.`
    },
    {
      title: 'III. Production Écrite Guidée',
      content: `### Sujet de Dissertation
*"Young people are the driving force of economic and social transformation in developing nations. Discuss."*
* Introduction : Définition de la jeunesse démographique et contexte ouest-africain.
* Corps : Rôle dans l'innovation technologique, l'entrepreneuriat agricole et le dynamisme associatif.
* Conclusion : Nécessité d'investir dans l'éducation et la formation professionnelle de qualité.`
    }
  ,
    {
      title: 'IV. Texte Intégral : The Spirit of Set-Setal — Grassroots Civic Action',
      content: `### Reading Passage
In the urban neighborhoods of Dakar, civic duty is not an abstract governmental slogan; it is lived community reality embodied in the tradition of *Set-Setal*. Born in the late 1980s as a spontaneous youth movement, Set-Setal mobilizes neighborhood residents to clean streets, paint vibrant cultural murals, and unclog stormwater drainage channels before the arrival of the seasonal rains. 

Equipped with brooms, wheelbarrows, and paintbrushes, young volunteers demonstrate that preserving the public environment is a collective responsibility. Sociologists observe that Set-Setal strengthens intergenerational bonds, fosters local solidarity, and instills civic pride in youngsters. By transforming neglected alleys into clean public spaces adorned with portraits of national heroes like Cheikh Anta Diop and Léopold Sédar Senghor, youth prove that active citizenship begins on one\'s own doorstep.`
    },
    {
      title: 'V. Modèle de Discours d\'Engagement Citoyen',
      content: `### Model Speech for Student Council Election :
"Fellow students, teachers, and honored guests:
I stand before you today not to make empty promises, but to invite you to build a greener, cleaner, and more supportive school community together. Our high school should not be merely a place where we memorize formulas; it must be a beacon of civic excellence. If elected president of the student council, I pledge to organize monthly schoolyard reforestation drives, establish a peer-tutoring network for struggling freshmen, and launch an anti-bullying student committee. True citizenship is not about complaining from the sidelines; it is about rolling up our sleeves and taking positive action. Let us unite our talents for the honor and progress of our school. Thank you!"`
    },
    {
      title: 'VI. Exercices de Langue & Vocabulaire Civique',
      content: `### Exercices
1. *Complete with: citizen, solidarity, volunteer, heritage:*
   * a) Every responsible ........ must respect the highway code and pay taxes.
   * b) Communal ........ helps vulnerable families during economic hardship.
   * c) Aminata works as a hospital ........ on weekends.
   * d) Gorée Island is a sacred site of international historical ........
2. *Rephrase with IF:* *Citizens did not clean the drainage canals, so the streets flooded.*

### Corrigé Détaillé
1. a) *citizen* ; b) *solidarity* ; c) *volunteer* ; d) *heritage*.
2. *If citizens **had cleaned** the drainage canals, the streets **would not have flooded**.* (Conditionnel Type 3).`
    }
  ]
};

export const LESSON_20_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-20',
  title: 'Unit 20: Paragraph Writing — Structure, Topic Sentence, Supporting Ideas & Transitions',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Un paragraphe efficace en anglais possède une structure canonique stricte : Topic Sentence (idée directrice), Supporting Sentences (développements et exemples) et Concluding Sentence (clôture). Maîtrise des connecteurs logiques de transition.',
  image: {
    url: '',
    caption: 'Figure 3.3 : Architecture canonique du paragraphe académique anglais (PEEL / TEAS)',
    alt: 'Schéma architecture du paragraphe',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">ACADEMIC PARAGRAPH BLUEPRINT (TOPIC • EVIDENCE • EXPLANATION • LINK)</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Cohesion • Unity • Transition</text><rect x="40" y="70" width="720" height="32" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="55" y="91" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">1. TOPIC SENTENCE : States the main central controlling idea clearly.</text><rect x="40" y="108" width="720" height="32" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="55" y="129" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">2. SUPPORTING EVIDENCE : Concrete facts, statistics, historical dates or studies.</text><rect x="40" y="146" width="720" height="32" rx="6" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="55" y="167" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">3. EXPLANATION &amp; ANALYSIS : Why this evidence matters and supports the thesis.</text><rect x="40" y="184" width="720" height="32" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/><text x="55" y="205" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#c084fc">4. CONCLUDING / LINKING SENTENCE : Synthesizes and transitions to the next point.</text></svg>`
  },
  sections: [
    {
      title: 'I. L\'Architecture Canonique du Paragraphe Anglais',
      content: `En anglais, un paragraphe académique ne doit contenir **qu'une seule idée principale**, développée de manière logique et progressive selon le schéma **T.S.E.C.** :

1. **The Topic Sentence (Phrase Thématique d'Ouverture) :**
   * Présente l'idée directrice du paragraphe de façon claire, nette et concise.
   * *Exemple :* *Reading books in English provides immense benefits for high school students.*
2. **Supporting Sentences (Phrases de Soutien & Explication) :**
   * Développent, expliquent et justifient l'affirmation de la *topic sentence*.
   * *Exemple :* *Firstly, it naturally expands vocabulary by exposing learners to new idioms in authentic contexts. Furthermore, it reinforces grammatical accuracy through continuous observation of correct structures.*
3. **Examples / Concrete Evidence (Preuves et Exemples) :**
   * Illustrent l'argument par un cas pratique ou chiffré.
   * *Exemple :* *For instance, students who read twenty pages a week demonstrate marked improvements in essay writing.*
4. **The Concluding Sentence (Phrase de Clôture) :**
   * Récapitule l'idée ou prépare la transition vers le paragraphe suivant.
   * *Exemple :* *In short, regular reading is an indispensable key to language proficiency.*`
    },
    {
      title: 'II. Connecteurs de Transition à Utiliser',
      content: `* **Pour débuter et énumérer :** *First, Firstly, To begin with, In the first place*.
* **Pour ajouter des arguments :** *Moreover, Furthermore, In addition, Besides*.
* **Pour donner un exemple :** *For example, For instance, To illustrate this point*.
* **Pour marquer l'opposition :** *However, Nevertheless, On the contrary*.
* **Pour conclure le paragraphe :** *Therefore, Consequently, In summary, Ultimately*.`
    },
    {
      title: 'III. Exercice Pratique & Grille d\'Auto-Évaluation',
      content: `### Exercice Pratique
Rédigez un paragraphe académique parfait de 120 à 150 mots sur le sujet suivant :
*"Why learning English is essential for future employment in West Africa."*

### Grille d'Évaluation (Critères Officiels) :
* Présence d'une *Topic Sentence* explicite (2 pts).
* Au moins deux arguments de soutien clairement reliés (4 pts).
* Un exemple concret et pertinent (2 pts).
* Présence d'au moins 4 connecteurs variés (2 pts).
* Phrase de clôture efficace (2 pts).
* Correction grammaticale, accord sujet-verbe et orthographe (4 pts).`
    }
  ,
    {
      title: 'IV. Analyse Critique de Paragraphes d\'Élèves : Bonnes Copies vs Erreurs',
      content: `### Exemple Faible (À Éviter) :
*"Solar energy is good. It is very nice. Many people like it in Senegal. The sun shines every day. That is why it is good."*
* **Défauts :** Vocabulaire pauvre (*good, nice*), absence de phrase directrice claire, phrases courtes juxtaposées sans connecteurs logiques, aucune donnée concrète.

### Exemple Exemplaire (Viser ce Niveau) :
*"Solar energy represents an indispensable cornerstone for sustainable economic development across West Africa. Because Senegal enjoys over 3,000 hours of intense sunshine annually, photovoltaic installations in Bokhol and Sakal generate abundant, clean electricity without relying on imported fossil fuels. Furthermore, decentralized solar microgrids power rural health clinics and irrigation pumps, directly improving living standards in remote villages. Consequently, investing in solar technology simultaneously preserves ecological biodiversity and accelerates national energy sovereignty."*
* **Qualités :** Topic sentence percutante, connecteurs riches (*Because, Furthermore, Consequently*), exemples concrets, conclusion logique.`
    },
    {
      title: 'V. Grille d\'Auto-Évaluation du Paragraphe Académique',
      content: `Avant de rendre votre paragraphe, vérifiez chacun de ces points :
* [ ] Ma première phrase (Topic Sentence) annonce-t-elle clairement l'idée générale ?
* [ ] Ai-je développé au moins deux phrases d'explications et d'exemples précis ?
* [ ] Mes connecteurs logiques (*Moreover, In addition, However, Consequently*) sont-ils variés ?
* [ ] Ma phrase de conclusion (*Concluding sentence*) résume-t-elle l'argument sans mot de trop ?
* [ ] Mon paragraphe forme-t-il un bloc unifié avec un alinéa au départ ?`
    },
    {
      title: 'VI. Exercices d\'Application & Rédaction Pratique',
      content: `### Exercices
1. *Write a solid Topic Sentence for each subject:*
   * a) The importance of learning the English language in Senegal.
   * b) The dangers of marine plastic pollution.
2. *Draft a complete 80-word academic paragraph on topic a).*

### Corrigé Détaillé
1. a) *Topic sentence :* *"Mastering the English language has become an essential prerequisite for Senegalese youth seeking to access global academic opportunities and international commercial trade."*
   b) *Topic sentence :* *"Unregulated plastic pollution poses a catastrophic threat to marine ecosystems and coastal artisanal fisheries along the Senegalese seaboard."*`
    }
  ]
};

export const LESSON_21_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-21',
  title: 'Unit 21: Formal and Informal Letters — Format, Conventions, Register & Polite Closings',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Une lettre en anglais dépend étroitement du destinataire et du contexte de communication. Étude comparée de la mise en page, des formules d’ouverture, du registre de langue (formel vs informel) et des formules de clôture (Yours faithfully vs. Yours sincerely).',
  image: {
    url: '',
    caption: 'Figure 3.4 : Structure comparative de la lettre formelle vs lettre informelle',
    alt: 'Schéma formats de lettres',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#eab308">LETTER WRITING BLUEPRINT : FORMAL VS INFORMAL</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Salutation • Register • Complimentary Close</text><rect x="40" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="55" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#60a5fa">FORMAL LETTER (Application / Complaint)</text><text x="55" y="118" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Salutation: Dear Sir or Madam / Dear Mr Wade</text><text x="55" y="136" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Tone: Objective, polite, no slang, NO contractions</text><text x="55" y="154" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Closing if Dear Sir: Yours faithfully,</text><text x="55" y="172" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Closing if Dear Name: Yours sincerely,</text><rect x="415" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="430" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">INFORMAL LETTER (Friend / Family)</text><text x="430" y="118" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Salutation: Dear Aminata / Hi Oumar,</text><text x="430" y="136" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Tone: Warm, affectionate, contractions permitted (I'm)</text><text x="430" y="154" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Friendly news and personal remarks</text><text x="430" y="172" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Closing: Best regards / Warmly / All the best,</text></svg>`
  },
  sections: [
    {
      title: 'I. Comparaison Globale : Formal Letter vs. Informal Letter',
      content: `| Élément | Lettre Informelle (Friend / Family) | Lettre Formelle (Official / School / Job) |
| :--- | :--- | :--- |
| **Destinataire** | Ami, camarade, membre de la famille | Proviseur, employeur, ministre, institution |
| **Salutation d'ouverture** | *Dear Awa,* / *Dear John,* / *Hi Oumar,* | *Dear Sir or Madam,* (nom inconnu) ou *Dear Mr Fall,* (nom connu) |
| **Niveau de langue** | Courant, chaleureux, contractions autorisées (*I'm, don't*) | Soutenu, poli, **aucune contraction** (*I am, do not*) |
| **Introduction** | *How are you? I hope you are doing well...* | *I am writing to apply for... / I am writing with reference to...* |
| **Formule de congé** | *Best wishes,* / *Love,* / *Warm regards,* / *Yours,* | *Yours faithfully,* (si *Dear Sir/Madam*) ou *Yours sincerely,* (si nom connu) |`
    },
    {
      title: 'II. Règle d\'Or des Formules de Clôture Formelles',
      content: `Cette distinction est scrupuleusement notée au Baccalauréat sénégalais :
1. Si vous **ne connaissez pas le nom** de la personne (*Dear Sir or Madam,* / *Dear Sir,*) :
   **Dear Sir or Madam,** ──→ **Yours faithfully,**
2. Si vous **connaissez le nom de famille** de la personne (*Dear Mr Diop,* / *Dear Mrs Sow,*) :
   **Dear Mr Diop,** ──→ **Yours sincerely,**
3. Signature : Toujours votre **Prénom + NOM** lisiblement en bas à gauche.`
    },
    {
      title: 'III. Modèles Complets & Entraînement',
      content: `### Modèle de Lettre Formelle (Demande d'information pour une bourse) :
> *Lycée Malick Sy, Thiès*  
> *10th October 2026*  
>   
> *The Director of Admissions*  
> *Higher Institute of Technological Studies, Dakar*  
>   
> *Dear Sir or Madam,*  
>   
> *I am writing to inquire about the admission requirements and available scholarship opportunities for your computer science programme for the upcoming academic year.*  
>   
> *Presently, I am a Première student with strong academic performance in mathematics and English. I would be immensely grateful if you could forward me the application brochure, tuition details, and submission deadlines.*  
>   
> *Thank you very much for your time and assistance.*  
>   
> *Yours faithfully,*  
> *Mamadou KANE*`
    }
  ,
    {
      title: 'IV. Modèle Intégral : Lettre de Réclamation Formelle (Letter of Complaint)',
      content: `### Exemplary Model :
Fatou Ndiaye
Villa 45, Sacré-Cœur 3
Dakar, Senegal

15th October 2025

The Customer Relations Manager
Senegal Telecom Services
Avenue Léopold Sédar Senghor
Dakar, Senegal

Dear Sir or Madam,

**Subject: Formal complaint regarding persistent high-speed internet disruption**

I am writing to express my profound dissatisfaction with the quality of internet service provided to my household over the past three weeks (Account Number: SN-492810).

Despite paying my monthly subscription fee punctually on the first of October, my household broadband connection has experienced frequent and prolonged interruptions. As an advanced high school student preparing for national examinations, this continuous breakdown severely impedes my online research and educational access. Furthermore, repeated calls to your customer assistance helpline have failed to resolve the technical failure.

I kindly request that a certified field technician inspect our local transmission line within forty-eight hours, and that an appropriate financial rebate be credited to my account for the period of disrupted connectivity. Failing prompt resolution, I will be compelled to submit a formal complaint to the national telecommunications regulatory authority.

Thank you for your prompt attention to this urgent matter.

Yours faithfully,

*[Signature]*

Fatou Ndiaye`
    },
    {
      title: 'V. Modèle Intégral : Lettre Informelle à un Correspondant (Friendly Letter)',
      content: `### Exemplary Friendly Letter :
Saint-Louis, Senegal
28th March 2025

Dear John,

I hope this letter finds you in splendid health and high spirits! I was absolutely delighted to receive your last postcard from Edinburgh.

I am writing to tell you all about our annual high school cultural week. We staged a traditional Wolof historical play and organized a massive outdoor exhibition celebrating Senegalese gastronomy. My mother and I prepared a gigantic platter of *Thieboudienne* (our national fish and rice dish), which my classmates devoured in minutes!

How are your final-year exams going in Scotland? I am revising intensely for my Baccalaureate, especially in physics and English. Drop me a line soon and let me know your holiday plans for the summer. You must come and visit Senegal!

Warmest regards,

Moussa`
    },
    {
      title: 'VI. Exercices de Pratique Épistolaire & Critères de Notation',
      content: `### Exercice
*Identify whether the following expressions belong to a Formal Letter (F) or an Informal Letter (I):*
1. *I am writing to apply for the position of administrative assistant.* (......)
2. *Can't wait to see you next weekend!* (......)
3. *Yours sincerely,* (......)
4. *Drop me a line whenever you have a minute.* (......)
5. *I look forward to hearing from you at your earliest convenience.* (......)

### Corrigé Détaillé
1. **F** (Formal) ; 2. **I** (Informal) ; 3. **F** (Formal - avec nom connu) ; 4. **I** (Informal) ; 5. **F** (Formal).`
    }
  ]
};

export const LESSON_22_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-22',
  title: 'Unit 22: Opinion and Argumentative Writing — Stating Theses, Nuance & Justification',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'Écrire un texte argumentatif consiste à formuler clairement une thèse, développer des arguments convaincants et illustrer par des exemples vérifiables. Distinction essentielle entre affirmation gratuite et justification étayée.',
  image: {
    url: '',
    caption: 'Figure 3.5 : Architecture standardisée de l\'Essay de Baccalauréat (4 paragraphes)',
    alt: 'Schéma structure de la dissertation',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ec4899">THE 4-PARAGRAPH ARGUMENTATIVE ESSAY ARCHITECTURE</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Hook • Thesis • Antithesis • Synthesis</text><rect x="40" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">PARAGRAPH 1</text><text x="50" y="115" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">INTRODUCTION</text><text x="50" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• General hook / context</text><text x="50" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Problematic statement</text><text x="50" y="170" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Clear thesis roadmap</text><rect x="225" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="235" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">PARAGRAPH 2</text><text x="235" y="115" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">ARGUMENT 1 (PRO)</text><text x="235" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Topic sentence (On one hand)</text><text x="235" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Concrete illustrations</text><text x="235" y="170" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Socio-economic data</text><rect x="410" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="420" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">PARAGRAPH 3</text><text x="420" y="115" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">ARGUMENT 2 (CONTRA)</text><text x="420" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• On the other hand...</text><text x="420" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Counter-arguments / limits</text><text x="420" y="170" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Real-world obstacles</text><rect x="595" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/><text x="605" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#c084fc">PARAGRAPH 4</text><text x="605" y="115" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">CONCLUSION</text><text x="605" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• In summary / All in all</text><text x="605" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Balanced perspective</text><text x="605" y="170" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">• Forward-looking opening</text></svg>`
  },
  sections: [
    {
      title: 'I. Affirmation vs. Justification : La Règle d\'Or de l\'Argumentation',
      content: `Une erreur majeure des élèves de lycée consiste à aligner de simples affirmations sans démonstration :
* **Simple affirmation (non étayée) :** *"Technology is good for schools."* (Ceci n'est pas un argument, mais une opinion sans preuve).
* **Argument développé avec justification :**
  > *"Technology significantly enhances learning because interactive multimedia tools allow students to visualize complex scientific concepts that textbooks alone cannot convey adequately. For instance, digital chemistry simulations enable learners in schools without laboratories to conduct virtual experiments safely."*`
    },
    {
      title: 'II. Boîte à Outils Stylistique pour l\'Argumentation',
      content: `* **Exprimer une conviction forte :**
  * *I firmly believe that...*
  * *It is widely acknowledged that...*
  * *There is no denying that...*
* **Nuancer et introduire une objection :**
  * *While it is true that..., one must also consider that...*
  * *Although proponents argue that..., critics point out that...*
* **Introduire une conséquence logique :**
  * *This clearly demonstrates that...*
  * *As an inevitable result,...*`
    },
    {
      title: 'III. Sujet d\'Application Rédigé',
      content: `### Sujet Type
*"Some people believe that technical and vocational training is more beneficial for African youth than general academic studies. To what extent do you agree with this statement?"*

### Plan d'Essai Recommandé
* **Introduction :** Contexte du chômage des jeunes diplômés + Présentation des deux voies + Annonce de la thèse.
* **Body Paragraph 1 (Vocational Training) :** Compétences pratiques immédiates (électricité, plomberie, mécanique, informatique), employabilité directe et création d'ateliers indépendants.
* **Body Paragraph 2 (Academic Studies) :** Recherche fondamentale, droit, médecine, administration et réflexion stratégique à long terme.
* **Conclusion :** Synthèse montrant que les deux systèmes sont complémentaires et doivent être également valorisés.`
    }
  ,
    {
      title: 'IV. La Structure Rhétorique de la Conclusion d\'Essay',
      content: `La conclusion d'une dissertation argumentative d'anglais ne doit jamais être bâclée. Elle s'articule en trois temps :
1. **Le Connecteur Conclusif :** *In conclusion, To summarize, Weighing both sides of the debate, Ultimately.*
2. **Le Bilan Équilibré :** Rappelez en une phrase les deux arguments majeurs analysés dans le corps du texte.
3. **Le Jugement Personnel / Recommandation :** Exprimez votre verdict nuancé.
4. **L'Ouverture :** Une perspective d'avenir ou une interrogation stimulante.`
    },
    {
      title: 'V. Modèle Intégral Rédigé : "Should English be Taught from Primary School in Senegal?"',
      content: `### Model Essay (220 Words) :
In our increasingly globalized economy, the question of linguistic proficiency has sparked intense debates among Senegalese educators. While French remains the official administrative medium, many policy makers advocate for the early introduction of English in elementary schools. This essay will examine the merits and potential challenges of such an educational reform.

On the one hand, introducing English at an early age provides undeniable pedagogical and cognitive advantages. Linguistic neuroscience proves that young children acquire foreign vocabulary and authentic phonological accents far more effortlessly than adolescents. Furthermore, English is the undisputed universal vehicle for science, computer coding, and international trade. Equipping Senegalese youngsters with early bilingualism will enhance their future competitiveness across West Africa and the global labor market.

On the other hand, skeptics point out structural obstacles. Primary school curricula are already overloaded, and primary school teachers would require intensive linguistic re-training. Moreover, some sociolinguists emphasize that priority should be granted to standardizing national languages such as Wolof, Pulaar, and Serer before burdening young pupils with an additional foreign tongue.

In conclusion, the early acquisition of English represents an extraordinary passport for modern youth, provided that teacher training institutes are adequately equipped. Ultimately, harmonizing national languages, French, and early English will forge truly versatile global citizens. *(218 words)*`
    },
    {
      title: 'VI. Grille d\'Évaluation Officielle de l\'Essay de 1ère',
      content: `### Critères de Notation Standardisés :
* **Relevance to Topic (2 pts) :** Respect intégral de la consigne et analyse dialectique (thèse et antithèse).
* **Paragraph Organization & Layout (1.5 pt) :** 4 paragraphes distincts, alinéas bien visibles, connecteurs logiques.
* **Grammatical Accuracy (1.5 pt) :** Accord sujet-verbe, temps cohérents, structures de phrases variées.
* **Vocabulary & Mechanics (1 pt) :** Richesse lexicale, orthographe correcte, ponctuation soignée.`
    }
  ]
};

export const LESSON_23_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-23',
  title: 'Unit 23: Oral Communication, Debates and Functional Language',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '60 min',
  description: 'Une interaction orale fluide demande de savoir écouter, demander des éclaircissements, formuler une réserve avec politesse et réfuter une objection. Lexique fonctionnel pour les débats scolaires et exposés oraux.',
  image: {
    url: '',
    caption: 'Figure 3.6 : Fonctions langagières de la communication orale et du débat d\'idées',
    alt: 'Schéma communication orale et débat',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#06b6d4">FUNCTIONAL LANGUAGE FOR DEBATES &amp; ORAL DISCUSSIONS</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Agreeing • Disagreeing • Expressing Opinion • Nuance</text><rect x="40" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">GIVING OPINION</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• In my view...</text><text x="50" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• As far as I see...</text><text x="50" y="156" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• From my perspective...</text><rect x="225" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="235" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">STRONG AGREEMENT</text><text x="235" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• I entirely agree.</text><text x="235" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• That is a valid point.</text><text x="235" y="156" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• I share your view.</text><rect x="410" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/><text x="420" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f87171">POLITE DISAGREEMENT</text><text x="420" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• I see your point, but...</text><text x="420" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• I am afraid I disagree.</text><text x="420" y="156" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• That is not entirely true.</text><rect x="595" y="70" width="165" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="605" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">CLARIFICATION</text><text x="605" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• What do you mean by?</text><text x="605" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Could you elaborate?</text><text x="605" y="156" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• To put it another way...</text></svg>`
  },
  sections: [
    {
      title: 'I. Fonctions Langagières de la Communication Orale',
      content: `| Fonction de Communication | Expressions Recommandées en Anglais |
| :--- | :--- |
| **Demander une répétition / clarification** | *Could you please repeat that?* / *What exactly do you mean by that?* / *Could you clarify your point?* |
| **Exprimer un accord complet** | *I completely agree with you.* / *You are absolutely right.* / *That is a very valid point.* |
| **Exprimer un accord partiel ou une nuance** | *I see your point, but...* / *That is true up to a point, however...* / *I agree in principle, but...* |
| **Exprimer un désaccord poli** | *I am afraid I cannot agree with that.* / *I have a different view on this matter.* / *I see things differently.* |
| **Prendre la parole dans un débat** | *May I add something here?* / *If I may interrupt politely...* / *I would like to highlight that...* |`
    },
    {
      title: 'II. Méthode pour Structurer un Débat en Classe',
      content: `Une intervention orale de 2 minutes lors d'un débat doit être découpée en 4 temps :
1. **Accroche & Prise de position (Hook & Stance) :** *“Ladies and gentlemen, today I stand firmly in favour of renewable energy subsidies.”*
2. **Premier argument étayé :** *“First and foremost, investing in solar power reduces our dependence on expensive imported fuel.”*
3. **Réfutation d'une objection courante :** *“Some opponents argue that solar panels are costly to install. However, the long-term operational savings far outweigh the initial investment.”*
4. **Appel à l'action / Conclusion :** *“For these reasons, adopting green policies is an urgent necessity for our nation.”*`
    }
,
    {
      title: 'III. Les Connecteurs du Débat Contradictoire à l\'Oral',
      content: `Pour débattre avec courtoisie et rigueur intellectuelle lors d'un exposé en classe d'anglais :
* **Exprimer un désaccord mesuré :** *I see your point, however... / I understand what you mean, but evidence suggests that...*
* **Réfuter un argument :** *With all due respect, that claim does not hold up when we examine the data.*
* **Demander des clarifications :** *Could you please elaborate on what you mean by...?*
* **Recadrer le débat :** *Let us not lose sight of our central question, which is...*`
    },
    {
      title: 'IV. Grille d\'Évaluation de la Prise de Parole en Continu et en Interaction',
      content: `| Critère Évalué | Niveau Débutant (A2) | Niveau Requis en Première (B1-B2) |
| :--- | :--- | :--- |
| **Fluence & Débit** | Hésitations fréquentes, phrases incomplètes | Débit naturel, pauses stratégiques appropriées |
| **Prononciation & Intonation** | Forte interférence du français, accent plat | Accent tonique respecté, intonation montante/descendante |
| **Interaction & Réactivité** | Réponses monocordes par *yes* ou *no* | Relance le dialogue, argumente et rebondit avec aisance |
| **Richesse Lexicale** | Répétition de mots simples (*good, bad, nice*) | Emploi de collocations précises et d'adverbes nuancés |`
    },
    {
      title: 'V. Cas Pratique de Débat : "Eco-Tourism vs Mass Tourism"',
      content: `### Dialogue de Débat Guidé :
* **Student A (Advocate for Eco-Tourism) :** *"In my view, Senegal should exclusively promote sustainable eco-tourism in regions like the Sine-Saloum and Casamance. Mass resort tourism generates immense plastic pollution, consumes excessive water in swimming pools, and rarely enriches local populations."*
* **Student B (Advocate for Economic Expansion) :** *"I understand your environmental concerns, Aissatou; nonetheless, we must be realistic about employment. Large coastal hotel resorts in Saly employ thousands of cooks, drivers, and artisans who depend on foreign visitors to support their families. Banning mass tourism would trigger severe economic hardship."*
* **Student A (Constructive Rebuttal) :** *"That is a valid point regarding jobs, Samba; however, by converting conventional hotels to green eco-resorts with solar power and locally sourced food, we can protect employment while safeguarding our precious ecosystems for the future."*`
    },
    {
      title: 'VI. Exercices de Mise en Situation Orale',
      content: `### Exercices
1. *Transform into a polite disagreement:* *"You are wrong about climate change."*
2. *Give a structured 1-minute oral response to this prompt:* *"Should mobile phones be banned inside classrooms?"*

### Corrigé Détaillé
1. *Polite alternative :* *"I understand your perspective, but I respectfully disagree, because scientific evidence demonstrates that..."* (Formulation diplomatique).
2. *Sample answer :* *"In my opinion, mobile phones should not be completely banned inside classrooms, but rather regulated strictly. While unauthorized messaging and social media clearly disrupt scholastic concentration, smartphones can serve as versatile research tools when teachers integrate digital quizzes or online dictionaries into their lessons."*`
    }  ]
};

export const LESSON_24_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-24',
  title: 'Unit 24: Pronunciation and Phonetics — Vowels, Word Stress, Final -S and Final -ED',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '70 min',
  description: 'La prononciation anglaise ne se déduit pas de l’orthographe. Maîtrise des voyelles longues et brèves, de l’accent tonique (word stress), des trois réalisations phonétiques du pluriel et 3e personne (-s : /s/, /z/, /ɪz/) et du prétérit (-ed : /t/, /d/, /ɪd/).',
  image: {
    url: '',
    caption: 'Figure 3.7 : Carte phonétique des sons vocaliques et consonantiques au Baccalauréat',
    alt: 'Schéma phonétique',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a855f7">ENGLISH PHONETICS : VOWELS, INFLECTIONS &amp; SCHWA</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">IPA Symbols • Final -ED • Final -S</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">FINAL -ED PRONUNCIATION</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• /t/ after voiceless (/p,k,f,s,ʃ,tʃ/)</text><text x="50" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• /d/ after voiced sounds &amp; vowels</text><text x="50" y="156" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• /ɪd/ only after /t/ or /d/</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">FINAL -S PRONUNCIATION</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• /s/ after voiceless (/p,t,k,f,θ/)</text><text x="300" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• /z/ after voiced consonants &amp; vowels</text><text x="300" y="156" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• /ɪz/ after sibilants (/s,z,ʃ,tʃ,dʒ/)</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">THE NEUTRAL SCHWA (/ə/)</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Most common sound in English</text><text x="550" y="138" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Unstressed syllables: a-bout /əˈbaʊt/</text><text x="550" y="156" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• doc-tor /ˈdɒktə/, teach-er /ˈtiːtʃə/</text></svg>`
  },
  sections: [
    {
      title: 'I. La Prononciation de la Terminaison -ED des Verbes Passés',
      content: `C'est une question systématique aux épreuves de fin d'études. La prononciation de *-ed* dépend **uniquement du son final de la base verbale** :

| Règle Phonétique | Son Final de la Base Verbale | Prononciation de -ED | Exemples de Verbes |
| :--- | :--- | :--- | :--- |
| **Règle 1 : /ɪd/** | Sons terminés par **/t/** ou **/d/** | **/ɪd/** (ajoute une syllabe) | *wanted*, *started*, *decided*, *visited*, *needed* |
| **Règle 2 : /t/** | Sons sourds : **/p, k, f, s, ʃ (sh), tʃ (ch), θ/** | **/t/** (son bref sans syllabe) | *worked*, *stopped*, *washed*, *watched*, *laughed*, *fixed* |
| **Règle 3 : /d/** | Sons sonores : voyelles et consonnes **/b, g, v, z, m, n, l, r/** | **/d/** (son voisé fluide) | *played*, *cleaned*, *lived*, *called*, *opened*, *travelled* |`
    },
    {
      title: 'II. La Prononciation de la Terminaison -S (Pluriels & 3e Personne)',
      content: `| Son Final du Nom ou Verbe | Prononciation de -S | Exemples Clés |
| :--- | :--- | :--- |
| Sons sourds : **/p, t, k, f, θ/** | **/s/** | *books, caps, students, roofs, laughs, sits* |
| Sons sifflants : **/s, z, ʃ (sh), tʃ (ch), dʒ (j)/** | **/ɪz/** (ajoute une syllabe) | *watches, washes, boxes, buses, bridges, judges* |
| Sons voisés : voyelles et **/b, d, g, v, m, n, ŋ, l, r/** | **/z/** | *bags, days, teachers, dogs, rooms, calls, lives* |`
    },
    {
      title: 'III. L\'Accent Tonique (Word Stress) & Le Schwa (/ə/)',
      content: `* En anglais, chaque mot de plusieurs syllabes possède **une syllabe principale accentuée** (prononcée plus fort, plus haut et plus nettement).
* Les syllabes non accentuées sont souvent réduites au son neutre appelé **schwa (/ə/)** :
  * *teacher* /ˈtiː.tʃ**ə**r/, *doctor* /ˈdɒk.t**ə**r/, *banana* /b**ə**ˈnɑː.n**ə**/.
* **Changement de catégorie grammaticale par l'accent :**
  * Nom (accent sur 1ʳᵉ syllabe) : *an **IN**crease*, *a **RE**cord*, *a **PRO**ject*.
  * Verbe (accent sur 2ᵉ syllabe) : *to in**CREASE***, *to re**CORD***, *to pro**JECT***.`
    },
    {
      title: 'IV. Exercices Phonétiques & Corrigé',
      content: `### Exercices
1. **Classify the following past verbs according to the pronunciation of -ed (/t/, /d/, or /ɪd/):**
   * *visited, asked, played, divided, reached, cleaned, invited, stopped*.
2. **Classify according to the pronunciation of -s (/s/, /z/, or /ɪz/):**
   * *cats, watches, friends, boxes, maps, pens*.

### Corrigé Détaillé
1. **Prononciation de -ed :**
   * **/t/ :** *asked, reached, stopped*.
   * **/d/ :** *played, cleaned*.
   * **/ɪd/ :** *visited, divided, invited*.
2. **Prononciation de -s :**
   * **/s/ :** *cats, maps*.
   * **/z/ :** *friends, pens*.
   * **/ɪz/ :** *watches, boxes*.`
    }
  ,
    {
      title: 'V. Les Diphtongues et Paires Minimales au Programme de Première',
      content: `Une diphtongue est un son vocalique continu où la langue glisse d'une voyelle vers une autre :

| Diphtongue | Transcription IPA | Exemples Canoniques | Paire Minimale d'Examen |
| :--- | :--- | :--- | :--- |
| **/eɪ/** | *face, make, day* | /feɪs/, /meɪk/, /deɪ/ | *pen* (/pen/) vs. *pain* (/peɪn/) |
| **/aɪ/** | *price, high, night* | /praɪs/, /haɪ/, /naɪt/ | *bit* (/bɪt/) vs. *bite* (/baɪt/) |
| **/ɔɪ/** | *choice, boy, noise* | /tʃɔɪs/, /bɔɪ/, /nɔɪz/ | *ball* (/bɔːl/) vs. *boil* (/bɔɪl/) |
| **/əʊ/** | *go, home, road* | /ɡəʊ/, /həʊm/, /rəʊd/ | *got* (/ɡɒt/) vs. *goat* (/ɡəʊt/) |
| **/aʊ/** | *now, house, crowd* | /naʊ/, /haʊs/, /kraʊd/ | *car* (/kɑː/) vs. *cow* (/kaʊ/) |`
    },
    {
      title: 'VI. Exercices Récapitulatifs de Phonétique & Corrigé',
      content: `### Exercices
1. *Classify according to the pronunciation of -ed:* *helped, cleaned, decided, watched, visited, stayed, wanted, laughed*.
2. *Underline the stressed syllable:* *important, decision, photograph, photography, understand, Japanese*.

### Corrigé Détaillé
1. **/t/ :** *helped, watched, laughed* ; **/d/ :** *cleaned, stayed* ; **/ɪd/ :** *decided, visited, wanted*.
2. im**POR**tant ; de**CI**sion (pénultième en -sion) ; **PHO**tograph ; pho**TO**graphy (antépénultième en -phy) ; under**STAND** ; Japa**NESE** (suffixe -ese accentué).`
    }
  ]
};

export const LESSON_25_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-25',
  title: 'Unit 25: Reading Comprehension Mastery — Skimming, Scanning and Inferences',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '65 min',
  description: 'La compréhension écrite ne consiste pas à traduire mot à mot. Maîtrise des stratégies efficaces de lecture : Skimming (saisie de l’idée globale), Scanning (repérage de détails chiffrés ou factuels), déduction lexicale en contexte et repérage des pronoms anaphoriques.',
  image: {
    url: '',
    caption: 'Figure 3.8 : Méthodologie stratégique de compréhension de texte (Skimming, Scanning & Inferences)',
    alt: 'Schéma méthodologie de lecture',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#10b981">STRATEGIC READING COMPREHENSION FOR THE BACCALAUREATE</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Skimming • Scanning • Inferences • Referencing</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">1. SKIMMING</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Rapid glance at title &amp; subtitles</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Read first &amp; last sentences</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Grasp general topic &amp; tone</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">2. SCANNING</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Search specific keywords</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Locate dates, numbers, names</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Answer factual 'Wh-' questions</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">3. REFERENCING &amp; CONTEXT</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• "They" in line 12 refers to...</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Deduce unknown word from context</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Understand implicit inferences</text></svg>`
  },
  sections: [
    {
      title: 'I. Les Trois Étapes d\'une Lecture Stratégique',
      content: `Pour réussir l'épreuve de compréhension sans se laisser déborder par le temps :

1. **Étape 1 : Le Survol Rapide (*Skimming*) — 3 minutes :**
   * Lisez le titre, le sous-titre, le nom de l'auteur et la source en bas de page.
   * Lisez attentivement la première phrase de chaque paragraphe (qui contient généralement la *topic sentence*).
   * Identifiez le thème général, le type de texte (article de presse, essai, récit) et l'intention de l'auteur.
2. **Étape 2 : L'Exploration des Questions — 4 minutes :**
   * Lisez l'ensemble des questions **avant** de relire le texte en détail.
   * Soulignez les mots interrogatifs (*Who, Where, When, Why, How*) et les mots-clés de la consigne.
3. **Étape 3 : Le Repérage Cible (*Scanning*) :**
   * Balayez le texte du regard pour localiser précisément les noms propres, dates, chiffres ou synonymes liés à chaque question.`
    },
    {
      title: 'II. Les Questions de Référence (*Referencing Questions*)',
      content: `À chaque examen, on vous demande ce que représentent certains pronoms (*What or who do the following words refer to in the text?*) :
* *they, them, their :* renvoient à un groupe de personnes ou à un nom pluriel mentionné juste avant.
* *it, its :* renvoient à une chose, un animal, une idée ou un concept singulier.
* *which, who, that :* renvoient à l'antécédent immédiatement placé avant le pronom relatif.
* **Méthode :** Remplacez mentalement le pronom par le groupe nominal candidat dans la phrase. Si le sens reste limpide et grammaticalement correct, vous avez trouvé le bon antécédent.`
    },
    {
      title: 'III. Déduire le Sens d\'un Mot Inconnu en Contexte',
      content: `Ne vous arrêtez jamais sur un mot inconnu sans observer ses indices environnants :
1. **La fonction grammaticale :** Le mot est-il un nom, un verbe, un adjectif ?
2. **Les relations logiques :** Présence de connecteurs d'opposition (*whereas, but*) indiquant que le mot signifie le contraire d'un mot connu.
3. **Les préfixes et suffixes :** *un-*, *dis-*, *mis-* (sens négatif ou opposé), *-less* (dépourvu de), *-ful* (rempli de).`
    }
  ,
    {
      title: 'IV. Texte d\'Entraînement : The Green Transformation of Saint-Louis',
      content: `### Reading Passage
The historic city of Saint-Louis, founded in 1659 at the mouth of the Senegal River, stands as an architectural jewel and a designated UNESCO World Heritage site. However, its low-lying topography renders **it** uniquely vulnerable to the perils of global climate change. 

In recent years, swelling ocean swells have breached the narrow sand spit of the Langue de Barbarie, allowing saline ocean water to submerge historic colonial warehouses and displacement of residential fishing neighborhoods. In response, municipal authorities and community youth associations **have initiated** an unprecedented ecological defense campaign. 

Engineers have constructed a five-kilometer protective seawall of basalt boulders, while thousands of student volunteers have planted mangrove saplings along river channels to absorb wave energy. A senior resident observed: *"When high tides arrived last winter, the protective seawalls held firm, and our homes remained completely dry."* This successful mobilization illustrates how scientific engineering and active civic solidarity can safeguard vulnerable cultural heritage against oceanic disruption.`
    },
    {
      title: 'V. Épreuve Complète de Compréhension Textuelle Type Première',
      content: `### Questions
1. *True or False? Justify by quoting the text:*
   * a) Saint-Louis is situated high above sea level and faces no flood risks.
   * b) Youth volunteers participated actively in planting protective coastal vegetation.
2. *Referencing :* What does the pronoun **it** refer to in paragraph 1?
3. *Vocabulary :* Find in the text words meaning:
   * a) *Broken through / broken open* (paragraph 2) : ................................
   * b) *Rock revetments / large stones* (paragraph 3) : ................................`
    },
    {
      title: 'VI. Corrigé Analytique Détaillé',
      content: `### Corrigé Officiel
1. a) **False :** *"...its low-lying topography renders it uniquely vulnerable to the perils of global climate change."*
   b) **True :** *"...while thousands of student volunteers have planted mangrove saplings along river channels to absorb wave energy."*
2. **it** refers to: *The historic city of Saint-Louis*.
3. a) *breached* ; b) *boulders* (or: *basalt boulders*).`
    }
  ]
};

export const LESSON_26_ANGLAIS_1ERE_MANUEL: LessonContent = {
  id: 'anglais-1ere-unit-26',
  title: 'Unit 26: Revision, Full Grammar Assessment & Irregular Verbs Appendix',
  module: 'Partie 3 • Société, Méthodologie d\'Écriture & Phonétique',
  level: 'Première (Séries L & S)',
  readTime: '75 min',
  description: 'Évaluation bilan annuelle combinant grammaire, temps, voix passive, discours rapporté, conditionnels et rédaction. Tableaux récapitulatifs complets des verbes irréguliers et des connecteurs logiques indispensables.',
  image: {
    url: '',
    caption: 'Figure 3.9 : Barème de notation officiel et matrice des compétences de l\'épreuve d\'anglais',
    alt: 'Schéma barème de notation',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f43f5e">NATIONAL BACCALAUREATE ENGLISH EVALUATION GRID</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Reading Comprehension (6 pts) • Linguistic Competence (8 pts) • Writing (6 pts)</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">READING (6 PTS)</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• True/False with text justifications</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Wh- open factual questions</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Pronoun referencing &amp; vocabulary</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">LINGUISTIC (8 PTS)</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Rephrasing / transformations</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Word formation (derivation)</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Cloze test with appropriate words</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">WRITING (6 PTS)</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Topic 1: Argumentative essay</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Topic 2: Formal or friendly letter</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Evaluation: structure, syntax, vocabulary</text></svg>`
  },
  sections: [
    {
      title: 'I. Comprehensive Grammar Test — Épreuve Bilan',
      content: `### Test de Synthèse Grammaticale (20 Points)

**Part A. Put the verbs in brackets into the correct tense (5 pts) :**
1. She usually *(walk)* to the high school, but today she *(take)* the public bus.
2. When the teacher arrived at the classroom, the students *(already / write)* the summary.
3. Oumar *(live)* in Saint-Louis since 2021.
4. By this time next year, they *(complete)* the new regional stadium.

**Part B. Rewrite in the Passive Voice (3 pts) :**
5. Senegalese scientists have developed a new drought-resistant crop variety.
6. The municipal authorities will clean the streets tomorrow.

**Part C. Turn into Reported Speech (3 pts) :**
7. "I will bring my dictionary tomorrow," Cheikh promised his classmate.
8. "Where did you buy that English novel?" Awa asked her friend.

**Part D. Complete the Conditionals (4 pts) :**
9. If you heat ice, it *(melt)*.
10. If I had enough financial resources, I *(travel)* across all ECOWAS nations.
11. If she had remembered the appointment, she *(not miss)* the interview.

**Part E. Classify the phonetics of the ending (5 pts) :**
12. Give the phonetic pronunciation of *-ed* for : *wanted, looked, lived*.
13. Give the phonetic pronunciation of *-s* for : *books, watches, pens*.`
    },
    {
      title: 'II. Corrigé Intégral et Grille de Notation',
      content: `### Corrigé Détaillé du Test
* **Part A :**
  1. *walks* / *is taking*
  2. *had already written*
  3. *has lived*
  4. *will have completed*
* **Part B :**
  5. *A new drought-resistant crop variety **has been developed** by Senegalese scientists.*
  6. *The streets **will be cleaned** by the municipal authorities tomorrow.*
* **Part C :**
  7. *Cheikh promised his classmate that he **would bring** his dictionary **the following day**.*
  8. *Awa asked her friend **where she had bought** that English novel.*
* **Part D :**
  9. *melts* (Zero conditional)
  10. *would travel* (Second conditional)
  11. *would not have missed* (Third conditional)
* **Part E :**
  12. *wanted* (/ɪd/) ; *looked* (/t/) ; *lived* (/d/).
  13. *books* (/s/) ; *watches* (/ɪz/) ; *pens* (/z/).`
    },
    {
      title: 'III. Annexe : Table Exhaustive des Verbes Irréguliers Indispensables',
      content: `| Base Verbale | Simple Past | Past Participle | Traduction Française |
| :--- | :--- | :--- | :--- |
| **be** | was / were | been | être |
| **become** | became | become | devenir |
| **begin** | began | begun | commencer |
| **break** | broke | broken | casser |
| **bring** | brought | brought | apporter |
| **build** | built | built | construire |
| **buy** | bought | bought | acheter |
| **catch** | caught | caught | attraper |
| **choose** | chose | chosen | choisir |
| **come** | came | come | venir |
| **cost** | cost | cost | coûter |
| **cut** | cut | cut | couper |
| **do** | did | done | faire |
| **draw** | drew | drawn | dessiner |
| **drink** | drank | drunk | boire |
| **drive** | drove | driven | conduire |
| **eat** | ate | eaten | manger |
| **fall** | fell | fallen | tomber |
| **feel** | felt | felt | ressentir |
| **fight** | fought | fought | se battre |
| **find** | found | found | trouver |
| **fly** | flew | flown | voler |
| **forget** | forgot | forgotten | oublier |
| **get** | got | got / gotten | obtenir |
| **give** | gave | given | donner |
| **go** | went | gone | aller |
| **grow** | grew | grown | grandir / cultiver |
| **have** | had | had | avoir |
| **hear** | heard | heard | entendre |
| **hide** | hid | hidden | cacher |
| **hold** | held | held | tenir |
| **keep** | kept | kept | garder |
| **know** | knew | known | savoir / connaître |
| **lead** | led | led | mener / diriger |
| **leave** | left | left | quitter / laisser |
| **lose** | lost | lost | perdre |
| **make** | made | made | fabriquer / faire |
| **meet** | met | met | rencontrer |
| **pay** | paid | paid | payer |
| **put** | put | put | mettre |
| **read** | read (prononcé /red/) | read (/red/) | lire |
| **run** | ran | run | courir |
| **say** | said | said | dire |
| **see** | saw | seen | voir |
| **sell** | sold | sold | vendre |
| **send** | sent | sent | envoyer |
| **sing** | sang | sung | chanter |
| **sit** | sat | sat | s'asseoir |
| **sleep** | slept | slept | dormir |
| **speak** | spoke | spoken | parler |
| **spend** | spent | spent | dépenser / passer (temps) |
| **stand** | stood | stood | être debout |
| **steal** | stole | stolen | voler (dérober) |
| **swim** | swam | swum | nager |
| **take** | took | taken | prendre |
| **teach** | taught | taught | enseigner |
| **tell** | told | told | raconter / dire |
| **think** | thought | thought | penser |
| **throw** | threw | thrown | jeter |
| **understand**| understood | understood | comprendre |
| **wear** | wore | worn | porter (habits) |
| **win** | won | won | gagner |
| **write** | wrote | written | écrire |`
    }
,
    {
      title: 'IV. Section Rédactionnelle : Deux Sujets Types au Choix',
      content: `### Topics (200 Words) :
* **Topic 1 (Argumentative Essay) :**
  *"Some people believe that technical and vocational training is more valuable for African youth than traditional university degrees. To what extent do you agree or disagree?"*
* **Topic 2 (Formal Letter) :**
  *Write a formal letter to your regional education director to request the establishment of a modern computer laboratory powered by solar energy in your high school.*`
    },
    {
      title: 'V. Corrigé Modèle du Sujet 1 (Vocational Training)',
      content: `### Model Composition (200 Words) :
In contemporary developing nations, the question of educational alignment with employment demands has become a central developmental priority. While traditional university degrees have long been revered as symbols of social prestige, vocational and technical education is increasingly recognized as the true engine of practical economic emergence. This essay will examine why vocational proficiency holds exceptional value for modern youth.

To begin with, vocational institutes equip young graduates with directly employable skills that respond immediately to market needs. While thousands of general university graduates in humanities face prolonged unemployment, certified technicians in solar energy, automotive mechanics, agricultural irrigation, and electrical wiring find immediate occupational opportunities. Furthermore, technical training fosters self-employment and entrepreneurial resilience. A trained digital coder or refrigeration technician can establish a neighborhood micro-enterprise without waiting for scarce public sector recruitment.

However, general university education remains indispensable for producing visionary researchers, physicians, and jurists. Consequently, the optimal educational policy should not oppose these two branches, but rather elevate technical diplomas to equal dignity. In conclusion, empowering youth through specialized vocational skills bridges the gap between education and economic prosperity, providing our nation with the practical talent required for sustainable emergence.`
    },
    {
      title: 'VI. Synthèse des Compétences du Programme de Première & Auto-Diagnostic',
      content: `### Bilan Annuel des Compétences Requises pour le Passage en Terminale :
* **Grammaire :** Maîtrise des temps du récit (Past Continuous, Past Perfect), du Present Perfect (since/for), des 4 types de conditionnels, du discours indirect et de la voix passive à tous les temps.
* **Vocabulaire :** Maîtrise des 10 champs thématiques clés (éducation, environnement, technologies, santé, citoyenneté).
* **Phonologie :** Prédiction rigoureuse des sons de -ed et -s et règles d'accent tonique des suffixes.
* **Écrit :** Capacité à rédiger une lettre formelle irréprochable et un essai argumentatif structuré de 200 mots selon le modèle P.E.E.L.`
    }  ]
};

export const COURSES_ANGLAIS_1ERE_MANUEL_PART3 = [
  LESSON_18_ANGLAIS_1ERE_MANUEL,
  LESSON_19_ANGLAIS_1ERE_MANUEL,
  LESSON_20_ANGLAIS_1ERE_MANUEL,
  LESSON_21_ANGLAIS_1ERE_MANUEL,
  LESSON_22_ANGLAIS_1ERE_MANUEL,
  LESSON_23_ANGLAIS_1ERE_MANUEL,
  LESSON_24_ANGLAIS_1ERE_MANUEL,
  LESSON_25_ANGLAIS_1ERE_MANUEL,
  LESSON_26_ANGLAIS_1ERE_MANUEL
];
