import { useNavigate } from 'react-router-dom';
import { useState, useContext, createContext } from 'react';
import { decodeToken } from 'react-jwt';
import { Credentials, UserTokenPayload } from '../types/interfaces';

interface Auth {
  token: string | null;
  userTokenPayload: UserTokenPayload | null;
  onLogin(credentials: Credentials): void;
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
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [userTokenPayload, setUserTokenPayload] = useState<UserTokenPayload | null>(null);

  const handleLogin = async (credentials: Credentials) => {
    try {
      const response = await sendUserLoginRequest(credentials);

      const token = response.headers.get('x-authorization');

      if (token) {
        const decodedToken = decodeToken(token) as UserTokenPayload;
        setUserTokenPayload(decodedToken);

        setToken(token);
        navigate('/silageheaps');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
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
  return fetch('http://localhost:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
}
