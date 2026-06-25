import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const tempDir = path.join(root, '.tmp-package-smoke-web');

const packageNames = [
  '@romanbakurov/vellira-web',
  '@romanbakurov/vellira-core',
  '@romanbakurov/vellira-icons',
  '@romanbakurov/vellira-tokens',
  '@romanbakurov/vellira-types',
];

function run(command, args, options = {}) {
  execFileSync(command, args, { stdio: 'inherit', ...options });
}

function packPackages() {
  const dependencies = {};

  for (const packageName of packageNames) {
    const before = new Set(readdirSync(tempDir));

    run('pnpm', ['--filter', packageName, 'pack', '--pack-destination', tempDir]);

    const tarballName = readdirSync(tempDir).find(
      (fileName) => fileName.endsWith('.tgz') && !before.has(fileName)
    );

    if (!tarballName) {
      throw new Error(`Could not pack ${packageName}`);
    }

    dependencies[packageName] = `file:./${tarballName}`;
  }

  return dependencies;
}

rmSync(tempDir, { recursive: true, force: true });
mkdirSync(tempDir, { recursive: true });

run('pnpm', ['build']);

const dependencies = packPackages();

writeFileSync(
  path.join(tempDir, 'package.json'),
  JSON.stringify(
    {
      private: true,
      type: 'module',
      dependencies,
      devDependencies: {
        react: '^19.0.0',
        'react-dom': '^19.0.0',
      },
    },
    null,
    2
  )
);

writeFileSync(
  path.join(tempDir, 'pnpm-workspace.yaml'),
  [
    'packages:',
    "  - '.'",
    'overrides:',
    ...Object.entries(dependencies).map(
      ([packageName, tarball]) => `  '${packageName}': '${tarball}'`
    ),
    '',
  ].join('\n')
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

if (!isComponentExport(web.Button)) {
  throw new Error('vellira-web Button export invalid');
}

if (typeof core.useControllableState !== 'function') {
  throw new Error('vellira-core useControllableState export invalid');
}

if (typeof icons.Check !== 'function') {
  throw new Error('vellira-icons Check export invalid');
}

if (typeof tokens.theme !== 'object' || tokens.theme === null) {
  throw new Error('vellira-tokens theme export invalid');
}

console.log('Web package smoke test passed');
`
);

run('pnpm', ['install'], { cwd: tempDir });
run('node', ['smoke.mjs'], { cwd: tempDir });

if (!existsSync(path.join(tempDir, 'node_modules'))) {
  throw new Error('Smoke install failed');
}
