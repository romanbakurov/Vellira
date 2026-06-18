import path from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      'react-native': path.resolve(__dirname, 'test/react-native.mock.tsx'),
      '@romanbakurov/vellira-core': path.resolve(
        __dirname,
        '../vellira-core/src/index.ts'
      ),
      '@romanbakurov/vellira-icons': path.resolve(
        __dirname,
        'test/icons.mock.tsx'
      ),
      '@romanbakurov/vellira-tokens': path.resolve(
        __dirname,
        '../vellira-tokens/src/index.ts'
      ),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
