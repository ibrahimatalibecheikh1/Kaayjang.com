import React from 'react';
import { Heart, X, Smartphone, Coffee, Award, Copy, Check } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  if (!isOpen) return null;

  const paymentMethods = [
    {
      name: 'Wave Sénégal',
      number: '+221 77 000 00 00',
      badge: 'Instantané sans frais',
      color: 'bg-cyan-50 border-cyan-200 text-cyan-800'
    },
    {
      name: 'Orange Money',
      number: '+221 77 000 00 00',
      badge: 'Code OM / Dépôt direct',
      color: 'bg-orange-50 border-orange-200 text-orange-800'
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 sm:p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Soutien aux Développeurs</h3>
              <p className="text-xs text-gray-500">Aidez à maintenir Kaay Jang gratuit pour les élèves</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Kaay Jang est une initiative éducative 100% dédiée à la réussite scolaire des élèves sénégalais de la 6ème à la Terminale. Votre contribution permet d'héberger les serveurs et d'intégrer encore plus de cours et de PDF !
          </p>

          <div className="space-y-2 mt-4">
            {paymentMethods.map((method, idx) => (
              <div
                key={method.name}
                className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/70 flex items-center justify-between hover:border-blue-300 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-blue-600 font-bold text-xs shadow-xs">
                    <Smartphone className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 text-sm">{method.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-medium">
                        {method.badge}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 font-mono select-text">{method.number}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(method.number, idx)}
                  className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition text-xs flex items-center gap-1"
                  title="Copier le numéro"
                >
                  {copiedIndex === idx ? (
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copié
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
            <Coffee className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Chaque don, même modeste (500 FCFA, 1000 FCFA), fait une réelle différence pour l'éducation de milliers de collégiens et lycéens. Jërejëf !
            </span>
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
