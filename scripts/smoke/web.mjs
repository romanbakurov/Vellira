import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  packPackages,
  run,
  shouldBuild,
  writePackageJson,
  writeWorkspaceFile,
} from './utils.mjs';

const root = process.cwd();
const tempDir = path.join(root, '.tmp-package-smoke-web');

const packageNames = [
  '@romanbakurov/vellira-web',
  '@romanbakurov/vellira-core',
  '@romanbakurov/vellira-icons',
  '@romanbakurov/vellira-tokens',
  '@romanbakurov/vellira-types',
];

rmSync(tempDir, { recursive: true, force: true });
mkdirSync(tempDir, { recursive: true });

if (shouldBuild()) {
  run('pnpm', ['build']);
}

const dependencies = packPackages(packageNames, tempDir);

writePackageJson(tempDir, {
  private: true,
  type: 'module',
  dependencies,
  devDependencies: {
    react: '^19.0.0',
    'react-dom': '^19.0.0',
  },
});

writeWorkspaceFile(tempDir, dependencies);

writeFileSync(
  path.join(tempDir, 'css-loader.mjs'),
  `
export async function load(url, context, defaultLoad) {
  if (url.endsWith('.css')) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default undefined;',
    };
  }

  return defaultLoad(url, context, defaultLoad);
}
`
);

writeFileSync(
  path.join(tempDir, 'smoke.mjs'),
  `
import * as web from '@romanbakurov/vellira-web';
import * as core from '@romanbakurov/vellira-core';
import * as icons from '@romanbakurov/vellira-icons';
import * as tokens from '@romanbakurov/vellira-tokens';

const componentTypes = new Set([
  Symbol.for('react.forward_ref'),
  Symbol.for('react.memo'),
]);

function isComponentExport(value) {
  return (
    typeof value === 'function' ||
    (typeof value === 'object' && value !== null && componentTypes.has(value.$$typeof))
  );
}

const expectedWebApi = [
  'Button',
  'Checkbox',
  'Dropdown',
  'FormField',
  'Input',
  'Modal',
  'RadioGroup',
  'Select',
  'Tabs',
  'ThemeProvider',
  'Tooltip',
  'useTheme',
];

const actualWebApi = Object.keys(web).sort();

if (JSON.stringify(actualWebApi) !== JSON.stringify(expectedWebApi)) {
  throw new Error(
    \`vellira-web public API mismatch. Expected \${expectedWebApi.join(', ')}, got \${actualWebApi.join(', ')}\`
  );
}

if (!isComponentExport(web.Button)) {
  throw new Error('vellira-web Button export invalid');
}

if (!isComponentExport(web.Input)) {
  throw new Error('vellira-web Input export invalid');
}

if (!isComponentExport(web.Tabs)) {
  throw new Error('vellira-web Tabs export invalid');
}

if (!isComponentExport(web.ThemeProvider)) {
  throw new Error('vellira-web ThemeProvider export invalid');
}

if (typeof web.useTheme !== 'function') {
  throw new Error('vellira-web useTheme export invalid');
}

if (typeof core.useControllableState !== 'function') {
  throw new Error('vellira-core useControllableState export invalid');
}

if (typeof icons.Check !== 'function') {
  throw new Error('vellira-icons Check export invalid');
}

if (typeof icons.Search !== 'function') {
  throw new Error('vellira-icons Search export invalid');
}

const { colors } = tokens.theme;

if (typeof tokens.darkTheme !== 'object' || tokens.darkTheme === null) {
  throw new Error('vellira-tokens darkTheme export invalid');
}

if (typeof tokens.lightTheme !== 'object' || tokens.lightTheme === null) {
  throw new Error('vellira-tokens lightTheme export invalid');
}

if (
  typeof tokens.highContrastTheme !== 'object' ||
  tokens.highContrastTheme === null
) {
  throw new Error('vellira-tokens highContrastTheme export invalid');
}

const theme = tokens.darkTheme;

if (!theme.colors) {
  throw new Error('primitive color tokens missing');
}

if (!theme.semantic) {
  throw new Error('semantic tokens missing');
}

if (!theme.components) {
  throw new Error('component tokens missing');
}

if (!theme.tokens) {
  throw new Error('shared base tokens missing');
}

if (!theme.semantic.surface) {
  throw new Error('surface semantic tokens missing');
}

if (!theme.semantic.text) {
  throw new Error('text semantic tokens missing');
}

if (!theme.semantic.border) {
  throw new Error('border semantic tokens missing');
}

if (!theme.semantic.status) {
  throw new Error('status semantic tokens missing');
}

if (!theme.semantic.focus) {
  throw new Error('focus semantic tokens missing');
}

if (!theme.semantic.divider) {
  throw new Error('divider semantic tokens missing');
}

if (!theme.semantic.skeleton) {
  throw new Error('skeleton semantic tokens missing');
}

if (!theme.components.button) {
  throw new Error('button component tokens missing');
}

if (!theme.components.input) {
  throw new Error('input component tokens missing');
}

if (!theme.components.checkbox) {
  throw new Error('checkbox component tokens missing');
}

if (!theme.components.select) {
  throw new Error('select component tokens missing');
}

const assertColor = (value, name) => {
  if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) {
    throw new Error(name + ' token invalid');
  }
};

assertColor(theme.semantic.surface.default, 'semantic.surface.default');
assertColor(theme.semantic.text.primary, 'semantic.text.primary');
assertColor(theme.semantic.status.success.fg, 'semantic.status.success.fg');
assertColor(
  theme.components.button.primary.default.bg,
  'components.button.primary.default.bg'
);
assertColor(theme.components.input.default.bg, 'components.input.default.bg');

await import('@romanbakurov/vellira-web/styles');

console.log('Web package smoke test passed');
`
);

run('pnpm', ['install'], { cwd: tempDir });
run('node', ['--loader', './css-loader.mjs', 'smoke.mjs'], { cwd: tempDir });

if (!existsSync(path.join(tempDir, 'node_modules'))) {
  throw new Error('Smoke install failed');
}
