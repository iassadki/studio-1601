import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

const Expertise: React.FC = () => {
    const { expertise } = fields;

    return (
        <section id="expertise" className="w-full py-16 bg-white">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {expertise.title}
            </h2>


        </section>
    );
};

export default Expertise;