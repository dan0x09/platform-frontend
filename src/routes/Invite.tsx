import { useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Role } from '../types/interfaces';
import { isValidEmailFormat } from '../helpers/formatValidation';

export default function Invite(args: any) {
  const { token } = useAuth();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>(Role.ADMIN);
  const [organizationId, setOrganizationId] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    sendUserInviteRequest(token!, email, role, Number(organizationId));
  };

  async function sendUserInviteRequest(token: string, email: string, role: Role, organizationId: number) {
    return fetch(`http://localhost:3000/invitation/user/`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, role, organizationId }),
    });
  }

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const enteredEmail = event.currentTarget.value;

    if (isValidEmailFormat(enteredEmail)) {
      setEmail(enteredEmail);
    } else {
      throw new Error('Invalid email');
    }
  }

  function onRoleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedRole: string = event.currentTarget.value;

    if (selectedRole === Role.ADMIN || selectedRole === Role.CONTRACTOR || selectedRole === Role.FARMER) {
      setRole(selectedRole);
    } else {
      throw new Error('Invalid role');
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Invite User</h1>
      <form className="flex flex-col items-center mt-3" onSubmit={handleSubmit}>
        <label className="mb-4">
          <p>E-Mail</p>
          <input className="input input-bordered" type="text" onChange={onEmailChange} />
        </label>
        <label className="mb-6">
          <p>Rolle</p>
          <select className="select select-bordered" onChange={onRoleChange} value={role}>
            <option selected value={Role.ADMIN}>
              Admin
            </option>
            <option value={Role.CONTRACTOR}>Lohnarbeiter</option>
            <option value={Role.FARMER}>Landwirt</option>
          </select>
        </label>
        <label className="mb-6">
          <p>Betrieb</p>
          <input className="input input-bordered" type="text" onChange={(e) => setOrganizationId(e.target.value)} />
        </label>
        <button className="btn btn-primary mb-6" type="submit">
          Invite
        </button>
      </form>
    </div>
  );
}
