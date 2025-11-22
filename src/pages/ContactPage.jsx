import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Send } from 'lucide-react';
import PremiumBackground from '../components/PremiumBackground';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct mailto link with form data
        const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `---\nSent from ZNS Nexus Contact Form`
        );

        // Open email client
        window.location.href = `mailto:ZNS.NXS@proton.me?subject=${subject}&body=${body}`;

        // Optional: Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            {/* CSS Background used for Skale style */}
            <div className="container contact-page-container">
                <div className="contact-header">
                    <h1 className="contact-page-title">Let's Start a <br /><span className="text-gradient">Conversation</span></h1>
                    <p className="contact-page-subtitle">Have a project in mind? We'd love to hear about it.</p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-card">
                        <h3 className="info-title">Contact Details</h3>
                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <span className="info-label">Email</span>
                                <a href="mailto:ZNS.NXS@proton.me" className="info-link">ZNS.NXS@proton.me</a>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <span className="info-label">Phone</span>
                                <a href="tel:+919152365247" className="info-link">+91 91523 65247</a>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <span className="info-label">Office</span>
                                <p className="info-text">Mumbai, Maharashtra</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Send Message <Send size={20} style={{ marginLeft: '10px' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
