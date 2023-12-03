import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react';
 
export const viewport: Viewport = {
  themeColor: 'black',
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ricky Cheuk',
  description: 'Ricky Cheuk, Software Engineer',
  keywords: ["Ricky", "Ricky Cheuk", "Software Engineer"],
  twitter: {
    card: "summary_large_image",
    title: "Ricky Cheuk",
    description: "Ricky Cheuk, Software Engineer",
    creator: "@rickykccheuk",
  },
  openGraph: {
    type: "website",
    url: "https://rickycheuk.com",
    title: "Ricky Cheuk",
    description: "Ricky Cheuk, Software Engineer",
    images: [
      {
        url: "https://rickycheuk.com/api/og",
        alt: "Ricky Cheuk",
      },
    ],
  },
  // metadataBase: new URL("https://rickycheuk.com"),
  icons: "/logo.webp",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="stars"></div>
        <div className="twinkling"></div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
