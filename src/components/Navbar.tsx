'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <div className="flex items-center space-x-2">
                
                <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">SoftSell</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="#how-it-works" className="text-sm hover:text-indigo-600 transition">How It Works</Link>
            <Link href="#features" className="text-sm hover:text-indigo-600 transition">Features</Link>
            <Link href="#about" className="text-sm hover:text-indigo-600 transition">About</Link>
            <Link href="#contact" className="text-sm hover:text-indigo-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 shadow-md">
          <Link href="#how-it-works" className="block text-sm hover:text-indigo-600">How It Works</Link>
          <Link href="#features" className="block text-sm hover:text-indigo-600">Features</Link>
          <Link href="#about" className="block text-sm hover:text-indigo-600">About</Link>
          <Link href="#contact" className="block text-sm hover:text-indigo-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
