import type {
  BaseModalBodyProps,
  BaseModalContentProps,
  BaseModalFooterProps,
  BaseModalHeaderProps,
  BaseModalProps,
} from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ModalProps extends BaseModalProps {
  children: ReactNode;
  title?: string;
  overlayStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

export interface ModalHeaderProps extends BaseModalHeaderProps {
  children?: ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export interface ModalBodyProps extends BaseModalBodyProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface ModalFooterProps extends BaseModalFooterProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface ModalContentProps extends BaseModalContentProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}
