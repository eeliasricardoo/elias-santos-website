// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const CRITICAL_FONTS = [
  'inter-latin-wght-normal',
  'space-grotesk-latin-wght-normal',
  'jetbrains-mono-latin-wght-normal',
];

/**
 * Astro integration that injects <link rel="preload"> for the three critical
 * latin woff2 fonts into every HTML file after the build completes. Fonts are
 * discovered by scanning dist/_astro so the hash is always correct, even after
 * a @fontsource-variable package update.
 */
function fontPreloadIntegration() {
  return {
    name: 'font-preload-integration',
    hooks: {
      /** @param {{ dir: URL }} opts */
      'astro:build:done': async ({ dir }) => {
        const distPath = fileURLToPath(dir);
        const astroDirPath = join(distPath, '_astro');
        const allFiles = await readdir(astroDirPath);
        const preloadHrefs = allFiles
          .filter(f => f.endsWith('.woff2') && CRITICAL_FONTS.some(c => f.includes(c)))
          .map(f => `/_astro/${f}`);

        if (!preloadHrefs.length) return;

        const tags = preloadHrefs
          .map(href => `<link rel="preload" as="font" type="font/woff2" crossorigin href="${href}">`)
          .join('');

        /** @param {string} dirPath */
        async function injectIntoDir(dirPath) {
          const entries = await readdir(dirPath, { withFileTypes: true });
          await Promise.all(entries.map(async entry => {
            const fullPath = join(dirPath, entry.name);
            if (entry.isDirectory()) {
              await injectIntoDir(fullPath);
            } else if (entry.name.endsWith('.html')) {
              const html = await readFile(fullPath, 'utf-8');
              if (!html.includes('rel="preload" as="font"')) {
                await writeFile(fullPath, html.replace('<meta charset', `${tags}<meta charset`));
              }
            }
          }));
        }

        await injectIntoDir(distPath);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  // Site URL for canonical URLs and SEO (update with your actual domain)
  site: 'https://eliasricardo.com',

  integrations: [react(), sitemap(), fontPreloadIntegration()],

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