const footerLinks = [
    { name: 'Datenschutz', href: '/privacy' },
    { name: 'Impressum', href: '/imprint' },
];

function Footer() {
    return (
        <div className="flex justify-center mb-4">
            <div className="mx-2 space-x-20">
                <a className="sm:text-base lg:text-sm no-underline text-black">
                    © {new Date().getFullYear()} Kiel. Alle Rechte vorbehalten.
                </a>
                {footerLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="hover:underline font-light sm:text-base lg:text-sm no-underline text-black"
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;
