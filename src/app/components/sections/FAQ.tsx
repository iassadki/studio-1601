"use client";

// import Image from "next/image";
import React from 'react';
// import Button from '../ui/Button';
import fields from '@/app/components/data/fields.json';

const FAQ: React.FC = () => {
    const { faqs } = fields;

    return (
        <>
            <section>
                <h3 className='title'>{faqs.title}</h3>

                <div className='grid-1'>
                    {faqs.FaqsList.map((faq, index) => (
                        <div key={index} className='grid-item'>
                            <h4 className='subtitle'>{faq.question}</h4>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                section {
                    padding: 2rem;
                }

                .grid-1 {
                    display: grid;
                    gap: 25px;
                }
            `}</style>
        </>
    );
};

export default FAQ;