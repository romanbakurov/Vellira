import CloseIcon from '@assets/icons/Close.svg?react';

import { useModalContext } from '../ModalContext';
import styles from './ModalHeader.module.scss';
import type { ModalHeaderProps } from './types';

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  const { onClose, titleId } = useModalContext();

  return (
    <div className={styles.modalHeader}>
      <h2 id={titleId} className={styles.modalHeaderTitle}>
        {children}
      </h2>

      {onClose && (
        <button
          type='button'
          className={styles.modalHeaderCloseButton}
          onClick={onClose}
          aria-label='Close modal'
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';
