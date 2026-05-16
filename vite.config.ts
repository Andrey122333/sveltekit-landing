import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Vite 8 + SvelteKit 2 + Svelte 5 конфигурация
export default defineConfig({
  plugins: [sveltekit()],

  // Оптимизация сборки (Vite 8)
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    minify: 'oxc',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },

  // Оптимизация dev-сервера
  server: {
    port: 3001,
    strictPort: true,
    fs: {
      strict: true
    }
  }
});
