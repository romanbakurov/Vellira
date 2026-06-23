import { Modal, Pressable, View } from 'react-native';

import { styles } from './DropdownContent.styles';
import type { DropdownContentProps } from './types';

export function DropdownContent({
  isOpen,
  children,
  onClose,
}: DropdownContentProps) {
  return (
    <Modal
      transparent
      visible={isOpen}
      animationType='slide'
      onRequestClose={onClose}
    >
      <View style={styles.modalRoot}>
        <Pressable
          accessibilityRole='button'
          accessibilityLabel='Close menu'
          style={styles.backdrop}
          onPress={onClose}
        />

        <View accessibilityRole='menu' style={styles.menu}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

DropdownContent.displayName = 'DropdownContent';
