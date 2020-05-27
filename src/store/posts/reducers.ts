import { GET_USERS_POST, GET_ONE_POSTS, PostsActionTypes, PostsState, SeletedPostState } from "./types";
import { initialStatePost, initialPosts } from "./defaults";


export const userPosts = (
  state = initialStatePost,
  action: PostsActionTypes
): PostsState => {
  switch (action.type) {
    case GET_USERS_POST: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}

export const selectedPost = (
  state = initialPosts,
  action: PostsActionTypes
): SeletedPostState => {

  switch (action.type) {
    case GET_ONE_POSTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}


