import { createStore } from 'effector';
import { AuthStoreData } from './types';

export const $auth = createStore<AuthStoreData>({
  email: '',
  token: localStorage.getItem('token') || '15|0uxw22wh3BFR17t5RmdUxM8zOrWZRQK2Ob5Mfsfs',
  isLoggedIn: false,
});
