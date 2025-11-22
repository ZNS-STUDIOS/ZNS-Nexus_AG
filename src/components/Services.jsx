import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Video, Share2, PenTool, ArrowRight } from 'lucide-react';
import PremiumBackground from './PremiumBackground';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Code size={60} />,
        title: "Web Development",
        desc: "Transform your vision into stunning, high-performance websites. From landing pages to complex web applications.",
        tags: ["React", "Next.js", "WebGL"]
    },
    {
        icon: <Video size={60} />,
        title: "Video Editing",
        desc: "Cinematic storytelling that captures attention. Professional editing for marketing videos and brand films.",
        tags: ["Premiere", "After Effects", "DaVinci"]
    },
    {
        icon: <Share2 size={60} />,
        title: "Social Marketing",
        desc: "Strategic social campaigns that drive real results. Content planning and data-driven growth strategies.",
        tags: ["Strategy", "Content", "Growth"]
    },
    {
        icon: <PenTool size={60} />,
        title: "Content Creation",
        desc: "Compelling content that resonates with your audience. From graphics to copy, we build your brand.",
        tags: ["Copywriting", "Design", "Branding"]
    }
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = document.querySelectorAll('.service-card-premium');
            const totalCards = cards.length;

            cards.forEach((card, i) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top top+=100",
                        end: "bottom top",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                    ease: "none",
                    scale: 1 - (totalCards - i) * 0.05,
                    y: -50,
                    opacity: 1 - (totalCards - i) * 0.1,
                    filter: "brightness(0.5)",
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-section" ref={sectionRef}>
            <PremiumBackground variant="section" particleCount={30} />

            <div className="container services-content">
                <div className="services-header">
                    <h2 className="section-title">
                        Our <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="section-subtitle">
                        We craft digital experiences that leave a lasting impression.
                    </p>
                </div>

                <div className="services-stack-container">
                    {services.map((service, index) => (
                        <div className="service-card-wrapper" key={index} style={{ zIndex: index + 1 }}>
                            <div className="service-card-premium">
                                <div className="card-content">
                                    <div className="service-icon-large">{service.icon}</div>
                                    <h3 className="service-title-large">{service.title}</h3>
                                    <p className="service-desc-large">{service.desc}</p>
                                    <div className="service-tags">
                                        {service.tags.map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-number">0{index + 1}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
