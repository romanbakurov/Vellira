import { createContext, useContext } from 'react';

type ModalContextType = {
  onClose?: () => void;
  titleId: string;
  descriptionId: string;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal compound components must be used inside Modal');
  }

  return context;
};

export default ModalContext;
