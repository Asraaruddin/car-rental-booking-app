import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Do NOT import tailwindcss here — it's handled by PostCSS
export default defineConfig({
  plugins: [react()],
})
