import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    useEffect(() => {
        // Global Fade Up for sections
        const sections = document.querySelectorAll('.section-animate');
        sections.forEach(section => {
            gsap.fromTo(section.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                }
            );
        });
    }, []);

    return (
        <>
            <Hero />
            <Marquee text="Strategy • Design • Development • Growth" speed={0.5} />
            <div className="section-animate">
                <Services />
            </div>
            <Marquee text="Connecting Dots • Building Relations • Creating Impact" speed={0.8} />
            <div className="section-animate">
                <Process />
            </div>
            <div className="section-animate">
                <WhyChooseUs />
            </div>
            <div className="section-animate">
                <FAQ />
            </div>
            <div className="section-animate">
                <Contact />
            </div>
        </>
    );
};

export default Home;
