import { useState, useEffect } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Contractor, Role } from '../types/interfaces';
import { isValidEmailFormat } from '../helpers/formatValidation';
import { Button } from 'react-daisyui';

export default function Invite(args: any) {
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();
  const [contractors, setContractors] = useState<Contractor[]>([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>(Role.ADMIN);
  const [organizationId, setOrganizationId] = useState('');

  useEffect(() => {
    async function getContractors() {
      setIsLoading(true);

      const Response = await requestContractors(token!);
      const data = (await Response.json()) as Contractor[];
      setContractors(data);

      setIsLoading(false);
    }
    getContractors();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    sendUserInviteRequest(token!, firstName, lastName, email, role, Number(organizationId));
  };

  function onFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const enteredFirstName = event.currentTarget.value;

    setFirstName(enteredFirstName);
  }

  function onLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const enteredLastName = event.currentTarget.value;

    setLastName(enteredLastName);
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
      <form className="flex flex-col items-center mt-5" onSubmit={handleSubmit}>
        <label className="mb-4">
          <p>Vorname</p>
          <input className="input input-bordered w-80" type="text" onChange={onFirstNameChange} />
        </label>
        <label className="mb-4">
          <p>Nachname</p>
          <input className="input input-bordered w-80" type="text" onChange={onLastNameChange} />
        </label>
        <label className="mb-4">
          <p>E-Mail</p>
          <input className="input input-bordered w-80" type="text" onChange={onEmailChange} />
        </label>
        <label className="mb-6">
          <p>Unternehmen</p>
          <input
            className="input input-bordered w-80"
            type="text"
            onChange={(e) => setOrganizationId(e.target.value)}
          />
        </label>
        <label className="mb-6">
          <p>Rolle</p>
          <select className="select select-bordered w-80" onChange={onRoleChange} value={role}>
            <option selected value={Role.CONTRACTOR}>
              Lohnarbeiter
            </option>
            <option value={Role.FARMER} disabled>
              Landwirt
            </option>
          </select>
        </label>
        <Button color="primary" className="mb-6 w-80" type="submit">
          Invite
        </Button>
      </form>
    </div>
  );
}

async function sendUserInviteRequest(
  token: string,
  firstName: string,
  lastName: string,
  email: string,
  role: Role,
  organizationId: number
) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/invitation/user/`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, role, organizationId }),
  });
}

async function requestContractors(token: string) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/contractor`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
