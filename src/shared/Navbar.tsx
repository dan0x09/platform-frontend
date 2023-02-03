/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
    { name: 'Item 01', href: '/' },
    { name: 'Item 02', href: '/' },
];

export default function Navbar() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:py-4">
                        <div className="relative flex items-center justify-between h-16 sm:h-24 lg:h-40">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Öffne das Menü</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <a href="/">
                                        <img
                                            className="block lg:hidden h-12 sm:h-16 w-auto"
                                            src="silage-control-logo.svg"
                                            alt="Silage Control Logo"
                                        />
                                        <img
                                            className="hidden lg:block h-20 w-auto"
                                            src="silage-control-logo.svg"
                                            alt="Silage Control Logo"
                                        />
                                    </a>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-8 lg:space-x-20">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="font-base my-4 sm:text-sm lg:text-base no-underline text-gray-600 hover:text-scgreen"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="mx-2 pt-2 pb-3 space-y-1 shadow-gray-700">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="text-center text-gray-600 block mx-3 my-3 rounded-md text-base no-underline hover:text-scgreen"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
