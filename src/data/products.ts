// src/data/products.ts

import { Product } from '@/types';

const productsData: Product[] = [
  {
    id: 'omega-3-max',
    name: 'OMEGA-3 MAX',
    category: 'general-health',
    description: 'High-quality fish oil supplement for overall health',
    benefits: [
      'Healthy eyes, hair & skin',
      'Improves brain function',
      'Supports heart health',
      'Can reduce chronic inflammation',
      'Helps cognitive function',
      'Improves bone strength and joint health'
    ],
    usage: '1 softgel daily with meal',
    capsuleCount: 60,
    imageUrl: '/assets/images/products/omega-3-max.jpg',
    featured: true,
  },
  {
    id: 'vitamax-az',
    name: 'VITAMAX (A-Z)',
    category: 'general-health',
    description: 'Comprehensive multivitamin supplement',
    benefits: [
      'Supports immunity and energy',
      'Improves bone and dental health',
      'Enhances heart and cardiovascular health',
      'Strengthens hair, skin, and nails',
      'Supports cognitive function and focus'
    ],
    usage: 'One tablet daily after meals',
    capsuleCount: 60,
    imageUrl: '/assets/images/products/vitamax-az.jpg',
    featured: true,
  },
  {
    id: 'virga-x',
    name: 'VIRGA-X',
    category: 'mens-health',
    description: 'Men\'s sexual health and energy support',
    benefits: [
      'Supports sexual health',
      'Increases energy levels',
      'Contains potassium and nitrate',
      'Improves exercise performance'
    ],
    usage: 'One capsule twice daily',
    capsuleCount: 60,
    imageUrl: '/assets/images/products/virga-x.jpg',
    featured: false,
  },
  {
    id: 'collagen-plus',
    name: 'COLLAGEN PLUS',
    category: 'hair-and-skin',
    description: 'Premium collagen supplement with Vitamin C',
    benefits: [
      'Supports skin elasticity',
      'Promotes hair strength',
      'Helps with joint health',
      'Contains antioxidants'
    ],
    usage: 'One capsule twice daily',
    capsuleCount: 60,
    imageUrl: '/assets/images/products/collagen-plus.jpg',
    featured: true,
  },
  {
    id: 'joint-aid',
    name: 'JOINT AID',
    category: 'bone-and-joint',
    description: 'Complete joint health supplement',
    benefits: [
      'Supports joint mobility',
      'Reduces inflammation',
      'Strengthens cartilage',
      'Promotes bone health'
    ],
    usage: 'One tablet 2-3 times daily with meals',
    capsuleCount: 90,
    imageUrl: '/assets/images/products/joint-aid.jpg',
    featured: false,
  }
];
console.log('Products:', productsData);

export default productsData;