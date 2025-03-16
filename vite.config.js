import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['271e-41-85-162-105.ngrok-free.app'],// Autorise l'accès depuis n'importe quelle adresse IP
  },
});
