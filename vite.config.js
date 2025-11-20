import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      "/api": "https://e-commerce-backend-production-7804.up.railway.app" || " http://localhost:4000"
    }
  },
  plugins: [react(),tailwindcss(),],
})
