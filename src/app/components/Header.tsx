// src/components/Header.tsx

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="w-full text-white py-6 top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500">
    {/* Name Section with Multi-Color Gradient Background */}
    <div className="container mx-auto flex justify-between items-center ">
      <div className="text-5xl font-bold ">
        Sidra Naz
      </div>
    </div>

    {/* Navigation Section with Links */}
    <div className="container mx-auto mt-4">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-white hover:text-pink-500">Home</Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-pink-500">About</Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:text-pink-500">Skills</Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-pink-500">Projects</Link>
          </li>
        
        </ul>
      </nav>

      {/* Underline for Navigation */}
      <div className="border-t-2 border-pink-500 mt-4"></div>
    </div>
  </header>
);

export default Header;
