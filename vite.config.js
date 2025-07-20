import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    commonjs(), svgr()
  ],
});
