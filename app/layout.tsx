import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { ErrorBoundary } from '@/components/error-boundary';
import { AppProvider } from '@/components/providers/app-provider';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Elias Santos - Professional Portfolio',
  description:
    'Professional portfolio focused on UX/UI Design and modern web development',
  keywords: 'portfolio, UX, UI, design, development, web, Next.js, React',
  authors: [{ name: 'Elias Santos' }],
  creator: 'Elias Santos',
  openGraph: {
    title: 'Elias Santos - Professional Portfolio',
    description:
      'Professional portfolio focused on UX/UI Design and modern web development',
    type: 'website',
  },
  // ✅ Otimizações de SEO e performance
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head>
        {/* ✅ Preload de fontes críticas */}
        <link
          rel='preload'
          href='https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400&display=swap'
          as='style'
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
