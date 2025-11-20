import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact-section" id="contact">
            <div className="contact-bg"></div>
            <div className="container contact-content">
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
