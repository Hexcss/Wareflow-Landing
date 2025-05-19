import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WareFlow - Smart IoT Inventory Management',
  description: 'Revolutionize your inventory with WareFlow\'s intelligent IoT solutions. Real-time tracking, automation, and insights for SMEs.',
  keywords: 'IoT, Inventory Management, RFID, Smart Lockers, WareFlow, SMEs, Logistics, Supply Chain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}