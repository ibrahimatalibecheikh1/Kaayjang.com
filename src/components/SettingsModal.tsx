import React, { useState, useEffect } from 'react';
import {
  X,
  Settings,
  GraduationCap,
  Globe,
  Bell,
  Smartphone,
  PhoneCall,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  School,
  ExternalLink
} from 'lucide-react';
import {
  getNotificationStatus,
  requestNotificationPermission,
  toggleNotifications,
  sendRandomMotivationalNotification,
  NotificationStatus
} from '../utils/notifications';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: 'Collège' | 'Lycée';
  selectedClass: string;
  selectedSeries: 'L' | 'S' | 'L1' | 'L2' | null;
  onSaveClassAndLevel: (category: 'Collège' | 'Lycée', className: string, series: 'L' | 'S' | 'L1' | 'L2' | null) => void;
  onOpenInstallModal: () => void;
  currentLanguage: string;
  onChangeLanguage: (lang: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  selectedClass,
  selectedSeries,
  onSaveClassAndLevel,
  onOpenInstallModal,
  currentLanguage,
  onChangeLanguage,
}) => {
  // Temporary states for class selection inside modal
  const [tempCategory, setTempCategory] = useState<'Collège' | 'Lycée'>(selectedCategory);
  const [tempClass, setTempClass] = useState<string>(selectedClass);
  const [tempSeries, setTempSeries] = useState<'L' | 'S' | 'L1' | 'L2' | null>(selectedSeries);

  const [notifStatus, setNotifStatus] = useState<NotificationStatus>(getNotificationStatus());
  const [isRequestingNotif, setIsRequestingNotif] = useState(false);
  const [toastNotif, setToastNotif] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTempCategory(selectedCategory);
      setTempClass(selectedClass);
      setTempSeries(selectedSeries);
      setNotifStatus(getNotificationStatus());
    }
  }, [isOpen, selectedCategory, selectedClass, selectedSeries]);

  if (!isOpen) return null;

  const handleApplyClass = () => {
    onSaveClassAndLevel(tempCategory, tempClass, tempSeries);
    onClose();
  };

  const handleToggleNotification = async () => {
    setIsRequestingNotif(true);
    if (!notifStatus.isEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setNotifStatus(getNotificationStatus());
        setToastNotif('🔔 Notifications actives ! Rappels de cours activés.');
      } else {
        setToastNotif('Permission de notification refusée dans le navigateur.');
      }
    } else {
      toggleNotifications(false);
      setNotifStatus(getNotificationStatus());
      setToastNotif('Notifications désactivées.');
    }
    setIsRequestingNotif(false);
    setTimeout(() => setToastNotif(null), 3000);
  };

  const handleTestNotification = () => {
    sendRandomMotivationalNotification();
    setToastNotif('Notification de révision envoyée !');
    setTimeout(() => setToastNotif(null), 3000);
  };

  const collegeClasses = ['6ème', '5ème', '4ème', '3ème'];
  const lyceeClasses = ['Seconde', 'Première', 'Terminale'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        {/* En-tête du modal */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/80">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-base sm:text-lg">
                Paramètres &amp; Préférences
              </h3>
              <p className="text-xs text-gray-500">
                Langue, niveau scolaire &amp; notifications
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-6 text-left">
          {/* SECTION 1 : NIVEAU ET CLASSE SCOLAIRE */}
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold text-gray-900 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Changer de niveau scolaire</span>
            </div>

            {/* Cycle */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                type="button"
                onClick={() => {
                  setTempCategory('Collège');
                  setTempClass('6ème');
                  setTempSeries(null);
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  tempCategory === 'Collège'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <School className="w-3.5 h-3.5" />
                <span>Cycle Collège</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setTempCategory('Lycée');
                  setTempClass('Terminale');
                  setTempSeries('S');
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  tempCategory === 'Lycée'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Cycle Lycée</span>
              </button>
            </div>

            {/* Classes selon cycle */}
            <div className="mb-3">
              <label className="text-[11px] font-bold text-gray-600 block mb-1.5 uppercase tracking-wide">
                Classe :
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                {(tempCategory === 'Collège' ? collegeClasses : lyceeClasses).map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setTempClass(cls)}
                    className={`py-2 px-1 text-center rounded-xl border text-xs font-bold transition cursor-pointer ${
                      tempClass === cls
                        ? 'bg-blue-50 text-blue-700 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Séries si Lycée */}
            {tempCategory === 'Lycée' && (
              <div className="mb-3">
                <label className="text-[11px] font-bold text-gray-600 block mb-1.5 uppercase tracking-wide">
                  Série d'enseignement :
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTempSeries('L')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition text-left cursor-pointer ${
                      tempSeries === 'L' || tempSeries === 'L1' || tempSeries === 'L2'
                        ? 'bg-amber-50 text-amber-900 border-amber-500 ring-2 ring-amber-500/20'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-extrabold">Série L (Littéraire)</div>
                    <div className="text-[10px] text-gray-500">L1, L2, L'</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTempSeries('S')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition text-left cursor-pointer ${
                      tempSeries === 'S'
                        ? 'bg-blue-50 text-blue-900 border-blue-500 ring-2 ring-blue-500/20'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-extrabold">Série S (Scientifique)</div>
                    <div className="text-[10px] text-gray-500">S1, S2</div>
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleApplyClass}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Valider le niveau : {tempClass} {tempCategory === 'Lycée' && tempSeries ? `(${tempSeries})` : ''}</span>
            </button>
          </div>

          {/* SECTION 2 : LANGUE DE L'APPLICATION */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm font-extrabold text-gray-900 mb-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Langue de l'application</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'fr', label: 'Français', flag: '🇸🇳', desc: 'Officiel' },
                { code: 'wo', label: 'Wolof', flag: '🇸🇳', desc: 'Bilingual' },
                { code: 'en', label: 'English', flag: '🇬🇧', desc: 'International' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onChangeLanguage(lang.code)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    currentLanguage === lang.code
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-black">
                    <span>{lang.label}</span>
                    <span>{lang.flag}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 block mt-0.5">{lang.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 3 : NOTIFICATIONS ACTIVES */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-extrabold text-gray-900">
                <Bell className="w-4 h-4 text-amber-500" />
                <span>Notifications actives &amp; Rappels</span>
              </div>
              <button
                type="button"
                onClick={handleToggleNotification}
                disabled={isRequestingNotif}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  notifStatus.isEnabled ? 'bg-amber-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    notifStatus.isEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Recevez des rappels quotidiens d'étude, des formules clés et des encouragements pour garder le cap sur le BFEM et le Baccalauréat.
            </p>
            {notifStatus.isEnabled && (
              <div className="flex items-center justify-between bg-amber-50 border border-amber-200/80 p-2.5 rounded-xl">
                <span className="text-[11px] font-bold text-amber-900">
                  ✓ Notifications actives sur cet appareil
                </span>
                <button
                  type="button"
                  onClick={handleTestNotification}
                  className="text-[10px] font-bold text-amber-800 bg-white hover:bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300 transition cursor-pointer"
                >
                  Tester un rappel
                </button>
              </div>
            )}
          </div>

          {/* SECTION 4 : APPLICATION MOBILE NATIVE */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm font-extrabold text-gray-900 mb-2">
              <Smartphone className="w-4 h-4 text-indigo-600" />
              <span>Application mobile native</span>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/80 p-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-black text-indigo-950 block">
                  Ajouter à l'écran d'accueil
                </span>
                <span className="text-[11px] text-indigo-800/80 block mt-0.5">
                  Accès hors-ligne direct sans barre d'adresse
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenInstallModal();
                }}
                className="py-2 px-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs transition cursor-pointer shadow-xs shrink-0 flex items-center justify-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Installer l'App</span>
              </button>
            </div>
          </div>

          {/* SECTION 5 : NUMÉROS D'AIDE ET ASSISTANCE SCOLAIRE */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm font-extrabold text-gray-900 mb-2">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Numéros d'aide &amp; Assistance pédagogique</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Une question sur une leçon, un cours ou l'application ? Contactez directement nos encadreurs pédagogiques :
            </p>

            <div className="w-full">
              {/* Assistance unique : 70 775 37 76 avec Ibkane IA */}
              <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-300 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[11px] font-black text-emerald-900 uppercase tracking-wider">
                      Assistance Directe &amp; Aide avec Ibkane IA
                    </span>
                  </div>
                  <span className="text-xl font-black text-gray-900 block tracking-tight">
                    70 775 37 76
                  </span>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Posez vos questions sur les leçons ou l'application directement à Ibkane IA sur WhatsApp.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="tel:+221707753776"
                    className="py-2 px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Appeler</span>
                  </a>
                  <a
                    href="https://wa.me/221707753776?text=Bonjour%20Ibkane%20IA,%20j'ai%20besoin%20d'aide%20sur%20l'application%20Kaay%20Jang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-white hover:bg-emerald-100 text-emerald-800 border border-emerald-400 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Ibkane IA</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast feedback */}
        {toastNotif && (
          <div className="mt-3 p-2 bg-gray-900 text-white rounded-xl text-xs text-center font-semibold">
            {toastNotif}
          </div>
        )}

        <div className="mt-5 pt-3 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
