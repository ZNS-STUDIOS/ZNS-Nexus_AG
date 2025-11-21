import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PremiumBackground from './PremiumBackground';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        id: "01",
        title: "Discovery",
        desc: "We dive deep into your goals, audience, and vision. No assumptions, just data-driven insights."
    },
    {
        id: "02",
        title: "Strategy",
        desc: "We build a roadmap that aligns design with business objectives. Every pixel has a purpose."
    },
    {
        id: "03",
        title: "Design",
        desc: "We craft visual experiences that captivate. Bold typography, immersive layouts, and premium aesthetics."
    },
    {
        id: "04",
        title: "Development",
        desc: "We bring the vision to life with clean, performant code. Smooth animations and flawless responsiveness."
    }
];

const Process = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const steps = sectionRef.current.querySelectorAll('.process-step-new');

        steps.forEach((step, index) => {
            gsap.fromTo(step,
                { opacity: 0.2, scale: 0.95, filter: "blur(5px)" },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 70%",
                        end: "top 30%",
                        scrub: true,
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <section className="process-section-new" ref={sectionRef}>
            <PremiumBackground variant="section" particleCount={40} />
            <div className="container">
                <div className="process-header">
                    <h2 className="section-title">How We <span className="text-gradient">Work</span></h2>
                </div>

                <div className="process-list">
                    {processSteps.map((step) => (
                        <div className="process-step-new" key={step.id}>
                            <div className="step-number-large">{step.id}</div>
                            <div className="step-content-new">
                                <h3 className="step-title-new">{step.title}</h3>
                                <p className="step-desc-new">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
