import { afterEach, describe, expect, it } from 'vitest';

import { render } from '../../test-utils/render';

import { Badge } from './Badge';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Badge', () => {
  it('renders component content', () => {
    const { container, unmount } = render(<Badge />);

    expect(container.textContent).toContain('Badge');

    unmount();
  });
});
