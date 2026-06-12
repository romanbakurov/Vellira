import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      'storybook-static/**',
      '.storybook/**',

      'vite.config.*',
      'vitest.config.*',
      '**/*.config.*',
    ],
  },

  js.configs.recommended,

  {
    files: [
      'packages/*/src/**/*.{ts,tsx,mts,cts}',
      'apps/*/src/**/*.{ts,tsx,mts,cts}',
      'apps/*/.storybook/**/*.{ts,tsx}',
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: [
            './tsconfig.json',
            './packages/*/tsconfig.json',
            './apps/*/tsconfig.json',
          ],
        },
      },
    },

    rules: {
      //
      // отключаем JS версии правил
      //
      'no-undef': 'off',
      'no-unused-vars': 'off',

      //
      // TS
      //
      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      //
      // React
      //
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',

      //
      // Hooks
      //
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      //
      // Imports
      //
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^react'],
            ['^@web', '^@native'],
            ['^@shared', '^@assets'],
            ['^@'],
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      //
      // General
      //
      'no-console': 'warn',
      'no-debugger': 'error',

      'import/no-unresolved': 'off',
      'import/no-duplicates': 'error',
      'import/no-cycle': 'warn',
    },
  },

  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'no-console': 'off',
    },
  },

  prettierConfig,
];
