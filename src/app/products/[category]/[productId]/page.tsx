// src/app/products/[category]/[productId]/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button/Button';
import productsData from '@/data/products';
import type { Metadata } from 'next';

interface PageParams {
  params: {
    category: string;
    productId: string;
  };
}

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  benefits: string[];
  usage: string;
  capsuleCount: number;
}

async function getProductData(productId: string): Promise<Product | undefined> {
  return new Promise(resolve => {
    resolve(productsData.find(p => p.id === productId));
  });
}

async function getPageParams(params: PageParams['params']) {
  return new Promise(resolve => {
    resolve(params);
  });
}

function formatCategoryName(category: string) {
  return category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export async function generateMetadata(
  props: PageParams
): Promise<Metadata> {
  const params = await getPageParams(props.params) as PageParams['params'];
  const product = await getProductData(params.productId);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} - Meditech US`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return productsData.map((product) => ({
    category: product.category,
    productId: product.id,
  }));
}

export default async function Page(props: PageParams) {
  const params = await getPageParams(props.params) as PageParams['params'];
  const product = await getProductData(params.productId);

  if (!product || product.category !== params.category) {
    notFound();
  }

  const categoryName = formatCategoryName(params.category);
  const productImagePath = `/assets/images/products/${product.id}.jpg`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Navigation */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/products" className="text-blue-600 hover:underline">
              Products
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link 
              href={`/products/${params.category}`}
              className="text-blue-600 hover:underline"
            >
              {categoryName}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-500">{product.name}</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={productImagePath}
            alt={product.name}
            fill
            className="object-contain p-4"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            unoptimized // Add this
            loading="eager" // Add this
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-lg text-gray-600">{product.description}</p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
            <ul className="mt-4 space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Usage</h2>
            <p className="mt-2 text-gray-600">{product.usage}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Package Size</h2>
            <p className="mt-2 text-gray-600">{product.capsuleCount} capsules</p>
          </div>

          <div className="mt-8 space-y-4">
            <Link href="/agents">
              <Button variant="primary" size="lg" fullWidth>
                Find an Agent
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" fullWidth>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}