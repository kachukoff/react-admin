import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    }
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ['@fullcalendar/react', '@fullcalendar/core'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
});