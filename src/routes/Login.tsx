import { useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';

export default function Login() {
  const { onLogin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    onLogin({
      email,
      password,
    });
  };

  return (
    <div className="login-wrapper h-screen flex justify-center items-center">
      <div className="flex flex-column items-center w-80 pt-5 pb-16 border-solid border-2 border-stone-200 shadow-xl rounded-lg">
        <h1 className="mb-4 text-stone-700">Login</h1>
        <form className="flex flex-column items-center" onSubmit={handleSubmit}>
          <label>
            <p>E-Mail-Adresse</p>
            <input className="mb-3 border-solid border-2" type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Passwort</p>
            <input
              className="mb-4 border-solid border-2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button className="p-2 bg-sky-900 rounded-md text-slate-50" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
