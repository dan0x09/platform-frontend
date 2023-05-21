import { useState, useEffect } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useAuth } from '../authentication/AuthProvider';
import { useParams } from 'react-router-dom';
import { Contractor, System } from '../types/interfaces';
import { Table } from 'react-daisyui';

export default function SystemDetails(args: any) {
  const [loading, setLoading] = useState(true);
  const [isLoadingSystemToken, setIsLoadingSystemToken] = useState(false);
  const { token } = useAuth();
  const { systemId } = useParams();
  const [system, setSystem] = useState<System>();
  const [contractor, setContractor] = useState<Contractor>();

  const [systemToken, setSystemToken] = useState<string>();

  useEffect(() => {
    async function getSystemAndContractor() {
      if (!systemId) return;

      setLoading(true);

      const systemResponse = await requestSystem(token!, Number(systemId));
      const systemData = (await systemResponse.json()) as System;
      setSystem(systemData);

      const contractorResponse = await requestContractor(token!, Number(systemData.contractorId));
      const contractorData = (await contractorResponse.json()) as Contractor;
      setContractor(contractorData);

      setLoading(false);
    }
    getSystemAndContractor();
  }, []);

  async function requestAndDisplaySystemToken(event: any) {
    if (!systemId) return;

    setIsLoadingSystemToken(true);

    const systemTokenResponse = await requestTokenForSystem(token!, Number(systemId));
    const systemTokenData = (await systemTokenResponse.json()) as { token: string };
    setSystemToken(systemTokenData.token);

    setIsLoadingSystemToken(false);
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
    return (
      <div className="container flex flex-col pb-6">
        <h1 className="self-center font-bold pb-6">System-Details</h1>
        <div className="flex flex-col justify-center shadow-xl overflow-auto mb-6 rounded-lg">
          <Table {...args} className="text-center">
            <Table.Head>
              <span>Systemname</span>
              <span>Unternehmen</span>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <span>{system?.name}</span>
                <span>{contractor?.name}</span>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <button
          className={`btn btn-primary mb-6 ${isLoadingSystemToken ? 'loading' : ''}`}
          type="button"
          disabled={isLoadingSystemToken}
          onClick={requestAndDisplaySystemToken}
        >
          Schlüssel generieren
        </button>
        {systemToken && <textarea className="textarea textarea-bordered" value={systemToken} readOnly={true} />}
      </div>
    );
  }
}

async function requestSystem(token: string, systemId: number) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/system/${systemId}`, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}

async function requestContractor(token: string, contractorId: number) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/contractor/${contractorId}`, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}

async function requestTokenForSystem(token: string, systemId: number) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/system/${systemId}/generate-token`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
