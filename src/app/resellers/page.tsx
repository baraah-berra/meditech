// src/app/resellers/page.tsx

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Globe } from 'lucide-react';
import { META } from '@/lib/constants';

export const metadata = {
  title: `Authorized Agents - ${META.title}`,
  description: 'Find authorized Meditech product agents in Kuwait',
};

const agents = [
  {
    name: 'Spirit Healthcare Company',
    logo: '/assets/images/agents/spirit.png',
    locations: ['Kuwait City', 'Salmiya', 'Hawally'],
    phone: '9670 1116',
    website: 'https://spirit.com.kw'
  },
  {
    name: 'Royal Pharmacy',
    logo: '/assets/images/agents/royal.png',
    locations: ['Farwaniya', 'Jahra', 'Ahmadi'],
    phone: '222 16 535',
    website: 'https://royalph.com/ar/royal-offers.html?gad_source=1&gclid=CjwKCAiA2cu9BhBhEiwAft6IxFs-bslliUzVX2GyOjMfpc62wdEbF5lgol274Dd9kmpu3Wxa-mI10BoCmRcQAvD_BwE'
  },
  {
    name: 'Pharmazone',
    logo: '/assets/images/agents/pharmazone.png',
    locations: ['Kuwait City', 'Salmiya'],
    phone: '2222 3333',
    website: 'https://pharmazone.com/?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=1480087837&hsa_cam=22214592704&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA2cu9BhBhEiwAft6IxD6pL-OlSJQ7CfZy3dQX_GXXuf4S0LiKSithVPcvfjafZwnq8oRYhhoCtZUQAvD_BwE'
  }
];

export default function AgentsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Authorized Agents</h1>
          <p className="text-xl text-blue-100">
            Find Meditech products at these trusted locations
          </p>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="relative h-24 mb-6">
                  <Image
                    src={agent.logo}
                    alt={agent.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {agent.name}
                </h3>
                <div className="space-y-3">
                  {/* Locations */}
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                    <div>
                      {agent.locations.map((location, i) => (
                        <div key={i} className="text-gray-600">
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <a
                      href={`tel:${agent.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      {agent.phone}
                    </a>
                  </div>
                  {/* Website */}
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    <a
                      href={agent.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
