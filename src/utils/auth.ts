export const saveUser = (username: string, rememberMe = false): void => {
    console.log("rememberMe",rememberMe);
  if (rememberMe) {
    localStorage.setItem('user', username);
  } else {
    sessionStorage.setItem('user', username);
  }
};

export const getUser = (): string | null => {
  return sessionStorage.getItem('user') || localStorage.getItem('user');
};

export const isAuthenticated = () : boolean => !!getUser();

export const logout = (): void => {
  localStorage.removeItem('user');
  sessionStorage.removeItem('user');
};