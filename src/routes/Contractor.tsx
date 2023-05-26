import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarContractor from '../components/NavbarContractor';

export default function Contractor(args: any) {
  return (
    <Fragment>
      <NavbarContractor />
      <div className="flex justify-center flex-1 shrink-1 overflow-y-auto mt-6 px-4">
        <div className="container">
          <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
}
