import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import PremiumBackground from './PremiumBackground';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial Reveal
        tl.from(".hero-node", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "elastic.out(1, 0.5)"
        })
            .from(".connection-line", {
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=1")
            .from(".hero-title-text", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.5");

        // Mouse Interaction for Line
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate intensity based on distance from center
            const x = (clientX - innerWidth / 2) / 15;
            const y = (clientY - innerHeight / 2) / 15;

            // Update SVG path with quadratic bezier curve
            if (lineRef.current) {
                gsap.to(lineRef.current, {
                    attr: { d: `M10,50 Q${150 + x},${50 + y} 290,50` },
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero-section" id="home" ref={heroRef}>
            <PremiumBackground variant="hero" />
            <div className="hero-container container">

                {/* Nexus Line Visualization - Premium & Minimal */}
                <div className="nexus-wrapper">
                    <div className="nexus-line-container">
                        <div className="nexus-line"></div>
                        <div className="nexus-dot-start"></div>
                        <div className="nexus-dot-end"></div>
                        <div className="nexus-badge">
                            <span className="nexus-text">Connecting Dots</span>
                        </div>
                    </div>
                </div>

                {/* Text Content - Bottom Part */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        <div className="hero-line">
                            <span className="hero-title-text">The</span>{' '}
                            <span className="hero-title-text">Bridge</span>{' '}
                            <span className="hero-title-text">Between</span>
                        </div>
                        <div className="hero-line">
                            <span className="hero-title-text text-gradient">Ambition</span>{' '}
                            <span className="hero-title-text">&</span>{' '}
                            <span className="hero-title-text text-gradient">Execution</span>
                        </div>
                    </h1>

                    <div className="hero-cta-wrapper">
                        <a href="#contact" className="btn btn-primary">
                            Get Matched
                            <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
