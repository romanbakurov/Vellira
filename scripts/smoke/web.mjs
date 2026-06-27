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

if (typeof tokens.theme !== 'object' || tokens.theme === null) {
  throw new Error('vellira-tokens theme export invalid');
}

const { colors } = tokens.theme;

if (!colors.surface) {
  throw new Error('surface semantic tokens missing');
}

if (!colors.text) {
  throw new Error('text semantic tokens missing');
}

if (!colors.border) {
  throw new Error('border semantic tokens missing');
}

if (!colors.interactive) {
  throw new Error('interactive semantic tokens missing');
}

if (!colors.status) {
  throw new Error('status semantic tokens missing');
}

if (!colors.focus) {
  throw new Error('focus semantic tokens missing');
}

if (!colors.overlay) {
  throw new Error('overlay semantic tokens missing');
}

if (!colors.divider) {
  throw new Error('divider semantic tokens missing');
}

if (!colors.selection) {
  throw new Error('selection semantic tokens missing');
}

if (!colors.skeleton) {
  throw new Error('skeleton semantic tokens missing');
}

const assertColor = (value, name) => {
  if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) {
    throw new Error(name + ' token invalid');
  }
};

assertColor(colors.surface.default, 'surface.default');
assertColor(colors.text.primary, 'text.primary');
assertColor(colors.interactive.primary, 'interactive.primary');
assertColor(colors.status.success, 'status.success');

await import('@romanbakurov/vellira-web/styles');

console.log('Web package smoke test passed');
`
);

run('pnpm', ['install'], { cwd: tempDir });
run('node', ['--loader', './css-loader.mjs', 'smoke.mjs'], { cwd: tempDir });

if (!existsSync(path.join(tempDir, 'node_modules'))) {
  throw new Error('Smoke install failed');
}
