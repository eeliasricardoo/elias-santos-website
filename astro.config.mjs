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
      // Inline small assets for faster loading
      assetsInlineLimit: 4096,

      // Enable CSS code splitting for better caching
      cssCodeSplit: true,

      // Use default esbuild minification (faster and more stable)
      // minify: 'terser', 

      rollupOptions: {
        output: {
          // Optimize asset file names for better caching
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) {
              return 'assets/[name]-[hash][extname]';
            }

            const info = assetInfo.name.split('.');
            // const ext = info[info.length - 1]; // Unused

            if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name)) {
              return 'assets/images/[name]-[hash][extname]';
            }

            if (/\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
              return 'assets/fonts/[name]-[hash][extname]';
            }

            return 'assets/[name]-[hash][extname]';
          },

          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
        }
      },

      // Enable scope hoisting for smaller bundles
      modulePreload: {
        polyfill: true
      }
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
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