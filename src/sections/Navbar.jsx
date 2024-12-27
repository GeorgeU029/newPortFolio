import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const NavItems = ({ activePage }) => {
    return (
        <ul className="nav-ul flex space-x-4">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a
                        href={href}
                        className={`nav-li_a ${
                            activePage === href ? 'text-green-400 font-bold' : 'text-white'
                        }`}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState('');

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    // Highlight the active section based on scrolling
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const { id, offsetTop, offsetHeight } = section;
                if (scrollY >= offsetTop - 50 && scrollY < offsetTop + offsetHeight) {
                    setActivePage(`#${id}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex justify-between items-center py-4">
                    <a href="#home" className="text-green-300 font-bold text-lg logo">
                        GEORGE
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-300 hover:text-neutral-100 focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>
                    {/* Desktop Navigation */}
                    <nav className="sm:flex hidden">
                        <NavItems activePage={activePage} />
                    </nav>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="p-5 bg-black/80">
                    <NavItems activePage={activePage} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
