import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { System } from '../types/interfaces';
import { Table } from 'react-daisyui';
import { PulseLoader } from 'react-spinners';

export default function Systems(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const [sytems, setSystems] = useState<System[]>([]);

  useEffect(() => {
    async function getSystems() {
      const Response = await requestSystems(token!, userTokenPayload!.organizationId);
      const data = (await Response.json()) as System[];
      setSystems(data);
      setLoading(false);
    }
    getSystems();
  }, []);

  const systemsJSX = sytems.map((system) => {
    return (
      <Table.Row key={system.systemId}>
        <span>{system.systemId}</span>
        <span>{system.name}</span>
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
      <div className="flex justify-center flex-1 shrink-0">
        <div className="overflow-y-auto">
          <Table {...args}>
            <Table.Head>
              <span>ID</span>
              <span>Name</span>
              <span>Version</span>
            </Table.Head>
            <Table.Body>{systemsJSX}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

async function requestSystems(token: string, organizationId: number) {
  const url = new URL('http://localhost:3000/system');
  url.searchParams.append('contractorId', `${organizationId}`);

  return fetch(url.href, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
