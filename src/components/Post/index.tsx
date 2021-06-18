import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type PostProps = {
  content: string;
} & ArticleHeaderProps;

export const Post = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  content,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <Styled.PostContainer size="max">
        <ArticleHeader
          title={title}
          excerpt={excerpt}
          cover={cover}
          createdAt={createdAt}
          author={author}
          categories={categories}
        />
      </Styled.PostContainer>
      <Styled.PostContainer size="content">
        <HtmlContent html={content} />
      </Styled.PostContainer>
    </Styled.Wrapper>
  );
};
