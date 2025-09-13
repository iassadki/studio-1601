import React from 'react';
import { Check } from 'lucide-react';
import fields from '@/app/data/fields.json';
import ButtonPrimary from '@/app/components/ui/ButtonPrimary';

const PricingPage = () => {
    const pricings = fields.pricings;
    const plans = pricings?.plans || [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-black text-center mt-12 mb-12">
                        {pricings.title}
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className="relative">
                            {/* Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                {/* Header */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-1">
                                        {plan.name}
                                    </h3>
                                    <p className="text-base text-black font-bold mb-1">
                                        {plan.description}
                                    </p>
                                    <p className="text-base text-black font-bold mb-1">
                                        {plan.price}
                                    </p>

                                </div>

                                {/* Features */}
                                <div className="flex-grow mb-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <div className="flex-shrink-0 w-6 h-6 bg-action rounded-full flex items-center justify-center mr-3">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-gray-700 font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <ButtonPrimary>
                                    Demander un devis
                                </ButtonPrimary>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                {/* <div className="text-center mt-16">
                    <p className="text-lg text-gray-600 mb-6">
                        Vous avez des besoins spécifiques ?
                    </p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                        Contactez-nous pour un devis personnalisé
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default PricingPage;