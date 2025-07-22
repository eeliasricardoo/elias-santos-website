import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { ErrorBoundary } from '@/components/error-boundary';

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
      <body className='font-satoshi dark' suppressHydrationWarning>
        <ErrorBoundary>
          <Navbar />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
