import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

const Services: React.FC = () => {
    const { services } = fields;

    return (
        <section id="services" className="w-full py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {services.title}
            </h2>

            {/* Grid des cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-8">
                {services.servicesData.map((item, index) => (
                    <div key={index} className="bg-action rounded-4xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg mt-1 mb-1 font-semibold text-white">{item.label}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;