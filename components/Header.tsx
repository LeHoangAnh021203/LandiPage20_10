"use client";

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
             <Image src="/logo.png" alt="Logo" width={64} height={64}/>
            </div>
            <span className="text-xl font-bold text-gray-900">Công Nghệ Meso</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-pink-600 transition-colors">
              Trang chủ
            </a>
            <a href="#technology" className="text-gray-600 hover:text-pink-600 transition-colors">
              Công nghệ
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-pink-600 transition-colors">
              Lợi ích
            </a>
            <a href="#booking" className="text-gray-600 hover:text-pink-600 transition-colors">
              Đặt lịch
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="#booking" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all">
              Đặt lịch ngay
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-pink-600 transition-colors">
                Trang chủ
              </a>
              <a href="#technology" className="text-gray-600 hover:text-pink-600 transition-colors">
                Công nghệ
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-pink-600 transition-colors">
                Lợi ích
              </a>
              <a href="#booking" className="text-gray-600 hover:text-pink-600 transition-colors">
                Đặt lịch
              </a>
              <a href="#booking" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all w-fit">
                Đặt lịch ngay
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
