"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex w-100 items-center space-x-2">
            <div className=" flex w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" width={64} height={64} />
            </div>
            <span className="text-lg sm:text-xl font-bold  xs:block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Face Wash Fox
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Trang chủ
            </a>
            <a
              href="#technology"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Công nghệ
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Lợi ích
            </a>
            <a
              href="#booking"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Đặt lịch
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#booking"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all text-sm sm:text-base"
            >
              Đặt lịch ngay
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <a
                href="#home"
                className="text-gray-600 hover:text-pink-600 transition-colors text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </a>
              <a
                href="#technology"
                className="text-gray-600 hover:text-pink-600 transition-colors text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Công nghệ
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-pink-600 transition-colors text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Lợi ích
              </a>
              <a
                href="#booking"
                className="text-gray-600 hover:text-pink-600 transition-colors text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Đặt lịch
              </a>
              <a
                href="#booking"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all w-fit text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Đặt lịch ngay
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
