import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { ContractorSilageHeapWithUrls } from '../types/interfaces';
import { Table } from 'react-daisyui';
import PulseLoader from 'react-spinners/PulseLoader';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export default function SilageHeaps(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const [silageHeaps, setSilageHeaps] = useState<ContractorSilageHeapWithUrls[]>([]);
  const { silageHeapId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getSilageHeaps() {
      const Response = await requestSilageHeaps(token!, userTokenPayload!.organizationId);
      const data = (await Response.json()) as ContractorSilageHeapWithUrls[];
      setSilageHeaps(data);
      setLoading(false);
    }
    getSilageHeaps();
  }, []);

  const silageHeapsJSX = silageHeaps.map((heap) => {
    const { silageHeapId, name, createdAt, updatedAt } = heap.contractorSilageHeaps.silageHeap;
    return (
      <Table.Row
        key={silageHeapId}
        onClick={() => {
          navigate(`${silageHeapId}`);
        }}
        className="cursor-pointer"
      >
        <span>{silageHeapId}</span>
        <span>{name}</span>
        <span>{new Date(createdAt).toLocaleString()}</span>
        <span>{new Date(updatedAt).toLocaleString()}</span>
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
      <div className="silageheaps-wrapper flex justify-center flex-1 shrink-1 overflow-y-auto">
        {silageHeapId && <Outlet />}
        {!silageHeapId && (
          <div className="container">
            <div className="flex flex-col justify-center shadow-xl overflow-x-auto">
              <Table {...args}>
                <Table.Head>
                  <span>ID</span>
                  <span>Name</span>
                  <span>Erstellt</span>
                  <span>Aktualisiert</span>
                </Table.Head>
                <Table.Body>{silageHeapsJSX}</Table.Body>
              </Table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

async function requestSilageHeaps(token: string, organizationId: number) {
  return fetch(`http://localhost:3000/contractor/${organizationId}/silage-heap/`, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
