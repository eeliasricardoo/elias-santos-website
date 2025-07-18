import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { DockWrapper } from '@/components/DockWrapper'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elias Santos - Professional Portfolio',
  description: 'Professional portfolio focused on UX/UI Design and modern web development',
  keywords: 'portfolio, UX, UI, design, development, web, Next.js, React',
  authors: [{ name: 'Elias Santos' }],
  creator: 'Elias Santos',
  openGraph: {
    title: 'Elias Santos - Professional Portfolio',
    description: 'Professional portfolio focused on UX/UI Design and modern web development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <DockWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
