import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import robots from 'astro-robots'
import sitemap from '@astrojs/sitemap'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import db from '@astrojs/db'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  site: 'https://www.example.com',
  integrations: [svelte(), sitemap(), robots(), db()],
  output: 'server',
  // or 'hybrid'
  server: {
    port: 4000,
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    optimizeDeps: {
      exclude: ['oslo'],
    },
  },
})
