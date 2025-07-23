import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 1000,
  }
})
