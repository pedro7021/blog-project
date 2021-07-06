import Link from 'next/link';
import { Author } from '../../shared-types/author';
import { Category } from '../../shared-types/category';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        <span>Por </span>
        {author ? (
          <Link href={`/author/${author.slug}`}>
            <a>{author.displayName}</a>
          </Link>
        ) : (
          <span>Autor Anônimo </span>
        )}
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {!!categories && categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((category) => (
                <span key={`article-meta-cat-${category.id}`}>
                  <Link href={`/category/${category.slug}`}>
                    <a>{category.displayName}</a>
                  </Link>
                </span>
              ))}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
