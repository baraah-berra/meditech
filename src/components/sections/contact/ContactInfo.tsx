// src/components/sections/contact/ContactInfo.tsx
'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, BUSINESS_HOURS } from '@/lib/constants';

const ContactInfo = () => {
  return React.createElement('div', { 
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
  }, [
    React.createElement('div', {
      key: 'address',
      className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    }, [
      React.createElement('div', { key: 'icon-1', className: "text-blue-600 mb-4" }, 
        React.createElement(MapPin, { className: "h-6 w-6" })),
      React.createElement('h3', { key: 'title-1', className: "text-xl font-semibold text-gray-900 mb-2" }, "Visit Us"),
      React.createElement('p', { key: 'content-1', className: "text-gray-600" }, COMPANY_ADDRESS)
    ]),

    React.createElement('div', {
      key: 'phone',
      className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    }, [
      React.createElement('div', { key: 'icon-2', className: "text-blue-600 mb-4" }, 
        React.createElement(Phone, { className: "h-6 w-6" })),
      React.createElement('h3', { key: 'title-2', className: "text-xl font-semibold text-gray-900 mb-2" }, "Call Us"),
      React.createElement('a', { 
        key: 'content-2',
        href: `tel:${COMPANY_PHONE.replace(/\s/g, '')}`,
        className: "text-gray-600 hover:text-blue-600 transition-colors"
      }, COMPANY_PHONE)
    ]),

    React.createElement('div', {
      key: 'email',
      className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    }, [
      React.createElement('div', { key: 'icon-3', className: "text-blue-600 mb-4" }, 
        React.createElement(Mail, { className: "h-6 w-6" })),
      React.createElement('h3', { key: 'title-3', className: "text-xl font-semibold text-gray-900 mb-2" }, "Email Us"),
      React.createElement('a', { 
        key: 'content-3',
        href: `mailto:${COMPANY_EMAIL}`,
        className: "text-gray-600 hover:text-blue-600 transition-colors"
      }, COMPANY_EMAIL)
    ]),

    React.createElement('div', {
      key: 'hours',
      className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    }, [
      React.createElement('div', { key: 'icon-4', className: "text-blue-600 mb-4" }, 
        React.createElement(Clock, { className: "h-6 w-6" })),
      React.createElement('h3', { key: 'title-4', className: "text-xl font-semibold text-gray-900 mb-2" }, "Business Hours"),
      React.createElement('p', { key: 'content-4', className: "text-gray-600" }, 
        `${BUSINESS_HOURS.days}: ${BUSINESS_HOURS.weekdays}`)
    ])
  ]);
};

export default ContactInfo;