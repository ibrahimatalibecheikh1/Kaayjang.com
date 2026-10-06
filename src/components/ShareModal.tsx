import React, { useState } from 'react';
import {
  Share2,
  X,
  Copy,
  Check,
  MessageCircle,
  MessageSquare,
  Facebook,
  Sparkles,
  Link,
  Smartphone
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://kaay-jang.sn';
  const shareTitle = 'Kaay Jang — Application Scolaire Officielle du Sénégal';
  const shareText =
    "📚 Découvre Kaay Jang, l'application complète de révision scolaire du Sénégal de la 6ème à la Terminale ! Accède aux cours, résumés, exercices et cartes interactives. Assistance avec Ibkane IA au 70 775 37 76 : ";

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      onShowToast('✓ Lien copié dans le presse-papier !');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onShowToast('Impossible de copier le lien automatiquement');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl
        });
        onShowToast('Merci pour le partage !');
        onClose();
      } catch (err: unknown) {
        // User cancelled or aborted
        if ((err as Error)?.name !== 'AbortError') {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${shareText}\n👉 ${currentUrl}`
  )}`;

  const smsShareUrl = `sms:?body=${encodeURIComponent(`${shareText} ${currentUrl}`)}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-5 sm:p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-base sm:text-lg">
                Partager l'application
              </h3>
              <p className="text-xs text-emerald-700 font-semibold">
                Lien de partage officiel Kaay Jang
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
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-left">
            Partagez cette application avec vos camarades de classe, élèves et collègues enseignants pour réviser tous les programmes scolaires du Sénégal (de la 6ème à la Terminale).
          </p>

          {/* Bouton Partager Natif si supporté */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition active:scale-98"
            >
              <Smartphone className="w-4 h-4" />
              <span>Ouvrir le menu de partage de mon téléphone</span>
            </button>
          )}

          {/* Lien à copier */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-gray-700 block">
              Lien direct de l'application :
            </label>
            <div className="flex items-center gap-2 p-1.5 pl-3 bg-gray-50 border border-gray-200 rounded-2xl">
              <Link className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs font-mono text-gray-700 outline-none select-all overflow-hidden text-ellipsis"
              />
              <button
                onClick={handleCopyLink}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                }`}
                title="Copier le lien"
              >
                {copied ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copié !' : 'Copier'}</span>
              </button>
            </div>
          </div>

          {/* Partage rapide Réseaux */}
          <div className="space-y-2 pt-1 text-left">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
              Partager directement sur :
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* WhatsApp direct share */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold text-xs transition cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>Sur WhatsApp</span>
              </a>

              {/* SMS direct share */}
              <a
                href={smsShareUrl}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 font-bold text-xs transition cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Par SMS</span>
              </a>
            </div>

            {/* Discussion directe Ibkane IA WhatsApp */}
            <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-emerald-950 block">
                      Discussion WhatsApp Ibkane IA
                    </span>
                    <span className="text-[11px] text-emerald-700 font-semibold">
                      Numéro direct : 70 775 37 76
                    </span>
                  </div>
                </div>
                <a
                  href="https://wa.me/221707753776?text=Bonjour%20Ibkane%20IA%2C%20je%20souhaite%20partager%20l%27application%20Kaay%20Jang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-xs transition"
                >
                  Contacter
                </a>
              </div>
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
