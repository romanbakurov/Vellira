import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../../primitives/Button';
import { render } from '../../test-utils/render';

import { Modal } from './Modal';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Modal', () => {
  it('renders modal content when open', () => {
    const { container, unmount } = render(
      <Modal isOpen onClose={() => undefined} title='Native modal'>
        <Modal.Body>Body content</Modal.Body>
      </Modal>
    );

    expect(container.textContent).toContain('Native modal');
    expect(container.textContent).toContain('Body content');

    unmount();
  });

  it('calls onClose when backdrop is pressed', () => {
    const onClose = vi.fn();
    const { container, unmount } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Body>Body content</Modal.Body>
        <Modal.Footer>
          <Button>Done</Button>
        </Modal.Footer>
      </Modal>
    );

    const backdrop =
      container.querySelector<HTMLButtonElement>('[role="button"]');
    act(() => backdrop?.click());

    expect(onClose).toHaveBeenCalledOnce();

    unmount();
  });
});
