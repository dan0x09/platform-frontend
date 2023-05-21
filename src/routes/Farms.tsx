import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Farm, Role } from '../types/interfaces';
import { Table } from 'react-daisyui';
import PulseLoader from 'react-spinners/PulseLoader';
import { createSearchParams, useNavigate } from 'react-router-dom';

export default function Farms(args: any) {
  const [loading, setLoading] = useState(true);
  const { token, userTokenPayload } = useAuth();
  const [farms, setFarms] = useState<Farm[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getSilageHeaps() {
      const Response = await requestFarms(token!, userTokenPayload!.role, userTokenPayload!.organizationId);
      const data = (await Response.json()) as Farm[];
      setFarms(data);
      setLoading(false);
    }
    getSilageHeaps();
  }, []);

  const farmsJSX = farms.map((farm) => {
    const { farmId, name, streetAndNumber, city, zipCode } = farm;
    return (
      <Table.Row
        key={farmId}
        onClick={() => {
          navigate(
            {
              pathname: '../silage-heaps',
              search: `?${createSearchParams({ farmId: `${farmId}` })}`,
            },
            { replace: true }
          );
        }}
        className="cursor-pointer"
        hover
      >
        <span>{name}</span>
        <span>{streetAndNumber}</span>
        <span>{city}</span>
        <span>{zipCode}</span>
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
              <span>Betrieb</span>
              <span>Straße</span>
              <span>Stadt</span>
              <span>PLZ</span>
            </Table.Head>
            <Table.Body>{farmsJSX}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export async function requestFarms(token: string, role: Role, organizationId: number) {
  const url = new URL(`${process.env.REACT_APP_BACKEND_URL}/farm`);
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
