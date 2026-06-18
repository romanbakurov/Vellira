import type { BaseModalContentProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface ModalContentProps extends BaseModalContentProps {
  children?: ReactNode;
}
