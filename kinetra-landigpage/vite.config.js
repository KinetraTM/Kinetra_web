import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// En GitHub Pages por proyecto define VITE_BASE_URL=/<repo>/ antes de buildear.
// Vite expone ese valor como import.meta.env.BASE_URL (basename del router).
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [react()],
})
