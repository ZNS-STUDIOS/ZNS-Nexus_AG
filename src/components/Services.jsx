import React, { useState } from 'react';
import { Code, Video, Share2, PenTool, ChevronDown } from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 1,
        icon: <Code size={40} />,
        title: "Web Development",
        desc: "Transform your vision into stunning, high-performance websites. From landing pages to complex web applications.",
        tags: ["React", "Next.js", "WebGL"],
        details: "We build modern, responsive websites using cutting-edge technologies. Our development process ensures fast loading times, SEO optimization, and seamless user experiences across all devices."
    },
    {
        id: 2,
        icon: <Video size={40} />,
        title: "Video Editing",
        desc: "Cinematic storytelling that captures attention. Professional editing for marketing videos and brand films.",
        tags: ["Premiere", "After Effects", "DaVinci"],
        details: "From concept to final cut, we create compelling video content that tells your story. Our team specializes in color grading, motion graphics, and sound design to deliver broadcast-quality results."
    },
    {
        id: 3,
        icon: <Share2 size={40} />,
        title: "Social Marketing",
        desc: "Strategic social campaigns that drive real results. Content planning and data-driven growth strategies.",
        tags: ["Strategy", "Content", "Growth"],
        details: "We develop comprehensive social media strategies tailored to your brand. Our data-driven approach ensures maximum engagement and ROI across all major platforms."
    },
    {
        id: 4,
        icon: <PenTool size={40} />,
        title: "Content Creation",
        desc: "Compelling content that resonates with your audience. From graphics to copy, we build your brand.",
        tags: ["Copywriting", "Design", "Branding"],
        details: "Our creative team crafts unique content that speaks to your audience. We handle everything from brand identity to marketing materials, ensuring consistency across all touchpoints."
    }
];

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const toggleService = (id) => {
        setActiveService(activeService === id ? null : id);
    };

    return (
        <section className="services-section-accordion">
            <div className="container services-content">
                <div className="services-header">
                    <h2 className="section-title">
                        Our <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="section-subtitle">
                        We craft digital experiences that leave a lasting impression.
                    </p>
                </div>

                <div className="services-accordion">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`accordion-item ${activeService === service.id ? 'active' : ''}`}
                        >
                            <button
                                className="accordion-header"
                                onClick={() => toggleService(service.id)}
                                aria-expanded={activeService === service.id}
                            >
                                <div className="accordion-header-content">
                                    <div className="service-icon-accent">{service.icon}</div>
                                    <div className="service-header-text">
                                        <h3 className="service-title-accordion">{service.title}</h3>
                                        <p className="service-desc-short">{service.desc}</p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`accordion-chevron ${activeService === service.id ? 'rotated' : ''}`}
                                    size={24}
                                />
                            </button>

                            <div className={`accordion-content ${activeService === service.id ? 'expanded' : ''}`}>
                                <div className="accordion-content-inner">
                                    <p className="service-details">{service.details}</p>
                                    <div className="service-tags">
                                        {service.tags.map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
