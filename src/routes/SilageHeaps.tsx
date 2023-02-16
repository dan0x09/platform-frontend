import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { ContractorSilageHeapWithUrls } from '../types/interfaces';
import { Table } from 'react-daisyui';

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
    return <h1 className="Loading Silage Heaps..."></h1>;
  } else {
    return (
      <div className="silageheaps-wrapper">
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
