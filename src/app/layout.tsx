import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import MainMenu from '@/components/MainMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deutsch Lernen - Learn German',
  description: 'Learn German with our comprehensive language learning platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Providers>
          <MainMenu />
          {children}
        </Providers>
      </body>
    </html>
  )
}
