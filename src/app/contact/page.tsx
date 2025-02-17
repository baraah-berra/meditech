// src/app/contact/page.tsx

import React from 'react';
import { ContactForm } from '@/components/ui/form/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import { META } from '@/lib/constants';

export const metadata = {
  title: `Contact Us - ${META.title}`,
  description: "Get in touch with Meditech for any inquiries about our health supplements",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We're here to help with any questions about our products
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactInfo />

        {/* Contact Form Section */}
        <div className="mt-16">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}