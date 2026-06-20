const fs = require('node:fs');

const version = process.argv[2];

if (!version) {
    console.error('Usage: node scripts/sync-package-versions.cjs <version>');
    process.exit(1);
}

const packageFiles = [
    'package.json',
    'packages/vellira-web/package.json',
    'packages/vellira-native/package.json',
    'packages/vellira-core/package.json',
    'packages/vellira-types/package.json',
    'packages/vellira-tokens/package.json',
    'packages/vellira-icons/package.json',
];

for (const file of packageFiles) {
    const pkg = JSON.parse(fs.readFileSync(file, 'utf8'));

    pkg.version = version;

    fs.writeFileSync(file, `${JSON.stringify(pkg, null, 2)}\n`);
    console.log(`${file} → ${version}`);
}