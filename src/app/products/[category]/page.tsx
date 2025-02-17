// src/app/products/[category]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import { ProductGrid } from '@/components/sections/products/ProductGrid';
import { CategoryNav } from '@/components/sections/products/CategoryNav';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = PRODUCT_CATEGORIES.find((c) => c.id === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CategoryNav />
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>

          <ProductGrid category={category.id} />
        </div>
      </div>
    </div>
  );
}