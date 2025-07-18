import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Site - Portfolio Profissional',
  description: 'Portfolio profissional com foco em UX/UI Design e desenvolvimento web moderno',
  keywords: 'portfolio, UX, UI, design, desenvolvimento, web, Next.js, React',
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  openGraph: {
    title: 'Meu Site - Portfolio Profissional',
    description: 'Portfolio profissional com foco em UX/UI Design e desenvolvimento web moderno',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
