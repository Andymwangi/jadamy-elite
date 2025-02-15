"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

// Animation Variants
const fadeInSlide = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const ContactPage = () => {
  return (
    <main className="pt-20 min-h-screen bg-[#0A1F44] py-12 px-4 md:px-8 lg:px-16">
      {/* Page Header */}
      <motion.section
        className="text-center mb-12"
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-4xl font-bold text-gray-600">Get in Touch</h1>
        <p className="mt-4 text-lg text-white">
          We'd love to hear from you! Reach out with any inquiries or visit us at Jadamy Elite Academy.
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.div
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <ContactForm />
      </motion.div>

      {/* Contact Details Section */}
      <motion.div
        className="mt-12 bg-white shadow-lg rounded-lg p-8"
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Our Contact Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Phone Contact */}
          <motion.div
            className="flex flex-col items-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaPhoneAlt className="text-yellow-500 text-3xl" />
            <h3 className="font-medium text-lg mt-2">Phone</h3>
            <Link href="tel:+254722440402" className="flex items-center space-x-2 mt-1 text-blue-600 hover:underline">
              <FaPhoneAlt className="text-yellow-500" />
              <span>+254 722 440 402</span>
            </Link>
            <Link href="tel:+254720309209" className="flex items-center space-x-2 text-blue-600 hover:underline">
              <FaPhoneAlt className="text-yellow-500" />
              <span>+254 720 309 209</span>
            </Link>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            className="flex flex-col items-center"
            variants={fadeInSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaEnvelope className="text-yellow-500 text-3xl" />
            <h3 className="font-medium text-lg mt-2">Email</h3>
            <Link href="mailto:info@jadamyeliteacademy@gmail.com" className="flex items-center space-x-2 mt-1 text-blue-600 hover:underline">
              <FaEnvelope className="text-yellow-500" />
              <span>info@jadamyeliteacademy@gmail.com</span>
            </Link>
            <Link href="mailto:support@jadamyeliteacademy@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:underline">
              <FaEnvelope className="text-yellow-500" />
              <span>support@jadamyeliteacademy@gmail.com</span>
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex flex-col items-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
            <h3 className="font-medium text-lg mt-2">Location</h3>
            <Link href="https://goo.gl/maps/d3WfsHZTpkF2" target="_blank" className="flex items-center space-x-2 mt-1 text-blue-600 hover:underline">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span className="text-center">
                Kagundo-Nairobi Road, <br /> Ruai, Nairobi, Kenya
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Google Maps Section */}
      <motion.div
        className="mt-12 flex justify-center"
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full max-w-4xl h-64 md:h-80 lg:h-96 shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821397929036!2d36.994016675595155!3d-1.2808574356215099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6db30bfe0f5b%3A0x989597ba58182569!2sJADAMY%20ELITE%20ACADEMY%20RUAI!5e0!3m2!1sen!2ske!4v1739460379969!5m2!1sen!2ske"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-600">Visit or Contact Us</h2>
        <p className="text-gray-500 mt-2">
          Need more information? Fill out the form, give us a call, or visit us in person.
        </p>
        <div className="mt-6">
          <Link href="/admissions">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Enroll Now
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactPage;
