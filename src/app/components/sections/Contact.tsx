// import React, { useState } from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";
import { Check } from 'lucide-react';
// import ButtonPrimary from "@/app/components/ui/ButtonPrimary";


const Contact: React.FC = () => {
    const { contact } = fields;
    return (
        <section id="contact" className="w-full py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Texte à gauche */}
                    <div className="text-left">
                        <h2 className="text-2xl font-bold text-black mb-4">{contact.firstTitle}</h2>
                        <p className="text-gray-700 mb-8">{contact.description}</p>
                        <div className="space-y-4">
                            {/* Features */}
                            <div className="flex-grow mb-8">
                                <ul className="space-y-4">
                                    {contact.steps.map((step, stepIndex) => (
                                        <li key={stepIndex} className="flex items-center">
                                            <div className="flex-shrink-0 w-6 h-6 bg-action rounded-full flex items-center justify-center mr-3">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-black font-bold">
                                                {step.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Image à droite */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-sm h-100">
                            <Image
                                src={contact.imagePath}
                                alt={contact.title}
                                fill
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;