// src/app/products/page.tsx

import React from 'react';
import { ProductGrid } from '@/components/sections/products/ProductGrid';
import { CategoryNav } from '@/components/sections/products/CategoryNav';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CategoryNav />
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Our Products
          </h1>
          
          {PRODUCT_CATEGORIES.map((category) => (
            <section key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {category.name}
              </h2>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              <ProductGrid category={category.id} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}