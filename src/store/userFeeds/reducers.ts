import { GET_USERS, UsersState, UsersActionTypes, GET_ONE_USERS, SeletedUsersState } from "./types";
import { initialUsers, initialState } from "./defaults";


export const userFeeds = (
  state = initialState,
  action: UsersActionTypes
): UsersState => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}

export const seletedUsers = (
  state = initialUsers,
  action: UsersActionTypes
): SeletedUsersState => {

  switch (action.type) {
    case GET_ONE_USERS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}


