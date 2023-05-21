import { useState, useEffect } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useAuth } from '../authentication/AuthProvider';
import { Contractor } from '../types/interfaces';
import { Button } from 'react-daisyui';

export default function SystemCreation(args: any) {
  const [loading, setLoading] = useState(true);
  const [isCreatingSystem, setIsCreatingSystem] = useState(false);
  const { token } = useAuth();
  const [contractors, setContractors] = useState<Contractor[]>();

  const [systemName, setSystemName] = useState('');
  const [contractorId, setContractorId] = useState<number>(-1);

  useEffect(() => {
    async function getContractors() {
      setLoading(true);

      const contractorResponse = await requestContractors(token!);
      const contractorData = (await contractorResponse.json()) as Contractor[];
      setContractors(contractorData);

      setLoading(false);
    }
    getContractors();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!contractorId || contractorId === -1) return;

    setIsCreatingSystem(true);
    await postSystem(token!, contractorId, systemName);
    setIsCreatingSystem(false);
  }

  if (loading) {
    return (
      <div className="flex justify-center flex-1 shrink-0">
        <div className="flex flex-col justify-center">
          <PulseLoader color="#718351" />
        </div>
      </div>
    );
  } else {
    if (!contractors) {
      return <span>No data</span>;
    }
    const contractorOptions = mapContractorsToSelectOptions(contractors);
    return (
      <div className="container flex flex-col pb-6">
        <h1 className="self-center font-bold pb-6">System anlegen</h1>
        <div className="flex flex-col">
          <form className="flex flex-col items-center mt-3" onSubmit={handleSubmit}>
            <label>
              <p>Systemname</p>
              <input
                type="text"
                placeholder="System 1"
                className="input mb-3 w-80"
                value={systemName}
                onChange={(e) => setSystemName(e.target.value)}
              />
            </label>
            <label>
              <p>Lohnunternehmen</p>
              <select
                className="select mb-5 w-80"
                value={contractorId}
                onChange={(e) => setContractorId(Number(e.target.value))}
              >
                <option value={-1} disabled>
                  Unternehmen wählen
                </option>
                {contractorOptions}
              </select>
            </label>
            <Button type="submit" className={`w-80 ${isCreatingSystem ? 'loading' : ''}`}>
              Erstellen
            </Button>
          </form>
        </div>
      </div>
    );
  }
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
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/contractor`, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}

async function postSystem(token: string, contractorId: number, name: string) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/system`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contractorId, name }),
  });
}
