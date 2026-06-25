import { execFileSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export function shouldBuild() {
  return !process.argv.includes('--skip-build');
}

export function run(command, args, options = {}) {
  execFileSync(command, args, { stdio: 'inherit', ...options });
}

export function packPackages(packageNames, tempDir) {
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

export function writePackageJson(tempDir, packageJson) {
  writeFileSync(path.join(tempDir, 'package.json'), JSON.stringify(packageJson, null, 2));
}

export function writeWorkspaceFile(tempDir, dependencies) {
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
}
