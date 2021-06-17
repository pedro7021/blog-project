import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type PostProps = {
  header: ArticleHeaderProps;
  content: string;
};

export const Post = ({ header, content }: PostProps) => {
  return (
    <Styled.Wrapper>
      <Styled.PostContainer size="max">
        <ArticleHeader {...header} />
      </Styled.PostContainer>
      <Styled.PostContainer size="content">
        <HtmlContent html={content} />
      </Styled.PostContainer>
    </Styled.Wrapper>
  );
};
