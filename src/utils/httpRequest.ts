import { $auth } from 'stores/auth/store';
import { logout } from 'stores/auth/events';

type HttpRequestArgs = {
  method: string;
  type: 'POST' | 'PUT' | 'GET' | 'DELETE';
  body?: Object;
}

export async function httpRequest(args: HttpRequestArgs) {
  const { method, body, type } = args;
  const { token } = $auth.getState();
  const url = process.env.REACT_APP_API_URL + method;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method: type,
    headers,
    body: body ? JSON.stringify(body) : null,
  });
  const contentType = response.headers.get("content-type") || '';

  /*
  * При попытке запроса без токена почему-то возвращается запрос со статусом 200, вместо 403
  * и с html-ем в теле ответа
  * */
  if (response.status === 403 || !contentType.includes('application/json')) {
    logout();
    throw new Error('access denied');
  }

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
}
