import { createStore } from 'effector';
import { UserListStoreData } from './types';

export const $userList = createStore<UserListStoreData>({
  currentPage: 1,
  total: 0,
  lastPage: 1,
  users: []
});
