import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: ${theme.spacings.xsmall} 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }
    &:hover img {
      opacity: 0.8;
    }
  `}
`;
export const Cover = styled.img`
  max-width: 100%;
  transition: opacity 300ms ease-in-out;
`;
export const Excerpt = styled.p`
  max-width: 100%;
`;
