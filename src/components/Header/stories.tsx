import { Meta, Story } from '@storybook/react';
import { Header, HeaderProps } from '.';
import props from './mock';
export default {
  title: 'Header',
  component: Header,
  args: props,
} as Meta<HeaderProps>;

export const Template: Story<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
