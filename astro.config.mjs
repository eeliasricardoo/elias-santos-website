// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro and Tailwind CSS (doesn't affect functionality)
    plugins: [tailwindcss()],

    build: {
      // Inline small assets for faster loading
      assetsInlineLimit: 4096,

      // Enable CSS code splitting for better caching
      cssCodeSplit: true,

      // Minify for production
      minify: 'esbuild',

      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion-vendor': ['framer-motion'],
          }
        }
      }
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
    inlineStylesheets: 'auto'
  }
});