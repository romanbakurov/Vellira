import styles from './ModalContent.module.scss';
import type { ModalContentProps } from './types';

export const ModalContent = ({ children }: ModalContentProps) => {
  return <div className={styles.content}>{children}</div>;
};
