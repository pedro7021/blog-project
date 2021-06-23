import { StrapiPostAndSettings } from '../api/load-posts';

export const havePosts = (data: StrapiPostAndSettings | null) =>
  !(!data || !data.posts || !data.posts.length);
