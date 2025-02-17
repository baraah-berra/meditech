// src/components/sections/products/CategoryNav.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const CategoryNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
      <nav className="space-y-2">
        {PRODUCT_CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={`/products/${category.id}`}
            className={cn(
              'block px-4 py-2 rounded-md text-sm font-medium transition-colors',
              pathname === `/products/${category.id}`
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};