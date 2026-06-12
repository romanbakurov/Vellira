import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { colors } from '../src/tokens/colors';
import { spacing } from '../src/tokens/spacing';
import { radius } from '../src/tokens/radius';
import { shadows } from '../src/tokens/shadows';
import { typography } from '../src/tokens/typography';
import { zIndex } from '../src/tokens/zIndex';
import { components } from '../src/tokens/components';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function toKebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d+)/g, '$1-$2')
    .toLowerCase();
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function generateVariables(
  obj: Record<string, unknown>,
  prefix: string,
  options?: {
    numberUnit?: string;
  }
): string {
  let css = '';

  for (const [key, value] of Object.entries(obj)) {
    const name = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

    if (typeof value === 'string') {
      css += `  --${name}: ${value};\n`;
      continue;
    }

    if (typeof value === 'number') {
      const unit = options?.numberUnit ?? '';
      css += `  --${name}: ${value}${unit};\n`;
      continue;
    }

    if (isPlainObject(value)) {
      css += generateVariables(value, name, options);
    }
  }

  return css;
}

let css = `/**
 * AUTO-GENERATED FILE
 * DO NOT EDIT MANUALLY
 * Generated: ${new Date().toISOString()}
 */

:root {
`;

css += generateVariables(spacing, 'space', {
  numberUnit: 'px',
});

css += generateVariables(components, '', {
  numberUnit: 'px',
});

css += generateVariables(colors, 'color');

css += generateVariables(radius, 'radius', {
  numberUnit: 'px',
});

css += generateVariables(shadows, 'shadow');

css += generateVariables(zIndex, 'z-index');

css += generateVariables(typography, 'font');

css += '}\n';

const outputPath = path.resolve(__dirname, '../dist/css/tokens.css');

fs.mkdirSync(path.dirname(outputPath), {
  recursive: true,
});

fs.writeFileSync(outputPath, css, 'utf8');

console.log('✅ tokens.css generated');
console.log(outputPath);
