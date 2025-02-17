// src/components/ui/card/ProductCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // Add this import
import { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  return (
    <div className={cn(
      'rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow',
      className
    )}>
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl || `/assets/images/products/${product.id}.jpg`}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {product.capsuleCount} capsules
          </span>
        </div>
        
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Key Benefits:</h4>
          <ul className="mt-2 space-y-1">
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-sm text-gray-600">
                • {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-900">
            Usage: {product.usage}
          </p>
          <ArrowRight className="h-5 w-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
};