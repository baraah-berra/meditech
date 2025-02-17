// src/components/sections/about/AboutContent.tsx

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export const AboutContent: React.FC = () => {
  const values = [
    { title: 'Quality', description: 'Premium USA-made supplements meeting highest standards' },
    { title: 'Trust', description: 'Building lasting relationships with customers and partners' },
    { title: 'Innovation', description: 'Continuously improving our product formulations' },
    { title: 'Service', description: 'Dedicated support for all your health needs' },
  ];

  return (
    <div className="space-y-16">
      {/* Company Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose lg:prose-lg">
            <p>
              Since our establishment, Meditech has been dedicated to providing premium health supplements
              to customers in Kuwait. Our commitment to quality and customer satisfaction has made us
              a trusted name in the healthcare industry.
            </p>
            <p>
              We partner with leading manufacturers in the USA to ensure our products meet the highest
              standards of quality and efficacy. Every supplement undergoes rigorous testing and
              quality control measures.
            </p>
          </div>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/assets/images/about/company.jpg"
            alt="Meditech facility"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Company Values */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};