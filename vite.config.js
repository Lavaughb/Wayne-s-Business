// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The base path should be the project repository name (e.g., /my-app-repo/)
export default defineConfig({
  plugins: [react()],
  base: '/Wayne-s-Business/', // 👈 REPLACE with your repository name!
})