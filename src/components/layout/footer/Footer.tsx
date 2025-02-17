// src/components/layout/footer/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import { COMPANY_NAME, COMPANY_ADDRESS, SOCIAL_LINKS, PRODUCT_CATEGORIES } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{COMPANY_NAME}</h3>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <p>{COMPANY_ADDRESS}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/products/${category.id}`}
                    className="text-gray-300 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resellers" className="text-gray-300 hover:text-white">
                  Find a Reseller
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sunday - Thursday</li>
              <li>9:00 AM - 6:00 PM</li>
              <li>Kuwait Time (GMT+3)</li>
              <li className="text-red-400">Closed on Fridays & Saturdays</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};