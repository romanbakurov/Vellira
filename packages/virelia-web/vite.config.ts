import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
      '@components': path.resolve(dirname, 'src/components'),
      '@hooks': path.resolve(dirname, 'src/hooks'),
      '@overlay': path.resolve(dirname, 'src/overlay'),
      '@patterns': path.resolve(dirname, 'src/patterns'),
      '@primitives': path.resolve(dirname, 'src/primitives'),
      '@styles': path.resolve(dirname, 'src/styles'),
      '@utils': path.resolve(dirname, 'src/utils'),
      '@assets': path.resolve(dirname, 'src/assets'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(dirname, 'src/styles')],
      },
    },
  },

  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        styles: 'src/styles.ts',
      },
      name: 'Virelia',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es', 'cjs'],
    },

    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'focus-trap-react',
        'focus-trap',
      ],
    },
  },
});
