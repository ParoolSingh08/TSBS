import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TSBS/', // 👈 important for GitHub Pages
  plugins: [react()],
  build: {
    assetsInclude: ['**/*.otf'] // 👈 ensures .otf fonts are bundled
  }
})