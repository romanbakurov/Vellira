import fs from 'node:fs';
import path from 'node:path';

type Platform = 'web' | 'native' | 'both';
type Layer = 'primitives' | 'components' | 'patterns';

const [, , componentName, platformArg, layerArg] = process.argv;

const platform = platformArg as Platform;
const layer = layerArg as Layer;

if (!componentName || !platform || !layer) {
  console.error(
    'Usage: pnpm create:component ComponentName web|native|both primitives|components|patterns'
  );
  process.exit(1);
}

function getTargetPackages(platform: Platform): string[] {
  switch (platform) {
    case 'web':
      return ['virelia-web'];
    case 'native':
      return ['virelia-native'];
    case 'both':
      return ['virelia-web', 'virelia-native'];
  }
}

function createComponent(params: {
  packageName: string;
  componentName: string;
  layer: Layer;
}) {
  const { packageName, componentName, layer } = params;
  const isNative = packageName === 'virelia-native';

  const componentDir = path.join(
    process.cwd(),
    'packages',
    packageName,
    'src',
    layer,
    componentName
  );

  if (fs.existsSync(componentDir)) {
    console.error(`Component already exists: ${componentDir}`);
    process.exit(1);
  }

  fs.mkdirSync(componentDir, { recursive: true });

  fs.writeFileSync(
    path.join(componentDir, 'types.ts'),
    `export type ${componentName}Props = {
  disabled?: boolean;
};
`
  );

  fs.writeFileSync(
    path.join(componentDir, 'index.ts'),
    `export * from './${componentName}';
export * from './types';
`
  );

  fs.writeFileSync(
    path.join(componentDir, `${componentName}.tsx`),
    isNative
      ? `import { Text } from 'react-native';

import type { ${componentName}Props } from './types';

export function ${componentName}(_props: ${componentName}Props) {
  return <Text>${componentName}</Text>;
}
`
      : `import type { ${componentName}Props } from './types';

export function ${componentName}(_props: ${componentName}Props) {
  return <div>${componentName}</div>;
}
`
  );

  fs.writeFileSync(
    path.join(componentDir, `${componentName}.stories.tsx`),
    `import type { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: '${layer[0].toUpperCase() + layer.slice(1)}/${componentName}',
  component: ${componentName},
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {};
`
  );

  const barrelFile = path.join(
    process.cwd(),
    'packages',
    packageName,
    'src',
    layer,
    'index.ts'
  );

  const exportLine = `export * from './${componentName}';`;

  if (fs.existsSync(barrelFile)) {
    const content = fs.readFileSync(barrelFile, 'utf8');

    if (!content.includes(exportLine)) {
      fs.appendFileSync(barrelFile, `\n${exportLine}\n`);
    }
  }

  console.log(`✅ Created ${packageName} ${layer}/${componentName}`);
}

const targetPackages = getTargetPackages(platform);

for (const packageName of targetPackages) {
  createComponent({
    packageName,
    componentName,
    layer,
  });
}
