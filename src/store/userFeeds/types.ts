

export const GET_USERS = "GET_USERS";
export const GET_ONE_USERS = "GET_ONE_USERS";

export interface Users {
  id: number;
  name: string;
  phone: string;
  username: string;
  address: any;
  company: any;
  imgSrc: string;
}

export interface UsersState {
  users: Array<Users>;
  isLoading: boolean;
}


export interface SeletedUsersState {
  user: Users;
  isLoading: boolean;
}

interface UsersAction {
  type: typeof GET_USERS;
  payload: UsersState;
}

interface GeSelectedUsersAction {
  type: typeof GET_ONE_USERS;
  payload: SeletedUsersState;
}



export type UsersActionTypes = UsersAction | GeSelectedUsersAction;
