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
  Bookmark,
  MapPin,
  Map,
  Zap,
  FlaskConical
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { OfflineIndicator } from './OfflineIndicator';
import { SupportModal } from './components/SupportModal';
import { FullscreenLessonViewer } from './components/FullscreenLessonViewer';
import { SenegalMap } from './components/SenegalMap';
import { LESSON_1_SVT_6EME, LESSON_2_SVT_6EME, LESSON_3_SVT_6EME, LESSON_4_SVT_6EME, LESSON_5_SVT_6EME, LESSON_6_SVT_6EME, LESSON_7_SVT_6EME, LESSON_8_SVT_6EME, LESSON_9_SVT_6EME, LESSON_10_SVT_6EME, LESSON_11_SVT_6EME, LESSON_1_FRANCAIS_6EME, LESSON_2_FRANCAIS_6EME, LESSON_3_FRANCAIS_6EME, LESSON_4_FRANCAIS_6EME, LESSON_5_FRANCAIS_6EME, LESSON_6_FRANCAIS_6EME, LESSON_7_FRANCAIS_6EME, LESSON_8_FRANCAIS_6EME, LESSON_9_FRANCAIS_6EME, LESSON_10_FRANCAIS_6EME, LessonContent } from './data/courses';
import { COURSES_FRANCAIS_5EME } from './data/courses_5eme_francais_index';
import { COURSES_FRANCAIS_4EME } from './data/courses_4eme_francais_index';
import { COURSES_SVT_5EME, SVT_5EME_FILTER_THEMES } from './data/courses_5eme_svt_index';
import { COURSES_SVT_4EME, SVT_4EME_FILTER_THEMES } from './data/courses_4eme_svt_index';
import { COURSES_ANGLAIS_6EME } from './data/courses_6eme_anglais';
import { COURSES_EDUCATION_CIVIQUE_6EME, CIVIQUE_6EME_CHAPTERS } from './data/courses_6eme_education_civique';
import { COURSES_EDUCATION_CIVIQUE_5EME, CIVIQUE_5EME_PARTS } from './data/courses_5eme_education_civique';
import { LESSON_1_CIVIQUE_6EME } from './data/courses_6eme_education_civique_part1';
import { COURSES_HISTOIRE_6EME, HISTOIRE_6EME_PARTS } from './data/courses_6eme_histoire';
import { COURSES_HISTOIRE_5EME, HISTOIRE_5EME_PARTS } from './data/courses_5eme_histoire';
import { COURSES_HISTOIRE_4EME, HISTOIRE_4EME_PARTS } from './data/courses_4eme_histoire_index';
import { COURSES_GEOGRAPHIE_6EME, GEOGRAPHIE_6EME_FILTER_PARTS } from './data/courses_6eme_geographie';
import { COURSES_GEOGRAPHIE_5EME, GEOGRAPHIE_5EME_FILTER_PARTS } from './data/courses_5eme_geographie';
import { COURSES_GEOGRAPHIE_4EME, GEOGRAPHIE_4EME_FILTER_PARTS } from './data/courses_4eme_geographie';
import { COURSES_ANGLAIS_5EME, ANGLAIS_5EME_FILTER_PARTS } from './data/courses_5eme_anglais';
import { COURSES_ANGLAIS_4EME, ANGLAIS_4EME_FILTER_PARTS } from './data/courses_4eme_anglais';
import { COURSES_ANGLAIS_3EME } from './data/courses_3eme_anglais_index';
import { COURSES_MATH_6EME, MATH_6EME_FILTER_CHAPTERS } from './data/courses_6eme_math';
import { COURSES_MATH_4EME, MATH_4EME_FILTER_THEMES } from './data/courses_4eme_math_index';
import { COURSES_MATH_5EME, MATH_5EME_FILTER_THEMES } from './data/courses_5eme_math_index';
import { COURSES_MATH_3EME, MATH_3EME_FILTER_THEMES } from './data/courses_3eme_math_index';
import { COURSES_PC_4EME, PC_4EME_FILTER_THEMES } from './data/courses_4eme_pc_index';
import { COURSES_PC_3EME, PC_3EME_FILTER_THEMES } from './data/courses_3eme_pc_index';
import { COURSES_SVT_3EME, SVT_3EME_FILTER_THEMES } from './data/courses_3eme_svt_index';
import { COURSES_EDUCATION_CIVIQUE_4EME, CIVIQUE_4EME_PARTS } from './data/courses_4eme_education_civique';
import { COURSES_EDUCATION_CIVIQUE_3EME, CIVIQUE_3EME_PARTS } from './data/courses_3eme_education_civique';
import { COURSES_FRANCAIS_3EME, FRANCAIS_3EME_PARTS } from './data/courses_3eme_francais_index';
import { COURSES_HISTOIRE_3EME, HISTOIRE_3EME_PARTS } from './data/courses_3eme_histoire_index';
import { COURSES_3EME_GEOGRAPHIE, GEOGRAPHIE_3EME_PARTS } from './data/courses_3eme_geographie_index';
import { COURSES_SVT_2NDE, SVT_2NDE_FILTER_THEMES } from './data/courses_2nde_svt_index';
import { COURSES_HISTOIRE_1ERE, HISTOIRE_1ERE_PARTS } from './data/courses_1ere_histoire_index';
import { COURSES_FRANCAIS_2NDE, FRANCAIS_2NDE_MODULES } from './data/courses_2nde_francais_index';
import { COURSES_HISTOIRE_2NDE, HISTOIRE_2NDE_PARTS } from './data/courses_2nde_histoire_index';
import { COURSES_GEOGRAPHIE_2NDE, GEOGRAPHIE_2NDE_PARTS } from './data/courses_2nde_geographie_index';

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
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState<LessonContent>(LESSON_1_SVT_6EME);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCiviqueChapter, setSelectedCiviqueChapter] = useState<string>('all');
  const [selectedHistoirePart, setSelectedHistoirePart] = useState<string>('all');
  const [selectedHistoire5emePart, setSelectedHistoire5emePart] = useState<string>('all');
  const [selectedHistoire4emePart, setSelectedHistoire4emePart] = useState<string>('all');
  const [selectedGeographiePart, setSelectedGeographiePart] = useState<string>('all');
  const [selectedGeographie5emePart, setSelectedGeographie5emePart] = useState<string>('all');
  const [selectedGeographie4emePart, setSelectedGeographie4emePart] = useState<string>('all');
  const [selectedAnglaisPart, setSelectedAnglaisPart] = useState<string>('all');
  const [selectedAnglais4emePart, setSelectedAnglais4emePart] = useState<string>('all');
  const [selectedMathChapter, setSelectedMathChapter] = useState<string>('all');
  const [selectedSvt5emeTheme, setSelectedSvt5emeTheme] = useState<string>('all');
  const [selectedSvt4emeTheme, setSelectedSvt4emeTheme] = useState<string>('all');
  const [selectedMath4emePart, setSelectedMath4emePart] = useState<string>('all');
  const [selectedMath5emePart, setSelectedMath5emePart] = useState<string>('all');
  const [selectedMath3emeTheme, setSelectedMath3emeTheme] = useState<string>('all');
  const [selectedPc4emeTheme, setSelectedPc4emeTheme] = useState<string>('all');
  const [selectedPc3emeTheme, setSelectedPc3emeTheme] = useState<string>('all');
  const [selectedSvt3emeTheme, setSelectedSvt3emeTheme] = useState<string>('all');
  const [selectedCivique4emePart, setSelectedCivique4emePart] = useState<string>('all');
  const [selectedCivique3emePart, setSelectedCivique3emePart] = useState<string>('all');
  const [selectedFrancais3emePart, setSelectedFrancais3emePart] = useState<string>('all');
  const [selectedHistoire3emePart, setSelectedHistoire3emePart] = useState<string>('all');
  const [selectedGeographie3emePart, setSelectedGeographie3emePart] = useState<string>('all');
  const [selectedSvt2ndeTheme, setSelectedSvt2ndeTheme] = useState<string>('all');
  const [selectedHistoire1erePart, setSelectedHistoire1erePart] = useState<string>('all');
  const [selectedFrancais2ndeModule, setSelectedFrancais2ndeModule] = useState<string>('all');
  const [selectedHistoire2ndePart, setSelectedHistoire2ndePart] = useState<string>('all');
  const [selectedGeographie2ndePart, setSelectedGeographie2ndePart] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filtrage des matières selon les directives officielles sénégalaises :
  // - Pas de Philosophie au Collège (6e à 3e) ni en classe de Seconde (L ou S)
  // - Pas de Physique-Chimie en classes de 6ème et 5ème (débute en 4ème)
  // - Éducation civique en classe de 6ème uniquement
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
      // Éducation civique pour tout le cycle Collège (6ème, 5ème, 4ème et 3ème / BFEM)
      if (subject.name === 'Éducation civique') {
        if (className !== '6ème' && className !== '5ème' && className !== '4ème' && className !== '3ème') {
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
    setSelectedHistoirePart('all');
    setSelectedHistoire5emePart('all');
    setSelectedHistoire4emePart('all');
    setSelectedCiviqueChapter('all');
    setSelectedGeographiePart('all');
    setSelectedGeographie5emePart('all');
    setSelectedGeographie4emePart('all');
    setSelectedAnglaisPart('all');
    setSelectedMathChapter('all');
    setSelectedSvt5emeTheme('all');
    setSelectedSvt4emeTheme('all');
    setSelectedSvt3emeTheme('all');
    setSelectedCivique4emePart('all');
    setSelectedCivique3emePart('all');
    setSelectedFrancais3emePart('all');
    setSelectedHistoire3emePart('all');
    setSelectedGeographie3emePart('all');
    setSelectedMath4emePart('all');
    setSelectedMath5emePart('all');
    setSelectedPc4emeTheme('all');
    setSelectedSvt2ndeTheme('all');
    setSelectedHistoire1erePart('all');
    setSelectedFrancais2ndeModule('all');
    setSelectedHistoire2ndePart('all');
    setSelectedGeographie2ndePart('all');
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

    // Matière SVT pour la classe de 3ème (Programme officiel complet - 26 leçons exhaustives avec schémas scientifiques SVG)
    if (selectedSubject === 'SVT' && selectedClass === '3ème') {
      return COURSES_SVT_3EME;
    }

    // Matière SVT pour la classe de Seconde S (Programme officiel complet - 11 leçons intégrales sans résumé)
    if (selectedSubject === 'SVT' && (selectedClass === 'Seconde' || selectedClass === '2nde')) {
      return COURSES_SVT_2NDE;
    }

    // Matière SVT pour la classe de 4ème (Livret de cours officiel complet - 15 leçons intégrales)
    if (selectedSubject === 'SVT' && selectedClass === '4ème') {
      return COURSES_SVT_4EME;
    }

    // Matière SVT pour la classe de 5ème (Fascicule officiel ADEM-Dakar / Inspection d'Académie de Dakar - 12 leçons intégrales)
    if (selectedSubject === 'SVT' && selectedClass === '5ème') {
      return COURSES_SVT_5EME;
    }

    // Matière Français pour la classe de Seconde (Séries L & S - Programme officiel national complet - 20 leçons exhaustives sans résumé)
    if (selectedSubject === 'Français' && (selectedClass === 'Seconde' || selectedClass === '2nde')) {
      return COURSES_FRANCAIS_2NDE;
    }

    // Matière Français pour la classe de 3ème (Programme officiel intégral sans résumé - 22 leçons exhaustives de préparation au BFEM)
    if (selectedSubject === 'Français' && selectedClass === '3ème') {
      return COURSES_FRANCAIS_3EME;
    }

    // Matière Éducation civique pour la classe de 3ème (Préparation BFEM - Programme officiel intégral : 11 leçons et 2 dossiers)
    if (selectedSubject === 'Éducation civique' && selectedClass === '3ème') {
      return COURSES_EDUCATION_CIVIQUE_3EME;
    }

    // Matière Éducation civique pour la classe de 4ème (Programme officiel sénégalais - 8 leçons complètes)
    if (selectedSubject === 'Éducation civique' && selectedClass === '4ème') {
      return COURSES_EDUCATION_CIVIQUE_4EME;
    }

    // Matière Éducation civique pour la classe de 5ème (Programme officiel sénégalais - 8 leçons avec Introductions et Conclusions)
    if (selectedSubject === 'Éducation civique' && selectedClass === '5ème') {
      return COURSES_EDUCATION_CIVIQUE_5EME;
    }

    // Matière Éducation civique pour la classe de 6ème (Programme officiel - 10 leçons réparties en 3 chapitres)
    if (selectedSubject === 'Éducation civique' && selectedClass === '6ème') {
      return COURSES_EDUCATION_CIVIQUE_6EME;
    }

    // Matière Éducation civique (fallback par défaut sur le programme de 5ème)
    if (selectedSubject === 'Éducation civique') {
      return COURSES_EDUCATION_CIVIQUE_5EME;
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

    // Matière Anglais pour la classe de 5ème (Volume 2 officiel Ibrahima Kane - 19 leçons 15 à 33 sans résumé avec détails de compréhension, intro & conclusion)
    if (selectedSubject === 'Anglais' && selectedClass === '5ème') {
      return COURSES_ANGLAIS_5EME;
    }

    // Matière Anglais pour la classe de 4ème (Programme officiel complet - 30 leçons intégrales avec explications approfondies et exercices corrigés)
    if (selectedSubject === 'Anglais' && selectedClass === '4ème') {
      return COURSES_ANGLAIS_4EME;
    }

    // Matière Anglais pour la classe de 3ème (Programme officiel complet BFEM - 18 leçons intégrales avec grammaire approfondie, argumentation et exercices résolus)
    if (selectedSubject === 'Anglais' && selectedClass === '3ème') {
      return COURSES_ANGLAIS_3EME;
    }

    // Matière Histoire pour la classe de 6ème (Programme officiel approfondi - 14 leçons intégrales avec introduction & conclusion)
    if (selectedSubject === 'Histoire' && selectedClass === '6ème') {
      return COURSES_HISTOIRE_6EME;
    }

    // Matière Histoire pour la classe de 5ème (Programme officiel complet - 14 leçons intégrales sans résumé avec détails de compréhension)
    if (selectedSubject === 'Histoire' && selectedClass === '5ème') {
      return COURSES_HISTOIRE_5EME;
    }

    // Matière Histoire pour la classe de 4ème (Programme officiel complet - 13 leçons intégrales sans résumé avec images de démonstration)
    if (selectedSubject === 'Histoire' && selectedClass === '4ème') {
      return COURSES_HISTOIRE_4EME;
    }

    // Matière Histoire pour la classe de 3ème (Programme officiel intégral sans résumé pour le BFEM - 19 leçons complètes)
    if (selectedSubject === 'Histoire' && selectedClass === '3ème') {
      return COURSES_HISTOIRE_3EME;
    }

    // Matière Histoire pour la classe de Seconde (Séries L & S - Programme officiel national complet - 24 leçons intégrales sans résumé)
    if (selectedSubject === 'Histoire' && (selectedClass === 'Seconde' || selectedClass === '2nde')) {
      return COURSES_HISTOIRE_2NDE;
    }

    // Matière Histoire pour la classe de Première (Programme officiel intégral sans résumé - 14 leçons complètes réparties en 4 parties)
    if (selectedSubject === 'Histoire' && (selectedClass === 'Première' || selectedClass === '1ère')) {
      return COURSES_HISTOIRE_1ERE;
    }

    // Matière Histoire (autres classes)
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

    // Matière Géographie pour la classe de 6ème uniquement (Programme officiel approfondi conforme au PDF - 13 leçons intégrales avec introduction & conclusion)
    if (selectedSubject === 'Géographie' && selectedClass === '6ème') {
      return COURSES_GEOGRAPHIE_6EME;
    }

    // Matière Géographie pour la classe de 5ème (Programme officiel complet conforme au document officiel du Ministère - 10 leçons intégrales approfondies avec introduction & conclusion)
    if (selectedSubject === 'Géographie' && selectedClass === '5ème') {
      return COURSES_GEOGRAPHIE_5EME;
    }

    // Matière Géographie pour la classe de 4ème (Programme officiel complet - 17 leçons intégrales avec figures, diagrammes, graphiques et exercices d'application)
    if (selectedSubject === 'Géographie' && selectedClass === '4ème') {
      return COURSES_GEOGRAPHIE_4EME;
    }

    // Matière Géographie pour la classe de 3ème (Programme officiel complet du BFEM - 13 leçons intégrales avec figures, schémas vectoriels explicatifs, cartes et fiches méthodologiques)
    if (selectedSubject === 'Géographie' && selectedClass === '3ème') {
      return COURSES_3EME_GEOGRAPHIE;
    }

    // Matière Géographie pour la classe de Seconde (Séries L & S - Programme officiel national complet - 20 leçons intégrales sans résumé)
    if (selectedSubject === 'Géographie' && (selectedClass === 'Seconde' || selectedClass === '2nde')) {
      return COURSES_GEOGRAPHIE_2NDE;
    }

    // Matière Géographie (autres classes)
    if (selectedSubject === 'Géographie') {
      return [
        {
          id: 'geo-senegal-interactive-map',
          title: 'CARTE INTERACTIVE : LE SÉNÉGAL PHYSIQUE, ADMINISTRATIF & CLIMATIQUE',
          type: 'cours',
          badge: 'Outil interactif officiel',
          description: 'Module cartographique complet : 14 régions administratives et leurs chefs-lieux, relief (Mamelles, Ferlo, Fouta-Djalon), hydrographie (fleuves Sénégal, Gambie, Casamance) et zones climatiques (Sahélien, Soudanien, Subguinéen).',
          content: 'Module interactif officiel du Sénégal pour les cours de géographie et d\'éveil civique.'
        },
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

    // Matière Mathématiques pour la classe de 6ème uniquement (Programme officiel complet - Activités Numériques : 13 leçons intégrales avec introduction & conclusion)
    if (selectedSubject === 'Mathématiques' && selectedClass === '6ème') {
      return COURSES_MATH_6EME;
    }

    // Matière Mathématiques pour la classe de 5ème (Programme officiel complet : Activités Géométriques avec Figures 1 à 5 et Activités Numériques avec 4 exercices corrigés par leçon)
    if (selectedSubject === 'Mathématiques' && selectedClass === '5ème') {
      return COURSES_MATH_5EME;
    }

    // Matière Mathématiques pour la classe de 4ème (Programme officiel complet - Activités Numériques : 12 leçons intégrales avec 2 exercices complets et corrigés par leçon)
    if (selectedSubject === 'Mathématiques' && selectedClass === '4ème') {
      return COURSES_MATH_4EME;
    }

    // Matière Mathématiques pour la classe de 3ème (Programme officiel complet BFEM - 12 leçons intégrales avec figures géométriques et exercices résolus sans résumé)
    if (selectedSubject === 'Mathématiques' && selectedClass === '3ème') {
      return COURSES_MATH_3EME;
    }

    // Matière Physique-Chimie pour la classe de 4ème (Programme officiel complet : Physique/Électricité et Chimie/Matière avec figures et schémas vectoriels obligatoires)
    if (selectedSubject === 'Physique-Chimie' && selectedClass === '4ème') {
      return COURSES_PC_4EME;
    }

    // Matière Physique-Chimie pour la classe de 3ème (Programme officiel BFEM complet : Chimie 1-6 et Physique 7-15 avec figures et protocoles expérimentaux obligatoires)
    if (selectedSubject === 'Physique-Chimie' && selectedClass === '3ème') {
      return COURSES_PC_3EME;
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
    const matchesCiviqueChapter =
      selectedSubject !== 'Éducation civique' ||
      activeTab !== 'cours' ||
      selectedCiviqueChapter === 'all' ||
      (selectedCiviqueChapter === 'chap-1' && item.badge?.includes('Chapitre 1')) ||
      (selectedCiviqueChapter === 'chap-2' && item.badge?.includes('Chapitre 2')) ||
      (selectedCiviqueChapter === 'chap-3' && item.badge?.includes('Chapitre 3')) ||
      (selectedCiviqueChapter === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedCiviqueChapter === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedCiviqueChapter === 'part-3' && item.badge?.includes('Partie 3'));
    const matchesHistoirePart =
      selectedSubject !== 'Histoire' ||
      selectedClass !== '6ème' ||
      activeTab !== 'cours' ||
      selectedHistoirePart === 'all' ||
      (selectedHistoirePart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedHistoirePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedHistoirePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedHistoirePart === 'part-4' && item.badge?.includes('Partie 4'));
    const matchesHistoire5emePart =
      selectedSubject !== 'Histoire' ||
      selectedClass !== '5ème' ||
      activeTab !== 'cours' ||
      selectedHistoire5emePart === 'all' ||
      (selectedHistoire5emePart === 'part-1' && item.badge?.includes('1er Trimestre')) ||
      (selectedHistoire5emePart === 'part-2' && item.badge?.includes('2ème Trimestre')) ||
      (selectedHistoire5emePart === 'part-3' && item.badge?.includes('3ème Trimestre'));
    const matchesHistoire4emePart =
      selectedSubject !== 'Histoire' ||
      selectedClass !== '4ème' ||
      activeTab !== 'cours' ||
      selectedHistoire4emePart === 'all' ||
      (selectedHistoire4emePart === 'chap-1' && item.badge?.includes('Chapitre 1')) ||
      (selectedHistoire4emePart === 'chap-2' && item.badge?.includes('Chapitre 2')) ||
      (selectedHistoire4emePart === 'chap-3' && item.badge?.includes('Chapitre 3'));
    const matchesHistoire3emePart =
      selectedSubject !== 'Histoire' ||
      selectedClass !== '3ème' ||
      activeTab !== 'cours' ||
      selectedHistoire3emePart === 'all' ||
      (selectedHistoire3emePart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedHistoire3emePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedHistoire3emePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedHistoire3emePart === 'part-4' && item.badge?.includes('Partie 4')) ||
      (selectedHistoire3emePart === 'part-5' && item.badge?.includes('Partie 5'));
    const matchesGeographiePart =
      selectedSubject !== 'Géographie' ||
      selectedClass !== '6ème' ||
      activeTab !== 'cours' ||
      selectedGeographiePart === 'all' ||
      (selectedGeographiePart === 'partie-1' && item.badge?.includes('Partie 1')) ||
      (selectedGeographiePart === 'partie-2' && item.badge?.includes('Partie 2')) ||
      (selectedGeographiePart === 'partie-3' && item.badge?.includes('Partie 3'));
    const matchesGeographie5emePart =
      selectedSubject !== 'Géographie' ||
      selectedClass !== '5ème' ||
      activeTab !== 'cours' ||
      selectedGeographie5emePart === 'all' ||
      (selectedGeographie5emePart === 'intro' && item.badge?.includes('Introduction')) ||
      (selectedGeographie5emePart === 'chapitre-1' && item.badge?.includes('Chapitre I')) ||
      (selectedGeographie5emePart === 'chapitre-2' && item.badge?.includes('Chapitre II')) ||
      (selectedGeographie5emePart === 'chapitre-3' && item.badge?.includes('Chapitre III'));
    const matchesGeographie4emePart =
      selectedSubject !== 'Géographie' ||
      selectedClass !== '4ème' ||
      activeTab !== 'cours' ||
      selectedGeographie4emePart === 'all' ||
      (selectedGeographie4emePart === 'part-1' && (item.badge?.includes('Partie I') || item.badge?.includes('Méthodologie') || item.badge?.includes('Représentations'))) ||
      (selectedGeographie4emePart === 'part-2' && (item.badge?.includes('Partie II') || item.badge?.includes('Afrique Physique'))) ||
      (selectedGeographie4emePart === 'part-3' && (item.badge?.includes('Partie III') || item.badge?.includes('Humain & Économie'))) ||
      (selectedGeographie4emePart === 'part-4' && (item.badge?.includes('Partie IV') || item.badge?.includes('Économie Régionale') || item.badge?.includes('Environnement')));
    const matchesGeographie3emePart =
      selectedSubject !== 'Géographie' ||
      selectedClass !== '3ème' ||
      activeTab !== 'cours' ||
      selectedGeographie3emePart === 'all' ||
      (selectedGeographie3emePart === 'part-1' && (item.badge?.includes('Partie 1') || item.id === 'geo-senegal-interactive-map-3eme')) ||
      (selectedGeographie3emePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedGeographie3emePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedGeographie3emePart === 'part-4' && item.badge?.includes('Partie 4'));
    const matchesAnglaisPart =
      selectedSubject !== 'Anglais' ||
      selectedClass !== '5ème' ||
      activeTab !== 'cours' ||
      selectedAnglaisPart === 'all' ||
      (selectedAnglaisPart === 'vol1-a' && item.badge?.includes('Présent & Passé')) ||
      (selectedAnglaisPart === 'vol1-b' && item.badge?.includes('Futur')) ||
      (selectedAnglaisPart === 'vol1-c' && item.badge?.includes('Comparatifs')) ||
      (selectedAnglaisPart === 'partie-1' && (item.badge?.includes('Modaux') || item.badge?.includes('Partie 1'))) ||
      (selectedAnglaisPart === 'partie-2' && (item.badge?.includes('Quotidien') || item.badge?.includes('Partie 2'))) ||
      (selectedAnglaisPart === 'partie-3' && (item.badge?.includes('Orthographe') || item.badge?.includes('Partie 3'))) ||
      (selectedAnglaisPart === 'partie-4' && (item.badge?.includes('Méthodologie') || item.badge?.includes('Partie 4')));
    const matchesAnglais4emePart =
      selectedSubject !== 'Anglais' ||
      selectedClass !== '4ème' ||
      activeTab !== 'cours' ||
      selectedAnglais4emePart === 'all' ||
      (selectedAnglais4emePart === 'part-1' && (item.badge?.includes('Part 1') || item.badge?.includes('Noms & Déterminants'))) ||
      (selectedAnglais4emePart === 'part-2' && (item.badge?.includes('Part 2') || item.badge?.includes('Passé, Futur & Question Tags'))) ||
      (selectedAnglais4emePart === 'part-3' && (item.badge?.includes('Part 3') || item.badge?.includes('Modaux, Relatives & Passif'))) ||
      (selectedAnglais4emePart === 'part-4' && (item.badge?.includes('Part 4') || item.badge?.includes('Thèmes, Culture & Examen')));
    const matchesMathChapter =
      selectedSubject !== 'Mathématiques' ||
      selectedClass !== '6ème' ||
      activeTab !== 'cours' ||
      selectedMathChapter === 'all' ||
      (selectedMathChapter === 'geometrie' && item.badge?.includes('Géométrie')) ||
      (selectedMathChapter === 'numerique' && !item.badge?.includes('Géométrie')) ||
      (selectedMathChapter === 'geom1' && item.badge?.includes('Ch. V')) ||
      (selectedMathChapter === 'geom2' && item.badge?.includes('Ch. VI')) ||
      (selectedMathChapter === 'geom3' && item.badge?.includes('Ch. VII')) ||
      (selectedMathChapter === 'chap1' && item.badge?.includes('Chapitre I')) ||
      (selectedMathChapter === 'chap2' && item.badge?.includes('Chapitre II')) ||
      (selectedMathChapter === 'chap3' && item.badge?.includes('Chapitre III')) ||
      (selectedMathChapter === 'chap4' && item.badge?.includes('Chapitre IV'));
    const matchesSvt5emeTheme =
      selectedSubject !== 'SVT' ||
      selectedClass !== '5ème' ||
      activeTab !== 'cours' ||
      selectedSvt5emeTheme === 'all' ||
      (selectedSvt5emeTheme === 'theme-1' && item.badge?.includes('Thème 1')) ||
      (selectedSvt5emeTheme === 'theme-2' && item.badge?.includes('Thème 2')) ||
      (selectedSvt5emeTheme === 'theme-3' && item.badge?.includes('Thème 3'));
    const matchesSvt4emeTheme =
      selectedSubject !== 'SVT' ||
      selectedClass !== '4ème' ||
      activeTab !== 'cours' ||
      selectedSvt4emeTheme === 'all' ||
      (selectedSvt4emeTheme === 'theme-1' && item.badge?.includes('Thème 1')) ||
      (selectedSvt4emeTheme === 'theme-2' && item.badge?.includes('Thème 2')) ||
      (selectedSvt4emeTheme === 'theme-3' && item.badge?.includes('Thème 3'));
    const matchesSvt3emeTheme =
      selectedSubject !== 'SVT' ||
      selectedClass !== '3ème' ||
      activeTab !== 'cours' ||
      selectedSvt3emeTheme === 'all' ||
      (selectedSvt3emeTheme === 'theme-1' && item.badge?.includes('Thème 1')) ||
      (selectedSvt3emeTheme === 'theme-2' && item.badge?.includes('Thème 2')) ||
      (selectedSvt3emeTheme === 'theme-3' && item.badge?.includes('Thème 3')) ||
      (selectedSvt3emeTheme === 'theme-4' && item.badge?.includes('Thème 4')) ||
      (selectedSvt3emeTheme === 'theme-5' && item.badge?.includes('Thème 5'));
    const matchesCivique4emePart =
      selectedSubject !== 'Éducation civique' ||
      selectedClass !== '4ème' ||
      activeTab !== 'cours' ||
      selectedCivique4emePart === 'all' ||
      ((selectedCivique4emePart === 'part-1' || selectedCivique4emePart === 'partie-1') && item.badge?.includes('Partie 1')) ||
      ((selectedCivique4emePart === 'part-2' || selectedCivique4emePart === 'partie-2') && item.badge?.includes('Partie 2')) ||
      ((selectedCivique4emePart === 'part-3' || selectedCivique4emePart === 'partie-3') && item.badge?.includes('Partie 3'));
    const matchesCivique3emePart =
      selectedSubject !== 'Éducation civique' ||
      selectedClass !== '3ème' ||
      activeTab !== 'cours' ||
      selectedCivique3emePart === 'all' ||
      ((selectedCivique3emePart === 'part-1' || selectedCivique3emePart === 'partie-1') && item.badge?.includes('Partie 1')) ||
      ((selectedCivique3emePart === 'part-2' || selectedCivique3emePart === 'partie-2') && item.badge?.includes('Partie 2')) ||
      ((selectedCivique3emePart === 'part-3' || selectedCivique3emePart === 'partie-3') && item.badge?.includes('Partie 3'));
    const matchesFrancais3emePart =
      selectedSubject !== 'Français' ||
      selectedClass !== '3ème' ||
      activeTab !== 'cours' ||
      selectedFrancais3emePart === 'all' ||
      (selectedFrancais3emePart === 'part-1' && item.badge?.includes('Syntaxe')) ||
      (selectedFrancais3emePart === 'part-2' && (item.badge?.includes('Grammaire') || item.badge?.includes('Conjugaison'))) ||
      (selectedFrancais3emePart === 'part-3' && (item.badge?.includes('Orthographe') || item.badge?.includes('Vocabulaire') || item.badge?.includes('Littéraire'))) ||
      (selectedFrancais3emePart === 'part-4' && (item.badge?.includes('Littérature') || item.badge?.includes('BFEM')));
    const matchesMath4emePart =
      selectedSubject !== 'Mathématiques' ||
      selectedClass !== '4ème' ||
      activeTab !== 'cours' ||
      selectedMath4emePart === 'all' ||
      (selectedMath4emePart === 'geometrie' && item.badge?.includes('Géométrique')) ||
      (selectedMath4emePart === 'numerique' && item.badge?.includes('Numérique')) ||
      (selectedMath4emePart === 'geom-pythagore-trigo' && item.badge?.includes('Pythagore & Trigo')) ||
      (selectedMath4emePart === 'geom-thales-milieux' && item.badge?.includes('Thalès & Milieux')) ||
      (selectedMath4emePart === 'geom-translation-espace' && item.badge?.includes('Translation & Espace')) ||
      (selectedMath4emePart === 'theme-1' && item.badge?.includes('Partie 1')) ||
      (selectedMath4emePart === 'theme-2' && item.badge?.includes('Partie 2')) ||
      (selectedMath4emePart === 'theme-3' && item.badge?.includes('Partie 3'));
    const matchesMath5emePart =
      selectedSubject !== 'Mathématiques' ||
      selectedClass !== '5ème' ||
      activeTab !== 'cours' ||
      selectedMath5emePart === 'all' ||
      (selectedMath5emePart === 'geometrie' && item.badge?.includes('Act. Géométriques')) ||
      (selectedMath5emePart === 'numerique' && item.badge?.includes('Act. Numériques')) ||
      (selectedMath5emePart === 'num-operations' && (item.id === 'math-5eme-lecon-1' || item.id === 'math-5eme-lecon-2' || item.id === 'math-5eme-lecon-3')) ||
      (selectedMath5emePart === 'num-algebre' && (item.id === 'math-5eme-lecon-4' || item.id === 'math-5eme-lecon-5' || item.id === 'math-5eme-lecon-6' || item.id === 'math-5eme-lecon-7')) ||
      (selectedMath5emePart === 'geom-plane' && (item.id === 'math-5eme-lecon-8' || item.id === 'math-5eme-lecon-9' || item.id === 'math-5eme-lecon-10')) ||
      (selectedMath5emePart === 'geom-quad-espace' && (item.id === 'math-5eme-lecon-11' || item.id === 'math-5eme-lecon-12'));
    const matchesPc4emeTheme =
      selectedSubject !== 'Physique-Chimie' ||
      selectedClass !== '4ème' ||
      activeTab !== 'cours' ||
      selectedPc4emeTheme === 'all' ||
      (selectedPc4emeTheme === 'chimie-officiel' && item.badge?.includes('Chimie (Officiel)')) ||
      (selectedPc4emeTheme === 'gaz-combustions' && (item.id === 'pc-4eme-chimie-c1' || item.id === 'pc-4eme-chimie-c2' || item.id === 'pc-4eme-chimie-c4')) ||
      (selectedPc4emeTheme === 'atomes-reactions' && (item.id === 'pc-4eme-chimie-c3' || item.id === 'pc-4eme-chimie-c5')) ||
      (selectedPc4emeTheme === 'physique' && (item.badge?.includes('Physique') || item.badge?.includes('Électricité'))) ||
      (selectedPc4emeTheme === 'eau-matiere' && item.badge?.includes('Eau'));
    const matchesPc3emeTheme =
      selectedSubject !== 'Physique-Chimie' ||
      selectedClass !== '3ème' ||
      activeTab !== 'cours' ||
      selectedPc3emeTheme === 'all' ||
      (selectedPc3emeTheme === 'chimie-solutions' && (item.id === 'pc-3eme-lecon-1' || item.id === 'pc-3eme-lecon-2')) ||
      (selectedPc3emeTheme === 'chimie-reactions' && (item.id === 'pc-3eme-lecon-3' || item.id === 'pc-3eme-lecon-4' || item.id === 'pc-3eme-lecon-5' || item.id === 'pc-3eme-lecon-4-5' || item.id === 'pc-3eme-lecon-6')) ||
      (selectedPc3emeTheme === 'physique-optique' && (item.id === 'pc-3eme-lecon-7' || item.id === 'pc-3eme-lecon-8' || item.id === 'pc-3eme-lecon-9' || item.id === 'pc-3eme-lecon-8-9')) ||
      (selectedPc3emeTheme === 'physique-mecanique' && (item.id === 'pc-3eme-lecon-10' || item.id === 'pc-3eme-lecon-11' || item.id === 'pc-3eme-lecon-10-11' || item.id === 'pc-3eme-lecon-12' || item.id === 'pc-3eme-lecon-13' || item.id === 'pc-3eme-lecon-12-13')) ||
      (selectedPc3emeTheme === 'physique-electricite' && (item.id === 'pc-3eme-lecon-14' || item.id === 'pc-3eme-lecon-15' || item.id === 'pc-3eme-lecon-14-15'));
    const matchesMath3emeTheme =
      selectedSubject !== 'Mathématiques' ||
      selectedClass !== '3ème' ||
      activeTab !== 'cours' ||
      selectedMath3emeTheme === 'all' ||
      (selectedMath3emeTheme === 'numerique' && item.badge?.includes('Numériques')) ||
      (selectedMath3emeTheme === 'geometrique' && item.badge?.includes('Géométriques'));
    const matchesSvt2ndeTheme =
      selectedSubject !== 'SVT' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      activeTab !== 'cours' ||
      selectedSvt2ndeTheme === 'all' ||
      (selectedSvt2ndeTheme === 'ecologie-fondamentale' && item.badge?.includes('Écologie Fondamentale')) ||
      (selectedSvt2ndeTheme === 'ressources-naturelles' && item.badge?.includes('Ressources Naturelles')) ||
      (selectedSvt2ndeTheme === 'amenagement-espace' && item.badge?.includes('Aménagement de l\'Espace')) ||
      (selectedSvt2ndeTheme === 'espece-evolution' && item.badge?.includes('Espèce, Variation & Évolution'));
    const matchesHistoire1erePart =
      selectedSubject !== 'Histoire' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      activeTab !== 'cours' ||
      selectedHistoire1erePart === 'all' ||
      (selectedHistoire1erePart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedHistoire1erePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedHistoire1erePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedHistoire1erePart === 'part-4' && item.badge?.includes('Partie 4'));
    const matchesFrancais2ndeModule =
      selectedSubject !== 'Français' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      activeTab !== 'cours' ||
      selectedFrancais2ndeModule === 'all' ||
      (selectedFrancais2ndeModule === 'module-1' && item.badge?.includes('Module 1')) ||
      (selectedFrancais2ndeModule === 'module-2' && item.badge?.includes('Module 2')) ||
      (selectedFrancais2ndeModule === 'module-3' && item.badge?.includes('Module 3')) ||
      (selectedFrancais2ndeModule === 'module-4' && item.badge?.includes('Module 4')) ||
      (selectedFrancais2ndeModule === 'module-5' && item.badge?.includes('Module 5'));
    const matchesHistoire2ndePart =
      selectedSubject !== 'Histoire' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      activeTab !== 'cours' ||
      selectedHistoire2ndePart === 'all' ||
      (selectedHistoire2ndePart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedHistoire2ndePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedHistoire2ndePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedHistoire2ndePart === 'part-4' && item.badge?.includes('Partie 4'));
    const matchesGeographie2ndePart =
      selectedSubject !== 'Géographie' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      activeTab !== 'cours' ||
      selectedGeographie2ndePart === 'all' ||
      (selectedGeographie2ndePart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedGeographie2ndePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedGeographie2ndePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedGeographie2ndePart === 'part-4' && item.badge?.includes('Partie 4'));
    return matchesTab && matchesSearch && matchesCiviqueChapter && matchesHistoirePart && matchesHistoire5emePart && matchesHistoire4emePart && matchesHistoire3emePart && matchesGeographiePart && matchesGeographie5emePart && matchesGeographie4emePart && matchesGeographie3emePart && matchesAnglaisPart && matchesAnglais4emePart && matchesMathChapter && matchesSvt5emeTheme && matchesSvt4emeTheme && matchesSvt3emeTheme && matchesCivique4emePart && matchesCivique3emePart && matchesFrancais3emePart && matchesMath4emePart && matchesMath5emePart && matchesMath3emeTheme && matchesPc4emeTheme && matchesPc3emeTheme && matchesSvt2ndeTheme && matchesHistoire1erePart && matchesFrancais2ndeModule && matchesHistoire2ndePart && matchesGeographie2ndePart;
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

      {/* Organisation officielle par thèmes pour SVT 5ème */}
      {selectedSubject === 'SVT' && selectedClass === '5ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Programme officiel sénégalais : 18 leçons réparties en 3 grands thèmes
              </span>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Cours intégraux sans résumé — Planète Terre, Le Vivant et son Évolution, Corps Humain et Santé
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
              Classe de 5ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {SVT_5EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedSvt5emeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedSvt5emeTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700/20'
                      : 'bg-white text-gray-700 hover:bg-emerald-100/70 border border-emerald-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par thèmes pour SVT 4ème */}
      {selectedSubject === 'SVT' && selectedClass === '4ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Programme officiel sénégalais : 15 leçons complètes sans résumé
              </span>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Ressources & Biologie humaine, Reproduction humaine & Sols, Géologie & Dynamique de la Terre
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
              Classe de 4ème
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {SVT_4EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedSvt4emeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedSvt4emeTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700/20'
                      : 'bg-white text-gray-700 hover:bg-emerald-100/70 border border-emerald-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par thèmes pour SVT 3ème */}
      {selectedSubject === 'SVT' && selectedClass === '3ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Programme officiel SVT 3ème : 26 leçons complètes avec schémas scientifiques SVG
              </span>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Système nerveux, Immunologie, Grandes endémies & IST, Tectonique des plaques, Nutrition & Digestion
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
              Classe de 3ème / BFEM
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {SVT_3EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedSvt3emeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedSvt3emeTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700/20'
                      : 'bg-white text-gray-700 hover:bg-emerald-100/70 border border-emerald-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour SVT Seconde S */}
      {selectedSubject === 'SVT' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Programme officiel SVT Seconde S : 11 leçons intégrales sans résumé (Fascicule IA Louga)
              </span>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Écologie fondamentale & Méthodologie, Ressources naturelles (Sols, Eau, Énergie), Aménagement de l'espace & Évolution des êtres vivants
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
              Classe de Seconde S • Lycée
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {SVT_2NDE_FILTER_THEMES.map(theme => {
              const isSelected = selectedSvt2ndeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedSvt2ndeTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700/20'
                      : 'bg-white text-gray-700 hover:bg-emerald-100/70 border border-emerald-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par thèmes pour Mathématiques 5ème */}
      {selectedSubject === 'Mathématiques' && selectedClass === '5ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-blue-700" />
                Mathématiques 5ème : 12 leçons intégrales (Figures 1 à 5 obligatoires & 4 exercices corrigés par leçon)
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Activités Géométriques (Symétrie centrale, Angles, Triangles, Parallélogrammes, Prisme droit & Cylindre) & Activités Numériques (Priorités, Diviseurs, Fractions, Relatifs, Puissances, Calcul littéral, Proportionnalité).
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
              Classe de 5ème
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {MATH_5EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedMath5emePart === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedMath5emePart(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour Mathématiques 4ème */}
      {selectedSubject === 'Mathématiques' && selectedClass === '4ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-blue-700" />
                Mathématiques 4ème : 19 leçons (Activités Géométriques & Numériques) avec 2 exercices complets et corrigés par leçon
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Pythagore (direct & réciproque), Cosinus, Thalès, Théorème des milieux, Translation, Pyramide & Cône, Relatifs, Rationnels, Puissances, Calcul littéral, Équations...
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
              Classe de 4ème
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {MATH_4EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedMath4emePart === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedMath4emePart(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour Mathématiques 3ème (BFEM Sénégal) */}
      {selectedSubject === 'Mathématiques' && selectedClass === '3ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-blue-700" />
                Mathématiques 3ème : 12 leçons intégrales avec figures géométriques et exercices résolus
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Activités Numériques (Leçons 1 à 6) & Activités Géométriques (Leçons 7 à 12) — Cours complets sans résumé
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
              Classe de 3ème / BFEM
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {MATH_3EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedMath3emeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedMath3emeTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour Physique-Chimie 4ème */}
      {selectedSubject === 'Physique-Chimie' && selectedClass === '4ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-purple-50 to-indigo-50 border border-purple-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-purple-700" />
                Physique-Chimie 4ème : Cours complet de Chimie (Leçons C1 à C5) & Physique
              </span>
              <p className="text-[11px] text-purple-800/80 mt-0.5">
                L'air (Fig 1 & 2), Propriétés des gaz (Fig 3), Atomes & Molécules (Fig 4), Combustions (Fig 5), Réaction chimique & Lavoisier (Fig 6) — Figures de démonstration obligatoires et 3 exercices résolus par leçon.
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-purple-800 bg-white px-2.5 py-1 rounded-full border border-purple-200 shadow-2xs">
              Classe de 4ème
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PC_4EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedPc4emeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedPc4emeTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-sm ring-2 ring-purple-700/20'
                      : 'bg-white text-gray-700 hover:bg-purple-100/70 border border-purple-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour Physique-Chimie 3ème (BFEM Sénégal) */}
      {selectedSubject === 'Physique-Chimie' && selectedClass === '3ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-purple-700" />
                Physique-Chimie 3ème (BFEM) : Cours complet de Chimie (Leçons 1 à 6) & Physique (Leçons 7 à 15)
              </span>
              <p className="text-[11px] text-purple-800/80 mt-0.5">
                Figures vectorielles obligatoires (Fig 1 à 10), protocoles expérimentaux détaillés, observations, interprétations, équations de réactions et annales résolues pas-à-pas du BFEM.
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-purple-800 bg-white px-2.5 py-1 rounded-full border border-purple-200 shadow-2xs">
              Classe de 3ème / BFEM
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PC_3EME_FILTER_THEMES.map(theme => {
              const isSelected = selectedPc3emeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedPc3emeTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-sm ring-2 ring-purple-700/20'
                      : 'bg-white text-gray-700 hover:bg-purple-100/70 border border-purple-200/70'
                  }`}
                >
                  <span>{theme.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour l'Éducation Civique 5ème */}
      {selectedSubject === 'Éducation civique' && selectedClass === '5ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-teal-700" />
                Programme officiel sénégalais : 8 leçons réparties en 3 parties
              </span>
              <p className="text-[11px] text-teal-800/80 mt-0.5">
                Cours complets avec Introductions et Conclusions (Sans résumés)
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-teal-800 bg-white px-2.5 py-1 rounded-full border border-teal-200 shadow-2xs">
              Classe de 5ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CIVIQUE_5EME_PARTS.map(part => {
              const isSelected = selectedCiviqueChapter === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedCiviqueChapter(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                      : 'bg-white text-gray-700 hover:bg-teal-100/70 border border-teal-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par chapitres pour l'Éducation Civique 6ème */}
      {selectedSubject === 'Éducation civique' && selectedClass === '6ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-teal-700" />
                Organisation officielle : 10 leçons réparties en 3 chapitres
              </span>
              <p className="text-[11px] text-teal-800/80 mt-0.5">
                Programme officiel sénégalais - Textes intégraux sans abréviation
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-teal-800 bg-white px-2.5 py-1 rounded-full border border-teal-200 shadow-2xs">
              Classe de 6ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CIVIQUE_6EME_CHAPTERS.map(chap => {
              const isSelected = selectedCiviqueChapter === chap.id;
              return (
                <button
                  key={chap.id}
                  onClick={() => setSelectedCiviqueChapter(chap.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                      : 'bg-white text-gray-700 hover:bg-teal-100/70 border border-teal-200/70'
                  }`}
                >
                  <span>{chap.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    {chap.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour l'Éducation Civique 4ème */}
      {selectedSubject === 'Éducation civique' && selectedClass === '4ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-teal-700" />
                Programme officiel sénégalais : 7 leçons intégrales (Année Scolaire 2026-2027)
              </span>
              <p className="text-[11px] text-teal-800/80 mt-0.5">
                Concepts de base, Nation sénégalaise, État souverain, Constitution, Symboles républicains, Démocratie et Vote
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-teal-800 bg-white px-2.5 py-1 rounded-full border border-teal-200 shadow-2xs">
              Classe de 4ème • 7 leçons
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CIVIQUE_4EME_PARTS.map(part => {
              const isSelected = selectedCivique4emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedCivique4emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                      : 'bg-white text-gray-700 hover:bg-teal-100/70 border border-teal-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour l'Éducation Civique 3ème */}
      {selectedSubject === 'Éducation civique' && selectedClass === '3ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-teal-700" />
                Programme officiel sénégalais : 11 leçons & 2 dossiers officiels (Préparation BFEM)
              </span>
              <p className="text-[11px] text-teal-800/80 mt-0.5">
                Environnement & Patrimoine, Vivre Ensemble, Démocratie, État de droit, Justice & Droits de l'Homme
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-teal-800 bg-white px-2.5 py-1 rounded-full border border-teal-200 shadow-2xs">
              Classe de 3ème • BFEM
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CIVIQUE_3EME_PARTS.map(part => {
              const isSelected = selectedCivique3emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedCivique3emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                      : 'bg-white text-gray-700 hover:bg-teal-100/70 border border-teal-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour le Français 3ème / BFEM */}
      {selectedSubject === 'Français' && selectedClass === '3ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel complet de Français 3ème (22 leçons exhaustives sans résumé - BFEM)
              </span>
              <p className="text-[11px] text-amber-900/80 mt-0.5">
                Syntaxe & subordonnées, Morphosyntaxe, Système verbal, Orthographe grammaticale, Figures de style et Rédaction BFEM
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-900 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de 3ème / BFEM
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {FRANCAIS_3EME_PARTS.map(part => {
              const isSelected = selectedFrancais3emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedFrancais3emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour l'Histoire 6ème */}
      {selectedSubject === 'Histoire' && selectedClass === '6ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel sénégalais : 14 leçons réparties en 4 parties
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Cours complet et approfondi - Introduction et conclusion dans chaque leçon
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de 6ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {HISTOIRE_6EME_PARTS.map(part => {
              const isSelected = selectedHistoirePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedHistoirePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par trimestres pour l'Histoire 5ème */}
      {selectedSubject === 'Histoire' && selectedClass === '5ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel sénégalais : 14 leçons réparties en 3 trimestres
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Histoire 5ème : Cours intégraux sans résumé avec approfondissements et détails de compréhension
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de 5ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {HISTOIRE_5EME_PARTS.map(part => {
              const isSelected = selectedHistoire5emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedHistoire5emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par chapitres pour l'Histoire 4ème */}
      {selectedSubject === 'Histoire' && selectedClass === '4ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel sénégalais : 13 leçons réparties en 3 chapitres
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Histoire 4ème : Cours intégraux sans résumé avec figures et schémas vectoriels explicatifs
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de 4ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {HISTOIRE_4EME_PARTS.map(part => {
              const isSelected = selectedHistoire4emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedHistoire4emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour l'Histoire 3ème / BFEM */}
      {selectedSubject === 'Histoire' && selectedClass === '3ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel sénégalais : 19 leçons réparties en 5 grandes parties (Préparation BFEM)
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Histoire 3ème : Cours complets et exhaustifs sans résumé — Révolution industrielle, Impérialisme, Conflits mondiaux, Décolonisation & Sénégal
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de 3ème • BFEM
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {HISTOIRE_3EME_PARTS.map(part => {
              const isSelected = selectedHistoire3emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedHistoire3emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour l'Histoire Première (Séries L & S) */}
      {selectedSubject === 'Histoire' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel sénégalais : 14 leçons réparties en 4 grandes parties
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Histoire Première : Cours officiels intégraux sans résumé — Révolution industrielle, Impérialisme en Afrique, Nouveaux Impérialismes, Conflits du XXe siècle
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de Première (L & S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {HISTOIRE_1ERE_PARTS.map(part => {
              const isSelected = selectedHistoire1erePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedHistoire1erePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour l'Histoire Seconde (Séries L & S) */}
      {selectedSubject === 'Histoire' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel sénégalais : 24 leçons réparties en 4 grandes parties (Séries L & S)
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Histoire Seconde : Cours intégraux sans résumé — Méthodologie & Préhistoire, Civilisations antiques africaines, Grands empires & Sénégambie, Traites & Révolutions
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de Seconde (L & S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {HISTOIRE_2NDE_PARTS.map(part => {
              const isSelected = selectedHistoire2ndePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedHistoire2ndePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par modules pour Français Seconde (Séries L & S) */}
      {selectedSubject === 'Français' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel sénégalais : 20 leçons réparties en 5 grands modules (Séries L & S)
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Français Seconde : Cours intégraux sans résumé — Méthodologie du Bac, Genres littéraires, Théâtre & Apologue, Langue & Stylistique, Œuvres intégrales
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-900 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de Seconde (L & S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {FRANCAIS_2NDE_MODULES.map(mod => {
              const isSelected = selectedFrancais2ndeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedFrancais2ndeModule(mod.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-800/20'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                  }`}
                >
                  <span>{mod.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {mod.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour la Géographie 6ème */}
      {selectedSubject === 'Géographie' && selectedClass === '6ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-orange-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-orange-700" />
                Programme officiel sénégalais : 13 leçons réparties en 3 parties
              </span>
              <p className="text-[11px] text-orange-800/80 mt-0.5">
                Cours intégraux sans résumé avec Introduction et Conclusion pour chaque leçon
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-orange-800 bg-white px-2.5 py-1 rounded-full border border-orange-200 shadow-2xs">
              Classe de 6ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {GEOGRAPHIE_6EME_FILTER_PARTS.map(part => {
              const isSelected = selectedGeographiePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedGeographiePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-orange-700 text-white shadow-sm ring-2 ring-orange-700/20'
                      : 'bg-white text-gray-700 hover:bg-orange-100/70 border border-orange-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour la Géographie 5ème */}
      {selectedSubject === 'Géographie' && selectedClass === '5ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-orange-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-orange-700" />
                Programme officiel sénégalais : 10 leçons réparties en 4 chapitres
              </span>
              <p className="text-[11px] text-orange-800/80 mt-0.5">
                Cours intégraux sans résumé — Outils, aspects physiques, population et développement durable
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-orange-800 bg-white px-2.5 py-1 rounded-full border border-orange-200 shadow-2xs">
              Classe de 5ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {GEOGRAPHIE_5EME_FILTER_PARTS.map(part => {
              const isSelected = selectedGeographie5emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedGeographie5emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-orange-700 text-white shadow-sm ring-2 ring-orange-700/20'
                      : 'bg-white text-gray-700 hover:bg-orange-100/70 border border-orange-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour la Géographie 4ème */}
      {selectedSubject === 'Géographie' && selectedClass === '4ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-orange-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-orange-700" />
                Programme officiel sénégalais : 17 leçons réparties en 4 parties
              </span>
              <p className="text-[11px] text-orange-800/80 mt-0.5">
                Géographie 4ème : Cours intégraux sans résumé avec figures, diagrammes, graphiques, cartes et exercices corrigés
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-orange-800 bg-white px-2.5 py-1 rounded-full border border-orange-200 shadow-2xs">
              Classe de 4ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {GEOGRAPHIE_4EME_FILTER_PARTS.map(part => {
              const isSelected = selectedGeographie4emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedGeographie4emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-orange-700 text-white shadow-sm ring-2 ring-orange-700/20'
                      : 'bg-white text-gray-700 hover:bg-orange-100/70 border border-orange-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour la Géographie 3ème / BFEM */}
      {selectedSubject === 'Géographie' && selectedClass === '3ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-orange-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-orange-700" />
                Programme officiel sénégalais : 13 leçons réparties en 4 grandes parties (Préparation BFEM)
              </span>
              <p className="text-[11px] text-orange-800/80 mt-0.5">
                Géographie 3ème : Cours intégraux sans résumé avec figures, diagrammes, graphiques, cartes interactives et fiches de révision
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-orange-800 bg-white px-2.5 py-1 rounded-full border border-orange-200 shadow-2xs">
              Classe de 3ème • BFEM
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {GEOGRAPHIE_3EME_PARTS.map(part => {
              const isSelected = selectedGeographie3emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedGeographie3emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-orange-700 text-white shadow-sm ring-2 ring-orange-700/20'
                      : 'bg-white text-gray-700 hover:bg-orange-100/70 border border-orange-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle pour la Géographie Seconde (Séries L & S) */}
      {selectedSubject === 'Géographie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Programme officiel sénégalais : 20 leçons réparties en 4 grandes parties (Séries L & S)
              </span>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Géographie Seconde : Cours intégraux sans résumé — Terre & Géodynamique, Atmosphère & Climat, Hydrosphère & Eau, Populations & Urbanisation
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
              Classe de Seconde (L & S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {GEOGRAPHIE_2NDE_PARTS.map(part => {
              const isSelected = selectedGeographie2ndePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedGeographie2ndePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700/20'
                      : 'bg-white text-gray-700 hover:bg-emerald-100/70 border border-emerald-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 border border-sky-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-sky-700" />
                Programme officiel complet (Ibrahima Kane) : 33 leçons (Volumes 1 & 2)
              </span>
              <p className="text-[11px] text-sky-800/80 mt-0.5">
                Cours intégraux sans résumé — Conjugaisons, modaux, grammaire, comparatifs, orthographe, introduction et conclusion
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-sky-800 bg-white px-2.5 py-1 rounded-full border border-sky-200 shadow-2xs">
              Classe de 5ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {ANGLAIS_5EME_FILTER_PARTS.map(part => {
              const isSelected = selectedAnglaisPart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedAnglaisPart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-sky-700 text-white shadow-sm ring-2 ring-sky-700/20'
                      : 'bg-white text-gray-700 hover:bg-sky-100/70 border border-sky-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par parties pour Anglais 4ème (Programme officiel complet - 30 leçons) */}
      {selectedSubject === 'Anglais' && selectedClass === '4ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 border border-teal-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-teal-700" />
                Programme officiel complet d'Anglais 4ème : 30 leçons intégrales
              </span>
              <p className="text-[11px] text-teal-800/80 mt-0.5">
                Cours exhaustifs rédigés en français — Règles claires, tableaux comparatifs, structures verbales, exemples bilingues et exercices corrigés
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-teal-800 bg-white px-2.5 py-1 rounded-full border border-teal-200 shadow-2xs">
              Classe de 4ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {ANGLAIS_4EME_FILTER_PARTS.map(part => {
              const isSelected = selectedAnglais4emePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedAnglais4emePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                      : 'bg-white text-gray-700 hover:bg-teal-100/70 border border-teal-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    {part.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Organisation officielle par chapitres pour Mathématiques 6ème (Activités Numériques & Géométriques) */}
      {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-blue-700" />
                Programme officiel sénégalais : 22 leçons (Activités Géométriques & Numériques)
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Cours intégraux sans résumé — Propriétés formelles, remarques capitales, calculs et exercices d'application corrigés
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
              Classe de 6ème uniquement
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {MATH_6EME_FILTER_CHAPTERS.map(chap => {
              const isSelected = selectedMathChapter === chap.id;
              return (
                <button
                  key={chap.id}
                  onClick={() => setSelectedMathChapter(chap.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                  }`}
                >
                  <span>{chap.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {chap.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Liste des cartes */}
      <div className="space-y-4">
        {filteredContent.map(item => (
          <React.Fragment key={item.id}>
            {/* Séparateurs thématiques pour SVT 5ème */}
            {selectedSubject === 'SVT' && selectedClass === '5ème' && activeTab === 'cours' && selectedSvt5emeTheme === 'all' && item.id === 'svt-5eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 1 : LA PLANÈTE TERRE, L'ENVIRONNEMENT ET L'ACTION HUMAINE (Leçons 1 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '5ème' && activeTab === 'cours' && selectedSvt5emeTheme === 'all' && item.id === 'svt-5eme-lecon-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 2 : LE VIVANT ET SON ÉVOLUTION (Leçons 9 à 15)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '5ème' && activeTab === 'cours' && selectedSvt5emeTheme === 'all' && item.id === 'svt-5eme-lecon-16' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 3 : LE CORPS HUMAIN ET LA SANTÉ (Leçons 16 à 18)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT 4ème */}
            {selectedSubject === 'SVT' && selectedClass === '4ème' && activeTab === 'cours' && selectedSvt4emeTheme === 'all' && item.id === 'svt-4eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 1 : GESTION DES RESSOURCES NATURELLES & BIOLOGIE HUMAINE (Leçons 1 à 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '4ème' && activeTab === 'cours' && selectedSvt4emeTheme === 'all' && item.id === 'svt-4eme-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 2 : REPRODUCTION HUMAINE, SANTÉ & LES SOLS (Leçons 6 à 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '4ème' && activeTab === 'cours' && selectedSvt4emeTheme === 'all' && item.id === 'svt-4eme-lecon-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 3 : GÉOLOGIE & DYNAMIQUE INTERNE DE LA TERRE (Leçons 11 à 15)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT 3ème */}
            {selectedSubject === 'SVT' && selectedClass === '3ème' && activeTab === 'cours' && selectedSvt3emeTheme === 'all' && item.id === 'svt-3eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 1 : SYSTÈME NERVEUX, ORGANES DES SENS & MOTRICITÉ (Leçons 1 à 7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '3ème' && activeTab === 'cours' && selectedSvt3emeTheme === 'all' && item.id === 'svt-3eme-lecon-8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 2 : MICROBES & SYSTÈME IMMUNITAIRE (Leçons 8 à 14)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '3ème' && activeTab === 'cours' && selectedSvt3emeTheme === 'all' && item.id === 'svt-3eme-lecon-15' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 3 : GRANDES ENDÉMIES & INFECTIONS SEXUELLEMENT TRANSMISSIBLES (Leçons 15 à 17)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '3ème' && activeTab === 'cours' && selectedSvt3emeTheme === 'all' && item.id === 'svt-3eme-lecon-18' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 4 : SCIENCES DE LA TERRE, TECTONIQUE DES PLAQUES & GÉODYNAMIQUE (Leçons 18 à 22)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && selectedClass === '3ème' && activeTab === 'cours' && selectedSvt3emeTheme === 'all' && item.id === 'svt-3eme-lecon-23' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 5 : NUTRITION, DIGESTION & RATION ALIMENTAIRE (Leçons 23 à 26)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT Seconde S */}
            {selectedSubject === 'SVT' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedSvt2ndeTheme === 'all' && item.id === 'svt-2ndes-lecon-intro' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PREMIÈRE PARTIE : NOTIONS FONDAMENTALES D'ÉCOLOGIE & SORTIE (Intro & Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedSvt2ndeTheme === 'all' && item.id === 'svt-2ndes-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>DEUXIÈME PARTIE : LES RESSOURCES NATURELLES ET LEUR GESTION (Leçons 4 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedSvt2ndeTheme === 'all' && item.id === 'svt-2ndes-lecon-7' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>TROISIÈME PARTIE : AMÉNAGEMENT DE L'ESPACE (Leçons 7 & 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedSvt2ndeTheme === 'all' && item.id === 'svt-2ndes-lecon-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>QUATRIÈME PARTIE : L'ESPÈCE - LA VARIATION - L'ÉVOLUTION (Leçons 9 & 10)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Histoire Première (Séries L & S) */}
            {selectedSubject === 'Histoire' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedHistoire1erePart === 'all' && item.id === 'histoire-1ere-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIÈRE PARTIE : L'EUROPE ET LA RÉVOLUTION INDUSTRIELLE AU XIXe SIÈCLE (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedHistoire1erePart === 'all' && item.id === 'histoire-1ere-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME PARTIE : L'IMPÉRIALISME EN AFRIQUE ET LE PARTAGE DU CONTINENT (Leçons 4 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedHistoire1erePart === 'all' && item.id === 'histoire-1ere-lecon-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : L'IMPÉRIALISME DANS LE RESTE DU MONDE (ASIE & AMÉRIQUE) (Leçons 9 et 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedHistoire1erePart === 'all' && item.id === 'histoire-1ere-lecon-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>QUATRIÈME PARTIE : LES MUTATIONS ET LES CRISES DU DÉBUT DU XXe SIÈCLE (Leçons 11 à 14)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Français Seconde (Séries L & S) */}
            {selectedSubject === 'Français' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedFrancais2ndeModule === 'all' && item.id === 'francais-2nde-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>MODULE 1 : MÉTHODOLOGIE DES ÉPREUVES DU SECOND CYCLE (BACCALAURÉAT) (Leçons 1 à 4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedFrancais2ndeModule === 'all' && item.id === 'francais-2nde-cours-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>MODULE 2 : LES GENRES LITTÉRAIRES ET LEUR ÉVOLUTION (Leçons 5 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedFrancais2ndeModule === 'all' && item.id === 'francais-2nde-cours-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>MODULE 3 : LE THÉÂTRE ET L'APOLOGUE (Leçons 9 à 11)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedFrancais2ndeModule === 'all' && item.id === 'francais-2nde-cours-12' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>MODULE 4 : OUTILS DE LA LANGUE, STYLISTIQUE ET ANALYSE LITTÉRAIRE (Leçons 12 à 18)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedFrancais2ndeModule === 'all' && item.id === 'francais-2nde-cours-19' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>MODULE 5 : ÉTUDE DES ŒUVRES INTÉGRALES AU PROGRAMME SÉNÉGALAIS (Leçons 19 & 20)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Histoire Seconde (Séries L & S) */}
            {selectedSubject === 'Histoire' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedHistoire2ndePart === 'all' && item.id === 'histoire-2nde-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIÈRE PARTIE : MÉTHODOLOGIE, SOURCES ET PRÉHISTOIRE DE L'AFRIQUE ET DU SÉNÉGAL (Leçons 1 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedHistoire2ndePart === 'all' && item.id === 'histoire-2nde-cours-7' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME PARTIE : LES CIVILISATIONS ANTIQUES AFRICAINES ET MÉDITERRANÉENNES (Leçons 7 à 11)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedHistoire2ndePart === 'all' && item.id === 'histoire-2nde-cours-12' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : LES GRANDS EMPIRES SOUDANAIS ET LES FORMATIONS POLITIQUES DE SÉNÉGAMBIE (Leçons 12 à 16)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedHistoire2ndePart === 'all' && item.id === 'histoire-2nde-cours-17' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>QUATRIÈME PARTIE : LES TRAITES NÉGRIÈRES, RÉVOLUTIONS POLITIQUES ET MOUVEMENTS RELIGIEUX (Leçons 17 à 24)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Géographie Seconde (Séries L & S) */}
            {selectedSubject === 'Géographie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedGeographie2ndePart === 'all' && item.id === 'geo-2nde-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PREMIÈRE PARTIE : LA TERRE DANS L'UNIVERS, GÉODYNAMIQUE ET RELIEFS TERRESTRES (Leçons 1 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedGeographie2ndePart === 'all' && item.id === 'geo-2nde-cours-7' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>DEUXIÈME PARTIE : L'ATMOSPHÈRE, LE CLIMAT ET LES ZONES BIOCLIMATIQUES DU GLOBE (Leçons 7 à 11)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedGeographie2ndePart === 'all' && item.id === 'geo-2nde-cours-12' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>TROISIÈME PARTIE : L'HYDROSPHÈRE ET LES RESSOURCES EN EAU (Leçons 12 à 14)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedGeographie2ndePart === 'all' && item.id === 'geo-2nde-cours-15' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>QUATRIÈME PARTIE : LES POPULATIONS, L'URBANISATION ET LA MÉTHODOLOGIE GÉOGRAPHIQUE (Leçons 15 à 20)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de chapitres pour l'Éducation Civique */}
            {selectedSubject === 'Éducation civique' && selectedClass === '6ème' && activeTab === 'cours' && selectedCiviqueChapter === 'all' && item.id === 'civique-6eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>CHAPITRE 1 : LA FAMILLE SÉNÉGALAISE (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '6ème' && activeTab === 'cours' && selectedCiviqueChapter === 'all' && item.id === 'civique-6eme-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>CHAPITRE 2 : LES COLLECTIVITÉS LOCALES - LE MILIEU PROCHE (Leçons 4 à 7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '6ème' && activeTab === 'cours' && selectedCiviqueChapter === 'all' && item.id === 'civique-6eme-lecon-8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>CHAPITRE 3 : LA NATION ET LA CITOYENNETÉ SÉNÉGALAISE (Leçons 8 à 10)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour l'Éducation Civique 5ème */}
            {selectedSubject === 'Éducation civique' && selectedClass === '5ème' && activeTab === 'cours' && selectedCiviqueChapter === 'all' && item.id === 'civique-5eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>PREMIÈRE PARTIE : LA DÉMOCRATIE ET LES LIBERTÉS (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '5ème' && activeTab === 'cours' && selectedCiviqueChapter === 'all' && item.id === 'civique-5eme-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>DEUXIÈME PARTIE : LES INSTITUTIONS DE BASE ET LA VIE EN SOCIÉTÉ (Leçons 4 et 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '5ème' && activeTab === 'cours' && selectedCiviqueChapter === 'all' && item.id === 'civique-5eme-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>TROISIÈME PARTIE : ENVIRONNEMENT, SANTÉ ET DÉVELOPPEMENT (Leçons 6 à 8)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour l'Éducation Civique 4ème */}
            {selectedSubject === 'Éducation civique' && selectedClass === '4ème' && activeTab === 'cours' && selectedCivique4emePart === 'all' && item.id === 'civique-4eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>PREMIÈRE PARTIE : LES CONCEPTS DE BASE & LA NATION SÉNÉGALAISE (Leçons 1 et 2)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '4ème' && activeTab === 'cours' && selectedCivique4emePart === 'all' && item.id === 'civique-4eme-lecon-3' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>DEUXIÈME PARTIE : L'ÉTAT, LA CONSTITUTION & LES SYMBOLES DE LA RÉPUBLIQUE (Leçons 3 à 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '4ème' && activeTab === 'cours' && selectedCivique4emePart === 'all' && item.id === 'civique-4eme-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>TROISIÈME PARTIE : LA DÉMOCRATIE, LE VOTE & L'ENGAGEMENT DU CITOYEN (Leçons 6 et 7)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour l'Éducation Civique 3ème */}
            {selectedSubject === 'Éducation civique' && selectedClass === '3ème' && activeTab === 'cours' && selectedCivique3emePart === 'all' && item.id === 'civique-3eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>CHAPITRE I : ENVIRONNEMENT ET PATRIMOINE (Leçons 1 à 3 & Dossier AC 1)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '3ème' && activeTab === 'cours' && selectedCivique3emePart === 'all' && item.id === 'civique-3eme-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>CHAPITRE II : VIVRE ENSEMBLE (Leçons 4 et 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Éducation civique' && selectedClass === '3ème' && activeTab === 'cours' && selectedCivique3emePart === 'all' && item.id === 'civique-3eme-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME (Leçons 6 à 11 & Dossier AC 2-3)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour le Français 3ème */}
            {selectedSubject === 'Français' && selectedClass === '3ème' && activeTab === 'cours' && selectedFrancais3emePart === 'all' && item.id === 'fr-3eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIÈRE PARTIE : SYNTAXE DE LA PHRASE & PROPOSITIONS SUBORDONNÉES (Leçons 1 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && selectedClass === '3ème' && activeTab === 'cours' && selectedFrancais3emePart === 'all' && item.id === 'fr-3eme-lecon-7' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME PARTIE : FONCTIONS GRAMMATICALES, VOIX & DISCOURS RAPPORTÉS (Leçons 7 à 12)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && selectedClass === '3ème' && activeTab === 'cours' && selectedFrancais3emePart === 'all' && item.id === 'fr-3eme-lecon-13' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : ORTHOGRAPHE GRAMMATICALE, LEXIQUE & FIGURES DE STYLE (Leçons 13 à 18)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && selectedClass === '3ème' && activeTab === 'cours' && selectedFrancais3emePart === 'all' && item.id === 'fr-3eme-lecon-19' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>QUATRIÈME PARTIE : GENRES LITTÉRAIRES & MÉTHODOLOGIES RÉDACTION BFEM (Leçons 19 à 22)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de parties pour l'Histoire 3ème / BFEM */}
            {selectedSubject === 'Histoire' && selectedClass === '3ème' && activeTab === 'cours' && selectedHistoire3emePart === 'all' && item.id === 'histoire-3eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIÈRE PARTIE : LA DEUXIÈME RÉVOLUTION INDUSTRIELLE ET SES CONSÉQUENCES (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '3ème' && activeTab === 'cours' && selectedHistoire3emePart === 'all' && item.id === 'histoire-3eme-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME PARTIE : L'IMPÉRIALISME EN AFRIQUE (Leçons 4 à 7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '3ème' && activeTab === 'cours' && selectedHistoire3emePart === 'all' && item.id === 'histoire-3eme-lecon-8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : L'IMPÉRIALISME DANS LE RESTE DU MONDE (Leçons 8 à 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '3ème' && activeTab === 'cours' && selectedHistoire3emePart === 'all' && item.id === 'histoire-3eme-lecon-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>QUATRIÈME PARTIE : LES GRANDS CONFLITS DU XXE SIÈCLE ET LES CRISES (Leçons 11 à 14)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '3ème' && activeTab === 'cours' && selectedHistoire3emePart === 'all' && item.id === 'histoire-3eme-lecon-15' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>CINQUIÈME PARTIE : DÉCOLONISATION ET ÉMERGENCE DU TIERS-MONDE (Leçons 15 à 19)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de parties pour l'Histoire 6ème */}
            {selectedSubject === 'Histoire' && selectedClass === '6ème' && activeTab === 'cours' && selectedHistoirePart === 'all' && item.id === 'histoire-6eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIÈRE PARTIE : L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '6ème' && activeTab === 'cours' && selectedHistoirePart === 'all' && item.id === 'histoire-6eme-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME PARTIE : LA PRÉHISTOIRE (Leçons 4 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '6ème' && activeTab === 'cours' && selectedHistoirePart === 'all' && item.id === 'histoire-6eme-lecon-7' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ (Leçons 7 à 12)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '6ème' && activeTab === 'cours' && selectedHistoirePart === 'all' && item.id === 'histoire-6eme-lecon-13' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>QUATRIÈME PARTIE : LES CIVILISATIONS ANTIQUES DE L'ASIE (Leçons 13 et 14)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de trimestres pour l'Histoire 5ème */}
            {selectedSubject === 'Histoire' && selectedClass === '5ème' && activeTab === 'cours' && selectedHistoire5emePart === 'all' && item.id === 'histoire-5eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIER TRIMESTRE : LE MONDE MUSULMAN MÉDIÉVAL (Leçons 1 à 4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '5ème' && activeTab === 'cours' && selectedHistoire5emePart === 'all' && item.id === 'histoire-5eme-lecon-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME TRIMESTRE : LES GRANDS EMPIRES MÉDIÉVAUX D'AFRIQUE DE L'OUEST (Leçons 5 à 9)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && selectedClass === '5ème' && activeTab === 'cours' && selectedHistoire5emePart === 'all' && item.id === 'histoire-5eme-lecon-10' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME TRIMESTRE : LE PEUPLEMENT ET L'HISTOIRE DE LA SÉNÉGAMBIE (Leçons 10 à 13)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de parties pour la Géographie 6ème */}
            {selectedSubject === 'Géographie' && selectedClass === '6ème' && activeTab === 'cours' && selectedGeographiePart === 'all' && item.id === 'geo-6eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>PREMIÈRE PARTIE : INITIATION À LA GÉOGRAPHIE ET OUTILS DU GÉOGRAPHE (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '6ème' && activeTab === 'cours' && selectedGeographiePart === 'all' && item.id === 'geo-6eme-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>DEUXIÈME PARTIE : LA GÉOGRAPHIE RÉGIONALE APPLIQUÉE (Leçons 4 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '6ème' && activeTab === 'cours' && selectedGeographiePart === 'all' && item.id === 'geo-6eme-lecon-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>TROISIÈME PARTIE : LA GÉOGRAPHIE GÉNÉRALE DU SÉNÉGAL (Leçons 9 à 13)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour la Géographie 5ème */}
            {selectedSubject === 'Géographie' && selectedClass === '5ème' && activeTab === 'cours' && selectedGeographie5emePart === 'all' && item.id === 'geo-5eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>INTRODUCTION : LES OUTILS DU GÉOGRAPHE (Leçon 1)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '5ème' && activeTab === 'cours' && selectedGeographie5emePart === 'all' && item.id === 'geo-5eme-lecon-2' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>CHAPITRE I : LES ASPECTS PHYSIQUES DU SÉNÉGAL (Leçons 2 à 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '5ème' && activeTab === 'cours' && selectedGeographie5emePart === 'all' && item.id === 'geo-5eme-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>CHAPITRE II : LES ASPECTS HUMAINS ET LA POPULATION (Leçons 6 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '5ème' && activeTab === 'cours' && selectedGeographie5emePart === 'all' && item.id === 'geo-5eme-lecon-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>CHAPITRE III : LES PROBLÈMES ENVIRONNEMENTAUX ET DÉVELOPPEMENT DURABLE (Leçons 9 et 10)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de parties pour la Géographie 3ème / BFEM */}
            {selectedSubject === 'Géographie' && selectedClass === '3ème' && activeTab === 'cours' && selectedGeographie3emePart === 'all' && item.id === 'geo-3eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>PREMIÈRE PARTIE : LES DYNAMIQUES DÉMOGRAPHIQUES ET L'URBANISATION MONDIALE (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '3ème' && activeTab === 'cours' && selectedGeographie3emePart === 'all' && item.id === 'geo-3eme-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>DEUXIÈME PARTIE : LES DYNAMIQUES ÉCONOMIQUES ET LA MONDIALISATION (Leçons 4 à 7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '3ème' && activeTab === 'cours' && selectedGeographie3emePart === 'all' && item.id === 'geo-3eme-lecon-8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>TROISIÈME PARTIE : GÉOGRAPHIE DU SÉNÉGAL - LE SECTEUR PRIMAIRE (Leçons 8 à 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && selectedClass === '3ème' && activeTab === 'cours' && selectedGeographie3emePart === 'all' && item.id === 'geo-3eme-lecon-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>QUATRIÈME PARTIE : GÉOGRAPHIE DU SÉNÉGAL - LES SECTEURS SECONDAIRE ET TERTIAIRE (Leçons 11 à 13)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de parties pour l'Anglais 5ème */}
            {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && selectedAnglaisPart === 'all' && item.id === 'anglais-5eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>VOLUME 1 • PARTIE A : LES TEMPS DU PRÉSENT ET DU PASSÉ (Leçons 1 à 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && selectedAnglaisPart === 'all' && item.id === 'anglais-5eme-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>VOLUME 1 • PARTIE B : FUTUR, IMPÉRATIF, PRESENT PERFECT & WH- QUESTIONS (Leçons 6 à 9)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && selectedAnglaisPart === 'all' && item.id === 'anglais-5eme-lecon-10' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>VOLUME 1 • PARTIE C : GROUPE NOMINAL, POSSESSION & COMPARAISONS (Leçons 10 à 14)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && selectedAnglaisPart === 'all' && item.id === 'anglais-5eme-lecon-15' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>VOLUME 2 • PARTIE 1 : MODAUX, ADVERBES DE FRÉQUENCE & CADRE SCOLAIRE (Leçons 15 à 19)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && selectedAnglaisPart === 'all' && item.id === 'anglais-5eme-lecon-20' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>VOLUME 2 • PARTIE 2 : VIE QUOTIDIENNE, GOÛTS, VOYAGES & CIVILISATION (Leçons 20 à 25)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && selectedAnglaisPart === 'all' && item.id === 'anglais-5eme-lecon-26' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>VOLUME 2 • PARTIE 3 : RÈGLES D'ORTHOGRAPHE FONDAMENTALES & HOMOPHONES (Leçons 26 à 29)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '5ème' && activeTab === 'cours' && selectedAnglaisPart === 'all' && item.id === 'anglais-5eme-lecon-30' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>VOLUME 2 • PARTIE 4 : EXPRESSION ÉCRITE, MÉTHODOLOGIE & ORAL (Leçons 30 à 33)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques par parties pour Anglais 4ème */}
            {selectedSubject === 'Anglais' && selectedClass === '4ème' && activeTab === 'cours' && selectedAnglais4emePart === 'all' && item.id === 'anglais-4eme-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>PARTIE 1 : GRAMMAIRE FONDAMENTALE & SYSTÈME DU PRÉSENT (Leçons 1 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '4ème' && activeTab === 'cours' && selectedAnglais4emePart === 'all' && item.id === 'anglais-4eme-lecon-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>PARTIE 2 : SYSTÈME DU PASSÉ, DU FUTUR ET STRUCTURES INTERROGATIVES (Leçons 9 à 15)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '4ème' && activeTab === 'cours' && selectedAnglais4emePart === 'all' && item.id === 'anglais-4eme-lecon-16' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>PARTIE 3 : MODAUX, PROPOSITIONS RELATIVES ET VOIX PASSIVE (Leçons 16 à 21)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && selectedClass === '4ème' && activeTab === 'cours' && selectedAnglais4emePart === 'all' && item.id === 'anglais-4eme-lecon-22' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>PARTIE 4 : THÉMATIQUES, CULTURE, VOCABULAIRE & PRÉPARATION AUX EXAMENS (Leçons 22 à 30)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques de chapitres pour les Mathématiques 6ème */}
            {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && selectedMathChapter === 'all' && item.id === 'math-6eme-geom-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>ACTIVITÉS GÉOMÉTRIQUES • CHAPITRE V : VOCABULAIRE ENSEMBLISTE & DROITES (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && selectedMathChapter === 'all' && item.id === 'math-6eme-geom-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>ACTIVITÉS GÉOMÉTRIQUES • CHAPITRE VI : LES ANGLES, LE CERCLE ET LES TRIANGLES (Leçons 4 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && selectedMathChapter === 'all' && item.id === 'math-6eme-geom-lecon-7' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>ACTIVITÉS GÉOMÉTRIQUES • CHAPITRE VII : QUADRILATÈRES, PÉRIMÈTRES/AIRES & ESPACE (Leçons 7 à 9)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && selectedMathChapter === 'all' && item.id === 'math-6eme-lecon-1' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>ACTIVITÉS NUMÉRIQUES • CHAPITRE I : NUMÉRATION ET NOMBRES ENTIERS / DÉCIMAUX (Leçons 1 à 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && selectedMathChapter === 'all' && item.id === 'math-6eme-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>CHAPITRE II : ÉCRITURES FRACTIONNAIRES (Leçons 6 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && selectedMathChapter === 'all' && item.id === 'math-6eme-lecon-9' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>CHAPITRE III : LES OPÉRATIONS MATHÉMATIQUES ET TECHNIQUES OPÉRATOIRES (Leçons 9 à 12)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && selectedClass === '6ème' && activeTab === 'cours' && selectedMathChapter === 'all' && item.id === 'math-6eme-lecon-13' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>CHAPITRE IV : PROPORTIONNALITÉ ET GESTION DE DONNÉES (Leçon 13)</span>
                </div>
              </div>
            )}

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-gray-100 hover:border-blue-200 transition">
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
                  ) : item.id === 'geo-senegal-interactive-map' || item.id === 'geo-senegal-interactive-map-3eme' ? (
                    <button
                      onClick={() => setIsMapModalOpen(true)}
                      className="w-full sm:w-auto px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Explorer la Carte</span>
                    </button>
                  ) : item.type === 'ressource' ? (
                    <button
                      onClick={() => {
                        if (item.id.includes('civique-6eme')) {
                          handleOpenLesson(LESSON_1_CIVIQUE_6EME);
                          showToast("Ouverture du cours officiel d'Éducation Civique. Impression et révision prêtes.");
                        } else if (item.id.includes('lecon-1')) {
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
                    {item.lessonData.id.startsWith('civique-6eme')
                      ? 'Comprend : Introduction officielle • Texte intégral sans abréviation • Schéma de synthèse • Conclusion'
                      : item.lessonData.id.startsWith('anglais-6eme')
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
          </React.Fragment>
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

      {/* Modal Carte Interactive du Sénégal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 my-auto animate-fade-in">
            <div className="bg-amber-800 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-300" />
                <h3 className="font-extrabold text-sm sm:text-base">
                  Carte interactive du Sénégal — Programme officiel (Géographie & SVT)
                </h3>
              </div>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white transition text-xs font-bold"
              >
                ✕ Fermer
              </button>
            </div>
            <div className="p-3 sm:p-5 max-h-[85vh] overflow-y-auto">
              <SenegalMap allowModeSwitch={true} />
            </div>
          </div>
        </div>
      )}

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
