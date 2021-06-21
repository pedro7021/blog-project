import { useEffect } from 'react';
import { loadPosts } from '../api/load-posts';

export default function Index() {
  useEffect(() => {
    loadPosts({ authorSlug: 'pedro-henrique-de-carli' }).then((r) =>
      console.log(r),
    );
  }, []);

  return <h1>Oi</h1>;
}
