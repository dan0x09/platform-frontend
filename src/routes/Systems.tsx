import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Role, System } from '../types/interfaces';
import { Table } from 'react-daisyui';
import { PulseLoader } from 'react-spinners';

export default function Systems(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const [systems, setSystems] = useState<System[]>([]);

  useEffect(() => {
    async function getSystems() {
      const Response = await requestSystems(token!, userTokenPayload!.role, userTokenPayload!.organizationId);

      const data = (await Response.json()) as System[];
      setSystems(data);
      setLoading(false);
    }
    getSystems();
  }, []);

  const systemsJSX = systems.map((system) => {
    return (
      <Table.Row key={system.systemId}>
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
