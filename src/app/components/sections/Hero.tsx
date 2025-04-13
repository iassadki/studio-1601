"use client";

import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-screen">
                <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                    <Image
                        src="/hero-banner.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Hero banner"
                    />

                    <h1 className="first-phrase">Transformez votre rêve web</h1>
                    <h1 className="second-phrase">en réalité</h1>
                    <h4 className="third-phrase">Nous crééons des expériences web uniques <span className="text_primary_underlined">sur mesure</span></h4>
                    <div className="button-container">
                        <Button>En savoir plus</Button>
                        <Button>Prendre un rendez vous</Button>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .first-phrase {
                    position: absolute;
                    font-family: var(--jakarta);
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                }

                .second-phrase {
                    position: absolute;
                    font-family: var(--jakarta);
                    top: 52%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: var(--primary-color);
                    text-decoration: underline;
                    font-weight: bold;
                    text-align: center;
                }

                .third-phrase {
                    position: absolute;
                    font-family: var(--jakarta);
                    top: 65%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-weight: 500;
                }

                .button-container  {
                    position: absolute;
                    top: 75%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    gap: 1rem;
                }




            `}</style>
        </>
    );
};

export default Hero;