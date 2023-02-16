import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { ContractorSilageHeapWithUrls } from '../types/interfaces';
import { Table } from 'react-daisyui';
import PulseLoader from 'react-spinners/PulseLoader';

export default function SilageHeaps(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const [silageHeaps, setSilageHeaps] = useState<ContractorSilageHeapWithUrls[]>([]);

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
    return (
      <Table.Row key={heap.contractorSilageHeaps.silageHeap.silageHeapId}>
        <span>{heap.contractorSilageHeaps.silageHeap.silageHeapId}</span>
        <span>{heap.contractorSilageHeaps.silageHeap.name}</span>
        <span>{new Date(heap.contractorSilageHeaps.silageHeap.createdAt).toLocaleString()}</span>
        <span>{new Date(heap.contractorSilageHeaps.silageHeap.updatedAt).toLocaleString()}</span>
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
      <div className="silageheaps-wrapper flex justify-center flex-1 shrink-0">
        <div className="overflow-y-auto">
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
