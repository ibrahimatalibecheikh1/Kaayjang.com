import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 1. DÉSACTIVATION DE LA COPIE DE TEXTE SUR L'INTERFACE (sans bloquer le défilement tactile à un doigt)
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

// Désactiver le menu contextuel clic-droit sur l'interface (évite le popup "Copier")
document.addEventListener('contextmenu', (e: MouseEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
    e.preventDefault();
  }
});

// Désactiver le glisser-déposer d'images
document.addEventListener('dragstart', (e: DragEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target || (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA')) {
    e.preventDefault();
  }
});

// 2. DÉSACTIVATION DU ZOOM SANS AUCUN BLOCAGE DU TOUCHER OU DÉFILEMENT À UN DOIGT
// A. Désactiver le zoom gestuel Safari
document.addEventListener('gesturestart', (e: Event) => {
  e.preventDefault();
});
document.addEventListener('gesturechange', (e: Event) => {
  e.preventDefault();
});
document.addEventListener('gestureend', (e: Event) => {
  e.preventDefault();
});

// B. Zoom au clavier / molette desktop (Ctrl + Molette ou Ctrl + +/-/0)
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
