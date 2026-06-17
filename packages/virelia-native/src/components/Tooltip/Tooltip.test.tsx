import { act } from 'react';

import { afterEach, describe, expect, it } from 'vitest';

import { Button } from '../../primitives/Button';
import { render } from '../../test-utils/render';

import { Tooltip } from './Tooltip';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Tooltip', () => {
  it('shows content while pressed', () => {
    const { container, unmount } = render(
      <Tooltip content='Helpful text'>
        <Button>Show help</Button>
      </Tooltip>
    );

    expect(container.textContent).not.toContain('Helpful text');

    const trigger = container.querySelector<HTMLButtonElement>('button');
    act(() =>
      trigger?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    );

    expect(container.textContent).toContain('Helpful text');

    act(() =>
      trigger?.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }))
    );
    expect(container.textContent).not.toContain('Helpful text');

    unmount();
  });
});
