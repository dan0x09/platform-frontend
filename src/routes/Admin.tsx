import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin';

export default function Admin(args: any) {
  return (
    <Fragment>
      <NavbarAdmin />
      <div className="farms-wrapper flex justify-center flex-1 shrink-1 overflow-y-auto mt-6">
        <div className="container">
          <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
}
