import type { Meta, StoryObj } from '@storybook/react';
import { Board } from '../Board';

const meta = {
  title: 'Components/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'My Board',
  },
};
