// src/components/sections/products/ProductGrid.tsx
"use client";

import React from 'react';
import Link from 'next/link'; // Add this import
import { ProductCard } from '@/components/ui/card/ProductCard';
import { useProducts } from '@/hooks/useProducts';

interface ProductGridProps {
  category?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  const { products } = useProducts(category);

  if (!products.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.category}/${product.id}`}
          className="transform hover:scale-105 transition-all duration-300"
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};