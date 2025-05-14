import React from 'react';
import Link from 'next/link';

const Header = () => {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/experience', label: 'Experience' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
      ];
    return (
        <header className="flex justify-center items-center p-4">
            <nav>
                <ul className="flex space-x-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-gray-400">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;