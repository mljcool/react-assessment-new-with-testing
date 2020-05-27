import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getUserList, getSelectedUser } from "store/userFeeds/actions";
import { AppState } from "store";
import { getAllUsers } from "services/getRequest";
import { _justRandomize } from "utils/radomize";
import { Users } from "store/userFeeds/types";


export const thunkGetUsers = (
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const { data = [] } = await getAllUsers();
  const newUserData = (user: any) => user.map((user: Users) => {
    user.imgSrc = _justRandomize();
    return user;
  });
  const defaultUser = data[0] || {};
  dispatch(
    getUserList({
      users: newUserData(data),
      isLoading: false,
    })
  );
  dispatch(
    getSelectedUser({
      user: defaultUser,
      isLoading: false
    })
  );
};

export const thunkSelectedUser = (user: Users
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(
    getSelectedUser({ user, isLoading: false })
  );
};
