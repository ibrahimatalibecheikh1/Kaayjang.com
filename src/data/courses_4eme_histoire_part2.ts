import { LessonContent } from './courses';
import {
  SVG_HIST4_GOREE_SAINT_LOUIS,
  SVG_HIST4_ABOLITION_TIMELINE,
  SVG_HIST4_DISLOCATION_DJOLOF,
  SVG_HIST4_FOUTA_TORO_TORODBE
} from './diagrams_4eme_histoire';

// =========================================================================
// COURS D'HISTOIRE 4ÈME — SÉNÉGAL (PROGRAMME OFFICIEL COMPLET SANS RÉSUMÉ)
// LEÇONS 5 À 8 : COMPTOIRS DU SÉNÉGAL, MOUVEMENT ABOLITIONNISTE,
//                DISLOCATION DU GRAND DJOLOF, ÉVOLUTION DU FOUTA-TORO
// =========================================================================

export const LESSON_5_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-5',
  number: 'Leçon 5',
  title: 'LA TRAITE NÉGRIÈRE AU SÉNÉGAL : LE RÔLE DES COMPTOIRS DE GORÉE ET SAINT-LOUIS',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "En raison de sa position géographique avancée dans l'océan Atlantique, le Sénégal a été une porte d'entrée majeure du commerce négrier européen en Afrique de l'Ouest. Deux comptoirs y ont joué un rôle central : Saint-Louis et l'île de Gorée.",
  fullText: `Leçon 5 : La traite négrière au Sénégal : Le rôle des comptoirs de Gorée et Saint-Louis

Introduction
En raison de sa position géographique avancée dans l'océan Atlantique, le Sénégal a été une porte d'entrée majeure du commerce négrier européen en Afrique de l'Ouest. Deux comptoirs y ont joué un rôle central : Saint-Louis et l'île de Gorée.

I. L'implantation européenne et le rôle de Saint-Louis
Fondée en 1659 par des marchands français sur une île à l'embouchure du fleuve Sénégal, Saint-Louis devient le siège de la Compagnie française des Indes occidentales. Le comptoir sert de base pour la traite de la gomme arabique, mais aussi pour le trafic d'esclaves capturés le long de la vallée du fleuve (au Waalo, Fouta-Toro, Galam).

II. L'île de Gorée : Entrepôt stratégique de la traite
Reprise aux Hollandais par les Français en 1677, l'île de Gorée, située face à la presqu'île du Cap-Vert, offre une rade protégée pour les navires négriers. Elle devient un centre de transit où les captifs venus de l'intérieur des terres (Sénégambie, Guinée) sont parqués, triés et nourris avant d'affronter la traversée de l'Atlantique. La célèbre « Maison des Esclaves », avec sa poignante « porte du voyage sans retour », reste le symbole mondial de cette tragédie.

III. La société des comptoirs et les signares
Le commerce négrier donne naissance à une société côtière cosmopolite marquée par le métissage. Les signares, riches femmes métisses ou noires épouses d'Européens, jouent un rôle économique et social prépondérant. Propriétaires d'esclaves, d'entrepôts et d'embarcations, elles servent d'intermédiaires indispensables entre les commerçants européens et les souverains de l'intérieur.

Conclusion
Gorée et Saint-Louis ont été les deux poumons du commerce atlantique au Sénégal. Si Saint-Louis était le centre administratif et fluvial, Gorée est devenue le sanctuaire de la mémoire universelle de l'esclavage.`,
  sections: [
    {
      title: "I. L'implantation coloniale et la vocation fluviale de Saint-Louis",
      content: [
        "• Fondation stratégique (1659) : Les marchands de la Compagnie normande de Dieppe et Rouen, dirigés par Louis Caullier, choisissent l'île fluviale de Ndar à l'embouchure du fleuve Sénégal pour y bâtir un fort baptisé 'Saint-Louis' en hommage au roi Louis XIV.",
        "• Contrôle de la route fluviale et du Galam : Saint-Louis devient le verrou d'accès aux riches régions aurifères du haut fleuve (pays de Galam / Bakel) et des escales de traite de la gomme arabique (récoltée dans les forêts d'acacias du Trarza et du Brakna).",
        "• La traite des captifs le long de la vallée : Les convois de pirogues et felouques descendent le fleuve chargés de captifs razziés dans le Waalo, le Fouta-Toro, le Boundou et chez les Bambaras, avant d'être rassemblés dans les geôles du fort de Saint-Louis pour y attendre les navires de haute mer."
      ]
    },
    {
      title: "II. L'île de Gorée : Rade fortifiée et mémoire universelle de la traite",
      content: [
        "• Un verrou maritime disputé : Petite île volcanique de 28 hectares située à 3 km au large de la presqu'île du Cap-Vert (Dakar), Gorée ('Goede Reede' / bonne rade en hollandais) est âprement disputée entre Portugais, Hollandais, Anglais et Français (conquise définitivement par Jean d'Estrées pour la France en 1677).",
        "• Le fonctionnement de l'entrepôt négrier : Gorée permet un mouillage sûr à l'abri des barres maritimes traîtresses de la côte. Des milliers de captifs venus de Sénégambie, de Casamance et des Rivières du Sud y sont débarqués pour être engraissés et inspectés.",
        "• La Maison des Esclaves et la porte du non-retour : Édifiée vers 1776 par la famille de la signare Anne Pépin, elle conserve la disposition glaçante de la déshumanisation : cellules de triage pour hommes, femmes, jeunes filles et enfants, cachot d'isolement pour rebelles, et au bout du couloir central, la 'Porte du Voyage sans retour' s'ouvrant sur le gouffre de l'océan Atlantique où les esclaves étaient poussés sur des passerelles de bois vers les chaloupes négrières.",
        "• Sanctuaire mémoriel : Aujourd'hui classée au Patrimoine mondial de l'humanité par l'UNESCO, Gorée incarne le devoir de mémoire universel et le symbole de la réconciliation des peuples."
      ],
      image: {
        url: '',
        alt: 'Les comptoirs négriers de Saint-Louis et Gorée au Sénégal',
        caption: 'Figure 4 : Saint-Louis (comptoir fluvial et gomme) et Gorée (rade insulaire et Maison des Esclaves).',
        svgContent: SVG_HIST4_GOREE_SAINT_LOUIS
      }
    },
    {
      title: 'III. La société cosmopolite des comptoirs et la puissance des Signares',
      content: [
        "• Le phénomène des Signares (du portugais 'senhora') : Dans les comptoirs de Saint-Louis et de Gorée, l'absence de femmes européennes favorise les mariages 'à la mode du pays' entre officiers ou négociants européens et des femmes métisses ou wolofs d'ascendance libre.",
        "• Puissance économique et influence politique : Bilingues, raffinées et dotées d'un sens aigu des affaires, les signares constituent une bourgeoisie d'affaires incontournable. Elles possèdent de vastes demeures en pierre de briques et basalte, commandent des flottes de chaloupes pour le commerce fluvial, possèdent de nombreux esclaves domestiques (les 'captifs de case') et négocient d'égales à égales avec les Damels du Cayor et les rois du Waalo.",
        "• Héritage culturel unique : Elles créent une culture citadine originale faite d'élégance vestimentaire (hauts turbans de tissu amidonné, bijoux en filigrane d'or), de festivités musicales et de convivialité qui caractérisera l'identité des 'Quatre Communes' historiques du Sénégal."
      ]
    }
  ],
  diagram: {
    title: 'Organisation des comptoirs négriers au Sénégal',
    root: 'COMPTOIRS DU SÉNÉGAL',
    branches: [
      {
        name: 'Saint-Louis (1659)',
        subtitle: 'Comptoir Fluvial & Commercial',
        items: [
          'Île de Ndar à l\'embouchure du fleuve',
          'Traite de la gomme arabique & or de Galam',
          'Trafic le long de la vallée du Sénégal'
        ]
      },
      {
        name: 'Île de Gorée (1677)',
        subtitle: 'Entrepôt & Mémoire Mondiale',
        items: [
          'Rade abritée face au Cap-Vert',
          'Maison des Esclaves & cellules de tri',
          '« Porte du Voyage sans retour » (UNESCO)'
        ]
      },
      {
        name: 'Les Signares',
        subtitle: 'Bourgeoisie Métisse Croyante',
        items: [
          'Mariages « à la mode du pays »',
          'Flottes de chaloupes & esclaveries',
          'Intermédiaires entre Européens et Rois'
        ]
      }
    ]
  },
  conclusion: "Gorée et Saint-Louis ont été les deux poumons du commerce atlantique au Sénégal. Si Saint-Louis était le centre administratif et fluvial, Gorée est devenue le sanctuaire de la mémoire universelle de l'esclavage."
};

export const LESSON_6_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-6',
  number: 'Leçon 6',
  title: 'LE MOUVEMENT ABOLITIONNISTE ET LA FIN DE LA TRAITE',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "À la fin du XVIIIe siècle, face aux horreurs de l'esclavage, des voix s'élèvent pour réclamer son interdiction. Sous l'impulsion de philosophes, de religieux, de révoltes d'esclaves et de mutations économiques, le mouvement abolitionniste parvient à mettre fin à la traite puis à l'esclavage au XIXe siècle.",
  fullText: `Leçon 6 : Le mouvement abolitionniste et la fin de la traite

Introduction
À la fin du XVIIIe siècle, face aux horreurs de l'esclavage, des voix s'élèvent pour réclamer son interdiction. Sous l'impulsion de philosophes, de religieux, de révoltes d'esclaves et de mutations économiques, le mouvement abolitionniste parvient à mettre fin à la traite puis à l'esclavage au XIXe siècle.

I. Les causes de l'abolition
• Morales et religieuses : Les philosophes des Lumières (Voltaire, Rousseau, Montesquieu) dénoncent l'esclavage comme contraire à la liberté naturelle. Les chrétiens évangéliques (les Quakers en Angleterre) militent pour la dignité humaine.
• Économiques : Avec la Révolution industrielle, les économistes (comme Adam Smith) démontrent que le travail salarié et le machinisme sont plus rentables que le travail servile. De plus, l'Europe préfère désormais exploiter les matières premières directement en Afrique.
• Les révoltes d'esclaves : La résistance permanente des captifs culmine avec la Révolution de Saint-Domingue (Haïti) en 1791 menée par Toussaint Louverture, qui arrache la liberté par les armes et fonde la première république noire indépendante en 1804.

II. Les étapes juridiques de l'abolition
• L'Angleterre prend la tête du combat : Abolition de la traite en 1807, puis de l'esclavage dans ses colonies en 1833.
• La France : Première abolition en 1794 sous la Révolution, rétablie par Napoléon en 1802, puis abolition définitive le 27 avril 1848 sous la Seconde République, grâce au combat de Victor Schœlcher.
• Aux États-Unis : La fin de l'esclavage est acquise en 1865 après la guerre de Sécession et l'adoption du 13e amendement par Abraham Lincoln.

III. Les conséquences de la fin de la traite
La fin de la traite maritime n'arrête pas immédiatement l'esclavage à l'intérieur du continent africain. Elle pousse les Européens à transformer leurs relations avec l'Afrique : le commerce des hommes est remplacé par le commerce légitime (arachide, huile de palme), préparant l'ère des explorations et de la colonisation.

Conclusion
L'abolition de la traite négrière est une victoire majeure pour les droits humains, mais elle annonce le passage d'une exploitation humaine directe à une domination coloniale territoriale.`,
  sections: [
    {
      title: "I. Les multiples moteurs du combat abolitionniste",
      content: [
        "L'abolition de l'esclavage n'a pas été un acte de simple générosité des métropoles, mais le résultat combiné de révoltes héroïques, de combats moraux et de mutations économiques décisives :",
        "• 1. Les révoltes armées et la liberté conquise (Haïti 1791) : Dans la nuit du 22 au 23 août 1791, les esclaves de la plaine du Nord de Saint-Domingue se soulèvent lors de la cérémonie vaudou du Bois-Caïman. Sous le commandement de Toussaint Louverture puis de Jean-Jacques Dessalines, ils écrasent les armées espagnoles, anglaises et le corps expéditionnaire français envoyé par Bonaparte. En 1804, Haïti proclame son indépendance : c'est la première république noire libre au monde.",
        "• 2. La condamnation philosophique et morale des Lumières : Les penseurs européens dénoncent l'hypocrisie des déclarations des droits. Montesquieu manie l'ironie dans 'De l'esprit des lois', Condorcet fonde la Société des Amis des Noirs (1788) à Paris, et les chrétiens quakers (Thomas Clarkson, William Wilberforce) mobilisent l'opinion publique britannique par des pétitions et des gravures du navire négrier 'Brookes'.",
        "• 3. Les impératifs du capitalisme industriel : Des économistes comme Adam Smith démontrent dans 'La Richesse des Nations' qu'un travailleur salarié libre, motivé par un salaire et pouvant acheter des produits industriels, est économiquement bien plus productif qu'un esclave contraint et peu soigné. L'Europe préfère désormais laisser les Africains sur leurs terres pour y cultiver l'arachide, le coton et le palmier à huile indispensables aux usines européennes."
      ]
    },
    {
      title: 'II. Les grandes étapes juridiques et législatives',
      content: [
        "L'interdiction s'est faite en deux phases distinctes : l'interdiction de la traite (commerce et déportation maritime) puis l'émancipation générale (abolition du statut d'esclave) :",
        "• Au Royaume-Uni : En 1807, le Parlement britannique vote l'Abolition Act interdisant la traite. La marine royale (Royal Navy) patrouille les côtes africaines pour arraisonner les négriers illégaux. En 1833, l'esclavage est aboli dans tout l'Empire colonial britannique avec indemnisation des colons planteurs.",
        "• En France : Abolie une première fois le 16 pluviôse an II (4 février 1794) par la Convention nationale, elle est rétablie par Napoléon Bonaparte en 1802. L'abolition définitive et immédiate intervient le 27 avril 1848 sous la Seconde République, grâce au décret rédigé par Victor Schœlcher, sous-secrétaire d'État à la Marine. Ce décret s'applique immédiatement aux colonies françaises, y compris Saint-Louis et Gorée au Sénégal.",
        "• Aux États-Unis : La sanglante guerre de Sécession (1861-1865) oppose les États industriels du Nord aux États esclavagistes du Sud. La victoire du président Abraham Lincoln aboutit à la proclamation d'émancipation et à la ratification du 13e amendement de la Constitution américaine le 6 décembre 1865, libérant 4 millions d'Afro-Américains."
      ],
      image: {
        url: '',
        alt: 'Frise chronologique des grandes dates de l abolition de la traite',
        caption: 'Figure 5 : La frise chronologique de l abolition de la traite et de l esclavage (1791 - 1865).',
        svgContent: SVG_HIST4_ABOLITION_TIMELINE
      }
    },
    {
      title: "III. Les conséquences et la transition vers l'impérialisme colonial",
      content: [
        "• Persistance clandestine et esclavage interne : Bien que la traite transatlantique soit déclarée crime de piraterie, une contrebande illégale subsiste vers Cuba et le Brésil jusqu'aux années 1860. Par ailleurs, en Afrique, les rois locaux reconvertissent leurs captifs dans la production agricole locale (cultures de rente).",
        "• L'essor du 'commerce légitime' : L'Europe achète désormais aux royaumes africains des matières premières brutes (arachide au Sénégal, huile de palme au golfe de Guinée, ivoire, caoutchouc).",
        "• Le prélude de la colonisation : Pour contrôler directement ces bassins de production et trouver de nouveaux débouchés à leurs usines, les puissances européennes lancent des missions d'exploration géographique et religieuse (Livingstone, Stanley, Savorgnan de Brazza), avant de se partager militairement le continent lors de la Conférence de Berlin (1884-1885)."
      ]
    }
  ],
  diagram: {
    title: 'Processus et dynamiques de l\'Abolition',
    root: 'MOUVEMENT ABOLITIONNISTE',
    branches: [
      {
        name: 'Moteurs du Combat',
        subtitle: 'Révoltes, Idées, Industrie',
        items: [
          'Révolution de Saint-Domingue (Haïti 1791)',
          'Philosophie des Lumières & Quakers',
          'Rentabilité supérieure du salariat libre'
        ]
      },
      {
        name: 'Décrets Historiques',
        subtitle: 'Victoires Juridiques',
        items: [
          '1807 / 1833 : Royaume-Uni',
          '27 avril 1848 : France (Victor Schœlcher)',
          '1865 : États-Unis (13e amendement)'
        ]
      },
      {
        name: 'Mutations Mondiales',
        subtitle: 'Vers la Colonisation',
        items: [
          'Transition vers le commerce légitime (arachide)',
          'Exploration de l\'hinterland africain',
          'Prélude au partage colonial de l\'Afrique'
        ]
      }
    ]
  },
  conclusion: "L'abolition de la traite négrière est une victoire majeure pour les droits humains, mais elle annonce le passage d'une exploitation humaine directe à une domination coloniale territoriale."
};

export const LESSON_7_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-7',
  number: 'Leçon 7',
  title: 'LA DISLOCATION DU GRAND DJOLOF ET L’ÉMERGENCE DES NOUVEAUX ROYAUMES',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Au milieu du XVIe siècle, l'espace sénégambien est dominé par l'Empire du Grand Djolof. Mais les tensions internes et l'attrait du commerce maritime atlantique vont briser cette unité, donnant naissance à des royaumes indépendants et rivaux.",
  fullText: `CHAPITRE 2 : ÉVOLUTION POLITIQUE DE L'AFRIQUE OCCIDENTALE (XVIIe - XIXe SIÈCLE)
Leçon 7 : La dislocation du Grand Djolof et l’émergence des nouveaux royaumes

Introduction
Au milieu du XVIe siècle, l'espace sénégambien est dominé par l'Empire du Grand Djolof. Mais les tensions internes et l'attrait du commerce maritime atlantique vont briser cette unité, donnant naissance à des royaumes indépendants et rivaux.

I. Le Grand Djolof à son apogée et les causes du déclin
Fondé au XIVe siècle par Ndiadiane Ndiaye, le Grand Djolof unissait sous l'autorité du Bourba Djolof les provinces du Cayor, du Baol, du Waalo, du Sine et du Saloum.
Cependant, plusieurs facteurs précipitent son déclin :
• L'éloignement de la capitale (Yang-Yang) située à l'intérieur des terres, coupée de la côte.
• Le développement du commerce côtier avec les Européens, qui enrichit les provinces maritimes au détriment du centre.
• La lourdeur du tribut imposé par le Bourba et la volonté d'indépendance des chefs locaux.

II. La rupture décisive : La bataille de Danki (1549)
En 1549, Amari Ngoné Sobel Fall, fils du chef du Cayor (Laman Déthié Fou Ndiogou), refuse de payer le tribut de sable blanc au Bourba Lélé Fouli Fak. La guerre éclate à Danki (près de Diourbel). L'armée du Cayor, soutenue par le Baol, remporte une victoire écrasante au cours de laquelle le Bourba est tué. Cette bataille consacre l'éclatement définitif de l'empire.

III. L'émergence des nouveaux royaumes sénégambiens
À la suite de Danki, plusieurs entités souveraines s'affirment :
• Le Cayor : Devient la principale puissance militaire, dirigé par le Damel (Amari Ngoné Sobel en devient le premier souverain).
• Le Baol : Dirigé par le Teigne, souvent lié dynastiquement au Cayor.
• Le Waalo : Situé dans la basse vallée du fleuve, dirigé par le Brak.
• Le Sine et le Saloum : Royaumes sérères dirigés par les Maad (Bour), marqués par la dynastie maternelle des Guelwars.
• Le Djolof résiduel : Réduit à un royaume enclavé sans accès à la mer, qui conserve un prestige symbolique mais perd son hégémonie politique.

Conclusion
La bataille de Danki a profondément reconfiguré la carte politique du Sénégal, inaugurant une ère de royaumes rivaux souvent déchirés par des conflits armés et la traite négrière.`,
  sections: [
    {
      title: "I. Le Grand Djolof fédérateur et les ferments de la dislocation",
      content: [
        "• L'empire confédéral de Ndiadiane Ndiaye : Fondé au XIVe siècle, le Grand Djolof régnait sur l'ensemble de l'espace wolof et sérère compris entre le fleuve Sénégal au nord et la Gambie au sud. Le Bourba Djolof régnait depuis sa capitale Yang-Yang dans le désert du Ferlo, entouré d'un collège de grands électeurs.",
        "• Les causes structurelles de l'éclatement :",
        "  - L'isolement géographique de Yang-Yang : Située profondément à l'intérieur des terres sahéliennes, la capitale du Bourba était déconnectée des nouvelles routes commerciales maritimes.",
        "  - La révolution du commerce côtier atlantique : L'arrivée des navires portugais dès le milieu du XVe siècle sur les côtes du Cayor (presqu'île du Cap-Vert) et du Baol enrichit prodigieusement les gouverneurs provinciaux grâce aux chevaux, tissus et armes à feu, rendant caduque la tutelle de l'empereur de l'intérieur.",
        "  - L'humiliation du tribut : Le Bourba exigeait des provinces tributaires des redevances annuelles symboliques mais humiliantes (telles que des peaux de bêtes, des céréales et des sacs de sable blanc de la côte)."
      ]
    },
    {
      title: 'II. L’événement fondateur : La bataille de Danki (1549)',
      content: [
        "• L'insoumission du Cayor : En 1549, le jeune prince héritier du Cayor, Amari Ngoné Sobel Fall, fils du Laman Déthié Fou Ndiogou Fall, refuse catégoriquement de courber l'échine et de convoyer le tribut de sable blanc exigé par le Bourba Lélé Fouli Fak.",
        "• Le choc de Danki : L'affrontement armé se déroule dans la plaine de Danki (située près de Lambaye, dans l'actuelle région de Diourbel). L'armée du Cayor, remarquablement entraînée et appuyée par les troupes du Baol conduites par son oncle maternel, brise la cavalerie impériale.",
        "• La mort du Bourba et la rupture dynastique : Le Bourba Lélé Fouli Fak est abattu sur le champ de bataille. Cette défaite militaire retentissante sonne le glas définitif de la confédération du Grand Djolof et marque la naissance des souverainetés étatiques modernes du Sénégal."
      ],
      image: {
        url: '',
        alt: 'Bataille de Danki et émergence des royaumes sénégalais',
        caption: 'Figure 6 : La dislocation du Grand Djolof après la bataille de Danki (1549) et les nouveaux royaumes indépendants.',
        svgContent: SVG_HIST4_DISLOCATION_DJOLOF
      }
    },
    {
      title: 'III. La mosaïque des nouveaux royaumes sénégambiens',
      content: [
        "L'espace sénégalais se restructure en entités territoriales autonomes et farouchement concurrentes :",
        "• Le Cayor (Titre : Damel) : Amari Ngoné Sobel Fall inaugure la dynastie des Fall en prenant le titre royal de Damel ('celui qui a brisé le joug'). Le Cayor devient l'État le plus puissant, doté d'une garde prétorienne de guerriers professionnels et cavaliers réputés (les Ceddo).",
        "• Le Baol (Titre : Teigne) : Région agricole prospère, Amari Ngoné Sobel en devient également le souverain (réalisant la première union personnelle Damel-Teigne).",
        "• Le Waalo (Titre : Brak) : Situé dans la basse vallée du fleuve Sénégal avec ses capitales successives (Ndiourbel, Rosso), il est dirigé par le Brak assisté des trois familles royales matrilinéaires (Teddiek, Loggar, Dyoos) et du premier ministre Seb Ak Baor.",
        "• Le Sine et le Saloum (Titre : Maad a Sinig et Maad Saloum) : Royaumes sérères fondés par les princes Guelwars émigrés du Gabou mandingue, réputés pour leur stabilité sociale, leur organisation terrienne et leur résistance culturelle.",
        "• Le Djolof résiduel : Le Bourba reste le chef du pays djolof historique (Yang-Yang), mais son pouvoir n'a plus prise sur ses voisins et il se trouve encerclé dans les steppes du Ferlo."
      ],
      table: {
        headers: ['Royaume', 'Titre du Souverain', 'Capitale / Région', 'Caractéristiques majeures'],
        rows: [
          ['Cayor', 'Damel', 'Mboul (Thiès / Louga)', 'Première puissance militaire, armée des Ceddo, accès maritime'],
          ['Baol', 'Teigne', 'Lambaye (Diourbel)', 'Richesse agropastorale, souvent confédéré avec le Cayor'],
          ['Waalo', 'Brak', 'Ndiourbel (Saint-Louis)', 'Basse vallée du fleuve, dynasties matrilinéaires, contacts Saint-Louis'],
          ['Sine', 'Maad a Sinig', 'Diakhao (Fatick)', 'Société sérère unifiée par les Guelwars, tradition spirituelle vivace'],
          ['Saloum', 'Maad Saloum', 'Kahone (Kaolack)', 'Vaste empire fluvial et agricole ouvert sur les îles du Saloum'],
          ['Djolof', 'Bourba Djolof', 'Yang-Yang (Linguère)', 'Cœur historique de l\'ancien empire, enclavé dans le Ferlo']
        ]
      }
    }
  ],
  diagram: {
    title: 'Dislocation du Grand Djolof en 1549',
    root: 'DISLOCATION DU GRAND DJOLOF',
    branches: [
      {
        name: 'Grand Djolof Unifié',
        subtitle: 'XIVe - Milieu XVIe s.',
        items: [
          'Fondé par Ndiadiane Ndiaye',
          'Capitale intérieure Yang-Yang',
          'Tribut imposé aux provinces'
        ]
      },
      {
        name: 'Rupture de Danki (1549)',
        subtitle: 'Bataille Libératrice',
        items: [
          'Amari Ngoné Sobel refuse le tribut',
          'Choc militaire de Danki',
          'Mort du Bourba Lélé Fouli Fak'
        ]
      },
      {
        name: 'Nouveaux Royaumes',
        subtitle: 'Souverainetés Indépendantes',
        items: [
          'Cayor (Damel) & Baol (Teigne)',
          'Waalo (Brak) & Sine-Saloum (Maad)',
          'Djolof résiduel affaibli'
        ]
      }
    ]
  },
  conclusion: "La bataille de Danki a profondément reconfiguré la carte politique du Sénégal, inaugurant une ère de royaumes rivaux souvent déchirés par des conflits armés et la traite négrière."
};

export const LESSON_8_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-8',
  number: 'Leçon 8',
  title: 'L’ÉVOLUTION DU FOUTA-TORO DU XVIIE AU XIXE SIÈCLE',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Situé le long de la moyenne vallée du fleuve Sénégal, le Fouta-Toro est une région historique marquée par des mutations politiques et religieuses décisives. Au XVIIIe siècle, la révolte contre le pouvoir traditionnel donne naissance à l'un des premiers États théocratiques d'Afrique de l'Ouest.",
  fullText: `Leçon 8 : L’évolution du Fouta-Toro du XVIIe au XIXe siècle

Introduction
Situé le long de la moyenne vallée du fleuve Sénégal, le Fouta-Toro est une région historique marquée par des mutations politiques et religieuses décisives. Au XVIIIe siècle, la révolte contre le pouvoir traditionnel donne naissance à l'un des premiers États théocratiques d'Afrique de l'Ouest.

I. La dynastie des Déniankobé et sa crise
Depuis le début du XVIe siècle, le Fouta-Toro est dirigé par la dynastie peule animiste des Déniankobé, fondée par Koli Tenguella Ba (les souverains portent le titre de Silatigui).
Au XVIIIe siècle, ce régime traverse une crise profonde :
• L'incapacité des Silatigui à protéger les populations contre les razzias esclavagistes incessantes menées par les Maures du Trarza et du Brakna.
• Le mécontentement populaire face aux taxes arbitraires et au mode de vie guerrier (Ceddo) jugé impie par les élites musulmanes.

II. La révolution Torodbe de 1776
Face à cette faillite, un mouvement de lettrés et marabouts musulmans, les Torodbe, organise la résistance. Menés par Thierno Souleymane Baal, ils déclenchent en 1776 une guerre sainte (djihad) qui renverse la dynastie des Déniankobé. Souleymane Baal pose les bases d'un État islamique fondé sur la justice, l'abolition des privilèges de naissance et l'élection des dirigeants, avant de mourir au combat contre les Maures.

III. L'Almamiat et son évolution au XIXe siècle
Après la mort de Baal, Abdul Kader Kane est élu premier Almamy (commandeur des croyants) du Fouta-Toro.
• Réformes d'Abdul Kader : Il fortifie le royaume, construit des mosquées, impose la charia, libère les musulmans réduits en esclavage et interdit le passage des navires négriers français sur le fleuve Sénégal.
• Le déclin politique : Après l'assassinat d'Abdul Kader en 1807, l'Almamiat s'enfonce dans l'instabilité en raison des querelles entre grandes familles électrices (les Jaggorde), affaiblissant le Fouta face aux ambitions coloniales françaises au milieu du XIXe siècle.

Conclusion
La révolution de 1776 au Fouta-Toro a marqué une rupture fondamentale en créant un régime théocratique et électif, inspirant les grands mouvements de renouveau islamique en Afrique de l'Ouest.`,
  sections: [
    {
      title: "I. La dynastie des Déniankobé et l'effondrement de sa légitimité",
      content: [
        "• L'épopée de Koli Tenguella Ba : Au début du XVIe siècle, le conquérant peul Koli Tenguella fonde la dynastie des Déniankobé, unifiant la vallée moyenne du fleuve Sénégal sous le titre de Silatigui (ou Satigui).",
        "• La nature aristocratique et guerrière : Le régime s'appuie sur une noblesse guerrière Ceddo, attachée aux cultes traditionnels et aux chevaux, percevant des tributs féodaux sur les paysans cultivateurs (les Sebbe et Torodbe).",
        "• La crise existentielle du XVIIIe siècle :",
        "  - Les razzias esclavagistes maures : Les émirs mauresques de la rive droite (Trarza et Brakna) multiplient les incursions destructrices, pillant les récoltes et réduisant en esclavage des milliers de villageois peuls et toucouleurs sans que le Silatigui ne parvienne à les défendre.",
        "  - Le scandale des redevances aux Maures : Pour maintenir leurs trônes, certains Silatigui acceptent même de payer le tribut ('moudi horma') aux émirs arabes, suscitant l'indignation des oulémas musulmans."
      ]
    },
    {
      title: 'II. La Révolution Torodbe de 1776 et la vision de Thierno Souleymane Baal',
      content: [
        "• Les Torodbe, classe intellectuelle réformatrice : Composés de lettrés formés dans les madrasas de Pir, de Coki et de Mauritanie, les Torodbe ('ceux qui demandent la science auprès de Dieu') prêchent la libération spirituelle, sociale et militaire du peuple.",
        "• L'action révolutionnaire de Thierno Souleymane Baal : Savant érudit et stratège hors pair, il fédère les musulmans, dépose en 1776 le dernier Silatigui Souleymane Boubou Ndiaye et boute les pillards maures hors de la rive gauche du fleuve.",
        "• Le testament politique républicain de Baal : Avant de périr au combat contre les Maures à Diah, Souleymane Baal énonce des principes démocratiques visionnaires :",
        "  « Choisissez un homme pieux et juste pour diriger. Ne faites pas de la fonction d'Almamy une royauté héréditaire. Si l'Almamy dévie des commandements divins, déposez-le ! S'il persiste, combattez-le et remplacez-le par un autre. »"
      ],
      image: {
        url: '',
        alt: 'Révolution Torodbe et Almamiat du Fouta-Toro en 1776',
        caption: 'Figure 7 : La transition politique de 1776 : de la dynastie Déniankobé à l Almamiat théocratique électif.',
        svgContent: SVG_HIST4_FOUTA_TORO_TORODBE
      }
    },
    {
      title: "III. L'Almamiat d'Abdul Kader Kane et ses réformes d'avant-garde",
      content: [
        "• L'élection du premier Almamy (1776) : Abdul Kader Kane, marabout d'une rigueur morale exemplaire, est élu Almamy (de l'arabe 'Al-Imam', guide de la prière et de l'État).",
        "• Les réformes politiques et sociétales :",
        "  - La charia comme loi suprême : Instauration de tribunaux cadiaux et codification de la justice.",
        "  - Réseau de mosquées-forteresses : Construction des grandes mosquées de Kobilo, Podor et Fouta pour l'instruction et la défense militaire.",
        "  - Lutte intransigeante contre la traite négrière : Abdul Kader interdit le transit des convois d'esclaves chrétiens français sur le fleuve et décrète l'affranchissement immédiat de tout captif musulman capable de réciter un verset du Coran.",
        "• Les dérives oligarchiques et le déclin (XIXe siècle) :",
        "  - L'assassinat d'Abdul Kader en 1807 lors d'un complot mené par des chefs mécontents et des rois voisins marque le début de l'instabilité.",
        "  - Le conseil des grands électeurs (les Jaggorde) confisque le pouvoir, nommant et révoquant les Almamys au gré de luttes claniques intestines, ce qui empêche toute résistance unie lors de la pénétration des troupes coloniales de Louis Faidherbe après 1854."
      ]
    }
  ],
  diagram: {
    title: 'Structure de la Révolution Torodbe au Fouta-Toro',
    root: 'RÉVOLUTION DU FOUTA-TORO',
    branches: [
      {
        name: 'Crise Déniankobé',
        subtitle: 'Régime Ceddo Failli',
        items: [
          'Dynastie de Koli Tenguella Ba',
          'Incapacité face aux razzias maures',
          'Tribut humiliant du moudi horma'
        ]
      },
      {
        name: 'Révolution de 1776',
        subtitle: 'Thierno Souleymane Baal',
        items: [
          'Soulèvement des Torodbe musulmans',
          'Chute du dernier Silatigui',
          'Principes républicains & électifs'
        ]
      },
      {
        name: 'L\'Almamiat (1776-XIXe)',
        subtitle: 'Abdul Kader Kane',
        items: [
          'Mosquées, charia, interdiction traite',
          'Assassinat d\'Abdul Kader (1807)',
          'Instabilité des clans d\'électeurs (Jaggorde)'
        ]
      }
    ]
  },
  conclusion: "La révolution de 1776 au Fouta-Toro a marqué une rupture fondamentale en créant un régime théocratique et électif, inspirant les grands mouvements de renouveau islamique en Afrique de l'Ouest."
};
