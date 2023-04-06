import { Fragment, useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { ContractorSilageHeapWithUrls, Farm, Role } from '../types/interfaces';
import { Table } from 'react-daisyui';
import PulseLoader from 'react-spinners/PulseLoader';
import { Outlet, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { requestFarms } from './Farms';

export default function SilageHeaps(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const [silageHeaps, setSilageHeaps] = useState<ContractorSilageHeapWithUrls[]>([]);
  const [farms, setFarms] = useState<Farm[]>([]);
  const { silageHeapId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const farmId = searchParams.get('farmId') ?? 'all';

  const [selectedFarm, setSelectedFarm] = useState(farmId);

  useEffect(() => {
    async function getSilageHeaps() {
      setLoading(true);
      const silageHeapResponse = await requestSilageHeaps(
        token!,
        userTokenPayload!.role,
        userTokenPayload!.organizationId,
        farmId
      );
      const silageHeapdata = (await silageHeapResponse.json()) as ContractorSilageHeapWithUrls[];
      setSilageHeaps(silageHeapdata);
      console.log(silageHeapdata);

      setLoading(false);
    }
    getSilageHeaps();
  }, [selectedFarm]);

  useEffect(() => {
    async function getFarms() {
      const farmResponse = await requestFarms(token!, userTokenPayload!.role, userTokenPayload!.organizationId);
      const farmData = (await farmResponse.json()) as Farm[];
      setFarms(farmData);
    }
    getFarms();
  }, []);

  const silageHeapsJSX =
    userTokenPayload!.role == 'contractor' ? mapContractorSilageHeaps(silageHeaps) : mapSilageHeaps(silageHeaps);

  const farmsJSX = farms.map((farm) => {
    const { name, farmId } = farm;
    return (
      <option key={farmId} value={`${farmId}`}>
        {name}
      </option>
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
      <Fragment>
        {silageHeapId && <Outlet />}
        {!silageHeapId && (
          <div className="container pb-6">
            <select
              className="select select-primary select-bordered mb-3 active:outline-0 focus:outline-0"
              value={farmId}
              onChange={(e) => {
                setSearchParams({ farmId: e.target.value });
                setSelectedFarm(e.target.value);
              }}
            >
              <option selected value="all">
                Alle Betriebe
              </option>
              {farmsJSX}
            </select>
            <div className="flex flex-col justify-center shadow-xl overflow-auto">
              <Table {...args}>
                <Table.Head>
                  <span>ID</span>
                  <span>Name</span>
                  <span>Beschreibung</span>
                  <span>Erstellt</span>
                </Table.Head>
                <Table.Body>{silageHeapsJSX}</Table.Body>
              </Table>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

async function requestSilageHeaps(token: string, role: Role, organizationId: number, farmId?: string) {
  let url: URL;
  if (role == Role.OWNER || role == Role.ADMIN) {
    url = new URL(`${process.env.REACT_APP_BACKEND_URL}/silage-heap`);
  } else {
    url = new URL(`${process.env.REACT_APP_BACKEND_URL}/contractor/${organizationId}/silage-heap`);
  }

  if (farmId && farmId !== 'all') {
    url.searchParams.append('farmId', farmId);
  }

  return fetch(url.href, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}

function mapContractorSilageHeaps(silageHeaps: ContractorSilageHeapWithUrls[]) {
  const navigate = useNavigate();

  return silageHeaps.map((heap) => {
    const { silageHeapId, name, createdAt } = heap.contractorSilageHeaps.silageHeap;
    const { description } = heap.contractorSilageHeaps;
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
        <span>{description || <span className="italic">Keine Beschreibung</span>}</span>
        <span>{new Date(createdAt).toLocaleString()}</span>
      </Table.Row>
    );
  });
}

function mapSilageHeaps(silageHeaps: any) {
  const navigate = useNavigate();

  return silageHeaps.map((heap: any) => {
    const { silageHeapId, name, description, createdAt } = heap.silageHeap;
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
        <span>{description || <span className="italic">Keine Beschreibung</span>}</span>
        <span>{new Date(createdAt).toLocaleString()}</span>
      </Table.Row>
    );
  });
}
