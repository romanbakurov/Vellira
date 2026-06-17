export * from './types';
export * from './story';
export * from './native-component';
export * from './web-component';
export * from './styles';
export * from './test';

import type { ComponentTemplateParams } from './types';

export function renderIndexTemplate({
  componentName,
}: ComponentTemplateParams) {
  return `export * from './${componentName}';
export * from './types';
`;
}
