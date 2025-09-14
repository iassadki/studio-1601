import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";


// Import icons if needed
// import { Palette, Monitor, Globe, Wrench } from "lucide-react";

const steps = [
    {
        number: "1.",
        title: "Maquettage",
        // icon: <Palette className="w-6 h-6" />, // Uncomment if Palette is imported
        emoji: "🎨",
        description:
            "Le maquettage est la première étape cruciale pour visualiser l'architecture et la structure de votre site. Il permet d'identifier et de résoudre les problèmes potentiels avant de passer au développement",
    },
    {
        number: "2.",
        title: "Développement",
        // icon: <Monitor className="w-6 h-6" />, // Uncomment if Monitor is imported
        emoji: "💻",
        description:
            "Notre équipe de développeurs experts transforme les maquettes en sites web fonctionnels en utilisant les technologies les plus récentes. Chaque ligne de code est optimisé pour la performance et la sécurité",
    },
    {
        number: "3.",
        title: "Publication",
        // icon: <Globe className="w-6 h-6" />, // Uncomment if Globe is imported
        emoji: "🌍",
        description:
            "Une fois le développement terminé, nous procédons à la publication de votre site, en nous assurant que tout fonctionne parfaitement sur tous les appareils. Nous veillons à ce que votre lancement se déroule sans accroc",
    },
    {
        number: "4.",
        title: "Maintenance",
        // icon: <Wrench className="w-6 h-6" />, // Uncomment if Wrench is imported
        emoji: "🔧",
        description:
            "La maintenance continue est essentielle pour garantir que votre site reste sécurisé, à jour et performant. Notre équipe est toujours disponible pour effectuer des mises à jour, résoudre des problèmes et améliorer les fonctionnalités",
    },
];

const Expertise: React.FC = () => {
    const { expertise } = fields;

    return (
        <section id="expertise" className="w-full py-16 bg-white">
            <h2 className="text-3xl font-bold text-center text-black mb-5">
                {expertise.title}
            </h2>
            <div className="min-h-screen bg-white from-purple-50 via-blue-50 to-indigo-100">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left side - Simple Illustration */}
                        <div className="relative">
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-12 shadow-lg">
                                    {/* Simple geometric illustration */}
                                    <div className="space-y-8">
                                        {/* Header with circles */}
                                        <div className="flex justify-center space-x-4">
                                            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                                        </div>

                                        {/* Main content area */}
                                        <div className="bg-white rounded-lg p-6 shadow-sm">
                                            <div className="space-y-4">
                                                {/* Navigation bar */}
                                                <div className="flex space-x-2">
                                                    <div className="w-16 h-2 bg-indigo-300 rounded"></div>
                                                    <div className="w-12 h-2 bg-gray-300 rounded"></div>
                                                    <div className="w-14 h-2 bg-gray-300 rounded"></div>
                                                </div>

                                                {/* Hero section */}
                                                <div className="w-full h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg"></div>

                                                {/* Content blocks */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="h-8 bg-gray-200 rounded"></div>
                                                    <div className="h-8 bg-gray-200 rounded"></div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="w-full h-2 bg-gray-300 rounded"></div>
                                                    <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                                                    <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom elements */}
                                        <div className="flex justify-center space-x-6">
                                            <div className="w-8 h-8 bg-indigo-500 rounded-lg shadow-sm"></div>
                                            <div className="w-8 h-8 bg-purple-500 rounded-lg shadow-sm"></div>
                                            <div className="w-8 h-8 bg-pink-500 rounded-lg shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Process steps */}
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                {step.number.replace('.', '')}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <span className="text-2xl">{step.emoji}</span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subtle gradient border on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;