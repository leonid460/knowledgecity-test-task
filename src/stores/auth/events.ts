import { createEvent } from 'effector';
import { $auth } from './store';

export const logout = createEvent();

$auth.on(logout, () =>({
  email: '',
  token: '',
  isLoggedIn: false
}));
