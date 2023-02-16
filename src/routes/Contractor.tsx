import { Fragment } from 'react';
import { Button, Dropdown, Navbar, Menu } from 'react-daisyui';
import { NavLink, Outlet } from 'react-router-dom';

export default function Contractor(args: any) {
  return (
    <Fragment>
      <div className="flex w-full items-center justify-center gap-2 font-sans">
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
                <Dropdown.Item>Item 1</Dropdown.Item>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="p-0">
              <Menu.Item>
                <NavLink to="/contractor/systems">Systems</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/contractor/silage-heaps">Silos</NavLink>
              </Menu.Item>
            </Menu>
          </Navbar.Center>
          <Navbar.End>
            <Button>Get started</Button>
          </Navbar.End>
        </Navbar>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
}
