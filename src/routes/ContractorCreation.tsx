import { useState } from 'react';
import { useAuth } from '../authentication/AuthProvider';
import { Contractor } from '../types/interfaces';
import { Button } from 'react-daisyui';

export default function ContractorCreation(args: any) {
  const [isCreatingContractor, setIsCreatingContractor] = useState(false);
  const { token } = useAuth();

  const [name, setName] = useState('');
  const [streetAndNumber, setStreetAndNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('Deutschland');

  async function handleSubmit(e: any) {
    e.preventDefault();

    setIsCreatingContractor(true);
    await postContractor(token!, { name, streetAndNumber, zipCode, city, country });
    setIsCreatingContractor(false);
  }

  return (
    <div className="container flex flex-col pb-6">
      <h1 className="self-center font-bold pb-5">Lohnunternehmen anlegen</h1>
      <div className="flex flex-col">
        <form className="flex flex-col items-center mt-3" onSubmit={handleSubmit}>
          <label className="mb-3">
            <p>Name</p>
            <input
              type="text"
              placeholder="Lohnunternehmer GmbH"
              className="input input-bordered w-80"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="mb-3">
            <p>Straße und Hausnummer</p>
            <input
              type="text"
              placeholder="Musterweg 12"
              className="input input-bordered w-80"
              value={streetAndNumber}
              onChange={(e) => setStreetAndNumber(e.target.value)}
            />
          </label>
          <label className="mb-3">
            <p>PLZ</p>
            <input
              type="text"
              placeholder="12345"
              className="input input-bordered w-80"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </label>
          <label className="mb-3">
            <p>Stadt</p>
            <input
              type="text"
              placeholder="Musterstadt"
              className="input input-bordered w-80"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label className="mb-5">
            <p>Land</p>
            <input
              type="text"
              placeholder="Musterland"
              className="input input-bordered w-80"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
          <Button type="submit" className={`w-80 ${isCreatingContractor ? 'loading' : ''}`}>
            Erstellen
          </Button>
        </form>
      </div>
    </div>
  );
}

async function postContractor(token: string, contractorData: Omit<Contractor, 'contractorId'>) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/contractor`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contractorData),
  });
}
