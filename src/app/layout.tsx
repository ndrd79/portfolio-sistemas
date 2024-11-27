import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TechSolutions - Sistemas Personalizados',
  description: 'Desenvolvemos sistemas personalizados que impulsionam sua produtividade e resultados. Soluções em gestão empresarial, e-commerce e automação.',
  keywords: 'sistemas, software, desenvolvimento, gestão empresarial, e-commerce, automação',
  authors: [{ name: 'TechSolutions' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://your-domain.com',
    siteName: 'TechSolutions',
    title: 'TechSolutions - Sistemas Personalizados',
    description: 'Desenvolvemos sistemas personalizados que impulsionam sua produtividade e resultados.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechSolutions',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-white text-gray-900`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <ChatBot />
          <Footer />
        </div>
      </body>
    </html>
  )
}
