import * as Styled from './styles';
import { Heading } from '../Heading/index';
import { StrapiImage } from '../../shared-types/strapi-image';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={title} />

      <ArticleMeta
        createdAt={createdAt}
        author={author}
        categories={categories}
      />
    </Styled.Wrapper>
  );
};
