import Link from "next/link";
import { useState, useEffect } from "react";

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
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Jadamy Elite Academy
        </Link>

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
