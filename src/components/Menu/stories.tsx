import { Meta, Story } from '@storybook/react';
import { Menu, MenuProps } from '.';
import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
