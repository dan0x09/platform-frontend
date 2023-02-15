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
    <div className="login-wrapper h-screen flex justify-center items-center bg-gray-50">
      <div className="flex flex-col items-center w-80 pt-5 pb-4 shadow rounded-lg bg-white">
        <img src="svg/silage-control-logo.svg" className="w-36 mb-6 mt-4" />
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <label className="mb-4">
            <p>E-Mail-Adresse</p>
            <input className="input input-bordered" type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="mb-6">
            <p>Passwort</p>
            <input className="input input-bordered" type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className="btn btn-primary mb-6" type="submit">
            Einloggen
          </button>
        </form>
      </div>
    </div>
  );
}
