import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '.htaccess',
          dest: '',
        },
      ],
    }),
  ],
  base: './',
  build: {
    outDir: 'dist', // Asegúrate de que sea 'dist'
    emptyOutDir: true, // Elimina el directorio de salida antes de cada build
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
