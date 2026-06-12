import { useModalContext } from '../ModalContext';
import styles from './ModalBody.module.scss';
import type { ModalBodyProps } from './types';

export const ModalBody = ({ children }: ModalBodyProps) => {
  const { descriptionId } = useModalContext();

  return (
    <div id={descriptionId} className={styles.modalBody}>
      {children}
    </div>
  );
};
