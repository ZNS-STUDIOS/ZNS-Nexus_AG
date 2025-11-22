import React, { useEffect, useRef } from 'react';
import './PremiumBackground.css';

const PremiumBackground = ({ variant = 'default', particleCount = 60 }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Mouse state
        const mouse = { x: -1000, y: -1000 }; // Start off-screen

        // Configuration based on variant
        const isHero = variant === 'hero';
        const count = window.innerWidth < 768 ? particleCount / 2 : particleCount;
        const connectionDistance = isHero ? 150 : 100;
        const moveSpeed = isHero ? 0.3 : 0.15;

        // Interaction configuration
        const interactionRadius = 200;
        const baseOpacity = 0.2;
        const activeOpacity = 1.0;
        const baseLineOpacity = 0.05;
        const activeLineOpacity = 0.6;

        const resize = () => {
            const container = containerRef.current;
            if (container) {
                const rect = container.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * moveSpeed;
                this.vy = (Math.random() - 0.5) * moveSpeed;
                this.size = Math.random() * 2 + 1.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.color = '#14e08e'; // Mint green
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around screen
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Mouse interaction (Repel/Attract & Opacity)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Calculate opacity based on distance
                if (distance < interactionRadius) {
                    const opacityFactor = 1 - (distance / interactionRadius);
                    this.opacity = baseOpacity + (activeOpacity - baseOpacity) * opacityFactor;
                    this.glow = opacityFactor * 15; // Glow intensity
                } else {
                    this.opacity = baseOpacity;
                    this.glow = 0;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;

                // Add glow effect for active particles
                if (this.glow > 0) {
                    ctx.shadowBlur = this.glow;
                    ctx.shadowColor = 'rgba(20, 224, 142, 0.8)';
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        // Calculate line opacity based on mouse proximity to the line's center
                        const midX = (particles[i].x + particles[j].x) / 2;
                        const midY = (particles[i].y + particles[j].y) / 2;
                        const distToMouse = Math.sqrt(Math.pow(midX - mouse.x, 2) + Math.pow(midY - mouse.y, 2));

                        let lineOpacity = baseLineOpacity;

                        if (distToMouse < interactionRadius) {
                            const opacityFactor = 1 - (distToMouse / interactionRadius);
                            lineOpacity = baseLineOpacity + (activeLineOpacity - baseLineOpacity) * opacityFactor;
                        }

                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(20, 224, 142, ${lineOpacity})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [variant, particleCount]);

    return (
        <div className={`premium-background-wrapper ${variant}`} ref={containerRef}>
            <div className="gradient-spotlight top-left"></div>
            <div className="gradient-spotlight bottom-right"></div>
            <canvas ref={canvasRef} className="premium-canvas"></canvas>
            <div className="film-grain-overlay"></div>

            {/* SVG Filter for Film Grain */}
            <svg className="grain-svg" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
            </svg>
        </div>
    );
};

export default PremiumBackground;
