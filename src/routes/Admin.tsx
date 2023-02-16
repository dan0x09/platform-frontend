import { useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';

export default function Admin(args: any) {
  const { token } = useAuth();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [organizationId, setOrganizationId] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    sendUserInviteRequest(token!, email, role, Number(organizationId));
  };

  return (
    <div className="login-wrapper h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1>Invite User</h1>
      <form className="flex flex-col items-center mt-3" onSubmit={handleSubmit}>
        <label className="mb-4">
          <p>E-Mail</p>
          <input className="input input-bordered" type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="mb-6">
          <p>Role</p>
          <input className="input input-bordered" type="text" onChange={(e) => setRole(e.target.value)} />
        </label>
        <label className="mb-6">
          <p>Organization Id</p>
          <input className="input input-bordered" type="text" onChange={(e) => setOrganizationId(e.target.value)} />
        </label>
        <button className="btn btn-primary mb-6" type="submit">
          Invite
        </button>
      </form>
    </div>
  );
}

async function sendUserInviteRequest(token: string, email: string, role: string, organizationId: number) {
  return fetch(`http://localhost:3000/invitation/user/`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, role, organizationId }),
  });
}
