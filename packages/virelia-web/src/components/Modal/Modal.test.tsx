import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../../primitives/Button';
import { render } from '../../test-utils/render';

import { ModalBody } from './Body/ModalBody';
import { ModalFooter } from './Footer/ModalFooter';
import { ModalHeader } from './Header/ModalHeader';
import { Modal } from './Modal';

vi.mock('focus-trap-react', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

afterEach(() => {
  document.body.innerHTML = '';
  document.body.style.overflow = '';
});

describe('Modal', () => {
  it('renders dialog content when open and closes from header button', () => {
    const onClose = vi.fn();
    const { unmount } = render(
      <Modal isOpen onClose={onClose}>
        <ModalHeader>Delete file</ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button>Cancel</Button>
        </ModalFooter>
      </Modal>
    );

    const dialog = document.querySelector('[role="dialog"]');
    const closeButton = document.querySelector<HTMLButtonElement>(
      '[aria-label="Close modal"]'
    );

    expect(dialog).not.toBeNull();
    expect(dialog?.getAttribute('aria-modal')).toBe('true');

    act(() => closeButton?.click());
    expect(onClose).toHaveBeenCalledOnce();

    unmount();
  });

  it('renders nothing when closed', () => {
    const { unmount } = render(
      <Modal isOpen={false} onClose={() => undefined}>
        <ModalHeader>Closed</ModalHeader>
      </Modal>
    );

    expect(document.querySelector('[role="dialog"]')).toBeNull();

    unmount();
  });
});
