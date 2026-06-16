import type { BaseModalContentProps } from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';

export interface ModalContentProps extends BaseModalContentProps {
  children?: ReactNode;
}
