import React from "react";

const methods = [
    {
        title: "Analyse",
        description:
            "Nous commençons par comprendre vos besoins, vos objectifs et votre public cible afin de définir une stratégie adaptée.",
    },
    {
        title: "Conception",
        description:
            "Nous imaginons des solutions créatives et fonctionnelles, en tenant compte de l’expérience utilisateur et de l’identité de votre marque.",
    },
    {
        title: "Développement",
        description:
            "Nous réalisons votre projet avec des technologies modernes, en garantissant performance, sécurité et évolutivité.",
    },
    {
        title: "Accompagnement",
        description:
            "Nous vous guidons après la mise en ligne pour assurer la réussite et l’évolution de votre projet.",
    },
];

const Method: React.FC = () => (
    <section id="method" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Notre Méthode</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {methods.map((method, idx) => (
                    <div
                        key={method.title}
                        className="bg-white rounded-lg shadow p-6 flex flex-col items-start"
                    >
                        <div className="text-2xl font-semibold mb-2 text-indigo-600">
                            {idx + 1}. {method.title}
                        </div>
                        <p className="text-gray-700">{method.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Method;