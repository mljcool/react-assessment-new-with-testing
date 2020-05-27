import { PostsState, SeletedPostState, GET_USERS_POST, GET_ONE_POSTS } from "./types";

export const getPosts = (posts: PostsState | any) => {
  return {
    type: GET_USERS_POST,
    payload: posts
  };
}

export const getSelectedPosts = (post: SeletedPostState | any) => {
  return {
    type: GET_ONE_POSTS,
    payload: post
  };
}


