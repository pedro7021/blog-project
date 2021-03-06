import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(
      screen.getByRole('link', { name: props.author.displayName }),
    ).toHaveAttribute('href', `/author/${props.author.slug}`);

    props.categories.forEach((category) =>
      expect(
        screen.getByRole('link', { name: category.displayName }),
      ).toHaveAttribute('href', `/category/${category.slug}`),
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without author and categories', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} author={undefined} categories={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
