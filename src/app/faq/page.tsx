// src/app/faq/page.tsx

import React from 'react';
import { META } from '@/lib/constants';
import { DisclosureComponent } from '@/components/ui/disclosure/Disclosure'; // We'll create this

export const metadata = {
  title: `FAQ - ${META.title}`,
  description: 'Frequently asked questions about Meditech products and services',
};

const faqs = [
  {
    question: 'Are your products FDA approved?',
    answer: 'Our products are manufactured in FDA-registered facilities in the USA, following strict quality control standards and Good Manufacturing Practices (GMP).'
  },
  {
    question: 'Where are your products available?',
    answer: 'Our products are available through authorized resellers throughout Kuwait. Visit our Resellers page to find the nearest location.'
  },
  {
    question: 'How should I store the supplements?',
    answer: 'Store in a cool, dry place away from direct sunlight. Keep the products in their original containers and ensure the caps are tightly closed.'
  },
  // Add more FAQs...
];

export default function FAQPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <DisclosureComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}