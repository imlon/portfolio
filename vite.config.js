import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Tells Vite to use the src folder as the root
  build: {
    outDir: '../dist', // Output files into the dist folder
  },
});
