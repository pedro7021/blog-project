import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { Heading } from '../Heading';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={logo}
        text={`${blogName} - ${blogDescription}`}
      />
      {showText && (
        <Styled.Content>
          <Heading as="h2" size="small" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
