import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: resolve(import.meta.dirname, './demo'),
  build: {
    target: 'esnext',
    /**
     * This is the directory where the built files will be placed
     * that we upload to GitHub Pages.
     */
    outDir: '../ghpages/demo',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'demo/index.html'),
      },
      output: {
        entryFileNames: 'app-root.js',
      },
    },
  },
});
