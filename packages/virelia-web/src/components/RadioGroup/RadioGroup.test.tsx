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

describe('RadioGroup', () => {
  it('updates uncontrolled value and calls onChange', () => {
    const onChange = vi.fn();
    const { container, unmount } = render(
      <RadioGroup
        label='Plan'
        name='plan'
        options={options}
        defaultValue='starter'
        onChange={onChange}
      />
    );

    const radios = container.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    );

    expect(radios[0].checked).toBe(true);
    act(() => radios[1].click());
    expect(radios[1].checked).toBe(true);
    expect(onChange).toHaveBeenCalledWith('pro');

    unmount();
  });

  it('does not select disabled options', () => {
    const onChange = vi.fn();
    const { container, unmount } = render(
      <RadioGroup
        options={[options[0], { ...options[1], disabled: true }]}
        defaultValue='starter'
        onChange={onChange}
      />
    );

    const disabledRadio = container.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    )[1];

    act(() => disabledRadio.click());
    expect(disabledRadio.checked).toBe(false);
    expect(onChange).not.toHaveBeenCalled();

    unmount();
  });
});
