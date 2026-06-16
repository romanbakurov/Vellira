import type { BaseSelectTriggerProps } from '@romanbakurov/flux-ui-types';
import type React from 'react';
import type { ReactNode } from 'react';

export interface SelectTriggerProps extends BaseSelectTriggerProps {
  displayText: ReactNode;
  id?: string;
  errorId?: string;
  labelId: string;
  listboxId: string;
  hasLabel: boolean;
  activeIndex: number;
  ariaLabel?: string;
  error?: boolean | string;
  onClick: () => void;
  buttonRef: React.Ref<HTMLButtonElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}
