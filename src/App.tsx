import React, { useState, useEffect } from 'react';
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
  FlaskConical,
  Calculator,
  Settings,
  Bell,
  PhoneCall,
  Smartphone,
  MessageCircle,
  Globe
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { OfflineIndicator } from './OfflineIndicator';
import { SupportModal } from './components/SupportModal';
import { SettingsModal } from './components/SettingsModal';
import { InstallAppModal } from './components/InstallAppModal';
import { FullscreenLessonViewer } from './components/FullscreenLessonViewer';
import { SenegalMap } from './components/SenegalMap';
import {
  getNotificationStatus,
  requestNotificationPermission,
  toggleNotifications,
  sendRandomMotivationalNotification
} from './utils/notifications';
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
import { COURSES_PC_2NDE_L, PC_2NDE_L_PARTS } from './data/courses_2nde_pc_l_index';
import { COURSES_PC_2NDE_S, PC_2NDE_S_PARTS } from './data/courses_2nde_pc_s_index';
import { COURSES_FRANCAIS_1ERE, FRANCAIS_1ERE_PARTS } from './data/courses_1ere_francais_index';
import { COURSES_PHILOSOPHIE_1ERE, PHILOSOPHIE_1ERE_PARTS } from './data/courses_1ere_philo_index';
import { COURSES_MATH_2NDE_L, MATH_2NDE_L_PARTS } from './data/courses_2nde_math_l_index';
import { COURSES_ANGLAIS_2NDE, ANGLAIS_2NDE_PARTS } from './data/courses_2nde_anglais_index';
import {
  COURSES_ANGLAIS_1ERE,
  ANGLAIS_1ERE_PARTS
} from './data/courses_1ere_anglais_index';
import {
  COURSES_ANGLAIS_TLE,
  ANGLAIS_TLE_PARTS
} from './data/courses_tle_anglais_index';
import {
  COURSES_FRANCAIS_TLE,
  FRANCAIS_TLE_PARTS
} from './data/courses_tle_francais_index';
import {
  COURSES_HISTOIRE_TLE,
  HISTOIRE_TLE_PARTS
} from './data/courses_tle_histoire_index';
import {
  COURSES_GEOGRAPHIE_TLE,
  GEOGRAPHIE_TLE_PARTS
} from './data/courses_tle_geographie_index';
import {
  COURSES_SVT_TLE_S,
  COURSES_SVT_TLE_L,
  SVT_TLE_TABS,
  SVT_TLE_S_PARTS,
  SVT_TLE_L_PARTS,
  SvtTleSeriesTab
} from './data/courses_tle_svt_index';
import {
  COURSES_MATH_TLE_S,
  COURSES_MATH_TLE_L,
  MATH_TLE_TABS,
  MATH_TLE_S_PARTS,
  MATH_TLE_L_PARTS,
  MathTleSeriesTab
} from './data/courses_tle_math_index';
import {
  COURSES_PC_TLE_S,
  COURSES_PC_TLE_L,
  PC_TLE_TABS,
  PC_TLE_S_PARTS,
  PC_TLE_L_PARTS,
  PcTleSeriesTab
} from './data/courses_tle_pc_index';
import {
  COURSES_SVT_1ERE_ALL,
  COURSES_SVT_1ERE_S2,
  COURSES_SVT_1ERE_S1,
  COURSES_SVT_1ERE_L1,
  COURSES_SVT_1ERE_L2,
  SVT_1ERE_TABS,
  SVT_1ERE_S2_PARTS,
  Svt1ereSeriesTab
} from './data/courses_1ere_svt_index';
import {
  COURSES_MATH_1ERE_L_LIST,
  COURSES_MATH_1ERE_S_LIST,
  MATH_1ERE_TABS,
  MATH_1ERE_L_PARTS,
  MATH_1ERE_S_PARTS,
  Math1ereSeriesTab
} from './data/courses_1ere_math_index';
import {
  COURSES_GEOGRAPHIE_1ERE,
  GEOGRAPHIE_1ERE_FILTER_PARTS
} from './data/courses_1ere_geographie_index';
import {
  COURSES_PC_1ERE_L,
  PC_1ERE_L_PARTS
} from './data/courses_1ere_pc_l_index';
import {
  COURSES_PC_1ERE_S,
  PC_1ERE_S_PARTS
} from './data/courses_1ere_pc_s_index';

type Screen = 'welcome' | 'choose-class' | 'subject' | 'content' | 'lesson-reader';
type Category = 'Collège' | 'Lycée';
type Series = 'S' | 'L' | 'S1' | 'S2' | 'L1' | 'L2' | null;

interface SavedClassChoice {
  category: Category;
  className: string;
  series: Series;
}

interface ContentData {
  id: string;
  title: string;
  type: 'cours' | 'ressource';
  description?: string;
  badge?: string;
  link?: string;
  content?: string;
  lessonData?: LessonContent;
  series?: string;
  subject?: string;
  class?: string;
  partId?: string;
  duration?: string;
  diagram?: any;
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

const FLOATING_SCHOOL_EMOJIS = [
  { emoji: '📓', top: '8%', left: '8%', size: 'text-3xl sm:text-5xl', delay: '0s', duration: '6.5s', opacity: 'opacity-80' },
  { emoji: '🎒', top: '12%', left: '82%', size: 'text-4xl sm:text-6xl', delay: '1s', duration: '7.2s', opacity: 'opacity-75' },
  { emoji: '📚', top: '20%', left: '22%', size: 'text-3xl sm:text-5xl', delay: '2s', duration: '8s', opacity: 'opacity-70' },
  { emoji: '✏️', top: '28%', left: '86%', size: 'text-2xl sm:text-4xl', delay: '0.5s', duration: '6s', opacity: 'opacity-85' },
  { emoji: '📒', top: '38%', left: '6%', size: 'text-4xl sm:text-6xl', delay: '1.5s', duration: '7.5s', opacity: 'opacity-80' },
  { emoji: '📖', top: '52%', left: '84%', size: 'text-3xl sm:text-5xl', delay: '2.5s', duration: '6.8s', opacity: 'opacity-70' },
  { emoji: '📝', top: '65%', left: '14%', size: 'text-3xl sm:text-5xl', delay: '0.8s', duration: '7.8s', opacity: 'opacity-85' },
  { emoji: '🏫', top: '74%', left: '72%', size: 'text-3xl sm:text-5xl', delay: '1.8s', duration: '6.2s', opacity: 'opacity-65' },
  { emoji: '🎓', top: '86%', left: '28%', size: 'text-4xl sm:text-6xl', delay: '0.2s', duration: '8.5s', opacity: 'opacity-75' },
  { emoji: '🖊️', top: '8%', left: '50%', size: 'text-2xl sm:text-4xl', delay: '2.2s', duration: '6.7s', opacity: 'opacity-70' },
  { emoji: '📓', top: '86%', left: '85%', size: 'text-3xl sm:text-5xl', delay: '1.2s', duration: '7s', opacity: 'opacity-80' },
  { emoji: '📐', top: '25%', left: '4%', size: 'text-2xl sm:text-4xl', delay: '3s', duration: '6.4s', opacity: 'opacity-65' },
  { emoji: '📚', top: '60%', left: '55%', size: 'text-3xl sm:text-5xl', delay: '1.7s', duration: '7.3s', opacity: 'opacity-70' },
  { emoji: '📝', top: '44%', left: '92%', size: 'text-3xl sm:text-5xl', delay: '0.7s', duration: '8.2s', opacity: 'opacity-80' },
  { emoji: '🎒', top: '78%', left: '5%', size: 'text-3xl sm:text-5xl', delay: '2.8s', duration: '7.6s', opacity: 'opacity-75' },
  { emoji: '📏', top: '16%', left: '36%', size: 'text-2xl sm:text-4xl', delay: '1.4s', duration: '6.9s', opacity: 'opacity-65' },
  { emoji: '📓', top: '35%', left: '48%', size: 'text-2xl sm:text-4xl', delay: '2.6s', duration: '7.4s', opacity: 'opacity-60' },
  { emoji: '📒', top: '72%', left: '42%', size: 'text-3xl sm:text-5xl', delay: '1.9s', duration: '8.1s', opacity: 'opacity-65' }
];

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
  const [activeTab, setActiveTab] = useState<'cours' | 'ressources' | 'favoris'>('cours');
  const [favoriteLessonIds, setFavoriteLessonIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('kaay_jang_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleFavoriteLesson = (id: string, title?: string) => {
    setFavoriteLessonIds(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('kaay_jang_favorites', JSON.stringify(next));
      } catch (e) {
        console.error('Erreur stockage favoris:', e);
      }
      showToast(exists ? 'Leçon retirée des favoris' : `⭐ "${title || 'Leçon'}" ajoutée aux favoris !`);
      return next;
    });
  };

  const getWhatsAppHelpUrl = (lessonTitle: string, subject?: string, className?: string) => {
    const text = `Bonjour Ibkane IA, j'ai besoin d'aide pour comprendre la leçon : "${lessonTitle}"${subject ? ` en ${subject}` : ''}${className ? ` (${className})` : ''}. Pouvez-vous m'expliquer ?`;
    return `https://wa.me/221707753776?text=${encodeURIComponent(text)}`;
  };
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    try {
      return localStorage.getItem('kaay_jang_language') || 'fr';
    } catch {
      return 'fr';
    }
  });
  const [notificationsActive, setNotificationsActive] = useState<boolean>(() => {
    try {
      return localStorage.getItem('kaay_jang_notifications_enabled') === 'true';
    } catch {
      return false;
    }
  });
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
  const [selectedFrancais1erePart, setSelectedFrancais1erePart] = useState<string>('all');
  const [selectedPhilo1erePart, setSelectedPhilo1erePart] = useState<string>('all');
  const [selectedFrancais2ndeModule, setSelectedFrancais2ndeModule] = useState<string>('all');
  const [selectedHistoire2ndePart, setSelectedHistoire2ndePart] = useState<string>('all');
  const [selectedGeographie2ndePart, setSelectedGeographie2ndePart] = useState<string>('all');
  const [selectedPc2ndeSPart, setSelectedPc2ndeSPart] = useState<string>('all');
  const [selectedPc2ndeLPart, setSelectedPc2ndeLPart] = useState<string>('all');
  const [selectedMath2ndeLPart, setSelectedMath2ndeLPart] = useState<string>('all');
  const [selectedAnglais2ndePart, setSelectedAnglais2ndePart] = useState<string>('all');
  const [selectedAnglais1erePart, setSelectedAnglais1erePart] = useState<string>('all');
  const [selectedAnglaisTlePart, setSelectedAnglaisTlePart] = useState<string>('all');
  const [selectedFrancaisTlePart, setSelectedFrancaisTlePart] = useState<string>('all');
  const [selectedHistoireTlePart, setSelectedHistoireTlePart] = useState<string>('all');
  const [selectedGeographieTlePart, setSelectedGeographieTlePart] = useState<string>('all');
  const [selectedSvtTleTab, setSelectedSvtTleTab] = useState<SvtTleSeriesTab>(() => {
    if (savedClass?.series === 'L' || savedClass?.series === 'L1' || savedClass?.series === 'L2') return 'L';
    return 'S';
  });
  const [selectedSvtTleSPart, setSelectedSvtTleSPart] = useState<string>('all');
  const [selectedSvtTleLPart, setSelectedSvtTleLPart] = useState<string>('all');
  const [selectedMathTleTab, setSelectedMathTleTab] = useState<MathTleSeriesTab>(() => {
    if (savedClass?.series === 'L' || savedClass?.series === 'L1' || savedClass?.series === 'L2') return 'L';
    return 'S';
  });
  const [selectedMathTleSPart, setSelectedMathTleSPart] = useState<string>('all');
  const [selectedMathTleLPart, setSelectedMathTleLPart] = useState<string>('all');
  const [selectedPcTleTab, setSelectedPcTleTab] = useState<PcTleSeriesTab>(() => {
    if (savedClass?.series === 'L' || savedClass?.series === 'L1' || savedClass?.series === 'L2') return 'L';
    return 'S';
  });
  const [selectedPcTleSPart, setSelectedPcTleSPart] = useState<string>('all');
  const [selectedPcTleLPart, setSelectedPcTleLPart] = useState<string>('all');
  const [selectedSvt1ereTab, setSelectedSvt1ereTab] = useState<Svt1ereSeriesTab>(() => {
    if (savedClass?.series === 'S1') return 'S1';
    if (savedClass?.series === 'L1') return 'L1';
    if (savedClass?.series === 'L2') return 'L2';
    if (savedClass?.series === 'L') return 'L1';
    return 'S2';
  });
  const [selectedSvt1ereS2Part, setSelectedSvt1ereS2Part] = useState<string>('all');
  const [selectedMath1ereTab, setSelectedMath1ereTab] = useState<Math1ereSeriesTab>(() => {
    if (savedClass?.series === 'L' || savedClass?.series === 'L1' || savedClass?.series === 'L2') return 'L';
    return 'S';
  });
  const [selectedMath1ereLPart, setSelectedMath1ereLPart] = useState<string>('all');
  const [selectedMath1ereSPart, setSelectedMath1ereSPart] = useState<string>('all');
  const [selectedGeographie1erePart, setSelectedGeographie1erePart] = useState<string>('all');
  const [selectedPc1ereLPart, setSelectedPc1ereLPart] = useState<string>('all');
  const [selectedPc1ereSPart, setSelectedPc1ereSPart] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleChangeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('kaay_jang_language', lang);
    } catch (e) {
      console.error(e);
    }
    const label = lang === 'wo' ? 'Wolof 🇸🇳' : lang === 'en' ? 'English 🇬🇧' : 'Français 🇸🇳';
    showToast(`Langue sélectionnée : ${label}`);
  };

  const handleQuickNotificationToggle = async () => {
    if (!notificationsActive) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setNotificationsActive(true);
        showToast('🔔 Notifications actives ! Rappels d\'étude activés.');
      } else {
        showToast('Activez les notifications dans les paramètres de votre navigateur.');
      }
    } else {
      toggleNotifications(false);
      setNotificationsActive(false);
      showToast('Notifications désactivées.');
    }
  };

  // Redirection automatique fluide depuis l'écran d'accueil après 2.5s (ou clic immédiat)
  useEffect(() => {
    if (screen === 'welcome') {
      const timer = setTimeout(() => {
        if (savedClass) {
          setScreen('subject');
        } else {
          setScreen('choose-class');
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [screen, savedClass]);

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

    if (className === 'Terminale' || className === 'Tle') {
      if (series === 'L' || series === 'L1' || series === 'L2') {
        setSelectedSvtTleTab('L');
        setSelectedMathTleTab('L');
        setSelectedPcTleTab('L');
      } else {
        setSelectedSvtTleTab('S');
        setSelectedMathTleTab('S');
        setSelectedPcTleTab('S');
      }
    }

    if (className === 'Première' || className === '1ère') {
      if (series === 'S1') {
        setSelectedSvt1ereTab('S1');
        setSelectedMath1ereTab('S');
      } else if (series === 'S2') {
        setSelectedSvt1ereTab('S2');
        setSelectedMath1ereTab('S');
      } else if (series === 'L1') {
        setSelectedSvt1ereTab('L1');
        setSelectedMath1ereTab('L');
      } else if (series === 'L2') {
        setSelectedSvt1ereTab('L2');
        setSelectedMath1ereTab('L');
      } else if (series === 'L') {
        setSelectedSvt1ereTab('L1');
        setSelectedMath1ereTab('L');
      } else {
        setSelectedSvt1ereTab('S2');
        setSelectedMath1ereTab('S');
      }
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
    setSelectedPc2ndeLPart('all');
    setSelectedMath2ndeLPart('all');
    setSelectedAnglais2ndePart('all');
    setSelectedAnglais1erePart('all');
    setSelectedAnglaisTlePart('all');
    setSelectedFrancaisTlePart('all');
    setSelectedHistoireTlePart('all');
    setSelectedGeographieTlePart('all');
    setSelectedSvtTleSPart('all');
    setSelectedSvtTleLPart('all');
    setSelectedMathTleSPart('all');
    setSelectedMathTleLPart('all');
    setSelectedPcTleSPart('all');
    setSelectedPcTleLPart('all');
    setSelectedMath1ereLPart('all');
    setSelectedMath1ereSPart('all');
    setScreen('content');
  };

  const handleOpenLesson = (lesson: LessonContent) => {
    setActiveLesson(lesson);
    setScreen('lesson-reader');
  };

  const handleBack = () => {
    if (screen === 'lesson-reader') setScreen('content');
    else if (screen === 'content') setScreen('subject');
    else if (screen === 'subject') setScreen('choose-class');
    else if (screen === 'choose-class') setScreen('welcome');
  };

  const getBackBtnLabel = () => {
    switch (screen) {
      case 'choose-class':
        return { label: 'Accueil', full: "Retour à l'accueil" };
      case 'subject':
        return { label: 'Classes', full: 'Retour aux classes' };
      case 'content':
        return { label: 'Matières', full: 'Retour aux matières' };
      case 'lesson-reader':
        return { label: 'Cours', full: 'Retour aux cours' };
      default:
        return { label: 'Retour', full: 'Retour en arrière' };
    }
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

    // Matière SVT pour la classe de Première (Séries S1, S2, L1, L2 - Programme officiel national complet sans résumé avec courbes & figures)
    if (selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère')) {
      if (selectedSvt1ereTab === 'S1') return COURSES_SVT_1ERE_S1;
      if (selectedSvt1ereTab === 'L1') return COURSES_SVT_1ERE_L1;
      if (selectedSvt1ereTab === 'L2') return COURSES_SVT_1ERE_L2;
      return COURSES_SVT_1ERE_S2;
    }

    // Matière SVT pour la classe de Terminale (Différenciation stricte Séries S & L - Programmes officiels nationaux complets sans résumé)
    if (selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle')) {
      if (selectedSvtTleTab === 'L') return COURSES_SVT_TLE_L;
      return COURSES_SVT_TLE_S;
    }

    // Matière Français pour la classe de Terminale (Séries L & S - Programme officiel national du Sénégal - 20 leçons exhaustives sans résumé pour le Baccalauréat)
    if (selectedSubject === 'Français' && (selectedClass === 'Terminale' || selectedClass === 'Tle')) {
      return COURSES_FRANCAIS_TLE;
    }

    // Matière Français pour la classe de Première (Séries L & S - Programme officiel harmonisé des IA de Dakar, Pikine-Guédiawaye & Rufisque - 16 leçons et modules exhaustifs sans résumé)
    if (selectedSubject === 'Français' && (selectedClass === 'Première' || selectedClass === '1ère')) {
      return COURSES_FRANCAIS_1ERE;
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

    // Matière Anglais pour la classe de Seconde (Séries L & S - Programme officiel national complet APC - 14 Units et modules exhaustifs sans résumé avec conjugaison de tous les temps, quantifieurs, modaux, grammaire, phonétique, compréhension et ateliers d'écriture)
    if (selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde')) {
      return COURSES_ANGLAIS_2NDE;
    }

    // Matière Anglais pour la classe de Première (Séries L & S - Programme officiel national complet APC - 8 Units et modules complets avec thématiques du Bac, conjugaison intégrale des 12 temps, quantifieurs, modaux du passé, orthographe et méthodologie de l'examen)
    if (selectedSubject === 'Anglais' && (selectedClass === 'Première' || selectedClass === '1ère')) {
      return COURSES_ANGLAIS_1ERE;
    }

    // Matière Anglais pour la classe de Terminale (Séries L & S - Préparation intensive au Baccalauréat)
    if (selectedSubject === 'Anglais' && (selectedClass === 'Terminale' || selectedClass === 'Tle')) {
      return COURSES_ANGLAIS_TLE;
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

    // Matière Histoire pour la classe de Terminale (Séries L & S - Programme officiel national du Sénégal - 17 leçons exhaustives sans résumé pour le Baccalauréat)
    if (selectedSubject === 'Histoire' && (selectedClass === 'Terminale' || selectedClass === 'Tle')) {
      return COURSES_HISTOIRE_TLE;
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

    // Matière Géographie pour la classe de Première (Programme officiel national complet - 23 leçons intégrales avec grandes parties, figures, courbes, schémas et exercices résolus)
    if (selectedSubject === 'Géographie' && (selectedClass === 'Première' || selectedClass === '1ère')) {
      return COURSES_GEOGRAPHIE_1ERE;
    }

    // Matière Géographie pour la classe de Terminale (Séries L & S - Programme officiel national complet sans résumé - 17 leçons intégrales pour le Baccalauréat)
    if (selectedSubject === 'Géographie' && (selectedClass === 'Terminale' || selectedClass === 'Tle')) {
      return COURSES_GEOGRAPHIE_TLE;
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

    // Matière Mathématiques pour la classe de Seconde (Série L - Référentiel officiel national APAMS - 8 chapitres intégraux ultra-détaillés sans résumé avec démonstrations et exercices d'application corrigés)
    if (selectedSubject === 'Mathématiques' && (selectedClass === 'Seconde' || selectedClass === '2nde')) {
      return COURSES_MATH_2NDE_L;
    }

    // Matière Mathématiques pour la classe de Première (Séries L & S - Référentiel national APAMS 1ère L & 1ère S1-S2 complet sans résumé avec figures obligatoires)
    if (selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère')) {
      if (selectedMath1ereTab === 'L') {
        return COURSES_MATH_1ERE_L_LIST;
      }
      return COURSES_MATH_1ERE_S_LIST;
    }

    // Matière Mathématiques pour la classe de Terminale (Séries L & S - Programme officiel national complet sans résumé avec démonstrations intégrales)
    if (selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle')) {
      if (selectedMathTleTab === 'L') {
        return COURSES_MATH_TLE_L;
      }
      return COURSES_MATH_TLE_S;
    }

    // Matière Physique-Chimie pour la classe de 4ème (Programme officiel complet : Physique/Électricité et Chimie/Matière avec figures et schémas vectoriels obligatoires)
    if (selectedSubject === 'Physique-Chimie' && selectedClass === '4ème') {
      return COURSES_PC_4EME;
    }

    // Matière Physique-Chimie pour la classe de 3ème (Programme officiel BFEM complet : Chimie 1-6 et Physique 7-15 avec figures et protocoles expérimentaux obligatoires)
    if (selectedSubject === 'Physique-Chimie' && selectedClass === '3ème') {
      return COURSES_PC_3EME;
    }

    // Matière Physique-Chimie pour la classe de Seconde (Série S et Série L)
    if (selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde')) {
      if (selectedSeries === 'L') {
        return COURSES_PC_2NDE_L;
      }
      // Seconde S uniquement (par défaut et pour série S) : 26 chapitres complets sans résumé avec figures obligatoires
      return COURSES_PC_2NDE_S;
    }

    // Matière Physique-Chimie pour la classe de Première (Séries L et S - Programmes complets avec formules et schémas)
    if (selectedSubject === 'Physique-Chimie' && (selectedClass === 'Première' || selectedClass === '1ère')) {
      if (selectedSeries === 'L' || selectedSeries === 'L1' || selectedSeries === 'L2') {
        return COURSES_PC_1ERE_L;
      }
      return COURSES_PC_1ERE_S;
    }

    // Matière Physique-Chimie pour la classe de Terminale (Séries L & S - Programme officiel complet du Baccalauréat avec schémas expérimentaux et démonstrations)
    if (selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle')) {
      if (selectedPcTleTab === 'L') {
        return COURSES_PC_TLE_L;
      }
      return COURSES_PC_TLE_S;
    }

    // Matière Philosophie pour le second cycle (Programme officiel national complet de l'Office du Baccalauréat - 8 chapitres et modules exhaustifs sans résumé)
    if (selectedSubject === 'Philosophie') {
      return COURSES_PHILOSOPHIE_1ERE;
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
  const favCount = allContentItems.filter(i => favoriteLessonIds.includes(i.id)).length;

  const filteredContent = allContentItems.filter(item => {
    const matchesTab =
      activeTab === 'favoris'
        ? favoriteLessonIds.includes(item.id)
        : item.type === (activeTab === 'cours' ? 'cours' : 'ressource');
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
    const matchesPc2ndeSPart =
      selectedSubject !== 'Physique-Chimie' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      selectedSeries === 'L' ||
      activeTab !== 'cours' ||
      selectedPc2ndeSPart === 'all' ||
      (selectedPc2ndeSPart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedPc2ndeSPart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedPc2ndeSPart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedPc2ndeSPart === 'part-4' && item.badge?.includes('Partie 4')) ||
      (selectedPc2ndeSPart === 'part-5' && item.badge?.includes('Partie 5'));
    const matchesPc2ndeLPart =
      selectedSubject !== 'Physique-Chimie' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      selectedSeries !== 'L' ||
      activeTab !== 'cours' ||
      selectedPc2ndeLPart === 'all' ||
      (selectedPc2ndeLPart === 'part1' && (item.badge?.includes('Partie 1') || item.badge?.includes('Physique'))) ||
      (selectedPc2ndeLPart === 'part2' && (item.badge?.includes('Partie 2') || item.badge?.includes('Chimie')));
    const matchesMath2ndeLPart =
      selectedSubject !== 'Mathématiques' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      activeTab !== 'cours' ||
      selectedMath2ndeLPart === 'all' ||
      (selectedMath2ndeLPart === 'part1' && (item.badge?.includes('Partie 1') || item.badge?.includes('Chapitres 1'))) ||
      (selectedMath2ndeLPart === 'part2' && (item.badge?.includes('Partie 2') || item.badge?.includes('Chapitres 5')));
    const matchesAnglais2ndePart =
      selectedSubject !== 'Anglais' ||
      (selectedClass !== 'Seconde' && selectedClass !== '2nde') ||
      activeTab !== 'cours' ||
      selectedAnglais2ndePart === 'all' ||
      (selectedAnglais2ndePart === 'part1' && (item.badge?.includes('Units 1-4') || item.badge?.includes('Thèmes de société'))) ||
      (selectedAnglais2ndePart === 'part2' && (item.badge?.includes('Units 5-8') || item.badge?.includes('Tech, Droits'))) ||
      (selectedAnglais2ndePart === 'tenses' && (item.badge?.includes('Conjugaison') || item.badge?.includes('Tous les temps'))) ||
      (selectedAnglais2ndePart === 'quantifiers' && (item.badge?.includes('Quantifieurs') || item.badge?.includes('Noms & Déterminants'))) ||
      (selectedAnglais2ndePart === 'modals' && (item.badge?.includes('Modaux') || item.badge?.includes('Modal Perfects'))) ||
      (selectedAnglais2ndePart === 'grammar' && (item.badge?.includes('Grammaire') || item.badge?.includes('Passif'))) ||
      (selectedAnglais2ndePart === 'spelling' && (item.badge?.includes('Orthographe') || item.badge?.includes('Verbes irréguliers')));
    const matchesAnglais1erePart =
      selectedSubject !== 'Anglais' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      activeTab !== 'cours' ||
      selectedAnglais1erePart === 'all' ||
      (selectedAnglais1erePart === 'tenses' && item.badge?.includes('Temps & Verbes')) ||
      (selectedAnglais1erePart === 'grammar' && item.badge?.includes('Grammaire & Structures')) ||
      (selectedAnglais1erePart === 'themes' && item.badge?.includes('Thématiques & Vocabulaire')) ||
      (selectedAnglais1erePart === 'writing' && item.badge?.includes('Expression Écrite')) ||
      (selectedAnglais1erePart === 'exam' && item.badge?.includes('Phonologie & Évaluation'));
    const matchesAnglaisTlePart =
      selectedSubject !== 'Anglais' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedAnglaisTlePart === 'all' ||
      (selectedAnglaisTlePart === 'grammar' && item.badge?.includes('Grammaire du Bac')) ||
      (selectedAnglaisTlePart === 'themes' && item.badge?.includes('Thématiques & Vocabulaire')) ||
      (selectedAnglaisTlePart === 'phonology' && item.badge?.includes('Phonologie & Prononciation')) ||
      (selectedAnglaisTlePart === 'methodology' && item.badge?.includes('Épreuves & Méthodologie Bac'));
    const matchesFrancaisTlePart =
      selectedSubject !== 'Français' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedFrancaisTlePart === 'all' ||
      (selectedFrancaisTlePart === 'part-1' && item.badge?.includes('Module 1')) ||
      (selectedFrancaisTlePart === 'part-2' && item.badge?.includes('Module 2')) ||
      (selectedFrancaisTlePart === 'part-3' && item.badge?.includes('Module 3')) ||
      (selectedFrancaisTlePart === 'part-4' && item.badge?.includes('Module 4')) ||
      (selectedFrancaisTlePart === 'part-5' && item.badge?.includes('Module 5'));
    const matchesHistoireTlePart =
      selectedSubject !== 'Histoire' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedHistoireTlePart === 'all' ||
      (selectedHistoireTlePart === 'part-1' && item.badge?.includes('Chapitre I')) ||
      (selectedHistoireTlePart === 'part-2' && item.badge?.includes('Chapitre II')) ||
      (selectedHistoireTlePart === 'part-3' && item.badge?.includes('Chapitre III')) ||
      (selectedHistoireTlePart === 'part-4' && item.badge?.includes('Chapitre IV'));
    const matchesGeographieTlePart =
      selectedSubject !== 'Géographie' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedGeographieTlePart === 'all' ||
      (selectedGeographieTlePart === 'part-1' && item.badge?.includes('Partie I')) ||
      (selectedGeographieTlePart === 'part-2' && item.badge?.includes('Partie II')) ||
      (selectedGeographieTlePart === 'part-3' && item.badge?.includes('Partie III')) ||
      (selectedGeographieTlePart === 'part-4' && item.badge?.includes('Partie IV'));
    const matchesSvtTleSPart =
      selectedSubject !== 'SVT' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      selectedSvtTleTab !== 'S' ||
      activeTab !== 'cours' ||
      selectedSvtTleSPart === 'all' ||
      (selectedSvtTleSPart === 'part-1' && item.badge?.includes('Thème 1')) ||
      (selectedSvtTleSPart === 'part-2' && item.badge?.includes('Thème 2')) ||
      (selectedSvtTleSPart === 'part-3' && item.badge?.includes('Thème 3')) ||
      (selectedSvtTleSPart === 'part-4' && item.badge?.includes('Thème 4'));
    const matchesSvtTleLPart =
      selectedSubject !== 'SVT' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      selectedSvtTleTab !== 'L' ||
      activeTab !== 'cours' ||
      selectedSvtTleLPart === 'all' ||
      (selectedSvtTleLPart === 'part-1' && item.badge?.includes('Thème 1')) ||
      (selectedSvtTleLPart === 'part-2' && item.badge?.includes('Thème 2')) ||
      (selectedSvtTleLPart === 'part-3' && item.badge?.includes('Thème 3')) ||
      (selectedSvtTleLPart === 'part-4' && item.badge?.includes('Thème 4'));
    const matchesMathTleSPart =
      selectedSubject !== 'Mathématiques' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedMathTleTab !== 'S' ||
      selectedMathTleSPart === 'all' ||
      (selectedMathTleSPart === 'part-1' && (item.id === 'math-tle-s-cours-1' || item.id === 'math-tle-s-cours-2' || item.id === 'math-tle-s-cours-3' || item.id === 'math-tle-s-cours-4')) ||
      (selectedMathTleSPart === 'part-2' && (item.id === 'math-tle-s-cours-5' || item.id === 'math-tle-s-cours-6' || item.id === 'math-tle-s-cours-7')) ||
      (selectedMathTleSPart === 'part-3' && (item.id === 'math-tle-s-cours-8' || item.id === 'math-tle-s-cours-9' || item.id === 'math-tle-s-cours-10')) ||
      (selectedMathTleSPart === 'part-4' && (item.id === 'math-tle-s-cours-11' || item.id === 'math-tle-s-cours-12' || item.id === 'math-tle-s-cours-13'));
    const matchesMathTleLPart =
      selectedSubject !== 'Mathématiques' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedMathTleTab !== 'L' ||
      selectedMathTleLPart === 'all' ||
      (selectedMathTleLPart === 'part-1' && (item.id === 'math-tle-l-cours-1' || item.id === 'math-tle-l-cours-2')) ||
      (selectedMathTleLPart === 'part-2' && (item.id === 'math-tle-l-cours-3' || item.id === 'math-tle-l-cours-4')) ||
      (selectedMathTleLPart === 'part-3' && (item.id === 'math-tle-l-cours-5' || item.id === 'math-tle-l-cours-6')) ||
      (selectedMathTleLPart === 'part-4' && (item.id === 'math-tle-l-cours-7' || item.id === 'math-tle-l-cours-8'));
    const matchesPcTleSPart =
      selectedSubject !== 'Physique-Chimie' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedPcTleTab !== 'S' ||
      selectedPcTleSPart === 'all' ||
      (selectedPcTleSPart === 'part-1' && (item.id === 'pc-tle-s-cours-1' || item.id === 'pc-tle-s-cours-2' || item.id === 'pc-tle-s-cours-3')) ||
      (selectedPcTleSPart === 'part-2' && (item.id === 'pc-tle-s-cours-4' || item.id === 'pc-tle-s-cours-5')) ||
      (selectedPcTleSPart === 'part-3' && (item.id === 'pc-tle-s-cours-6' || item.id === 'pc-tle-s-cours-7' || item.id === 'pc-tle-s-cours-8' || item.id === 'pc-tle-s-cours-9')) ||
      (selectedPcTleSPart === 'part-4' && (item.id === 'pc-tle-s-cours-10' || item.id === 'pc-tle-s-cours-11' || item.id === 'pc-tle-s-cours-12' || item.id === 'pc-tle-s-cours-13'));
    const matchesPcTleLPart =
      selectedSubject !== 'Physique-Chimie' ||
      (selectedClass !== 'Terminale' && selectedClass !== 'Tle') ||
      activeTab !== 'cours' ||
      selectedPcTleTab !== 'L' ||
      selectedPcTleLPart === 'all' ||
      (selectedPcTleLPart === 'part-1' && (item.id === 'pc-tle-l-cours-1' || item.id === 'pc-tle-l-cours-2' || item.id === 'pc-tle-l-cours-3')) ||
      (selectedPcTleLPart === 'part-2' && (item.id === 'pc-tle-l-cours-4' || item.id === 'pc-tle-l-cours-5' || item.id === 'pc-tle-l-cours-6'));
    const matchesFrancais1erePart =
      selectedSubject !== 'Français' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      activeTab !== 'cours' ||
      selectedFrancais1erePart === 'all' ||
      (selectedFrancais1erePart === 'part-1' && (item.badge?.includes('Partie 1') || item.badge?.includes('Poésie'))) ||
      (selectedFrancais1erePart === 'part-2' && (item.badge?.includes('Partie 2') || item.badge?.includes('Roman'))) ||
      (selectedFrancais1erePart === 'part-3' && (item.badge?.includes('Partie 3') || item.badge?.includes('Méthodologie')));
    const matchesPhilo1erePart =
      selectedSubject !== 'Philosophie' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      activeTab !== 'cours' ||
      selectedPhilo1erePart === 'all' ||
      (selectedPhilo1erePart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedPhilo1erePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedPhilo1erePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedPhilo1erePart === 'part-4' && item.badge?.includes('Partie 4'));
    const matchesSvt1ereS2Part =
      selectedSubject !== 'SVT' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      selectedSvt1ereTab !== 'S2' ||
      activeTab !== 'cours' ||
      selectedSvt1ereS2Part === 'all' ||
      (selectedSvt1ereS2Part === 'p1' && item.badge?.includes('Partie 1')) ||
      (selectedSvt1ereS2Part === 'p2' && item.badge?.includes('Partie 2')) ||
      (selectedSvt1ereS2Part === 'p3' && item.badge?.includes('Partie 3')) ||
      (selectedSvt1ereS2Part === 'p4' && item.badge?.includes('Partie 4')) ||
      (selectedSvt1ereS2Part === 'p5' && item.badge?.includes('Partie 5'));
    const matchesMath1ereLPart =
      selectedSubject !== 'Mathématiques' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      selectedMath1ereTab !== 'L' ||
      activeTab !== 'cours' ||
      selectedMath1ereLPart === 'all' ||
      (selectedMath1ereLPart === 'algebre' && item.badge?.includes('Algèbre')) ||
      (selectedMath1ereLPart === 'analyse' && item.badge?.includes('Analyse')) ||
      (selectedMath1ereLPart === 'suites_stats' && (item.badge?.includes('Suites') || item.badge?.includes('Synthèse')));
    const matchesMath1ereSPart =
      selectedSubject !== 'Mathématiques' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      selectedMath1ereTab !== 'S' ||
      activeTab !== 'cours' ||
      selectedMath1ereSPart === 'all' ||
      (selectedMath1ereSPart === 'analyse' && item.badge?.includes('Pôle Analyse')) ||
      (selectedMath1ereSPart === 'geometrie' && item.badge?.includes('Pôle Géométrie')) ||
      (selectedMath1ereSPart === 'proba' && item.badge?.includes('Pôle Probabilités'));
    const matchesGeographie1erePart =
      selectedSubject !== 'Géographie' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      activeTab !== 'cours' ||
      selectedGeographie1erePart === 'all' ||
      (selectedGeographie1erePart === 'intro' && (item.badge?.includes('Introduction') || item.id === 'geo-1ere-lecon-1')) ||
      (selectedGeographie1erePart === 'part-1' && item.badge?.includes('Partie 1')) ||
      (selectedGeographie1erePart === 'part-2' && item.badge?.includes('Partie 2')) ||
      (selectedGeographie1erePart === 'part-3' && item.badge?.includes('Partie 3')) ||
      (selectedGeographie1erePart === 'part-4' && (item.badge?.includes('Partie 4') || item.badge?.includes('Conclusion')));
    const matchesPc1ereLPart =
      selectedSubject !== 'Physique-Chimie' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      (selectedSeries !== 'L' && selectedSeries !== 'L1' && selectedSeries !== 'L2') ||
      activeTab !== 'cours' ||
      selectedPc1ereLPart === 'all' ||
      (selectedPc1ereLPart === 'physique' && item.badge?.includes('Physique 1ère L')) ||
      (selectedPc1ereLPart === 'chimie' && item.badge?.includes('Chimie 1ère L'));
    const matchesPc1ereSPart =
      selectedSubject !== 'Physique-Chimie' ||
      (selectedClass !== 'Première' && selectedClass !== '1ère') ||
      (selectedSeries === 'L' || selectedSeries === 'L1' || selectedSeries === 'L2') ||
      activeTab !== 'cours' ||
      selectedPc1ereSPart === 'all' ||
      (selectedPc1ereSPart === 'physique' && item.badge?.includes('Physique S')) ||
      (selectedPc1ereSPart === 'chimie' && item.badge?.includes('Chimie S'));
    return matchesTab && matchesSearch && matchesCiviqueChapter && matchesHistoirePart && matchesHistoire5emePart && matchesHistoire4emePart && matchesHistoire3emePart && matchesGeographiePart && matchesGeographie5emePart && matchesGeographie4emePart && matchesGeographie3emePart && matchesAnglaisPart && matchesAnglais4emePart && matchesMathChapter && matchesSvt5emeTheme && matchesSvt4emeTheme && matchesSvt3emeTheme && matchesCivique4emePart && matchesCivique3emePart && matchesFrancais3emePart && matchesMath4emePart && matchesMath5emePart && matchesMath3emeTheme && matchesPc4emeTheme && matchesPc3emeTheme && matchesSvt2ndeTheme && matchesHistoire1erePart && matchesFrancais2ndeModule && matchesHistoire2ndePart && matchesGeographie2ndePart && matchesPc2ndeSPart && matchesPc2ndeLPart && matchesMath2ndeLPart && matchesAnglais2ndePart && matchesAnglais1erePart && matchesAnglaisTlePart && matchesFrancaisTlePart && matchesHistoireTlePart && matchesGeographieTlePart && matchesSvtTleSPart && matchesSvtTleLPart && matchesMathTleSPart && matchesMathTleLPart && matchesPcTleSPart && matchesPcTleLPart && matchesFrancais1erePart && matchesPhilo1erePart && matchesSvt1ereS2Part && matchesMath1ereLPart && matchesMath1ereSPart && matchesGeographie1erePart && matchesPc1ereLPart && matchesPc1ereSPart;
  });

  // ÉCRAN 1 : ACCUEIL PLEIN ÉCRAN AVEC EMOJIS FLOTTANTS (STYLE ÉCOLE ET CAHIER)
  // ET UNIQUEMENT LE GROUPE DE MOTS "Bienvenue dans Kaay jang"
  const renderWelcome = () => {
    const handleEnterApp = () => {
      if (savedClass) {
        setScreen('subject');
      } else {
        setScreen('choose-class');
      }
    };

    return (
      <div
        onClick={handleEnterApp}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleEnterApp();
        }}
        className="fixed inset-0 z-50 w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white select-none overflow-hidden cursor-pointer px-4 outline-none"
      >
        {/* Cercles diffus d'ambiance lumineuse */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl -top-24 -left-24 pointer-events-none" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-600/20 blur-3xl -bottom-24 -right-24 pointer-events-none" />

        {/* EMOJIS FLOTTANTS DE STYLE ÉCOLE ET CAHIER */}
        {FLOATING_SCHOOL_EMOJIS.map((item, idx) => (
          <div
            key={idx}
            className={`absolute pointer-events-none floating-emoji select-none ${item.size} ${item.opacity}`}
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.emoji}
          </div>
        ))}

        {/* CONTENU CENTRAL : UNIQUEMENT LE GROUPE DE MOTS "Bienvenue dans Kaay jang" */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight welcome-title-glow text-white drop-shadow-2xl">
            Bienvenue dans Kaay jang
          </h1>
        </div>
      </div>
    );
  };

  // PAGE APRÈS L'ÉCRAN D'ACCUEIL : CHOIX DU CYCLE PUIS CLASSE AVEC SAUVEGARDE ET NUMÉROS D'AIDE
  const renderChooseClass = () => (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-4">
      {/* Bouton de retour en haut */}
      <div className="mb-4">
        <button
          onClick={() => setScreen('welcome')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-800 font-bold text-xs sm:text-sm border border-gray-200 hover:border-blue-200 transition shadow-2xs cursor-pointer group"
          title="Retour à l'écran d'accueil"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
          <span>← Retour à l'écran d'accueil</span>
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
          Bienvenue, choisis ton cycle scolaire, puis votre classe
        </h2>
        <p className="text-sm sm:text-base font-bold text-blue-700 mt-2">
          Après les choix, accédez à vos cours.
        </p>

        {/* Accès direct si une classe est déjà enregistrée */}
        {savedClass && (
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 block">
                Votre classe actuelle enregistrée
              </span>
              <span className="text-lg sm:text-xl font-black">
                {savedClass.category} — Classe de {savedClass.className} {savedClass.series ? `(Série ${savedClass.series})` : ''}
              </span>
            </div>
            <button
              onClick={() => {
                const available = getSubjectsForClass(savedClass.category, savedClass.className);
                if (!available.some(s => s.name === selectedSubject)) {
                  setSelectedSubject(available[0]?.name || 'SVT');
                }
                setScreen('subject');
              }}
              className="px-5 py-2.5 rounded-xl bg-white text-blue-900 font-extrabold text-sm hover:bg-blue-50 transition shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Accéder directement à mes cours</span>
              <ChevronRight className="w-4 h-4 text-blue-700" />
            </button>
          </div>
        )}

        {/* Numéro d'aide unique : 70 775 37 76 avec Ibkane IA */}
        <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-black text-emerald-950 uppercase tracking-wide block">
                Numéro d'aide &amp; Assistance avec Ibkane IA
              </span>
              <span className="text-xs text-emerald-800">
                Contact direct pour vos cours ou l'application sur WhatsApp :
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
              <span className="text-sm font-black text-gray-900">70 775 37 76</span>
              <a
                href="tel:+221707753776"
                className="p-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1 px-2.5"
                title="Appeler le 70 775 37 76"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Appel</span>
              </a>
              <a
                href="https://wa.me/221707753776?text=Bonjour%20Ibkane%20IA,%20j'ai%20besoin%20d'aide%20sur%20Kaay%20Jang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold transition flex items-center gap-1.5 px-3"
                title="WhatsApp 70 775 37 76"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Ibkane IA</span>
              </a>
            </div>
          </div>
        </div>
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
          {(DATA.classes[selectedCategory] || DATA.classes['Collège']).map(c => {
            if (c.hasSeries) {
              if (c.name === 'Première') {
                return (
                  <React.Fragment key={c.name}>
                    {/* Première S2 */}
                    <button
                      onClick={() => handleSaveAndSelectClass('Lycée', 'Première', 'S2')}
                      className={`p-5 rounded-2xl border transition-all text-left group relative ${
                        savedClass?.className === 'Première' && (savedClass?.series === 'S2' || savedClass?.series === 'S') && savedClass?.category === 'Lycée'
                          ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-2 ring-emerald-400/30'
                          : 'bg-white border-gray-200 hover:border-emerald-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                          Série S2 (Sc. Exp.)
                        </span>
                        {savedClass?.className === 'Première' && (savedClass?.series === 'S2' || savedClass?.series === 'S') && savedClass?.category === 'Lycée' ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Enregistrée
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                      <h4 className="text-lg font-black text-gray-900 group-hover:text-emerald-600">
                        1ère S2
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">Sciences Expérimentales (28 leçons SVT complètes, PC & Maths)</p>
                    </button>

                    {/* Première S1 */}
                    <button
                      onClick={() => handleSaveAndSelectClass('Lycée', 'Première', 'S1')}
                      className={`p-5 rounded-2xl border transition-all text-left group relative ${
                        savedClass?.className === 'Première' && savedClass?.series === 'S1' && savedClass?.category === 'Lycée'
                          ? 'bg-blue-50/80 border-blue-500 shadow-sm ring-2 ring-blue-400/30'
                          : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                          Série S1 (Exactes)
                        </span>
                        {savedClass?.className === 'Première' && savedClass?.series === 'S1' && savedClass?.category === 'Lycée' ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Enregistrée
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                      <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-600">
                        1ère S1
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">Sciences Mathématiques & Physiques (8 leçons SVT approfondies)</p>
                    </button>

                    {/* Première L1 */}
                    <button
                      onClick={() => handleSaveAndSelectClass('Lycée', 'Première', 'L1')}
                      className={`p-5 rounded-2xl border transition-all text-left group relative ${
                        savedClass?.className === 'Première' && (savedClass?.series === 'L1' || savedClass?.series === 'L') && savedClass?.category === 'Lycée'
                          ? 'bg-amber-50/80 border-amber-500 shadow-sm ring-2 ring-amber-400/30'
                          : 'bg-white border-gray-200 hover:border-amber-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                          Série L1 (Lettres)
                        </span>
                        {savedClass?.className === 'Première' && (savedClass?.series === 'L1' || savedClass?.series === 'L') && savedClass?.category === 'Lycée' ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Enregistrée
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                      <h4 className="text-lg font-black text-gray-900 group-hover:text-amber-600">
                        1ère L1
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">Langues & Littérature (6 leçons SVT santé & écologie)</p>
                    </button>

                    {/* Première L2 */}
                    <button
                      onClick={() => handleSaveAndSelectClass('Lycée', 'Première', 'L2')}
                      className={`p-5 rounded-2xl border transition-all text-left group relative ${
                        savedClass?.className === 'Première' && savedClass?.series === 'L2' && savedClass?.category === 'Lycée'
                          ? 'bg-purple-50/80 border-purple-500 shadow-sm ring-2 ring-purple-400/30'
                          : 'bg-white border-gray-200 hover:border-purple-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                          Série L2 (Sc. Humaines)
                        </span>
                        {savedClass?.className === 'Première' && savedClass?.series === 'L2' && savedClass?.category === 'Lycée' ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Enregistrée
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                      <h4 className="text-lg font-black text-gray-900 group-hover:text-purple-600">
                        1ère L2
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">Sciences Sociales (6 leçons SVT nutrition, immunologie & environnement)</p>
                    </button>
                  </React.Fragment>
                );
              }

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
        {/* Bouton de retour en haut */}
        <div className="mb-3 flex items-center justify-between gap-2 flex-wrap">
          <button
            onClick={() => setScreen('choose-class')}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-800 font-bold text-xs sm:text-sm border border-gray-200 hover:border-blue-200 transition shadow-2xs cursor-pointer group"
            title="Retour au choix de la classe"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
            <span>← Retour aux classes ({selectedClass}{selectedSeries ? ` ${selectedSeries}` : ''})</span>
          </button>
        </div>

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
      {/* Bouton de retour en haut */}
      <div className="mb-3 flex items-center justify-between gap-2 flex-wrap">
        <button
          onClick={() => setScreen('subject')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-800 font-bold text-xs sm:text-sm border border-gray-200 hover:border-blue-200 transition shadow-2xs cursor-pointer group"
          title="Retour au choix des matières"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
          <span>← Retour aux matières ({selectedSubject})</span>
        </button>
      </div>

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
        <button
          onClick={() => setActiveTab('favoris')}
          className={`pb-3 px-4 font-semibold text-xs sm:text-sm transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'favoris'
              ? 'border-amber-500 text-amber-600 font-bold'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
          title="Consulter vos leçons favorites sauvegardées"
        >
          <Bookmark className={`w-4 h-4 ${activeTab === 'favoris' ? 'fill-amber-500 text-amber-500' : ''}`} />
          <span>Favoris</span>
          <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
            activeTab === 'favoris' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'
          }`}>
            {favCount}
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

      {/* Organisation officielle pour SVT Première (Onglets Séries S1, S2, L1, L2 avec courbes & diagrammes) */}
      {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Programme officiel SVT Première — Leçons intégrales sans résumé &amp; courbes vectorielles
              </span>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Consultez le cursus officiel par série via les onglets : <strong>Série S2</strong> (28 leçons), <strong>Série S1</strong> (8 leçons), <strong>Série L1</strong> (6 leçons) ou <strong>Série L2</strong> (6 leçons).
              </p>
            </div>
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-2xs">
                Courbes &amp; Schémas SVG
              </span>
              <span className="text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                Classe de 1ère
              </span>
            </div>
          </div>

          {/* LES 4 ONGLETS SÉRIES : S1, S2, L1, L2 */}
          <div className="mb-3">
            <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Onglets leçons par série :</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SVT_1ERE_TABS.map(tab => {
                const isActive = selectedSvt1ereTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedSvt1ereTab(tab.id);
                      if (tab.id === 'S2') setSelectedSvt1ereS2Part('all');
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isActive
                        ? `${tab.bgActive} ${tab.borderActive} shadow-sm`
                        : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-black tracking-wide">
                        {tab.shortLabel}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tab.count} cours
                      </span>
                    </div>
                    <span className={`text-[10px] line-clamp-1 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                      {tab.title.replace(` (${tab.shortLabel})`, '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SOUS-FILTRES SI SÉRIE S2 SÉLECTIONNÉE (28 LEÇONS EN 5 PARTIES) */}
          {selectedSvt1ereTab === 'S2' && (
            <div className="pt-3 border-t border-emerald-200/70">
              <div className="text-[11px] font-bold text-emerald-900 mb-2 flex items-center justify-between">
                <span>Parties du programme S2 (Sciences Expérimentales) :</span>
                <span className="text-[10px] font-normal text-emerald-700">Filtrage thématique</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SVT_1ERE_S2_PARTS.map(part => {
                  const isPartSelected = selectedSvt1ereS2Part === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedSvt1ereS2Part(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isPartSelected
                          ? 'bg-emerald-700 text-white shadow-xs ring-2 ring-emerald-700/20'
                          : 'bg-white text-gray-700 hover:bg-emerald-100/70 border border-emerald-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
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

          {/* BANDEAU DESCRIPTIF S1 */}
          {selectedSvt1ereTab === 'S1' && (
            <div className="pt-2.5 border-t border-blue-200/70 text-xs text-blue-900 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold">
                🔬 Programme S1 : Cinétique enzymatique • Bioénergétique de Mitchell • Neurophysiologie (PA) • Lois de Mendel • Tectonique
              </span>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                Courbes oscillogramme &amp; cinétique incluses
              </span>
            </div>
          )}

          {/* BANDEAU DESCRIPTIF L1 */}
          {selectedSvt1ereTab === 'L1' && (
            <div className="pt-2.5 border-t border-amber-200/70 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold">
                📚 Programme L1 : Nutrition au Sahel • Maladies métaboliques (HTA) • Drépanocytose • Écosystèmes &amp; Grande Muraille Verte • Gestion de l'eau
              </span>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                Pyramide écologique incluse
              </span>
            </div>
          )}

          {/* BANDEAU DESCRIPTIF L2 */}
          {selectedSvt1ereTab === 'L2' && (
            <div className="pt-2.5 border-t border-purple-200/70 text-xs text-purple-900 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold">
                🌍 Programme L2 : Dépenses énergétiques • Reproduction &amp; Contraception • Immunologie &amp; PEV • Endémies (Paludisme) • Mangroves
              </span>
              <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md">
                Cycles biologiques inclus
              </span>
            </div>
          )}
        </div>
      )}

      {/* Organisation officielle pour SVT Terminale (Différenciation stricte Séries S & L - Programme officiel national du Baccalauréat) */}
      {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Programme officiel SVT Terminale — Différenciation stricte Séries S &amp; L (Sans résumé)
              </span>
              <p className="text-[11px] text-emerald-900/80 mt-0.5">
                Consultez le cursus officiel par série via les onglets : <strong>Série S (S1 &amp; S2)</strong> (13 leçons • Neurobiologie, Homéostasie, Endocrinologie, Génétique &amp; Biologie moléculaire) ou <strong>Série L (L1, L2, L')</strong> (8 leçons • Nutrition &amp; Santé, Reproduction &amp; PMA, Hérédité, Immunologie &amp; Écosystèmes sénégalais).
              </p>
            </div>
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-700 text-white shadow-2xs">
                Figures SVG &amp; Schémas
              </span>
              <span className="text-[11px] font-bold text-emerald-900 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                Classe de Terminale
              </span>
            </div>
          </div>

          {/* LES 2 ONGLETS SÉRIES : SÉRIE S ET SÉRIE L */}
          <div className="mb-3">
            <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Sélection de la série pour Terminale :</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SVT_TLE_TABS.map(tab => {
                const isActive = selectedSvtTleTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedSvtTleTab(tab.id);
                      if (tab.id === 'S') setSelectedSvtTleSPart('all');
                      if (tab.id === 'L') setSelectedSvtTleLPart('all');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? `${tab.bgActive} ${tab.borderActive} shadow-sm ring-2 ring-emerald-500/20`
                        : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-black tracking-wide">
                        {tab.label}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tab.count} cours
                      </span>
                    </div>
                    <span className={`text-[10px] ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                      {tab.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FILTRES PAR THÈME SÉRIE S */}
          {selectedSvtTleTab === 'S' && (
            <div className="pt-3 border-t border-emerald-200/70">
              <div className="text-[11px] font-bold text-emerald-950 mb-2 flex items-center justify-between">
                <span>Thèmes du programme Série S (S1 &amp; S2) :</span>
                <span className="text-[10px] font-normal text-emerald-700">13 leçons au Baccalauréat S</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SVT_TLE_S_PARTS.map(part => {
                  const isPartSelected = selectedSvtTleSPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedSvtTleSPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isPartSelected
                          ? 'bg-emerald-700 text-white shadow-xs ring-2 ring-emerald-700/20'
                          : 'bg-white text-gray-700 hover:bg-emerald-100/70 border border-emerald-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
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

          {/* FILTRES PAR THÈME SÉRIE L */}
          {selectedSvtTleTab === 'L' && (
            <div className="pt-3 border-t border-amber-200/70">
              <div className="text-[11px] font-bold text-amber-950 mb-2 flex items-center justify-between">
                <span>Thèmes du programme Série L (L1, L2, L') :</span>
                <span className="text-[10px] font-normal text-amber-700">8 leçons au Baccalauréat L</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SVT_TLE_L_PARTS.map(part => {
                  const isPartSelected = selectedSvtTleLPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedSvtTleLPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isPartSelected
                          ? 'bg-amber-700 text-white shadow-xs ring-2 ring-amber-700/20'
                          : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
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
        </div>
      )}

      {/* Organisation officielle pour Mathématiques Terminale (Différenciation stricte Séries S & L - Programme officiel national du Baccalauréat) */}
      {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-blue-700" />
                Programme officiel Mathématiques Terminale — Séries S &amp; L (Sans résumé • Figures &amp; Démonstrations)
              </span>
              <p className="text-[11px] text-blue-900/80 mt-0.5">
                Cours exhaustifs et détaillés conformes aux exigences du Baccalauréat sénégalais : <strong>Série S (S1 &amp; S2)</strong> (13 chapitres approfondis • TVI/TAF, ln/exp, Intégrales, Complexes, Probabilités, Espace &amp; Arithmétique) ou <strong>Série L (L1, L2, L')</strong> (8 chapitres complets • Dénombrement, Systèmes 3×3, Limites &amp; Dérivées, Fonctions ln/exp, Suites financières, Ajustement de Mayer).
              </p>
            </div>
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-700 text-white shadow-2xs">
                Courbes, Schémas &amp; Démonstrations SVG
              </span>
              <span className="text-[11px] font-bold text-blue-900 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
                Classe de Terminale
              </span>
            </div>
          </div>

          {/* LES 2 ONGLETS SÉRIES : SÉRIE S ET SÉRIE L */}
          <div className="mb-3">
            <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Sélection de la série pour Terminale Mathématiques :</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MATH_TLE_TABS.map(tab => {
                const isActive = selectedMathTleTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedMathTleTab(tab.id);
                      if (tab.id === 'S') setSelectedMathTleSPart('all');
                      if (tab.id === 'L') setSelectedMathTleLPart('all');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? `${tab.bgActive} ${tab.borderActive} shadow-sm ring-2 ring-blue-500/20`
                        : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-black tracking-wide">
                        {tab.label}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tab.count} leçons
                      </span>
                    </div>
                    <span className={`text-[10px] ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                      {tab.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FILTRES PAR PÔLE SÉRIE S */}
          {selectedMathTleTab === 'S' && (
            <div className="pt-3 border-t border-blue-200/70">
              <div className="text-[11px] font-bold text-blue-950 mb-2 flex items-center justify-between">
                <span>Pôles d'enseignement Série S (S1 &amp; S2) :</span>
                <span className="text-[10px] font-normal text-blue-700">13 leçons au Baccalauréat S</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {MATH_TLE_S_PARTS.map(part => {
                  const isPartSelected = selectedMathTleSPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedMathTleSPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isPartSelected
                          ? 'bg-blue-700 text-white shadow-xs ring-2 ring-blue-700/20'
                          : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
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

          {/* FILTRES PAR PARTIE SÉRIE L */}
          {selectedMathTleTab === 'L' && (
            <div className="pt-3 border-t border-amber-200/70">
              <div className="text-[11px] font-bold text-amber-950 mb-2 flex items-center justify-between">
                <span>Parties du programme Série L (L1, L2, L') :</span>
                <span className="text-[10px] font-normal text-amber-700">8 leçons au Baccalauréat L</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {MATH_TLE_L_PARTS.map(part => {
                  const isPartSelected = selectedMathTleLPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedMathTleLPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isPartSelected
                          ? 'bg-amber-700 text-white shadow-xs ring-2 ring-amber-700/20'
                          : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
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
        </div>
      )}

      {/* Organisation officielle pour Physique-Chimie Terminale (Différenciation stricte Séries S & L - Programme officiel national du Baccalauréat) */}
      {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 border border-purple-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-purple-700" />
                Programme officiel Physique-Chimie Terminale — Séries S &amp; L (Sans résumé • Schémas &amp; Démonstrations)
              </span>
              <p className="text-[11px] text-purple-900/80 mt-0.5">
                Cours complets et rigoureux avec schémas de montages et démonstrations des lois physiques : <strong>Série S (S1 &amp; S2)</strong> (13 chapitres • Acides/bases, Cinétique, Estérification, Newton, Lorentz, Kepler, RLC, Ondes, Radioactivité) ou <strong>Série L (L2, L')</strong> (6 chapitres • Optique de l'œil, Électricité domestique Senelec, Énergies solaires, Eau &amp; pH, Savonnerie, Plastiques).
              </p>
            </div>
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-700 text-white shadow-2xs">
                Schémas expérimentaux SVG
              </span>
              <span className="text-[11px] font-bold text-purple-900 bg-white px-2.5 py-1 rounded-full border border-purple-200 shadow-2xs">
                Classe de Terminale
              </span>
            </div>
          </div>

          {/* LES 2 ONGLETS SÉRIES : SÉRIE S ET SÉRIE L */}
          <div className="mb-3">
            <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Sélection de la série pour Terminale Physique-Chimie :</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PC_TLE_TABS.map(tab => {
                const isActive = selectedPcTleTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedPcTleTab(tab.id);
                      if (tab.id === 'S') setSelectedPcTleSPart('all');
                      if (tab.id === 'L') setSelectedPcTleLPart('all');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? `${tab.bgActive} ${tab.borderActive} shadow-sm ring-2 ring-purple-500/20`
                        : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-black tracking-wide">
                        {tab.label}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tab.count} leçons
                      </span>
                    </div>
                    <span className={`text-[10px] ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                      {tab.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FILTRES PAR PÔLE SÉRIE S */}
          {selectedPcTleTab === 'S' && (
            <div className="pt-3 border-t border-purple-200/70">
              <div className="text-[11px] font-bold text-purple-950 mb-2 flex items-center justify-between">
                <span>Pôles d'enseignement Série S (S1 &amp; S2) :</span>
                <span className="text-[10px] font-normal text-purple-700">13 leçons au Baccalauréat S</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PC_TLE_S_PARTS.map(part => {
                  const isPartSelected = selectedPcTleSPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedPcTleSPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isPartSelected
                          ? 'bg-purple-700 text-white shadow-xs ring-2 ring-purple-700/20'
                          : 'bg-white text-gray-700 hover:bg-purple-100/70 border border-purple-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-800'
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

          {/* FILTRES PAR PÔLE SÉRIE L */}
          {selectedPcTleTab === 'L' && (
            <div className="pt-3 border-t border-indigo-200/70">
              <div className="text-[11px] font-bold text-indigo-950 mb-2 flex items-center justify-between">
                <span>Pôles du programme Série L (L2, L') :</span>
                <span className="text-[10px] font-normal text-indigo-700">6 leçons au Baccalauréat L</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PC_TLE_L_PARTS.map(part => {
                  const isPartSelected = selectedPcTleLPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedPcTleLPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isPartSelected
                          ? 'bg-indigo-700 text-white shadow-xs ring-2 ring-indigo-700/20'
                          : 'bg-white text-gray-700 hover:bg-indigo-100/70 border border-indigo-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'
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
        </div>
      )}

      {/* Organisation officielle pour Mathématiques Première (Onglets Séries L & S avec figures & courbes) */}
      {selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-blue-700" />
                Programme officiel Mathématiques Première — Leçons longues sans résumé &amp; figures vectorielles obligatoires
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Consultez le cursus officiel par série via les onglets : <strong>Série L</strong> (8 chapitres complets APAMS) ou <strong>Série S</strong> (16 chapitres approfondis d'analyse, géométrie et probabilités).
              </p>
            </div>
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-2xs">
                Courbes &amp; Figures SVG
              </span>
              <span className="text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
                Classe de 1ère (L &amp; S)
              </span>
            </div>
          </div>

          {/* LES 2 ONGLETS SÉRIES : Série L & Série S */}
          <div className="mb-3">
            <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Série d'enseignement :</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {MATH_1ERE_TABS.map(tab => {
                const isActive = selectedMath1ereTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedMath1ereTab(tab.id);
                      if (tab.id === 'L') setSelectedMath1ereLPart('all');
                      if (tab.id === 'S') setSelectedMath1ereSPart('all');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isActive
                        ? `${tab.bgActive} ${tab.borderActive} shadow-sm`
                        : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs sm:text-sm font-black tracking-wide">
                        {tab.title}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tab.count} chapitres
                      </span>
                    </div>
                    <span className={`text-[11px] line-clamp-2 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                      {tab.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SOUS-FILTRES SI SÉRIE L SÉLECTIONNÉE (8 CHAPITRES APAMS) */}
          {selectedMath1ereTab === 'L' && (
            <div className="pt-3 border-t border-amber-200/70">
              <div className="text-[11px] font-bold text-amber-900 mb-2 flex items-center justify-between">
                <span>Parties du programme Série L (Référentiel APAMS) :</span>
                <span className="text-[10px] font-normal text-amber-700">Filtrage thématique</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {MATH_1ERE_L_PARTS.map(part => {
                  const isPartSelected = selectedMath1ereLPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedMath1ereLPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isPartSelected
                          ? 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-600/20'
                          : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {part.count}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-amber-900/90 bg-amber-50/70 rounded-lg p-2 border border-amber-200/50">
                📘 <strong>Programme officiel Série L :</strong> Systèmes 3×3 &amp; Pivot de Gauss • Programmation linéaire • Polynômes &amp; Parabole • Limites &amp; Dérivation (tangente) • Fonctions homographiques (hyperbole) • Suites &amp; Épargne CFA • Ajustement de Mayer • Dénombrement, arbres de probabilité &amp; Binôme de Newton • Série officielle d'exercices résolus APAMS.
              </p>
            </div>
          )}

          {/* SOUS-FILTRES SI SÉRIE S SÉLECTIONNÉE (16 CHAPITRES S1 & S2) */}
          {selectedMath1ereTab === 'S' && (
            <div className="pt-3 border-t border-blue-200/70">
              <div className="text-[11px] font-bold text-blue-900 mb-2 flex items-center justify-between">
                <span>Pôles d'enseignement Série S (Sciences S1 &amp; S2) :</span>
                <span className="text-[10px] font-normal text-blue-700">Filtrage thématique</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {MATH_1ERE_S_PARTS.map(part => {
                  const isPartSelected = selectedMath1ereSPart === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedMath1ereSPart(part.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isPartSelected
                          ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-600/20'
                          : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200/70'
                      }`}
                    >
                      <span>{part.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isPartSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {part.count}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-blue-900/90 bg-blue-50/70 rounded-lg p-2 border border-blue-200/50">
                🔬 <strong>Programme officiel Série S :</strong> 7 chapitres d'Analyse (Fonctions, Équations 2nd degré/Viète, Limites &amp; TVI, Dérivation complète, Trigonométrie circulaire, Primitives &amp; Intégration, Suites &amp; Récurrence) • 6 chapitres de Géométrie (Barycentres, Produit scalaire &amp; Al-Kashi, Lignes de niveau, Angles orientés, Transformations, Espace) • 3 chapitres de Probabilités &amp; Régression des moindres carrés.
              </p>
            </div>
          )}
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

      {/* Organisation officielle pour l'Histoire Terminale (Séries L & S - Programme officiel national du Bac) */}
      {selectedSubject === 'Histoire' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel national du Sénégal : Histoire Terminale (Séries L &amp; S) — 17 Leçons du Bac
              </span>
              <p className="text-[11px] text-amber-900/80 mt-0.5">
                Cours exhaustifs sans résumé : Relations Internationales de 1945 à nos jours, Décolonisation &amp; Tiers-Monde, Conflit Israélo-Arabe, Intégration Africaine (OUA/UA), Apartheid, Sénégal de 1960 à nos jours et Méthodologie Experte (Dissertation &amp; Commentaire).
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-900 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de Terminale (L &amp; S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedHistoireTlePart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedHistoireTlePart === 'all'
                  ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                  : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
              }`}
            >
              <span>Toutes les 17 leçons du Bac</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedHistoireTlePart === 'all' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                }`}
              >
                17
              </span>
            </button>
            {HISTOIRE_TLE_PARTS.slice(1).map(part => {
              const isSelected = selectedHistoireTlePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedHistoireTlePart(part.id)}
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

      {/* Organisation officielle pour la Géographie Terminale (Séries L & S - Programme officiel national du Baccalauréat) */}
      {selectedSubject === 'Géographie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-orange-50 via-amber-50 to-emerald-50 border border-orange-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-orange-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-orange-700" />
                Programme officiel national du Sénégal : Géographie Terminale (Séries L &amp; S) — 17 Leçons du Bac
              </span>
              <p className="text-[11px] text-orange-900/80 mt-0.5">
                Cours exhaustifs sans résumé : Mondialisation &amp; Disparités de développement, Grandes puissances (USA, UE, Japon, Chine, Brésil), L'Afrique, la CEDEAO et le Sénégal contemporain (Atouts, Pétrole/Gaz 2024, Aménagement) et Méthodologie experte (Dissertation &amp; Commentaire).
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-orange-900 bg-white px-2.5 py-1 rounded-full border border-orange-200 shadow-2xs">
              Classe de Terminale (L &amp; S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedGeographieTlePart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedGeographieTlePart === 'all'
                  ? 'bg-orange-700 text-white shadow-sm ring-2 ring-orange-700/20'
                  : 'bg-white text-gray-700 hover:bg-orange-100/70 border border-orange-200/70'
              }`}
            >
              <span>Toutes les 17 leçons du Bac</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedGeographieTlePart === 'all' ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-800'
                }`}
              >
                17
              </span>
            </button>
            {GEOGRAPHIE_TLE_PARTS.slice(1).map(part => {
              const isSelected = selectedGeographieTlePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedGeographieTlePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
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

      {/* Organisation officielle pour le Français Terminale (Séries L & S - Programme officiel du Bac) */}
      {selectedSubject === 'Français' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel national du Sénégal : Français Terminale (Séries L &amp; S) — 20 Leçons du Bac
              </span>
              <p className="text-[11px] text-amber-900/80 mt-0.5">
                Programme intégral sans résumé : Poésie du XXe &amp; Négritude, Roman Africain &amp; Moderne, Théâtre Épique &amp; Absurde, Idées &amp; Décolonialité (Fanon, Diop), et Méthodologie Complète (Dissertation, Commentaire, Contraction).
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-900 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de Terminale (L &amp; S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFrancaisTlePart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedFrancaisTlePart === 'all'
                  ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/20'
                  : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/70'
              }`}
            >
              <span>Toutes les 20 leçons du Bac</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedFrancaisTlePart === 'all' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                }`}
              >
                20
              </span>
            </button>
            {FRANCAIS_TLE_PARTS.slice(1).map(part => {
              const isSelected = selectedFrancaisTlePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedFrancaisTlePart(part.id)}
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

      {/* Organisation officielle pour le Français Première (Séries L & S) */}
      {selectedSubject === 'Français' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-700" />
                Programme officiel harmonisé Dakar, Pikine-Guédiawaye & Rufisque : 16 leçons et modules (Séries L & S)
              </span>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Français Première : Cours intégraux sans résumé — Poésie XIXe (Préromantisme à Symbolisme), Roman & Société, Méthodologie des 3 épreuves du Bac & Stylistique
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-amber-900 bg-white px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
              Classe de Première (L & S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {FRANCAIS_1ERE_PARTS.map(part => {
              const isSelected = selectedFrancais1erePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedFrancais1erePart(part.id)}
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

      {/* Organisation officielle pour la Philosophie Première (Séries L & S) */}
      {selectedSubject === 'Philosophie' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 border border-rose-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-rose-700" />
                Programme officiel Office du Baccalauréat Sénégal : 8 grands chapitres et modules développés
              </span>
              <p className="text-[11px] text-rose-800/80 mt-0.5">
                Philosophie Première L & S : Origines & Spécificité, Grandes Interrogations, Enjeux & Philosophie Africaine, Méthodologie Dissertation & Commentaire
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-rose-900 bg-white px-2.5 py-1 rounded-full border border-rose-200 shadow-2xs">
              Classe de Première (L & S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PHILOSOPHIE_1ERE_PARTS.map(part => {
              const isSelected = selectedPhilo1erePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPhilo1erePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-rose-700 text-white shadow-sm ring-2 ring-rose-700/20'
                      : 'bg-white text-gray-700 hover:bg-rose-100/70 border border-rose-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-800'
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

      {/* Organisation officielle pour la Géographie Première (Séries L & S) */}
      {selectedSubject === 'Géographie' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-700" />
                Programme officiel consolidé de Géographie Première : 23 leçons intégrales développées
              </span>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Grandes parties (I, II, III, IV, V), schémas de filières, cartes des flux, pyramides des âges, modèles urbains &amp; TD corrigés
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
              Classe de Première (L &amp; S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {GEOGRAPHIE_1ERE_FILTER_PARTS.map(part => {
              const isSelected = selectedGeographie1erePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedGeographie1erePart(part.id)}
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

      {/* Organisation officielle pour la Physique-Chimie Seconde S (Série S - Scientifique) */}
      {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries !== 'L' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-blue-700" />
                Programme officiel Seconde S : 26 chapitres intégraux sans résumé avec figures obligatoires
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Physique (P1 à P15 : Électricité, Mécanique, Optique) & Chimie (C1 à C10 : Structure matière, Atomes, Moles, Réactions, Solutions, Acides-Bases, pH & Formulaire)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
                Classe de Seconde S (Scientifique)
              </span>
              <button
                onClick={() => setSelectedSeries('L')}
                className="text-[10px] font-bold text-amber-700 hover:text-amber-900 bg-white hover:bg-amber-50 px-2 py-1 rounded-full border border-amber-200 transition-colors cursor-pointer"
                title="Consulter le programme Série L"
              >
                Passer en Série L
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedPc2ndeSPart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedPc2ndeSPart === 'all'
                  ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                  : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
              }`}
            >
              <span>Tous les chapitres</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedPc2ndeSPart === 'all' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                }`}
              >
                26
              </span>
            </button>
            {PC_2NDE_S_PARTS.slice(1).map(part => {
              const isSelected = selectedPc2ndeSPart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPc2ndeSPart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
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

      {/* Organisation officielle pour la Physique-Chimie Seconde (Série L) */}
      {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries === 'L' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-purple-50 via-amber-50 to-indigo-50 border border-purple-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-purple-700" />
                Programme officiel sénégalais : 12 leçons intégrales ultra-détaillées (Série L)
              </span>
              <p className="text-[11px] text-purple-800/80 mt-0.5">
                Physique-Chimie Seconde L : Électricité, circuits, intensité, tension, mélanges, solutions, atomes, molécules, moles et protocoles expérimentaux complets
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-purple-800 bg-white px-2.5 py-1 rounded-full border border-purple-200 shadow-2xs">
                Classe de Seconde (Série L)
              </span>
              <button
                onClick={() => setSelectedSeries('S')}
                className="text-[10px] font-bold text-blue-700 hover:text-blue-900 bg-white hover:bg-blue-50 px-2 py-1 rounded-full border border-blue-200 transition-colors cursor-pointer"
                title="Basculer vers Série S"
              >
                Passer en Série S
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedPc2ndeLPart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedPc2ndeLPart === 'all'
                  ? 'bg-purple-700 text-white shadow-sm ring-2 ring-purple-700/20'
                  : 'bg-white text-gray-700 hover:bg-purple-100/70 border border-purple-200/70'
              }`}
            >
              <span>Toutes les leçons</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedPc2ndeLPart === 'all' ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-800'
                }`}
              >
                12
              </span>
            </button>
            {PC_2NDE_L_PARTS.map(part => {
              const isSelected = selectedPc2ndeLPart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPc2ndeLPart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-sm ring-2 ring-purple-700/20'
                      : 'bg-white text-gray-700 hover:bg-purple-100/70 border border-purple-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-800'
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

      {/* Organisation officielle pour la Physique-Chimie Première L (Série L) */}
      {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Première' || selectedClass === '1ère') && (selectedSeries === 'L' || selectedSeries === 'L1' || selectedSeries === 'L2') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 border border-purple-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-purple-700" />
                Programme officiel Physique-Chimie Première L : 11 chapitres complets développés
              </span>
              <p className="text-[11px] text-purple-800/80 mt-0.5">
                Grandes parties (I, II, III, IV, V), formules, schémas de chute libre, forces, lentilles, alcanes, alcènes, alcynes, oxygénés, rédox &amp; pile Daniell
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-purple-800 bg-white px-2.5 py-1 rounded-full border border-purple-200 shadow-2xs">
                Classe de Première L
              </span>
              <button
                onClick={() => setSelectedSeries('S')}
                className="text-[10px] font-bold text-blue-700 hover:text-blue-900 bg-white hover:bg-blue-50 px-2 py-1 rounded-full border border-blue-200 transition-colors cursor-pointer"
                title="Consulter le programme Série S"
              >
                Passer en Série S
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {PC_1ERE_L_PARTS.map(part => {
              const isSelected = selectedPc1ereLPart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPc1ereLPart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-sm ring-2 ring-purple-700/20'
                      : 'bg-white text-gray-700 hover:bg-purple-100/70 border border-purple-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-800'
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

      {/* Organisation officielle pour la Physique-Chimie Première S (Série S) */}
      {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSeries !== 'L' && selectedSeries !== 'L1' && selectedSeries !== 'L2' && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-blue-700" />
                Programme officiel Physique-Chimie Première S1/S2 : 24 chapitres intégraux
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Physique (P1 à P12 : Travail, Énergie, Calorimétrie, Électrostatique, Condensateurs, AOP, Ondes, Optique) &amp; Chimie (C1 à C12 : Organique, Rédox, Électrolyse, Engrais)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
                Classe de Première S
              </span>
              <button
                onClick={() => setSelectedSeries('L')}
                className="text-[10px] font-bold text-purple-700 hover:text-purple-900 bg-white hover:bg-purple-50 px-2 py-1 rounded-full border border-purple-200 transition-colors cursor-pointer"
                title="Consulter le programme Série L"
              >
                Passer en Série L
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {PC_1ERE_S_PARTS.map(part => {
              const isSelected = selectedPc1ereSPart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPc1ereSPart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
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

      {/* Organisation officielle pour les Mathématiques Seconde (Série L) */}
      {selectedSubject === 'Mathématiques' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-blue-700" />
                Référentiel officiel national APAMS : 8 chapitres intégraux ultra-détaillés (Série L)
              </span>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Mathématiques Seconde L : Calcul dans ℝ, fractions, racines, proportionnalité, fonctions affines, statistiques, systèmes d'équations, second degré et courbes
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
              Classe de Seconde (Série L)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedMath2ndeLPart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedMath2ndeLPart === 'all'
                  ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                  : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
              }`}
            >
              <span>Tous les chapitres</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedMath2ndeLPart === 'all' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                }`}
              >
                8
              </span>
            </button>
            {MATH_2NDE_L_PARTS.map(part => {
              const isSelected = selectedMath2ndeLPart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedMath2ndeLPart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-white text-gray-700 hover:bg-blue-100/70 border border-blue-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
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

      {/* Organisation officielle pour l'Anglais Seconde (Séries L & S) */}
      {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-sky-50 via-teal-50 to-sky-50 border border-sky-200/80 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-sky-700" />
                Programme officiel national APC : 14 Units &amp; Modules exhaustifs (Séries L &amp; S)
              </span>
              <p className="text-[11px] text-sky-800/80 mt-0.5">
                Anglais Seconde (L &amp; S) : Thèmes de société, Conjugaison de tous les temps, Quantifieurs &amp; déterminants, Auxiliaires modaux &amp; passé, Voix passive, Discours rapporté, Orthographe &amp; Verbes irréguliers.
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-sky-800 bg-white px-2.5 py-1 rounded-full border border-sky-200 shadow-2xs">
              Classe de Seconde (L &amp; S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedAnglais2ndePart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedAnglais2ndePart === 'all'
                  ? 'bg-sky-700 text-white shadow-sm ring-2 ring-sky-700/20'
                  : 'bg-white text-gray-700 hover:bg-sky-100/70 border border-sky-200/70'
              }`}
            >
              <span>Toutes les Units</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedAnglais2ndePart === 'all' ? 'bg-white/20 text-white' : 'bg-sky-100 text-sky-800'
                }`}
              >
                14
              </span>
            </button>
            {ANGLAIS_2NDE_PARTS.slice(1).map(part => {
              const isSelected = selectedAnglais2ndePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedAnglais2ndePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
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

      {/* Organisation officielle pour l'Anglais Première (Séries L & S) */}
      {selectedSubject === 'Anglais' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-sky-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-sky-700" />
                Manuel Complet d'Anglais — Première (Séries L &amp; S) — 26 Units Intégrales
              </span>
              <p className="text-[11px] text-sky-900/80 mt-0.5">
                Cours intégraux sans résumé : Système verbal complet (Simple Present, Continuous, Past, Perfect, Futurs), Déterminants, Modaux, Passif, Discours rapporté, Conditionnels, Thématiques de société, Expression écrite, Phonologie &amp; Évaluation.
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-sky-800 bg-white px-2.5 py-1 rounded-full border border-sky-200 shadow-2xs">
              Classe de Première (L &amp; S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedAnglais1erePart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedAnglais1erePart === 'all'
                  ? 'bg-sky-700 text-white shadow-sm ring-2 ring-sky-700/20'
                  : 'bg-white text-gray-700 hover:bg-sky-100/70 border border-sky-200/70'
              }`}
            >
              <span>Toutes les 26 Units</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedAnglais1erePart === 'all' ? 'bg-white/20 text-white' : 'bg-sky-100 text-sky-800'
                }`}
              >
                26
              </span>
            </button>
            {ANGLAIS_1ERE_PARTS.slice(1).map(part => {
              const isSelected = selectedAnglais1erePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedAnglais1erePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
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

      {/* Organisation officielle pour l'Anglais Terminale (Séries L & S - Préparation Bac) */}
      {selectedSubject === 'Anglais' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && (
        <div className="mb-5 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 border border-indigo-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-black text-indigo-950 uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-indigo-700" />
                Manuel Officiel d'Anglais — Terminale (Séries L &amp; S) — Préparation Complète au Baccalauréat
              </span>
              <p className="text-[11px] text-indigo-900/80 mt-0.5">
                Programme officiel complet sans résumé : Masterclass Grammaire &amp; 12 temps, Les 30 Grands Thèmes du Bac, Phonologie &amp; Accentuation, Méthodologie des Transformations, Essay argumentatif (200–250 mots) &amp; Sujet blanc officiel avec corrigé intégral.
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-indigo-800 bg-white px-2.5 py-1 rounded-full border border-indigo-200 shadow-2xs">
              Classe de Terminale (L &amp; S)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedAnglaisTlePart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedAnglaisTlePart === 'all'
                  ? 'bg-indigo-700 text-white shadow-sm ring-2 ring-indigo-700/20'
                  : 'bg-white text-gray-700 hover:bg-indigo-100/70 border border-indigo-200/70'
              }`}
            >
              <span>Tous les 18 Modules du Bac</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  selectedAnglaisTlePart === 'all' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'
                }`}
              >
                18
              </span>
            </button>
            {ANGLAIS_TLE_PARTS.slice(1).map(part => {
              const isSelected = selectedAnglaisTlePart === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedAnglaisTlePart(part.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-700 text-white shadow-sm ring-2 ring-indigo-700/20'
                      : 'bg-white text-gray-700 hover:bg-indigo-100/70 border border-indigo-200/70'
                  }`}
                >
                  <span>{part.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'
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

            {/* Séparateurs thématiques pour SVT Première S2 */}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S2' && activeTab === 'cours' && selectedSvt1ereS2Part === 'all' && item.id === 'svt-1ere-s2-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PREMIÈRE PARTIE : ORGANISATION CELLULAIRE ET DIVISION MITOTIQUE &amp; MÉIOTIQUE (Leçons 1 à 4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S2' && activeTab === 'cours' && selectedSvt1ereS2Part === 'all' && item.id === 'svt-1ere-s2-lecon-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>DEUXIÈME PARTIE : NUTRITION, MÉTABOLISME ÉNERGÉTIQUE ET PHOTOSYNTHÈSE (Leçons 5 à 12)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S2' && activeTab === 'cours' && selectedSvt1ereS2Part === 'all' && item.id === 'svt-1ere-s2-lecon-13' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>TROISIÈME PARTIE : INFORMATION GÉNÉTIQUE, ADN ET SYNTHÈSE DES PROTÉINES (Leçons 13 à 17)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S2' && activeTab === 'cours' && selectedSvt1ereS2Part === 'all' && item.id === 'svt-1ere-s2-lecon-18' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>QUATRIÈME PARTIE : PHYSIOLOGIE DE LA REPRODUCTION HUMAINE ET RÉGULATION (Leçons 18 à 24)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S2' && activeTab === 'cours' && selectedSvt1ereS2Part === 'all' && item.id === 'svt-1ere-s2-lecon-25' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>CINQUIÈME PARTIE : GÉOLOGIE ET RESSOURCES GÉOLOGIQUES DU SÉNÉGAL (Leçons 25 à 28)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT Première S1 */}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S1' && activeTab === 'cours' && item.id === 'svt-1ere-s1-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>MODULE 1 : BIOCATALYSE ET BIOÉNERGÉTIQUE CELLULAIRE (Leçons S1-1 à S1-2)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S1' && activeTab === 'cours' && item.id === 'svt-1ere-s1-lecon-3' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>MODULE 2 : PHYSIOLOGIE NERVEUSE ET RÉGULATIONS HOMÉOSTATIQUES (Leçons S1-3 à S1-5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'S1' && activeTab === 'cours' && item.id === 'svt-1ere-s1-lecon-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>MODULE 3 : GÉNÉTIQUE MENDÉLIENNE ET DYNAMIQUE GÉODYNAMIQUE DU GLOBE (Leçons S1-6 à S1-8)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT Première L1 */}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'L1' && activeTab === 'cours' && item.id === 'svt-1ere-l1-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>THÈME 1 : NUTRITION HUMAINE ET SANTÉ PUBLIQUE (Leçons L1-1 à L1-2)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'L1' && activeTab === 'cours' && item.id === 'svt-1ere-l1-lecon-3' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>THÈME 2 : GÉNÉTIQUE HUMAINE ET DRÉPANOCYTOSE AU SÉNÉGAL (Leçon L1-3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'L1' && activeTab === 'cours' && item.id === 'svt-1ere-l1-lecon-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>THÈME 3 : ÉCOLOGIE, ENVIRONNEMENT ET DÉVELOPPEMENT DURABLE (Leçons L1-4 à L1-6)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT Première L2 */}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'L2' && activeTab === 'cours' && item.id === 'svt-1ere-l2-lecon-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>THÈMES 1 &amp; 2 : BESOINS ÉNERGÉTIQUES, REPRODUCTION &amp; PLANIFICATION FAMILIALE (Leçons L2-1 &amp; L2-2)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'L2' && activeTab === 'cours' && item.id === 'svt-1ere-l2-lecon-3' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>THÈME 3 : IMMUNOLOGIE, VACCINATION ET GRANDES ENDÉMIES AU SÉNÉGAL (Leçons L2-3 &amp; L2-4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Première' || selectedClass === '1ère') && selectedSvt1ereTab === 'L2' && activeTab === 'cours' && item.id === 'svt-1ere-l2-lecon-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>THÈME 4 : ÉCOLOGIE URBAINE, POLLUTIONS ET MANGROVES DU SÉNÉGAL (Leçons L2-5 &amp; L2-6)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT Seconde S */}
            {selectedSubject === 'SVT' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedSvt2ndeTheme === 'all' && item.id === 'svt-2ndes-lecon-intro' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PREMIÈRE PARTIE : NOTIONS FONDAMENTALES D'ÉCOLOGIE &amp; SORTIE (Intro &amp; Leçons 1 à 3)</span>
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

            {/* Séparateurs thématiques pour Mathématiques Première Série L */}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedMath1ereTab === 'L' && selectedMath1ereLPart === 'all' && item.id === 'math-1ere-l-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIÈRE PARTIE : ALGÈBRE LINÉAIRE, SYSTÈMES ET SECOND DEGRÉ (Chapitres 1 &amp; 2)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedMath1ereTab === 'L' && selectedMath1ereLPart === 'all' && item.id === 'math-1ere-l-cours-3' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME PARTIE : ANALYSE, LIMITES ET ÉTUDE DE FONCTIONS (Chapitres 3 &amp; 4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedMath1ereTab === 'L' && selectedMath1ereLPart === 'all' && item.id === 'math-1ere-l-cours-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : SUITES NUMÉRIQUES, STATISTIQUE DE MAYER ET DÉNOMBREMENT (Chapitres 5 à 8)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Mathématiques Première Série S */}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedMath1ereTab === 'S' && selectedMath1ereSPart === 'all' && item.id === 'math-1ere-s-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PÔLE 1 : ANALYSE — FONCTIONS, LIMITES, DÉRIVATION, TRIGONOMÉTRIE ET SUITES (Chapitres S1 à S7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedMath1ereTab === 'S' && selectedMath1ereSPart === 'all' && item.id === 'math-1ere-s-cours-8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PÔLE 2 : GÉOMÉTRIE — VECTEURS, BARYCENTRES, PRODUIT SCALAIRE ET ESPACE (Chapitres S8 à S13)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedMath1ereTab === 'S' && selectedMath1ereSPart === 'all' && item.id === 'math-1ere-s-cours-14' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PÔLE 3 : DÉNOMBREMENT, PROBABILITÉS ET RÉGRESSION LINÉAIRE (Chapitres S14 à S16)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT Terminale Série S (S1 & S2) */}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'S' && selectedSvtTleSPart === 'all' && item.id === 'svt-tle-s-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 1 : NEUROBIOLOGIE ET COMMUNICATION NERVEUSE (Leçons S-1 à S-4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'S' && selectedSvtTleSPart === 'all' && item.id === 'svt-tle-s-cours-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>THÈME 2 : HOMÉOSTASIE ET RÉGULATIONS PHYSIOLOGIQUES (Leçons S-5 à S-7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'S' && selectedSvtTleSPart === 'all' && item.id === 'svt-tle-s-cours-8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>THÈME 3 : REPRODUCTION HUMAINE ET RÉGULATIONS ENDOCRINIENNES (Leçons S-8 à S-10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'S' && selectedSvtTleSPart === 'all' && item.id === 'svt-tle-s-cours-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>THÈME 4 : GÉNÉTIQUE CLASSIQUE ET BIOLOGIE MOLÉCULAIRE (Leçons S-11 à S-13)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour SVT Terminale Série L (L1, L2, L') */}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'L' && selectedSvtTleLPart === 'all' && item.id === 'svt-tle-l-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>THÈME 1 : ALIMENTATION, NUTRITION ET SANTÉ PUBLIQUE (Leçons L-1 &amp; L-2)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'L' && selectedSvtTleLPart === 'all' && item.id === 'svt-tle-l-cours-3' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>THÈME 2 : PHYSIOLOGIE DE LA REPRODUCTION HUMAINE ET PROCRÉATION (Leçons L-3 &amp; L-4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'L' && selectedSvtTleLPart === 'all' && item.id === 'svt-tle-l-cours-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>THÈME 3 : GÉNÉTIQUE HUMAINE ET HÉRÉDITÉ (Leçon L-5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'SVT' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedSvtTleTab === 'L' && selectedSvtTleLPart === 'all' && item.id === 'svt-tle-l-cours-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-red-100/80 rounded-xl border border-red-300/80 text-red-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>THÈME 4 : IMMUNOLOGIE, ÉCOSYSTÈMES ET DÉGRADATION DE L'ENVIRONNEMENT AU SÉNÉGAL (Leçons L-6 à L-8)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Mathématiques Terminale Série S (S1 & S2) */}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'S' && selectedMathTleSPart === 'all' && item.id === 'math-tle-s-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PÔLE 1 : ANALYSE FONDAMENTALE — LIMITES, CONTINUITÉ, DÉRIVATION, TAF, LOGARITHMES &amp; EXPONENTIELLES (Chapitres S1 à S4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'S' && selectedMathTleSPart === 'all' && item.id === 'math-tle-s-cours-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>PÔLE 2 : CALCUL INTÉGRAL, ÉQUATIONS DIFFÉRENTIELLES &amp; SUITES NUMÉRIQUES (Chapitres S5 à S7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'S' && selectedMathTleSPart === 'all' && item.id === 'math-tle-s-cours-8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-violet-100/80 rounded-xl border border-violet-300/80 text-violet-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-violet-600"></span>
                  <span>PÔLE 3 : NOMBRES COMPLEXES, SIMILITUDES DIRECTES &amp; DÉNOMBREMENT (Chapitres S8 à S10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'S' && selectedMathTleSPart === 'all' && item.id === 'math-tle-s-cours-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>PÔLE 4 : CALCUL DES PROBABILITÉS, GÉOMÉTRIE DE L'ESPACE &amp; ARITHMÉTIQUE DANS ℤ (Chapitres S11 à S13)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Mathématiques Terminale Série L (L1, L2, L') */}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'L' && selectedMathTleLPart === 'all' && item.id === 'math-tle-l-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PARTIE 1 : DÉNOMBREMENT ET SYSTÈMES LINÉAIRES 3×3 (Pivot de Gauss) (Chapitres L1 &amp; L2)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'L' && selectedMathTleLPart === 'all' && item.id === 'math-tle-l-cours-3' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PARTIE 2 : ANALYSE — LIMITES, CONTINUITÉ, DÉRIVATION ET ÉTUDES DE FONCTIONS (Chapitres L3 &amp; L4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'L' && selectedMathTleLPart === 'all' && item.id === 'math-tle-l-cours-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PARTIE 3 : FONCTIONS LOGARITHME, EXPONENTIELLE &amp; SUITES FINANCIÈRES (Chapitres L5 &amp; L6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedMathTleTab === 'L' && selectedMathTleLPart === 'all' && item.id === 'math-tle-l-cours-7' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>PARTIE 4 : STATISTIQUES À DEUX VARIABLES (Mayer) &amp; CALCUL DES PROBABILITÉS (Chapitres L7 &amp; L8)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Physique-Chimie Terminale Série S (S1 & S2) */}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedPcTleTab === 'S' && selectedPcTleSPart === 'all' && item.id === 'pc-tle-s-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>PREMIÈRE PARTIE : CHIMIE EN SOLUTION — ACIDES-BASES SELON BRÖNSTED, DOSAGES &amp; CINÉTIQUE (Chapitres S1 à S3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedPcTleTab === 'S' && selectedPcTleSPart === 'all' && item.id === 'pc-tle-s-cours-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-pink-100/80 rounded-xl border border-pink-300/80 text-pink-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                  <span>DEUXIÈME PARTIE : CHIMIE ORGANIQUE — ESTÉRIFICATION, HYDROLYSE, SAPONIFICATION &amp; ACIDES AMINÉS (Chapitres S4 &amp; S5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedPcTleTab === 'S' && selectedPcTleSPart === 'all' && item.id === 'pc-tle-s-cours-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>TROISIÈME PARTIE : PHYSIQUE MÉCANIQUE — CINÉMATIQUE, LOIS DE NEWTON, CHAMP DE LORENTZ &amp; KEPLER (Chapitres S6 à S9)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedPcTleTab === 'S' && selectedPcTleSPart === 'all' && item.id === 'pc-tle-s-cours-10' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>QUATRIÈME PARTIE : OSCILLATIONS MÉCANIQUES, CIRCUITS RLC, ONDES &amp; PHYSIQUE NUCLÉAIRE (Chapitres S10 à S13)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Physique-Chimie Terminale Série L (L2, L') */}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedPcTleTab === 'L' && selectedPcTleLPart === 'all' && item.id === 'pc-tle-l-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>PREMIÈRE PARTIE : PHYSIQUE — OPTIQUE DE L'ŒIL, ÉLECTRICITÉ DOMESTIQUE &amp; ÉNERGIES VERTES (Chapitres L1 à L3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedPcTleTab === 'L' && selectedPcTleLPart === 'all' && item.id === 'pc-tle-l-cours-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>DEUXIÈME PARTIE : CHIMIE DU QUOTIDIEN — EAU &amp; pH, SAVONNERIE ARTISANALE &amp; PLASTIQUES (Chapitres L4 à L6)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Histoire Terminale (Séries L & S - Programme officiel du Bac) */}
            {selectedSubject === 'Histoire' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedHistoireTlePart === 'all' && item.id === 'hist-tle-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>CHAPITRE I : LES RELATIONS INTERNATIONALES DE 1945 À NOS JOURS (Leçons 1 à 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedHistoireTlePart === 'all' && item.id === 'hist-tle-cours-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>CHAPITRE II : LA DÉCOLONISATION ET L'ÉMERGENCE DU TIERS-MONDE (Leçons 6 à 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedHistoireTlePart === 'all' && item.id === 'hist-tle-cours-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>CHAPITRE III : L'AFRIQUE ET LE MONDE CONTEMPORAIN — LE SÉNÉGAL DE 1960 À NOS JOURS (Leçons 11 à 15)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Histoire' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedHistoireTlePart === 'all' && item.id === 'hist-tle-cours-16' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>CHAPITRE IV : MÉTHODOLOGIE EXPERTE DES ÉPREUVES DU BACCALAURÉAT SÉNÉGALAIS (Leçons 16 et 17)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Géographie Terminale (Séries L & S - Programme officiel du Bac) */}
            {selectedSubject === 'Géographie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedGeographieTlePart === 'all' && item.id === 'geo-tle-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-orange-100/80 rounded-xl border border-orange-300/80 text-orange-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>PREMIÈRE PARTIE : LA MONDIALISATION ET LES DISPARITÉS DE DÉVELOPPEMENT (Leçons 1 à 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedGeographieTlePart === 'all' && item.id === 'geo-tle-cours-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>DEUXIÈME PARTIE : LES GRANDES PUISSANCES ÉCONOMIQUES MONDIALES (Leçons 4 à 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedGeographieTlePart === 'all' && item.id === 'geo-tle-cours-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>TROISIÈME PARTIE : L'AFRIQUE, LA CEDEAO ET LE SÉNÉGAL DANS LA GÉOPOLITIQUE ÉCONOMIQUE (Leçons 11 à 15)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Géographie' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedGeographieTlePart === 'all' && item.id === 'geo-tle-cours-16' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>QUATRIÈME PARTIE : MÉTHODOLOGIE EXPERTE DES ÉPREUVES DU BACCALAURÉAT (Leçons 16 et 17)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Français Terminale (Séries L & S - Programme officiel du Bac) */}
            {selectedSubject === 'Français' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedFrancaisTlePart === 'all' && item.id === 'fr-tle-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>MODULE 1 : POÉSIE DU XXe SIÈCLE, SURRÉALISME ET MOUVEMENT DE LA NÉGRITUDE (Leçons 1 à 4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedFrancaisTlePart === 'all' && item.id === 'fr-tle-cours-5' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>MODULE 2 : LE ROMAN NÉGRO-AFRICAIN ET LE ROMAN MODERNE (Leçons 5 à 9)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedFrancaisTlePart === 'all' && item.id === 'fr-tle-cours-10' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-rose-100/80 rounded-xl border border-rose-300/80 text-rose-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  <span>MODULE 3 : LE THÉÂTRE AU XXe SIÈCLE : TRAGIQUE, ABSURDE ET ÉPIQUE (Leçons 10 à 14)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedFrancaisTlePart === 'all' && item.id === 'fr-tle-cours-15' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>MODULE 4 : LITTÉRATURE D'IDÉES, ESSAI ET FONCTIONS DE LA LITTÉRATURE (Leçons 15 à 17)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedFrancaisTlePart === 'all' && item.id === 'fr-tle-cours-18' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>MODULE 5 : MÉTHODOLOGIE EXPERTE DES ÉPREUVES DU BACCALAURÉAT SÉNÉGALAIS (Leçons 18 à 20)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Français Première (Séries L & S) */}
            {selectedSubject === 'Français' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedFrancais1erePart === 'all' && item.id === 'fr-1ere-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PREMIÈRE PARTIE : POÉSIE ET MOUVEMENTS LITTÉRAIRES DU XIXe SIÈCLE (Leçons 1 à 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedFrancais1erePart === 'all' && item.id === 'fr-1ere-cours-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>DEUXIÈME PARTIE : LE ROMAN, LES COURANTS ROMANESQUES ET LA DISSERTATION (Leçons 6 à 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Français' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedFrancais1erePart === 'all' && item.id === 'fr-1ere-cours-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : MÉTHODOLOGIE DES ÉPREUVES DU BACCALAURÉAT ET STYLISTIQUE (Leçons 11 à 16)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Philosophie Première (Séries L & S) */}
            {selectedSubject === 'Philosophie' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedPhilo1erePart === 'all' && item.id === 'philo-1ere-cours-1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-rose-100/80 rounded-xl border border-rose-300/80 text-rose-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  <span>PREMIÈRE PARTIE : LES ORIGINES ET LA SPÉCIFICITÉ DE LA RÉFLEXION PHILOSOPHIQUE (Chapitre 1)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Philosophie' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedPhilo1erePart === 'all' && item.id === 'philo-1ere-cours-2' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-rose-100/80 rounded-xl border border-rose-300/80 text-rose-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  <span>DEUXIÈME PARTIE : LES GRANDES INTERROGATIONS PHILOSOPHIQUES (Chapitres 2 et 3)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Philosophie' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedPhilo1erePart === 'all' && item.id === 'philo-1ere-cours-4' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-rose-100/80 rounded-xl border border-rose-300/80 text-rose-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  <span>TROISIÈME PARTIE : LES ENJEUX, FINALITÉS ET L'IDÉE D'UNE PHILOSOPHIE AFRICAINE (Chapitres 4 et 5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Philosophie' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedPhilo1erePart === 'all' && item.id === 'philo-1ere-cours-6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-rose-100/80 rounded-xl border border-rose-300/80 text-rose-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  <span>QUATRIÈME PARTIE : MÉTHODOLOGIE DES ÉPREUVES DU BACCALAURÉAT ET CORPUS (Chapitres 6 à 8)</span>
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

            {/* Séparateurs thématiques pour Physique-Chimie Seconde S */}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries !== 'L' && activeTab === 'cours' && selectedPc2ndeSPart === 'all' && item.id === 'pc-2nde-s-cours-p1' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PREMIÈRE PARTIE : PHYSIQUE — ÉLECTRICITÉ ET ÉLECTRONIQUE (Chapitres P1 à P7)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries !== 'L' && activeTab === 'cours' && selectedPc2ndeSPart === 'all' && item.id === 'pc-2nde-s-cours-p8' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>DEUXIÈME PARTIE : PHYSIQUE — MÉCANIQUE ET STATIQUE (Chapitres P8 à P12)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries !== 'L' && activeTab === 'cours' && selectedPc2ndeSPart === 'all' && item.id === 'pc-2nde-s-cours-p13' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>TROISIÈME PARTIE : PHYSIQUE — OPTIQUE GÉOMÉTRIQUE ET ONDULATOIRE (Chapitres P13 à P15)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries !== 'L' && activeTab === 'cours' && selectedPc2ndeSPart === 'all' && item.id === 'pc-2nde-s-cours-c1' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>QUATRIÈME PARTIE : CHIMIE GÉNÉRALE — STRUCTURE DE LA MATIÈRE ET MOLE (Chapitres C1 à C5)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries !== 'L' && activeTab === 'cours' && selectedPc2ndeSPart === 'all' && item.id === 'pc-2nde-s-cours-c6' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>CINQUIÈME PARTIE : CHIMIE EN SOLUTION — RÉACTIONS, ACIDES-BASES ET pH (Chapitres C6 à C10 & Annexe)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Physique-Chimie Seconde L */}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries === 'L' && activeTab === 'cours' && selectedPc2ndeLPart === 'all' && (item.id === 'pc-2nde-l-cours-01' || item.id === 'pc-2nde-l-cours-1') && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>PREMIÈRE PARTIE : PHYSIQUE — ÉLECTRICITÉ ET SIGNAUX (Leçons 1 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Physique-Chimie' && (selectedClass === 'Seconde' || selectedClass === '2nde') && selectedSeries === 'L' && activeTab === 'cours' && selectedPc2ndeLPart === 'all' && (item.id === 'pc-2nde-l-cours-07' || item.id === 'pc-2nde-l-cours-7') && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>DEUXIÈME PARTIE : CHIMIE ET CONSTITUTION DE LA MATIÈRE (Leçons 7 à 12)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Mathématiques Seconde L */}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedMath2ndeLPart === 'all' && item.id === 'math-2nde-l-cours-01' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PREMIÈRE PARTIE : CALCUL DANS ℝ, PROPORTIONNALITÉ ET FONCTIONS AFFINES (Chapitres 1 à 4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Mathématiques' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedMath2ndeLPart === 'all' && item.id === 'math-2nde-l-cours-05' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>DEUXIÈME PARTIE : STATISTIQUES, ÉQUATIONS DU SECOND DEGRÉ ET GRAPHES (Chapitres 5 à 8)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Anglais Seconde (Séries L & S) */}
            {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedAnglais2ndePart === 'all' && item.id === 'anglais-2nde-cours-01' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>PARTIE 1 : THÈMES DE SOCIÉTÉ — ÉDUCATION, FAMILLE, SANTÉ &amp; CLIMAT (Units 1 à 4)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedAnglais2ndePart === 'all' && item.id === 'anglais-2nde-cours-05' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>PARTIE 2 : TECHNOLOGIES, PATRIMOINE, DROITS HUMAINS &amp; CARRIÈRES (Units 5 à 8)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedAnglais2ndePart === 'all' && item.id === 'anglais-2nde-cours-09' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>PARTIE 3 : CONJUGAISON INTÉGRALE &amp; MAÎTRISE DE TOUS LES TEMPS (Units 9 &amp; 10)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedAnglais2ndePart === 'all' && item.id === 'anglais-2nde-cours-11' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-teal-100/80 rounded-xl border border-teal-300/80 text-teal-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>PARTIE 4 : LES QUANTIFIEURS, DÉTERMINANTS &amp; NOMS DÉNOMBRABLES / INDÉNOMBRABLES (Unit 11)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedAnglais2ndePart === 'all' && item.id === 'anglais-2nde-cours-12' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PARTIE 5 : LES AUXILIAIRES MODAUX &amp; MODAUX DU PASSÉ (Unit 12)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedAnglais2ndePart === 'all' && item.id === 'anglais-2nde-cours-13' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-violet-100/80 rounded-xl border border-violet-300/80 text-violet-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-violet-600"></span>
                  <span>PARTIE 6 : GRAMMAIRE SUPÉRIEURE, VOIX PASSIVE &amp; DISCOURS RAPPORTÉ (Unit 13)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Seconde' || selectedClass === '2nde') && activeTab === 'cours' && selectedAnglais2ndePart === 'all' && item.id === 'anglais-2nde-cours-14' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PARTIE 7 : ORTHOGRAPHE, LETTRES MUETTES, FORMATION DES MOTS &amp; VERBES IRRÉGULIERS (Unit 14)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Anglais Première (Séries L & S) */}
            {selectedSubject === 'Anglais' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedAnglais1erePart === 'all' && item.id === 'anglais-1ere-unit-01' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-sky-100/80 rounded-xl border border-sky-300/80 text-sky-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  <span>PARTIE 1 : TEMPS &amp; SYSTÈME VERBAL (Units 1 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedAnglais1erePart === 'all' && item.id === 'anglais-1ere-unit-07' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-blue-100/80 rounded-xl border border-blue-300/80 text-blue-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>PARTIE 2 : GRAMMAIRE FONDAMENTALE, DÉTERMINANTS, MODAUX &amp; PASSIF (Units 7 à 14)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedAnglais1erePart === 'all' && item.id === 'anglais-1ere-unit-15' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PARTIE 3 : VOCABULAIRE &amp; THÉMATIQUES DE SOCIÉTÉ (Units 15 à 19)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedAnglais1erePart === 'all' && item.id === 'anglais-1ere-unit-20' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-100/80 rounded-xl border border-amber-300/80 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>PARTIE 4 : EXPRESSION ÉCRITE, PARAGRAPHES, LETTRES &amp; DÉBATS (Units 20 à 23)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Première' || selectedClass === '1ère') && activeTab === 'cours' && selectedAnglais1erePart === 'all' && item.id === 'anglais-1ere-unit-24' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>PARTIE 5 : PHONOLOGIE, COMPRÉHENSION ÉCRITE &amp; ÉVALUATION BILAN (Units 24 à 26)</span>
                </div>
              </div>
            )}

            {/* Séparateurs thématiques pour Anglais Terminale (Séries L & S - Préparation Bac) */}
            {selectedSubject === 'Anglais' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedAnglaisTlePart === 'all' && item.id === 'anglais-tle-unit-01' && (
              <div className="pt-2 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-100/80 rounded-xl border border-indigo-300/80 text-indigo-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <span>PARTIE I : MASTERCLASS GRAMMAIRE &amp; CONJUGAISON DU BACCALAURÉAT (Modules 1 à 6)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedAnglaisTlePart === 'all' && item.id === 'anglais-tle-unit-07' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-purple-100/80 rounded-xl border border-purple-300/80 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <span>PARTIE II : LES 30 GRANDS THÈMES &amp; VOCABULAIRE DU BACCALAURÉAT (Modules 7 à 12)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedAnglaisTlePart === 'all' && item.id === 'anglais-tle-unit-13' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-rose-100/80 rounded-xl border border-rose-300/80 text-rose-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  <span>PARTIE III &amp; IV : PHONOLOGIE, ACCENTUATION &amp; TERMINAISONS PHONÉTIQUES (Module 13)</span>
                </div>
              </div>
            )}
            {selectedSubject === 'Anglais' && (selectedClass === 'Terminale' || selectedClass === 'Tle') && activeTab === 'cours' && selectedAnglaisTlePart === 'all' && item.id === 'anglais-tle-unit-14' && (
              <div className="pt-4 pb-1">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-100/80 rounded-xl border border-emerald-300/80 text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>PARTIE V : MÉTHODOLOGIE INTÉGRALE DES ÉPREUVES DU BACCALAURÉAT &amp; BAC BLANC (Modules 14 à 18)</span>
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

            <div
              className={`bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-gray-100 hover:border-blue-200 transition ${
                item.lessonData ? 'cursor-pointer hover:shadow-md group' : ''
              }`}
              onClick={() => {
                if (item.lessonData) handleOpenLesson(item.lessonData);
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                      {item.badge || (item.type === 'cours' ? 'Cours' : 'PDF')}
                    </span>

                    {/* Bouton Favoris pour la leçon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavoriteLesson(item.id, item.title);
                      }}
                      className={`p-1.5 px-2.5 rounded-xl transition flex items-center gap-1.5 text-xs font-bold border cursor-pointer ${
                        favoriteLessonIds.includes(item.id)
                          ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400/20 shadow-2xs'
                          : 'bg-gray-50 hover:bg-amber-50 text-gray-600 hover:text-amber-700 border-gray-200'
                      }`}
                      title={favoriteLessonIds.includes(item.id) ? 'Retirer des favoris' : 'Ajouter cette leçon aux favoris'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${favoriteLessonIds.includes(item.id) ? 'fill-amber-500 text-amber-500' : 'text-gray-400'}`} />
                      <span>{favoriteLessonIds.includes(item.id) ? 'Favori ⭐' : 'Favori'}</span>
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0 flex flex-col xs:flex-row sm:flex-col gap-2">
                  {/* Bouton Aide avec Ibkane IA directement sur WhatsApp 707753776 */}
                  <a
                    href={getWhatsAppHelpUrl(item.title, selectedSubject, selectedClass)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full sm:w-auto px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer hover:scale-102"
                    title="Demander de l'aide sur cette leçon avec Ibkane IA sur WhatsApp : 70 775 37 76"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Aide Ibkane IA</span>
                  </a>

                  {item.type === 'cours' && item.lessonData ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenLesson(item.lessonData!);
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Lire en plein écran</span>
                    </button>
                  ) : item.id === 'geo-senegal-interactive-map' || item.id === 'geo-senegal-interactive-map-3eme' ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMapModalOpen(true);
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Explorer la Carte</span>
                    </button>
                  ) : item.type === 'ressource' ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
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
                      className="w-full sm:w-auto px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-xl font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
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
                  <span
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenLesson(item.lessonData!);
                    }}
                  >
                    Ouvrir la leçon →
                  </span>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}

        {activeTab === 'favoris' && filteredContent.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-amber-200 p-6">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-3">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-800">Aucune leçon favorite dans cette matière</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
              Cliquez sur le bouton <strong>⭐ Favori</strong> sur n'importe quelle leçon pour la retrouver ici en un clic !
            </p>
          </div>
        ) : filteredContent.length === 0 && (
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

      {/* Header / Barre de navigation FIXE */}
      {screen !== 'welcome' && screen !== 'lesson-reader' && (
        <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-xs">
          <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {screen !== 'welcome' && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-800 font-extrabold text-xs sm:text-sm border border-blue-200/90 transition shadow-2xs cursor-pointer group shrink-0"
                  aria-label={getBackBtnLabel().full}
                  title={getBackBtnLabel().full}
                >
                  <ArrowLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-700 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform shrink-0" />
                  <span>Retour</span>
                  <span className="hidden sm:inline text-blue-600 font-semibold text-[11px] sm:text-xs">
                    • {getBackBtnLabel().label}
                  </span>
                </button>
              )}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setScreen('welcome')}
                title="Page d'accueil Kaay Jang"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-black text-lg sm:text-xl text-gray-900 tracking-tight block leading-none">
                    Kaay Jang
                  </span>
                  <span className="text-[10px] text-emerald-700 font-extrabold hidden xs:inline">
                    🇸🇳 Sénégal
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Badge niveau / classe actuelle avec ouverture directe des paramètres */}
              {screen !== 'welcome' && (
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200/80 transition text-xs font-bold shadow-2xs cursor-pointer"
                  title="Changer de niveau ou de langue"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  <span>{selectedClass}{selectedSeries ? ` ${selectedSeries}` : ''}</span>
                  <span className="text-[10px] text-blue-500 font-normal">• Changer</span>
                </button>
              )}

              {/* Bouton Notifications actives */}
              <button
                onClick={handleQuickNotificationToggle}
                className={`p-2 sm:px-2.5 sm:py-1.5 rounded-xl transition text-xs font-bold flex items-center gap-1.5 cursor-pointer border ${
                  notificationsActive
                    ? 'bg-amber-50 text-amber-900 border-amber-300 ring-2 ring-amber-400/20 shadow-2xs'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-200'
                }`}
                title={notificationsActive ? 'Notifications actives (Rappels activés)' : 'Activer les notifications'}
                aria-label="Notifications"
              >
                <div className="relative">
                  <Bell className={`w-4 h-4 ${notificationsActive ? 'text-amber-500 fill-amber-500' : 'text-gray-500'}`} />
                  {notificationsActive && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  )}
                </div>
                <span className="hidden md:inline text-xs">
                  {notificationsActive ? 'Notifs ON' : 'Rappels'}
                </span>
              </button>

              {/* Bouton Ajouter à l'écran d'accueil comme application mobile native */}
              <button
                onClick={() => setIsInstallModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
                title="Ajouter à l'écran d'accueil comme application mobile native"
              >
                <Smartphone className="w-4 h-4 shrink-0" />
                <span className="hidden xs:inline">Installer l'App</span>
              </button>

              {/* Bouton Paramètres pour changer de langue et niveau */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer border border-gray-200"
                title="Paramètres : Langue, Niveau & Assistance"
                aria-label="Paramètres"
              >
                <Settings className="w-4 h-4 text-gray-600 shrink-0" />
                <span className="hidden sm:inline">Paramètres</span>
              </button>

              {/* Bouton de Don / Soutien */}
              <button
                onClick={() => setIsSupportOpen(true)}
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200/60 transition text-xs font-semibold shadow-2xs"
                title="Soutenir les développeurs de l'application"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>Don</span>
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
          <FullscreenLessonViewer
            lesson={activeLesson}
            onBack={() => setScreen('content')}
            isFavorite={favoriteLessonIds.includes(activeLesson.id)}
            onToggleFavorite={() => toggleFavoriteLesson(activeLesson.id, activeLesson.title)}
          />
        )}
      </main>

      {/* Modals globaux */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        selectedCategory={selectedCategory}
        selectedClass={selectedClass}
        selectedSeries={selectedSeries}
        onSaveClassAndLevel={(category, className, series) => {
          handleSaveAndSelectClass(category, className, series);
          showToast(`Niveau appliqué : ${className} ${series ? '(' + series + ')' : ''}`);
        }}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        currentLanguage={currentLanguage}
        onChangeLanguage={handleChangeLanguage}
      />

      <InstallAppModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

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
