"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaSchool, FaChild, FaBook } from "react-icons/fa";

const schoolLevels = [
  {
    title: "Pre-Primary",
    description: "A nurturing environment for early learners, fostering curiosity and foundational skills.",
    href: "/school/pre-primary",
    icon: <FaChild className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Primary School",
    description: "A structured curriculum designed to build knowledge, creativity, and critical thinking.",
    href: "/school/primary",
    icon: <FaBook className="text-blue-500 text-4xl" />,
  },
  {
    title: "Junior Secondary",
    description: "Preparing students for advanced learning with specialized subjects and career-oriented skills.",
    href: "/school/junior-secondary",
    icon: <FaSchool className="text-green-500 text-4xl" />,
  },
];

const SchoolPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gray-900 text-white text-center py-16"
      >
        <h1 className="text-4xl font-bold">Our School</h1>
        <p className="mt-2 text-lg text-gray-300">
          Discover our commitment to excellence in education
        </p>
      </motion.div>

      {/* School Levels Section */}
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {schoolLevels.map((level, index) => (
            <Link key={index} href={level.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer text-center"
              >
                <div className="mb-4 flex justify-center">{level.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-800">{level.title}</h2>
                <p className="text-gray-600 mt-2">{level.description}</p>
                <span className="inline-block mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
                  Learn More
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SchoolPage;
