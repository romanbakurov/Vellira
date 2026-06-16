import type { BaseSelectTriggerProps } from '@romanbakurov/flux-ui-types';
import type React from 'react';
import type { ReactNode } from 'react';

export interface SelectTriggerProps extends BaseSelectTriggerProps {
  displayText: ReactNode;
  buttonRef: React.Ref<HTMLButtonElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}
