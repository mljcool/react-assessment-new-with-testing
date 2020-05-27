import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from 'redux-form';



import { userFeeds, seletedUsers } from "./userFeeds/reducers";
import { selectedPost, userPosts } from "./posts/reducers";

const rootReducer = combineReducers({
  usersLists: userFeeds,
  currentUser: seletedUsers,
  posts: userPosts,
  viewPost: selectedPost,
  form: formReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
