import { createStore } from 'effector';
import { AuthStoreData } from './types';

export const $auth = createStore<AuthStoreData>({
  email: '',
  token: localStorage.getItem('token') || '',
  isLoggedIn: false,
});
