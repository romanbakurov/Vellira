import type {
  BaseModalOverlayProps,
  BaseModalProps,
} from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';

export interface ModalOverlayProps extends BaseModalOverlayProps {
  children: ReactNode;
}

export interface ModalProps extends BaseModalProps {
  children: ReactNode;
}
