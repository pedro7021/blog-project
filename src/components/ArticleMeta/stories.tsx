import { Meta, Story } from '@storybook/react';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleMetaProps>;

export const Template: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
export const NoAuthor: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} author={undefined} />
    </div>
  );
};
export const NoCategories: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} categories={undefined} />
    </div>
  );
};
export const NoAuthorAndCategories: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} categories={undefined} author={undefined} />
    </div>
  );
};
