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
      plugins: ['@svgr/plugin-jsx'],
      typescript: false,
      jsxRuntime: 'automatic',
      exportType: 'default',
      expandProps: 'end',

      svgProps: {
        width: '{props.size}',
        height: '{props.size}',
        fill: '{props.color}',
      },

      replaceAttrValues: {
        '#000': '{props.color}',
        black: '{props.color}',
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

    fs.writeFileSync(path.join(ICONS, `${name}.web.jsx`), webComponent);

    fs.writeFileSync(path.join(ICONS, `${name}.native.jsx`), nativeComponent);

    webExports.push(
      `export { default as ${name} } from './generated/${name}.web.jsx';`
    );

    nativeExports.push(
      `export { default as ${name} } from './generated/${name}.native.jsx';`
    );
  }

  fs.writeFileSync(path.join(ROOT, 'src/web.ts'), `${webExports.join('\n')}\n`);

  fs.writeFileSync(
    path.join(ROOT, 'src/native.ts'),
    `${nativeExports.join('\n')}\n`
  );

  console.log(`✅ Generated ${files.length} icons`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
