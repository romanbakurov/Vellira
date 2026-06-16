import path from 'node:path';

import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      alias: {
        '@romanbakurov/virelia-core': path.resolve(
          __dirname,
          '../virelia-core/src/index.ts'
        ),
      },
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
    },
  })
);
