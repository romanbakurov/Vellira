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

function withIconProps(code: string, native: boolean): string {
  if (native) {
    return code
      .replace(
        'import type { SvgProps } from "react-native-svg";',
        `import type { SvgProps } from "react-native-svg";

type IconProps = SvgProps & {
  size?: number | string;
  color?: string;
};`
      )
      .replace(/props: SvgProps/g, 'props: IconProps');
  }

  return code
    .replace(
      'import type { SVGProps } from "react";',
      `import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};`
    )
    .replace(/props: SVGProps<SVGSVGElement>/g, 'props: IconProps');
}

async function compile(
  svg: string,
  componentName: string,
  native: boolean
): Promise<string> {
  const code = await transform(
    svg,
    {
      native,
      plugins: ['@svgr/plugin-jsx'],
      typescript: true,
      jsxRuntime: 'automatic',
      exportType: 'default',
      expandProps: 'end',
      svgProps: {
        width: '{props.size ?? 16}',
        height: '{props.size ?? 16}',
        fill: '{props.color ?? "currentColor"}',
      },
      replaceAttrValues: {
        '#000': '{props.color ?? "currentColor"}',
        black: '{props.color ?? "currentColor"}',
      },
    },
    {
      componentName,
    }
  );

  return withIconProps(code, native);
}

async function run(): Promise<void> {
  fs.rmSync(ICONS, {
    recursive: true,
    force: true,
  });

  fs.mkdirSync(ICONS, {
    recursive: true,
  });

  const files = await fg('*.svg', {
    cwd: ASSETS,
  });

  const webExports: string[] = [];
  const nativeExports: string[] = [];

  for (const file of files) {
    const svg = fs.readFileSync(path.join(ASSETS, file), 'utf8');

    const name = toName(file);

    const webComponent = await compile(svg, name, false);
    const nativeComponent = await compile(svg, name, true);

    fs.writeFileSync(path.join(ICONS, `${name}.web.tsx`), webComponent);
    fs.writeFileSync(path.join(ICONS, `${name}.native.tsx`), nativeComponent);

    webExports.push(
      `export { default as ${name} } from './generated/${name}.web';`
    );

    nativeExports.push(
      `export { default as ${name} } from './generated/${name}.native';`
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
