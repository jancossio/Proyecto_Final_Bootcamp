import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/seguimiento_de_peso',
  server: {
    port: 3001, 
  },
});
