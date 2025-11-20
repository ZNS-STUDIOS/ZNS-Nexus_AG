import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "What types of businesses do you work with?",
        answer: "We work with startups, established brands, and enterprises across various industries. Our flexible approach allows us to tailor solutions to your specific needs."
    },
    {
        question: "How long does a typical project take?",
        answer: "Timelines vary based on project scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the discovery phase."
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes! We believe in long-term relationships. We offer maintenance packages, content updates, and growth strategies to ensure your digital presence continues to thrive."
    },
    {
        question: "What makes your pricing different?",
        answer: "We offer fair, transparent pricing without hidden fees. We focus on value and ROI, ensuring you get premium quality that fits your budget."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section faq-section" id="faq">
            <div className="container">
                <h2 className="section-title">Common Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </div>
                            <div className="faq-answer" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
