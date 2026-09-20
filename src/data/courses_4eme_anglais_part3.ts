import { LessonContent } from './courses';

// =========================================================================
// COURS D'ANGLAIS - CLASSE DE 4ÈME (PROGRAMME OFFICIEL COMPLET - 30 LEÇONS)
// PARTIE 3 : MODAUX, PROPOSITIONS RELATIVES ET VOIX PASSIVE (LEÇONS 16 À 21)
// TEXTES EXHAUSTIFS, DÉTAILLÉS EN FRANÇAIS, RÈGLES CLAIRES, TABLEAUX,
// SCHÉMAS D'APPRENTISSAGE ET EXERCICES D'APPLICATION RÉSCLUS AVEC CORRIGÉS
// =========================================================================

export const LESSON_16_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-16',
  number: 'Lesson 16',
  title: 'Modal Auxiliaries 1: Ability and Permission (CAN, COULD, MAY)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Les auxiliaires modaux constituent une catégorie verbale spéciale et puissante en anglais. Ils permettent au locuteur d'exprimer son point de vue sur la capacité d'une personne, une autorisation ou une interdiction. Dans cette leçon, nous examinons les trois premiers grands modaux : CAN (capacité et permission au présent), COULD (capacité au passé ou demande polie) et MAY (permission formelle et respectueuse). Vous découvrirez également leurs caractéristiques morphologiques invariables.",
  fullText: `Lesson 16: Modal Auxiliaries 1 (Ability and Permission)

Introduction :
Les modaux expriment la modalité : ce que l'on est capable de faire ou ce qu'on a le droit de faire.

1. Detailed Grammatical & Conceptual Analysis
A. Les Caractéristiques Universelles des Modaux en Anglais :
1. Ils sont strictement INVARIABLES : ils ne prennent JAMAIS de '-s' à la 3ème personne du singulier (He can, et JAMAIS He cans !).
2. Ils sont TOUJOURS suivis d'une BASE VERBALE PURE (infinitif sans 'TO') : 'She can dance' (et JAMAIS 'She can to dance').
3. Ils n'ont pas besoin de DO ou DOES en négation ou question : 'Can you swim? He cannot speak Russian.'

B. Emplois spécifiques :
1. CAN :
   • Capacité physique ou intellectuelle au présent : 'Moussa can run very fast.' 'She can speak three languages.'
   • Permission informelle dans la vie courante : 'Can I borrow your pencil, please?' Négation : CANNOT ou CAN'T (interdiction / incapacité).
2. COULD :
   • Capacité au passé (prétérit de can) : 'When I was five, I could already swim.'
   • Demande très polie et atténuée au présent : 'Could you please open the window?'
3. MAY :
   • Demande ou accord de permission formelle et respectueuse (école, bureau) : 'May I come in, sir?'
   • Interdiction polie avec May not : 'You may not use your mobile phone during the examination.'

2. Practical Rules & Structural Mechanics
- Degré de politesse : Can I...? (Familier / Amis) -> Could you...? (Poli) -> May I...? (Très formel et respectueux).

3. Contextual Examples & Practice Applications
- 'Moussa can run very fast, but he cannot swim in deep water.'
- 'Could you please lend me your English dictionary for a few minutes?'
- 'May I come into the classroom, Sir?'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Les Lois des Modaux)',
      content: [
        "Les 3 règles d'or incontournables des verbes modaux :",
        "1. Pas de '-s' à la 3e personne : He can, She could, He may (ne jamais ajouter de -s !).",
        "2. Suivis directement d'une Base Verbale SANS TO : 'I can swim' (interdit de dire 'I can to swim').",
        "3. Autonomie totale : pas d'auxiliaire 'do' en question ou négation : 'Can you... ?' / 'She can't...'.",
        "Distinction des trois modaux :",
        "• CAN : Capacité au présent ('I can drive') et permission courante entre camarades.",
        "• COULD : Capacité passée révolue ('When I was young, I could run fast') et politesse soutenue ('Could you help me?').",
        "• MAY : Permission officielle, hiérarchique et scolaire ('May I go out, teacher?')."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Nuances)',
      content: [
        "Nuances d'emploi de la permission et de la capacité :",
        "• Capacité présente -> CAN / Incapacité -> CAN'T ou CANNOT.",
        "• Capacité passée -> COULD / Incapacité passée -> COULDN'T.",
        "• Demande polie -> COULD YOU / Demande formelle de permission -> MAY I."
      ],
      table: {
        headers: ['Modal', 'Fonction communicative', 'Registre / Temps', 'Exemple type en contexte'],
        rows: [
          ['CAN', 'Capacité intellectuelle/physique', 'Présent', 'She can speak English fluently.'],
          ['CAN', 'Permission informelle', 'Familier / Amis', 'Can I take your pen?'],
          ['COULD', 'Capacité dans le passé', 'Passé', 'Ten years ago, he could jump very high.'],
          ['COULD', 'Demande polie au présent', 'Poli / Respectueux', 'Could you explain this exercise again?'],
          ['MAY', 'Demande de permission formelle', 'Formel / Hiérarchique', 'May I speak to the headmaster, please?'],
          ['CANNOT / CAN\'T', 'Interdiction ou incapacité', 'Présent', 'You can\'t park your car here.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Traps',
      content: [
        "Exemples modèles du manuel officiel :",
        "• 'Moussa can run very fast, but he cannot swim in deep water.'",
        "• 'Could you please lend me your English dictionary for a few minutes?'",
        "• 'May I come into the classroom, Sir? Yes, you may.'",
        "Pièges récurrents :",
        "❌ 'He cans dance' -> ✅ 'He can dance'.",
        "❌ 'I can to play the guitar' -> ✅ 'I can play the guitar'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Choisir entre CAN, COULD et MAY',
          content: [
            "Consigne : Complétez chaque phrase avec CAN, COULD ou MAY selon le sens et le registre :",
            "1. (Élève demandant respectueusement au professeur) : '... I ask a question, sir?'",
            "2. When my grandfather was twenty years old, he ... walk forty kilometres in one day.",
            "3. Fatou is very clever; she ... solve complex math equations easily.",
            "4. Excuse me, ... you tell me the direction to the central post office, please?",
            "5. You ... not eat or drink inside the school computer room; it is strictly prohibited."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'May I ask' -> Demande de permission formelle et déférente envers une figure d'autorité (le professeur) -> MAY.",
            "2. 'could walk' -> Capacité physique située dans le passé ('When my grandfather was twenty') -> COULD.",
            "3. 'can solve' -> Capacité intellectuelle actuelle au présent -> CAN.",
            "4. 'Could you tell' -> Demande polie et courtoise à un passant dans la rue -> COULD.",
            "5. 'can not' (ou 'may not') -> Interdiction officielle du règlement intérieur."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Correction d\'Erreurs de Syntaxe Modale',
          content: [
            "Consigne : Chaque phrase comporte une erreur sur les règles des modaux. Corrigez-la :",
            "1. He cans ride a motorcycle very well.",
            "2. Do you can swim across the lagoon?",
            "3. She must to visit her sick grandmother."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. Correction : 'He can ride a motorcycle very well.' (Explication : un modal est invariable et ne prend jamais de -s).",
            "2. Correction : 'Can you swim across the lagoon?' (Explication : un modal ne prend jamais d'auxiliaire 'do' ; on inverse directement modal et sujet).",
            "3. Correction : 'She must visit her sick grandmother.' (Explication : un modal est suivi d'une base verbale sans 'to')."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Les Modaux : Capacité et Permission',
    root: 'MODAL AUXILIARIES',
    branches: [
      {
        name: 'Règles Communes',
        subtitle: 'Invariabilité totale',
        items: ['Jamais de -s à he/she/it', 'Suivis de la Base Verbale pure (sans to)', 'Pas d\'auxiliaire DO en question/négation']
      },
      {
        name: 'Capacité (Ability)',
        subtitle: 'Présent vs Passé',
        items: ['CAN : Capacité actuelle au présent', 'COULD : Capacité dans le passé', 'CAN\'T / COULDN\'T : Incapacité']
      },
      {
        name: 'Permission',
        subtitle: 'Degré de politesse',
        items: ['CAN : Informel (Can I borrow your pen?)', 'COULD : Poli (Could you help me?)', 'MAY : Formel (May I come in, sir?)']
      }
    ]
  },
  conclusion:
    "En résumé, CAN, COULD et MAY obéissent à la discipline universelle des modaux (invariables, base verbale sans to) tout en graduant avec finesse la nuance entre l'aptitude physique ou mentale et le niveau de courtoisie accordé à la permission."
};

export const LESSON_17_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-17',
  number: 'Lesson 17',
  title: 'Modal Auxiliaries 2: Obligation and Advice (MUST, SHOULD, HAVE TO)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Savoir formuler une obligation impérative ou dispenser un conseil bienveillant est une fonction clé du programme de 4ème. Cette leçon compare trois structures essentielles : MUST (obligation absolue ressentie par le locuteur), HAVE TO (obligation imposée par une loi ou une règle extérieure) et SHOULD (le conseil, la recommandation amicale). Vous découvrirez également le piège fondamental de la négation : MUSTN'T exprime une interdiction totale, tandis que DON'T HAVE TO traduit une simple absence d'obligation.",
  fullText: `Lesson 17: Modal Auxiliaries 2 (Obligation and Advice)

Introduction :
Cette leçon traite de l'obligation stricte, de l'interdiction et du conseil en anglais.

1. Detailed Grammatical & Conceptual Analysis
A. MUST vs HAVE TO (Obligation) :
1. MUST :
   • Obligation interne imposée par le locuteur lui-même ou devoir moral fort : 'I must study hard to succeed.'
   • Forme invariables suivie de la base verbale.
2. HAVE TO :
   • Obligation externe imposée par la loi, le règlement scolaire ou les circonstances : 'Students have to wear uniforms in our school.'
   • Se conjugue à tous les temps : He has to, they had to (au passé, car must n'a pas de passé !).

B. LE PIÈGE FATAL DE LA NÉGATION : MUSTN'T vs DON'T HAVE TO :
- MUSTN'T (Must not) = INTERDICTION ABSOLUE (défense de faire, danger, punition) :
  • 'You mustn't smoke in the hospital.' (Il est formellement interdit de fumer).
- DON'T HAVE TO / DOESN'T HAVE TO = ABSENCE D'OBLIGATION (ce n'est pas nécessaire, tu es libre de choisir) :
  • 'Tomorrow is Sunday; we don't have to wake up early.' (Ce n'est pas obligatoire, nous ne sommes pas obligés de nous lever tôt).

C. SHOULD (Conseil et Recommandation) :
- Exprime ce qu'il serait sage ou bon de faire (advice) :
  • 'You look exhausted; you should see a doctor.'
- Négation : SHOULDN'T (should not) : 'You shouldn't eat too much junk food.'

2. Practical Rules & Structural Mechanics
- Au passé, pour exprimer une obligation, on emploie HAD TO (car must n'existe pas au passé) : 'Yesterday I had to stay home.'

3. Contextual Examples & Practice Applications
- 'You must wear a helmet when riding a motorbike.'
- 'You mustn't touch those dangerous electrical cables!'
- 'You look sick; you should consult a doctor.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Obligation & Conseil)',
      content: [
        "A. MUST et HAVE TO (L'Obligation) :",
        "• MUST : Obligation morale impérieuse ressentie par le locuteur ('I must finish this book tonight').",
        "• HAVE TO : Obligation imposée par une règle extérieure ou la société ('You have to stop at a red traffic light').",
        "• Au prétérit : Must n'a pas de forme passée ; on utilise obligatoirement HAD TO ('Yesterday, I had to work late').",
        "B. SHOULD (Le Conseil Bienveillant) :",
        "• Équivalent de 'tu devrais / vous devriez' : SUJET + SHOULD + BASE VERBALE.",
        "• 'You should practice your English every day.'",
        "• Négatif : SHOULDN'T : 'You shouldn't stay up so late before an exam.'"
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Le Piège MUSTN\'T vs DON\'T HAVE TO)',
      content: [
        "ATTENTION AU PIÈGE LE PLUS RÉCURRENT DE LA 4ÈME :",
        "• MUSTN'T = INTERDICTION STRICTE (Interdit sous peine de sanction / Danger) :",
        "  - 'You mustn't cheat during the exam.' (Tricher est formellement interdit).",
        "• DON'T / DOESN'T HAVE TO = ABSENCE TOTALE D'OBLIGATION (Facultatif / Pas nécessaire) :",
        "  - 'You don't have to come with me if you are busy.' (Tu n'es pas obligé de venir, ce n'est pas nécessaire).",
        "Ne confondez jamais ces deux notions !"
      ],
      table: {
        headers: ['Structure', 'Sens exact', 'Degré de contrainte', 'Exemple en situation', 'Traduction française'],
        rows: [
          ['MUST', 'Obligation personnelle / impérative', 'Obligatoire (100%)', 'We must protect our planet.', 'Nous devons protéger notre planète.'],
          ['HAVE TO', 'Obligation légale / extérieure', 'Obligatoire (100%)', 'Drivers have to respect traffic rules.', 'Les conducteurs doivent respecter le code.'],
          ['MUSTN\'T', 'Interdiction absolue', 'Strictement interdit (0%)', 'You mustn\'t touch this wire.', 'Il est interdit de toucher ce câble.'],
          ['DON\'T HAVE TO', 'Absence d\'obligation', 'Facultatif / Libre choix', 'You don\'t have to pay now.', 'Vous n\'êtes pas obligé de payer maintenant.'],
          ['SHOULD', 'Conseil et recommandation', 'Conseillé (Recommandation)', 'You should drink plenty of water.', 'Tu devrais boire beaucoup d\'eau.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Errors',
      content: [
        "Exemples modèles :",
        "• 'You must wear a helmet when riding a motorbike to protect your head.'",
        "• 'You mustn't touch those dangerous electrical cables!'",
        "• 'Tomorrow is a public holiday; we don't have to go to school.'",
        "• 'You have a bad cough; you should consult a doctor at the clinic.'",
        "Erreurs classiques :",
        "❌ 'You don't have to steal' -> ✅ 'You mustn't steal' (Voler est un crime interdit, pas un choix facultatif !)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Choisir entre MUSTN\'T et DON\'T HAVE TO',
          content: [
            "Consigne : Complétez chaque phrase avec MUSTN'T (interdiction) ou DON'T / DOESN'T HAVE TO (pas obligé) :",
            "1. In a hospital, people ... make loud noise near patients.",
            "2. We have plenty of food in the kitchen, so you ... cook dinner tonight.",
            "3. You ... take photographs inside this military base; it is illegal.",
            "4. Today is Sunday; my father ... go to the office.",
            "5. You ... tell lies to your parents."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'mustn't make' -> Le bruit est strictement interdit dans un hôpital -> MUSTN'T.",
            "2. 'don't have to cook' -> Il y a déjà à manger, cuisiner n'est donc pas nécessaire (absence d'obligation) -> DON'T HAVE TO.",
            "3. 'mustn't take' -> Il s'agit d'une interdiction légale et sécuritaire absolue -> MUSTN'T.",
            "4. 'doesn't have to go' -> C'est dimanche, aller au bureau n'est pas obligatoire -> DOESN'T HAVE TO.",
            "5. 'mustn't tell' -> Mentir à ses parents est moralement et strictement prohibé -> MUSTN'T."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Donner des Conseils avec SHOULD ou SHOULDN\'T',
          content: [
            "Consigne : Donnez un conseil approprié en rédigeant une phrase avec SHOULD ou SHOULDN'T pour chaque situation :",
            "1. Moussa wants to improve his vocabulary in English.",
            "2. Fatou is constantly looking at her smartphone screen late at night."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'Moussa should read English books every day.' (ou 'He should use an English dictionary.')",
            "2. 'Fatou shouldn't look at her smartphone screen late at night.' (Conseil négatif pour préserver le sommeil)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Obligation, Interdiction et Conseils',
    root: 'OBLIGATION & ADVICE',
    branches: [
      {
        name: 'Obligation Positive',
        subtitle: 'Devoir impératif',
        items: ['MUST : Devoir moral & personnel', 'HAVE TO : Loi extérieure / Règlement', 'Passé : HAD TO obligatoirement']
      },
      {
        name: 'Contraste Négatif Majeur',
        subtitle: 'MUSTN\'T vs DON\'T HAVE TO',
        items: ['MUSTN\'T : Interdiction absolue (0%)', 'DON\'T HAVE TO : Non obligatoire (libre choix)', 'Ex: You don\'t have to pay / You mustn\'t steal']
      },
      {
        name: 'Conseil (Advice)',
        subtitle: 'Recommandation bienveillante',
        items: ['SHOULD + Base Verbale (Tu devrais)', 'SHOULDN\'T + Base Verbale (Tu ne devrais pas)', 'Ex: You should drink water']
      }
    ]
  },
  conclusion:
    "En conclusion, maîtriser les modaux d'obligation et de conseil permet d'exprimer avec rigueur la nuance entre ce qui est impératif (must), ce qui est strictement défendu (mustn't), ce qui est facultatif (don't have to) et ce qui est simplement conseillé pour le bien d'autrui (should)."
};

export const LESSON_18_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-18',
  number: 'Lesson 18',
  title: 'Relative Pronouns: WHO, WHICH, THAT, and WHOSE',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Les pronoms relatifs (Relative Pronouns) sont des outils syntaxiques majeurs qui permettent de relier deux propositions en une seule phrase complexe, fluide et élégante. Ils évitent les répétitions fastidieuses en se substituant à un nom (l'antécédent). Le choix du pronom dépend de la nature de cet antécédent : s'agit-il d'un être humain (WHO), d'une chose inanimée ou d'un animal (WHICH), ou d'un rapport d'appartenance et de possession (WHOSE) ? Cette leçon décortique ces liaisons.",
  fullText: `Lesson 18: Relative Pronouns (Who, Which, That, Whose)

Introduction :
Les pronoms relatifs relient une proposition subordonnée relative à un nom antécédent.

1. Detailed Grammatical & Conceptual Analysis
A. Rôle et sélection des pronoms relatifs :
1. WHO : S'utilise EXCLUSIVEMENT pour désigner des PERSONNES (êtres humains) :
   • 'The girl who won the first prize is my sister.' (La fille qui a gagné le premier prix).
2. WHICH : S'utilise EXCLUSIVEMENT pour désigner des CHOSES, des OBJETS ou des ANIMAUX :
   • 'The book which is on the table belongs to the teacher.'
3. THAT : Pronom polyvalent qui peut remplacer WHO (pour les personnes) ou WHICH (pour les choses) dans les relatives restrictives :
   • 'The boy that called you' = 'The boy who called you'.
   • 'The car that stopped' = 'The car which stopped'.
4. WHOSE : Exprime la POSSESSION (l'équivalent de 'dont' en français pour les liens de parenté ou de propriété) :
   • 'I met a woman whose son is a famous football player.' (J'ai rencontré une femme dont le fils est un célèbre footballeur).

2. Practical Rules & Structural Mechanics
- Schéma de fusion de phrases :
  Phrase A : 'I know the teacher.' + Phrase B : 'The teacher lives next door.'
  -> Fusion : 'I know the teacher WHO lives next door.'
- Schéma de possession avec WHOSE :
  Phrase A : 'This is the student.' + Phrase B : 'His bicycle was stolen.'
  -> Fusion : 'This is the student WHOSE bicycle was stolen.' (Notice : le possessif 'his' disparaît au profit de whose !).

3. Contextual Examples & Practice Applications
- 'The student who won the national competition received a gold medal.'
- 'The computer which is on the desk is brand new.'
- 'This is the kind man whose car was damaged in the storm.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Nature de l\'Antécédent)',
      content: [
        "Pour choisir le bon pronom relatif en 4ème, analysez le mot placé juste AVANT (l'antécédent) :",
        "• L'antécédent est une PERSONNE (homme, femme, élève, docteur) -> WHO (ou THAT).",
        "  - 'The doctor WHO treated me was very kind.'",
        "• L'antécédent est une CHOSE ou un ANIMAL (voiture, livre, chien, ville) -> WHICH (ou THAT).",
        "  - 'The bus WHICH goes to Saint-Louis leaves at 8 am.'",
        "• Il existe un lien de POSSESSION ('dont le / dont la / dont les') -> WHOSE.",
        "  - 'The man WHOSE house is painted blue is an architect.'"
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Pronoms Relatifs)',
      content: [
        "Synthèse et mécanique de fusion :",
        "• Ne répétez jamais le pronom personnel après le pronom relatif :",
        "  - ❌ 'The man who HE called me...' -> ✅ 'The man WHO called me...'.",
        "• Avec WHOSE, supprimez l'adjectif possessif (his, her, their) lors de la fusion."
      ],
      table: {
        headers: ['Pronom relatif', 'Nature de l\'antécédent', 'Fonction grammaticale', 'Exemple en contexte', 'Traduction'],
        rows: [
          ['WHO', 'Être humain (Personne)', 'Sujet ou Objet', 'The doctor who cured me.', 'Le docteur qui m\'a soigné.'],
          ['WHICH', 'Chose ou Animal', 'Sujet ou Objet', 'The watch which was broken.', 'La montre qui était cassée.'],
          ['THAT', 'Personne ou Chose', 'Relatives déterminatives', 'The car that I bought.', 'La voiture que j\'ai achetée.'],
          ['WHOSE', 'Possession (humain/chose)', 'Complément du nom', 'The girl whose bag is lost.', 'La fille dont le sac est perdu.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Trap Prevention',
      content: [
        "Exemples modèles :",
        "• 'The student who won the national competition received a gold medal.'",
        "• 'The computer which is on the desk is brand new.'",
        "• 'This is the kind man whose car was damaged in the storm.'",
        "Erreurs courantes :",
        "❌ 'The dog who barked' -> ✅ 'The dog which barked' (les animaux prennent which).",
        "❌ 'The girl which speaks English' -> ✅ 'The girl who speaks English' (être humain = who)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Compléter avec WHO, WHICH ou WHOSE',
          content: [
            "Consigne : Complétez chaque phrase avec le pronom relatif adéquat (WHO, WHICH ou WHOSE) :",
            "1. A nurse is a healthcare professional ... takes care of patients.",
            "2. The bridge ... crosses the river was built in 1965.",
            "3. I met a talented musician ... songs are famous worldwide.",
            "4. This is the new schoolbag ... my father bought for my birthday.",
            "5. The boy ... won the spelling bee competition is my younger brother."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'who takes care' -> L'antécédent 'a nurse' est un être humain -> WHO.",
            "2. 'which crosses' -> L'antécédent 'the bridge' est un objet inanimé / une construction -> WHICH.",
            "3. 'whose songs' -> Rapport de possession (les chansons du musicien) -> WHOSE.",
            "4. 'which my father bought' -> L'antécédent 'schoolbag' est un objet -> WHICH.",
            "5. 'who won' -> L'antécédent 'The boy' est une personne humaine -> WHO."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Fusionner Deux Phrases en Une Seule',
          content: [
            "Consigne : Reliez les deux phrases à l'aide de WHO, WHICH ou WHOSE en supprimant les répétitions :",
            "1. The police arrested the thief. The thief stole the gold jewelry.",
            "2. She showed me the photograph. The photograph was taken in Gorée Island.",
            "3. I helped a woman. Her car broke down on the highway."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'The police arrested the thief who stole the gold jewelry.' (Thief est une personne, remplacé par who).",
            "2. 'She showed me the photograph which was taken in Gorée Island.' (Photograph est une chose, remplacé par which).",
            "3. 'I helped a woman whose car broke down on the highway.' (Her car indique la possession, fusionnée avec whose car)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Système des Pronoms Relatifs',
    root: 'RELATIVE PRONOUNS',
    branches: [
      {
        name: 'WHO (Personnes)',
        subtitle: 'Êtres humains',
        items: ['Pour les personnes uniquement', 'Sujet ou complément', 'Ex: The man who spoke to you']
      },
      {
        name: 'WHICH (Choses & Animaux)',
        subtitle: 'Inanimé & Nature',
        items: ['Pour les objets et les animaux', 'Sujet ou complément', 'Ex: The book which I read']
      },
      {
        name: 'WHOSE (Possession)',
        subtitle: 'Traduction de \'Dont\'',
        items: ['Indique l\'appartenance', 'Remplace his / her / their', 'Ex: The boy whose car was stolen']
      }
    ]
  },
  conclusion:
    "En conclusion, les pronoms relatifs constituent un ciment syntaxique indispensable : WHO anime les personnes, WHICH matérialise les objets et les animaux, et WHOSE tisse les liens d'appartenance, garantissant un style rédigé fluide et mature."
};

export const LESSON_19_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-19',
  number: 'Lesson 19',
  title: 'The Passive Voice in Present and Past Simple (La Voix Passive)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "La voix passive (Passive Voice) permet de déplacer le centre d'intérêt de la phrase : au lieu de mettre en valeur l'auteur de l'action (l'agent), on met en lumière l'objet qui subit l'action ou le résultat obtenu. Très utilisée dans les articles de presse, les manuels scolaires et les comptes-rendus scientifiques, la voix passive obéit à une formule mathématique rigoureuse : l'auxiliaire BE conjugué au temps de la phrase active, suivi du Participe Passé du verbe principal. Cette leçon vous apprend à convertir l'actif au passif au présent et au prétérit simple.",
  fullText: `Lesson 19: The Passive Voice (Present and Past Simple)

Introduction :
La voix passive est employée lorsque l'action ou celui qui la subit est plus important que celui qui la fait.

1. Detailed Grammatical & Conceptual Analysis
A. Mécanique de Transformation Actif ➔ Passif :
1. Le Complément d'Objet Direct (COD) de la phrase active devient le NOUVEAU SUJET de la phrase passive.
2. On insère l'auxiliaire BE conjugué au MÊME TEMPS que le verbe actif d'origine (am/is/are au présent, was/were au passé).
3. On place le verbe d'action au PARTICIPE PASSÉ (3ème colonne ou terminaison -ed).
4. L'ancien sujet devient le COMPLÉMENT D'AGENT, introduit par la préposition BY (par).

B. Les deux temps fondamentaux du programme de 4ème :
1. Au Présent Simple : SUJET + AM / IS / ARE + PARTICIPE PASSÉ (+ by agent) :
   • Actif : 'People speak English all over the world.'
   • Passif : 'English is spoken all over the world.'
2. Au Prétérit Simple : SUJET + WAS / WERE + PARTICIPE PASSÉ (+ by agent) :
   • Actif : 'Alexander Fleming discovered penicillin in 1928.'
   • Passif : 'Penicillin was discovered by Alexander Fleming in 1928.'

2. Practical Rules & Structural Mechanics
- Si l'auteur de l'action est inconnu, évident ou sans importance (someone, people, they), on supprime purement et simplement le complément d'agent 'by...' :
  • Actif : 'Someone stole my bicycle yesterday.'
  • Passif : 'My bicycle was stolen yesterday.' (Pas besoin de dire 'by someone').

3. Contextual Examples & Practice Applications
- 'English is spoken all over the world by millions of people.'
- 'Penicillin was discovered by Alexander Fleming in 1928.'
- 'The classroom is cleaned by the students every afternoon.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Algorithme de la Voix Passive)',
      content: [
        "Les 4 étapes immuables pour passer de la Voix Active à la Voix Passive :",
        "1. Identifiez le COD actif et placez-le en tête de phrase comme nouveau sujet.",
        "2. Conjuguez l'auxiliaire BE au même temps que le verbe actif :",
        "   - Présent simple -> is / are.",
        "   - Prétérit simple -> was / were.",
        "3. Mettez le verbe principal au Participe Passé (-ed ou 3e colonne irrégulière).",
        "4. Introduisez l'auteur de l'action par 'BY' (Complément d'agent)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Formes Présent & Passé)',
      content: [
        "Structure comparée Actif vs Passif :",
        "• Présent Simple Passif : SUJET + IS / ARE + PARTICIPE PASSÉ.",
        "• Past Simple Passif : SUJET + WAS / WERE + PARTICIPE PASSÉ.",
        "• Règle d'omission du complément d'agent : Quand l'agent est 'someone', 'somebody', 'they', 'people', on l'efface au passif !"
      ],
      table: {
        headers: ['Temps actif', 'Phrase active', 'Formule passive', 'Phrase passive résultante'],
        rows: [
          ['Présent Simple', 'The chef prepares the meal.', 'is / are + Participe', 'The meal is prepared by the chef.'],
          ['Présent Simple', 'Farmers grow rice here.', 'is / are + Participe', 'Rice is grown here by farmers.'],
          ['Past Simple', 'Eiffel designed the tower.', 'was / were + Participe', 'The tower was designed by Eiffel in 1889.'],
          ['Past Simple', 'Thieves stole the cars.', 'was / were + Participe', 'The cars were stolen by thieves.'],
          ['Past Simple (agent flou)', 'Someone opened the door.', 'was / were + Participe', 'The door was opened.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Errors',
      content: [
        "Exemples modèles :",
        "• 'English is spoken all over the world by millions of people.'",
        "• 'Penicillin was discovered by Alexander Fleming in 1928.'",
        "• 'The classroom is cleaned by the students every afternoon.'",
        "Pièges fréquents :",
        "❌ Oublier l'auxiliaire BE : 'The house built in 1990' -> ✅ 'The house WAS built in 1990'.",
        "❌ Mauvais accord de BE : 'Two cars was stolen' -> ✅ 'Two cars WERE stolen'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Mettre les Phrases à la Voix Passive',
          content: [
            "Consigne : Transformez les phrases actives suivantes à la voix passive au temps correspondant (Présent ou Passé Simple) :",
            "1. The pupils clean the courtyard every morning.",
            "2. Mr Faye taught English in our school last year.",
            "3. Millions of tourists visit the Island of Gorée every year.",
            "4. A famous Senegalese author wrote this inspiring novel."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'The courtyard is cleaned by the pupils every morning.' (Présent simple : is + verbe régulier cleaned + by the pupils).",
            "2. 'English was taught in our school by Mr Faye last year.' (Past simple : was + participe irrégulier taught + by Mr Faye).",
            "3. 'The Island of Gorée is visited by millions of tourists every year.' (Présent simple : is + visited + by millions of tourists).",
            "4. 'This inspiring novel was written by a famous Senegalese author.' (Past simple : was + participe irrégulier written + by a famous author)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Compléter avec le Verbe au Passif',
          content: [
            "Consigne : Complétez chaque phrase avec la forme passive convenable du verbe entre parenthèses :",
            "1. Rice (grow) ... in large quantities in the Casamance region. (Présent simple)",
            "2. The historic mosque (build) ... more than two centuries ago. (Past simple)"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'is grown' -> Rice est indénombrable singulier au présent simple : is + participe irrégulier de grow (grown).",
            "2. 'was built' -> Mosque est singulier au passé avec 'ago' : was + participe irrégulier de build (built)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Architecture de la Voix Passive',
    root: 'PASSIVE VOICE',
    branches: [
      {
        name: 'Transformation Active ➔ Passive',
        subtitle: 'Les 4 étapes',
        items: ['1. COD devient Sujet', '2. Auxiliaire BE au temps actif (is/are ou was/were)', '3. Verbe au Participe Passé', '4. Auteur introduit par BY']
      },
      {
        name: 'Présent Simple Passif',
        subtitle: 'Actions régulières',
        items: ['AM / IS / ARE + Participe Passé', 'Ex: English is spoken', 'Ex: Apples are sold here']
      },
      {
        name: 'Past Simple Passif',
        subtitle: 'Événements historiques',
        items: ['WAS / WERE + Participe Passé', 'Ex: The book was written in 1960', 'Ex: The keys were lost yesterday']
      }
    ]
  },
  conclusion:
    "En conclusion, la voix passive permet de focaliser l'attention sur l'action accomplie plutôt que sur son exécutant. La maîtrise infaillible de l'auxiliaire BE (is/are ou was/were) associé au participe passé est la clé maîtresse de cette transformation stylistique."
};

export const LESSON_20_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-20',
  number: 'Lesson 20',
  title: 'Conditional Sentences: Zero and First Conditionals (Les Conditionnelles)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Exprimer une condition ('si ceci se produit, alors cela arrivera') permet d'envisager l'avenir, d'établir des règles de cause à effet et de formuler des hypothèses. En classe de 4ème, le programme se concentre sur les deux premières structures conditionnelles : le Conditionnel Zéro (Zero Conditional pour les vérités scientifiques immuables) et le Premier Conditionnel (First Conditional pour les situations futures réalistes et probables). Cette leçon décortique la concordance des temps requise.",
  fullText: `Lesson 20: Conditional Sentences (Zero and First Conditionals)

Introduction :
Les propositions conditionnelles introduites par IF relient une condition préalable à sa conséquence directe.

1. Detailed Grammatical & Conceptual Analysis
A. Le Conditionnel Zéro (Zero Conditional) :
- Exprime des vérités scientifiques, des faits naturels inéluctables ou des règles permanentes.
- Règle temporelle : IF + PRÉSENT SIMPLE, [PRÉSENT SIMPLE].
  • 'If you heat ice, it melts.' (Si vous chauffez la glace, elle fond inévitablement).
  • 'If you drop an object, it falls to the ground.'
- Dans ce conditionnel, IF peut être remplacé par WHEN sans changer le sens.

B. Le Premier Conditionnel (First Conditional) :
- Exprime une condition future réelle, possible et hautement probable.
- RÈGLE D'OR DE CONCORDANCE DES TEMPS :
  IF + PRÉSENT SIMPLE, [FUTURE AVEC WILL + BASE VERBALE].
  • 'If it rains tomorrow, we will stay at home.' (S'il pleut demain, nous resterons à la maison).
  • 'If you study hard, you will pass your exam.'
- LA RÈGLE SUPRÊME : On ne met JAMAIS 'WILL' dans la proposition introduite par IF !
  • On dit : 'If he comes tomorrow' (et JAMAIS 'If he will come').

2. Practical Rules & Structural Mechanics
- Inversion possible des deux propositions :
  • 'If you work hard, you will succeed.' = 'You will succeed if you work hard.'
  • Remarque de ponctuation : Quand la proposition avec IF est en tête, on place une VIRGULE entre les deux parties. Quand le résultat est en tête, on ne met PAS de virgule.

3. Contextual Examples & Practice Applications
- 'If you heat ice, it melts.'
- 'If it rains tomorrow, we will stay at home and watch a documentary.'
- 'She will miss the bus if she does not leave the house right now.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Zero vs First Conditional)',
      content: [
        "A. Le Conditionnel Zéro (Vérité Scientifique ou Règle Absolue) :",
        "• Formule : IF + PRÉSENT SIMPLE ➔ PRÉSENT SIMPLE.",
        "• 'If you boil water at 100°C, it turns into steam.' (Phénomène physique constant).",
        "B. Le Premier Conditionnel (Hypothèse Réelle sur le Futur) :",
        "• Formule : IF + PRÉSENT SIMPLE ➔ WILL + BASE VERBALE.",
        "• 'If I find your keys, I will call you immediately.'",
        "• RÈGLE D'OR D'OR : Strictement JAMAIS de 'will' juste après IF !",
        "  - ❌ 'If you will come' -> ✅ 'If you come'."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau de Concordance)',
      content: [
        "Tableau récapitulatif des deux conditionnelles :",
        "• Ponctuation : la virgule est obligatoire quand 'If' commence la phrase.",
        "• Variantes modales du First Conditional : on peut remplacer WILL par CAN ou MAY si le résultat est incertain ou dépend d'une capacité ('If you finish early, you can go home')."
      ],
      table: {
        headers: ['Type de conditionnel', 'Proposition IF (Condition)', 'Proposition Principale (Résultat)', 'Exemple type', 'Valeur'],
        rows: [
          ['Zero Conditional', 'IF + Présent Simple', 'Présent Simple', 'If you freeze water, it becomes ice.', 'Vérité scientifique immuable'],
          ['First Conditional', 'IF + Présent Simple', 'WILL + Base Verbale', 'If she studies, she will succeed.', 'Probabilité future réelle'],
          ['First Conditional (-)', 'IF + don\'t / doesn\'t + BV', 'WON\'T + Base Verbale', 'If you don\'t hurry, you will miss the train.', 'Mise en garde future']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Errors',
      content: [
        "Exemples modèles officiels :",
        "• 'If you heat ice, it melts.'",
        "• 'If it rains tomorrow, we will stay at home and watch a documentary.'",
        "• 'She will miss the bus if she does not leave the house right now.'",
        "Pièges récurrents :",
        "❌ 'If it will rain, I will take an umbrella' -> ✅ 'If it rains, I will take an umbrella'.",
        "❌ Oublier le 's' à la 3e personne après If : 'If he study' -> ✅ 'If he studies'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Conjuguer au Premier Conditionnel',
          content: [
            "Consigne : Mettez les verbes entre parenthèses aux temps appropriés selon la règle du First Conditional (IF + Présent Simple ➔ WILL + BV) :",
            "1. If Alioune (work) ... seriously, he (pass) ... his 4ème exam easily.",
            "2. We (go) ... to the beach next Saturday if the weather (be) ... sunny.",
            "3. If you (not / eat) ... breakfast this morning, you (feel) ... hungry during the test.",
            "4. The teacher (be) ... disappointed if the pupils (forget) ... their homework."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'works / will pass' -> Proposition conditionnelle IF au Présent Simple (works avec -s) ; résultat futur avec will pass.",
            "2. 'will go / is' -> Résultat principal futur en tête (will go) ; proposition IF au Présent Simple du verbe be (is).",
            "3. 'don't eat / will feel' -> Négation au présent après IF (don't eat) ; résultat avec will feel.",
            "4. 'will be / forget' -> Résultat principal avec will be ; verbe après IF au Présent Simple pluriel (forget)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Identification Conditionnel Zéro vs Premier Conditionnel',
          content: [
            "Consigne : Indiquez si chaque phrase relève du Conditionnel Zéro ou du Premier Conditionnel, et justifiez :",
            "1. If plants do not receive water and sunlight, they die.",
            "2. If you invite Moussa to your birthday party, he will definitely come."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'Conditionnel Zéro' (Explication : IF + présent do not receive ➔ présent die ; c'est une loi biologique universelle).",
            "2. 'Premier Conditionnel' (Explication : IF + présent invite ➔ futur will come ; c'est une situation future probable spécifique)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Structure des Conditionnelles',
    root: 'CONDITIONALS',
    branches: [
      {
        name: 'Zero Conditional',
        subtitle: 'Vérités scientifiques',
        items: ['IF + Présent Simple, Présent Simple', 'Lois physiques, faits constants', 'Ex: If you heat ice, it melts']
      },
      {
        name: 'First Conditional',
        subtitle: 'Avenir probable',
        items: ['IF + Présent Simple, WILL + Base Verbale', 'JAMAIS de WILL directement après IF', 'Ex: If it rains, we will stay home']
      },
      {
        name: 'Règle de Ponctuation',
        subtitle: 'Emplacement de IF',
        items: ['IF en tête ➔ Virgule au milieu', 'Résultat en tête ➔ Pas de virgule', 'Ex: You will succeed if you work']
      }
    ]
  },
  conclusion:
    "En résumé, la maîtrise des phrases conditionnelles repose sur une vigilance absolue : bannir définitivement l'auxiliaire 'will' de la clause introduite par 'if', et associer le présent de la condition au futur certain du résultat attendu."
};

export const LESSON_21_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-21',
  number: 'Lesson 21',
  title: 'Prepositions of Time and Place: IN, ON, AT',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Les trois petites prépositions IN, ON et AT sont omniprésentes dans la langue anglaise. Elles servent à la fois de repères temporels (pour indiquer l'heure, le jour, le mois ou le siècle) et de repères spatiaux (pour situer un objet sur une surface, dans un lieu clos ou à une adresse précise). Leur maîtrise repose sur le principe de l'entonnoir (pyramide inversée) qui va du plus général au plus spécifique. Cette leçon analyse en détail leur double emploi.",
  fullText: `Lesson 21: Prepositions of Time and Place (IN, ON, AT)

Introduction :
IN, ON et AT situent les actions dans le temps et dans l'espace selon une gradation de précision géométrique.

1. Detailed Grammatical & Conceptual Analysis
A. Prépositions de TEMPS (Time) :
1. AT = Heure exacte et moments ponctuels très précis :
   • at 8 o'clock, at noon, at midnight, at dawn, at the moment, at Christmas, at the weekend (UK).
2. ON = Jours de la semaine et dates précises :
   • on Monday, on Friday morning, on May 15th, on my birthday, on New Year's Day.
3. IN = Périodes longues, mois, années, saisons, siècles :
   • in July, in 2024, in summer, in the 21st century, in the morning / afternoon / evening.

B. Prépositions de LIEU (Place) :
1. AT = Point de repère précis, adresse exacte avec numéro, institutions :
   • at the bus stop, at home, at school, at university, at 14 Avenue Bourguiba, at the door.
2. ON = Surface sur laquelle repose un objet, rues sans numéro, étages :
   • on the table, on the wall, on the floor, on Oxford Street, on the first floor.
3. IN = Espace clos à trois dimensions, villes, pays, continents :
   • in the classroom, in my pocket, in Dakar, in Senegal, in Africa, in the world.

2. Practical Rules & Structural Mechanics
La Règle de l'Entonnoir (The Funnel Principle) :
- IN = Le plus vaste (Année, pays, espace fermé).
- ON = Intermédiaire (Jour précis, rue, surface plate).
- AT = Le plus pointu (Heure précise, adresse complète avec numéro, point exact).

3. Contextual Examples & Practice Applications
- 'The meeting starts at 8 o'clock on Monday morning in the conference room.'
- 'He was born in 2010 in Dakar, but he currently lives at 25 Independence Avenue.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (La Règle de l\'Entonnoir)',
      content: [
        "Le principe universel pour ne plus jamais confondre IN, ON et AT :",
        "A. Dans le TEMPS :",
        "• AT (Précision maximale) : heures (at 7:30 am), repas (at lunchtime), fêtes sans le mot 'day' (at Easter).",
        "• ON (Période moyenne de 24h) : jours de la semaine (on Tuesday), dates avec jour (on 4th April), anniversaires (on my birthday).",
        "• IN (Longue durée) : mois (in January), années (in 1960), saisons (in winter), siècles (in the 20th century), parties de journée (in the morning).",
        "B. Dans l'ESPACE :",
        "• AT (Point précis) : at the door, at the airport, at work, at school, à une adresse numérotée (at 12 Main Street).",
        "• ON (Surface et lignes) : on the table, on the blackboard, on a street (on Rue de la République), on an island.",
        "• IN (Contenant 3D et zones géographiques) : in a box, in Dakar, in France, in a car, in hospital."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Comparatif Temps & Espace)',
      content: [
        "Tableau synthétique de référence pour les devoirs de 4ème :",
        "• Exception d'horaire nocturne : on dit 'in the morning', 'in the afternoon', mais 'AT night' !",
        "• Exception de vacances : 'at the weekend' (anglais britannique) vs 'on the weekend' (anglais américain)."
      ],
      table: {
        headers: ['Préposition', 'Emploi Temporel (Time)', 'Emploi Spatial (Place)', 'Exemple complet combiné'],
        rows: [
          ['AT', 'Heure exacte (at 9 pm, at noon)', 'Point exact, adresse numérotée (at 10 Blue Street)', 'Meet me at 9 am at the train station.'],
          ['ON', 'Jours et dates complètes (on Monday, on July 4th)', 'Surfaces, rues sans numéro (on the desk, on Fleet St)', 'Put the notebook on the table on Monday.'],
          ['IN', 'Mois, années, siècles (in May, in 2025)', 'Espaces clos, villes, pays (in Dakar, in Senegal)', 'The school opened in 2018 in Saint-Louis.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Errors',
      content: [
        "Exemples modèles officiels :",
        "• 'The meeting starts at 8 o'clock on Monday morning in the conference room.'",
        "• 'He was born in 2010 in Dakar, but he currently lives at 25 Independence Avenue.'",
        "• 'We usually rest at home at night.'",
        "Erreurs classiques :",
        "❌ 'In Monday' -> ✅ 'On Monday' (les jours prennent toujours on).",
        "❌ 'At Dakar' -> ✅ 'In Dakar' (les villes prennent toujours in).",
        "❌ 'In night' -> ✅ 'At night'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Compléter avec IN, ON ou AT',
          content: [
            "Consigne : Remplissez chaque espace par la préposition correcte (IN, ON ou AT) :",
            "1. The national independence day of Senegal is celebrated ... April 4th.",
            "2. Our English class begins promptly ... 8:15 am.",
            "3. Many beautiful migratory birds arrive in the Djoudj Park ... winter.",
            "4. Ousmane left his school diary ... the teacher's desk.",
            "5. My uncle works ... a large hospital located ... Thiès."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'on April 4th' -> Date précise comprenant le jour du mois -> ON.",
            "2. 'at 8:15 am' -> Heure exacte de l'horloge -> AT.",
            "3. 'in winter' -> Saison de l'année -> IN.",
            "4. 'on the teacher's desk' -> Surface plane où repose l'objet -> ON.",
            "5. 'in a large hospital / in Thiès' -> Espaces fermés et nom de ville -> IN."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Correction de Phrases Fautives',
          content: [
            "Consigne : Chaque phrase contient une erreur de préposition. Réécrivez la phrase correctement :",
            "1. We will travel to Kaolack in Sunday morning.",
            "2. The pupils are studying at the classroom.",
            "3. Senegal gained its independence at 1960."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. Correction : 'We will travel to Kaolack ON Sunday morning.' (Les jours de la semaine exigent la préposition ON).",
            "2. Correction : 'The pupils are studying IN the classroom.' (Une salle de classe est un espace fermé en 3D qui exige IN).",
            "3. Correction : 'Senegal gained its independence IN 1960.' (Les années civiles sont introduites par IN)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'La Pyramide Inversée de IN, ON, AT',
    root: 'PREPOSITIONS IN / ON / AT',
    branches: [
      {
        name: 'IN (Le plus Général)',
        subtitle: 'Grandes périodes & Territoires',
        items: ['Temps : Siècles, années, mois, saisons', 'Lieu : Pays, villes, pièces fermées', 'Ex: in 2024, in Senegal, in my room']
      },
      {
        name: 'ON (Intermédiaire)',
        subtitle: 'Jours & Surfaces',
        items: ['Temps : Jours de la semaine, dates complètes', 'Lieu : Rues sans numéro, surfaces plates', 'Ex: on Monday, on the floor, on Main Street']
      },
      {
        name: 'AT (Le plus Précis)',
        subtitle: 'Points précis & Heures',
        items: ['Temps : Heures exactes, fêtes (at 8 am, at night)', 'Lieu : Adresses complètes numérotées, arrêts', 'Ex: at 10 Baker St, at the bus stop']
      }
    ]
  },
  conclusion:
    "En conclusion, maîtriser IN, ON et AT dans l'espace et le temps s'apparente à régler un zoom d'appareil photo : du plan le plus large avec IN, au plan moyen avec ON, jusqu'à la mise au point chirurgicale avec AT."
};
