import { useState, useContext, createContext } from 'react';
import { decodeToken } from 'react-jwt';
import { redirect } from 'react-router-dom';
import { Credentials, Role, UserTokenPayload } from '../types/interfaces';

interface Auth {
  token: string | null;
  userTokenPayload: UserTokenPayload | null;
  onLogin(credentials: Credentials): Promise<void>;
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

  const handleLogin = async (credentials: Credentials) => {
    try {
      const response = await sendUserLoginRequest(credentials);

      const token = response.headers.get('x-authorization');

      if (token) {
        setToken(token);

        const decodedToken = decodeToken(token) as UserTokenPayload;
        setUserTokenPayload(decodedToken);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUserTokenPayload(null);
    redirect('/login');
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
