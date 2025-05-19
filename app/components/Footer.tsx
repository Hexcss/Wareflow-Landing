// components/Footer.tsx
import Link from 'next/link'
import { Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-wareflow-dark border-t border-wareflow-primary/20 text-wareflow-gray py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-wareflow-secondary">
                WARE<span className="text-wareflow-primary">FLOW</span>
              </span>
            </Link>
            <p className="text-sm">
              Intelligent IoT Inventory Management for Small & Medium Enterprises.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-wareflow-light mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-wareflow-secondary transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-wareflow-secondary transition-colors">How It Works</Link></li>
              <li><Link href="#contact" className="hover:text-wareflow-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-wareflow-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-wareflow-light mb-4">Connect With Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-wareflow-secondary transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-wareflow-secondary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-wareflow-secondary transition-colors"><Facebook size={24} /></a>
            </div>
            <p className="mt-4 text-sm">
              C. Isabel Torres, 21,<br />
              39011 Santander, Cantabria<br />
              wareflow@management.com
            </p>
          </div>
        </div>
        <div className="border-t border-wareflow-primary/20 pt-8 text-center text-sm">
          <p>© {currentYear} WareFlow. All rights reserved. Developed by WareFlow Team.</p>
        </div>
      </div>
    </footer>
  )
}