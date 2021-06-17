import * as Styled from './styles';
import { Heading } from '../Heading/index';
import { StrapiImage } from '../../shared-typed/strapi-image';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: StrapiImage;
  articleMeta: ArticleMetaProps;
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  articleMeta,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={title} />

      <ArticleMeta {...articleMeta} />
    </Styled.Wrapper>
  );
};
