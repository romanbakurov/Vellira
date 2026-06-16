import type { BaseButtonProps } from '@romanbakurov/virelia-types';
import type { ReactNode } from 'react';

export interface ButtonProps extends BaseButtonProps {
  children: ReactNode;
  onPress?: () => void;
}
