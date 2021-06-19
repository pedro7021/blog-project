import styled, { css } from 'styled-components';

export const Wrapper = styled.article``;

export type PostContainerProps = {
  size: 'max' | 'content';
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
    max-width: ${theme.sizes[size]};
  `}
`;
