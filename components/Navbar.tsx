"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-lg py-3" : "bg-white/50 backdrop-blur-lg py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* School Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/school logo.jpg" alt="School Logo" width={50} height={30}  className="h-10 w-auto rounded-full" />
          <h1 className="text-xl font-bold text-gray-800">Jadamy Elite Academy</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg text-gray-700">
          <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-500 transition">About Us</Link></li>

          {/* Dropdown for School */}
          <li className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="flex items-center space-x-2 hover:text-yellow-500 transition"
            >
              <span>School</span>
              <FaChevronDown className={`text-sm transition ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <li>
                  <Link href="/school/pre-primary" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-yellow-100">
                    Pre-Primary
                  </Link>
                </li>
                <li>
                  <Link href="/school/primary" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-yellow-100">
                    Primary
                  </Link>
                </li>
                <li>
                  <Link href="/school/junior-secondary" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-yellow-100">
                    Junior Secondary
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link href="/activities" className="hover:text-yellow-500 transition">Activities</Link></li>
          <li><Link href="/admissions" className="hover:text-yellow-500 transition">Admissions</Link></li>
          <li><Link href="/gallery" className="hover:text-yellow-500 transition">Gallery</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 shadow-lg backdrop-blur-lg">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">About Us</Link></li>

            {/* Mobile Dropdown for School */}
            <li className="relative w-full text-center">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="flex justify-center items-center space-x-2 w-full py-2 text-gray-700 hover:text-yellow-500 transition"
              >
                <span>School</span>
                <FaChevronDown className={`text-sm transition ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <ul className="w-full bg-gray-100 shadow-md rounded-lg py-2">
                  <li>
                    <Link href="/school/pre-primary" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }} className="block px-4 py-2 hover:bg-yellow-100">
                      Pre-Primary
                    </Link>
                  </li>
                  <li>
                    <Link href="/school/primary" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }} className="block px-4 py-2 hover:bg-yellow-100">
                      Primary
                    </Link>
                  </li>
                  <li>
                    <Link href="/school/junior-secondary" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }} className="block px-4 py-2 hover:bg-yellow-100">
                      Junior Secondary
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><Link href="/activities" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Activities</Link></li>
            <li><Link href="/admissions" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Admissions</Link></li>
            <li><Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
