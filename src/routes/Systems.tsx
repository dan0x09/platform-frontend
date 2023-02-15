import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { System } from '../types/interfaces';

export default function Systems() {
  const { token } = useAuth();
  const [sytems, setSystems] = useState<System[]>([]);

  useEffect(() => {
    async function getSystems() {
      const Response = await requestSilageHeaps(token!);
      const data = (await Response.json()) as System[];
      console.log(data);
      setSystems(data);
    }
    getSystems();
  }, []);

  const systemsJSX = sytems.map((system) => {
    return (
      <tr key={system.systemId}>
        <td>{system.systemId}</td>
        <td>{system.name}</td>
        <td>{system.version}</td>
      </tr>
    );
  });

  return (
    <div className="silageheaps-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>{systemsJSX}</tbody>
      </table>
    </div>
  );
}

async function requestSilageHeaps(token: string) {
  return fetch(`http://localhost:3000/system/`, {
    method: 'GET',
    headers: {
      Authorization: token!,
      'Content-Type': 'application/json',
    },
  });
}
