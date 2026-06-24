module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/romanbakurov/Vellira.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',

    [
      '@semantic-release/exec',
      {
        prepareCmd:
          'node scripts/sync-package-versions.cjs ${nextRelease.version} && pnpm install --lockfile-only',
      },
    ],
    './scripts/semantic-release-packages.cjs',

    '@semantic-release/github',
  ],
};
