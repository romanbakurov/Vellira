import styles from './ModalFooter.module.scss';
import type { ModalFooterProps } from './types';

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className={styles.modalFooter}>{children}</div>;
};
