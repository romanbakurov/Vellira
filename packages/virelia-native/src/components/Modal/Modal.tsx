import { Modal as RNModal, Pressable, Text, View } from 'react-native';

import { styles } from './Modal.styles';
import type {
  ModalBodyProps,
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from './types';

function ModalRoot({
  isOpen,
  onClose,
  closeOnBackdrop = true,
  children,
  title,
  overlayStyle,
  contentStyle,
}: ModalProps) {
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType='fade'
      onRequestClose={onClose}
    >
      <Pressable
        accessibilityRole='button'
        onPress={closeOnBackdrop ? onClose : undefined}
        style={[styles.overlay, overlayStyle]}
      >
        <Pressable style={[styles.content, contentStyle]}>
          {title && <ModalHeader title={title} />}
          {children}
        </Pressable>
      </Pressable>
    </RNModal>
  );
}

function ModalHeader({ children, title, style, textStyle }: ModalHeaderProps) {
  return (
    <View style={[styles.header, style]}>
      <Text style={[styles.title, textStyle]}>{children ?? title}</Text>
    </View>
  );
}

function ModalBody({ children, style }: ModalBodyProps) {
  return <View style={[styles.body, style]}>{children}</View>;
}

function ModalFooter({ children, style }: ModalFooterProps) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

function ModalContent({ children, style }: ModalContentProps) {
  return <View style={[styles.content, style]}>{children}</View>;
}

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Content: ModalContent,
});

export { ModalBody, ModalContent, ModalFooter, ModalHeader };
