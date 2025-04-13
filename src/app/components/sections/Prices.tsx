"use client";

// import Image from "next/image";
import React from 'react';
import Button from '../ui/Button';
import fields from '@/app/components/data/fields.json';

const Prices: React.FC = () => {
    const { prices } = fields;

    return (
        <>
            <section>
                <h3 className='title'>{prices.title}</h3>

                <div className='grid-3'>
                    {prices.pricesList.map((price, index) => (
                        <div key={index} className='grid-item-box'>
                            {/* <Image src={price.image} alt={price.title} width={400} height={300} /> */}
                            <h3 id='category-grid-box'>{price.name}</h3>
                            <h4 id='title-grid-box'>{price.description}</h4>
                            <h4 id='title-grid-box'>À partir de {price.price} €</h4>
                            <div className='checkbox-container'>
                                <div className='checkbox-item'>
                                    <div className='checkbox'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                        </svg>
                                    </div>
                                    <p>{price.option1}</p>
                                </div>
                                <div className='checkbox-item'>
                                    <div className='checkbox'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                        </svg>
                                    </div>
                                    <p>{price.option2}</p>
                                </div>
                                <div className='checkbox-item'>
                                    <div className='checkbox'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                        </svg>
                                    </div>
                                    <p>{price.option3}</p>
                                </div>
                                <div className='checkbox-item'>
                                    <div className='checkbox'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                        </svg>
                                    </div>
                                    <p>{price.option4}</p>
                                </div>
                            </div>
                            <Button id='button-grid-box'>Demander un devis</Button>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                section {
                    padding: 2rem;
                }

                .grid-3 {
                    gap: 25px;
                }

                .grid-item-box {
                    padding: 1.5rem;
                }

                h3 {
                    margin-top: 1rem;
                }

             
            `}</style>
        </>
    );
};

export default Prices;