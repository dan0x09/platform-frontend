import { Fragment, useState, useEffect } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { useAuth } from '../authentication/AuthProvider';
import { useParams } from 'react-router-dom';
import { ContractorSilageHeapWithSnapshots } from '../types/interfaces';
import { Table } from 'react-daisyui';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function SilageHeapDetails(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const { silageHeapId } = useParams();
  const [silageHeap, setSilageHeap] = useState<ContractorSilageHeapWithSnapshots>();

  useEffect(() => {
    async function getSilageHeapDetails() {
      if (!silageHeapId) return;
      setLoading(true);
      const silageResponse = await requestSilageHeapDetails(token!, userTokenPayload!.organizationId, silageHeapId);
      const silageData = (await silageResponse.json()) as ContractorSilageHeapWithSnapshots;
      setSilageHeap(silageData);
      setLoading(false);
    }
    getSilageHeapDetails();
  }, []);

  const silageSnapshotDataFormatted = silageHeap?.contractorSilageHeaps.silageHeap.silageSnapshots.map((snapshot) => {
    return {
      date: new Date(snapshot.snapshotTimestamp * 1000).toLocaleString(),
      volume: snapshot.volume,
      description: snapshot.description,
      height: snapshot.height,
      snapshotId: snapshot.snapshotId,
    };
  });

  const demoSilageData = [
    {
      silageLeftInPercent: 60,
      daysUntilEmpty: 100,
    },
    {
      silageLeftInPercent: 45,
      daysUntilEmpty: 60,
    },
    {
      silageLeftInPercent: 70,
      daysUntilEmpty: 145,
    },
    {
      silageLeftInPercent: 60,
      daysUntilEmpty: 110,
    },
    {
      silageLeftInPercent: 47,
      daysUntilEmpty: 67,
    },
    {
      silageLeftInPercent: 145,
      daysUntilEmpty: 138,
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center flex-1 shrink-0">
        <div className="flex flex-col justify-center">
          <PulseLoader color="#718351" />
        </div>
      </div>
    );
  } else {
    const harvestFinishedAt = silageHeap?.contractorSilageHeaps.silageHeap.harvestFinishedAt;
    const consumedAt = silageHeap?.contractorSilageHeaps.silageHeap.consumedAt;
    const silageSnapshots = silageHeap?.contractorSilageHeaps.silageHeap.silageSnapshots ?? [];
    return (
      <Fragment>
        <div className="container flex flex-col pb-6">
          <h1 className="self-center font-bold pb-6">{silageHeap?.contractorSilageHeaps.silageHeap.name}</h1>
          <div className="flex flex-row justify-center">
            <div className="md:w-1/2 stats shadow-xl mb-6">
              <div className="stat place-items-center">
                <div className="stat-title">Silage übrig</div>
                <div className="stat-value text-primary">
                  {demoSilageData[Number(silageHeapId) - 1].silageLeftInPercent}%
                </div>
                <div className="stat-desc">({silageSnapshots[silageSnapshots.length - 1]?.volume ?? '0'} cbm)</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Tage bis verbraucht</div>
                <div className="stat-value text-primary">100</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-xl overflow-auto mb-6 rounded-lg">
            <Table {...args} className="text-center">
              <Table.Head>
                <span>Höhe</span>
                <span>Tiefe</span>
                <span>Breite</span>
                <span>Ernte beendet am</span>
                <span>Verbraucht am</span>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <span>{silageSnapshots[silageSnapshots.length - 1]?.height ?? '0'} m</span>
                  <span>{silageHeap?.contractorSilageHeaps.silageHeap.depth} m</span>
                  <span>{silageHeap?.contractorSilageHeaps.silageHeap.width} m</span>
                  <span>
                    {harvestFinishedAt ? (
                      new Date(harvestFinishedAt * 1000).toLocaleString()
                    ) : (
                      <span className="italic">-</span>
                    )}
                  </span>
                  <span>{consumedAt ? new Date(consumedAt).toLocaleString() : <span className="italic">-</span>}</span>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div className="card bg-base-100 shadow-xl rounded-lg">
            <div className="card-body">
              <h2 className="card-title self-center">Volumenverlauf</h2>
              {silageSnapshotDataFormatted && silageSnapshotDataFormatted.length > 0 && (
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={silageSnapshotDataFormatted} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                    <XAxis dataKey="date" label="Datum" />
                    <YAxis type="number" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip formatter={(value) => [`${value} m^3`, 'Volumen']} />
                    <Area type="monotone" dataKey="volume" stroke="#718351" fill="#718351" activeDot={{ r: 8 }} />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              {(!silageSnapshotDataFormatted || silageSnapshotDataFormatted.length < 1) && (
                <span>Es sind bisher keine Volumendaten vorhanden</span>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

async function requestSilageHeapDetails(token: string, organizationId: number, silageHeapId: string) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/contractor/${organizationId}/silage-heap/${silageHeapId}`, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
