// src/components/sections/home/CategoryHighlight.tsx

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

export const CategoryHighlight: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Product Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our comprehensive range of health supplements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="group block"
            >
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-200 group-hover:shadow-lg">
                <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  {/* You can add specific icons for each category here */}
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <span className="text-blue-600 group-hover:text-blue-700 flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};