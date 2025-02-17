// src/components/ui/disclosure/Disclosure.tsx
"use client";

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

interface DisclosureComponentProps {
  question: string;
  answer: string;
}

export const DisclosureComponent: React.FC<DisclosureComponentProps> = ({
  question,
  answer
}) => {
  return (
    <Disclosure as="div" className="bg-white rounded-lg shadow">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-left">
            <span className="text-lg font-medium text-gray-900">
              {question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 ${
                open ? 'transform rotate-180' : ''
              }`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-4 text-gray-600">
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};