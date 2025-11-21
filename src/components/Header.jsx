import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'Process', href: '/#process' },
        { name: 'Why Us', href: '/#why-us' },
        { name: 'FAQ', href: '/#faq' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    ZNS <span>Nexus</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <Link
                    to="/contact"
                    className="btn btn-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Get in Touch
                </Link>
            </div>
        </header>
    );
};

export default Header;
