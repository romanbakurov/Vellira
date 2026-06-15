import type { BaseButtonProps } from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';

export interface ButtonProps extends BaseButtonProps {
  children: ReactNode;
  onPress?: () => void;
}
