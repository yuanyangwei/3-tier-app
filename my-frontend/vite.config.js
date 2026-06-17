import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist', // ◄ This matches the folder your Dockerfile expects!
  }
});
