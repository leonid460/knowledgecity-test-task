export type AuthStoreData = {
  email: string;
  token: string;
  isLoggedIn: boolean;
}

export type SignInParams = {
  email: string;
  password: string;
  rememberMe: boolean;
}
