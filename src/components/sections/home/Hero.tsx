// src/components/sections/home/Hero.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-blue-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Premium Health</span>
                <span className="block text-blue-400">Supplements in Kuwait</span>
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover our range of high-quality supplements designed to support your health and wellness journey. Made in USA with premium ingredients.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/products">
                    <Button variant="primary" size="lg">
                      View Products
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/contact">
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Image
  className="h-full w-full object-cover"
  src="/assets/images/hero-image.jpg"
  alt="Health supplements"
  width={1920}
  height={1080}
  priority
  unoptimized // Add this
  loading="eager" // Add this
/>
      </div>
    </div>
  );
};