import { Fragment, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

export default function SilageHeapDetails(args: any) {
  const [loading, setLoading] = useState(false);

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
        <div className="flex flex-col container items-center">
          <h1>Silage 3D</h1>
          <iframe title={'title'} src={'/example-silo-data/example_silo_1.html'} width={'800px'} height={'900px'} />
        </div>
      </Fragment>
    );
  }
}

/* async function requestSilageHeap(token: string, organizationId: number) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/contractor/${organizationId}/silage-heap/`, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
} */
