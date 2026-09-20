import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

function safeHmrPlugin() {
  return {
    name: 'safe-hmr-transport',
    transform(code: string, id: string) {
      if (id.includes('client.mjs') || id.includes('@vite/client')) {
        return code
          .replace(
            'ws.send(JSON.stringify(data));',
            'if (ws && ws.readyState === ws.OPEN) { ws.send(JSON.stringify(data)); }'
          )
          .replace(
            'wsTransport.send(data);',
            'wsTransport?.send?.(data);'
          );
      }
      return null;
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      safeHmrPlugin(),
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Kaay Jang',
          short_name: 'KaayJang',
          description: 'Application web d\'apprentissage pour les élèves de la 6ème à la Terminale.',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
