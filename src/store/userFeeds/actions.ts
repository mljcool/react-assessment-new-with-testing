import { UsersState, GET_USERS, GET_ONE_USERS, SeletedUsersState } from "./types";

export const getUserList = (users: UsersState) => {
  return {
    type: GET_USERS,
    payload: users
  };
}

export const getSelectedUser = (user: SeletedUsersState) => {
  return {
    type: GET_ONE_USERS,
    payload: user
  };
}


