import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/instock-mont-blanc/', // The repository name (relative path on GitHub Pages)
  plugins: [react()],
})
