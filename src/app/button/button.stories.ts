import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/app/button/button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// This is an accessible story
export const Accessible: Story = {
  args: {
    primary: false,
  },
};

// This is not
export const Inaccessible: Story = {
  args: {
    ...Accessible.args,
    backgroundColor: 'red',
  },
};
