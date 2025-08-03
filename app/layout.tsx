import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { ErrorBoundary } from '@/components/error-boundary';
import { AppProvider } from '@/components/providers/app-provider';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eliassantos.dev'),
  title: {
    default: 'Elias Santos - UX/UI Designer & Desenvolvedor Full Stack',
    template: '%s | Elias Santos'
  },
  description:
    'Portfolio profissional de Elias Santos, especialista em UX/UI Design e desenvolvimento web moderno. Projetos inovadores em React, Next.js e design de interfaces.',
  keywords: [
    'Elias Santos',
    'UX Design',
    'UI Design', 
    'Desenvolvedor Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Design de Interfaces',
    'Desenvolvimento Web',
    'Frontend',
    'Backend',
    'Brasil'
  ],
  authors: [{ name: 'Elias Santos', url: 'https://eliassantos.dev' }],
  creator: 'Elias Santos',
  publisher: 'Elias Santos',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://eliassantos.dev',
    title: 'Elias Santos - UX/UI Designer & Desenvolvedor Full Stack',
    description: 'Portfolio profissional de Elias Santos, especialista em UX/UI Design e desenvolvimento web moderno. Projetos inovadores em React, Next.js e design de interfaces.',
    siteName: 'Elias Santos Portfolio',
    images: [
      {
        url: '/oq-image.png',
        width: 1200,
        height: 630,
        alt: 'Elias Santos - Portfolio Profissional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias Santos - UX/UI Designer & Desenvolvedor Full Stack',
    description: 'Portfolio profissional de Elias Santos, especialista em UX/UI Design e desenvolvimento web moderno.',
    images: ['/oq-image.png'],
    creator: '@eliassantos',
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://eliassantos.dev',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

// Structured Data para SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Elias Santos',
  url: 'https://eliassantos.dev',
  image: 'https://eliassantos.dev/profile-photo.png',
  sameAs: [
    'https://linkedin.com/in/eliassantos',
    'https://github.com/eliassantos',
    'https://twitter.com/eliassantos',
  ],
  jobTitle: 'UX/UI Designer & Desenvolvedor Full Stack',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelancer',
  },
  knowsAbout: [
    'UX Design',
    'UI Design',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'User Experience',
    'Interface Design',
  ],
  description: 'Especialista em UX/UI Design e desenvolvimento web moderno com foco em experiências digitais excepcionais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head>
        {/* ✅ Favicon */}
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon.png' />
        
        {/* ✅ Preload de fontes críticas */}
        <link
          rel='preload'
          href='https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400&display=swap'
          as='style'
        />
        
        {/* ✅ Preload de recursos críticos */}
        <link rel='preload' href='/profile-photo.png' as='image' />
        
        {/* ✅ DNS Prefetch para domínios externos */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//api.fontshare.com' />
        
        {/* ✅ Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <noscript>
          <link
            rel='stylesheet'
            href='https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400&display=swap'
          />
        </noscript>
      </head>
      <body className='font-satoshi dark' suppressHydrationWarning>
        <ErrorBoundary>
          <AppProvider>
            <Navbar />
            {children}
          </AppProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
