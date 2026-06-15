import fs from 'node:fs';
import path from 'node:path';

import { transform } from '@svgr/core';
import fg from 'fast-glob';

const ROOT = process.cwd();

const ASSETS = path.join(ROOT, 'assets');
const ICONS = path.join(ROOT, 'src/generated');

function toName(file: string): string {
  return path
    .basename(file, '.svg')
    .replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase());
}

async function compile(
  svg: string,
  componentName: string,
  native: boolean
): Promise<string> {
  return transform(
    svg,
    {
      native,
      typescript: false,
      jsxRuntime: 'automatic',
      exportType: 'default',
      expandProps: 'end',

      svgProps: {
        width: '{size}',
        height: '{size}',
        fill: '{color}',
      },

      replaceAttrValues: {
        '#000': '{color}',
        black: '{color}',
      },
    },
    {
      componentName,
    }
  );
}

async function run(): Promise<void> {
  const files = await fg('*.svg', {
    cwd: ASSETS,
  });

  fs.mkdirSync(ICONS, {
    recursive: true,
  });

  const webExports: string[] = [];
  const nativeExports: string[] = [];

  for (const file of files) {
    const svg = fs.readFileSync(path.join(ASSETS, file), 'utf8');

    const name = toName(file);

    const webComponent = await compile(svg, name, false);

    const nativeComponent = await compile(svg, name, true);

    fs.writeFileSync(path.join(ICONS, `${name}.web.js`), webComponent);

    fs.writeFileSync(path.join(ICONS, `${name}.native.js`), nativeComponent);

    webExports.push(
      `export { default as ${name} } from './generated/${name}.web.js';`
    );

    nativeExports.push(
      `export { default as ${name} } from './generated/${name}.native.js';`
    );
  }

  fs.writeFileSync(path.join(ROOT, 'src/web.ts'), webExports.join('\n'));

  fs.writeFileSync(path.join(ROOT, 'src/native.ts'), nativeExports.join('\n'));

  console.log(`✅ Generated ${files.length} generated`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
