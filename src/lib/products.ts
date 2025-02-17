// src/lib/products.ts

import { Product } from '@/types';
import productsData from '@/data/products';

export function getProduct(productId: string): Product | undefined {
  return productsData.find(product => product.id === productId);
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return productsData.filter(product => product.featured);
}

export function getRelatedProducts(productId: string, category: string, limit = 3): Product[] {
  return productsData
    .filter(product => 
      product.category === category && 
      product.id !== productId
    )
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return productsData.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
}

// Add this helper function for static path generation
export function getAllProductIds(): string[] {
  return productsData.map(product => product.id);
}