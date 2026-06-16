import { Close } from '@romanbakurov/virelia-icons';

import { useModalContext } from '../ModalContext';

import type { ModalHeaderProps } from './types';

import styles from './ModalHeader.module.scss';

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
          <Close />
        </button>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';
