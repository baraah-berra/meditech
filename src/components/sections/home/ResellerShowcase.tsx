// src/components/sections/home/ResellerShowcase.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button/Button';

export const ResellerShowcase: React.FC = () => {
  const resellers = [
    {
      name: 'Spirit Pharmacies',
      logo: '/assets/images/resellers/spirit.png'
    },
    {
      name: 'Royal Pharmacies',
      logo: '/assets/images/resellers/royal.png'
    },
    // Add more resellers as needed
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Trusted Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find our products at these authorized resellers across Kuwait
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          {resellers.map((reseller, index) => (
            <div
              key={index}
              className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={reseller.logo}
                alt={reseller.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/resellers">
            <Button variant="secondary" size="lg">
              Find a Reseller Near You
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};