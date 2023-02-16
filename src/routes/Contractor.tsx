import { Fragment } from 'react';
import { Button, Dropdown, Navbar, Menu } from 'react-daisyui';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../authentication/AuthProvider';

export default function Contractor(args: any) {
  const { onLogout } = useAuth();

  return (
    <Fragment>
      <div className="flex w-full items-center justify-center gap-2 mb-6 shrink-0">
        <Navbar {...args}>
          <Navbar.Start>
            <Dropdown>
              <Button color="ghost" tabIndex={0} className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </Button>
              <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
                <li>
                  <NavLink to="/contractor/systems">Systeme</NavLink>
                </li>
                <li>
                  <NavLink to="/contractor/silage-heaps">Silagehaufen</NavLink>
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="p-0">
              <Menu.Item>
                <NavLink to="/contractor/systems">Systeme</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/contractor/silage-heaps">Silagehaufen</NavLink>
              </Menu.Item>
            </Menu>
          </Navbar.Center>
          <Navbar.End>
            <Button {...args} onClick={() => onLogout()}>
              Ausloggen
            </Button>
          </Navbar.End>
        </Navbar>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
}
