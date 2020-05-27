import { SeletedPostState, PostsState } from "./types";


export const initialPosts: SeletedPostState = {
  post: {
    id: 0,
    body: '',
    title: '',
    userId: '',
  },
  isLoading: true
}

export const initialStatePost: PostsState = {
  posts: [],
  isLoading: true,
};
