import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 1. DÉSACTIVATION STRICTE DE LA SÉLECTION ET COPIE DE TEXTE SUR L'INTERFACE
document.addEventListener('selectstart', (e: Event) => {
  const target = e.target as HTMLElement | null;
  if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
    e.preventDefault();
  }
});

document.addEventListener('copy', (e: ClipboardEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
    e.preventDefault();
  }
});

document.addEventListener('cut', (e: ClipboardEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
    e.preventDefault();
  }
});

// Désactiver le menu contextuel clic-droit et appui long sur l'interface (évite le popup "Copier / Partager" du système)
document.addEventListener('contextmenu', (e: MouseEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
    e.preventDefault();
  }
});

// Désactiver le glisser-déposer d'images ou d'éléments d'interface
document.addEventListener('dragstart', (e: DragEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
    e.preventDefault();
  }
});

// 2. DÉSACTIVATION STRICTE DU ZOOM DES ÉCRANS D'INTERFACE
// A. Zoom gestuel Safari iOS (pinch-to-zoom)
document.addEventListener('gesturestart', (e: Event) => {
  e.preventDefault();
});
document.addEventListener('gesturechange', (e: Event) => {
  e.preventDefault();
});
document.addEventListener('gestureend', (e: Event) => {
  e.preventDefault();
});

// B. Zoom multipoint tactile (pinch zoom sur Android / Chrome / iOS)
document.addEventListener(
  'touchmove',
  (e: TouchEvent) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  { passive: false }
);

// C. Zoom par double-tap rapide sur mobile
let lastTouchEnd = 0;
document.addEventListener(
  'touchend',
  (e: TouchEvent) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      const target = e.target as HTMLElement | null;
      if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
        e.preventDefault();
      }
    }
    lastTouchEnd = now;
  },
  { passive: false }
);

// D. Zoom au clavier ou avec molette de souris (Ctrl + Molette ou Ctrl + +/-/0)
window.addEventListener(
  'wheel',
  (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  },
  { passive: false }
);

window.addEventListener('keydown', (e: KeyboardEvent) => {
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')
  ) {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
