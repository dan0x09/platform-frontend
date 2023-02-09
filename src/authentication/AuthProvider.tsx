import { useNavigate } from 'react-router-dom';
import { useState, useContext, createContext } from 'react';

interface Auth {
  token: string | null;
  onLogin(credentials: Credentials): void;
  onLogout(): void;
}

const AuthContext = createContext<Auth>({} as Auth);

export function useAuth() {
  return useContext(AuthContext);
}

export interface Credentials {
  email: string;
  password: string;
}

type Props = {
  children?: React.ReactNode;
};
export function AuthProvider(props: Props) {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async (credentials: Credentials) => {
    try {
      const response = await loginUser(credentials);

      const token = response.headers.get('x-authorization');

      setToken(token);
      navigate('/silageheaps');
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

async function loginUser(credentials: Credentials) {
  return fetch('http://localhost:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
}
