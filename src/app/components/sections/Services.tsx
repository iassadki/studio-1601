import React from "react";

const services = [
    { label: "Landing page" },
    { label: "Showcase website" },   // Site vitrine
    { label: "Portfolio" },
    { label: "Dynamic website" },    // Site web dynamique
    { label: "Software" },           // Logiciels
    { label: "Web application" },    // Application web
    { label: "Redesign" },           // Refonte
    { label: "Internal tools" },     // Outils internes
    { label: "Blog / Portfolio" },
];

const Services: React.FC = () => (
    <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, idx) => (
                <div
                    key={idx}
                    className="w-40 h-20 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-md font-semibold shadow-md select-none text-center"
                >
                    {service.label}
                </div>
            ))}
        </div>
    </section>
);

export default Services;
