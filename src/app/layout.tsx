// src/app/layout.tsx

import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layout/MainLayout';
import { META } from '@/lib/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: META.title,
  description: META.description,
  keywords: META.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}