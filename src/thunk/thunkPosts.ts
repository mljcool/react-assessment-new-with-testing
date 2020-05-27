import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "store";
import { getAllPostsByUserId, getOnePost } from "services/getRequest";
import { getPosts, getSelectedPosts } from "store/posts/actions";
import { IPosts } from "store/posts/types";


export const thunkGetPosts = (
  id: number | string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(
    getPosts({
      isLoading: true
    })
  );
  const { data } = await getAllPostsByUserId(id);
  dispatch(
    getPosts({
      posts: data,
      isLoading: false
    })
  );
};

export const thunkSelectedPost = (id: string | number
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(
    getSelectedPosts({
      isLoading: true
    })
  );
  const { data = {} } = await getOnePost(id);

  dispatch(
    getSelectedPosts({ post: data, isLoading: false })
  );
};

export const thunkDeletPost = (id: string | number
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
  const newPosts = getState().posts.posts.filter(data => data.id !== id);
  dispatch(
    getPosts({ posts: newPosts, isLoading: false })
  );
};


export const thunkAddPost = (post: IPosts
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
  const newPosts = [...getState().posts.posts, post];
  dispatch(
    getPosts({ posts: newPosts, isLoading: false })
  );
};