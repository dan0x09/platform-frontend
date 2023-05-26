import { Button, Dropdown, Navbar, Menu } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../authentication/AuthProvider';
import { useEffect, useState } from 'react';
import { Contractor, User } from '../types/interfaces';

export default function NavbarContractor(args: any) {
  const { onLogout, userTokenPayload, token } = useAuth();
  const [user, setUser] = useState<User>();
  const [organization, setOrganization] = useState<Contractor>();

  useEffect(() => {
    async function getUser() {
      const Response = await requestUser(token!, userTokenPayload!.uid);
      const data = (await Response.json()) as User;
      setUser(data);
    }
    async function getOrganization() {
      const Response = await requestContractor(token!, userTokenPayload!.organizationId);
      const data = (await Response.json()) as Contractor;
      setOrganization(data);
    }
    getUser();
    getOrganization();
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-2 shrink-0">
      <Navbar className="px-4 py-2 shadow-md">
        <img src="/svg/silage-control-logo.svg" className="hidden lg:flex w-20" />
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
                <NavLink to="/contractor/silage-heaps">Silagen</NavLink>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Start>
        <Navbar.Center className="">
          <img src="/svg/silage-control-logo.svg" className="lg:hidden w-20" />
          <Menu horizontal className="p-0 hidden lg:flex">
            <Menu.Item>
              <NavLink to="/contractor/farms">Betriebe</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/contractor/silage-heaps">Silagen</NavLink>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <Dropdown vertical="end">
            <Button className="avatar placeholder" color="secondary" shape="circle">
              <div className="rounded-full">
                <span className="font-medium !text-gray-100 text-lg">
                  {user?.firstName[0]}
                  {user?.lastName[0]}
                </span>
              </div>
            </Button>
            <Dropdown.Menu className="w-52 menu-compact">
              <li className="menu-title !opacity-90">
                <span className="text-sm">
                  {user?.firstName} {user?.lastName}
                </span>
                <span className="text-xs !opacity-70">{organization?.name}</span>
              </li>
              <li className="menu-title mt-1">
                <hr className="!rounded-none"></hr>
              </li>
              <Dropdown.Item onClick={onLogout}>Ausloggen</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>
    </div>
  );
}

async function requestUser(token: string, userId: number) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/user/${userId}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}

async function requestContractor(token: string, organizationId: number) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/contractor/${organizationId}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
