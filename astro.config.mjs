import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dptf-foundation.pages.dev',
  output: 'static',
  server: {
    host: 'localhost',
    port: 4321,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          // Split vendor chunks for better caching
          manualChunks: undefined,
        },
      },
    },
    ssr: {
      noExternal: [],
    },
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  // Removed prefetchAll: true - it loads extra JS and prefetches all links eagerly
  // which increases TBT and network payload on mobile
});
