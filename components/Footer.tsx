"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section - Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">Jadamy Elite Academy</h2>
          <p className="mt-2 text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            Kagundo-Nairobi Road, Nairobi, Kenya
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            <Link href="mailto:jadamyeliteacademy@gmail.com" className="hover:text-yellow-400 transition">
              jadamyeliteacademy@gmail.com
            </Link>
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <FaPhone className="text-yellow-500" />
            <Link href="tel:+254722440402" className="hover:text-yellow-400 transition">
              +254 722 440 402
            </Link>
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <FaPhone className="text-yellow-500" />
            <Link href="tel:+254720309209" className="hover:text-yellow-400 transition">
              +254 720 309 209
            </Link>
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-yellow-500 transition">About Us</Link></li>
            <li><Link href="/admissions" className="text-gray-400 hover:text-yellow-500 transition">Admissions</Link></li>
            <li><Link href="/school" className="text-gray-400 hover:text-yellow-500 transition">School</Link></li>
            <li><Link href="/gallery" className="text-gray-400 hover:text-yellow-500 transition">Gallery</Link></li>
            <li><Link href="/activities" className="text-gray-400 hover:text-yellow-500 transition">Activities</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex justify-center md:justify-start space-x-4 mt-2">
          <Link href="https://www.facebook.com/JadamyEliteAcademy" target="_blank">
            <FaFacebook className="text-2xl hover:text-blue-500 transition duration-300" />
          </Link>
          <Link href="https://twitter.com/JadamyElite" target="_blank">
            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
          </Link>
          <Link href="https://www.instagram.com/jadamyacademy" target="_blank">
            <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
          </Link>
          <Link href="mailto:jadamyeliteacademy@gmail.com">
            <FaEnvelope className="text-2xl hover:text-yellow-400 transition duration-300" />
          </Link>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-3xl h-56 md:h-64 shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821397929036!2d36.994016675595155!3d-1.2808574356215099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6db30bfe0f5b%3A0x989597ba58182569!2sJADAMY%20ELITE%20ACADEMY%20RUAI!5e0!3m2!1sen!2ske!4v1739460379969!5m2!1sen!2ske"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-gray-400">
        <p>
          © {new Date().getFullYear()} Jadamy Elite Academy. All Rights Reserved. 
          Crafted by{" "}
          <Link href="https://anderson-mwangi.vercel.app/" target="_blank" className="text-yellow-400 hover:text-yellow-500 transition">
            Andy Technologies
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
