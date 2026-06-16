import type { BaseTabProps } from '@romanbakurov/flux-ui-types';
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';

export interface TabProps extends BaseTabProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement> | null) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement> | null) => void;
}
