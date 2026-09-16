import { LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ANGLAIS DE 5ÈME — AUTEUR : IBRAHIMA KANE
// COURS LONGS ET DÉTAILLÉS (LEÇONS 1 À 14 - VOLUME 1)
// PARTIE C : GROUPE NOMINAL, POSSESSION, QUANTIFIEURS & DEGRÉS DE L'ADJECTIF (LEÇONS 10 À 14)
// AUCUN RÉSUMÉ, EXHAUSTIVITÉ TOTALE, DÉTAILS DE COMPRÉHENSION APPROFONDIS,
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_10_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-10',
  number: 'Leçon 10',
  title: "Le Groupe Nominal (Articles A/An, The, Article Zéro)",
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Building meaningful sentences in English begins with mastering the noun phrase. English does not assign arbitrary masculine or feminine genders to inanimate objects like French does; instead, it focuses on whether a noun is indefinite, uniquely identified, or representing an entire universal concept. The English determiner system relies on three pillars: the indefinite article A/AN, the definite article THE, and the powerful, concept-defining ZERO ARTICLE (Ø). This tenth lesson analyzes their rules, phonological choices based on initial sounds, and cultural conventions governing countries, meals, and titles.",
  fullText: `Leçon 10 : Le Groupe Nominal (Articles A/An, The, Article Zéro)

Introduction : Building meaningful sentences in English begins with mastering the noun phrase. English does not assign arbitrary masculine or feminine genders to inanimate objects like French does; instead, it focuses on whether a noun is indefinite, uniquely identified, or representing an entire universal concept. The English determiner system relies on three pillars: the indefinite article A/AN, the definite article THE, and the powerful, concept-defining ZERO ARTICLE (Ø). This tenth lesson analyzes their rules, phonological choices based on initial sounds, and cultural conventions governing countries, meals, and titles.

1. Vue d'Ensemble du Système des Déterminants en Anglais
En anglais, le choix du déterminant devant un nom ne dépend pas du genre grammatical (masculin / féminin), mais du caractère défini, indéfini ou universel de ce nom dans la situation de communication.
On distingue trois grands régimes d'articles :
1. L'article indéfini : A ou AN (Un, une).
2. L'article défini : THE (Le, la, les).
3. L'Article Zéro (noté Ø) : Absence totale d'article (spécificité majeure de l'anglais).

2. L'Article Indéfini : A / AN
• Règle d'emploi :
  L'article indéfini s'utilise UNIQUEMENT devant un nom dénombrable au SINGULIER, inconnu des interlocuteurs ou mentionné pour la première fois.
• La règle phonétique du choix entre A et AN :
  Ce n'est PAS la première lettre écrite qui compte, mais le SON initial prononcé !
  - On utilise A devant un son consonne :
    a book, a car, a table, a dog.
    ATTENTION PIÈGE MAJEUR : "a university", "a uniform", "a European city". Le 'u' initial se prononce ici comme la semi-consonne /j/ (le son 'y'), c'est donc un son consonne, d'où l'emploi de 'A' et non pas 'AN' !
  - On utilise AN devant un son voyelle :
    an apple, an elephant, an orange, an umbrella.
    ATTENTION PIÈGE DU 'H' : "an hour" (une heure) s'écrit avec 'AN' car la lettre 'h' est totalement muette, le mot commence par le son voyelle /aʊə/. En revanche, si le 'h' est aspiré et prononcé, on dit : "a house", "a horse", "a hospital".

3. L'Article Défini : THE
• Règle d'emploi :
  L'article THE (prononcé /ðə/ devant consonne et /ðiː/ devant voyelle) s'utilise devant les noms singuliers ou pluriels pour désigner une chose ou une personne PRÉCISE, unique ou déjà connue des deux locuteurs.
• Exemple officiel Ibrahima Kane :
  "The dog next door is barking." (Le chien d'à côté est en train d'aboyer ➔ Ce n'est pas n'importe quel chien, c'est précisément le chien des voisins que tout le monde identifie).
  "Open the window, please." (La fenêtre de la classe dans laquelle nous sommes).

4. L'Article Zéro (Ø - Pas d'Article) : Une Spécificité Anglaise Fondamentale
L'absence d'article (Article Zéro) est une règle d'or en anglais. On NE MET PAS d'article devant :
• Les généralités, concepts abstraits et vérités universelles :
  Quand on parle d'une notion en général ou d'une espèce tout entière au pluriel :
  - Exemple officiel 1 : "I like Ø chocolate." (J'aime le chocolat en général, et non pas *I like the chocolate).
  - Exemple officiel 2 : "Ø Lions are dangerous." (Les lions en général sont dangereux, et non pas *The lions).
  - "Ø Music is life." / "Ø Life is beautiful."
• Les pays au singulier :
  On dit "Ø France", "Ø England", "Ø Senegal", "Ø Canada" (et jamais *The France, *The Senegal).
  (Exception : les pays au pluriel ou composés d'un nom commun prennent THE : The United States, The United Kingdom, The Netherlands).
• Les titres suivis d'un nom propre :
  On dit "Ø Queen Elizabeth", "Ø President Macky Sall", "Ø Doctor Kane" (et non pas *The Queen Elizabeth).
• Les repas de la journée :
  On dit "Ø breakfast", "Ø lunch", "Ø dinner" (ex : What did you eat for Ø breakfast?).

Conclusion : En conclusion, le groupe nominal anglais gagne en clarté dès lors que l'on intègre la puissance de l'Article Zéro pour les généralités et que l'on se fie à l'oreille (son consonne ou son voyelle) pour choisir entre A et AN. THE reste réservé à ce qui est pointé du doigt comme unique et précisément identifié.` ,
  sections: [
    {
      title: '1. Rôles et Catégories de Déterminants',
      content: [
        "Trois statuts fondamentaux en anglais :",
        "• A / AN : indéfini, singulier, son consonne vs son voyelle.",
        "• THE : défini, spécifique, singulier ou pluriel.",
        "• ARTICLE ZÉRO (Ø) : généralités, abstractions, pays au singulier, repas, titres."
      ]
    },
    {
      title: '2. Tableau Comparatif des Articles A / AN / THE / Ø',
      content: [
        "Synthèse complète des conditions d'application :"
      ],
      table: {
        headers: ['Déterminant', 'Contexte d\'emploi', 'Exemples officiels Ibrahima Kane', 'Piège à éviter'],
        rows: [
          ['A', 'Devant son consonne (singulier)', 'a book, a car, a university', 'Ne pas écrire *an university (son /j/)'],
          ['AN', 'Devant son voyelle (singulier)', 'an apple, an umbrella, an hour', 'Ne pas écrire *a hour (h muet)'],
          ['THE', 'Chose ou personne précise / connue', 'The dog next door is barking.', 'Ne pas utiliser THE pour les généralités'],
          ['ARTICLE ZÉRO (Ø)', 'Généralités, pays, repas, titres', 'I like Ø chocolate. / Ø Lions are dangerous.', 'Ne jamais dire *The France ou *I like the chocolate']
        ]
      }
    },
    {
      title: '3. La Règle d\'Or de l\'Article Zéro (Ø)',
      content: [
        "Applications quotidiennes indispensables :",
        "• Goûts et préférences : I love Ø sports, She hates Ø spiders.",
        "• Matières scolaires : I study Ø English, Ø Maths and Ø History.",
        "• Repas : At 7 AM, I have Ø breakfast.",
        "• Noms de pays singuliers : My uncle lives in Ø Senegal."
      ]
    },
    {
      title: '4. Fautes Fréquentes Sanctionnées',
      content: [
        "• Calque du français : Traduire « J'aime le lait » par *I like the milk* au lieu de 'I like milk'.",
        "• Utiliser A devant un pluriel : Écrire *a books* au lieu de 'books' ou 'some books'.",
        "• Mauvaise gestion du 'H' : Dire *a hour* au lieu de 'an hour'."
      ]
    }
  ],
  diagram: {
    title: 'Architecture du Groupe Nominal',
    root: 'DÉTERMINANTS & ARTICLES',
    branches: [
      {
        name: 'Indéfini A / AN',
        subtitle: 'Singulier non déterminé',
        items: ['A devant son consonne (a car, a university)', 'AN devant son voyelle (an apple, an hour)', 'Jamais de pluriel avec A/AN']
      },
      {
        name: 'Défini THE',
        subtitle: 'Élément précis et connu',
        items: ['The dog next door (précis)', 'The teacher (connu de tous)', 'Singulier ou pluriel']
      },
      {
        name: 'Article Zéro (Ø)',
        subtitle: 'Généralités & Conventions',
        items: ['I like Ø chocolate (généralité)', 'Ø Lions are dangerous (espèce)', 'Ø Senegal, Ø England (pays singulier)', 'Ø breakfast, Ø lunch (repas)']
      }
    ]
  },
  conclusion:
    "En conclusion, le groupe nominal anglais gagne en clarté dès lors que l'on intègre la puissance de l'Article Zéro pour les généralités et que l'on se fie à l'oreille (son consonne ou son voyelle) pour choisir entre A et AN. THE reste réservé à ce qui est pointé du doigt comme unique et précisément identifié."
};

export const LESSON_11_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-11',
  number: 'Leçon 11',
  title: "L'Expression de la Possession (Génitif, Adjectifs Possessifs)",
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Expressing ownership, family relationships, and personal belongings is central to social communication. While French systematically relies on the preposition 'de' (la voiture de John) and accords possessive adjectives with the object possessed (sa mère = 'sa' car mère est féminin), English adopts a radically different logic. English places the possessor first through the Saxon Genitive ('s or s') and strictly aligns its possessive adjectives (his, her, its) with the biological or grammatical gender of the OWNER, regardless of the object. This eleventh lesson breaks down the genitive rules for singular and plural nouns and clarifies the critical distinction between 'his' and 'her'.",
  fullText: `Leçon 11 : L'Expression de la Possession (Génitif, Adjectifs Possessifs)

Introduction : Expressing ownership, family relationships, and personal belongings is central to social communication. While French systematically relies on the preposition 'de' (la voiture de John) and accords possessive adjectives with the object possessed (sa mère = 'sa' car mère est féminin), English adopts a radically different logic. English places the possessor first through the Saxon Genitive ('s or s') and strictly aligns its possessive adjectives (his, her, its) with the biological or grammatical gender of the OWNER, regardless of the object. This eleventh lesson breaks down the genitive rules for singular and plural nouns and clarifies the critical distinction between 'his' and 'her'.

1. Les Deux Grandes Méthodes pour Exprimer la Possession
Il existe en anglais deux méthodes complémentaires indispensables pour indiquer le lien de possession, de parenté ou d'appartenance :
1. Le Génitif (ou cas possessif en 's / s').
2. Les Adjectifs Possessifs (my, your, his, her, its, our, their).

2. Le Génitif ( 's ou s' ) : La Règle du Possesseur en Tête
Le génitif relie intimement le possesseur et l'objet possédé.
• Structure standard universelle :
  Possesseur + 's + Objet possédé (SANS AUCUN ARTICLE devant l'objet).
  - Exemple officiel Ibrahima Kane : "This is John's car." (C'est la voiture de John).
  - "This is Sarah's book." (C'est le livre de Sarah).
  - "The teacher's desk is near the window." (Le bureau du professeur).
• Règle pour un nom pluriel régulier se terminant déjà par -s :
  Pour éviter la répétition disgracieuse du son /s/, on ajoute UNIQUEMENT L'APOSTROPHE (s') après le -s final, sans rajouter de 's' supplémentaire.
  - Exemple officiel : "The parents' room." (La chambre des parents).
  - "The students' bags." (Les sacs des élèves).
  - "My brothers' bedroom." (La chambre de mes frères).
• Cas des pluriels irréguliers ne se terminant pas par -s :
  Comme ils ne finissent pas par un 's', ils reprennent la règle normale avec apostrophe 's ('s).
  - Exemple officiel : "The children's toys." (Les jouets des enfants).
  - "The women's association." (L'association des femmes).
  - "The men's shoes." (Les chaussures des hommes).

3. Les Adjectifs Possessifs et la Règle d'Or de l'Accord avec le Possesseur
En français, on accorde l'adjectif avec l'objet possédé : on dit « sa mère » et « son père » parce que mère est féminin et père est masculin.
EN ANGLAIS, C'EST L'INVERSE TOTAL ET ABSOLU : L'adjectif possessif s'accorde TOUJOURS ET UNIQUEMENT AVEC LE POSSESSEUR (le genre du sujet qui possède), et JAMAIS avec l'objet ou la personne possédée !
• Répertoire complet des adjectifs possessifs :
  - My : mon, ma, mes.
  - Your : ton, ta, tes / votre, vos.
  - HIS : son, sa, ses ➔ Quand le possesseur est un HOMME ou un GARÇON (masculin).
  - HER : son, sa, ses ➔ Quand le possesseur est une FEMME ou une FILLE (féminin).
  - ITS : son, sa, ses ➔ Quand le possesseur est un OBJET, une CHOSE ou un ANIMAL sans sexe précisé.
  - Our : notre, nos.
  - Their : leur, leurs.
• L'EXEMPLE CRUCIAL DU PROGRAMME :
  - "Paul loves his mother." (Paul aime sa mère ➔ On met 'his' parce que le possesseur est Paul, un garçon ! Le fait que 'mother' soit féminin ne compte absolument pas).
  - "Sarah loves her mother." (Sarah aime sa mère ➔ On met 'her' parce que le possesseur est Sarah, une fille).
  - "Sarah loves her father." (Sarah aime son père ➔ On met 'her' parce que c'est Sarah qui possède, même si 'father' est un homme !).
  - "The dog is eating its bone." (Le chien mange son os ➔ 'its' car c'est un animal).

Conclusion : En conclusion, l'expression de la possession en anglais met l'être humain qui possède au premier plan. Dans le génitif, placez le possesseur avant l'objet avec son 's (ou s' pour un pluriel en s), et pour les adjectifs possessifs, regardez toujours QUI POSSÈDE : un homme impose 'his', une femme impose 'her', et un objet impose 'its'.` ,
  sections: [
    {
      title: '1. Comparatif des Procédés de Possession',
      content: [
        "Deux approches majeures de la possession :",
        "• Le Génitif ('s / s') : pour nommer explicitement le propriétaire (John's car).",
        "• Les Adjectifs possessifs : pour remplacer le nom par un déterminant possessif (his car, her mother)."
      ]
    },
    {
      title: '2. Tableau des Règles d\'Écriture du Génitif',
      content: [
        "Synthèse des trois cas de figure :"
      ],
      table: {
        headers: ['Type de possesseur', 'Règle d\'apostrophe', 'Exemple officiel Ibrahima Kane', 'Traduction'],
        rows: [
          ['Nom singulier', 'Ajout de \'s', "This is John's car.", 'C\'est la voiture de John.'],
          ['Nom pluriel en -s', 'Ajout d\'une simple apostrophe (s\')', "The parents' room.", 'La chambre des parents.'],
          ['Nom pluriel irrégulier (sans -s)', 'Ajout de \'s', "The children's toys.", 'Les jouets des enfants.']
        ]
      }
    },
    {
      title: '3. Tableau des Adjectifs Possessifs (Focus His / Her / Its)',
      content: [
        "L'accord se fait exclusivement selon le genre du possesseur :"
      ],
      table: {
        headers: ['Adjectif possessif', 'Genre du possesseur', 'Exemple modélisé', 'Sens en contexte'],
        rows: [
          ['My / Your', '1re / 2e personne', 'my book / your friend', 'Mon livre / ton ami'],
          ['HIS', 'Possesseur Masculin (garçon/homme)', 'Paul loves his mother.', 'Paul (garçon) aime sa mère'],
          ['HER', 'Possesseur Féminin (fille/femme)', 'Sarah loves her father.', 'Sarah (fille) aime son père'],
          ['ITS', 'Possesseur Neutre (animal/chose)', 'The dog plays with its ball.', 'Le chien (animal) joue avec sa balle'],
          ['Our / Their', 'Pluriels (Nous / Eux)', 'our school / their house', 'Notre école / leur maison']
        ]
      }
    },
    {
      title: '4. Fautes Classiques à Éviter Absolument',
      content: [
        "• Erreur 'her father' : Croire que parce que father est masculin, on doit dire *his father* en parlant du père de Sarah. On dit 'her father'.",
        "• Oubli de l'ordre : Dire *The car of John* au lieu de 'John's car'.",
        "• Confondre it's et its : 'It\'s' = contraction de 'it is' ; 'Its' = adjectif possessif (sans apostrophe)."
      ]
    }
  ],
  diagram: {
    title: 'Les Clés de la Possession',
    root: 'EXPRESSION DE LA POSSESSION',
    branches: [
      {
        name: 'Génitif \'s ou s\'',
        subtitle: 'Possesseur en première place',
        items: ['Singulier : Possesseur + \'s (John\'s car)', 'Pluriel en -s : Apostrophe seule (parents\' room)', 'Pluriel irrégulier : \'s (children\'s toys)', 'Pas d\'article devant l\'objet']
      },
      {
        name: 'Adjectifs Possessifs',
        subtitle: 'Accord avec le possesseur !',
        items: ['HIS = possesseur homme (Paul loves his mother)', 'HER = possesseur femme (Sarah loves her father)', 'ITS = objet ou animal', 'My, Your, Our, Their']
      },
      {
        name: 'Piège de l\'Apostrophe',
        subtitle: 'It\'s vs Its',
        items: ['It\'s = it is (Il est)', 'Its = son / sa neutre (sans apostrophe)', 'Ex : The cat licks its paws']
      }
    ]
  },
  conclusion:
    "En conclusion, l'expression de la possession en anglais met l'être humain qui possède au premier plan. Dans le génitif, placez le possesseur avant l'objet avec son 's (ou s' pour un pluriel en s), et pour les adjectifs possessifs, regardez toujours QUI POSSÈDE : un homme impose 'his', une femme impose 'her', et un objet impose 'its'."
};

export const LESSON_12_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-12',
  number: 'Leçon 12',
  title: 'Les Quantifieurs (Dénombrables et Indénombrables)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Quantifying the world around us requires understanding a fundamental division in the English language: the split between Countable and Uncountable nouns. While a countable item can be numbered individually (one book, two books), an uncountable entity represents an indivisible mass, liquid, abstract concept, or collective substance (water, money, sugar, time). Depending on this classification and whether a sentence is affirmative, negative, or interrogative, English selects precise quantifiers: SOME vs ANY for moderate quantities, and MANY, MUCH, or A LOT OF for large amounts. This twelfth lesson provides complete mastery over this essential grammar mechanism.",
  fullText: `Leçon 12 : Les Quantifieurs (Dénombrables et Indénombrables)

Introduction : Quantifying the world around us requires understanding a fundamental division in the English language: the split between Countable and Uncountable nouns. While a countable item can be numbered individually (one book, two books), an uncountable entity represents an indivisible mass, liquid, abstract concept, or collective substance (water, money, sugar, time). Depending on this classification and whether a sentence is affirmative, negative, or interrogative, English selects precise quantifiers: SOME vs ANY for moderate quantities, and MANY, MUCH, or A LOT OF for large amounts. This twelfth lesson provides complete mastery over this essential grammar mechanism.

1. La Distinction Initiale Obligatoire : Dénombrable vs Indénombrable
Avant d'utiliser le moindre quantifieur, il faut impérativement classer le nom dans l'une des deux catégories :
• Noms Dénombrables (Countable nouns) :
  Ce sont des éléments que l'on peut compter un par un avec les doigts. Ils ont un singulier et un pluriel (prennent un '-s').
  - Exemples : *one book, two books*, a car, three apples, chairs, students.
• Noms Indénombrables (Uncountable nouns) :
  Ce sont des masses compactes, des liquides, des poudres, de l'argent ou des notions abstraites qu'on ne peut pas diviser en unités distinctes. Ils n'ont JAMAIS de pluriel (pas de 's') et ne peuvent jamais être précédés directement de 'a/an' ou d'un chiffre.
  - Exemples officiels : *water, money, sugar, time, bread, milk, rice, information*.

2. Le Duo SOME et ANY : Une Quantité Indéterminée ('Du, de la, des')
Pour exprimer une quantité imprécise (« un peu de », « du », « des »), on emploie SOME ou ANY selon la polarité de la phrase :
• SOME s'utilise dans les phrases AFFIRMATIVES :
  Il fonctionne aussi bien avec des dénombrables au pluriel qu'avec des indénombrables.
  - Exemple dénombrable pluriel : "I have some friends." (J'ai des amis).
  - Exemple indénombrable : "I want some water." (Je veux de l'eau).
  - "There is some milk in the fridge."
  (Exception polie : On peut utiliser 'some' dans une question uniquement si l'on propose ou demande poliment quelque chose : "Would you like some tea?").
• ANY s'utilise dans les phrases NÉGATIVES et INTERROGATIVES :
  - Exemple négatif : "I don't have any money." (Je n'ai pas d'argent / Je n'ai aucun argent).
  - Exemple interrogatif : "Do you have any questions?" (Avez-vous des questions ?).
  - "Is there any bread left?" (Reste-t-il du pain ?).
  - "She hasn't got any brothers." (Elle n'a pas de frères).

3. Exprimer une Grande Quantité : MANY, MUCH et A LOT OF ('Beaucoup de')
Pour dire « beaucoup de », l'anglais opère une distinction très rigoureuse :
• MANY : Devant les noms DÉNOMBRABLES AU PLURIEL (prioritairement dans les phrases négatives et interrogatives) :
  - Exemple officiel : "Are there many students in the classroom?" (Y a-t-il beaucoup d'élèves dans la classe ?).
  - "There aren't many cars on the road today."
• MUCH : Devant les noms INDÉNOMBRABLES AU SINGULIER (prioritairement dans les phrases négatives et interrogatives) :
  - Exemple officiel : "I don't have much time." (Je n'ai pas beaucoup de temps).
  - "Is there much sugar in this juice?" (Y a-t-il beaucoup de sucre dans ce jus ?).
  - "He doesn't spend much money."
• A LOT OF (ou LOTS OF) : Le Quantifieur Polyvalent des Phrases Affirmatives :
  Il s'utilise indifféremment devant les DEUX types de noms (dénombrables pluriels ET indénombrables), principalement dans les phrases affirmatives :
  - Exemple officiel Ibrahima Kane : "He has a lot of books (dénombrable) and a lot of energy (indénombrable)."
  - "We have a lot of homework to do."

Conclusion : En conclusion, la règle des quantifieurs repose sur un double filtre mental : d'abord identifier si le nom se compte (book) ou ne se compte pas (water/money), puis regarder le type de phrase (affirmative ➔ some / a lot of ; négative ou interrogative ➔ any / much / many).` ,
  sections: [
    {
      title: '1. Dénombrable vs Indénombrable',
      content: [
        "Classification préalable obligatoire :",
        "• Dénombrables (Countable) : se comptent à l'unité, ont un pluriel (books, pencils, chairs).",
        "• Indénombrables (Uncountable) : masses, liquides, argent, concepts (water, money, sugar, time, milk)."
      ]
    },
    {
      title: '2. Tableau Comparatif SOME vs ANY',
      content: [
        "Emploi selon la forme de la phrase :"
      ],
      table: {
        headers: ['Quantifieur', 'Type de phrase', 'Exemple dénombrable', 'Exemple indénombrable'],
        rows: [
          ['SOME', 'Affirmative', 'I have some friends.', 'I want some water.'],
          ['ANY', 'Négative', 'I haven\'t got any pens.', 'I don\'t have any money.'],
          ['ANY', 'Interrogative', 'Do you have any questions?', 'Is there any milk left?'],
          ['SOME (exception)', 'Demande / Offre polie', 'Can I have some apples?', 'Would you like some tea?']
        ]
      }
    },
    {
      title: '3. Tableau Comparatif MANY, MUCH et A LOT OF',
      content: [
        "Exprimer « beaucoup de » selon la nature du nom :"
      ],
      table: {
        headers: ['Quantifieur', 'Nom compatible', 'Contexte de phrase privilégié', 'Exemple officiel Ibrahima Kane'],
        rows: [
          ['MANY', 'Dénombrables au pluriel', 'Négative & Interrogative', 'Are there many students? / There aren\'t many.'],
          ['MUCH', 'Indénombrables au singulier', 'Négative & Interrogative', 'I don\'t have much time. / Is there much sugar?'],
          ['A LOT OF', 'Dénombrables ET Indénombrables', 'Affirmative (polyvalent)', 'He has a lot of books and a lot of energy.']
        ]
      }
    },
    {
      title: '4. Pièges Fréquents en 5ème',
      content: [
        "• 'Money' est indénombrable en anglais : On ne dit jamais *many money*, mais 'much money' ou 'a lot of money'.",
        "• Pas de pluriel aux indénombrables : Écrire *sugars* ou *informations* est incorrect.",
        "• 'Any' dans une phrase affirmative : Dire *I have any friends* est une faute, il faut dire 'some friends'."
      ]
    }
  ],
  diagram: {
    title: 'La Boussole des Quantifieurs',
    root: 'LES QUANTIFIEURS',
    branches: [
      {
        name: 'Nature du Nom',
        subtitle: 'Dénombrable vs Indénombrable',
        items: ['Dénombrable (comptable) : books, apples, cars', 'Indénombrable (masse) : water, money, sugar, time']
      },
      {
        name: 'Quantité Indéterminée',
        subtitle: 'Some vs Any',
        items: ['SOME en phrase affirmative (I want some water)', 'ANY en négation (I don\'t have any money)', 'ANY en question (Do you have any questions?)']
      },
      {
        name: 'Beaucoup de',
        subtitle: 'Many / Much / A lot of',
        items: ['MANY + dénombrables pluriels (many students)', 'MUCH + indénombrables singuliers (much time)', 'A LOT OF en affirmation pour les deux (books & energy)']
      }
    ]
  },
  conclusion:
    "En conclusion, la règle des quantifieurs repose sur un double filtre mental : d'abord identifier si le nom se compte (book) ou ne se compte pas (water/money), puis regarder le type de phrase (affirmative ➔ some / a lot of ; négative ou interrogative ➔ any / much / many)."
};

export const LESSON_13_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-13',
  number: 'Leçon 13',
  title: 'Le Comparatif (Supériorité, Égalité, Infériorité)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Comparing two objects, animals, places, or people is a core language function that enriches descriptions and personal arguments. In English, comparison of equality and inferiority remains remarkably constant, but comparison of superiority depends strictly on one crucial phonetic factor: the syllable length of the adjective. Short adjectives take an inflectional ending (-er than), while long adjectives require an analytical modifier (more ... than). This thirteenth lesson explores the three degrees of comparison, details spelling changes, and presents the indispensable irregular forms.",
  fullText: `Leçon 13 : Le Comparatif (Supériorité, Égalité, Infériorité)

Introduction : Comparing two objects, animals, places, or people is a core language function that enriches descriptions and personal arguments. In English, comparison of equality and inferiority remains remarkably constant, but comparison of superiority depends strictly on one crucial phonetic factor: the syllable length of the adjective. Short adjectives take an inflectional ending (-er than), while long adjectives require an analytical modifier (more ... than). This thirteenth lesson explores the three degrees of comparison, details spelling changes, and presents the indispensable irregular forms.

1. Rôle du Comparatif en Anglais
Le comparatif sert à confronter DEUX éléments distincts (deux personnes, deux objets, deux villes, deux idées) selon une qualité exprimée par un adjectif.
Il existe trois degrés de comparaison :
1. Le comparatif de supériorité (« Plus ... que »).
2. Le comparatif d'égalité (« Aussi ... que »).
3. Le comparatif d'infériorité (« Moins ... que »).

2. Le Comparatif de Supériorité ('Plus... que') : La Règle de Longueur de l'Adjectif
La construction dépend entièrement du nombre de syllabes de l'adjectif :
• Cas 1 : Les Adjectifs Courts (1 syllabe, ou 2 syllabes se terminant par la lettre -y) :
  On ajoute la terminaison '-er' directement collée à l'adjectif, suivi obligatoirement du mot 'THAN' (qui traduit « que »).
  Structure : Adjectif court + -er + THAN.
  - tall (1 syllabe) ➔ taller than.
    Exemple officiel : "This tree is taller than my house." (Cet arbre est plus grand que ma maison).
  - short ➔ shorter than / fast ➔ faster than / cold ➔ colder than.
  Modifications orthographiques strictes :
  - Si l'adjectif se termine par Consonne + Y : le 'y' se change en 'i' :
    happy ➔ happier than / heavy ➔ heavier than / easy ➔ easier than.
  - Si l'adjectif C-V-C d'une syllabe : on double la consonne finale :
    big ➔ bigger than / hot ➔ hotter than / fat ➔ fatter than.
• Cas 2 : Les Adjectifs Longs (2 syllabes ou plus, ne finissant pas par -y) :
  L'adjectif étant déjà long, on ne peut pas l'alourdir avec '-er'. On place le mot MORE devant l'adjectif qui reste rigoureusement INVARIABLE, suivi de THAN.
  Structure : MORE + Adjectif long + THAN.
  - beautiful ➔ more beautiful than.
    Exemple officiel : "English is more interesting than history." (L'anglais est plus intéressant que l'histoire).
  - intelligent ➔ more intelligent than / expensive ➔ more expensive than / dangerous ➔ more dangerous than.
• Cas 3 : Les Comparatifs Irréguliers Incontournables (À apprendre par cœur) :
  Certains adjectifs très fréquents ne prennent ni '-er' ni 'more' :
  - GOOD (bon) ➔ BETTER THAN (meilleur que).
  - BAD (mauvais) ➔ WORSE THAN (pire que / plus mauvais que).
  - FAR (loin) ➔ FURTHER THAN (plus loin que).

3. Le Comparatif d'Égalité ('Aussi... que')
Il est merveilleusement simple : il est rigoureusement INVARIABLE quelle que soit la longueur de l'adjectif (court ou long) !
Structure :
AS + Adjectif invariable + AS.
• Exemple officiel Ibrahima Kane :
  "He is as strong as his brother." (Il est aussi fort que son frère).
• Avec un adjectif long :
  "Science is as interesting as English." (La science est aussi intéressante que l'anglais).
• À la forme négative (« Pas aussi ... que ») :
  "A car is not as fast as an airplane." (Une voiture n'est pas aussi rapide qu'un avion).

4. Le Comparatif d'Infériorité ('Moins... que')
Lui aussi est INVARIABLE quelle que soit la longueur de l'adjectif :
Structure :
LESS + Adjectif invariable + THAN.
• Exemple officiel Ibrahima Kane :
  "This game is less expensive than that one." (Ce jeu est moins cher que celui-là).
  "This exercise is less difficult than the previous one."

Conclusion : En conclusion, comparer en anglais exige de compter d'abord les syllabes pour le comparatif de supériorité : adjectif court ➔ terminaison en -er than ; adjectif long ➔ more ... than. L'égalité (as ... as) et l'infériorité (less ... than) garantissent ensuite une remarquable simplicité d'emploi sans modification de l'adjectif.` ,
  sections: [
    {
      title: '1. Les Trois Degrés du Comparatif',
      content: [
        "Outils pour comparer deux éléments :",
        "• Supériorité : Plus ... que (adjectif court en -er than / adjectif long en more ... than).",
        "• Égalité : Aussi ... que (as + adjectif + as, universel).",
        "• Infériorité : Moins ... que (less + adjectif + than, universel)."
      ]
    },
    {
      title: '2. Tableau Comparatif de Supériorité (Courts vs Longs)',
      content: [
        "Règles selon la taille de l'adjectif :"
      ],
      table: {
        headers: ['Catégorie d\'adjectif', 'Règle de formation', 'Exemples types', 'Exemple officiel Ibrahima Kane'],
        rows: [
          ['Court (1 syllabe)', 'Adjectif + -er + than', 'tall ➔ taller than, fast ➔ faster than', 'This tree is taller than my house.'],
          ['Court en -y (2 syllabes)', 'y devient i + -er + than', 'happy ➔ happier than, heavy ➔ heavier than', 'She is happier than before.'],
          ['Court C-V-C', 'Double consonne + -er + than', 'big ➔ bigger than, hot ➔ hotter than', 'An elephant is bigger than a lion.'],
          ['Long (2 syllabes et +)', 'MORE + Adjectif + than', 'beautiful ➔ more beautiful than', 'English is more interesting than history.'],
          ['Irréguliers clés', 'Formes propres par cœur', 'good ➔ better / bad ➔ worse / far ➔ further', 'My mark is better than his mark.']
        ]
      }
    },
    {
      title: '3. Tableau Égalité et Infériorité',
      content: [
        "Invariabilité totale de l'adjectif :"
      ],
      table: {
        headers: ['Degré', 'Structure', 'Exemple officiel', 'Traduction'],
        rows: [
          ['Égalité', 'as + Adjectif + as', 'He is as strong as his brother.', 'Il est aussi fort que son frère.'],
          ['Infériorité', 'less + Adjectif + than', 'This game is less expensive than that one.', 'Ce jeu est moins cher que celui-là.']
        ]
      }
    },
    {
      title: '4. Erreurs Fréquentes à Éviter',
      content: [
        "• Double comparatif : Écrire *more taller* ou *more better* (interdit !).",
        "• Mauvaise traduction de 'que' : Utiliser *that* au lieu de 'than' (*taller that my house*).",
        "• Oubli du deuxième 'as' en égalité : Écrire *as strong than* au lieu de 'as strong as'."
      ]
    }
  ],
  diagram: {
    title: 'Le Triangle des Comparatifs',
    root: 'LE COMPARATIF',
    branches: [
      {
        name: 'Supériorité (Plus... que)',
        subtitle: 'Dépend de la longueur',
        items: ['Courts (1 syllabe ou -y) : Adj + -er than (taller, happier)', 'Longs (2 syllabes+) : MORE + Adj + than (more interesting)', 'Irréguliers : better than, worse than, further than']
      },
      {
        name: 'Égalité (Aussi... que)',
        subtitle: 'Invariable et symétrique',
        items: ['as + Adjectif + as', 'He is as strong as his brother', 'Valable pour courts et longs']
      },
      {
        name: 'Infériorité (Moins... que)',
        subtitle: 'Invariable',
        items: ['less + Adjectif + than', 'This game is less expensive than that one', 'Mot \'than\' obligatoire']
      }
    ]
  },
  conclusion:
    "En conclusion, comparer en anglais exige de compter d'abord les syllabes pour le comparatif de supériorité : adjectif court ➔ terminaison en -er than ; adjectif long ➔ more ... than. L'égalité (as ... as) et l'infériorité (less ... than) garantissent ensuite une remarquable simplicité d'emploi sans modification de l'adjectif."
};

export const LESSON_14_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-14',
  number: 'Leçon 14',
  title: 'Le Superlatif (The Superlative Degree)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "When an element does not merely surpass another individual item, but stands out as the ultimate extreme within an entire group, class, or galaxy, English mobilizes the Superlative degree ('Le plus...' or 'Le moins...'). Like the comparative of superiority, the superlative depends fundamentally on whether the adjective is short or long. Short adjectives take the definite article 'the' and the superlative suffix '-est', while long adjectives take 'the most'. This fourteenth lesson completes the first volume of the 5ème curriculum by explaining the superlative of superiority and inferiority, spelling transformations, and irregular forms.",
  fullText: `Leçon 14 : Le Superlatif (The Superlative Degree)

Introduction : When an element does not merely surpass another individual item, but stands out as the ultimate extreme within an entire group, class, or galaxy, English mobilizes the Superlative degree ('Le plus...' or 'Le moins...'). Like the comparative of superiority, the superlative depends fundamentally on whether the adjective is short or long. Short adjectives take the definite article 'the' and the superlative suffix '-est', while long adjectives take 'the most'. This fourteenth lesson completes the first volume of the 5ème curriculum by explaining the superlative of superiority and inferiority, spelling transformations, and irregular forms.

1. Définition et Emploi du Superlatif
Le superlatif exprime le DEGRÉ EXTRÊME d'une qualité (au sommet ou au niveau le plus bas) au sein d'un groupe, d'une communauté ou d'un ensemble complet (« Le plus ... » ou « Le moins ... »).
Différence clé avec le comparatif :
• Le comparatif confronte 2 éléments (A vs B).
• Le superlatif isole 1 élément parmi 3 ou beaucoup plus (1 parmi tout un groupe).
Comme pour le comparatif, la règle de construction varie selon la longueur de l'adjectif.

2. Le Superlatif de Supériorité ('Le plus...')
• Cas 1 : Les Adjectifs Courts (1 syllabe, ou 2 syllabes terminées par -y) :
  On place obligatoirement l'article défini THE devant l'adjectif et on lui ajoute le suffixe '-est'.
  Structure : THE + Adjectif court + -est.
  - fast ➔ the fastest (le plus rapide).
  - high ➔ the highest (le plus haut).
  Règles orthographiques strictes :
  - Consonne C-V-C d'une syllabe : doublement de la consonne finale :
    big ➔ THE BIGGEST (le plus grand).
    Exemple officiel Ibrahima Kane : "Jupiter is the biggest planet in our solar system." (Jupiter est la plus grande planète de notre système solaire).
    hot ➔ the hottest.
  - Consonne + Y : le 'y' se transforme en 'i' :
    heavy ➔ THE HEAVIEST (le plus lourd).
    happy ➔ the happiest / easy ➔ the easiest.
• Cas 2 : Les Adjectifs Longs (2 syllabes ou plus) :
  On place l'expression THE MOST devant l'adjectif qui demeure rigoureusement INVARIABLE.
  Structure : THE MOST + Adjectif long invariable.
  - intelligent ➔ the most intelligent.
    Exemple officiel Ibrahima Kane : "She is the most intelligent girl of the class." (Elle est la fille la plus intelligente de la classe).
  - beautiful ➔ the most beautiful.
  - dangerous ➔ the most dangerous.
  - difficult ➔ the most difficult.
• Cas 3 : Les Superlatifs Irréguliers Fondamentaux :
  Trois adjectifs fondamentaux adoptent une forme superlative totalement unique à mémoriser :
  - GOOD ➔ THE BEST (Le meilleur).
  - BAD ➔ THE WORST (Le pire / le plus mauvais).
  - FAR ➔ THE FURTHEST (Le plus lointain / le plus éloigné).

3. Le Superlatif d'Infériorité ('Le moins...')
Il exprime le degré minimal d'une qualité au sein d'un ensemble.
Sa règle est universelle et IDENTIQUE POUR TOUS LES ADJECTIFS, qu'ils soient courts ou longs :
Structure :
THE LEAST + Adjectif invariable.
• Exemple officiel Ibrahima Kane :
  "This is the least difficult exercise of the book." (C'est l'exercice le moins difficile du livre).
• Autres exemples :
  "It is the least expensive phone in the shop." (C'est le téléphone le moins cher du magasin).
  "He is the least tall of the three brothers." (Il est le moins grand des trois frères).

4. Synthèse Parallèle : Du Positif au Superlatif
Pour ancrer définitivement la grammaire de l'adjectif en 5ème, visualisons la progression complète :
• Adjectif court 'fast' :
  - Positif : A fast car.
  - Comparatif : A plane is faster than a car.
  - Superlatif : The rocket is the fastest vehicle.
• Adjectif long 'intelligent' :
  - Positif : An intelligent student.
  - Comparatif : Sarah is more intelligent than Moussa.
  - Superlatif : She is the most intelligent girl of the class.
• Irrégulier 'good' :
  - Positif : A good book.
  - Comparatif : This book is better than that one.
  - Superlatif : This is the best book in the library.

Conclusion : En conclusion, le superlatif couronne l'étude des degrés de l'adjectif en anglais. En retenant la combinaison de l'article THE avec le suffixe '-est' pour les courts ou avec 'the most' pour les longs, l'élève possède désormais toutes les clés pour exprimer l'excellence et les records dans la langue de Shakespeare.` ,
  sections: [
    {
      title: '1. Rôle et Notion d\'Extrême du Superlatif',
      content: [
        "Désigner le recordman ou l'exception au sein d'un groupe entier :",
        "• Confronte 1 élément à la totalité d'un ensemble (in the class, in the world).",
        "• Présence systématique de l'article 'THE' en tête de groupe.",
        "• Distinction selon la longueur de l'adjectif (courts vs longs)."
      ]
    },
    {
      title: '2. Tableau Complet du Superlatif de Supériorité',
      content: [
        "Les trois catégories de superlatifs de supériorité :"
      ],
      table: {
        headers: ['Type d\'adjectif', 'Règle de formation', 'Exemples types', 'Exemple officiel Ibrahima Kane'],
        rows: [
          ['Court standard', 'THE + adjectif + -est', 'fast ➔ the fastest, high ➔ the highest', 'Cheetah is the fastest animal.'],
          ['Court C-V-C', 'Doublement consonne + -est', 'big ➔ the biggest, hot ➔ the hottest', 'Jupiter is the biggest planet in our solar system.'],
          ['Court en -y', 'y devient i + -est', 'heavy ➔ the heaviest, happy ➔ the happiest', 'Blue whale is the heaviest animal.'],
          ['Long (2 syllabes+)', 'THE MOST + adjectif', 'intelligent ➔ the most intelligent', 'She is the most intelligent girl of the class.'],
          ['Irréguliers', 'Formes propres par cœur', 'good ➔ the best / bad ➔ the worst / far ➔ the furthest', 'He is the best player of the team.']
        ]
      }
    },
    {
      title: '3. Le Superlatif d\'Infériorité (The Least)',
      content: [
        "Règle universelle pour tous les adjectifs :",
        "• Formule : THE LEAST + Adjectif invariable.",
        "• Exemple officiel : 'This is the least difficult exercise of the book.'",
        "• Applicable sans exception aux adjectifs courts comme aux adjectifs longs."
      ]
    },
    {
      title: '4. Erreurs Majeures Fréquentes',
      content: [
        "• Oubli de l'article THE : Dire *Jupiter is biggest planet* au lieu de 'Jupiter is the biggest planet'.",
        "• Double superlatif : Dire *the most biggest* au lieu de 'the biggest'.",
        "• Confondre better et best : Dire *He is the better* au lieu de 'He is the best'."
      ]
    }
  ],
  diagram: {
    title: 'La Pyramide du Superlatif',
    root: 'LE SUPERLATIF',
    branches: [
      {
        name: 'Supériorité Adjectifs Courts',
        subtitle: 'THE + Adj + -est',
        items: ['the fastest (rapide)', 'the biggest (double consonne C-V-C)', 'the heaviest (y devient i)', 'Jupiter is the biggest planet']
      },
      {
        name: 'Supériorité Adjectifs Longs',
        subtitle: 'THE MOST + Adjectif',
        items: ['the most intelligent', 'the most dangerous', 'Adjectif totalement invariable', 'She is the most intelligent girl']
      },
      {
        name: 'Irréguliers & Infériorité',
        subtitle: 'Formes spéciales',
        items: ['good ➔ the best', 'bad ➔ the worst', 'far ➔ the furthest', 'Infériorité universelle : THE LEAST + Adj']
      }
    ]
  },
  conclusion:
    "En conclusion, le superlatif couronne l'étude des degrés de l'adjectif en anglais. En retenant la combinaison de l'article THE avec le suffixe '-est' pour les courts ou avec 'the most' pour les longs, l'élève possède désormais toutes les clés pour exprimer l'excellence et les records dans la langue de Shakespeare."
};
