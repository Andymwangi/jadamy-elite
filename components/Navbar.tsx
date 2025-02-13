"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center space-x-3">
          <Image src="/schoollogo.jpg" alt="School Logo" width={50} height={50} />
          <Link href="/">
           <h1 className="text-xl font-bold text-gray-800">Jadamy Elite Academy</h1>
        </Link>
       </div>

        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/school" className="hover:text-yellow-500">
              School
            </Link>
          </li>
          <li>
            <Link href="/activities" className="hover:text-yellow-500">
              Activities
            </Link>
          </li>
          <li>
            <Link href="/admissions" className="hover:text-yellow-500">
              Admissions
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-yellow-500">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
