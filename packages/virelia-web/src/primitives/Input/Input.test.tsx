import { afterEach, describe, expect, it } from 'vitest';

import { render } from '../../test-utils/render';

import { Input } from './Input';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Input', () => {
  it('renders input props and connects error text', () => {
    const { container, unmount } = render(
      <Input
        id='email'
        label='Email'
        value='hello@virelia.dev'
        placeholder='name@company.com'
        error='Email is required'
        type='email'
      />
    );

    const input = container.querySelector<HTMLInputElement>('input');

    expect(input?.value).toBe('hello@virelia.dev');
    expect(input?.type).toBe('email');
    expect(input?.placeholder).toBe('name@company.com');
    expect(input?.getAttribute('aria-invalid')).toBe('true');
    expect(input?.getAttribute('aria-describedby')).toBe('email-error');
    expect(document.getElementById('email-error')?.textContent).toBe(
      'Email is required'
    );

    unmount();
  });
});
