"use client";

import Link from 'next/link';
import Button from '../ui/Button';

const Header = () => {
    return (
        <header>
            {/* Logo */}
            <div className="logo">
                <Link href="/" className="link_logo">
                    1601
                </Link>
            </div>

            {/* Navigation - centered */}
            <nav className="navigation">
                <ul className="nav-list">
                    <li>
                        <Link href="/" className="link">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="link">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/projets" className="link">
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="/methode" className="link">
                            Méthode
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Button container */}
            <div className="button-container">
                <Button>Prendre un rendez-vous</Button>
            </div>

            <style jsx>{`
                header {
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    background-color: white;
                }

                .logo {
                    font-family: var(--jakarta);
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: var(--primary-color);
                }

                .navigation {
                    grid-column: 2;
                    justify-self: center;
                }

                .nav-list {
                    font-family: var(--jakarta);
                    font-weight: 500;
                    display: flex;
                    list-style: none;
                    color: var(--black-color);
                    margin: 0;
                    padding: 0;
                }

                .nav-list li {
                    margin-left: 1.5rem;
                }

                .nav-list li:first-child {
                    margin-left: 0;
                }

                .button-container {
                    grid-column: 3;
                    justify-self: end;
                }

                :global(.link) {
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                :global(.link:hover) {
                    color: var(--primary-color);
                }
            `}</style>
        </header>
    );
};

export default Header;