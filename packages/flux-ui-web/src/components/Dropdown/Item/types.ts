import type { BaseDropdownItemProps } from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';

export interface DropdownItemProps extends BaseDropdownItemProps {
  children: ReactNode;
  icon?: ReactNode;
}
