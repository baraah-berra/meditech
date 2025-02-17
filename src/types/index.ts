// src/types/index.ts

export interface Product {
    id: string;
    name: string;
    category: ProductCategory;
    description: string;
    benefits: string[];
    usage: string;
    capsuleCount: number;
    ingredients?: string[];
    imageUrl: string;
    featured: boolean;
  }
  
  export type ProductCategory = 
    | 'general-health'
    | 'mens-health'
    | 'hair-and-skin'
    | 'bone-and-joint';
  
  export interface CategoryInfo {
    id: ProductCategory;
    name: string;
    description: string;
  }
  
  export interface Reseller {
    id: string;
    name: string;
    logo: string;
    locations: string[];
    contactNumber?: string;
    website?: string;
  }
  
  export interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }