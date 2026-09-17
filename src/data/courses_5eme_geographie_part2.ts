import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE 5ÈME - DEUXIÈME PARTIE : CHAPITRE I (SUITE) & CHAPITRE II (DÉBUT)
// PROGRAMME OFFICIEL DU SÉNÉGAL - ENSEIGNEMENT MOYEN
// COURS INTÉGRAUX DÉTAILLÉS AVEC ENRICHISSEMENTS PÉDAGOGIQUES
// =========================================================================

export const LESSON_4_GEOGRAPHIE_5EME: LessonContent = {
  id: 'geo-5eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LE CLIMAT ET LA VÉGÉTATION DU SÉNÉGAL',
  subject: 'Géographie',
  classLevel: '5ème',
  introduction: `Le climat dicte le rythme de vie de tous les Sénégalais : il détermine la période des semailles dans les champs, les récoltes, le débit des fleuves et la nature des paysages végétaux qui s'étendent du Nord au Sud. Situé dans la zone intertropicale chaude, le Sénégal bénéficie d'un climat tropical caractérisé par l'alternance de deux saisons contrastées, sous l'influence du déplacement du Front Intertropical (FIT) et de trois grandes masses d'air. Ce chapitre permet à l'élève de 5ème de comprendre le mécanisme des saisons, le gradient pluviométrique Sud-Nord et l'étagement de la végétation, de la steppe épineuse du Sahel aux forêts denses et mangroves de Casamance.`,
  sections: [
    {
      title: 'I. LES FACTEURS DU CLIMAT SÉNÉGALAIS',
      content: [
        `Le climat du Sénégal est de type tropical soudano-sahélien. Il est marqué par une température moyenne annuelle élevée (toujours supérieure à 25 °C) et par l'alternance nette de deux saisons :`,
        `• Une longue saison sèche : Elle dure de 7 à 9 mois (généralement de novembre à mai/juin). C'est la période sans pluie, où les températures diurnes sont élevées dans l'intérieur du pays mais adoucies la nuit.`,
        `• Une courte saison des pluies, appelée localement « hivernage » : Elle s'étend sur 3 à 5 mois (de juin à octobre). C'est la saison agricole par excellence au Sénégal, apportant les pluies indispensables aux cultures sous pluie (mil, arachide, maïs, niébé).`
      ],
      subsections: [
        {
          subtitle: 'A. Le moteur des saisons : le Front Intertropical (FIT) et les trois masses d\'air',
          content: [
            `Le passage d'une saison à l'autre est commandé par le déplacement en latitude d'une zone de contact atmosphérique appelée le Front Intertropical (FIT), qui sépare les masses d'air sèches du Nord et les masses d'air humides du Sud.`,
            `Trois masses d'air ou flux de vent déterminent le temps au Sénégal :`,
            `1. L'alizé maritime : Vent frais et humide qui souffle en permanence de l'océan Atlantique (Nord-Nord-Ouest). Il tempère la chaleur sur toute la frange littorale (Dakar, Saint-Louis, Mbour) et y maintient une humidité relative agréable.`,
            `2. L'alizé continental (appelé couramment l'Harmattan) : Vent continental très chaud, sec et souvent chargé d'une brume de poussière fine beige venant du désert du Sahara (Nord-Est). Il souffle pendant la saison sèche, assèche la végétation, craquelle les sols et favorise les feux de brousse et les affections respiratoires.`,
            `3. La mousson : Vent chaud et gorgé de vapeur d'eau soufflant du Sud-Ouest (originaire de l'Atlantique Sud et de l'océan Indien). Lorsque le soleil est au zénith au-dessus de l'hémisphère Nord en été, la mousson remonte vers le Nord et apporte avec elle les nuages orageux (cumulonimbus) et les fortes averses qui constituent l'hivernage.`
          ]
        }
      ]
    },
    {
      title: 'II. LES NUANCES CLIMATIQUES : LE GRADIENT PLUVIOMÉTRIQUE SUD-NORD',
      content: [
        `Au Sénégal, la pluviométrie n'est pas répartie de manière égale. Elle obéit à une règle fondamentale appelée le « gradient pluviométrique Sud-Nord » : les pluies et la durée de l'hivernage diminuent régulièrement au fur et à mesure que l'on remonte du Sud vers le Nord.`
      ],
      subsections: [
        {
          subtitle: 'A. Les quatre grands domaines climatiques du Sénégal',
          content: [
            `1. Le domaine subguinéen (ou sud-soudanien) en Basse-Casamance et Kédougou :`,
            `   - Pluviométrie abondante : Plus de 1 000 mm de pluie par an (pouvant atteindre 1 500 mm à Oussouye ou Ziguinchor).`,
            `   - Hivernage long : 5 à 6 mois de pluies régulières. Climat chaud et très humide propice à la riziculture inondée.`,
            `2. Le domaine nord-soudanien au Centre du pays (Bassin arachidier, Sine-Saloum, Tambacounda) :`,
            `   - Pluviométrie moyenne : Entre 500 et 1 000 mm d'eau par an.`,
            `   - Hivernage de 3 à 4 mois. C'est le cœur agricole du pays pour l'arachide, le mil, le sorgho et le coton.`,
            `3. Le domaine sahélien au Nord (Vallée du fleuve Sénégal, Saint-Louis, Podor, Matam, Linguère) :`,
            `   - Pluviométrie déficitaire : Moins de 500 mm de pluie par an (souvent moins de 300 mm à Podor).`,
            `   - Hivernage très court (2 mois) et irrégulier. Températures extrêmes pouvant dépasser 45 °C à l'ombre en mai. Agriculture dépendante de l'irrigation fluviale.`,
            `4. Le domaine littoral ou canarien (Façade maritime de Saint-Louis à Dakar) :`,
            `   - Climat adouci et régulé par l'océan Atlantique et l'alizé maritime frais. Les amplitudes thermiques (écart entre le jour et la nuit) y sont faibles et les brouillards matinaux fréquents.`
          ],
          table: {
            headers: ["Domaine climatique", "Pluviométrie annuelle (mm)", "Durée de l'hivernage", "Régions représentatives", "Particularité majeure"],
            rows: [
              ["Subguinéen (Sud)", "1 000 à 1 500 mm", "5 à 6 mois (mai-octobre)", "Ziguinchor, Sédhiou, Kolda, Kédougou", "Abondance d'eau, ciel très couvert, riziculture"],
              ["Soudanien (Centre)", "500 à 1 000 mm", "3 à 4 mois (juillet-octobre)", "Kaolack, Fatick, Kaffrine, Tambacounda", "Bassin arachidier et céréalier traditionnel"],
              ["Sahélien (Nord)", "Moins de 500 mm", "2 à 3 mois (août-septembre)", "Saint-Louis, Podor, Matam, Louga, Ranérou", "Aridité prononcée, chaleur torride, élevage"],
              ["Littoral / Canarien", "300 à 500 mm", "3 mois", "Dakar, Mbour, Saint-Louis littoral", "Microclimat tempéré par l'alizé maritime frais"]
            ]
          }
        }
      ]
    },
    {
      title: 'III. LA VÉGÉTATION DU SÉNÉGAL : LE MIROIR DU CLIMAT',
      content: [
        `La couverture végétale dépend directement de la quantité d'eau reçue du ciel : la végétation reflète fidèlement la répartition des pluies.`
      ],
      subsections: [
        {
          subtitle: 'A. De la steppe du Nord à la forêt dense du Sud',
          content: [
            `1. Au Nord (zone sahélienne) : La steppe`,
            `   - Tapis herbeux ras et discontinu, qui jaunit dès la fin des pluies.`,
            `   - Arbres épineux et arbustes résistants à la sécheresse (acacias comme l'Acacia senegal produisant la gomme arabique, jujubiers, balanites).`,
            `2. Au Centre (zone soudanienne) : La savane`,
            `   - Savane arborée ou boisée recouverte d'un tapis continu de hautes herbes (herbe à éléphant, graminées).`,
            `   - Arbres emblématiques du Sénégal : le majestueux baobab (*Adansonia digitata*), le rônier au tronc élancé, le caïlcédrat et le tamarinier.`,
            `3. Au Sud (zone subguinéenne) : La forêt dense et la mangrove`,
            `   - Forêt galerie et forêt dense ombrophile aux arbres gigantesques à contreforts : fromagers centenaires (*Ceiba pentandra*), rôniers, acajous et lianes.`,
            `   - La mangrove : Forêt amphibie fascinante poussant dans l'eau salée et saumâtre des estuaires de Casamance et du Sine-Saloum, formée de palétuviers aux impressionnantes racines-échasses immergées qui protègent les côtes contre l'érosion et servent de nursery aux poissons, crabes et huîtres.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Le Climat et la Végétation au Sénégal',
    root: 'CLIMAT & VÉGÉTATION DU SÉNÉGAL',
    branches: [
      {
        name: 'LES 2 SAISONS & VENTS',
        subtitle: 'Rythme tropical gouverné par le FIT',
        items: [
          'Saison sèche (7 à 9 mois) : Alizé maritime (frais) et Harmattan (sec)',
          'Saison des pluies / Hivernage (3 à 5 mois) : Mousson humide du SW',
          'FIT : Ligne de démarcation entre masses d\'air sèches et humides'
        ]
      },
      {
        name: 'GRADIENT PLUVIOMÉTRIQUE',
        subtitle: 'Diminution des pluies du Sud vers le Nord',
        items: [
          'Sud Subguinéen (> 1000 mm) : Casamance, Kédougou',
          'Centre Soudanien (500-1000 mm) : Bassin arachidier',
          'Nord Sahélien (< 500 mm) : Vallée du fleuve, Ferlo',
          'Façade maritime : Climat canarien adouci par l\'océan'
        ]
      },
      {
        name: 'PAYSAGES VÉGÉTAUX',
        subtitle: 'Reflet fidèle de la pluviométrie',
        items: [
          'Nord : Steppe à épineux et acacias gommiers',
          'Centre : Savane à baobabs, rôniers et hautes herbes',
          'Sud : Forêt dense, fromagers géants et mangroves à palétuviers'
        ]
      }
    ]
  },
  senegalMap: {
    mode: 'climat',
    title: 'Carte climatique et des zones de végétation du Sénégal',
    description: 'Gradient pluviométrique Sud-Nord, zones sahélienne, soudanienne et subguinéenne.'
  },
  conclusion: `Le climat et la végétation du Sénégal démontrent une parfaite harmonie écologique régie par la mousson et le Front Intertropical. Du Sud généreusement arrosé où s'épanouissent les forêts denses de fromagers et les mangroves de Casamance, jusqu'au Nord aride où résistent la steppe et les acacias sahéliens, cette diversité bioclimatique conditionne les terroirs agricoles et la vie quotidienne des populations sénégalaises.`,
  fullText: `LEÇON 4 : LE CLIMAT ET LA VÉGÉTATION

I. Les facteurs du climat : Le climat du Sénégal est de type tropical, caractérisé par l'alternance de deux saisons nettes : une saison sèche (de novembre à mai/juin) et une saison des pluies appelée hivernage (de juin à octobre). Ce rythme est dicté par le déplacement du Front Intertropical (FIT) et l'action de trois masses d'air principales :
1. L'alizé maritime : Vent frais et humide soufflant de l'océan Atlantique, rafraîchissant les zones côtières.
2. L'alizé continental (ou Harmattan) : Vent chaud, sec et souvent poussiéreux, soufflant du désert vers l'intérieur des terres pendant la saison sèche.
3. La mousson : Vent chaud et très humide soufflant du sud-ouest (océan Indien/Atlantique Sud), apportant les pluies d'hivernage.

II. Les nuances climatiques : Les précipitations diminuent progressivement selon un gradient Sud-Nord. On distingue : le climat sud-soudanien ou subguinéen en Casamance (plus de 1000 mm de pluie par an), le climat nord-soudanien au centre (500 à 1000 mm), le climat sahélien au nord (moins de 500 mm, très sec), et le climat de façade maritime (ou canarien) sur le littoral, adouci par l'océan.

III. La végétation : La végétation reflète fidèlement la répartition des pluies :
1. Au Nord (zone sahélienne) : La steppe, caractérisée par des tapis herbeux discontinus et des arbres épineux (acacias).
2. Au Centre (zone soudanienne) : La savane (arborée ou boisée), domaine des baobabs, des rôniers et des herbes hautes.
3. Au Sud (zone subguinéenne) : La forêt dense, avec de grands arbres (fromagers, acajous) et la mangrove le long des estuaires et des cours d'eau saumâtres.`
};

export const LESSON_5_GEOGRAPHIE_5EME: LessonContent = {
  id: 'geo-5eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LES SOLS ET L\'HYDROGRAPHIE DU SÉNÉGAL',
  subject: 'Géographie',
  classLevel: '5ème',
  introduction: `La terre et l'eau sont les deux mamelles nourricières de l'agriculture et de la survie des hommes. Au Sénégal, la diversité des sols résulte de la combinaison entre le climat, la nature de la roche mère et la topographie, donnant naissance à des terroirs agricoles traditionnellement identifiés en langue wolof (sols Dior, Deck, Deck-Dior, Tannes). Parallèlement, le réseau hydrographique dépend étroitement des châteaux d'eau régionaux du Fouta-Djalon et de la présence vitale du fleuve Sénégal et du lac de Guiers, qui irriguent les plaines et approvisionnent la capitale Dakar en eau potable.`,
  sections: [
    {
      title: 'I. LA DIVERSITÉ DES SOLS DU SÉNÉGAL',
      content: [
        `Un sol est la couche superficielle meuble de la croûte terrestre dans laquelle poussent les végétaux. Au Sénégal, on classe les sols selon leurs qualités agronomiques, leur couleur et leur texture :`
      ],
      subsections: [
        {
          subtitle: 'A. Les six grands types de sols sénégalais',
          content: [
            `1. Les sols Dior (sols sableux non lessivés) :`,
            `   - Caractéristiques : Sols très sableux, de couleur claire (rougeâtre ou jaunâtre), très pauvres en humus et en matière organique, mais légers, aérés et faciles à labourer avec l'araire ou la houe.`,
            `   - Localisation et vocation : Dominent le Bassin arachidier (Thiès, Diourbel, Louga). C'est le domaine par excellence de la culture de l'arachide, du mil souna et du niébé.`,
            `2. Les sols Deck (sols argilo-sableux et vertisols) :`,
            `   - Caractéristiques : Sols plus foncés (gris à noirâtres), riches en argile, très fertiles avec une forte capacité de rétention d'eau, mais lourds et durs à travailler en saison sèche.`,
            `   - Vocation : Adaptés aux cultures céréalières exigeantes (sorgho, maïs) et aux cultures maraîchères dans les dépressions.`,
            `3. Les sols Deck-Dior (sols de transition) :`,
            `   - Caractéristiques : Équilibre parfait entre le sable et l'argile. Ce sont les sols agricoles les plus polyvalents du pays.`,
            `   - Vocation : Propices à une agriculture diversifiée associant céréales, légumineuses et maraîchage.`,
            `4. Les sols halomorphes (les « tannes ») :`,
            `   - Caractéristiques : Sols fortement saturés en sel marin, blanchâtres et complètement stériles.`,
            `   - Localisation : Fréquents dans les estuaires et deltas du Sine, du Saloum et de la Casamance sous l'effet de l'évaporation et de l'intrusion de l'eau de mer.`,
            `5. Les sols hydromorphes (sols alluviaux des vallées) :`,
            `   - Caractéristiques : Sols gorgés d'eau en permanence ou périodiquement, riches en alluvions fines et en limons organiques fertiles déposés par les crues.`,
            `   - Localisation et vocation : Vallée du fleuve Sénégal (le Walo) et bas-fonds de Casamance. Berceau de la riziculture irriguée, de la canne à sucre (Richard-Toll) et de la tomate industrielle.`,
            `6. Les sols ferrugineux tropicaux et latéritiques :`,
            `   - Caractéristiques : Sols de couleur rouge vif riches en oxydes de fer et d'aluminium. Sous l'effet des saisons contrastées, ils peuvent former une cuirasse rocheuse stérile (croûte latéritique).`,
            `   - Localisation : Présents dans le Sénégal oriental (Tambacounda, Kédougou) et sur les plateaux de Haute-Casamance.`
          ],
          table: {
            headers: ["Nom vernaculaire / Scientifique", "Texture et couleur", "Fertilité", "Cultures associées majeures", "Localisation principale"],
            rows: [
              ["Sols Dior", "Sableux, légers, rouges/jaunes", "Faible (pauvre en humus)", "Arachide, mil souna, pastèque", "Bassin arachidier (Thiès, Diourbel, Louga)"],
              ["Sols Deck", "Argilo-sableux, foncés/gris", "Élevée", "Sorgho, maïs, manioc", "Dépressions, bas-fonds du Centre"],
              ["Sols Deck-Dior", "Sable et argile équilibrés", "Très bonne", "Polyculture vivrière et commerciale", "Bassin arachidier méridional"],
              ["Sols halomorphes (Tannes)", "Sols salés, blanchâtres", "Nulle (stérile)", "Inculte (saliculture à Kaolack)", "Deltas du Sine-Saloum et Casamance"],
              ["Sols hydromorphes", "Alluviaux, gorgés d'eau", "Excellente (limons)", "Riziculture, canne à sucre, maraîchage", "Vallée du fleuve Sénégal, Niayes, Casamance"],
              ["Sols ferrugineux / latérites", "Riches en fer, cuirassés", "Moyenne à faible", "Coton, maïs, arboriculture fruitière", "Sénégal oriental, Haute-Casamance"]
            ]
          }
        }
      ]
    },
    {
      title: 'II. L\'HYDROGRAPHIE : LES FLEUVES ET PLANS D\'EAU DU SÉNÉGAL',
      content: [
        `L'hydrographie du Sénégal est marquée par une grande dépendance extérieure : les quatre principaux cours d'eau du pays prennent leur source en dehors des frontières nationales, dans le grand massif pluvieux du Fouta-Djalon en République de Guinée (surnommé le « château d'eau de l'Afrique de l'Ouest »).`
      ],
      subsections: [
        {
          subtitle: 'A. Les quatre grands fleuves du Sénégal',
          content: [
            `1. Le fleuve Sénégal (1 790 km de long au total, dont 850 km au Sénégal) :`,
            `   - Né de la confluence du Bafing et du Bakoye à Bafoulabé (Mali), il forme l'intégralité de la frontière Nord entre le Sénégal et la Mauritanie avant de se jeter dans l'océan Atlantique à Saint-Louis.`,
            `   - Son régime est tropical de transition, caractérisé par une crue puissante de juillet à octobre et une période d'étiage (basses eaux) de novembre à juin.`,
            `   - Les grands barrages régulateurs de l'OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal) :`,
            `     • Le barrage hydroélectrique de Manantali (au Mali) : Régularise le débit du fleuve et produit de l'électricité propre pour Dakar, Bamako et Nouakchott.`,
            `     • Le barrage anti-sel de Diama (à 27 km en amont de Saint-Louis) : Construit en 1986, il bloque la remontée de l'eau de mer salée vers l'amont, permet le stockage de 500 millions de m³ d'eau douce pour l'irrigation et alimente le lac de Guiers.`,
            `2. Le fleuve Gambie (1 150 km) :`,
            `   - Prend sa source au Fouta-Djalon, traverse le Parc National du Niokolo-Koba et la région de Kédougou/Tambacounda avant de pénétrer en Gambie. C'est un fleuve au débit puissant et pérenne.`,
            `3. Le fleuve Casamance (environ 320 km) :`,
            `   - Fleuve à pente extrêmement faible s'écoulant au Sud du pays.`,
            `   - En saison sèche, en raison du manque de pente et de la faiblesse des apports d'eau douce, l'océan Atlantique s'y engouffre sur plus de 150 km en amont, formant une « langue salée » qui transforme le cours d'eau en estuaire marin hyper-salé.`,
            `4. Le fleuve Kayanga / Anambé :`,
            `   - Cours d'eau de Haute-Casamance faisant l'objet d'un grand projet hydro-agricole (bassin de l'Anambé) pour la production rizicole intensive sous maîtrise d'eau.`
          ]
        },
        {
          subtitle: 'B. Les vallées fossiles et le Lac de Guiers',
          content: [
            `• Les vallées fossiles : Témoins d'une époque préhistorique beaucoup plus humide, ce sont d'anciens cours d'eau aujourd'hui asséchés qui traversent le pays (le Ferlo, le Sine, le Saloum). De nos jours, le Sine et le Saloum ne sont plus des fleuves actifs mais des bras de mer ou « estuaires inverses » où l'eau est souvent plus salée que l'océan lui-même.`,
            `• Le Lac de Guiers (La réserve d'eau vitale de la capitale) :`,
            `  - Situé dans la région de Louga (près de Richard-Toll), long de 35 km et large de 8 km, il est alimenté en eau douce par les crues du fleuve Sénégal via le canal de la Taouey.`,
            `  - Rôle vital stratégique : C'est la principale réserve d'eau douce du Sénégal. C'est à partir du Lac de Guiers que les grandes usines de traitement de Ngnith et de Keur Momar Sarr (KMS 1, KMS 2, KMS 3) pompent et purifient l'eau avant de l'acheminer par de gigantesques conduites souterraines sur plus de 250 km pour désaltérer les 4 millions d'habitants de la métropole de Dakar.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Les Sols et le Réseau Hydrographique du Sénégal',
    root: 'SOLS & HYDROGRAPHIE',
    branches: [
      {
        name: 'LES SOLS AGRICOLES',
        subtitle: 'Classifications et aptitudes culturales',
        items: [
          'Sols Dior (sableux) : Bassin arachidier, mil, arachide',
          'Sols Deck (argilo-sableux) : Dépressions fertiles, céréales',
          'Sols hydromorphes : Alluvions alluviales, riziculture (Walo)',
          'Tannes (halomorphes) : Sols salés stériles des estuaires'
        ]
      },
      {
        name: 'LES QUATRE FLEUVES',
        subtitle: 'Sources du massif du Fouta-Djalon',
        items: [
          'Fleuve Sénégal (1790 km) : Frontière Nord, barrages Diama et Manantali',
          'Fleuve Gambie (1150 km) : Traverse le Niokolo-Koba',
          'Fleuve Casamance (320 km) : Estuaire maritime, langue salée',
          'Fleuve Kayanga / Anambé : Pôle rizicole aménagé au Sud'
        ]
      },
      {
        name: 'LACS ET VALLÉES FOSSILES',
        subtitle: 'Réserves stratégiques d\'eau douce',
        items: [
          'Lac de Guiers : Réserve alimentant Dakar (usines KMS 1, 2 et 3)',
          'Vallées fossiles : Le Ferlo (asséché), le Sine et le Saloum',
          'Estuaires inverses : Eau de mer plus salée que l\'océan'
        ]
      }
    ]
  },
  senegalMap: {
    mode: 'hydrographie',
    title: 'Carte hydrographique du Sénégal',
    description: 'Cours du fleuve Sénégal, Diama, Manantali, Lac de Guiers, fleuves Gambie et Casamance.'
  },
  conclusion: `Les sols et les cours d'eau constituent le socle de la sécurité alimentaire et de l'approvisionnement en eau du Sénégal. Alors que les sols Dior et Deck ont forgé la renommée du Bassin arachidier, la maîtrise moderne des cours d'eau grâce aux barrages de Diama et de Manantali et la valorisation du Lac de Guiers pour l'eau potable de Dakar illustrent la lutte perpétuelle des géographes et ingénieurs sénégalais pour dompter l'aridité et assurer le développement équitable du pays.`,
  fullText: `LEÇON 5 : LES SOLS ET L'HYDROGRAPHIE

I. La diversité des sols : Les sols du Sénégal varient selon le climat, la roche mère et la topographie :
1. Les sols Dior : Sols sableux, pauvres en matière organique mais faciles à cultiver, typiques de la zone arachidière.
2. Les sols Deck : Sols argilo-sableux, plus fertiles, adaptés aux cultures céréalières.
3. Les sols Deck-Dior : Formations intermédiaires propices à une agriculture diversifiée.
4. Les sols halomorphes (ou tannes) : Sols salés et stériles, fréquents dans les estuaires et deltas.
5. Les sols hydromorphes : Sols gorgés d'eau, riches et très fertiles, situés dans les vallées fluviales (riziculture).
6. Les sols ferrugineux tropicaux : Latéritiques, riches en fer, présents dans le Sénégal oriental et en Casamance.

II. L'hydrographie : Le réseau hydrographique comprend quatre fleuves principaux, alimentés par les pluies du massif du Fouta-Djalon (Guinée) :
1. Le fleuve Sénégal : Long de 1790 km (dont 850 km au Sénégal), il forme la frontière nord. Son régime est tropical de transition.
2. Le fleuve Gambie : Traversant le parc national du Niokolo-Koba avant d'entrer en Gambie.
3. Le fleuve Casamance : Fleuve de type maritime à faible pente, fortement envahi par la langue salée marine en saison sèche.
4. Le fleuve Kayanga / Anambé : Cours d'eau plus modeste coulant au sud.
À ce réseau s'ajoutent des rivières et des vallées fossiles (le Ferlo, le Sine, le Saloum qui sont aujourd'hui des bras de mer ou des estuaires inverses), ainsi que des lacs importants comme le Lac de Guiers, principale réserve d'eau douce alimentant la capitale Dakar.`
};

export const LESSON_6_GEOGRAPHIE_5EME: LessonContent = {
  id: 'geo-5eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LA DYNAMIQUE DE LA POPULATION SÉNÉGALAISE',
  subject: 'Géographie',
  classLevel: '5ème',
  introduction: `La population est la richesse première d'une nation : ce sont les hommes et les femmes qui travaillent, produisent, inventent et animent les terroirs. Au Sénégal, la population a connu une véritable explosion démographique au cours des dernières décennies, passant de 3 millions d'habitants à l'indépendance en 1960 à plus de 18 millions aujourd'hui. Ce chapitre étudie la dynamique démographique (le rythme soutenu des naissances et le recul de la mortalité), la structure par âge dominée par une jeunesse impressionnante, ainsi que la richesse de la composition pluriethnique cimentée par une solide cohésion nationale.`,
  sections: [
    {
      title: 'I. UNE CROISSANCE DÉMOGRAPHIQUE RAPIDE',
      content: [
        `La dynamique d'une population correspond à son évolution numérique dans le temps, mesurée par l'accroissement naturel (différence entre le taux de natalité et le taux de mortalité). Au Sénégal, la population croît à un rythme rapide d'environ 2,7 % à 3 % par an, ce qui conduit à un doublement de la population en moins de 25 ans.`
      ],
      subsections: [
        {
          subtitle: 'A. Les facteurs explicatifs de la poussée démographique',
          content: [
            `• Un taux de natalité qui demeure élevé : Il se situe autour de 32 à 35 naissances pour 1 000 habitants par an. Cette forte natalité est alimentée par un indice synthétique de fécondité élevé (environ 4,5 enfants par femme à l'échelle nationale, avec de fortes disparités entre les villes à 3,5 enfants et les campagnes à plus de 5,5 enfants).`,
            `  - Facteurs socioculturels : Le mariage précoce des jeunes filles en milieu rural, l'attachement traditionnel à la descendance nombreuse perçue comme une bénédiction et une force de travail agricole, et le faible taux d'utilisation de la contraception moderne.`,
            `• Un taux de mortalité en baisse constante : Il est descendu sous la barre des 6 à 7 décès pour 1 000 habitants.`,
            `  - Facteurs sanitaires : L'accès accru à l'eau potable, la généralisation des campagnes de vaccination infantile (PEV - Programme Élargi de Vaccination contre la rougeole, la poliomyélite, le tétanos), la lutte contre le paludisme par les moustiquaires imprégnées, et la multiplication des postes de santé et cases de santé rurales.`,
            `• Conséquence directe : Un accroissement naturel très vigoureux (environ 27 personnes de plus par an pour chaque millier d'habitants).`
          ]
        }
      ]
    },
    {
      title: 'II. LA STRUCTURE PAR ÂGE : UNE POPULATION EXTRÊMEMENT JEUNE',
      content: [
        `La composition par âge de la population sénégalaise est marquée par la prédominance absolue des jeunes classes d'âge : plus de la moitié des Sénégalais (50 %) a moins de 19 ans, et près de 60 % a moins de 25 ans ! Les personnes âgées de 65 ans et plus ne représentent qu'environ 3,5 % du total.`
      ],
      subsections: [
        {
          subtitle: 'A. La pyramide des âges sénégalaise',
          content: [
            `La pyramide des âges est la représentation graphique de la structure d'une population à un instant donné, répartie par sexe (hommes à gauche, femmes à droite) et par tranches d'âges (de 0 à 100 ans de bas en haut).`,
            `• Sa forme au Sénégal : Elle présente une forme caractéristique triangulaire en « parasol » ou « Tour Eiffel » :`,
            `  - Une base extrêmement large : Reflétant le nombre massif de naissances et d'enfants en bas âge (0-14 ans).`,
            `  - Un sommet très étroit et pointu : Reflétant la faible proportion de personnes très âgées et une espérance de vie qui s'améliore progressivement pour atteindre environ 68 ans.`,
            `• Les atouts et les défis géographiques majeurs de cette jeunesse :`,
            `  - Un atout économique immense : Une réserve formidable d'énergie, de main-d'œuvre et de créativité pour l'avenir (le « dividende démographique »).`,
            `  - Des défis gigantesques pour l'État : Construire des milliers de classes, de collèges et de lycées ; recruter et former des enseignants ; équiper les hôpitaux pédiatriques ; et surtout créer des emplois décents pour absorber les 200 000 à 300 000 jeunes qui entrent chaque année sur le marché du travail.`
          ],
          table: {
            headers: ["Tranche d'âge", "Proportion approximative", "Statut démographique", "Besoins socio-économiques prioritaires"],
            rows: [
              ["0 - 14 ans (Enfants)", "~ 42 % de la population", "Dépendants scolaires", "Santé maternelle, vaccination, écoles primaires, collèges"],
              ["15 - 24 ans (Adolescents/Jeunes)", "~ 20 % de la population", "Entrée dans la vie active", "Formation professionnelle, universités, premier emploi"],
              ["25 - 64 ans (Adultes actifs)", "~ 34 % de la population", "Population productive active", "Emplois décents, accès au crédit, logement social"],
              ["65 ans et plus (Aînés)", "~ 4 % de la population", "Troisième âge", "Systèmes de retraite, gériatrie, prise en charge des maladies chroniques"]
            ]
          }
        }
      ]
    },
    {
      title: 'III. LA COMPOSITION ETHNIQUE ET LA COHÉSION SOCIALE DU SÉNÉGAL',
      content: [
        `La population sénégalaise est une mosaïque pluriethnique harmonieuse. Contrairement à de nombreux pays touchés par des tensions communautaires, le Sénégal offre un exemple remarquable d'intégration, de paix civile et de tolérance religieuse.`
      ],
      subsections: [
        {
          subtitle: 'A. Les différents groupes ethniques et les facteurs de paix',
          content: [
            `• Les Wolofs : Groupe majoritaire (environ 43 % de la population). Présents principalement à l'Ouest et au Centre (Bassin arachidier, Dakar, Saint-Louis). La langue wolof sert de lingua franca comprise par plus de 90 % des citoyens.`,
            `• Les Pulaar (Peuls et Toucouleurs) : Représentent environ 24 % des habitants. Établis dans la vallée du Fouta-Toro, le Ferlo (pasteurs transhumants), le Fouladou (Kolda) et les villes.`,
            `• Les Sérères : Environ 15 % de la population, berceau historique dans le Sine-Saloum et le littoral de la Petite Côte. Agriculteurs chevronnés et pêcheurs.`,
            `• Les Jolas (Diolas) : Environ 4 à 5 % de la population, implantés en Basse-Casamance. Maîtres de la riziculture inondée traditionnelle et de la préservation des forêts sacrées.`,
            `• Les Mandingues (Malinkés, Bambaras, Socés) : Environ 4 %, installés en Haute-Casamance, au Sud-Est et le long de la Gambie.`,
            `• Les autres groupes frères : Les Soninkés (le long du haut fleuve à Bakel, grands commerçants et émigrés), les Lébous (presqu'île du Cap-Vert, maîtres de la pêche et coutumes coutumières), les Manjaques, Mancagnes, Balantes, ainsi que les minorités historiques du Sud-Est (Bassaris, Bédiks, Dialonkés).`,
            `• Les ciments de la formidable cohésion nationale :`,
            `  1. Les mariages interethniques constants tissant des liens de parenté indestructibles.`,
            `  2. Le cousinage de plaisanterie (*Kal* en wolof, *Dendiraagal* en pulaar, *Sanaawuya* en mandingue) : Règle séculaire permettant à des membres d'ethnies ou de patronymes différents (ex : Ndiaye et Diop, ou Peuls et Sérères) d'échanger des moqueries amicales pour désamorcer immédiatement toute dispute ou tension.`,
            `  3. La tolérance religieuse exemplaire entre la majorité musulmane (environ 95 %) et la communauté chrétienne (environ 4 à 5 %), célébrant ensemble la Korité, la Tabaski, Pâques et Noël au sein des mêmes familles.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : La Dynamique Démographique du Sénégal',
    root: 'POPULATION SÉNÉGALAISE',
    branches: [
      {
        name: 'CROISSANCE RAPIDE',
        subtitle: 'Accroissement naturel élevé (~ 2,7 %/an)',
        items: [
          'Forte natalité : 32 à 35 ‰ (4,5 enfants par femme)',
          'Baisse de la mortalité infantile : Vaccinations, santé, hygiène',
          'Passage de 3 millions (1960) à plus de 18 millions (aujourd\'hui)'
        ]
      },
      {
        name: 'STRUCTURE JEUNE',
        subtitle: 'Pyramide en parasol / Tour Eiffel',
        items: [
          'Plus de 50 % des habitants ont moins de 19 ans',
          'Base très large d\'enfants et sommet effilé des aînés',
          'Défis majeurs : Écoles, santé pédiatrique, formation et emplois'
        ]
      },
      {
        name: 'COHÉSION SOCIALE',
        subtitle: 'Mosaïque unie et pacifique',
        items: [
          'Ethnies : Wolofs (43%), Pulaar (24%), Sérères (15%), Jolas (5%)...',
          'Cousinage à plaisanterie (Kal / Dendiraagal) : Désamorceur de crises',
          'Tolérance religieuse et mariages interethniques'
        ]
      }
    ]
  },
  senegalMap: {
    mode: 'regional',
    title: 'Répartition régionale et démographique de la population',
    description: 'Visualisation des pôles de population et des grandes aires culturelles du Sénégal.'
  },
  conclusion: `La démographie du Sénégal se distingue par une vitalité remarquable : une jeunesse éclatante qui constitue son plus grand trésor pour construire le pays de demain, alliée à un modèle universel de concorde sociale où les groupes ethniques et les croyances religieuses vivent en parfaite symbiose grâce aux institutions coutumières comme le cousinage à plaisanterie. Le grand défi du XXIe siècle réside dans la formation et l'insertion productive de cette formidable jeunesse.`,
  fullText: `LEÇON 6 : LA DYNAMIQUE DE LA POPULATION SÉNÉGALAISE

CHAPITRE II : LES ASPECTS HUMAINS ET LA POPULATION
I. Une croissance démographique rapide : La population du Sénégal se caractérise par une croissance rapide. Le taux de croissance annuel reste élevé, porté par un fort taux de natalité (nombre élevé de naissances pour 1000 habitants) lié à une fécondité importante, tandis que le taux de mortalité (notamment infantile) est en baisse constante grâce à l'amélioration progressive des soins de santé, de l'hygiène et des campagnes de vaccination.

II. La structure de la population : Cette dynamique engendre une population extrêmement jeune. Plus de la moitié des Sénégalais ont moins de 20 ans. Cette structure se traduit graphiquement par une pyramide des âges à base très large et au sommet très étroit. Cette jeunesse représente à la fois un immense potentiel de main-d'œuvre future et un défi majeur pour l'État en matière d'infrastructures d'éducation, de santé et d'insertion sur le marché de l'emploi.

III. La composition ethnique : La population est pluriethnique mais caractérisée par une forte cohésion sociale. Les principaux groupes ethniques sont les Wolofs (majoritaires), les Pulaar (Peuls, Toucouleurs), les Sereres, les Jolas, les Mandingues, les Soninkés, les Lebous, etc.`
};
