// src/components/sections/home/FeaturedProducts.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button/Button';
import { ProductCard } from '@/components/ui/card/ProductCard';
import { useProducts } from '@/hooks/useProducts';

export const FeaturedProducts: React.FC = () => {
  const { 
    featuredProducts, 
    loading, 
    error, 
    isEmpty 
  } = useProducts();

  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-600">
          Error: {error}
        </div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          No featured products available.
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our most popular health supplements
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.category}/${product.id}`}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};