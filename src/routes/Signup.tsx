import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { UserTokenPayload } from '../types/interfaces';
import { Button } from 'react-daisyui';

export default function Signup(args: any) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('t');
  const navigate = useNavigate();

  const [isSendingInviteAcceptRequest, setIsSendingInviteAcceptRequest] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token) as ({ email: string } & UserTokenPayload) | null;

      if (!decodedToken) {
        navigate('/login');
      } else {
        setEmail(decodedToken.email);
      }
    }
  }, [token]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    setIsSendingInviteAcceptRequest(true);
    const response = await sendInviteAcceptRequest(token!, password);
    setIsSendingInviteAcceptRequest(false);

    if (response.ok) {
      navigate('/login');
    }
  }

  return (
    <div className="login-wrapper h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1>Einladung</h1>
      <form className="flex flex-col items-center mt-3" onSubmit={handleSubmit}>
        <label className="mb-3">
          <p>E-Mail-Adresse</p>
          <input className="input input-bordered" type="text" readOnly disabled value={email} />
        </label>
        <label className="mb-5">
          <p>Passwort</p>
          <input className="input input-bordered" type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <Button color="primary" className={`mb-6 ${isSendingInviteAcceptRequest ? 'loading' : ''}`} type="submit">
          Beitreten
        </Button>
      </form>
    </div>
  );
}

async function sendInviteAcceptRequest(token: string, password: string) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/invitation/user/accept`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, password }),
  });
}
