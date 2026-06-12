import type React from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  const root = document.getElementById('overlay-root') ?? document.body;

  if (!root) return null;

  return createPortal(children, root);
};
