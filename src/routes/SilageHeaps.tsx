import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';

interface SilageHeap {
  silageHeap: {
    silageHeapId: number;
    systemId: number;
    volume: null;
    gpsLocation: string;
    name: string;
    plantTypes: string; // types devided by ", "
    volumeModelPath: string;
    volumeMapPath: string;
    interactiveVolumeModelPath: string;
    filledUpAt: string | null;
    emptiedAt: string | null;
    createdAt: string; // iso8601 date
    updatedAt: string; // iso8601 date, possibly null?
  };
  urls: {
    volumeMap: string; // url
    volumeModel: string; // url
    interactiveVolumeModel: string; //url
  };
}

export default function SilageHeaps() {
  const { token } = useAuth();
  const [silageHeaps, setSilageHeaps] = useState<SilageHeap[]>([]);

  useEffect(() => {
    async function getSilageHeaps() {
      const Response = await requestSilageHeaps(token!);
      const data = (await Response.json()) as SilageHeap[];
      setSilageHeaps(data);
    }
    getSilageHeaps();
  }, []);

  const silageHeapsJSX = silageHeaps.map((heap) => {
    return (
      <tr key={heap.silageHeap.silageHeapId}>
        <td>{heap.silageHeap.silageHeapId}</td>
        <td>{new Date(heap.silageHeap.createdAt).toLocaleString()}</td>
        <td>{new Date(heap.silageHeap.updatedAt).toLocaleString()}</td>
      </tr>
    );
  });

  return (
    <div className="silageheaps-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Erstellt</th>
            <th>Aktualisiert</th>
          </tr>
        </thead>
        <tbody>{silageHeapsJSX}</tbody>
      </table>
    </div>
  );
}

async function requestSilageHeaps(token: string) {
  return fetch('http://localhost:3000/silage-heap', {
    method: 'GET',
    headers: {
      Authorization: token!,
      'Content-Type': 'application/json',
    },
  });
}
