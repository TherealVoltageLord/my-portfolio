import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures correct paths during deployment
  build: {
    outDir: 'dist', // Matches Render's default
  },
});
