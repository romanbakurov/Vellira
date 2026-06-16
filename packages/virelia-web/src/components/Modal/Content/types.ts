import type { BaseModalContentProps } from '@romanbakurov/virelia-types';
import type { ReactNode } from 'react';

export interface ModalContentProps extends BaseModalContentProps {
  children?: ReactNode;
}
