// src/app/about/page.tsx

import React from 'react';
import { AboutContent } from '@/components/sections/about/AboutContent';
import { META } from '@/lib/constants';

export const metadata = {
  title: `About Us - ${META.title}`,
  description: 'Learn about Meditech\'s commitment to quality health supplements in Kuwait',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Meditech</h1>
          <p className="text-xl text-blue-100">
            Leading provider of premium health supplements in Kuwait
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AboutContent />
      </div>
    </div>
  );
}