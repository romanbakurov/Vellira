import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../../primitives/Button';
import { render } from '../../test-utils/render';

import { Modal } from '.';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Modal', () => {
  it('renders modal content when open', () => {
    const { container, unmount } = render(
      <Modal isOpen onClose={() => undefined}>
        <Modal.Header>Native modal</Modal.Header>
        <Modal.Body>Body content</Modal.Body>
      </Modal>
    );

    expect(container.textContent).toContain('Native modal');
    expect(container.textContent).toContain('Body content');

    unmount();
  });

  it('does not render modal content when closed', () => {
    const { container, unmount } = render(
      <Modal isOpen={false} onClose={() => undefined}>
        <Modal.Header>Native modal</Modal.Header>
        <Modal.Body>Body content</Modal.Body>
      </Modal>
    );

    expect(container.textContent).not.toContain('Native modal');
    expect(container.querySelector('[data-testid="native-modal"]')).toBeNull();

    unmount();
  });

  it('calls onClose when backdrop is pressed', () => {
    const onClose = vi.fn();
    const { container, unmount } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Header>Native modal</Modal.Header>
        <Modal.Body>Body content</Modal.Body>
        <Modal.Footer>
          <Button>Done</Button>
        </Modal.Footer>
      </Modal>
    );

    const backdrop = container.querySelector<HTMLButtonElement>(
      '[data-testid="modal-backdrop"]'
    );

    act(() => backdrop?.click());

    expect(onClose).toHaveBeenCalledOnce();

    unmount();
  });

  it('calls onClose from the header close button and keeps controls focusable', () => {
    const onClose = vi.fn();
    const { container, unmount } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Header>Native modal</Modal.Header>
        <Modal.Body>Body content</Modal.Body>
        <Modal.Footer>
          <Button>Done</Button>
        </Modal.Footer>
      </Modal>
    );

    const closeButton = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Close modal"]'
    );
    const doneButton = Array.from(
      container.querySelectorAll<HTMLButtonElement>('button')
    ).find((button) => button.textContent === 'Done');

    closeButton?.focus();
    expect(document.activeElement).toBe(closeButton);

    doneButton?.focus();
    expect(document.activeElement).toBe(doneButton);

    act(() => closeButton?.click());

    expect(onClose).toHaveBeenCalledOnce();

    unmount();
  });

  it('does not expose backdrop as close button when backdrop close is disabled', () => {
    const onClose = vi.fn();

    const { container, unmount } = render(
      <Modal isOpen closeOnBackdrop={false} onClose={onClose}>
        <Modal.Header>Native modal</Modal.Header>
        <Modal.Body>Body content</Modal.Body>
      </Modal>
    );

    const backdrop = container.querySelector<HTMLButtonElement>(
      '[data-testid="modal-backdrop"]'
    );

    expect(backdrop).not.toBeNull();
    expect(backdrop?.getAttribute('role')).toBeNull();
    expect(backdrop?.getAttribute('aria-label')).toBeNull();

    act(() => {
      backdrop?.click();
    });

    expect(onClose).not.toHaveBeenCalled();

    unmount();
  });
});
