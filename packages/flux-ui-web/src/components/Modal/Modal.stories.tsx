import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../primitives/Button';
import { Modal } from '../Modal';

import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        component: `
### Modal Component

Fully accessible modal dialog with keyboard support.

**Features**
- Closes on ESC key
- Closes on backdrop click (configurable)
- Focus management
- Scroll lock when open
- Animated enter/exit

### Accessibility

For proper accessibility, **Modal.Header is required**.

The modal uses:

- \`aria-labelledby\` → references \`Modal.Header\`
- \`aria-describedby\` → references \`Modal.Body\`

Correct usage:

\`\`\`tsx
<Modal isOpen onClose={handleClose}>
  <Modal.Header>Delete file</Modal.Header>

  <Modal.Body>
    Are you sure you want to delete this file?
  </Modal.Body>

  <Modal.Footer>
    ...
  </Modal.Footer>
</Modal>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalDemo = ({
  children,
  defaultOpen = false,
  onClose: externalOnClose,
  position,
  ...props
}: {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  closeOnClick?: boolean;
  position?: 'top' | 'bottom' | 'center';
  onClose?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClose = () => {
    setIsOpen(false);
    externalOnClose?.();
  };

  return (
    <>
      {!defaultOpen && (
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      )}
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position={position}
        {...props}
      >
        {children}
      </Modal>
    </>
  );
};

const WithoutBackdropCloseDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnClick={false}
      >
        <Modal.Header>Important Notice</Modal.Header>
        <Modal.Body>
          You cannot close this modal by clicking on the backdrop.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setIsOpen(false)}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const SizesDemo = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button
          onClick={() => {
            setSize('sm');
            setIsOpen(true);
          }}
        >
          Small
        </Button>
        <Button
          onClick={() => {
            setSize('md');
            setIsOpen(true);
          }}
        >
          Medium
        </Button>
        <Button
          onClick={() => {
            setSize('lg');
            setIsOpen(true);
          }}
        >
          Large
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <Modal.Header>{size.toUpperCase()} Modal</Modal.Header>
        <Modal.Body>
          This modal has <strong>{size}</strong> size variant.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const LongContentDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Terms</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Terms and Conditions</Modal.Header>
        <Modal.Body>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {Array.from({ length: 15 }, (_, i) => (
              <p key={i}>
                Section {i + 1}: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setIsOpen(false)}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <ModalDemo onClose={args.onClose}>
      <Modal.Header>Delete file</Modal.Header>
      <Modal.Body>Are you sure you want to delete this file?</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={args.onClose}>
          Cancel
        </Button>
        <Button variant='danger' onClick={args.onClose}>
          Delete
        </Button>
      </Modal.Footer>
    </ModalDemo>
  ),
};

export const WithoutBackdropClose: Story = {
  render: () => <WithoutBackdropCloseDemo />,
};

export const Sizes: Story = {
  render: () => <SizesDemo />,
};

export const LongContent: Story = {
  render: () => <LongContentDemo />,
};

export const CustomPosition: Story = {
  args: {},
  render: (args) => (
    <ModalDemo defaultOpen={false} position='top' onClose={args.onClose}>
      <Modal.Header>Top Positioned Modal</Modal.Header>
      <Modal.Body>This modal appears at the top of the screen.</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={args.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </ModalDemo>
  ),
};
