import { $auth } from 'stores/auth/store';
import { logout } from 'stores/auth/events';

type HttpRequestQueryParams = Record<string, string>;

type HttpRequestArgs = {
  method: string;
  type: 'POST' | 'PUT' | 'GET' | 'DELETE';
  body?: Object;
  queryParams?: HttpRequestQueryParams;
}

function createURLWithQueryParams(method: string, queryParams?: HttpRequestQueryParams) {
  const url = new URL(process.env.REACT_APP_API_URL + method);

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url.toString();
}

export async function httpRequest(args: HttpRequestArgs) {
  const { method, body, type, queryParams } = args;
  const { token } = $auth.getState();
  const url = createURLWithQueryParams(method, queryParams);

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

  if (response.status === 403) {
    logout();
    throw new Error('access denied');
  }

  if (!contentType.includes('application/json') || !response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
}
