import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Contractor } from '../types/interfaces';
import { Button, Table } from 'react-daisyui';
import { PulseLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export default function Contractors(args: any) {
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getContractors() {
      setLoading(true);

      const Response = await requestContractors(token!);
      const data = (await Response.json()) as Contractor[];
      setContractors(data);

      setLoading(false);
    }
    getContractors();
  }, []);

  const contractorsJSX = contractors.map((contractor) => {
    return (
      <Table.Row
        key={contractor.contractorId}
        onClick={() => {
          navigate(`${contractor.contractorId}`);
        }}
        className="cursor-pointer"
        hover
      >
        <span>{contractor.name}</span>
        <span>{contractor.streetAndNumber}</span>
        <span>{contractor.zipCode}</span>
        <span>{contractor.city}</span>
        <span>{contractor.country}</span>
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
        <div className="flex flex-row justify-end pb-4">
          <Button variant="outline" onClick={() => navigate('create')}>
            Lohnunternehmen anlegen
          </Button>
        </div>

        <div className="flex flex-col justify-center shadow-xl overflow-x-auto">
          <Table {...args}>
            <Table.Head>
              <span>Name</span>
              <span>Straße und Hausnummer</span>
              <span>PLZ</span>
              <span>Stadt</span>
              <span>Land</span>
            </Table.Head>
            <Table.Body>{contractorsJSX}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

async function requestContractors(token: string) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/contractor`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
