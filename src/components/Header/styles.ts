import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';
export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    padding-bottom: ${theme.spacings.xhuge};
    margin: 0 auto;

    ${HeadingStyles} {
      margin: 0 0 ${theme.spacings.xsmall};
    }
    @media ${theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;

      & > ${HeadingStyles} {
        margin: 0 0 ${theme.spacings.medium} 0;
      }
    }
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;

    @media ${theme.media.lteSmall} {
      margin-left: 0;
    }
  `}
`;
