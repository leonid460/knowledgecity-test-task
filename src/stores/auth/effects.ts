import { createEffect } from 'effector';
import { httpRequest } from 'utils/httpRequest';
import { $auth } from './store';
import { SignInParams } from './types';

export const signIn = createEffect(async ({ email, password, rememberMe }: SignInParams) => {
  const data = await httpRequest({
    method: '/auth/signin',
    type: 'POST',
    body: { email, password }
  });
  const token: string = data.token || '';

  if (rememberMe) {
    localStorage.setItem('token', token);
  }

  return { token, email };
});

$auth.on(signIn.doneData, (_, payload) => {
  const { token, email } = payload;

  return { token, email, isLoggedIn: true };
});

export const renewSession = createEffect(async () => {
  const data = await httpRequest({
    method: '/app/profile',
    type: 'GET',
  });

  const email: string = data.user.email || '';

  return { email };
});

$auth.on(renewSession.doneData, (state, payload) => {
  const { token } = state;
  const { email } = payload;

  return { token, email: email || '', isLoggedIn: true };
});
