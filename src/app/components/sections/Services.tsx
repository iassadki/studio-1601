"use client";
import Image from "next/image";
import React from 'react';
import fields from '@/app/components/data/fields.json';

const Services: React.FC = () => {
    const { services } = fields;

    return (
        <>
            <section>
                <h3 className='title'>{services.title}</h3>
                <div className="grid-2">
                    <div className="grid-item">
                        <Image src="/services-image.png" alt="Service image" width={550} height={800} />
                    </div>
                    <div className="grid-item">
                        <h3>{services.maquettage.title}</h3>
                        <p>{services.maquettage.description}</p>

                        <h3>{services.developpement.title}</h3>
                        <p>{services.developpement.description}</p>

                        <h3>{services.publication.title}</h3>
                        <p>{services.publication.description}</p>

                        <h3>{services.maintenance.title}</h3>
                        <p>{services.maintenance.description}</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
        section {
          padding: 2rem;
        }
        p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.5;
          color: #555;
        }
      `}</style>
        </>
    );
};

export default Services;