import React from 'react';
import {
  Smartphone,
  Download,
  X,
  CheckCircle,
  Apple,
  Laptop,
  Sparkles,
  MessageCircle,
  Share2,
  PhoneCall,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { usePWAInstall } from '../usePWAInstall';
import { AppIcon } from './AppIcon';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenShare?: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
  onOpenShare
}) => {
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
        {/* Header with App Icon */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20 shrink-0">
              <AppIcon className="w-full h-full" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <h3 className="font-black text-gray-900 text-lg sm:text-xl tracking-tight">
                  Kaay Jang
                </h3>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.5 rounded-md">
                  App Native
                </span>
              </div>
              <p className="text-xs text-blue-600 font-semibold">
                Télécharger l'application sur votre écran d'accueil
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

        <div className="mt-4 space-y-4">
          {/* Card Présentation Native */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 text-white p-4 sm:p-5 rounded-2xl text-left shadow-md">
            <div className="flex items-center gap-2 font-black text-sm sm:text-base mb-2">
              <Zap className="w-5 h-5 text-amber-300 shrink-0" />
              <span>Une application native, rapide &amp; fluide</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-3">
              Installez Kaay Jang sur votre smartphone pour l'utiliser exactement comme vos applications habituelles (WhatsApp, TikTok, etc.) avec son icône officielle sur votre écran d'accueil !
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 bg-white/10 rounded-xl p-2 backdrop-blur-xs">
                <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Plein écran immersif</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-xl p-2 backdrop-blur-xs">
                <CheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Mode hors-ligne</span>
              </div>
            </div>
          </div>

          {/* Bouton direct d'installation si navigateur compatible */}
          {isInstallable && (
            <button
              onClick={handleNativeInstall}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white rounded-2xl font-black text-sm sm:text-base transition shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger l'application maintenant</span>
            </button>
          )}

          {isInstalled && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>L'application Kaay Jang est déjà installée sur cet appareil !</span>
            </div>
          )}

          {/* Guide simple pour Android & iPhone */}
          <div className="space-y-3 pt-1 text-left">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Comment l'installer selon votre téléphone :
            </h4>

            {/* Android */}
            <div className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50/80 text-left">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm mb-1">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Sur Android (Samsung, Xiaomi, Tecno, Infinix, etc.)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Appuyez sur les <strong>3 points verticaux (⋮)</strong> en haut à droite de Google Chrome, puis touchez <strong>« Installer l'application »</strong> ou <strong>« Ajouter à l'écran d'accueil »</strong>.
              </p>
            </div>

            {/* iPhone / iPad */}
            <div className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50/80 text-left">
              <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm mb-1">
                <Apple className="w-4 h-4 text-gray-900" />
                <span>Sur iPhone &amp; iPad (Safari)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                1. Appuyez sur l'icône <strong>Partager</strong> <span className="inline-block px-1 bg-gray-200 rounded text-[10px]">⎋</span> en bas de Safari.<br />
                2. Défilez vers le bas et choisissez <strong>« Sur l'écran d'accueil »</strong> <span className="inline-block px-1 bg-gray-200 rounded text-[10px]">+</span>.<br />
                3. Touchez <strong>Ajouter</strong> en haut à droite.
              </p>
            </div>
          </div>

          {/* Section WhatsApp Ibkane IA 707753776 & Partage */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/90 text-left space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                Assistance &amp; Discussion avec Ibkane IA
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                WhatsApp 70 775 37 76
              </span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Pour toute question sur vos cours, vos examens ou l'installation de l'application, discutez directement avec Ibkane IA sur WhatsApp :
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://wa.me/221707753776?text=Bonjour%20Ibkane%20IA%2C%20j%27utilise%20l%27application%20Kaay%20Jang%20et%20j%27ai%20besoin%20d%27assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuter avec Ibkane IA (70 775 37 76)</span>
              </a>

              {onOpenShare && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenShare();
                  }}
                  className="py-2 px-3 rounded-xl bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Share2 className="w-4 h-4 text-emerald-600" />
                  <span>Partager l'App</span>
                </button>
              )}
            </div>
          </div>
        </div>

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
