import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export function shouldBuild() {
  return !process.argv.includes('--skip-build');
}

export function run(command, args = [], options = {}) {
  execFileSync(command, args, {
    ...options,
    stdio: 'inherit',
  });
}

export function runPnpmInstall(tempDir) {
  run('pnpm', ['install', '--offline'], { cwd: tempDir });
}

export function linkWorkspaceDependencies(root, tempDir, packageDir, packages) {
  const dependencies = {};

  for (const packageName of packages) {
    const sourcePath = path.join(root, packageDir, 'node_modules', packageName);

    if (!existsSync(sourcePath)) {
      throw new Error(
        `Missing ${packageName} in ${packageDir}/node_modules. Run pnpm install before smoke tests.`
      );
    }

    dependencies[packageName] = `link:${path.relative(tempDir, sourcePath)}`;
  }

  return dependencies;
}

export function packPackages(packageNames, tempDir) {
  const dependencies = {};

  for (const packageName of packageNames) {
    const before = new Set(readdirSync(tempDir));

    run('pnpm', [
      '--filter',
      packageName,
      'pack',
      '--pack-destination',
      tempDir,
    ]);

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
  writeFileSync(
    path.join(tempDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

export function writeWorkspaceFile(tempDir, dependencies) {
  const overrides = dependencies.overrides ?? dependencies;

  writeFileSync(
    path.join(tempDir, 'pnpm-workspace.yaml'),
    [
      'packages:',
      "  - '.'",
      'overrides:',
      ...Object.entries(overrides).map(
        ([packageName, tarball]) => `  '${packageName}': '${tarball}'`
      ),
      '',
    ].join('\n')
  );
}
