import { Button, Dropdown, Navbar, Menu } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../authentication/AuthProvider';

export default function NavbarContractor(args: any) {
  const { onLogout } = useAuth();

  return (
    <div className="flex w-full items-center justify-center gap-2 shrink-0">
      <Navbar>
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
                <NavLink to="/contractor/farms">Betriebe</NavLink>
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
              <NavLink to="/contractor/farms">Betriebe</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/contractor/silage-heaps">Silagehaufen</NavLink>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <Button color="secondary" onClick={() => onLogout()}>
            Ausloggen
          </Button>
        </Navbar.End>
      </Navbar>
    </div>
  );
}
