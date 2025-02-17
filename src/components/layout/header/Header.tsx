// src/components/layout/header/Header.tsx

import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { Navbar } from '@/components/ui/navigation/Navbar';
import { COMPANY_PHONE, COMPANY_EMAIL, BUSINESS_HOURS } from '@/lib/constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-blue-600">
                  {COMPANY_PHONE}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-blue-600">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <Clock className="h-4 w-4 mr-1" />
              <span>
                {BUSINESS_HOURS.days}: {BUSINESS_HOURS.weekdays}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <Navbar />
    </header>
  );
};