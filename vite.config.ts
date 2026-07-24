import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL for GitHub Pages (repo name must match the repository slug)
  base: '/El-luchador-Gastronomia-Mexicana/',
});
