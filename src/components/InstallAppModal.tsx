import React from 'react';
import { Smartphone, Download, X, CheckCircle, Apple, Laptop, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../usePWAInstall';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  const handleNativeInstall = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-base sm:text-lg">
                Installer Kaay Jang
              </h3>
              <p className="text-xs text-blue-600 font-semibold">
                Application mobile native &amp; rapide
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/70 p-4 rounded-2xl text-left">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm mb-1">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Pourquoi installer Kaay Jang sur votre écran d'accueil ?</span>
            </div>
            <ul className="text-xs text-blue-800 space-y-1.5 mt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Accès direct en 1 clic sans passer par le navigateur</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Plein écran immersif comme une application Play Store / App Store</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Fonctionne hors-ligne pour réviser sans connexion Internet</span>
              </li>
            </ul>
          </div>

          {/* Bouton direct si installable */}
          {isInstallable && (
            <button
              onClick={handleNativeInstall}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-2xl font-bold text-sm sm:text-base transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Installer maintenant sur cet appareil</span>
            </button>
          )}

          {isInstalled && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold text-center">
              ✓ L'application est déjà installée sur votre appareil !
            </div>
          )}

          {/* Instructions spécifiques par plateforme */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider text-left">
              Instructions d'installation :
            </h4>

            {/* Android / Chrome */}
            <div className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50/70 text-left">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm mb-1">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Sur Android (Google Chrome)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Appuyez sur les <strong>trois points verticaux (⋮)</strong> en haut à droite du navigateur, puis sélectionnez <strong>« Ajouter à l'écran d'accueil »</strong> ou <strong>« Installer l'application »</strong>.
              </p>
            </div>

            {/* iOS / iPhone / Safari */}
            <div className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50/70 text-left">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm mb-1">
                <Apple className="w-4 h-4 text-gray-900" />
                <span>Sur iPhone &amp; iPad (Safari)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                1. Appuyez sur le bouton <strong>Partager</strong> <span className="inline-block px-1 bg-gray-200 rounded text-[10px]">⎋</span> en bas au centre de Safari.<br />
                2. Faites défiler vers le bas et touchez <strong>« Sur l'écran d'accueil »</strong> <span className="inline-block px-1 bg-gray-200 rounded text-[10px]">+</span>.<br />
                3. Touchez <strong>Ajouter</strong> en haut à droite.
              </p>
            </div>

            {/* Ordinateur / PC / Mac */}
            <div className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50/70 text-left">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm mb-1">
                <Laptop className="w-4 h-4 text-blue-600" />
                <span>Sur Ordinateur (PC / Mac)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cliquez sur la petite icône d'installation <Download className="inline w-3 h-3 text-blue-600" /> située à droite dans la barre d'adresse de votre navigateur Chrome ou Edge.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-xs sm:text-sm transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
