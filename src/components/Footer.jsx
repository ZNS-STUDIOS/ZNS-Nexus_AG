import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="container">
                <div className="footer-cta-section">
                    <h2 className="footer-cta-title">
                        Let's Build<br />
                        <span className="text-outline">The Future</span>
                    </h2>
                    <Link to="/contact" className="footer-magnetic-btn">
                        Start Project <ArrowUpRight size={40} />
                    </Link>
                </div>

                <div className="footer-bottom-premium">
                    <div className="footer-brand-large">
                        ZNS NEXUS
                    </div>

                    <div className="footer-links-row">
                        <div className="social-links">
                            <a href="https://www.instagram.com/zns_nexus/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/company/zns-nexus?trk=public_profile_topcard-current-company" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:ZNS.NXS@proton.me">Email</a>
                        </div>
                        <div className="copyright">
                            &copy; 2025 ZNS Nexus
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
