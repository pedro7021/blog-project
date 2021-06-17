import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

import props from './mock';

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: props.blogName }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Pedro de Carli/i }),
    ).toHaveAttribute('src', props.logo);

    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();
  });

  it('should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.queryByRole('heading', { name: props.blogDescription }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Pedro de Carli/i }),
    ).toHaveAttribute('src', props.logo);
    
    expect(screen.queryByRole(props.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
