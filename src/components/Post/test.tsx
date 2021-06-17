import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';

import mock from './mock';
import { formatDate } from '../../utils/format-date';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.header.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: props.header.title }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        /^Et sed legere rationibus, vitae evertitur ad eam. Eu amet vero officiis vis. Ad nullam peri/i,
      )[0],
    ).toHaveStyle({ 'font-size': '2.4rem' });

    expect(
      screen.getByText(formatDate(props.header.articleMeta.createdAt)),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});