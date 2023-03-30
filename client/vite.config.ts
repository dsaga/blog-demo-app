import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // set development server port in vite to 3001  to avoid conflict with server port 3000   
  server: { proxy: { '/api': 'http://localhost:3002' }, port: 3001 },
})
