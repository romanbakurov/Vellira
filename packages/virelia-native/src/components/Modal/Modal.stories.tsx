import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Button } from '../../primitives/Button';

import { Modal } from './Modal';

type ModalDemoProps = {
  defaultOpen?: boolean;
  closeOnBackdrop?: boolean;
  title?: string;
};

function ModalDemo({
  defaultOpen = false,
  closeOnBackdrop = true,
  title = 'Delete file',
}: ModalDemoProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnBackdrop={closeOnBackdrop}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <Text>Are you sure you want to continue?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onPress={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant='danger' onPress={() => setIsOpen(false)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Modal is a native dialog pattern for focused actions and confirmations. It provides header, body, and footer composition, optional root title, backdrop closing control, and token-based spacing and colors.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Open: Story = {
  render: () => <ModalDemo defaultOpen />,
};

export const WithTitleProp: Story = {
  render: () => (
    <Modal isOpen onClose={() => undefined} title='Native modal'>
      <Modal.Body>
        <Text>Modal can render a title through the root title prop.</Text>
      </Modal.Body>
    </Modal>
  ),
};

export const WithoutBackdropClose: Story = {
  render: () => <ModalDemo closeOnBackdrop={false} title='Important notice' />,
};
