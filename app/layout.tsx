import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/Navbar';
import { AppProvider } from '@/components/providers/app-provider';
import { MicrosoftClarity } from '@/components/analytics/MicrosoftClarity';
import { LCPOptimizer } from '@/components/performance/LCPOptimizer';
import { PerformanceOptimizer } from '@/components/performance/PerformanceOptimizer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

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
  icons: {
    icon: [
      { url: '/five-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/five-icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/five-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/five-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
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
    <html lang='pt-BR' suppressHydrationWarning>
      <head>
        {/* DNS prefetch e preconnect para recursos externos */}
        
        {/* Preconnect para analytics */}
        <link
          rel='preconnect'
          href='https://va.vercel-scripts.com'
          crossOrigin='anonymous'
        />
        <link
          rel='preconnect'
          href='https://c.clarity.ms'
          crossOrigin='anonymous'
        />
      </head>
      <body className={`${inter.className} dark`} suppressHydrationWarning>
        <MicrosoftClarity />
        <LCPOptimizer />
        <PerformanceOptimizer />
        <AppProvider>
          <Navbar />
          <main className='min-h-screen'>{children}</main>
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
