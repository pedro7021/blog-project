import * as Styled from './styles';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';
import { havePosts } from '../../utils/have-posts';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts,
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);
    if (!havePosts(morePosts)) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={statePosts} />
      {statePosts && statePosts.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            onClick={handleLoadMorePosts}
            disabled={buttonDisabled}
          >
            {noMorePosts ? 'Sem mais posts' : 'Carregar Mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};
