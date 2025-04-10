"use client";

import Image from "next/image";
// import Button from "../ui/Button";

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-screen">
                <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                    <Image
                        src="/hero_banner.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Hero banner"
                    />

                    <h1 className="first-phrase">Transformez votre rêve web</h1>
                    <h1 className="second-phrase">en réalité</h1>
                </div>
            </section>

            <style jsx>{`
                .first-phrase {
                    position: absolute;
                    font-family: var(--jakarta);
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: black;
                    font-weight: bold;
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



            `}</style>
        </>
    );
};

export default Hero;