// src/types/next.d.ts

import { Metadata } from 'next';

declare module 'next' {
  export interface PageProps {
    params: Record<string, string>;
    searchParams: Record<string, string | string[] | undefined>;
  }
}