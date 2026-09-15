import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Download,
  Heart,
  ArrowLeft,
  GraduationCap,
  School,
  Sparkles,
  Maximize2,
  ChevronRight,
  Search,
  Layers,
  HelpCircle,
  Share2,
  Home,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { OfflineIndicator } from './OfflineIndicator';
import { SupportModal } from './components/SupportModal';
import { FullscreenLessonViewer } from './components/FullscreenLessonViewer';
import { LESSON_1_SVT_6EME, LESSON_2_SVT_6EME, LESSON_3_SVT_6EME, LESSON_4_SVT_6EME, LESSON_5_SVT_6EME, LESSON_6_SVT_6EME, LESSON_7_SVT_6EME, LESSON_8_SVT_6EME, LESSON_9_SVT_6EME, LESSON_10_SVT_6EME, LESSON_11_SVT_6EME, LESSON_1_FRANCAIS_6EME, LESSON_2_FRANCAIS_6EME, LESSON_3_FRANCAIS_6EME, LESSON_4_FRANCAIS_6EME, LESSON_5_FRANCAIS_6EME, LESSON_6_FRANCAIS_6EME, LESSON_7_FRANCAIS_6EME, LESSON_8_FRANCAIS_6EME, LESSON_9_FRANCAIS_6EME, LESSON_10_FRANCAIS_6EME, LessonContent } from './data/courses';
import { COURSES_FRANCAIS_5EME } from './data/courses_5eme_francais_index';
import { COURSES_FRANCAIS_4EME } from './data/courses_4eme_francais_index';
import { COURSES_SVT_5EME } from './data/courses_5eme_svt_index';
import { COURSES_ANGLAIS_6EME } from './data/courses_6eme_anglais';

type Screen = 'welcome' | 'choose-class' | 'subject' | 'content' | 'lesson-reader';
type Category = 'Collège' | 'Lycée';
type Series = 'S' | 'L' | null;

interface SavedClassChoice {
  category: Category;
  className: string;
  series: Series;
}

interface ContentData {
  id: string;
  title: string;
  type: 'cours' | 'ressource';
  description: string;
  badge?: string;
  link?: string;
  content?: string;
  lessonData?: LessonContent;
}

const DATA = {
  categories: ['Collège', 'Lycée'] as Category[],
  classes: {
    'Collège': [
      { name: '6ème', hasSeries: false, desc: 'Cycle fondamental d\'initiation' },
      { name: '5ème', hasSeries: false, desc: 'Approfondissement des matières' },
      { name: '4ème', hasSeries: false, desc: 'Cycle central de consolidation' },
      { name: '3ème', hasSeries: false, desc: 'Année du BFEM (Brevet)' },
    ],
    'Lycée': [
      { name: 'Seconde', hasSeries: true, desc: 'Détermination des filières' },
      { name: 'Première', hasSeries: true, desc: 'Pré-baccalauréat' },
      { name: 'Terminale', hasSeries: true, desc: 'Année du Baccalauréat' },
    ]
  },
  subjects: [
    { name: 'SVT', icon: '🧬', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { name: 'Mathématiques', icon: '📐', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'Français', icon: '📚', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { name: 'Histoire', icon: '📜', color: 'bg-amber-50 text-amber-800 border-amber-200' },
    { name: 'Géographie', icon: '🌍', color: 'bg-orange-50 text-orange-700 border-orange-200' },
    { name: 'Éducation civique', icon: '⚖️', color: 'bg-teal-50 text-teal-700 border-teal-200' },
    { name: 'Physique-Chimie', icon: '⚗️', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Anglais', icon: '🗣️', color: 'bg-sky-50 text-sky-700 border-sky-200' },
    { name: 'Philosophie', icon: '💡', color: 'bg-rose-50 text-rose-700 border-rose-200' }
  ]
};

export default function App() {
  const [savedClass, setSavedClass] = useState<SavedClassChoice | null>(() => {
    try {
      const stored = localStorage.getItem('kaay_jang_saved_class');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Erreur lecture localStorage:', e);
    }
    return null;
  });

  const [screen, setScreen] = useState<Screen>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<Category>(savedClass?.category || 'Collège');
  const [selectedClass, setSelectedClass] = useState<string>(savedClass?.className || '6ème');
  const [selectedSeries, setSelectedSeries] = useState<Series>(savedClass?.series || null);
  const [selectedSubject, setSelectedSubject] = useState<string>('SVT');
  const [activeTab, setActiveTab] = useState<'cours' | 'ressources'>('cours');
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState<LessonContent>(LESSON_1_SVT_6EME);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filtrage des matières selon les directives officielles sénégalaises :
  // - Pas de Philosophie au Collège (6e à 3e) ni en classe de Seconde (L ou S)
  // - Pas de Physique-Chimie en classes de 6ème et 5ème (débute en 4ème)
  // - Éducation civique dans les classes du collège uniquement (6e à 3e)
  const getSubjectsForClass = (category: Category, className: string) => {
    return DATA.subjects.filter(subject => {
      // Supprimer la philosophie au collège et en seconde
      if (subject.name === 'Philosophie') {
        if (category === 'Collège' || className === 'Seconde') {
          return false;
        }
      }
      // Supprimer la physique chimie aux classes 6e et 5e
      if (subject.name === 'Physique-Chimie') {
        if (className === '6ème' || className === '5ème') {
          return false;
        }
      }
      // Éducation civique dans les classes du collège uniquement
      if (subject.name === 'Éducation civique') {
        if (category !== 'Collège') {
          return false;
        }
      }
      return true;
    });
  };

  const handleStart = () => {
    if (savedClass) {
      const available = getSubjectsForClass(savedClass.category, savedClass.className);
      if (!available.some(s => s.name === selectedSubject)) {
        setSelectedSubject(available[0]?.name || 'SVT');
      }
      setScreen('subject');
    } else {
      setScreen('choose-class');
    }
  };

  const handleSaveAndSelectClass = (category: Category, className: string, series: Series) => {
    setSelectedCategory(category);
    setSelectedClass(className);
    setSelectedSeries(series);

    const config: SavedClassChoice = { category, className, series };
    setSavedClass(config);
    try {
      localStorage.setItem('kaay_jang_saved_class', JSON.stringify(config));
    } catch (e) {
      console.error('Erreur écriture localStorage:', e);
    }

    const available = getSubjectsForClass(category, className);
    if (!available.some(s => s.name === selectedSubject)) {
      setSelectedSubject(available[0]?.name || 'SVT');
    }

    showToast(`Classe enregistrée : ${className} (${category}${series ? ` Série ${series}` : ''})`);
    setScreen('subject');
  };

  const handleSelectSubject = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setScreen('content');
  };

  const handleOpenLesson = (lesson: LessonContent) => {
    setActiveLesson(lesson);
    setScreen('lesson-reader');
  };

  const handleBack = () => {
    if (screen === 'lesson-reader') setScreen('content');
    else if (screen === 'content') setScreen('subject');
    else if (screen === 'subject') setScreen('welcome');
    else if (screen === 'choose-class') setScreen('welcome');
  };

  // Liste des cours et ressources organisés par classe et matière
  const getContentList = (): ContentData[] => {
    // Leçon 1, 2, 3, 4, 5 et 6 uniquement pour la classe de 6ème en SVT
    if (selectedSubject === 'SVT' && selectedClass === '6ème') {
      return [
        {
          id: 'lecon-1',
          title: 'LEÇON 1 : LES COMPOSANTES DE NOTRE CADRE DE VIE',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Introduction aux milieux de vie (rural et urbain), analyse des composantes biologique (biocénose) et physique (biotope), schéma structural et outils d\'observation.',
          lessonData: LESSON_1_SVT_6EME
        },
        {
          id: 'lecon-2',
          title: 'LEÇON 2 : LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LEUR MILIEU',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Relations alimentaires (chaînes et réseaux trophiques), symbiose (arachide-rhizobium), commensalisme, parasitisme et adaptations au climat du Sénégal (baobab, palétuvier).',
          lessonData: LESSON_2_SVT_6EME
        },
        {
          id: 'lecon-3',
          title: 'LEÇON 3 : LA PROTECTION DE NOTRE CADRE DE VIE',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Ce qui abîme notre cadre de vie (déchets abandonnés, pollutions de l\'air et de l\'eau, nuisances sonores), les gestes de l\'élève éco-citoyen, le rôle des communes et de l\'État, et l\'importance pour la santé et le bien-être.',
          lessonData: LESSON_3_SVT_6EME
        },
        {
          id: 'lecon-4',
          title: 'LEÇON 4 : LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LEUR MILIEU DE VIE',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Composantes d\'un milieu (biocénose et biotope), relations biotiques (nutrition avec producteurs, consommateurs et décomposeurs, support/habitat, transport de pollen/graines), et influences physiques (eau, lumière, racines anti-érosion).',
          lessonData: LESSON_4_SVT_6EME
        },
        {
          id: 'lecon-5',
          title: 'LEÇON 5 : LE PEUPLEMENT D\'UN MILIEU AU COURS DES SAISONS',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Comportement des animaux (migration, hibernation, formes de résistance et métamorphoses), comportement des végétaux (plantes vivaces avec perte des feuilles et organes souterrains, plantes annuelles survivant par graines).',
          lessonData: LESSON_5_SVT_6EME
        },
        {
          id: 'lecon-6',
          title: 'LEÇON 6 : L\'ORIGINE DE LA MATIÈRE VIVANTE DES ÊTRES VIVANTS',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Producteurs primaires autotrophes (photosynthèse, eau, sels minéraux, CO₂ et soleil), producteurs secondaires hétérotrophes (phytophages, zoophages), et rôle du recyclage de la matière par les décomposeurs du sol.',
          lessonData: LESSON_6_SVT_6EME
        },
        {
          id: 'lecon-7',
          title: 'LEÇON 7 : LES COMPOSANTS DES ÊTRES VIVANTS',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Composants chimiques (minéraux : eau et sels ; organiques : glucides, lipides, protides, acides nucléiques), structure cellulaire (procaryotes et eucaryotes), niveaux d\'organisation (cellule, tissu, organe, système, organisme) et spécificités des règnes.',
          lessonData: LESSON_7_SVT_6EME
        },
        {
          id: 'lecon-8',
          title: 'LEÇON 8 : LA NUTRITION CHEZ LES ANIMAUX',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Modes d’alimentation (herbivores, carnivores, omnivores, détritivores, parasites), étapes de la nutrition (ingestion, digestion mécanique/chimique, absorption, assimilation, égestion) et adaptations de l’appareil digestif.',
          lessonData: LESSON_8_SVT_6EME
        },
        {
          id: 'lecon-9',
          title: 'LEÇON 9 : LA NUTRITION CHEZ LES PLANTES',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Nutrition autotrophe, éléments minéraux (poils absorbants) et CO₂ (stomates), photosynthèse (chloroplastes), circulation des sèves (xylème et phloème), réserves d’amidon et modes particuliers (parasites, carnivores).',
          lessonData: LESSON_9_SVT_6EME
        },
        {
          id: 'lecon-10',
          title: 'LEÇON 10 : LA REPRODUCTION CHEZ LES ÊTRES VIVANTS',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Reproduction asexuée (scissiparité, bourgeonnement, fragmentation, sporulation, multiplication végétative) et reproduction sexuée (gamétogenèse, fécondation interne/externe, oviparité, viviparité, pollinisation) avec tableau comparatif.',
          lessonData: LESSON_10_SVT_6EME
        },
        {
          id: 'lecon-11',
          title: 'LEÇON 11 : LA CLASSIFICATION DES ÊTRES VIVANTS',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Nomenclature binomiale de Linné, les 5 grands règnes (Monères, Protistes, Champignons, Végétaux, Animaux), les 7 niveaux hiérarchiques et critères distinctifs animaux vs végétaux.',
          lessonData: LESSON_11_SVT_6EME
        },
        {
          id: 'pdf-lecon-1',
          title: 'Fiche de cours PDF : Leçon 1 - Cadre de vie',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Support de cours complet à emporter hors-ligne pour réviser sans connexion.',
          link: '#'
        },
        {
          id: 'pdf-lecon-2',
          title: 'Fiche de cours PDF : Leçon 2 - Relations & Milieu',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Schémas complets des chaînes trophiques et adaptations des espèces au Sénégal.',
          link: '#'
        },
        {
          id: 'pdf-lecon-3',
          title: 'Fiche de cours PDF : Leçon 3 - Protection du cadre de vie',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Fiche de synthèse éco-citoyenne, prévention du paludisme et respect de l\'environnement.',
          link: '#'
        },
        {
          id: 'pdf-lecon-4',
          title: 'Fiche de cours PDF : Leçon 4 - Relations & Milieu de vie',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Chaînes alimentaires, relations biotiques, facteurs physiques et rôle anti-érosion.',
          link: '#'
        },
        {
          id: 'pdf-lecon-5',
          title: 'Fiche de cours PDF : Leçon 5 - Peuplement au cours des saisons',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Fiche de révision sur la migration, hibernation, plantes vivaces (bourgeons/bulbes) et annuelles.',
          link: '#'
        },
        {
          id: 'pdf-lecon-6',
          title: 'Fiche de cours PDF : Leçon 6 - Origine de la matière vivante',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Photosynthèse, autotrophie végétale, hétérotrophie animale et grand cycle de la matière.',
          link: '#'
        },
        {
          id: 'pdf-lecon-7',
          title: 'Fiche de cours PDF : Leçon 7 - Les composants des êtres vivants',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Composants minéraux/organiques, cellule procaryote/eucaryote et niveaux d\'organisation.',
          link: '#'
        },
        {
          id: 'pdf-lecon-8',
          title: 'Fiche de cours PDF : Leçon 8 - La nutrition chez les animaux',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Régimes alimentaires, étapes de digestion mécanique/chimique et adaptations anatomiques comparées.',
          link: '#'
        },
        {
          id: 'pdf-lecon-9',
          title: 'Fiche de cours PDF : Leçon 9 - La nutrition chez les plantes',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Nutrition autotrophe, bilan de la photosynthèse, sèves montante/descendante et stockage d’amidon.',
          link: '#'
        },
        {
          id: 'pdf-lecon-10',
          title: 'Fiche de cours PDF : Leçon 10 - La reproduction chez les êtres vivants',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Reproduction asexuée et sexuée, modes comparés, tableau synthétique et importance biologique.',
          link: '#'
        },
        {
          id: 'pdf-lecon-11',
          title: 'Fiche de cours PDF : Leçon 11 - La classification des êtres vivants',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Règles de Linné, caractéristiques des 5 règnes, 7 niveaux taxinomiques et clés de détermination.',
          link: '#'
        },
        {
          id: 'pdf-exercices-1',
          title: 'Exercices et Schémas d\'évaluation - Leçon 1',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Questions de révision sur le biotope, la biocénose et identification des milieux au Sénégal.',
          link: '#'
        },
        {
          id: 'pdf-exercices-2',
          title: 'Exercices et Réseau trophique - Leçon 2',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Exercices pratiques sur la chaîne alimentaire en savane et les symbioses végétales.',
          link: '#'
        },
        {
          id: 'pdf-exercices-3',
          title: 'Exercices et Gestes éco-citoyens - Leçon 3',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Études de cas sur les déchets, l\'hygiène publique et les actions citoyennes au collège.',
          link: '#'
        },
        {
          id: 'pdf-exercices-4',
          title: 'Exercices et Relations biotiques - Leçon 4',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Analyse de chaînes de nutrition (producteurs/consommateurs) et adaptations au biotope.',
          link: '#'
        },
        {
          id: 'pdf-exercices-5',
          title: 'Exercices et Saisons - Leçon 5',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Classer les espèces selon leur adaptation (migration, hibernation, graines ou bourgeons).',
          link: '#'
        },
        {
          id: 'pdf-exercices-6',
          title: 'Exercices et Producteurs de matière - Leçon 6',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Schématisation de la photosynthèse, régime phytophage/zoophage et recyclage par la litière.',
          link: '#'
        },
        {
          id: 'pdf-exercices-7',
          title: 'Exercices et Organisation du vivant - Leçon 7',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Questions sur la matière minérale/organique, comparaison cellule animale/végétale et niveaux du vivant.',
          link: '#'
        },
        {
          id: 'pdf-exercices-8',
          title: 'Exercices et Appareil digestif - Leçon 8',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Classification des régimes alimentaires, schéma de l’appareil digestif et transformation des nutriments.',
          link: '#'
        },
        {
          id: 'pdf-exercices-9',
          title: 'Exercices et Nutrition autotrophe - Leçon 9',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Équation de la photosynthèse, sèves (xylème/phloème), poils absorbants et réserves d’amidon.',
          link: '#'
        },
        {
          id: 'pdf-exercices-10',
          title: 'Exercices et Reproduction comparée - Leçon 10',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'QCM et exercices sur la reproduction asexuée (scissiparité, bouturage) et sexuée (fécondation, oviparité, pollinisation).',
          link: '#'
        },
        {
          id: 'pdf-exercices-11',
          title: 'Exercices et Classification phylogénétique - Leçon 11',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Exercices sur les 5 règnes, classement taxinomique de l’être humain, nom binomial et distinction animaux/végétaux.',
          link: '#'
        }
      ];
    }

    // Matière SVT pour la classe de 5ème (Fascicule officiel ADEM-Dakar / Inspection d'Académie de Dakar - 12 leçons intégrales)
    if (selectedSubject === 'SVT' && selectedClass === '5ème') {
      return COURSES_SVT_5EME;
    }

    // Matière Éducation civique (Collège : 6e, 5e, 4e, 3e)
    if (selectedSubject === 'Éducation civique') {
      return [
        {
          id: 'ec-lecon-1',
          title: 'LEÇON 1 : LA CITOYENNETÉ ET LES SYMBOLES DE LA RÉPUBLIQUE DU SÉNÉGAL',
          type: 'cours',
          badge: 'Programme officiel Collège',
          description: 'Étude des symboles de la nation (drapeau vert-or-rouge à l\'étoile verte, devise "Un Peuple - Un But - Une Foi", hymne national "Pincez tous vos koras", sceau de l\'État), droits et devoirs du citoyen sénégalais.',
          content: 'L\'Éducation civique au Sénégal vise à forger des citoyens éclairés, responsables et patriotes. Cette leçon présente les fondements de la République, le sens civique de chaque symbole national, les libertés fondamentales et le respect des lois et des biens publics.'
        },
        {
          id: 'ec-lecon-2',
          title: 'LEÇON 2 : LA FAMILLE, L\'ÉCOLE ET LA VIE EN COMMUNAUTÉ',
          type: 'cours',
          badge: 'Programme officiel Collège',
          description: 'Règles de vie en société, respect du règlement intérieur de l’école, droits de l\'enfant, solidarité communautaire et culture de la paix.',
          content: 'L\'apprentissage de la vie collective débute dans la famille et s\'épanouit au collège et dans la commune. Cette leçon aborde le respect de l\'autre, la tolérance, la gestion non-violente des conflits et la participation active au bien commun.'
        },
        {
          id: 'ec-lecon-3',
          title: 'LEÇON 3 : LES INSTITUTIONS DE LA RÉPUBLIQUE ET LA DÉMOCRATIE',
          type: 'cours',
          badge: 'Programme officiel Collège',
          description: 'Le Président de la République, l\'Assemblée Nationale, le Gouvernement, la Justice et le rôle des collectivités territoriales (communes, départements).',
          content: 'Découverte du fonctionnement des institutions républicaines au Sénégal : la séparation des pouvoirs (exécutif, législatif, judiciaire), le vote citoyen et le rôle des élus locaux dans le développement du pays.'
        },
        {
          id: 'pdf-ec-1',
          title: 'Fiche de cours PDF : Symboles, Droits & Devoirs du Citoyen Sénégalais',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Support de cours synthétique avec illustrations sur les institutions et la Constitution de la République du Sénégal.',
          link: '#'
        },
        {
          id: 'pdf-ec-2',
          title: `Exercices & Études de cas civiques - Classe de ${selectedClass}`,
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Séries de questions à choix multiples, situations concrètes de civisme et exercices guidés pour devoirs et composition.',
          link: '#'
        }
      ];
    }

    // Matière Français uniquement pour la classe de 6ème
    if (selectedSubject === 'Français' && selectedClass === '6ème') {
      return [
        {
          id: 'lecon-1-francais-6eme',
          title: 'LEÇON 1 : INTRODUCTION À LA PHONÉTIQUE – SONS ET LETTRES',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Distinction graphie (lettre) et phonème (son), Alphabet Phonétique International (API), voyelles (16), consonnes (17), semi-voyelles (3), tableau des pièges et exercices d\'application.',
          lessonData: LESSON_1_FRANCAIS_6EME
        },
        {
          id: 'lecon-2-francais-6eme',
          title: 'LEÇON 2 : LES VOYELLES ORALES ET NASALES',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Rôle du voile du palais, les 12 voyelles orales, les 4 voyelles nasales ([ɛ̃], [ɑ̃], [ɔ̃], [œ̃]), tests physiologiques et exercices de classement.',
          lessonData: LESSON_2_FRANCAIS_6EME
        },
        {
          id: 'lecon-3-francais-6eme',
          title: 'LEÇON 3 : LES CONSONNES ET LES SEMI-VOYELLES (SEMI-CONSONNES)',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Consonnes sourdes vs sonores (vibration des cordes vocales), consonnes nasales et liquides, les 3 semi-voyelles ([j], [w], [ɥ]) et exercices d\'identification.',
          lessonData: LESSON_3_FRANCAIS_6EME
        },
        {
          id: 'lecon-4-francais-6eme',
          title: 'LEÇON 4 : LES FORMES DE PHRASES',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Forme affirmative vs forme négative, mots et locutions de négation (ne... pas/plus/jamais/rien/personne), place selon le temps, transformation des déterminants en de/d\' et exercices.',
          lessonData: LESSON_4_FRANCAIS_6EME
        },
        {
          id: 'lecon-5-francais-6eme',
          title: 'LEÇON 5 : LES CONSTITUANTS DE LA PHRASE SIMPLE (GNS ET GV)',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Définition (Phrase = GNS + GV), composition du Groupe Nominal Sujet, structures du Groupe Verbal (verbe intransitif, verbe transitif avec COD/COI, verbe d\'état avec attribut) et exercices.',
          lessonData: LESSON_5_FRANCAIS_6EME
        },
        {
          id: 'lecon-6-francais-6eme',
          title: 'LEÇON 6 : LE SUJET DU VERBE (GRAMMAIRE)',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Rôle et accord en personne/nombre, méthode pour identifier le sujet (« Qui est-ce qui ? » / « Qu\'est-ce qui ? »), classes grammaticales (GN, nom propre, pronom, infinitif) et exercices d\'application.',
          lessonData: LESSON_6_FRANCAIS_6EME
        },
        {
          id: 'lecon-7-francais-6eme',
          title: 'LEÇON 7 : LE PRÉSENT DE L\'INDICATIF DES VERBES DU 1ER ET 2ÈME GROUPE (CONJUGAISON)',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Emplois (présent, habitude, vérité générale), règles de formation et terminaisons des verbes en -er (-e, -es, -e, -ons, -ez, -ent) et en -ir (-is, -is, -it, -issons, -issez, -issent), avec exercices d\'application.',
          lessonData: LESSON_7_FRANCAIS_6EME
        },
        {
          id: 'lecon-8-francais-6eme',
          title: 'LEÇON 8 : LES ADJECTIFS QUALIFICATIFS « ÉPITHÈTES » ET « ATTRIBUTS »',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Thème Paix et Tolérance : lecture suivie (Le petit lapin blanc), adjectifs épithètes vs attributs (verbes d\'état), manipulation-recherche, conjugaison d\'être et avoir au passé composé, structures et lexique.',
          lessonData: LESSON_8_FRANCAIS_6EME
        },
        {
          id: 'lecon-9-francais-6eme',
          title: 'LEÇON 9 : LE PRÉSENT DE L\'INDICATIF DES VERBES DU 3ÈME GROUPE (CONJUGAISON)',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Caractéristiques des verbes irréguliers, modèles fréquents (-s/-s/-t), verbes en -dre et -tre, cas en -x (pouvoir/vouloir), tableau complet des auxiliaires et usuels (être, avoir, aller, faire, dire) et exercices.',
          lessonData: LESSON_9_FRANCAIS_6EME
        },
        {
          id: 'lecon-10-francais-6eme',
          title: 'LEÇON 10 : LA PHRASE INTERROGATIVE AVEC « QUE » ET INVERSION DU SUJET',
          type: 'cours',
          badge: 'Texte intégral officiel',
          description: 'Thème Paix et Tolérance : l\'interrogation avec le pronom « que » (COD), règles formelles de l\'inversion du sujet (trait d\'union, -t- euphonique), manipulation-recherche, structures et lexique.',
          lessonData: LESSON_10_FRANCAIS_6EME
        },
        {
          id: 'pdf-lecon-francais-global',
          title: 'Fiche de cours PDF : Synthèse complète de Français 6ème (Leçons 1 à 10)',
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Fiches de synthèse complètes : phonétique (sons/lettres, voyelles, consonnes), syntaxe & grammaire (formes de phrases, GNS/GV, sujet, adjectifs épithètes/attributs, interrogation avec que et inversion) et conjugaison (présent 1er, 2ème, 3ème groupes, passé composé être/avoir).',
          link: '#'
        },
        {
          id: 'pdf-exercices-francais-phonetique',
          title: 'Exercices d\'application & Corrigés - Français 6ème',
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Recueil complet d\'évaluations avec corrigés : phonétique, transformation affirmative/négative, découpage GNS/GV, identification du sujet et conjugaison des 3 groupes de verbes.',
          link: '#'
        }
      ];
    }

    // Matière Français pour la classe de 5ème (Toutes les leçons officielles intégrales)
    if (selectedSubject === 'Français' && selectedClass === '5ème') {
      return COURSES_FRANCAIS_5EME;
    }

    // Matière Français pour la classe de 4ème (Leçons officielles intégrales)
    if (selectedSubject === 'Français' && selectedClass === '4ème') {
      return COURSES_FRANCAIS_4EME;
    }

    // Matière Anglais pour la classe de 6ème (Thèmes de communication & Axes culturels officiels)
    if (selectedSubject === 'Anglais' && selectedClass === '6ème') {
      return COURSES_ANGLAIS_6EME;
    }

    // Matière Histoire (toutes classes)
    if (selectedSubject === 'Histoire') {
      return [
        {
          id: 'hist-lecon-1',
          title: 'LEÇON 1 : INTRODUCTION À L\'HISTOIRE ET SES SOURCES',
          type: 'cours',
          badge: 'Programme officiel sénégalais',
          description: 'Définition, objet de l\'histoire, importance de la chronologie et étude des sources (orales, écrites, matérielles et archéologiques au Sénégal).',
          content: 'L\'Histoire est l\'étude du passé des sociétés humaines. Elle s\'appuie sur la tradition orale africaine, les vestiges archéologiques et les écrits pour reconstituer la mémoire et comprendre le présent.'
        },
        {
          id: 'hist-lecon-2',
          title: 'LEÇON 2 : LA PRÉHISTOIRE ET LES PREMIERS PEUPLEMENTS',
          type: 'cours',
          badge: 'Programme officiel sénégalais',
          description: 'Le Paléolithique, le Néolithique, la métallurgie et les grands sites archéologiques préhistoriques du Sénégal et de l\'Afrique de l\'Ouest.',
          content: 'L\'Afrique est le berceau de l\'Humanité. Cette leçon retrace l\'évolution des premiers hominidés, la fabrication des outils en pierre taillée puis polie, et les débuts de l\'agriculture et de l\'élevage.'
        },
        {
          id: 'pdf-hist-1',
          title: `Fiche de synthèse PDF : Repères chronologiques d'Histoire - Classe de ${selectedClass}`,
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Frises chronologiques, définitions clés et méthodes d\'analyse de documents historiques.',
          link: '#'
        },
        {
          id: 'pdf-hist-2',
          title: `Devoirs & Sujets types d'Histoire - ${selectedClass}`,
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Questions de cours, commentaires de documents et sujets de dissertation guidés.',
          link: '#'
        }
      ];
    }

    // Matière Géographie (toutes classes)
    if (selectedSubject === 'Géographie') {
      return [
        {
          id: 'geo-lecon-1',
          title: 'LEÇON 1 : LA TERRE DANS L\'UNIVERS : REPÈRES ET COORDONNÉES',
          type: 'cours',
          badge: 'Programme officiel sénégalais',
          description: 'Forme et dimensions de la Terre, mouvements de rotation et révolution, méridiens, parallèles, latitude et longitude.',
          content: 'La Terre, planète du système solaire, possède des caractéristiques uniques. Cette leçon permet d\'apprendre à se situer sur le globe et sur les cartes grâce aux coordonnées géographiques.'
        },
        {
          id: 'geo-lecon-2',
          title: 'LEÇON 2 : LES GRANDS ENSEMBLES CLIMATIQUES ET LA BIOGÉOGRAPHIE',
          type: 'cours',
          badge: 'Programme officiel sénégalais',
          description: 'Les zones climatiques mondiales (chaudes, tempérées, froides), le climat sahélien et soudanien au Sénégal, et les grands biomes végétaux.',
          content: 'Étude des facteurs du climat (température, précipitations, vents) et de leur influence directe sur les paysages, les cours d\'eau et la vie des populations.'
        },
        {
          id: 'pdf-geo-1',
          title: `Fiche de cartographie PDF - Classe de ${selectedClass}`,
          type: 'ressource',
          badge: 'Format PDF imprimable',
          description: 'Fonds de cartes à compléter, légendes normalisées et lecture d\'échelles cartographiques.',
          link: '#'
        },
        {
          id: 'pdf-geo-2',
          title: `Exercices pratiques de Géographie - ${selectedClass}`,
          type: 'ressource',
          badge: 'Évaluation & corrigé',
          description: 'Construction de graphiques ombrothermiques, calculs d\'échelles et localisation spatiale.',
          link: '#'
        }
      ];
    }

    // Autres matières
    return [
      {
        id: 'cours-gen-1',
        title: `LEÇON 1 : FONDEMENTS EN ${selectedSubject.toUpperCase()}`,
        type: 'cours',
        badge: 'Programme sénégalais',
        description: `Cours fondamental pour la classe de ${selectedClass} ${selectedSeries ? `(Série ${selectedSeries})` : ''}.`,
        content: `Bienvenue dans le programme officiel de ${selectedSubject}. Les chapitres et les fichiers PDF sont préparés selon le cursus sénégalais. Vous pouvez dès à présent consulter les Leçons 1 et 2 en SVT pour découvrir l'expérience de lecture pleine largeur.`
      },
      {
        id: 'res-gen-1',
        title: `Recueil d'exercices & Annales PDF - ${selectedSubject}`,
        type: 'ressource',
        badge: 'Fichier PDF',
        description: 'Fiche d\'entraînement et synthèse pour préparer les devoirs et examens.',
        link: '#'
      }
    ];
  };

  const allContentItems = getContentList();
  const coursCount = allContentItems.filter(i => i.type === 'cours').length;
  const resCount = allContentItems.filter(i => i.type === 'ressource').length;

  const filteredContent = allContentItems.filter(item => {
    const matchesTab = item.type === (activeTab === 'cours' ? 'cours' : 'ressource');
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // ÉCRAN 1 : PAGE DE BIENVENUE ET MOTIVATION
  const renderWelcome = () => (
    <div className="flex min-h-[85vh] flex-col items-center justify-center text-center px-3 py-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
        <div className="mx-auto w-20 h-20 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 text-white">
          <GraduationCap className="w-11 h-11" />
        </div>

        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
          🇸🇳 Plateforme d'apprentissage pour le Sénégal
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Kaay Jang</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium">
          De la <span className="text-blue-600 font-bold">6ème</span> à la{' '}
          <span className="text-indigo-600 font-bold">Terminale</span> (Séries L et S)
        </p>

        {/* Message de motivation */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/80 p-5 rounded-2xl my-6 text-left shadow-xs">
          <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Motivation pour les élèves</span>
          </div>
          <p className="text-blue-900/90 text-xs sm:text-sm italic leading-relaxed">
            « L'éducation est l'arme la plus puissante que l'on puisse utiliser pour changer le monde. Chaque leçon apprise aujourd'hui est une porte ouverte sur ton avenir ! »
          </p>
          <div className="text-[11px] text-blue-700 font-semibold mt-2 text-right">
            — Nelson Mandela
          </div>
        </div>

        {/* Rappel de la classe sauvegardée si présente */}
        {savedClass && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-4 mb-5 text-left shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">
                    Votre classe enregistrée
                  </span>
                  <span className="text-base font-extrabold text-gray-900">
                    Classe de {savedClass.className} {savedClass.series ? `(Série ${savedClass.series})` : ''}
                  </span>
                  <span className="text-xs text-gray-500 block">Cycle : {savedClass.category}</span>
                </div>
              </div>
              <button
                onClick={() => setScreen('choose-class')}
                className="text-xs font-bold text-blue-700 bg-white hover:bg-blue-100/60 px-3 py-1.5 rounded-xl border border-blue-200 transition shadow-2xs"
              >
                Changer
              </button>
            </div>
          </div>
        )}

        {/* Boutons d'action */}
        {savedClass ? (
          <div className="space-y-3">
            <button
              onClick={handleStart}
              className="w-full py-3.5 sm:py-4 px-6 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Accéder aux cours ({savedClass.className})</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setScreen('choose-class')}
              className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2"
            >
              <School className="w-4 h-4 text-blue-600" />
              <span>Changer de cycle ou de classe</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setScreen('choose-class')}
            className="w-full py-3.5 sm:py-4 px-6 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Choisir mon cycle et ma classe</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Info PWA & Offline */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">⚡ Accessible hors-ligne</span>
          <span>•</span>
          <span className="flex items-center gap-1">🔒 Sans pub intrusive</span>
        </div>
      </div>
    </div>
  );

  // PAGE APRÈS L'ÉCRAN D'ACCUEIL : CHOIX DU CYCLE PUIS CLASSE AVEC SAUVEGARDE ET CHANGEMENT À TOUT MOMENT
  const renderChooseClass = () => (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-4">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
          Cursus scolaire sénégalais
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
          Choix du cycle et de la classe
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Sélectionnez votre niveau scolaire. Votre choix sera automatiquement sauvegardé sur cet appareil et restera modifiable à tout instant.
        </p>
      </div>

      {/* 1. CHOIX DU CYCLE */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
            1
          </span>
          <h3 className="text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wide">
            Étape 1 : Choisissez votre cycle d'études
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div
            onClick={() => {
              setSelectedCategory('Collège');
              setSelectedSeries(null);
            }}
            className={`cursor-pointer p-5 rounded-2xl border-2 transition-all text-left relative ${
              selectedCategory === 'Collège'
                ? 'bg-blue-50/70 border-blue-600 shadow-md ring-2 ring-blue-600/20'
                : 'bg-white border-gray-200 hover:border-gray-300 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  selectedCategory === 'Collège' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <School className="w-6 h-6" />
              </div>
              {selectedCategory === 'Collège' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-600 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sélectionné
                </span>
              )}
            </div>
            <h4 className="text-lg sm:text-xl font-black text-gray-900">
              Collège
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Enseignement Moyen : de la <strong>6ème</strong> à la <strong>3ème</strong> (Préparation du Brevet - BFEM).
            </p>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('Lycée');
            }}
            className={`cursor-pointer p-5 rounded-2xl border-2 transition-all text-left relative ${
              selectedCategory === 'Lycée'
                ? 'bg-blue-50/70 border-blue-600 shadow-md ring-2 ring-blue-600/20'
                : 'bg-white border-gray-200 hover:border-gray-300 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  selectedCategory === 'Lycée' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <GraduationCap className="w-6 h-6" />
              </div>
              {selectedCategory === 'Lycée' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-600 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sélectionné
                </span>
              )}
            </div>
            <h4 className="text-lg sm:text-xl font-black text-gray-900">
              Lycée
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Enseignement Secondaire : <strong>Seconde</strong>, <strong>Première</strong> et <strong>Terminale</strong> (Séries L & S, Préparation du Baccalauréat).
            </p>
          </div>
        </div>
      </div>

      {/* 2. CHOIX DE LA CLASSE */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
              2
            </span>
            <h3 className="text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wide">
              Étape 2 : Cliquez sur votre classe en {selectedCategory}
            </h3>
          </div>
        </div>

        {/* Grille des classes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {DATA.classes[selectedCategory].map(c => {
            if (c.hasSeries) {
              return (
                <React.Fragment key={c.name}>
                  <button
                    onClick={() => handleSaveAndSelectClass('Lycée', c.name, 'L')}
                    className={`p-5 rounded-2xl border transition-all text-left group relative ${
                      savedClass?.className === c.name && savedClass?.series === 'L' && savedClass?.category === 'Lycée'
                        ? 'bg-amber-50/70 border-amber-500 shadow-sm ring-2 ring-amber-400/30'
                        : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                        Série L
                      </span>
                      {savedClass?.className === c.name && savedClass?.series === 'L' && savedClass?.category === 'Lycée' ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Enregistrée
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                    <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-600">
                      {c.name} L
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Série Littéraire (Langues, Lettres, Philo)</p>
                  </button>

                  <button
                    onClick={() => handleSaveAndSelectClass('Lycée', c.name, 'S')}
                    className={`p-5 rounded-2xl border transition-all text-left group relative ${
                      savedClass?.className === c.name && savedClass?.series === 'S' && savedClass?.category === 'Lycée'
                        ? 'bg-blue-50/70 border-blue-500 shadow-sm ring-2 ring-blue-400/30'
                        : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                        Série S
                      </span>
                      {savedClass?.className === c.name && savedClass?.series === 'S' && savedClass?.category === 'Lycée' ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Enregistrée
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                    <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-600">
                      {c.name} S
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Série Scientifique (Maths, PC, SVT)</p>
                  </button>
                </React.Fragment>
              );
            }

            // Pour le Collège
            const isSaved = savedClass?.className === c.name && savedClass?.category === 'Collège';
            return (
              <button
                key={c.name}
                onClick={() => handleSaveAndSelectClass('Collège', c.name, null)}
                className={`p-5 rounded-2xl border transition-all text-left group relative ${
                  isSaved
                    ? 'bg-blue-50/70 border-blue-500 shadow-sm ring-2 ring-blue-400/30'
                    : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">
                    Collège
                  </span>
                  {isSaved ? (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Enregistrée
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
                <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-600">
                  Classe de {c.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{c.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Note explicative de sauvegarde */}
      <div className="mt-8 p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center gap-3 text-xs text-gray-600">
        <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
        <span>
          <strong>Sauvegarde automatique :</strong> Votre choix de classe est enregistré localement sur votre téléphone ou ordinateur. Vous pouvez en changer à tout moment depuis le bouton dédié en haut de l'écran.
        </span>
      </div>
    </div>
  );

  // ÉCRAN : CHOIX DE MATIÈRE
  const renderSubject = () => {
    const availableSubjects = getSubjectsForClass(selectedCategory, selectedClass);

    return (
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <button onClick={() => setScreen('choose-class')} className="hover:text-blue-600 transition">
              {selectedCategory}
            </button>
            <span>›</span>
            <button
              onClick={() => setScreen('choose-class')}
              className="text-gray-700 hover:text-blue-600 font-medium underline-offset-2 hover:underline transition flex items-center gap-1"
              title="Changer de classe"
            >
              <span>Classe de {selectedClass} {selectedSeries ? `(Série ${selectedSeries})` : ''}</span>
              <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-sm border border-blue-200">Changer</span>
            </button>
            <span>›</span>
            <span className="text-blue-600 font-bold">Matières</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Choisissez la matière
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Sélectionnez une discipline pour accéder à tous les cours et leçons du programme officiel sénégalais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {availableSubjects.map(subject => (
            <button
              key={subject.name}
              onClick={() => handleSelectSubject(subject.name)}
              className="p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2.5 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  {subject.icon}
                </span>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-blue-600">
                    {subject.name}
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">Cours & Leçons</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>
    );
  };

  // ÉCRAN 5 : LISTE DES COURS & RESSOURCES
  const renderContent = () => (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
          <button onClick={() => setScreen('choose-class')} className="hover:text-blue-600 transition">
            {selectedCategory}
          </button>
          <span>›</span>
          <button
            onClick={() => setScreen('choose-class')}
            className="text-gray-700 hover:text-blue-600 font-medium underline-offset-2 hover:underline transition flex items-center gap-1"
            title="Changer de classe"
          >
            <span>Classe de {selectedClass} {selectedSeries ? `(Série ${selectedSeries})` : ''}</span>
            <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-sm border border-blue-200">Changer</span>
          </button>
          <span>›</span>
          <span className="text-blue-600 font-bold">{selectedSubject}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Cours & Leçons en {selectedSubject}
        </h2>
      </div>

      {/* Barre de Recherche */}
      <div className="relative mb-4">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher une leçon, un chapitre..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-xs"
        />
      </div>

      {/* Onglets principaux : Cours vs Ressources */}
      <div className="flex space-x-2 mb-4 sm:mb-5 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('cours')}
          className={`pb-3 px-4 font-semibold text-xs sm:text-sm transition-colors border-b-2 flex items-center gap-2 ${
            activeTab === 'cours'
              ? 'border-blue-600 text-blue-600 font-bold'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Leçons intégrales</span>
          <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
            activeTab === 'cours' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
          }`}>
            {coursCount}
          </span>
        </button>
        <button
          onClick={() => setActiveTab('ressources')}
          className={`pb-3 px-4 font-semibold text-xs sm:text-sm transition-colors border-b-2 flex items-center gap-2 ${
            activeTab === 'ressources'
              ? 'border-blue-600 text-blue-600 font-bold'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <Download className="w-4 h-4" />
          <span>Ressources (PDF)</span>
          <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
            activeTab === 'ressources' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
          }`}>
            {resCount}
          </span>
        </button>
      </div>

      {/* Liste des cartes */}
      <div className="space-y-4">
        {filteredContent.map(item => (
          <div
            key={item.id}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-gray-100 hover:border-blue-200 transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                    {item.badge || (item.type === 'cours' ? 'Cours' : 'PDF')}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 pt-2 sm:pt-0">
                {item.type === 'cours' && item.lessonData ? (
                  <button
                    onClick={() => handleOpenLesson(item.lessonData!)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Lire en plein écran</span>
                  </button>
                ) : item.type === 'ressource' ? (
                  <button
                    onClick={() => {
                      if (item.id.includes('lecon-1')) {
                        handleOpenLesson(LESSON_1_SVT_6EME);
                        showToast("Ouverture de la Leçon 1 pour révision ou impression PDF.");
                      } else if (item.id.includes('lecon-2')) {
                        handleOpenLesson(LESSON_2_SVT_6EME);
                        showToast("Ouverture de la Leçon 2 pour révision ou impression PDF.");
                      } else if (item.id.includes('lecon-3')) {
                        handleOpenLesson(LESSON_3_SVT_6EME);
                        showToast("Ouverture de la Leçon 3 pour révision ou impression PDF.");
                      } else if (item.id.includes('lecon-4')) {
                        handleOpenLesson(LESSON_4_SVT_6EME);
                        showToast("Ouverture de la Leçon 4 pour révision ou impression PDF.");
                      } else if (item.id.includes('lecon-5')) {
                        handleOpenLesson(LESSON_5_SVT_6EME);
                        showToast("Ouverture de la Leçon 5 pour révision ou impression PDF.");
                      } else if (item.id.includes('lecon-6')) {
                        handleOpenLesson(LESSON_6_SVT_6EME);
                        showToast("Ouverture de la Leçon 6 pour révision ou impression PDF.");
                      } else {
                        showToast("Document prêt. Utilisez l'imprimante ou la sauvegarde locale hors-ligne.");
                      }
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-xl font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Télécharger / Imprimer PDF</span>
                  </button>
                ) : null}
              </div>
            </div>

            {/* Aperçu rapide pour la leçon dans la liste */}
            {item.lessonData && (
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>
                  {item.lessonData.id.startsWith('anglais-6eme')
                    ? `Objectif : ${item.description}`
                    : item.lessonData.id === 'svt-6eme-lecon-1'
                    ? 'Comprend : Intro • Milieux rural & urbain • Biocénose & Biotope • Schéma structural'
                    : item.lessonData.id === 'svt-6eme-lecon-2'
                    ? 'Comprend : Intro • Chaînes & Réseaux trophiques • Symbioses • Adaptations au Sénégal'
                    : item.lessonData.id === 'svt-6eme-lecon-3'
                    ? 'Comprend : Intro • Pollutions & Dégradations • Gestes éco-citoyens • Rôle État & Santé'
                    : item.lessonData.id === 'svt-6eme-lecon-4'
                    ? 'Comprend : Intro • Biotope/Biocénose • Chaînes alimentaires • Support & Transport • Rôle anti-érosion'
                    : item.lessonData.id === 'svt-6eme-lecon-5'
                    ? 'Comprend : Intro • Migration & Hibernation • Métamorphose • Plantes vivaces & annuelles'
                    : item.lessonData.id === 'svt-6eme-lecon-6'
                    ? 'Comprend : Intro • Producteurs primaires (Photosynthèse) • Producteurs secondaires • Recyclage sol'
                    : item.description ? `Objectif : ${item.description}` : 'Consulter le contenu officiel'}
                </span>
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline" onClick={() => handleOpenLesson(item.lessonData!)}>
                  Ouvrir la leçon →
                </span>
              </div>
            )}
          </div>
        ))}

        {filteredContent.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium text-sm">
              Aucun document correspondant trouvé pour cette recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-transparent">
      {/* Indicateur de Mode Hors Ligne */}
      <OfflineIndicator />

      {/* Modal de soutien / don au développeur */}
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />

      {/* Header / Barre de navigation */}
      {screen !== 'lesson-reader' && (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs">
          <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              {screen !== 'welcome' && (
                <button
                  onClick={handleBack}
                  className="p-2 -ml-1 rounded-xl hover:bg-gray-100 text-gray-600 transition"
                  aria-label="Retour en arrière"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setScreen('welcome')}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-lg sm:text-xl text-gray-900 tracking-tight">
                  Kaay Jang
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Bouton pour changer de classe à tout moment */}
              {screen !== 'welcome' && screen !== 'choose-class' && (
                <button
                  onClick={() => setScreen('choose-class')}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80 transition text-xs sm:text-sm font-bold shadow-2xs"
                  title="Changer de classe à tout moment"
                >
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{selectedClass}{selectedSeries ? ` ${selectedSeries}` : ''}</span>
                  <span className="hidden sm:inline text-[11px] font-normal text-blue-500 ml-0.5">• Changer</span>
                </button>
              )}

              <PWAInstallButton />
              
              {/* Bouton de Don d'aide aux développeurs */}
              <button
                onClick={() => setIsSupportOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200/60 transition text-xs sm:text-sm font-semibold shadow-xs"
                title="Soutenir les développeurs de l'application"
              >
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span className="hidden xs:inline">Faire un Don</span>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area - Full width responsive */}
      <main className={`w-full ${screen === 'lesson-reader' ? 'p-0' : 'p-2 sm:p-4 md:p-6 pb-12'}`}>
        {screen === 'welcome' && renderWelcome()}
        {screen === 'choose-class' && renderChooseClass()}
        {screen === 'subject' && renderSubject()}
        {screen === 'content' && renderContent()}
        {screen === 'lesson-reader' && (
          <FullscreenLessonViewer lesson={activeLesson} onBack={() => setScreen('content')} />
        )}
      </main>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xl flex items-center gap-2 border border-white/10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
