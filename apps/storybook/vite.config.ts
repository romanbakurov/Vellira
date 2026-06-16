import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../packages/virelia-web/src'),
      '@components': path.resolve(
        __dirname,
        '../../packages/virelia-web/src/components'
      ),
      '@hooks': path.resolve(__dirname, '../../packages/virelia-web/src/hooks'),
      '@overlay': path.resolve(
        __dirname,
        '../../packages/virelia-web/src/overlay'
      ),
      '@patterns': path.resolve(
        __dirname,
        '../../packages/virelia-web/src/patterns'
      ),
      '@primitives': path.resolve(
        __dirname,
        '../../packages/virelia-web/src/primitives'
      ),
      '@styles': path.resolve(
        __dirname,
        '../../packages/virelia-web/src/styles'
      ),
      '@utils': path.resolve(__dirname, '../../packages/virelia-web/src/utils'),
      '@assets': path.resolve(
        __dirname,
        '../../packages/virelia-web/src/assets'
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/mixins" as *;`,
      },
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
