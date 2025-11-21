import React from 'react';
import { ArrowRight } from 'lucide-react';
import PremiumBackground from './PremiumBackground';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <PremiumBackground variant="section" particleCount={30} />
            <div className="contact-container container">
                <h2 className="contact-title">Ready to Build Something Great?</h2>
                <p className="contact-subtitle">Let's discuss your project and explore how we can help you grow.</p>
                <a href="mailto:hello@znsnexus.com" className="btn btn-primary btn-lg">
                    Get in Touch
                    <ArrowRight size={24} style={{ marginLeft: '12px' }} />
                </a>
            </div>
        </section>
    );
};

export default Contact;
