import { PostTag } from '../../shared-types/tag';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostTags } from '../PostTags';
import * as Styled from './styles';

export type PostProps = {
  content: string;
  tags: PostTag[];
} & ArticleHeaderProps;

export const Post = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  content,
  id,
  tags,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <Styled.PostContainer size="max">
        <ArticleHeader
          id={id}
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
        <PostTags tags={tags} />
      </Styled.PostContainer>
    </Styled.Wrapper>
  );
};
