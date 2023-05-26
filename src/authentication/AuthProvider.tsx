import { useState, useContext, createContext } from 'react';
import { decodeToken, isExpired } from 'react-jwt';
import { redirect } from 'react-router-dom';
import { Credentials, UserTokenPayload } from '../types/interfaces';

interface Auth {
  token: string | null;
  userTokenPayload: UserTokenPayload | null;
  onLogin(credentials: Credentials): Promise<null | undefined>;
  onLogout(): void;
}

const AuthContext = createContext<Auth>({} as Auth);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children?: React.ReactNode;
};
export function AuthProvider(props: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [userTokenPayload, setUserTokenPayload] = useState<UserTokenPayload | null>(null);

  if (!token || !userTokenPayload) {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      const decodedToken = decodeToken<UserTokenPayload>(tokenFromStorage);
      if (decodedToken && !isExpired(tokenFromStorage)) {
        setToken(tokenFromStorage);
        setUserTokenPayload(decodedToken);
      }
    }
  }

  const handleLogin = async (credentials: Credentials) => {
    try {
      const response = await sendUserLoginRequest(credentials);

      const token = response.headers.get('x-authorization');

      if (token) {
        const decodedToken = decodeToken<UserTokenPayload>(token);
        if (decodedToken) {
          setToken(token);
          setUserTokenPayload(decodedToken);
          localStorage.setItem('token', token);
        }
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUserTokenPayload(null);
    localStorage.removeItem('token');
  };

  const value = {
    token,
    userTokenPayload,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

async function sendUserLoginRequest(credentials: Credentials) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
}
