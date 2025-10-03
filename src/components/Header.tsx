"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo.jpeg"
            alt="Take My Trip Logo"
            width={100}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Home
          </Link>
          <Link href="/tours" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Tours
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-gray-800 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay - Removed background to show app UI */}

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-yellow-300 via-orange-300 to-yellow-400 shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={closeMenu}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-8 pt-24">
            <nav className="flex flex-col space-y-8">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-black hover:text-gray-800 text-2xl font-bold transition-all duration-500 transform hover:translate-x-4 hover:scale-110 border-b-2 border-transparent hover:border-black pb-2"
              >
                Home
              </Link>
              <Link
                href="/tours"
                onClick={closeMenu}
                className="text-black hover:text-gray-800 text-2xl font-bold transition-all duration-500 transform hover:translate-x-4 hover:scale-110 border-b-2 border-transparent hover:border-black pb-2"
              >
                Tours
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-black hover:text-gray-800 text-2xl font-bold transition-all duration-500 transform hover:translate-x-4 hover:scale-110 border-b-2 border-transparent hover:border-black pb-2"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-black hover:text-gray-800 text-2xl font-bold transition-all duration-500 transform hover:translate-x-4 hover:scale-110 border-b-2 border-transparent hover:border-black pb-2"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}