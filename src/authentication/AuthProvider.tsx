import { useNavigate } from 'react-router-dom';
import { useState, useContext, createContext } from 'react';

interface Auth {
  token: string | null;
  onLogin(): void;
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

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
    navigate('/dashboard');
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

async function fakeAuth() {
  return new Promise((resolve) => setTimeout(resolve, 250, '2342f2f1d131rf12')) as Promise<string>;
}
