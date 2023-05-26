import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Role, System } from '../types/interfaces';
import { Button, Table } from 'react-daisyui';
import { PulseLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export default function Systems(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const [systems, setSystems] = useState<System[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSystems() {
      setLoading(true);

      const Response = await requestSystems(token!, userTokenPayload!.role, userTokenPayload!.organizationId);
      const data = (await Response.json()) as System[];
      setSystems(data);

      setLoading(false);
    }
    getSystems();
  }, []);

  const systemsJSX = systems.map((system) => {
    return (
      <Table.Row
        key={system.systemId}
        onClick={() => {
          navigate(`${system.systemId}`);
        }}
        className="cursor-pointer"
        hover
      >
        <span>{system.name}</span>
        <span>{system.description || <span className="italic">Keine Beschreibung</span>}</span>
        <span>{system.version}</span>
      </Table.Row>
    );
  });

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
      <div className="container pb-6">
        <div className="flex flex-row justify-end pb-4">
          <Button variant="outline" onClick={() => navigate('create')}>
            System anlegen
          </Button>
        </div>

        <div className="flex flex-col justify-center shadow-xl overflow-x-auto">
          <Table {...args}>
            <Table.Head>
              <span>Name</span>
              <span>Beschreibung</span>
              <span>Version</span>
            </Table.Head>
            <Table.Body>{systemsJSX}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

async function requestSystems(token: string, role: Role, organizationId: number) {
  const url = new URL(`${process.env.REACT_APP_BACKEND_URL}/system`);

  if (role === Role.CONTRACTOR) {
    url.searchParams.append('contractorId', `${organizationId}`);
  }

  return fetch(url.href, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
