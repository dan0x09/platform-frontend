import { useState, useEffect } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Contractor, Role } from '../types/interfaces';
import { isValidEmailFormat } from '../helpers/formatValidation';
import { Button } from 'react-daisyui';

export default function Invite(args: any) {
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [isSendingInvite, setIsSendingInvite] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>(Role.CONTRACTOR);
  const [organizationId, setOrganizationId] = useState(-1);

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

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (firstName.length === 0) {
      throw new Error('Gib einen Vornamen ein.');
    }

    if (lastName.length === 0) {
      throw new Error('Gib einen Nachnamen ein.');
    }

    if (!isValidEmailFormat(email)) {
      throw new Error('Gib eine valide E-Mail-Adresse ein.');
    }

    if (role !== Role.ADMIN && role !== Role.CONTRACTOR && role !== Role.FARMER) {
      throw new Error('Gib eine valide E-Mail-Adresse ein.');
    }

    if (organizationId === -1) {
      throw new Error('Wähle ein Unternehmen aus.');
    }

    setIsSendingInvite(true);
    await sendUserInviteRequest(token!, firstName, lastName, email, role, Number(organizationId));
    setIsSendingInvite(false);
  }

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

    setEmail(enteredEmail);
  }

  function onRoleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedRole: string = event.currentTarget.value;

    if (selectedRole === Role.ADMIN || selectedRole === Role.CONTRACTOR || selectedRole === Role.FARMER) {
      setRole(selectedRole);
    } else {
      throw new Error('Invalid role');
    }
  }

  if (!contractors) {
    return <span>No data</span>;
  }
  const contractorOptions = mapContractorsToSelectOptions(contractors);

  return (
    <div className="container flex flex-col pb-6">
      <h1 className="self-center font-bold pb-5">Benutzer einladen</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="mb-3">
          <p>Vorname</p>
          <input className="input input-bordered w-80" type="text" onChange={onFirstNameChange} />
        </label>
        <label className="mb-3">
          <p>Nachname</p>
          <input className="input input-bordered w-80" type="text" onChange={onLastNameChange} />
        </label>
        <label className="mb-3">
          <p>E-Mail</p>
          <input className="input input-bordered w-80" type="text" onChange={onEmailChange} />
        </label>
        <label className="mb-3">
          <p>Rolle</p>
          <select className="select select-bordered w-80" onChange={onRoleChange} value={role}>
            <option selected value={Role.CONTRACTOR}>
              Lohnunternehmer
            </option>
            <option value={Role.FARMER} disabled>
              Landwirt
            </option>
          </select>
        </label>
        <label className="mb-5">
          <p>Unternehmen</p>
          <select
            className="select select-bordered w-80"
            value={organizationId}
            onChange={(e) => setOrganizationId(Number(e.target.value))}
          >
            <option value={-1} disabled>
              Unternehmen wählen
            </option>
            {contractorOptions}
          </select>
        </label>
        <Button color="primary" className="w-80" type="submit">
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

function mapContractorsToSelectOptions(contractors: Contractor[]) {
  return contractors.map((contractor) => {
    const { name, contractorId } = contractor;
    return (
      <option key={contractorId} value={contractorId}>
        {name}
      </option>
    );
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
