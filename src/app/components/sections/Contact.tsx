// import React, { useState } from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";
import { Check } from 'lucide-react';
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";


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
                    {/* Mini formulaire à droite */}
                    <div className="flex justify-center">
                        <form className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 space-y-6">
                            <div>
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Votre prénom"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">Type de demande</label>
                                <select
                                    id="requestType"
                                    name="requestType"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                >
                                    <option value="">Sélectionnez une option</option>
                                    <option value="infos">Demande d&apos;informations</option>
                                    <option value="devis">Demande de devis</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Votre email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Votre message..."
                                    required
                                />
                            </div>
                            <ButtonPrimary type="submit" className="w-full">
                                Envoyer
                            </ButtonPrimary>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;