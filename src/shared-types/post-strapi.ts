import { PostProps } from '../components/Post';

export type PostStrapi = PostProps & {
  slug: string;
  content: string;
};
