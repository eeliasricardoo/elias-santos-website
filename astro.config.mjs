// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site URL for canonical URLs and SEO (update with your actual domain)
  site: 'https://eliasricardo.com',

  integrations: [react()],

  // Enable prefetch for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro and Tailwind CSS (doesn't affect functionality)
    plugins: [tailwindcss()],

    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion']
    }
  },

  // Image optimization
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Supported formats
    domains: [],
    remotePatterns: []
  },

  // Compression
  compressHTML: true,

  // Build output optimization  
  build: {
    // Inline all stylesheets to eliminate render-blocking CSS (~300ms improvement)
    inlineStylesheets: 'always'
  }
});