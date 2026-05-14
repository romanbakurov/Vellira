import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...storybook.configs['flat/recommended'],
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/no-unused-vars': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];