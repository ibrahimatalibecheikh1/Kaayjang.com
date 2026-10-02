import { LessonContent } from './courses';

// =========================================================================
// ANGLAIS CLASSE DE TERMINALE (SÉRIES L & S) — MANUEL OFFICIEL NATIONAL
// Conforme au programme officiel de la République du Sénégal
// PARTIE III, IV & V : PHONOLOGIE, ÉCRIT & PRÉPARATION AU BACCALAURÉAT
// =========================================================================

export const LESSON_13_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-13',
  title: 'Part IV - Phonology & Pronunciation: Sounds, Word Stress Rules & Final Inflections',
  module: 'Parties IV & V • Phonologie & Préparation au Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Maîtrise complète de la phonologie du Baccalauréat : alphabet phonétique international, voyelles courtes vs longues, diphtongues, accent lexical prédictible selon les suffixes (-tion, -ic, -ity, -ate, -ee), accentuation de phrase, et prononciation rigoureuse de -ed (/t/, /d/, /ɪd/) et -s (/s/, /z/, /ɪz/).',
  image: {
    url: '',
    caption: 'Figure T3.1 : Règles d\'accentuation tonique (Word Stress) des mots polysyllabiques au Bac',
    alt: 'Schéma phonologie et accent tonique',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a855f7">ADVANCED PHONOLOGY : POLYSYLLABIC WORD STRESS RULES</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Suffix Rules • Noun/Verb Shift • Stress Patterns</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">PENULTIMATE (-1 Syllable)</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Suffixes: -ic, -sion, -tion</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">e-lec-'TRIC, de-ci-'SION,</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">e-du-'CA-tion</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">ANTEPENULTIMATE (-2 Syllables)</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Suffixes: -cy, -ty, -phy, -gy, -al</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">de-'MO-cra-cy, 'E-qual-ly,</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">pho-'TO-gra-phy</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">NOUN / VERB STRESS SHIFT</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Noun (1st syllable): 'PRO-test</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Verb (2nd syllable): pro-'TEST</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">'IN-crease (N) vs in-'CREASE (V)</text></svg>`
  },
  sections: [
    {
      title: 'I. La Prononciation de la Terminaison -ED au Baccalauréat',
      content: `La terminaison **-ed** des verbes réguliers au prétérit et au participe passé possède trois prononciations distinctes, déterminées par le dernier son du radical :

| Son de -ED | Condition Phonétique Obligatoire | Exemples Types du Bac |
| :--- | :--- | :--- |
| **/ɪd/** | Verbes terminés par le son **/t/** ou **/d/** (ajoute une syllabe sonore) | *visited, started, elected, divided, succeeded, invited* |
| **/t/** | Verbes terminés par une consonne sourde (cordes vocales immobiles) : **/p, k, f, s, ʃ (sh), tʃ (ch), θ/** | *worked, stopped, watched, washed, fixed, laughed, forced* |
| **/d/** | Verbes terminés par une consonne voisée (cordes vocales vibrantes) ou une voyelle : **/b, g, v, z, m, n, l, r, dʒ/** | *played, cleaned, lived, rained, begged, carried, damaged* |

### Astuce Mnémotechnique pour le Bac :
Placez deux doigts sur votre gorge : si vos cordes vocales **vibrent** sur le dernier son du verbe (ex: *playyyy*), le *-ed* se prononcera **/d/**. Si la gorge **ne vibre pas** (ex: *stop*), le *-ed* se prononce d'un souffle sec **/t/**.`
    },
    {
      title: 'II. La Prononciation de la Terminaison -S (Pluriels & 3e Personne)',
      content: `| Son de -S | Condition Phonétique | Exemples Types du Bac |
| :--- | :--- | :--- |
| **/s/** | Consonnes sourdes : **/p, t, k, f, θ/** | *books, caps, students, proofs, myths* |
| **/ɪz/** | Sons sifflants et chuintants : **/s, z, ʃ, tʃ, dʒ, ʒ/** | *watches, boxes, classes, judges, breezes, villages* |
| **/z/** | Voyelles et consonnes voisées : **/b, d, g, v, m, n, ŋ, l, r/** | *teachers, girls, dogs, boys, days, songs, lives* |`
    },
    {
      title: 'III. Règles de Prédiction de l\'Accent Tonique (Word Stress)',
      content: `L'accent lexical n'est pas aléatoire en anglais ; il répond à des règles morphologiques vérifiées par les suffixes :

1. **Accent sur l'Avant-Dernière Syllabe (Pénultième) :**
   * Mots en **-TION, -SION** : *edu**CA**tion*, *tra**DI**tion*, *de**CI**sion*.
   * Mots en **-IC, -ICAL** : *econo**MET**ric*, *scien**TI**fic*, *dra**MA**tic*.
2. **Accent sur l'Avant-Avant-Dernière Syllabe (Antépénultième) :**
   * Mots en **-ITY** : *possi**BI**lity*, *oppor**TU**nity*, *e**QUA**lity*.
   * Mots en **-ATE** (verbes de 3 syllabes ou +) : ***COM**plicate*, *in**VES**tigate*, *demonstrate*.
   * Mots en **-GY, -PHY** : *tech**NO**logy*, *ge**O**graphy*, *phi**LO**sophy*.
3. **Accent sur la Syllabe Finale :**
   * Mots d'origine française en **-EE, -EER, -ESE** : *employ**EE***, *refu**GEE***, *engi**NEER***, *Sene**GALESE***.`
    },
    {
      title: 'IV. Déplacement d\'Accent : Noms vs. Verbes Dissyllabiques',
      content: `En anglais, un grand nombre de mots de deux syllabes changent de place d'accent tonique selon qu'ils sont employés comme nom ou comme verbe :
* **Nom : Accent sur la 1ère syllabe** (\\'XX)
* **Verbe : Accent sur la 2e syllabe** (X\\'X)

| Mot | Forme Nom (Accent Syllabe 1) | Forme Verbe (Accent Syllabe 2) |
| :--- | :--- | :--- |
| **EXPORT** | ***EX**port* (Un produit d'exportation) | *ex**PORT*** (Exporter des biens) |
| **IMPORT** | ***IM**port* (Une importation) | *im**PORT*** (Importer) |
| **INCREASE** | ***IN**crease* (Une augmentation) | *in**CREASE*** (Augmenter) |
| **PROTEST** | ***PRO**test* (Une manifestation) | *pro**TEST*** (Manifester, protester) |
| **REBEL** | ***RE**bel* (Un rebelle) | *re**BEL*** (Se rebeller) |
| **RECORD** | ***RE**cord* (Un enregistrement) | *re**CORD*** (Enregistrer) |`
    },
    {
      title: 'V. Voyelles Courtes vs. Longues et Diphtongues Fréquentes',
      content: `Le candidat au Bac doit distinguer les paires minimales de voyelles pour éviter les contresens :

| Paire Minimale | Voyelle Courte (Lax) | Voyelle Longue (Tense) | Différence de Sens |
| :--- | :--- | :--- | :--- |
| **/ɪ/** vs. **/iː/** | *ship* (/ʃɪp/ navire) | *sheep* (/ʃiːp/ mouton) | Durée et tension des lèvres |
| **/e/** vs. **/eɪ/** | *pen* (/pen/ stylo) | *pain* (/peɪn/ douleur) | Voyelle simple vs diphtongue |
| **/æ/** vs. **/ɑː/** | *cat* (/kæt/ chat) | *cart* (/kɑːt/ charrette) | Ouverture et profondeur vocale |
| **/ʊ/** vs. **/uː/** | *full* (/fʊl/ plein) | *fool* (/fuːl/ imbécile) | Voyelle courte vs longue |
| **/ʌ/** vs. **/ɜː/** | *hut* (/hʌt/ cabane) | *hurt* (/hɜːt/ blesser) | Voyelle centrale courte vs longue |`
    },
    {
      title: 'VI. Exercices de Phonologie Types du Baccalauréat & Corrigé',
      content: `### Exercices
1. **Classify according to the pronunciation of the final -ed:** *developed, accepted, produced, educated, offered, linked, planted, banned*.
2. **Classify according to the pronunciation of final -s:** *books, watches, teachers, caps, villages, days*.
3. **Underline the stressed syllable in each word:** *education, geography, employee, scientific, responsibility, export (noun), export (verb)*.

### Corrigé Détaillé
1. **/t/ :** *developed, produced, linked* ; **/d/ :** *offered, banned* ; **/ɪd/ :** *accepted, educated, planted*.
2. **/s/ :** *books, caps* ; **/z/ :** *teachers, days* ; **/ɪz/ :** *watches, villages*.
3. edu**CA**tion (pénultième en -tion) ; ge**O**graphy (antépénultième en -phy) ; employ**EE** (suffixe -ee accentué) ; scien**TI**fic (pénultième en -ic) ; responsi**BI**lity (antépénultième en -ity) ; **EX**port (nom) ; ex**PORT** (verbe).`
    }
  ]
};

export const LESSON_14_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-14',
  title: 'Part V - Baccalaureate Preparation: Reading Comprehension Mastery & Question Types',
  module: 'Parties IV & V • Phonologie & Préparation au Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Stratégie intégrale pour réussir les 6 points de compréhension écrite au Baccalauréat : décodage des questions Vrai/Faux avec citation exacte, repérage d\'anaphores et de pronoms (referencing), devinette lexicale en contexte, et réponses rédigées synthétiques.',
  image: {
    url: '',
    caption: 'Figure T3.2 : Les 8 schémas récurrents de transformation de phrases (Rephrasing) au Baccalauréat',
    alt: 'Schéma rephrasing Bac',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">THE 8 CANONICAL SENTENCE TRANSFORMATION PATTERNS</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Active/Passive • Reported • Conditionals • Inversion</text><rect x="40" y="70" width="345" height="65" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="55" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">1. PASSIVE &amp; IMPERSONAL PASSIVE</text><text x="55" y="110" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">People say he is smart ──→ He is said to be smart.</text><rect x="415" y="70" width="345" height="65" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="430" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">2. CONDITIONALS &amp; WISHES</text><text x="430" y="110" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">I did not study, so I failed ──→ If I had studied, I wouldn't have failed.</text><rect x="40" y="145" width="345" height="65" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="55" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">3. NEGATIVE INVERSION</text><text x="55" y="185" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">He had rarely seen it ──→ Rarely had he seen it.</text><rect x="415" y="145" width="345" height="65" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/><text x="430" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">4. PREFERS / WOULD RATHER</text><text x="430" y="185" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">I prefer tea to coffee ──→ I would rather drink tea than coffee.</text></svg>`
  },
  sections: [
    {
      title: 'I. Décodage Stratégique des Consignes d\'Examen',
      content: `Dans l'épreuve de compréhension au Baccalauréat sénégalais (notée sur 6 points), la réussite dépend du respect strict des consignes formulées en anglais :

1. **"True / False with justification" :**
   * Écrivez toujours la lettre **T** ou **F** en majuscule bien visible.
   * La justification doit être une **citation textuelle exacte entre guillemets**. Ne modifiez aucun mot.
   * Si la consigne précise : *"Justify by quoting a sentence from paragraph 2"*, citez impérativement la phrase entière.
2. **"Answer the following questions in your own words" :**
   * Répondez par une phrase complète (Sujet + Verbe + Complément).
   * **Le copier-coller brut est lourdement pénalisé.** Reformulez à l'aide de synonymes ou de structures passives.
3. **"Complete the table based on the text" :**
   * Remplissez les cases avec concision et précision, sans verbiage superflu.`
    },
    {
      title: 'II. Traitement des Questions de Référenciation (Referencing)',
      content: `La question type : *"What or who do the underlined words refer to in the text?"* vérifie la compréhension de la chaîne anaphorique du texte :

### Démarche Méthodique :
1. Repérez le mot souligné dans le texte et remontez d'une à deux phrases en arrière.
2. Analysez la nature grammaticale du mot :
   * **HE / HIM / HIS :** Désigne un être humain masculin singulier mentionné juste avant.
   * **SHE / HER / HERS :** Désigne un être humain féminin singulier.
   * **IT / ITS :** Désigne un objet, un concept abstrait, une institution ou un animal singulier.
   * **THEY / THEM / THEIR :** Désigne un groupe de personnes ou des objets au pluriel.
   * **WHICH / THAT :** Désigne immédiatement l'antécédent situé juste avant le pronom relatif.
3. Testez votre réponse en remplaçant mentalement le pronom par l'antécédent choisi pour vérifier que la phrase reste parfaitement cohérente.`
    },
    {
      title: 'III. Les Questions de Vocabulaire en Contexte (Contextual Guessing)',
      content: `La consigne : *"Find in paragraph X words or expressions synonymous with / meaning..."* :
* **Respectez impérativement la classe grammaticale :**
  * Si la définition est un verbe à l'infinitif, la réponse doit être un verbe à l'infinitif.
  * Si la définition est au passé (-ed), la réponse doit être au passé (-ed).
  * Si la définition est un adjectif, la réponse doit être un adjectif.
* **Analysez les indices contextuels :** contrastes (*although, however*), reformulations (*that is to say, in other words*) ou exemples (*such as, for instance*).`
    },
    {
      title: 'IV. Texte d\'Entraînement Approfondi : Renewable Horizons in Senegal',
      content: `### Reading Passage
Over the past decade, Senegal has emerged as one of the regional pioneers in clean energy generation across Sub-Saharan Africa. The inauguration of the Taïba Ndiaye wind power facility and massive photovoltaic plants in Bokhol and Malicounda has propelled the national renewable energy share beyond thirty percent of the national grid. 

Historically, the country relied almost exclusively on imported fossil fuels, **which** drained national currency reserves and subjected households to frequent power interruptions. Today, these modern solar fields provide electricity to hundreds of rural clinics and schools. A local cooperative leader remarked: *"Before solar panels were installed, our children could not study after sunset, and vaccines spoiled quickly in warm dispensaries. Now, **they** learn comfortably in lighted classrooms."*

Furthermore, national authorities are drafting policies to export surplus green electricity to neighboring nations through the West African Power Pool. By leveraging its vast solar radiation and Atlantic wind resources, Senegal proves that economic growth can harmonize with environmental stewardship.`
    },
    {
      title: 'V. Épreuve Complète de Compréhension Type Baccalauréat',
      content: `### Examination Questions (6 Marks)
1. **True or False? Justify by quoting the text:**
   * a) Senegal produces less than 15 percent of its electricity from renewable sources.
   * b) In the past, electricity generation was heavily dependent on foreign fossil energy.
2. **Contextual Referencing:**
   * What do the following words refer to in the text?
     - *which* (paragraph 2, line 2) : ................................
     - *they* (paragraph 2, line 7) : ................................
3. **Vocabulary in Context:**
   * Find in the text words meaning:
     - a) *Pushed forward / driven* (paragraph 1) : ................................
     - b) *Excess / remaining quantity* (paragraph 3) : ................................
4. **Comprehension Question:**
   * In your own words, mention two concrete benefits that rural communities have enjoyed thanks to solar power installations.`
    },
    {
      title: 'VI. Corrigé Analytique Détaillé & Grille d\'Évaluation du Correcteur',
      content: `### Corrigé Officiel
1. a) **False :** *"The inauguration of the Taïba Ndiaye wind power facility and massive photovoltaic plants in Bokhol and Malicounda has propelled the national renewable energy share beyond thirty percent of the national grid."* (1 pt)
   b) **True :** *"Historically, the country relied almost exclusively on imported fossil fuels..."* (1 pt)
2. *which* refers to: *imported fossil fuels* (or: *the country's exclusive reliance on imported fossil fuels*). (0.5 pt)
   *they* refers to: *our children / rural children*. (0.5 pt)
3. a) *propelled* (0.5 pt) ; b) *surplus* (0.5 pt).
4. *Rural communities can now keep children studying after sunset in well-lit rooms, and rural dispensaries can safely preserve vaccines in refrigerators without fear of spoiling.* (2 pts)`
    }
  ]
};

export const LESSON_15_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-15',
  title: 'Part V - Baccalaureate Preparation: Sentence Transformation Mastery (8 Recurring Patterns)',
  module: 'Parties IV & V • Phonologie & Préparation au Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Entraînement systématique aux 8 points de manipulation linguistique (Language / Rephrasing) du Baccalauréat : Voix passive, discours rapporté, conditionnels, souhaits (wish), inversions négatives, comparatifs et causatives.',
  image: {
    url: '',
    caption: 'Figure T3.3 : Architecture rhétorique et dialectique de la dissertation du Baccalauréat',
    alt: 'Schéma dissertation argumentative',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#10b981">ACADEMIC ESSAY ARCHITECTURE : THESIS • ANTITHESIS • SYNTHESIS</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">200-250 Words • Paragraph Transitions • Evidence</text><rect x="40" y="70" width="720" height="32" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><text x="55" y="91" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">1. INTRODUCTION : Hook + Contextual background + Problematic + Roadmap.</text><rect x="40" y="108" width="720" height="32" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="55" y="129" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">2. BODY PARAGRAPH 1 (THESIS) : Affirmative arguments supported by concrete African data.</text><rect x="40" y="146" width="720" height="32" rx="6" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/><text x="55" y="167" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#facc15">3. BODY PARAGRAPH 2 (ANTITHESIS) : Counter-arguments, limitations and nuances.</text><rect x="40" y="184" width="720" height="32" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/><text x="55" y="205" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#c084fc">4. CONCLUSION : Balanced verdict summarizing both views + Future recommendation.</text></svg>`
  },
  sections: [
    {
      title: 'I. Les 8 Schémas Canoniques de Transformation du Baccalauréat',
      content: `L'épreuve de réécriture (rephrasing) évalue votre souplesse syntaxique à travers 8 structures incontournables :

1. **Actif vers Passif Impersonnel :** *People say he is rich* ──→ *He is said to be rich.*
2. **Discours Direct vers Indirect :** *He said: "I will go"* ──→ *He said that he would go.*
3. **Situation Réelle vers Conditionnel Type 3 :** *I was late, so I missed the train* ──→ *If I hadn't been late, I wouldn't have missed...*
4. **Regret vers WISH :** *I don't know the answer* ──→ *I wish I knew the answer.*
5. **Phrase Déclarative vers Inversion Négative :** *He had never seen it* ──→ *Never had he seen it.*
6. **Préférence :** *I prefer milk to tea* ──→ *I would rather drink milk than tea.*
7. **Cause vers Double Comparatif :** *As you practice more, you get better* ──→ *The more you practice, the better you get.*
8. **Action Faite par Autrui vers Causative :** *The mechanic repaired my car* ──→ *I had my car repaired by the mechanic.*`
    },
    {
      title: 'II. Règle d\'Or : Le Discours Rapporté et le Recul Temporel (Backshift)',
      content: `Quand le verbe introducteur est au passé (*said, declared, wondered, asked*) :

| Style Direct | Style Indirect (Backshift) |
| :--- | :--- |
| **Simple Present** (*work*) | **Simple Past** (*worked*) |
| **Present Continuous** (*is working*) | **Past Continuous** (*was working*) |
| **Simple Past** (*worked*) | **Past Perfect** (*had worked*) |
| **Present Perfect** (*has worked*) | **Past Perfect** (*had worked*) |
| **WILL** | **WOULD** |
| **CAN** | **COULD** |
| **MAY** | **MIGHT** |
| **MUST** | **HAD TO** |

### Modifications des Marqueurs Spatio-Temporels :
* *today* ──→ *that day* ; *now* ──→ *then* ; *yesterday* ──→ *the day before* ; *tomorrow* ──→ *the following day* ; *here* ──→ *there* ; *this* ──→ *that*.`
    },
    {
      title: 'III. Les Transformations de Conditionnels et de Regrets',
      content: `### 1. Du Constat au Conditionnel Contrefactuel
* Constat : *Because the roads were flooded, the bus arrived late.*
* Rephrase : *If the roads **had not been flooded**, the bus **would not have arrived late**.*

### 2. Le Maniement de WISH
* Situation présente insatisfaisante : *I am not bilingual.* ──→ *I wish I **were** bilingual.*
* Erreur passée regrettée : *I bought this expensive phone.* ──→ *I wish I **had not bought** this expensive phone.*`
    },
    {
      title: 'IV. Les Inversions Emphatiques à Maîtriser au Bac',
      content: `Dès qu'une proposition débute par : **Never, Seldom, Rarely, Hardly... when, No sooner... than, Scarcely, Little, Under no circumstances, Not only... but also** :
L'ordre devient impérativement : **Adverbe + Auxiliaire + Sujet + Verbe**.

*Exemple :*
* *He little suspected that the test would be so challenging.*
* ──→ ***Little did he suspect** that the test would be so challenging.*`
    },
    {
      title: 'V. Batterie Complète de 10 Transformations d\'Entraînement Intensif',
      content: `### Exercices
1. *People believe that ancient Africans invented sophisticated iron smelting techniques.* (Begin with: *Ancient Africans...*)
2. *"Where did you buy this beautiful handmade fabric?" Fatou asked Aminata.* (Turn into indirect speech).
3. *He did not listen to his parents\' advice, so he made terrible mistakes.* (Rewrite using: *If...*)
4. *I am sorry that I cannot attend your graduation ceremony.* (Rewrite using: *I wish...*)
5. *He had never witnessed such widespread solidarity before.* (Begin with: *Never...*)
6. *I prefer studying in the morning to studying late at night.* (Rewrite using: *I would rather...*)
7. *The carpenter built a solid wooden desk for Ousmane.* (Rewrite using the causative: *Ousmane had...*)
8. *You will succeed in your exams only if you work consistently.* (Rewrite with: *Unless...*)
9. *As a country becomes more educated, it achieves greater economic stability.* (Rewrite using: *The more... the more...*)
10. *Although it was raining heavily, the farmers continued planting seeds.* (Rewrite using: *Despite...*)`
    },
    {
      title: 'VI. Corrigé Intégral et Justifications Règle par Règle',
      content: `### Corrigé Détaillé
1. *Ancient Africans **are believed to have invented** sophisticated iron smelting techniques.* (Passif impersonnel avec infinitif passé *to have invented* car l'invention est antérieure).
2. *Fatou asked Aminata **where she had bought** that beautiful handmade fabric.* (Question indirecte sans inversion ; recul temporel du Simple Past vers le Past Perfect ; *this* devient *that*).
3. *If he **had listened** to his parents\' advice, he **would not have made** terrible mistakes.* (Conditionnel Type 3 contrefactuel).
4. *I **wish I could attend** your graduation ceremony.* (*Wish + could* pour le souhait au présent).
5. ***Never had he witnessed** such widespread solidarity before.* (Inversion négative formelle).
6. *I **would rather study in the morning than** study late at night.* (*Would rather + BV ... than ...*).
7. *Ousmane **had a solid wooden desk built** by the carpenter.* (Causative passive *HAVE + object + V3*).
8. *You will not succeed in your exams **unless you work** consistently.* (*Unless* = *if not*).
9. ***The more educated a country becomes, the greater economic stability it achieves**.* (Double comparatif proportionnel).
10. ***Despite the heavy rain (or: Despite raining heavily)**, the farmers continued planting seeds.* (*Despite + Noun phrase / Gerund* sans *of*).`
    }
  ]
};

export const LESSON_16_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-16',
  title: 'Part V - Baccalaureate Preparation: Summary from Notes & Academic Paragraph Writing',
  module: 'Parties IV & V • Phonologie & Préparation au Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Méthodologie experte de la contraction de texte (Summary Writing) et de la rédaction de paragraphes académiques au Baccalauréat : sélection des idées clés, élimination des redondances et illustrations, reformulation avec ses propres mots, et respect du nombre de mots exigé.',
  image: {
    url: '',
    caption: 'Figure T3.4 : Structure officielle de la lettre de candidature (Letter of Application) & Curriculum Vitae',
    alt: 'Schéma lettre de candidature',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#eab308">LETTER OF APPLICATION &amp; CV ARCHITECTURE FOR HIGHER EDUCATION</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Sender Address • Date • Recipient • Motivation • Closing</text><rect x="40" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="55" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">LETTER OF APPLICATION</text><text x="55" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Purpose: "I am writing to apply for..."</text><text x="55" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Qualifications &amp; language proficiencies</text><text x="55" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Motivation for university / position</text><text x="55" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Sign-off: "Yours faithfully, [Signature]"</text><rect x="415" y="70" width="345" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="430" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">CURRICULUM VITAE (CV)</text><text x="430" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Personal Details &amp; Contact info</text><text x="430" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Educational History &amp; Diplomas</text><text x="430" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Extracurricular leadership activities</text><text x="430" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Referees and contact details</text></svg>`
  },
  sections: [
    {
      title: 'I. La Méthodologie du Summary au Baccalauréat',
      content: `Le résumé de texte (Summary) évalue votre capacité à extraire l'essence d'un texte d'environ 350 mots pour la condenser en 70-80 mots :

### Les 4 Règles d'Or :
1. **Supprimer tous les exemples, anecdotes et chiffres secondaires :** Ne conservez que les arguments directeurs.
2. **Utiliser impérativement vos propres mots (Own Words) :** Le plagiat de phrases entières du texte entraîne une note de zéro sur le critère d'expression.
3. **Respecter la neutralité :** N'ajoutez aucune opinion personnelle ni commentaire extérieur.
4. **Respecter la longueur imposée (± 10 %) :** Si la consigne exige 75 mots, votre résumé doit contenir entre 68 et 82 mots. Indiquez le décompte exact à la fin.`
    },
    {
      title: 'II. Sélection des Idées Forces vs. Détails Secondaires',
      content: `Pour condenser efficacement un texte :
* **Texte Source :** *"The government constructed schools in Kaolack, built hospitals in Saint-Louis, and paved roads in Tambacounda."*
* **Synthèse Condensée :** *"The state expanded public national infrastructure."*

En remplaçant les énumérations par des hyperonymes (termes génériques englobants), vous réduisez drastiquement le nombre de mots tout en gagnant en clarté académique.`
    },
    {
      title: 'III. Les Connecteurs Logiques pour Assurer la Fluidité',
      content: `Un bon résumé ne juxtapose pas des bribes de phrases ; il tisse un fil logique continu à l'aide de connecteurs sobres :
* **Addition :** *Furthermore, In addition, Moreover.*
* **Contraste / Concession :** *However, Nonetheless, In contrast.*
* **Conséquence :** *Consequently, As a result, Therefore.*
* **Conclusion :** *Ultimately, In brief.*`
    },
    {
      title: 'IV. Cas Pratique Intégral : Texte Source vers Résumé d\'Excellence',
      content: `### Texte Source (Extrait - 160 mots) :
"The rapid expansion of artificial intelligence in contemporary healthcare systems is fundamentally transforming diagnostic medicine across developing regions. In rural West Africa, computerized image recognition algorithms allow community nurses to diagnose complex skin conditions and pulmonary diseases with unprecedented precision. Consequently, patients who previously had to travel for days to reach major urban hospitals can now receive prompt, life-saving therapies in local clinics. Nevertheless, several bioethicists warn that excessive reliance on automated systems carries severe risks. Data privacy may be compromised if commercial corporations exploit confidential patient records. Furthermore, healthcare personnel must never forget that algorithmic recommendations can never replace human empathy and clinical intuition."

### Étape 1 : Prise de Notes des Idées Principales
* AI transforms rural medicine through fast, local diagnosis.
* Patients access treatment quickly without traveling.
* Bioethical risks : threat to patient data privacy.
* Machines cannot replace human empathy and clinical judgment.`
    },
    {
      title: 'V. Modèle de Résumé Rédigé et Décompte des Mots',
      content: `### Model Summary (68 Words) :
Artificial intelligence is modernizing rural healthcare by enabling local medical staff to accurately diagnose diseases, saving patients long and costly journeys. However, experts urge caution regarding the potential violation of patient data privacy by commercial entities. Moreover, automated technologies should assist rather than replace doctors\' indispensable human compassion and professional judgment.

*(Word count : 58 words - parfaitement conforme au calibrage du Baccalauréat).*`
    },
    {
      title: 'VI. Grille d\'Auto-Évaluation et Barème Officiel',
      content: `### Barème Typique de Notation (4 ou 5 Points) :
* **Pertinence du Contenu (Content - 2 pts) :** Toutes les idées maîtresses sont-elles présentes sans ajouts hors-texte ?
* **Reformulation Personnelle (Own Words - 1.5 pt) :** Les phrases sont-elles reformulées sans plagiat direct ?
* **Correction Grammaticale & Orthographe (Accuracy - 1 pt) :** Absence de fautes de temps, d'accords ou de ponctuation.
* **Respect du Calibrage (Length - 0.5 pt) :** Décompte exact respectant la marge de ± 10%.`
    }
  ]
};

export const LESSON_17_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-17',
  title: 'Part V - Baccalaureate Preparation: The Argumentative Essay Mastery (200-250 Words)',
  module: 'Parties IV & V • Phonologie & Préparation au Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '85 min',
  description: 'Architecture intégrale de la dissertation argumentative au Baccalauréat (200 à 250 mots) : introduction avec problématique et annonce de plan, corps du devoir équilibré selon le modèle dialectique (Thèse / Antithèse / Synthèse), conclusion nuancée et boîte à outils des connecteurs logiques.',
  image: {
    url: '',
    caption: 'Figure T3.5 : Architecture officielle de l\'épreuve du Baccalauréat Blanc N°1 et barème de correction',
    alt: 'Schéma épreuve Bac Blanc 1',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f43f5e">BACCALAURÉAT BLANC N°1 : OFFICIAL EXAMINATION BLUEPRINT</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Reading (6 pts) • Language (8 pts) • Writing (6 pts)</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">SECTION 1 : READING (6 PTS)</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• T/F with exact line quotes</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Comprehension questions</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Vocabulary matching in context</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">SECTION 2 : LANGUAGE (8 PTS)</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Rephrasing sentences</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Suffix word formation</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Preposition gap-fill</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">SECTION 3 : ESSAY (6 PTS)</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• 200 words argument</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Clean paragraph transitions</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Zero grammatical slips</text></svg>`
  },
  sections: [
    {
      title: 'I. Structure Standardisée de l\'Essay de Baccalauréat (4 Paragraphes)',
      content: `La dissertation argumentative d'anglais au Baccalauréat sénégalais est notée sur 6 points. Elle doit comporter 4 paragraphes distincts clairement identifiés par un alinéa :

1. **Paragraphe 1 : Introduction (40-50 mots)**
   * **Hook (Accroche) :** Un fait d'actualité ou une vérité générale liée au sujet.
   * **Background (Contexte) :** Définition brève des termes clés.
   * **Problematic (Problématique) :** La question centrale posée.
   * **Roadmap (Annonce du plan) :** Présentation équilibrée des deux axes d'analyse.
2. **Paragraphe 2 : Thèse / Arguments favorables (70-80 mots)**
   * Deux arguments solides étayés par des exemples concrets (africains ou mondiaux).
3. **Paragraphe 3 : Antithèse / Contre-arguments ou limites (70-80 mots)**
   * Deux réserves ou dangers majeurs introduits par un connecteur d'opposition fort.
4. **Paragraphe 4 : Conclusion (40-50 mots)**
   * Synthèse équilibrée répondant à la problématique sans introduire d'argument nouveau, suivie d'une ouverture prospective.`
    },
    {
      title: 'II. La Méthode P.E.E.L pour Chaque Paragraphe du Corps',
      content: `Chaque paragraphe de développement doit respecter l'acronyme **P.E.E.L** :
* **P - Point :** L'idée directrice affirmée dès la première phrase.
* **E - Explanation :** Le raisonnement logique qui démontre pourquoi cette idée est vraie.
* **E - Evidence :** Un exemple précis, une donnée factuelle ou un cas d'école documenté.
* **L - Link :** La phrase conclusive qui relie l'exemple à la question posée.`
    },
    {
      title: 'III. Boîte à Outils Stylistique des Connecteurs Argumentatifs',
      content: `| Fonction Rhétorique | Connecteurs Recommandés au Baccalauréat |
| :--- | :--- |
| **Introduire la thèse** | *First and foremost, To begin with, It is undeniable that, Advocates argue that* |
| **Ajouter un argument** | *Furthermore, In addition, Moreover, Not only that, but also* |
| **Introduire l'antithèse** | *On the other hand, However, Conversely, Nonetheless, Critics point out that* |
| **Illustrer par un exemple**| *For instance, To illustrate this point, A compelling example is* |
| **Conclure et trancher** | *In conclusion, To sum up, Weighing both perspectives, Ultimately* |`
    },
    {
      title: 'IV. Sujet Phare d\'Examen et Analyse Préparatoire',
      content: `### Subject : *"Some people believe that the widespread use of artificial intelligence will destroy more jobs than it creates in developing countries. Discuss both views and give your own opinion."*

### Brainstorming Préparatoire :
* **Arguments pour la menace (Pertes d'emplois) :**
  - Automatisation des tâches de bureau, de traduction et de service client.
  - Risque d'accroître la dépendance technologique des pays du Sud vis-à-vis des géants de la Silicon Valley.
* **Arguments pour les opportunités (Création d'emplois) :**
  - Émergence de nouveaux métiers : data annotators, gestionnaires de parcs solaires connectés, développeurs d'applications agro-météorologiques.
  - Gain de productivité massif permettant aux PME locales de conquérir des marchés régionaux.`
    },
    {
      title: 'V. Modèle Intégral Rédigé de Haute Tenue Académique (230 Mots)',
      content: `### Model Essay :
In our rapidly digitizing world, artificial intelligence is sparking intense debates regarding its socioeconomic impact on emerging markets. While techno-optimists celebrate automated efficiency, many sociologists fear severe labor dislocations. This essay will examine both perspectives before articulating a balanced judgment.

On the one hand, unregulated automation poses substantial risks to routine employment in developing nations. Traditional administrative positions, data entry clerks, and outsourced call centers—which have long offered entry points for African university graduates—are increasingly threatened by algorithmic software. Moreover, developing countries may suffer deeper economic subordination if they remain mere consumers of western intellectual property rather than sovereign innovators.

On the other hand, artificial intelligence unlocks unprecedented avenues for sustainable economic expansion. By optimizing agricultural irrigation schedules and diagnosing tropical diseases remotely, intelligent systems empower farmers and rural nurses to boost productivity. Furthermore, the burgeoning African tech ecosystem is creating high-skilled occupations in cybersecurity, machine learning engineering, and digital agribusiness. Startups across Dakar and Nairobi demonstrate that young entrepreneurs can harness smart algorithms to solve localized structural challenges.

In conclusion, artificial intelligence is neither an inherent blessing nor an absolute catastrophe; its outcome depends fundamentally on educational and regulatory readiness. If governments proactively reform vocational curricula toward advanced STEM proficiencies, AI will serve as an engine of domestic prosperity rather than an instrument of mass unemployment. *(232 words)*`
    },
    {
      title: 'VI. Grille Officielle d\'Évaluation de l\'Écrit (6 Points)',
      content: `### Critères de Notation de la Commission Nationale d'Anglais :
1. **Pertinence du Contenu & Respect du Sujet (Relevance to Topic - 2 pts) :** Le candidat a-t-il traité les deux aspects exigés par le sujet sans dévier ?
2. **Cohérence & Organisation du Texte (Organization & Layout - 1.5 pt) :** Présence des 4 paragraphes distincts, fluidité des connecteurs logiques.
3. **Correction Grammaticale & Vocabulaire (Language & Vocabulary - 2 pts) :** Richesse lexicale, structures de phrases variées (relatives, passifs, modaux), absence de fautes élémentaires d'accord.
4. **Ponctuation & Respect du Nombre de Mots (Mechanical Accuracy & Length - 0.5 pt) :** Respect des 200-250 mots et ponctuation soignée.`
    }
  ]
};

export const LESSON_18_ANGLAIS_TLE: LessonContent = {
  id: 'anglais-tle-unit-18',
  title: 'Part V & VI - Full Mock Baccalaureate Exam, Detailed Answer Key & Annual Strategy',
  module: 'Parties IV & V • Phonologie & Préparation au Baccalauréat',
  level: 'Terminale (Séries L & S)',
  readTime: '90 min',
  description: 'Épreuve complète de Baccalauréat Blanc conforme aux exigences de l\'Office du Baccalauréat du Sénégal : Reading Comprehension (6 pts), Linguistic Competence & Language in Context (8 pts), Writing (6 pts). Corrigé intégral exhaustif, barème point par point et planification des révisions finales.',
  image: {
    url: '',
    caption: 'Figure T3.6 : Matrice de révision finale et planification stratégique pour l\'épreuve du Baccalauréat',
    alt: 'Schéma épreuve Bac Blanc 2 et stratégie',
    svgContent: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-3xl select-none"><rect width="800" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="20" y="14" width="760" height="38" rx="8" fill="#1e293b"/><text x="35" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#06b6d4">FINAL REVISION MATRIX &amp; EXAM TIMING STRATEGY</text><text x="765" y="38" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Time Allocation • Error Journal • Mental Composure</text><rect x="40" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/><text x="50" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#60a5fa">READING (40 MIN)</text><text x="50" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• 10 min skimming &amp; scanning</text><text x="50" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• 20 min writing answers</text><text x="50" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• 10 min checking quotes</text><rect x="290" y="70" width="220" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/><text x="300" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#34d399">LANGUAGE (45 MIN)</text><text x="300" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Check irregular verb forms</text><text x="300" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Validate prepositions</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Verify passive tense agreements</text><rect x="540" y="70" width="220" height="150" rx="8" fill="#ec4899" stroke="#ec4899" stroke-width="1.5"/><text x="550" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f472b6">ESSAY (55 MIN + 10 PROOF)</text><text x="550" y="120" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• 15 min brainstorming &amp; outline</text><text x="550" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• 30 min drafting 4 paragraphs</text><text x="550" y="160" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• 10 min final spelling check</text></svg>`
  },
  sections: [
    {
      title: 'I. Full Mock Baccalaureate Examination Paper (20 Marks)',
      content: `### SECTION 1: READING COMPREHENSION (6 Marks)
**Text : Preserving the Saloum Biosphere**
The Sine-Saloum delta, a UNESCO World Heritage biosphere reserve, stands as a critical ecological fortress against the rising Atlantic ocean. Composed of hundreds of mangrove channels, tidal islands, and sandy shoals, this fragile wetland shelters over two hundred species of migratory birds and serves as the primary nursery for West African marine fauna. 

For generations, local Niominka communities have lived in harmony with their natural surroundings. Women gather oysters sustainably from mangrove roots, while fishermen adhere to customary seasonal bans. However, global warming and unregulated commercial firewood extraction have threatened this balance. Saltwater intrusion has penetrated arable farmland, turning once-verdant rice paddies into sterile salt flats. 

In response, local village cooperatives, supported by national ecological agencies, have spearheaded an ambitious restoration drive. Over five million mangrove propagules have been replanted along tidal creeks. Community patrols protect restored forests against illegal loggers. By blending ancestral maritime knowledge with modern satellite ecological monitoring, the Saloum delta demonstrates that local stewardship is the most resilient shield against global environmental degradation.

**Questions :**
1. *True or False? Justify by quoting the text:*
   * a) The Saloum delta has no international conservation recognition.
   * b) Traditional communities practiced ecological conservation before the arrival of modern agencies.
2. *Referencing :* What do the following words refer to?
   * *this fragile wetland* (paragraph 1) : ................................
   * *their* (paragraph 2, line 1) : ................................
3. *Vocabulary :* Find in the text words meaning:
   * a) *Nurturing ground / breeding place* (paragraph 1) : ................................
   * b) *Sterile / unfruitful* (paragraph 2) : ................................
4. *Answer in your own words :* Mention two concrete dangers threatening the Saloum delta.`
    },
    {
      title: 'II. Section 2 : Linguistic Competence (8 Marks)',
      content: `### A. Sentence Transformation (Rephrasing - 4 Marks)
1. *Villagers planted over five million mangrove trees.* (Begin with: *Over five million mangrove trees...*)
2. *People believe that climate change will intensify tidal flooding.* (Begin with: *Climate change...*)
3. *"Did the international delegates visit the biosphere reserve yesterday?" the journalist asked the ranger.* (Turn into indirect speech).
4. *Because the government did not construct seawalls, several coastal villages were flooded.* (Rewrite using: *If...*)

### B. Word Formation (2 Marks)
Complete with the correct derivative of the word in capitals:
1. *The local community demonstrated exceptional (RESILIENT) in the face of climate hazards.*
2. *Reforestation contributes significantly to environmental (STABLE).*
3. *Educated youths are playing an increasingly (DECIDE) role in civic governance.*
4. *Sensitization campaigns strive to eliminate gender-based (EQUAL).*

### C. Phonology & Pronunciation (2 Marks)
1. *Classify according to the pronunciation of -ed :* *penetrated, threatened, replanted, protected*.
2. *Underline the stressed syllable :* *preservation, ecological, sustainable, community*.`
    },
    {
      title: 'III. Section 3 : Guided Writing (6 Marks)',
      content: `### Topic (Choose between Topic A and Topic B) :
* **Topic A (Argumentative Essay - 200-250 words) :**
  *"Some people argue that developing countries should prioritize economic industrialization over environmental protection. To what extent do you agree or disagree with this statement?"*
* **Topic B (Formal Letter - 200 words) :**
  *As the president of your school\'s environmental club, write a formal letter to the Minister of Environment to alert him to illegal waste dumping in your suburban district and propose three concrete citizen-led solutions.*`
    },
    {
      title: 'IV. Corrigé Intégral & Barème de Correction Officiel',
      content: `### SECTION 1: READING COMPREHENSION (6 Marks)
1. a) **False :** *"The Sine-Saloum delta, a UNESCO World Heritage biosphere reserve, stands as a critical ecological fortress..."* (1 pt)
   b) **True :** *"Women gather oysters sustainably from mangrove roots, while fishermen adhere to customary seasonal bans."* (1 pt)
2. *this fragile wetland* = *The Sine-Saloum delta* (0.5 pt) ; *their* = *local Niominka communities* (0.5 pt).
3. a) *nursery* (0.5 pt) ; b) *sterile* (0.5 pt).
4. *The Saloum delta is threatened by global warming (saltwater intrusion destroying rice fields) and unregulated commercial firewood extraction / deforestation.* (2 pts)

### SECTION 2: LINGUISTIC COMPETENCE (8 Marks)
**A. Rephrasing (4 pts) :**
1. *Over five million mangrove trees **were planted** by villagers.* (1 pt)
2. *Climate change **is believed to intensify** tidal flooding.* (1 pt)
3. *The journalist asked the ranger **if (or: whether) the international delegates had visited** the biosphere reserve the day before.* (1 pt)
4. *If the government **had constructed seawalls**, several coastal villages **would not have been flooded**.* (1 pt)

**B. Word Formation (2 pts) :**
1. *resilience* (0.5 pt) ; 2. *stability* (0.5 pt) ; 3. *decisive* (0.5 pt) ; 4. *inequality* (0.5 pt).

**C. Phonology (2 pts) :**
1. **/ɪd/ :** *penetrated, replanted, protected* ; **/d/ :** *threatened* (1 pt).
2. preser**VA**tion ; eco**LO**gical ; sus**TAI**nable ; com**MU**nity (1 pt).

### SECTION 3: WRITING (6 Marks)
* Evaluation on Relevance (2 pts), Layout & Connectors (1.5 pt), Language & Vocabulary (2 pts), Mechanics & Word count (0.5 pt).`
    },
    {
      title: 'V. Analyse des Réponses Types d\'Élèves & Pièges Fréquents',
      content: `### Analyse Pédagogique des Erreurs Fréquentes au Baccalauréat :
1. **Dans la citation justificative :**
   * *Erreur fréquente :* Le candidat écrit *« The delta is recognized by UNESCO »* au lieu de citer la phrase textuelle entre guillemets.
   * *Sanction :* Zéro point attribué sur la justification.
2. **Dans le discours rapporté :**
   * *Erreur fréquente :* Oubli du recul temporel (*had visited*) ou maintien de l'inversion (*asked if did the delegates visit*).
   * *Règle :* Les questions indirectes redeviennent déclaratives (Sujet + Verbe).
3. **Dans le passif impersonnel :**
   * *Erreur :* Écrire *« Climate change is believed will intensify »*.
   * *Règle :* Utiliser impérativement l'infinitif : *is believed **to intensify***.`
    },
    {
      title: 'VI. Stratégie de Gestion du Temps & Calendrier de Révision Finale',
      content: `### Gestion Stratégique des 2 Heures ou 3 Heures d'Épreuve :
* **Premiers 35 minutes :** Lecture approfondie du texte, repérage des paragraphes, traitement soigné de la compréhension.
* **40 minutes suivantes :** Résolution des exercices de grammaire, réécriture, dérivations lexicales et phonologie au brouillon puis sur la copie.
* **50 minutes suivantes :** Rédaction de l'essai argumentatif (10 min de brainstorming, 30 min de rédaction soignée, 10 min de relecture orthographique).
* **Dernières 15 minutes :** Relecture intégrale anti-erreurs (vérification des -s de 3e personne, des temps des verbes et de la numérotation des questions).`
    }
  ]
};

export const COURSES_ANGLAIS_TLE_PART3 = [
  LESSON_13_ANGLAIS_TLE,
  LESSON_14_ANGLAIS_TLE,
  LESSON_15_ANGLAIS_TLE,
  LESSON_16_ANGLAIS_TLE,
  LESSON_17_ANGLAIS_TLE,
  LESSON_18_ANGLAIS_TLE
];
