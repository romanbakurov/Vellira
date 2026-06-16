import { ModalBody } from './Body/ModalBody';
import { ModalContent } from './Content/ModalContent';
import { ModalFooter } from './Footer/ModalFooter';
import { ModalHeader } from './Header/ModalHeader';
import { Modal as BaseModal } from './Modal';

export type { ModalProps } from './types';

export const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  Body: ModalBody,
  Content: ModalContent,
  Footer: ModalFooter,
});
