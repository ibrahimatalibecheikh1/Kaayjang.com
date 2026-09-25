import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  Minimize2,
  Type,
  Sun,
  Moon,
  Bookmark,
  Share2,
  Printer,
  ChevronLeft,
  Eye,
  Sparkles,
  TreePine,
  Building2,
  ArrowDown,
  BookOpen,
  FileText,
  CheckCircle2,
  Network,
  Copy,
  Check,
  Award,
  ShieldCheck
} from 'lucide-react';
import { LessonContent, LESSON_1_SVT_6EME } from '../data/courses';
import { SenegalMap } from './SenegalMap';

const isSvt6eme = (id: string): boolean => {
  return id.startsWith('svt-6eme');
};

const getAsciiDiagram = (id: string): string => {
  if (!isSvt6eme(id)) return '';
  switch (id) {
    case 'svt-6eme-lecon-1':
      return `                         [ NOTRE CADRE DE VIE ]
                                   |
        +--------------------------+--------------------------+
        |                                                     |
[ COMPOSANTE BIOLOGIQUE ]                             [ COMPOSANTE PHYSIQUE ]
(Le monde vivant / Biocénose)                        (Le monde non-vivant / Biotope)
        |                                                     |
        +---> La Flore (Végétaux)                             +---> Éléments minéraux naturels
        |                                                     |     (Eau, Air, Roches/Sol)
        +---> La Faune (Animaux)                              |
        |                                                     +---> Aménagements humains
        +---> Les Micro-organismes                                  (Bâtiments, Routes, Ponts)`;
    case 'svt-6eme-lecon-2':
      return `                 [ RELATIONS DANS L'ENVIRONNEMENT ]
                                 |
     +---------------------------+---------------------------+
     |                           |                           |
[ RELATIONS ALIMENTAIRES ]  [ INTERACTIONS INTER-ESPÈCES ]  [ ADAPTATIONS AU MILIEU ]
 (Chaînes et réseaux)         (Coopération / Rivalité)      (Contraintes climatiques)
     |                           |                           |
     +-> Producteurs (Plantes)   +-> Symbiose (Arachide)     +-> Sécheresse (Baobab)
     |                           |                           |
     +-> Consommateurs I, II, III+-> Commensalisme (Héron)   +-> Mangrove (Palétuvier)
     |                           |                           |
     +-> Décomposeurs (Sol)      +-> Parasitisme (Moustique) +-> Aquatique (Poissons)`;
    case 'svt-6eme-lecon-3':
      return `                   [ LA PROTECTION DE NOTRE CADRE DE VIE ]
                                       |
          +----------------------------+----------------------------+
          |                                                         |
[ LES ATTEINTES AU CADRE ]                                [ LES ACTIONS ÉCO-CITOYENNES ]
(Pollutions & Dégradations)                                 (Protection et Préservation)
          |                                                         |
          +---> Déchets abandonnés & caniveaux bouchés              +---> L'élève : Poubelle, propreté,
          |                                                         |     économie d'eau & respect des arbres
          +---> Pollution de l'air (fumées, feux)                   |
          |                                                         +---> L'État & Communes : Collecte des
          +---> Pollution de l'eau (huiles, eaux usées)             |     ordures, curage & lois écologiques
          |                                                         |
          +---> Nuisances sonores (klaxons, bruits)                 +---> Objectifs : Santé (zéro paludisme)
                                                                          & bien-être pour étudier`;
    case 'svt-6eme-lecon-4':
      return `                   [ LES RELATIONS DANS LE MILIEU DE VIE ]
                                       |
          +----------------------------+----------------------------+
          |                                                         |
[ ENTRE LES ÊTRES VIVANTS ]                               [ AVEC LE MILIEU PHYSIQUE ]
(Relations biotiques)                                       (Facteurs abiotiques)
          |                                                         |
          +---> Alimentaires : Producteurs -> Consommateurs         +---> Eau / Humidité : Grenouille, nénuphar,
          |     -> Décomposeurs (chaîne trophique)                  |     adaptations désertiques (cactus)
          |                                                         |
          +---> Support & Habitat : Nids d'oiseaux dans             +---> Température & Lumière : Lézard au soleil,
          |     les arbres, insectes sous écorce                    |     plantes d'ombre
          |                                                         |
          +---> Transport : Pollinisation par abeilles,             +---> Action sur le milieu : Racines anti-érosion,
                graines dispersées par animaux                            rejet d'oxygène et fraîcheur`;
    case 'svt-6eme-lecon-5':
      return `                   [ LE PEUPLEMENT SELON LES SAISONS ]
                                   |
         +-------------------------+-------------------------+
         |                                                   |
[ CHEZ LES ANIMAUX ]                                [ CHEZ LES VÉGÉTAUX ]
(Mobilité & Métamorphoses)                           (Adaptations sur place)
         |                                                   |
         +---> Migration (Hirondelles, Cigognes)             +---> Plantes Vivaces :
         |                                                   |     • Chute des feuilles & bourgeons
         +---> Hibernation (Marmotte, Hérisson)              |     • Organes souterrains (bulbes, rhizomes)
         |                                                   |
         +---> Changement de forme :                         +---> Plantes Annuelles :
               Œufs, larves, chrysalides dans le sol               Disparition de la plante & graines`;
    case 'svt-6eme-lecon-6':
      return `                   [ LA CLASSIFICATION SCIENTIFIQUE DES ÊTRES VIVANTS ]
                                           |
         +---------------------------------+---------------------------------+
         |                                                                   |
[ CLASSIFICATION DES ANIMAUX ]                                      [ CLASSIFICATION DES VÉGÉTAUX ]
(Selon le squelette et les attributs)                               (Selon organes et reproduction)
         |                                                                   |
         +---> VERTÉBRÉS (colonne vertébrale) :                              +---> SPERMAPHYTES (Plantes à graines) :
         |     • Mammifères (poils, mamelles : vache, Homme)                 |     • Angiospermes (fleurs, fruit : manguier)
         |     • Oiseaux (plumes, ailes, bec : poule, pigeon)                |     • Gymnospermes (graines nues sur cône : pin)
         |     • Reptiles (écailles soudées : lézard, tortue)                |
         |     • Amphibiens (peau nue et humide : grenouille)                +---> PTÉRIDOPHYTES (Fougères) :
         |     • Poissons (écailles libres, nageoires : tilapia)             |     Racines, tiges, frondes, spores sans fleurs
         |                                                                   |
         +---> INVERTÉBRÉS (sans colonne) :                                  +---> BRYOPHYTES (Mousses) :
               • Arthropodes (pattes articulées & carapace)                  |     Sans vraies racines ni canaux pour sève
                 - Insectes (6 pattes : criquet, abeille)                    |
                 - Arachnides (8 pattes : araignée, scorpion)                +---> THALLOPHYTES (Algues) :
                 - Crustacés (10 pattes ou plus : crabe, crevette)                 Corps simple en thalle non différencié
               • Mollusques (corps mou, coquille : escargot, moule)
               • Annélides (corps mou annelé : ver de terre)`;
    case 'svt-6eme-lecon-7':
      return `                   [ LES COMPOSANTS DES ÊTRES VIVANTS ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
[ NIVEAU CHIMIQUE ]                                     [ NIVEAU BIOLOGIQUE ]
(Matière constitutive)                                  (Cellules & Niveaux d'organisation)
         |                                                       |
         +---> Composants minéraux :                             +---> Structure cellulaire :
         |     • Eau (H₂O) : Réactions & transports              |     • Membrane plasmique (protection & échanges)
         |     • Sels : Calcium (os), Fer (sang), P, Na, K       |     • Cytoplasme (milieu liquide & organites)
         |                                                       |     • Matériel génétique (instructions ADN)
         +---> Composants organiques :                           |
               • Glucides : Énergie immédiate (glucose)          +---> Types de cellules :
               • Lipides : Réserves & membranes (huiles)         |     • Procaryote : Sans noyau vrai (bactéries)
               • Protides : Bâtisseurs & enzymes                 |     • Eucaryote : Noyau, mitochondries, chloroplastes
               • Acides nucléiques : Hérédité (ADN/ARN)          |
                                                                 +---> Niveaux d'organisation :
                                                                       Cellule ➔ Tissu ➔ Organe ➔ Système ➔ Organisme`;
    case 'svt-6eme-lecon-8':
      return `                   [ LA NUTRITION CHEZ LES ANIMAUX ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
[ MODES & ADAPTATIONS ]                                 [ ÉTAPES DE LA NUTRITION ]
(Régimes et appareils digestifs)                        (De l'aliment aux cellules)
         |                                                       |
         +---> Les régimes alimentaires :                        +---> 1. Ingestion :
         |     • Herbivore : Végétaux (vache, lapin)             |     Bouche, mastication (dents) & salive
         |     • Carnivore : Chair (lion, requin, aigle)         |
         |     • Omnivore : Végétaux & animaux (Homme, porc)     +---> 2. Digestion (mécanique & chimique) :
         |     • Détrivore : Matière en décomposition (ver)      |     Glucides ➔ Glucose | Protides ➔ Acides aminés
         |     • Parasite : Aux dépens d'un hôte (ténia)         |     Lipides ➔ Acides gras & glycérol
         |                                                       |
         +---> Adaptations du tube digestif :                    +---> 3. Absorption & 4. Assimilation :
               • Carnivore : Tube court, crocs & griffes         |     Villosités intestinales ➔ Sang ➔ Cellules
               • Herbivore : Tube très long, estomac complexe    |
               • Homme : Tube équilibré complet                  +---> 5. Égestion & élimination :
                                                                       Rejet fèces (anus) & élimination urée (reins)`;
    case 'svt-6eme-lecon-9':
      return `                   [ LA NUTRITION CHEZ LES PLANTES ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
[ BESOINS & MODES ]                                     [ ÉTAPES DE LA NUTRITION ]
(Minéraux, CO₂ et Soleil)                               (Absorption, Photosynthèse, Transport)
         |                                                       |
         +---> Besoins nutritifs :                               +---> 1. Absorption :
         |     • Éléments minéraux : Eau + Sels (sol)            |     • Racines (poils absorbants) : Eau + sels minéraux
         |     • Gaz : Dioxyde de carbone CO₂ (air)              |     • Feuilles (stomates) : Dioxyde de carbone CO₂
         |     • Énergie lumineuse : Soleil                      |
         |                                                       +---> 2. Photosynthèse (dans les chloroplastes) :
         +---> Autres modes de nutrition :                       |     CO₂ + H₂O + Lumière ➔ Glucose + O₂ rejeté
               • Parasites : Prélèvent la sève (cuscute)         |
               • Carnivores : Capture d'insectes (dionée)        +---> 3. Transport des sèves :
               • Saprophytes : Matière en décomposition          |     • Sève brute montante (Xylème) : Eau + sels
                                                                 |     • Sève élaborée descendante (Phloème) : Glucose
                                                                 |
                                                                 +---> 4. Utilisation & Réserves :
                                                                       Croissance & stockage d'amidon (tubercules, graines)`;
    case 'svt-6eme-lecon-10':
      return `                   [ LA REPRODUCTION CHEZ LES ÊTRES VIVANTS ]
                                       |
         +-----------------------------+-----------------------------+
         |                                                           |
[ REPRODUCTION ASEXUÉE ]                                    [ REPRODUCTION SEXUÉE ]
(1 parent • Sans gamètes • Clones)                          (2 parents • Gamètes • Diversité)
         |                                                           |
         +---> Modes asexués :                                       +---> Étapes clés :
         |     • Scissiparité (bactérie, paramécie)                  |     • Gamétogenèse : Spermatozoïde & Ovule
         |     • Bourgeonnement (levure, hydre)                      |     • Fécondation : Interne ou externe ➔ Zygote
         |     • Fragmentation (étoile de mer, vers)                 |     • Développement : Embryon puis naissance
         |     • Sporulation (champignon, mousse)                    |
         |     • Végétative : Stolons, tubercules, boutures          +---> Chez les animaux :
         |                                                           |     • Ovipares : Œuf pondu à l'extérieur (poule)
         +---> Avantages & Limites :                                 |     • Vivipares : Utérus & placenta (Homme, vache)
               • Multiplication rapide et abondante                  |     • Ovovivipares : Éclosion dans la mère (vipère)
               • Absence de diversité (vulnérabilité)                |
                                                                     +---> Chez les plantes à fleurs :
                                                                           Pollinisation ➔ Fécondation ➔ Graine & Fruit`;
    case 'svt-6eme-lecon-11':
      return `                   [ LA CLASSIFICATION DES ÊTRES VIVANTS ]
                                       |
    +----------------------------------+----------------------------------+
    |                                                                     |
[ LES 5 GRANDS RÈGNES DU VIVANT ]                                 [ HIÉRARCHIE TAXINOMIQUE ]
    |                                                                     |
    +---> 1. Monères : Procaryotes unicellulaires sans noyau (Bactéries)  +---> RÈGNE (ex. Animal)
    |                                                                     |        |
    +---> 2. Protistes : Eucaryotes simples (Amibe, Paramécie)            +---> EMBRANCHEMENT (Vertébrés)
    |                                                                     |        |
    +---> 3. Champignons : Eucaryotes hétérotrophes à chitine (Levures)   +---> CLASSE (Mammifères)
    |                                                                     |        |
    +---> 4. Végétaux : Eucaryotes autotrophes chlorophylliens (Plantes)  +---> ORDRE (Primates)
    |                                                                     |        |
    +---> 5. Animaux : Eucaryotes hétérotrophes mobiles (Homme, Faune)    +---> FAMILLE (Hominidés)
                                                                          |        |
                                                                          +---> GENRE (Homo)
                                                                          |        |
                                                                          +---> ESPÈCE (Homo sapiens)`;
    case 'francais-6eme-lecon-1':
      return `                   [ LA PHONÉTIQUE FRANÇAISE : SONS ET LETTRES ]
                                         |
         +-------------------------------+-------------------------------+
         |                                                               |
  [ LA GRAPHIE (L'ÉCRIT) ]                                    [ LE PHONÈME (L'ORAL) ]
  • 26 lettres dans l'alphabet                                • 36 sons fondamentaux en français
  • Signes visuels écrits                                     • Notés entre crochets de l'API : [ ]
         |                                                               |
         +---> 6 voyelles écrites (a, e, i, o, u, y)                  +---> 16 Voyelles :
         |                                                            |     • Orales : [a], [i], [u], [o]...
         +---> 20 consonnes écrites (b, c, d, f...)                   |     • Nasales : [ɑ̃] (an), [ɛ̃] (in), [ɔ̃] (on)
         |                                                            |
         +---> Digrammes & lettres muettes :                          +---> 17 Consonnes :
               • « chat » : 4 lettres ➔ 2 sons [ʃ] et [a]                   • Blocage de l'air ([p], [t], [k], [f], [s])
               • « banc » : 4 lettres ➔ 2 sons [b] et [ɑ̃]
               • « oiseau » : 6 lettres ➔ 4 sons [w][a][z][o]         +---> 3 Semi-voyelles :
                                                                            • [j] (fille, yeux), [w] (oui), [ɥ] (nuit)`;
    case 'francais-6eme-lecon-2':
      return `                     [ LES 16 VOYELLES DU FRANÇAIS ]
                                    |
         +--------------------------+--------------------------+
         |                                                     |
  [ VOYELLES ORALES (12 sons) ]                         [ VOYELLES NASALES (4 sons) ]
  • Voile du palais RELEVÉ                              • Voile du palais ABAISSÉ
  • L'air sort uniquement par la bouche                 • L'air sort par la bouche ET le nez
         |                                                     |
         +---> Voyelles de base :                              +---> [ɛ̃] : brin, train, pain, matin
         |     • [a] : papa, sac                               +---> [ɑ̃] : banc, vent, enfant, temps
         |     • [i] : midi, stylo                             +---> [ɔ̃] : rond, pont, pantalon
         |     • [u] : loup, genou                             +---> [œ̃] : un, parfum, brun
         |     • [y] : rue, tissu
         |
         +---> Voyelles fermées / ouvertes :
         |     • [e] (café) / [ɛ] (père, fête)
         |     • [o] (moto) / [ɔ] (porte)
         |     • [ø] (deux) / [œ] (fleur)
         |     • [ə] (le, petit)
         |     • [ɑ] (pâte, âne)`;
    case 'francais-6eme-lecon-3':
      return `                   [ LES CONSONNES (17) ET SEMI-VOYELLES (3) ]
                                        |
         +------------------------------+------------------------------+
         |                              |                              |
  [ CONSONNES ORALES (12) ]      [ NASALES & LIQUIDES (5) ]     [ SEMI-VOYELLES (3) ]
  • Obstacle dans la bouche      • Nasales : [m], [n],          • Sons intermédiaires
  • 6 sourdes (sans vibration) :   [ɲ] (pagne), [ŋ] (parking)   • [j] (Yod) : fille, pied
    [p], [t], [k], [f], [s], [ʃ] • Liquides : [l], [ʁ]          • [w] : oui, oiseau, moi
  • 6 sonores (vibration) :                                     • [ɥ] : lui, nuit, cuisine
    [b], [d], [g], [v], [z], [ʒ]`;
    case 'francais-6eme-lecon-4':
      return `                   [ LES FORMES DE PHRASES EN FRANÇAIS ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
  [ FORME AFFIRMATIVE ]                                   [ FORME NÉGATIVE ]
  • Déclare qu'un fait est vrai ou se réalise             • Déclare qu'une action ne se réalise pas
  • Dit « oui », affirme l'action                         • Dit « non », réfute l'action
  • Exemple : Le professeur explique.                     • Négation : Ne ... pas / plus / jamais
         |                                                               : Ne ... rien / personne / guère
         +---> Transformations des articles :                    |
               • un, une, des, du, de la ➔ « de » ou « d' »       +---> Place de la négation :
               • Ex : « Il mange des mangues »                         • Temps simple : Samba ne part pas.
                 ➔ « Il ne mange pas de mangues »                      • Temps composé : Samba n'est pas parti.
               • Exception : être (« Ce n'est pas un ami »)            • Infinitif : Prière de ne pas parler.`;
    case 'francais-6eme-lecon-5':
      return `        [ CONSTITUANTS DE LA PHRASE SIMPLE : PHRASE = GNS + GV ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
  [ GROUPE NOMINAL SUJET (GNS) ]                          [ GROUPE VERBAL (GV) ]
  • De qui ou de quoi on parle                           • Ce que fait le sujet ou ce qu'il est
  • « Qui est-ce qui ? » / « Qu'est-ce qui ? »           • Noyau obligatoire : Verbe conjugué
         |                                                       |
         +---> Formes possibles du GNS :                         +---> Structure 1 : Verbe intransitif
         |     • Nom propre : Awa                                |     • Le soleil brille. (GV = brille seul)
         |     • Pronom : Ils, Elle                              |
         |     • Déterminant + Nom : Le navet                    +---> Structure 2 : Verbe transitif (+ complément)
         |     • Nom enrichi : Le jeune écolier                  |     • Avec COD direct : cultive le mil.
         |                                                       |     • Avec COI indirect : obéit à ses parents.
         |                                                       |
         |                                                       +---> Structure 3 : Verbe d'état (+ attribut)
         |                                                             • devient très grande. (Attribut du sujet)`;
    case 'francais-6eme-lecon-6':
      return `                     [ LE SUJET DU VERBE (GRAMMAIRE) ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
  [ FONCTION & IDENTIFICATION ]                          [ CLASSES GRAMMATICALES ]
  • Fait l'action ou est dans l'état                     • Nom propre : Fatou, Ousmane
  • Commande l'accord en personne et nombre              • Groupe nominal (GN) : Le vieux pêcheur
  • Question clé : « Qui est-ce qui ? » (personne)       • Pronom personnel : Ils, Elle, Nous
  • Question clé : « Qu'est-ce qui ? » (chose)           • Verbe à l'infinitif : Marcher, Étudier
  • Formule de test : « C'est ... qui »                  • Pronom démonstratif / possessif`;
    case 'francais-6eme-lecon-7':
      return `              [ PRÉSENT DE L'INDICATIF (1er ET 2ème GROUPE) ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
  [ 1ER GROUPE : Verbes en -er ]                         [ 2ÈME GROUPE : Verbes en -ir (-issant) ]
  • Radical de l'infinitif sans -er                      • Radical de l'infinitif sans -ir
  • Terminaisons régulières :                            • Terminaisons régulières :
    - Je : -e       (j'habite)                             - Je : -is         (je finis)
    - Tu : -es      (tu habites)                           - Tu : -is         (tu finis)
    - Il/Elle : -e  (il habite)                            - Il/Elle : -it    (il finit)
    - Nous : -ons   (nous habitons)                        - Nous : -issons   (nous finissons)
    - Vous : -ez    (vous habitez)                         - Vous : -issez    (vous finissez)
    - Ils : -ent    (ils habitent)                         - Ils : -issent    (ils finissent)`;
    case 'francais-6eme-lecon-9':
      return `              [ PRÉSENT DE L'INDICATIF : LES VERBES DU 3ÈME GROUPE ]
                                         |
         +-------------------------------+-------------------------------+
         |                               |                               |
  [ TERMINAISONS FRÉQUENTES ]     [ VERBES EN -DRE ET -TRE ]      [ VERBES PARTICULIERS ]
  • -s, -s, -t, -ons, -ez, -ent   • -dre ➔ -ds, -ds, -d           • Pouvoir & Vouloir :
  • Partir : je pars, tu pars,      Vendre : je vends, il vend      -x, -x, -t, -ons, -ez, -ent
    il part, nous partons...      • Attention : Prendre ➔ prenons • Verbes à mémoriser :
  • Voir : je vois, tu vois,      • -tre ➔ -ts, -ts, -t             Être, Avoir, Aller,
    il voit, nous voyons...         Mettre : je mets, il met        Faire, Dire (voir tableau)`;
    default:
      return `              [ CYCLE CONTINU DE LA MATIÈRE VIVANTE ]
                                  |
       +--------------------------+--------------------------+
       |                                                     |
 [ PRODUCTEURS PRIMAIRES ]                             [ PRODUCTEURS SECONDAIRES ]
  (Plantes autotrophes)                                   (Animaux hétérotrophes)
       |                                                     |
       +-> Eau + Sels minéraux du sol                        +-> Phytophages (broutent les plantes)
       |                                                     |
       +-> CO₂ atmosphérique capté par feuilles              +-> Zoophages (chassent d'autres animaux)
       |                                                     |
       +-> Énergie solaire (Photosynthèse)                   +-> Digestion en nutriments & croissance
                                                             |
                                                             v
                                                   [ LES DÉCOMPOSEURS ]
                                                   (Vers, Cloportes, Champignons)
                                                             |
                                                             +-> Recyclent cadavres & litière
                                                             +-> Restituent la matière minérale au sol`;
  }
};

interface FullscreenLessonViewerProps {
  lesson?: LessonContent;
  onBack?: () => void;
}

export const FullscreenLessonViewer: React.FC<FullscreenLessonViewerProps> = ({
  lesson = LESSON_1_SVT_6EME,
  onBack
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [lessonTab, setLessonTab] = useState<'structured' | 'diagram' | 'exercises' | 'raw'>('structured');
  const [rawCopied, setRawCopied] = useState(false);
  const [rawFontSize, setRawFontSize] = useState<'normal' | 'large'>('normal');

  const handleCopyRaw = () => {
    if (lesson.fullText && navigator.clipboard) {
      navigator.clipboard.writeText(lesson.fullText);
      setRawCopied(true);
      setTimeout(() => setRawCopied(false), 2500);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const cycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('sepia');
    else if (theme === 'sepia') setTheme('dark');
    else setTheme('light');
  };

  const handlePrint = () => {
    window.print();
  };

  const themeClasses = {
    light: 'bg-white text-gray-900 border-gray-200',
    sepia: 'bg-[#FAF6EE] text-[#433422] border-[#E8DFC8]',
    dark: 'bg-[#121826] text-gray-100 border-gray-800'
  };

  const cardClasses = {
    light: 'bg-gray-50 border-gray-200 text-gray-800',
    sepia: 'bg-[#F2EADA] border-[#DECDB3] text-[#433422]',
    dark: 'bg-[#1E293B] border-gray-700 text-gray-200'
  };

  const fontClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    xlarge: 'text-lg sm:text-xl leading-relaxed'
  };

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 overflow-y-auto px-2 sm:px-4 py-3 sm:py-6'
          : 'w-full px-1 sm:px-3 md:px-4 py-2'
      } ${themeClasses[theme]}`}
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Top Control Bar for Mobile & Desktop */}
        <div
          className={`sticky top-0 z-30 mb-3 sm:mb-4 px-3 py-2.5 rounded-xl backdrop-blur-md shadow-xs flex items-center justify-between border ${
            theme === 'dark'
              ? 'bg-gray-900/90 border-gray-800'
              : theme === 'sepia'
              ? 'bg-[#F3ECE0]/90 border-[#E4D9C3]'
              : 'bg-white/90 border-gray-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                onClick={onBack}
                className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition text-inherit flex items-center gap-1 text-xs font-semibold"
                aria-label="Retour aux leçons"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden xs:inline">Retour</span>
              </button>
            )}
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-600 text-white tracking-wide uppercase">
              {lesson.number}
            </span>
          </div>

          {/* Reading tools */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* View Mode Toggle */}
            <button
              onClick={() => setLessonTab(lessonTab === 'structured' ? 'raw' : 'structured')}
              className="px-2 py-1 text-xs rounded-lg border border-current opacity-80 hover:opacity-100 transition flex items-center gap-1"
              title="Changer d'onglet"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {lessonTab === 'structured' ? 'Texte brut' : 'Vue enrichie'}
              </span>
            </button>

            {/* Font Size Toggle */}
            <button
              onClick={cycleFontSize}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
              title={`Taille du texte : ${fontSize}`}
              aria-label="Changer la taille du texte"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
              title={`Mode : ${theme}`}
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Print / Save */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition hidden sm:block"
              title="Imprimer ou enregistrer"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Fullscreen Full Width Toggle */}
            <button
              onClick={toggleFullscreen}
              className={`p-1.5 rounded-lg transition flex items-center gap-1 text-xs font-semibold ${
                isFullscreen
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300'
              }`}
              title={isFullscreen ? 'Quitter le plein écran' : 'Lire en plein écran (toute la largeur)'}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Réduire</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden xs:inline">Plein Écran</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Container - Takes 100% of phone width */}
        <article className={`w-full rounded-2xl p-3 sm:p-6 md:p-8 ${cardClasses[theme]} ${fontClasses[fontSize]}`}>
          {/* Main Title Header */}
          <div className="pb-5 mb-6 border-b border-current/15 text-center sm:text-left">
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Programme de {lesson.subject} • Classe de {lesson.classLevel}
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mt-1">
              {lesson.number} : {lesson.title}
            </h1>
            <p className="text-xs sm:text-sm opacity-75 mt-1 font-medium">
              Version officielle intégrale sénégalaise (Sans résumé)
            </p>
          </div>

          {/* Onglets de la leçon */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 pb-4 border-b border-current/15">
            <button
              onClick={() => setLessonTab('structured')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                lessonTab === 'structured'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 opacity-80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cours Structuré</span>
            </button>

            {lesson.diagram && (
              <button
                onClick={() => setLessonTab('diagram')}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  lessonTab === 'diagram'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 opacity-80'
                }`}
              >
                <Network className="w-3.5 h-3.5" />
                <span>Schéma & Diagramme</span>
              </button>
            )}

            {lesson.sections.some(s => s.title.toLowerCase().includes('exercice') || s.subsections?.some(sub => sub.subtitle.toLowerCase().includes('corrigé'))) && (
              <button
                onClick={() => setLessonTab('exercises')}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  lessonTab === 'exercises'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 opacity-80'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Exercices & Corrigés</span>
              </button>
            )}

            <button
              onClick={() => setLessonTab('raw')}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                lessonTab === 'raw'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 opacity-80'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Texte Brut Officiel</span>
            </button>
          </div>

          {lessonTab === 'raw' ? (
            /* Affichage du Texte Brut Officiel : Stylé et magnifique dans un fond blanc */
            <div className="space-y-6">
              <div className="bg-white text-slate-900 border border-slate-200/90 shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 transition-all relative overflow-hidden">
                {/* Ruban tricolore officiel de la République du Sénégal */}
                <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-emerald-600 via-amber-400 to-rose-600" />

                {/* En-tête officiel du document ministériel */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 shadow-xs">
                      <span className="text-2xl">🇸🇳</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-xs sm:text-sm tracking-wider text-slate-900 uppercase">
                          RÉPUBLIQUE DU SÉNÉGAL
                        </span>
                        <span className="text-amber-500 font-black">★</span>
                      </div>
                      <p className="text-[11px] font-serif italic text-slate-500">Un Peuple — Un But — Une Foi</p>
                      <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide mt-0.5">
                        MINISTÈRE DE L'ÉDUCATION NATIONALE
                      </p>
                      <p className="text-[11px] text-slate-500">Direction de l'Enseignement Moyen et Secondaire Général</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-1.5 self-start md:self-auto">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
                      {lesson.classLevel ? `${lesson.classLevel} • ${lesson.subject}` : 'DOCUMENT OFFICIEL'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Texte Intégral Sans Résumé</span>
                    </span>
                  </div>
                </div>

                {/* Barre d'outils du document sur fond blanc */}
                <div className="flex flex-wrap items-center justify-between gap-3 py-4 my-2 border-b border-slate-100 bg-slate-50/70 -mx-5 sm:-mx-8 md:-mx-12 px-5 sm:px-8 md:px-12">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span>{lesson.fullText.trim().split(/\s+/).filter(Boolean).length.toLocaleString('fr-FR')} mots</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>~{Math.max(1, Math.ceil(lesson.fullText.trim().split(/\s+/).filter(Boolean).length / 180))} min de lecture</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Sélecteur de taille de texte */}
                    <div className="flex items-center bg-white rounded-xl border border-slate-200 p-0.5 shadow-2xs">
                      <button
                        onClick={() => setRawFontSize('normal')}
                        className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                          rawFontSize === 'normal' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'
                        }`}
                        title="Taille de texte normale"
                      >
                        A
                      </button>
                      <button
                        onClick={() => setRawFontSize('large')}
                        className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                          rawFontSize === 'large' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'
                        }`}
                        title="Agrandir la police"
                      >
                        A+
                      </button>
                    </div>

                    {/* Bouton Copier */}
                    <button
                      onClick={handleCopyRaw}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs cursor-pointer"
                      title="Copier tout le texte officiel"
                    >
                      {rawCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-extrabold">Copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copier</span>
                        </>
                      )}
                    </button>

                    {/* Bouton Imprimer / PDF */}
                    <button
                      onClick={handlePrint}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs cursor-pointer"
                      title="Imprimer ou enregistrer en PDF"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Imprimer / PDF</span>
                    </button>
                  </div>
                </div>

                {/* Corps du texte officiel sur fond blanc immaculé */}
                <div className="pt-4">
                  <pre
                    className={`whitespace-pre-wrap font-sans text-slate-900 select-text leading-relaxed md:leading-loose tracking-normal overflow-x-auto ${
                      rawFontSize === 'large'
                        ? 'text-sm sm:text-base md:text-lg'
                        : 'text-xs sm:text-sm md:text-base'
                    }`}
                  >
                    {lesson.fullText}
                  </pre>
                </div>

                {/* Pied de page certifié */}
                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Document pédagogique officiel conforme aux programmes des lycées du Sénégal</span>
                  </div>
                  <span className="font-semibold text-slate-700">Texte Intégral National — République du Sénégal</span>
                </div>
              </div>
            </div>
          ) : lessonTab === 'diagram' && lesson.diagram ? (
            /* Diagramme & Schéma Tab */
            <div className="space-y-6">
              <div className="p-4 sm:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20">
                <div className="text-center mb-6">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                    Schéma Bilan Pédagogique
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 dark:text-gray-100 mt-2">
                    {lesson.diagram.title}
                  </h3>
                  <div className="inline-block mt-3 px-4 py-2 bg-indigo-600 text-white font-black text-xs sm:text-sm rounded-xl shadow-xs">
                    {lesson.diagram.root}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {lesson.diagram.branches.map((branch, bIdx) => (
                    <div key={bIdx} className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-indigo-100 dark:border-indigo-900 shadow-xs">
                      <h4 className="font-extrabold text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">
                        {branch.name}
                      </h4>
                      {branch.subtitle && (
                        <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium mb-3">
                          {branch.subtitle}
                        </p>
                      )}
                      <ul className="space-y-1.5 text-xs">
                        {branch.items.map((it, itIdx) => (
                          <li key={itIdx} className="flex items-start gap-1.5">
                            <span className="text-indigo-500 font-bold">•</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arborescence Structurée en caractères (uniquement pour SVT de 6ème) */}
              {isSvt6eme(lesson.id) && (
                <div className="p-4 rounded-xl bg-black/5 dark:bg-black/30 border border-current/10">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 text-indigo-600 dark:text-indigo-400">
                    Représentation Arborescente Structurée
                  </h4>
                  <pre className="font-mono text-[10px] sm:text-xs overflow-x-auto leading-relaxed opacity-85">
                    {getAsciiDiagram(lesson.id)}
                  </pre>
                </div>
              )}
            </div>
          ) : lessonTab === 'exercises' ? (
            /* Exercices & Corrigés Tab */
            <div className="space-y-6">
              {lesson.sections
                .filter(s => s.title.toLowerCase().includes('exercice') || s.subsections?.some(sub => sub.subtitle.toLowerCase().includes('corrigé')))
                .map((section, sIdx) => (
                  <div key={sIdx} className="p-4 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-4">
                    <h3 className="text-base sm:text-lg font-black text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                      {section.title}
                    </h3>
                    {section.content && (
                      <div className="space-y-2">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed font-medium">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}
                    {section.subsections && (
                      <div className="pt-3 space-y-3 border-t border-amber-500/20">
                        {section.subsections.map((sub, subIdx) => (
                          <div key={subIdx} className="p-3.5 rounded-xl bg-white/70 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-800">
                            <h4 className="font-bold text-sm text-amber-900 dark:text-amber-200 mb-2">
                              {sub.subtitle}
                            </h4>
                            <div className="space-y-1.5 text-xs sm:text-sm">
                              {sub.content.map((p, pIdx) => (
                                <p key={pIdx} className="leading-relaxed">
                                  {p}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            /* Structured, Rich & Professional View, 100% compliant with the original text */
            <div className="space-y-6 sm:space-y-8">
              {/* INTRODUCTION */}
              <section className="p-4 sm:p-5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h2 className="text-base sm:text-lg font-bold tracking-wide uppercase text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  INTRODUCTION
                </h2>
                <p className="leading-relaxed opacity-90">{lesson.introduction}</p>
              </section>

              {/* CARTE DU SÉNÉGAL (Pour les leçons ayant un lien avec la carte) */}
              {lesson.senegalMap && (
                <SenegalMap
                  initialMode={lesson.senegalMap.mode}
                  title={lesson.senegalMap.title}
                  description={lesson.senegalMap.description}
                  highlightedFeatures={lesson.senegalMap.highlightedFeatures}
                />
              )}

              {/* DYNAMIC SECTIONS & DIAGRAM */}
              {lesson.sections.map((section, sIdx) => {
                const sectionColorClasses = [
                  'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400',
                  'bg-indigo-500/10 border-indigo-500/20 text-indigo-700 dark:text-indigo-400',
                  'bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400',
                  'bg-cyan-500/10 border-cyan-500/20 text-cyan-700 dark:text-cyan-400',
                ];
                const headerClass = sectionColorClasses[sIdx % sectionColorClasses.length];

                return (
                  <section key={sIdx} className="space-y-4">
                    <div className={`p-3 rounded-xl border ${headerClass}`}>
                      <h2 className="text-base sm:text-lg font-extrabold tracking-wide">
                        {section.title}
                      </h2>
                    </div>

                    {section.content && (
                      <div className="space-y-2">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx} className="opacity-90 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.image && (
                      <div className="my-4 overflow-hidden rounded-2xl border border-current/15 shadow-sm bg-white dark:bg-slate-900/90">
                        {section.image.svgContent ? (
                          <div
                            className="w-full p-3 sm:p-5 flex justify-center items-center overflow-x-auto text-slate-800 dark:text-slate-100"
                            dangerouslySetInnerHTML={{ __html: section.image.svgContent }}
                          />
                        ) : section.image.url && section.image.url.trim().startsWith('<svg') ? (
                          <div
                            className="w-full p-3 sm:p-5 flex justify-center items-center overflow-x-auto text-slate-800 dark:text-slate-100"
                            dangerouslySetInnerHTML={{ __html: section.image.url }}
                          />
                        ) : (
                          <img
                            src={section.image.url}
                            alt={section.image.alt || section.title}
                            className={`w-full ${section.image.url?.includes('data:image/svg') || section.image.url?.endsWith('.svg') ? 'max-h-96 object-contain p-3 sm:p-5' : 'max-h-80 object-cover'} object-center`}
                            referrerPolicy="no-referrer"
                          />
                        )}
                        {section.image.caption && (
                          <div className="p-2.5 text-xs text-center font-medium opacity-90 italic bg-black/5 dark:bg-white/5 border-t border-current/10">
                            {section.image.caption}
                          </div>
                        )}
                      </div>
                    )}

                    {section.jobCards && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
                        {section.jobCards.map((job, jIdx) => (
                          <div
                            key={jIdx}
                            className="rounded-2xl border border-current/15 overflow-hidden bg-white dark:bg-gray-800 shadow-sm flex flex-col justify-between"
                          >
                            <div>
                              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/70 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center p-2">
                                <img
                                  src={job.imageUrl}
                                  alt={job.jobTitle}
                                  className="max-h-full max-w-full object-contain rounded-lg shadow-xs hover:scale-105 transition-transform duration-300"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                                  {job.sector}
                                </div>
                              </div>

                              <div className="p-4 sm:p-5 space-y-3">
                                <div className="border-b border-current/10 pb-2.5">
                                  <div className="flex items-baseline justify-between gap-2">
                                    <h3 className="text-lg font-black text-blue-600 dark:text-blue-400">
                                      {job.jobTitle}
                                    </h3>
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300">
                                      {job.frenchTitle}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 italic">
                                    {job.definition}
                                  </p>
                                </div>

                                <div className="text-xs bg-black/2 dark:bg-white/5 p-2.5 rounded-xl border border-current/10">
                                  <span className="font-bold text-indigo-600 dark:text-indigo-400">Lieu & Outils : </span>
                                  <span className="opacity-90">{job.toolsAndPlaces}</span>
                                </div>

                                <div>
                                  <span className="text-[11px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 block mb-1.5">
                                    Key Vocabulary (Vocabulaire clé) :
                                  </span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {job.keyVocabulary.map((voc, vIdx) => (
                                      <span
                                        key={vIdx}
                                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                                      >
                                        {voc}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <span className="text-[11px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 block mb-1.5">
                                    Examples in English (Phrases types) :
                                  </span>
                                  <div className="space-y-1.5 text-xs">
                                    {job.exampleSentences.map((sent, sIdx) => (
                                      <div key={sIdx} className="p-2 rounded-lg bg-black/2 dark:bg-white/5 border-l-2 border-blue-500 pl-2.5">
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">{sent.split(' • ')[0]}</p>
                                        {sent.includes(' • ') && (
                                          <p className="text-[11px] text-gray-500 dark:text-gray-400 italic mt-0.5">{sent.split(' • ')[1]}</p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.table && (
                      <div className="overflow-x-auto my-3 rounded-xl border border-current/20 shadow-xs">
                        <table className="min-w-full text-left text-xs sm:text-sm divide-y divide-current/15">
                          <thead className="bg-blue-600/10 dark:bg-blue-900/30 font-bold">
                            <tr>
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-3 sm:px-4 py-2.5 font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-current/10 font-medium">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-black/2 dark:bg-white/2' : ''}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className={`px-3 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap ${cIdx === 0 ? 'font-bold text-blue-600 dark:text-blue-400' : ''}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Diagram Display */}
                    {sIdx === (lesson.id === 'svt-6eme-lecon-1' ? 1 : 0) && lesson.diagram && (
                      <div className="my-6 p-4 sm:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20">
                        <div className="text-center mb-4">
                          <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
                            {lesson.diagram.title || 'Schéma Récapitulatif'}
                          </span>
                          <div className="mt-1 inline-block px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-extrabold text-sm sm:text-base shadow-xs">
                            [ {lesson.diagram.root} ]
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                          {lesson.diagram.branches.map((branch, bIdx) => (
                            <div
                              key={bIdx}
                              className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-white/70 dark:bg-gray-900/70 shadow-xs"
                            >
                              <div className="text-center pb-2 mb-3 border-b border-indigo-100 dark:border-indigo-800/60">
                                <span className="font-extrabold text-indigo-900 dark:text-indigo-300 text-xs sm:text-sm">
                                  [ {branch.name} ]
                                </span>
                                {branch.subtitle && (
                                  <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                                    ({branch.subtitle})
                                  </div>
                                )}
                              </div>
                              <div className="space-y-2 text-xs sm:text-sm">
                                {branch.items.map((item, iIdx) => (
                                  <div key={iIdx} className="flex items-start gap-2">
                                    <span className="text-indigo-500 font-bold">↳</span>
                                    <span className="opacity-90">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Arbre ASCII en caractères accessible uniquement pour SVT de 6ème */}
                        {isSvt6eme(lesson.id) && (
                          <details className="mt-4 pt-3 border-t border-indigo-200/60 dark:border-indigo-900/60">
                            <summary className="text-xs text-indigo-700 dark:text-indigo-400 font-semibold cursor-pointer hover:underline">
                              Afficher le schéma original en caractères (ASCII)
                            </summary>
                            <pre className="mt-2 text-[10px] sm:text-xs overflow-x-auto p-2 bg-black/5 dark:bg-black/40 rounded-lg font-mono">
                              {getAsciiDiagram(lesson.id)}
                            </pre>
                          </details>
                        )}
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="space-y-4 mt-3">
                        {section.subsections.map((sub, subIdx) => (
                          <div
                            key={subIdx}
                            className="p-4 sm:p-5 rounded-xl border border-current/15 space-y-3 bg-black/2 dark:bg-white/2"
                          >
                            <h3 className="font-bold text-base text-blue-600 dark:text-blue-400">
                              {sub.subtitle}
                            </h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                              {sub.content.map((item, iIdx) => {
                                if (item.startsWith('• ') || item.startsWith('  - ') || item.startsWith('- ')) {
                                  return (
                                    <div key={iIdx} className="flex items-start gap-2 pl-2">
                                      <span className="text-blue-500 font-bold shrink-0">•</span>
                                      <span className="leading-relaxed">{item.replace(/^(\s*•\s*|\s*-\s*)/, '')}</span>
                                    </div>
                                  );
                                }
                                return (
                                  <p key={iIdx} className="leading-relaxed opacity-90">
                                    {item}
                                  </p>
                                );
                              })}
                            </div>

                            {sub.image && (
                              <div className="my-3 overflow-hidden rounded-xl border border-current/15 shadow-xs bg-white dark:bg-slate-900/90">
                                {sub.image.svgContent ? (
                                  <div
                                    className="w-full p-2 sm:p-4 flex justify-center items-center overflow-x-auto text-slate-800 dark:text-slate-100"
                                    dangerouslySetInnerHTML={{ __html: sub.image.svgContent }}
                                  />
                                ) : sub.image.url && sub.image.url.trim().startsWith('<svg') ? (
                                  <div
                                    className="w-full p-2 sm:p-4 flex justify-center items-center overflow-x-auto text-slate-800 dark:text-slate-100"
                                    dangerouslySetInnerHTML={{ __html: sub.image.url }}
                                  />
                                ) : (
                                  <img
                                    src={sub.image.url}
                                    alt={sub.image.alt || sub.subtitle}
                                    className={`w-full ${sub.image.url?.includes('data:image/svg') || sub.image.url?.endsWith('.svg') ? 'max-h-96 object-contain p-2 sm:p-4' : 'max-h-72 object-cover'} object-center`}
                                    referrerPolicy="no-referrer"
                                  />
                                )}
                                {sub.image.caption && (
                                  <div className="p-2 text-xs text-center font-medium opacity-90 italic bg-black/5 dark:bg-white/5 border-t border-current/10">
                                    {sub.image.caption}
                                  </div>
                                )}
                              </div>
                            )}

                            {sub.table && (
                              <div className="overflow-x-auto my-3 rounded-xl border border-current/20 shadow-xs">
                                <table className="min-w-full text-left text-xs sm:text-sm divide-y divide-current/15">
                                  <thead className="bg-blue-600/10 dark:bg-blue-900/30 font-bold">
                                    <tr>
                                      {sub.table.headers.map((h, hIdx) => (
                                        <th key={hIdx} className="px-3 sm:px-4 py-2.5 font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                                          {h}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-current/10 font-medium">
                                    {sub.table.rows.map((row, rIdx) => (
                                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-black/2 dark:bg-white/2' : ''}>
                                        {row.map((cell, cIdx) => (
                                          <td key={cIdx} className={`px-3 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap ${cIdx === 0 ? 'font-bold text-blue-600 dark:text-blue-400' : ''}`}>
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}

              {/* CONCLUSION */}
              <section className="p-4 sm:p-5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <h2 className="text-base sm:text-lg font-bold tracking-wide uppercase text-purple-700 dark:text-purple-400 mb-2">
                  CONCLUSION
                </h2>
                <p className="leading-relaxed opacity-90">{lesson.conclusion}</p>
              </section>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};
