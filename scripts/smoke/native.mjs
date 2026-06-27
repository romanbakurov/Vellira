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
const tempDir = path.join(root, '.tmp-package-smoke-native');

const packageNames = [
  '@romanbakurov/vellira-native',
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
  },
});

writeWorkspaceFile(tempDir, dependencies);

const mocksDir = path.join(tempDir, 'mocks');
mkdirSync(mocksDir, { recursive: true });

writeFileSync(
  path.join(mocksDir, 'react-native.mjs'),
  `
const Component = () => null;

export const Animated = {
  View: Component,
  Value: class {
    interpolate() {
      return '';
    }
  },
  timing() {
    return { start() {} };
  },
};
export const Dimensions = {
  get() {
    return { width: 1024, height: 768 };
  },
};
export const Modal = Component;
export const Pressable = Component;
export const StyleSheet = {
  absoluteFill: {},
  create(styles) {
    return styles;
  },
};
export const Text = Component;
export const TextInput = Component;
export const View = Component;
`
);

writeFileSync(
  path.join(mocksDir, 'react-native-svg.mjs'),
  `
const Component = () => null;

export const ClipPath = Component;
export const Defs = Component;
export const G = Component;
export const Path = Component;
export const Rect = Component;
export default Component;
`
);

writeFileSync(
  path.join(mocksDir, 'react-native-picker.mjs'),
  `
export const Picker = () => null;
`
);

writeFileSync(
  path.join(tempDir, 'native-loader.mjs'),
  `
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const mocks = {
  'react-native': new URL('./mocks/react-native.mjs', import.meta.url).href,
  'react-native-svg': new URL('./mocks/react-native-svg.mjs', import.meta.url).href,
  '@react-native-picker/picker': new URL('./mocks/react-native-picker.mjs', import.meta.url).href,
};

export async function resolve(specifier, context, defaultResolve) {
  if (specifier in mocks) {
    return {
      shortCircuit: true,
      url: mocks[specifier],
    };
  }

  try {
    return await defaultResolve(specifier, context, defaultResolve);
  } catch (error) {
    if (!specifier.startsWith('.') && !specifier.startsWith('/')) {
      throw error;
    }

    const url = new URL(specifier, context.parentURL);
    const filePath = fileURLToPath(url);
    const candidates = [
      \`\${filePath}.js\`,
      \`\${filePath}/index.js\`,
    ];

    for (const candidate of candidates) {
      if (existsSync(candidate) && statSync(candidate).isFile()) {
        return {
          shortCircuit: true,
          url: pathToFileURL(candidate).href,
        };
      }
    }

    throw error;
  }
}
`
);

writeFileSync(
  path.join(tempDir, 'smoke.mjs'),
  `
import * as native from '@romanbakurov/vellira-native';
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

const expectedNativeApi = [
  'Button',
  'Checkbox',
  'Dropdown',
  'FormField',
  'Input',
  'Modal',
  'RadioGroup',
  'Select',
  'Tabs',
  'Tooltip',
];

const actualNativeApi = Object.keys(native).sort();

if (JSON.stringify(actualNativeApi) !== JSON.stringify(expectedNativeApi)) {
  throw new Error(
    \`vellira-native public API mismatch. Expected \${expectedNativeApi.join(', ')}, got \${actualNativeApi.join(', ')}\`
  );
}

if (!isComponentExport(native.Button)) {
  throw new Error('vellira-native Button export invalid');
}

if (!isComponentExport(native.Input)) {
  throw new Error('vellira-native Input export invalid');
}

if (!isComponentExport(native.Tabs)) {
  throw new Error('vellira-native Tabs export invalid');
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

function assertColorToken(value, name) {
  if (typeof value !== 'string' || !value.startsWith('#')) {
    throw new Error(name + ' token invalid');
  }
}

assertColorToken(theme.semantic.surface.default, 'semantic.surface.default');
assertColorToken(theme.semantic.text.primary, 'semantic.text.primary');
assertColorToken(theme.semantic.status.success.fg, 'semantic.status.success.fg');
assertColorToken(
  theme.components.button.primary.default.bg,
  'components.button.primary.default.bg'
);
assertColorToken(theme.components.input.default.bg, 'components.input.default.bg');

console.log('Native package smoke test passed');
`
);

run('pnpm', ['install'], { cwd: tempDir });
run(
  'node',
  ['--conditions=react-native', '--loader', './native-loader.mjs', 'smoke.mjs'],
  {
    cwd: tempDir,
  }
);

if (!existsSync(path.join(tempDir, 'node_modules'))) {
  throw new Error('Smoke install failed');
}
