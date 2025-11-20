import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Discovery",
        desc: "We dive deep into your goals, audience, and vision. No assumptions, just data-driven insights."
    },
    {
        number: "02",
        title: "Strategy",
        desc: "Custom solutions tailored to your business. We map out the user journey and technical architecture."
    },
    {
        number: "03",
        title: "Creation",
        desc: "Our team brings your vision to life with precision. Pixel-perfect design meets robust engineering."
    },
    {
        number: "04",
        title: "Growth",
        desc: "Launch is just the beginning. We monitor, optimize, and scale your digital presence."
    }
];

const Process = () => {
    const processRef = useRef(null);

    useEffect(() => {
        const steps = processRef.current.querySelectorAll('.process-step-new');

        steps.forEach((step, index) => {
            // Animate opacity and scale based on scroll position
            gsap.fromTo(step,
                {
                    opacity: 0.3,
                    scale: 0.95,
                    filter: "blur(2px)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 60%",
                        end: "top 40%",
                        toggleActions: "play reverse play reverse",
                        scrub: true
                    }
                }
            );
        });
    }, []);

    return (
        <section className="section process-section-new" id="process" ref={processRef}>
            <div className="container">
                <div className="process-header">
                    <h2 className="section-title">How We Work</h2>
                </div>

                <div className="process-list">
                    {steps.map((step, index) => (
                        <div className="process-step-new" key={index}>
                            <div className="step-number-large">{step.number}</div>
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
