// src/hooks/useProducts.ts
"use client";

import React, { useState, useEffect, useMemo } from 'react';  // Added useMemo here
import { Product } from '@/types';
import productsData from '@/data/products';

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      let filteredProducts = productsData;
      
      if (category) {
        filteredProducts = productsData.filter(
          (product) => product.category === category
        );
      }

      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load products:', error);
      setError('Failed to load products');
      setLoading(false);
    }
  }, [category]);

  // Now using useMemo directly
  const featuredProducts = useMemo(() => 
    products.filter((product) => product.featured),
    [products]
  );

  return {
    products,
    featuredProducts,
    loading,
    error,
    isLoading: loading,
    isError: !!error,
    errorMessage: error,
    isEmpty: !loading && products.length === 0,
    totalProducts: products.length,
    totalFeatured: featuredProducts.length,
  };
}