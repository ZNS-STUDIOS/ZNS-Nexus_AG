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
    const triggerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const slides = sectionRef.current.querySelectorAll('.service-slide');

            // Calculate the exact distance to scroll
            const totalWidth = sectionRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const xMovement = -(totalWidth - viewportWidth);

            const pin = gsap.to(sectionRef.current, {
                x: xMovement,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: "+=3000",
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            // Animate individual cards as they enter center
            slides.forEach((slide, i) => {
                if (i === 0) return; // Skip intro slide

                const card = slide.querySelector('.service-card-premium');

                gsap.fromTo(card,
                    { scale: 0.8, opacity: 0.5 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: slide,
                            containerAnimation: pin,
                            start: "left center",
                            end: "right center",
                            toggleActions: "play reverse play reverse",
                            id: `card-${i}`
                        }
                    }
                );
            });
        }, triggerRef);

        // Force a refresh to ensure ScrollTrigger calculates correctly after layout settles
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-wrapper" ref={triggerRef}>
            <PremiumBackground variant="section" particleCount={40} />
            <div className="services-container" ref={sectionRef}>

                {/* Intro Slide */}
                <div className="service-slide intro-slide">
                    <h2 className="section-title">
                        What We<br />
                        <span className="text-gradient">Do Best</span>
                    </h2>
                    <p className="scroll-hint">Scroll to explore <ArrowRight /></p>
                </div>

                {/* Service Slides */}
                {services.map((service, index) => (
                    <div className="service-slide" key={index}>
                        <div className="service-card-premium">
                            <div className="service-icon-large">{service.icon}</div>
                            <h3 className="service-title-large">{service.title}</h3>
                            <p className="service-desc-large">{service.desc}</p>
                            <div className="service-tags">
                                {service.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Services;
