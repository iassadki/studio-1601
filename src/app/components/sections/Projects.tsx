"use client";

// import Image from "next/image";
import React from 'react';
import Button from '../ui/Button';
import fields from '@/app/components/data/fields.json';

const Projects: React.FC = () => {
    const { projects } = fields;

    return (
        <>
            <section>
                <h3 className='title'>{projects.title}</h3>

                <div className='grid-3'>
                    {projects.projectsList.map((project, index) => (
                        <div key={index} className='grid-item-box'>
                            {/* <Image src={project.image} alt={project.title} width={400} height={300} /> */}
                            <img id='image-grid-box' src={project.imagePath} alt={project.title} />
                            <h5 id='category-grid-box'>{project.category}</h5>
                            <h4 id='title-grid-box'>{project.title}</h4>
                            <p id='description-grid-box'>{project.description}</p>
                            <Button id='button-grid-box'>En savoir plus</Button>
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
            `}</style>
        </>
    );
};

export default Projects;