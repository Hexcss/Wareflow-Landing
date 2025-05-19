// components/Navbar.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, BarChart2, Info, Phone } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '#features', label: 'Features', icon: <BarChart2 size={18}/> },
  { href: '#how-it-works', label: 'How It Works', icon: <Info size={18}/> },
  // { href: '#pricing', label: 'Pricing', icon: <DollarSign size={18}/> }, // Add if you have pricing
  { href: '#contact', label: 'Contact', icon: <Phone size={18}/> },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-wareflow-dark/80 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* If you have an SVG or image logo */}
          {/* <Image src="/logo.svg" alt="WareFlow Logo" width={40} height={40} /> */}
          <span className="text-2xl font-bold text-wareflow-secondary">
            WARE<span className="text-wareflow-primary">FLOW</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-wareflow-light hover:text-wareflow-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <motion.a
            href="# "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-wareflow-primary hover:bg-opacity-80 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            Get a Demo
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-wareflow-light focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-wareflow-dark pb-4"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center space-x-2 text-wareflow-light hover:text-wareflow-secondary transition-colors duration-300 py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wareflow-primary hover:bg-opacity-80 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Get a Demo
              </motion.a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}