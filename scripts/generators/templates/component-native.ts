import type { ComponentTemplateParams } from './component-types';

export function renderNativeComponentTemplate({
  componentName,
}: ComponentTemplateParams) {
  return `import { Text } from 'react-native';

import type { ${componentName}Props } from './types';

export function ${componentName}(_props: ${componentName}Props) {
  return <Text>${componentName}</Text>;
}
`;
}
