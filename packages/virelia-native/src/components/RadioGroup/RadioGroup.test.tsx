import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { render } from '../../test-utils/render';

import { RadioGroup } from './RadioGroup';

const options = [
  { label: 'Starter', value: 'starter' },
  { label: 'Pro', value: 'pro' },
];

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native RadioGroup', () => {
  it('selects an option and calls onChange', () => {
    const onChange = vi.fn();
    const { container, unmount } = render(
      <RadioGroup
        options={options}
        defaultValue='starter'
        onChange={onChange}
      />
    );

    const radios =
      container.querySelectorAll<HTMLButtonElement>('[role="radio"]');

    expect(radios[0].getAttribute('aria-checked')).toBe('true');
    act(() => radios[1].click());
    expect(radios[1].getAttribute('aria-checked')).toBe('true');
    expect(onChange).toHaveBeenCalledWith('pro');

    unmount();
  });
});
