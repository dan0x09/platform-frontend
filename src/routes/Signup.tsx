import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Signup(args: any) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('t');

  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    sendInviteAcceptRequest(token!, password, firstName, lastName);
  };

  return (
    <div className="login-wrapper h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1>Einladung</h1>
      <form className="flex flex-col items-center mt-3" onSubmit={handleSubmit}>
        <label className="mb-6">
          <p>Passwort</p>
          <input className="input input-bordered" type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className="mb-6">
          <p>Vorname</p>
          <input className="input input-bordered" type="text" onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label className="mb-6">
          <p>Nachname</p>
          <input className="input input-bordered" type="text" onChange={(e) => setLastName(e.target.value)} />
        </label>
        <button className="btn btn-primary mb-6" type="submit">
          Beitreten
        </button>
      </form>
    </div>
  );
}

async function sendInviteAcceptRequest(token: string, password: string, firstName: string, lastName: string) {
  return fetch(`http://localhost:3000/invitation/user/accept`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, password, firstName, lastName }),
  });
}
