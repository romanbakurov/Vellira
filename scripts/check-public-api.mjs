import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dirname, '..');

const packageExportContracts = {
  'packages/vellira-core/package.json': ['.'],
  'packages/vellira-icons/package.json': ['.', './native', './web'],
  'packages/vellira-native/package.json': ['.'],
  'packages/vellira-tokens/package.json': ['.', './css'],
  'packages/vellira-types/package.json': ['.'],
  'packages/vellira-web/package.json': ['.', './styles'],
};

for (const [packagePath, expectedExports] of Object.entries(
  packageExportContracts
)) {
  const absolutePath = path.join(root, packagePath);
  const packageJson = JSON.parse(readFileSync(absolutePath, 'utf8'));
  const actualExports = Object.keys(packageJson.exports ?? {}).sort();
  const sortedExpectedExports = [...expectedExports].sort();

  if (JSON.stringify(actualExports) !== JSON.stringify(sortedExpectedExports)) {
    throw new Error(
      `${packageJson.name} exports mismatch. Expected ${sortedExpectedExports.join(
        ', '
      )}, got ${actualExports.join(', ')}`
    );
  }
}

console.log('Public package exports check passed');
