import Link from 'next/link';
import { PostTag } from '../../shared-typed/tag';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }
  return (
    <Styled.Wrapper>
      tags:
      {tags.map((tag) => (
        <span key={`post-tag-${tag.id}`}>
          <Link href={`/tag/${tag.slug}`}>
            <a>{tag.displayName}</a>
          </Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
