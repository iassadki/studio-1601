"use client";

// import Image from "next/image";
import React from 'react';
// import Button from '../ui/Button';
import fields from '@/app/components/data/fields.json';

const Contact: React.FC = () => {
    const { contact } = fields;

    return (
        <>
            <section>
                <h3 className='title'>{contact.title}</h3>

                <div className='grid-2'>
                    <div className='grid-item'>
                        <h3 id='category-grid-box'>{contact.heading}</h3>
                        <h4 id='title-grid-box'>{contact.text}</h4>

                        <div className='checkbox-container'>
                            <div className='checkbox-item'>
                                <div className='checkbox'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                    </svg>
                                </div>
                                <p>{contact.step1}</p>
                            </div>

                            <div className='checkbox-item'>
                                <div className='checkbox'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                    </svg>
                                </div>
                                <p>{contact.step2}</p>
                            </div>

                            <div className='checkbox-item'>
                                <div className='checkbox'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                    </svg>
                                </div>
                                <p>{contact.step3}</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid-item'>
                        <img id='calendly-image' src={contact.imagePath} alt={contact.title} />
                    </div>
                </div>
            </section>

            <style jsx>{`
               section {
                   padding: 2rem;
                   background-color: #F8F8FF;
               }

               .title {
                   margin-bottom: 50px;
               }

               h3, h4 {
                   margin-top: 10px;
                   margin-bottom: 40px;
               }

               #calendly-image {
                   width: 100%;
                   height: auto;
               }

               .checkbox {
                   width: 25px;
                   height: 25px;
               }

               .checkbox-item p {
                   font-weight: 600;
                }

               #title-grid-box {
                    color: var(--grey-text-color);
                    font-weight: 400;
               }

           `}</style>
        </>
    );
};

export default Contact;