import path from 'node:path';

import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      alias: {
        '@romanbakurov/vellira-core': path.resolve(
          __dirname,
          '../vellira-core/src/index.ts'
        ),
      },
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        exclude: [
          '**/*.module.scss',
          '**/*.stories.*',
          '**/*.test.*',
          '**/index.ts',
          '**/types.ts',
          '**/test-utils/**',
        ],
        thresholds: {
          statements: 70,
          branches: 55,
          functions: 65,
          lines: 70,
        },
      },
    },
  })
);
