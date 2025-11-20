import React from 'react';
import { ShieldCheck, Heart, Layers } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
    {
        icon: <ShieldCheck size={40} />,
        title: "Premium Quality, Fair Pricing",
        desc: "Get the best without breaking the bank."
    },
    {
        icon: <Heart size={40} />,
        title: "Relationship-First Approach",
        desc: "You're not just a project number."
    },
    {
        icon: <Layers size={40} />,
        title: "End-to-End Solutions",
        desc: "One partner for all your digital needs."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section why-us-section" id="why-us">
            <div className="container">
                <h2 className="section-title">The ZNS Difference</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
