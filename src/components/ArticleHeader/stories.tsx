import { Meta, Story } from '@storybook/react';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
    </div>
  );
};
