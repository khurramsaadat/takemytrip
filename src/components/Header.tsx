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

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-800 hover:text-blue-600 text-xl font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/tours"
                onClick={closeMenu}
                className="text-gray-800 hover:text-blue-600 text-xl font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
              >
                Tours
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-gray-800 hover:text-blue-600 text-xl font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-gray-800 hover:text-blue-600 text-xl font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
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