import type {
  BaseModalOverlayProps,
  BaseModalProps,
} from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface ModalOverlayProps extends BaseModalOverlayProps {
  children: ReactNode;
  className?: string;
  zIndex?: number;
  animated?: boolean;
}

export interface ModalProps extends BaseModalProps {
  children: ReactNode;
}
