// src/app/page.tsx

import React from 'react';
import { Hero } from '@/components/sections/home/Hero';
import { FeaturedProducts } from '@/components/sections/home/FeaturedProducts';
import { CategoryHighlight } from '@/components/sections/home/CategoryHighlight';
import { ResellerShowcase } from '@/components/sections/home/ResellerShowcase';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryHighlight />
      <ResellerShowcase />
    </>
  );
}