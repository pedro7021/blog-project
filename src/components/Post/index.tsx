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
      <ArticleHeader {...header} />
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
