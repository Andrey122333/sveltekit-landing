import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Vite 5 + SvelteKit 2 + Svelte 5 конфигурация
export default defineConfig({
  plugins: [sveltekit()],
  
  // Оптимизация сборки (Vite 5)
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    minify: 'esbuild',
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
  },
  
  // Оптимизация зависимостей
  optimizeDeps: {
    include: ['svelte']
  }
});
