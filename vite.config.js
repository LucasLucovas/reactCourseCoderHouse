import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  build: {
    publicDir: 'public',
  },
  server: {
    port: 3001, 
  },
});
