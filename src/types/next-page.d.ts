// src/types/next-page.d.ts

declare module 'next/types' {
    export type PageProps<P = {}, S = {}> = {
      params: P;
      searchParams: S;
    };
  }