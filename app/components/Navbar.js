"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              width={180}
              height={80}
              alt="Logo of TeqTronics"
              className="w-[150px] sm:w-[170px] lg:w-[180px] h-auto object-contain"
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-[15px] font-medium text-gray-800
              hover:text-red-600 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0 after:bg-red-600
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="relative text-[15px] font-medium text-gray-800
              hover:text-red-600 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0 after:bg-red-600
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="relative text-[15px] font-medium text-gray-800
              hover:text-red-600 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0 after:bg-red-600
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="relative text-[15px] font-medium text-gray-800
              hover:text-red-600 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0 after:bg-red-600
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              Contact
            </Link>
            <Link
              href="/projects"
              className="relative text-[15px] font-medium text-gray-800
              hover:text-red-600 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0 after:bg-red-600
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              Projects
            </Link>
             <Link
              href="/blog"
              className="relative text-[15px] font-medium text-gray-800
              hover:text-red-600 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0 after:bg-red-600
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              Blog
            </Link>
            <Link
              href="/feestructure"
              className="relative text-[15px] font-medium text-gray-800
              hover:text-red-600 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0 after:bg-red-600
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              Fee Structure
            </Link>
           

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-7 h-0.5 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />

            <span
              className={`w-7 h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""
                }`}
            />

            <span
              className={`w-7 h-0.5 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
        >
          <div className="flex flex-col items-center gap-5 pt-4">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium hover:text-red-600 transition"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium hover:text-red-600 transition"
            >
              Services
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium hover:text-red-600 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium hover:text-red-600 transition"
            >
              Contact
            </Link>

            {/* <Link
              href="/getstarted"
              onClick={() => setIsOpen(false)}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg transition duration-300">
                Get Started
              </button>
            </Link> */}

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;