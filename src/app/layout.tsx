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
  title: 'TechSolutions - Sistemas Sob Medida',
  description: 'Desenvolvemos sistemas personalizados para seu negócio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
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
