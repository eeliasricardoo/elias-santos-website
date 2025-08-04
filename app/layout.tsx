import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/Navbar';
import { AppProvider } from '@/components/providers/app-provider';
import { MicrosoftClarity } from '@/components/analytics/MicrosoftClarity';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elias Santos - UX/UI Designer & Frontend',
  description:
    'UX/UI Designer & Frontend Developer creating exceptional digital experiences. Specialized in user-centered design, React, Next.js, and TypeScript.',
  keywords: [
    'ux ui designer',
    'frontend developer',
    'react',
    'next.js',
    'typescript',
    'portfolio',
    'frontend',
    'design',
  ],
  authors: [{ name: 'Elias Santos' }],
  creator: 'Elias Santos',
  publisher: 'Elias Santos',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eliasricardo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eliasricardo.com',
    title: 'Elias Santos - UX/UI Designer & Frontend',
    description:
      'UX/UI Designer & Frontend Developer creating exceptional digital experiences. Specialized in user-centered design, React, Next.js, and TypeScript.',
    siteName: 'Elias Santos Portfolio',
    images: [
      {
        url: '/oq-image.png',
        width: 1200,
        height: 630,
        alt: 'Elias Santos - UX/UI Designer & Frontend',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias Santos - UX/UI Designer & Frontend',
    description:
      'UX/UI Designer & Frontend Developer creating exceptional digital experiences. Specialized in user-centered design, React, Next.js, and TypeScript.',
    images: ['/oq-image.png'],
    creator: '@eliasricardo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} dark`} suppressHydrationWarning>
        <MicrosoftClarity />
        <AppProvider>
          <Navbar />
          <main className='min-h-screen'>{children}</main>
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
