import * as Styled from './styles';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({
  settings: { menuLink, blogName, blogDescription, logo, footer },
  children,
}: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu links={menuLink} blogName={blogName} logo={logo.url} />
      <Styled.HeaderContainer>
        <Header
          blogName={blogName}
          blogDescription={blogDescription}
          logo={logo.url}
        />
      </Styled.HeaderContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={footer} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
