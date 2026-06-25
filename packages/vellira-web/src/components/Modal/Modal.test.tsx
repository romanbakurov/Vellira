import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../../primitives/Button';
import { expectNoA11yViolations } from '../../test-utils/a11y';
import { render } from '../../test-utils/render';

import { ModalBody } from './Body/ModalBody';
import { ModalFooter } from './Footer/ModalFooter';
import { ModalHeader } from './Header/ModalHeader';
import { Modal } from './Modal';

vi.mock('focus-trap-react', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

function pressDocumentKey(key: string) {
  act(() => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key }));
  });
}

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

  it('connects the dialog to header and body for accessibility', async () => {
    const { unmount } = render(
      <Modal isOpen onClose={() => undefined}>
        <ModalHeader>Delete file</ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
      </Modal>
    );

    await expectNoA11yViolations(document.body);

    const dialog = document.querySelector('[role="dialog"]');
    const titleId = dialog?.getAttribute('aria-labelledby');
    const descriptionId = dialog?.getAttribute('aria-describedby');

    expect(titleId).toBeTruthy();
    expect(descriptionId).toBeTruthy();
    expect(document.getElementById(titleId ?? '')?.textContent).toBe(
      'Delete file'
    );
    expect(document.getElementById(descriptionId ?? '')?.textContent).toBe(
      'Are you sure?'
    );

    unmount();
  });

  it('closes on Escape when enabled', () => {
    const onClose = vi.fn();
    const { unmount } = render(
      <Modal isOpen onClose={onClose}>
        <ModalHeader>Delete file</ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
      </Modal>
    );

    pressDocumentKey('Escape');

    expect(onClose).toHaveBeenCalledOnce();

    unmount();
  });

  it('does not close on Escape when disabled', () => {
    const onClose = vi.fn();
    const { unmount } = render(
      <Modal isOpen closeOnEsc={false} onClose={onClose}>
        <ModalHeader>Delete file</ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
      </Modal>
    );

    pressDocumentKey('Escape');

    expect(onClose).not.toHaveBeenCalled();

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
