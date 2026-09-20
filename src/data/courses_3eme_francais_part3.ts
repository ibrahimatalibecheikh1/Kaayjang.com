import { LessonContent } from './courses';

// LEÇON 13 : L'ACCORD DU PARTICIPE PASSÉ
export const LESSON_13_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-13',
  number: 'Leçon 13',
  title: 'L\'accord du participe passé',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude exhaustive des règles d\'accord du participe passé : employé sans auxiliaire, avec être, avec avoir (règle du COD antéposé), verbes pronominaux et cas particuliers pour la dictée du BFEM.',
  introduction: 'L\'accord du participe passé est le pivot central de l\'orthographe grammaticale en langue française. À l\'épreuve de dictée du BFEM, chaque erreur d\'accord sur un participe passé coûte généralement un point plein et peut être éliminatoire. Une démarche méthodique et rigoureuse permet de lever toute hésitation et d\'appliquer sans faille les règles officielles.',
  sections: [
    {
      title: '1. Participe Passé Employé Sans Auxiliaire',
      content: [
        'Règle fondamentale : Lorsqu\'il est employé seul (sans auxiliaire « être » ni « avoir »), le participe passé fonctionne exactement comme un adjectif qualificatif.',
        'Accord : Il s\'accorde en genre (masculin/féminin) et en nombre (singulier/pluriel) avec le nom ou le pronom auquel il se rapporte directement.',
        'Exemples : « Des feuilles [tombées] au sol », « Des candidats [passionnés] », « Une victoire chèrement [acquise] ».'
      ]
    },
    {
      title: '2. Participe Passé Employé avec l\'Auxiliaire « Être »',
      content: [
        'Règle fondamentale : Le participe passé conjugué avec l\'auxiliaire « être » s\'accorde OBLIGATOIREMENT en genre et en nombre avec le SUJET du verbe.',
        'Méthode d\'application : Poser la question « Qui est-ce qui + verbe ? » pour identifier le sujet.',
        'Exemples : « Les candidates sénégalaises sont [arrivées] à l\'heure. » (Sujet : « Les candidates sénégalaises », féminin pluriel -> « arrivées »).',
        'Cas de la voix passive : « Les tables ont été [déplacées] par les appariteurs. » (Sujet : « Les tables », féminin pluriel).'
      ]
    },
    {
      title: '3. Participe Passé Employé avec l\'Auxiliaire « Avoir »',
      subsections: [
        {
          subtitle: 'A. La règle d\'or de Clément Marot',
          content: [
            'Règle 1 : Le participe passé employé avec « avoir » ne s\'accorde JAMAIS avec le sujet du verbe.',
            'Règle 2 : Il reste INVARIABLE si le verbe n\'a pas de COD ou si le COD est placé APRÈS le verbe.',
            'Règle 3 : Il s\'accorde obligatoirement en genre et en nombre avec le Complément d\'Objet Direct (COD) SI ET SEULEMENT SI celui-ci est placé AVANT le verbe.'
          ]
        },
        {
          subtitle: 'B. Les différentes formes de COD antéposé',
          content: [
            '1° Le pronom relatif « que » : « Les félicitations [que] le directeur a [adressées] aux lauréats. » (adressé quoi ? -> « que », mis pour « félicitations », féminin pluriel, placé avant -> accord « adressées »).',
            '2° Les pronoms personnels COD (le, la, les, l\', nous, vous) : « Ces leçons de grammaire, je les ai [apprises] par cœur. » (« les », mis pour « leçons », féminin pluriel -> « apprises »).',
            '3° Les adjectifs interrogatifs ou exclamatifs (quel, quels, quelle, quelles, combien de) : « Quelles difficultés avez-vous [rencontrées] ? » (accord avec « quelles difficultés »).'
          ]
        },
        {
          subtitle: 'C. Les pièges du participe passé avec avoir au BFEM',
          content: [
            'Attention au pronom « en » : Le pronom adverbial « en » ne provoque JAMAIS l\'accord du participe passé. Exemple : « Des mangues de Casamance, j\'en ai [mangé] beaucoup » (invariable, pas de « s » ni de « e »).',
            'Attention aux verbes de mesure, coût, durée, poids (peser, coûter, valoir, durer, marcher, vivre) : ils n\'ont pas de COD mais des compléments de mesure ; le participe reste invariable. Exemple : « Les trois heures que ce devoir a [duré] » (pas d\'accord car « trois heures » est un complément de durée et non un COD).'
          ]
        }
      ]
    },
    {
      title: '4. Le Cas Complexe des Verbes Pronominaux (se regarder, se parler...)',
      subsections: [
        {
          subtitle: 'A. Verbes essentiellement pronominaux',
          content: [
            'Ce sont des verbes qui n\'existent qu\'à la forme pronominale (s\'enfuir, s\'évanouir, s\'envoler, se désister, se repentir).',
            'Règle : Le participe passé s\'accorde TOUJOURS en genre et en nombre avec le sujet.',
            'Exemple : « Les gazelles se sont [enfuies] à l\'approche du prédateur. »'
          ]
        },
        {
          subtitle: 'B. Verbes accidentellement pronominaux (réfléchis ou réciproques)',
          content: [
            'Ces verbes s\'emploient aussi à la forme active (laver quelqu\'un -> se laver ; parler à quelqu\'un -> se parler).',
            'Méthode infaillible du BFEM : On remplace mentalement l\'auxiliaire être par avoir et on recherche le COD :',
            '- Si le pronom réfléchi (se, s\') est COD et placé avant : on accorde. Exemple : « Aminata s\'est [lavée]. » (Aminata a lavé qui ? -> « se » = elle-même, COD avant -> accord).',
            '- Si le pronom réfléchi est COI : on n\'accorde PAS. Exemple : « Elles se sont [parlé]. » (Elles ont parlé à qui ? -> « se » = à elles-mêmes, COI -> pas d\'accord, participe invariable « parlé »).',
            '- Autres verbes à pronom COI invariable : se plaire, se complaire, se déplaire, se succéder, se nuire, se téléphoner, se sourire, se ressembler, se survivre. Exemple : « Les reines du Baol se sont [succédé] sur le trône. »'
          ]
        },
        {
          subtitle: 'C. Verbe pronominal suivi d\'un infinitif ou cas de « faire »',
          content: [
            'Le participe passé du verbe « faire » suivi immédiatement d\'un infinitif est STRICTEMENT INVARIABLE en toute circonstance : « Elles se sont [fait] confectionner de magnifiques boubous » (JAMAIS *faites*).'
          ]
        }
      ]
    },
    {
      title: '5. Arbre de Décision Méthodologique pour la Dictée du BFEM',
      table: {
        headers: ['Situation grammaticale', 'Question à se poser', 'Règle d\'accord', 'Exemple corrigé'],
        rows: [
          ['Sans auxiliaire', 'Avec quel nom est-il en relation ?', 'Accord avec ce nom comme un adjectif', 'Des paroles prononcées avec ferveur.'],
          ['Auxiliaire être', 'Quel est le sujet du verbe ?', 'Accord obligatoire avec le sujet', 'Elles sont revenues victorieuses.'],
          ['Auxiliaire avoir', 'Où est situé le COD ?', 'Accord uniquement si le COD est placé AVANT', 'La dissertation qu\'elle a rédigée était parfaite.'],
          ['Pronominal (se parler)', 'Le pronom réfléchi est-il COD ou COI ?', 'Pas d\'accord si le pronom est COI', 'Ils se sont téléphoné longuement hier soir.'],
          ['« Faire » + infinitif', 'Est-il suivi d\'un verbe à l\'infinitif ?', 'Toujours invariable', 'Ils se sont fait remarquer par leur sagesse.']
        ]
      }
    }
  ],
  conclusion: 'La rigueur sur les accords du participe passé témoigne d\'une maîtrise accomplie de la syntaxe. En appliquant systématiquement la recherche du COD et l\'analyse du pronom réfléchi, le candidat élimine toute incertitude lors de la dictée.'
};

// LEÇON 14 : LE PLURIEL DES NOMS COMPOSÉS ET DES MOTS PARTICULIERS
export const LESSON_14_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-14',
  number: 'Leçon 14',
  title: 'Le pluriel des noms composés et des mots particuliers',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Règles complètes d\'accord au pluriel des noms composés (nom+nom, adjectif+nom, verbe+nom, mot invariable+nom), des adjectifs de couleur et des mots d\'origine étrangère.',
  introduction: 'La formation du pluriel des noms composés et des adjectifs de couleur représente un test d\'orthographe incontournable au BFEM. L\'accord ne repose pas sur le hasard, mais sur la nature grammaticale exacte de chaque élément constitutif et sur le sens logique de l\'expression. Cette leçon détaille chaque règle officielle et ses exceptions reconnues.',
  sections: [
    {
      title: '1. Règle Fondamentale des Noms Composés Réunis par un Trait d\'Union',
      subsections: [
        {
          subtitle: 'A. Le principe fondamental',
          content: [
            'Dans un nom composé, seuls le NOM et l\'ADJECTIF peuvent varier en prenant la marque du pluriel (-s ou -x), à condition que le sens s\'y prête.',
            'Les VERBES, les ADVERBES et les PRÉPOSITIONS sont par nature invariables et ne prennent JAMAIS de marque du pluriel.'
          ]
        },
        {
          subtitle: 'B. Les différentes combinaisons syntaxiques',
          content: [
            '1° Nom + Nom : Les deux éléments s\'accordent.',
            '- Exemple : un chou-fleur -> des choux-fleurs ; un oiseau-mouche -> des oiseaux-mouches ; un wagon-lit -> des wagons-lits.',
            'Exception sémantique : lorsque le second nom joue le rôle d\'un complément du nom implicite introduit par « de » ou « pour », seul le premier s\'accorde : des timbres-poste (timbres pour la poste), des pauses-café (pauses pour le café), des années-lumière.',
            '2° Adjectif + Nom ou Nom + Adjectif : Les deux éléments s\'accordent.',
            '- Exemple : un coffre-fort -> des coffres-forts ; une plate-bande -> des plates-bandes ; un rouge-gorge -> des rouges-gorges ; un rond-point -> des ronds-points.',
            '3° Nom + Préposition + Nom : Seul le PREMIER nom prend la marque du pluriel.',
            '- Exemple : un chef-d\'œuvre -> des chefs-d\'œuvre ; un arc-en-ciel -> des arcs-en-ciel ; un ver à soie -> des vers à soie.',
            'Exceptions invariables : des pot-au-feu, des tête-à-tête, des rez-de-chaussée (toujours invariables).',
            '4° Verbe + Nom : Le verbe reste invariable. Le nom prend la marque du pluriel selon le sens ou selon les rectifications orthographiques.',
            '- Exemple : un tire-bouchon -> des tire-bouchons ; un couvre-lit -> des couvre-lits ; un porte-avions -> des porte-avions.',
            'Attention au sens : des gratte-ciel (qui gratte le ciel, invariable en orthographe traditionnelle, -s accepté en nouvelle orthographe), des coupe-gorge.',
            '5° Mot invariable (adverbe ou préposition) + Nom : Seul le nom prend la marque du pluriel.',
            '- Exemple : une arrière-boutique -> des arrière-boutiques ; une avant-garde -> des avant-gardes ; un sous-sol -> des sous-sols.'
          ]
        }
      ]
    },
    {
      title: '2. L\'Accord des Adjectifs de Couleur',
      subsections: [
        {
          subtitle: 'A. L\'adjectif de couleur simple',
          content: [
            'L\'adjectif de couleur simple s\'accorde normalement en genre et en nombre avec le nom qu\'il qualifie.',
            'Exemples : des chemises vertes, des boubous blancs, des robes noires, des rideaux bleus.'
          ]
        },
        {
          subtitle: 'B. Les noms employés comme adjectifs de couleur (Règle d\'invariabilité)',
          content: [
            'Lorsqu\'un nom de fruit, de fleur, d\'arbre ou d\'objet précieux est utilisé pour désigner une couleur, il reste STRICTEMENT INVARIABLE.',
            'Exemples : des rubans marron, des robes orange, des yeux noisette, des tissus abricot, des tentures cerise, des vestes kaki.',
            'Les 6 exceptions historiques qui s\'accordent malgré leur origine nominale : rose, pourpre, écarlate, mauve, fauve, incarnat. Exemple : « des rubans roses », « des tuniques écarlates ».'
          ]
        },
        {
          subtitle: 'C. Les adjectifs de couleur composés',
          content: [
            'Dès qu\'un adjectif de couleur est composé de deux mots (deux couleurs associées, ou une couleur précisée par une nuance comme clair, foncé, pâle, vif, nuit), il est TOTALEMENT INVARIABLE.',
            'Exemples : des yeux bleu clair (pas de -s) ; des chemises vert foncé ; des couvertures jaune paille ; des tissus bleu-vert.'
          ]
        }
      ]
    },
    {
      title: '3. Pluriel des Mots d\'Origine Étrangère Intégrés',
      content: [
        'Les emprunts lexicaux désormais intégrés à la langue française prennent un -s normal au pluriel selon les règles académiques.',
        'Exemples : des référendums, des matchs, des villas, des scénarios, des bungalows, des bravos.'
      ]
    },
    {
      title: '4. Tableau Récapitulatif pour la Dictée du BFEM',
      table: {
        headers: ['Catégorie', 'Composition', 'Règle d\'accord', 'Exemple au pluriel'],
        rows: [
          ['Nom composé', 'Nom + Nom', 'Les deux prennent un -s', 'Des choux-fleurs'],
          ['Nom composé', 'Nom + Préposition + Nom', 'Seul le premier prend un -s', 'Des chefs-d\'œuvre'],
          ['Nom composé', 'Verbe + Nom', 'Le verbe reste invariable', 'Des porte-clés / des lave-vaisselle'],
          ['Couleur simple', 'Adjectif pur', 'S\'accorde en genre et nombre', 'Des robes bleues et vertes'],
          ['Couleur d\'origine nominale', 'Nom (fruit, végétal, pierre)', 'INVARIABLE (sauf rose, pourpre, écarlate, mauve, fauve)', 'Des chaussures marron ; des fleurs mauves'],
          ['Couleur composée', 'Deux mots (nuance ou association)', 'TOTALEMENT INVARIABLE', 'Des reflets vert bouteille ; des yeux bleu pâle']
        ]
      }
    }
  ],
  conclusion: 'Comprendre la structure morphologique d\'un nom composé et la nature d\'un adjectif de couleur évite d\'hésiter sur les terminaisons au pluriel et garantit un sans-faute à l\'épreuve orthographique du BFEM.'
};

// LEÇON 15 : LES HOMOPHONES GRAMMATICAUX ET LEXICAUX COURANTS
export const LESSON_15_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-15',
  number: 'Leçon 15',
  title: 'Les homophones grammaticaux et lexicaux courants',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude des homophones grammaticaux et lexicaux : méthodes de substitution mentale infaillibles, distinctions syntaxiques et pièges éliminatoires de la dictée du BFEM.',
  introduction: 'Les homophones sont des mots qui se prononcent exactement de la même manière (homophonie auditive) mais qui s\'écrivent différemment et possèdent des natures grammaticales et des sens distincts. Confondre deux homophones en dictée est considéré comme une faute grammaticale majeure entraînant le retrait immédiat de points. Cette leçon propose des clés mnémotechniques de substitution infaillibles.',
  sections: [
    {
      title: '1. Les Principaux Couples d\'Homophones Grammaticaux',
      subsections: [
        {
          subtitle: 'A. a / à',
          content: [
            '« a » (sans accent) : verbe ou auxiliaire « avoir » à la 3ème personne du singulier du présent de l\'indicatif. On peut le remplacer par l\'imparfait « avait ». Exemple : « Il a réussi » -> « Il avait réussi ».',
            '« à » (avec accent grave) : préposition invariable indiquant le lieu, le temps, la destination. On ne peut PAS le remplacer par « avait ». Exemple : « Il part à Saint-Louis ».'
          ]
        },
        {
          subtitle: 'B. son / sont',
          content: [
            '« son » : déterminant possessif masculin singulier. Remplaçable par « mon » ou « ton ». Exemple : « Il prend son sac » -> « Il prend mon sac ».',
            '« sont » : verbe ou auxiliaire « être » au présent de l\'indicatif (3ème personne du pluriel). Remplaçable par « étaient ». Exemple : « Les élèves sont attentifs » -> « Les élèves étaient attentifs ».'
          ]
        },
        {
          subtitle: 'C. on / ont',
          content: [
            '« on » : pronom personnel indéfini sujet. Remplaçable par « il » ou « quelqu\'un ». Exemple : « On écoute le maître » -> « Il écoute le maître ».',
            '« ont » : verbe ou auxiliaire « avoir » au présent (3e personne du pluriel). Remplaçable par « avaient ». Exemple : « Ils ont compris » -> « Ils avaient compris ».'
          ]
        },
        {
          subtitle: 'D. ou / où',
          content: [
            '« ou » (sans accent) : conjonction de coordination marquant le choix ou l\'alternative. Remplaçable par « ou bien ». Exemple : « Tu préfères le français ou les mathématiques ? »',
            '« où » (avec accent grave) : pronom relatif ou adverbe marquant le lieu ou le temps. Remplaçable par « à quel endroit » ou « dans lequel ». Exemple : « La maison où je suis né ».'
          ]
        },
        {
          subtitle: 'E. ce / se',
          content: [
            '« ce » (ou « cet », « cette ») : déterminant ou pronom démonstratif, placé devant un nom ou devant le verbe être. Remplaçable par « cela ». Exemple : « Ce devoir est exigeant », « C\'est magnifique ».',
            '« se » (ou « s\' ») : pronom réfléchi de 3ème personne, placé immédiatement devant un verbe pronominal. Remplaçable par « me » ou « te » en changeant de personne. Exemple : « Il se lève » -> « Je me lève ».'
          ]
        },
        {
          subtitle: 'F. ces / ses / c\'est / s\'est / sais / sait',
          content: [
            '« ces » : déterminant démonstratif pluriel. Désigne ce qu\'on montre ou dont on a déjà parlé. Remplaçable par « ce...-ci » ou « cette...-là » au singulier.',
            '« ses » : déterminant possessif pluriel. Remplaçable par « son » ou « sa » au singulier (« les siens »).',
            '« c\'est » : présentatif composé du pronom démonstratif et du verbe être. Remplaçable par « cela est ».',
            '« s\'est » : pronom réfléchi « se » + verbe être au passé composé. Remplaçable par « je me suis ».',
            '« sais / sait » : formes conjuguées du verbe savoir (je sais, tu sais, il sait). Remplaçable par « savait ».'
          ]
        },
        {
          subtitle: 'G. leur / leurs (Règle capitale du BFEM)',
          content: [
            '« leur » devant un VERBE est un pronom personnel (équivalent pluriel de « lui »). Il est STRICTEMENT INVARIABLE et ne prend JAMAIS de -s. Exemple : « Je leur parle », « Le maître leur a distribué les copies ».',
            '« leur » / « leurs » devant un NOM est un déterminant possessif. Il s\'accorde en nombre avec le nom qui le suit. Exemple : « Leur classe est ordonnée » (singulier) / « Leurs cahiers sont soignés » (pluriel).'
          ]
        }
      ]
    },
    {
      title: '2. Les Homophones Lexicaux Fréquents',
      content: [
        'Ancre (pièce lourde en métal pour immobiliser un navire) vs Encre (liquide coloré pour écrire au stylo).',
        'Cœur (organe de la circulation sanguine / siège de la sensibilité) vs Chœur (ensemble de chanteurs dans une chorale ou sanctuaire d\'une église).',
        'Voix (son émis par les cordes vocales) vs Voie (chemin, route, moyen de transport) vs Vois / Voit (formes conjuguées du verbe voir).',
        'Champ (terrain cultivé) vs Chant (musique vocale).',
        'Tache (salissure, marque) vs Tâche (travail ou corvée à accomplir).'
      ]
    },
    {
      title: '3. Clé de Remplacement Systématique pour le BFEM',
      table: {
        headers: ['Homophone', 'Nature grammaticale', 'Test de substitution mentale', 'Phrase témoin'],
        rows: [
          ['a', 'Verbe avoir', 'Remplacer par « avait »', 'Il a (avait) révisé.'],
          ['à', 'Préposition', 'Substitution impossible par « avait »', 'Il va à l\'école.'],
          ['ont', 'Verbe avoir', 'Remplacer par « avaient »', 'Ils ont (avaient) faim.'],
          ['on', 'Pronom sujet', 'Remplacer par « il »', 'On (il) chante en chœur.'],
          ['son', 'Déterminant possessif', 'Remplacer par « mon »', 'Son (mon) livre est neuf.'],
          ['sont', 'Verbe être', 'Remplacer par « étaient »', 'Ils sont (étaient) là.'],
          ['leur (verbe)', 'Pronom personnel', 'Remplacer par « lui » (invariable !)', 'Il leur (lui) répond.'],
          ['leurs (nom)', 'Déterminant possessif', 'Remplacer par « ses »', 'Leurs (ses) valises sont prêtes.']
        ]
      }
    }
  ],
  conclusion: 'La vigilance orthographique passe par le réflexe automatique du remplacement mental. En s\'entraînant à tester immédiatement chaque mot équivoque, l\'élève sécurise sa note de dictée au BFEM.'
};

// LEÇON 16 : LE LEXIQUE ET LES RELATIONS DE SENS
export const LESSON_16_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-16',
  number: 'Leçon 16',
  title: 'Le lexique et les relations de sens',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude des relations lexicales fondamentales : synonymie, antonymie, homonymie, paronymie et polysémie. Enrichissement du vocabulaire et analyse textuelle pour le BFEM.',
  introduction: 'Le vocabulaire d\'une langue forme un réseau complexe de relations sémantiques. Comprendre comment les mots se rapprochent (synonymie), s\'opposent (antonymie), se ressemblent de manière trompeuse (paronymie) ou déploient plusieurs acceptions (polysémie) permet d\'affiner l\'interprétation des textes littéraires et d\'éviter les contresens et répétitions dans les compositions françaises du BFEM.',
  sections: [
    {
      title: '1. La Synonymie : Nuances et Registres',
      subsections: [
        {
          subtitle: 'A. Définition',
          content: [
            'La synonymie est la relation qui unit deux ou plusieurs mots de même classe grammaticale possédant des sens identiques ou extrêmement proches.',
            'Attention fondamentale : Deux synonymes ne sont presque jamais interchangeables à 100 % ! Ils se distinguent souvent par des nuances d\'intensité, de précision ou de registre de langue.'
          ]
        },
        {
          subtitle: 'B. Les facteurs de variation entre synonymes',
          content: [
            '1° Nuances de registre : « bicyclette » (courant) vs « vélo » (familier) vs « vélocipède » (soutenu/vieilli) ; « mourir » vs « décéder » vs « trépasser ».',
            '2° Nuances d\'intensité : « avoir peur » < « être effrayé » < « être terrifié » < « être pétrifié ».',
            '3° Précision du contexte : « bâtir » une concession, « ériger » un monument, « fonder » une république, « échafauder » une théorie.'
          ]
        }
      ]
    },
    {
      title: '2. L\'Antonymie : Les Relations d\'Opposition',
      subsections: [
        {
          subtitle: 'A. Définition et types d\'antonymes',
          content: [
            'L\'antonymie est la relation de sens qui oppose deux mots de même classe grammaticale ayant des significations contraires.',
            '1° Antonymes lexicaux distincts : courageux / lâche ; éphémère / durable ; généreux / avare ; sombre / lumineux.',
            '2° Antonymes formés par dérivation avec des préfixes privatifs :',
            '- in- / im- / ir- / il- : juste / injuste ; buvable / imbuvable ; responsable / irresponsable ; légal / illégal.',
            '- dé- / dés- : obéir / désobéir ; espoir / désespoir.',
            '- mé- / més- : content / mécontent ; entente / mésentente.',
            '- a- : normal / anormal ; typique / atypique.'
          ]
        }
      ]
    },
    {
      title: '3. Homonymie et Paronymie : Éviter les Confusions Lexicales',
      subsections: [
        {
          subtitle: 'A. L\'Homonymie (Homophones et Homographes)',
          content: [
            'Les homophones ont la même prononciation mais une graphie différente : « le ver », « le verre », « le vers », « le vert ».',
            'Les homographes ont la même écriture mais des sens différents (et parfois des prononciations distinctes) : « un couvent » (nom) vs « elles couvent » (verbe).'
          ]
        },
        {
          subtitle: 'B. La Paronymie (Le piège des mots presque semblables)',
          content: [
            'Les paronymes sont des mots qui présentent une ressemblance phonétique et graphique très étroite, ce qui entraîne de fréquentes confusions fâcheuses.',
            'Couples paronymiques célèbres au BFEM :',
            '- Abjurer (renier solennellement une foi ou une croyance) vs Adjurer (supplier avec insistance au nom de Dieu ou de la loi).',
            '- Éminent (qui dépasse la moyenne, remarquable, illustre) vs Imminent (qui va se produire immédiatement).',
            '- Collision (choc brutal entre deux corps ou véhicules) vs Collusion (entente secrète et frauduleuse entre deux complices).',
            '- Effraction (bris de clôture ou de serrure) vs Infraction (violation d\'une loi ou d\'un règlement).',
            '- Attention (concentration de l\'esprit) vs Intention (dessein, projet délibéré).'
          ]
        }
      ]
    },
    {
      title: '4. La Polysémie : Le Mot aux Multiples Visages',
      content: [
        'La polysémie est la propriété d\'un mot qui possède plusieurs sens différents selon le contexte dans lequel il est employé.',
        'Sens propre vs Sens figuré :',
        '- Sens propre (premier, concret) : « Le lion a rugi dans la savane » (l\'animal féroce).',
        '- Sens figuré (dérivé, imagé, métaphorique) : « Cet homme est un lion au combat » (symbole de courage indomptable).',
        'Exemple du mot « Bureau » : 1° Le meuble sur lequel on écrit. 2° La pièce de travail dans un immeuble. 3° L\'instance exécutive d\'une association ou d\'un parti politique.'
      ]
    }
  ],
  conclusion: 'La maîtrise du lexique et des relations de sens confère à l\'élève une grande précision lexicale, prévenant les maladresses stylistiques et permettant d\'analyser finement les effets de sens recherchés par les grands écrivains.'
};

// LEÇON 17 : LES CHAMPS LEXICAUX ET SÉMANTIQUES
export const LESSON_17_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-17',
  number: 'Leçon 17',
  title: 'Les champs lexicaux et sémantiques',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude comparée du champ lexical (ensemble de mots gravitant autour d\'un même thème) et du champ sémantique (multiplicité des sens d\'un même mot). Analyse de textes littéraires sénégalais.',
  introduction: 'Pour analyser méthodiquement un texte au BFEM ou construire une description saisissante en expression écrite, il est indispensable de comprendre comment les mots se regroupent pour créer une ambiance, soutenir une thèse ou susciter une émotion. Le champ lexical tisse la toile thématique d\'un extrait, tandis que le champ sémantique explore la profondeur d\'un vocable particulier.',
  sections: [
    {
      title: '1. Le Champ Lexical : Définition, Identification et Portée',
      subsections: [
        {
          subtitle: 'A. Définition',
          content: [
            'Le champ lexical regroupe l\'ensemble des mots (noms, verbes, adjectifs, adverbes, expressions figées) qui, au sein d\'un même texte, se rapportent à une même notion, un même objet, un même thème ou une même atmosphère.',
            'Contrairement à une fausse idée reçue, un champ lexical ne se compose pas seulement de mots de la même famille : il associe des termes de natures grammaticales diverses réunis par leur communauté d\'idées.'
          ]
        },
        {
          subtitle: 'B. Exemple concret : Le champ lexical de la Guerre',
          content: [
            'Noms : obus, tranchée, soldat, fusil, canon, sang, cadavre, hécatombe, carnage, déflagration.',
            'Verbes : mitrailler, périr, combattre, anéantir, capituler, bombarder, saigner.',
            'Adjectifs : meurtrier, barbare, sanglant, fratricide, lugubre, terrifiant.',
            'Adverbes : cruellement, impitoyablement, férocement.'
          ]
        },
        {
          subtitle: 'C. Rôle et exploitation dans le commentaire au BFEM',
          content: [
            'Identifier un champ lexical dominant permet de déterminer :',
            '1° Le thème central du texte et les sous-thèmes développés.',
            '2° La tonalité dominante (lyrique, tragique, pathétique, satirique).',
            '3° Le point de vue de l\'auteur (ex: l\'association du champ lexical de la maladie à celui de la colonisation traduit une condamnation sans appel de l\'oppression coloniale).'
          ]
        }
      ]
    },
    {
      title: '2. Le Champ Sémantique : La Richesse d\'un Mot Unique',
      subsections: [
        {
          subtitle: 'A. Définition',
          content: [
            'Le champ sémantique correspond à l\'ensemble des significations, des acceptions et des nuances de sens qu\'un seul et même mot peut prendre en fonction de ses contextes d\'emploi dans la langue.',
            'Il s\'oppose au champ lexical : le champ lexical rassemble plusieurs mots pour une seule idée ; le champ sémantique explore plusieurs idées pour un seul mot !'
          ]
        },
        {
          subtitle: 'B. Exemple d\'étude : Le mot « Cœur »',
          content: [
            '1° Sens anatomique et biologique : « Le cœur bat à un rythme régulier » (organe vital pompant le sang).',
            '2° Sens moral et affectif : « Avoir le cœur sur la main » (générosité) ; « Avoir le cœur brisé » (chagrin d\'amour).',
            '3° Sens spatial / géographique : « Au cœur de la ville de Thiès » (le centre névralgique).',
            '4° Sens philosophique / essentiel : « Le cœur du problème » (le point nodal, l\'essentiel).',
            '5° Sens du courage : « Haut les cœurs ! » (bravoure, détermination).'
          ]
        }
      ]
    },
    {
      title: '3. Confrontation Lexicale dans les Textes Africains Engagés',
      content: [
        'Dans les textes phares du programme de 3ème (extraits de Senghor, David Diop, Ousmane Sembène, Mariama Bâ), l\'auteur confronte fréquemment deux champs lexicaux antithétiques pour marquer les esprits :',
        '- Champ lexical de l\'obscurité et de l\'asservissement OPPOSÉ au champ lexical de la lumière, de l\'aube et de la souveraineté retrouvée.',
        '- Exemple chez David Diop (*Afrique mon Afrique*) : la sueur, le fouet, le sang (champ lexical de l\'esclavage) cèdent la place au jeune arbre robuste qui reverdit au printemps (champ lexical de la renaissance et de la liberté).'
      ]
    },
    {
      title: '4. Synthèse Méthodologique BFEM',
      table: {
        headers: ['Concept', 'Point de départ', 'Contenu analysé', 'Objectif d\'analyse'],
        rows: [
          ['Champ lexical', 'Une idée ou un thème', 'Ensemble de mots variés (noms, verbes, adjectifs...)', 'Dégager l\'atmosphère et l\'intention de l\'auteur'],
          ['Champ sémantique', 'Un mot unique', 'Ensemble des sens possibles de ce mot', 'Comprendre la polysémie et la nuance contextuelle']
        ]
      }
    }
  ],
  conclusion: 'Savoir repérer et commenter les réseaux de champs lexicaux permet à l\'élève d\'étayer ses analyses littéraires avec précision lors des épreuves de compréhension de texte du BFEM.'
};

// LEÇON 18 : LES FIGURES DE STYLE FONDAMENTALES
export const LESSON_18_FRANCAIS_3EME: LessonContent = {
  id: 'fr-3eme-lecon-18',
  number: 'Leçon 18',
  title: 'Les figures de style fondamentales',
  subject: 'Français',
  classLevel: '3ème',
  fullText: 'Étude systématique des figures de style du programme de 3ème : analogie (comparaison, métaphore, personnification, allégorie), exagération et atténuation (hyperbole, litote, euphémisme), opposition (antithèse, oxymore) et répétition.',
  introduction: 'Les figures de style (ou procédés rhétoriques) sont des tournures expressives qui s\'écartent de l\'usage ordinaire du langage pour frapper l\'imagination, émouvoir le lecteur ou renforcer la puissance persuasive d\'un argument. Au BFEM, nommer une figure ne suffit pas : il faut toujours être capable d\'expliquer son effet stylistique et sa contribution au sens du texte.',
  sections: [
    {
      title: '1. Les Figures d\'Analogie (de Ressemblance)',
      subsections: [
        {
          subtitle: 'A. La Comparaison',
          content: [
            'Elle rapproche deux éléments (le comparé et le comparant) ayant un point commun, à l\'aide d\'un outil de comparaison explicite.',
            'Outils de comparaison : comme, tel que, pareil à, semblable à, ressembler à, ainsi que, de même que.',
            'Exemple : « Ce jeune lutteur est agile [comme] un guépard dans l\'arène. » (Comparé : le lutteur ; comparant : le guépard ; outil : comme ; point commun : la rapidité et la souplesse).'
          ]
        },
        {
          subtitle: 'B. La Métaphore',
          content: [
            'Elle rapproche deux éléments sans aucun mot ou outil de comparaison. L\'assimilation est directe et bien plus frappante.',
            '- Métaphore in præsentia (le comparé et le comparant sont tous deux présents) : « Ce garçon est un lion bondissant. »',
            '- Métaphore in absentia (seul le comparant est présent, le comparé doit être deviné) : « L\'astre d\'or inondait la savane. » (« l\'astre d\'or » désigne métaphoriquement le soleil).',
            '- Métaphore filée : développée et prolongée sur plusieurs phrases ou sur tout un paragraphe.'
          ]
        },
        {
          subtitle: 'C. La Personnification et l\'Allégorie',
          content: [
            'La Personnification attribue des sentiments, des comportements, des paroles ou des traits humains à un animal, un objet inanimé ou une force naturelle. Exemple : « La mer rugissait de fureur et mordait les falaises de Dakar. »',
            'L\'Allégorie représente de manière concrète et imagée une idée abstraite, souvent matérialisée par une figure allégorique portant une majuscule. Exemple : La Justice représentée par une femme aux yeux bandés tenant une balance et un glaive.'
          ]
        }
      ]
    },
    {
      title: '2. Les Figures d\'Exagération et d\'Atténuation',
      subsections: [
        {
          subtitle: 'A. L\'Hyperbole',
          content: [
            'Procédé d\'amplification excessive des termes pour frapper vivement l\'esprit ou dramatiser une situation.',
            'Exemples : « Je meurs de faim », « Il a versé un torrent de larmes », « Une montagne de copies attendait le correcteur ».'
          ]
        },
        {
          subtitle: 'B. La Litote',
          content: [
            'Elle consiste à dire le moins pour faire entendre et suggérer beaucoup plus (fausse retenue souvent formulée par une négation).',
            'Exemple classique du théâtre classique (Corneille, *Le Cid*) : « Va, je ne te hais point » (qui signifie avec passion : « Je t\'aime éperdument ») ; « Ce plat n\'est pas mauvais du tout » (il est succulent).'
          ]
        },
        {
          subtitle: 'C. L\'Euphémisme',
          content: [
            'Il atténue l\'expression d\'une réalité trop brutale, cruelle, choquante ou douloureuse.',
            'Exemples : « Il nous a quittés » ou « Il s\'est éteint paisiblement » (pour éviter de prononcer brutalement « il est mort ») ; « Les non-voyants » (pour les aveugles) ; « Les personnes défavorisées » (pour les pauvres).'
          ]
        }
      ]
    },
    {
      title: '3. Les Figures d\'Opposition : Antithèse et Oxymore',
      subsections: [
        {
          subtitle: 'A. L\'Antithèse',
          content: [
            'Elle rapproche deux mots, deux expressions ou deux idées de sens radicalement opposés au sein d\'une même phrase ou d\'un parallélisme.',
            'Exemple : « Un noble cherche la paix, un tyran sème la guerre. » / « Le jour m\'aveugle, la nuit me libère. »'
          ]
        },
        {
          subtitle: 'B. L\'Oxymore',
          content: [
            'Il unit étroitement dans un même groupe syntaxique deux mots de sens contradictoires pour créer une image poétique saisissante.',
            'Exemples : « Une obscure clarté » (Corneille) ; « Un silence assourdissant » ; « Cette sublime laideur ».'
          ]
        }
      ]
    },
    {
      title: '4. Les Figures d\'Insistance : Anaphore et Gradation',
      content: [
        'L\'Anaphore : Répétition d\'un même mot ou d\'une même formule en tête de phrases ou de vers successifs. Exemple célèbre de David Diop : « Afrique mon Afrique / Afrique des fiers guerriers... ».',
        'La Gradation : Succession ordonnée de termes d\'intensité croissante (ou décroissante). Exemple : « Va, cours, vole, et nous venge ! »'
      ]
    },
    {
      title: '5. Tableau Synthétique des Figures de Style pour le BFEM',
      table: {
        headers: ['Figure de style', 'Définition essentielle', 'Exemple type', 'Effet produit'],
        rows: [
          ['Comparaison', 'Rapprochement avec outil (comme, tel)', 'Fort comme un baobab', 'Éclairer une ressemblance'],
          ['Métaphore', 'Assimilation directe sans outil', 'Ce guerrier est un baobab', 'Créer une image poétique forte'],
          ['Personnification', 'Traits humains prêtés à l\'inanimé', 'Le vent murmurait des secrets', 'Donner vie au décor'],
          ['Hyperbole', 'Exagération frappante', 'Des siècles de souffrance', 'Dramatiser ou marquer les esprits'],
          ['Litote', 'Dire moins pour faire entendre plus', 'Ce n\'est pas idiot (c\'est génial)', 'Atténuer par élégance ou ironie'],
          ['Euphémisme', 'Adoucir une vérité pénible', 'Il a rendu son dernier souffle', 'Respecter la pudeur face à la douleur'],
          ['Antithèse', 'Opposition de deux idées distantes', 'Vivre libre ou mourir esclave', 'Souligner un dilemme ou contraste'],
          ['Oxymore', 'Deux mots opposés côte à côte', 'Une douce violence', 'Susciter la surprise poétique']
        ]
      }
    }
  ],
  conclusion: 'Savoir repérer et expliquer la portée expressive d\'une figure de style est la signature d\'une excellente copie de français au BFEM, valorisant l\'analyse stylistique au-delà de la simple paraphrase.'
};
