import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/Navbar';
import { AppProvider } from '@/components/providers/app-provider';
import { MicrosoftClarity } from '@/components/analytics/MicrosoftClarity';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elias Ricardo - Desenvolvedor Full Stack & UX Designer',
  description:
    'Desenvolvedor Full Stack e UX Designer apaixonado por criar experiências digitais excepcionais. Especializado em React, Next.js, TypeScript e design centrado no usuário.',
  keywords: [
    'desenvolvedor full stack',
    'ux designer',
    'react',
    'next.js',
    'typescript',
    'portfolio',
    'frontend',
    'backend',
    'design',
  ],
  authors: [{ name: 'Elias Ricardo' }],
  creator: 'Elias Ricardo',
  publisher: 'Elias Ricardo',
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
    locale: 'pt_BR',
    url: 'https://eliasricardo.com',
    title: 'Elias Ricardo - Desenvolvedor Full Stack & UX Designer',
    description:
      'Desenvolvedor Full Stack e UX Designer apaixonado por criar experiências digitais excepcionais. Especializado em React, Next.js, TypeScript e design centrado no usuário.',
    siteName: 'Elias Ricardo Portfolio',
    images: [
      {
        url: '/oq-image.png',
        width: 1200,
        height: 630,
        alt: 'Elias Ricardo - Desenvolvedor Full Stack & UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias Ricardo - Desenvolvedor Full Stack & UX Designer',
    description:
      'Desenvolvedor Full Stack e UX Designer apaixonado por criar experiências digitais excepcionais. Especializado em React, Next.js, TypeScript e design centrado no usuário.',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} dark`} suppressHydrationWarning>
        <MicrosoftClarity />
        <AppProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
