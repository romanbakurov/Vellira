import path from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      'react-native': path.resolve(__dirname, 'test/react-native.mock.tsx'),
      '@romanbakurov/virelia-core': path.resolve(
        __dirname,
        '../virelia-core/src/index.ts'
      ),
      '@romanbakurov/virelia-icons': path.resolve(
        __dirname,
        'test/icons.mock.tsx'
      ),
      '@romanbakurov/virelia-tokens': path.resolve(
        __dirname,
        '../virelia-tokens/src/index.ts'
      ),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
