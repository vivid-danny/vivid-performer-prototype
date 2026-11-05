import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'lucide-react@0.487.0': 'lucide-react',
      'figma:asset/b5d2536d30de31e66ddfc64a90857a36d5fdd6bb.png': path.resolve(__dirname, './src/assets/b5d2536d30de31e66ddfc64a90857a36d5fdd6bb.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
