
export const GET_USERS_POST = "GET_USERS_POST";
export const GET_ONE_POSTS = "GET_ONE_POSTS";


export interface IPosts {
  id: number | string;
  body: string;
  title: string;
  userId: string | number;
}

export interface PostsState {
  posts: Array<IPosts>;
  isLoading: boolean;
}


export interface SeletedPostState {
  post: IPosts;
  isLoading: boolean;
}


interface PostsAction {
  type: typeof GET_USERS_POST;
  payload: PostsState;
}

interface GeSelectedPostsAction {
  type: typeof GET_ONE_POSTS;
  payload: SeletedPostState;
}



export type PostsActionTypes = PostsAction | GeSelectedPostsAction;
