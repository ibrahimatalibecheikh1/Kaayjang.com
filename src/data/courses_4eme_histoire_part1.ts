import { LessonContent } from './courses';
import {
  SVG_HIST4_COMMERCE_TRANSSAHARIEN,
  SVG_HIST4_GRANDES_DECOUVERTES,
  SVG_HIST4_COMMERCE_TRIANGULAIRE
} from './diagrams_4eme_histoire';

// =========================================================================
// COURS D'HISTOIRE 4ÈME — SÉNÉGAL (PROGRAMME OFFICIEL COMPLET SANS RÉSUMÉ)
// CHAPITRE 1 : LES CONTACTS AVEC LE MONDE EXTÉRIEUR
// LEÇONS 1 À 4 : L'AFRIQUE AU XVIE SIÈCLE, L'ASIE ET LE NOUVEAU MONDE,
//                LA TRAITE NÉGRIÈRE, ET LES CONSÉQUENCES GLOBALES
// =========================================================================

export const LESSON_1_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-1',
  number: 'Leçon 1',
  title: "L'AFRIQUE AU XVIE SIÈCLE : SITUATION POLITIQUE, ÉCONOMIQUE ET SOCIALE",
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Au XVIe siècle, l'Afrique est un continent en pleine mutation, caractérisé par la coexistence de grands empires structurés et de sociétés décentralisées. C'est une période charnière avant l'intensification des contacts avec les Européens.",
  fullText: `CHAPITRE 1 : LES CONTACTS AVEC LE MONDE EXTÉRIEUR
Leçon 1 : L’Afrique au XVIe siècle : situation politique, économique et sociale

Introduction
Au XVIe siècle, l'Afrique est un continent en pleine mutation, caractérisé par la coexistence de grands empires structurés et de sociétés décentralisées. C'est une période charnière avant l'intensification des contacts avec les Européens.

I. La situation politique
Le continent est marqué par de grands ensembles politiques :
• L'Empire Songhaï : En Afrique de l'Ouest, dominé par la dynastie des Askia, il atteint son apogée avant de s'effondrer en 1591 suite à l'invasion marocaine à la bataille de Tondibi.
• Le Grand Djolof : Au Sénégal, il commence à se fragmenter en royaumes indépendants.
• Le Royaume du Kongo : En Afrique centrale, fortement structuré avec une administration centralisée et des premiers contacts diplomatiques avec le Portugal.
• Les cités-États swahilies : Sur la côte orientale (Kilwa, Mombasa), qui prospèrent grâce au commerce avec l'Océan Indien.

II. La situation économique et le commerce transsaharien
L'économie africaine du XVIe siècle est dynamique et repose sur l'agriculture, l'élevage, l'artisanat métallique et le commerce interrégional. Le commerce transsaharien reste l'axe majeur : il relie l'Afrique de l'Ouest à l'Afrique du Nord à travers le désert du Sahara. Les caravanes échangent l'or, le sel, l'ivoire et les esclaves contre des tissus, des armes et des produits manufacturés du Maghreb.

III. L'organisation sociale et culturelle
La société est généralement communautaire, hiérarchisée et basée sur la famille élargie, le respect des anciens et les systèmes de castes (artisans, griots, nobles). Sur le plan religieux, on note la coexistence des religions traditionnelles africaines (animisme) et de l'Islam, fortement implanté dans les centres urbains et commerciaux comme Tombouctou, qui rayonne par ses universités et ses savants.

Conclusion
L'Afrique du XVIe siècle est politiquement stable et économiquement prospère. Cependant, l'effondrement des grands empires et l'arrivée des Européens sur les côtes vont bouleverser cet équilibre.`,
  sections: [
    {
      title: 'I. La situation politique du continent au XVIe siècle',
      content: [
        "Le continent africain du XVIe siècle est caractérisé par une diversité remarquable de formes d'organisation politique : de puissants empires centralisés côtoient des confédérations villageoises et des cités marchandes maritimes.",
        "• L'Empire Songhaï (Afrique de l'Ouest) : Sous la dynastie musulmane des Askia (fondée par Askia Mohammed en 1493), l'empire contrôle les méandres du fleuve Niger, la boucle sahélienne et les mines de sel du Sahara. Il atteint son apogée administratif et militaire avant son effondrement tragique en 1591 à la bataille de Tondibi face à l'armée marocaine du pacha Djouder armée de mousquets et arquebuses.",
        "• Le Grand Djolof (Sénégambie) : Vaste fédération unifiant l'espace wolof et sérère depuis le XIVe siècle sous l'autorité du Bourba Djolof, il commence à se désintégrer sous l'effet des rivalités provinciales et du déplacement du commerce vers l'océan Atlantique.",
        "• Le Royaume du Kongo (Afrique centrale) : État solidement unifié dirigé par le Manikongo, doté d'une administration territoriale efficace et d'une armée aguerrie. Il établit des relations diplomatiques précoces avec le Portugal (règne d'Afonso Ier), qui évoluent rapidement vers des prédations négrières.",
        "• Les cités-États swahilies (Côte orientale) : Kilwa, Mombasa, Zanzibar et Sofala forment une brillante civilisation maritime arabo-bantoue qui s'enrichit grâce aux moussons et au commerce de l'or, de l'ambre et de l'ivoire avec l'Inde, l'Arabie et la Chine."
      ],
      table: {
        headers: ['Grand ensemble politique', 'Zone géographique', 'Dirigeants & Centres majeurs', 'Évolution au XVIe siècle'],
        rows: [
          ['Empire Songhaï', "Afrique de l'Ouest (Boucle du Niger)", 'Askia Mohammed, Gao, Tombouctou', 'Apogée territorial, puis chute en 1591 (bataille de Tondibi)'],
          ['Grand Djolof', 'Sénégambie (Sénégal actuel)', 'Bourba Djolof, capitale Yang-Yang', 'Fragmentation en royaumes rivaux (Cayor, Baol, Waalo)'],
          ['Royaume du Kongo', 'Afrique centrale (Bassin du Congo)', 'Manikongo, Mbanza Kongo', 'Alliance puis déstabilisation par les négriers portugais'],
          ['Cités-États swahilies', 'Afrique de l\'Est (Océan Indien)', 'Sultans de Kilwa, Mombasa, Lamu', 'Prospérité maritime, puis bombardements portugais']
        ]
      }
    },
    {
      title: 'II. La situation économique et le commerce transsaharien',
      content: [
        "L'économie africaine du XVIe siècle est autonome, diversifiée et dynamique. Elle s'appuie sur une agriculture vivrière solide (mil, sorgho, igname, riz africain glaberrima), un pastoralisme sahélien extensif et un artisanat métallurgique renommé (forgerons du fer, bijoutiers de l'or et bronziers).",
        "Le commerce transsaharien constitue l'axe économique névralgique de l'Afrique occidentale :",
        "• Des caravanes gigantesques de plusieurs milliers de dromadaires traversent le Sahara par des itinéraires séculaires reliant Sijilmassa, Fès et Tripoli aux grands entrepôts sahéliens de Gao, Tombouctou et Djenné.",
        "• Échanges équilibrés : L'Afrique subsaharienne exporte l'or pur extrait des mines du Bambouk et du Bouré, des esclaves, des plumes d'autruche et de l'ivoire d'éléphant.",
        "• Importations du Maghreb et d'Orient : Les caravanes rapportent en échange les précieuses barres de sel de Taghaza et de Taoudeni (vitales pour les populations), des soieries, des chevaux barbes, des livres et des armes blanches."
      ],
      image: {
        url: '',
        alt: 'Schéma du commerce transsaharien et situation économique de l Afrique au XVIe siècle',
        caption: 'Figure 1 : Axes commerciaux caravaniers du Sahara reliant le Maghreb à la boucle du Niger et aux empires soudanais.',
        svgContent: SVG_HIST4_COMMERCE_TRANSSAHARIEN
      }
    },
    {
      title: "III. L'organisation sociale, religieuse et culturelle",
      content: [
        "• Organisation communautaire et hiérarchisée : La cellule de base est la famille élargie patrilinéaire ou matrilinéaire, sous la direction respectée du conseil des anciens. La solidarité clanique prévaut sur l'individualisme.",
        "• Le système des castes : Dans de nombreuses sociétés ouest-africaines (notamment chez les Wolofs, Sérères, Mandingues et Toucouleurs), la société est structurée en ordres héréditaires rigoureux : les nobles/hommes libres (Gëer ou Horon), les gens de caste artisans (Teug/forgerons, Laobé/boisiers, Rabaandé/tisserands), les griots (Gawlo/historiens et chantres) et les captifs (Jaam).",
        "• Coexistence religieuse : Les religions traditionnelles africaines (fondées sur le culte des ancêtres, les génies protecteurs de la terre et des eaux, et un Dieu suprême créateur) demeurent vivaces dans les campagnes. Parallèlement, l'Islam sunnite de rite malékite imprègne profondément les cours royales et les élites marchandes.",
        "• Rayonnement intellectuel de Tombouctou : Véritable capitale des lettres et des sciences, la ville abrite l'université de la mosquée Sankoré et de nombreuses madrasas où des lettrés de renommée mondiale (tel Ahmed Baba) enseignent la théologie, le droit, l'astronomie, les mathématiques et la médecine."
      ]
    }
  ],
  diagram: {
    title: "Tableau synoptique : L'Afrique au XVIe siècle",
    root: 'AFRIQUE AU XVIE SIÈCLE',
    branches: [
      {
        name: 'Politique',
        subtitle: 'Grands ensembles & Ruptures',
        items: [
          'Empire Songhaï (chute Tondibi 1591)',
          'Grand Djolof en dislocation',
          'Royaume du Kongo & cités Swahilies'
        ]
      },
      {
        name: 'Économie',
        subtitle: 'Transsaharien & Productions',
        items: [
          'Agriculture vivrière & métallurgie',
          'Caravanes transsahariennes (Azalaï)',
          'Échange Or / Sel / Étoffes / Livres'
        ]
      },
      {
        name: 'Société & Culture',
        subtitle: 'Traditions & Rayonnement',
        items: [
          'Famille élargie & système de castes',
          'Coexistence Islam & religions ancestrales',
          'Université Sankoré de Tombouctou'
        ]
      }
    ]
  },
  conclusion: "L'Afrique du XVIe siècle est politiquement stable et économiquement prospère. Cependant, l'effondrement des grands empires et l'arrivée des Européens sur les côtes vont bouleverser cet équilibre."
};

export const LESSON_2_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-2',
  number: 'Leçon 2',
  title: 'L’ASIE ET LE NOUVEAU MONDE AUX XVIE ET XVIIE SIÈCLES',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Aux XVIe et XVIIe siècles, stimulés par le goût du profit et les progrès techniques (boussole, caravelle), les Européens se lancent dans les Grandes Découvertes. Ce mouvement redessine la carte du monde en reliant l'Europe à l'Asie et au continent américain (Nouveau Monde).",
  fullText: `Leçon 2 : L’Asie et le Nouveau Monde aux XVIe et XVIIe siècles

Introduction
Aux XVIe et XVIIe siècles, stimulés par le goût du profit et les progrès techniques (boussole, caravelle), les Européens se lancent dans les Grandes Découvertes. Ce mouvement redessine la carte du monde en reliant l'Europe à l'Asie et au continent américain (Nouveau Monde).

I. L'Europe à la découverte du monde
La recherche d'une nouvelle route des épices et de l'or, contournant le monopole ottoman en Méditerranée, pousse le Portugal et l'Espagne sur les océans. En 1492, Christophe Colomb, pour le compte de l'Espagne, atteint l'Amérique qu'il prend pour l'Inde. En 1498, le Portugais Vasco de Gama contourne l'Afrique par le Cap de Bonne-Espérance et atteint l'Inde (Calicut), ouvrant la route maritime directe vers l'Asie.

II. L'Asie face à l'expansion européenne
En Asie, les Européens se heurtent à de puissants empires (l'Empire Moghol en Inde, la Dynastie Ming puis Qing en Chine, le Shogunat au Japon). Faute de pouvoir coloniser ces territoires, les Portugais, puis les Hollandais et les Anglais (via les Compagnies des Indes Orientales), installent des comptoirs commerciaux (Goa, Macao, Batavia) pour monopoliser le commerce des épices, de la soie et de la porcelaine.

III. Le Nouveau Monde : Conquête et choc démographique
En Amérique, la situation est différente. Les Espagnols (les conquistadors comme Cortés et Pizarro) conquièrent par la violence les grands empires autochtones (Aztèques et Incas). Les populations locales subissent un véritable choc démographique dû aux massacres, au travail forcé et surtout au choc microbien (maladies importées d'Europe). Pour remplacer la main-d'œuvre amérindienne décimée, l'Europe se tourne vers l'Afrique.

Conclusion
L'expansion européenne en Asie et en Amérique marque la naissance de la première mondialisation économique, mais elle jette également les bases de la domination coloniale et de la traite transatlantique.`,
  sections: [
    {
      title: "I. L'Europe à la découverte du monde : motivations et progrès techniques",
      content: [
        "• Les causes du mouvement maritime : En 1453, la prise de Constantinople par les Turcs ottomans coupe les routes terrestres d'accès aux soieries chinoises et aux épices asiatiques (poivre, girofle, cannelle, muscade). Face aux taxes douanières exorbitantes des Ottomans et des marchands vénitiens, les souverains ibériques (Portugal et Espagne) recherchent une voie d'accès maritime directe aux richesses orientales.",
        "• La révolution technique navale :",
        "  - La Caravelle portugaise : Navire agile à fort tonnage combinant voiles carrées (vitesse avec vent arrière) et voiles latines triangulaires (permettant de louvoyer contre le vent).",
        "  - Instruments de position : La boussole magnétique chinoise (orientation du nord), l'astrolabe arabe (calcul de la latitude à partir des étoiles), le bâton de Jacob et les cartes nautiques précises (portulans).",
        "• Les expéditions pionnières :",
        "  - 1492 : Christophe Colomb, financé par les Rois Catholiques d'Espagne, navigue vers l'ouest à travers l'océan Atlantique et accoste le 12 octobre 1492 aux Antilles, persuadé jusqu'à sa mort d'avoir atteint les côtes orientales de l'Asie.",
        "  - 1498 : Vasco de Gama franchit le Cap de Bonne-Espérance au sud de l'Afrique et accoste à Calicut (Inde), réalisant la première circumnavigation maritime directe vers les Indes.",
        "  - 1519-1522 : Ferdinand de Magellan et Juan Sebastián Elcano accomplissent le premier tour du monde (circumnavigation terrestre)."
      ],
      image: {
        url: '',
        alt: 'Grandes découvertes, navigateurs et première mondialisation',
        caption: 'Figure 2 : Les routes maritimes des Grandes Découvertes reliant l Europe à l Amérique et à l Asie.',
        svgContent: SVG_HIST4_GRANDES_DECOUVERTES
      }
    },
    {
      title: "II. L'Asie face à l'expansion européenne : la politique des comptoirs",
      content: [
        "Contrairement au continent américain, l'Asie des XVIe et XVIIe siècles est occupée par des civilisations millénaires et de formidables empires militaires que les Européens ne peuvent vaincre :",
        "• L'Empire Moghol en Inde : Puissance musulmane raffinée fondée par Babur et consolidée par Akbar, disposant d'armées de dizaines de milliers d'hommes.",
        "• L'Empire du Milieu en Chine (Dynasties Ming puis Qing) : État ultra-centralisé, technologiquement avancé, méprisant les étrangers considérés comme des 'barbares'.",
        "• Le Japon du Shogunat Tokugawa : Après de premiers contacts, le Japon promulgue l'Édit de Sakoku (1635) qui ferme hermétiquement le pays à tout contact européen pendant plus de deux siècles (seuls les Hollandais sont tolérés sur l'îlot artificiel de Dejima à Nagasaki).",
        "• Le système des comptoirs : Faute de conquête territoriale, les Européens (Portugais, puis Hollandais de la VOC et Anglais de l'EIC) négocient des enclaves côtières fortifiées (comptoirs de Goa en Inde, Macao en Chine, Batavia en Indonésie) pour contrôler l'exportation des épices précieuses, de la soie et de la porcelaine."
      ]
    },
    {
      title: 'III. Le Nouveau Monde : Conquête et effondrement démographique amérindien',
      content: [
        "En Amérique, la pénétration espagnole prend la forme d'une conquête brutale et d'un asservissement sans précédent :",
        "• L'épopée sanguinaire des conquistadors : Hernán Cortés détruit l'Empire Aztèque au Mexique (prise de Tenochtitlan en 1521) ; Francisco Pizarro capture l'empereur Atahualpa et détruit l'Empire Inca au Pérou (1532-1533).",
        "• Le choc microbien et l'hécatombe : Les Européens introduisent involontairement des maladies infectieuses contre lesquelles le système immunitaire des populations locales n'a aucune défense (variole, rougeole, grippe, typhus). Conjugué aux massacres militaires et au travail forcé exténuant dans les mines d'or et d'argent (le Potosí) et les plantations, la population amérindienne s'effondre de 80 à 90 % en moins d'un siècle.",
        "• Le recours fatidique à l'Afrique : Face à la disparition rapide des autochtones et aux démarches de religieux comme Bartolomé de Las Casas pour épargner les Amérindiens, les colons européens organisent l'importation massive et systématique d'esclaves africains."
      ]
    }
  ],
  diagram: {
    title: 'Tableau comparatif : Asie vs Nouveau Monde face aux Européens',
    root: 'EXPANSION EUROPÉENNE (XVIe-XVIIe)',
    branches: [
      {
        name: 'Europe Initiatrice',
        subtitle: 'Avancées & Objectifs',
        items: [
          'Contourner le blocus ottoman',
          'Caravelle, boussole, astrolabe',
          'Colomb (1492) & Vasco de Gama (1498)'
        ]
      },
      {
        name: 'Asie des Comptoirs',
        subtitle: 'Résistance des Empires',
        items: [
          'Empires puissants (Moghol, Ming, Shogunat)',
          'Impossibilité de conquête militaire',
          'Comptoirs côtiers (Goa, Macao, Batavia)'
        ]
      },
      {
        name: 'Nouveau Monde',
        subtitle: 'Conquête & Choc',
        items: [
          'Conquistadors (Cortés, Pizarro)',
          'Choc microbien & massacres (-80% à -90%)',
          'Recours à la déportation d\'Africains'
        ]
      }
    ]
  },
  conclusion: "L'expansion européenne en Asie et en Amérique marque la naissance de la première mondialisation économique, mais elle jette également les bases de la domination coloniale et de la traite transatlantique."
};

export const LESSON_3_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-3',
  number: 'Leçon 3',
  title: 'LA TRAITE NÉGRIÈRE : ORIGINES, MÉCANISMES ET FONCTIONNEMENT',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "La traite négrière désigne le commerce d'êtres humains noirs réduits en esclavage. Du XVIe au XIXe siècle, ce trafic prend une dimension internationale et industrielle sans précédent à travers les circuits de l'esclavage atlantique et oriental.",
  fullText: `Leçon 3 : La traite négrière : origines, mécanismes et fonctionnement

Introduction
La traite négrière désigne le commerce d'êtres humains noirs réduits en esclavage. Du XVIe au XIXe siècle, ce trafic prend une dimension internationale et industrielle sans précédent à travers les circuits de l'esclavage atlantique et oriental.

I. Les origines de la traite
L'esclavage existait en Afrique avant l'arrivée des Européens (servitude domestique, prisonniers de guerre). Cependant, la traite prend une ampleur massive au XVIe siècle avec la colonisation de l'Amérique. Les colons européens ayant besoin d'une main-d'œuvre robuste pour exploiter les mines et les plantations de canne à sucre, de tabac et de coton, organisent la déportation des Africains.

II. Les circuits et le fonctionnement
On distingue principalement deux grands circuits :
• La traite orientale (ou arabe) : Plus ancienne, elle acheminait des esclaves africains vers le Maghreb, le Moyen-Orient et l'Océan Indien à travers le Sahara ou la mer Rouge.
• La traite atlantique (européenne) : Elle fonctionne selon le mécanisme du commerce triangulaire entre trois continents :
1. L'Europe : Les navires partent des ports européens (Nantes, Bordeaux, Liverpool) chargés de produits de pacotille (armes, alcool, tissus, verroterie).
2. L'Afrique : Ces marchandises sont échangées auprès de rois ou de courtiers africains contre des captifs.
3. L'Amérique : Les captifs survivants à la traversée sont vendus comme esclaves. Les navires repartent vers l'Europe chargés de produits tropicaux (sucre, café, coton).

III. Les conditions de capture et de traversée
Les captifs sont raflés à l'intérieur des terres lors de guerres ou de raids. Menottés, ils marchent vers la côte où ils sont parqués dans des forts ou comptoirs. La traversée de l'Océan Atlantique (le Milieu Passage) se fait dans des conditions inhumaines : entassés dans les cales des navires négriers, soumis à la malnutrition et aux maladies, beaucoup meurent en mer.

Conclusion
La traite négrière a été un système économique mondial hautement organisé, reposant sur la déshumanisation totale de millions d'Africains pour le profit des puissances occidentales.`,
  sections: [
    {
      title: 'I. Les origines historiques de la traite négrière',
      content: [
        "• L'esclavage coutumier en Afrique précoloniale : L'institution de la servitude existait traditionnellement sous forme de servitude de case ou de captivité de guerre. Le captif était intégré à la famille élargie, protégé par la coutume, et ses enfants pouvaient être affranchis.",
        "• La rupture radicale de la traite moderne : La colonisation de l'Amérique transforme l'esclave en une marchandise ('bois d'ébène'), un bien meuble déshumanisé exploité jusqu'à la mort pour la rentabilité économique des grandes plantations coloniales.",
        "• Le besoin d'une main-d'œuvre adaptée : Face au climat tropical humide du Brésil et des Antilles, et à la mortalité des Amérindiens, les Européens considèrent les Africains comme dotés d'une résistance physique supérieure au travail pénible de la canne à sucre et aux maladies tropicales."
      ]
    },
    {
      title: 'II. Les deux grands circuits de la traite et le commerce triangulaire',
      content: [
        "Les historiens distinguent deux grands systèmes de traite négrière :",
        "• 1. La traite orientale ou transsaharienne/arabo-musulmane : Débutée dès le VIIe siècle avec les conquêtes arabes, elle achemine des captifs à travers le Sahara ou par la mer Rouge et l'océan Indien vers l'Égypte, le Maghreb, la péninsule arabique et l'Empire ottoman pour des fonctions de serviteurs domestiques, gardes ou ouvriers agricoles.",
        "• 2. La traite atlantique occidentale et le commerce triangulaire : Système commercial tripartite liant trois continents :",
        "  - Premier côté (Europe → Afrique) : Les navires partent des métropoles (Nantes, Bordeaux, Le Havre, Liverpool, Bristol, Amsterdam) chargés de produits manufacturés : armes à feu, poudre, alcools forts, barres de fer, chaudrons en cuivre, tissus indiens ('guinées') et colliers de verroterie.",
        "  - Deuxième côté (Afrique → Amérique) : À leur arrivée dans les comptoirs côtiers, ces marchandises sont échangées contre des contingents de jeunes captifs noirs. Le navire entame la traversée de l'Atlantique : c'est le redoutable 'Passage du Milieu' (Middle Passage).",
        "  - Troisième côté (Amérique → Europe) : Les esclaves sont débarqués et vendus aux colons planteurs. Les navires négriers sont nettoyés et rechargés des denrées coloniales à très forte valeur ajoutée : sucre raffiné, mélasse, café, cacao, tabac, coton brut et indigo."
      ],
      image: {
        url: '',
        alt: 'Mécanisme complet du commerce triangulaire transatlantique',
        caption: 'Figure 3 : Les 3 étapes du commerce triangulaire reliant l Europe, l Afrique et les Amériques.',
        svgContent: SVG_HIST4_COMMERCE_TRIANGULAIRE
      }
    },
    {
      title: 'III. Les conditions atroces de capture, de parcage et de traversée maritime',
      content: [
        "• Raids et guerres de razzia : Les captifs sont arrachés à leurs villages par surprise lors d'incursions nocturnes menées par des chasseurs d'esclaves locaux armés de fusils européens.",
        "• Les marches forcées vers le littoral : Liés les uns aux autres par des fourches en bois ou enchaînés par le cou, hommes, femmes et enfants marchent des centaines de kilomètres sous le fouet. Les épuisés sont exécutés ou abandonnés aux bêtes sauvages.",
        "• Le parcage dans les esclaveries et forts côtiers : À leur arrivée sur le littoral (Gorée, Saint-Louis, Elmina, Cape Coast, Ouidah), ils sont enfermés dans des cachots sombres sans hygiène, inspectés nus par le chirurgien de bord, triés, pesés et marqués au fer rouge (flétrissure) aux initiales de la compagnie acheteuse.",
        "• L'enfer des cales négrières : Dans l'entrepont haut de moins d'un mètre, les captifs sont entassés comme des planches ('cuillère à pot') dans une chaleur étouffante, privés de lumière, d'aération et d'eau suffisante. Le scorbut, la dysenterie, la variole et le désespoir poussent certains au suicide par refus de nourriture ou en se jetant par-dessus bord. Le taux de mortalité moyen pendant la traversée oscille entre 15 % et 25 %."
      ]
    }
  ],
  diagram: {
    title: 'Structure de la traite négrière et ses mécanismes',
    root: 'TRAITE NÉGRIÈRE',
    branches: [
      {
        name: 'Origines & Causes',
        subtitle: 'Besoins des Plantations',
        items: [
          'Choc démographique amérindien',
          'Mines d\'or/argent & canne à sucre',
          'Marchandisation humaine (bois d\'ébène)'
        ]
      },
      {
        name: 'Commerce Triangulaire',
        subtitle: 'Les 3 Voyages',
        items: [
          'Europe → Pacotille, armes, tissus',
          'Afrique → Esclaves (Passage du Milieu)',
          'Amérique → Sucre, café, tabac, coton'
        ]
      },
      {
        name: 'Supplices & Cales',
        subtitle: 'Déshumanisation Totale',
        items: [
          'Raids de capture & marches enchaînées',
          'Forts côtiers & marquage au fer rouge',
          'Cales surpeuplées (15-25% de décès en mer)'
        ]
      }
    ]
  },
  conclusion: "La traite négrière a été un système économique mondial hautement organisé, reposant sur la déshumanisation totale de millions d'Africains pour le profit des puissances occidentales."
};

export const LESSON_4_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-4',
  number: 'Leçon 4',
  title: 'LES CONSÉQUENCES DE LA TRAITE NÉGRIÈRE EN AFRIQUE, EN EUROPE ET EN AMÉRIQUE',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "La traite négrière, s'étendant sur plus de trois siècles, a profondément bouleversé l'histoire universelle. Ses impacts économiques, démographiques, politiques et sociaux diffèrent radicalement d'un continent à l'autre.",
  fullText: `Leçon 4 : Les conséquences de la traite négrière en Afrique, en Europe et en Amérique

Introduction
La traite négrière, s'étendant sur plus de trois siècles, a profondément bouleversé l'histoire universelle. Ses impacts économiques, démographiques, politiques et sociaux diffèrent radicalement d'un continent à l'autre.

I. Les conséquences en Afrique : Un désastre global
• Démographiques : L'Afrique subit une terrible saignée humaine. Des millions de jeunes (hommes et femmes en âge de procréer) sont déportés ou tués lors des raids, provoquant un dépeuplement et un vieillissement de la population.
• Politiques : La traite engendre une insécurité permanente. Elle favorise l'émergence d'États guerriers et prédateurs vivant du trafic d'esclaves, au détriment des grands empires stables.
• Économiques : L'économie locale est ruinée. L'artisanat et l'agriculture sont abandonnés au profit de la chasse aux hommes. L'introduction de produits européens empêche tout développement industriel local.

II. Les conséquences en Europe : L'accumulation des richesses
Pour l'Europe, la traite est une source d'enrichissement colossal. Les grands ports négriers se développent et se modernisent. Les profits générés par le commerce triangulaire permettent l'accumulation de capitaux qui financeront, au XIXe siècle, la Révolution industrielle. L'Europe assoit ainsi sa domination économique mondiale.

III. Les conséquences en Amérique : Naissance d'un monde multiculturel
• Économiques : Le travail gratuit des esclaves permet la mise en valeur du continent américain et la fortune des propriétaires coloniaux.
• Sociales et culturelles : La déportation massive donne naissance à des sociétés métissées. Les Africains importent leurs croyances (vaudou, santeria), leurs rythmes musicaux et leurs techniques culinaires, créant la riche culture afro-américaine. Cependant, le racisme et la ségrégation s'y installent pour justifier l'esclavage.

Conclusion
La traite négrière a appauvri et déstabilisé durablement l'Afrique tout en enrichissant l'Europe et en bâtissant l'économie des Amériques, laissant des traumatismes sociaux visibles encore aujourd'hui.`,
  sections: [
    {
      title: "I. Les conséquences en Afrique : Un cataclysme multidimensionnel",
      content: [
        "Pour l'Afrique, la traite atlantique a constitué une tragédie sans équivalent historique :",
        "• Saignée démographique et stagnation : Plus de 12 à 15 millions d'Africains ont été déportés vivants vers les Amériques, auxquels s'ajoutent les millions de victimes tuées lors des razzias, mortes d'épuisement durant les marches ou noyées dans l'Atlantique. La population active jeune (15 à 35 ans) ayant été la cible prioritaire, le continent subit un vieillissement prématuré et un blocage démographique durable.",
        "• Dégénérescence politique et militarisation : L'éthique politique s'effondre. Les grands royaumes bâtisseurs cèdent la place à des États pillards et négriers (Dahomey, Ashanti, royaumes côtiers) dont la survie dépend des fusils européens obtenus en livrant leurs frères. L'insécurité permanente paralyse la créativité sociale.",
        "• Ruine économique et désindustrialisation : L'afflux massif d'outils, de barres de fer forgées et d'étoffes manufacturées importées d'Europe détruit le tissu artisanal local (abandon des forges traditionnelles et du tissage artisanal). L'économie se résume à une économie de prédation destructrice."
      ],
      table: {
        headers: ['Domaine d\'impact', 'Conséquences directes en Afrique', 'Conséquences en Europe', 'Conséquences en Amérique'],
        rows: [
          ['Démographie', 'Saignée de 15+ millions de jeunes valides, dépeuplement', 'Croissance urbaine des grands ports de commerce', 'Apport de millions de travailleurs noirs serviles'],
          ['Économie', 'Ruine de l\'artisanat local et de l\'agriculture vivrière', 'Accumulation colossale de capitaux (Rév. Industrielle)', 'Mise en valeur rapide des mines et des plantations'],
          ['Société & Culture', 'Insécurité, rupture des familles, guerres intestines', 'Essor d\'une bourgeoisie marchande cosmopolite', 'Sociétés métissées, cultures créoles, racisme institutionnel'],
          ['Politique', 'Émergence d\'États prédateurs armés par l\'Europe', 'Hégémonie maritime et coloniale mondiale', 'Régimes coloniaux ségrégationnistes et esclavagistes']
        ]
      }
    },
    {
      title: "II. Les conséquences en Europe : Accumulation des capitaux et révolution industrielle",
      content: [
        "Pour l'Europe occidentale, la traite négrière est le moteur principal de l'essor capitaliste moderne :",
        "• Métamorphose des ports négriers : Nantes (premier port négrier français avec plus de 45 % des expéditions), Bordeaux, La Rochelle, Le Havre, Liverpool et Bristol se couvrent d'hôtels particuliers somptueux, de quais modernes et de bourses de commerce.",
        "• Essor des industries annexes : Les chantiers navals, les manufactures d'armes de Saint-Étienne et de Birmingham, les fonderies de clous et de chaînes, les filatures textiles et les raffineries de sucre brut tournent à plein régime pour approvisionner le trafic.",
        "• Financement de la Révolution industrielle : L'accumulation sans précédent de liquidités et de superprofits bancaires fournit aux capitalistes anglais et français les capitaux indispensables pour financer, à la fin du XVIIIe et au XIXe siècle, les machines à vapeur, le réseau de chemin de fer et les usines textiles géantes."
      ]
    },
    {
      title: "III. Les conséquences en Amérique : Métissage, richesses et racisme d'État",
      content: [
        "• Fondation de la richesse américaine : Le travail forcé et gratuit des esclaves a défriché les forêts vierges, creusé les canaux, récolté les millions de tonnes de canne à sucre, de café, d'or et de coton qui ont enrichi les dynasties de planteurs du Brésil, des Antilles et des États du Sud américain.",
        "• Naissance des cultures créoles et afro-descendantes : Malgré la répression, les captifs africains ont légué au Nouveau Monde un héritage inestimable :",
        "  - Syncrétismes religieux : Le Vaudou en Haïti, le Candomblé au Brésil, la Santería à Cuba fusionnent les divinités africaines (Orishas yorubas) et les saints catholiques.",
        "  - Rythmes musicaux et danses : Le blues, le jazz, le gospel, le calypso, la samba, la rumba sont les filles directes des chants de souffrance et d'espérance des esclaves africains.",
        "  - Gastronomie et langues créoles fondées sur les lexiques africains.",
        "• L'invention du racisme idéologique : Pour justifier moralement et juridiquement l'exploitation barbare d'autres êtres humains chrétiens, les sociétés coloniales élaborent les théories de l'inégalité des races, inscrivant l'infériorité des Noirs dans les lois (ex. : le Code Noir de 1685 en France)."
      ]
    }
  ],
  diagram: {
    title: 'Bilan mondial des conséquences de la traite négrière',
    root: 'CONSÉQUENCES DE LA TRAITE',
    branches: [
      {
        name: 'Afrique (Désastre)',
        subtitle: 'Saignée & Déstabilisation',
        items: [
          'Dépeuplement et perte de la jeunesse',
          'Ruine de l\'artisanat et forges locales',
          'États prédateurs & insécurité permanente'
        ]
      },
      {
        name: 'Europe (Richesse)',
        subtitle: 'Capitaux & Hégémonie',
        items: [
          'Ports d\'armement (Nantes, Bordeaux, Liverpool)',
          'Financement de la Révolution industrielle',
          'Domination économique globale'
        ]
      },
      {
        name: 'Amérique (Métissage)',
        subtitle: 'Travail forcé & Créolisation',
        items: [
          'Création de richesses coloniales',
          'Cultures afro-américaines (jazz, vaudou)',
          'Racisme structurel et ségrégation'
        ]
      }
    ]
  },
  conclusion: "La traite négrière a appauvri et déstabilisé durablement l'Afrique tout en enrichissant l'Europe et en bâtissant l'économie des Amériques, laissant des traumatismes sociaux visibles encore aujourd'hui."
};
