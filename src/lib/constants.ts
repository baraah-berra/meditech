// src/lib/constants.ts

import { CategoryInfo } from '@/types';

export const COMPANY_NAME = 'Meditech US';
export const COMPANY_PHONE = '9670 1116';
export const COMPANY_EMAIL = 'info@meditechus.com';
export const COMPANY_ADDRESS = 'Kuwait, Building 14-Al Muthanna Street';

export const BUSINESS_HOURS = {
  weekdays: '9:00 AM - 6:00 PM',
  days: 'Sunday - Thursday',
  timezone: 'Kuwait Time (GMT+3)',
};

export const PRODUCT_CATEGORIES: CategoryInfo[] = [
  {
    id: 'general-health',
    name: 'General Health',
    description: 'Essential supplements for overall health and wellness'
  },
  {
    id: 'mens-health',
    name: 'Men\'s Health',
    description: 'Specialized supplements for men\'s vitality and wellness'
  },
  {
    id: 'hair-and-skin',
    name: 'Hair & Skin Care',
    description: 'Products for hair growth and skin health'
  },
  {
    id: 'bone-and-joint',
    name: 'Bone & Joint Health',
    description: 'Supplements for strong bones and healthy joints'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/meditechus',
  instagram: 'https://instagram.com/meditechus',
  twitter: 'https://twitter.com/meditechus'
};

export const META = {
  title: 'Meditech US - Premium Health Supplements',
  description: 'Trusted provider of high-quality health supplements in Kuwait',
  keywords: 'health supplements, vitamins, minerals, Kuwait, Meditech'
};

// Add this to your constants file
export const PLACEHOLDER_IMAGES = {
  logo: '/api/placeholder/200/60',
  hero: '/api/placeholder/1920/600',
  product: '/api/placeholder/800/800',
  reseller: '/api/placeholder/400/200'
};