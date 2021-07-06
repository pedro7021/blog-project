import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    span {
      margin-left: 0.7rem;
    }
    span::after {
      content: ',';
    }
    span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
