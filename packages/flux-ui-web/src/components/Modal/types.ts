import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;

  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
  /** @deprecated Use closeOnBackdrop instead. */
  closeOnClick?: boolean;
}

export interface ModalOverlayProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  closeOnClick?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  zIndex?: number;
  animated?: boolean;
}
