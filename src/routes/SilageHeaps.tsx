import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { SilageHeapWithUrls } from '../types/interfaces';
import { Table } from 'react-daisyui';

export default function SilageHeaps(args: any) {
  const { token, userTokenPayload } = useAuth();
  const [silageHeaps, setSilageHeaps] = useState<SilageHeapWithUrls[]>([]);

  useEffect(() => {
    async function getSilageHeaps() {
      const Response = await requestSilageHeaps(token!, userTokenPayload!.uid);
      const data = (await Response.json()) as SilageHeapWithUrls[];
      setSilageHeaps(data);
    }
    getSilageHeaps();
  }, []);

  const silageHeapsJSX = silageHeaps.map((heap) => {
    return (
      <Table.Row key={heap.silageHeap.silageHeapId}>
        <span>{heap.silageHeap.silageHeapId}</span>
        <span>{new Date(heap.silageHeap.createdAt).toLocaleString()}</span>
        <span>{new Date(heap.silageHeap.updatedAt).toLocaleString()}</span>
      </Table.Row>
    );
  });

  return (
    <div className="silageheaps-wrapper">
      <Table {...args}>
        <Table.Head>
          <span>ID</span>
          <span>Erstellt</span>
          <span>Aktualisiert</span>
        </Table.Head>
        <Table.Body>{silageHeapsJSX}</Table.Body>
      </Table>
    </div>
  );
}

async function requestSilageHeaps(token: string, contractorId: number) {
  return fetch(`http://localhost:3000/contractor/${contractorId}/silage-heap/`, {
    method: 'GET',
    headers: {
      Authorization: token!,
      'Content-Type': 'application/json',
    },
  });
}
