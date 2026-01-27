import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Preprocess для оптимизации
  preprocess: vitePreprocess(),

  kit: {
    // Adapter для Node.js (SSR)
    adapter: adapter({
      out: 'build',
      precompress: true, // Gzip compression
      envPrefix: ''
    }),
    
    // CSP для безопасности
    csp: {
      mode: 'auto',
      directives: {
        'default-src': ['self'],
        'script-src': ['self', 'unsafe-inline'],
        'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
        'font-src': ['self', 'https://fonts.gstatic.com'],
        'img-src': ['self', 'data:'],
      }
    }
  }
};

export default config;
