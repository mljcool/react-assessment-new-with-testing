import { SeletedUsersState, UsersState } from "./types";


export const initialUsers: SeletedUsersState = {
  user: {
    id: 0,
    name: '',
    address: '',
    company: '',
    imgSrc: '',
    phone: '',
    username: ''
  },
  isLoading: true,
}


export const initialState: UsersState = {
  users: [],
  isLoading: true,
};
