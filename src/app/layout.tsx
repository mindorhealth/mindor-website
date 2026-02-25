import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'
import { Noto_Sans_Georgian } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  variable: '--font-noto-georgian',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mindor',
  description: 'Mindor - Natural wellness solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ka">
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} ${notoSansGeorgian.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
