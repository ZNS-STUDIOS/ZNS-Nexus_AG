import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Marquee.css';

const Marquee = ({ text, repeat = 4, speed = 1 }) => {
    const marqueeRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        const inner = innerRef.current;
        const width = inner.offsetWidth / 2; // Assuming content is duplicated for seamless loop

        gsap.to(inner, {
            x: -width,
            duration: 20 / speed,
            ease: "none",
            repeat: -1
        });
    }, [speed]);

    return (
        <div className="marquee-container" ref={marqueeRef}>
            <div className="marquee-inner" ref={innerRef}>
                {Array(repeat).fill(text).map((item, i) => (
                    <span key={i} className="marquee-item">
                        {item} <span className="marquee-separator">•</span>
                    </span>
                ))}
                {/* Duplicate for seamless loop */}
                {Array(repeat).fill(text).map((item, i) => (
                    <span key={`dup-${i}`} className="marquee-item">
                        {item} <span className="marquee-separator">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
